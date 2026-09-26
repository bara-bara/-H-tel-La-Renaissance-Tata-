import React, { useState } from "react";
import { Bed, Users, Wifi, Wind, Tv, Bath, Coffee, Car, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { roomsData, RoomItem, BOOKING_URL } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";
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
    <section id="rooms" className="py-24 md:py-32 bg-[#FBF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow={t.rooms.eyebrow}
          title={t.rooms.title}
          subtitle={t.rooms.subtitle}
        />

        <div className="mt-16 md:mt-24 space-y-20 md:space-y-28">
          {roomsData.map((room, idx) => {
            const textItem = t.rooms.items[idx];
            const isOdd = idx % 2 === 1;

            return (
              <div
                key={room.id}
                className="grid md:grid-cols-12 gap-8 md:gap-14 items-center bg-white/60 md:bg-transparent p-5 md:p-0 rounded-3xl md:rounded-none border md:border-none border-ochre/20"
              >
                {/* Room Image with Arch Framing */}
                <div className={`md:col-span-7 ${isOdd ? "md:order-2" : ""}`}>
                  <button
                    onClick={() => setSelectedRoom({ room, text: textItem })}
                    className="group block w-full overflow-hidden rounded-t-[7rem] md:rounded-t-[14rem] rounded-b-2xl aspect-[4/3.2] shadow-lg hover:shadow-xl transition-all duration-500 text-start focus:outline-none relative"
                  >
                    <img
                      src={room.img}
                      alt={textItem.name}
                      className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-300" />
                    
                    {/* Floating badge for view details */}
                    <span className="absolute bottom-4 end-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-ink text-xs font-semibold shadow-md group-hover:bg-terracotta group-hover:text-white transition-colors">
                      {t.rooms.details}
                    </span>
                  </button>
                </div>

                {/* Room Details & Pricing */}
                <div className="md:col-span-5">
                  <span className="font-display text-ochre text-5xl md:text-6xl leading-none font-bold block">
                    0{idx + 1}
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink font-semibold mt-2.5">
                    {textItem.name}
                  </h3>

                  <p className="text-ink/65 mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-ochre" />
                      {textItem.beds}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-ochre" />
                      {room.guests} {t.rooms.guests}
                    </span>
                  </p>

                  <p className="mt-4 text-ink/75 leading-relaxed text-sm sm:text-base">
                    {textItem.desc}
                  </p>

                  {/* Top Amenities Pills */}
                  <div className="mt-5">
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {room.amenities.slice(0, 4).map((amenityKey) => {
                        const Icon = amenityIconMap[amenityKey] || Wifi;
                        return (
                          <li
                            key={amenityKey}
                            className="flex items-center gap-2 text-xs sm:text-sm text-ink/75"
                          >
                            <Icon className="w-3.5 h-3.5 text-ochre shrink-0" />
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

                  {/* Confirmed Real Price Starting Point */}
                  <div className="mt-6 flex items-baseline gap-2 flex-wrap">
                    <span className="text-ink/60 text-xs sm:text-sm font-medium">{t.rooms.from}</span>
                    <span className="font-display text-3xl sm:text-4xl text-terracotta font-bold">
                      {room.price}
                    </span>
                    <span className="text-ink/70 text-xs sm:text-sm font-medium">
                      {t.rooms.currency} {t.rooms.night}*
                    </span>
                  </div>

                  {/* Direct Booking Actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 px-6 sm:px-7 rounded-full bg-terracotta text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-300 hover:bg-ink hover:scale-105 shadow-md"
                    >
                      <span>{t.nav.book}</span>
                      <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
                    </a>

                    <button
                      onClick={() => setSelectedRoom({ room, text: textItem })}
                      className="h-12 px-5 sm:px-6 rounded-full border border-ink/20 text-ink text-sm sm:text-base font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white"
                    >
                      {t.rooms.details}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real pricing disclaimer */}
        <p className="mt-16 text-center text-xs sm:text-sm text-ink/55 max-w-2xl mx-auto leading-relaxed">
          {t.rooms.indicative}
        </p>
      </div>

      {/* Room Detail Modal Dialog */}
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
