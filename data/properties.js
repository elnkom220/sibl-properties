const siteSettings = {
    currentEdition: "September 2026",
    nextUpdate: "October 1, 2026",

    newsletters: {
        siteServices: "newsletters/current-site-services.pdf",
        ultra: "newsletters/current-ultra.pdf"
    },

    priceNotice:
        "Prices, payment plans and availability are subject to change. Please confirm the current offer before making a purchase."
};

const properties = [
    {
        id: "hutu-exclusive",
        name: "Mshel Hutu Exclusive",
        category: "Site & Services",
        location: "Airport Road, before Centenary City, Abuja",
        developer: "Mshel Homes Limited",

        description:
            "A residential property opportunity along Airport Road, before Centenary City, Abuja.",

        options: [
            {
                type: "1 Bedroom Apartment",
                shortPlan: "₦78,107,000",
                longPlan: "₦93,728,400"
            },
            {
                type: "2 Bedroom Apartment",
                shortPlan: "₦119,591,901",
                longPlan: "₦143,510,281"
            },
            {
                type: "3 Bedroom Apartment",
                shortPlan: "₦152,423,551",
                longPlan: "₦182,908,262"
            }
        ],

        newsletter: "siteServices",
        images: []
    },

    {
        id: "groove-estate",
        name: "Groove Estate",
        category: "Ultra",
        location: "Wuye, Abuja",
        developer: "Mshel Homes Limited",

        description:
            "Residential apartments and duplex options in Wuye, Abuja.",

        options: [
            {
                type: "1 Bedroom Apartment",
                shortPlan: "₦130,625,000",
                longPlan: "₦156,750,000"
            },
            {
                type: "2 Bedroom Apartment",
                shortPlan: "₦224,687,500",
                longPlan: "₦269,625,000"
            },
            {
                type: "5 Bedroom Semi-Detached Duplex + BQ",
                shortPlan: "₦850,859,375",
                longPlan: "₦1,021,031,250"
            },
            {
                type: "6 Bedroom Detached Duplex + BQ",
                shortPlan: "₦932,500,000",
                longPlan: "₦1,119,000,000"
            }
        ],

        newsletter: "ultra",
        images: []
    },

    {
        id: "signature-residence",
        name: "Signature Residence",
        category: "Ultra",
        location: "Wuye, Abuja",
        developer: "Mshel Homes Limited",

        description:
            "Premium residential options in Wuye, Abuja.",

        options: [
            {
                type: "Nobel — 3 Bedroom Apartment",
                shortPlan: "₦191,412,064",
                longPlan: "₦229,705,276.80"
            },
            {
                type: "Lumora — 4 Bedroom Terrace Duplex",
                shortPlan: "₦309,698,240",
                longPlan: "₦389,531,788.10"
            },
            {
                type: "Solara — 5 Bedroom Semi-Detached Duplex + 1 BQ",
                shortPlan: "₦475,259,506.76",
                longPlan: "₦570,311,408.11"
            }
        ],

        newsletter: "ultra",
        images: []
    }
];
