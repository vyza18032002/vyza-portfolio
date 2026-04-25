import React, { useEffect, useState } from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import SpiderManAnimation from './SpiderManAnimation';

const ScrollSpiderMan: React.FC = () => {
  const scrollDirection = useScrollDirection();
  const [triggerAnimation, setTriggerAnimation] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    if (scrollDirection) {
      setTriggerAnimation(scrollDirection);

      // Reset trigger after animation completes
      const timer = setTimeout(() => {
        setTriggerAnimation(null);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [scrollDirection]);

  return (
    <SpiderManAnimation
      direction={triggerAnimation || 'down'}
      isActive={triggerAnimation !== null}
    />
  );
};

export default ScrollSpiderMan;