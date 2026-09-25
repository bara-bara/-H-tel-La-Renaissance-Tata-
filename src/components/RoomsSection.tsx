import React, { useState } from "react";
import { Bed, Users, Wifi, Wind, Tv, Bath, Coffee, Car } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { roomsData, RoomItem, hotelInfo } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";
import { BookingButton } from "./BookingButton";
import { RoomModal } from "./RoomModal";

const amenityIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  ac: Wind,
  tv: Tv,
  bath: Bath,
  breakfast: Coffee,
  family: Users,
  parking: Car,
};

export const RoomsSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedRoom, setSelectedRoom] = useState<{
    room: RoomItem;
    text: { name: string; beds: string; desc: string };
  } | null>(null);

  return (
    <section id="rooms" className="py-24 md:py-36 bg-[#FBF6F0]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow={t.rooms.eyebrow}
          title={t.rooms.title}
          subtitle={t.rooms.subtitle}
        />

        <div className="mt-20 md:mt-28 space-y-24 md:space-y-36">
          {roomsData.map((room, idx) => {
            const textItem = t.rooms.items[idx];
            const isOdd = idx % 2 === 1;

            return (
              <div
                key={room.id}
                className="grid md:grid-cols-12 gap-8 md:gap-14 items-center"
              >
                {/* Room Image in Arch Frame */}
                <div className={`md:col-span-7 ${isOdd ? "md:order-2" : ""}`}>
                  <button
                    onClick={() => setSelectedRoom({ room, text: textItem })}
                    className="group block w-full overflow-hidden rounded-t-[8rem] md:rounded-t-[14rem] rounded-b-2xl aspect-[4/3.4] shadow-xl text-start focus:outline-none"
                  >
                    <img
                      src={room.img}
                      alt={textItem.name}
                      className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                </div>

                {/* Room Details & Pricing */}
                <div className="md:col-span-5">
                  <span className="font-display text-ochre text-6xl leading-none font-bold block">
                    0{idx + 1}
                  </span>

                  <h3 className="font-display text-3xl md:text-4xl text-ink font-semibold mt-3">
                    {textItem.name}
                  </h3>

                  <p className="text-ink/65 mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium">
                    <span className="inline-flex items-center gap-2">
                      <Bed className="w-4 h-4 text-ochre" />
                      {textItem.beds}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Users className="w-4 h-4 text-ochre" />
                      {room.guests} {t.rooms.guests}
                    </span>
                  </p>

                  <p className="mt-5 text-ink/75 leading-relaxed text-base">
                    {textItem.desc}
                  </p>

                  {/* Top Amenities */}
                  <div className="mt-6">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {room.amenities.slice(0, 4).map((amenityKey) => {
                        const Icon = amenityIconMap[amenityKey] || Wifi;
                        return (
                          <li
                            key={amenityKey}
                            className="flex items-center gap-2 text-sm text-ink/75"
                          >
                            <Icon className="w-4 h-4 text-ochre shrink-0" />
                            <span>
                              {
                                t.rooms.amenities[
                                  amenityKey as keyof typeof t.rooms.amenities
                                ]
                              }
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="mt-7 flex items-baseline gap-2 flex-wrap">
                    <span className="text-ink/60 text-sm">{t.rooms.from}</span>
                    <span className="font-display text-4xl text-terracotta font-bold">
                      {room.price}
                    </span>
                    <span className="text-ink/70 text-sm font-medium">
                      {t.rooms.currency} {t.rooms.night}*
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => setSelectedRoom({ room, text: textItem })}
                      className="h-12 px-6 rounded-full border border-ink/20 text-ink font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white"
                    >
                      {t.rooms.details}
                    </button>
                    <BookingButton
                      href={hotelInfo.bookingUrl}
                      brand="booking"
                      label={t.rooms.book}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicative pricing notice */}
        <p className="mt-20 text-center text-sm text-ink/55 max-w-2xl mx-auto leading-relaxed">
          {t.rooms.indicative}
        </p>
      </div>

      {/* Detail Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom.room}
          text={selectedRoom.text}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </section>
  );
};
