import React from 'react';
import { 
  ArrowUpRight, ShieldCheck, Terminal, Heart, 
  Briefcase, Compass, FileText, CheckCircle2, Award 
} from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { VOYAGE_META } from '../data/blueprintData';

interface FooterProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
  onOpenCommunity: () => void;
  onOpenCareers: (roleId?: string) => void;
  onOpenSitemap: () => void;
  onOpenDocument: (docId: string) => void;
  onOpenConsentDossier: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenRFP,
  onOpenCalculator,
  onOpenCommunity,
  onOpenCareers,
  onOpenSitemap,
  onOpenDocument,
  onOpenConsentDossier,
  onNavigate,
}) => {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-400 text-xs font-mono">
      {/* Top Pre-Footer Banner with Glowmorphism */}
      <div className="border-b border-white/10 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glow-card-featured p-6 sm:p-10 rounded-3xl border-white/20 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(255,255,255,0.06)]">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-1 block">
                The Hands-Off Hackathon Model
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white uppercase tracking-tight mb-2 text-glow">
                High-Impact Technical Events. Zero Administrative Friction.
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
                Venue staging, official MLH season tag sanctioning, volunteer logistics, and Wi-Fi failover—VOYAGE delivers the entire operational stack.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 font-mono">
              <button
                onClick={onOpenCalculator}
                className="px-5 py-3 rounded-xl border border-white/20 bg-zinc-950 hover:bg-zinc-900 text-white uppercase text-xs tracking-wider transition cursor-pointer text-center"
              >
                SOW Cost Estimator
              </button>
              <button
                onClick={onOpenRFP}
                className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold uppercase text-xs tracking-wider transition cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.25)] text-center"
              >
                Host An Event
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Corporate Sitemap & Directory */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1: Identity & Motto */}
          <div className="sm:col-span-2 md:col-span-1 space-y-3.5">
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
            <div className="text-[11px] text-zinc-500 font-mono space-y-1">
              <p>Boutique Technical Production</p>
              <p>Official MLH Sanctioning Partner</p>
              <p className="text-zinc-400 font-mono">{VOYAGE_META.contactEmail}</p>
            </div>
          </div>

          {/* Column 2: Turnkey Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center space-x-1.5">
              <span>Production Scope</span>
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('mlh-tag')} className="hover:text-white transition flex items-center space-x-1.5 cursor-pointer text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                  <span className="text-white font-medium">Official MLH Tag</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition cursor-pointer text-left">
                  Campus Hackathons (24H/48H)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition cursor-pointer text-left">
                  Developer Summits
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition cursor-pointer text-left">
                  Technical Workshops
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-white transition cursor-pointer text-left text-zinc-300">
                  SOW Budget Estimator →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Operating System */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Operating System
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('turnkey')} className="hover:text-white transition cursor-pointer text-left">
                  6-Stage Execution OS
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDocument('network-sla')} className="hover:text-white transition cursor-pointer text-left flex items-center space-x-1">
                  <span>Zero Wi-Fi Drops SLA</span>
                  <span className="text-[9px] text-emerald-400 font-bold">99.9%</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('turnkey')} className="hover:text-white transition cursor-pointer text-left">
                  Volunteer Brigade
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('proof')} className="hover:text-white transition cursor-pointer text-left">
                  Audited Field Proof
                </button>
              </li>
              <li>
                <button onClick={onOpenCommunity} className="hover:text-white transition cursor-pointer text-left">
                  GRID Network (2K+ Builders)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Careers & Crew */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center justify-between">
              <span>Careers & Crew</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded-full font-bold">
                Hiring
              </span>
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button 
                  onClick={() => onOpenCareers('lead-hackathon-ops')} 
                  className="hover:text-white transition cursor-pointer text-left truncate max-w-full block"
                >
                  Hackathon Operations Lead
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenCareers('network-infra-engineer')} 
                  className="hover:text-white transition cursor-pointer text-left truncate max-w-full block"
                >
                  Network Infrastructure Eng.
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenCareers('devrel-sponsor-manager')} 
                  className="hover:text-white transition cursor-pointer text-left truncate max-w-full block"
                >
                  DevRel & Sponsor Manager
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenCareers('campus-ambassador-fellow')} 
                  className="hover:text-white transition cursor-pointer text-left truncate max-w-full block"
                >
                  Campus Fellowship
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenCareers()} 
                  className="hover:text-white transition cursor-pointer text-left text-zinc-300 font-bold block"
                >
                  Explore All 5 Roles →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Trust, Legal & Sitemap */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onOpenDocument('msa')} className="hover:text-white transition cursor-pointer text-left">
                  Master Services Agreement
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDocument('code-of-conduct')} className="hover:text-white transition cursor-pointer text-left">
                  Code of Conduct
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDocument('privacy-policy')} className="hover:text-white transition cursor-pointer text-left">
                  Privacy & Data Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDocument('press-kit')} className="hover:text-white transition cursor-pointer text-left">
                  Media Kit & Assets
                </button>
              </li>
              <li>
                <button onClick={onOpenConsentDossier} className="hover:text-white transition cursor-pointer text-left flex items-center space-x-1.5 text-zinc-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Cookie & Permissions Hub</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenSitemap} 
                  className="hover:text-white transition cursor-pointer text-left text-white font-bold flex items-center space-x-1"
                >
                  <Compass className="w-3 h-3" />
                  <span>Full Site Directory →</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} VOYAGE Operations. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono">
            <button onClick={() => onOpenDocument('msa')} className="hover:text-zinc-300">
              MSA
            </button>
            <span className="text-zinc-700">·</span>
            <button onClick={() => onOpenDocument('network-sla')} className="hover:text-zinc-300">
              Network SLA
            </button>
            <span className="text-zinc-700">·</span>
            <button onClick={() => onOpenDocument('code-of-conduct')} className="hover:text-zinc-300">
              Code of Conduct
            </button>
            <span className="text-zinc-700">·</span>
            <button onClick={onOpenConsentDossier} className="hover:text-white text-zinc-300 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Cookies & Permissions</span>
            </button>
            <span className="text-zinc-700">·</span>
            <button onClick={() => onOpenCareers()} className="hover:text-white text-emerald-400 font-semibold">
              Careers (We&apos;re Hiring)
            </button>
            <span className="text-zinc-700">·</span>
            <button onClick={onOpenSitemap} className="hover:text-zinc-300">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
