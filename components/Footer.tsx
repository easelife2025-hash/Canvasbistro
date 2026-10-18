'use client';

import React from 'react';
import { MapPin, Clock, Globe, ArrowUp } from 'lucide-react';
import { BISTRO_INFO } from '@/lib/bistro-data';
import { RealPhoneIcon, RealWhatsAppIcon } from '@/components/icons/RealIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#130A05] text-[#DDBCAC] border-t border-[#361F13] pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#29170E]">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-md">
                <span className="font-serif font-bold text-lg text-[#130A05]">C</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF6F0]">
                Canvas Bistro Bar
              </span>
            </div>

            <p className="text-xs text-[#AA6E4C] leading-relaxed max-w-sm">
              CBD Belapur’s premier day café and vibrant evening bistro bar. Serving freshly roasted artisanal coffee, fresh coastal seafood, sizzlers, wood-fired pizzas, craft cocktails, and our renowned Sunday brunch buffet.
            </p>

            <div className="text-xs text-[#8B5735]">
              Associated with{' '}
              <a
                href="https://pavithrahospitality.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F59E0B] hover:underline"
              >
                Pavithra Hospitality
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF6F0] tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#F59E0B] transition-colors">
                  About the Bistro
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F59E0B] transition-colors">
                  Food & Bar Menu
                </a>
              </li>
              <li>
                <a href="#buffet" className="hover:text-[#F59E0B] transition-colors">
                  Sunday Brunch Buffet
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#F59E0B] transition-colors">
                  Happy Hours & Offers
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F59E0B] transition-colors">
                  Atmosphere Gallery
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-[#F59E0B] transition-colors">
                  Book a Table
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF6F0] tracking-wide flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Hours of Service</span>
            </h4>
            <div className="space-y-2 text-xs text-[#AA6E4C]">
              <div>
                <span className="block text-[#FAF6F0] font-semibold">Everyday Dining & Bar:</span>
                <span>11:30 AM – 2:00 AM (Closes 2 AM)</span>
              </div>
              <div>
                <span className="block text-[#FAF6F0] font-semibold">Happy Hours:</span>
                <span>4:00 PM – 8:00 PM Daily</span>
              </div>
              <div>
                <span className="block text-[#F59E0B] font-semibold">Sunday Grand Buffet:</span>
                <span>12:30 PM – 4:00 PM Every Sunday</span>
              </div>
            </div>
          </div>

          {/* Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF6F0] tracking-wide flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Location & Bookings</span>
            </h4>
            <p className="text-xs text-[#AA6E4C] leading-relaxed">
              7, Uran Road, Nilgiri Gardens, Ekta Vihar, Sector 26, CBD Belapur, Navi Mumbai 400614
            </p>

            <div className="pt-2 space-y-1.5">
              <a
                href={`tel:${BISTRO_INFO.phoneClean}`}
                className="flex items-center gap-2 text-xs text-[#FAF6F0] hover:text-[#F59E0B] font-mono transition-colors"
              >
                <RealPhoneIcon className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>{BISTRO_INFO.phone}</span>
              </a>

              <a
                href={BISTRO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#25D366] hover:underline transition-colors"
              >
                <RealWhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: 075959 59339</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B5735]">
          <p>© {new Date().getFullYear()} Canvas Bistro Bar, CBD Belapur. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#AA6E4C] hover:text-[#F59E0B] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
