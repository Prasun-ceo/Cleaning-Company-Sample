export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  basePrice: number;
  popular?: boolean;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  avatar: string;
}

export interface CityInfo {
  name: string;
  slug: string;
  county: string;
  zipCodes: string[];
  description: string;
  popularServices: string[];
}

export const BUSINESS_INFO = {
  name: "Cleanfy Home Services",
  shortName: "CLEANFY",
  mainCity: "Austin",
  region: "Greater Central Texas",
  county1: "Travis County",
  county2: "Williamson County",
  phone: "(512) 555-0199",
  phoneRaw: "5125550199",
  email: "hello@cleanfyhomes.com",
  address: "100 Congress Ave, Suite 2000, Austin, TX 78701",
  clientsCount: "1,000+",
  locationsCount: "50+",
  yearsExperience: "12+",
  rating: "4.9",
  reviewsCount: "512",
  googleProfileUrl: "https://maps.google.com/?q=Cleanfy+Home+Services+Austin+TX",
  bbbProfileUrl: "https://www.bbb.org",
  instagramUrl: "https://instagram.com/cleanfyhomes",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "organizing",
    name: "Organizing",
    shortDesc: "Declutter and organize your space for better living. We help create clean, functional, stress-free homes.",
    fullDesc: "Our professional organizing service transforms messy closets, chaotic pantries, cluttered garages, and unorganized home offices into harmonious, beautifully structured spaces with intuitive systems.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop&q=80",
    basePrice: 120,
    features: [
      "Closet & Wardrobe Decluttering",
      "Pantry & Kitchen Cupboard Setup",
      "Garage & Storage Sorting",
      "Home Office Systemization",
      "Custom Labeling & Container Placement"
    ]
  },
  {
    id: "regular-house-cleaning",
    name: "Regular House Cleaning",
    shortDesc: "Keep your home clean on a regular schedule. Dusting, vacuuming, mopping, and surface cleaning.",
    fullDesc: "Scheduled recurring maintenance designed to keep your living environment effortlessly fresh. Choose from weekly, bi-weekly, or monthly visits tailored to your family's routine.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
    basePrice: 140,
    popular: true,
    features: [
      "Dusting all surfaces, light fixtures, & frames",
      "Vacuuming carpets & rugs, mopping hard floors",
      "Sanitizing kitchen countertops & sink",
      "Disinfecting bathrooms (toilet, tub, sink)",
      "Emptying trash bins & replacing liners"
    ]
  },
  {
    id: "move-in-move-out",
    name: "Move-In / Move-Out Cleaning",
    shortDesc: "Full cleaning before or after moving. Ideal for renters, homeowners, and real estate.",
    fullDesc: "A comprehensive top-to-bottom clean ensuring your former property passes lease inspection or your new home is 100% sanitized and spotless before you unpack.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80",
    basePrice: 240,
    popular: true,
    features: [
      "Deep interior cabinet & drawer wipe-down",
      "Inside oven & refrigerator sanitization",
      "Detailed baseboards, window sills, & door frames",
      "Complete bathroom tile & grout scrubbing",
      "Spot cleaning walls & light switch plates"
    ]
  },
  {
    id: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    shortDesc: "Fast turnover cleaning for short-term rentals. Keep your property guest-ready every time.",
    fullDesc: "Reliable, high-speed turnover service for short-term vacation rentals and Airbnb hosts. We ensure 5-star cleanliness reviews, laundry turnover, and restock tracking.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
    basePrice: 110,
    features: [
      "Linen & towel wash/replace turnover",
      "Restocking guest amenities & toiletries",
      "Sanitizing high-touch guest surfaces",
      "Staging beds & pillows for guest arrival",
      "Property status reporting & photo check"
    ]
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    shortDesc: "Detailed top-to-bottom cleaning for a fresh start. Perfect for first-time service or seasonal cleaning.",
    fullDesc: "An intensive thorough scrub tackling accumulated dust, grime, heavy grease, scale, and overlooked nooks. Recommended prior to starting recurring service or for spring cleaning.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
    basePrice: 210,
    popular: true,
    features: [
      "Hand washing baseboards, trim, & interior doors",
      "Deep scrub of kitchen backsplash & stovetop grease",
      "Limescale removal on shower glass & fixtures",
      "Ceiling fan blades, vents, & high ledges",
      "Under and behind accessible furniture cleaning"
    ]
  },
  {
    id: "post-construction",
    name: "Post-Construction Cleaning",
    shortDesc: "Remove dust, debris, and construction residue after renovation. We make your space clean, safe, and move-in ready.",
    fullDesc: "Specialized post-renovation cleanup targeting ultrafine drywall dust, plaster, paint splatters, and construction residue so your newly renovated home shines.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80",
    basePrice: 280,
    features: [
      "Fine drywall dust removal from all surfaces",
      "Wiping interior window frames & glass panes",
      "Vacuuming air vents, ducts, & light fixtures",
      "Scrubbing hardwood floors & grout lines",
      "Paint overspray & sticker residue removal"
    ]
  }
];

export const TRUST_STATS = [
  { value: "50+", label: "Locations Serving" },
  { value: "1,000+", label: "Happy Clients" },
  { value: "12+", label: "Years Experience" }
];

export const WHY_CHOOSE_US = [
  {
    title: "Flexible Scheduling",
    desc: "Weekly, bi-weekly, or one-time visits tailored around your busy calendar.",
    icon: "Calendar"
  },
  {
    title: "Fully Insured",
    desc: "Your home is always protected with $2M liability & worker coverage.",
    icon: "ShieldCheck"
  },
  {
    title: "Attention to Detail",
    desc: "We clean thoroughly, tackling corners and hidden dust, not just surfaces.",
    icon: "Sparkles"
  },
  {
    title: "Eco-Friendly Products",
    desc: "100% non-toxic, plant-based products safe for families, kids, and pets.",
    icon: "Leaf"
  },
  {
    title: "Trusted Team",
    desc: "Rigorously background-checked, vetted, and trained cleaning specialists.",
    icon: "UserCheck"
  }
];

export const ROOM_CHECKLISTS = {
  Kitchen: [
    "Countertops & backsplashes sanitized",
    "Sink, faucet, & fixtures polished",
    "Stovetop exterior deep scrubbed",
    "Appliance exteriors wiped (fridge, oven, microwave)",
    "Cabinet fronts cleaned",
    "Floors vacuumed & mopped",
    "Trash emptied & bin disinfected"
  ],
  Bathrooms: [
    "Toilets sanitized inside & out",
    "Showers, tubs, & tile grout scrubbed",
    "Sinks & vanities disinfected",
    "Mirrors cleaned streak-free",
    "Fixtures & chrome polished",
    "Surfaces dusted & disinfected",
    "Floors vacuumed & hand mopped"
  ],
  LivingAreas: [
    "Dusting all furniture, shelves, & decor",
    "Vacuuming carpets & area rugs",
    "Mopping all hard surface flooring",
    "Furniture surfaces wiped clean",
    "Baseboards & door frames dusted as needed",
    "High-touch areas (switches, handles) disinfected"
  ],
  Bedrooms: [
    "Dusting ledges, tables, & nightstands",
    "Vacuuming carpets & under bed edges",
    "Floors swept & mopped",
    "Mirrors cleaned streak-free",
    "Surface cleaning & clutter organizing",
    "Bed making & pillow staging if requested"
  ]
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does house cleaning cost?",
    answer: "Pricing depends on home size, condition and type of service. We provide transparent custom quotes so clients only pay for what they need, starting at $110 for standard recurring services."
  },
  {
    question: "What's the difference between regular and deep cleaning?",
    answer: "Regular cleaning maintains the home on a routine schedule with essential surface maintenance. Deep cleaning is more detailed and includes buildup removal, baseboards, door frames, inside appliances, and hard-to-reach areas."
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, most clients are not home during cleanings. Secure access can easily be arranged through a keyless lockbox, door code, or leasing office instructions."
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes, all professional HEPA vacuum equipment, microfiber cloths, and eco-friendly products are provided. Our products are 100% non-toxic and safe for homes with kids and pets."
  },
  {
    question: "How long does a cleaning take?",
    answer: "It depends on home size and service type. Most regular cleanings take 2 to 4 hours with our experienced 2-person professional team."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    location: "West Lake Hills, Austin",
    rating: 5,
    date: "2 weeks ago",
    service: "Deep Cleaning",
    text: "Cleanfy completely transformed my 4-bedroom home! The cleaners were punctual, unbelievably thorough, and spent extra time on our kitchen backsplash. Worth every single penny!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    name: "David & Karen R.",
    location: "Round Rock, TX",
    rating: 5,
    date: "1 month ago",
    service: "Regular House Cleaning",
    text: "We've had Cleanfy on a bi-weekly schedule for over a year now. Coming home after work on cleaning days feels like stepping into a 5-star boutique hotel. Outstanding service!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    name: "Marcus Vance",
    location: "Downtown Austin",
    rating: 5,
    date: "3 weeks ago",
    service: "Move-In / Move-Out",
    text: "Needed a last-minute move-out clean for my rental condo to guarantee full security deposit return. Cleanfy showed up on time, cleaned inside every cabinet and oven, and got me 100% deposit back!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "4",
    name: "Elena Rostova",
    location: "Cedar Park, TX",
    rating: 5,
    date: "A month ago",
    service: "Airbnb Cleaning",
    text: "I manage 3 Airbnb properties in Austin. Cleanfy's turnover team has never missed a single booking window. My guest reviews consistently praise the spotless cleanliness!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "5",
    name: "Michael Chen",
    location: "Lakeway, TX",
    rating: 5,
    date: "2 months ago",
    service: "Post-Construction",
    text: "After our kitchen remodel, drywall dust was everywhere. Cleanfy's post-construction team wiped down every surface and duct. You couldn't find a speck of dust left!",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  }
];

export const MAIN_CITIES: CityInfo[] = [
  {
    name: "Austin",
    slug: "austin",
    county: "Travis County",
    zipCodes: ["78701", "78702", "78703", "78704", "78731", "78746", "78759"],
    description: "Top-rated residential house cleaning and maid services throughout central, downtown, west, and south Austin.",
    popularServices: ["Deep Cleaning", "Regular House Cleaning", "Move-In / Move-Out"]
  },
  {
    name: "Round Rock",
    slug: "round-rock",
    county: "Williamson County",
    zipCodes: ["78664", "78665", "78681"],
    description: "Trusted house cleaning for busy families in Round Rock, Forest Creek, and Teravista communities.",
    popularServices: ["Regular House Cleaning", "Organizing", "Deep Cleaning"]
  },
  {
    name: "Cedar Park",
    slug: "cedar-park",
    county: "Williamson County",
    zipCodes: ["78613", "78630"],
    description: "Eco-friendly home cleaning and recurring maid services in Cedar Park and Buttercup Creek.",
    popularServices: ["Regular House Cleaning", "Deep Cleaning"]
  },
  {
    name: "Pflugerville",
    slug: "pflugerville",
    county: "Travis County",
    zipCodes: ["78660", "78691"],
    description: "Reliable, background-checked home cleaners serving Pflugerville homeowners and renters.",
    popularServices: ["Move-In / Move-Out", "Regular House Cleaning"]
  },
  {
    name: "Georgetown",
    slug: "georgetown",
    county: "Williamson County",
    zipCodes: ["78626", "78628", "78633"],
    description: "Detailed home cleaning services for historic Georgetown homes and Sun City residences.",
    popularServices: ["Deep Cleaning", "Organizing", "Regular House Cleaning"]
  },
  {
    name: "Lakeway",
    slug: "lakeway",
    county: "Travis County",
    zipCodes: ["78734", "78738"],
    description: "Luxury residential cleaning and waterfront home maintenance in Lakeway and Bee Cave.",
    popularServices: ["Deep Cleaning", "Regular House Cleaning", "Airbnb Cleaning"]
  },
  {
    name: "Leander",
    slug: "leander",
    county: "Williamson County",
    zipCodes: ["78641", "78646"],
    description: "Professional house cleaning and post-construction cleanup for fast-growing Leander neighborhoods.",
    popularServices: ["Post-Construction Cleaning", "Regular House Cleaning"]
  },
  {
    name: "Bee Cave",
    slug: "bee-cave",
    county: "Travis County",
    zipCodes: ["78738"],
    description: "High-quality home cleaning services for Bee Cave estates and Spanish Oaks residences.",
    popularServices: ["Deep Cleaning", "Organizing"]
  },
  {
    name: "West Lake Hills",
    slug: "west-lake-hills",
    county: "Travis County",
    zipCodes: ["78746"],
    description: "Premier residential cleaning for Westlake and Eanes ISD communities with personalized care.",
    popularServices: ["Deep Cleaning", "Regular House Cleaning"]
  },
  {
    name: "Kyle",
    slug: "kyle",
    county: "Hays County",
    zipCodes: ["78640"],
    description: "Affordable and dependable house cleaning services for families in Kyle and Plum Creek.",
    popularServices: ["Move-In / Move-Out", "Regular House Cleaning"]
  }
];

export const ALL_SERVICE_LOCATIONS: string[] = [
  "Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Lakeway", "Leander", "Bee Cave", "West Lake Hills", "Kyle",
  "Buda", "Dripping Springs", "Manor", "Hutto", "Taylor", "Elgin", "Bastrop", "Spicewood", "Lago Vista", "Jonestown",
  "Point Venture", "Volente", "Rollingwood", "Barton Creek", "Sunset Valley", "Lost Creek", "Del Valle", "Manchaca", "San Marcos", "Wimberley",
  "Lockhart", "Luling", "Smithville", "Coupland", "Granger", "Jarrell", "Liberty Hill", "Florence", "Thrall", "Weir",
  "Walburg", "Bertram", "Burnet", "Marble Falls", "Horseshoe Bay", "Kingsland", "Granite Shoals", "Highland Haven", "Meadowlakes", "Cottonwood Shores",
  "Briarcliff", "Oak Hill", "Tarrytown", "Hyde Park", "Mueller", "Circle C Ranch", "Steiner Ranch", "Avery Ranch", "Teravista", "Forest Creek",
  "Falconhead", "Spanish Oaks", "Belterra", "Caliterra", "Sweetwater", "Rough Hollow", "Serene Hills", "Senna Hills", "Rob Roy", "Seven Oaks",
  "Davenport Ranch", "Pemberton Heights", "Old West Austin", "Allandale", "Crestview", "Brentwood", "Rosedale", "Bouldin Creek", "Travis Heights", "Zilker",
  "South Lamar", "East Austin", "Windsor Park", "University Hills", "Cherrywood", "North Shoal Creek", "Milwood", "Wells Branch", "Jollyville", "Anderson Mill",
  "Great Hills", "Cat Mountain", "Northwest Hills", "Balcones Village", "River Place", "Apache Shores", "Highland Park West", "Gaston Park", "St. Johns", "South Congress"
].sort();

export const BLOG_POSTS = [
  {
    id: "deep-cleaning-checklist",
    title: "The Ultimate Spring Deep Cleaning Checklist for Homeowners",
    excerpt: "Learn how professional cleaners scrub every room efficiently, from ceiling fans to hidden baseboards.",
    date: "October 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "eco-friendly-cleaning",
    title: "Why Eco-Friendly Products Are Essential for Homes with Pets",
    excerpt: "Discover why plant-based non-toxic cleaners protect your dog or cat from harsh chemical residue.",
    date: "September 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "airbnb-5star-cleanliness",
    title: "How to Achieve 5-Star Cleanliness Reviews on Airbnb Every Time",
    excerpt: "Turnover strategies and checklist items that top superhosts use to impress short-term guests.",
    date: "September 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80"
  }
];
