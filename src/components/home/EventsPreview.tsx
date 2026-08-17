'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function EventsPreview() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-3">
              <Calendar className="w-4 h-4 text-[#C89B3C]" />
              <span>TOURNAMENT FIXTURES & SELECTION TRIALS</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-tight">
              UPCOMING <span className="gold-gradient-text">BOUTS & TRIALS</span>
            </h2>
          </div>
        </div>

        {/* Notice Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-panel-gold border border-[#C89B3C]/40 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden bg-[#121212]/80"
        >
          <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] text-[#C89B3C] flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide">
              NEW BOUT FIXTURES & TRIALS UPDATING SOON
            </h3>
            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Official match schedules, All-India Inter-University selection trial dates, and Kerala state championship fixtures for the upcoming season are currently being scheduled.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.me/919544457903"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl tracking-wider hover:scale-105 transition-transform shadow-lg shadow-[#C89B3C]/20"
            >
              <span>INQUIRE ABOUT TRIAL DATES (+91 95444 57903)</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
