import React from 'react';
import { Check, X, ArrowRight, Award } from 'lucide-react';
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
    <section id="packages" className="py-16 sm:py-20 bg-black border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2">
              Standardized Delivery Architecture
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase text-glow">
              Curated Production Tiers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Transparent Scope & Milestones.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-sans">
              Choose the package tailored to your format. Every engagement includes binding scopes, 
              defined deliverables, and our structured 50/30/20 milestone security guarantee.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-[10px] font-mono text-zinc-400 block mb-1">Standardized INR Terms</span>
            <span className="text-xs font-mono text-white glow-badge px-3 py-1.5 rounded-xl inline-block">
              50% Advance · 30% Pre-Event · 20% Closeout
            </span>
          </div>
        </div>

        {/* 3-Column Bento Grid with Glowmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {PACKAGES.map((pkg) => {
            const isFlagship = pkg.id === 'hackathon';
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isFlagship
                    ? 'glow-card-featured border-white/35 ring-1 ring-white/30 shadow-[0_0_35px_rgba(255,255,255,0.12)] lg:-translate-y-1'
                    : 'glow-card border-white/10 hover:border-white/25'
                }`}
              >
                {/* Flagship Tag */}
                {isFlagship && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-0.5 rounded-full bg-white text-black font-mono font-black text-[10px] uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.6)] flex items-center space-x-1">
                      <Award className="w-3 h-3 fill-current" />
                      <span>OFFICIAL MLH TAG GUARANTEED</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <div className="mb-5 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1 font-semibold">
                      {pkg.timeline}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white mb-1.5 uppercase text-glow">
                      {pkg.name}
                    </h3>
                    <div className="text-xl font-mono font-extrabold text-white tracking-tight">
                      {pkg.priceRange}
                    </div>
                    <p className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Key Deliverables List */}
                  <div className="space-y-2 mb-5 pt-3.5 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 block font-bold">
                      Deliverables Included
                    </span>
                    <ul className="space-y-2 font-sans">
                      {pkg.deliverables.slice(0, 5).map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="pt-3 border-t border-white/10 mb-5 font-sans">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1 font-semibold">
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
                <div className="pt-3.5 border-t border-white/10 space-y-2 font-mono text-xs">
                  <button
                    onClick={() => onOpenRFPWithPackage(pkg.id)}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center space-x-1.5 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  >
                    <span>Request Discovery RFP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectPackageForSOW(pkg.id)}
                    className="w-full py-2 rounded-xl bg-zinc-950/80 hover:bg-zinc-900 text-zinc-300 hover:text-white border border-white/15 uppercase transition cursor-pointer"
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
