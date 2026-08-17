'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Trophy, Award, ChevronLeft, ChevronRight, Medal } from 'lucide-react';
import { MEDAL_HOLDERS } from '@/data/clubData';

export default function MedalHoldersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Duplicate list for infinite continuous ticker feel
  const duplicatedHolders = [...MEDAL_HOLDERS, ...MEDAL_HOLDERS, ...MEDAL_HOLDERS];

  // Auto-slide continuous ticker loop
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5" id="medalists">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C89B3C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-4">
              <Trophy className="w-4 h-4 text-[#C89B3C]" />
              <span>CHAMPIONSHIP PODIUM & VICTORY</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              CUSAT BOXING <span className="gold-gradient-text">ACHIEVEMENTS</span>
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="p-3.5 rounded-full bg-[#141414] border border-white/10 hover:border-[#C89B3C] text-white hover:text-[#C89B3C] transition-all hover:scale-105"
              aria-label="Previous Achievement"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3.5 rounded-full bg-[#141414] border border-white/10 hover:border-[#C89B3C] text-white hover:text-[#C89B3C] transition-all hover:scale-105"
              aria-label="Next Achievement"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Sliding Motion Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedHolders.map((holder, idx) => (
            <div
              key={`${holder.id}-${idx}`}
              className="snap-start flex-none w-80 sm:w-96 h-[440px] rounded-3xl overflow-hidden glass-panel-gold border border-[#C89B3C]/40 bg-[#121212]/90 hover:border-[#C89B3C] transition-all duration-500 group relative"
            >
              {/* Clean Full Photo Display */}
              <Image
                src={holder.image}
                alt="CUSAT Boxing Achievement"
                fill
                sizes="(max-width: 640px) 320px, 384px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-colors duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
