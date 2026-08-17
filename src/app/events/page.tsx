'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Trophy, CheckCircle2, X } from 'lucide-react';
import { UPCOMING_EVENTS, ACHIEVEMENTS } from '@/data/clubData';
import { formatDate } from '@/lib/utils';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [registeredSuccess, setRegisteredSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredSuccess(true);
    setTimeout(() => {
      setRegisteredSuccess(false);
      setSelectedEvent(null);
    }, 2500);
  };

  // Close on ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };
    if (selectedEvent) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Calendar className="w-3.5 h-3.5" />
          <span>TOURNAMENTS, TRIALS & SEMINARS</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          CUSAT BOXING <span className="gold-gradient-text">EVENT CALENDAR</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Stay updated on upcoming All-India University qualifiers, state championship trials, and tactical masterclasses.
        </p>
      </section>

      {/* Upcoming Events Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="mb-8 border-b border-white/10 pb-4">
          <h2 className="font-heading text-4xl text-white tracking-wide">
            UPCOMING <span className="gold-gradient-text">COMPETITIONS & TRIALS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl glass-panel-gold overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C89B3C] text-black font-heading text-lg font-bold">
                  {event.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#C89B3C] font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-white tracking-wide">{event.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{event.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSelectedEvent(event.title)}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-lg font-bold shadow-lg"
                  >
                    REGISTER FOR EVENT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Championships & Results */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 border-b border-white/10 pb-4">
          <h2 className="font-heading text-4xl text-white tracking-wide">
            PAST TOURNAMENT <span className="gold-gradient-text">PODIUM RESULTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#C89B3C]/20 text-[#C89B3C] shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#C89B3C] font-semibold">{item.year} • {item.badge}</span>
                <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <div
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#141414] border border-[#C89B3C] rounded-2xl p-6 relative cursor-default animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {registeredSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#C89B3C] mx-auto animate-bounce" />
                <h3 className="font-heading text-3xl text-white">REGISTRATION CONFIRMED!</h3>
                <p className="text-neutral-300 text-sm">We have logged your slot for {selectedEvent}. See you in the ring!</p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <h3 className="font-heading text-3xl text-white">REGISTER: {selectedEvent}</h3>
                <div>
                  <label className="block text-xs uppercase text-neutral-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-neutral-400 mb-1">CUSAT Roll No / Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 12345678 or phone"
                    className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-neutral-400 mb-1">Weight Class</label>
                  <select className="w-full p-3 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none">
                    <option>Flyweight (51 kg)</option>
                    <option>Featherweight (57 kg)</option>
                    <option>Lightweight (60 kg)</option>
                    <option>Welterweight (69 kg)</option>
                    <option>Middleweight (75 kg)</option>
                    <option>Heavyweight (91+ kg)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#C89B3C] text-black font-heading text-xl font-bold shadow-lg"
                >
                  CONFIRM REGISTRATION
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
