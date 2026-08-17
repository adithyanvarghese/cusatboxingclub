'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dumbbell, ShieldCheck, CheckCircle2, Award, Zap, ArrowRight, MapPin, Clock, Phone } from 'lucide-react';
import { FACILITIES } from '@/data/clubData';
import { SITE_CONFIG } from '@/lib/seo';

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#070707] text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Dumbbell className="w-3.5 h-3.5" />
          <span>GYM INFRASTRUCTURE & EQUIPMENT</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          CUSAT BOXING <span className="gold-gradient-text">FACILITIES & ARENA</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          State-of-the-art combat sports facilities inside CUSAT Sports Complex. Equipped for technical sparring, power bag training, strength conditioning, and youth cadet safety.
        </p>
      </section>

      {/* Facilities Breakdown Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {FACILITIES.map((facility, index) => (
          <div
            key={facility.id}
            id={facility.id}
            className={`p-8 sm:p-12 rounded-3xl glass-panel-gold border border-[#C89B3C]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="lg:col-span-6 h-80 sm:h-96 rounded-2xl overflow-hidden relative group border border-white/10">
              <Image
                src={facility.image}
                alt={facility.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-bold uppercase tracking-wider">
                Facility #{index + 1}
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#C89B3C] uppercase tracking-widest">INFRASTRUCTURE SPECIFICATIONS</span>
                <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wide mt-1">{facility.name}</h2>
              </div>

              <p className="text-neutral-300 text-base leading-relaxed">{facility.description}</p>

              {/* Feature Checklists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {facility.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-neutral-400">Available to all members during training hours</span>
                <a
                  href="tel:+919544457903"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-lg font-bold tracking-wider shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Phone className="w-4 h-4 fill-current text-black" />
                  <span>CALL TO VISIT GYM</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Gym Inspection Callout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#141414] via-[#1c1914] to-[#141414] border border-[#C89B3C]/50 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] text-[#C89B3C] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <h3 className="font-heading text-4xl text-white uppercase tracking-wide">
            INSPECT OUR GYM & EQUIPMENT IN PERSON
          </h3>

          <p className="text-neutral-300 max-w-2xl mx-auto text-base leading-relaxed">
            Visitors, parents of youth cadets, and interested students are welcome to visit our front desk desk during operating hours to tour our arena.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl font-bold tracking-wider hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-[#C89B3C]/20"
            >
              <MapPin className="w-5 h-5" />
              <span>OPEN GOOGLE MAPS LOCATION</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
