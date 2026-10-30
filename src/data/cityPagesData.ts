export interface CityPageDetail {
  slug: string;
  cityName: string;
  state: string;
  county: string;
  seoTitle: string;
  metaDescription: string;
  heroStatement: string;
  introParagraphs: string[];
  neighborhoods: string[];
  zipCodes: string[];
  nearbyCities: { name: string; slug: string }[];
  mapEmbedUrl: string;
  localTestimonial: {
    clientName: string;
    neighborhood: string;
    text: string;
    rating: number;
    service: string;
  };
  localFaqs: {
    question: string;
    answer: string;
  }[];
}

export const CITY_PAGES_DATA: Record<string, CityPageDetail> = {
  "austin": {
    slug: "austin",
    cityName: "Austin",
    state: "TX",
    county: "Travis County",
    seoTitle: "House Cleaning & Organizing in Austin, TX | Cleanfy Home Services",
    metaDescription: "Top-rated residential house cleaning and organizing in Austin, TX. Serving Downtown, Tarrytown, South Congress, Hyde Park, and Mueller with insured, eco-friendly maid services.",
    heroStatement: "Cleanfy Home Services proudly provides 5-star house cleaning, deep scrubbing, and organizing throughout Austin, TX.",
    introParagraphs: [
      "Austin is a vibrant, fast-growing city where busy schedules, tech careers, and outdoor outdoor activities leave little extra time for weekend house chores. Cleanfy has provided dependable, eco-friendly residential cleaning across Austin for over 12 years.",
      "From historic Craftsman homes in Hyde Park and modern high-rise condos in Downtown Austin to family residences in Circle C Ranch, Mueller, and Tarrytown, our background-checked cleaning crews understand the unique care each home type requires.",
      "We dispatch local teams throughout Austin daily, guaranteeing punctual arrival windows, non-toxic plant-based cleaning supplies, and a 100% satisfaction pass on every visit."
    ],
    neighborhoods: ["Downtown Austin", "Tarrytown", "South Congress (SoCo)", "Hyde Park", "Mueller", "Circle C Ranch", "Zilker", "Bouldin Creek", "Rosedale", "Barton Creek"],
    zipCodes: ["78701", "78702", "78703", "78704", "78731", "78746", "78759", "78739"],
    nearbyCities: [
      { name: "West Lake Hills", slug: "west-lake-hills" },
      { name: "Lakeway", slug: "lakeway" },
      { name: "Pflugerville", slug: "pflugerville" },
      { name: "Round Rock", slug: "round-rock" },
      { name: "Cedar Park", slug: "cedar-park" },
      { name: "Bee Cave", slug: "bee-cave" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220491.73482703816!2d-97.89348560882193!3d30.30746243296181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc0391%3A0x5d7f4e1b0080d901!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Sarah Miller",
      neighborhood: "Tarrytown, Austin",
      text: "Cleanfy has been cleaning our 4-bedroom home in Tarrytown bi-weekly for two years. They are always on time, incredibly detailed, and leave our marble countertops sparkling!",
      rating: 5,
      service: "Regular House Cleaning"
    },
    localFaqs: [
      {
        question: "How much does house cleaning cost in Austin, TX?",
        answer: "Pricing in Austin starts at $110 to $140 for regular maintenance cleanings and varies depending on bedrooms, bathrooms, and square footage. Get a free instant quote online in 60 seconds!"
      },
      {
        question: "How quickly can Cleanfy dispatch a cleaning team in Austin?",
        answer: "We have multiple dedicated crews stationed across Central, South, and North Austin daily, enabling same-week and often next-day service availability."
      },
      {
        question: "Are your cleaning products safe for Austin homes with pets?",
        answer: "Yes! All Cleanfy products are 100% plant-based, non-toxic, and hypoallergenic—completely safe for dogs, cats, toddlers, and family members."
      },
      {
        question: "Do I need to be home during my Austin cleaning appointment?",
        answer: "No, most of our Austin clients provide a door access code or lockbox. Our team is fully bonded, background-checked, and insured for total peace of mind."
      }
    ]
  },
  "round-rock": {
    slug: "round-rock",
    cityName: "Round Rock",
    state: "TX",
    county: "Williamson County",
    seoTitle: "House Cleaning & Organizing in Round Rock, TX | Cleanfy Home Services",
    metaDescription: "Professional home cleaning in Round Rock, TX. Serving Forest Creek, Teravista, Brushy Creek, and Behrens Ranch with insured, background-checked maid services.",
    heroStatement: "Dependable, 5-star house cleaning and organizing tailored for busy families in Round Rock, TX.",
    introParagraphs: [
      "Round Rock is one of Central Texas's premier family communities, known for excellent schools, corporate tech campuses, and vibrant master-planned neighborhoods. Cleanfy provides top-quality residential house cleaning across Round Rock.",
      "Whether you reside in Teravista, Forest Creek, Brushy Creek, or near Old Settlers Park, our professional cleaning teams keep your kitchen, bathrooms, and bedrooms spotless so you can enjoy your weekends.",
      "We offer flexible weekly, bi-weekly, monthly, or one-time deep cleaning schedules designed specifically around your family's routine."
    ],
    neighborhoods: ["Forest Creek", "Teravista", "Brushy Creek", "Behrens Ranch", "Sonoma", "Chisholm Valley", "Paloma Lake", "Pioneer Crossing"],
    zipCodes: ["78664", "78665", "78681"],
    nearbyCities: [
      { name: "Pflugerville", slug: "pflugerville" },
      { name: "Cedar Park", slug: "cedar-park" },
      { name: "Georgetown", slug: "georgetown" },
      { name: "Austin", slug: "austin" },
      { name: "Hutto", slug: "hutto" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110091.24869818816!2d-97.74735515!3d30.508255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d18080f58db1%3A0x6a0c0a3739798081!2sRound%20Rock%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "David & Karen R.",
      neighborhood: "Teravista, Round Rock",
      text: "Coming home after work on cleaning day in Teravista is the highlight of our week. Cleanfy handles everything from baseboards to microwave interiors with perfection!",
      rating: 5,
      service: "Regular House Cleaning"
    },
    localFaqs: [
      {
        question: "Do you service all neighborhoods in Round Rock, TX?",
        answer: "Yes, we serve all areas of Round Rock including Teravista, Forest Creek, Brushy Creek, Behrens Ranch, Paloma Lake, and surrounding Williamson County locations."
      },
      {
        question: "What is the difference between regular and deep cleaning in Round Rock?",
        answer: "Regular cleaning is ongoing routine upkeep (dusting, mopping, vacuuming, surface sanitization). Deep cleaning includes detailed buildup removal, hand washing baseboards, door frames, and inside appliances."
      },
      {
        question: "Do you bring your own cleaning equipment to Round Rock homes?",
        answer: "Yes, we bring commercial HEPA vacuums, fresh microfiber supplies, and eco-friendly non-toxic cleaning products to every appointment."
      },
      {
        question: "Are your cleaners background-checked and insured?",
        answer: "100% yes. Every Cleanfy employee undergoes national criminal background checks and drug screenings, backed by our $2,000,000 liability insurance policy."
      }
    ]
  },
  "cedar-park": {
    slug: "cedar-park",
    cityName: "Cedar Park",
    state: "TX",
    county: "Williamson County",
    seoTitle: "House Cleaning & Organizing in Cedar Park, TX | Cleanfy Home Services",
    metaDescription: "Reliable residential house cleaning services in Cedar Park, TX. Serving Twin Creeks, Buttercup Creek, and Ranch at Brushy Creek with eco-friendly products.",
    heroStatement: "Top-rated residential house cleaning and deep scrubbing for homeowners in Cedar Park, TX.",
    introParagraphs: [
      "Cedar Park offers a wonderful blend of suburban warmth, beautiful parks, and active neighborhood life. Cleanfy is proud to be Cedar Park's trusted house cleaning partner.",
      "From Twin Creeks and Buttercup Creek to the Ranch at Brushy Creek and Cypress Mill, our experienced cleaners bring 5-star care to single-family homes, townhomes, and luxury estates.",
      "We handle dusting, vacuuming, mopping, tile grout scrubbing, and custom organizing so you can spend your weekends at Lake Travis or the HEB Center."
    ],
    neighborhoods: ["Twin Creeks", "Buttercup Creek", "Ranch at Brushy Creek", "Cypress Mill", "Redwood Lodge", "Shenandoah", "Quest Village"],
    zipCodes: ["78613", "78630"],
    nearbyCities: [
      { name: "Leander", slug: "leander" },
      { name: "Round Rock", slug: "round-rock" },
      { name: "Austin", slug: "austin" },
      { name: "Georgetown", slug: "georgetown" },
      { name: "Lakeway", slug: "lakeway" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110012.345678!2d-97.8322!3d30.5052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d2f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sCedar%20Park%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Elena Rostova",
      neighborhood: "Twin Creeks, Cedar Park",
      text: "The Cleanfy team did an unbelievable job on our move-out clean in Twin Creeks. Our landlord passed the inspection immediately without a single note!",
      rating: 5,
      service: "Move-In / Move-Out Cleaning"
    },
    localFaqs: [
      {
        question: "How long does a cleaning take in Cedar Park, TX?",
        answer: "Most regular house cleanings in Cedar Park take 2 to 4 hours with our standard 2-person professional team."
      },
      {
        question: "Can I request specific eco-friendly products for my Cedar Park home?",
        answer: "All Cleanfy supplies are 100% plant-based, non-toxic, and hypoallergenic by default. We are happy to accommodate any specific sensitivities or preferences."
      },
      {
        question: "Do you offer move-in / move-out cleaning in Cedar Park?",
        answer: "Yes, our move-in/move-out package includes empty home scrubbing inside all cabinets, drawers, oven, refrigerator, baseboards, and windows."
      },
      {
        question: "How do I get an exact quote for my Cedar Park home?",
        answer: "Click 'Get A Quote' to use our 60-second online pricing calculator, or call our local team directly at (512) 555-0199."
      }
    ]
  },
  "pflugerville": {
    slug: "pflugerville",
    cityName: "Pflugerville",
    state: "TX",
    county: "Travis County",
    seoTitle: "House Cleaning & Organizing in Pflugerville, TX | Cleanfy Home Services",
    metaDescription: "Insured home cleaning services in Pflugerville, TX. Serving Highland Park, Falcon Pointe, Blackhawk, and Lake Pflugerville communities.",
    heroStatement: "Pflugerville's premier house cleaning service for spotless kitchens, sanitized bathrooms, and fresh living rooms.",
    introParagraphs: [
      "Pflugerville's vibrant growth and welcoming neighborhoods make it a favorite for families and professionals working across the Austin metroplex.",
      "Cleanfy brings reliable, background-checked house cleaning to Falcon Pointe, Blackhawk, Highland Park, and surrounding Pflugerville developments.",
      "Whether you need bi-weekly maintenance, a spring deep clean, or an Airbnb turnover, our local staff delivers guaranteed perfection."
    ],
    neighborhoods: ["Falcon Pointe", "Blackhawk", "Highland Park", "Pflugerville Heights", "Windermere", "Spring Trails"],
    zipCodes: ["78660", "78691"],
    nearbyCities: [
      { name: "Round Rock", slug: "round-rock" },
      { name: "Austin", slug: "austin" },
      { name: "Hutto", slug: "hutto" },
      { name: "Georgetown", slug: "georgetown" },
      { name: "Manor", slug: "manor" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110050.123456!2d-97.6198!3d30.4394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cff2031f1f1f%3A0x1f1f1f1f1f1f1f1f!2sPflugerville%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Marcus Vance",
      neighborhood: "Falcon Pointe, Pflugerville",
      text: "Cleanfy is hands down the best house cleaning company in Pflugerville. Reliable, friendly, and always thorough!",
      rating: 5,
      service: "Deep Cleaning"
    },
    localFaqs: [
      {
        question: "How often should I book house cleaning in Pflugerville?",
        answer: "Most families in Pflugerville prefer our bi-weekly recurring service, which provides optimal freshness and a 10% discount on every visit."
      },
      {
        question: "Are your Pflugerville cleaners insured and bonded?",
        answer: "Yes, all team members are fully covered under our $2,000,000 liability policy and worker's compensation."
      },
      {
        question: "Do you clean inside kitchen cabinets in Pflugerville?",
        answer: "Interior cabinet wiping is included in our Move-In/Move-Out and Deep Cleaning packages, or can be added to any regular visit!"
      },
      {
        question: "What if I need to reschedule my Pflugerville cleaning date?",
        answer: "We offer hassle-free rescheduling with just 24 hours advance notice."
      }
    ]
  },
  "georgetown": {
    slug: "georgetown",
    cityName: "Georgetown",
    state: "TX",
    county: "Williamson County",
    seoTitle: "House Cleaning & Organizing in Georgetown, TX | Cleanfy Home Services",
    metaDescription: "Professional home cleaning in Georgetown, TX. Serving Sun City, Berry Creek, Cimarron Hills, and historic Georgetown square.",
    heroStatement: "Trusted residential house cleaning and organizing for Georgetown historic homes and Sun City residences.",
    introParagraphs: [
      "Georgetown is renowned for its historic square, scenic parks, and active adult communities like Sun City. Cleanfy delivers polite, meticulously detailed cleaning service throughout Georgetown.",
      "We specialize in caring for delicate historic hardwood floors, custom Sun City layouts, and expansive estates in Berry Creek and Cimarron Hills.",
      "Our team brings non-toxic supplies, gentle microfiber tools, and HEPA vacuums that keep your indoor environment allergen-free."
    ],
    neighborhoods: ["Sun City", "Berry Creek", "Cimarron Hills", "Historic Georgetown", "Old Town", "Serenada", "Rancho Sienna"],
    zipCodes: ["78626", "78628", "78633"],
    nearbyCities: [
      { name: "Round Rock", slug: "round-rock" },
      { name: "Cedar Park", slug: "cedar-park" },
      { name: "Leander", slug: "leander" },
      { name: "Jarrell", slug: "jarrell" },
      { name: "Hutto", slug: "hutto" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000.123456!2d-97.6772!3d30.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d5e1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sGeorgetown%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Barbara Thorne",
      neighborhood: "Sun City, Georgetown",
      text: "The Cleanfy team in Sun City is polite, punctual, and leaves my home smelling wonderful without harsh chemicals. Highly recommended!",
      rating: 5,
      service: "Regular House Cleaning"
    },
    localFaqs: [
      {
        question: "Do you offer cleaning services specifically for Sun City Georgetown residents?",
        answer: "Yes, we regularly service Sun City homes and offer customized schedules tailored to active adult lifestyles."
      },
      {
        question: "Do you take special care with antique or historic woodwork in Georgetown?",
        answer: "Absolutely. We use non-abrasive, pH-neutral cleaners specifically formulated for historic hardwoods, stone, and custom trim."
      },
      {
        question: "What is included in a Georgetown deep cleaning?",
        answer: "Deep cleaning includes baseboards, door frames, light fixtures, ceiling fan blades, tile grout, and thorough kitchen/bathroom scrub."
      },
      {
        question: "How do I book a service in Georgetown, TX?",
        answer: "You can book directly online in under 60 seconds or call our team at (512) 555-0199."
      }
    ]
  },
  "lakeway": {
    slug: "lakeway",
    cityName: "Lakeway",
    state: "TX",
    county: "Travis County",
    seoTitle: "House Cleaning & Organizing in Lakeway, TX | Cleanfy Home Services",
    metaDescription: "Premier residential house cleaning in Lakeway, TX. Serving Rough Hollow, Flintrock, Falconhead, and Bee Cave waterfront estates.",
    heroStatement: "Luxury residential cleaning, deep scrubbing, and short-term rental turnovers in Lakeway, TX.",
    introParagraphs: [
      "Lakeway's stunning Lake Travis views and luxury waterfront estates require specialized, high-end residential care. Cleanfy brings 12+ years of luxury home cleaning experience to Lakeway and Bee Cave.",
      "From Rough Hollow and Flintrock Falls to Falconhead and Serene Hills, our trained specialists take extreme care with marble, quartz, stainless steel, and expansive floor-to-ceiling glass.",
      "We also provide fast, 5-star turnover cleaning for vacation rental hosts along Lake Travis."
    ],
    neighborhoods: ["Rough Hollow", "Flintrock Falls", "Falconhead", "Serene Hills", "The Hills", "Lakeway Highlands", "Sweetwater"],
    zipCodes: ["78734", "78738"],
    nearbyCities: [
      { name: "Bee Cave", slug: "bee-cave" },
      { name: "West Lake Hills", slug: "west-lake-hills" },
      { name: "Austin", slug: "austin" },
      { name: "Spicewood", slug: "spicewood" },
      { name: "Dripping Springs", slug: "dripping-springs" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110080.123456!2d-97.9822!3d30.3644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b39e1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sLakeway%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Michael Chen",
      neighborhood: "Rough Hollow, Lakeway",
      text: "Cleanfy takes care of our waterfront property in Rough Hollow. Their attention to detail on glass railings, marble, and hardwoods is exceptional.",
      rating: 5,
      service: "Deep Cleaning"
    },
    localFaqs: [
      {
        question: "Do you clean vacation rentals and Airbnb properties in Lakeway?",
        answer: "Yes, we specialize in high-speed, 5-star turnover cleaning for Lake Travis vacation rentals including linen changes and guest restocking."
      },
      {
        question: "Are your cleaning products safe for high-end natural stone in Lakeway homes?",
        answer: "Yes, we use pH-neutral, non-abrasive eco-friendly products safe for marble, travertine, quartzite, and custom wood finishes."
      },
      {
        question: "How do you handle key access for gated Lakeway communities?",
        answer: "We store security gate codes and keyless lockbox instructions in secure, encrypted dispatch systems."
      },
      {
        question: "What is your satisfaction guarantee for Lakeway clients?",
        answer: "If any aspect of your cleaning does not meet your 100% satisfaction, we return within 24 hours to re-clean it free of charge."
      }
    ]
  },
  "leander": {
    slug: "leander",
    cityName: "Leander",
    state: "TX",
    county: "Williamson County",
    seoTitle: "House Cleaning & Organizing in Leander, TX | Cleanfy Home Services",
    metaDescription: "Dependable house cleaning in Leander, TX. Serving Crystal Falls, Travisso, Larkspur, and Horizon Park with eco-friendly cleaning.",
    heroStatement: "Top-rated house cleaning and post-construction cleanup for fast-growing Leander communities.",
    introParagraphs: [
      "Leander is one of the fastest-growing cities in Central Texas, featuring beautiful new master-planned communities like Crystal Falls, Travisso, and Larkspur.",
      "Cleanfy offers comprehensive home cleaning, post-construction cleanup, and organizing across Leander.",
      "Whether you're moving into a newly built home or need bi-weekly upkeep, our background-checked team guarantees a spotless finish."
    ],
    neighborhoods: ["Crystal Falls", "Travisso", "Larkspur", "Horizon Park", "Bryson", "Mason Hills", "Savannah Ranch"],
    zipCodes: ["78641", "78646"],
    nearbyCities: [
      { name: "Cedar Park", slug: "cedar-park" },
      { name: "Georgetown", slug: "georgetown" },
      { name: "Liberty Hill", slug: "liberty-hill" },
      { name: "Round Rock", slug: "round-rock" },
      { name: "Austin", slug: "austin" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110000.123456!2d-97.8542!3d30.5788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d2f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sLeander%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Jessica & Tom P.",
      neighborhood: "Travisso, Leander",
      text: "After finishing our new build in Travisso, Cleanfy removed all the fine drywall dust. It was completely spotless when our furniture arrived!",
      rating: 5,
      service: "Post-Construction Cleaning"
    },
    localFaqs: [
      {
        question: "Do you offer post-construction cleaning in Leander, TX?",
        answer: "Yes, we specialize in post-renovation and new-build dust extraction, fixture polishing, and cabinet sanitization."
      },
      {
        question: "How much does regular cleaning cost in Leander?",
        answer: "Standard recurring house cleaning starts at $110-$140 depending on home size. Get an instant online quote anytime!"
      },
      {
        question: "Are your products safe for children in Leander homes?",
        answer: "100% yes, all products are non-toxic, plant-based, and chemical-free."
      },
      {
        question: "Do I need to supply a vacuum for my Leander cleaning?",
        answer: "No, we bring our own commercial HEPA filtration vacuums and all necessary microfiber equipment."
      }
    ]
  },
  "bee-cave": {
    slug: "bee-cave",
    cityName: "Bee Cave",
    state: "TX",
    county: "Travis County",
    seoTitle: "House Cleaning & Organizing in Bee Cave, TX | Cleanfy Home Services",
    metaDescription: "Professional home cleaning in Bee Cave, TX. Serving Spanish Oaks, Falconhead West, and Homestead with insured residential maid services.",
    heroStatement: "Luxury home cleaning, organizing, and deep scrubbing in Bee Cave, TX.",
    introParagraphs: [
      "Bee Cave combines serene Hill Country views with elegant shopping and dining at the Hill Country Galleria. Cleanfy provides premier residential cleaning to Bee Cave homeowners.",
      "From gated estates in Spanish Oaks to family homes in Falconhead West and The Homestead, our cleaners maintain impeccably clean living spaces.",
      "We tailor our services to your preferred schedule with eco-friendly products and full liability coverage."
    ],
    neighborhoods: ["Spanish Oaks", "Falconhead West", "Homestead", "Bee Cave Woods", "Uplands", "Ladera"],
    zipCodes: ["78738"],
    nearbyCities: [
      { name: "Lakeway", slug: "lakeway" },
      { name: "West Lake Hills", slug: "west-lake-hills" },
      { name: "Austin", slug: "austin" },
      { name: "Dripping Springs", slug: "dripping-springs" },
      { name: "Spicewood", slug: "spicewood" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110080.123456!2d-97.9422!3d30.3088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b39e1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sBee%20Cave%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Amanda Vance",
      neighborhood: "Spanish Oaks, Bee Cave",
      text: "The Cleanfy team in Spanish Oaks is discrete, professional, and consistently thorough. We wouldn't use anyone else!",
      rating: 5,
      service: "Regular House Cleaning"
    },
    localFaqs: [
      {
        question: "Do you service gated communities in Bee Cave like Spanish Oaks?",
        answer: "Yes, we regularly service gated communities in Bee Cave and coordinate entry security codes seamlessly."
      },
      {
        question: "What services are popular in Bee Cave, TX?",
        answer: "Deep cleaning, custom closet organizing, and bi-weekly regular house cleaning are our most popular Bee Cave services."
      },
      {
        question: "Are your cleaners background-checked?",
        answer: "Yes, every employee undergoes national criminal background checks and drug screenings."
      },
      {
        question: "How do I schedule a cleaning in Bee Cave?",
        answer: "Use our 60-second online quote calculator or call (512) 555-0199."
      }
    ]
  },
  "west-lake-hills": {
    slug: "west-lake-hills",
    cityName: "West Lake Hills",
    state: "TX",
    county: "Travis County",
    seoTitle: "House Cleaning & Organizing in West Lake Hills, TX | Cleanfy Home Services",
    metaDescription: "Premier residential house cleaning in West Lake Hills, TX. Serving Eanes ISD, Rollingwood, Davenport Ranch, and Rob Roy estates.",
    heroStatement: "Luxury house cleaning, deep scrubbing, and organizing for West Lake Hills and Eanes ISD estates.",
    introParagraphs: [
      "West Lake Hills is one of Texas's most prestigious residential areas, known for hill-country topography, top-rated Eanes ISD schools, and sprawling architectural estates.",
      "Cleanfy has provided white-glove residential cleaning in West Lake Hills and Rollingwood for over 12 years. We specialize in delicate architectural surfaces, floor-to-ceiling glass, and high-end stone.",
      "Our background-checked cleaners bring peace of mind, discretion, and perfection to every visit."
    ],
    neighborhoods: ["Westlake", "Rollingwood", "Rob Roy", "Davenport Ranch", "Seven Oaks", "Stratford Drive", "Lost Creek"],
    zipCodes: ["78746"],
    nearbyCities: [
      { name: "Austin", slug: "austin" },
      { name: "Bee Cave", slug: "bee-cave" },
      { name: "Lakeway", slug: "lakeway" },
      { name: "Barton Creek", slug: "barton-creek" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110050.123456!2d-97.8022!3d30.2988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb3f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sWest%20Lake%20Hills%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Sarah M.",
      neighborhood: "Rob Roy, West Lake Hills",
      text: "Cleanfy completely transformed my 4-bedroom home in West Lake Hills! The cleaners were punctual, unbelievably thorough, and spent extra time on our kitchen backsplash.",
      rating: 5,
      service: "Deep Cleaning"
    },
    localFaqs: [
      {
        question: "Do you provide white-glove cleaning in West Lake Hills, TX?",
        answer: "Yes, our team is specially trained in high-end stone care, delicate glass, custom millwork, and luxury estate maintenance."
      },
      {
        question: "Is Cleanfy fully insured in West Lake Hills?",
        answer: "Yes, we carry a $2,000,000 comprehensive liability policy plus full worker's compensation."
      },
      {
        question: "Can I request the same cleaning team every visit in West Lake Hills?",
        answer: "Yes! We assign a consistent 2-person cleaning crew to recurring clients to ensure familiarity with your preferences."
      },
      {
        question: "How do I book a quote for my West Lake Hills home?",
        answer: "Click 'Get A Quote' above to calculate instant pricing or call our team at (512) 555-0199."
      }
    ]
  },
  "kyle": {
    slug: "kyle",
    cityName: "Kyle",
    state: "TX",
    county: "Hays County",
    seoTitle: "House Cleaning & Organizing in Kyle, TX | Cleanfy Home Services",
    metaDescription: "Affordable, background-checked house cleaning in Kyle, TX. Serving Plum Creek, Amberwood, and Waterleaf communities.",
    heroStatement: "Dependable, affordable residential house cleaning for families in Kyle, TX.",
    introParagraphs: [
      "Kyle is a thriving Hays County community located just south of Austin along the I-35 corridor. Cleanfy brings high-quality, affordable house cleaning to Kyle homeowners.",
      "Serving Plum Creek, Amberwood, Waterleaf, and surrounding neighborhoods, our cleaners handle dusting, mopping, bathroom sanitization, and kitchen detailing.",
      "Enjoy your weekend time at Lake Kyle or Plum Creek golf course while Cleanfy keeps your home sparkling."
    ],
    neighborhoods: ["Plum Creek", "Amberwood", "Waterleaf", "Cool Springs", "Crosswinds", "Indian Paintbrush"],
    zipCodes: ["78640"],
    nearbyCities: [
      { name: "Buda", slug: "buda" },
      { name: "Austin", slug: "austin" },
      { name: "San Marcos", slug: "san-marcos" },
      { name: "Dripping Springs", slug: "dripping-springs" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110120.123456!2d-97.8772!3d29.9888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4f3f1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sKyle%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    localTestimonial: {
      clientName: "Robert & Lisa G.",
      neighborhood: "Plum Creek, Kyle",
      text: "Cleanfy has made maintaining our home in Plum Creek so easy! Excellent service, great rates, and super trustworthy staff.",
      rating: 5,
      service: "Regular House Cleaning"
    },
    localFaqs: [
      {
        question: "Do you service all neighborhoods in Kyle, TX?",
        answer: "Yes, we serve all areas of Kyle including Plum Creek, Amberwood, Waterleaf, and surrounding Hays County communities."
      },
      {
        question: "What is included in a regular house cleaning in Kyle?",
        answer: "Regular cleaning includes dusting all surfaces, vacuuming carpets, mopping hard floors, sanitizing kitchen counters/appliances, and disinfecting bathrooms."
      },
      {
        question: "Are your products safe for pets in Kyle?",
        answer: "Yes, all products are 100% plant-based, non-toxic, and hypoallergenic."
      },
      {
        question: "How do I schedule a cleaning in Kyle?",
        answer: "Calculate your quote online in 60 seconds or call (512) 555-0199."
      }
    ]
  }
};
