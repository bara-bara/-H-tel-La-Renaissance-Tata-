/**
 * Hôtel La Renaissance Tata | فندق لا رينيسانس طاطا
 * Official Web Application & Direct Booking Portal
 */

import React from "react";
import { LanguageProvider, useTranslation } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { RoomsSection } from "./components/RoomsSection";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FaqSection } from "./components/FaqSection";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";

function MainContent() {
  const { dir } = useTranslation();

  return (
    <div dir={dir} className="bg-sand min-h-screen text-ink overflow-x-hidden selection:bg-terracotta selection:text-white">
      {/* Fixed Navigation Bar */}
      <Header />

      {/* Main Content Areas */}
      <main>
        {/* Hero Section with Live Booking Bar */}
        <Hero />

        {/* About: 1982 Legacy & Amenities */}
        <AboutSection />

        {/* Rooms & Rates */}
        <RoomsSection />

        {/* Services: Accommodation, Moroccan Restaurant, Events & Catering */}
        <ServicesSection />

        {/* Photo Gallery with Lightbox */}
        <GallerySection />

        {/* Verified Reviews (Booking 7.4, Agoda 7.8, Google 3.9) */}
        <ReviewsSection />

        {/* Rich SEO FAQ Section */}
        <FaqSection />

        {/* Location & Interactive Map */}
        <LocationSection />

        {/* Contact & Direct Concierge Reservation Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Bottom Navigation */}
      <MobileStickyBar />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
