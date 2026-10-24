import React, { useState } from 'react';
import { 
  X, ShieldCheck, Bell, HardDrive, Cpu, Terminal, 
  RotateCcw, Send, Download, CheckCircle2, AlertTriangle, Sparkles 
} from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { 
  getStoredConsent, getDeviceAudit, revokeAllConsent, 
  dispatchSystemNotification, requestSystemNotificationPermission 
} from '../utils/consentStorage';
import { ConsentPreferences } from '../types';

interface ConsentTelemetryDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReopenPrompt: () => void;
}

export const ConsentTelemetryDossierModal: React.FC<ConsentTelemetryDossierModalProps> = ({
  isOpen,
  onClose,
  onReopenPrompt,
}) => {
  if (!isOpen) return null;

  const [notificationTestSent, setNotificationTestSent] = useState(false);
  const [notificationError, setNotificationError] = useState('');
  const consentData: ConsentPreferences | null = getStoredConsent();
  const deviceAudit = consentData?.deviceAudit || getDeviceAudit();

  const handleTestNotification = async () => {
    setNotificationError('');
    setNotificationTestSent(false);

    if (typeof window === 'undefined' || !('Notification' in window)) {
      setNotificationError('Web Push Notifications are not supported by this browser environment.');
      return;
    }

    if (Notification.permission !== 'granted') {
      const result = await requestSystemNotificationPermission();
      if (result !== 'granted') {
        setNotificationError(`Notification permission is currently "${result}". Please allow notifications in your browser settings.`);
        return;
      }
    }

    const fired = dispatchSystemNotification(
      'VOYAGE Operations Alert',
      'Test broadcast successful. Live hackathon schedule alerts and telemetry channel are fully armed.'
    );

    if (fired) {
      setNotificationTestSent(true);
      setTimeout(() => setNotificationTestSent(false), 4000);
    } else {
      setNotificationError('Notification dispatch was prevented by browser security sandbox.');
    }
  };

  const handleResetPreferences = () => {
    revokeAllConsent();
    onClose();
    onReopenPrompt();
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(consentData || { deviceAudit }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `voyage_telemetry_receipt_${consentData?.clientId || 'client'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-950 border border-white/20 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-zinc-200 glow-card-featured"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-black/60 shrink-0">
          <div className="flex items-center space-x-3 truncate">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 p-1 flex items-center justify-center shrink-0">
              <VoyageLogo size="xs" animated={false} />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block truncate">
                Cryptographic Telemetry Audit
              </span>
              <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-tight truncate">
                Client Privacy, Cookies & System Permissions Dossier
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleExportJSON}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/15 text-xs font-mono text-zinc-300 hover:text-white transition cursor-pointer"
              title="Export consent receipt as JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Audit</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 font-mono text-xs bg-black/40">
          {/* Status Plate */}
          <div className="border border-white/15 rounded-2xl p-5 bg-zinc-950 glow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-1">
                Authorization Token:
              </span>
              <div className="text-base sm:text-lg text-white font-bold tracking-wider">
                {consentData?.clientId || 'UNCOMMITTED_SESSION'}
              </div>
              <p className="text-[11px] text-zinc-400 font-sans mt-0.5">
                Last Synchronized: {consentData?.lastUpdated ? new Date(consentData.lastUpdated).toLocaleString() : 'Pending Confirmation'}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-1">
                Current Authorization Stance:
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold inline-block ${
                consentData?.status === 'accepted_all'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : consentData?.status === 'rejected_strict'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-zinc-800 text-zinc-300 border border-white/20'
              }`}>
                {consentData?.status === 'accepted_all' ? 'FULLY AUTHORIZED (ENTERPRISE)' : consentData?.status === 'rejected_strict' ? 'STRICT PRIVACY (NON-ESSENTIAL BLOCKED)' : 'UNCONFIGURED (DEFAULT)'}
              </span>
            </div>
          </div>

          {/* Test Notification Action Plate */}
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/15 glow-card space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-display font-bold text-white uppercase flex items-center space-x-2">
                  <Bell className="w-4 h-4 text-emerald-400" />
                  <span>Push Notification Channel Verifier</span>
                </h4>
                <p className="text-[11px] text-zinc-400 font-sans mt-0.5">
                  Verify that your operating system and browser receive mission-critical hackathon announcements and War-Room dispatch alerts.
                </p>
              </div>

              <button
                onClick={handleTestNotification}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-black font-mono font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition shadow-lg flex items-center justify-center space-x-2 cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Dispatch Test Alert</span>
              </button>
            </div>

            {notificationTestSent && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>System notification dispatched to OS tray successfully.</span>
              </div>
            )}

            {notificationError && (
              <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{notificationError}</span>
              </div>
            )}
          </div>

          {/* Device & Client Telemetry Matrix */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold flex items-center space-x-2">
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              <span>Captured Client Environment Parameters</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 glow-card space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Operating System</span>
                <span className="text-white font-bold">{deviceAudit.os}</span>
              </div>

              <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 glow-card space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Browser Engine</span>
                <span className="text-white font-bold">{deviceAudit.browser}</span>
              </div>

              <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 glow-card space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Display Resolution</span>
                <span className="text-white font-bold">{deviceAudit.resolution}</span>
              </div>

              <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 glow-card space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Timezone & Locale</span>
                <span className="text-white font-bold">{deviceAudit.timezone} ({deviceAudit.language})</span>
              </div>

              <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 glow-card space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Network Uplink Type</span>
                <span className="text-white font-bold">{deviceAudit.connectionType}</span>
              </div>

              <div className="bg-black/60 p-3.5 rounded-xl border border-white/10 glow-card space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Hardware Threads</span>
                <span className="text-white font-bold">{deviceAudit.hardwareConcurrency || 8} Logical Cores</span>
              </div>
            </div>
          </div>

          {/* Granular Permission Verification */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Permission Vectors</span>
            </h4>

            <div className="divide-y divide-white/10 border border-white/10 rounded-2xl bg-zinc-950 overflow-hidden">
              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">1. Essential Infrastructure & Session JWT</span>
                  <span className="text-[10px] text-zinc-400">Strictly required for anti-DDoS, SSL certificates, and state routing.</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400">ALWAYS PERMITTED</span>
              </div>

              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">2. Web Push Notifications</span>
                  <span className="text-[10px] text-zinc-400">Browser notification permission status.</span>
                </div>
                <span className={`text-[10px] font-bold ${
                  typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted'
                    ? 'text-emerald-400'
                    : 'text-amber-400'
                }`}>
                  {typeof window !== 'undefined' && 'Notification' in window ? Notification.permission.toUpperCase() : 'UNSUPPORTED'}
                </span>
              </div>

              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">3. Proposal Draft & SOW Local Cache</span>
                  <span className="text-[10px] text-zinc-400">Remembers configured attendees, add-ons, and draft proposals in local storage.</span>
                </div>
                <span className={`text-[10px] font-bold ${consentData?.eventProposalStorage ? 'text-emerald-400' : 'text-zinc-500'}`}>
                  {consentData?.eventProposalStorage ? 'ACTIVE' : 'INACTIVE'}
                </span>
              </div>

              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold block">4. Dual-WAN Latency Telemetry</span>
                  <span className="text-[10px] text-zinc-400">Edge network round-trip timing and failover health checks.</span>
                </div>
                <span className={`text-[10px] font-bold ${consentData?.telemetryAndCache ? 'text-emerald-400' : 'text-zinc-500'}`}>
                  {consentData?.telemetryAndCache ? 'ACTIVE' : 'INACTIVE'}
                </span>
              </div>
            </div>
          </div>

          {/* Reset / Revoke Section */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-zinc-400 font-sans">
              Revoking consent purges stored client tokens and triggers the system authorization console.
            </p>

            <button
              onClick={handleResetPreferences}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-red-500/30 hover:border-red-500 text-red-400 hover:text-red-300 bg-red-950/20 text-xs transition flex items-center justify-center space-x-1.5 cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Revoke Consent & Re-Prompt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
