'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image with Glass Overlay Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/training photos/ring.webp"
                alt="CUSAT Boxing Arena Ring in Kalamassery Ernakulam"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={75}
                loading="lazy"
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-panel-gold flex items-center justify-between">
                <div>
                  <p className="font-heading text-2xl text-white">FORGED IN KOCHI</p>
                  <p className="text-xs text-neutral-300">Cochin University Athletic Campus</p>
                </div>
                <div className="p-3 rounded-full bg-[#C89B3C] text-black">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Glowing Accent Ring behind image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C89B3C]/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Text Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest">
              <span>OUR HERITAGE</span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl tracking-tight text-white leading-none">
              A LEGACY OF <span className="gold-gradient-text">TECHNICAL RESILIENCE</span> & HONOR
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Founded under the aegis of the CUSAT Sports Council, the CUSAT Boxing Club stands as one of Kerala&apos;s elite collegiate combat programs. We do not just teach punching — we cultivate emotional control, tactical intelligence, and physical dominance.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Strict adherence to standard technical amateur boxing guidelines.",
                "Customized training pathways for total beginners and varsity national medalists.",
                "Proven track record of winning All-India Inter-University podium positions."
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-[#C89B3C] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-md bg-[#141414] border border-[#C89B3C] hover:bg-[#C89B3C] text-white hover:text-black font-heading text-xl tracking-wider transition-all duration-300 group"
              >
                <span>READ THE FULL STORY</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
