'use client';

import React from 'react';
import { SPONSORS } from '@/data/clubData';

export default function Partners() {
  return (
    <section className="py-16 bg-[#0A0A0A] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-heading text-xl tracking-widest uppercase text-neutral-400 mb-8 border-b border-[#C89B3C]/30 pb-2 inline-block">
          OUR AFFILIATIONS & PARTNERS
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {SPONSORS.map((sponsor, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl glass-panel border border-white/5 hover:border-[#C89B3C]/50 transition-all duration-300 flex items-center justify-center h-20 grayscale hover:grayscale-0"
            >
              <span className="font-heading text-lg tracking-wider text-neutral-300 hover:text-[#C89B3C] font-bold">
                {sponsor.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
