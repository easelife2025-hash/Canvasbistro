'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { BISTRO_INFO } from '@/lib/bistro-data';
import { RealPhoneIcon, RealWhatsAppIcon } from '@/components/icons/RealIcons';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSlot?: string;
  defaultOccasion?: string;
}

export default function ReservationModal({
  isOpen,
  onClose,
  defaultSlot = '7:00 PM',
  defaultOccasion = '',
}: ReservationModalProps) {
  const [partySize, setPartySize] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('Today');
  const [selectedTime, setSelectedTime] = useState<string>(defaultSlot);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [seatingArea, setSeatingArea] = useState<string>('Indoor Bistro Lounge');
  const [notes, setNotes] = useState<string>(defaultOccasion);
  const [isDone, setIsDone] = useState<boolean>(false);

  if (!isOpen) return null;

  const timeSlots = [
    '5:30 PM', '6:00 PM', '6:15 PM', '6:30 PM',
    '6:45 PM', '7:00 PM', '7:15 PM', '7:30 PM',
    '7:45 PM', '8:00 PM', '8:30 PM', '9:00 PM',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDone(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hi Canvas Bistro Bar, I'd like to book a table:%0A• Name: ${guestName || 'Guest'}%0A• Phone: ${guestPhone || 'Not provided'}%0A• Party Size: ${partySize} Guests%0A• Date: ${selectedDate}%0A• Time: ${selectedTime}%0A• Seating: ${seatingArea}${notes ? `%0A• Note: ${notes}` : ''}`;
    return `https://wa.me/917595959339?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#23140C] border border-[#4A2B1B] text-[#FAF6F0] rounded-3xl p-6 sm:p-8 shadow-2xl my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#DDBCAC] hover:text-[#FAF6F0] hover:bg-[#361F13] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#FAF6F0]">
              Table Reserved!
            </h3>

            <p className="text-xs sm:text-sm text-[#DDBCAC] max-w-sm mx-auto leading-relaxed">
              We look forward to welcoming you, <strong className="text-[#FAF6F0]">{guestName}</strong>! Table for <strong className="text-[#F59E0B]">{partySize} guests</strong> on <strong className="text-[#F59E0B]">{selectedDate} at {selectedTime}</strong>.
            </p>

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20ba5a] transition-colors shadow-md"
              >
                <RealWhatsAppIcon className="w-4 h-4" />
                <span>Confirm on WhatsApp (075959 59339)</span>
              </a>

              <a
                href={`tel:${BISTRO_INFO.phoneClean}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#29170E] text-[#FAF6F0] border border-[#4A2B1B] font-semibold text-xs hover:border-[#F59E0B] transition-colors"
              >
                <RealPhoneIcon className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Call Directly: {BISTRO_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="mt-2 text-xs text-[#AA6E4C] hover:text-[#FAF6F0] underline"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider block">
                Direct Table Booking
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#FAF6F0]">
                Canvas Bistro Bar
              </h3>
              <p className="text-xs text-[#AA6E4C] mt-0.5">
                Nilgiri Gardens, CBD Belapur · Closes 2:00 AM
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-semibold text-[#AA6E4C] uppercase mb-1">
                  Guests
                </label>
                <select
                  value={partySize}
                  onChange={(e) => setPartySize(Number(e.target.value))}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-xs font-semibold focus:border-[#F59E0B] focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                    <option key={num} value={num} className="bg-[#190E08]">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#AA6E4C] uppercase mb-1">
                  Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-xs font-semibold focus:border-[#F59E0B] focus:outline-none"
                >
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Sunday (Sunday Buffet)">This Sunday (Sunday Buffet)</option>
                  <option value="Upcoming Friday">Upcoming Friday</option>
                  <option value="Upcoming Saturday">Upcoming Saturday</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#AA6E4C] uppercase mb-1.5">
                Select Time Slot
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all text-center whitespace-nowrap ${
                      selectedTime === slot
                        ? 'bg-[#F59E0B] text-[#130A05] border-[#F59E0B] font-bold'
                        : 'bg-[#190E08] text-[#FAF6F0] border-[#361F13] hover:border-[#683F27]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-semibold text-[#AA6E4C] uppercase mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="e.g. Priya Nair"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-xs placeholder-[#683F27] focus:border-[#F59E0B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#AA6E4C] uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="e.g. 98123 45678"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#190E08] border border-[#4A2B1B] text-[#FAF6F0] text-xs placeholder-[#683F27] focus:border-[#F59E0B] focus:outline-none font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#F59E0B] hover:bg-[#FBBF24] text-[#130A05] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#F59E0B]/20"
            >
              <span>Confirm & Lock Table</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-[#AA6E4C]">
              Booking partners: EazyDiner · Swiggy · Zomato · Direct Desk: 075959 59339
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
