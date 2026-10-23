import React, { useState } from 'react';
import { 
  CheckCircle2, Clock, Users, ShieldCheck, ChevronRight, 
  Layers, AlertTriangle, FileCode, Terminal, FileCheck
} from 'lucide-react';
import { OPERATING_PHASES, EVENT_ROLES } from '../data/blueprintData';

export const OperatingSystemSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'phases' | 'roles' | 'gonogo'>('phases');

  const currentPhase = OPERATING_PHASES[activePhaseIndex];

  const goNoGoCriteria = [
    { title: 'Authorized Decision Maker & Written Scope', desc: 'Single accountable faculty or corporate leader identified with approved scope definition.' },
    { title: 'Funded Direct Costs + VOYAGE Fee', desc: 'Budget covers all event expenses without relying on uncommitted sponsorship or speculative ticket sales.' },
    { title: 'Advance & Milestone Cash Gate', desc: '50% advance confirmed prior to vendor commitment to safeguard cash flow.' },
    { title: 'Feasible Venue, Date & Capacity', desc: 'Power capacity, air conditioning, and physical space validated for expected peak attendee concurrency.' },
    { title: 'Named Owners for Technical & Venue Workflows', desc: 'Zero unassigned responsibilities across Wi-Fi, audio/visual, check-ins, and stage management.' },
    { title: 'Agreed Cancellation & Change Request Terms', desc: 'Written SOP handling postponements, force majeure, and scope change repricing.' },
    { title: 'Critical Event-Day Failover Protocols', desc: 'Redundant Wi-Fi hotspot backup, offline judging spreadsheet fallback, and inverter power reserve.' },
  ];

  return (
    <section id="operating-system" className="py-28 bg-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-3">
              Section 08 • Operating Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              The 9-Phase Event <br />
              <span className="text-zinc-500">Delivery Operating System.</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-sans">
              We do not treat hackathons or technical events as chaotic experiments. 
              Our execution follows an immutable standard operating procedure with audited artifacts for every phase.
            </p>
          </div>

          {/* Sub-tab Navigation */}
          <div className="flex items-center space-x-1 p-1 bg-zinc-950 border border-white/15 rounded-xl">
            <button
              onClick={() => setActiveTab('phases')}
              className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition ${
                activeTab === 'phases'
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              9-Phase Lifecycle
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition ${
                activeTab === 'roles'
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Named Event Roles
            </button>
            <button
              onClick={() => setActiveTab('gonogo')}
              className={`px-4 py-2 text-xs font-mono font-medium rounded-lg transition ${
                activeTab === 'gonogo'
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Go / No-Go Gate
            </button>
          </div>
        </div>

        {/* TAB 1: 9-PHASE LIFECYCLE */}
        {activeTab === 'phases' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Phase Timeline Selector */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                Click Phase to Inspect Artifacts & Actions
              </span>
              {OPERATING_PHASES.map((p, idx) => {
                const isActive = activePhaseIndex === idx;
                return (
                  <div
                    key={p.phaseNumber}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-zinc-900 border-white text-white ring-1 ring-white'
                        : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold ${
                        isActive ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {p.phaseNumber}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                        {p.name}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-[11px] font-mono text-zinc-400">
                      <span>{p.timeline}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-zinc-600'}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Detailed Inspector Panel */}
            <div className="lg:col-span-7 bg-zinc-950 border border-white/20 p-8 rounded-2xl relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    Operating Phase {currentPhase.phaseNumber} of 9 • {currentPhase.timeline}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white uppercase">
                    {currentPhase.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase block">Accountable Owner</span>
                  <span className="text-xs font-mono font-bold text-white border border-white/15 px-2.5 py-1 rounded inline-block mt-0.5">
                    {currentPhase.ownership}
                  </span>
                </div>
              </div>

              {/* Core Actions */}
              <div className="space-y-4 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                  Mandatory Execution Actions:
                </span>
                <div className="space-y-3">
                  {currentPhase.coreActions.map((action, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-sans">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Artifact Box */}
              <div className="bg-black p-5 rounded-xl border border-white/15 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-mono uppercase text-zinc-400 mb-1">
                    <FileCheck className="w-3.5 h-3.5 text-white" />
                    <span>Required Phase Gate Artifact</span>
                  </div>
                  <h4 className="text-sm font-mono font-bold text-white">
                    {currentPhase.requiredArtifact}
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    Delivered, approved, and archived before next phase gate unlocks.
                  </p>
                </div>
                <span className="px-2 py-1 bg-zinc-900 border border-white/10 rounded text-[10px] font-mono text-zinc-300 shrink-0">
                  Audit Verified
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NAMED EVENT ROLES (Section 8.3 of PDF) */}
        {activeTab === 'roles' && (
          <div className="space-y-6">
            <div className="max-w-2xl text-xs font-mono text-zinc-400 mb-4">
              &ldquo;One person may hold multiple roles on a small event, but every single responsibility must have a named owner.&rdquo; — VOYAGE SOP 8.3
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EVENT_ROLES.map((role) => (
                <div
                  key={role.role}
                  className="bg-zinc-950 p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-display font-bold text-white uppercase">
                        {role.role}
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-400 border border-white/10 px-2 py-0.5 rounded">
                        Lead
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 block mb-4">
                      {role.focus}
                    </span>

                    <ul className="space-y-2">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs text-zinc-300">
                          <span className="w-1 h-1 rounded-full bg-white shrink-0 mt-2"></span>
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: GO / NO-GO CHECKLIST (Section 17 of PDF) */}
        {activeTab === 'gonogo' && (
          <div className="bg-zinc-950 border border-white/15 p-8 rounded-3xl space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                Section 17 • Risk Gate
              </span>
              <h3 className="text-2xl font-display font-bold text-white uppercase">
                The Event Acceptance Protocol
              </h3>
              <p className="text-xs text-zinc-400 mt-2 font-sans">
                VOYAGE only accepts contracts where client success is mathematically achievable. 
                We decline events with unfunded cash commitments, ambiguous decision makers, or unrealistic turnouts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {goNoGoCriteria.map((item, idx) => (
                <div key={idx} className="bg-black p-4 rounded-xl border border-white/10 flex items-start space-x-3">
                  <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center bg-zinc-900 text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-mono font-bold text-white uppercase">{item.title}</h5>
                    <p className="text-xs text-zinc-400 mt-1 leading-snug font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
