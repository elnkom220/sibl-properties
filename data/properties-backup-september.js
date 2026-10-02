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
        location: "Abuja",
        category: "Site & Services",
        developer: "Mshel Homes Limited",

        description:
            "A residential property opportunity along Airport Road, before Centenary City, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "1 Bedroom",
                shortPlan: "₦78,107,000",
                longPlan: "₦93,728,400"
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "2 Bedroom",
                shortPlan: "₦119,591,901",
                longPlan: "₦143,510,281"
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "3 Bedroom",
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
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential apartments and duplex options in Wuye, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "1 Bedroom",
                shortPlan: "₦130,625,000",
                longPlan: "₦156,750,000"
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "2 Bedroom",
                shortPlan: "₦224,687,500",
                longPlan: "₦269,625,000"
            },
            {
                optionName: "",
                propertyType: "Semi-Detached Duplex",
                bedrooms: "5 Bedroom + BQ",
                shortPlan: "₦850,859,375",
                longPlan: "₦1,021,031,250"
            },
            {
                optionName: "",
                propertyType: "Fully Detached Duplex",
                bedrooms: "6 Bedroom + BQ",
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
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Premium residential options in Wuye, Abuja.",

        options: [
            {
                optionName: "Nobel",
                propertyType: "Apartment",
                bedrooms: "3 Bedroom",
                shortPlan: "₦191,412,064",
                longPlan: "₦229,705,276.80"
            },
            {
                optionName: "Lumora",
                propertyType: "Terrace Duplex",
                bedrooms: "4 Bedroom",
                shortPlan: "₦309,698,240",
                longPlan: "₦389,531,788.10"
            },
            {
                optionName: "Solara",
                propertyType: "Semi-Detached Duplex",
                bedrooms: "5 Bedroom + 1 BQ",
                shortPlan: "₦475,259,506.76",
                longPlan: "₦570,311,408.11"
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "palm-residence",
        name: "MSHEL Palm Residence",
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential apartments in Kuje, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "1 Bedroom",
                shortPlan: "₦15,900,000",
                longPlan: "₦19,080,000"
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "3 Bedroom",
                shortPlan: "₦38,800,000",
                longPlan: "₦46,560,000"
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "prime-residence",
        name: "MSHEL Prime Residence",
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential apartments in Idu, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "1 Bedroom",
                shortPlan: "₦16,490,880",
                longPlan: "₦20,052,910"
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "elaris-residence",
        name: "MSHEL Elaris Residence",
        location: "Lagos",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential apartments and terrace duplex options in Ajah, Lagos.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "1 Bedroom",
                shortPlan: "₦58,300,000",
                longPlan: "₦69,960,000"
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "2 Bedroom",
                shortPlan: "₦66,000,000",
                longPlan: "₦79,200,000"
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "3 Bedroom",
                shortPlan: "₦99,000,000",
                longPlan: "₦118,800,000"
            },
            {
                optionName: "",
                propertyType: "Terrace Duplex",
                bedrooms: "3 Bedroom",
                shortPlan: "₦99,000,000",
                longPlan: "₦118,800,000"
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "belle-vista",
        name: "MSHEL Belle Vista",
        location: "Abuja",
        category: "Third Party",
        developer: "Third Party",

        description:
            "Third-party residential property opportunities in Kyami, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "1 Bedroom",
                shortPlan: "₦19,508,377",
                longPlan: ""
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "2 Bedroom",
                shortPlan: "₦31,250,000",
                longPlan: ""
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "vine-city",
        name: "MSHEL Vine City",
        location: "Abuja",
        category: "Third Party",
        developer: "Third Party",

        description:
            "Residential apartment opportunity in Apo-Wasa, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "3 Bedroom",
                shortPlan: "₦32,303,926",
                longPlan: ""
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "pine-court",
        name: "MSHEL Pine Court",
        location: "Abuja",
        category: "Third Party",
        developer: "Third Party",

        description:
            "Residential apartment opportunity in Apo-Wasa, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "1 Bedroom",
                shortPlan: "₦13,703,982",
                longPlan: ""
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "horizon",
        name: "MSHEL Horizon",
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential apartments and duplex opportunities in Kukwaba, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "3 Bedroom",
                shortPlan: "₦117,787,500",
                longPlan: "₦158,580,250"
            },
            {
                optionName: "",
                propertyType: "Semi-Detached Duplex",
                bedrooms: "5 Bedroom + BQ",
                shortPlan: "₦263,800,313",
                longPlan: "₦419,000,000"
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "harmony-hills",
        name: "MSHEL Harmony Hills",
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential apartment opportunity in Katampe Extension, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "3 Bedroom",
                shortPlan: "₦102,200,000",
                longPlan: "₦119,000,000"
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "beacon-ville",
        name: "MSHEL Beacon Ville",
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential apartment options in Gaduwa, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "1 Bedroom",
                shortPlan: "₦64,413,500",
                longPlan: "₦77,296,200"
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "2 Bedroom",
                shortPlan: "₦96,520,250",
                longPlan: "₦115,824,300"
            },
            {
                optionName: "",
                propertyType: "Apartment",
                bedrooms: "3 Bedroom",
                shortPlan: "₦160,533,750",
                longPlan: "₦192,640,500"
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "forte-residence",
        name: "MSHEL Forte Residence",
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential terrace duplex opportunity in Apo-Wasa, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Terrace Duplex",
                bedrooms: "4 Bedroom",
                shortPlan: "₦103,285,000",
                longPlan: "₦115,535,760"
            }
        ],

        newsletter: "ultra",
        images: []
    },


    {
        id: "royal-estate",
        name: "MSHEL Royal Estate",
        location: "Abuja",
        category: "Ultra",
        developer: "Mshel Homes Limited",

        description:
            "Residential fully detached duplex opportunity in Sabon Lugbe, Abuja.",

        options: [
            {
                optionName: "",
                propertyType: "Fully Detached Duplex",
                bedrooms: "5 Bedroom",
                shortPlan: "₦64,646,500",
                longPlan: "₦72,256,240"
            }
        ],

        newsletter: "ultra",
        images: []
    }

];

