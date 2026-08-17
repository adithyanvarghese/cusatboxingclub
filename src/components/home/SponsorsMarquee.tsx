'use client';

import React from 'react';
import { SPONSORS } from '@/data/clubData';

export default function SponsorsMarquee() {
  return (
    <section className="relative py-12 bg-[#080808] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-semibold">
          OFFICIAL PARTNERS & ATHLETIC AFFILIATIONS
        </p>
      </div>

      {/* Ticker marquee container */}
      <div className="flex overflow-hidden select-none space-x-12 no-scrollbar">
        <div className="flex shrink-0 items-center justify-around gap-16 min-w-full animate-marquee">
          {SPONSORS.concat(SPONSORS).map((sponsor, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#141414]/60 border border-white/5 text-neutral-300 font-heading text-2xl tracking-wider hover:text-[#C89B3C] hover:border-[#C89B3C]/40 transition-colors"
            >
              <span>{sponsor.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
