import React, { useState } from "react";
import { MessageCircle, Check, Sparkles, Send, MapPin, User, Compass, HelpCircle, ArrowRight } from "lucide-react";
import {
  BUSINESS_INFO,
  KITCHEN_LAYOUTS,
  BUDGET_OPTIONS,
  PROJECT_TYPES,
  TIMELINES,
  LUCKNOW_LOCALITIES
} from "../data/websiteData";

export default function KitchenDiscovery() {
  const [selectedLayout, setSelectedLayout] = useState("l-shaped");
  const [selectedBudget, setSelectedBudget] = useState("1.5-3l");
  const [selectedProjectType, setSelectedProjectType] = useState("new-home");
  const [selectedTimeline, setSelectedTimeline] = useState("1-3-months");
  const [userName, setUserName] = useState("");
  const [userLocality, setUserLocality] = useState("Rajajipuram");
  const [customLocality, setCustomLocality] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [validationError, setValidationError] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // Helper to get labels
  const layoutObj = KITCHEN_LAYOUTS.find((l) => l.id === selectedLayout) || KITCHEN_LAYOUTS[0];
  const budgetObj = BUDGET_OPTIONS.find((b) => b.id === selectedBudget) || BUDGET_OPTIONS[0];
  const projectObj = PROJECT_TYPES.find((p) => p.id === selectedProjectType) || PROJECT_TYPES[0];
  const timelineObj = TIMELINES.find((t) => t.id === selectedTimeline) || TIMELINES[0];

  const resolvedLocality =
    userLocality === "Other Area in Lucknow"
      ? (customLocality.trim() || "Lucknow")
      : (userLocality || "Lucknow");

  // Generate personalized WhatsApp Message
  const generateWhatsAppMessage = () => {
    const greeting = "Hello CAF Modular Kitchen & Interiors!";
    const interest = "I am interested in a customized kitchen design.";
    const details = [
      `Layout: ${layoutObj.name}`,
      `Budget: ${budgetObj.label}`,
      `Project: ${projectObj.label}`,
      `Timeline: ${timelineObj.label}`,
    ];

    if (userName.trim()) {
      details.push(`Name: ${userName.trim()}`);
    }

    details.push(`Location: ${resolvedLocality}, Lucknow`);

    if (additionalNotes.trim()) {
      details.push(`Notes: ${additionalNotes.trim()}`);
    }

    return `${greeting} ${interest}\n\n${details.join("\n")}\n\nPlease guide me with design options and quotation.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError("");

    // Simple validation
    if (userLocality === "Other Area in Lucknow" && !customLocality.trim()) {
      setValidationError("Please mention your locality in Lucknow.");
      return;
    }

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  // Mini Schematic SVG renderer for layouts
  const renderLayoutSchematic = (type) => {
    switch (type) {
      case "L":
        return (
          <svg className="w-12 h-12 stroke-[#78816C] fill-none" viewBox="0 0 48 48" strokeWidth="3">
            <rect x="6" y="6" width="36" height="36" rx="4" className="stroke-[#E8DFD2] fill-[#F7F4EE]" strokeWidth="1" />
            <path d="M12 12V36H36" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="18" r="2.5" className="fill-[#C5A880] stroke-none" />
            <circle cx="26" cy="36" r="2.5" className="fill-[#78816C] stroke-none" />
          </svg>
        );
      case "U":
        return (
          <svg className="w-12 h-12 stroke-[#78816C] fill-none" viewBox="0 0 48 48" strokeWidth="3">
            <rect x="6" y="6" width="36" height="36" rx="4" className="stroke-[#E8DFD2] fill-[#F7F4EE]" strokeWidth="1" />
            <path d="M12 12V36H36V12" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="24" cy="36" r="2.5" className="fill-[#C5A880] stroke-none" />
          </svg>
        );
      case "P":
        return (
          <svg className="w-12 h-12 stroke-[#78816C] fill-none" viewBox="0 0 48 48" strokeWidth="3">
            <rect x="6" y="6" width="36" height="36" rx="4" className="stroke-[#E8DFD2] fill-[#F7F4EE]" strokeWidth="1" />
            <path d="M12 12V36" strokeLinecap="round" />
            <path d="M36 12V36" strokeLinecap="round" />
            <circle cx="12" cy="24" r="2.5" className="fill-[#C5A880] stroke-none" />
            <circle cx="36" cy="24" r="2.5" className="fill-[#78816C] stroke-none" />
          </svg>
        );
      case "I":
        return (
          <svg className="w-12 h-12 stroke-[#78816C] fill-none" viewBox="0 0 48 48" strokeWidth="3">
            <rect x="6" y="6" width="36" height="36" rx="4" className="stroke-[#E8DFD2] fill-[#F7F4EE]" strokeWidth="1" />
            <path d="M10 12H38" strokeLinecap="round" />
            <rect x="16" y="24" width="16" height="12" rx="2" className="stroke-[#78816C] fill-[#E8DFD2]/60" />
            <circle cx="24" cy="30" r="2" className="fill-[#C5A880] stroke-none" />
          </svg>
        );
      case "S":
        return (
          <svg className="w-12 h-12 stroke-[#78816C] fill-none" viewBox="0 0 48 48" strokeWidth="3">
            <rect x="6" y="6" width="36" height="36" rx="4" className="stroke-[#E8DFD2] fill-[#F7F4EE]" strokeWidth="1" />
            <path d="M10 24H38" strokeLinecap="round" />
            <circle cx="20" cy="24" r="2.5" className="fill-[#C5A880] stroke-none" />
            <circle cx="30" cy="24" r="2.5" className="fill-[#78816C] stroke-none" />
          </svg>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-lg bg-[#E8DFD2]/40 flex items-center justify-center text-[#78816C]">
            <HelpCircle className="w-7 h-7" />
          </div>
        );
    }
  };

  return (
    <section id="discovery" className="py-20 bg-white border-b border-[#E8DFD2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/50 border border-[#D8D0C3] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#78816C]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78816C]">
              Guided WhatsApp Enquiry
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20211F]">
            Let’s Plan Your Dream Kitchen
          </h2>
          <p className="mt-3 text-base text-[#20211F]/70">
            Select your preferred layout, budget range, and timeline. We’ll generate an instant tailored message to connect you with our Lucknow modular kitchen designers on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Layout Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#20211F] text-white flex items-center justify-center text-[10px]">
                    1
                  </span>
                  Select Kitchen Layout
                </span>
                <span className="text-xs text-[#20211F]/60">Select one option</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {KITCHEN_LAYOUTS.map((layout) => {
                  const isSelected = selectedLayout === layout.id;
                  return (
                    <button
                      key={layout.id}
                      type="button"
                      onClick={() => setSelectedLayout(layout.id)}
                      className={`relative p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? "border-[#20211F] bg-[#F7F4EE] shadow-sm ring-1 ring-[#20211F]"
                          : "border-[#E8DFD2] bg-white hover:border-[#D8D0C3] hover:bg-[#F7F4EE]/40"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        {renderLayoutSchematic(layout.svgType)}
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#20211F] text-white flex items-center justify-center">
                            <Check className="w-3 h-3 text-[#C5A880]" />
                          </div>
                        )}
                      </div>
                      <div className="mt-3">
                        <span className="text-xs sm:text-sm font-bold text-[#20211F] block leading-tight">
                          {layout.name}
                        </span>
                        <span className="text-[11px] text-[#20211F]/60 line-clamp-2 mt-1 leading-snug">
                          {layout.bestFor}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Approximate Budget */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#20211F] text-white flex items-center justify-center text-[10px]">
                    2
                  </span>
                  Approximate Budget
                </span>
                <span className="text-xs text-[#20211F]/60">Transparent pricing</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {BUDGET_OPTIONS.map((b) => {
                  const isSelected = selectedBudget === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBudget(b.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#20211F] bg-[#F7F4EE] ring-1 ring-[#20211F]"
                          : "border-[#E8DFD2] bg-white hover:border-[#D8D0C3]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-[#20211F]">
                          {b.label}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#78816C]" />}
                      </div>
                      <span className="text-[11px] text-[#20211F]/60 block mt-0.5">
                        {b.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3 & 4: Project Type & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Project Type */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#20211F] text-white flex items-center justify-center text-[10px]">
                    3
                  </span>
                  Project Type
                </span>
                <div className="space-y-2">
                  {PROJECT_TYPES.map((p) => {
                    const isSelected = selectedProjectType === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedProjectType(p.id)}
                        className={`w-full p-2.5 rounded-lg border text-left transition-all text-xs flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "border-[#20211F] bg-[#F7F4EE] font-bold text-[#20211F]"
                            : "border-[#E8DFD2] bg-white text-[#20211F]/80 hover:border-[#D8D0C3]"
                        }`}
                      >
                        <span>{p.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#78816C]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-[#20211F] text-white flex items-center justify-center text-[10px]">
                    4
                  </span>
                  Project Timeline
                </span>
                <div className="space-y-2">
                  {TIMELINES.map((t) => {
                    const isSelected = selectedTimeline === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTimeline(t.id)}
                        className={`w-full p-2.5 rounded-lg border text-left transition-all text-xs flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "border-[#20211F] bg-[#F7F4EE] font-bold text-[#20211F]"
                            : "border-[#E8DFD2] bg-white text-[#20211F]/80 hover:border-[#D8D0C3]"
                        }`}
                      >
                        <span>{t.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#78816C]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Step 5: Optional Details (Name, Locality, Notes) */}
            <div className="p-5 rounded-2xl bg-[#F7F4EE]/60 border border-[#E8DFD2] space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#20211F] text-white flex items-center justify-center text-[10px]">
                  5
                </span>
                Your Details (Optional but Recommended)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#78816C] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Amit Verma"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#D8D0C3] bg-white focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#20211F] mb-1.5">
                    Locality in Lucknow
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#78816C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={userLocality}
                      onChange={(e) => setUserLocality(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#D8D0C3] bg-white focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                    >
                      {LUCKNOW_LOCALITIES.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {userLocality === "Other Area in Lucknow" && (
                <div>
                  <label className="block text-xs font-semibold text-[#20211F] mb-1">
                    Specify Locality / Sector
                  </label>
                  <input
                    type="text"
                    value={customLocality}
                    onChange={(e) => setCustomLocality(e.target.value)}
                    placeholder="e.g. Faizabad Road / Telibagh"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#D8D0C3] bg-white focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#20211F] mb-1">
                  Specific Requests (Optional)
                </label>
                <input
                  type="text"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="e.g. Need acrylic champagne shutters, chimney space, tall pantry tower"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#D8D0C3] bg-white focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                />
              </div>

              {validationError && (
                <p className="text-xs text-red-600 font-medium">{validationError}</p>
              )}
            </div>

          </div>

          {/* Right Column: Live WhatsApp Message Generator & Action */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl border border-[#20211F] bg-[#20211F] text-white p-6 shadow-xl relative overflow-hidden">
              
              {/* Top Accent */}
              <div className="flex items-center justify-between pb-4 border-b border-[#323531]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#C5A880] block">
                      Direct WhatsApp Flow
                    </span>
                    <span className="text-sm font-bold text-white">
                      +91 8896013459
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active
                </span>
              </div>

              {/* Message Simulation Box */}
              <div className="mt-5">
                <span className="text-xs font-semibold text-white/70 block mb-2">
                  Preview of your formatted enquiry message:
                </span>

                <div className="p-4 rounded-xl bg-[#171816] border border-[#323531] text-xs font-mono text-[#E8DFD2] leading-relaxed whitespace-pre-wrap select-all">
                  {generateWhatsAppMessage()}
                </div>

                <div className="mt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="text-[11px] text-[#C5A880] hover:underline"
                  >
                    {isCopied ? "✓ Copied to clipboard" : "Copy text"}
                  </button>
                </div>
              </div>

              {/* Submission Button */}
              <div className="mt-6 space-y-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Requirements on WhatsApp</span>
                </button>

                <p className="text-[11px] text-white/60 text-center leading-normal">
                  No automated spam. Clicking opens WhatsApp directly with +91 8896013459 so our interior team can review your layout immediately.
                </p>
              </div>

              {/* Summary highlights */}
              <div className="mt-6 pt-5 border-t border-[#323531] space-y-2 text-xs text-white/80">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Selected Layout:</span>
                  <span className="font-semibold text-[#C5A880]">{layoutObj.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Target Budget:</span>
                  <span className="font-semibold">{budgetObj.label}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Project Area:</span>
                  <span className="font-semibold">{resolvedLocality}, Lucknow</span>
                </div>
              </div>

            </div>

            {/* Phone Call Alternative */}
            <div className="mt-4 p-4 rounded-xl bg-[#F7F4EE] border border-[#E8DFD2] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#20211F] block">Prefer talking on phone?</span>
                <span className="text-[11px] text-[#20211F]/70">Call our Lucknow workshop directly</span>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white border border-[#D8D0C3] text-[#20211F] hover:bg-[#E8DFD2]/40"
              >
                +91 8896013459
              </a>
            </div>

          </div>

        </form>

      </div>
    </section>
  );
}
