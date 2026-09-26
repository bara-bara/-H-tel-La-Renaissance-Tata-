import React, { useState } from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import {
  hotelInfo,
  BOOKING_URL,
  WHATSAPP_URL,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  MOBILE_NUMBER,
  MOBILE_DISPLAY,
  EMAIL_ADDRESS,
} from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "booking",
  message: "",
};

export const ContactSection: React.FC = () => {
  const { t, lang } = useTranslation();
  const n = t.contact.form;

  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full h-12 bg-transparent border-b border-ink/20 focus:border-terracotta outline-none text-ink text-sm sm:text-base transition-colors placeholder:text-ink/40";

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FBF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-start">
          {/* Direct Concierge Contact Card */}
          <div className="lg:col-span-5 bg-ink rounded-3xl p-7 md:p-9 text-sand shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                {lang === "ar"
                  ? "معلومات الاتصال المباشر"
                  : lang === "en"
                  ? "Direct Contact Details"
                  : "Coordonnées de l'Hôtel"}
              </h3>

              <div className="grid gap-3">
                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl p-4 bg-[#128C4B] text-white hover:bg-[#0e743e] transition-all duration-300 hover:scale-[1.02] shadow-sm"
                >
                  <span className="w-12 h-12 rounded-full bg-black/15 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs opacity-85 font-medium">
                      {t.contact.whatsapp}
                    </span>
                    <span className="block text-base font-semibold truncate" dir="ltr">
                      {MOBILE_DISPLAY}
                    </span>
                  </span>
                </a>

                {/* Landline */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="group flex items-center gap-4 rounded-2xl p-4 bg-terracotta text-white hover:bg-opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-sm"
                >
                  <span className="w-12 h-12 rounded-full bg-black/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs opacity-85 font-medium">
                      {t.contact.call} (Fixe)
                    </span>
                    <span className="block text-base font-semibold truncate" dir="ltr">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                {/* Mobile */}
                <a
                  href={`tel:${MOBILE_NUMBER}`}
                  className="group flex items-center gap-4 rounded-2xl p-4 bg-white/10 text-sand border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="w-12 h-12 rounded-full bg-black/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs opacity-75 font-medium">
                      {t.contact.call} (Mobile)
                    </span>
                    <span className="block text-base font-semibold truncate" dir="ltr">
                      {MOBILE_DISPLAY}
                    </span>
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="group flex items-center gap-4 rounded-2xl p-4 bg-white/10 text-sand border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="w-12 h-12 rounded-full bg-black/15 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs opacity-75 font-medium">
                      {t.contact.email}
                    </span>
                    <span className="block text-sm sm:text-base font-semibold truncate" dir="ltr">
                      {EMAIL_ADDRESS}
                    </span>
                  </span>
                </a>
              </div>

              {/* Address & Hours details */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-xs sm:text-sm text-sand/80">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-ochre shrink-0 mt-0.5" />
                  <span>
                    {lang === "ar" ? hotelInfo.addressArabic : hotelInfo.address}
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-ochre shrink-0" />
                  <span>{t.location.hours} · Réception 24h/24</span>
                </p>
              </div>
            </div>

            {/* Direct Booking Link on Booking.com */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-full bg-white text-ink hover:bg-terracotta hover:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                <span>{t.contact.bookOnline} (Booking.com)</span>
                <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
              </a>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="bg-white rounded-3xl p-10 h-full flex flex-col items-center justify-center text-center border border-ochre/25 shadow-sm min-h-[440px]">
                <CheckCircle2 className="w-16 h-16 text-terracotta" />
                <p className="mt-5 font-display text-2xl md:text-3xl text-ink font-semibold">
                  {n.success}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 h-12 px-8 rounded-full border border-ink/20 hover:bg-ink hover:text-white transition-colors font-medium text-sm"
                >
                  {n.again}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-7 md:p-9 border border-ochre/25 shadow-sm grid sm:grid-cols-2 gap-x-6 gap-y-5"
              >
                <h3 className="sm:col-span-2 font-display text-2xl text-ink font-semibold mb-1">
                  {n.title}
                </h3>

                <input
                  required
                  placeholder={n.name}
                  value={form.name}
                  onChange={handleChange("name")}
                  className={inputClass}
                />

                <input
                  type="tel"
                  placeholder={n.phone}
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className={inputClass}
                />

                <input
                  type="email"
                  required
                  placeholder={n.email}
                  value={form.email}
                  onChange={handleChange("email")}
                  className={inputClass}
                />

                <select
                  value={form.subject}
                  onChange={handleChange("subject")}
                  className={inputClass}
                  aria-label={n.subject}
                >
                  {Object.entries(n.subjects).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>

                <textarea
                  required
                  rows={4}
                  placeholder={n.message}
                  value={form.message}
                  onChange={handleChange("message")}
                  className={`${inputClass} sm:col-span-2 h-auto py-3 resize-none`}
                />

                {status === "error" && (
                  <p className="sm:col-span-2 text-red-600 text-sm font-medium">{n.error}</p>
                )}

                <button
                  disabled={status === "sending"}
                  className="sm:col-span-2 mt-2 h-13 rounded-full bg-terracotta text-white text-base font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-ink disabled:opacity-60 shadow-md cursor-pointer"
                >
                  {status === "sending" && <Loader2 className="w-5 h-5 animate-spin" />}
                  {status === "sending" ? n.sending : n.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
