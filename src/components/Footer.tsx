import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal, Heart } from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
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
                The Hands-Off Hackathon Model
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mb-2">
                High-Impact Technical Events. Zero Administrative Friction.
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
                Venue sourcing, MLH-grade workflows, volunteer logistics, and Wi-Fi failover—VOYAGE delivers the entire operational stack.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 font-mono">
              <button
                onClick={onOpenCalculator}
                className="px-6 py-3.5 rounded-xl border border-white/20 bg-zinc-900 hover:bg-zinc-800 text-white uppercase text-xs tracking-wider transition cursor-pointer"
              >
                SOW Cost Estimator
              </button>
              <button
                onClick={onOpenRFP}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold uppercase text-xs tracking-wider transition cursor-pointer shadow-lg shadow-white/10"
              >
                Host An Event
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
              <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-white/20 p-1 flex items-center justify-center">
                <VoyageLogo size="xs" animated={true} />
              </div>
              <span className="text-lg font-display font-bold text-white tracking-widest uppercase">
                {VOYAGE_META.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              &ldquo;We believe in flawless delivery. Smooth, high-precision technical event engineering.&rdquo;
            </p>
            <div className="text-[11px] text-zinc-500 font-mono">
              Turnkey Technical Production • Official MLH Sanctioning Partner
            </div>
          </div>

          {/* Column 2: Turnkey Model */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Turnkey Execution
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('mlh-tag')} className="hover:text-white transition flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Official MLH Tag Guarantee</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('turnkey')} className="hover:text-white transition">
                  Venue Sourcing & Setup
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('turnkey')} className="hover:text-white transition">
                  Dedicated Volunteer Brigade
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('turnkey')} className="hover:text-white transition">
                  Zero Wi-Fi Drops Guarantee
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white transition">
                  VOYAGE (Commercial Brand)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white transition">
                  GRID Community (2K+ Builders)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition">
                  Campus Hackathon (24H/48H)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('proof')} className="hover:text-white transition">
                  Audited Field Proof
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
              We respond to qualified event discovery inquiries within 24 hours with a comprehensive capability deck.
            </p>
            <p className="text-white font-mono text-xs mb-1">
              {VOYAGE_META.contactEmail}
            </p>
            <p className="text-zinc-500 text-[11px] font-mono">
              Global Turnkey Technical Production
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} VOYAGE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0 font-mono">
            <span>Official MLH Season Partner</span>
            <span className="text-zinc-700">·</span>
            <span>Turnkey Hackathons</span>
            <span className="text-zinc-700">·</span>
            <span>GRID Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
