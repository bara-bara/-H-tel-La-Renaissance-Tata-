import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Phone } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { hotelInfo } from "../data/hotelData";

const navSections = [
  "about",
  "rooms",
  "services",
  "gallery",
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
            ? "bg-sand/90 backdrop-blur-xl shadow-[0_1px_0_rgba(26,26,26,0.06)] py-3"
            : "py-5 md:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
          <Logo light={isLight} />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {navSections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className={`text-base font-medium transition-colors duration-300 hover:text-terracotta ${
                  isLight ? "text-white/90" : "text-ink/80"
                }`}
              >
                {t.nav[sec]}
              </a>
            ))}
          </nav>

          {/* Controls: Language Switcher, CTA, Mobile Drawer Button */}
          <div className="flex items-center gap-2.5">
            <LanguageSwitcher light={isLight} />

            <a
              href="#book"
              className="hidden md:inline-flex h-12 items-center px-6 rounded-full bg-terracotta text-white font-medium transition-all duration-300 hover:bg-ink hover:scale-105"
            >
              {t.nav.book}
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu"
              className={`xl:hidden w-11 h-11 rounded-full flex items-center justify-center border transition-colors duration-300 ${
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
              <div className="flex items-center justify-between pb-6 border-b border-ink/10">
                <Logo light={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                {navSections.map((sec) => (
                  <button
                    key={sec}
                    onClick={() => handleNavClick(sec)}
                    className="text-start text-xl font-display text-ink hover:text-terracotta py-2 transition-colors"
                  >
                    {t.nav[sec]}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-ink/10 space-y-3">
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 rounded-full bg-terracotta text-white font-medium flex items-center justify-center hover:bg-ink transition-colors"
              >
                {t.nav.book}
              </a>

              <a
                href={hotelInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-full bg-[#128C4B] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href={`tel:${hotelInfo.phone}`}
                className="w-full h-12 rounded-full border border-ink/20 text-ink font-medium flex items-center justify-center gap-2 hover:bg-ink hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {hotelInfo.phoneLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
