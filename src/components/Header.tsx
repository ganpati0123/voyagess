import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, Award } from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { VOYAGE_META } from '../data/blueprintData';

interface HeaderProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
  onReplayIntro: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRFP,
  onOpenCalculator,
  onReplayIntro,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 sm:h-18">
          {/* Zone 1: Brand Wordmark & Animated Glowing Logo */}
          <div 
            onClick={() => { onNavigate('hero'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center space-x-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-white/25 p-1 flex items-center justify-center group-hover:border-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]">
              <VoyageLogo size="xs" animated={true} />
            </div>
            <span className="text-lg sm:text-xl font-display font-black tracking-widest text-white uppercase whitespace-nowrap text-glow">
              {VOYAGE_META.name}
            </span>
          </div>

          {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-mono tracking-wider uppercase text-zinc-400">
            <button
              onClick={() => onNavigate('mlh-tag')}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap flex items-center space-x-1.5 text-zinc-200"
            >
              <Award className="w-3.5 h-3.5 text-white" />
              <span className="font-bold">Official MLH Tag</span>
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
              Audited Proof
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

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenRFP}
              className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase bg-white text-black whitespace-nowrap shadow-md"
            >
              Proposal
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 space-y-4 text-xs font-mono uppercase tracking-wider">
          <div className="flex flex-col space-y-2.5">
            <button
              onClick={() => { onNavigate('mlh-tag'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-white font-bold border-b border-zinc-900 flex items-center justify-between"
            >
              <span className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-white" />
                <span>OFFICIAL MLH TAG GUARANTEE</span>
              </span>
              <span className="text-[10px] bg-white text-black font-bold px-2 py-0.5 rounded-full">USP</span>
            </button>
            <button
              onClick={() => { onNavigate('turnkey'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              Turnkey Model
            </button>
            <button
              onClick={() => { onNavigate('packages'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              Packages & Scope
            </button>
            <button
              onClick={() => { onNavigate('ecosystem'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              GRID Community (2K+ Builders)
            </button>
            <button
              onClick={() => { onNavigate('proof'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              Audited Proof
            </button>
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-lg bg-zinc-900 border border-white/20 text-white font-mono text-center"
            >
              SOW Budget Estimator
            </button>
            <button
              onClick={() => { onOpenRFP(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 rounded-lg bg-white text-black font-mono font-bold text-center uppercase shadow-md"
            >
              Request Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
