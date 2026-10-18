'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronUp, ChevronDown, Globe, Shield, ExternalLink } from 'lucide-react';
import { BISTRO_INFO } from '@/lib/bistro-data';

export default function OwnerPitchBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 max-w-sm">
      {/* Minimized Pill */}
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#190E08]/95 backdrop-blur-md border border-[#F59E0B]/50 text-[#FAF6F0] shadow-2xl hover:border-[#F59E0B] transition-all text-xs font-medium hover:scale-105"
        >
          <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          <span className="font-semibold text-[#F59E0B]">Pitch Preview</span>
          <span className="text-[#AA6E4C]">· For Bistro Owner</span>
          <ChevronUp className="w-3.5 h-3.5 text-[#DDBCAC]" />
        </button>
      ) : (
        /* Expanded Drawer */
        <div className="bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] rounded-2xl p-4 shadow-2xl space-y-3 animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between border-b border-[#361F13] pb-2.5">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#F59E0B]" />
              <h4 className="text-xs font-bold text-[#FAF6F0]">
                Client Proposal & Audit
              </h4>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-xs text-[#AA6E4C] hover:text-[#FAF6F0] p-1"
              aria-label="Minimize proposal drawer"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] text-[#DDBCAC] space-y-2">
            <p>
              This website was custom-engineered for <strong className="text-[#FAF6F0]">Canvas Bistro Bar, CBD Belapur</strong> featuring your signature wood brown 🟤 & warm yellow 🟡 palette, auto-looping coffee video, and authentic local business data.
            </p>

            <div className="space-y-1 bg-[#23140C] p-2.5 rounded-lg border border-[#361F13]">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-[#AA6E4C]">Official Phone & WhatsApp:</span>
                <span className="font-mono text-[#F59E0B] font-semibold">{BISTRO_INFO.phone}</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-[#AA6E4C]">Google Maps Geocoding:</span>
                <span className="text-emerald-400 font-semibold">Active & Synced</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-[#AA6E4C]">Hero Video:</span>
                <span className="text-emerald-400 font-semibold">14s 720p Looping MP4</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-[#AA6E4C]">Verification Badging:</span>
                <span className="text-[#F59E0B] font-semibold">Transparently Tagged</span>
              </div>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between gap-2">
            <a
              href={`https://wa.me/917595959339?text=Hello%20Management%20Team%2C%20I%20have%20reviewed%20the%20new%20website%20preview%20for%20Canvas%20Bistro%20Bar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 rounded-lg bg-[#F59E0B] text-[#130A05] font-bold text-xs hover:bg-[#FBBF24] transition-colors"
            >
              Approve & Deploy Domain
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
