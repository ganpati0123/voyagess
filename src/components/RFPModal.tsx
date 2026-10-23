import React, { useState } from 'react';
import { 
  X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, 
  Award, Building, Users, Calendar, Mail, Phone, FileText, Check 
} from 'lucide-react';
import { ServiceTier, ProposalRequest } from '../types';
import { PACKAGES } from '../data/blueprintData';

interface RFPModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: ServiceTier;
  initialData?: {
    attendees?: number;
    duration?: string;
    addons?: string[];
    estimatedTotal?: number;
  };
  onSubmitSuccess: (data: ProposalRequest) => void;
}

export const RFPModal: React.FC<RFPModalProps> = ({
  isOpen,
  onClose,
  preselectedPackage = 'hackathon',
  initialData,
  onSubmitSuccess,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState<ServiceTier>(preselectedPackage);
  const [attendees, setAttendees] = useState(initialData?.attendees || 350);
  const [targetDate, setTargetDate] = useState('2026-11-20');
  const [requireMLH, setRequireMLH] = useState(true);
  const [requireHardwareLab, setRequireHardwareLab] = useState(true);
  const [budgetRange, setBudgetRange] = useState('₹50,000 – ₹1,20,000');
  const [internalTasks, setInternalTasks] = useState('Campus auditorium and basic faculty permissions confirmed');
  const [specialReqs, setSpecialReqs] = useState('');
  const [submittedRequest, setSubmittedRequest] = useState<ProposalRequest | null>(null);
  const [validationError, setValidationError] = useState('');

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    if (step === 1) {
      if (!orgName.trim() || !contactName.trim() || !email.trim()) {
        setValidationError('Please provide your organization name, lead contact, and work email.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Step 3 submission
      const newRequest: ProposalRequest = {
        id: `VYG-RFP-${Math.floor(1000 + Math.random() * 9000)}`,
        organisationName: orgName,
        contactName,
        email,
        phone,
        eventType,
        expectedAttendees: attendees,
        preferredDate: targetDate,
        budgetRange,
        selectedPackage: eventType,
        selectedAddons: initialData?.addons || [],
        internalTasksCovered: internalTasks + (requireMLH ? ' · [Official MLH Tag Requisitioned]' : ''),
        specialRequirements: specialReqs,
        createdAt: new Date().toISOString(),
      };

      setSubmittedRequest(newRequest);
      onSubmitSuccess(newRequest);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-zinc-950 border border-white/20 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="p-6 bg-black border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-0.5">
              Discovery Intake · Step {submittedRequest ? 'Complete' : `${step} of 3`}
            </span>
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
              {submittedRequest ? 'Discovery RFP Confirmed' : 'Instant Discovery RFP Walkthrough'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedRequest ? (
          /* Confirmation Success View */
          <div className="p-8 sm:p-12 text-center space-y-6 font-mono">
            <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-white/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-1">
                Proposal Token Issued
              </span>
              <h4 className="text-2xl font-display font-bold text-white uppercase mb-2">
                Discovery Brief Queued
              </h4>
              <p className="text-xs text-zinc-300 max-w-md mx-auto font-sans leading-relaxed">
                Our Senior Event Director has received the RFP for <strong>{submittedRequest.organisationName}</strong>. 
                We will dispatch your customized Statement of Work and schedule an intro call within 24 business hours.
              </p>
            </div>

            {/* Token Card */}
            <div className="bg-black border border-white/15 p-5 rounded-2xl max-w-md mx-auto text-left space-y-2.5 text-xs">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-zinc-500 uppercase text-[10px]">Reference ID</span>
                <span className="text-white font-bold">{submittedRequest.id}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-zinc-500 uppercase text-[10px]">Event Track</span>
                <span className="text-white uppercase">{submittedRequest.eventType}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-zinc-500 uppercase text-[10px]">Audience Scope</span>
                <span className="text-white">{submittedRequest.expectedAttendees} Developers</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 uppercase text-[10px]">MLH Sanctioning</span>
                <span className="text-white font-bold">{requireMLH ? 'Requested (Secured)' : 'Standard'}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-white text-black font-bold uppercase text-xs tracking-wider hover:bg-zinc-200 transition"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Multi-Step Intake Form */
          <form onSubmit={handleNextStep} className="p-6 sm:p-8 space-y-6">
            
            {/* Step Progress Pills */}
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <div className={`p-2.5 rounded-xl border text-center transition ${
                step >= 1 ? 'border-white text-white bg-zinc-900' : 'border-white/10 text-zinc-500'
              }`}>
                01. Entity & Contact
              </div>
              <div className={`p-2.5 rounded-xl border text-center transition ${
                step >= 2 ? 'border-white text-white bg-zinc-900' : 'border-white/10 text-zinc-500'
              }`}>
                02. MLH & Scope
              </div>
              <div className={`p-2.5 rounded-xl border text-center transition ${
                step >= 3 ? 'border-white text-white bg-zinc-900' : 'border-white/10 text-zinc-500'
              }`}>
                03. Confirmation
              </div>
            </div>

            {validationError && (
              <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-red-200 text-xs font-mono">
                {validationError}
              </div>
            )}

            {/* Step 1: Entity & Contact */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Institution / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SRM Institute / Vertex Systems"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white transition font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Lead Coordinator / Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prof. Arvind Rao / Rahul Sen"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white transition font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="lead@university.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white transition font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white transition font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Select Production Package
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {PACKAGES.map((pkg) => (
                      <button
                        type="button"
                        key={pkg.id}
                        onClick={() => setEventType(pkg.id as ServiceTier)}
                        className={`p-3 rounded-xl border text-left transition font-mono text-xs cursor-pointer ${
                          eventType === pkg.id
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-black text-zinc-300 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <span className="block uppercase text-[11px]">{pkg.name}</span>
                        <span className="text-[10px] opacity-75">{pkg.priceRange}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: MLH & Scope */}
            {step === 2 && (
              <div className="space-y-5">
                {/* MLH Crown Jewel Guarantee Toggle */}
                <div className="bg-black border border-white/20 rounded-2xl p-4.5 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold uppercase text-white">
                            Official MLH Season Sanctioning Tag
                          </span>
                          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white text-black font-bold">
                            USP
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 font-sans mt-0.5 leading-relaxed">
                          Secure official Major League Hacking status, global points, and circuit listing.
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                      <input
                        type="checkbox"
                        checked={requireMLH}
                        onChange={(e) => setRequireMLH(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
                    </label>
                  </div>

                  {requireMLH && (
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-300">
                      <span>MLH Hardware Lab Freight Requisition</span>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={requireHardwareLab}
                          onChange={(e) => setRequireHardwareLab(e.target.checked)}
                          className="rounded border-white/20 bg-black text-white"
                        />
                        <span className="text-[11px] text-zinc-400">Include Oculus & IoT devices</span>
                      </label>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Target Developer Volume
                    </label>
                    <input
                      type="number"
                      min={50}
                      max={2000}
                      step={25}
                      value={attendees}
                      onChange={(e) => setAttendees(Number(e.target.value))}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white transition font-mono"
                    />
                    <span className="text-[10px] text-zinc-500 font-mono mt-1 block">
                      Recommended: 250–500 developers
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Target Event Date
                    </label>
                    <input
                      type="date"
                      value={targetDate}
                      onChange={(e) => setTargetDate(e.target.value)}
                      className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white transition font-mono"
                    />
                    <span className="text-[10px] text-zinc-500 font-mono mt-1 block">
                      Lead time: 3–6 weeks optimal
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Estimated Production Budget Bound
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-black border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white transition font-mono"
                  >
                    <option value="₹10,000 – ₹30,000">₹10,000 – ₹30,000 (Digital Launch / Single Workshop)</option>
                    <option value="₹50,000 – ₹1,20,000">₹50,000 – ₹1,20,000 (Full 24H–48H Campus Hackathon)</option>
                    <option value="₹1,20,000 – ₹2,50,000+">₹1,20,000 – ₹2,50,000+ (Multi-Day Innovation Summit)</option>
                    <option value="Custom Enterprise">Custom Enterprise / DevRel Program</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation & Constraints */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Internal Resources Already Secured (Campus/Faculty)
                  </label>
                  <textarea
                    rows={2}
                    value={internalTasks}
                    onChange={(e) => setInternalTasks(e.target.value)}
                    placeholder="e.g. Campus auditorium booked, basic faculty permissions confirmed..."
                    className="w-full bg-black border border-white/20 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white transition font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Special Challenge Tracks / Corporate Sponsor Priorities (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={specialReqs}
                    onChange={(e) => setSpecialReqs(e.target.value)}
                    placeholder="e.g. Focus on AI/Web3 tracks, need hiring partners, live stream required..."
                    className="w-full bg-black border border-white/20 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-white transition font-sans"
                  />
                </div>

                {/* Summary Box */}
                <div className="bg-black border border-white/10 rounded-2xl p-4 text-xs font-mono space-y-2">
                  <div className="text-zinc-400 uppercase text-[10px] tracking-widest font-bold">
                    Discovery Brief Summary
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-zinc-300">
                    <div>Entity: <span className="text-white font-bold">{orgName}</span></div>
                    <div>Contact: <span className="text-white">{contactName}</span></div>
                    <div>Track: <span className="text-white uppercase">{eventType}</span></div>
                    <div>Scale: <span className="text-white">{attendees} Devs</span></div>
                    <div>MLH Tag: <span className="text-white font-bold">{requireMLH ? 'Guaranteed Tag' : 'No'}</span></div>
                    <div>Budget: <span className="text-white">{budgetRange}</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Footer Navigation */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((step - 1) as any)}
                  className="px-4 py-2.5 rounded-xl border border-white/20 text-zinc-300 hover:text-white flex items-center space-x-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-wider transition cursor-pointer flex items-center space-x-1.5 shadow-lg shadow-white/10"
              >
                <span>{step === 3 ? 'Dispatch Discovery RFP' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
