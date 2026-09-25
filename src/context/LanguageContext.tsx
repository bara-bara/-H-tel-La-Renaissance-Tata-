import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../data/translations";

type TranslationType = (typeof translations)["fr"];

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  dir: "rtl" | "ltr";
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lr_lang");
    if (saved === "ar" || saved === "fr" || saved === "en") return saved;
    return "ar";
  });

  const dir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem("lr_lang", lang);

    // Update document title dynamically based on active language for SEO
    if (lang === "ar") {
      document.title = "فندق لا رينيسانس طاطا | إقامة، مطعم، ومناسبات في طاطا، المغرب";
    } else if (lang === "en") {
      document.title = "Hotel La Renaissance Tata | Hotel, Restaurant & Events in Tata, Morocco";
    } else {
      document.title = "Hôtel La Renaissance Tata | فندق لا رينيسانس طاطا – Hôtel à Tata, Maroc";
    }
  }, [lang, dir]);

  const value = {
    lang,
    setLang,
    dir,
    t: (translations[lang] || translations.ar) as unknown as TranslationType,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
}
