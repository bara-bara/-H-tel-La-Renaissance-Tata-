import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null) return null;

  const currentImg = images[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-terracotta text-white flex items-center justify-center transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        dir="ltr"
      >
        {/* Navigation Previous */}
        <button
          onClick={handlePrev}
          aria-label="Image précédente"
          className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-terracotta transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div className="relative rounded-2xl overflow-hidden max-h-[80vh] flex items-center justify-center">
          <img
            src={currentImg}
            alt={`Hôtel La Renaissance Tata - Photo ${currentIndex + 1}`}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Navigation Next */}
        <button
          onClick={handleNext}
          aria-label="Image suivante"
          className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-terracotta transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute -bottom-10 inset-x-0 text-center text-white/80 text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};
