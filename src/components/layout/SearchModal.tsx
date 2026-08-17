'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, User, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { COACHES, ATHLETES, UPCOMING_EVENTS } from '@/data/clubData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  const filteredCoaches = query
    ? COACHES.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.role.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredAthletes = query
    ? ATHLETES.filter(a => a.name.toLowerCase().includes(query.toLowerCase()) || a.weightClass.toLowerCase().includes(query.toLowerCase()) || a.department.toLowerCase().includes(query.toLowerCase()))
    : [];

  const filteredEvents = query
    ? UPCOMING_EVENTS.filter(e => e.title.toLowerCase().includes(query.toLowerCase()) || e.location.toLowerCase().includes(query.toLowerCase()) || e.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#141414] border border-[#C89B3C]/40 rounded-xl overflow-hidden shadow-2xl shadow-black/80 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <Search className="w-5 h-5 text-[#C89B3C]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search coaches, athletes, upcoming events, or gold medals..."
            className="flex-1 bg-transparent text-white placeholder-neutral-500 focus:outline-none text-base"
            autoFocus
          />
          <button
            onClick={handleClose}
            className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!query && (
            <div className="text-center py-8 text-neutral-500 text-sm">
              Type to search CUSAT Boxing athletes, tournaments, or coach credentials...
            </div>
          )}

          {/* Coaches */}
          {filteredCoaches.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" /> Coaches
              </p>
              <div className="space-y-2">
                {filteredCoaches.map((coach) => (
                  <Link
                    key={coach.id}
                    href="/team"
                    onClick={handleClose}
                    className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-white/5 border border-white/5 hover:border-[#C89B3C]/40 transition-all"
                  >
                    <div>
                      <p className="text-white font-medium">{coach.name}</p>
                      <p className="text-xs text-neutral-400">{coach.role}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Athletes */}
          {filteredAthletes.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" /> Athletes
              </p>
              <div className="space-y-2">
                {filteredAthletes.map((athlete) => (
                  <Link
                    key={athlete.id}
                    href="/team"
                    onClick={handleClose}
                    className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-white/5 border border-white/5 hover:border-[#C89B3C]/40 transition-all"
                  >
                    <div>
                      <p className="text-white font-medium">{athlete.name}</p>
                      <p className="text-xs text-neutral-400">{athlete.weightClass} • {athlete.department}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Events */}
          {filteredEvents.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Upcoming Events
              </p>
              <div className="space-y-2">
                {filteredEvents.map((event) => (
                  <Link
                    key={event.id}
                    href="/events"
                    onClick={handleClose}
                    className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-white/5 border border-white/5 hover:border-[#C89B3C]/40 transition-all"
                  >
                    <div>
                      <p className="text-white font-medium">{event.title}</p>
                      <p className="text-xs text-neutral-400">{event.date} • {event.location}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {query && filteredCoaches.length === 0 && filteredAthletes.length === 0 && filteredEvents.length === 0 && (
            <div className="text-center py-8 text-neutral-400 text-sm">
              No results found for &quot;<span className="text-white">{query}</span>&quot;. Try searching &quot;Coach&quot;, &quot;Trials&quot;, or &quot;Arjun&quot;.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
