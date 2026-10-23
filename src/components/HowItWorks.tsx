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
  const [selectedFeature, setSelectedFeature] = useState<'venue' | 'mlh' | 'volunteers' | 'tech'>('mlh');

  const featureDetails = {
    venue: {
      title: 'Complete Venue Sourcing & Physical Staging',
      desc: 'Whether hosted at an on-campus auditorium or a commercial convention facility, VOYAGE engineers the physical environment from floorplan layout and power distribution to stage lighting and acoustic calibration.',
      bullets: [
        'Auditorium layout mapping, capacity optimization, and safety clearances',
        'High-output electrical distribution with dedicated inverter failover',
        'Main stage LED walls, countdown displays, and professional audio mixing',
        'Dedicated participant rest zones, meal distribution lines, and hydration checkpoints',
      ],
    },
    mlh: {
      title: 'MLH-Grade Partnership & Judging Workflows',
      desc: 'Our events adhere to international hackathon governance frameworks. We implement standardized challenge tracks, automated GitHub repository ingestion, and multi-criteria rubrics for transparent, dispute-free judging.',
      bullets: [
        'Global competitive tracks adhering to Major League Hacking (MLH) rubrics',
        'Automated GitHub commit tracking and anti-plagiarism verification',
        'Real-time scoring portals for corporate mentors and faculty judges',
        'Audited outcomes dossier and verifiable digital credentials for participants',
      ],
    },
    volunteers: {
      title: 'Dedicated On-Ground Volunteer Brigade',
      desc: 'Eliminate student committee burnout. VOYAGE deploys a disciplined, trained on-ground operational crew managing participant queues, technical escorts, food logistics, and stage timekeeping across the entire operational window.',
      bullets: [
        'Trained VOYAGE operational coordinators and student brand ambassadors',
        '24/7 registration desk, badge check-in, and security verification',
        'Assigned mentor dispatch leads assisting hacking teams across all bays',
        'Dedicated stage manager and timekeeping master of ceremonies (MC)',
      ],
    },
    tech: {
      title: 'Zero-Downtime Connectivity & Submission Platform',
      desc: 'Network collapses remain the leading failure point of hackathons. VOYAGE deploys enterprise dual-band multi-WAN network infrastructure with 5G cellular load-balancing to guarantee uninterrupted throughput for 400+ concurrent developers.',
      bullets: [
        'High-density enterprise wireless access points with automated failover',
        'Proprietary project submission platform with live GitHub integration',
        'Projector-ready live leaderboard tracking project milestones and countdowns',
        'Instant cryptographic QR certificate distribution immediately post-event',
      ],
    },
  };

  return (
    <section id="turnkey" className="py-32 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4 border border-white/10 px-4 py-1.5 rounded-full bg-zinc-950">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>The Turnkey Operating Model</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight uppercase">
            End-to-End Execution. <br />
            <span className="text-zinc-500">Zero Administrative Overhead.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-5 leading-relaxed font-sans max-w-2xl mx-auto">
            University departments and startup founders no longer need to navigate fragmented vendors. 
            VOYAGE delivers the entire operational stack—from venue staging and MLH-standard platforms 
            to volunteer staffing and network reliability.
          </p>
        </div>

        {/* 4 Interactive Feature Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 font-mono text-xs">
          {[
            { id: 'venue', label: 'Venue & Staging', icon: Building },
            { id: 'mlh', label: 'MLH Standards', icon: Award },
            { id: 'volunteers', label: 'Volunteer Brigade', icon: Users },
            { id: 'tech', label: 'Zero-Downtime Tech', icon: Cpu },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = selectedFeature === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedFeature(item.id as any)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-center space-x-3.5 ${
                  isSelected
                    ? 'bg-zinc-900 border-white text-white shadow-xl shadow-white/5 ring-1 ring-white/20'
                    : 'bg-zinc-950/70 border-white/10 text-zinc-400 hover:border-white/25 hover:text-white'
                }`}
              >
                <div className={`p-2.5 rounded-xl border ${
                  isSelected ? 'bg-white text-black border-white' : 'bg-black text-white border-white/10'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-display font-bold uppercase block text-sm tracking-wide">{item.label}</span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">VOYAGE Delivered</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Pillar Panel */}
        <div className="bg-zinc-950 border border-white/20 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-2">
              Operational Domain
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase mb-4">
              {featureDetails[selectedFeature].title}
            </h3>
            <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-10">
              {featureDetails[selectedFeature].desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 font-mono text-xs">
              {featureDetails[selectedFeature].bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-zinc-200 bg-black/60 p-4 rounded-xl border border-white/10">
                  <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span className="font-sans leading-snug">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Callout Bar */}
        <div className="bg-zinc-950 border border-white/15 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-display font-bold text-white uppercase">
              Schedule an Event Discovery Briefing
            </h4>
            <p className="text-xs text-zinc-400 font-sans mt-1.5">
              Review your venue constraints, timeline, and participant targets with our senior event architects.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0 font-mono text-xs">
            <button
              onClick={onOpenCalculator}
              className="px-6 py-3.5 rounded-xl border border-white/20 text-white uppercase hover:bg-zinc-900 transition cursor-pointer"
            >
              Estimate SOW Budget
            </button>
            <button
              onClick={onOpenRFP}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider transition cursor-pointer shadow-lg shadow-white/10"
            >
              Request Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
