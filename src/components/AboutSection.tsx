import React from "react";
import { Check } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelImages } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="relative py-24 md:py-36 texture-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Architectural Photos Collage */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-t-full overflow-hidden aspect-[3/4] shadow-2xl border-4 border-white/60">
              <img
                src={hotelImages.realCourtyard}
                alt="Hôtel La Renaissance Tata – Patio et jardin"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Overlapping Floating Inset */}
            <div className="absolute -bottom-10 -end-4 md:-end-10 w-40 md:w-56 aspect-square rounded-2xl overflow-hidden border-[6px] border-sand shadow-2xl">
              <img
                src={hotelImages.realLobby}
                alt="Lobby & Réception 24h/24"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text & Stats */}
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              center={false}
            />

            <div className="mt-7 space-y-4 text-ink/80 text-base md:text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* 4 Stats Cards */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-ochre/25 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="block font-display text-3xl md:text-4xl font-bold text-terracotta">
                    {stat.v}
                  </span>
                  <span className="block mt-1 text-sm text-ink/65 font-medium leading-snug">
                    {stat.l}
                  </span>
                </div>
              ))}
            </div>

            {/* Included Features List */}
            <div className="mt-10 pt-8 border-t border-ink/10">
              <h4 className="font-display text-xl text-ink font-semibold mb-4">
                {t.about.featuresTitle}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.about.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-ink/75 font-medium"
                  >
                    <span className="w-5 h-5 rounded-full bg-ochre/20 text-terracotta flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={hotelImages.realSpace}
            alt="Ambiance Hôtel La Renaissance Tata"
            className="w-full h-full object-cover scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-ink/50 backdrop-blur-[1px]" />
        <div className="relative max-w-4xl px-6 text-center text-white">
          <span className="block font-display text-ochre text-6xl md:text-8xl leading-none">
            “
          </span>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl md:leading-snug font-medium text-sand mt-2">
            {t.about.quote}
          </p>
        </div>
      </section>
    </>
  );
};
