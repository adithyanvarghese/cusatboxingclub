'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Eye, Play, Clock, X } from 'lucide-react';
import { GALLERY_ITEMS, FACILITIES, VIDEO_HIGHLIGHTS, VideoItem, GalleryItem } from '@/data/clubData';

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<'photos' | 'equipment' | 'videos'>('photos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Close on ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
        setSelectedVideo(null);
      }
    };
    if (selectedPhoto || selectedVideo) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, selectedVideo]);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Camera className="w-3.5 h-3.5" />
          <span>MEDIA ARCHIVE • KALAMASSERY & ERNAKULAM</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-4xl mx-auto">
          CUSAT BOXING <span className="gold-gradient-text">GALLERY & MEDIA IN ERNAKULAM</span>
        </h1>

        <p className="mt-6 text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Explore photo captures, high-performance gym equipment, and sparring bout video highlights from CUSAT Boxing Club in South Kalamassery, Kochi, Ernakulam.
        </p>

        {/* 3 Separate Section Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {[
            { id: 'photos', label: '📸 PHOTO GALLERY', count: GALLERY_ITEMS.length },
            { id: 'equipment', label: '🥊 GYM EQUIPMENT & FACILITIES', count: FACILITIES.length },
            { id: 'videos', label: '🎬 VIDEO HIGHLIGHTS & CLIPS', count: VIDEO_HIGHLIGHTS.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full font-heading text-lg tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-bold shadow-lg shadow-[#C89B3C]/30 scale-105'
                  : 'bg-[#141414] border border-white/10 text-neutral-300 hover:text-white hover:border-[#C89B3C]/50'
              }`}
            >
              <span>{tab.label}</span>
              <span className="px-2 py-0.5 rounded-full bg-black/40 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 1: PHOTO GALLERY */}
      {activeTab === 'photos' && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="border-b border-white/10 pb-4 flex items-center justify-between">
            <h2 className="font-heading text-3xl text-white">PHOTO GALLERY</h2>
            <span className="text-xs text-neutral-400">Showing {GALLERY_ITEMS.length} high-res photography captures</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#C89B3C] transition-all duration-500 bg-[#121212]"
              >
                <img
                  src={item.image}
                  alt={`${item.title} at CUSAT Boxing Club in Kalamassery Ernakulam`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#C89B3C]">
                  {item.category}
                </div>

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
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: EQUIPMENT & FACILITIES */}
      {activeTab === 'equipment' && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="border-b border-white/10 pb-4 flex items-center justify-between">
            <h2 className="font-heading text-3xl text-white">GYM EQUIPMENT & FACILITIES</h2>
            <span className="text-xs text-neutral-400">Explore CUSAT arena equipment in South Kalamassery</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="group relative rounded-3xl overflow-hidden glass-panel-gold border border-[#C89B3C]/30 bg-[#121212] flex flex-col justify-between"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={`${facility.name} at CUSAT Boxing Arena in Ernakulam`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/30 to-transparent" />
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="font-heading text-3xl text-white group-hover:text-[#C89B3C] transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">{facility.description}</p>
                  <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                    {facility.features.map((feat, idx) => (
                      <span key={idx} className="text-xs text-neutral-300 flex items-center gap-1.5">
                        • {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: VIDEO HIGHLIGHTS */}
      {activeTab === 'videos' && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="border-b border-white/10 pb-4 flex items-center justify-between">
            <h2 className="font-heading text-3xl text-white">TRAINING & BOUT VIDEOS</h2>
            <span className="text-xs text-neutral-400">Click any card to play video footage</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEO_HIGHLIGHTS.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#C89B3C] cursor-pointer transition-all duration-500 bg-[#121212]"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={vid.thumbnail}
                    alt={`${vid.title} - CUSAT Boxing Sparring Video`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/70 border border-[#C89B3C]/40 text-[#C89B3C] text-xs font-bold uppercase">
                      {vid.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                      <span>{vid.duration}</span>
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#C89B3C] text-black shadow-xl shadow-[#C89B3C]/50 flex items-center justify-center group-hover:scale-115 transition-transform duration-300">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-2">
                  <h3 className="font-heading text-3xl text-white group-hover:text-[#C89B3C] transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{vid.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Photo Modal Lightbox */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[80vh] mx-auto rounded-2xl object-contain border border-[#C89B3C]"
            />
            <p className="font-heading text-2xl text-white mt-4">{selectedPhoto.title}</p>
            <p className="text-xs text-neutral-400 mt-1">Click outside to close preview</p>
          </div>
        </div>
      )}

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
              <span className="font-heading text-xl text-white">{selectedVideo.title}</span>
              <button onClick={() => setSelectedVideo(null)} className="p-2 rounded-full bg-white/10 text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
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
          </div>
        </div>
      )}
    </main>
  );
}
