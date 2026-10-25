import React, { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Calendar, CheckCircle, Send, ArrowRight } from "lucide-react";
import { BUSINESS_INFO, LUCKNOW_LOCALITIES } from "../data/websiteData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    locality: "Rajajipuram",
    phone: "",
    serviceNeeded: "Modular Kitchen",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }

    const cleanedPhone = formData.phone.trim();
    if (cleanedPhone && cleanedPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Prepare WhatsApp Message
    const text = encodeURIComponent(
      `Hello CAF Modular Kitchen! I would like to book a design consultation.\n\nName: ${formData.name.trim()}\nPhone: ${cleanedPhone || "Not specified"}\nLocality: ${formData.locality}, Lucknow\nService: ${formData.serviceNeeded}\nNotes: ${formData.message.trim() || "Please contact me for consultation."}`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F7F4EE] border-b border-[#E8DFD2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/60 border border-[#D8D0C3] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#78816C]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#78816C]">
              Connect With Us
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#20211F]">
            Visit Or Contact CAF in Lucknow
          </h2>
          <p className="mt-3 text-base text-[#20211F]/70">
            Schedule your free in-home measurement visit or drop a WhatsApp message to discuss your modular kitchen requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Primary Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8D0C3] shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] block">
                  Business Details
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#20211F] mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#78816C] font-medium mt-0.5">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#E8DFD2]">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EE] border border-[#E8DFD2] flex items-center justify-center shrink-0 text-[#78816C]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#20211F] block">Workshop & Service Hub</span>
                    <span className="text-xs sm:text-sm text-[#20211F]/75 leading-relaxed block">
                      Rajajipuram, Lucknow, Uttar Pradesh, India
                    </span>
                    <span className="text-[11px] text-[#78816C] mt-0.5 block">
                      Serving all sectors of Rajajipuram, Gomti Nagar, Alambagh, and across Lucknow
                    </span>
                  </div>
                </div>

                {/* Phone / Call */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EE] border border-[#E8DFD2] flex items-center justify-center shrink-0 text-[#78816C]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#20211F] block">Phone / Mobile</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-base sm:text-lg font-bold text-[#20211F] hover:text-[#78816C] transition-colors block"
                    >
                      {BUSINESS_INFO.displayPhone}
                    </a>
                    <span className="text-[11px] text-[#20211F]/60 block">
                      Click to call directly on mobile
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0 text-[#25D366]">
                    <MessageCircle className="w-5 h-5 fill-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#20211F] block">Primary Enquiry Channel</span>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello CAF Modular Kitchen! I would like to schedule a free design consultation in Lucknow.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#25D366] hover:underline block"
                    >
                      Chat on WhatsApp: +91 8896013459
                    </a>
                    <span className="text-[11px] text-[#20211F]/60 block">
                      Fastest response for design & site visits
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EE] border border-[#E8DFD2] flex items-center justify-center shrink-0 text-[#78816C]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#20211F] block">Consultation Hours</span>
                    <span className="text-xs sm:text-sm text-[#20211F]/75 block">
                      {BUSINESS_INFO.workingHours}
                    </span>
                    <span className="text-[11px] text-[#78816C] block">
                      Site visits available on weekends by appointment
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Rajajipuram Lucknow Coverage Card */}
            <div className="p-5 rounded-2xl bg-[#20211F] text-white text-xs space-y-2">
              <span className="text-[#C5A880] font-bold uppercase tracking-wider block">
                Lucknow Wide Service Area
              </span>
              <p className="text-white/80 leading-relaxed">
                Free site visits & laser measurements conducted across Rajajipuram, Alambagh, Gomti Nagar, Hazratganj, Ashiyana, Indira Nagar, Mahanagar, Chowk, and all Lucknow districts.
              </p>
            </div>

          </div>

          {/* Right Column: In-Page Consultation Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#D8D0C3] shadow-xs text-left">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#78816C] block mb-1">
                Zero Obligation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F]">
                Book a Free Kitchen Design Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#20211F]/70 mt-1">
                Fill this brief form to connect directly with our interior specialists via WhatsApp.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#78816C]/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#78816C]/15 text-[#78816C] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#20211F]">
                  WhatsApp Ready!
                </h4>
                <p className="text-xs sm:text-sm text-[#20211F]/80 max-w-md mx-auto">
                  Your enquiry has been prepared and opened in WhatsApp. If WhatsApp didn't open automatically, you can message us directly at +91 8896013459.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-bold text-[#20211F] bg-white border border-[#D8D0C3] rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#20211F] mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Manish Gupta"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D8D0C3] focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#20211F] mb-1.5">
                      Your WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D8D0C3] focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#20211F] mb-1.5">
                      Locality in Lucknow
                    </label>
                    <select
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D8D0C3] bg-white focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                    >
                      {LUCKNOW_LOCALITIES.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#20211F] mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D8D0C3] bg-white focus:outline-none focus:ring-2 focus:ring-[#78816C]"
                    >
                      <option value="Modular Kitchen (New)">Modular Kitchen (New)</option>
                      <option value="Acrylic Modular Kitchen">Acrylic Modular Kitchen</option>
                      <option value="Kitchen Renovation">Kitchen Renovation</option>
                      <option value="Modular Wardrobes">Modular Wardrobes</option>
                      <option value="Complete Home Interiors">Complete Home Interiors</option>
                      <option value="Smart Storage & Hardware">Smart Storage & Hardware</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#20211F] mb-1.5">
                    Your Requirements / Kitchen Dimensions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Looking for an L-shaped acrylic kitchen with tall pantry for my new flat in Lucknow."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D8D0C3] focus:outline-none focus:ring-2 focus:ring-[#78816C] resize-none"
                  ></textarea>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-600 font-medium">{errorMsg}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Send Consultation Request on WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-[#20211F]/60 text-center mt-2">
                    Direct WhatsApp link to +91 8896013459 • No spam or unwanted sales calls
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
