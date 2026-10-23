import React from 'react';
import { Award, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';
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
    <section id="mlh-tag" className="py-16 sm:py-20 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[300px] bg-white/[0.04] blur-[90px] rounded-full pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Tagline & Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-white mb-3 glow-badge-mlh px-4 py-1.5 rounded-full">
            <Award className="w-4 h-4 text-white" />
            <span className="font-bold">THE CROWN JEWEL GUARANTEE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-[1.1] mb-4 text-glow">
            OFFICIAL MLH TAG <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              FOR YOUR HACKATHON EVENT.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Major League Hacking (MLH) member season sanctioning is the most prestigious badge in developer competitions—awarded to fewer than 2% of collegiate events worldwide. VOYAGE manages end-to-end compliance, paperwork, and technical verification to secure your official status.
          </p>
        </div>

        {/* 4 Stat Highlights with Glowmorphism */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          {MLH_ACCREDITATION.stats.map((stat, i) => (
            <div
              key={i}
              className="glow-card rounded-2xl p-5 text-center border-white/15"
            >
              <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mb-1 tabular-nums text-glow">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-bold mb-0.5">
                {stat.label}
              </div>
              <p className="text-[11px] text-zinc-500 font-sans leading-tight">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* The 4 MLH Strategic Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-10">
          {MLH_ACCREDITATION.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glow-card p-6 sm:p-7 rounded-2xl border-white/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2.5 mb-3">
                  <span className="text-xs font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/20">
                    {pillar.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                    MLH Strategic Advantage
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-white/10 flex items-center space-x-2 text-xs font-mono text-zinc-300">
                <Check className="w-3.5 h-3.5 text-white shrink-0" />
                <span>100% Turnkey Compliance by VOYAGE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Glowmorphism Editorial Callout */}
        <div className="max-w-4xl mx-auto glow-card-featured border-white/25 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                Executive Guarantee
              </span>
              <p className="text-base sm:text-lg font-display font-bold text-white uppercase leading-snug">
                &ldquo;You provide the campus venue and student backing. VOYAGE guarantees the official MLH tag, hardware labs, and flawless on-ground delivery.&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 font-mono text-xs w-full md:w-auto">
              <button
                onClick={onOpenRFP}
                className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold uppercase tracking-wider transition-all active:scale-95 cursor-pointer flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                <span>Secure MLH Sanctioning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
