import React from 'react';
import { 
  Building2, Users, Globe, ShieldCheck, Sparkles, 
  Share2, ArrowRight, CheckCircle2, MessageSquare, Terminal 
} from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { VOYAGE_META } from '../data/blueprintData';

export const BrandArchitectureSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-16 sm:py-20 bg-black border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Ecosystem Architecture & Community Synergy
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase text-glow">
            Two Pillars. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Unstoppable Developer Gravity.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-sans">
            How VOYAGE operates as an elite commercial event-production company while harnessing 
            the organic reach of the 2,000+ member GRID developer community.
          </p>
        </div>

        {/* 2-Pillar Visual Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Pillar 1: VOYAGE */}
          <div className="glow-card-featured p-6 sm:p-7 rounded-3xl border-white/20 relative shadow-[0_0_30px_rgba(255,255,255,0.06)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-black border border-white/20 p-1 flex items-center justify-center">
                  <VoyageLogo size="xs" animated={true} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider text-glow">
                    VOYAGE
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">The Execution Company</span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider bg-white text-black font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                The Company
              </span>
            </div>

            <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-5">
              The commercial event-management brand. Owns client contracts, college partnerships, 
              budget compliance, vendor coordination, and on-ground execution.
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>B2B proposals, contracts, invoices & SOW execution</span>
              </div>
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Official MLH Tag sanctioning, judging platform & Wi-Fi routing</span>
              </div>
              <div className="flex items-start space-x-2 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Dedicated LinkedIn B2B company page & brand assets</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: GRID */}
          <div className="glow-card p-6 sm:p-7 rounded-3xl border-white/10 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center text-white">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider text-glow">
                    GRID
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">Developer Network</span>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider border border-white/20 text-zinc-300 px-2.5 py-1 rounded-full glow-badge">
                The Community (2K+)
              </span>
            </div>

            <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-5">
              The grassroots technical community. Preserves its 2,000+ member WhatsApp hub intact, 
              providing peer mentorship, developer connections, and verified event turnouts.
            </p>

            <div className="space-y-2.5 font-mono text-xs">
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

        {/* Distribution Channels & Network with Glowmorphism */}
        <div className="glow-card border-white/15 rounded-3xl p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3.5 mb-5 gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-0.5">
                Integrated Distribution Network
              </span>
              <h4 className="text-base font-display font-bold text-white uppercase">
                Channel Stewardship & Ecosystem Integrity
              </h4>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Preserving Credibility · Scaling Commercial Reach
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase block">Digital Presence</span>
              <span className="text-white font-bold block">VOYAGE Platform</span>
              <p className="text-[11px] text-zinc-400 font-sans">
                Official commercial portal with event packages, pricing SOW, and discovery intake.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase block">WhatsApp Hub</span>
              <span className="text-white font-bold block">2,000+ Builders</span>
              <p className="text-[11px] text-zinc-400 font-sans">
                Kept pure & authentic. Zero spam. Organic peer-to-peer developer distribution.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase block">Media & Highlights</span>
              <span className="text-white font-bold block">VOYAGE Studio</span>
              <p className="text-[11px] text-zinc-400 font-sans">
                High-voltage event trailers, 4K photo drops, and hackathon recap reels.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <span className="text-[10px] text-zinc-500 uppercase block">Corporate Network</span>
              <span className="text-white font-bold block">Enterprise Partnerships</span>
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
