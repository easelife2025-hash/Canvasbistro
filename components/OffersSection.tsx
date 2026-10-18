'use client';

import React from 'react';
import { Sparkles, Clock, Wine, Briefcase, Music, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import { OFFERS_AND_SPECIALS, BISTRO_INFO } from '@/lib/bistro-data';
import { RealPhoneIcon, RealWhatsAppIcon } from '@/components/icons/RealIcons';

interface OffersSectionProps {
  onClaimOffer?: (offerTitle: string) => void;
}

export default function OffersSection({ onClaimOffer }: OffersSectionProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'o1':
        return Wine;
      case 'o2':
        return Briefcase;
      case 'o3':
        return Music;
      case 'o4':
        return Users;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="offers" className="py-20 lg:py-28 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#AA6E4C] block mb-2">
            Specials & Entertainment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1F1109]">
            Offers & Happy Hours
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#623A24]">
            Unwind after work in Belapur with curated beverage perks, acoustic evenings, and executive lunch specials.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFERS_AND_SPECIALS.map((offer) => {
            const Icon = getIcon(offer.id);
            const isVerified = offer.status === 'verified';

            return (
              <div
                key={offer.id}
                className="rounded-2xl bg-[#FFFFFF] border border-[#EFE3D9] p-6 hover:border-[#F59E0B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Verification */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#29170E] flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors">
                      <Icon className="w-5 h-5 text-[#F59E0B] group-hover:text-[#130A05] transition-colors" />
                    </div>

                    {isVerified ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    ) : (
                      <span
                        title="Draft promotional concept for owner verification"
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200"
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span>Unconfirmed</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-[#AA6E4C] uppercase tracking-wider block mb-1">
                    {offer.tag}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-[#1F1109] leading-snug">
                    {offer.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B5735] mt-2 mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{offer.timing}</span>
                  </div>

                  <p className="text-xs text-[#623A24] leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-5 mt-4 border-t border-[#F2ECE4]">
                  <a
                    href={`https://wa.me/917595959339?text=Hi%20Canvas%20Bistro%20Bar%2C%20I%20would%20like%20to%20know%20more%20about%20the%20${encodeURIComponent(
                      offer.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#F59E0B] text-[#1F1109] text-xs font-semibold transition-colors border border-[#DDBCAC] hover:border-[#F59E0B]"
                  >
                    <RealWhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire Offer</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Acoustic Live Music Highlight Card */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#29170E] to-[#1F1109] text-[#FAF6F0] p-6 sm:p-8 border border-[#4A2B1B] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#F59E0B]">
              Weekend Nightlife at CBD Belapur
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Live Acoustic Sessions Every Weekend
            </h3>
            <p className="text-xs sm:text-sm text-[#DDBCAC] max-w-xl">
              Enjoy retro classics, indie pop, and soulful acoustic melodies every Wednesday, Friday, Saturday & Sunday from 8:00 PM until late.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BISTRO_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F59E0B] text-[#130A05] hover:bg-[#FBBF24] font-semibold text-xs sm:text-sm transition-all shadow-md"
            >
              <RealPhoneIcon className="w-4 h-4" />
              <span>Call: {BISTRO_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
