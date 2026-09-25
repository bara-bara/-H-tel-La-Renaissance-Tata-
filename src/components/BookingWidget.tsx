import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelInfo, getBookingUrl, getAgodaUrl } from "../data/hotelData";
import { BookingButton } from "./BookingButton";

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

  const bookingConfig = {
    checkin,
    checkout,
    adults,
  };

  const inputClass =
    "w-full h-12 bg-transparent border-b border-ink/15 focus:border-terracotta outline-none text-ink text-base transition-colors font-medium";

  return (
    <div
      id="book"
      className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-[1.75rem] shadow-[0_30px_80px_-20px_rgba(26,26,26,0.35)] p-5 md:p-7 border border-ochre/25"
    >
      <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_0.8fr_auto] gap-x-5 gap-y-4 items-end">
        {/* Check-in Date */}
        <label className="block">
          <span className="block text-sm text-ink/55 mb-1 font-medium">
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
          <span className="block text-sm text-ink/55 mb-1 font-medium">
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

        {/* Guests / Adults */}
        <label className="block col-span-2 md:col-span-1">
          <span className="block text-sm text-ink/55 mb-1 font-medium">
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

        {/* Actions: Booking.com and Agoda */}
        <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-2.5">
          <BookingButton
            href={getBookingUrl(bookingConfig)}
            brand="booking"
            label="Booking.com"
            className="px-4 text-sm"
          />
          <BookingButton
            href={getAgodaUrl(bookingConfig)}
            brand="agoda"
            label="Agoda"
            variant="dark"
            className="px-4 text-sm"
          />
        </div>
      </div>

      {/* WhatsApp Best Price Guarantee direct link */}
      <a
        href={hotelInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 pt-4 border-t border-ink/5 flex items-center justify-center gap-2 text-sm md:text-base text-ink/65 hover:text-[#128C4B] transition-colors"
      >
        <MessageSquare className="w-5 h-5 text-[#128C4B] shrink-0" />
        <span>{t.widget.whatsapp}</span>
      </a>
    </div>
  );
};
