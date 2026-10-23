import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { VOYAGE_META } from '../data/blueprintData';

interface HeroSectionProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
  onReplayIntro: () => void;
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRFP,
  onOpenCalculator,
  onReplayIntro,
  onNavigate,
}) => {
  return (
    <section id="hero" className="relative min-h-[88vh] flex flex-col justify-center bg-black overflow-hidden border-b border-white/10">
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"></div>
      
      {/* Ambient Radial Monochrome Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[500px] bg-white/[0.04] blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center text-center">
        
        {/* MLH Verification Badge Integrated at the Top */}
        <div 
          onClick={() => onNavigate('mlh-tag')}
          className="inline-flex items-center space-x-3 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-zinc-950/90 hover:border-white/50 backdrop-blur-md transition-all duration-300 cursor-pointer group shadow-lg shadow-black"
        >
          <Award className="w-3.5 h-3.5 text-white shrink-0 group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-300 group-hover:text-white">
            Official MLH Tag Guarantee <span className="text-zinc-500 font-sans">·</span> &lt; 2% Global Selection
          </span>
          <span className="text-[11px] text-zinc-400 group-hover:translate-x-0.5 transition-transform">→</span>
        </div>

        {/* Minimal 3D Vector Emblem (Interactive V-Flow trigger) */}
        <div 
          onClick={onReplayIntro}
          className="relative mb-6 group cursor-pointer"
          title="VOYAGE 3D Vector Blade"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-950 border border-white/20 p-2 shadow-2xl relative overflow-hidden group-hover:border-white transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
            <VoyageLogo size="md" animated={true} />
          </div>
        </div>

        {/* Master Editorial Headline - Boutique White-Glove Focus */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white uppercase max-w-4xl leading-[1.08] mb-6">
          High-Performance Technical Events. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            Engineered to Perfection.
          </span>
        </h1>

        {/* Luxury Brand Manifesto Quote */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg sm:text-xl font-light text-zinc-200 italic font-sans tracking-wide leading-relaxed">
            &ldquo;{VOYAGE_META.quote}&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mt-3 max-w-xl mx-auto">
            Boutique white-glove event production for collegiate hackathons, developer summits, and enterprise innovation challenges. We secure the <span className="text-white font-medium">official MLH season tag</span>, construct high-throughput network failover, and manage on-ground stagecraft.
          </p>
        </div>

        {/* Primary Conversion Actions: Instant Discovery RFP (Primary) + SOW Estimator (Secondary) */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenRFP}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-xl shadow-white/10 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Instant Discovery RFP</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white border border-white/20 hover:border-white/40 font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Turnkey SOW Estimator</span>
          </button>
        </div>

        {/* Clean Typographic Metrics - Spacious, Unboxed, Zero-Pill */}
        <div className="w-full max-w-4xl pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="sm:border-r sm:border-white/10 sm:pr-4">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight tabular-nums">
              &lt; 2%
            </div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-1">
              MLH Sanctioning
            </div>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Guaranteed season tag
            </p>
          </div>

          <div className="sm:border-r sm:border-white/10 sm:pr-4">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight tabular-nums">
              2,000+
            </div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Active Builders
            </div>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              GRID network reach
            </p>
          </div>

          <div className="sm:border-r sm:border-white/10 sm:pr-4">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight tabular-nums">
              0 Drops
            </div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Network Outages
            </div>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              Dual-WAN Wi-Fi failover
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight tabular-nums">
              100%
            </div>
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Turnkey Ownership
            </div>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              From briefing to audit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
