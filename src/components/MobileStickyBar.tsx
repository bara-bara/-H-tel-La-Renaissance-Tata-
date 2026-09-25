import React from "react";
import { Calendar, MessageSquare, Phone } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelInfo } from "../data/hotelData";

export const MobileStickyBar: React.FC = () => {
  const { t } = useTranslation();

  const buttonClass =
    "flex flex-col items-center justify-center gap-1 h-14 rounded-xl text-xs font-semibold transition-transform active:scale-95";

  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-50 grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/70 shadow-[0_12px_40px_-10px_rgba(26,26,26,0.4)]">
      <a href="#book" className={`${buttonClass} bg-terracotta text-white shadow-sm`}>
        <Calendar className="w-5 h-5" />
        <span>{t.mobile.book}</span>
      </a>

      <a
        href={hotelInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} bg-white text-[#128C4B] hover:bg-emerald-50`}
      >
        <MessageSquare className="w-5 h-5 text-[#128C4B]" />
        <span>{t.mobile.whatsapp}</span>
      </a>

      <a
        href={`tel:${hotelInfo.phone}`}
        className={`${buttonClass} bg-white text-ink hover:bg-neutral-50`}
      >
        <Phone className="w-5 h-5 text-ink" />
        <span>{t.mobile.call}</span>
      </a>
    </div>
  );
};
