'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Sun, Moon, ArrowRight } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '@/data/clubData';

export default function SchedulePreview() {
  const [activeDay, setActiveDay] = useState(WEEKLY_SCHEDULE[0].day);

  const selectedSlot = WEEKLY_SCHEDULE.find((s) => s.day === activeDay) || WEEKLY_SCHEDULE[0];

  return (
    <section id="schedule" className="relative py-24 bg-[#070707] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>KURSPLAN • TIMETABLE</span>
          </div>

          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
            WEEKLY <span className="gold-gradient-text">TRAINING SCHEDULE</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg">
            Train 6 days a week across morning cardio and specialized evening batches for junior cadets, university athletes, and public members.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {WEEKLY_SCHEDULE.map((slot) => (
            <button
              key={slot.day}
              onClick={() => setActiveDay(slot.day)}
              className={`px-5 py-2.5 rounded-full font-heading text-lg tracking-wider uppercase transition-all duration-300 ${
                activeDay === slot.day
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-bold shadow-lg shadow-[#C89B3C]/30 scale-105'
                  : 'bg-[#141414] border border-white/10 text-neutral-300 hover:text-white hover:border-[#C89B3C]/50'
              }`}
            >
              {slot.day}
            </button>
          ))}
        </div>

        {/* Selected Day Timetable Card */}
        <div className="max-w-4xl mx-auto glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#C89B3C]/40 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div>
              <span className="text-xs font-semibold text-[#C89B3C] uppercase tracking-widest">SELECTED DAY</span>
              <h3 className="font-heading text-4xl text-white tracking-wide">{selectedSlot.day} SCHEDULE</h3>
            </div>
            <div className="p-3 rounded-xl bg-[#C89B3C]/20 text-[#C89B3C]">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Morning Batch */}
            <div className={`p-6 rounded-2xl border space-y-3 ${selectedSlot.morning.includes('OFF') ? 'bg-red-950/20 border-red-500/30' : 'bg-black/60 border-white/10'}`}>
              <div className="flex items-center gap-2 text-[#C89B3C]">
                <Sun className="w-5 h-5" />
                <span className="font-heading text-xl uppercase text-white">MORNING BATCH</span>
              </div>
              <p className={`text-sm leading-relaxed ${selectedSlot.morning.includes('OFF') ? 'text-red-400 font-semibold' : 'text-neutral-300'}`}>{selectedSlot.morning}</p>
            </div>

            {/* Evening Batch */}
            <div className={`p-6 rounded-2xl border space-y-3 ${selectedSlot.evening.includes('OFF') ? 'bg-red-950/20 border-red-500/30' : 'bg-black/60 border-white/10'}`}>
              <div className="flex items-center gap-2 text-[#C89B3C]">
                <Moon className="w-5 h-5" />
                <span className="font-heading text-xl uppercase text-white">EVENING BATCH</span>
              </div>
              <p className={`text-sm leading-relaxed ${selectedSlot.evening.includes('OFF') ? 'text-red-400 font-semibold' : 'text-neutral-300'}`}>{selectedSlot.evening}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <span>Location: CUSAT Sports Arena & Ring Room, South Kalamassery</span>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-1.5 text-[#C89B3C] hover:text-white font-heading text-base font-bold tracking-wider"
            >
              <span>FULL INTERACTIVE CALENDAR</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
