import React from "react";
import { Phone, MessageCircle, MapPin, Sparkles, Heart } from "lucide-react";
import { BUSINESS_INFO, LUCKNOW_LOCALITIES } from "../data/websiteData";

export default function Footer({ onOpenConsultation, onOpenPricingDisclaimer }) {
  const quickNav = [
    { name: "Kitchen Gallery", href: "#gallery" },
    { name: "Modular Kitchens", href: "#services" },
    { name: "Interactive Planner", href: "#discovery" },
    { name: "Pricing & Inclusions", href: "#pricing" },
    { name: "Material Guide", href: "#materials" },
    { name: "Why CAF", href: "#why-caf" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact & Location", href: "#contact" },
  ];

  return (
    <footer className="bg-[#20211F] text-[#E8DFD2] pt-16 pb-12 border-t border-[#323531]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#323531] text-left">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#171816] border border-[#C5A880]/50 flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-[#C5A880]">CAF</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block leading-tight">
                  CAF Modular Kitchen
                </span>
                <span className="text-[11px] font-sans text-[#78816C] tracking-widest uppercase font-semibold">
                  & Interiors • Lucknow
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8DFD2]/70 leading-relaxed max-w-sm">
              Transform your dream kitchen into reality. Bespoke modular kitchens, acrylic-finish shutters, modular wardrobes, and complete turnkey home interiors customized for Lucknow homeowners since 2020.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-white/90">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Rajajipuram, Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline">
                  +91 8896013459
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#25D366]">
                <MessageCircle className="w-4 h-4 fill-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello CAF Modular Kitchen! I am visiting your website and have an enquiry.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold"
                >
                  WhatsApp Consultation Available
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
              Quick Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#E8DFD2]/80">
              {quickNav.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
              Our Core Services
            </span>
            <ul className="space-y-2.5 text-xs text-[#E8DFD2]/80">
              <li>Acrylic Modular Kitchens</li>
              <li>L-Shaped, U-Shaped & Parallel Layouts</li>
              <li>Luxury Island & Galley Kitchens</li>
              <li>Civil Kitchen Renovation & Upgrades</li>
              <li>Modular Sliding & Hinged Wardrobes</li>
              <li>Complete Turnkey Home Interiors</li>
              <li>Tandem Boxes & Soft-Close Hardware</li>
              <li>Pantry Towers & Corner Solutions</li>
            </ul>
          </div>

          {/* Localities Served Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
              Areas Served in Lucknow
            </span>
            <p className="text-[11px] text-[#E8DFD2]/60 leading-relaxed">
              We provide free on-site measurements and installation across:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {LUCKNOW_LOCALITIES.slice(0, 12).map((loc) => (
                <span
                  key={loc}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-[#171816] text-[#E8DFD2]/80 border border-[#323531]"
                >
                  {loc}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-[#20211F] bg-[#C5A880] hover:bg-[#E8DFD2] transition-colors"
              >
                Book Lucknow Site Visit
              </button>
            </div>
          </div>

        </div>

        {/* Pricing Disclaimer & Transparency Note */}
        <div className="py-6 border-b border-[#323531] text-[11px] text-white/50 leading-relaxed text-left">
          <p>
            <strong className="text-white/70">*Advertised Pricing Disclaimer:</strong> The rate of ₹1,499 per sq. ft. is an advertised starting price for acrylic-finish shutters with standard base modular specifications. Final quotations depend upon exact site measurements, core board choice (HDHMR or BWP Marine Plywood), shutter thickness, hardware brands (Hettich, Hafele, Ebco, Blum), basket accessories, countertop fabrication, and individual project scope. All completed projects and site requirements are verified directly with the homeowner.
          </p>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} CAF Modular Kitchen & Interiors. All rights reserved. Rajajipuram, Lucknow.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={onOpenPricingDisclaimer} className="hover:text-white underline">
              Pricing Transparency Notice
            </button>
            <span>•</span>
            <span>Made for Lucknow Homeowners</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
