'use client';

import React from 'react';
import { BISTRO_INFO } from '@/lib/bistro-data';
import { RealPhoneIcon, RealWhatsAppIcon } from '@/components/icons/RealIcons';

export default function FloatingContactButtons() {
  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none"
      role="region"
      aria-label="Quick contact shortcuts"
    >
      {/* Floating Call Button */}
      <a
        href={`tel:${BISTRO_INFO.phoneClean}`}
        aria-label="Call Canvas Bistro Bar at 075959 59339"
        className="pointer-events-auto group flex items-center gap-2 bg-[#29170E] hover:bg-[#382115] text-[#FAF6F0] p-3 sm:px-4 sm:py-2.5 rounded-full border border-[#683F27] hover:border-[#F59E0B] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="hidden sm:inline-block text-xs font-semibold text-[#FAF6F0] group-hover:text-[#F59E0B] transition-colors pr-1">
          Call 075959 59339
        </span>
        <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#130A05] group-hover:scale-110 transition-transform shadow-md">
          <RealPhoneIcon className="w-4 h-4 fill-current" />
        </div>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={BISTRO_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Canvas Bistro Bar on WhatsApp"
        className="pointer-events-auto group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ring-2 ring-white/20"
      >
        <span className="hidden sm:inline-block text-xs font-bold text-white pr-1">
          WhatsApp Us
        </span>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform shadow-sm">
          <RealWhatsAppIcon className="w-5 h-5 fill-current" />
        </div>
      </a>
    </div>
  );
}
