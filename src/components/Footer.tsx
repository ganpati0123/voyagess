import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal, Heart } from 'lucide-react';
import { VOYAGE_META } from '../data/blueprintData';

interface FooterProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
  onOpenCommunity: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRFP,
  onOpenCalculator,
  onOpenCommunity,
  onNavigate,
}) => {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-400 text-xs font-mono">
      {/* Top Pre-Footer Banner */}
      <div className="border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold mb-2 block">
                Direct Technical Partnership
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mb-2">
                Planning a Tech Event in the Coming Months?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
                Whether you need a full 24H campus hackathon execution or an airtight registration and judging workflow, let us build your customized Statement of Work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenCalculator}
                className="px-6 py-3.5 rounded-xl border border-white/20 bg-zinc-900 hover:bg-zinc-800 text-white font-mono uppercase text-xs tracking-wider transition cursor-pointer"
              >
                Launch SOW Estimator
              </button>
              <button
                onClick={onOpenRFP}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold uppercase text-xs tracking-wider transition cursor-pointer shadow-lg shadow-white/10"
              >
                Submit Event RFP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 p-1 flex items-center justify-center">
                <img
                  src={VOYAGE_META.logoUrl}
                  alt="VOYAGE Logo"
                  className="w-full h-full object-contain filter contrast-125"
                />
              </div>
              <span className="text-lg font-display font-bold text-white tracking-widest uppercase">
                {VOYAGE_META.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Technical event-management and production brand. Coordinated delivery across event concept, promotion, registration pipelines, and on-ground execution.
            </p>
            <div className="text-[11px] text-zinc-500 font-mono">
              Operating Blueprint {VOYAGE_META.version}
            </div>
          </div>

          {/* Column 2: Service Architecture */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Service Packages
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition">
                  Campus Hackathon (24H/48H)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition">
                  Workshop & Meetup Execution
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition">
                  Launch & Digital Setup
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition">
                  Corporate Innovation Sprints
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-white text-zinc-300 transition">
                  Interactive SOW Cost Calculator →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance & SOP */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Operating Protocols
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('operating-system')} className="hover:text-white transition">
                  9-Phase Lifecycle (SOP 8.1)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('operating-system')} className="hover:text-white transition">
                  Named Event Roles Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('operating-system')} className="hover:text-white transition">
                  Go / No-Go Risk Gate (SOP 17)
                </button>
              </li>
              <li>
                <button onClick={onOpenCommunity} className="hover:text-white transition">
                  GRID Community Network (2K+)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('matrix')} className="hover:text-white transition">
                  Competitive Positioning Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <p className="text-xs text-zinc-400 font-sans mb-3 leading-relaxed">
              We respond to qualified event discovery inquiries within 24 hours with an itemized capability deck.
            </p>
            <p className="text-white font-mono text-xs mb-1">
              inquiry@{VOYAGE_META.legalDomain}
            </p>
            <p className="text-zinc-500 text-[11px] font-mono">
              Main Web Property: {VOYAGE_META.legalDomain}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} VOYAGE Initiative ({VOYAGE_META.legalDomain}). All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span>SOW Framework v1.0</span>
            <span className="text-zinc-700">·</span>
            <span>Zero Unfunded Commitments</span>
            <span className="text-zinc-700">·</span>
            <span>Audited Outcomes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
