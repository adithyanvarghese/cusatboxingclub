'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Sun, Moon, MapPin, ArrowRight, Phone } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '@/data/clubData';

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string>('All');

  const displayedSlots = WEEKLY_SCHEDULE.filter((slot) => {
    if (selectedDay === 'All') return true;
    return slot.day === selectedDay;
  });

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#070707] text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Calendar className="w-3.5 h-3.5" />
          <span>CLASS TIMETABLE • KURSPLAN</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          FULL WEEKLY <span className="gold-gradient-text">TRAINING SCHEDULE</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Open 6 days a week at CUSAT Sports Arena. Find your program schedule for morning cardio, junior cadets, and evening competitive sessions.
        </p>

        {/* Day Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2.5 rounded-full font-heading text-lg tracking-wider uppercase transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-bold shadow-lg shadow-[#C89B3C]/30'
                  : 'bg-[#141414] border border-white/10 text-neutral-300 hover:text-white hover:border-[#C89B3C]/50'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </section>

      {/* Schedule Table / Cards List */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6">
        {displayedSlots.map((slot) => (
          <div
            key={slot.day}
            className="p-8 rounded-3xl glass-panel-gold border border-[#C89B3C]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="md:w-1/4">
              <span className="text-xs font-semibold text-[#C89B3C] uppercase tracking-widest">DAY OF TRAINING</span>
              <h3 className="font-heading text-4xl text-white tracking-wide">{slot.day}</h3>
            </div>

            <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Morning */}
              <div className={`p-4 rounded-xl border space-y-2 ${slot.morning.includes('OFF') ? 'bg-red-950/20 border-red-500/30' : 'bg-black/60 border-white/10'}`}>
                <div className="flex items-center gap-2 text-[#C89B3C] text-xs font-bold uppercase">
                  <Sun className="w-4 h-4" /> MORNING BATCH
                </div>
                <p className={`text-sm ${slot.morning.includes('OFF') ? 'text-red-400 font-semibold' : 'text-neutral-200'}`}>{slot.morning}</p>
              </div>

              {/* Evening */}
              <div className={`p-4 rounded-xl border space-y-2 ${slot.evening.includes('OFF') ? 'bg-red-950/20 border-red-500/30' : 'bg-black/60 border-white/10'}`}>
                <div className="flex items-center gap-2 text-[#C89B3C] text-xs font-bold uppercase">
                  <Moon className="w-4 h-4" /> EVENING BATCH
                </div>
                <p className={`text-sm ${slot.evening.includes('OFF') ? 'text-red-400 font-semibold' : 'text-neutral-200'}`}>{slot.evening}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trial CTA Footer */}
      <section className="mt-20 text-center">
        <a
          href="tel:+919544457903"
          className="inline-flex items-center gap-3 px-9 py-4 rounded-md bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl font-bold tracking-wider shadow-lg shadow-[#C89B3C]/20 hover:scale-105 transition-all"
        >
          <Phone className="w-5 h-5 fill-current text-black" />
          <span>CALL DESK FOR BATCH SLOTS (+91 95444 57903)</span>
        </a>
      </section>
    </main>
  );
}
