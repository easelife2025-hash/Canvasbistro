'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Search,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Coffee,
  Fish,
  Utensils,
  Pizza,
  Wine,
  Cake,
  Plus,
  Check,
  Calendar,
  Clock,
  MapPin,
} from 'lucide-react';
import { MENU_ITEMS, MenuItem, BISTRO_INFO } from '@/lib/bistro-data';
import { RealWhatsAppIcon, RealPhoneIcon } from '@/components/icons/RealIcons';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import ReservationModal from '@/components/ReservationModal';
import Footer from '@/components/Footer';

export default function FullMenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'chef'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrderItems, setSelectedOrderItems] = useState<{ [id: string]: number }>({});
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Items', icon: Utensils },
    { id: 'coffee', label: 'Coffee & Brews', icon: Coffee },
    { id: 'seafood', label: 'Coastal Seafood', icon: Fish },
    { id: 'starters', label: 'Starters & Grills', icon: Utensils },
    { id: 'mains_pizza', label: 'Pizzas & Pastas', icon: Pizza },
    { id: 'bar', label: 'Cocktails & Bar', icon: Wine },
    { id: 'desserts', label: 'Desserts', icon: Cake },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'non-veg' && item.isVeg) return false;
      if (dietaryFilter === 'chef' && !item.isChefSpecial) return false;

      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

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
        const item = MENU_ITEMS.find((m) => m.id === id);
        return item ? `• ${item.name} (₹${item.price})` : '';
      })
      .filter(Boolean)
      .join('%0A');

    return `https://wa.me/917595959339?text=Hello%20Canvas%20Bistro%20Bar%2C%20I%20would%20like%20to%20reserve%20a%20table%20and%20pre-order%20the%20following%20favorites%3A%0A${selectedList}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1F1109] flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#190E08]/95 backdrop-blur-md border-b border-[#361F13] text-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#DDBCAC] hover:text-[#F59E0B] transition-colors bg-[#29170E] py-2 px-3.5 rounded-xl border border-[#4A2B1B]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F59E0B] flex items-center justify-center text-[#130A05] font-serif font-bold text-base">
                C
              </div>
              <span className="font-serif text-lg sm:text-xl font-bold hidden sm:inline">
                Canvas Bistro Bar
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#130A05] bg-[#F59E0B] hover:bg-[#FBBF24] shadow-md transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table</span>
            </button>

            <a
              href={`tel:${BISTRO_INFO.phoneClean}`}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#29170E] text-xs font-semibold text-[#FAF6F0] hover:text-[#F59E0B] border border-[#4A2B1B] transition-colors"
            >
              <RealPhoneIcon className="w-4 h-4 text-[#F59E0B]" />
              <span className="font-mono tabular-nums">{BISTRO_INFO.phone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Menu Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#AA6E4C] block mb-2">
              Complete Food & Beverage Catalogue
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1109]">
              The Full Canvas Bistro Menu
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#623A24]">
              Explore our complete range of day roasts, fresh coastal seafood, tandoor specials, wood-fired pizzas, signature cocktails, and artisanal desserts.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFFFF] border border-[#DDBCAC] text-xs text-[#623A24] shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Verified dishes from official Belapur listings marked{' '}
                <strong className="text-emerald-700">Verified</strong>. Unconfirmed recipes flagged for owner verification.
              </span>
            </div>
          </div>

          {/* Controls Bar: Category Tabs, Search & Dietary */}
          <div className="space-y-4 mb-10 bg-white p-5 rounded-3xl border border-[#EFE3D9] shadow-sm">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                      isActive
                        ? 'bg-[#1F1109] text-[#FAF6F0] shadow-md border border-[#1F1109]'
                        : 'bg-[#FAF6F0] text-[#623A24] hover:bg-[#EFE3D9] border border-[#EFE3D9]'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F59E0B]' : 'text-[#8B5735]'}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search & Dietary Filters */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-[#8B5735] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dishes, coffee, seafood, cocktails..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#DDBCAC] text-xs sm:text-sm text-[#1F1109] placeholder-[#AA6E4C] focus:outline-none focus:border-[#F59E0B] focus:bg-white transition-colors"
                />
              </div>

              <div className="flex items-center gap-1 p-1 bg-[#FAF6F0] rounded-xl border border-[#DDBCAC] self-stretch sm:self-auto overflow-x-auto">
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    dietaryFilter === 'all'
                      ? 'bg-white text-[#1F1109] shadow-sm'
                      : 'text-[#623A24] hover:text-[#1F1109]'
                  }`}
                >
                  All Items
                </button>

                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    dietaryFilter === 'veg'
                      ? 'bg-white text-emerald-800 shadow-sm'
                      : 'text-[#623A24] hover:text-[#1F1109]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Veg</span>
                </button>

                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-white text-rose-800 shadow-sm'
                      : 'text-[#623A24] hover:text-[#1F1109]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-600" />
                  <span>Non-Veg</span>
                </button>

                <button
                  onClick={() => setDietaryFilter('chef')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    dietaryFilter === 'chef'
                      ? 'bg-white text-[#F59E0B] shadow-sm font-bold'
                      : 'text-[#623A24] hover:text-[#1F1109]'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                  <span>Chef Specials</span>
                </button>
              </div>
            </div>
          </div>

          {/* Full Grid of All Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
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
                  <div className="relative h-48 w-full overflow-hidden bg-[#1F1109]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

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
                  </div>

                  {/* Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
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

                      <h3 className="font-serif text-lg font-bold text-[#1F1109] group-hover:text-[#8B5735] transition-colors leading-snug">
                        {item.name}
                      </h3>

                      <p className="mt-1.5 text-xs text-[#623A24] line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

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

          {/* Floating Pre-Order Action bar if dishes selected */}
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
                    Ready to book table with pre-orders
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
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <FloatingContactButtons />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
