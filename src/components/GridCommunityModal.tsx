import React from 'react';
import { X, Users, Globe, Cpu, ShieldCheck, ArrowUpRight, MessageSquare } from 'lucide-react';
import { VOYAGE_META } from '../data/blueprintData';

interface GridCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GridCommunityModal: React.FC<GridCommunityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-zinc-950 border border-white/20 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-auto">
        <div className="p-6 bg-black border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center text-white">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block">
                Ecosystem Architecture & Synergy
              </span>
              <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                VOYAGE × GRID Developer Ecosystem
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-xs font-mono text-zinc-300">
          <div className="bg-black p-5 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-white font-bold uppercase">Commercial Event Brand</span>
              <span className="text-white font-display font-bold text-sm tracking-wider">VOYAGE</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400 uppercase">Independent Tech Community</span>
              <span className="text-white font-bold">GRID (2,000+ Engineers)</span>
            </div>
          </div>

          <div className="space-y-4 font-sans text-xs text-zinc-300 leading-relaxed">
            <h4 className="font-mono text-white uppercase font-bold text-xs">
              How the Synergy Accelerates Client Events:
            </h4>
            <p>
              Traditional event agencies struggle to recruit qualified developer audiences, while pure developer communities lack professional staging and vendor logistics.
            </p>
            <p>
              <strong>VOYAGE</strong> operates as the commercial production and management partner, while tapping into <strong>GRID&apos;s</strong> community of 2,000+ active coders for mentor matching, beta participant screening, and verified turnout across university tech ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-[11px]">
            <div className="p-3 bg-zinc-900/60 rounded-xl border border-white/10">
              <span className="text-zinc-500 block uppercase text-[9px]">Audience Reach</span>
              <span className="text-white font-bold text-sm">2,000+ Active Builders</span>
              <span className="text-zinc-400 text-[10px] block mt-0.5">WhatsApp & Discord Hub</span>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-xl border border-white/10">
              <span className="text-zinc-500 block uppercase text-[9px]">Community Integrity</span>
              <span className="text-white font-bold text-sm">Zero Spam Mandate</span>
              <span className="text-zinc-400 text-[10px] block mt-0.5">Authentic Community Trust</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition text-xs"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
