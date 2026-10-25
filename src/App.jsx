import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KitchenDiscovery from "./components/KitchenDiscovery";
import DesignGallery from "./components/DesignGallery";
import ServicesSection from "./components/ServicesSection";
import SmartStorageShowcase from "./components/SmartStorageShowcase";
import PricingSection from "./components/PricingSection";
import MaterialGuide from "./components/MaterialGuide";
import WhyCAFAndJourney from "./components/WhyCAFAndJourney";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";
import PricingDisclaimerModal from "./components/PricingDisclaimerModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [pricingDisclaimerOpen, setPricingDisclaimerOpen] = useState(false);

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  const handleOpenPricingDisclaimer = () => {
    setPricingDisclaimerOpen(true);
  };

  const handleClosePricingDisclaimer = () => {
    setPricingDisclaimerOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#20211F] flex flex-col font-sans selection:bg-[#78816C] selection:text-white">
      {/* Sticky Header */}
      <Header
        onOpenConsultation={handleOpenConsultation}
        onOpenPricingDisclaimer={handleOpenPricingDisclaimer}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onOpenPricingDisclaimer={handleOpenPricingDisclaimer}
        />

        {/* Kitchen Discovery Experience */}
        <KitchenDiscovery />

        {/* Design Gallery / Inspiration */}
        <DesignGallery onOpenConsultation={handleOpenConsultation} />

        {/* Comprehensive Services */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* Smart Storage Showcase */}
        <SmartStorageShowcase onOpenConsultation={handleOpenConsultation} />

        {/* Transparent Pricing & Offer */}
        <PricingSection
          onOpenConsultation={handleOpenConsultation}
          onOpenPricingDisclaimer={handleOpenPricingDisclaimer}
        />

        {/* Material & Hardware Guide */}
        <MaterialGuide onOpenConsultation={handleOpenConsultation} />

        {/* Why CAF & 5-Step Customer Journey */}
        <WhyCAFAndJourney onOpenConsultation={handleOpenConsultation} />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenPricingDisclaimer={handleOpenPricingDisclaimer}
      />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp onOpenConsultation={handleOpenConsultation} />

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
      />

      <PricingDisclaimerModal
        isOpen={pricingDisclaimerOpen}
        onClose={handleClosePricingDisclaimer}
        onOpenConsultation={handleOpenConsultation}
      />
    </div>
  );
}
