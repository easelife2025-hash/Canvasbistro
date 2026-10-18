'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, MapPin } from 'lucide-react';
import { BISTRO_INFO } from '@/lib/bistro-data';
import { RealPhoneIcon, RealWhatsAppIcon } from '@/components/icons/RealIcons';

interface NavbarProps {
  onOpenReservationModal?: () => void;
}

export default function Navbar({ onOpenReservationModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Sunday Buffet', href: '#buffet' },
    { label: 'Offers', href: '#offers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top quick announcement strip */}
      <div className="bg-[#130A05] text-[#DDBCAC] text-xs py-2 px-4 border-b border-[#361F13]/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#EFE3D9]">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Open Daily: 11:30 AM – 2:00 AM (Closes 2 AM)</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#AA6E4C]">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Nilgiri Gardens, Sector 26, CBD Belapur</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BISTRO_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-[#F59E0B] transition-colors"
            >
              <RealPhoneIcon className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="font-mono tabular-nums">{BISTRO_INFO.phone}</span>
            </a>
            <span className="text-[#4A2B1B]">|</span>
            <a
              href={BISTRO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F59E0B] hover:text-[#FBBF24] transition-colors font-medium"
            >
              <RealWhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar adhering to Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#190E08]/95 backdrop-blur-md shadow-xl border-b border-[#361F13]'
            : 'bg-[#1F1109]/90 backdrop-blur-sm border-b border-[#361F13]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-md shadow-[#F59E0B]/20">
              <span className="font-serif font-bold text-lg text-[#130A05]">C</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF6F0] block leading-none group-hover:text-[#F59E0B] transition-colors">
                Canvas
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#AA6E4C] block mt-0.5">
                Bistro Bar · Belapur
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 concise single line links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#EFE3D9]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#F59E0B] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F59E0B] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#menu"
              className="hidden sm:inline-flex px-3.5 py-2 text-xs font-semibold text-[#FAF6F0] hover:text-[#F59E0B] transition-colors whitespace-nowrap"
            >
              View Menu
            </a>

            <button
              onClick={() => {
                if (onOpenReservationModal) {
                  onOpenReservationModal();
                } else {
                  const el = document.getElementById('reservations');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#130A05] bg-[#F59E0B] hover:bg-[#FBBF24] shadow-md shadow-[#F59E0B]/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              Book a Table
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#EFE3D9] hover:text-[#F59E0B] hover:bg-[#29170E] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A0F08] border-b border-[#361F13] px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#FAF6F0] hover:text-[#F59E0B] py-1 border-b border-[#29170E]/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenReservationModal) {
                    onOpenReservationModal();
                  } else {
                    const el = document.getElementById('reservations');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-3 rounded-lg text-center font-semibold text-sm bg-[#F59E0B] text-[#130A05] hover:bg-[#FBBF24] transition-colors shadow-md"
              >
                Book a Table Now
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${BISTRO_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#29170E] border border-[#4A2B1B] text-[#FAF6F0] text-xs font-semibold hover:border-[#F59E0B] transition-colors"
                >
                  <RealPhoneIcon className="w-4 h-4 text-[#F59E0B]" />
                  <span>Call Bistro</span>
                </a>
                <a
                  href={BISTRO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#29170E] border border-[#4A2B1B] text-[#FAF6F0] text-xs font-semibold hover:border-[#25D366] transition-colors"
                >
                  <RealWhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#AA6E4C] space-y-1">
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Open 11:30 AM to 2:00 AM (Closes 2 AM)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>7, Uran Rd, Nilgiri Gardens, CBD Belapur</span>
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
