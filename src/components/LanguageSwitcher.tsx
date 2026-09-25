import React from "react";
import { useTranslation } from "../context/LanguageContext";
import { Language } from "../data/translations";

interface LanguageSwitcherProps {
  light?: boolean;
}

const languages: [Language, string, string][] = [
  ["ar", "ع", "العربية"],
  ["fr", "FR", "Français"],
  ["en", "EN", "English"],
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ light = false }) => {
  const { lang, setLang } = useTranslation();

  return (
    <div
      className={`flex items-center rounded-full p-1 border backdrop-blur transition-colors duration-500 ${
        light ? "border-white/30 bg-white/10" : "border-ink/10 bg-white/70"
      }`}
    >
      {languages.map(([code, short, label]) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-label={label}
          className={`h-10 min-w-10 px-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            lang === code
              ? "bg-terracotta text-white shadow-sm"
              : light
              ? "text-white/80 hover:text-white"
              : "text-ink/70 hover:text-ink"
          }`}
        >
          {short}
        </button>
      ))}
    </div>
  );
};
