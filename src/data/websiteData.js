export const BUSINESS_INFO = {
  name: "CAF Modular Kitchen & Interiors",
  shortName: "CAF Interiors",
  tagline: "Transform Your Dream Kitchen Into Reality",
  phone: "+91 8896013459",
  whatsappNumber: "918896013459",
  displayPhone: "+91 88960 13459",
  location: "Rajajipuram, Lucknow, Uttar Pradesh, India",
  primaryLocality: "Rajajipuram",
  city: "Lucknow",
  state: "Uttar Pradesh",
  country: "India",
  established: 2020,
  projectsCompleted: "150+",
  advertisedPricePerSqFt: "₹1,499",
  advertisedOfferTitle: "Acrylic Finish Kitchens — Starting at ₹1,499/sq. ft.*",
  primaryConsultationOffer: "Free Customized 3D Kitchen Design Consultation",
  workingHours: "Monday to Sunday, 10:00 AM – 8:00 PM",
  disclaimer: "Advertised starting price of ₹1,499 per sq. ft. is indicative for acrylic-finish shutters and basic modular configuration. Final pricing depends on actual site measurements, choice of carcass board (HDHMR / Marine Plywood), hardware brands, basket fittings, countertop, and personalized scope of work."
};

export const LUCKNOW_LOCALITIES = [
  "Rajajipuram",
  "Alambagh",
  "Gomti Nagar",
  "Gomti Nagar Extension",
  "Hazratganj",
  "Indira Nagar",
  "Ashiyana",
  "Mahanagar",
  "Vikas Nagar",
  "Jankipuram",
  "Chowk",
  "Telibagh",
  "Vrindavan Yojna",
  "Sushant Golf City",
  "Singar Nagar",
  "Transport Nagar",
  "Other Area in Lucknow"
];

export const KITCHEN_LAYOUTS = [
  {
    id: "l-shaped",
    name: "L-Shaped Kitchen",
    description: "Versatile, open-concept layout that utilizes two adjoining walls — ideal for most Lucknow 2BHK & 3BHK homes.",
    bestFor: "Small to medium floor plans with smooth golden triangle workflow",
    svgType: "L"
  },
  {
    id: "u-shaped",
    name: "U-Shaped Kitchen",
    description: "Wraps along three walls offering maximum countertop space, extensive overhead cabinets, and heavy storage capacity.",
    bestFor: "Independent homes, larger apartments & passionate home cooks",
    svgType: "U"
  },
  {
    id: "parallel",
    name: "Parallel / Galley Kitchen",
    description: "Two opposing counters creating the most efficient chef-grade corridor. Maximizes narrow, long floor areas.",
    bestFor: "High-efficiency cooking with dedicated wet and dry work zones",
    svgType: "P"
  },
  {
    id: "island",
    name: "Island Kitchen",
    description: "Luxury centerpiece providing a freestanding prep counter, breakfast bar, and integrated storage or hob space.",
    bestFor: "Spacious luxury homes, open-plan villas and social entertaining",
    svgType: "I"
  },
  {
    id: "straight",
    name: "Straight / In-Line Kitchen",
    description: "Compact single-wall layout engineered with smart vertical tandem drawers and loft storage to save maximum room.",
    bestFor: "Studio apartments, compact annexes, or open kitchenette living",
    svgType: "S"
  },
  {
    id: "not-sure",
    name: "Not Sure Yet / Need Expert Advice",
    description: "Let our Lucknow interior experts inspect your kitchen dimensions and recommend the ideal ergonomic layout.",
    bestFor: "Homeowners in early construction or renovation planning phase",
    svgType: "Q"
  }
];

export const BUDGET_OPTIONS = [
  { id: "under-1.5l", label: "Under ₹1.5 Lakh", note: "Essential modular setup & compact upgrades" },
  { id: "1.5-3l", label: "₹1.5 Lakh – ₹3 Lakh", note: "Popular sweet spot: Acrylic finish & smart tandem storage" },
  { id: "3-5l", label: "₹3 Lakh – ₹5 Lakh", note: "Premium HDHMR/Plywood, full soft-close & tall pantry" },
  { id: "5l-plus", label: "₹5 Lakh+", note: "Luxury island, top-tier German fittings & bespoke finishes" },
  { id: "need-guidance", label: "Need Guidance", note: "Require custom quotation based on site measurements" }
];

export const PROJECT_TYPES = [
  { id: "new-home", label: "New Home", note: "Fresh kitchen setup for newly purchased flat or house" },
  { id: "renovation", label: "Kitchen Renovation", note: "Upgrading existing civil or outdated kitchen" },
  { id: "complete-interiors", label: "Complete Home Interiors", note: "Kitchen, wardrobes, TV unit & full living design" },
  { id: "exploring", label: "Just Exploring", note: "Gathering ideas and understanding cost breakdown" }
];

export const TIMELINES = [
  { id: "within-30-days", label: "Within 30 Days", note: "Ready to start immediately" },
  { id: "1-3-months", label: "1 – 3 Months", note: "Planning ahead for possession or renovation" },
  { id: "later", label: "Later (3+ Months)", note: "Exploring ideas for future work" },
  { id: "not-decided", label: "Not Decided", note: "Flexible schedule" }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "High-Gloss Champagne Acrylic Kitchen",
    category: "acrylic",
    categoryLabel: "Modern Acrylic",
    layout: "L-Shaped with Tall Pantry",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "Seamless handleless acrylic cabinetry in warm champagne with warm under-cabinet LED strip illumination and quartz countertop.",
    highlights: ["Scratch-resistant Acrylic", "Soft-close Tandem Boxes", "Gola Profile Handleless"]
  },
  {
    id: "gal-2",
    title: "Contemporary Emerald & Brass Kitchen",
    category: "acrylic",
    categoryLabel: "Modern Acrylic",
    layout: "Parallel / Galley",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
    description: "Deep jewel-toned acrylic base units balanced with warm wood lofts and brushed brass accents designed for Indian spices.",
    highlights: ["Moisture-resistant HDHMR Core", "Heavy-load Spice Pull-outs", "Easy-to-wipe Gloss Surface"]
  },
  {
    id: "gal-3",
    title: "Warm Teak & Matte Charcoal Modular Kitchen",
    category: "wooden",
    categoryLabel: "Warm Wooden Finish",
    layout: "L-Shaped with Breakfast Nook",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Natural textured wood grain veneer feel with charcoal matte anti-fingerprint base cabinets for enduring Indian warmth.",
    highlights: ["Waterproof BWP Marine Ply Option", "Telescopic Soft-close Drawers", "Integrated Chimney Ducting"]
  },
  {
    id: "gal-4",
    title: "Minimalist Nordic White & Warm Oak Kitchen",
    category: "white",
    categoryLabel: "Minimalist White",
    layout: "U-Shaped Ergonomic",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    description: "Clean reflective white shutters that bounce natural sunlight, making medium-sized Lucknow apartments feel open and airy.",
    highlights: ["High-reflectivity White Acrylic", "Corner Magic Carousel", "Concealed Trash & Detergent Pullout"]
  },
  {
    id: "gal-5",
    title: "Smart Compact Apartment Modular Kitchen",
    category: "compact",
    categoryLabel: "Space-Saving Compact",
    layout: "Straight Wall with Full Lofts",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    description: "Floor-to-ceiling space optimization built for urban 2BHK apartments in Lucknow with integrated appliances.",
    highlights: ["Full-height Lofts for Large Utensils", "Tandem Wire Pullout Organizers", "Space-maximizing Rolling Shutter"]
  },
  {
    id: "gal-6",
    title: "Grand Statuario Island Kitchen",
    category: "island",
    categoryLabel: "Premium Island",
    layout: "Island + Parallel Wall Units",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80",
    description: "Central monolithic island counter with breakfast seating, premium glass-front pantry tower, and concealed hardware.",
    highlights: ["Freestanding Food Prep Island", "Integrated Bar / Breakfast Counter", "Luxury German Soft-close Hardware"]
  },
  {
    id: "gal-7",
    title: "Floor-to-Ceiling Floor Glass & Acrylic Wardrobe",
    category: "wardrobe",
    categoryLabel: "Modular Wardrobes",
    layout: "Sliding Wardrobe with Profile Lighting",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    description: "Customized bedroom wardrobe with dedicated sari/kurta hanging heights, internal security locker, and smooth sliding doors.",
    highlights: ["Heavy-duty Bottom Rolling Track", "Integrated Concealed LED Strips", "Customized Jewelry & Tie Pullout"]
  },
  {
    id: "gal-8",
    title: "Coordinated Living & Dining Interior Concept",
    category: "living",
    categoryLabel: "Contemporary Living",
    layout: "Open Living & Entertainment Console",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description: "Fluted panel feature wall with floating media console, wooden partition divider, and balanced ambient lighting.",
    highlights: ["Acoustic Fluted Paneling", "Concealed Cable Management", "Coordinated with Kitchen Finishes"]
  }
];

export const SERVICES = [
  {
    id: "modular-kitchens",
    title: "Modular Kitchen Design & Execution",
    badge: "Core Expertise",
    tagline: "Custom layouts engineered for Indian cooking traditions & modern aesthetics",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
    summary: "From compact city flats to expansive villas, we engineer custom modular kitchens tailored to your kitchen dimensions, family cooking style, and storage requirements.",
    features: [
      "Ergonomic Golden Triangle layout planning (Prep, Cook, Clean zones)",
      "Premium Acrylic, High-Gloss Laminate, and Matte PU finish shutters",
      "Termite & moisture-resistant HDHMR and BWP Marine Plywood carcasses",
      "Seamless edge banding to protect edges from grease and moisture",
      "Customized loft storage for pressure cookers, festive utensils, and grain bins"
    ]
  },
  {
    id: "kitchen-renovation",
    title: "Complete Kitchen Renovation",
    badge: "Specialized Service",
    tagline: "Transform outdated concrete counter kitchens into sleek modular spaces",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80",
    summary: "Upgrade your existing Lucknow home kitchen. We manage civil adjustments, pipe relocations, new granite/quartz counter setup, and modern shutter fitments without structural hassles.",
    features: [
      "Civil assessment for existing concrete or kadappa stone platforms",
      "Plumbing and gas pipeline re-routing coordination",
      "Wall tile backsplash replacement and modern under-cabinet lighting",
      "Chimney ducting provisioning and power point realignment",
      "Minimal downtime and systematic phased installation"
    ]
  },
  {
    id: "modular-wardrobes",
    title: "Modular Wardrobes & Closets",
    badge: "Bedroom Storage",
    tagline: "Intelligent internal partitioning customized for your apparel & valuables",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    summary: "Built-to-fit sliding and hinged wardrobes designed for everyday convenience. Maximize vertical bedroom height with tailored hanging, shelving, and concealed locker compartments.",
    features: [
      "Sliding door wardrobes for compact spaces & hinged doors for wide access",
      "Specialized Indian ethnic wear hanging sections (Saris, Sherwanis, Suits)",
      "Integrated pull-out mirror, jewelry organizer trays, and tie racks",
      "Internal lockable safety drawers with heavy-duty telescopic channels",
      "Profile tinted glass or mirror shutter options to visually expand bedrooms"
    ]
  },
  {
    id: "complete-interiors",
    title: "Complete Home Interiors",
    badge: "Full Home Solution",
    tagline: "Harmonious aesthetics across your living, dining, and bedroom spaces",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    summary: "Achieve a cohesive look across your entire Lucknow residence. We combine modular cabinetry with TV entertainment units, foyer partitions, false ceiling lighting, and shoe racks.",
    features: [
      "Floating TV entertainment consoles with fluted louvers and LED coves",
      "Decorative wooden foyer partitions and privacy jaalis",
      "Space-saving cushioned entryway shoe storage units",
      "Dining area crockery display cabinets with toughened glass doors",
      "Synchronized woodgrains and color accents throughout the residence"
    ]
  },
  {
    id: "smart-storage",
    title: "Smart Hardware & Storage Solutions",
    badge: "Interior Hardware",
    tagline: "Zero wasted space with smooth soft-close German & international fittings",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    summary: "Every corner of an Indian kitchen counts. We outfit your kitchen with branded soft-close tandem drawer systems, tall pantry units, spice pullouts, and corner carousels.",
    features: [
      "Double-wall soft-close tandem boxes rated for up to 35-50 kg heavy utensil load",
      "Corner LeMans & Magic Carousels turning awkward blind corners into accessible storage",
      "Multi-tier stainless steel tall pantry pull-out towers for non-perishables",
      "Two-tier bottle & spice pull-outs placed right next to the cooking hob",
      "Hydraulic bi-fold lift-up shutters for effortless overhead access"
    ]
  }
];

export const SMART_STORAGE_ITEMS = [
  {
    title: "Soft-Close Tandem Drawers",
    subtitle: "Heavy Utensil & Thali Storage",
    desc: "Silent glide runners with built-in thali and plate separators holding up to 45 kg effortlessly.",
    icon: "layers"
  },
  {
    title: "Corner Carousel / LeMans Units",
    subtitle: "Zero Blind Corner Wastage",
    desc: "Double swinging trays that glide completely out of deep kitchen corners with a gentle pull.",
    icon: "rotate"
  },
  {
    title: "Tall Pantry Pull-Out Tower",
    subtitle: "6-Tier Dry Grocery Organizer",
    desc: "Centralized pantry tower bringing all snacks, spices, and grains to your fingertips at once.",
    icon: "archive"
  },
  {
    title: "Under-Sink Utility Organizers",
    subtitle: "Detergent & Waste Segregation",
    desc: "Water-resistant stainless steel caddy designed around plumbing traps to maintain cleanliness.",
    icon: "shield"
  },
  {
    title: "Dual Spice & Bottle Pullouts",
    subtitle: "Instant Cooking Access",
    desc: "Narrow 150mm & 200mm pullout racks positioned next to the burner for oils, masalas, and sauces.",
    icon: "grid"
  },
  {
    title: "Hydraulic Bi-Fold Lift Ups",
    subtitle: "Head-Clear Overhead Access",
    desc: "Shutters stay suspended in position while you cook without swinging into your head.",
    icon: "arrowUp"
  }
];

export const PRICING_PRIORITIES = [
  {
    id: "practical",
    badge: "Budget-Conscious & Durable",
    title: "Practical & Everyday",
    target: "Ideal for 2BHK rental investments or budget-smart Lucknow homeowners",
    priceNote: "Advertised acrylic finish starting from ₹1,499/sq. ft.*",
    focus: "Reliable daily utility without unnecessary frills",
    specs: [
      "Carcass: High-Density MR Grade Board / HDHMR base",
      "Shutters: Anti-scratch Matte Acrylic or Premium High-Gloss Laminate",
      "Hardware: Tested soft-close hinges & heavy-duty ball-bearing runners",
      "Storage: Wire basket drawers, dual spice rack, and cutlery tray",
      "Edging: 1mm seamless PVC edge-banding for moisture resistance",
      "Lofts: Standard overhead configuration customized to ceiling height"
    ],
    popularChoice: false
  },
  {
    id: "modern",
    badge: "Most Popular in Lucknow",
    title: "Modern & Storage-Focused",
    target: "Perfect for active family kitchens in Gomti Nagar, Rajajipuram & Ashiyana",
    priceNote: "Custom quotation based on layout & tandem box count",
    focus: "Seamless acrylic shine, tandem drawers & corner accessibility",
    specs: [
      "Carcass: Moisture-Resistant HDHMR (High Density High Moisture Resistance)",
      "Shutters: High-Gloss Mirror Finish Acrylic with Gola handleless profile",
      "Hardware: Branded soft-close tandem boxes (Hettich / Hafele / Ebco options)",
      "Storage: 1 Corner LeMans / Magic Carousel + 3 Tandem utensil drawers",
      "Specialty: Under-cabinet warm profile LED lighting & rolling shutter",
      "Warranty: Branded hardware backed by manufacturer warranties"
    ],
    popularChoice: true
  },
  {
    id: "premium",
    badge: "Architectural & Bespoke",
    title: "Premium Luxury & Island",
    target: "Designed for spacious independent bungalows, villas & luxury apartments",
    priceNote: "Tailored luxury scope with international hardware & accessories",
    focus: "Showcase kitchen with central island, tall pantry & German fittings",
    specs: [
      "Carcass: 100% Calibrated BWP (Boiling Water Proof) Marine Plywood",
      "Shutters: Zero-joint Laser-banded Acrylic / Super-matte Anti-fingerprint PU",
      "Hardware: Premium German soft-close systems (Blum / Hafele / Hettich)",
      "Storage: Full 6-tier stainless pantry tower + motorized lift-up lofts",
      "Centerpiece: Integrated freestanding prep island with breakfast overhang",
      "Aesthetics: Tinted glass profile cabinets with sensor-activated lighting"
    ],
    popularChoice: false
  }
];

export const WHY_CAF_POINTS = [
  {
    title: "150+ Projects Completed",
    desc: "Proven execution across apartments, villas, and renovations in Lucknow since 2020.",
    stat: "150+"
  },
  {
    title: "100% Customized Designs",
    desc: "No rigid readymade box sizes. Every cabinet is sized to fit your room's exact dimensions.",
    stat: "100%"
  },
  {
    title: "Operating Since 2020",
    desc: "Established local business in Rajajipuram with deep understanding of Lucknow homes.",
    stat: "2020"
  },
  {
    title: "Direct Workshop Advantage",
    desc: "Fair, transparent pricing without heavy showroom commission or middleman markups.",
    stat: "Direct"
  },
  {
    title: "Quality Moisture-Resistant Materials",
    desc: "Using trusted HDHMR and BWP Marine Plywood engineered to withstand Indian humidity.",
    stat: "Grade A"
  },
  {
    title: "On-Time Delivery Commitment",
    desc: "Stated service commitment with clear milestone updates from design sign-off to handover.",
    stat: "Timely"
  }
];

export const CUSTOMER_JOURNEY = [
  {
    step: "01",
    title: "Requirement Consultation",
    desc: "Reach out via WhatsApp or phone. Tell us about your layout preferences, cooking habits, and target budget."
  },
  {
    step: "02",
    title: "Site Visit & Laser Measurement",
    desc: "Our Lucknow team visits your home in Rajajipuram or anywhere in Lucknow to record millimeter-accurate site dimensions."
  },
  {
    step: "03",
    title: "3D Design & Layout Review",
    desc: "Review your customized 3D kitchen layout, color palette, and storage configuration before any fabrication begins."
  },
  {
    step: "04",
    title: "Transparent Quotation & Agreement",
    desc: "Receive a clear, itemized quote detailing board grades, shutter finishes, hardware brands, and agreed schedule."
  },
  {
    step: "05",
    title: "Precision Installation & Handover",
    desc: "Modules are pre-engineered and assembled on-site with clean alignment, soft-close calibration, and final handover."
  }
];

export const MATERIAL_GUIDE = [
  {
    category: "Carcass Materials (Base Core)",
    items: [
      {
        name: "HDHMR (High Density High Moisture Resistance)",
        rating: "Best Value & Recommended",
        description: "Dense, moisture-resistant engineered green board. Superior screw holding capacity and warp-resistance for modern modular cabinets.",
        bestFor: "Dry & semi-wet zones, overhead lofts, and wardrobe carcasses."
      },
      {
        name: "BWP Marine Plywood (Boiling Water Proof)",
        rating: "Maximum Water Protection",
        description: "IS:710 certified plywood bonded with phenolic resin. Resists boiling water, termites, and high humidity.",
        bestFor: "Under-sink cabinets and high-moisture kitchen zones."
      },
      {
        name: "Commercial / MR Plywood",
        rating: "Budget-Friendly",
        description: "Moisture-resistant plywood suitable for bedrooms, wardrobe carcasses, and dry living areas in budget-conscious projects.",
        bestFor: "Wardrobe partitions and living room cabinetry."
      }
    ]
  },
  {
    category: "Shutter Surface Finishes",
    items: [
      {
        name: "Acrylic Finish (Advertised from ₹1,499/sq. ft.*)",
        rating: "High-Gloss Luxury",
        description: "High-gloss, reflective finish resembling glass. Highly resistant to scratches, UV discoloration, and easy to wipe clean after Indian tadkas.",
        bestFor: "Modern, bright kitchens wanting luxury showroom aesthetics."
      },
      {
        name: "High-Gloss / Matte Laminate",
        rating: "Durable & Cost-Effective",
        description: "0.8mm to 1mm decorative sheets available in diverse woodgrains, solid pastels, and textured stone motifs.",
        bestFor: "Heavy everyday use, budget projects, and rental properties."
      },
      {
        name: "PU (Polyurethane) Paint Coating",
        rating: "Ultra-Premium Seamless",
        description: "Direct spray-coated paint baked to perfection. Seamless edges without edge-band lines, available in super-matte or gloss.",
        bestFor: "Handleless shaker designs, luxury villas, and bespoke interiors."
      }
    ]
  }
];

export const FAQS = [
  {
    question: "How is modular kitchen pricing calculated in Lucknow?",
    answer: "Modular kitchen pricing is calculated based on the total square footage of cabinetry (base units, wall cabinets, and lofts), the choice of carcass material (HDHMR vs. BWP Marine Plywood), the shutter finish (Acrylic, Laminate, or PU), and the selected hardware fittings (tandem boxes, corner units, pantry towers). We provide an itemized quote so you know exactly what you are paying for."
  },
  {
    question: "What does the starting price of ₹1,499 per sq. ft. include?",
    answer: "The advertised ₹1,499/sq. ft. is an introductory starting rate for acrylic-finish shutters with standard carcass specifications. The final cost of a complete kitchen project will vary based on your room measurements, internal wire baskets vs. tandem drawer systems, corner units, countertop fabrication, and custom hardware choices. Contact CAF for a transparent, no-obligation quotation tailored to your exact floor plan."
  },
  {
    question: "How long does a kitchen project take from design to installation?",
    answer: "A standard modular kitchen typically takes between 2 to 4 weeks from final 3D design approval and material confirmation to complete on-site installation. Because modules are precision-cut in the workshop, on-site assembly usually takes only 2 to 4 days, minimizing disruption to your household."
  },
  {
    question: "Can you renovate or convert an existing concrete counter kitchen?",
    answer: "Yes. Many Lucknow homes have existing concrete or marble slab counters. We can assess your existing setup during a site visit and either fit modular cabinets beneath and above the existing slab, or coordinate civil dismantling and replace it with a modern modular layout."
  },
  {
    question: "Which areas in Lucknow does CAF provide services to?",
    answer: "We are based in Rajajipuram and serve homeowners across all of Lucknow, including Rajajipuram, Alambagh, Gomti Nagar, Gomti Nagar Extension, Hazratganj, Indira Nagar, Ashiyana, Mahanagar, Chowk, Telibagh, Vrindavan Yojna, Sushant Golf City, Vikas Nagar, and surrounding localities."
  },
  {
    question: "How do I book a free kitchen design consultation?",
    answer: "You can simply use our interactive 'Plan Your Dream Kitchen' tool on this page to select your preferences, or message us directly on WhatsApp at +91 8896013459. Our design team will connect with you to review your floor plan and arrange a site visit."
  },
  {
    question: "What materials do you recommend for heavy Indian cooking?",
    answer: "For Indian cooking with spices, oils, and moisture, we strongly recommend HDHMR or BWP Marine Plywood for the carcass, and high-gloss Acrylic shutters. Acrylic is non-porous, doesn't absorb turmeric or oil stains, and can easily be wiped down with a damp microfiber cloth."
  }
];
