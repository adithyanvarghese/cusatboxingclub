'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Shield, ArrowUp } from 'lucide-react';

export default function FloatingJoinBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="p-3 rounded-full bg-[#141414]/90 border border-white/10 hover:border-[#C89B3C] text-neutral-400 hover:text-[#C89B3C] shadow-xl backdrop-blur-md transition-all duration-300 transform hover:scale-110"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Floating Join CTA */}
      <Link
        href="/join"
        className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-lg font-bold shadow-2xl shadow-[#C89B3C]/30 hover:shadow-[#C89B3C]/50 transition-all duration-300 transform hover:scale-105"
      >
        <Shield className="w-5 h-5 text-black" />
        <span>JOIN CLUB</span>
      </Link>
    </div>
  );
}
