import React from "react";
import { CalendarCheck, MessageSquare, Phone } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { WHATSAPP_URL, PHONE_NUMBER } from "../data/hotelData";

export const MobileStickyBar: React.FC = () => {
  const { t } = useTranslation();

  const buttonClass =
    "flex flex-col items-center justify-center gap-1 h-14 rounded-xl text-xs font-semibold transition-transform active:scale-95";

  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-50 grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/70 shadow-[0_12px_40px_-10px_rgba(26,26,26,0.4)]">
      {/* Book Now Button */}
      <a
        href="#book"
        className={`${buttonClass} bg-terracotta text-white shadow-md`}
      >
        <CalendarCheck className="w-5 h-5" />
        <span>{t.mobile.book}</span>
      </a>

      {/* Direct WhatsApp Chat */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} bg-[#128C4B] text-white hover:bg-[#0e743e] shadow-sm`}
      >
        <MessageSquare className="w-5 h-5" />
        <span>{t.mobile.whatsapp}</span>
      </a>

      {/* Direct Reception Call */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className={`${buttonClass} bg-sand/80 text-ink hover:bg-sand border border-ink/10`}
      >
        <Phone className="w-5 h-5 text-terracotta" />
        <span>{t.mobile.call}</span>
      </a>
    </div>
  );
};
