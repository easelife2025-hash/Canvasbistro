'use client';

import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, ArrowRight, X, MessageSquare, ThumbsUp } from 'lucide-react';
import { REVIEWS, Review, BISTRO_INFO } from '@/lib/bistro-data';
import { RealWhatsAppIcon } from '@/components/icons/RealIcons';

export default function ReviewsSection() {
  const [isAllReviewsOpen, setIsAllReviewsOpen] = useState(false);
  const [selectedSourceFilter, setSelectedSourceFilter] = useState<'all' | 'Google' | 'EazyDiner' | 'Zomato'>('all');

  // Double the reviews array to create a completely seamless infinite chain loop
  const marqueeReviews = [...REVIEWS, ...REVIEWS];

  const filteredModalReviews = REVIEWS.filter((r) => {
    if (selectedSourceFilter === 'all') return true;
    return r.source.toLowerCase().includes(selectedSourceFilter.toLowerCase());
  });

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Rating Metric Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#AA6E4C] block mb-2">
              Guest Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1109]">
              Loved by CBD Belapur Diners
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#623A24]">
              Real feedback from guests enjoying artisan coffee, coastal seafood, Sunday buffets, and vibrant late-night gatherings.
            </p>
          </div>

          {/* Social Proof Aggregate Score Box */}
          <div className="flex items-center gap-6 p-4 rounded-2xl bg-[#FFFFFF] border border-[#EFE3D9] shadow-sm shrink-0">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1109]">
                  4.3
                </span>
                <div className="flex text-[#F59E0B]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#8B5735] mt-1 block">
                Based on 186+ verified diner ratings
              </span>
            </div>

            <div className="h-10 w-px bg-[#EFE3D9]" />

            <div className="text-xs text-[#623A24]">
              <span className="block font-semibold text-[#1F1109]">Top rated for:</span>
              <span>Sunday Buffet · Seafood · Coffee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Slow Moving Marquee Chain for Reviews */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Subtle Edge Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF6F0] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF6F0] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-chain flex gap-6 px-4">
          {marqueeReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 rounded-2xl bg-[#FFFFFF] border border-[#EFE3D9] p-6 shadow-sm hover:shadow-lg hover:border-[#F59E0B] transition-all duration-300 flex flex-col justify-between select-none cursor-grab active:cursor-grabbing"
            >
              <div>
                {/* Header with Source & Rating */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-[#F59E0B]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(review.rating)
                            ? 'fill-current'
                            : 'text-[#E5D7CC]'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] font-semibold text-[#8B5735] px-2 py-0.5 rounded bg-[#FAF6F0] border border-[#EFE3D9]">
                    {review.source}
                  </span>
                </div>

                {/* Review Quote */}
                <div className="relative mb-4">
                  <Quote className="w-5 h-5 text-[#EFE3D9] mb-1" />
                  <p className="text-xs text-[#4A2B1B] leading-relaxed italic line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author & Highlight Dish */}
              <div className="pt-3 border-t border-[#F2ECE4]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#1F1109] flex items-center gap-1">
                      <span>{review.author}</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    </h4>
                    <span className="text-[10px] text-[#AA6E4C] block">
                      {review.location || 'Navi Mumbai'} · {review.date}
                    </span>
                  </div>

                  {review.highlightDish && (
                    <span className="text-[10px] font-medium text-[#8B5735] bg-[#FAF6F0] px-2 py-1 rounded-md text-right max-w-[130px] truncate">
                      {review.highlightDish}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-[11px] text-[#AA6E4C] mt-2 mb-10">
        Hover over any review card to pause the chain.
      </p>

      {/* Same as Menu: View All Reviews Option at Bottom */}
      <div className="text-center px-4">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 sm:p-3 rounded-2xl bg-[#FFFFFF] border border-[#EFE3D9] max-w-xl mx-auto shadow-sm">
          <div className="text-left px-3">
            <span className="block text-xs font-bold text-[#1F1109]">
              Read All Verified Guest Experiences
            </span>
            <span className="text-xs text-[#623A24]">
              Browse 186+ reviews across Google, EazyDiner, and Zomato.
            </span>
          </div>

          <button
            onClick={() => setIsAllReviewsOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#130A05] bg-[#F59E0B] hover:bg-[#FBBF24] shadow-md shadow-[#F59E0B]/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* All Reviews Modal / Drawer */}
      {isAllReviewsOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsAllReviewsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#FAF6F0] border border-[#DDBCAC] text-[#1F1109] rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[85vh] flex flex-col justify-between animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#EFE3D9] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#AA6E4C]">
                  Verified Ratings & Dining Stories
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F1109]">
                  All Canvas Bistro Bar Reviews
                </h3>
              </div>

              <button
                onClick={() => setIsAllReviewsOpen(false)}
                className="p-2 rounded-full text-[#8B5735] hover:text-[#1F1109] hover:bg-[#EFE3D9] transition-colors"
                aria-label="Close reviews modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs by Source */}
            <div className="flex items-center gap-2 py-3 overflow-x-auto">
              {(['all', 'Google', 'EazyDiner', 'Zomato'] as const).map((source) => (
                <button
                  key={source}
                  onClick={() => setSelectedSourceFilter(source)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedSourceFilter === source
                      ? 'bg-[#1F1109] text-white'
                      : 'bg-white text-[#623A24] hover:bg-[#EFE3D9] border border-[#EFE3D9]'
                  }`}
                >
                  {source === 'all' ? 'All Platforms' : source}
                </button>
              ))}
            </div>

            {/* Scrollable Reviews List */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 my-2 max-h-[480px]">
              {filteredModalReviews.map((r) => (
                <div
                  key={r.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFE3D9] shadow-sm space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-[#1F1109]">{r.author}</h4>
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex text-[#F59E0B]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(r.rating) ? 'fill-current' : 'text-[#E5D7CC]'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#8B5735]">{r.source}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#4A2B1B] leading-relaxed italic">
                    &ldquo;{r.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-[#AA6E4C] pt-2 border-t border-[#F2ECE4]">
                    <span>{r.location || 'CBD Belapur'} · {r.date}</span>
                    {r.highlightDish && (
                      <span className="font-semibold text-[#8B5735]">
                        Favorite: {r.highlightDish}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer with Share Feedback Action */}
            <div className="pt-4 border-t border-[#EFE3D9] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#623A24]">
                Dined recently? Share your feedback directly with management!
              </span>

              <a
                href={`https://wa.me/917595959339?text=Hi%20Canvas%20Bistro%20Bar%2C%20I%20would%20like%20to%20share%20my%20dining%20feedback%20from%20my%20recent%20visit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20ba5a] transition-all shadow-md shrink-0"
              >
                <RealWhatsAppIcon className="w-4 h-4" />
                <span>Share Review on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
