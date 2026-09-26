import React from "react";
import { Star, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelInfo, reviewsBreakdownData, BOOKING_URL } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";

export const ReviewsSection: React.FC = () => {
  const { t, lang } = useTranslation();

  const formatScore = (val: string | number) => {
    const s = String(val);
    return lang === "fr" ? s.replace(".", ",") : s;
  };

  const platforms = [
    {
      name: "Booking.com",
      score: "7.4",
      count: 66,
      label: t.reviews.good,
      url: `${BOOKING_URL}#tab-reviews`,
      color: "bg-[#003580]",
    },
    {
      name: "Agoda",
      score: "7.8",
      count: 67,
      label: t.reviews.veryGood,
      url: hotelInfo.agodaUrl,
      color: "bg-[#5C2D91]",
    },
    {
      name: "Google Maps",
      score: "3.9",
      count: 270,
      label: t.reviews.veryGood,
      url: hotelInfo.googleUrl,
      color: "bg-[#4285F4]",
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#FBF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow={t.reviews.eyebrow}
          title={t.reviews.title}
          subtitle={t.reviews.subtitle}
        />

        {/* Top Reviews Grid: Platform Badges + Category Breakdown */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6 items-start">
          {/* Verified Platform Badges */}
          <div className="lg:col-span-5 grid gap-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 md:p-6 bg-white rounded-3xl border border-ochre/25 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${platform.color} text-white flex items-center justify-center font-display text-2xl font-bold shadow-md`}
                  >
                    {formatScore(platform.score)}
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-ink font-semibold group-hover:text-terracotta transition-colors">
                      {platform.label}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink/65 mt-0.5 font-medium">
                      {platform.count} {t.reviews.reviewsWord} · {platform.name}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-ink/40 group-hover:text-terracotta transition-colors rtl:-scale-x-100" />
              </a>
            ))}

            <div className="p-4 rounded-2xl bg-ochre/10 border border-ochre/25 text-xs text-ink/75 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0" />
              <span>
                {lang === "ar"
                  ? "تقييمات نزلاء حقيقية ومؤكدة عبر منصات الحجز الرسمية"
                  : lang === "en"
                  ? "Verified guest reviews collected from certified booking channels"
                  : "Avis voyageurs authentiques vérifiés sur les plateformes officielles"}
              </span>
            </div>
          </div>

          {/* Detailed Category Scores Breakdown */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-9 border border-ochre/25 shadow-sm">
            <h3 className="font-display text-2xl text-ink font-semibold">
              {t.reviews.breakdown}
            </h3>

            <ul className="mt-6 space-y-4">
              {reviewsBreakdownData.map(({ key, score }) => {
                const label = t.reviews.cats[key as keyof typeof t.reviews.cats];
                const pct = (score / 10) * 100;

                return (
                  <li key={key}>
                    <div className="flex justify-between text-sm md:text-base font-medium">
                      <span className="text-ink/80">{label}</span>
                      <span className="font-bold text-ink">
                        {formatScore(score)}
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-ink/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-ochre to-terracotta rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 3 Highlight Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {t.reviews.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-ink text-sand rounded-3xl p-7 md:p-8 border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-ochre">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-current text-ochre"
                    />
                  ))}
                </div>
                <div className="mt-5 font-display text-4xl sm:text-5xl font-bold text-ochre">
                  {formatScore(item.score)}
                </div>
                <h4 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sand/80 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Reviews Direct Platform Links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-ink/75 text-sm md:text-base font-medium">
          <span>{t.reviews.readAll}</span>
          <a
            href={`${BOOKING_URL}#tab-reviews`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-ink underline decoration-ochre underline-offset-4 hover:text-[#003580] transition-colors"
          >
            Booking.com
          </a>
          <span>·</span>
          <a
            href={hotelInfo.agodaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-ink underline decoration-ochre underline-offset-4 hover:text-[#5C2D91] transition-colors"
          >
            Agoda
          </a>
          <span>·</span>
          <a
            href={hotelInfo.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-ink underline decoration-ochre underline-offset-4 hover:text-terracotta transition-colors"
          >
            Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};
