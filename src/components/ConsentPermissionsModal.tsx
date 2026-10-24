import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Bell, HardDrive, Cpu, Check, 
  X, ChevronDown, ChevronUp, ArrowRight, Sparkles, AlertCircle 
} from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { 
  getDeviceAudit, saveConsentDecision, 
  requestSystemNotificationPermission, dispatchSystemNotification 
} from '../utils/consentStorage';
import { ConsentPreferences, DeviceAuditInfo } from '../types';

interface ConsentPermissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsentUpdated: (consent: ConsentPreferences) => void;
  onOpenDossier: () => void;
}

export const ConsentPermissionsModal: React.FC<ConsentPermissionsModalProps> = ({
  isOpen,
  onClose,
  onConsentUpdated,
  onOpenDossier,
}) => {
  if (!isOpen) return null;

  const [deviceInfo, setDeviceInfo] = useState<DeviceAuditInfo | null>(null);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [allowNotifications, setAllowNotifications] = useState(true);
  const [allowTelemetry, setAllowTelemetry] = useState(true);
  const [allowProposalStorage, setAllowProposalStorage] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setDeviceInfo(getDeviceAudit());
  }, []);

  const handleAcceptAll = async () => {
    setIsProcessing(true);
    
    // Request real browser system notification permission
    const notifPermission = await requestSystemNotificationPermission();

    // Save decision
    const saved = saveConsentDecision('accepted_all');
    onConsentUpdated(saved);

    // If permission granted, send real system test notification
    if (notifPermission === 'granted') {
      dispatchSystemNotification(
        'VOYAGE Flight Crew Online',
        'System telemetry and operational hackathon alerts authorized.'
      );
    }

    setIsProcessing(false);
    onClose();
  };

  const handleRejectStrict = () => {
    // Save strict rejection (does not set permanent flag, so it re-prompts on subsequent visits)
    const saved = saveConsentDecision('rejected_strict');
    onConsentUpdated(saved);
    onClose();
  };

  const handleSaveCustom = async () => {
    setIsProcessing(true);

    if (allowNotifications) {
      const notifPermission = await requestSystemNotificationPermission();
      if (notifPermission === 'granted') {
        dispatchSystemNotification(
          'VOYAGE Flight Crew Online',
          'Custom operational alert channel established.'
        );
      }
    }

    const saved = saveConsentDecision('customized', {
      notifications: allowNotifications,
      telemetryAndCache: allowTelemetry,
      eventProposalStorage: allowProposalStorage,
    });

    onConsentUpdated(saved);
    setIsProcessing(false);
    onClose();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 md:p-6 flex justify-center pointer-events-none animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div 
        className="pointer-events-auto w-full max-w-4xl bg-zinc-950/95 backdrop-blur-3xl border border-white/20 rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(0,0,0,0.95)] glow-card-featured text-zinc-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Badge & Client Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 p-1 flex items-center justify-center shrink-0 shadow-md">
              <VoyageLogo size="xs" animated={true} />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold block">
                  SYSTEM SECURITY & TELEMETRY SHIELD
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-tight">
                System-Level Permissions, Cookies & Push Notification Authorization
              </h3>
            </div>
          </div>

          {deviceInfo && (
            <div className="hidden md:flex items-center space-x-2 font-mono text-[10px] text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0">
              <span className="text-white font-bold">{deviceInfo.os}</span>
              <span>·</span>
              <span>{deviceInfo.browser}</span>
              <span>·</span>
              <span className="text-emerald-400">Low-Latency Edge</span>
            </div>
          )}
        </div>

        {/* Narrative Abstract */}
        <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-5">
          VOYAGE operates enterprise event management infrastructure. To ensure uninterrupted live War-Room status updates, secure client SOW caching, and dual-WAN ping verification, we request authorization for system-level notifications and local operational storage.
        </p>

        {/* 4 Feature Toggles / Protocol Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5 font-mono text-xs">
          {/* Item 1: Essential Core */}
          <div className="bg-black/70 p-3 rounded-2xl border border-white/10 flex flex-col justify-between glow-card">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="p-1 rounded-md bg-white/10 text-white">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] bg-white text-black font-bold px-1.5 py-0.2 rounded-full">
                  MANDATORY
                </span>
              </div>
              <h4 className="text-xs font-display font-bold text-white uppercase">
                Core Operations
              </h4>
              <p className="text-[10px] text-zinc-400 font-sans mt-0.5 leading-tight">
                Session tokens, anti-DDoS, and SSL security.
              </p>
            </div>
            <div className="mt-2 text-[10px] text-emerald-400 font-bold flex items-center space-x-1">
              <Check className="w-3 h-3" />
              <span>Always Armed</span>
            </div>
          </div>

          {/* Item 2: System Push Notifications */}
          <div className={`p-3 rounded-2xl border transition flex flex-col justify-between ${
            allowNotifications ? 'bg-zinc-900/80 border-white/30 glow-card' : 'bg-black/40 border-white/10 opacity-70'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="p-1 rounded-md bg-white/10 text-emerald-400">
                  <Bell className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] text-zinc-400">SYSTEM PUSH</span>
              </div>
              <h4 className="text-xs font-display font-bold text-white uppercase">
                Push Notifications
              </h4>
              <p className="text-[10px] text-zinc-400 font-sans mt-0.5 leading-tight">
                Live hackathon alerts, MLH sanctioning dispatch.
              </p>
            </div>
            {showCustomizer ? (
              <label className="mt-2 flex items-center space-x-1.5 cursor-pointer text-[10px] text-zinc-300">
                <input
                  type="checkbox"
                  checked={allowNotifications}
                  onChange={(e) => setAllowNotifications(e.target.checked)}
                  className="rounded border-zinc-700 text-white focus:ring-0"
                />
                <span>Authorize</span>
              </label>
            ) : (
              <div className="mt-2 text-[10px] text-zinc-400">
                {allowNotifications ? 'Enabled' : 'Disabled'}
              </div>
            )}
          </div>

          {/* Item 3: Local Caching & SOW State */}
          <div className={`p-3 rounded-2xl border transition flex flex-col justify-between ${
            allowTelemetry ? 'bg-zinc-900/80 border-white/30 glow-card' : 'bg-black/40 border-white/10 opacity-70'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="p-1 rounded-md bg-white/10 text-white">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] text-zinc-400">TELEMETRY</span>
              </div>
              <h4 className="text-xs font-display font-bold text-white uppercase">
                Telemetry & Ping
              </h4>
              <p className="text-[10px] text-zinc-400 font-sans mt-0.5 leading-tight">
                Dual-WAN failover latency & edge network routing.
              </p>
            </div>
            {showCustomizer ? (
              <label className="mt-2 flex items-center space-x-1.5 cursor-pointer text-[10px] text-zinc-300">
                <input
                  type="checkbox"
                  checked={allowTelemetry}
                  onChange={(e) => setAllowTelemetry(e.target.checked)}
                  className="rounded border-zinc-700 text-white focus:ring-0"
                />
                <span>Authorize</span>
              </label>
            ) : (
              <div className="mt-2 text-[10px] text-zinc-400">
                {allowTelemetry ? 'Enabled' : 'Disabled'}
              </div>
            )}
          </div>

          {/* Item 4: Proposal Storage */}
          <div className={`p-3 rounded-2xl border transition flex flex-col justify-between ${
            allowProposalStorage ? 'bg-zinc-900/80 border-white/30 glow-card' : 'bg-black/40 border-white/10 opacity-70'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="p-1 rounded-md bg-white/10 text-white">
                  <HardDrive className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] text-zinc-400">LOCAL CACHE</span>
              </div>
              <h4 className="text-xs font-display font-bold text-white uppercase">
                RFP Draft Memory
              </h4>
              <p className="text-[10px] text-zinc-400 font-sans mt-0.5 leading-tight">
                Auto-saves budget estimates across tab closes.
              </p>
            </div>
            {showCustomizer ? (
              <label className="mt-2 flex items-center space-x-1.5 cursor-pointer text-[10px] text-zinc-300">
                <input
                  type="checkbox"
                  checked={allowProposalStorage}
                  onChange={(e) => setAllowProposalStorage(e.target.checked)}
                  className="rounded border-zinc-700 text-white focus:ring-0"
                />
                <span>Authorize</span>
              </label>
            ) : (
              <div className="mt-2 text-[10px] text-zinc-400">
                {allowProposalStorage ? 'Enabled' : 'Disabled'}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10 font-mono text-xs">
          <div className="flex items-center space-x-3 text-zinc-400 order-2 sm:order-1">
            <button
              onClick={() => setShowCustomizer(!showCustomizer)}
              className="hover:text-white transition flex items-center space-x-1 underline underline-offset-4 cursor-pointer text-[11px]"
            >
              <span>{showCustomizer ? 'Hide Protocol Customizer' : 'Customize Protocols'}</span>
              {showCustomizer ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            <span>·</span>
            <button
              onClick={onOpenDossier}
              className="hover:text-white transition cursor-pointer text-[11px]"
            >
              View Telemetry Dossier
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto order-1 sm:order-2">
            {/* Reject Non-Essential (Strict Mode) - Prompts again on reload per user request */}
            <button
              onClick={handleRejectStrict}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/20 hover:border-white/40 text-zinc-300 hover:text-white transition cursor-pointer text-center text-xs"
              title="Decline non-essential permissions. System will prompt again on subsequent visits."
            >
              Reject Non-Essential
            </button>

            {showCustomizer ? (
              <button
                onClick={handleSaveCustom}
                disabled={isProcessing}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold uppercase tracking-wider transition cursor-pointer shadow-lg text-center text-xs flex items-center justify-center space-x-1.5"
              >
                <span>Save Protocol Choices</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                disabled={isProcessing}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold uppercase tracking-wider transition cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.3)] text-center text-xs flex items-center justify-center space-x-1.5 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Accept All & Authorize System</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
