'use client';

import React, { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0 && barRef.current) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            barRef.current.style.width = `${currentProgress}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[60] pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[#C89B3C] via-[#E5C158] to-[#FFF0CA] shadow-[0_0_10px_#C89B3C] transition-all duration-150 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
}
