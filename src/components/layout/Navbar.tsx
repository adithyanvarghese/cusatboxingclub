'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Menu, X, ChevronRight, Phone } from 'lucide-react';
import MobileNav from './MobileNav';
import SearchModal from './SearchModal';

const NAV_LINKS = [
  { name: 'COURSES', href: '/courses' },
  { name: 'FACILITIES', href: '/facilities' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'SCHEDULE', href: '/schedule' },
  { name: 'PRICING', href: '/pricing' },
  { name: 'ABOUT US', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Static Clean Logo */}
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full overflow-hidden bg-black border-2 border-[#C89B3C] shadow-[0_0_12px_rgba(200,155,60,0.5)] group-hover:border-[#E5C158] group-hover:shadow-[0_0_20px_rgba(200,155,60,0.8)] group-hover:scale-105 transition-all duration-300 shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="CUSAT Boxing Club Logo"
                  width={44}
                  height={44}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
              <span className="font-heading text-2xl tracking-wider text-white group-hover:text-[#C89B3C] transition-colors">
                CUSAT <span className="text-[#C89B3C]">BOXING</span> CLUB
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-widest uppercase transition-all duration-300 py-1 ${
                      isActive
                        ? 'text-[#C89B3C] font-bold'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C89B3C] shadow-[0_0_8px_#C89B3C]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-full bg-neutral-900/80 border border-white/10 hover:border-[#C89B3C]/50 text-neutral-300 hover:text-[#C89B3C] transition-all duration-300 hover:scale-105"
                title="Search CUSAT Boxing"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href="tel:+919544457903"
                className="relative group overflow-hidden rounded-md px-6 py-2.5 bg-gradient-to-r from-[#C89B3C] to-[#A87E27] text-black font-heading tracking-wider text-lg font-bold shadow-lg shadow-[#C89B3C]/20 hover:shadow-[#C89B3C]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-black fill-current" />
                  CALL DESK
                </span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </a>
            </div>

            {/* Mobile Menu & Search Controls */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300"
                aria-label="Open search modal"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-[#141414] border border-[#C89B3C]/40 text-[#C89B3C] hover:bg-[#C89B3C] hover:text-black transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
      />

      {/* Quick Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
