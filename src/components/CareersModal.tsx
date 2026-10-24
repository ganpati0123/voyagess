import React, { useState } from 'react';
import { 
  X, Briefcase, MapPin, Clock, Award, CheckCircle2, 
  ArrowRight, ArrowLeft, Upload, Send, Sparkles, ChevronRight, Check, FileText 
} from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { CAREERS_POSITIONS, JobPosition, VOYAGE_CULTURE_PERKS } from '../data/careersData';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoleId?: string;
}

export const CareersModal: React.FC<CareersModalProps> = ({
  isOpen,
  onClose,
  preselectedRoleId,
}) => {
  if (!isOpen) return null;

  const [selectedRoleId, setSelectedRoleId] = useState<string>(
    preselectedRoleId || CAREERS_POSITIONS[0].id
  );
  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('details');
  const [filterDept, setFilterDept] = useState<string>('All');

  // Application Form States
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateLocation, setCandidateLocation] = useState('');
  const [candidatePortfolio, setCandidatePortfolio] = useState('');
  const [candidateExperience, setCandidateExperience] = useState('1-3 Years');
  const [candidatePitch, setCandidatePitch] = useState('');
  const [resumeFileName, setResumeFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCandidateId, setSubmittedCandidateId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState('');

  const currentRole: JobPosition = 
    CAREERS_POSITIONS.find((r) => r.id === selectedRoleId) || CAREERS_POSITIONS[0];

  const filteredRoles = filterDept === 'All' 
    ? CAREERS_POSITIONS 
    : CAREERS_POSITIONS.filter((r) => r.department === filterDept);

  const handleApplyClick = (roleId?: string) => {
    if (roleId) setSelectedRoleId(roleId);
    setActiveTab('apply');
    setValidationError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!candidateName.trim() || !candidateEmail.trim()) {
      setValidationError('Please provide your full name and contact email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `VYG-REC-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedCandidateId(generatedId);
    }, 600);
  };

  const resetForm = () => {
    setSubmittedCandidateId(null);
    setActiveTab('details');
    setCandidateName('');
    setCandidateEmail('');
    setCandidatePhone('');
    setCandidateLocation('');
    setCandidatePortfolio('');
    setCandidatePitch('');
    setResumeFileName('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-zinc-950 border border-white/20 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-zinc-200 glow-card-featured"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-black/60 shrink-0">
          <div className="flex items-center space-x-3 truncate">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 p-1 flex items-center justify-center shrink-0">
              <VoyageLogo size="xs" animated={false} />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block truncate">
                VOYAGE Flight Crew Recruitment
              </span>
              <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-tight truncate">
                Careers & Open Operations Positions
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <span className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[10px] uppercase font-bold border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>5 Open Positions</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success View */}
        {submittedCandidateId ? (
          <div className="p-8 sm:p-12 text-center overflow-y-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(52,211,153,0.2)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                Application Received & Dispatched
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase">
                Welcome to the Selection Radar.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Your application for <strong className="text-white">{currentRole.title}</strong> has been logged into our operational tracking pipeline.
              </p>
            </div>

            <div className="max-w-md mx-auto p-5 rounded-2xl bg-zinc-900/80 border border-white/15 glow-card text-left font-mono text-xs space-y-2.5">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-zinc-400">Candidate Ref ID:</span>
                <span className="text-white font-bold">{submittedCandidateId}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-zinc-400">Role:</span>
                <span className="text-white font-medium truncate max-w-[200px]">{currentRole.title}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-zinc-400">Candidate:</span>
                <span className="text-white">{candidateName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Next Step:</span>
                <span className="text-emerald-400 font-bold">Review within 48 Hours</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3 font-mono text-xs">
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-xl border border-white/20 text-white hover:bg-zinc-900 transition cursor-pointer"
              >
                Browse Other Roles
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white text-black font-extrabold uppercase hover:bg-zinc-200 transition shadow-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Main Two-Pane Interactive Explorer */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Left Pane: Role Directory */}
            <div className="w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r border-white/10 bg-black/40 flex flex-col shrink-0">
              {/* Category Filter Pills */}
              <div className="p-3 sm:p-4 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar font-mono text-[11px]">
                {['All', 'Operations', 'Infrastructure', 'DevRel', 'Production', 'Community'].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setFilterDept(dept)}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      filterDept === dept
                        ? 'bg-white text-black font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>

              {/* Roles List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {filteredRoles.map((role) => {
                  const isSelected = role.id === selectedRoleId;
                  return (
                    <div
                      key={role.id}
                      onClick={() => {
                        setSelectedRoleId(role.id);
                        if (activeTab === 'apply') setActiveTab('details');
                      }}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                        isSelected
                          ? 'bg-zinc-900/90 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.08)]'
                          : 'bg-zinc-950/40 border-white/10 hover:border-white/20 hover:bg-zinc-900/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                          {role.department}
                        </span>
                        {role.badge && (
                          <span className="text-[9px] font-mono uppercase bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/20 font-bold">
                            {role.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-tight">
                        {role.title}
                      </h4>

                      <div className="flex items-center gap-2 mt-2 text-[10px] font-mono text-zinc-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          <span className="truncate max-w-[110px]">{role.location}</span>
                        </span>
                        <span>·</span>
                        <span>{role.type}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Pane: Selected Role Deep Dive or Application Form */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-zinc-950/60 flex flex-col justify-between">
              {activeTab === 'details' ? (
                /* Role Details View */
                <div className="space-y-6">
                  {/* Top Bar of Role Details */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-white font-mono text-[10px] uppercase font-bold border border-white/20">
                        {currentRole.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-300 font-mono text-[10px] uppercase border border-white/10">
                        {currentRole.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-300 font-mono text-[10px] uppercase border border-white/10">
                        {currentRole.experienceLevel}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight mb-2 text-glow">
                      {currentRole.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <MapPin className="w-3.5 h-3.5 text-white" />
                        <span>{currentRole.location}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{currentRole.compensation}</span>
                      </span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      Mission Brief
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      {currentRole.overview}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      Key Operational Responsibilities
                    </h3>
                    <div className="space-y-2 font-sans text-xs sm:text-sm text-zinc-300">
                      {currentRole.responsibilities.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 bg-black/60 p-3 rounded-xl border border-white/10 glow-card">
                          <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      Candidate Profile & Requisites
                    </h3>
                    <div className="space-y-2 font-sans text-xs sm:text-sm text-zinc-300">
                      {currentRole.requirements.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 pl-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Perks */}
                  <div className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-white/15 glow-card">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      <span>Role Perks & Flight Crew Benefits</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-zinc-300">
                      {currentRole.perks.map((perk, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action CTA */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs font-mono text-zinc-400">
                      Applications reviewed rolling every 48 hours.
                    </span>
                    <button
                      onClick={() => handleApplyClick()}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-black font-mono font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>Apply For This Role</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Job Application Form */
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block">
                        Applying For
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-extrabold text-white uppercase">
                        {currentRole.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('details')}
                      className="text-xs font-mono text-zinc-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>View Specs</span>
                    </button>
                  </div>

                  {validationError && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono">
                      {validationError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-white transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={candidatePhone}
                        onChange={(e) => setCandidatePhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-white transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Current City / Campus Affiliation
                      </label>
                      <input
                        type="text"
                        value={candidateLocation}
                        onChange={(e) => setCandidateLocation(e.target.value)}
                        placeholder="Bengaluru / IIT / NIT / BITS"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                        GitHub / Portfolio / LinkedIn URL
                      </label>
                      <input
                        type="url"
                        value={candidatePortfolio}
                        onChange={(e) => setCandidatePortfolio(e.target.value)}
                        placeholder="https://github.com/yourhandle"
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-white transition"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                        Experience Level
                      </label>
                      <select
                        value={candidateExperience}
                        onChange={(e) => setCandidateExperience(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-white transition"
                      >
                        <option value="Student Lead">Student Lead / Campus Hacker</option>
                        <option value="1-3 Years">1 - 3 Years Professional Experience</option>
                        <option value="3-5+ Years">3 - 5+ Years Senior Specialist</option>
                        <option value="Independent Contractor">Independent Contractor / Free Agent</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                      Operational Pitch / Why VOYAGE?
                    </label>
                    <textarea
                      rows={3}
                      value={candidatePitch}
                      onChange={(e) => setCandidatePitch(e.target.value)}
                      placeholder="Tell us about the most challenging technical event, Wi-Fi outage, or hackathon project you ever executed..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white font-sans text-xs focus:outline-none focus:border-white transition leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Simulated File Upload Dropzone */}
                  <div className="border border-dashed border-white/20 rounded-xl p-4 text-center bg-black/40 hover:border-white/40 transition">
                    <Upload className="w-5 h-5 mx-auto text-zinc-400 mb-1" />
                    <span className="text-xs font-mono text-zinc-300 block">
                      {resumeFileName ? `Attached: ${resumeFileName}` : 'Attach Resume or CV (PDF / DOCX)'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setResumeFileName('resume_voyage_candidate.pdf')}
                      className="mt-1 text-[10px] font-mono text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      {resumeFileName ? 'Change file' : 'Simulate file attach'}
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab('details')}
                      className="px-5 py-2.5 rounded-xl border border-white/20 text-zinc-300 hover:text-white text-xs font-mono transition"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-xl bg-white text-black font-mono font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition shadow-lg flex items-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Submit Application'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
