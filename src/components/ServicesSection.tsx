import React from "react";
import { Bed, UtensilsCrossed, CalendarDays, ChefHat } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelImages } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";

const servicesConfig = [
  { icon: Bed, img: hotelImages.realRoom2 },
  { icon: UtensilsCrossed, img: hotelImages.realRestaurant },
  { icon: CalendarDays, img: hotelImages.realHall },
  { icon: ChefHat, img: hotelImages.realDining },
];

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative py-24 md:py-36 bg-ink overflow-hidden text-sand">
      {/* Background texture overlay */}
      <div className="absolute inset-0 texture-sand opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
          light={true}
        />

        {/* 4 Architectural Services Cards */}
        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, idx) => {
            const { icon: Icon, img } = servicesConfig[idx] || servicesConfig[0];

            return (
              <div
                key={idx}
                className="group relative bg-ink/60 rounded-t-full rounded-b-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-ochre/40"
              >
                {/* Arched Top Image */}
                <div className="aspect-[4/4.5] overflow-hidden relative">
                  <img
                    src={img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <span className="absolute bottom-4 start-5 w-12 h-12 rounded-2xl bg-terracotta text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-6 pt-3">
                  <h3 className="font-display text-2xl font-semibold text-white group-hover:text-ochre transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-sand/75 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
