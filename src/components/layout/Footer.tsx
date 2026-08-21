'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronRight, Award, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/seo';
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons';

export default function Footer() {
  return (
    <footer className="relative bg-[#070707] border-t border-white/10 pt-16 pb-8 overflow-hidden text-neutral-400 text-sm">
      {/* Ambient background gold glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#C89B3C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C89B3C] shadow-[0_0_10px_rgba(200,155,60,0.4)] shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="CUSAT Boxing Club Logo"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <span className="font-heading text-2xl tracking-wider text-white">
                CUSAT <span className="text-[#C89B3C]">BOXING</span> CLUB
              </span>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed pr-4">
              Premier boxing academy located at CUSAT Sports Complex in South Kalamassery, Kochi. 100% open to school children (ages 8+), youth cadets, university athletes, working professionals, and boxing enthusiasts across Ernakulam, Kerala.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="p-2 rounded bg-white/5 border border-white/10">
                <Award className="w-4 h-4 text-[#C89B3C]" />
              </div>
              <span className="text-xs text-neutral-300 font-medium">
                Affiliated with Kerala Boxing Association
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg tracking-wider text-white mb-4 border-b border-[#C89B3C]/30 pb-1 inline-block">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Club', href: '/about' },
                { label: 'Boxing Classes', href: '/courses' },
                { label: 'Training Schedule', href: '/schedule' },
                { label: 'Facilities & Arena', href: '/facilities' },
                { label: 'Varsity Team', href: '/team' },
                { label: 'Photo Gallery', href: '/gallery' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#C89B3C] transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#C89B3C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Pathways & Training */}
          <div>
            <h4 className="font-heading text-lg tracking-wider text-white mb-4 border-b border-[#C89B3C]/30 pb-1 inline-block">
              GET STARTED
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/trial" className="hover:text-[#C89B3C] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 text-[#C89B3C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Book Free Trial Class</span>
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-[#C89B3C] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 text-[#C89B3C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Join the Squad</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C89B3C] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 text-[#C89B3C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact & Map Location</span>
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#C89B3C] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3 h-3 text-[#C89B3C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Ring & Equipment Tour</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-lg tracking-wider text-white mb-4 border-b border-[#C89B3C]/30 pb-1 inline-block">
              HEADQUARTERS
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] mt-1 shrink-0" />
                <a href={SITE_CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C89B3C] transition-colors">University Road, CUSAT Sports Arena, South Kalamassery, Kalamassery, Kochi, Ernakulam, Kerala 682022</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[#C89B3C] transition-colors">{SITE_CONFIG.phone}</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#C89B3C] hover:text-[#C89B3C] transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-emerald-400 hover:text-emerald-400 transition-all text-neutral-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs text-neutral-500 gap-4">
          <p suppressHydrationWarning>© {new Date().getFullYear()} CUSAT Boxing Club. All rights reserved. Cochin University of Science and Technology.</p>
          <div className="flex items-center gap-4">
            <span>Built for Champions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
