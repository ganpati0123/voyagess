import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, Menu, X, Award, Briefcase, 
  Compass, ShieldCheck, Sparkles, Mail, ChevronRight 
} from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { VOYAGE_META } from '../data/blueprintData';

interface HeaderProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
  onOpenCareers: (roleId?: string) => void;
  onOpenSitemap: () => void;
  onOpenDocument: (docId: string) => void;
  onOpenConsentDossier: () => void;
  onReplayIntro: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRFP,
  onOpenCalculator,
  onOpenCareers,
  onOpenSitemap,
  onOpenDocument,
  onOpenConsentDossier,
  onReplayIntro,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16 sm:h-18">
          {/* Zone 1: Brand Wordmark & Animated Glowing Logo */}
          <div 
            onClick={() => { handleNavClick('hero'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center space-x-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-white/25 p-1 flex items-center justify-center group-hover:border-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]">
              <VoyageLogo size="xs" animated={true} />
            </div>
            <span className="text-base sm:text-xl font-display font-black tracking-widest text-white uppercase whitespace-nowrap text-glow">
              {VOYAGE_META.name}
            </span>
          </div>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-xs font-mono tracking-wider uppercase text-zinc-400">
            <button
              onClick={() => onNavigate('mlh-tag')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap flex items-center space-x-1.5 text-zinc-200"
            >
              <Award className="w-3.5 h-3.5 text-white" />
              <span className="font-bold">MLH Tag</span>
            </button>
            <button
              onClick={() => onNavigate('turnkey')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Turnkey Model
            </button>
            <button
              onClick={() => onNavigate('packages')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Packages
            </button>
            <button
              onClick={() => onNavigate('ecosystem')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              GRID Network
            </button>
            <button
              onClick={() => onNavigate('proof')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Proof
            </button>
            <button
              onClick={() => onOpenCareers()}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap flex items-center space-x-1.5 text-white"
            >
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>Careers</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded-full font-bold">
                Hiring
              </span>
            </button>
            <button
              onClick={onOpenSitemap}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap flex items-center space-x-1 text-zinc-400"
              title="Full Sitemap & Directory"
            >
              <Compass className="w-3 h-3" />
              <span>Sitemap</span>
            </button>
          </nav>

          {/* Zone 3: Primary Action & Tools */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenCalculator}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-zinc-300 hover:text-white glow-badge hover:border-white/50 transition-colors cursor-pointer whitespace-nowrap"
            >
              SOW Estimator
            </button>

            <button
              onClick={onOpenRFP}
              className="px-4 py-2 rounded-xl text-xs font-mono font-extrabold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all active:scale-95 cursor-pointer flex items-center space-x-1.5 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] whitespace-nowrap"
            >
              <span>Request Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger & Quick proposal button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenRFP}
              className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase bg-white text-black whitespace-nowrap shadow-md cursor-pointer active:scale-95"
            >
              Proposal
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white cursor-pointer rounded-lg hover:bg-zinc-900 border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-zinc-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Height Mobile Drawer - Locks Background & Solves Mobile UX */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-black/98 backdrop-blur-3xl overflow-y-auto px-5 py-6 flex flex-col justify-between animate-in fade-in duration-200 border-t border-white/10">
          <div className="space-y-4">
            <div className="flex flex-col space-y-1 font-mono text-xs uppercase tracking-wider">
              {/* Crown USP */}
              <button
                onClick={() => handleNavClick('mlh-tag')}
                className="text-left py-3 px-3 text-white font-bold border-b border-zinc-900 flex items-center justify-between hover:bg-zinc-900/60 rounded-xl transition"
              >
                <span className="flex items-center space-x-2.5">
                  <Award className="w-4 h-4 text-white shrink-0" />
                  <span className="truncate">OFFICIAL MLH TAG GUARANTEE</span>
                </span>
                <span className="text-[9px] bg-white text-black font-bold px-2 py-0.5 rounded-full shrink-0">USP</span>
              </button>

              {/* Core Sections */}
              <button
                onClick={() => handleNavClick('turnkey')}
                className="text-left py-3 px-3 text-zinc-300 hover:text-white border-b border-zinc-900 hover:bg-zinc-900/60 rounded-xl transition flex items-center justify-between"
              >
                <span>Turnkey Model</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              </button>
              <button
                onClick={() => handleNavClick('packages')}
                className="text-left py-3 px-3 text-zinc-300 hover:text-white border-b border-zinc-900 hover:bg-zinc-900/60 rounded-xl transition flex items-center justify-between"
              >
                <span>Packages & Scope</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              </button>
              <button
                onClick={() => handleNavClick('ecosystem')}
                className="text-left py-3 px-3 text-zinc-300 hover:text-white border-b border-zinc-900 hover:bg-zinc-900/60 rounded-xl transition flex items-center justify-between"
              >
                <span>GRID Community (2K+ Builders)</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              </button>
              <button
                onClick={() => handleNavClick('proof')}
                className="text-left py-3 px-3 text-zinc-300 hover:text-white border-b border-zinc-900 hover:bg-zinc-900/60 rounded-xl transition flex items-center justify-between"
              >
                <span>Audited Proof</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              </button>

              {/* Careers in Mobile Menu - Requested directly by user! */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCareers();
                }}
                className="text-left py-3 px-3 text-white font-bold border-b border-zinc-900 flex items-center justify-between bg-zinc-900/70 hover:bg-zinc-900 rounded-xl transition my-1"
              >
                <span className="flex items-center space-x-2.5">
                  <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Careers & Flight Crew</span>
                </span>
                <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Hiring (5)</span>
                </span>
              </button>

              {/* Normal Website Essentials: Full Sitemap Directory */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSitemap();
                }}
                className="text-left py-3 px-3 text-zinc-300 hover:text-white border-b border-zinc-900 flex items-center justify-between hover:bg-zinc-900/60 rounded-xl transition"
              >
                <span className="flex items-center space-x-2.5">
                  <Compass className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Full Website Sitemap</span>
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">Directory</span>
              </button>

              {/* Legal & Trust Center */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDocument('msa');
                }}
                className="text-left py-3 px-3 text-zinc-300 hover:text-white border-b border-zinc-900 flex items-center justify-between hover:bg-zinc-900/60 rounded-xl transition"
              >
                <span className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>Master Services Agreement (MSA)</span>
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">Legal</span>
              </button>

              {/* Cookie & Telemetry Hub */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsentDossier();
                }}
                className="text-left py-3 px-3 text-zinc-300 hover:text-white border-b border-zinc-900 flex items-center justify-between hover:bg-zinc-900/60 rounded-xl transition"
              >
                <span className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cookie & Permissions Hub</span>
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">Telemetry</span>
              </button>
            </div>
          </div>

          {/* Action Buttons in Mobile Menu */}
          <div className="pt-6 space-y-3 font-mono">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-3.5 rounded-xl bg-zinc-900 border border-white/20 text-white font-mono text-xs text-center active:scale-98 transition flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>SOW Budget Estimator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFP();
              }}
              className="w-full py-3.5 rounded-xl bg-white text-black font-mono font-extrabold text-xs text-center uppercase tracking-wider shadow-lg active:scale-98 transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Request Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="pt-3 text-center text-[11px] font-mono text-zinc-500 flex items-center justify-center space-x-1.5">
              <Mail className="w-3 h-3 text-zinc-600" />
              <span>{VOYAGE_META.contactEmail}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
