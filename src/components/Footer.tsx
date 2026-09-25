import React from "react";
import { MessageSquare, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelInfo } from "../data/hotelData";
import { Logo } from "./Logo";

const navKeys = [
  "about",
  "rooms",
  "services",
  "gallery",
  "reviews",
  "location",
  "contact",
] as const;

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const linkClass =
    "min-h-11 inline-flex items-center text-sand/70 hover:text-ochre transition-colors text-sm md:text-base";

  return (
    <footer className="bg-ink text-sand pt-20 pb-28 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12">
        {/* Brand & Mission Column */}
        <div className="md:col-span-5">
          <Logo light={true} />
          <p className="mt-6 text-sand/65 max-w-sm text-sm md:text-base leading-relaxed">
            {t.footer.tagline}
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={hotelInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#128C4B] hover:border-transparent transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-white" />
            </a>
            <a
              href={`mailto:${hotelInfo.email}`}
              aria-label="Email"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-terracotta hover:border-transparent transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a
              href={hotelInfo.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-terracotta hover:border-transparent transition-colors"
            >
              <MapPin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3">
          <h4 className="font-display text-xl text-ochre font-semibold">
            {t.footer.links}
          </h4>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-1">
            {navKeys.map((k) => (
              <li key={k}>
                <a href={`#${k}`} className={linkClass}>
                  {t.nav[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-4">
          <h4 className="font-display text-xl text-ochre font-semibold">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-1">
            <li className="flex items-start gap-2.5 text-sand/70 py-2 text-sm md:text-base">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-ochre" />
              <span>{t.location.address}</span>
            </li>
            <li>
              <a href={`tel:${hotelInfo.phone}`} className={`${linkClass} gap-2.5`} dir="ltr">
                <Phone className="w-4 h-4 text-ochre shrink-0" />
                <span>{hotelInfo.phoneLabel}</span>
              </a>
            </li>
            <li>
              <a
                href={hotelInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} gap-2.5`}
                dir="ltr"
              >
                <MessageSquare className="w-4 h-4 text-ochre shrink-0" />
                <span>{hotelInfo.mobileLabel}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${hotelInfo.email}`} className={`${linkClass} gap-2.5 break-all`}>
                <Mail className="w-4 h-4 text-ochre shrink-0" />
                <span>{hotelInfo.email}</span>
              </a>
            </li>
          </ul>

          <p className="mt-6 text-sand/60 text-xs md:text-sm">
            {t.footer.book}{" "}
            <a
              href={hotelInfo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand underline decoration-ochre underline-offset-4 hover:text-ochre"
            >
              Booking.com
            </a>{" "}
            ·{" "}
            <a
              href={hotelInfo.agodaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand underline decoration-ochre underline-offset-4 hover:text-ochre"
            >
              Agoda
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 mt-16 pt-8 border-t border-white/10 text-sand/50 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center gap-3">
        <span>
          © {currentYear} Hôtel La Renaissance Tata — فندق لا رينيسانس طاطا. {t.footer.rights}
        </span>
        <span className="font-medium text-sand/60">
          9 Avenue des F.A.R, Tata 84000, Maroc
        </span>
      </div>
    </footer>
  );
};
