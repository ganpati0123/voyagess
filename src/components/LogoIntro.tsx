import React, { useEffect, useState } from 'react';
import { VoyageLogo } from './VoyageLogo';
import { VOYAGE_META } from '../data/blueprintData';

interface LogoIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete, isOpen }) => {
  const [stage, setStage] = useState<'laser' | 'glow' | 'reveal' | 'exit'>('laser');

  useEffect(() => {
    if (!isOpen) return;

    setStage('laser');

    // High-tech quick choreography (total ~2.4s)
    const t1 = setTimeout(() => {
      setStage('glow');
    }, 500);

    const t2 = setTimeout(() => {
      setStage('reveal');
    }, 1100);

    const t3 = setTimeout(() => {
      setStage('exit');
    }, 2200);

    const t4 = setTimeout(() => {
      onComplete();
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  return (
    <aside
      aria-label="High-Tech Brand Intro Animation"
      onClick={onComplete}
      className={`fixed inset-0 z-50 bg-[#030303] flex flex-col items-center justify-center cursor-pointer transition-all duration-700 ease-out select-none ${
        stage === 'exit' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background High-Tech Grid & Scanline */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
      
      {/* Ambient Pulsating Specular Corona */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] pointer-events-none transition-all duration-1000 ${
          stage === 'glow' || stage === 'reveal'
            ? 'w-[550px] h-[550px] bg-white/[0.12] scale-125'
            : 'w-[300px] h-[300px] bg-white/[0.04] scale-90'
        }`}
      ></div>

      {/* Cybernetic Expanding Rings */}
      <div
        className={`absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-white/20 transition-all duration-1000 pointer-events-none ${
          stage === 'glow' || stage === 'reveal' ? 'scale-110 opacity-40' : 'scale-75 opacity-10'
        }`}
      ></div>
      <div
        className={`absolute w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full border border-white/10 transition-all duration-1000 delay-150 pointer-events-none ${
          stage === 'reveal' ? 'scale-110 opacity-30' : 'scale-50 opacity-0'
        }`}
      ></div>

      {/* Main High-Tech Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        {/* Glowing 3D Vector Blade Logo */}
        <div className="relative mb-6">
          <div
            className={`w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center transition-all duration-700 ${
              stage === 'laser'
                ? 'scale-90 opacity-70 filter brightness-125'
                : 'scale-100 opacity-100 filter drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]'
            }`}
          >
            <VoyageLogo size="hero" animated={true} />
          </div>
        </div>

        {/* Revealed High-End Typography */}
        <div className="space-y-3">
          <h1
            className={`text-4xl sm:text-6xl font-display font-black tracking-[0.35em] text-white uppercase transition-all duration-700 ${
              stage === 'laser'
                ? 'opacity-0 translate-y-4 filter blur-sm'
                : 'opacity-100 translate-y-0 filter blur-0 text-glow-strong'
            }`}
          >
            VOYAGE
          </h1>
          
          <p
            className={`text-xs sm:text-sm font-sans italic tracking-wider text-zinc-300 transition-all duration-700 delay-100 ${
              stage === 'reveal'
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
            }`}
          >
            &ldquo;{VOYAGE_META.quote}&rdquo;
          </p>

          <div
            className={`pt-2 transition-all duration-700 delay-200 flex items-center justify-center space-x-2 ${
              stage === 'reveal' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-white glow-badge-mlh px-3.5 py-1 rounded-full font-bold">
              OFFICIAL MLH TAG · TURNKEY PRODUCTION
            </span>
          </div>
        </div>

        {/* Skip Notice */}
        <div className="mt-10 text-[9px] font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition">
          Click anywhere to enter immediately [ESC]
        </div>
      </div>
    </aside>
  );
};
