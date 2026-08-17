'use client';

import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StoryModal({ isOpen, onClose }: StoryModalProps) {
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#141414] border border-[#C89B3C]/50 rounded-2xl overflow-hidden shadow-2xl shadow-[#C89B3C]/20 cursor-default animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:text-[#C89B3C] border border-white/10 hover:border-[#C89B3C] transition-all"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center gap-3">
          <div className="p-2 rounded bg-[#C89B3C]/20 text-[#C89B3C]">
            <Play className="w-5 h-5 fill-[#C89B3C]" />
          </div>
          <div>
            <h3 className="font-heading text-2xl tracking-wider text-white">THE CUSAT BOXING STORY</h3>
            <p className="text-xs text-neutral-400">Inside the ring of CUSAT Combat Athletics</p>
          </div>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="CUSAT Boxing Club Story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
