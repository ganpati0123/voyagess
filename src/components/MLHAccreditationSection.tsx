import React from 'react';
import { Award, ShieldCheck, Cpu, Globe, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { MLH_ACCREDITATION } from '../data/blueprintData';

interface MLHAccreditationSectionProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
}

export const MLHAccreditationSection: React.FC<MLHAccreditationSectionProps> = ({
  onOpenRFP,
  onOpenCalculator,
}) => {
  return (
    <section id="mlh-tag" className="py-28 sm:py-36 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-white/[0.02] blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Tagline & Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2.5 text-xs font-mono uppercase tracking-[0.25em] text-zinc-300 mb-6 border border-white/20 px-4 py-1.5 rounded-full bg-zinc-950/90 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
            <span>The Crown Jewel Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight uppercase leading-[1.08] mb-6">
            The Coveted Official MLH Tag. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              Secured for Your Hackathon.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Major League Hacking (MLH) member sanctioning is the most respected badge in global developer events. 
            Less than 2% of collegiate events qualify. VOYAGE guarantees compliance, infrastructure, and official season induction for your event.
          </p>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 max-w-5xl mx-auto">
          {MLH_ACCREDITATION.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-zinc-950/80 border border-white/10 rounded-2xl p-6 text-center hover:border-white/30 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold mb-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-zinc-500 font-sans leading-tight">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* The 4 MLH Strategic Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {MLH_ACCREDITATION.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-zinc-950/60 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-black border border-white/20 flex items-center justify-center text-white">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                    Tier-1 Privilege 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold text-white uppercase mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center space-x-2 text-xs font-mono text-zinc-400">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>100% Turnkey Handled by VOYAGE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Quote Box */}
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-white/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-2">
                Executive Value Proposition
              </span>
              <blockquote className="text-lg sm:text-xl font-display font-bold text-white uppercase leading-snug">
                &ldquo;You provide the campus venue and institutional backing. VOYAGE brings the official MLH tag, judging architecture, and flawless on-ground delivery.&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 font-mono text-xs w-full md:w-auto">
              <button
                onClick={onOpenRFP}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-white/10"
              >
                <span>Secure MLH Status</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
