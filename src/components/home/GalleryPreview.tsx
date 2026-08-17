'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, Eye, ArrowRight, Play } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/clubData';

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-24 bg-[#0E0E0E] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#C89B3C]/30 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-3">
              <span>VISUAL IMMERSION</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-tight">
              INSIDE THE <span className="gold-gradient-text">ARENA & RING</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[#C89B3C] font-heading text-xl hover:underline tracking-wider group"
          >
            <span>FULL PHOTO GALLERY</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.slice(0, 6).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item.image)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#C89B3C] transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#C89B3C]">
                {item.category}
              </div>

              {/* Center Play Icon if Video */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-[#C89B3C] text-black shadow-lg shadow-[#C89B3C]/40 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              )}

              {/* Title & View CTA */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="font-heading text-xl text-white tracking-wide group-hover:text-[#C89B3C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400">Click to expand preview</p>
                </div>
                <div className="p-2.5 rounded-full bg-white/10 text-white group-hover:bg-[#C89B3C] group-hover:text-black transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[85vh]">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] rounded-xl object-contain border border-[#C89B3C]"
            />
            <p className="text-center text-xs text-neutral-400 mt-4">Click anywhere to close lightbox</p>
          </div>
        </div>
      )}
    </section>
  );
}
