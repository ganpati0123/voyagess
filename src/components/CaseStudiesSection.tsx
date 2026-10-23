import React from 'react';
import { Award, Terminal, CheckCircle2, Quote, ArrowUpRight, MapPin, Calendar, Users } from 'lucide-react';
import { VERIFIED_CASE_STUDIES } from '../data/blueprintData';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="proof" className="py-16 sm:py-20 bg-black border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Verified Field Execution
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase text-glow">
            Audited Outcomes. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Zero Fabricated Metrics.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-sans">
            We only publish verified participant attendance, audited repository submissions, 
            and authentic faculty coordinator and engineering lead sign-offs.
          </p>
        </div>

        {/* Case Studies Cards with Glowmorphism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {VERIFIED_CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="glow-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border-white/15 hover:border-white/30 transition shadow-xl"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5 mb-5 text-xs font-mono">
                  <div className="flex items-center space-x-2 text-zinc-300">
                    <span className="text-white font-bold">{study.format}</span>
                    <span className="text-zinc-600">/</span>
                    <span className="text-zinc-400">{study.date}</span>
                  </div>
                  <span className="text-zinc-400 border border-white/10 px-2 py-0.5 rounded text-[10px]">
                    {study.clientType}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white uppercase mb-2 text-glow">
                  {study.title}
                </h3>
                <p className="text-xs text-zinc-300 mb-5 font-sans leading-relaxed">
                  {study.summary}
                </p>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-2.5 bg-black/80 p-3.5 rounded-xl border border-white/10 mb-5 font-mono text-center">
                  <div>
                    <span className="text-lg font-bold text-white block tabular-nums text-glow">{study.participants}</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Attendees</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block tabular-nums text-glow">
                      {study.submissionsCount ? `${study.submissionsCount} Repos` : '100% Labs'}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase">Submissions</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block tabular-nums text-glow">{study.conversionRate}</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Turnout</span>
                  </div>
                </div>

                {/* Challenge & Voyage Role */}
                <div className="space-y-3 mb-5 text-xs font-sans">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      The Operational Challenge:
                    </span>
                    <p className="text-zinc-400 leading-relaxed bg-zinc-950/70 p-3 rounded-lg border border-white/5 text-[11px]">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      VOYAGE Execution Scope:
                    </span>
                    <p className="text-zinc-300 leading-relaxed bg-zinc-950/70 p-3 rounded-lg border border-white/5 text-[11px]">
                      {study.voyageRole}
                    </p>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="space-y-2 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block">
                    Verified Outcomes:
                  </span>
                  <ul className="space-y-1.5">
                    {study.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span className="leading-snug">{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Client Quote */}
              {study.clientQuote && (
                <div className="pt-4 border-t border-white/10 bg-black/70 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-5 rounded-b-3xl">
                  <Quote className="w-4 h-4 text-zinc-500 mb-1.5" />
                  <p className="text-xs text-zinc-300 italic mb-2 font-sans leading-relaxed">
                    &ldquo;{study.clientQuote.text}&rdquo;
                  </p>
                  <div className="text-xs font-mono">
                    <span className="text-white font-bold block">{study.clientQuote.author}</span>
                    <span className="text-zinc-500 text-[10px]">{study.clientQuote.title}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
