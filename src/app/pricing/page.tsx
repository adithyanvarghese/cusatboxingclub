'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, CheckCircle2, Trophy, ArrowRight, Phone } from 'lucide-react';
import { MEMBERSHIP_TIERS, FAQS } from '@/data/clubData';

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#070707] text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Trophy className="w-3.5 h-3.5" />
          <span>TRANSPARENT MEMBERSHIPS • PREISE</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          MEMBERSHIP <span className="gold-gradient-text">PLANS & PRICING</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Affordable, transparent athletic plans. Free grants for CUSAT students and special youth rates for school children.
        </p>
      </section>

      {/* Membership Tiers Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'glass-panel-gold border-2 border-[#C89B3C] relative transform md:-translate-y-2'
                  : 'glass-panel border border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C89B3C] text-black font-heading text-sm font-bold uppercase tracking-wider">
                  MOST POPULAR • YOUTH & CADETS
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-3xl text-white tracking-wide">{tier.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{tier.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-5xl text-[#C89B3C] font-bold">{tier.price}</span>
                  <span className="text-xs text-neutral-400">{tier.period}</span>
                </div>

                <ul className="space-y-3 border-t border-white/10 pt-6 text-sm text-neutral-300">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="tel:+919544457903"
                  className={`flex items-center justify-center gap-2 w-full text-center py-3.5 rounded-lg font-heading text-xl tracking-wider font-bold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black shadow-lg shadow-[#C89B3C]/30 hover:scale-105'
                      : 'bg-[#141414] border border-[#C89B3C] text-white hover:bg-[#C89B3C] hover:text-black hover:scale-105'
                  }`}
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>CALL TO INQUIRE & JOIN</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
