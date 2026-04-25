import React from 'react';

interface SpiderLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SpiderLoader: React.FC<SpiderLoaderProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const spiderSize = {
    sm: 12,
    md: 16,
    lg: 20
  };

  // High-quality Spider-Man style spider logo
  const SpiderLogo = ({ delay = 0, reverse = false }: { delay?: number; reverse?: boolean }) => (
    <div
      className={`absolute inset-0 animate-spider-orbit ${reverse ? 'animate-reverse' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg
        width={spiderSize[size]}
        height={spiderSize[size]}
        viewBox="0 0 100 100"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
      >
        {/* Outer glow effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="spiderGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="70%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </radialGradient>
        </defs>

        {/* Spider body - main circle */}
        <circle
          cx="50"
          cy="50"
          r="25"
          fill="url(#spiderGradient)"
          stroke="#000000"
          strokeWidth="2"
          filter="url(#glow)"
          className="animate-pulse"
        />

        {/* Spider eyes - white circles */}
        <circle cx="42" cy="42" r="4" fill="#ffffff" />
        <circle cx="58" cy="42" r="4" fill="#ffffff" />

        {/* Spider pupils - black dots */}
        <circle cx="42" cy="42" r="2" fill="#000000" />
        <circle cx="58" cy="42" r="2" fill="#000000" />

        {/* Spider legs - curved and detailed */}
        {/* Top left legs */}
        <path
          d="M25 35 Q15 25 10 20"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-spider-legs"
        />
        <path
          d="M30 30 Q20 20 15 15"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-spider-legs"
          style={{ animationDelay: '0.1s' }}
        />

        {/* Top right legs */}
        <path
          d="M75 35 Q85 25 90 20"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-spider-legs"
        />
        <path
          d="M70 30 Q80 20 85 15"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-spider-legs"
          style={{ animationDelay: '0.1s' }}
        />

        {/* Bottom left legs */}
        <path
          d="M25 65 Q15 75 10 80"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-spider-legs"
        />
        <path
          d="M30 70 Q20 80 15 85"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-spider-legs"
          style={{ animationDelay: '0.1s' }}
        />

        {/* Bottom right legs */}
        <path
          d="M75 65 Q85 75 90 80"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-spider-legs"
        />
        <path
          d="M70 70 Q80 80 85 85"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-spider-legs"
          style={{ animationDelay: '0.1s' }}
        />

        {/* Web lines emanating from center */}
        <g className="animate-spider-web-lines">
          <line x1="50" y1="50" x2="10" y2="10" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="50" x2="90" y2="10" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="50" x2="10" y2="90" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="50" x2="90" y2="90" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
        </g>
      </svg>
    </div>
  );

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Four spider logos in orbital pattern */}
        <SpiderLogo delay={0} />
        <SpiderLogo delay={0.75} reverse={true} />
        <SpiderLogo delay={1.5} />
        <SpiderLogo delay={2.25} reverse={true} />

        {/* Center web effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
    </div>
  );
};

export default SpiderLoader;