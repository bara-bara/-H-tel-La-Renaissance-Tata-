import React from "react";
import { useTranslation } from "../context/LanguageContext";

interface LogoProps {
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ light = false }) => {
  const { t } = useTranslation();

  return (
    <a
      href="#top"
      className="flex items-center gap-3 shrink-0 group focus:outline-none"
      aria-label="Hôtel La Renaissance Tata"
    >
      <span
        className={`w-9 h-11 rounded-t-full border-[1.5px] flex items-end justify-center pb-1 transition-colors duration-500 ${
          light ? "border-white/80" : "border-terracotta"
        }`}
      >
        <span
          className={`font-display text-lg leading-none font-bold ${
            light ? "text-white" : "text-terracotta"
          }`}
        >
          R
        </span>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-xl font-medium transition-colors duration-500 ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {t.brand.name}
        </span>
        <span
          className={`block text-[13px] tracking-[0.25em] uppercase font-medium ${
            light ? "text-white/70" : "text-ochre"
          }`}
        >
          {t.brand.city}
        </span>
      </span>
    </a>
  );
};
