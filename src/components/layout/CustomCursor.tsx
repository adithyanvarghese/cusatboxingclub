'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop pointer devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    let rafId: number;
    let mouseX = -100;
    let mouseY = -100;

    const updatePosition = () => {
      if (outerRef.current && innerRef.current) {
        outerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        innerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePosition);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        ref={outerRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#C89B3C] transition-transform duration-300 ease-out ${
          isPointer ? 'w-12 h-12 bg-[#C89B3C]/10 scale-125 border-opacity-80' : 'w-8 h-8 border-opacity-40'
        }`}
      />
      {/* Center Dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 bg-[#C89B3C] rounded-full shadow-[0_0_10px_#C89B3C]"
      />
    </>
  );
}
