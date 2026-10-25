import React from "react";
import { X, Info, Check, AlertCircle, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/websiteData";

export default function PricingDisclaimerModal({ isOpen, onClose, onOpenConsultation }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#20211F]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#D8D0C3] text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#20211F]/60 hover:text-[#20211F] hover:bg-[#F7F4EE] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#78816C]/15 flex items-center justify-center text-[#78816C] shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] block">
              Pricing Transparency Note
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#20211F]">
              About Our ₹1,499/sq. ft.* Offer
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-[#20211F]/80 leading-relaxed">
          <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#E8DFD2]">
            <p className="font-semibold text-[#20211F]">
              The ₹1,499 per sq. ft. rate is an advertised starting price for acrylic-finish shutters on standard modular base configurations.
            </p>
          </div>

          <p>
            Because every home in Lucknow has unique floor layouts, ceiling heights, and cooking requirements, <strong>it is not a confirmed all-inclusive quote for all projects</strong>.
          </p>

          <div>
            <span className="font-bold text-[#20211F] block mb-2">
              Factors that determine your final itemized quotation:
            </span>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#78816C] shrink-0 mt-0.5" />
                <span><strong>Site Measurements:</strong> Total running square footage of base units, wall units, and ceiling lofts.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#78816C] shrink-0 mt-0.5" />
                <span><strong>Core Carcass Material:</strong> Choice between HDHMR (Moisture-Resistant green board) or BWP (Boiling Water Proof) Marine Plywood.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#78816C] shrink-0 mt-0.5" />
                <span><strong>Hardware & Channels:</strong> Basic soft-close hinges vs. branded double-wall tandem boxes (Hettich, Hafele, Blum, Ebco).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#78816C] shrink-0 mt-0.5" />
                <span><strong>Internal Accessories:</strong> Pull-out pantry towers, corner LeMans carousels, spice racks, and cutlery organizers.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#78816C] shrink-0 mt-0.5" />
                <span><strong>Civil & Countertop:</strong> Granite/quartz fabrication, tile backsplash, or chimney ducting adjustments if needed.</span>
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
            <p>
              We provide free laser site measurement and an itemized transparent quotation with zero hidden fees before you make any payment.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 pt-4 border-t border-[#E8DFD2] flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#20211F] hover:bg-[#323531] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Transparent Estimate</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-4 rounded-xl text-xs font-semibold text-[#20211F] bg-[#F7F4EE] hover:bg-[#E8DFD2]/60 border border-[#D8D0C3] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
