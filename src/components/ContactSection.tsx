import React, { useState } from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { hotelInfo } from "../data/hotelData";
import { SectionHeader } from "./SectionHeader";
import { BookingButton } from "./BookingButton";

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
  const { t } = useTranslation();
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
      // Simulate smooth transmission or external notification
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const contactCards = [
    {
      icon: MessageSquare,
      label: t.contact.whatsapp,
      value: hotelInfo.mobileLabel,
      href: hotelInfo.whatsapp,
      cls: "bg-[#128C4B] text-white",
      ext: true,
    },
    {
      icon: Phone,
      label: t.contact.call,
      value: hotelInfo.phoneLabel,
      href: `tel:${hotelInfo.phone}`,
      cls: "bg-terracotta text-white",
      ext: false,
    },
    {
      icon: Phone,
      label: t.contact.call,
      value: hotelInfo.mobileLabel,
      href: `tel:${hotelInfo.mobile}`,
      cls: "bg-white/10 text-sand border border-white/10",
      ext: false,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: hotelInfo.email,
      href: `mailto:${hotelInfo.email}`,
      cls: "bg-white/10 text-sand border border-white/10",
      ext: false,
    },
  ];

  const inputClass =
    "w-full h-12 bg-transparent border-b border-ink/20 focus:border-terracotta outline-none text-ink text-base transition-colors placeholder:text-ink/40";

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FBF6F0]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Direct Concierge Contact Card */}
          <div className="lg:col-span-5 bg-ink rounded-[2rem] p-7 md:p-10 text-sand h-full flex flex-col justify-between shadow-xl">
            <div className="grid gap-3">
              {contactCards.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <a
                    key={idx}
                    href={c.href}
                    {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group flex items-center gap-4 rounded-2xl p-4 min-h-16 transition-all duration-300 hover:scale-[1.02] shadow-sm ${c.cls}`}
                  >
                    <span className="w-12 h-12 rounded-full bg-black/15 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs md:text-sm opacity-80 font-medium">
                        {c.label}
                      </span>
                      <span className="block text-base md:text-lg font-semibold truncate" dir="ltr">
                        {c.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-7 border-t border-white/10">
              <p className="font-display text-2xl font-semibold text-white">
                {t.contact.bookOnline}
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <BookingButton
                  href={hotelInfo.bookingUrl}
                  brand="booking"
                  label="Booking.com"
                />
                <BookingButton
                  href={hotelInfo.agodaUrl}
                  brand="agoda"
                  label="Agoda"
                  variant="dark"
                  className="border border-white/20"
                />
              </div>
            </div>
          </div>

          {/* Direct Message / Inquiry Form */}
          <div className="lg:col-span-7">
            {status === "sent" ? (
              <div className="bg-white rounded-[2rem] p-10 h-full flex flex-col items-center justify-center text-center border border-ochre/25 shadow-sm min-h-[440px]">
                <CheckCircle2 className="w-16 h-16 text-terracotta" />
                <p className="mt-5 font-display text-2xl md:text-3xl text-ink font-semibold">
                  {n.success}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 h-12 px-8 rounded-full border border-ink/20 hover:bg-ink hover:text-white transition-colors font-medium"
                >
                  {n.again}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-[2rem] p-7 md:p-10 border border-ochre/25 shadow-sm grid sm:grid-cols-2 gap-x-6 gap-y-5"
              >
                <h3 className="sm:col-span-2 font-display text-2xl md:text-3xl text-ink font-semibold mb-2">
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
                  <p className="sm:col-span-2 text-red-600 text-sm">{n.error}</p>
                )}

                <button
                  disabled={status === "sending"}
                  className="sm:col-span-2 mt-2 h-14 rounded-full bg-terracotta text-white text-lg font-medium inline-flex items-center justify-center gap-2 transition-colors hover:bg-ink disabled:opacity-60 shadow-lg cursor-pointer"
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
