'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, Sparkles, CheckCircle2, AlertCircle, Utensils, Users, ChevronRight } from 'lucide-react';
import { SUNDAY_BUFFET_DETAILS, BISTRO_INFO } from '@/lib/bistro-data';
import { RealWhatsAppIcon } from '@/components/icons/RealIcons';

interface SundayBuffetProps {
  onReserveBuffet: () => void;
}

export default function SundayBuffetSection({ onReserveBuffet }: SundayBuffetProps) {
  return (
    <section id="buffet" className="py-20 lg:py-28 bg-[#1A0F08] text-[#FAF6F0] relative overflow-hidden">
      {/* Decorative ambient warm yellow glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#8B5735]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial & Spread Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#29170E] border border-[#F59E0B]/40 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Navi Mumbai’s Favorite Sunday Affair</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF6F0] leading-tight">
                {SUNDAY_BUFFET_DETAILS.title}
              </h2>
              <p className="mt-2 text-base text-[#DDBCAC] leading-relaxed">
                {SUNDAY_BUFFET_DETAILS.tagline}
              </p>
            </div>

            {/* Time & Schedule Banner */}
            <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-[#29170E]/80 border border-[#4A2B1B] text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-[#FAF6F0] font-semibold">
                <Calendar className="w-4 h-4 text-[#F59E0B]" />
                <span>Every Sunday</span>
              </span>
              <span className="text-[#623A24]">·</span>
              <span className="flex items-center gap-2 text-[#EFE3D9]">
                <Clock className="w-4 h-4 text-[#F59E0B]" />
                <span>12:30 PM to 4:00 PM</span>
              </span>
              <span className="text-[#623A24]">·</span>
              <span className="flex items-center gap-2 text-[#AA6E4C]">
                <Users className="w-4 h-4 text-[#F59E0B]" />
                <span>Private tables & family booths</span>
              </span>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              {SUNDAY_BUFFET_DETAILS.pricing.map((tier, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#23140C] border border-[#4A2B1B] hover:border-[#F59E0B] transition-colors relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#AA6E4C]">
                        {idx === 0 ? 'Pure Veg' : idx === 1 ? 'Non-Veg & Seafood' : 'Unlimited Craft'}
                      </span>
                      {tier.status === 'verified' ? (
                        <span className="text-[10px] text-emerald-400 font-mono">Verified</span>
                      ) : (
                        <span className="text-[10px] text-amber-400 font-mono">Unconfirmed</span>
                      )}
                    </div>
                    <h3 className="font-serif text-sm font-bold text-[#FAF6F0] leading-snug">
                      {tier.type}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#361F13]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#F59E0B] font-mono tabular-nums">
                        ₹{tier.price}
                      </span>
                      <span className="text-[10px] text-[#AA6E4C]">{tier.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buffet Spread Matrix */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#AA6E4C]">
                Buffet Spread Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SUNDAY_BUFFET_DETAILS.spreadHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#29170E]/50 border border-[#361F13]">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#FAF6F0]">{hl.title}</h4>
                      <p className="text-[11px] text-[#DDBCAC] mt-0.5 leading-snug">{hl.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onReserveBuffet}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#130A05] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all shadow-lg shadow-[#F59E0B]/20 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Sunday Buffet Slot</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={BISTRO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#FAF6F0] bg-[#29170E] hover:bg-[#361F13] border border-[#4A2B1B] hover:border-[#25D366] transition-all"
              >
                <RealWhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Table Query</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Buffet Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#4A2B1B] shadow-2xl group">
              <div className="relative h-[440px] sm:h-[520px] w-full">
                <Image
                  src={SUNDAY_BUFFET_DETAILS.image}
                  alt="Canvas Bistro Bar lavish Sunday brunch buffet spread with chafing dishes and live counters"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130A05]/95 via-transparent to-[#130A05]/30 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-semibold text-[#F59E0B] uppercase tracking-wider block mb-1">
                  Fresh Flavors Weekly
                </span>
                <p className="font-serif text-lg font-bold text-[#FAF6F0]">
                  Gourmet live counters, coastal seafood, and signature desserts.
                </p>
                <p className="text-xs text-[#DDBCAC] mt-1">
                  Starting at ₹799. Pre-booking advised for guaranteed seating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
