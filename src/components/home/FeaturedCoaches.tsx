'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { COACHES } from '@/data/clubData';

export default function FeaturedCoaches() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-3">
              <span>LEADERSHIP & MENTORSHIP</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-tight">
              WORLD-CLASS <span className="gold-gradient-text">COACHING STAFF</span>
            </h2>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-[#C89B3C] font-heading text-xl hover:underline tracking-wider group"
          >
            <span>MEET THE FULL TEAM</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Coach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#C89B3C]/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold">
                  {coach.experience} Exp.
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-3xl text-white tracking-wide group-hover:text-[#C89B3C] transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C]">
                    {coach.role}
                  </p>
                  <p className="text-neutral-400 text-sm mt-3 leading-relaxed line-clamp-3">
                    {coach.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <p className="text-xs font-semibold text-neutral-300 uppercase tracking-widest flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#C89B3C]" /> Key Specialty
                  </p>
                  <p className="text-xs text-neutral-400">{coach.specialty}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
