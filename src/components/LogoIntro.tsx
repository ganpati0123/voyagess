import React, { useEffect, useState } from 'react';
import { VoyageLogo } from './VoyageLogo';
import { VOYAGE_META } from '../data/blueprintData';

interface LogoIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete, isOpen }) => {
  const [stage, setStage] = useState<'flow' | 'reveal' | 'exit'>('flow');

  useEffect(() => {
    if (!isOpen) return;

    setStage('flow');

    const t1 = setTimeout(() => {
      setStage('reveal');
    }, 1100);

    const t2 = setTimeout(() => {
      setStage('exit');
    }, 2400);

    const t3 = setTimeout(() => {
      onComplete();
    }, 2900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onComplete}
      className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center cursor-pointer transition-opacity duration-700 ease-out select-none ${
        stage === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Deep Space Radial Glow */}
      <div className="absolute inset-0 bg-radial from-zinc-900/40 via-black to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

      {/* Main Flow Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        {/* Code-Generated 3D Sculptural Blade Logo */}
        <div className="relative mb-6">
          <div className="w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
            <VoyageLogo size="hero" animated={true} />
          </div>

          {/* Epic Ambient Light Corona */}
          <div
            className={`absolute inset-0 rounded-full bg-white/10 blur-3xl -z-10 transition-all duration-1000 ${
              stage === 'reveal' ? 'scale-125 opacity-70' : 'scale-90 opacity-20'
            }`}
          ></div>
        </div>

        {/* Revealed High-End Typography */}
        <div className="space-y-3">
          <h1
            className={`text-4xl sm:text-5xl font-display font-black tracking-[0.4em] text-white uppercase transition-all duration-700 ${
              stage === 'flow'
                ? 'opacity-0 translate-y-4'
                : 'opacity-100 translate-y-0'
            }`}
          >
            VOYAGE
          </h1>
          <p
            className={`text-xs font-mono tracking-[0.3em] uppercase text-zinc-400 transition-all duration-700 delay-150 ${
              stage === 'flow'
                ? 'opacity-0 translate-y-3'
                : 'opacity-100 translate-y-0'
            }`}
          >
            TECH EVENTS. REAL IMPACT.
          </p>

          <div
            className={`pt-2 transition-all duration-700 delay-300 ${
              stage === 'reveal' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 border border-white/15 px-3 py-1 rounded-full">
              Full Turnkey Production • Venue + MLH + Volunteers
            </span>
          </div>
        </div>

        {/* Skip Notice */}
        <div className="mt-12 text-[10px] font-mono uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition">
          Click anywhere to skip
        </div>
      </div>
    </div>
  );
};
