import React, { useState } from "react";
import { X, Sparkles, MessageCircle, CheckCircle2, User, Phone, MapPin, Layers } from "lucide-react";
import { BUSINESS_INFO, LUCKNOW_LOCALITIES, KITCHEN_LAYOUTS } from "../data/websiteData";

export default function ConsultationModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [locality, setLocality] = useState("Rajajipuram");
  const [layout, setLayout] = useState("L-shaped");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please provide your name.");
      return;
    }

    const message = encodeURIComponent(
      `Hello CAF Modular Kitchen! I would like to book a FREE 3D Kitchen Design Consultation.\n\nName: ${name.trim()}\nPhone: ${phone.trim() || "Not specified"}\nPreferred Layout: ${layout}\nLocality: ${locality}, Lucknow\nRequirements: ${notes.trim() || "Please guide me with design options and site visit."}`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
    onClose();
  };

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

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DFD2]/60 text-xs font-bold text-[#78816C] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            Free In-Home Consultation
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F]">
            Get Your Free Kitchen Design
          </h3>
          <p className="text-xs text-[#20211F]/70 mt-1">
            Our Lucknow designers will contact you to review your layout, show finish swatches, and provide a 3D plan.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#20211F] mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#78816C] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priyanshu Srivastava"
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D8D0C3] focus:outline-none focus:ring-2 focus:ring-[#78816C]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#20211F] mb-1">
                WhatsApp / Phone (Optional)
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#78816C] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D8D0C3] focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#20211F] mb-1">
                Locality in Lucknow
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#78816C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D8D0C3] bg-white focus:outline-none focus:ring-2 focus:ring-[#78816C]"
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

          <div>
            <label className="block text-xs font-bold text-[#20211F] mb-1">
              Interested Kitchen Layout
            </label>
            <div className="relative">
              <Layers className="w-4 h-4 text-[#78816C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={layout}
                onChange={(e) => setLayout(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D8D0C3] bg-white focus:outline-none focus:ring-2 focus:ring-[#78816C]"
              >
                {KITCHEN_LAYOUTS.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#20211F] mb-1">
              Specific Requirements / Dimensions (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. New apartment possession next month, looking for acrylic high-gloss."
              className="w-full px-3 py-2 text-xs rounded-xl border border-[#D8D0C3] focus:outline-none focus:ring-2 focus:ring-[#78816C] resize-none"
            ></textarea>
          </div>

          {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp (+91 8896013459)</span>
            </button>
            <p className="text-[11px] text-[#20211F]/60 text-center mt-2">
              Opens WhatsApp with your requirements ready to send. No spam guarantee.
            </p>
          </div>
        </form>

        {/* Trust Badges */}
        <div className="mt-6 pt-4 border-t border-[#E8DFD2] grid grid-cols-3 gap-2 text-center text-[10px] text-[#20211F]/70">
          <div>✓ Free 3D Layout</div>
          <div>✓ Rajajipuram Workshop</div>
          <div>✓ 150+ Executed</div>
        </div>
      </div>
    </div>
  );
}
