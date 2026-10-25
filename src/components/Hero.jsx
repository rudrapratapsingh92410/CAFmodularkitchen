import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Layers, MapPin, Compass } from "lucide-react";
import { BUSINESS_INFO } from "../data/websiteData";

export default function Hero({ onOpenConsultation, onOpenPricingDisclaimer }) {
  const scrollToDiscovery = () => {
    const el = document.getElementById("discovery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById("gallery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F4EE] pt-6 pb-16 lg:py-20 border-b border-[#E8DFD2]">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#20211F_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Location & Established Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD2]/60 border border-[#D8D0C3] w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-[#78816C] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide uppercase text-[#20211F]/80">
                Rajajipuram, Lucknow • Since 2020
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#20211F] leading-[1.12]">
              Your Dream Kitchen, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#78816C]">Designed Around You.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg text-[#20211F]/75 max-w-2xl leading-relaxed font-sans">
              Thoughtfully designed modular kitchens and interiors that bring together smart storage, beautiful finishes, and everyday functionality — customized for your home in Lucknow.
            </p>

            {/* Advertised Offer Callout */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-[#E8DFD2] shadow-xs max-w-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F7F4EE] border border-[#E8DFD2] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#78816C] block">
                    Advertised Starting Offer
                  </span>
                  <span className="text-sm font-bold text-[#20211F]">
                    Acrylic Finish Kitchens — Starting at{" "}
                    <span className="text-base font-extrabold text-[#78816C]">₹1,499/sq. ft.*</span>
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenPricingDisclaimer}
                className="text-xs text-[#78816C] hover:text-[#20211F] underline self-start sm:self-center font-medium transition-colors cursor-pointer"
              >
                *Pricing disclaimer & details
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-[#20211F] hover:bg-[#323531] shadow-md hover:shadow-lg transition-all active:scale-[0.99] group border border-[#20211F]"
              >
                <span>Get Your FREE Kitchen Design</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={scrollToDiscovery}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-[#20211F] bg-white border border-[#D8D0C3] hover:bg-[#E8DFD2]/40 shadow-xs transition-all active:scale-[0.99]"
              >
                <Compass className="w-4 h-4 text-[#78816C]" />
                <span>Interactive Kitchen Planner</span>
              </button>
            </div>

            {/* Subtle Trust Line */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#78816C] tracking-wide">
              <span>Customized Designs</span>
              <span className="text-[#C5A880]">•</span>
              <span>Multiple Finish Options</span>
              <span className="text-[#C5A880]">•</span>
              <span>Professional Installation</span>
            </div>

            {/* Key Business Stats */}
            <div className="mt-10 pt-8 border-t border-[#E8DFD2] grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] block">
                  150+
                </span>
                <span className="text-xs sm:text-sm text-[#20211F]/70 font-medium">
                  Completed Projects
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] block">
                  Since 2020
                </span>
                <span className="text-xs sm:text-sm text-[#20211F]/70 font-medium">
                  Operating in Lucknow
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] block">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-[#20211F]/70 font-medium">
                  Customized Layouts
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D8D0C3] shadow-xl bg-white aspect-[4/5] sm:aspect-[4/4.5] group">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85"
                  alt="Contemporary modular kitchen interior design with acrylic finish in Lucknow"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/80 via-transparent to-transparent"></div>

                {/* Overlay Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-left">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#78816C] block">
                        Design Inspiration
                      </span>
                      <h2 className="font-serif text-base font-bold text-[#20211F] leading-tight">
                        Modern Acrylic L-Shaped Kitchen
                      </h2>
                      <p className="text-xs text-[#20211F]/70 mt-0.5">
                        Seamless handleless cabinets, tandem storage & quartz counter.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={scrollToGallery}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#20211F] text-white hover:bg-[#78816C] transition-colors shrink-0"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Lucknow Workshop */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white p-3.5 rounded-xl border border-[#E8DFD2] shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#78816C]/15 flex items-center justify-center text-[#78816C]">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-[#20211F] block">Direct Workshop</span>
                  <span className="text-[11px] text-[#20211F]/60">Rajajipuram, Lucknow</span>
                </div>
              </div>

              {/* Floating Badge 2: Quality Materials */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#20211F] text-white p-3.5 rounded-xl border border-[#323531] shadow-xl flex items-center gap-3 max-w-[240px]">
                <ShieldCheck className="w-6 h-6 text-[#C5A880] shrink-0" />
                <div className="text-left text-xs leading-tight">
                  <span className="font-bold text-white block">Moisture-Resistant Boards</span>
                  <span className="text-white/70 text-[11px]">HDHMR & BWP Marine Ply</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
