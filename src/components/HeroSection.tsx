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
    <section id="hero" className="relative flex flex-col justify-center bg-black overflow-hidden border-b border-white/10 py-12 sm:py-16">
      {/* Dynamic Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      {/* Ambient Multi-Layer Glowmorphism Halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-white/[0.06] blur-[100px] rounded-full pointer-events-none animate-glow-pulse"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[200px] bg-sky-500/[0.04] blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Glowmorphism Master USP Badge - OFFICIAL MLH TAG */}
        <div 
          onClick={() => onNavigate('mlh-tag')}
          className="inline-flex items-center space-x-2.5 mb-6 px-5 py-2 rounded-full glow-badge-mlh hover:border-white cursor-pointer group transition-all duration-300 shadow-xl"
        >
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
            <Award className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-xs sm:text-sm font-mono font-black tracking-wider uppercase text-white">
            OFFICIAL MLH TAG FOR YOUR HACKATHON EVENT
          </span>
          <span className="text-[11px] text-zinc-300 font-mono tracking-wider uppercase bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
            TOP 2% ELITE CIRCUIT
          </span>
          <span className="text-xs text-white group-hover:translate-x-1 transition-transform">→</span>
        </div>

        {/* Constantly Animated 3D Glowing Vector Logo */}
        <div 
          onClick={onReplayIntro}
          className="relative mb-5 group cursor-pointer"
          title="Click to replay laser light sequence"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-950/90 border border-white/25 p-2 shadow-[0_0_30px_rgba(255,255,255,0.15)] relative overflow-hidden group-hover:border-white transition-all duration-300 group-hover:scale-105 flex items-center justify-center backdrop-blur-xl">
            <VoyageLogo size="hero" animated={true} />
          </div>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-2 py-0.5 rounded text-[8px] font-mono uppercase font-bold tracking-widest whitespace-nowrap shadow-lg">
            Replay Laser Flow
          </div>
        </div>

        {/* Master Editorial Headline - Tight & Impactful */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white uppercase max-w-4xl leading-[1.1] mb-4 text-glow">
          High-Performance Technical Events. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Engineered to Perfection.
          </span>
        </h1>

        {/* Compact Luxury Brand Quotation */}
        <div className="max-w-2xl mx-auto mb-7">
          <p className="text-base sm:text-lg font-light text-zinc-200 italic font-sans tracking-wide leading-relaxed">
            &ldquo;{VOYAGE_META.quote}&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mt-2 max-w-xl mx-auto">
            Boutique white-glove event production for campus hackathons and developer summits. 
            We secure the <strong className="text-white font-bold underline decoration-white/30 underline-offset-4">official MLH season tag</strong>, deploy zero-downtime Wi-Fi, and manage 24/7 on-ground stagecraft.
          </p>
        </div>

        {/* Glowmorphism Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
          <button
            onClick={onOpenRFP}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-extrabold text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Instant Discovery RFP</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-6 py-3 rounded-xl glow-card hover:border-white text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Turnkey SOW Estimator</span>
          </button>
        </div>

        {/* Compact Glowmorphism 4-Column Metric Grid */}
        <div className="w-full max-w-4xl pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="glow-card p-4 rounded-2xl border-white/15">
            <div className="text-xl sm:text-2xl font-display font-black text-white tracking-tight tabular-nums text-glow">
              &lt; 2%
            </div>
            <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider mt-1 font-bold">
              Global Acceptance
            </div>
            <p className="text-[10px] text-zinc-400 mt-0.5">
              Only ~2 in 100 events approved
            </p>
          </div>

          <div className="glow-card p-4 rounded-2xl border-white/15">
            <div className="text-xl sm:text-2xl font-display font-black text-white tracking-tight tabular-nums text-glow">
              2,000+
            </div>
            <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider mt-1 font-bold">
              Active Builders
            </div>
            <p className="text-[10px] text-zinc-500 mt-0.5">
              GRID Network Reach
            </p>
          </div>

          <div className="glow-card p-4 rounded-2xl border-white/15">
            <div className="text-xl sm:text-2xl font-display font-black text-white tracking-tight tabular-nums text-glow">
              0 Drops
            </div>
            <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider mt-1 font-bold">
              Network Failover
            </div>
            <p className="text-[10px] text-zinc-500 mt-0.5">
              Dual-WAN Wi-Fi
            </p>
          </div>

          <div className="glow-card p-4 rounded-2xl border-white/15">
            <div className="text-xl sm:text-2xl font-display font-black text-white tracking-tight tabular-nums text-glow">
              100%
            </div>
            <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider mt-1 font-bold">
              Turnkey Model
            </div>
            <p className="text-[10px] text-zinc-500 mt-0.5">
              Stage to Audit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
