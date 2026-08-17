'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CLUB_STATS } from '@/data/clubData';

export default function StatsCounter() {
  return (
    <section className="relative py-12 bg-[#0E0E0E] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {CLUB_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pt-6 md:pt-0 px-4 group"
            >
              <p className="font-heading text-5xl sm:text-6xl text-white group-hover:text-[#C89B3C] transition-colors tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-[#C89B3C] font-semibold mt-1">
                {stat.suffix}
              </p>
              <p className="text-sm text-neutral-400 font-medium mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
