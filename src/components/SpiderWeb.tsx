import React, { useEffect, useRef } from 'react';

const SpiderWeb: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Add some dynamic movement to the web
    const lines = svg.querySelectorAll('line');
    lines.forEach((line, index) => {
      const delay = index * 0.1;
      (line as SVGLineElement).style.animationDelay = `${delay}s`;
    });

    const circles = svg.querySelectorAll('circle');
    circles.forEach((circle, index) => {
      const delay = index * 0.2;
      (circle as SVGCircleElement).style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Radial lines */}
      {Array.from({ length: 16 }, (_, i) => (
        <line
          key={`radial-${i}`}
          x1="500"
          y1="500"
          x2={500 + 450 * Math.cos((i * 22.5 * Math.PI) / 180)}
          y2={500 + 450 * Math.sin((i * 22.5 * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.3"
          className="animate-pulse"
          style={{
            animationDuration: '4s',
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}

      {/* Concentric circles */}
      {Array.from({ length: 10 }, (_, i) => (
        <circle
          key={`circle-${i}`}
          cx="500"
          cy="500"
          r={40 + i * 45}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          className="animate-ping"
          style={{
            animationDuration: '5s',
            animationDelay: `${i * 0.15}s`
          }}
        />
      ))}

      {/* Spider web pattern - diagonal lines */}
      {Array.from({ length: 8 }, (_, i) => (
        <line
          key={`diag-${i}`}
          x1={500 + 450 * Math.cos((i * 45 * Math.PI) / 180)}
          y1={500 + 450 * Math.sin((i * 45 * Math.PI) / 180)}
          x2={500 + 450 * Math.cos(((i + 4) * 45 * Math.PI) / 180)}
          y2={500 + 450 * Math.sin(((i + 4) * 45 * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.15"
          className="animate-pulse"
          style={{
            animationDuration: '6s',
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}

      {/* Additional web strands for more complexity */}
      {Array.from({ length: 12 }, (_, i) => (
        <line
          key={`strand-${i}`}
          x1={500 + 200 * Math.cos((i * 30 * Math.PI) / 180)}
          y1={500 + 200 * Math.sin((i * 30 * Math.PI) / 180)}
          x2={500 + 350 * Math.cos((i * 30 * Math.PI) / 180)}
          y2={500 + 350 * Math.sin((i * 30 * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.1"
          className="animate-pulse"
          style={{
            animationDuration: '3s',
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </svg>
  );
};

export default SpiderWeb;