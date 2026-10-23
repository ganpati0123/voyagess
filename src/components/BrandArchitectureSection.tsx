import React from 'react';
import { 
  Building2, Users, Globe, ShieldCheck, Sparkles, 
  Share2, ArrowRight, CheckCircle2, MessageSquare, Terminal 
} from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { VOYAGE_META } from '../data/blueprintData';

export const BrandArchitectureSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-28 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
            Ecosystem Architecture & Community Synergy
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            Two Pillars. <br />
            <span className="text-zinc-500">Unstoppable Developer Gravity.</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
            How VOYAGE operates as an elite commercial event-production company while harnessing 
            the organic reach of the 2,000+ member GRID developer community.
          </p>
        </div>

        {/* 2-Pillar Visual Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pillar 1: VOYAGE */}
          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/20 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-black border border-white/20 p-1 flex items-center justify-center">
                  <VoyageLogo size="sm" animated={true} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                    VOYAGE
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">voyagehacks.in</span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-white text-black font-bold px-2.5 py-1 rounded">
                The Company
              </span>
            </div>

            <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-6">
              The commercial event-management brand. Owns client contracts, college partnerships, 
              budget compliance, vendor coordination, and on-ground execution.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>B2B proposals, contracts, invoices & SOW execution</span>
              </div>
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>MLH-grade workflows, judging platform & Wi-Fi routing</span>
              </div>
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Dedicated LinkedIn B2B company page & brand assets</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: GRID */}
          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/10 relative hover:border-white/25 transition">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                    GRID
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">Developer Network</span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider border border-white/20 text-zinc-300 px-2.5 py-1 rounded">
                The Community (2K+)
              </span>
            </div>

            <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-6">
              The grassroots technical community. Preserves its 2,000+ member WhatsApp hub intact, 
              providing peer mentorship, developer connections, and verified event turnouts.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>2,000+ active coders, builders, and college leads</span>
              </div>
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Zero spam policy: WhatsApp group remains uncommercial</span>
              </div>
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Established LinkedIn community presence maintained</span>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution Channels & Network */}
        <div className="bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                Integrated Distribution Network
              </span>
              <h4 className="text-lg font-display font-bold text-white uppercase">
                Channel Stewardship & Ecosystem Integrity
              </h4>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Preserving Credibility · Scaling Commercial Reach
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase block">Main Website</span>
              <span className="text-white font-bold block">voyagehacks.in</span>
              <p className="text-[11px] text-zinc-400 font-sans">
                Official commercial face with services, pricing SOW, and discovery intake.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase block">WhatsApp Hub</span>
              <span className="text-white font-bold block">2,000+ Members</span>
              <p className="text-[11px] text-zinc-400 font-sans">
                Kept pure & authentic. Zero restructuring. Peer-to-peer technical help.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase block">Instagram & X</span>
              <span className="text-white font-bold block">@voyagehacks</span>
              <p className="text-[11px] text-zinc-400 font-sans">
                High-voltage event trailers, 4K photo drops, and hackathon highlights.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black border border-white/10 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase block">LinkedIn</span>
              <span className="text-white font-bold block">Dedicated B2B Page</span>
              <p className="text-[11px] text-zinc-400 font-sans">
                Case studies, corporate sponsorship deliverables, and institutional reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
