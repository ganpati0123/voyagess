import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, Calendar, Users, Building, FileText } from 'lucide-react';
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

  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState<ServiceTier>(preselectedPackage);
  const [attendees, setAttendees] = useState(initialData?.attendees || 300);
  const [targetDate, setTargetDate] = useState('2026-11-20');
  const [budgetRange, setBudgetRange] = useState('₹40,000 – ₹1,00,000');
  const [internalTasks, setInternalTasks] = useState('Venue and basic faculty permissions confirmed internally');
  const [specialReqs, setSpecialReqs] = useState('');
  const [submittedRequest, setSubmittedRequest] = useState<ProposalRequest | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      internalTasksCovered: internalTasks,
      specialRequirements: specialReqs,
      createdAt: new Date().toISOString(),
    };

    setSubmittedRequest(newRequest);
    onSubmitSuccess(newRequest);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-zinc-950 border border-white/20 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="p-6 bg-black border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-0.5">
              Discovery Brief • Formal Proposal Intake
            </span>
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
              {submittedRequest ? 'RFP Logged Successfully' : 'Request Event Proposal'}
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
          <div className="p-8 text-center space-y-6 font-mono">
            <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-white/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-1">
                Proposal Token Issued
              </span>
              <h4 className="text-2xl font-display font-bold text-white uppercase mb-2">
                Proposal Request Received
              </h4>
              <p className="text-xs text-zinc-300 max-w-md mx-auto font-sans leading-relaxed">
                Our Event Lead has queued your RFP for <strong>{submittedRequest.organisationName}</strong>. 
                We will dispatch our capability deck and schedule a 20-minute discovery call within 24 business hours.
              </p>
            </div>

            <div className="bg-black p-4 rounded-xl border border-white/15 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-zinc-500">RFP REFERENCE:</span>
                <span className="text-white font-bold">{submittedRequest.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">TARGET EVENT:</span>
                <span className="text-zinc-300 capitalize">{submittedRequest.eventType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">PROJECTED SCALE:</span>
                <span className="text-zinc-300">{submittedRequest.expectedAttendees} Attendees</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">DECISION MAKER:</span>
                <span className="text-zinc-300">{submittedRequest.contactName} ({submittedRequest.email})</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-white hover:bg-zinc-200 text-black font-bold uppercase text-xs tracking-wider rounded-xl transition cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* RFP Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 text-xs font-mono">
            <div className="space-y-4">
              <h4 className="text-white uppercase font-bold tracking-wider text-xs border-b border-white/10 pb-2">
                1. Organisation & Lead Stakeholder
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 mb-1">College / Organisation Name *</label>
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g. Delhi Technological University"
                    className="w-full bg-black border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-white font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Authorized Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Dr. Ananya Sen / Faculty Lead"
                    className="w-full bg-black border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-white font-sans text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-400 mb-1">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="coordinator@institution.edu"
                    className="w-full bg-black border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-white font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-black border border-white/15 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-white font-sans text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-white uppercase font-bold tracking-wider text-xs border-b border-white/10 pb-2">
                2. Event Scope & Operational Parameters
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-zinc-400 mb-1">Event Service Tier</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value as ServiceTier)}
                    className="w-full bg-black border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-white cursor-pointer"
                  >
                    {PACKAGES.map((p) => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Expected Attendees</label>
                  <input
                    type="number"
                    min="30"
                    max="5000"
                    value={attendees}
                    onChange={(e) => setAttendees(Number(e.target.value))}
                    className="w-full bg-black border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-white font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1">Target Date</label>
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className="w-full bg-black border border-white/15 rounded-xl p-2 text-white focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Internal Tasks Covered vs Needed from VOYAGE</label>
                <textarea
                  rows={2}
                  value={internalTasks}
                  onChange={(e) => setInternalTasks(e.target.value)}
                  placeholder="e.g. We have venue and sound; need VOYAGE for registration portal, Wi-Fi failover, judging and stage timekeeping"
                  className="w-full bg-black border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-white font-sans text-xs resize-none"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-zinc-500 text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>Zero spam. Strict institutional confidentiality guaranteed.</span>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-bold uppercase text-xs tracking-wider rounded-xl transition flex items-center space-x-2 cursor-pointer shadow-lg shadow-white/10"
              >
                <span>Submit Discovery Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
