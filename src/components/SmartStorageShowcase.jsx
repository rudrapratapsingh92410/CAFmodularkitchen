import React from "react";
import { Layers, RotateCcw, Archive, Shield, Grid, ArrowUpCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { SMART_STORAGE_ITEMS } from "../data/websiteData";

export default function SmartStorageShowcase({ onOpenConsultation }) {
  const getIcon = (type) => {
    switch (type) {
      case "layers":
        return <Layers className="w-5 h-5 text-[#C5A880]" />;
      case "rotate":
        return <RotateCcw className="w-5 h-5 text-[#C5A880]" />;
      case "archive":
        return <Archive className="w-5 h-5 text-[#C5A880]" />;
      case "shield":
        return <Shield className="w-5 h-5 text-[#C5A880]" />;
      case "grid":
        return <Grid className="w-5 h-5 text-[#C5A880]" />;
      case "arrowUp":
        return <ArrowUpCircle className="w-5 h-5 text-[#C5A880]" />;
      default:
        return <Layers className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section className="py-20 bg-[#20211F] text-white border-b border-[#323531]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#323531] border border-[#78816C]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
              Zero Wasted Space
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F4EE]">
            Smart Internal Storage Solutions
          </h2>
          <p className="mt-3 text-base text-[#E8DFD2]/70">
            A truly great kitchen is built from the inside out. We configure heavy-duty tandem boxes, pull-outs, and corner units engineered specifically for Indian spices, thalis, and daily cooking.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SMART_STORAGE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#171816] border border-[#323531] hover:border-[#78816C] transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#20211F] border border-[#323531] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-[#78816C] font-semibold">
                    0{index + 1}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#C5A880] block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="font-serif text-lg font-bold text-[#F7F4EE] group-hover:text-[#C5A880] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#E8DFD2]/70 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#323531] flex items-center gap-2 text-xs text-[#78816C]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#78816C]" />
                <span>Soft-close hydraulic damping</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#171816] border border-[#323531] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-[#C5A880] uppercase tracking-wider block">
              Branded Hardware Compatibility
            </span>
            <span className="text-sm font-medium text-white">
              We work with top international & domestic hardware brands including Hettich, Hafele, Blum, and Ebco.
            </span>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#20211F] bg-[#C5A880] hover:bg-[#E8DFD2] transition-colors shrink-0 cursor-pointer"
          >
            Ask About Hardware Options
          </button>
        </div>

      </div>
    </section>
  );
}
