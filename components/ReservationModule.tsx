'use client';

import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { BISTRO_INFO } from '@/lib/bistro-data';
import { RealPhoneIcon, RealWhatsAppIcon } from '@/components/icons/RealIcons';

interface ReservationModuleProps {
  initialSlot?: string;
  onSuccess?: () => void;
}

export default function ReservationModule({ initialSlot }: ReservationModuleProps) {
  const [partySize, setPartySize] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('Today');
  const [customDate, setCustomDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>(initialSlot || '7:00 PM');
  const [seatingArea, setSeatingArea] = useState<string>('Indoor Bistro Lounge');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const timeSlots = [
    '5:00 PM', '5:15 PM', '5:30 PM', '6:00 PM',
    '6:15 PM', '6:30 PM', '6:45 PM', '7:00 PM',
    '7:15 PM', '7:30 PM', '7:45 PM', '8:00 PM',
    '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
  ];

  const seatingOptions = [
    'Indoor Bistro Lounge',
    'Bar Counter / High Tops',
    'Private Dining Room',
    'Sunday Buffet Section',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getReservationWhatsAppUrl = () => {
    const dateText = selectedDate === 'Custom' ? customDate || 'Upcoming date' : selectedDate;
    const text = `Hi Canvas Bistro Bar, I would like to confirm my table reservation:%0A• Name: ${guestName || 'Guest'}%0A• Phone: ${guestPhone || 'Not provided'}%0A• Party Size: ${partySize} Guests%0A• Date: ${dateText}%0A• Time: ${selectedTime}%0A• Seating: ${seatingArea}${specialRequests ? `%0A• Note: ${specialRequests}` : ''}`;
    return `https://wa.me/917595959339?text=${text}`;
  };

  return (
    <section id="reservations" className="py-20 lg:py-28 bg-[#160D07] text-[#FAF6F0] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8B5735]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#F59E0B] block mb-2">
            Instant Table Reservations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF6F0]">
            Reserve Your Table at Canvas Bistro
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#DDBCAC]">
            Select your party, date, and preferred time slot for seamless instant confirmation.
          </p>
        </div>

        {/* Main Reservation Card (Matching the exact UI layout from user screenshots) */}
        <div className="bg-[#23140C] border border-[#4A2B1B] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#FAF6F0]">
                  Reservation Request Logged!
                </h3>
                <p className="text-sm text-[#DDBCAC] mt-1.5 max-w-md mx-auto">
                  Thank you, <strong className="text-[#FAF6F0]">{guestName || 'Valued Guest'}</strong>. Your table for <strong className="text-[#F59E0B]">{partySize} guests</strong> on <strong className="text-[#F59E0B]">{selectedDate === 'Custom' ? customDate : selectedDate} at {selectedTime}</strong> has been prepared.
                </p>
              </div>

              {/* Action options */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getReservationWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-sm transition-all shadow-md"
                >
                  <RealWhatsAppIcon className="w-4 h-4" />
                  <span>Lock Table via WhatsApp</span>
                </a>

                <a
                  href={`tel:${BISTRO_INFO.phoneClean}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#29170E] hover:bg-[#361F13] text-[#FAF6F0] border border-[#4A2B1B] font-semibold text-sm transition-all"
                >
                  <RealPhoneIcon className="w-4 h-4 text-[#F59E0B]" />
                  <span>Call 075959 59339</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#AA6E4C] hover:text-[#FAF6F0] underline"
                >
                  Modify reservation details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {/* Row 1: Party, Date & Time selector controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Party Size */}
                <div>
                  <label className="block text-xs font-semibold text-[#AA6E4C] uppercase tracking-wider mb-2">
                    Party Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(Number(e.target.value))}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-sm font-medium focus:outline-none focus:border-[#F59E0B] transition-colors appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15].map((num) => (
                        <option key={num} value={num} className="bg-[#190E08] text-[#FAF6F0]">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-[#AA6E4C] uppercase tracking-wider mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-sm font-medium focus:outline-none focus:border-[#F59E0B] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Today">Today</option>
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="This Sunday (Sunday Buffet)">This Sunday (Sunday Buffet)</option>
                      <option value="Upcoming Friday">Upcoming Friday</option>
                      <option value="Upcoming Saturday">Upcoming Saturday</option>
                      <option value="Custom">Custom Date...</option>
                    </select>
                  </div>
                </div>

                {/* Selected Time Quick Display */}
                <div>
                  <label className="block text-xs font-semibold text-[#AA6E4C] uppercase tracking-wider mb-2">
                    Selected Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#F59E0B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      readOnly
                      value={selectedTime}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#F59E0B] font-bold text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Custom date input if selected */}
              {selectedDate === 'Custom' && (
                <div className="p-3 bg-[#190E08] rounded-xl border border-[#4A2B1B] flex items-center gap-3">
                  <label className="text-xs text-[#DDBCAC] whitespace-nowrap">Pick Date:</label>
                  <input
                    type="date"
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                    className="bg-[#23140C] border border-[#4A2B1B] rounded-lg px-3 py-1.5 text-xs text-[#FAF6F0] focus:border-[#F59E0B] focus:outline-none"
                  />
                </div>
              )}

              {/* Time Slots Grid (Exactly matching user screenshot 1) */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-[#AA6E4C] uppercase tracking-wider mb-3">
                  Available Dining Time Slots
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all text-center whitespace-nowrap ${
                          isSelected
                            ? 'bg-[#F59E0B] text-[#130A05] border-[#F59E0B] shadow-md font-bold'
                            : 'bg-[#190E08] text-[#FAF6F0] border-[#361F13] hover:border-[#683F27] hover:bg-[#29170E]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Seating Preference */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-[#AA6E4C] uppercase tracking-wider mb-2">
                  Seating Ambience Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {seatingOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setSeatingArea(opt)}
                      className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-colors ${
                        seatingArea === opt
                          ? 'border-[#F59E0B] bg-[#29170E] text-[#F59E0B]'
                          : 'border-[#361F13] bg-[#190E08] text-[#DDBCAC] hover:border-[#4A2B1B]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#AA6E4C] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-sm placeholder-[#683F27] focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#AA6E4C] uppercase tracking-wider mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="e.g. 98200 12345"
                    className="w-full px-4 py-3 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-sm placeholder-[#683F27] focus:outline-none focus:border-[#F59E0B] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#AA6E4C] uppercase tracking-wider mb-1.5">
                  Special Notes / Occasion (Optional)
                </label>
                <input
                  type="text"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Birthday celebration, window table, seafood preferences"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-xs placeholder-[#683F27] focus:outline-none focus:border-[#F59E0B]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#130A05] hover:opacity-95 shadow-xl shadow-[#F59E0B]/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue with Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Booking Providers Attribution (Directly matching screenshot 1!) */}
              <div className="pt-4 border-t border-[#361F13] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#AA6E4C]">
                <span>Booking providers supply these times & slots</span>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-[#EFE3D9] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>EazyDiner</span>
                  </span>
                  <span className="font-semibold text-[#EFE3D9] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>Swiggy</span>
                  </span>
                  <span className="font-semibold text-[#EFE3D9] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Zomato</span>
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
