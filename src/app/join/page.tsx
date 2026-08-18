'use client';

import React, { useState } from 'react';
import { Shield, CheckCircle2, Calendar, Sparkles, Trophy, Award, UserCheck, Dumbbell } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '@/data/clubData';
import confetti from 'canvas-confetti';

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: 'Student Athlete',
    weightClass: 'Middleweight (75 kg)',
    experience: 'Beginner (0-1 yrs)',
    department: '',
    fitnessGoal: 'University Podium & Championship'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
        return;
      }
      setStep(2);
    } else {
      setSubmitted(true);
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore if confetti fails
      }

      // Automatically open WhatsApp with pre-filled athlete details
      const message = `🥊 *NEW ATHLETE REGISTRATION - CUSAT BOXING CLUB* 🥊\n\n` +
        `👤 *Full Name:* ${formData.fullName}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *WhatsApp Phone:* ${formData.phone}\n` +
        `🏫 *School/College/Status:* ${formData.department}\n` +
        `🏅 *Membership Pathway:* ${formData.category}\n` +
        `⚖️ *Weight Category:* ${formData.weightClass}\n` +
        `🥊 *Experience:* ${formData.experience}\n\n` +
        `Hi Coach, please confirm my registration for CUSAT Boxing Club!`;

      const waUrl = `https://wa.me/919544457903?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Shield className="w-3.5 h-3.5" />
          <span>JOIN THE LEGENDARY CUSAT SQUAD</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          BECOME A <span className="gold-gradient-text">CUSAT BOXER</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          100% Open to school children (ages 8+), university students, working professionals, and boxing enthusiasts of all age groups. Select your pathway below.
        </p>
      </section>

      {/* Weekly Training Schedule Table */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>TRAINING TIMETABLE</span>
          </div>
          <h2 className="font-heading text-5xl text-white tracking-tight">
            WEEKLY <span className="gold-gradient-text">TRAINING SCHEDULE</span>
          </h2>
          <p className="text-neutral-400 text-sm">CUSAT Sports Arena Ring & Bag Room</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 glass-panel">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#141414] border-b border-white/10 text-[#C89B3C] font-heading text-lg tracking-wider">
                <th className="p-4">DAY</th>
                <th className="p-4">MORNING SESSION</th>
                <th className="p-4">EVENING SESSION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm text-neutral-300">
              {WEEKLY_SCHEDULE.map((slot) => (
                <tr key={slot.day} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-heading text-xl text-white">{slot.day}</td>
                  <td className="p-4">{slot.morning}</td>
                  <td className="p-4">{slot.evening}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Registration Multi-step Form */}
      <section id="register-form" className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-gold">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#C89B3C]/20 border-2 border-[#C89B3C] flex items-center justify-center mx-auto">
                <Sparkles className="w-10 h-10 text-[#C89B3C]" />
              </div>
              <h2 className="font-heading text-5xl text-white">WELCOME TO THE SQUAD!</h2>
              <p className="text-neutral-300 text-base max-w-md mx-auto">
                Your application for <span className="text-[#C89B3C] font-bold">{formData.fullName}</span> has been logged. Our head coach will contact you on WhatsApp with your induction kit details.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => { setSubmitted(false); setStep(1); }}
                  className="px-8 py-3 rounded-lg bg-[#141414] border border-[#C89B3C] text-[#C89B3C] font-heading text-lg"
                >
                  SUBMIT ANOTHER REGISTRATION
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-heading text-4xl text-white">ATHLETE REGISTRATION</h2>
                  <p className="text-xs text-neutral-400">Step {step} of 2 — Personal & Athletic Details</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C89B3C]">
                  <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-[#C89B3C]' : 'bg-neutral-700'}`} />
                  <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-[#C89B3C]' : 'bg-neutral-700'}`} />
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Arjun K. Varma"
                      className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="arjun@cusat.ac.in"
                        className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">WhatsApp Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98470 12345"
                        className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">School / College / Status</label>
                    <input
                      type="text"
                      required
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      placeholder="e.g. St. Joseph's School Class 9, CUSAT Student, or IT Professional"
                      className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">Membership Pathway</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                    >
                      <option>School & Youth Cadet (Ages 8–17)</option>
                      <option>CUSAT Student Athlete (Full Grant)</option>
                      <option>General Public & Adult Open (All Ages)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">Weight Category</label>
                      <select
                        value={formData.weightClass}
                        onChange={(e) => setFormData({ ...formData, weightClass: e.target.value })}
                        className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                      >
                        <option>Flyweight (51 kg)</option>
                        <option>Bantamweight (54 kg)</option>
                        <option>Featherweight (57 kg)</option>
                        <option>Lightweight (60 kg)</option>
                        <option>Welterweight (69 kg)</option>
                        <option>Middleweight (75 kg)</option>
                        <option>Heavyweight (91+ kg)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-neutral-300 mb-1">Prior Combat Experience</label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full p-3.5 rounded-lg bg-black border border-white/20 text-white focus:border-[#C89B3C] focus:outline-none"
                      >
                        <option>Complete Beginner (0 yrs)</option>
                        <option>Intermediate (1-2 yrs)</option>
                        <option>Advanced / State Champion (3+ yrs)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-lg bg-black border border-white/20 text-neutral-300 hover:text-white"
                  >
                    BACK
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl font-bold shadow-lg"
                >
                  {step === 1 ? 'CONTINUE TO STEP 2' : 'COMPLETE REGISTRATION'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
