'use client';

import React from 'react';
import Image from 'next/image';
import { Dumbbell, ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';
import { FACILITIES } from '@/data/clubData';

export default function FacilitiesSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden text-white" id="facilities">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
            <Dumbbell className="w-4 h-4 text-[#C89B3C]" />
            <span>WORLD-CLASS ARENA & EQUIPMENT</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
            EXPLORE OUR <span className="gold-gradient-text">TRAINING FACILITIES</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Equipped for peak combat performance. From regulation elevated rings to heavy leather bags, power rack stations, and protective safety gear.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group relative rounded-3xl overflow-hidden glass-panel-gold border border-[#C89B3C]/20 bg-[#121212]/80 hover:border-[#C89B3C]/60 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Pro Facility</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl sm:text-3xl tracking-wide text-white group-hover:text-[#C89B3C] transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
