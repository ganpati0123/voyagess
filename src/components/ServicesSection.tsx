import React from 'react';
import { Check, X, ArrowUpRight, Plus, ShieldAlert } from 'lucide-react';
import { PACKAGES, ADDONS } from '../data/blueprintData';
import { ServiceTier } from '../types';

interface ServicesSectionProps {
  onSelectPackageForSOW: (pkgId: ServiceTier) => void;
  onOpenRFPWithPackage: (pkgId: ServiceTier) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectPackageForSOW,
  onOpenRFPWithPackage,
}) => {
  return (
    <section id="services" className="py-28 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
              Section 05 • Modular Service Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              Defined Packages. <br />
              <span className="text-zinc-500">Uncompromising Execution.</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
              Every proposal is modular, transparently priced, and rigorously bounded. 
              We do not promise every service on day one; we guarantee flawless delivery of contracted scope.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-zinc-400 block mb-1">Currency: Indian Rupee (INR)</span>
            <span className="text-xs font-mono text-zinc-400 border border-white/10 px-3 py-1.5 rounded-lg inline-block">
              50% Advance · 30% Milestone · 20% Closeout
            </span>
          </div>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.badge
                  ? 'bg-zinc-950 border-white/30 shadow-2xl shadow-white/5 ring-1 ring-white/20'
                  : 'bg-zinc-950/60 border-white/10 hover:border-white/25'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 rounded bg-white text-black font-mono font-bold text-[10px] uppercase tracking-widest shadow-md">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6 pt-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    {pkg.timeline}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-2xl font-mono font-bold text-white tracking-tight">
                    {pkg.priceRange}
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Target Audience */}
                <div className="py-3 border-y border-white/10 mb-6 text-xs text-zinc-300 font-sans">
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Best Suited For</span>
                  {pkg.targetAudience}
                </div>

                {/* Deliverables List */}
                <div className="space-y-4 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Core Deliverables ({pkg.deliverables.length})
                  </span>
                  <ul className="space-y-2">
                    {pkg.deliverables.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-zinc-200">
                        <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explicit Exclusions */}
                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Scope Boundaries (Excluded)
                  </span>
                  <ul className="space-y-1.5">
                    {pkg.excludedItems.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-[11px] text-zinc-400">
                        <X className="w-3 h-3 text-zinc-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={() => onSelectPackageForSOW(pkg.id)}
                  className="w-full py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Build SOW Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenRFPWithPackage(pkg.id)}
                  className="w-full py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs uppercase transition cursor-pointer"
                >
                  Direct Inquiry
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modular Add-ons Matrix (Section 5.1 of PDF) */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                Section 5.1 • Specialized Modules
              </span>
              <h3 className="text-2xl font-display font-bold text-white uppercase">
                A La Carte Technical Add-ons
              </h3>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-md">
              Plug directly into any package. Added to client SOW with verified deliverable criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="bg-zinc-950 p-5 rounded-xl border border-white/10 hover:border-white/30 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 border border-white/10 px-2 py-0.5 rounded">
                      {addon.category}
                    </span>
                    <span className="text-sm font-mono font-bold text-white">
                      ₹{addon.priceINR.toLocaleString()}
                    </span>
                  </div>
                  <h4 className="text-sm font-display font-bold text-white mb-1.5">
                    {addon.name}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scope Boundaries Disclaimer Banner (Section 5.2 of PDF) */}
        <div className="mt-12 bg-zinc-950 p-6 rounded-2xl border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3.5">
            <div className="p-2 rounded-lg bg-zinc-900 border border-white/15 text-zinc-300 shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Blueprint Scope Protection Guarantee (SOP 5.2)
              </h4>
              <p className="text-xs text-zinc-400 max-w-3xl mt-1 leading-relaxed">
                Every proposal explicitly lists deliverables, quantities, deadlines, and revisions. Third-party costs (venue, food, cash prizes, AV rental) are client-funded with advance written approval. Zero hidden surcharges.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-zinc-400 shrink-0">
            Strict Contractual Integrity
          </span>
        </div>
      </div>
    </section>
  );
};
