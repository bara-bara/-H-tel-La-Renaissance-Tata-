import React from "react";
import {
  Bed,
  UtensilsCrossed,
  CalendarDays,
  ChefHat,
  Wifi,
  Car,
  Clock,
  Wind,
  Trees,
  Bike,
  HeartHandshake,
  Plane,
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelImages } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";

const servicesConfig = [
  { icon: Bed, img: hotelImages.realRoom2 },
  { icon: UtensilsCrossed, img: hotelImages.realRestaurant },
  { icon: CalendarDays, img: hotelImages.realHall },
  { icon: ChefHat, img: hotelImages.realDining },
];

const confirmedAmenities = [
  { icon: Wifi, labelFr: "Wi-Fi haut débit gratuit", labelAr: "واي فاي عالي السرعة مجاني", labelEn: "Free High-Speed Wi-Fi" },
  { icon: Car, labelFr: "Parking privé sécurisé gratuit", labelAr: "موقف سيارات خاص وآمن مجاناً", labelEn: "Free Private Secure Parking" },
  { icon: UtensilsCrossed, labelFr: "Restaurant marocain & Petit-déjeuner buffet", labelAr: "مطعم مغربي أصيل وإفطار بوفيه", labelEn: "Moroccan Restaurant & Buffet Breakfast" },
  { icon: Clock, labelFr: "Réception disponible 24h/24", labelAr: "مكتب استقبال متاح 24/7", labelEn: "24/7 Front Desk Reception" },
  { icon: Wind, labelFr: "Climatisation dans toutes les chambres", labelAr: "تكييف هوائي في جميع الغرف", labelEn: "Air Conditioning in All Rooms" },
  { icon: Trees, labelFr: "Jardin intérieur & Terrasse ombragée", labelAr: "حديقة داخلية وتراس مظلل", labelEn: "Inner Garden & Shaded Terrace" },
  { icon: Bike, labelFr: "Vélos gratuits pour visiter l'oasis", labelAr: "دراجات هوائية مجانية لاستكشاف الواحة", labelEn: "Free Bicycles for Oasis Tours" },
  { icon: HeartHandshake, labelFr: "Animaux de compagnie acceptés", labelAr: "الحيوانات الأليفة مرحب بها مجاناً", labelEn: "Pet Friendly (Free of Charge)" },
  { icon: Plane, labelFr: "Navette aéroport (sur demande)", labelAr: "خدمة نقل المطار (عند الطلب)", labelEn: "Airport Shuttle Service" },
];

export const ServicesSection: React.FC = () => {
  const { t, lang } = useTranslation();

  return (
    <section id="services" className="relative py-24 md:py-32 bg-ink overflow-hidden text-sand">
      {/* Subtle Sand Background Texture */}
      <div className="absolute inset-0 texture-sand opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
          light={true}
        />

        {/* 4 Signature Pillar Cards */}
        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, idx) => {
            const { icon: Icon, img } = servicesConfig[idx] || servicesConfig[0];

            return (
              <div
                key={idx}
                className="group relative bg-white/5 rounded-t-full rounded-b-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-ochre/50"
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
                  <p className="mt-3 text-sm text-sand/80 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comprehensive Confirmed Amenities Grid */}
        <div className="mt-20 pt-14 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold">
              {lang === "ar"
                ? "المرافق والخدمات المشمولة في الفندق"
                : lang === "en"
                ? "Confirmed Amenities & Guest Services"
                : "Équipements & Services Inclus à l'Hôtel"}
            </h3>
            <p className="text-sand/70 text-sm mt-2">
              {lang === "ar"
                ? "مرافق وخدمات حقيقية مؤكدة لضمان راحتكم طيلة فترة إقامتكم بطاطا"
                : lang === "en"
                ? "Everything you need for a relaxing, authentic stay in Tata"
                : "Tout le confort nécessaire pour une étape sereine au cœur de l'oasis"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {confirmedAmenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              const label =
                lang === "ar"
                  ? amenity.labelAr
                  : lang === "en"
                  ? amenity.labelEn
                  : amenity.labelFr;

              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-ochre/30 transition-colors"
                >
                  <span className="w-10 h-10 rounded-xl bg-ochre/15 text-ochre flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-medium text-sand/90 leading-snug">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
