import React, { useEffect, useState } from 'react';

interface SpiderManAnimationProps {
  direction: 'up' | 'down';
  isActive: boolean;
}

const SpiderManSwingDown: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div className={`fixed top-20 right-10 z-50 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-full scale-95'}`}>
    <div className="relative animate-spiderman-dynamic-swing">
      {/* Enhanced Spider-Man SVG with higher quality graphics */}
      <svg width="140" height="180" viewBox="0 0 140 180" className="drop-shadow-2xl filter brightness-110">
        {/* Advanced gradients and filters */}
        <defs>
          <radialGradient id="maskGradient" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="70%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </radialGradient>
          <radialGradient id="suitGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>
          <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.6"/>
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
          </linearGradient>
          <filter id="spiderGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Enhanced web swinging lines with multiple layers */}
        <g className="animate-pulse">
          <path d="M 110 15 Q 70 55 25 110" stroke="url(#webGradient)" strokeWidth="4" fill="none" opacity="0.8"/>
          <path d="M 100 25 Q 75 45 35 95" stroke="url(#webGradient)" strokeWidth="3" fill="none" opacity="0.6" style={{animationDelay: '0.1s'}}/>
          <path d="M 95 35 Q 80 50 45 85" stroke="url(#webGradient)" strokeWidth="2" fill="none" opacity="0.4" style={{animationDelay: '0.2s'}}/>
        </g>

        {/* Spider-Man Body with enhanced details */}
        {/* Head/Mask with gradient */}
        <ellipse cx="70" cy="40" rx="20" ry="22" fill="url(#maskGradient)" stroke="#b91c1c" strokeWidth="2" filter="url(#spiderGlow)"/>
        {/* Enhanced eyes with reflections */}
        <ellipse cx="60" cy="36" rx="4" ry="5" fill="#ffffff"/>
        <ellipse cx="80" cy="36" rx="4" ry="5" fill="#ffffff"/>
        <circle cx="60" cy="36" r="2" fill="#000000"/>
        <circle cx="80" cy="36" r="2" fill="#000000"/>
        {/* Eye highlights */}
        <circle cx="61" cy="34" r="0.8" fill="#ffffff" opacity="0.8"/>
        <circle cx="81" cy="34" r="0.8" fill="#ffffff" opacity="0.8"/>

        {/* Detailed spider emblem on mask */}
        <g transform="translate(65, 45)">
          <path d="M 0 0 Q 5 4 10 0 Q 5 -3 0 0" fill="#000000"/>
          <circle cx="5" cy="2" r="1.2" fill="#000000"/>
          <path d="M 3 0 L 5 -2 L 7 0" stroke="#000000" strokeWidth="0.8" fill="none"/>
          {/* Additional web details */}
          <path d="M -2 1 L 12 1 M 5 -1 L 5 3" stroke="#000000" strokeWidth="0.3" opacity="0.6"/>
        </g>

        {/* Enhanced torso with suit gradient */}
        <rect x="55" y="55" width="30" height="40" rx="10" fill="url(#suitGradient)" stroke="#1e3a8a" strokeWidth="2"/>
        {/* Detailed spider emblem on chest */}
        <g transform="translate(70, 75)">
          <circle cx="0" cy="0" r="10" fill="#dc2626" stroke="#b91c1c" strokeWidth="1"/>
          <path d="M -8 0 L 0 -8 L 8 0 L 0 8 Z" fill="#000000"/>
          <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
          <circle cx="-4" cy="-4" r="1.2" fill="#ffffff"/>
          <circle cx="4" cy="-4" r="1.2" fill="#ffffff"/>
          <circle cx="-4" cy="4" r="1.2" fill="#ffffff"/>
          <circle cx="4" cy="4" r="1.2" fill="#ffffff"/>
          {/* Center web pattern */}
          <path d="M -6 -6 L 6 6 M 6 -6 L -6 6" stroke="#ffffff" strokeWidth="0.5" opacity="0.7"/>
        </g>

        {/* Enhanced arms with muscle definition */}
        <rect x="40" y="60" width="18" height="8" rx="4" fill="#dc2626" transform="rotate(-25 49 64)"/>
        <rect x="82" y="60" width="18" height="8" rx="4" fill="#dc2626" transform="rotate(25 91 64)"/>
        {/* Detailed hands */}
        <ellipse cx="35" cy="62" rx="5" ry="7" fill="#ffffff" transform="rotate(-25 35 62)"/>
        <ellipse cx="105" cy="62" rx="5" ry="7" fill="#ffffff" transform="rotate(25 105 62)"/>
        {/* Finger details */}
        <circle cx="33" cy="59" r="1" fill="#e5e7eb" transform="rotate(-25 33 59)"/>
        <circle cx="103" cy="59" r="1" fill="#e5e7eb" transform="rotate(25 103 59)"/>

        {/* Enhanced legs */}
        <rect x="58" y="90" width="10" height="30" rx="5" fill="url(#suitGradient)" stroke="#1e3a8a" strokeWidth="1"/>
        <rect x="72" y="90" width="10" height="30" rx="5" fill="url(#suitGradient)" stroke="#1e3a8a" strokeWidth="1"/>
        {/* Detailed feet */}
        <ellipse cx="63" cy="125" rx="7" ry="5" fill="#dc2626" stroke="#b91c1c" strokeWidth="1"/>
        <ellipse cx="77" cy="125" rx="7" ry="5" fill="#dc2626" stroke="#b91c1c" strokeWidth="1"/>
        {/* Boot details */}
        <path d="M 58 120 L 68 120 L 68 122 L 58 122 Z" fill="#b91c1c"/>
        <path d="M 72 120 L 82 120 L 82 122 L 72 122 Z" fill="#b91c1c"/>

        {/* Advanced web shooters */}
        <g transform="translate(52, 85)">
          <rect x="0" y="0" width="5" height="10" rx="2.5" fill="#c0c0c0" stroke="#9ca3af" strokeWidth="1"/>
          <rect x="2" y="-2" width="1" height="3" fill="#404040"/>
          <circle cx="2.5" cy="-3" r="2.5" fill="#404040"/>
          <circle cx="2.5" cy="-3" r="1.5" fill="#6b7280"/>
        </g>
        <g transform="translate(83, 85)">
          <rect x="0" y="0" width="5" height="10" rx="2.5" fill="#c0c0c0" stroke="#9ca3af" strokeWidth="1"/>
          <rect x="2" y="-2" width="1" height="3" fill="#404040"/>
          <circle cx="2.5" cy="-3" r="2.5" fill="#404040"/>
          <circle cx="2.5" cy="-3" r="1.5" fill="#6b7280"/>
        </g>
      </svg>

      {/* Enhanced particle effects */}
      <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-white rounded-full animate-web-particles opacity-70 shadow-lg shadow-white/60"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-200 rounded-full animate-web-particles opacity-50" style={{animationDelay: '0.2s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-red-200 rounded-full animate-web-particles opacity-60" style={{animationDelay: '0.4s'}}></div>
      <div className="absolute top-1/4 right-2/3 w-1 h-1 bg-white rounded-full animate-web-particles opacity-40" style={{animationDelay: '0.6s'}}></div>

      {/* Enhanced web anchor with glow */}
      <div className="absolute -top-3 -right-3 w-5 h-5 bg-white rounded-full animate-web-shoot shadow-2xl shadow-white/70 animate-pulse"></div>

      {/* Dynamic motion trail */}
      <div className="absolute -top-4 -right-4 w-2 h-48 bg-gradient-to-b from-white/80 via-white/30 to-transparent animate-pulse rounded-full blur-sm"></div>
      <div className="absolute -top-2 -right-2 w-1 h-40 bg-gradient-to-b from-red-200/60 via-red-200/20 to-transparent animate-pulse rounded-full" style={{animationDelay: '0.3s'}}></div>
    </div>
  </div>
);

const SpiderManClimbUp: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <div className={`fixed bottom-20 left-10 z-50 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-full scale-95'}`}>
    <div className="relative animate-spiderman-dynamic-climb">
      {/* Enhanced Spider-Man SVG - Climbing Up with higher quality */}
      <svg width="140" height="180" viewBox="0 0 140 180" className="drop-shadow-2xl filter brightness-110" style={{transform: 'scaleY(-1)'}}>
        {/* Advanced gradients and filters */}
        <defs>
          <radialGradient id="maskGradientUp" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="70%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </radialGradient>
          <radialGradient id="suitGradientUp" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </radialGradient>
          <linearGradient id="webGradientUp" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.6"/>
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1"/>
          </linearGradient>
          <filter id="spiderGlowUp" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Enhanced web climbing lines with multiple layers */}
        <g className="animate-pulse">
          <path d="M 25 110 Q 70 55 115 15" stroke="url(#webGradientUp)" strokeWidth="4" fill="none" opacity="0.8"/>
          <path d="M 35 95 Q 55 75 105 25" stroke="url(#webGradientUp)" strokeWidth="3" fill="none" opacity="0.6" style={{animationDelay: '0.1s'}}/>
          <path d="M 45 85 Q 60 70 95 35" stroke="url(#webGradientUp)" strokeWidth="2" fill="none" opacity="0.4" style={{animationDelay: '0.2s'}}/>
        </g>

        {/* Spider-Man Body - Climbing pose with enhanced details */}
        {/* Head/Mask with gradient */}
        <ellipse cx="70" cy="40" rx="20" ry="22" fill="url(#maskGradientUp)" stroke="#b91c1c" strokeWidth="2" filter="url(#spiderGlowUp)"/>
        {/* Enhanced eyes with reflections */}
        <ellipse cx="60" cy="36" rx="4" ry="5" fill="#ffffff"/>
        <ellipse cx="80" cy="36" rx="4" ry="5" fill="#ffffff"/>
        <circle cx="60" cy="36" r="2" fill="#000000"/>
        <circle cx="80" cy="36" r="2" fill="#000000"/>
        {/* Eye highlights */}
        <circle cx="61" cy="34" r="0.8" fill="#ffffff" opacity="0.8"/>
        <circle cx="81" cy="34" r="0.8" fill="#ffffff" opacity="0.8"/>

        {/* Detailed spider emblem on mask */}
        <g transform="translate(65, 45)">
          <path d="M 0 0 Q 5 4 10 0 Q 5 -3 0 0" fill="#000000"/>
          <circle cx="5" cy="2" r="1.2" fill="#000000"/>
          <path d="M 3 0 L 5 -2 L 7 0" stroke="#000000" strokeWidth="0.8" fill="none"/>
          {/* Additional web details */}
          <path d="M -2 1 L 12 1 M 5 -1 L 5 3" stroke="#000000" strokeWidth="0.3" opacity="0.6"/>
        </g>

        {/* Enhanced torso - leaning back for climbing with suit gradient */}
        <rect x="55" y="55" width="30" height="40" rx="10" fill="url(#suitGradientUp)" stroke="#1e3a8a" strokeWidth="2" transform="skewY(8)"/>
        {/* Detailed spider emblem on chest */}
        <g transform="translate(70, 75)">
          <circle cx="0" cy="0" r="10" fill="#dc2626" stroke="#b91c1c" strokeWidth="1"/>
          <path d="M -8 0 L 0 -8 L 8 0 L 0 8 Z" fill="#000000"/>
          <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
          <circle cx="-4" cy="-4" r="1.2" fill="#ffffff"/>
          <circle cx="4" cy="-4" r="1.2" fill="#ffffff"/>
          <circle cx="-4" cy="4" r="1.2" fill="#ffffff"/>
          <circle cx="4" cy="4" r="1.2" fill="#ffffff"/>
          {/* Center web pattern */}
          <path d="M -6 -6 L 6 6 M 6 -6 L -6 6" stroke="#ffffff" strokeWidth="0.5" opacity="0.7"/>
        </g>

        {/* Enhanced arms - reaching up with muscle definition */}
        <rect x="40" y="50" width="18" height="8" rx="4" fill="#dc2626" transform="rotate(-50 49 54)"/>
        <rect x="82" y="50" width="18" height="8" rx="4" fill="#dc2626" transform="rotate(50 91 54)"/>
        {/* Detailed hands - gripping */}
        <ellipse cx="30" cy="45" rx="5" ry="7" fill="#ffffff" transform="rotate(-50 30 45)"/>
        <ellipse cx="110" cy="45" rx="5" ry="7" fill="#ffffff" transform="rotate(50 110 45)"/>
        {/* Finger details */}
        <circle cx="28" cy="42" r="1" fill="#e5e7eb" transform="rotate(-50 28 42)"/>
        <circle cx="108" cy="42" r="1" fill="#e5e7eb" transform="rotate(50 108 42)"/>

        {/* Enhanced legs - climbing position */}
        <rect x="58" y="90" width="10" height="30" rx="5" fill="url(#suitGradientUp)" stroke="#1e3a8a" strokeWidth="1" transform="rotate(20 63 105)"/>
        <rect x="72" y="90" width="10" height="30" rx="5" fill="url(#suitGradientUp)" stroke="#1e3a8a" strokeWidth="1" transform="rotate(-20 77 105)"/>
        {/* Detailed feet - pushing against surface */}
        <ellipse cx="55" cy="118" rx="7" ry="5" fill="#dc2626" stroke="#b91c1c" strokeWidth="1" transform="rotate(20 55 118)"/>
        <ellipse cx="85" cy="118" rx="7" ry="5" fill="#dc2626" stroke="#b91c1c" strokeWidth="1" transform="rotate(-20 85 118)"/>
        {/* Boot details */}
        <path d="M 50 113 L 60 113 L 60 115 L 50 115 Z" fill="#b91c1c" transform="rotate(20 55 114)"/>
        <path d="M 80 113 L 90 113 L 90 115 L 80 115 Z" fill="#b91c1c" transform="rotate(-20 85 114)"/>

        {/* Advanced web shooters */}
        <g transform="translate(52, 85)">
          <rect x="0" y="0" width="5" height="10" rx="2.5" fill="#c0c0c0" stroke="#9ca3af" strokeWidth="1"/>
          <rect x="2" y="-2" width="1" height="3" fill="#404040"/>
          <circle cx="2.5" cy="-3" r="2.5" fill="#404040"/>
          <circle cx="2.5" cy="-3" r="1.5" fill="#6b7280"/>
        </g>
        <g transform="translate(83, 85)">
          <rect x="0" y="0" width="5" height="10" rx="2.5" fill="#c0c0c0" stroke="#9ca3af" strokeWidth="1"/>
          <rect x="2" y="-2" width="1" height="3" fill="#404040"/>
          <circle cx="2.5" cy="-3" r="2.5" fill="#404040"/>
          <circle cx="2.5" cy="-3" r="1.5" fill="#6b7280"/>
        </g>
      </svg>

      {/* Enhanced particle effects */}
      <div className="absolute bottom-1/2 left-1/2 w-3 h-3 bg-white rounded-full animate-web-particles opacity-70 shadow-lg shadow-white/60"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-200 rounded-full animate-web-particles opacity-50" style={{animationDelay: '0.2s'}}></div>
      <div className="absolute bottom-2/3 left-1/4 w-1.5 h-1.5 bg-red-200 rounded-full animate-web-particles opacity-60" style={{animationDelay: '0.4s'}}></div>
      <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-white rounded-full animate-web-particles opacity-40" style={{animationDelay: '0.6s'}}></div>

      {/* Enhanced web anchor with glow */}
      <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-white rounded-full animate-web-shoot shadow-2xl shadow-white/70 animate-pulse"></div>

      {/* Dynamic climbing motion trail */}
      <div className="absolute -bottom-4 -left-4 w-2 h-48 bg-gradient-to-t from-white/80 via-white/30 to-transparent animate-pulse rounded-full blur-sm"></div>
      <div className="absolute -bottom-2 -left-2 w-1 h-40 bg-gradient-to-t from-red-200/60 via-red-200/20 to-transparent animate-pulse rounded-full" style={{animationDelay: '0.3s'}}></div>
    </div>
  </div>
);

const SpiderManAnimation: React.FC<SpiderManAnimationProps> = ({ direction, isActive }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShowAnimation(true);
      const timer = setTimeout(() => setShowAnimation(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <>
      {direction === 'down' && <SpiderManSwingDown isActive={showAnimation} />}
      {direction === 'up' && <SpiderManClimbUp isActive={showAnimation} />}
    </>
  );
};

export default SpiderManAnimation;