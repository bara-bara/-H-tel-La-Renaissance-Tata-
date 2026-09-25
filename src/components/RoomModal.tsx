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
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { RoomItem, hotelInfo } from "../data/hotelData";
import { BookingButton } from "./BookingButton";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        dir={dir}
        className="relative w-full max-w-3xl bg-sand rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ink/70 text-white hover:bg-ink flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dual Photo Showcase */}
        <div className="grid grid-cols-2 gap-1 h-56 md:h-72">
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
          <h3 className="font-display text-2xl md:text-3xl text-ink font-semibold">
            {text.name}
          </h3>
          <p className="text-ink/65 text-base mt-1 font-medium">
            {text.beds} · {room.guests} {t.rooms.guests}
          </p>

          <p className="mt-4 text-ink/80 text-base leading-relaxed">
            {text.desc}
          </p>

          {/* Amenities with icons */}
          <h4 className="font-display text-xl text-ink font-semibold mt-7 mb-3">
            {t.rooms.amenitiesTitle}
          </h4>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {room.amenities.map((key) => {
              const IconComp = amenityIconMap[key] || CheckCircle2;
              const label = t.rooms.amenities[key as keyof typeof t.rooms.amenities];
              return (
                <li
                  key={key}
                  className="flex items-center gap-2 text-sm text-ink/75 font-medium"
                >
                  <IconComp className="w-4 h-4 text-ochre shrink-0" />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>

          {/* Hotel Policies */}
          <h4 className="font-display text-xl text-ink font-semibold mt-7 mb-3">
            {t.rooms.policiesTitle}
          </h4>
          <ul className="space-y-2">
            {t.rooms.policies.map((policy, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2.5 text-sm text-ink/75"
              >
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
                <span>{policy}</span>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-sm text-ink/60 block">{t.rooms.from}</span>
              <span className="font-display text-3xl font-bold text-terracotta">
                {room.price}{" "}
                <span className="text-base font-normal text-ink/70">
                  {t.rooms.currency} {t.rooms.night}
                </span>
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <BookingButton
                href={hotelInfo.bookingUrl}
                brand="booking"
                label={t.rooms.book}
              />
              <BookingButton
                href={hotelInfo.agodaUrl}
                brand="agoda"
                label={t.rooms.agoda}
                variant="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
