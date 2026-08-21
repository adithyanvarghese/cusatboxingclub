'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep preloader active long enough for logo to complete rotation, slow down, and stop
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070707] text-white select-none pointer-events-none"
        >
          {/* Ambient Gold Radial Background Glow */}
          <div className="absolute w-[600px] h-[600px] bg-[#C89B3C]/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-8 z-10">
            {/* Pulsing Outer Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.95, 1.08, 1], opacity: [0.3, 0.9, 0.6] }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="absolute -inset-6 rounded-full border-2 border-[#C89B3C]/50 shadow-[0_0_60px_rgba(200,155,60,0.4)]"
            />

            {/* Rotating Logo - Rapid initial spin, then smooth deceleration to a complete stop */}
            <motion.div
              initial={{ rotate: -1080, scale: 0.2, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 1.6,
                ease: [0.16, 1, 0.3, 1], // Decelerating cubic-bezier curve: spins fast -> slows down -> comes to a complete standstill
              }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-[#C89B3C] via-[#F3D785] to-[#967022] shadow-[0_0_60px_rgba(200,155,60,0.6)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-black p-1">
                <Image
                  src="/logo.jpg"
                  alt="CUSAT Boxing Club"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Fade In as logo comes to a stop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl tracking-widest text-white">
                CUSAT <span className="text-[#C89B3C]">BOXING</span> CLUB
              </h2>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
