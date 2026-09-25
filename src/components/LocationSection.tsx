import React from "react";
import { MapPin, Clock, Navigation } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelInfo } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";

export const LocationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-24 md:py-36 texture-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow={t.location.eyebrow}
          title={t.location.title}
        />

        {/* Map Container with Floating Card */}
        <div className="mt-16 relative rounded-[2rem] overflow-hidden border border-ochre/30 shadow-2xl">
          <iframe
            title="Hôtel La Renaissance Tata – Google Maps"
            src={hotelInfo.mapEmbed}
            className="w-full h-[420px] md:h-[560px] map-ochre border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Info Overlay Card */}
          <div className="md:absolute md:bottom-8 md:start-8 md:max-w-md bg-sand/95 backdrop-blur-xl p-7 md:rounded-3xl md:shadow-2xl border border-white/40">
            <p className="flex items-start gap-3 text-ink font-medium text-base">
              <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <span>{t.location.address}</span>
            </p>

            <p className="flex items-start gap-3 mt-3 text-ink/75 text-sm md:text-base">
              <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <span>{t.location.hours}</span>
            </p>

            {/* Distances */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-ink/10 pt-5">
              {t.location.distances.map((dist, idx) => (
                <div key={idx}>
                  <div className="font-display text-2xl font-bold text-terracotta">
                    {dist.v}
                  </div>
                  <div className="text-xs md:text-sm text-ink/65 leading-snug mt-0.5">
                    {dist.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Directions Action */}
            <a
              href={hotelInfo.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full h-12 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white font-medium hover:bg-terracotta transition-colors shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.location.directions}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
