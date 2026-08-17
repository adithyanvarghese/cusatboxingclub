'use client';

import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';

export default function CallNowSection() {
  return (
    <section id="contact-desk" className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C89B3C]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Direct Phone Information */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
              <Phone className="w-3.5 h-3.5 animate-pulse text-[#C89B3C]" />
              <span>DIRECT DESK CONTACT • CALL NOW</span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-none">
              JOIN CUSAT BOXING <span className="gold-gradient-text">CALL US DIRECTLY</span>
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed">
              Have questions about batch timings, membership rates, or varsity squad trials? Call or message our coaching desk directly — no waiting or online forms required.
            </p>

            {/* Direct Contact Action Badges */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-5 rounded-2xl glass-panel-gold border border-[#C89B3C]/40">
                <div className="p-3 rounded-xl bg-[#C89B3C] text-black shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-white">COACHING DESK PHONE</h4>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="font-heading text-3xl sm:text-4xl text-[#C89B3C] font-bold tracking-wider hover:underline block mt-1"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-xs text-neutral-400 mt-1">Click above to dial directly from your mobile device</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl glass-panel border border-white/10">
                <div className="p-3 rounded-xl bg-emerald-500 text-black shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-white">WHATSAPP CHAT</h4>
                  <a
                    href={SITE_CONFIG.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold text-lg hover:underline flex items-center gap-1.5 mt-0.5"
                  >
                    <span>Chat on WhatsApp ({SITE_CONFIG.phone})</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">Instant fee & batch details</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Desk Timings & Location Card */}
          <div className="p-8 sm:p-10 rounded-3xl glass-panel-gold relative border border-[#C89B3C]/50 shadow-2xl space-y-8 bg-[#121212]/90">
            <div className="space-y-5 text-sm">
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-heading text-lg block">MONDAY TO FRIDAY BATCHES</strong>
                  <span className="text-neutral-300">Morning: 06:30 AM – 08:30 AM</span><br />
                  <span className="text-neutral-300">Evening: 05:30 PM – 08:30 PM</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-heading text-lg block">SATURDAY SPECIAL BATCHES</strong>
                  <span className="text-neutral-300">Morning: 06:30 AM – 08:30 AM (Long Running)</span><br />
                  <span className="text-neutral-300">Evening: 05:30 PM – 08:30 PM (Weight Training)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-heading text-lg block">GYM LOCATION</strong>
                  <span className="text-neutral-300">CUSAT Sports Complex Arena, South Kalamassery, Kochi, Kerala 682022</span>
                </div>
              </div>
            </div>

            {/* Big Primary Call Button */}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-2xl font-bold tracking-wider shadow-xl shadow-[#C89B3C]/30 hover:scale-105 transition-all flex items-center justify-center gap-3 text-center"
            >
              <Phone className="w-6 h-6 text-black fill-current" />
              <span>CALL +91 95444 57903 NOW</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
