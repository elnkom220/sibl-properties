const siteSettings = {
    currentEdition: "October 2026",
    nextUpdate: "To be confirmed",
    newsletters: {
        siteServices: "newsletters/october-site-services-2026.pdf",
        ultra: "newsletters/october-ultra-2026.pdf"
    },
    priceNotice: "Prices, payment plans and availability are subject to change. Please confirm the current offer before making a purchase.",
    sourceNote: "Curated from the October 2026 MSHEL Homes Site & Services and Ultra newsletters. Third-party sales are excluded."
};

const properties = [
    {
        id: "grand-reserve-land", product: "land", name: "Mshel Grand Reserve", location: "Airport Road, Abuja",
        category: "LAND", plotSize: "400 sqm", prototype: "3 Bedroom Fully Detached",
        description: "Nigeria's first integrated luxury lifestyle city on Airport Road, Abuja, according to the October Site & Services newsletter.",
        images: ["images/properties/grand-reserve-400sqm.jpg"],
        options: [{ propertyType: "Estate Land", plotSize: "400 sqm", price: 193000000, duration: "4 months / 8 months", shortPlan: "₦193,000,000", longPlan: "₦216,160,000" }]
    },
    {
        id: "elite-villas-land", product: "land", name: "Mshel Elite Villas", location: "Asokoro, Abuja",
        category: "LAND", plotSize: "250 sqm", prototype: "4 Bedroom Semi-Detached Duplex",
        description: "A modern residential community in Asokoro Main spanning 18 hectares, with FCDA C of O approval and extensive amenities.",
        images: ["images/properties/elite-villas-250sqm.jpg"],
        options: [{ propertyType: "Estate Land", plotSize: "250 sqm", price: 218625000, duration: "4 months / 8 months", shortPlan: "₦218,625,000", longPlan: "₦244,860,000" }]
    },
    {
        id: "groove-estate-land", product: "land", name: "Mshel Groove Estate", location: "Wuye, Abuja",
        category: "LAND", plotSize: "350 sqm", prototype: "5 Bedroom Semi-Detached Duplex",
        description: "A premium estate in Wuye with recreation areas, swimming pool, tennis court and lush green areas.",
        images: ["images/properties/groove-estate-350sqm.jpg"],
        options: [{ propertyType: "Estate Land", plotSize: "350 sqm", price: 276699086, duration: "2 months / 6 months", shortPlan: "₦276,699,086", longPlan: "₦309,902,976" }]
    },
    {
        id: "hutu-exclusive-land", product: "land", name: "Mshel Hutu Exclusive Phase 1 & 2", location: "Airport Road / Centenary City, Abuja",
        category: "LAND", plotSize: "150 sqm", prototype: "3 Bedroom Terrace Duplex",
        description: "An estate-land opportunity within Mshel Hutu Exclusive, a large lifestyle development along Airport Road, Abuja.",
        images: ["images/properties/hutu-exclusive-150sqm.jpg"],
        options: [{ propertyType: "Estate Land", plotSize: "150 sqm", price: 24698520, duration: "4 months / 8 months", shortPlan: "₦24,698,520", longPlan: "₦27,662,342" }]
    },
    {
        id: "horizon-estate-land", product: "land", name: "Mshel Horizon Estate", location: "Kukwaba, Abuja",
        category: "LAND", plotSize: "250 sqm", prototype: "5 Bedroom Semi-Detached Duplex + BQ",
        description: "An FCDA-approved estate land development in Kukwaba near City Gate and House on the Rock Church.",
        images: ["images/properties/horizon-estate-250sqm.jpg"],
        options: [{ propertyType: "Estate Land", plotSize: "250 sqm", price: 142230000, duration: "2 months / 6 months", shortPlan: "₦142,230,000", longPlan: "₦159,297,600" }]
    },
    {
        id: "oasis-court-land", product: "land", name: "Mshel Oasis Court", location: "Apo-Wasa, Abuja",
        category: "LAND", plotSize: "250 sqm", prototype: "4 Bedroom Semi-Detached Duplex",
        description: "An FCDA-approved estate land development in Apo-Wasa with planned infrastructure including perimeter fencing, gatehouse, internal roads, drainage and streetlights.",
        images: ["images/properties/oasis-court-250sqm.jpg"],
        options: [{ propertyType: "Estate Land", plotSize: "250 sqm", price: 9897845.76, duration: "2 months / 6 months", shortPlan: "₦9,897,845.76", longPlan: "₦11,085,587.30" }]
    },

    {
        id: "carlton-residences", product: "home", name: "Mshel Carlton Residences", location: "Maitama, Abuja",
        category: "APARTMENTS & HOMES", propertyType: "Apartment", bedrooms: "3 Bedroom",
        description: "A Maitama residence featuring a pool, gym, badminton court, children's park and clubhouse.",
        images: ["images/properties/carlton-3br.jpg"],
        options: [{ propertyType: "Apartment", bedrooms: "3 Bedroom", price: 348000000, duration: "6 months / 12 months", shortPlan: "₦348,000,000", longPlan: "₦417,600,000" }]
    },
    {
        id: "elite-villas-home", product: "home", name: "Mshel Elite Villas", location: "Asokoro, Abuja",
        category: "APARTMENTS & HOMES", propertyType: "Apartment", bedrooms: "2 Bedroom",
        description: "Residential apartments within the 18-hectare Mshel Elite Villas community in Asokoro Main.",
        images: ["images/properties/elite-villas-2br.jpg"],
        options: [{ propertyType: "Apartment", bedrooms: "2 Bedroom", price: 226875000, duration: "6 months / 12 months", shortPlan: "₦226,875,000", longPlan: "₦272,250,000" }]
    },
    {
        id: "groove-estate-home", product: "home", name: "Mshel Groove Estate", location: "Wuye, Abuja",
        category: "APARTMENTS & HOMES", propertyType: "Apartment", bedrooms: "1 Bedroom",
        description: "A Wuye residential development offering apartment living within a premium estate setting.",
        images: ["images/properties/groove-estate-1br.jpg"],
        options: [{ propertyType: "Apartment", bedrooms: "1 Bedroom", price: 143687500, duration: "6 months / 12 months", shortPlan: "₦143,687,500", longPlan: "₦172,425,000" }]
    },
    {
        id: "signature-residence", product: "home", name: "Mshel Signature Residence", location: "Wuye, Abuja",
        category: "APARTMENTS & HOMES", propertyType: "Apartment", bedrooms: "3 Bedroom",
        description: "A private luxury enclave in Wuye with smart-home features, clubhouse, gym, swimming pool and other amenities.",
        images: ["images/properties/signature-residence-3br.jpg"],
        options: [{ propertyType: "Apartment", bedrooms: "3 Bedroom", name: "Nobel", price: 210553270, duration: "6 months / 12 months", shortPlan: "₦210,553,270", longPlan: "₦252,663,924" }]
    },
    {
        id: "hutu-exclusive-home", product: "home", name: "Mshel Hutu Exclusive", location: "Airport Road, Before Centenary City, Abuja",
        category: "APARTMENTS & HOMES", propertyType: "Apartment", bedrooms: "1 Bedroom",
        description: "A 1-bedroom apartment option within Mshel Hutu Exclusive, the Airport Road lifestyle development.",
        images: ["images/properties/hutu-exclusive-1br.jpg"],
        options: [{ propertyType: "Apartment", bedrooms: "1 Bedroom", price: 85971700, duration: "12 months / 18 months", shortPlan: "₦85,971,700", longPlan: "₦103,166,040" }]
    },
    {
        id: "horizon-home", product: "home", name: "Mshel Horizon", location: "Kukwaba, Abuja",
        category: "APARTMENTS & HOMES", propertyType: "Apartment", bedrooms: "3 Bedroom",
        description: "A 3-bedroom apartment option in the FCDA-approved Mshel Horizon development in Kukwaba.",
        images: ["images/properties/horizon-3br.jpg"],
        options: [{ propertyType: "Apartment", bedrooms: "3 Bedroom", price: 136104500, duration: "6 months / 12 months", shortPlan: "₦136,104,500", longPlan: "₦158,580,250" }]
    }
];
