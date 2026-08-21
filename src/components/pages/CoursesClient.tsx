'use client';

import React, { useState } from 'react';
import { COURSES } from '@/data/clubData';
import { Shield, CheckCircle2, Phone } from 'lucide-react';

export default function CoursesClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCourses = COURSES.filter((c) => {
    if (activeCategory === 'All') return true;
    return c.title.toLowerCase().includes(activeCategory.toLowerCase()) || c.subtitle.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#070707] text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>OUR PROGRAM DIRECTORY • ERNAKULAM & KOCHI</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          BOXING CLASSES & <span className="gold-gradient-text">DIVISIONS IN ERNAKULAM</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          From junior school cadets and absolute beginners to varsity competitors. Explore structured boxing training programs at CUSAT Sports Complex in South Kalamassery, Ernakulam.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {['All', 'Boxing', 'Youth Cadets', 'Fitness', 'Recovery'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-heading text-lg tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-bold shadow-lg shadow-[#C89B3C]/30'
                  : 'bg-[#141414] border border-white/10 text-neutral-300 hover:text-white hover:border-[#C89B3C]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Courses List */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {filteredCourses.map((course) => (
          <div
            id={course.slug}
            key={course.id}
            className="rounded-3xl glass-panel-gold p-8 sm:p-12 border border-[#C89B3C]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Image */}
            <div className="lg:col-span-5 h-72 sm:h-80 rounded-2xl overflow-hidden relative group">
              <img
                src={course.bwImage}
                alt={`${course.title} at CUSAT Boxing Club in Kalamassery, Ernakulam`}
                className="absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-700 group-hover:opacity-0"
              />
              <img
                src={course.colorImage}
                alt={`${course.title} training session at CUSAT Sports Complex`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#C89B3C] text-black font-heading text-base font-bold">
                {course.targetAudience}
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold text-[#C89B3C] uppercase tracking-widest">{course.subtitle}</span>
                <h2 className="font-heading text-4xl text-white tracking-wide mt-1">{course.title}</h2>
              </div>

              <p className="text-neutral-300 text-base leading-relaxed">{course.description}</p>

              {/* Feature Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action CTA */}
              <div className="pt-6 border-t border-white/10 flex justify-end">
                <a
                  href="tel:+919544457903"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-lg font-bold tracking-wider shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Phone className="w-4 h-4 fill-current text-black" />
                  <span>CALL DESK TO ENROLL</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
