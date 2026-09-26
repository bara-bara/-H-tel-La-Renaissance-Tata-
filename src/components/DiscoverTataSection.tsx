import React from "react";
import { Compass, Landmark, Mountain, Sparkles, MapPin } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { SectionHeader } from "./SectionHeader";
import { hotelInfo, BOOKING_URL } from "../data/hotelData";

const discoverIcons = [TreesIcon, Landmark, Sparkles, Mountain];

function TreesIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.4" />
    </svg>
  );
}

export const DiscoverTataSection: React.FC = () => {
  const { t, lang } = useTranslation();
  const discoverData = t.discover;

  return (
    <section id="discover" className="py-24 md:py-32 bg-[#F6EFE6] border-t border-ochre/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow={discoverData.eyebrow}
          title={discoverData.title}
          subtitle={discoverData.subtitle}
        />

        {/* 4 Cards Grid of Real Highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {discoverData.items.map((item, idx) => {
            const Icon = discoverIcons[idx] || Compass;

            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-ochre/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location Advantage Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-ochre/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-2xl bg-ochre/15 text-terracotta flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-6 h-6" />
            </span>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-semibold text-ink">
                {lang === "ar"
                  ? "موقع استراتيجي في قلب طاطا"
                  : lang === "en"
                  ? "Ideal Basecamp in the Heart of Tata"
                  : "Votre camp de base idéal au cœur de Tata"}
              </h4>
              <p className="mt-1 text-sm text-ink/75 leading-relaxed max-w-3xl">
                {discoverData.stayNote}
              </p>
            </div>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-12 px-6 rounded-full bg-terracotta text-white font-semibold text-sm whitespace-nowrap hover:bg-ink transition-colors shadow-sm shrink-0"
          >
            {t.nav.book}
          </a>
        </div>
      </div>
    </section>
  );
};
