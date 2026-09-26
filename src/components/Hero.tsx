import React, { useState, useEffect } from "react";
import { MessageSquare, CalendarCheck, ShieldCheck } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { heroSlides, BOOKING_URL, WHATSAPP_URL } from "../data/hotelData";
import { BookingWidget } from "./BookingWidget";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        id="top"
        className="relative min-h-[92svh] md:min-h-[95svh] flex items-center justify-center overflow-hidden bg-ink"
      >
        {/* Background Slideshow with Slow Gentle Ken Burns */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              transition: "opacity 1.8s ease-in-out, transform 9s ease-out",
            }}
          >
            <img
              src={slide}
              alt="Hôtel La Renaissance Tata – Façade et hébergement"
              className="w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Ambient Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/40 to-ink/90 pointer-events-none" />

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 pt-32 pb-44 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-ochre animate-pulse" />
            <p className="text-ochre tracking-[0.25em] uppercase text-xs sm:text-sm font-semibold">
              {t.hero.eyebrow}
            </p>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[1.12] font-semibold drop-shadow-md">
            {t.hero.title}
          </h1>

          {/* Elegant short description */}
          <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {t.hero.subtitle}
          </p>

          {/* Primary High-Impact CTAs: Book Now + WhatsApp */}
          <div className="mt-9 flex flex-wrap justify-center items-center gap-3.5 sm:gap-4">
            <a
              href="#book"
              className="h-13 sm:h-14 px-8 sm:px-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-terracotta text-white text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-ink hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <CalendarCheck className="w-5 h-5 shrink-0" />
              <span>{t.hero.cta}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-13 sm:h-14 px-7 sm:px-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#128C4B] hover:bg-[#0e743e] text-white text-base sm:text-lg font-medium backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageSquare className="w-5 h-5 shrink-0" />
              <span>{t.hero.whatsapp}</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-ochre" />
              Meilleur tarif direct garanti
            </span>
            <span>•</span>
            <span>Réception 24h/24</span>
            <span>•</span>
            <span>Wi-Fi & Parking gratuits</span>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-28 md:bottom-24 inset-x-0 z-10 flex justify-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className="h-10 w-10 flex items-center justify-center focus:outline-none"
            >
              <span
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  idx === currentSlide ? "w-10 bg-ochre" : "w-4 bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Floating Booking Widget */}
      <div className="relative z-20 px-4 sm:px-6 md:px-8 -mt-20 md:-mt-14">
        <BookingWidget />
      </div>
    </>
  );
};
