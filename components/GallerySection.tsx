'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ZoomIn } from 'lucide-react';

export default function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      src: '/images/bistro_interior_ambiance_1792235217064.jpg',
      title: 'Warm Mahogany & Amber Ambiance',
      subtitle: 'Main Dining Lounge & Bar',
      aspect: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      src: '/images/artisanal_coffee_latte_1792235217264.jpg',
      title: 'Barista Latte Rosetta Art',
      subtitle: '100% Arabica Single Origin',
      aspect: 'col-span-1',
    },
    {
      src: '/images/seafood_platter_signature_1792235218169.jpg',
      title: 'Signature Grilled Fish & Garlic Prawns',
      subtitle: 'Wild Coastal Catch',
      aspect: 'col-span-1',
    },
    {
      src: '/images/sunday_buffet_spread_1792235219365.jpg',
      title: 'The Grand Sunday Brunch Buffet',
      subtitle: 'Live Counters & Chafing Spread',
      aspect: 'col-span-1 md:col-span-2',
    },
    {
      src: '/images/signature_craft_cocktail_1792235219096.jpg',
      title: 'Artisanal Smoked Old Fashioned',
      subtitle: 'Handcrafted Evening Bar',
      aspect: 'col-span-1 md:col-span-2',
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EFE3D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#AA6E4C] block mb-2">
            Atmosphere & Culinary Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1109]">
            The Canvas Gallery
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#623A24]">
            Glimpse the warm wood textures, velvety roasts, coastal seafood, and lively evening spirits.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group bg-[#1F1109] ${item.aspect} shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130A05]/90 via-[#130A05]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-[#F59E0B] uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#FAF6F0] leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[600px] rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[activeImageIndex].src}
              alt={galleryItems[activeImageIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="text-xs text-[#F59E0B] font-semibold">
                {galleryItems[activeImageIndex].subtitle}
              </p>
              <h3 className="font-serif text-lg font-bold">
                {galleryItems[activeImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
