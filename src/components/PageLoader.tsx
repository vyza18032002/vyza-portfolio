import React, { useEffect, useState } from 'react';
import SpiderLoader from './SpiderLoader';

interface PageLoaderProps {
  children: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add a small delay before showing content for smooth transition
      setTimeout(() => setShowContent(true), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 flex items-center justify-center">
          {/* Animated background web pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" className="animate-pulse">
              <defs>
                <pattern id="webPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#dc2626" strokeWidth="0.5" opacity="0.5"/>
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="20" y1="20" x2="80" y2="80" stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>
                  <line x1="80" y1="20" x2="20" y2="80" stroke="#dc2626" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#webPattern)" />
            </svg>
          </div>

          {/* Main loading content */}
          <div className="text-center relative z-10">
            {/* Large spider logo loader */}
            <div className="mb-8">
              <SpiderLoader size="lg" />
            </div>

            {/* Loading text with spider theme */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-pulse">
                VYZA REDDY
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-mono animate-pulse" style={{animationDelay: '0.5s'}}>
                Loading Portfolio...
              </p>

              {/* Animated progress bar */}
              <div className="w-64 mx-auto mt-8">
                <div className="h-2 bg-red-900/30 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"
                       style={{
                         animation: 'loading-bar 3s ease-in-out',
                         width: '100%'
                       }}>
                  </div>
                </div>
              </div>

              {/* Spider web loading dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '1.5s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating spider particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-red-400/30 rounded-full animate-ping"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Fade out overlay */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} />
        </div>
      )}

      {/* Main content */}
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  );
};

export default PageLoader;