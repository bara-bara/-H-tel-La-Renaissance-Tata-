import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export const FaqSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const faqData = t.faq;

  return (
    <section id="faq" className="py-20 md:py-28 texture-sand border-t border-ochre/20">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow={faqData.eyebrow}
          title={faqData.title}
          subtitle={faqData.subtitle}
        />

        <div className="mt-12 space-y-3.5">
          {faqData.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white/85 backdrop-blur-sm rounded-2xl border border-ochre/25 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 md:p-6 text-start flex items-center justify-between gap-4 font-display text-lg md:text-xl font-semibold text-ink hover:text-terracotta transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-terracotta shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-ink/80 text-base leading-relaxed border-t border-ink/5 pt-4">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
