import React from 'react';
import { 
  Briefcase, MapPin, Award, ArrowRight, Sparkles, 
  CheckCircle2, Users, Compass, ChevronRight 
} from 'lucide-react';
import { CAREERS_POSITIONS, VOYAGE_CULTURE_PERKS } from '../data/careersData';

interface CareersSectionProps {
  onOpenCareers: (roleId?: string) => void;
  onOpenRFP: () => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({
  onOpenCareers,
  onOpenRFP,
}) => {
  return (
    <section id="careers" className="py-16 sm:py-24 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[350px] bg-white/[0.03] blur-[110px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-white mb-3 glow-badge px-4 py-1.5 rounded-full">
              <Briefcase className="w-3.5 h-3.5 text-white" />
              <span>VOYAGE FLIGHT CREW · RECRUITMENT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tight uppercase leading-[1.1] mb-3 text-glow">
              Engineered by Builders. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Join the High-Impact Crew.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
              We are assembling an elite team of hackathon operations leads, network engineers, developer advocates, and campus ambassadors redefining technical events across premier universities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 font-mono text-xs">
            <button
              onClick={() => onOpenCareers()}
              className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold uppercase tracking-wider transition cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center justify-center space-x-2"
            >
              <span>Explore All 5 Roles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Culture & Philosophy Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {VOYAGE_CULTURE_PERKS.map((perk, i) => (
            <div
              key={i}
              className="glow-card rounded-2xl p-5 border-white/10 hover:border-white/30 transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                  Pillar 0{i + 1}
                </span>
                <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-tight mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Open Roles Grid */}
        <div className="space-y-3.5 mb-10">
          <div className="flex items-center justify-between font-mono text-xs text-zinc-400 border-b border-white/10 pb-2">
            <span className="uppercase tracking-widest font-bold text-white">Active Operational Openings</span>
            <span className="hidden sm:inline">Rolling Review · 48-Hour Response Time</span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {CAREERS_POSITIONS.map((role) => (
              <div
                key={role.id}
                onClick={() => onOpenCareers(role.id)}
                className="glow-card rounded-2xl p-5 sm:p-6 border-white/15 hover:border-white/40 transition-all cursor-pointer group flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase bg-white/10 text-white px-2.5 py-0.5 rounded-md font-bold border border-white/20">
                      {role.department}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded-md border border-white/10">
                      {role.type}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-zinc-400">
                      {role.experienceLevel}
                    </span>
                    {role.badge && (
                      <span className="text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                        {role.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-tight group-hover:text-glow transition">
                    {role.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                    {role.shortDesc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between lg:justify-center gap-3 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/5">
                  <div className="text-left lg:text-right">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">Compensation / Retainer</span>
                    <span className="text-xs font-mono font-bold text-white">{role.compensation}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCareers(role.id);
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-zinc-900 group-hover:bg-white text-zinc-300 group-hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition border border-white/15 group-hover:border-white flex items-center justify-center space-x-1.5"
                  >
                    <span>View Role & Apply</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Banner */}
        <div className="glow-card-featured rounded-3xl p-6 sm:p-8 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_35px_rgba(255,255,255,0.06)]">
          <div className="text-center sm:text-left max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-1">
              General Roster & Talent Network
            </span>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight">
              Don&apos;t See Your Exact Operational Specialty?
            </h3>
            <p className="text-xs text-zinc-400 font-sans mt-1 leading-relaxed">
              We frequently mobilize specialized technical mentors, AV producers, and design leads for one-off major weekend productions. Drop your details into our flight roster.
            </p>
          </div>

          <button
            onClick={() => onOpenCareers()}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-white/20 hover:border-white bg-zinc-950 text-white font-mono text-xs uppercase tracking-wider transition cursor-pointer shrink-0"
          >
            Submit General Profile
          </button>
        </div>
      </div>
    </section>
  );
};
