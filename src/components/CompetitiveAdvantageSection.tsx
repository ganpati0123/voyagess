import React from 'react';
import { Check, ShieldCheck, Zap, Terminal, AlertCircle } from 'lucide-react';
import { COMPETITIVE_MATRIX } from '../data/blueprintData';

export const CompetitiveAdvantageSection: React.FC = () => {
  return (
    <section id="matrix" className="py-16 sm:py-20 bg-black border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Strategic Distinction
          </div>
          <h2 className="text-xl min-[360px]:text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase text-glow leading-[1.2] sm:leading-[1.15]">
            Why Traditional Alternatives <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Break Down at Scale.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-sans">
            The market does not need another generic event vendor or passive submission form. 
            VOYAGE bridges the fatal gap between online developer discovery and relentless physical execution.
          </p>
        </div>

        {/* Matrix Comparison Table with Glowmorphism */}
        <div className="glow-card border-white/15 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-black/80 border-b border-white/10 p-4 text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold hidden md:grid">
            <div className="md:col-span-3">Alternative Provider</div>
            <div className="md:col-span-4">Where They Stall</div>
            <div className="md:col-span-5 text-white">The VOYAGE Standard</div>
          </div>

          <div className="divide-y divide-white/10 font-sans">
            {COMPETITIVE_MATRIX.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 gap-3 items-center hover:bg-zinc-900/40 transition"
              >
                {/* Alternative */}
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase md:hidden block mb-1">
                    Alternative
                  </span>
                  <h4 className="text-sm sm:text-base font-display font-bold text-white uppercase text-glow">
                    {item.entity}
                  </h4>
                  <span className="text-xs text-zinc-400 block mt-0.5">
                    Focus: {item.strength}
                  </span>
                </div>

                {/* Where they fail */}
                <div className="md:col-span-4 text-xs text-zinc-400">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase md:hidden block mb-1">
                    The Limitation
                  </span>
                  <div className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0 mt-1.5"></span>
                    <span>{item.limitation}</span>
                  </div>
                </div>

                {/* Voyage Advantage */}
                <div className="md:col-span-5 text-xs text-zinc-200">
                  <span className="text-[10px] font-mono text-white uppercase md:hidden block mb-1 font-bold">
                    VOYAGE Advantage
                  </span>
                  <div className="flex items-start space-x-2 bg-black/70 p-3 rounded-xl border border-white/15 glow-card">
                    <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span className="font-medium text-white">{item.voyageAdvantage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Core Proposition Box */}
        <div className="mt-8 p-6 rounded-2xl glow-card-featured border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Core Brand Proposition
            </span>
            <p className="text-base sm:text-lg font-display font-bold text-white uppercase leading-snug">
              &ldquo;VOYAGE plans, promotes and executes technology-driven experiences—from campus hackathons and developer workshops to corporate innovation events.&rdquo;
            </p>
          </div>
          <div className="shrink-0 text-left md:text-right">
            <span className="text-[10px] font-mono text-zinc-400 block">Single Accountable Partner</span>
            <span className="text-xs font-mono font-bold text-white">VOYAGE (White-Glove)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
