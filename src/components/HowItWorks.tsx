import React, { useState } from 'react';
import { 
  Building, ShieldCheck, Cpu, Users, Wifi, Award, 
  ArrowRight, CheckCircle2, Flame, Terminal, Sparkles, Check
} from 'lucide-react';

interface HowItWorksProps {
  onOpenRFP: () => void;
  onOpenCalculator: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenRFP, onOpenCalculator }) => {
  const [selectedFeature, setSelectedFeature] = useState<'mlh' | 'tech' | 'venue' | 'volunteers'>('mlh');

  const featureDetails = {
    mlh: {
      title: 'MLH Sanctioning & Global Scoring Architecture',
      desc: 'Our events follow official Major League Hacking guidelines. We implement structured tracks, automated GitHub repository ingestion, and multi-criteria rubrics for transparent, dispute-free judging.',
      bullets: [
        'Guaranteed compliance with official Major League Hacking (MLH) rubrics',
        'Automated GitHub commit tracking and plagiarism detection engine',
        'Real-time scoring portals for industry mentors and faculty judges',
        'Transparent outcomes dossier with verifiable digital participant certificates',
      ],
    },
    tech: {
      title: 'Zero-Downtime Connectivity & Submission Platform',
      desc: 'Network collapse is the #1 reason hackathons fail. VOYAGE deploys enterprise dual-band multi-WAN network infrastructure with automated cellular failover to guarantee uninterrupted throughput for 400+ concurrent developers.',
      bullets: [
        'High-density enterprise wireless access points with automated failover',
        'Custom project submission portal with live GitHub API validation',
        'Projector-ready live leaderboard tracking milestones and countdowns',
        'Instant cryptographic QR certificate distribution post-event',
      ],
    },
    venue: {
      title: 'Venue Curation, Stage Lighting & Physical Staging',
      desc: 'Whether hosted at an on-campus auditorium or a commercial facility, VOYAGE engineers the physical environment from floorplans and power distribution to stage lighting and acoustic calibration.',
      bullets: [
        'Auditorium layout mapping, capacity optimization, and safety clearances',
        'High-output electrical distribution with dedicated inverter failover',
        'Main stage LED screens, live countdowns, and professional audio mixing',
        'Dedicated participant rest zones, meal lines, and hydration checkpoints',
      ],
    },
    volunteers: {
      title: 'Disciplined Volunteer Brigade & On-Ground Leads',
      desc: 'Eliminate student committee burnout. VOYAGE deploys a disciplined, trained on-ground operational crew managing participant queues, mentor escalation, and stage timekeeping across the entire operational window.',
      bullets: [
        'Trained VOYAGE operational coordinators and campus leads',
        '24/7 registration desk, badge check-in, and security verification',
        'Assigned mentor dispatch leads assisting hacking teams across all bays',
        'Dedicated stage manager and timekeeping master of ceremonies (MC)',
      ],
    },
  };

  return (
    <section id="turnkey" className="py-16 sm:py-20 bg-black border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-white mb-3 glow-badge px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>The Turnkey Operating Model</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase text-glow">
            End-to-End Execution. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Zero Administrative Friction.
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed font-sans max-w-xl mx-auto">
            You provide the college venue and student backing. VOYAGE delivers the complete operational stack—from official MLH tag and custom submission portals to volunteer staffing and network reliability.
          </p>
        </div>

        {/* 4 Glowmorphism Interactive Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
          {[
            { id: 'mlh', label: 'MLH Sanctioning', icon: Award, tag: 'Crown USP' },
            { id: 'tech', label: 'Zero-Drop Wi-Fi', icon: Cpu, tag: 'Failover' },
            { id: 'venue', label: 'Venue & Staging', icon: Building, tag: 'Physical' },
            { id: 'volunteers', label: 'Volunteer Crew', icon: Users, tag: '24/7 Leads' },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = selectedFeature === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedFeature(item.id as any)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center space-x-3 ${
                  isSelected
                    ? 'glow-card-featured border-white text-white shadow-[0_0_25px_rgba(255,255,255,0.15)] ring-1 ring-white/30'
                    : 'glow-card border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-xl border shrink-0 ${
                  isSelected ? 'bg-white text-black border-white shadow-md' : 'bg-black text-white border-white/10'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="font-display font-bold uppercase block text-xs tracking-wide text-white truncate">{item.label}</span>
                  <span className="text-[10px] text-zinc-400 block mt-0.5">{item.tag}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Pillar Panel with Glowmorphism */}
        <div className="glow-card-featured border-white/20 rounded-3xl p-6 sm:p-9 mb-10 shadow-[0_0_35px_rgba(255,255,255,0.06)] relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
              Operational Focus
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase mb-2 text-glow">
              {featureDetails[selectedFeature].title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6">
              {featureDetails[selectedFeature].desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 font-mono text-xs">
              {featureDetails[selectedFeature].bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-zinc-200 bg-black/70 p-3 rounded-xl border border-white/10 glow-card">
                  <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <span className="font-sans text-xs leading-snug">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Action Bar */}
        <div className="glow-card border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-display font-bold text-white uppercase">
              Schedule an Event Discovery Briefing
            </h4>
            <p className="text-xs text-zinc-400 font-sans mt-0.5">
              Review your venue constraints, timeline, and participant targets with our senior event architects.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0 font-mono text-xs w-full sm:w-auto">
            <button
              onClick={onOpenCalculator}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-white/20 text-white uppercase hover:bg-zinc-900 transition cursor-pointer text-center"
            >
              Estimate SOW
            </button>
            <button
              onClick={onOpenRFP}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold uppercase tracking-wider transition cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center"
            >
              Request Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
