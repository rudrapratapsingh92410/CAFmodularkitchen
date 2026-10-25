import React, { useState } from "react";
import { Check, ArrowRight, MessageCircle, Sparkles, Layers, RefreshCw, Box, Home, Cpu } from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "../data/websiteData";

export default function ServicesSection({ onOpenConsultation }) {
  const [selectedServiceId, setSelectedServiceId] = useState("modular-kitchens");

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (id) => {
    switch (id) {
      case "modular-kitchens":
        return <Layers className="w-5 h-5" />;
      case "kitchen-renovation":
        return <RefreshCw className="w-5 h-5" />;
      case "modular-wardrobes":
        return <Box className="w-5 h-5" />;
      case "complete-interiors":
        return <Home className="w-5 h-5" />;
      case "smart-storage":
        return <Cpu className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleEnquireService = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hello CAF Modular Kitchen! I am looking for details regarding your "${serviceTitle}" service in Lucknow. Please share design options and process.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-[#E8DFD2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/60 border border-[#D8D0C3] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78816C]">
              Comprehensive Services
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20211F]">
            Designed For Lucknow Lifestyles
          </h2>
          <p className="mt-3 text-base text-[#20211F]/70">
            From complete modular kitchens to full home interiors, every project is engineered with high-density moisture-resistant boards, premium shutters, and precision fittings.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#20211F] text-white border-[#20211F] shadow-sm"
                    : "bg-[#F7F4EE] text-[#20211F]/75 border-[#E8DFD2] hover:bg-white hover:text-[#20211F]"
                }`}
              >
                <span className={isSelected ? "text-[#C5A880]" : "text-[#78816C]"}>
                  {getServiceIcon(service.id)}
                </span>
                <span>{service.title.split(" ")[0]} {service.title.split(" ")[1] || ""}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-[#F7F4EE] rounded-3xl border border-[#E8DFD2] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Service Details */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8D0C3] text-xs font-bold text-[#78816C] uppercase tracking-wider mb-3">
                  {activeService.badge}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20211F]">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#78816C] mt-1">
                  {activeService.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#20211F]/75 leading-relaxed">
                {activeService.summary}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#20211F]/70 block">
                  Included Engineering & Scope:
                </span>
                <div className="space-y-2.5">
                  {activeService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#78816C]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#78816C]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#20211F]/85 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleEnquireService(activeService.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#20211F] bg-white border border-[#D8D0C3] hover:bg-[#E8DFD2]/40 transition-colors shadow-xs cursor-pointer"
                >
                  <span>Book Free Site Visit</span>
                  <ArrowRight className="w-4 h-4 text-[#78816C]" />
                </button>
              </div>

            </div>

            {/* Right: Service Image with Framing */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#D8D0C3] shadow-lg bg-white aspect-[4/3.5] sm:aspect-[4/3] group">
                <img
                  src={activeService.image}
                  alt={`${activeService.title} - CAF Modular Kitchen Lucknow`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-xs border border-white/40 text-left">
                  <span className="text-[10px] font-bold text-[#78816C] uppercase tracking-wider block">
                    Execution in Lucknow
                  </span>
                  <span className="text-xs font-bold text-[#20211F] block">
                    Tailored with moisture-resistant HDHMR & precision hardware.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
