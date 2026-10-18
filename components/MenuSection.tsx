'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertCircle, Plus, Check, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { FEATURED_6_MENU_ITEMS, MenuItem, BISTRO_INFO } from '@/lib/bistro-data';
import { RealWhatsAppIcon } from '@/components/icons/RealIcons';

export default function MenuSection() {
  const [selectedOrderItems, setSelectedOrderItems] = useState<{ [id: string]: number }>({});

  const toggleItemOrder = (item: MenuItem) => {
    setSelectedOrderItems((prev) => {
      const current = prev[item.id] || 0;
      if (current > 0) {
        const next = { ...prev };
        delete next[item.id];
        return next;
      } else {
        return { ...prev, [item.id]: 1 };
      }
    });
  };

  const totalSelectedCount = Object.keys(selectedOrderItems).length;

  const buildWhatsAppOrderLink = () => {
    const selectedList = Object.keys(selectedOrderItems)
      .map((id) => {
        const item = FEATURED_6_MENU_ITEMS.find((m) => m.id === id);
        return item ? `• ${item.name} (₹${item.price})` : '';
      })
      .filter(Boolean)
      .join('%0A');

    return `https://wa.me/917595959339?text=Hello%20Canvas%20Bistro%20Bar%2C%20I%20would%20like%20to%20reserve%20a%20table%20and%20pre-order%20the%20following%20favorites%3A%0A${selectedList}`;
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EFE3D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#AA6E4C] block mb-2">
            Chef Highlights & Signatures
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1109]">
            The Canvas Featured Menu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#623A24]">
            A curated selection of our most loved daytime roasts, coastal seafood, artisanal wood-fired pizzas, and handcrafted cocktails.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF6F0] border border-[#DDBCAC] text-xs text-[#623A24]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">
              Verified recipes from official Belapur listings marked{' '}
              <span className="text-emerald-700 font-semibold">Verified</span>; seasonal items marked{' '}
              <span className="text-amber-700 font-semibold">Unconfirmed</span> for verification.
            </span>
          </div>
        </div>

        {/* Exactly 6 Featured Menu Items Grid with Suitable Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_6_MENU_ITEMS.map((item) => {
            const isSelected = !!selectedOrderItems[item.id];
            return (
              <div
                key={item.id}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#F59E0B] bg-[#FFFBF5] shadow-lg ring-1 ring-[#F59E0B]'
                    : 'border-[#EFE3D9] bg-[#FFFFFF] hover:border-[#DDBCAC] hover:shadow-md'
                }`}
              >
                {/* Dish Photography */}
                <div className="relative h-52 w-full overflow-hidden bg-[#1F1109]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Top-Right Badge */}
                  <div className="absolute top-3 right-3">
                    {item.verificationStatus === 'verified' ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Verified</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-800 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md shadow-sm">
                        <AlertCircle className="w-3 h-3 text-amber-600" />
                        <span>Unconfirmed</span>
                      </span>
                    )}
                  </div>

                  {/* Bottom Category Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-white px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm">
                      {item.category === 'coffee'
                        ? 'Artisanal Roastery'
                        : item.category === 'seafood'
                        ? 'Coastal Seafood'
                        : item.category === 'starters'
                        ? 'Bistro Starters'
                        : item.category === 'mains_pizza'
                        ? 'Wood-fired Oven'
                        : 'Craft Cocktail'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Dietary indicator */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 ${
                          item.isVeg ? 'border-emerald-600' : 'border-rose-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                      </span>

                      <span className="text-[11px] font-semibold text-[#8B5735] uppercase tracking-wider">
                        {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      </span>
                    </div>

                    {/* Dish Name */}
                    <h3 className="font-serif text-lg font-bold text-[#1F1109] group-hover:text-[#8B5735] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-1.5 text-xs text-[#623A24] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Price & Add Action */}
                  <div className="pt-4 mt-4 border-t border-[#F2ECE4] flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-[#1F1109] font-mono tabular-nums">
                        ₹{item.price}
                      </span>
                      <span className="text-[10px] text-[#AA6E4C]">+ taxes</span>
                    </div>

                    <button
                      onClick={() => toggleItemOrder(item)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#1F1109] text-[#FAF6F0]'
                          : 'bg-[#FAF6F0] text-[#623A24] hover:bg-[#EFE3D9] hover:text-[#1F1109]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span>Selected</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Table</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA Button to redirect to /menu */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 sm:p-3 rounded-2xl bg-[#FAF6F0] border border-[#EFE3D9] max-w-xl mx-auto shadow-sm">
            <div className="text-left px-3">
              <span className="block text-xs font-bold text-[#1F1109]">
                Explore Our Complete Menu
              </span>
              <span className="text-xs text-[#623A24]">
                Browse all categories, desserts, Sunday buffet, and beverage selections.
              </span>
            </div>

            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-[#130A05] bg-[#F59E0B] hover:bg-[#FBBF24] shadow-md shadow-[#F59E0B]/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Selected Items Floating Drawer if items chosen */}
        {totalSelectedCount > 0 && (
          <div className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-30 bg-[#190E08] text-[#FAF6F0] p-4 rounded-2xl border border-[#F59E0B]/50 shadow-2xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B] text-[#130A05] flex items-center justify-center font-bold font-mono">
                {totalSelectedCount}
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FAF6F0]">
                  {totalSelectedCount} {totalSelectedCount === 1 ? 'Dish' : 'Dishes'} Selected
                </p>
                <p className="text-[11px] text-[#DDBCAC]">
                  Ready to book with your favorites pre-selected!
                </p>
              </div>
            </div>

            <a
              href={buildWhatsAppOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-semibold transition-all shrink-0 shadow-md"
            >
              <RealWhatsAppIcon className="w-4 h-4" />
              <span>Send to WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
