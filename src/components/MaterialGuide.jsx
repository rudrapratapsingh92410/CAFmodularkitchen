import React from "react";
import { Sparkles, Shield, Droplets, CheckCircle, HelpCircle } from "lucide-react";
import { MATERIAL_GUIDE } from "../data/websiteData";

export default function MaterialGuide({ onOpenConsultation }) {
  return (
    <section id="materials" className="py-20 bg-white border-b border-[#E8DFD2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/60 border border-[#D8D0C3] mb-3">
            <Shield className="w-3.5 h-3.5 text-[#78816C]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78816C]">
              Material & Hardware Transparency
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20211F]">
            What Goes Inside Your Kitchen?
          </h2>
          <p className="mt-3 text-base text-[#20211F]/70">
            A beautiful kitchen must withstand Indian spices, steam, daily cleaning, and regional humidity. Here is how we help you choose the right core boards and shutter finishes.
          </p>
        </div>

        {/* Comparison Categories */}
        <div className="space-y-12 text-left">
          {MATERIAL_GUIDE.map((section, idx) => (
            <div key={idx} className="bg-[#F7F4EE] rounded-3xl p-6 sm:p-8 border border-[#E8DFD2]">
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8DFD2]">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#20211F]">
                  {section.category}
                </h3>
                <span className="text-xs text-[#78816C] font-semibold uppercase tracking-wider">
                  Engineered For Longevity
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white rounded-2xl p-5 border border-[#E8DFD2] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#78816C]/10 text-[#78816C] mb-3">
                        <CheckCircle className="w-3 h-3" />
                        <span>{item.rating}</span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-[#20211F] leading-snug">
                        {item.name}
                      </h4>

                      <p className="text-xs text-[#20211F]/75 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#E8DFD2]/60">
                      <span className="text-[11px] font-bold text-[#78816C] uppercase tracking-wider block">
                        Best Application:
                      </span>
                      <span className="text-xs text-[#20211F]/80 block mt-0.5">
                        {item.bestFor}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guidance Footer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#E8DFD2]/40 border border-[#D8D0C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#D8D0C3] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5 text-[#78816C]" />
            </div>
            <div>
              <span className="text-sm font-bold text-[#20211F] block">
                Not sure which material fits your budget & layout?
              </span>
              <span className="text-xs text-[#20211F]/70">
                During our free site visit, we bring physical board & shutter sample swatches to your home.
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#20211F] hover:bg-[#323531] transition-colors shrink-0 cursor-pointer"
          >
            Request Swatch Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
