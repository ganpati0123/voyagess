import React from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { VOYAGE_META } from '../data/blueprintData';

interface HeaderProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
  onOpenCommunity: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRFP,
  onOpenCalculator,
  onOpenCommunity,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => { onNavigate('hero'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center space-x-3.5 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-lg bg-zinc-900 border border-white/15 p-1 flex items-center justify-center overflow-hidden group-hover:border-white/40 transition">
              <img
                src={VOYAGE_META.logoUrl}
                alt="VOYAGE Emblem"
                className="w-full h-full object-contain filter brightness-110 group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-display font-extrabold tracking-widest text-white uppercase">
                  {VOYAGE_META.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-zinc-400 uppercase border border-white/10 px-1.5 py-0.5 rounded">
                  {VOYAGE_META.legalDomain}
                </span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium font-mono">
                {VOYAGE_META.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Services & Pricing
            </button>
            <button
              onClick={() => onNavigate('operating-system')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              9-Phase SOP
            </button>
            <button
              onClick={() => onNavigate('matrix')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Why Voyage
            </button>
            <button
              onClick={() => onNavigate('case-studies')}
              className="hover:text-white transition-colors cursor-pointer py-1"
            >
              Verified Proof
            </button>
            <button
              onClick={onOpenCommunity}
              className="hover:text-white transition-colors cursor-pointer py-1 flex items-center space-x-1 text-zinc-300"
            >
              <span>GRID Synergy</span>
              <span className="text-[9px] font-mono text-zinc-400 border border-white/10 px-1 rounded">2K+</span>
            </button>
          </nav>

          {/* Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenCalculator}
              className="px-4 py-2 rounded-lg text-xs font-mono font-medium tracking-wide text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/15 transition cursor-pointer flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>SOW Estimator</span>
            </button>

            <button
              onClick={onOpenRFP}
              className="px-5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition active:scale-95 cursor-pointer shadow-lg shadow-white/5 flex items-center space-x-1.5"
            >
              <span>Discuss Event</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenRFP}
              className="px-3 py-1.5 rounded text-[11px] font-mono font-bold uppercase bg-white text-black"
            >
              RFP
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-white/10 px-6 py-6 space-y-4 text-xs uppercase tracking-wider font-mono">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              Services & Pricing
            </button>
            <button
              onClick={() => { onNavigate('operating-system'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              9-Phase Operating System
            </button>
            <button
              onClick={() => { onNavigate('matrix'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              Why Voyage (Positioning)
            </button>
            <button
              onClick={() => { onNavigate('case-studies'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              Case Studies & Proof
            </button>
            <button
              onClick={() => { onOpenCommunity(); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              GRID Community Ecosystem (2K+)
            </button>
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded bg-zinc-900 border border-white/20 text-white font-mono text-center"
            >
              Interactive SOW Calculator
            </button>
            <button
              onClick={() => { onOpenRFP(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded bg-white text-black font-mono font-bold text-center uppercase"
            >
              Request Event Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
