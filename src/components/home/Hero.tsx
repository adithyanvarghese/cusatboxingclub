'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ChevronDown, Trophy, Phone } from 'lucide-react';

const StoryModal = dynamic(() => import('./StoryModal'), { ssr: false });

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image / Video Simulation Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop"
          alt="CUSAT Boxing Club Ring in South Kalamassery Ernakulam"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-30"
        />
        {/* Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C89B3C]/10 via-transparent to-transparent" />
      </div>

      {/* Floating Animated Particles Canvas Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414]/90 border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(200,155,60,0.2)]"
        >
          <Trophy className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>OFFICIAL CUSAT COMBAT SPORTS ARENA • OPEN TO ALL AGES</span>
        </motion.div>

        {/* Massive Fenriz-Style Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white uppercase max-w-5xl mx-auto"
        >
          <span className="block text-[#C89B3C] text-base sm:text-lg md:text-xl font-bold tracking-[0.2em] mb-3 text-center">
            CUSAT BOXING CLUB — ERNAKULAM, KERALA
          </span>
          FORGING CHAMPIONS.
          <br />
          INSIDE & OUTSIDE <span className="gold-gradient-text">THE RING.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Premier boxing academy at CUSAT Sports Complex in South Kalamassery, Kochi. Certified coaching for school cadets, university athletes, working professionals, and fitness enthusiasts across Ernakulam.
        </motion.p>

        {/* Dual Fenriz CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/courses"
            className="w-full sm:w-auto px-9 py-4 rounded-md bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl tracking-wider font-bold shadow-xl shadow-[#C89B3C]/25 hover:shadow-[#C89B3C]/50 hover:scale-105 transition-all duration-300"
          >
            EXPLORE COURSES
          </Link>

          <a
            href="tel:+919544457903"
            className="w-full sm:w-auto px-9 py-4 rounded-md bg-[#141414]/90 border border-white/20 hover:border-[#C89B3C] text-white hover:text-[#C89B3C] font-heading text-xl tracking-wider flex items-center justify-center gap-3 backdrop-blur-md hover:scale-105 transition-all duration-300 group"
          >
            <Phone className="w-5 h-5 text-[#C89B3C]" />
            <span>CALL DESK: +91 95444 57903</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-neutral-500 text-xs tracking-widest uppercase"
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown className="w-4 h-4 text-[#C89B3C] animate-bounce" />
        </motion.div>
      </div>

      {/* Video Modal Popup */}
      <StoryModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </section>
  );
}
