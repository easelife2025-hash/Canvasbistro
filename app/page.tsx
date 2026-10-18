'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import SundayBuffetSection from '@/components/SundayBuffetSection';
import OffersSection from '@/components/OffersSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import ReservationModule from '@/components/ReservationModule';
import LocationContactSection from '@/components/LocationContactSection';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import ReservationModal from '@/components/ReservationModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialSlot, setModalInitialSlot] = useState('7:00 PM');
  const [modalOccasion, setModalOccasion] = useState('');

  const handleOpenReservation = (slot?: string, occasion?: string) => {
    if (slot) setModalInitialSlot(slot);
    if (occasion) setModalOccasion(occasion);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#1F1109] relative">
      {/* Top Navigation */}
      <Navbar onOpenReservationModal={() => handleOpenReservation()} />

      {/* Hero Section with 14s looping coffee-making video, muted by default */}
      <HeroSection onOpenReservationModal={() => handleOpenReservation()} />

      {/* About Section */}
      <AboutSection />

      {/* Food & Beverage Menu */}
      <MenuSection />

      {/* The Grand Sunday Brunch Buffet */}
      <SundayBuffetSection
        onReserveBuffet={() =>
          handleOpenReservation('1:00 PM', 'Sunday Brunch Buffet Reservation')
        }
      />

      {/* Offers & Happy Hours */}
      <OffersSection />

      {/* Ambiance & Food Gallery */}
      <GallerySection />

      {/* Verified Guest Reviews */}
      <ReviewsSection />

      {/* Dedicated Reservation Module matching screenshot */}
      <ReservationModule />

      {/* Location, Google Maps & Contact Details */}
      <LocationContactSection />

      {/* Footer */}
      <Footer />

      {/* Mandatory Floating WhatsApp and Call Buttons (Bottom-Right) */}
      <FloatingContactButtons />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSlot={modalInitialSlot}
        defaultOccasion={modalOccasion}
      />
    </main>
  );
}
