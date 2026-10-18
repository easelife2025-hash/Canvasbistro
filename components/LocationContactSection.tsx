'use client';

import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink, Calendar, Mail, Globe } from 'lucide-react';
import { BISTRO_INFO } from '@/lib/bistro-data';
import { RealPhoneIcon, RealWhatsAppIcon } from '@/components/icons/RealIcons';

export default function LocationContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EFE3D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Cards & Business Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#AA6E4C] block mb-2">
                Visit & Connect
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1109]">
                Find Canvas Bistro Bar
              </h2>
              <p className="mt-2 text-sm text-[#623A24]">
                Conveniently situated in CBD Belapur, Navi Mumbai. Just 5 minutes from Belapur railway station.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#EFE3D9] space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#29170E] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#AA6E4C] uppercase tracking-wider">
                    Full Official Address
                  </h3>
                  <p className="text-sm font-semibold text-[#1F1109] mt-1 leading-relaxed">
                    {BISTRO_INFO.address.full}
                  </p>
                  <p className="text-xs text-[#8B5735] mt-1">
                    {BISTRO_INFO.address.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BISTRO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F1109] hover:bg-[#361F13] text-[#FAF6F0] text-xs font-semibold transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#AA6E4C]" />
                </a>
              </div>
            </div>

            {/* Direct Contact Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Call */}
              <a
                href={`tel:${BISTRO_INFO.phoneClean}`}
                className="p-4 rounded-xl bg-[#FAF6F0] border border-[#EFE3D9] hover:border-[#F59E0B] transition-colors flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#29170E] group-hover:bg-[#F59E0B] flex items-center justify-center transition-colors shrink-0">
                  <RealPhoneIcon className="w-4 h-4 text-[#F59E0B] group-hover:text-[#130A05] transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] text-[#AA6E4C] uppercase font-semibold block">
                    Phone Inquiries
                  </span>
                  <span className="text-xs font-bold text-[#1F1109] font-mono">
                    {BISTRO_INFO.phone}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={BISTRO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#FAF6F0] border border-[#EFE3D9] hover:border-[#25D366] transition-colors flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#29170E] group-hover:bg-[#25D366] flex items-center justify-center transition-colors shrink-0">
                  <RealWhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] text-[#AA6E4C] uppercase font-semibold block">
                    WhatsApp Direct
                  </span>
                  <span className="text-xs font-bold text-[#1F1109] font-mono">
                    075959 59339
                  </span>
                </div>
              </a>
            </div>

            {/* Timings Schedule */}
            <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#EFE3D9] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F1109]">
                <Clock className="w-4 h-4 text-[#F59E0B]" />
                <span>Operating Hours</span>
              </div>

              <div className="space-y-2 text-xs divide-y divide-[#EFE3D9]">
                <div className="flex justify-between pt-1">
                  <span className="text-[#623A24]">Daily Dining & Bar</span>
                  <span className="font-semibold text-[#1F1109]">11:30 AM – 2:00 AM (Closes 2 AM)</span>
                </div>
                <div className="flex justify-between pt-1.5">
                  <span className="text-[#623A24]">Happy Hours</span>
                  <span className="font-semibold text-[#1F1109]">4:00 PM – 8:00 PM</span>
                </div>
                <div className="flex justify-between pt-1.5">
                  <span className="text-[#623A24]">Sunday Brunch Buffet</span>
                  <span className="font-semibold text-[#F59E0B]">Sundays 12:30 PM – 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Parent Hospitality Group */}
            <div className="text-xs text-[#8B5735] flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#AA6E4C]" />
              <span>A premier destination by Pavithra Hospitality (pavithrahospitality.com)</span>
            </div>
          </div>

          {/* Right Column: Google Maps Location View */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border-2 border-[#EFE3D9] shadow-xl bg-[#FAF6F0]">
              {/* Map Header Bar */}
              <div className="bg-[#1F1109] text-[#FAF6F0] p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                  <span className="font-semibold text-xs sm:text-sm">
                    Canvas Bistro Bar on Google Maps
                  </span>
                </div>
                <a
                  href={BISTRO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#F59E0B] hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <iframe
                  title="Canvas Bistro Bar Google Maps Location"
                  src={BISTRO_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Bar with Distance info */}
              <div className="p-4 bg-[#FFFFFF] border-t border-[#EFE3D9] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4 text-[#623A24]">
                  <span>🚗 5 mins from Belapur Station</span>
                  <span>🚶 1.3 km walking distance</span>
                </div>

                <a
                  href={BISTRO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#F59E0B] text-[#130A05] font-semibold hover:bg-[#FBBF24] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
