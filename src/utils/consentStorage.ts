import { ConsentPreferences, DeviceAuditInfo } from '../types';

const CONSENT_STORAGE_KEY = 'voyage_telemetry_consent_dossier';
const CONSENT_ACCEPTED_FLAG = 'voyage_consent_is_fully_accepted';

export function getDeviceAudit(): DeviceAuditInfo {
  if (typeof window === 'undefined') {
    return {
      browser: 'SSR / Unknown',
      os: 'Unknown',
      resolution: '1920x1080',
      language: 'en-US',
      timezone: 'UTC',
    };
  }

  const userAgent = navigator.userAgent;
  let browser = 'Chrome/Chromium';
  if (userAgent.includes('Firefox')) browser = 'Mozilla Firefox';
  else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) browser = 'Apple Safari';
  else if (userAgent.includes('Edg')) browser = 'Microsoft Edge';
  else if (userAgent.includes('OPR') || userAgent.includes('Opera')) browser = 'Opera';

  let os = 'Desktop Platform';
  if (userAgent.includes('Android')) os = 'Android Mobile';
  else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'Apple iOS';
  else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS')) os = 'macOS';
  else if (userAgent.includes('Windows')) os = 'Microsoft Windows';
  else if (userAgent.includes('Linux')) os = 'Linux Enterprise';

  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  const connectionType = connection ? `${connection.effectiveType || connection.type || '4G/Broadband'} (${connection.downlink ? connection.downlink + 'Mbps' : 'High Speed'})` : 'Broadband / Wi-Fi';

  return {
    browser,
    os,
    resolution: `${window.screen.width}x${window.screen.height} (DPR ${window.devicePixelRatio || 1})`,
    language: navigator.language || 'en',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata',
    hardwareConcurrency: navigator.hardwareConcurrency || 8,
    connectionType,
  };
}

export function getStoredConsent(): ConsentPreferences | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export function isConsentPermanentlyAccepted(): boolean {
  try {
    return localStorage.getItem(CONSENT_ACCEPTED_FLAG) === 'true';
  } catch (e) {
    return false;
  }
}

export function saveConsentDecision(
  decision: 'accepted_all' | 'rejected_strict' | 'customized',
  customOptions?: {
    notifications?: boolean;
    telemetryAndCache?: boolean;
    eventProposalStorage?: boolean;
  }
): ConsentPreferences {
  const existing = getStoredConsent();
  const clientId = existing?.clientId || `VYG-AUTH-${Math.floor(100000 + Math.random() * 900000)}`;
  const now = new Date().toISOString();

  let notifState: 'granted' | 'denied' | 'default' | 'unsupported' = 'unsupported';
  if (typeof window !== 'undefined' && 'Notification' in window) {
    notifState = Notification.permission;
  }

  const payload: ConsentPreferences = {
    clientId,
    status: decision,
    essential: true,
    notifications: decision === 'accepted_all' ? true : decision === 'rejected_strict' ? false : (customOptions?.notifications ?? false),
    telemetryAndCache: decision === 'accepted_all' ? true : decision === 'rejected_strict' ? false : (customOptions?.telemetryAndCache ?? false),
    eventProposalStorage: decision === 'accepted_all' ? true : decision === 'rejected_strict' ? false : (customOptions?.eventProposalStorage ?? false),
    notificationPermissionState: notifState,
    deviceAudit: getDeviceAudit(),
    timestamp: existing?.timestamp || now,
    lastUpdated: now,
  };

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
    
    // CRITICAL USER REQUIREMENT:
    // "ager user block kr de ya cookies mn reject pr click kr de toh jb dobara aaye tb... wo baar show kre agr user reject krre toh"
    // If the user rejects strict, we intentionally DO NOT set CONSENT_ACCEPTED_FLAG,
    // so on the next page reload or subsequent session it prompts them again!
    if (decision === 'accepted_all' || (decision === 'customized' && payload.notifications && payload.telemetryAndCache)) {
      localStorage.setItem(CONSENT_ACCEPTED_FLAG, 'true');
    } else {
      localStorage.removeItem(CONSENT_ACCEPTED_FLAG);
    }
  } catch (e) {
    console.error('Failed to write consent to local storage', e);
  }

  return payload;
}

export async function requestSystemNotificationPermission(): Promise<NotificationPermission | 'unsupported'> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'unsupported';
  }

  try {
    const permission = await Notification.requestPermission();
    // Update stored record with latest permission
    const existing = getStoredConsent();
    if (existing) {
      existing.notificationPermissionState = permission;
      existing.notifications = permission === 'granted';
      existing.lastUpdated = new Date().toISOString();
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(existing));
    }
    return permission;
  } catch (error) {
    console.warn('System notification permission request failed or was dismissed', error);
    return 'denied';
  }
}

export function dispatchSystemNotification(title: string, body: string): boolean {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return false;
  }

  if (Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body,
        icon: '/assets/aistudio/image_aef352cb.png',
        badge: '/assets/aistudio/image_aef352cb.png',
        tag: 'voyage-system-alert',
      });
      return true;
    } catch (e) {
      console.warn('Failed to fire desktop notification', e);
      return false;
    }
  }
  return false;
}

export function revokeAllConsent(): void {
  try {
    localStorage.removeItem(CONSENT_ACCEPTED_FLAG);
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch (e) {
    console.error('Error clearing consent', e);
  }
}
