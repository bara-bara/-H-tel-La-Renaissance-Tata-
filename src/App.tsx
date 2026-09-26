/**
 * Hôtel La Renaissance Tata | فندق لا رينيسانس طاطا
 * Official Hotel Web Application & Booking Portal
 */

import React from "react";
import { LanguageProvider, useTranslation } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { RoomsSection } from "./components/RoomsSection";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { DiscoverTataSection } from "./components/DiscoverTataSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FaqSection } from "./components/FaqSection";
import { LocationSection } from "./components/LocationSection";
import { CtaBanner } from "./components/CtaBanner";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";

function MainContent() {
  const { dir } = useTranslation();

  return (
    <div
      dir={dir}
      className="bg-sand min-h-screen text-ink overflow-x-hidden selection:bg-terracotta selection:text-white"
    >
      {/* Navigation Header */}
      <Header />

      {/* Main Content Areas */}
      <main>
        {/* 1. Hero Section with Live Booking Bar & WhatsApp CTA */}
        <Hero />

        {/* 2. About: Legacy since 1982 & Signature Hospitality */}
        <AboutSection />

        {/* 3. Rooms & Confirmed Rates */}
        <RoomsSection />

        {/* 4. Services & Confirmed Amenities */}
        <ServicesSection />

        {/* 5. Categorized Photo Gallery with Lightbox */}
        <GallerySection />

        {/* 6. Discover Tata & the Region (SEO & Travel Guide) */}
        <DiscoverTataSection />

        {/* 7. Verified Guest Reviews & Ratings Breakdown */}
        <ReviewsSection />

        {/* 8. Frequently Asked Questions (FAQPage Schema) */}
        <FaqSection />

        {/* 9. Find Us in Tata (Location, Map, Directions) */}
        <LocationSection />

        {/* 10. High-converting Booking CTA Banner */}
        <CtaBanner />

        {/* 11. Contact & Direct Concierge Reservation Form */}
        <ContactSection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Floating Bottom Bar on Mobile Devices */}
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
