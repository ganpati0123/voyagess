import React, { useState } from 'react';
import { X, Check, Calculator, Printer, ArrowRight, ShieldCheck, FileText, ChevronRight } from 'lucide-react';
import { PACKAGES, ADDONS, VOYAGE_META } from '../data/blueprintData';
import { ServiceTier } from '../types';

interface ProposalBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: ServiceTier;
  onProceedToRFP: (config: {
    packageId: ServiceTier;
    attendees: number;
    duration: string;
    addons: string[];
    estimatedTotal: number;
  }) => void;
}

export const ProposalBuilderModal: React.FC<ProposalBuilderModalProps> = ({
  isOpen,
  onClose,
  initialPackage = 'hackathon',
  onProceedToRFP,
}) => {
  if (!isOpen) return null;

  const [selectedPkgId, setSelectedPkgId] = useState<ServiceTier>(initialPackage);
  const [attendeeScale, setAttendeeScale] = useState<number>(350);
  const [duration, setDuration] = useState<'1-day' | '24-hour' | '48-hour' | 'multi-day'>('24-hour');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([
    'addon-portal',
    'addon-media',
  ]);
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);

  const currentPkg = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[2];

  // Price calculations based on Section 10 of PDF
  let baseFee = currentPkg.basePriceINR;

  // Scale multiplier based on attendee volume
  let attendeeMultiplier = 1;
  if (attendeeScale > 200 && attendeeScale <= 500) attendeeMultiplier = 1.25;
  else if (attendeeScale > 500 && attendeeScale <= 1000) attendeeMultiplier = 1.6;
  else if (attendeeScale > 1000) attendeeMultiplier = 2.1;

  // Duration multiplier
  let durationMultiplier = 1;
  if (duration === '24-hour') durationMultiplier = 1.15;
  else if (duration === '48-hour') durationMultiplier = 1.4;
  else if (duration === 'multi-day') durationMultiplier = 1.65;

  const adjustedManagementFee = Math.round(baseFee * attendeeMultiplier * durationMultiplier / 1000) * 1000;

  // Addons total
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const item = ADDONS.find((a) => a.id === id);
    return sum + (item ? item.priceINR : 0);
  }, 0);

  const grandTotal = adjustedManagementFee + addonsTotal;

  // Financial allocations (Section 10.1 of PDF)
  const labourEstimate = Math.round(grandTotal * 0.38);
  const marketingTools = Math.round(grandTotal * 0.12);
  const contingency = Math.round(grandTotal * 0.10);
  const managementContribution = grandTotal - (labourEstimate + marketingTools + contingency);

  // Payment Schedule (Section 10.2 of PDF)
  const advance50 = Math.round(grandTotal * 0.50);
  const milestone30 = Math.round(grandTotal * 0.30);
  const closeout20 = Math.round(grandTotal * 0.20);

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleProceed = () => {
    onProceedToRFP({
      packageId: selectedPkgId,
      attendees: attendeeScale,
      duration,
      addons: selectedAddonIds,
      estimatedTotal: grandTotal,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-zinc-950 border border-white/20 rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-6 bg-black border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/20 p-1 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block">
                Section 10 • Pricing & Financial Controls
              </span>
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                Statement of Work (SOW) & Fee Estimator
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPrintMode(!isPrintMode)}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/15 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/40 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isPrintMode ? 'Edit Configuration' : 'Print SOW View'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: SOW Document or Interactive Configurator */}
        {isPrintMode ? (
          /* SOW PRINTABLE PREVIEW */
          <div className="p-8 overflow-y-auto space-y-6 text-xs font-mono text-zinc-300 bg-black">
            <div className="border border-white/20 p-8 rounded-2xl bg-zinc-950 space-y-6">
              <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <div>
                  <h1 className="text-2xl font-display font-black text-white tracking-wider">VOYAGE</h1>
                  <p className="text-zinc-400">{VOYAGE_META.legalDomain} • {VOYAGE_META.tagline}</p>
                  <p className="text-zinc-500 text-[10px] mt-1">STATEMENT OF WORK (SOW) & PROPOSAL ESTIMATE • REF #VYG-SOW-{Date.now().toString().slice(-4)}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">STATUS: DRAFT PROPOSAL</p>
                  <p className="text-zinc-400">Date: {new Date().toLocaleDateString()}</p>
                  <p className="text-zinc-400">Validity: 14 Days from issuance</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase mb-2">1. Scope of Engagement</h4>
                <p className="text-zinc-300 font-sans leading-relaxed">
                  VOYAGE is contracted to deliver comprehensive technical event management for a <strong>{currentPkg.name}</strong> event, covering an estimated volume of <strong>{attendeeScale} attendees</strong> across a <strong>{duration}</strong> operational window.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold uppercase mb-2">2. Itemized Deliverables</h4>
                <ul className="space-y-1 list-disc pl-4 text-zinc-300 font-sans">
                  {currentPkg.deliverables.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                  {selectedAddonIds.map((id) => {
                    const a = ADDONS.find((item) => item.id === id);
                    return a ? <li key={id} className="text-white font-medium">{a.name} (Addon Module)</li> : null;
                  })}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-bold uppercase mb-2">3. Commercials & Fee Structure</h4>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span>Base Technical Management Fee:</span>
                    <span className="text-white font-bold">₹{adjustedManagementFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected Add-on Modules ({selectedAddonIds.length}):</span>
                    <span className="text-white font-bold">₹{addonsTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white font-bold border-t border-white/20 pt-2 mt-2">
                    <span>TOTAL CONTRACT VALUE (EXCL. TAXES):</span>
                    <span>₹{grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-bold uppercase mb-2">4. Payment Milestone Terms (SOP 10.2)</h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 border border-white/10 rounded">
                    <span className="block text-zinc-500 text-[10px]">50% UPFRONT ADVANCE</span>
                    <span className="text-white font-bold text-sm">₹{advance50.toLocaleString()}</span>
                    <span className="block text-zinc-400 text-[10px]">On signing & lock</span>
                  </div>
                  <div className="p-3 border border-white/10 rounded">
                    <span className="block text-zinc-500 text-[10px]">30% PRE-EVENT MILESTONE</span>
                    <span className="text-white font-bold text-sm">₹{milestone30.toLocaleString()}</span>
                    <span className="block text-zinc-400 text-[10px]">7 days before day 1</span>
                  </div>
                  <div className="p-3 border border-white/10 rounded">
                    <span className="block text-zinc-500 text-[10px]">20% POST-EVENT CLOSEOUT</span>
                    <span className="text-white font-bold text-sm">₹{closeout20.toLocaleString()}</span>
                    <span className="block text-zinc-400 text-[10px]">On report delivery</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 flex justify-between items-center text-[10px]">
                <div>
                  <p>Client Authorised Signatory: _________________________</p>
                </div>
                <div className="text-right">
                  <p>VOYAGE Representative: _________________________</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-lg bg-white text-black font-bold uppercase text-xs hover:bg-zinc-200 transition"
              >
                Print Official SOW
              </button>
            </div>
          </div>
        ) : (
          /* INTERACTIVE CONFIGURATOR */
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
            {/* Left Configuration Pane */}
            <div className="lg:col-span-7 p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Step 1: Package Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  1. Select Event Service Package
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {PACKAGES.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPkgId(pkg.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition ${
                        selectedPkgId === pkg.id
                          ? 'bg-zinc-900 border-white text-white ring-1 ring-white'
                          : 'bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/30'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-display font-bold text-sm text-white">{pkg.name}</span>
                        {pkg.badge && <span className="text-[9px] font-mono text-black bg-white px-1.5 py-0.5 rounded">Key</span>}
                      </div>
                      <span className="text-xs font-mono text-zinc-300 block">{pkg.priceRange}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Scale & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="uppercase text-zinc-400">2. Expected Attendees</span>
                    <span className="text-white font-bold">{attendeeScale} People</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1500"
                    step="50"
                    value={attendeeScale}
                    onChange={(e) => setAttendeeScale(Number(e.target.value))}
                    className="w-full accent-white h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                    <span>50 (Intimate)</span>
                    <span>500 (Standard)</span>
                    <span>1500+ (Summit)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    3. Operational Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value as any)}
                    className="w-full bg-zinc-900 border border-white/15 text-xs text-white rounded-xl p-2.5 focus:outline-none focus:border-white font-mono cursor-pointer"
                  >
                    <option value="1-day">Single Day (8 Hours)</option>
                    <option value="24-hour">24-Hour Nonstop Hackathon</option>
                    <option value="48-hour">48-Hour Weekend Sprint</option>
                    <option value="multi-day">Multi-Day Summit (3+ Days)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Add-on Modules */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  4. Select Modular Add-ons
                </label>
                <div className="space-y-2">
                  {ADDONS.map((addon) => {
                    const isSelected = selectedAddonIds.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                          isSelected
                            ? 'bg-zinc-900/90 border-white/50 text-white'
                            : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-white border-white text-black' : 'border-zinc-700'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-white block">{addon.name}</span>
                            <span className="text-[11px] text-zinc-400 line-clamp-1">{addon.description}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-white shrink-0 ml-3">
                          +₹{addon.priceINR.toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Quote & Financial Breakdown Pane */}
            <div className="lg:col-span-5 bg-black p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    Automated Cost Breakdown (Section 10.1)
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-display font-bold text-white tracking-tight">
                      ₹{grandTotal.toLocaleString()}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">INR + GST</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Indicative fee for {attendeeScale} attendees ({duration})
                  </p>
                </div>

                {/* Direct Costs vs Management Distribution */}
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex justify-between text-zinc-300">
                    <span className="text-zinc-400">Execution Labour & Crew:</span>
                    <span className="text-white font-medium">₹{labourEstimate.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span className="text-zinc-400">Marketing & Technical Tools:</span>
                    <span className="text-white font-medium">₹{marketingTools.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span className="text-zinc-400">Contingency Reserve (10%):</span>
                    <span className="text-white font-medium">₹{contingency.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-zinc-300 border-t border-white/10 pt-2">
                    <span className="text-zinc-400">Management Fee Contribution:</span>
                    <span className="text-white font-medium">₹{managementContribution.toLocaleString()}</span>
                  </div>
                </div>

                {/* 50 / 30 / 20 Payment Policy */}
                <div className="bg-zinc-950 p-4 rounded-xl border border-white/15 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Structured Cash-Flow Policy (SOP 10.2)
                  </span>
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between text-zinc-300">
                      <span>50% Advance (On contract signing):</span>
                      <span className="text-white font-bold">₹{advance50.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>30% Milestone (7 days pre-event):</span>
                      <span className="text-white font-bold">₹{milestone30.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>20% Closeout (On deliverables sign-off):</span>
                      <span className="text-white font-bold">₹{closeout20.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 space-y-2 mt-6">
                <button
                  onClick={handleProceed}
                  className="w-full py-3.5 px-4 bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-white/5"
                >
                  <span>Submit RFP with this Scope</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsPrintMode(true)}
                  className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider rounded-xl border border-white/15 transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Print-Ready SOW</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
