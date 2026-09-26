import React, { useState } from "react";
import { MessageSquare, Calendar, Users, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { getBookingUrl, WHATSAPP_URL } from "../data/hotelData";

const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const addDays = (date: Date, days: number): Date => {
  const res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
};

export const BookingWidget: React.FC = () => {
  const { t } = useTranslation();
  const today = new Date();

  const [checkin, setCheckin] = useState<string>(() => formatDate(addDays(today, 1)));
  const [checkout, setCheckout] = useState<string>(() => formatDate(addDays(today, 2)));
  const [adults, setAdults] = useState<number>(2);

  const handleCheckinChange = (val: string) => {
    setCheckin(val);
    if (val >= checkout) {
      setCheckout(formatDate(addDays(new Date(val), 1)));
    }
  };

  const bookingUrl = getBookingUrl({
    checkin,
    checkout,
    adults,
  });

  const inputClass =
    "w-full h-11 bg-transparent border-b border-ink/20 focus:border-terracotta outline-none text-ink text-sm sm:text-base transition-colors font-medium cursor-pointer";

  return (
    <div
      id="book"
      className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-[1.75rem] shadow-[0_25px_70px_-15px_rgba(26,26,26,0.3)] p-5 sm:p-6 md:p-7 border border-ochre/30"
    >
      <div className="grid grid-cols-2 md:grid-cols-[1.1fr_1.1fr_0.9fr_1.3fr] gap-x-5 gap-y-4 items-end">
        {/* Check-in Date */}
        <label className="block">
          <span className="flex items-center gap-1.5 text-xs sm:text-sm text-ink/65 mb-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-terracotta" />
            {t.widget.checkin}
          </span>
          <input
            type="date"
            value={checkin}
            min={formatDate(today)}
            onChange={(e) => handleCheckinChange(e.target.value)}
            className={inputClass}
          />
        </label>

        {/* Check-out Date */}
        <label className="block">
          <span className="flex items-center gap-1.5 text-xs sm:text-sm text-ink/65 mb-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-terracotta" />
            {t.widget.checkout}
          </span>
          <input
            type="date"
            value={checkout}
            min={formatDate(addDays(new Date(checkin), 1))}
            onChange={(e) => setCheckout(e.target.value)}
            className={inputClass}
          />
        </label>

        {/* Guests */}
        <label className="block col-span-2 md:col-span-1">
          <span className="flex items-center gap-1.5 text-xs sm:text-sm text-ink/65 mb-1.5 font-medium">
            <Users className="w-3.5 h-3.5 text-terracotta" />
            {t.widget.guests}
          </span>
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className={inputClass}
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num} {t.widget.adults}
              </option>
            ))}
          </select>
        </label>

        {/* Single Focused High-Conversion Primary Booking Button */}
        <div className="col-span-2 md:col-span-1">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 px-6 rounded-full font-semibold text-sm sm:text-base text-white bg-terracotta hover:bg-ink inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
          >
            <span>{t.nav.book}</span>
            <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100 shrink-0" />
          </a>
        </div>
      </div>

      {/* Direct WhatsApp VIP Guarantee */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 pt-3.5 border-t border-ink/5 flex items-center justify-center gap-2 text-xs sm:text-sm text-ink/70 hover:text-[#128C4B] transition-colors font-medium"
      >
        <MessageSquare className="w-4 h-4 text-[#128C4B] shrink-0" />
        <span>{t.widget.whatsapp}</span>
      </a>
    </div>
  );
};
