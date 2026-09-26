import React from "react";
import { MapPin, Clock, Navigation, Phone, MessageSquare } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import {
  hotelInfo,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  MOBILE_DISPLAY,
} from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";

export const LocationSection: React.FC = () => {
  const { t, lang } = useTranslation();

  const sectionTitle =
    lang === "ar"
      ? "موقعنا في طاطا (Find Us in Tata)"
      : lang === "en"
      ? "Find Us in Tata"
      : "Nous Trouver à Tata";

  return (
    <section id="location" className="py-24 md:py-32 texture-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow={t.location.eyebrow}
          title={sectionTitle}
          subtitle={t.location.title}
        />

        {/* Map Container with Floating Info Card */}
        <div className="mt-14 relative rounded-3xl md:rounded-[2rem] overflow-hidden border border-ochre/30 shadow-2xl">
          <iframe
            title="Hôtel La Renaissance Tata – Google Maps"
            src={hotelInfo.mapEmbed}
            className="w-full h-[450px] md:h-[580px] map-ochre border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Info Overlay Card */}
          <div className="md:absolute md:bottom-8 md:start-8 md:max-w-md w-full bg-sand/95 backdrop-blur-xl p-6 sm:p-7 md:rounded-3xl md:shadow-2xl border border-white/60">
            {/* Address */}
            <p className="flex items-start gap-3 text-ink font-semibold text-base">
              <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <span>
                {lang === "ar" ? hotelInfo.addressArabic : hotelInfo.address}
              </span>
            </p>

            {/* Hours */}
            <p className="flex items-start gap-3 mt-3 text-ink/75 text-sm">
              <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <span>{t.location.hours} · Réception 24h/24</span>
            </p>

            {/* Distances */}
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-ink/10 pt-4">
              {t.location.distances.map((dist, idx) => (
                <div key={idx}>
                  <div className="font-display text-xl sm:text-2xl font-bold text-terracotta">
                    {dist.v}
                  </div>
                  <div className="text-xs text-ink/65 leading-tight mt-0.5 font-medium">
                    {dist.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons: Get Directions, Call, WhatsApp */}
            <div className="mt-6 space-y-2.5">
              {/* Get Directions Button */}
              <a
                href={hotelInfo.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 sm:h-12 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white text-sm font-semibold hover:bg-terracotta transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.location.directions}</span>
              </a>

              {/* Direct Call & WhatsApp row */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="h-11 inline-flex items-center justify-center gap-1.5 rounded-full border border-ink/20 bg-white/70 hover:bg-ink hover:text-white text-ink text-xs sm:text-sm font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-terracotta" />
                  <span>{PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#128C4B] hover:bg-[#0e743e] text-white text-xs sm:text-sm font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
