'use client';

import React from 'react';
import Image from 'next/image';
import { Coffee, UtensilsCrossed, Wine, Music, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BISTRO_INFO } from '@/lib/bistro-data';

export default function AboutSection() {
  const highlights = [
    {
      icon: Coffee,
      title: 'Artisanal Coffee & Roasts',
      description: 'Morning sanctuary serving freshly ground single-origin Arabica, velvety flat whites, cold brews, and rosetta latte art.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Diverse Seafood & Grills',
      description: 'From crispy bhetki fish fingers and butter-basted grilled prawns to smoky charcoal chicken tikkas and wood-fired pizzas.',
    },
    {
      icon: Wine,
      title: 'Evening Craft Bar & Cocktails',
      description: 'Lively nightlife setting with classic cocktails, cold draught pours, and daily 4 PM – 8 PM Happy Hours.',
    },
    {
      icon: Users,
      title: 'Private Dining & Events',
      description: 'Dedicated private dining spaces for corporate lunches, intimate family dinners, and celebratory birthday parties.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atmospheric Bistro Image & Trust Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#29170E] group">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src="/images/bistro_interior_ambiance_1792235217064.jpg"
                  alt="Canvas Bistro Bar warm wood interior ambiance with glowing amber lighting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Scrim with subtle brand quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130A05]/90 via-[#130A05]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F59E0B] mb-1">
                  <Music className="w-3.5 h-3.5" />
                  <span>Live Music Wed, Fri, Sat & Sun</span>
                </div>
                <p className="font-serif text-lg sm:text-xl font-medium text-[#FAF6F0]">
                  &ldquo;A warm wooden haven in CBD Belapur where every meal is an artisanal experience.&rdquo;
                </p>
              </div>
            </div>

            {/* Overlapping Floating Info Card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-4 bg-[#29170E] text-[#FAF6F0] p-4 sm:p-5 rounded-xl border border-[#4A2B1B] shadow-xl max-w-xs items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#F59E0B] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#130A05]" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#AA6E4C] font-semibold block">
                  Hospitality Brand
                </span>
                <span className="text-sm font-semibold text-[#FAF6F0]">
                  Pavithra Hospitality
                </span>
                <span className="text-[11px] text-[#DDBCAC] block">
                  Official Belapur Partner
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Prose & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#8B5735] block mb-2">
                Our Story & Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1109] leading-tight">
                Where Handcrafted Passion Meets Warm Bistro Elegance
              </h2>
            </div>

            <p className="text-base text-[#4A2B1B] leading-relaxed">
              Nestled at Nilgiri Gardens in Sector 26, CBD Belapur, <strong className="text-[#1F1109] font-semibold">Canvas Bistro Bar</strong> was created as a sanctuary for passionate food and coffee lovers. Whether you are stepping in for an early morning espresso, hosting an executive lunch, or raising a glass with friends over fresh seafood and live acoustics, Canvas offers a tailored experience for every hour of the day.
            </p>

            <p className="text-base text-[#4A2B1B] leading-relaxed">
              Our culinary philosophy centers on fresh, authentic ingredients: wild-caught coastal seafood seasoned with coastal herbs, hand-stretched wood-fired pizzas, rich Charcoal Chicken, and our renowned all-you-can-eat <strong className="text-[#1F1109] font-semibold">Sunday Brunch Buffet</strong>.
            </p>

            {/* Feature Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FFFFFF] border border-[#EFE3D9] hover:border-[#F59E0B] transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#29170E] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#F59E0B]" />
                      </div>
                      <h3 className="font-serif text-sm font-bold text-[#1F1109]">{item.title}</h3>
                    </div>
                    <p className="text-xs text-[#623A24] leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Checkpoints */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs font-semibold text-[#1F1109]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                All-You-Can-Eat Buffet
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                Happy-Hour Food & Drinks
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                Open Till 2:00 AM
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                Private Dining Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
