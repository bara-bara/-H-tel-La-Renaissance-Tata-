import React, { useState } from "react";
import { Eye } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { galleryImages } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";
import { GalleryLightbox } from "./GalleryLightbox";

const aspectRatios = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[4/5]",
];

export const GallerySection: React.FC = () => {
  const { t } = useTranslation();
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-36 texture-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        {/* Masonry Columns */}
        <div className="mt-16 columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {galleryImages.map((imgSrc, idx) => {
            const aspectClass = aspectRatios[idx % aspectRatios.length];

            return (
              <div key={idx} className="mb-3 md:mb-4 break-inside-avoid">
                <button
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`group relative block w-full overflow-hidden rounded-2xl ${aspectClass} focus:outline-none shadow-md`}
                >
                  <img
                    src={imgSrc}
                    alt={`Hôtel La Renaissance Tata – Galerie photo ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <GalleryLightbox
        images={galleryImages}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </section>
  );
};
