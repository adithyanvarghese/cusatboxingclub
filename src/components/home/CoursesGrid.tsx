'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { COURSES } from '@/data/clubData';
import { ArrowUpRight, Shield } from 'lucide-react';

export default function CoursesGrid() {
  return (
    <section id="courses" className="relative py-24 bg-[#070707] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C89B3C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>TRAINING DIVISIONS</span>
          </div>

          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
            OUR <span className="gold-gradient-text">COURSES & DIVISIONS</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Over 1,200 sq. ft. of dedicated combat mats, heavy bags, and competition ring space. Whether you are booking a free trial session or preparing for national podiums, we have the right program for you.
          </p>
        </div>

        {/* 6-Card Fenriz Dual-Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#C89B3C] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with B&W to Color Hover Effect */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                {/* Monochrome Base Image */}
                <img
                  src={course.bwImage}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-700 group-hover:opacity-0"
                />
                {/* Color Image Fade-In on Hover */}
                <img
                  src={course.colorImage}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent" />

                {/* Target Audience Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#C89B3C]/50 text-xs font-semibold text-[#C89B3C]">
                  {course.targetAudience}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-3xl text-white tracking-wide group-hover:text-[#C89B3C] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-[#C89B3C] font-medium tracking-wide">{course.subtitle}</p>
                  <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-end">
                  <Link
                    href={`/courses#${course.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-heading tracking-wider text-[#C89B3C] hover:text-white font-bold group-hover:translate-x-1 transition-all"
                  >
                    <span>EXPLORE DIVISION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Schedule Callout */}
        <div className="mt-16 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl font-bold tracking-wider shadow-lg shadow-[#C89B3C]/20 hover:shadow-[#C89B3C]/40 hover:scale-105 transition-all"
          >
            VIEW ALL COURSES & CURRICULUM
          </Link>
        </div>

      </div>
    </section>
  );
}
