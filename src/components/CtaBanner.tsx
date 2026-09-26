import React from "react";
import { MessageSquare, CalendarCheck, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { BOOKING_URL, WHATSAPP_URL, hotelImages } from "../data/hotelData";

export const CtaBanner: React.FC = () => {
  const { t } = useTranslation();
  const bannerData = t.ctaBanner;

  return (
    <section className="relative py-20 md:py-28 bg-ink overflow-hidden text-sand">
      {/* Background Architectural Photo with Ambient Blur */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={hotelImages.realCourtyard}
          alt="Hôtel La Renaissance Tata"
          className="w-full h-full object-cover scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/95" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <span className="text-ochre tracking-[0.25em] uppercase text-xs sm:text-sm font-semibold block mb-3">
          {bannerData.eyebrow}
        </span>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
          {bannerData.title}
        </h2>

        <p className="mt-5 text-sand/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {bannerData.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap justify-center items-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-13 sm:h-14 px-8 sm:px-10 rounded-full bg-terracotta text-white font-semibold text-base sm:text-lg inline-flex items-center gap-2 hover:bg-white hover:text-ink transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <CalendarCheck className="w-5 h-5 shrink-0" />
            <span>{bannerData.bookBtn}</span>
            <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-13 sm:h-14 px-7 sm:px-8 rounded-full bg-[#128C4B] hover:bg-[#0e743e] text-white font-medium text-base sm:text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md"
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span>{bannerData.whatsappBtn}</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-sand/65">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-ochre" />
            Confirmation immédiate & sécurisée
          </span>
          <span>•</span>
          <span>Annulation selon conditions Booking.com</span>
          <span>•</span>
          <span>Assistance personnalisée 24h/24</span>
        </div>
      </div>
    </section>
  );
};
