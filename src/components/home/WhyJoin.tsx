'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Dumbbell, Flame, Users, BrainCircuit, Award } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/data/clubData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-8 h-8 text-[#C89B3C]" />,
  Dumbbell: <Dumbbell className="w-8 h-8 text-[#C89B3C]" />,
  Flame: <Flame className="w-8 h-8 text-[#C89B3C]" />,
  Users: <Users className="w-8 h-8 text-[#C89B3C]" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8 text-[#C89B3C]" />,
  Award: <Award className="w-8 h-8 text-[#C89B3C]" />
};

export default function WhyJoin() {
  return (
    <section className="relative py-24 bg-[#0E0E0E] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
            <span>THE CUSAT ADVANTAGE</span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-tight">
            WHY TRAIN AT <span className="gold-gradient-text">CUSAT BOXING CLUB</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            We provide an environment designed to elevate your physical output, sharpen your tactical intellect, and build lifelong bonds.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-panel gold-glow-hover flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-16 h-16 rounded-xl bg-[#141414] border border-[#C89B3C]/30 flex items-center justify-center mb-6 group-hover:border-[#C89B3C] group-hover:bg-[#C89B3C]/10 transition-colors">
                  {ICON_MAP[item.icon]}
                </div>
                <h3 className="font-heading text-2xl tracking-wider text-white mb-3 group-hover:text-[#C89B3C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
