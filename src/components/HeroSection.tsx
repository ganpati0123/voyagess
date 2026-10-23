import React, { useState } from 'react';
import { ArrowRight, Sparkles, Building2, Award, Users, CheckCircle2, XCircle } from 'lucide-react';
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
  const [activeView, setActiveView] = useState<'turnkey' | 'painpoints'>('turnkey');

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center bg-black overflow-hidden border-b border-white/10">
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
      
      {/* Ambient Radial Monochrome Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-white/[0.03] blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
        {/* Editorial Sub-Header Kicker */}
        <div className="inline-flex items-center space-x-3 mb-10 px-4 py-1.5 rounded-full border border-white/15 bg-zinc-950/80 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-300">
            {VOYAGE_META.legalDomain} • COMPLETE TURNKEY PRODUCTION
          </span>
        </div>

        {/* Code-Generated 3D Blade Logo with Continuous Specular Light Flow */}
        <div 
          onClick={onReplayIntro}
          className="relative mb-10 group cursor-pointer"
          title="Click to replay the V-Light laser intro"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-zinc-950 border border-white/20 p-2 shadow-2xl relative overflow-hidden group-hover:border-white transition-all duration-500 group-hover:scale-105 flex items-center justify-center">
            <VoyageLogo size="hero" animated={true} />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-2.5 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-widest whitespace-nowrap shadow-xl">
            Replay Laser Flow
          </div>
        </div>

        {/* Master Headline - Confirmed by User */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight text-white uppercase max-w-5xl leading-[1.05] mb-8">
          High-Performance <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            Technical Events for Colleges & Startups
          </span>
        </h1>

        {/* Polished Executive Subheading */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-zinc-400 font-normal leading-relaxed mb-12 font-sans">
          From 24-hour campus hackathons to enterprise innovation sprints. 
          VOYAGE delivers complete turnkey execution—<span className="text-white font-medium">venue staging, MLH-grade judging platforms, dual-band failover Wi-Fi, and an on-ground volunteer crew</span>—with immediate reach to 2,000+ developers through the GRID network.
        </p>

        {/* Single-Line Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20">
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
            <Sparkles className="w-4 h-4 text-zinc-400" />
            <span>Generate Statement of Work (SOW)</span>
          </button>
        </div>

        {/* The Turnkey Execution Architecture vs Organizer Chaos */}
        <div className="w-full max-w-5xl bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-10 text-left shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-5 mb-8 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-1">
                The Turnkey Delivery Framework
              </span>
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                How VOYAGE Eliminates Event Complexity
              </h3>
            </div>

            {/* Segmented Switcher */}
            <div className="flex items-center space-x-1 p-1 bg-black rounded-xl border border-white/10">
              <button
                onClick={() => setActiveView('turnkey')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                  activeView === 'turnkey'
                    ? 'bg-white text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                The VOYAGE Standard
              </button>
              <button
                onClick={() => setActiveView('painpoints')}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition cursor-pointer ${
                  activeView === 'painpoints'
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                Traditional In-House Burden
              </button>
            </div>
          </div>

          {activeView === 'turnkey' ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-3">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Phase 01</span>
                <h4 className="text-base font-display font-bold text-white uppercase">
                  Institutional Mandate
                </h4>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  You establish the event goals, confirm dates, and approve the transparent scope. Your committee avoids endless operational friction.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-white/30 ring-1 ring-white/20 space-y-3 relative">
                <div className="absolute top-3 right-3 text-[9px] bg-white text-black font-bold px-2 py-0.5 rounded uppercase">
                  Turnkey
                </div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-bold">Phase 02 • VOYAGE</span>
                <h4 className="text-base font-display font-bold text-white uppercase">
                  Full Operations Engine
                </h4>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  We engineer the venue layout, configure dual-band failover Wi-Fi, deploy automated judging portals, and manage 24/7 volunteer shifts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-white/10 space-y-3">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Phase 03</span>
                <h4 className="text-base font-display font-bold text-white uppercase">
                  Prestige & Outcomes
                </h4>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  Take the stage for keynote remarks, network with corporate sponsors, and celebrate verified technical deliverables with zero logistical fatigue.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3 opacity-80">
                <div className="flex items-center space-x-2 text-zinc-400 text-[10px] uppercase font-bold">
                  <XCircle className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Connectivity Collapse</span>
                </div>
                <h4 className="text-base font-display font-bold text-white uppercase">
                  Network & Server Outages
                </h4>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  Standard campus routers overload under 300+ concurrent developers, causing failed project submissions and frustrated participants.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3 opacity-80">
                <div className="flex items-center space-x-2 text-zinc-400 text-[10px] uppercase font-bold">
                  <XCircle className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Deliberation Bottlenecks</span>
                </div>
                <h4 className="text-base font-display font-bold text-white uppercase">
                  Disorganized Judging
                </h4>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  Ad-hoc spreadsheets, missing code repositories, and subjective deliberations delay awards ceremonies into early morning hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3 opacity-80">
                <div className="flex items-center space-x-2 text-zinc-400 text-[10px] uppercase font-bold">
                  <XCircle className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Organizer Burnout</span>
                </div>
                <h4 className="text-base font-display font-bold text-white uppercase">
                  Volunteer Exhaustion
                </h4>
                <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                  Student committees manage registration queues, catering logistics, and sponsor deliverables without standard operating procedures.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Clean Typographic Metrics - Spacious & Unboxed */}
        <div className="w-full max-w-5xl mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-10 text-left">
          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
              2,000+
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1.5">
              Active Builders (GRID)
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 leading-snug">
              Pre-seeded developer distribution
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
              Zero
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1.5">
              Wi-Fi / Network Downtime
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 leading-snug">
              Dual-band multi-WAN failover
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
              MLH Grade
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1.5">
              Judging Workflows
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 leading-snug">
              Automated GitHub repo checks
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
              100%
            </div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mt-1.5">
              Turnkey Accountability
            </div>
            <p className="text-[11px] text-zinc-500 mt-1 leading-snug">
              Venue, volunteers & execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
