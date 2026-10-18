'use client';

import React, { useRef, useEffect } from 'react';

interface HeroSectionProps {
  onOpenReservationModal?: () => void;
}

export default function HeroSection({ onOpenReservationModal }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = React.useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#130A05]">
      {/* Background Video Element - 16s authentic coffee preparation (grind, tamp, extraction) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/coffee-making.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 filter brightness-[0.82] contrast-[1.08] saturate-[1.1]"
        />

        {/* Video Scrim & Warm Bistro Lighting Overlays - calibrated to highlight coffee preparation */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#130A05] via-[#1F1109]/45 to-[#130A05]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Floating video control & badge */}
      <div className="absolute top-24 right-4 sm:right-8 z-20 flex items-center gap-2">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause coffee preparation video' : 'Play coffee preparation video'}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F1109]/80 backdrop-blur-md border border-[#F59E0B]/30 text-xs text-[#FAF6F0] hover:bg-[#361F13] transition shadow-lg cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          <span className="text-[11px] font-medium tracking-wide">
            {isPlaying ? 'Coffee Preparation' : 'Paused'}
          </span>
        </button>
      </div>

      {/* Hero Content Container - Clean & Cinematic with Headline */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Main Hero Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF6F0] max-w-4xl text-balance leading-[1.15] drop-shadow-md">
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
