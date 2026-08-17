'use client';

import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TrialSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'School & Youth Cadet (Ages 8-17)',
    preferredTime: 'Evening Batch (04:30 PM)'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const message = `🥊 *FREE TRIAL SESSION BOOKING - CUSAT BOXING CLUB* 🥊\n\n` +
      `👤 *Full Name:* ${formData.name}\n` +
      `📱 *Phone Number:* ${formData.phone}\n` +
      `🏅 *Category:* ${formData.category}\n` +
      `⏰ *Preferred Time:* ${formData.preferredTime}\n\n` +
      `Hi Coach, I would like to book a free trial session at CUSAT Boxing Club!`;

    const waUrl = `https://wa.me/919544457903?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="trial" className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Fenriz Probetraining Information */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FREE TRIAL SESSION • PROBETRAINING</span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-none">
              EXPERIENCE A <span className="gold-gradient-text">FREE TRIAL</span> SESSION
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed">
              Would you like to experience a free trial session at CUSAT Boxing Club? We invite school children (ages 8+), university students, working professionals, and community members to drop in and train with us.
            </p>

            {/* 3 Step Guidance List */}
            <div className="space-y-6 pt-2">
              {[
                {
                  step: "01",
                  title: "Drop In or Book Online",
                  desc: "Visit us during regular opening hours at CUSAT Arena or reserve your preferred trial batch online below."
                },
                {
                  step: "02",
                  title: "Consultation & Facility Tour",
                  desc: "Meet our IBA-certified coaches in the front entrance desk, discuss your goals, and inspect our boxing ring & equipment."
                },
                {
                  step: "03",
                  title: "Step Into the Ring",
                  desc: "Participate in a guided session featuring footwork, bag work, mitt drills, and physical conditioning."
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5 p-5 rounded-xl glass-panel border border-white/10">
                  <span className="font-heading text-3xl text-[#C89B3C] font-bold">{item.step}</span>
                  <div>
                    <h4 className="font-heading text-xl text-white">{item.title}</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Instant Booking Card */}
          <div className="p-8 sm:p-10 rounded-3xl glass-panel-gold relative border border-[#C89B3C]/40 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#C89B3C]/20 border-2 border-[#C89B3C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-[#C89B3C]" />
                </div>
                <h3 className="font-heading text-4xl text-white">TRIAL RESERVED!</h3>
                <p className="text-neutral-300 text-base max-w-sm mx-auto">
                  Thank you <span className="text-[#C89B3C] font-bold">{formData.name}</span>. Our desk team will contact you via WhatsApp with trial arrival guidelines.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-black border border-[#C89B3C] text-[#C89B3C] font-heading text-lg"
                >
                  BOOK ANOTHER SESSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-heading text-3xl text-white">RESERVE YOUR SLOT</h3>
                  <p className="text-xs text-neutral-400">100% Free • No Obligation • All Gear Guidance Provided</p>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Varma"
                    className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">WhatsApp Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98470 12345"
                    className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">Program Division</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                  >
                    <option>School & Youth Cadet (Ages 8-17)</option>
                    <option>CUSAT Student Athlete</option>
                    <option>General Public & Adult Open</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">Preferred Time Batch</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                  >
                    <option>Morning Batch (06:30 AM - 08:30 AM)</option>
                    <option>Junior Evening Batch (04:00 PM - 05:30 PM)</option>
                    <option>Main Evening Batch (05:30 PM - 07:30 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl font-bold tracking-wider shadow-lg shadow-[#C89B3C]/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>CONFIRM FREE TRIAL</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
