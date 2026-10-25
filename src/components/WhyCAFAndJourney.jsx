import React from "react";
import { Sparkles, Check, ArrowRight, ShieldCheck, Clock, MapPin, Wrench } from "lucide-react";
import { WHY_CAF_POINTS, CUSTOMER_JOURNEY } from "../data/websiteData";

export default function WhyCAFAndJourney({ onOpenConsultation }) {
  return (
    <section id="why-caf" className="py-20 bg-[#F7F4EE] border-b border-[#E8DFD2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Why CAF Credentials */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/60 border border-[#D8D0C3] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#78816C]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#78816C]">
                Verified Business Credentials
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20211F]">
              Why Lucknow Homeowners Choose CAF
            </h2>
            <p className="mt-3 text-base text-[#20211F]/70">
              Rooted in Rajajipuram, we combine thoughtful space planning with precision fabrication and honest local service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CAF_POINTS.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E8DFD2] shadow-xs text-left flex flex-col justify-between group hover:border-[#78816C] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-lg bg-[#F7F4EE] text-[#78816C] font-serif text-base font-bold border border-[#E8DFD2]">
                      {point.stat}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#78816C]/40 group-hover:bg-[#78816C] transition-colors"></span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#20211F] group-hover:text-[#78816C] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#20211F]/70 mt-2 leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8DFD2]/60 flex items-center gap-2 text-[11px] text-[#78816C] font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Stated Service Commitment</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: The Transparent 5-Step Customer Journey */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8D0C3] shadow-xs text-left">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] block mb-2">
              Step-by-Step Experience
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F]">
              From Concept to Handover
            </h3>
            <p className="text-xs sm:text-sm text-[#20211F]/70 mt-1">
              Every kitchen follows a structured 5-step journey so you always know what to expect. Timelines and deliverables are finalized directly with the business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {CUSTOMER_JOURNEY.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F4EE] border border-[#D8D0C3] flex items-center justify-center font-serif text-lg font-bold text-[#78816C] mb-4">
                    {step.step}
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#20211F] leading-snug">
                    {step.title}
                  </h4>

                  <p className="text-xs text-[#20211F]/70 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < CUSTOMER_JOURNEY.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 text-[#D8D0C3]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-[#E8DFD2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#20211F]/70">
              Ready to start Step 1? Connect with our Lucknow design team for your free requirement review.
            </span>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#20211F] hover:bg-[#323531] transition-colors shrink-0 cursor-pointer"
            >
              <span>Begin Your Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
