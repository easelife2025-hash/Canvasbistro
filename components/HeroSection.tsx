'use client';

import React, { useRef, useEffect } from 'react';

interface HeroSectionProps {
  onOpenReservationModal?: () => void;
}

export default function HeroSection({ onOpenReservationModal }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#130A05]">
      {/* Background Video Element - Minimum 10 seconds (14s video) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/coffee-making.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 filter brightness-[0.70] contrast-[1.1]"
        />

        {/* Video Scrim & Warm Bistro Lighting Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#130A05] via-[#1F1109]/70 to-[#130A05]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Hero Content Container - Clean & Cinematic with Headline */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Main Hero Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF6F0] max-w-4xl text-balance leading-[1.15]">
          Artisanal Coffee by Day.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B]">
            Lively Bistro Bar
          </span>{' '}
          by Night.
        </h1>
      </div>

      {/* Full-width Metric & Trust Ribbon pinned to the bottom of the hero */}
      <div className="absolute bottom-0 inset-x-0 bg-[#160D07]/90 backdrop-blur-md border-t border-[#361F13]/80 py-3.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#361F13]">
          <div className="px-3">
            <span className="block text-[11px] text-[#AA6E4C] uppercase font-semibold">Location</span>
            <span className="text-xs md:text-sm font-medium text-[#FAF6F0] truncate block">
              Nilgiri Gardens, CBD Belapur
            </span>
          </div>

          <div className="px-3">
            <span className="block text-[11px] text-[#AA6E4C] uppercase font-semibold">Timings</span>
            <span className="text-xs md:text-sm font-medium text-[#F59E0B]">
              Open Daily · Closes 2:00 AM
            </span>
          </div>

          <div className="px-3">
            <span className="block text-[11px] text-[#AA6E4C] uppercase font-semibold">Specialty</span>
            <span className="text-xs md:text-sm font-medium text-[#FAF6F0]">
              Sunday Buffet & Coastal Seafood
            </span>
          </div>

          <div className="px-3">
            <span className="block text-[11px] text-[#AA6E4C] uppercase font-semibold">Price For Two</span>
            <span className="text-xs md:text-sm font-medium text-[#FAF6F0] font-mono tabular-nums">
              ₹1,000 – ₹1,300
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
