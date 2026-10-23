import React from 'react';
import { ArrowUpRight, Play, Menu, X, Sparkles } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand with Pure Code-Generated 3D Emblem */}
          <div 
            onClick={() => { onNavigate('hero'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center space-x-3.5 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-zinc-950 border border-white/20 p-1 flex items-center justify-center overflow-hidden group-hover:border-white transition-colors duration-300">
              <VoyageLogo size="sm" animated={true} />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-display font-black tracking-widest text-white uppercase">
                  {VOYAGE_META.name}
                </span>
              </div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-zinc-400 font-mono">
                HIGH-PERFORMANCE TECHNICAL EVENTS
              </p>
            </div>
          </div>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase text-zinc-400">
            <button
              onClick={() => onNavigate('mlh-tag')}
              className="hover:text-white transition cursor-pointer flex items-center space-x-1 text-zinc-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white mr-1"></span>
              <span>Official MLH Tag</span>
            </button>
            <button
              onClick={() => onNavigate('turnkey')}
              className="hover:text-white transition cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-white transition cursor-pointer"
            >
              Packages
            </button>
            <button
              onClick={() => onNavigate('ecosystem')}
              className="hover:text-white transition cursor-pointer flex items-center space-x-1"
            >
              <span>GRID Network</span>
              <span className="text-[9px] text-zinc-400 border border-white/10 px-1 rounded">2K+</span>
            </button>
            <button
              onClick={() => onNavigate('proof')}
              className="hover:text-white transition cursor-pointer"
            >
              Audited Proof
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onReplayIntro}
              title="Replay V-Light Flow Animation"
              className="px-3 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 transition flex items-center space-x-1.5 cursor-pointer bg-zinc-950/60"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>V-Flow</span>
            </button>

            <button
              onClick={onOpenCalculator}
              className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-300 hover:text-white border border-white/15 hover:border-white/30 transition cursor-pointer"
            >
              SOW Estimator
            </button>

            <button
              onClick={onOpenRFP}
              className="px-5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition active:scale-95 cursor-pointer flex items-center space-x-1.5 shadow-lg shadow-white/5"
            >
              <span>Host an Event</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenRFP}
              className="px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold uppercase bg-white text-black"
            >
              Host
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 px-6 py-6 space-y-4 text-xs font-mono uppercase tracking-wider">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => { onNavigate('mlh-tag'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-white font-bold border-b border-zinc-900 flex items-center justify-between"
            >
              <span>Official MLH Tag Guarantee</span>
              <span className="text-[10px] text-zinc-400 border border-white/20 px-2 py-0.5 rounded">USP</span>
            </button>
            <button
              onClick={() => { onNavigate('turnkey'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              How It Works (Turnkey Model)
            </button>
            <button
              onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900"
            >
              Packages & Pricing
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
              Audited Field Proof
            </button>
            <button
              onClick={() => { onReplayIntro(); setMobileMenuOpen(false); }}
              className="text-left py-2 text-zinc-300 hover:text-white border-b border-zinc-900 flex items-center space-x-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Replay V-Flow Animation</span>
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
              className="w-full py-2.5 rounded-lg bg-white text-black font-mono font-bold text-center uppercase"
            >
              Host An Event
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
