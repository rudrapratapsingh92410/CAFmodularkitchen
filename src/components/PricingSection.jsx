import React from "react";
import { Sparkles, Check, Info, ArrowRight, HelpCircle } from "lucide-react";
import { PRICING_PRIORITIES, BUSINESS_INFO } from "../data/websiteData";

export default function PricingSection({ onOpenConsultation, onOpenPricingDisclaimer }) {
  const scrollToDiscovery = () => {
    const el = document.getElementById("discovery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-[#F7F4EE] border-b border-[#E8DFD2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/60 border border-[#D8D0C3] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78816C]">
              Transparent Pricing & Estimates
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20211F]">
            Explore Your Kitchen Options
          </h2>
          <p className="mt-3 text-base text-[#20211F]/70">
            We believe in complete pricing honesty. Discover our advertised starting acrylic offer and see how different design priorities shape your final personalized investment.
          </p>
        </div>

        {/* Advertised Starting Price Highlight Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#D8D0C3] shadow-sm max-w-4xl mx-auto text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#78816C]/15 text-[#78816C] text-xs font-bold uppercase tracking-wider mb-2">
                Special Advertised Offer
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F]">
                Acrylic-Finish Kitchens Advertised From{" "}
                <span className="text-[#78816C] font-extrabold">₹1,499 per sq. ft.*</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#20211F]/75 max-w-2xl leading-relaxed">
                Enjoy high-gloss, reflective acrylic shutters customized for your home. Final pricing is computed based on exact site measurements, board grade (HDHMR or Marine Ply), hardware selections, basket configurations, and custom inclusions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              <button
                type="button"
                onClick={onOpenPricingDisclaimer}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#78816C] bg-[#F7F4EE] hover:bg-[#E8DFD2]/60 border border-[#D8D0C3] transition-colors cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>View Full Pricing Note</span>
              </button>
              <button
                type="button"
                onClick={scrollToDiscovery}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#20211F] hover:bg-[#323531] transition-all shadow-xs cursor-pointer"
              >
                <span>Calculate Your Layout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Value-Focused Planning Categories (Not fake packages, but planning frameworks) */}
        <div className="mb-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#20211F]">
                Compare Available Design Priorities
              </h3>
              <p className="text-xs sm:text-sm text-[#20211F]/70">
                Planning frameworks to help you align your space, finish preferences, and budget expectations.
              </p>
            </div>
            <span className="text-xs text-[#78816C] font-medium bg-[#E8DFD2]/50 px-3 py-1 rounded-full border border-[#D8D0C3] w-fit">
              *Planning categories • Tailored estimates upon site visit
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRICING_PRIORITIES.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popularChoice
                    ? "bg-white border-2 border-[#20211F] shadow-lg ring-1 ring-[#20211F]/10"
                    : "bg-white/80 border border-[#E8DFD2] shadow-xs hover:border-[#D8D0C3]"
                }`}
              >
                {tier.popularChoice && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#20211F] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                    Most Popular Choice in Lucknow
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#78816C]">
                      {tier.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-[#20211F]">
                    {tier.title}
                  </h4>

                  <p className="text-xs text-[#20211F]/70 mt-1 min-h-[36px]">
                    {tier.target}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-[#F7F4EE] border border-[#E8DFD2]">
                    <span className="text-[11px] font-semibold text-[#78816C] block uppercase tracking-wide">
                      Planning Focus
                    </span>
                    <span className="text-xs font-bold text-[#20211F] block mt-0.5">
                      {tier.focus}
                    </span>
                    <span className="text-[11px] text-[#20211F]/60 block mt-1 italic">
                      {tier.priceNote}
                    </span>
                  </div>

                  {/* Specifications List */}
                  <div className="mt-6 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#20211F]/60 block">
                      Typical Inclusions:
                    </span>
                    {tier.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#78816C] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#20211F]/80 leading-snug">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4 border-t border-[#E8DFD2]">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.popularChoice
                        ? "bg-[#20211F] text-white hover:bg-[#323531]"
                        : "bg-[#F7F4EE] text-[#20211F] border border-[#D8D0C3] hover:bg-[#E8DFD2]/60"
                    }`}
                  >
                    <span>Get a Personalized Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Pricing Transparency Callout */}
        <div className="p-4 rounded-xl bg-white border border-[#E8DFD2] text-xs text-[#20211F]/70 text-left flex items-start gap-3">
          <HelpCircle className="w-4 h-4 text-[#78816C] shrink-0 mt-0.5" />
          <p>
            <strong>Transparent Quote Guarantee:</strong> We do not publish misleading all-inclusive claims. After laser-measuring your kitchen in Lucknow, we give you an itemized BOM (Bill of Materials) detailing core board thickness, edge-banding, and branded hardware fittings with zero surprise costs.
          </p>
        </div>

      </div>
    </section>
  );
}
