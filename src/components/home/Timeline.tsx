'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { ACHIEVEMENTS } from '@/data/clubData';

export default function Timeline() {
  return (
    <section className="relative py-24 bg-[#0E0E0E] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
            <span>CHAMPIONSHIP HISTORY</span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-tight">
            HALL OF <span className="gold-gradient-text">ACHIEVEMENTS</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            A timeline of relentless grit, university glory, and national medals won by CUSAT boxers.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#C89B3C] via-white/20 to-transparent" />

          <div className="space-y-12">
            {ACHIEVEMENTS.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Timeline Center Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#141414] border-2 border-[#C89B3C] flex items-center justify-center shadow-[0_0_15px_rgba(200,155,60,0.5)] z-10">
                    <Trophy className="w-4 h-4 text-[#C89B3C]" />
                  </div>

                  {/* Card Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pr-12 text-left sm:text-right' : 'sm:pl-12 text-left'}`}>
                    <div className="p-6 rounded-2xl glass-panel gold-glow-hover space-y-3">
                      <div className={`flex items-center gap-3 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        <span className="font-heading text-3xl text-[#C89B3C] font-bold">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl text-white tracking-wide">
                        {item.title}
                      </h3>

                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {item.athlete && (
                        <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400">
                          <Medal className="w-3.5 h-3.5 text-[#C89B3C]" />
                          <span>Athletes: {item.athlete}</span>
                        </div>
                      )}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
