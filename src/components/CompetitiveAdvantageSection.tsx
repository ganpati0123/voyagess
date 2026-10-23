import React from 'react';
import { Check, ShieldCheck, Zap, Terminal, AlertCircle } from 'lucide-react';
import { COMPETITIVE_MATRIX } from '../data/blueprintData';

export const CompetitiveAdvantageSection: React.FC = () => {
  return (
    <section id="matrix" className="py-28 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
            Strategic Distinction
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            Why Traditional Alternatives <br />
            <span className="text-zinc-500">Break Down at Scale.</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
            The market does not need another generic event vendor or passive submission form. 
            VOYAGE bridges the fatal gap between online developer discovery and relentless physical execution.
          </p>
        </div>

        {/* Matrix Comparison Table */}
        <div className="border border-white/15 rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-black border-b border-white/10 p-5 text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold hidden md:grid">
            <div className="md:col-span-3">Alternative Provider</div>
            <div className="md:col-span-4">Where They Stall</div>
            <div className="md:col-span-5 text-white">The VOYAGE Standard</div>
          </div>

          <div className="divide-y divide-white/10 font-sans">
            {COMPETITIVE_MATRIX.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-5 gap-4 items-center hover:bg-zinc-900/40 transition"
              >
                {/* Alternative */}
                <div className="md:col-span-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase md:hidden block mb-1">
                    Alternative
                  </span>
                  <h4 className="text-base font-display font-bold text-white uppercase">
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
                  <div className="flex items-start space-x-2.5 bg-black/60 p-3 rounded-xl border border-white/10">
                    <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span className="font-medium text-white">{item.voyageAdvantage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Core Proposition Box (Section 2.1 of PDF) */}
        <div className="mt-12 p-8 rounded-3xl bg-zinc-950 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Core Brand Proposition
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase">
              &ldquo;VOYAGE plans, promotes and executes technology-driven experiences—from campus hackathons and developer workshops to corporate innovation events.&rdquo;
            </h3>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-xs font-mono text-zinc-400 block">Single Accountable Partner</span>
            <span className="text-sm font-mono font-bold text-white">VOYAGE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
