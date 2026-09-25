import React, { useState, useEffect } from "react";
import { useTranslation } from "../context/LanguageContext";
import { heroSlides } from "../data/hotelData";
import { BookingWidget } from "./BookingWidget";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        id="top"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ink"
      >
        {/* Background Slideshow Images */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              transition: "opacity 1.6s ease-in-out, transform 8s linear",
            }}
          >
            <img
              src={slide}
              alt="Hôtel La Renaissance Tata"
              className="w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/35 to-ink/90 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6 pt-32 pb-44 text-center">
          <p className="text-ochre tracking-[0.3em] uppercase text-sm md:text-base font-semibold">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.1] mt-6 font-semibold">
            {t.hero.title}
          </h1>

          <p className="mt-7 text-white/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#book"
              className="h-14 px-8 inline-flex items-center rounded-full bg-terracotta text-white text-lg font-medium transition-all duration-300 hover:bg-white hover:text-ink hover:scale-105 shadow-xl"
            >
              {t.hero.cta}
            </a>
            <a
              href="#rooms"
              className="h-14 px-8 inline-flex items-center rounded-full border border-white/40 text-white text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-28 md:bottom-24 inset-x-0 z-10 flex justify-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className="h-11 w-11 flex items-center justify-center focus:outline-none"
            >
              <span
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  idx === currentSlide ? "w-10 bg-ochre" : "w-5 bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Floating Booking Widget */}
      <div className="relative z-20 px-4 md:px-8 -mt-20 md:-mt-14">
        <BookingWidget />
      </div>
    </>
  );
};
