import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, ArrowRight, Sparkles, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../data/websiteData";

export default function Header({ onOpenConsultation, onOpenPricingDisclaimer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Designs", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "Plan Kitchen", href: "#discovery" },
    { name: "Pricing", href: "#pricing" },
    { name: "Materials", href: "#materials" },
    { name: "Why CAF", href: "#why-caf" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#20211F] text-[#E8DFD2] text-xs py-2 px-4 border-b border-[#323531]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#78816C]/30 text-[#C5A880] font-medium text-[11px] border border-[#78816C]/40">
              <MapPin className="w-3 h-3 text-[#C5A880]" />
              Rajajipuram, Lucknow
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="text-white/80">
              Acrylic Modular Kitchens from{" "}
              <button
                onClick={onOpenPricingDisclaimer}
                className="text-[#C5A880] underline font-semibold hover:text-[#E8DFD2] transition-colors cursor-pointer"
              >
                ₹1,499/sq. ft.*
              </button>
            </span>
            <span className="hidden lg:inline text-white/30">•</span>
            <span className="hidden lg:inline text-white/80">Free 3D Design Consultation</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden sm:inline-flex items-center gap-1 text-white/70">
              <Clock className="w-3 h-3 text-[#78816C]" />
              10:00 AM – 8:00 PM
            </span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello CAF Modular Kitchen! I would like to enquire about kitchen designs in Lucknow.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#C5A880] hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
              <span>WhatsApp: +91 8896013459</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD2]"
            : "bg-[#F7F4EE] border-b border-[#E8DFD2]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#78816C] rounded-lg p-1">
              <div className="w-11 h-11 rounded-lg bg-[#20211F] flex items-center justify-center border border-[#C5A880]/40 group-hover:border-[#C5A880] transition-colors shadow-sm">
                <span className="font-serif text-lg font-bold tracking-wider text-[#C5A880]">CAF</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#20211F] leading-none">
                  CAF Modular Kitchen
                </span>
                <span className="text-[11px] font-sans tracking-widest text-[#78816C] uppercase font-semibold mt-1">
                  & Interiors • Lucknow
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-[#20211F]/80 hover:text-[#20211F] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#78816C] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-[#20211F] bg-white border border-[#E8DFD2] hover:bg-[#E8DFD2]/40 transition-all shadow-xs"
                title="Call CAF Modular Kitchen Lucknow"
              >
                <Phone className="w-3.5 h-3.5 text-[#78816C]" />
                <span>+91 8896013459</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#20211F] hover:bg-[#323531] active:scale-95 transition-all shadow-sm border border-[#20211F]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Free 3D Design</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenConsultation}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#20211F] rounded-md"
              >
                Free Design
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#20211F] hover:bg-[#E8DFD2]/50 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F7F4EE] border-b border-[#E8DFD2] px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-[#20211F] py-2 border-b border-[#E8DFD2]/50 hover:text-[#78816C] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-[#20211F] bg-white border border-[#E8DFD2]"
                >
                  <Phone className="w-4 h-4 text-[#78816C]" />
                  <span>Call +91 8896013459</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello CAF Modular Kitchen! I would like to consult with your design team in Lucknow.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-white bg-[#20211F]"
                >
                  <span>Book Free 3D Design Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
