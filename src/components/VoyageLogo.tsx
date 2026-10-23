import React from 'react';

interface VoyageLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  animated?: boolean;
}

export const VoyageLogo: React.FC<VoyageLogoProps> = ({
  size = 'md',
  className = '',
  animated = true,
}) => {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    hero: 'w-32 h-32 sm:w-40 sm:h-40',
  };

  const dim = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative inline-flex items-center justify-center ${dim} ${className} select-none`}>
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]"
      >
        <defs>
          {/* Left Wing - Main Bright Crisp White Shading */}
          <linearGradient id="leftFrontBlade" x1="40" y1="40" x2="120" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#f4f4f5" />
            <stop offset="100%" stopColor="#d4d4d8" />
          </linearGradient>

          {/* Left Wing - Fold Shadow Facet (Creates 3D Origami Depth) */}
          <linearGradient id="leftBevelFacet" x1="70" y1="50" x2="120" y2="195" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e4e4e7" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#a1a1aa" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#52525b" stopOpacity="0.9" />
          </linearGradient>

          {/* Right Wing - Titanium Charcoal Facet */}
          <linearGradient id="rightFrontBlade" x1="120" y1="200" x2="205" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#09090b" />
            <stop offset="50%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#27272a" />
          </linearGradient>

          {/* Right Wing - Specular Blade Edge */}
          <linearGradient id="rightBevelFacet" x1="120" y1="200" x2="165" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#18181b" />
            <stop offset="45%" stopColor="#3f3f46" />
            <stop offset="85%" stopColor="#71717a" />
            <stop offset="100%" stopColor="#a1a1aa" />
          </linearGradient>

          {/* Continuous Running Light Sheen */}
          <linearGradient id="laserSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Ambient Glow Filter */}
          <filter id="bladeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Back Glow */}
        <ellipse
          cx="120"
          cy="125"
          rx="60"
          ry="65"
          fill="rgba(255,255,255,0.03)"
          className={animated ? 'animate-pulse' : ''}
        />

        {/* RIGHT WING (Dark Titanium Sculptural Blade) */}
        {/* Right Outer Silhouette */}
        <path
          d="M120 200 C 122 170, 140 100, 208 44 C 180 85, 148 140, 120 200 Z"
          fill="url(#rightFrontBlade)"
        />
        {/* Right Inner Fold Facet with Specular Shading */}
        <path
          d="M120 200 C 130 155, 160 90, 208 44 C 165 78, 134 135, 120 200 Z"
          fill="url(#rightBevelFacet)"
        />
        {/* Right Razor Spine Edge Highlight */}
        <path
          d="M120 200 C 132 155, 165 92, 208 44"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* LEFT WING (Stark White Sculptural Blade) */}
        {/* Left Outer Silhouette */}
        <path
          d="M120 200 C 118 170, 100 100, 32 44 C 60 85, 92 140, 120 200 Z"
          fill="url(#leftFrontBlade)"
        />
        {/* Left Inner Fold Facet (3D Origami Depth Layer) */}
        <path
          d="M120 200 C 110 155, 80 90, 32 44 C 75 78, 106 135, 120 200 Z"
          fill="url(#leftBevelFacet)"
        />
        {/* Left Razor Spine Edge Highlight */}
        <path
          d="M120 200 C 108 155, 75 92, 32 44"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          filter="url(#bladeGlow)"
        />

        {/* Apex Intersection Node (Sharpest Convergence Point) */}
        <path
          d="M117 195 L 120 201 L 123 195 Z"
          fill="#ffffff"
        />

        {/* Continuous Living Light Sweep Animation along Edges */}
        {animated && (
          <>
            <path
              d="M120 200 C 108 155, 75 92, 32 44"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-logo-flow-left"
              style={{
                strokeDasharray: 210,
                strokeDashoffset: 210,
              }}
            />
            <path
              d="M120 200 C 132 155, 165 92, 208 44"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-logo-flow-right"
              style={{
                strokeDasharray: 210,
                strokeDashoffset: 210,
              }}
            />
          </>
        )}
      </svg>

      <style>{`
        @keyframes logoFlowLeft {
          0% {
            stroke-dashoffset: 210;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          65% {
            opacity: 0;
          }
          100% {
            stroke-dashoffset: -210;
            opacity: 0;
          }
        }
        @keyframes logoFlowRight {
          0% {
            stroke-dashoffset: 210;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          65% {
            opacity: 0;
          }
          100% {
            stroke-dashoffset: -210;
            opacity: 0;
          }
        }
        .animate-logo-flow-left {
          animation: logoFlowLeft 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-logo-flow-right {
          animation: logoFlowRight 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.2s;
        }
      `}</style>
    </div>
  );
};
