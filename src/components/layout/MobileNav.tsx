'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import { SITE_CONFIG } from '@/lib/seo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export default function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const pathname = usePathname();

  // Close on ESC key press
  React.useEffect(() => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
        >
          {/* Menu Header Badge */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C89B3C] shadow-[0_0_10px_rgba(200,155,60,0.4)] shrink-0">
              <Image
                src="/logo.jpg"
                alt="CUSAT Boxing Club Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="font-heading text-lg text-white tracking-wider">CUSAT BOXING CLUB</p>
              <p className="text-xs text-neutral-400">Official Athletics Division</p>
            </div>
          </div>

          {/* Navigation Links List */}
          <div className="flex flex-col space-y-4 py-8">
            {links.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center justify-between py-3 border-b border-white/5 font-heading text-3xl tracking-wider transition-all ${
                      isActive
                        ? 'text-[#C89B3C] pl-2 border-[#C89B3C]/40 font-bold'
                        : 'text-neutral-300 hover:text-white hover:pl-2'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-6 h-6 ${isActive ? 'text-[#C89B3C]' : 'text-neutral-600'}`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA & Social Footer */}
          <div className="space-y-6 pt-4 border-t border-white/10">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              onClick={onClose}
              className="block w-full text-center py-4 bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading text-xl tracking-wider font-bold rounded-lg shadow-xl shadow-[#C89B3C]/20"
            >
              CALL {SITE_CONFIG.phone} NOW
            </a>

            <div className="flex justify-between items-center text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
                Kochi, Kerala
              </span>
              <div className="flex items-center gap-4 text-neutral-300">
                <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-5 hover:text-[#C89B3C] transition-colors" />
                </a>
                <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon className="w-5 h-5 hover:text-[#C89B3C] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
