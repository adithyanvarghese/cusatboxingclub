'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/clubData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
            <span>ATHLETE VOICES</span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-tight">
            STORIES FROM THE <span className="gold-gradient-text">RINGSIDE</span>
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl glass-panel-gold">
          <Quote className="w-16 h-16 text-[#C89B3C]/30 absolute top-6 left-6 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 space-y-6"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 text-[#C89B3C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-xl sm:text-2xl text-neutral-100 font-medium italic leading-relaxed">
                &quot;{current.quote}&quot;
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C89B3C]"
                />
                <div>
                  <h4 className="font-heading text-2xl text-white tracking-wide">
                    {current.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
                    {current.role} • <span className="text-neutral-400">{current.achievement}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-end gap-3 mt-8 pt-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-black/60 border border-white/10 text-white hover:text-[#C89B3C] hover:border-[#C89B3C] transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-black/60 border border-white/10 text-white hover:text-[#C89B3C] hover:border-[#C89B3C] transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
