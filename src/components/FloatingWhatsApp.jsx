import React, { useState } from "react";
import { MessageCircle, Phone, X, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "../data/websiteData";

export default function FloatingWhatsApp({ onOpenConsultation }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello CAF Modular Kitchen! I am looking for a customized modular kitchen in Lucknow. Please share design details and pricing."
  )}`;

  return (
    <>
      {/* Mobile Persistent Floating Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8DFD2] p-2.5 px-4 shadow-xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-2.5 rounded-xl text-xs font-bold text-[#20211F] bg-[#F7F4EE] border border-[#D8D0C3] flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5 text-[#78816C]" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center gap-2 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Design</span>
        </a>

        <button
          type="button"
          onClick={onOpenConsultation}
          className="p-2.5 rounded-xl bg-[#20211F] text-white"
          title="Free Design Consultation"
        >
          <Sparkles className="w-4 h-4 text-[#C5A880]" />
        </button>
      </div>

      {/* Desktop Floating WhatsApp Button with Quick Greeting */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
        {showTooltip && (
          <div className="bg-white p-3.5 rounded-2xl shadow-xl border border-[#D8D0C3] max-w-xs text-left animate-in fade-in slide-in-from-bottom-2 duration-200 relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-[#20211F]/40 hover:text-[#20211F]"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#78816C]">
                CAF Kitchen Team Online
              </span>
            </div>
            <p className="text-xs text-[#20211F]/80">
              Need quick pricing or design guidance for your Lucknow home? Tap to chat with us!
            </p>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Chat with CAF on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#25D366]"></span>
          </div>
          <span className="text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}
