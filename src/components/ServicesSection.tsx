import React from 'react';
import { Check, X, ArrowRight, Sparkles, Award } from 'lucide-react';
import { PACKAGES } from '../data/blueprintData';
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
    <section id="packages" className="py-24 sm:py-32 bg-black border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-3">
              Standardized Delivery Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              Curated Production Tiers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                Transparent Scope & Milestones.
              </span>
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
              Choose the package tailored to your format. Every engagement includes binding scopes, 
              defined deliverables, and our structured 50/30/20 milestone security guarantee.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-xs font-mono text-zinc-400 block mb-1">Standardized INR Terms</span>
            <span className="text-xs font-mono text-white border border-white/20 px-3 py-1.5 rounded-xl inline-block bg-zinc-950">
              50% Advance · 30% Pre-Event · 20% Closeout
            </span>
          </div>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PACKAGES.map((pkg) => {
            const isFlagship = pkg.id === 'hackathon';
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFlagship
                    ? 'bg-zinc-950 border-white/40 ring-1 ring-white/20 shadow-2xl shadow-white/5 lg:-translate-y-2'
                    : 'bg-zinc-950/70 border-white/10 hover:border-white/25'
                }`}
              >
                {/* Flagship Tag */}
                {isFlagship && (
                  <div className="absolute -top-3 left-8">
                    <span className="px-3 py-1 rounded bg-white text-black font-mono font-bold text-[10px] uppercase tracking-widest shadow-md flex items-center space-x-1">
                      <Award className="w-3 h-3" />
                      <span>Flagship · Official MLH Tag</span>
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
                    <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Key Deliverables List */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                      Deliverables Included
                    </span>
                    <ul className="space-y-2.5 font-sans">
                      {pkg.deliverables.slice(0, 5).map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="pt-4 border-t border-white/10 mb-6 font-sans">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5 font-semibold">
                      Client Responsibilities
                    </span>
                    <ul className="space-y-1">
                      {pkg.excludedItems.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-[11px] text-zinc-500">
                          <X className="w-3 h-3 text-zinc-600 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
                  <button
                    onClick={() => onOpenRFPWithPackage(pkg.id)}
                    className="w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                  >
                    <span>Request Discovery RFP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectPackageForSOW(pkg.id)}
                    className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white uppercase transition cursor-pointer"
                  >
                    Customize SOW & Addons
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
