'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Film, Play, Clock, X, ArrowRight, Video } from 'lucide-react';
import { VIDEO_HIGHLIGHTS, VideoItem } from '@/data/clubData';

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Close modal on ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    if (selectedVideo) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo]);

  const categories = ['All', 'Bag Workout', 'Beach Workout', 'Sparring', 'Weight Training', 'Highlights'];

  const filteredVideos = VIDEO_HIGHLIGHTS.filter((vid) => {
    if (activeCategory === 'All') return true;
    return vid.category === activeCategory;
  });

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden text-white" id="videos">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-4">
              <Film className="w-4 h-4" />
              <span>TRAINING & BOUT REELS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              WATCH OUR <span className="gold-gradient-text">TRAINING & WORKOUT VIDEOS</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/cusat_boxing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C89B3C] font-heading text-xl hover:underline tracking-wider group shrink-0"
          >
            <span>WATCH REELS ON INSTAGRAM</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-heading text-base tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-bold shadow-lg shadow-[#C89B3C]/30 scale-105'
                  : 'bg-[#141414] border border-white/10 text-neutral-300 hover:text-white hover:border-[#C89B3C]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setSelectedVideo(vid)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#C89B3C]/70 cursor-pointer transition-all duration-500 bg-[#121212] flex flex-col justify-between"
            >
              {/* Video Thumbnail */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={vid.thumbnail}
                  alt={vid.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />

                {/* Category Badge & Duration */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-bold uppercase tracking-wider">
                    {vid.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>{vid.duration}</span>
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C89B3C] text-black shadow-xl shadow-[#C89B3C]/50 flex items-center justify-center group-hover:scale-115 transition-transform duration-300">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Information */}
              <div className="p-6 sm:p-8 space-y-2">
                <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#C89B3C] transition-colors">
                  {vid.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {vid.description}
                </p>
                <div className="pt-3 text-xs font-semibold text-[#C89B3C] uppercase tracking-wider flex items-center gap-1.5">
                  <Video className="w-4 h-4" />
                  <span>Click to play video clip</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Lightbox */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            className="relative max-w-4xl w-full glass-panel-gold rounded-3xl overflow-hidden border border-[#C89B3C] p-2 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#C89B3C] text-black font-bold text-xs uppercase">
                  {selectedVideo.category}
                </span>
                <h4 className="font-heading text-xl text-white tracking-wide">{selectedVideo.title}</h4>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
              {selectedVideo.videoUrl.startsWith('/videos/') || selectedVideo.videoUrl.endsWith('.mp4') || selectedVideo.videoUrl.endsWith('.webm') || selectedVideo.videoUrl.endsWith('.mov') ? (
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            <div className="p-4 text-center">
              <p className="text-xs text-neutral-400">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
