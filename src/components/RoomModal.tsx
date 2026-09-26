import React from "react";
import {
  X,
  Wifi,
  Wind,
  Tv,
  Bath,
  Coffee,
  Users,
  Car,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { RoomItem, BOOKING_URL, WHATSAPP_URL } from "../data/hotelData";

interface RoomModalProps {
  room: RoomItem | null;
  text: {
    name: string;
    beds: string;
    desc: string;
  } | null;
  onClose: () => void;
}

const amenityIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  ac: Wind,
  tv: Tv,
  bath: Bath,
  breakfast: Coffee,
  family: Users,
  parking: Car,
};

export const RoomModal: React.FC<RoomModalProps> = ({ room, text, onClose }) => {
  const { t, dir } = useTranslation();

  if (!room || !text) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        dir={dir}
        className="relative w-full max-w-2xl bg-sand rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border border-ochre/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ink/70 hover:bg-terracotta text-white flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dual Photo Showcase */}
        <div className="grid grid-cols-2 gap-1 h-52 sm:h-64 md:h-72">
          <img
            src={room.img}
            alt={text.name}
            className="w-full h-full object-cover"
          />
          <img
            src={room.gallery}
            alt={`${text.name} - Vue détaillée`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-2xl md:text-3xl text-ink font-semibold">
              {text.name}
            </h3>
            <span className="font-display text-2xl font-bold text-terracotta">
              {room.price} {t.rooms.currency} <span className="text-sm font-normal text-ink/65">{t.rooms.night}</span>
            </span>
          </div>

          <p className="text-ink/65 text-sm mt-1 font-medium">
            {text.beds} · {room.guests} {t.rooms.guests}
          </p>

          <p className="mt-4 text-ink/80 text-sm sm:text-base leading-relaxed">
            {text.desc}
          </p>

          {/* Amenities with icons */}
          <h4 className="font-display text-lg text-ink font-semibold mt-6 mb-3">
            {t.rooms.amenitiesTitle}
          </h4>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {room.amenities.map((key) => {
              const IconComp = amenityIconMap[key] || CheckCircle2;
              const label = t.rooms.amenities[key as keyof typeof t.rooms.amenities];
              return (
                <li
                  key={key}
                  className="flex items-center gap-2 text-xs sm:text-sm text-ink/75 font-medium"
                >
                  <IconComp className="w-4 h-4 text-ochre shrink-0" />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>

          {/* Hotel Policies */}
          <h4 className="font-display text-lg text-ink font-semibold mt-6 mb-3">
            {t.rooms.policiesTitle}
          </h4>
          <ul className="space-y-2">
            {t.rooms.policies.map((policy, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs sm:text-sm text-ink/75"
              >
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>{policy}</span>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 rounded-full bg-terracotta text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:bg-ink transition-colors shadow-md hover:scale-105"
            >
              <span>{t.nav.book}</span>
              <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-full bg-[#128C4B] text-white font-medium text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
