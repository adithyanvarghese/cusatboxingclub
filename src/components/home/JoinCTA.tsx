'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function JoinCTA() {
  return (
    <section className="relative py-28 bg-[#0A0A0A] overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1800&auto=format&fit=crop"
          alt="CUSAT Boxing Arena Ring"
          className="w-full h-full object-cover opacity-25 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#C89B3C]/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C] text-[#C89B3C] text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>YOUR RING JOURNEY BEGINS HERE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-none uppercase"
          >
            STEP INTO THE <span className="gold-gradient-text">RING.</span>
            <br />
            BECOME UNSTOPPABLE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 text-lg sm:text-xl max-w-xl leading-relaxed"
          >
            Whether you are striving for All-India Inter-University gold or pushing your personal boundaries, our coaches and team are waiting for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/join"
              className="w-full sm:w-auto px-10 py-4 rounded-md bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-2xl tracking-wider font-bold shadow-2xl shadow-[#C89B3C]/30 hover:shadow-[#C89B3C]/60 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>REGISTER FOR MEMBERSHIP</span>
              <ArrowRight className="w-6 h-6" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#141414]/90 border border-white/20 hover:border-[#C89B3C] text-white hover:text-[#C89B3C] font-heading text-xl tracking-wider text-center transition-all"
            >
              VISIT GYM FACILITY
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
