'use client';

import React, { useState } from 'react';
import { Trophy, Award, CheckCircle2 } from 'lucide-react';
import { COACHES, ATHLETES } from '@/data/clubData';

export default function TeamClient() {
  const [activeTab, setActiveTab] = useState<'all' | 'coaches' | 'men' | 'exec'>('all');

  const filteredAthletes = ATHLETES.filter(athlete => {
    if (activeTab === 'all') return true;
    return athlete.category === activeTab;
  });

  const showCoaches = activeTab === 'all' || activeTab === 'coaches';

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0A0A0A] text-white">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Trophy className="w-3.5 h-3.5" />
          <span>MEET THE FIGHTERS & MENTORS • ERNAKULAM & KOCHI</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          CUSAT BOXING <span className="gold-gradient-text">COACHES & VARSITY SQUAD</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          The certified boxing coaches, team captains, and championship athletes representing Cochin University of Science and Technology across Ernakulam and South India.
        </p>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {[
            { id: 'all', label: 'All Roster' },
            { id: 'coaches', label: 'Coaching Staff' },
            { id: 'men', label: "Varsity Squad" },
            { id: 'exec', label: 'Executive Committee' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2.5 rounded-full font-heading text-lg tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-bold shadow-lg shadow-[#C89B3C]/30'
                  : 'bg-[#141414] border border-white/10 text-neutral-300 hover:text-white hover:border-[#C89B3C]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Coaching Staff Section */}
      {showCoaches && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="font-heading text-4xl text-white tracking-wide">
              COACHING <span className="gold-gradient-text">DIRECTORS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COACHES.map((coach) => (
              <div
                key={coach.id}
                className="rounded-2xl glass-panel-gold overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={coach.image}
                    alt={`${coach.name} - ${coach.role} at CUSAT Boxing Club Ernakulam`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-3xl text-white tracking-wide">{coach.name}</h3>
                  <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-widest">{coach.role}</p>
                  <p className="text-neutral-300 text-sm">{coach.bio}</p>
                  <div className="pt-3 border-t border-white/10 space-y-1">
                    {coach.achievements.map((ach, idx) => (
                      <p key={idx} className="text-xs text-neutral-400 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#C89B3C]" /> {ach}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Athletes / Committee Roster Grid */}
      {filteredAthletes.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="font-heading text-4xl text-white tracking-wide">
              VARSITY <span className="gold-gradient-text">ATHLETES & CAPTAINS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAthletes.map((athlete) => (
              <div
                key={athlete.id}
                className="group relative rounded-2xl glass-panel border border-white/10 hover:border-[#C89B3C] overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={athlete.image}
                    alt={`${athlete.name} - CUSAT Boxing Athlete in Ernakulam`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#C89B3C]/50 text-[#C89B3C] text-xs font-semibold">
                    {athlete.weightClass}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-heading text-2xl text-white tracking-wide group-hover:text-[#C89B3C] transition-colors">
                    {athlete.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#C89B3C] uppercase">{athlete.record}</p>
                  <p className="text-xs text-neutral-400">{athlete.department}</p>
                  
                  <div className="pt-2 border-t border-white/10 space-y-1">
                    {athlete.highlights.map((hl, idx) => (
                      <p key={idx} className="text-xs text-neutral-300 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#C89B3C] shrink-0" /> {hl}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
