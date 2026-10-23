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
      {/* Top Pre-Footer Banner with Glowmorphism */}
      <div className="border-b border-white/10 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glow-card-featured p-6 sm:p-8 rounded-3xl border-white/20 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(255,255,255,0.06)]">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-1 block">
                The Hands-Off Hackathon Model
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight mb-1 text-glow">
                High-Impact Technical Events. Zero Administrative Friction.
              </h3>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                Venue sourcing, official MLH tag sanctioning, volunteer logistics, and Wi-Fi failover—VOYAGE delivers the entire operational stack.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 font-mono">
              <button
                onClick={onOpenCalculator}
                className="px-5 py-2.5 rounded-xl border border-white/20 bg-zinc-950 hover:bg-zinc-900 text-white uppercase text-xs tracking-wider transition cursor-pointer"
              >
                SOW Cost Estimator
              </button>
              <button
                onClick={onOpenRFP}
                className="px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold uppercase text-xs tracking-wider transition cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                Host An Event
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-white/20 p-1 flex items-center justify-center">
                <VoyageLogo size="xs" animated={true} />
              </div>
              <span className="text-lg font-display font-bold text-white tracking-widest uppercase text-glow">
                {VOYAGE_META.name}
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-sans italic leading-relaxed">
              &ldquo;{VOYAGE_META.quote}&rdquo;
            </p>
            <div className="text-[11px] text-zinc-500 font-mono">
              Boutique Technical Production · Official MLH Sanctioning Partner
            </div>
          </div>

          {/* Column 2: Turnkey Model */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Turnkey Execution
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('mlh-tag')} className="hover:text-white transition flex items-center space-x-1.5 cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Official MLH Tag Guarantee</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('turnkey')} className="hover:text-white transition cursor-pointer">
                  Venue Sourcing & Staging
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('turnkey')} className="hover:text-white transition cursor-pointer">
                  Dedicated Volunteer Brigade
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('turnkey')} className="hover:text-white transition cursor-pointer">
                  Zero Wi-Fi Drops Guarantee
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white transition cursor-pointer">
                  VOYAGE (Commercial Brand)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ecosystem')} className="hover:text-white transition cursor-pointer">
                  GRID Community (2K+ Builders)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition cursor-pointer">
                  Campus Hackathon (24H/48H)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('proof')} className="hover:text-white transition cursor-pointer">
                  Audited Field Proof
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Direct Contact
            </h4>
            <p className="text-xs text-zinc-400 font-sans mb-2 leading-relaxed">
              We respond to qualified event discovery inquiries within 24 hours with a comprehensive capability deck.
            </p>
            <p className="text-white font-mono text-xs mb-0.5">
              {VOYAGE_META.contactEmail}
            </p>
            <p className="text-zinc-500 text-[10px] font-mono">
              Global Turnkey Technical Production
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} VOYAGE. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 sm:mt-0 font-mono">
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
