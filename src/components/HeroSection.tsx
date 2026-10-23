import React from 'react';
import { ArrowRight, Calculator, Check, Terminal, Shield, Cpu, Flame } from 'lucide-react';
import { VOYAGE_META } from '../data/blueprintData';

interface HeroSectionProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
  onNavigate: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRFP,
  onOpenCalculator,
  onNavigate,
}) => {
  return (
    <div id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-black overflow-hidden border-b border-white/10">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-white/[0.07] to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center text-center">
        {/* Top Minimalist Brand Kicker */}
        <div className="inline-flex items-center space-x-3 mb-8 px-3.5 py-1.5 rounded-full border border-white/15 bg-zinc-950/80 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-300">
            {VOYAGE_META.legalDomain} • TECHNICAL EVENT MANAGEMENT
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-[11px] font-mono tracking-wider text-zinc-400">
            v1.0 PLAYBOOK
          </span>
        </div>

        {/* Central Logo Display with Architectural Frame */}
        <div className="relative mb-8 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-zinc-950 border border-white/20 p-2.5 shadow-2xl shadow-black relative overflow-hidden group-hover:border-white/50 transition duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10"></div>
            <img
              src={VOYAGE_META.logoUrl}
              alt="VOYAGE Minimalist Emblem"
              className="w-full h-full object-contain filter contrast-125"
            />
          </div>
          <div className="absolute -inset-1 rounded-2xl bg-white/10 blur-xl opacity-30 -z-10 group-hover:opacity-60 transition"></div>
        </div>

        {/* Master Headline - Exact Blueprint Copy */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight text-white uppercase max-w-5xl leading-[1.05] mb-6">
          We Build Tech <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            Experiences That Matter.
          </span>
        </h1>

        {/* Subtitle - Exact Blueprint Copy */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-zinc-400 font-normal leading-relaxed mb-10 font-sans">
          VOYAGE helps colleges, startups and organisations plan, promote and execute 
          <span className="text-white font-medium"> hackathons, technical workshops, and technology-driven events</span>. 
          One accountable partner from concept to stagecraft.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenRFP}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-xl shadow-white/10 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <span>Discuss Your Event</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/20 hover:border-white/40 font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-zinc-400" />
            <span>Generate Event SOW</span>
          </button>

          <button
            onClick={() => onNavigate('case-studies')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-wider transition cursor-pointer"
          >
            <span>Explore Past Work ↓</span>
          </button>
        </div>

        {/* Clean Typographic Metrics Grid - Zero Pill Discipline */}
        <div className="w-full max-w-5xl pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              2,000+
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
              GRID Builder Network
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Pre-seeded technical distribution
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              9-Phase
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Delivery Operating System
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              From discovery brief to closeout
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              ₹5K – ₹1L+
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Modular Fixed Pricing
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Transparent scope with zero creep
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              100%
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
              On-Time Technical Execution
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
              Failover Wi-Fi & judging rubrics
            </p>
          </div>
        </div>

        {/* Supporting Line & Segment Ticker */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
          <span>Colleges & Universities</span>
          <span className="text-zinc-700">·</span>
          <span>Student Societies</span>
          <span className="text-zinc-700">·</span>
          <span>AI/ML Developer Bootcamps</span>
          <span className="text-zinc-700">·</span>
          <span>Corporate Innovation Sprints</span>
        </div>
      </div>
    </div>
  );
};
