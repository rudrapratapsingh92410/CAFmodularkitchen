import React, { useState } from "react";
import { Sparkles, X, ChevronLeft, ChevronRight, MessageCircle, ExternalLink, ArrowRight } from "lucide-react";
import { GALLERY_ITEMS, BUSINESS_INFO } from "../data/websiteData";

export default function DesignGallery({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: "all", label: "All Designs" },
    { id: "acrylic", label: "Modern Acrylic" },
    { id: "wooden", label: "Warm Wooden Finish" },
    { id: "white", label: "Minimalist White" },
    { id: "compact", label: "Space-Saving Compact" },
    { id: "island", label: "Premium Island" },
    { id: "wardrobe", label: "Modular Wardrobes" },
    { id: "living", label: "Living Spaces" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleEnquireAboutDesign = (designTitle) => {
    const text = encodeURIComponent(
      `Hello CAF Modular Kitchen! I love the "${designTitle}" design from your showcase gallery. Can you tell me more about customizing this style for my home in Lucknow?`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="gallery" className="py-20 bg-[#F7F4EE] border-b border-[#E8DFD2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/60 border border-[#D8D0C3] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#78816C]">
                Design Inspiration & Showcase
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20211F]">
              Explore Curated Kitchen Concepts
            </h2>
            <p className="mt-3 text-base text-[#20211F]/70">
              Representative styles and customized modular designs tailored for contemporary Lucknow homes. Click any image to view details, specifications, and layout highlights.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs text-[#20211F]/60 block mb-1">
              Note: Design Inspiration gallery
            </span>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#20211F] bg-white px-4 py-2.5 rounded-lg border border-[#D8D0C3] hover:bg-[#E8DFD2]/50 transition-colors shadow-xs"
            >
              <span>Request Custom 3D Render</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#78816C]" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#20211F] text-white shadow-xs"
                    : "bg-white text-[#20211F]/75 border border-[#E8DFD2] hover:bg-[#E8DFD2]/40 hover:text-[#20211F]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E8DFD2] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] sm:aspect-[4/3.5] overflow-hidden bg-[#20211F]/5">
                <img
                  src={item.image}
                  alt={`${item.title} - modular kitchen design inspiration Lucknow`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#20211F]/80 text-white backdrop-blur-xs">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[#20211F]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-white/95 text-[#20211F] text-xs font-bold shadow-md">
                    Click to Inspect
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between text-left">
                <div>
                  <span className="text-[11px] font-semibold text-[#78816C] uppercase tracking-wide block">
                    {item.layout}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#20211F] mt-1 leading-snug group-hover:text-[#78816C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#20211F]/70 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DFD2]/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#78816C] font-medium">
                    {item.highlights[0]}
                  </span>
                  <span className="font-bold text-[#20211F] group-hover:translate-x-0.5 transition-transform">
                    View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Contextual CTA Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#E8DFD2]/50 border border-[#D8D0C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#20211F]">
              Want a similar design for your home in Lucknow?
            </h4>
            <p className="text-xs sm:text-sm text-[#20211F]/70 mt-0.5">
              Every design is customized to your exact room measurements, wall angles, and appliance positions.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#20211F] hover:bg-[#323531] transition-all shrink-0 cursor-pointer"
          >
            Get a Customized Consultation
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-[#20211F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#D8D0C3] max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 md:bg-[#20211F]/10 hover:bg-white text-[#20211F] transition-colors"
              aria-label="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#20211F] shadow-md transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 md:right-[380px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#20211F] shadow-md transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Left: Big Image View */}
            <div className="md:w-3/5 bg-[#171816] relative flex items-center justify-center overflow-hidden min-h-[300px]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover max-h-[500px]"
              />
            </div>

            {/* Right: Specifications & CTAs */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto text-left">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#78816C]/15 text-[#78816C]">
                    {currentItem.categoryLabel}
                  </span>
                  <span className="text-xs text-[#20211F]/50">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#20211F] leading-tight">
                  {currentItem.title}
                </h3>

                <div className="mt-2 text-xs font-semibold text-[#78816C]">
                  Layout: {currentItem.layout}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#20211F]/75 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-4 border-t border-[#E8DFD2]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#20211F]/70 block mb-2">
                    Key Specifications:
                  </span>
                  <ul className="space-y-1.5">
                    {currentItem.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#20211F]/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#78816C]"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 pt-4 border-t border-[#E8DFD2] space-y-2.5">
                <button
                  type="button"
                  onClick={() => handleEnquireAboutDesign(currentItem.title)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire About This Design</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(null);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#20211F] bg-[#F7F4EE] hover:bg-[#E8DFD2]/60 border border-[#D8D0C3] transition-colors cursor-pointer"
                >
                  Book Free In-Home Consultation
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
