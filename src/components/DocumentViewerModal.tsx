import React, { useState } from 'react';
import { X, Printer, FileText, ShieldCheck, CheckCircle2, ChevronRight, Download, ArrowUpRight } from 'lucide-react';
import { VoyageLogo } from './VoyageLogo';
import { CORPORATE_DOCUMENTS, CorporateDocument } from '../data/documentsData';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocId?: string;
  onOpenRFP: () => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  isOpen,
  onClose,
  initialDocId = 'msa',
  onOpenRFP,
}) => {
  if (!isOpen) return null;

  const [activeDocId, setActiveDocId] = useState<string>(initialDocId);
  const currentDoc: CorporateDocument = CORPORATE_DOCUMENTS[activeDocId] || CORPORATE_DOCUMENTS.msa;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-950 border border-white/20 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden text-zinc-200 glow-card-featured"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-black/60 shrink-0">
          <div className="flex items-center space-x-3 truncate">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/20 p-1 flex items-center justify-center shrink-0">
              <VoyageLogo size="xs" animated={false} />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block truncate">
                VOYAGE Trust & Governance Repository
              </span>
              <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-tight truncate">
                {currentDoc.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/15 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/40 transition cursor-pointer"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-white/10 bg-zinc-950/80 px-4 sm:px-8 py-2 gap-2 text-xs font-mono shrink-0 no-scrollbar">
          {[
            { id: 'msa', label: 'Master Services Agreement' },
            { id: 'network-sla', label: 'Zero-Downtime SLA' },
            { id: 'code-of-conduct', label: 'Code of Conduct' },
            { id: 'privacy-policy', label: 'Privacy Policy' },
            { id: 'about-company', label: 'Company Story' },
            { id: 'press-kit', label: 'Media Kit' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveDocId(tab.id)}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer text-[11px] sm:text-xs ${
                activeDocId === tab.id
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Document Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 font-sans text-xs sm:text-sm bg-black/40">
          {/* Document Header Plate */}
          <div className="border border-white/15 rounded-2xl p-5 sm:p-6 bg-zinc-950/90 glow-card space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-1">
                  Classification: {currentDoc.classification}
                </span>
                <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight uppercase">
                  {currentDoc.title}
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 font-sans mt-0.5">
                  {currentDoc.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:text-right font-mono text-[11px] text-zinc-400">
                <span className="text-white font-bold">{currentDoc.version}</span>
                <span>Effective: {currentDoc.lastUpdated}</span>
                <span className="text-[10px] text-emerald-400 flex items-center sm:justify-end gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  Audited & Active
                </span>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans bg-white/[0.03] p-4 rounded-xl border border-white/10">
              <strong className="text-white font-semibold block mb-1 font-mono uppercase text-[11px] tracking-wider">
                Executive Abstract:
              </strong>
              {currentDoc.summary}
            </div>
          </div>

          {/* Clauses & Sections */}
          <div className="space-y-6">
            {currentDoc.sections.map((section, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-zinc-950/70 glow-card space-y-3"
              >
                <h3 className="text-sm sm:text-base font-display font-bold text-white uppercase tracking-wide flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>{section.heading}</span>
                </h3>

                <div className="space-y-2 text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx} className="pl-3 border-l border-zinc-800">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legal Certification Signoff */}
          <div className="border border-white/15 rounded-2xl p-6 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">
                Authenticity Verification
              </span>
              <p className="text-white font-bold">VOYAGE Operations & Legal Directorate</p>
              <p className="text-[11px] text-zinc-400">Official execution standard for all collegiate and enterprise productions.</p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenRFP();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-black font-mono font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition shadow-lg flex items-center justify-center space-x-1.5 shrink-0"
            >
              <span>Schedule Proposal Review</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
