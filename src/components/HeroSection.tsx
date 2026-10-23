import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Check } from 'lucide-react';
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
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center bg-black overflow-hidden border-b border-white/10">
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      {/* Ambient Radial Monochrome Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] h-[550px] bg-white/[0.03] blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36 flex flex-col items-center text-center">
        {/* Minimal Luxury Editorial Kicker */}
        <div className="inline-flex items-center space-x-3 mb-8 px-4 py-1.5 rounded-full border border-white/15 bg-zinc-950/80 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-300">
            VOYAGE • ARCHITECTURAL EVENT ENGINEERING
          </span>
        </div>

        {/* Code-Generated 3D Blade Logo with Continuous Specular Light Flow */}
        <div 
          onClick={onReplayIntro}
          className="relative mb-8 group cursor-pointer"
          title="Click to replay the V-Light laser intro"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-zinc-950 border border-white/20 p-2 shadow-2xl relative overflow-hidden group-hover:border-white transition-all duration-500 group-hover:scale-105 flex items-center justify-center">
            <VoyageLogo size="hero" animated={true} />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-2.5 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-widest whitespace-nowrap shadow-xl">
            Replay Laser Flow
          </div>
        </div>

        {/* Master Headline - High Performance Technical Events */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight text-white uppercase max-w-5xl leading-[1.05] mb-6">
          High-Performance <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            Technical Events for Colleges & Startups
          </span>
        </h1>

        {/* Luxury Brand Manifesto Quote */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg sm:text-2xl font-light text-zinc-200 italic font-sans tracking-wide leading-relaxed">
            &ldquo;We believe in flawless delivery. Smooth, high-precision technical event engineering.&rdquo;
          </p>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed mt-4 max-w-2xl mx-auto">
            You provide the campus venue and institutional backing. VOYAGE secures the <span className="text-white font-medium">official MLH season tag</span>, constructs the physical and digital arena, and manages 24/7 on-ground operations with access to 2,000+ developers via GRID.
          </p>
        </div>

        {/* MLH Tag Sanctioning Callout Badge */}
        <div 
          onClick={() => onNavigate('mlh-tag')}
          className="inline-flex items-center space-x-2.5 mb-10 px-4 py-2 rounded-xl bg-zinc-950 border border-white/25 hover:border-white text-white font-mono text-xs cursor-pointer transition-all duration-300 group"
        >
          <Award className="w-4 h-4 text-white shrink-0 group-hover:rotate-12 transition-transform" />
          <span className="font-bold uppercase tracking-wider">Official MLH Accreditation Tag Guaranteed</span>
          <span className="text-zinc-500 text-[11px] group-hover:text-white transition-colors">→ Explore</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenRFP}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-xl shadow-white/10 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <span>Host an Event</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white border border-white/20 hover:border-white/40 font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-zinc-400" />
            <span>SOW Cost Estimator</span>
          </button>
        </div>

        {/* Clean Typographic Metrics - Spacious & Unboxed */}
        <div className="w-full max-w-5xl pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="border-l sm:border-l-0 pl-4 sm:pl-0 border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              Official MLH Tag
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Guaranteed Sanctioning
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Top 2% global hackathon status
            </p>
          </div>

          <div className="border-l pl-4 border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              2,000+
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Active Builders (GRID)
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Pre-seeded developer distribution
            </p>
          </div>

          <div className="border-l pl-4 border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              Zero Drops
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Wi-Fi / Network Downtime
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Dual-band multi-WAN failover
            </p>
          </div>

          <div className="border-l pl-4 border-white/10">
            <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
              100%
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1">
              Turnkey Production
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Venue, volunteers & execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
