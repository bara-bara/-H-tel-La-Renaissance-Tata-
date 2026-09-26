import React from "react";
import { MessageSquare, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import {
  hotelInfo,
  BOOKING_URL,
  WHATSAPP_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  MOBILE_DISPLAY,
  EMAIL_ADDRESS,
} from "../data/hotelData";
import { Logo } from "./Logo";

const navSections = [
  { key: "about", href: "#about" },
  { key: "rooms", href: "#rooms" },
  { key: "services", href: "#services" },
  { key: "gallery", href: "#gallery" },
  { key: "discover", href: "#discover" },
  { key: "reviews", href: "#reviews" },
  { key: "location", href: "#location" },
  { key: "contact", href: "#contact" },
];

export const Footer: React.FC = () => {
  const { t, lang } = useTranslation();
  const currentYear = new Date().getFullYear();

  const linkClass =
    "inline-flex items-center text-sand/70 hover:text-ochre transition-colors text-sm py-1";

  return (
    <footer className="bg-ink text-sand pt-20 pb-28 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand & Mission Column */}
        <div className="md:col-span-5">
          <Logo light={true} />
          <p className="mt-5 text-sand/70 max-w-sm text-sm leading-relaxed">
            {t.footer.tagline}
          </p>

          {/* Direct Social & Chat Links */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full bg-[#128C4B] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label="Email"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-terracotta text-white flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={hotelInfo.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-terracotta text-white flex items-center justify-center transition-colors"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Book Now Action */}
          <div className="mt-7">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-terracotta hover:bg-white hover:text-ink text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
            >
              <span>{t.nav.book} (Booking.com)</span>
              <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3">
          <h4 className="font-display text-lg text-ochre font-semibold mb-4">
            {t.footer.links}
          </h4>
          <ul className="space-y-1">
            {navSections.map((item) => (
              <li key={item.key}>
                <a href={item.href} className={linkClass}>
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-4">
          <h4 className="font-display text-lg text-ochre font-semibold mb-4">
            {t.footer.contact}
          </h4>
          <ul className="space-y-2.5 text-sm text-sand/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-ochre shrink-0 mt-1" />
              <span>
                {lang === "ar" ? hotelInfo.addressArabic : hotelInfo.address}
              </span>
            </li>
            <li>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2.5 text-sand/70 hover:text-ochre transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-ochre shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sand/70 hover:text-ochre transition-colors"
                dir="ltr"
              >
                <MessageSquare className="w-4 h-4 text-ochre shrink-0" />
                <span>{MOBILE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center gap-2.5 text-sand/70 hover:text-ochre transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-ochre shrink-0" />
                <span>{EMAIL_ADDRESS}</span>
              </a>
            </li>
          </ul>

          <p className="mt-6 text-xs text-sand/55 leading-relaxed">
            {t.footer.book}{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand underline decoration-ochre underline-offset-4 hover:text-ochre"
            >
              Booking.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Copyright & Legal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-16 pt-8 border-t border-white/10 text-sand/50 text-xs flex flex-col md:flex-row justify-between items-center gap-3">
        <span>
          © {currentYear} Hôtel La Renaissance Tata — فندق لا رينيسانس طاطا. {t.footer.rights}
        </span>
        <span className="font-medium text-sand/65">
          9 Avenue des F.A.R, Tata 84000, Maroc
        </span>
      </div>
    </footer>
  );
};
