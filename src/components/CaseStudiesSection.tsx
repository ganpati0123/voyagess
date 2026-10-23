import React from 'react';
import { Award, Terminal, CheckCircle2, Quote, ArrowUpRight, MapPin, Calendar, Users } from 'lucide-react';
import { VERIFIED_CASE_STUDIES } from '../data/blueprintData';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="proof" className="py-24 sm:py-32 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
            Verified Field Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            Audited Outcomes. <br />
            <span className="text-zinc-500">Zero Fabricated Metrics.</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
            We only publish verified participant attendance, audited repository submissions, 
            and authentic faculty coordinator and engineering lead sign-offs.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {VERIFIED_CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-zinc-950 rounded-3xl border border-white/15 p-8 flex flex-col justify-between hover:border-white/30 transition shadow-2xl"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6 text-xs font-mono">
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
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-3">
                  {study.title}
                </h3>
                <p className="text-xs text-zinc-300 mb-6 font-sans leading-relaxed">
                  {study.summary}
                </p>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3 bg-black p-4 rounded-xl border border-white/10 mb-6 font-mono text-center">
                  <div>
                    <span className="text-lg font-bold text-white block">{study.participants}</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Attendees</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block">
                      {study.submissionsCount ? `${study.submissionsCount} Repos` : '100% Labs'}
                    </span>
                    <span className="text-[10px] text-zinc-400 uppercase">Submissions</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white block">{study.conversionRate}</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Efficiency</span>
                  </div>
                </div>

                {/* Challenge & Voyage Role */}
                <div className="space-y-4 mb-6 text-xs font-sans">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      The Operational Challenge:
                    </span>
                    <p className="text-zinc-400 leading-relaxed bg-zinc-900/50 p-3 rounded-lg border border-white/5">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      VOYAGE Execution Scope:
                    </span>
                    <p className="text-zinc-300 leading-relaxed bg-zinc-900/50 p-3 rounded-lg border border-white/5">
                      {study.voyageRole}
                    </p>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="space-y-2 mb-6">
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
                <div className="pt-6 border-t border-white/10 bg-black/60 -mx-8 -mb-8 p-8 rounded-b-3xl">
                  <Quote className="w-5 h-5 text-zinc-600 mb-2" />
                  <p className="text-xs text-zinc-300 italic mb-3 font-sans leading-relaxed">
                    &ldquo;{study.clientQuote.text}&rdquo;
                  </p>
                  <div className="text-xs font-mono">
                    <span className="text-white font-bold block">{study.clientQuote.author}</span>
                    <span className="text-zinc-500 text-[11px]">{study.clientQuote.title}</span>
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
