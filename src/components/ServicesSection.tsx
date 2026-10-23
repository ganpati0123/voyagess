import React, { useState } from 'react';
import { Check, X, ArrowUpRight, Plus, ShieldCheck, Sparkles } from 'lucide-react';
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
              Standardized Delivery Packages
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              Modular Tiers. <br />
              <span className="text-zinc-500">Transparent Scope & Fixed Pricing.</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
              Choose the package tailored to your format. Every engagement includes binding scopes, 
              defined deliverables, and our structured 50/30/20 milestone security guarantee.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-zinc-400 block mb-1">Standardized INR Pricing</span>
            <span className="text-xs font-mono text-white border border-white/20 px-3 py-1.5 rounded-xl inline-block bg-zinc-950">
              50% Advance · 30% Pre-Event · 20% Closeout
            </span>
          </div>
        </div>

        {/* Clean 4-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => {
            const isFlagship = pkg.id === 'hackathon';
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isFlagship
                    ? 'bg-zinc-950 border-white/40 ring-1 ring-white/20 shadow-2xl shadow-white/5'
                    : 'bg-zinc-950/70 border-white/10 hover:border-white/25'
                }`}
              >
                {/* Flagship Badge */}
                {isFlagship && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 rounded bg-white text-black font-mono font-bold text-[10px] uppercase tracking-widest shadow-md">
                      Flagship Choice
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <div className="mb-6 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                      {pkg.timeline}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-2 uppercase">
                      {pkg.name}
                    </h3>
                    <div className="text-2xl font-mono font-bold text-white tracking-tight">
                      {pkg.priceRange}
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 font-sans line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Key Deliverables List */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Scope Deliverables ({pkg.deliverables.length})
                    </span>
                    <ul className="space-y-2 font-sans">
                      {pkg.deliverables.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explicit Exclusions */}
                  <div className="pt-4 border-t border-white/10 mb-6 font-sans">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                      Excluded (Client Funded)
                    </span>
                    <ul className="space-y-1">
                      {pkg.excludedItems.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5 text-[11px] text-zinc-500">
                          <X className="w-3 h-3 text-zinc-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <button
                    onClick={() => onSelectPackageForSOW(pkg.id)}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                  >
                    <span>Configure SOW</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenRFPWithPackage(pkg.id)}
                    className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs uppercase transition cursor-pointer"
                  >
                    Direct Inquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
