import React, { useState } from "react";
import { Eye, Layers } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import {
  categorizedGalleryImages,
  GalleryCategory,
} from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";
import { GalleryLightbox } from "./GalleryLightbox";

export const GallerySection: React.FC = () => {
  const { t, lang } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filterTabs: { key: GalleryCategory; label: string }[] = [
    { key: "all", label: t.gallery.filters?.all || "Toutes les photos" },
    { key: "rooms", label: t.gallery.filters?.rooms || "Chambres" },
    { key: "hotel", label: t.gallery.filters?.hotel || "Hôtel & Patio" },
    { key: "restaurant", label: t.gallery.filters?.restaurant || "Restaurant" },
    { key: "common", label: t.gallery.filters?.common || "Espaces communs" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? categorizedGalleryImages
      : categorizedGalleryImages.filter((img) => img.category === selectedCategory);

  const imagesForLightbox = filteredImages.map((img) => img.src);

  return (
    <section id="gallery" className="py-24 md:py-32 texture-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-2 sm:gap-2.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`h-11 px-5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === tab.key
                  ? "bg-terracotta text-white shadow-md scale-105"
                  : "bg-white/80 text-ink/75 hover:bg-white hover:text-ink border border-ochre/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((imgItem, idx) => {
            const title =
              lang === "ar"
                ? imgItem.titleAr
                : lang === "en"
                ? imgItem.titleEn
                : imgItem.titleFr;

            return (
              <div
                key={imgItem.src + idx}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-ink/10 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setActivePhotoIndex(idx)}
              >
                <img
                  src={imgItem.src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle Gradient & Hover Card Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white">
                    <p className="text-sm font-medium drop-shadow-sm line-clamp-1">
                      {title}
                    </p>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                      <Eye className="w-4 h-4 text-white" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <GalleryLightbox
        images={imagesForLightbox}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </section>
  );
};
