import React, { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { FAQS, BUSINESS_INFO } from "../data/websiteData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#E8DFD2] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/60 border border-[#D8D0C3] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#78816C]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78816C]">
              Got Questions?
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20211F]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#20211F]/70">
            Clear, straightforward answers about our modular kitchen pricing, materials, timelines, and services across Lucknow.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 text-left">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F7F4EE] border-[#78816C]/60 shadow-xs"
                    : "bg-white border-[#E8DFD2] hover:border-[#D8D0C3]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#20211F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#20211F] text-white" : "bg-[#E8DFD2]/60 text-[#20211F]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#20211F]/80 leading-relaxed border-t border-[#E8DFD2]/60 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F7F4EE] border border-[#E8DFD2] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#20211F]">
              Have a question specific to your floor plan?
            </h4>
            <p className="text-xs text-[#20211F]/70 mt-0.5">
              Chat directly with our modular kitchen designers in Rajajipuram.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello CAF Modular Kitchen! I have a question regarding modular kitchen design in Lucknow.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
