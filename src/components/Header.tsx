import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Phone } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { hotelInfo, BOOKING_URL, WHATSAPP_URL, PHONE_NUMBER, PHONE_DISPLAY } from "../data/hotelData";

const navSections = [
  "about",
  "rooms",
  "services",
  "gallery",
  "discover",
  "reviews",
  "location",
  "contact",
] as const;

export const Header: React.FC = () => {
  const { t, dir } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = !scrolled;

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-sand/95 backdrop-blur-xl shadow-md py-3 border-b border-ochre/20"
            : "py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">
          <Logo light={isLight} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navSections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className={`text-sm xl:text-base font-medium transition-colors duration-300 hover:text-terracotta tracking-wide ${
                  isLight ? "text-white/90 drop-shadow-sm" : "text-ink/85"
                }`}
              >
                {t.nav[sec as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          {/* Controls: Language Switcher, WhatsApp Icon, Prominent BOOK NOW Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher light={isLight} />

            {/* Quick WhatsApp Header Icon */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`hidden sm:flex w-10 h-10 rounded-full items-center justify-center transition-colors duration-300 ${
                isLight
                  ? "bg-white/15 text-white hover:bg-[#128C4B] hover:text-white"
                  : "bg-white text-[#128C4B] border border-ink/10 hover:bg-[#128C4B] hover:text-white shadow-sm"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* High-visibility Primary Book Now CTA */}
            <a
              href="#book"
              className="inline-flex h-11 sm:h-12 items-center px-5 sm:px-6 rounded-full bg-terracotta text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:bg-ink hover:scale-105 shadow-md hover:shadow-lg"
            >
              {t.nav.book}
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu"
              className={`lg:hidden w-11 h-11 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                isLight
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-ink/15 text-ink hover:bg-ink/5"
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex" dir={dir}>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div
            className={`relative z-10 w-full max-w-sm bg-sand shadow-2xl p-6 flex flex-col justify-between h-full transition-transform ${
              dir === "rtl" ? "mr-auto" : "ml-auto"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-ink/10">
                <Logo light={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-3">
                {navSections.map((sec) => (
                  <button
                    key={sec}
                    onClick={() => handleNavClick(sec)}
                    className="text-start text-lg font-display font-medium text-ink hover:text-terracotta py-2 border-b border-ink/5 transition-colors"
                  >
                    {t.nav[sec as keyof typeof t.nav]}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-ink/10 space-y-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 rounded-full bg-terracotta text-white font-semibold flex items-center justify-center hover:bg-ink transition-colors shadow-md"
              >
                {t.nav.book}
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-full bg-[#128C4B] text-white font-medium flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp ({hotelInfo.mobileLabel})</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full h-12 rounded-full border border-ink/20 text-ink font-medium flex items-center justify-center gap-2 hover:bg-ink hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
