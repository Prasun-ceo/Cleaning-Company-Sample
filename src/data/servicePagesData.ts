export interface ServicePageData {
  id: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  benefitStatement: string;
  overviewParagraphs: string[];
  image: string;
  imageAlt: string;
  whatsIncluded: {
    area: string;
    items: string[];
  }[];
  idealFor: string[];
  howItWorks: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICE_PAGES_DATA: Record<string, ServicePageData> = {
  "organizing": {
    id: "organizing",
    name: "Organizing",
    seoTitle: "Organizing Services in Austin, TX | Cleanfy Home Services",
    metaDescription: "Professional home organizing and decluttering services in Austin, TX. Create clean, functional, stress-free closets, kitchens, offices, and storage spaces.",
    benefitStatement: "Declutter and organize your living spaces for a calm, functional, stress-free home.",
    overviewParagraphs: [
      "Clutter can accumulate quickly, turning once-peaceful rooms into sources of daily stress. Our professional home organizing service helps you reclaim your living space with intuitive, sustainable systems tailored specifically to your family's routine.",
      "Our compassionate organizing specialists work closely with you to sort, declutter, and categorize belongings in closets, pantries, home offices, and storage areas. We don't just tidy up—we establish functional storage solutions that make maintaining order effortless.",
      "Whether you're preparing for a move, downsizing, setting up a nursery, or simply tired of chaotic closets, Cleanfy brings order, clarity, and peace back into your home."
    ],
    image: "/assets/aistudio/image_3a535c6b.png",
    imageAlt: "Organized modern dining and living space in Austin home",
    whatsIncluded: [
      {
        area: "Closets & Wardrobes",
        items: [
          "Sorting clothing by season, color, and type",
          "Establishing hanging vs. folded clothing systems",
          "Accessory & shoe storage optimization",
          "Removal of empty hangers & donation sorting"
        ]
      },
      {
        area: "Kitchen & Pantry",
        items: [
          "Categorizing food items by type & expiration date",
          "Pantry shelf arrangement & decanting into containers",
          "Drawer organizer configuration for utensils & gadgets",
          "Under-sink storage & cleaning product grouping"
        ]
      },
      {
        area: "Bedrooms & Nursery",
        items: [
          "Nightstand & dresser drawer decluttering",
          "Under-bed storage utilization",
          "Toy organization & play bin labeling",
          "Linen closet folding & categorizing"
        ]
      },
      {
        area: "Home Office",
        items: [
          "Paperwork & document filing system setup",
          "Desk drawer & supply sorting",
          "Cable management & technology station organizing",
          "Bookcase & binder arrangement"
        ]
      },
      {
        area: "Garage & Storage",
        items: [
          "Grouping tools, sports gear, & seasonal decor",
          "Vertical shelving & wall hook organization",
          "Bin labeling & item inventory placement",
          "Clear floor pathway creation"
        ]
      }
    ],
    idealFor: [
      "Busy homeowners struggling with overflowing closets, pantries, or garages",
      "Families going through major life transitions (new baby, downsizing, or moving)",
      "Remote professionals who need a distraction-free, structured home office",
      "Anyone seeking a fresh start with personalized, easy-to-maintain storage systems"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Request a Free Consultation",
        description: "Select your project scope online or call our team to discuss your organizing goals."
      },
      {
        step: 2,
        title: "Assess & Custom Plan",
        description: "We review your space, measure storage zones, and create a custom decluttering strategy."
      },
      {
        step: 3,
        title: "We Sort & Organize",
        description: "Our professional team systematically sorts, categorizes, and labels every container."
      },
      {
        step: 4,
        title: "Enjoy Your Functional Space",
        description: "Step into a serene, organized home with intuitive systems that stay tidy effortlesly."
      }
    ],
    faqs: [
      {
        question: "Do you throw things away without asking?",
        answer: "Never. You retain 100% decision-making authority over all your possessions. We guide you gently through categorizing items into keep, donate, sell, or discard piles, but nothing leaves your home without your explicit approval."
      },
      {
        question: "How long does an organizing session take?",
        answer: "Session duration depends on room size and clutter density. Most single-room organizing projects (such as a walk-in closet or pantry) take 3 to 5 hours, while full-home or garage decluttering projects may span 1 to 2 full days."
      },
      {
        question: "Do I need to be home during the session?",
        answer: "We recommend being present for the initial sorting phase so you can make decisions on items. Once decisions are made, our team can work independently to design and install the organizing systems."
      },
      {
        question: "Do you bring organizing supplies?",
        answer: "Yes, we bring sample containers, velvet hangers, drawer dividers, and labeling equipment. We can also utilize your existing bins or recommend specific products to purchase ahead of time."
      }
    ]
  },
  "regular-house-cleaning": {
    id: "regular-house-cleaning",
    name: "Regular House Cleaning",
    seoTitle: "Regular House Cleaning in Austin, TX | Cleanfy Home Services",
    metaDescription: "Recurring house cleaning and maid services in Austin, TX. Weekly, bi-weekly, or monthly cleaning routines for a consistently pristine home.",
    benefitStatement: "Keep your home consistently fresh, clean, and healthy on a recurring schedule that fits your lifestyle.",
    overviewParagraphs: [
      "Maintaining a clean home while balancing work, family, and personal time can feel impossible. Our regular house cleaning service provides dependable, recurring maid visits so you always return home to immaculate surfaces and fresh air.",
      "We offer flexible scheduling options including weekly, bi-weekly, or monthly visits. Our trained, background-checked cleaners follow a detailed multi-point checklist covering kitchen countertops, bathroom fixtures, dusting, mopping, and vacuuming.",
      "With Cleanfy handling your routine housekeeping, you gain back hours of valuable weekend time while enjoying a healthier, dust-free environment for your family."
    ],
    image: "/assets/aistudio/image_a29fd574.png",
    imageAlt: "Professional cleaner wiping countertop in clean Austin kitchen",
    whatsIncluded: [
      {
        area: "Kitchen Maintenance",
        items: [
          "Wiping & sanitizing all countertops & backsplashes",
          "Scrubbing & polishing kitchen sink & faucets",
          "Wiping exterior of stove, microwave, & refrigerator",
          "Wiping cabinet fronts & appliance handles",
          "Emptying trash & replacing bin liners"
        ]
      },
      {
        area: "Bathrooms",
        items: [
          "Disinfecting toilets inside, outside, & behind base",
          "Scrubbing showers, bathtubs, & tile walls",
          "Sanitizing sinks, vanity counters, & mirrors",
          "Polishing chrome fixtures & towel racks",
          "Washing bathroom floors"
        ]
      },
      {
        area: "Bedrooms",
        items: [
          "Dusting all furniture, nightstands, & picture frames",
          "Vacuuming carpets, area rugs, & under bed edges",
          "Wiping window sills & light switch plates",
          "Making beds & straightening linens if requested"
        ]
      },
      {
        area: "Living & Common Areas",
        items: [
          "Dusting furniture, shelves, electronics, & ledges",
          "Vacuuming upholstered sofas & chairs",
          "Wiping coffee tables, side tables, & banisters",
          "Disinfecting high-touch door handles & switches"
        ]
      },
      {
        area: "Floors Throughout",
        items: [
          "Vacuuming all carpeted rooms & hallways",
          "Sweeping & damp mopping hardwood, tile, & vinyl floors",
          "Shaking out entryway doormats"
        ]
      }
    ],
    idealFor: [
      "Busy working professionals and active families who value free weekends",
      "Pet owners needing consistent removal of pet hair, dander, and paw marks",
      "Homeowners seeking predictable, high-quality housekeeping on a set schedule",
      "Anyone who wants to maintain home value and surface freshness effortlessly"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Select Frequency & Quote",
        description: "Choose weekly (15% off), bi-weekly (10% off), or monthly (5% off) cleaning online."
      },
      {
        step: 2,
        title: "Confirm Arrival Window",
        description: "We match you with a consistent cleaning team and lock in your recurring day."
      },
      {
        step: 3,
        title: "Professional Cleaning",
        description: "Our insured cleaners arrive on time with eco-friendly products and HEPA vacuums."
      },
      {
        step: 4,
        title: "Enjoy Your Pristine Home",
        description: "Experience the relief of stepping into a fresh, spotless, guaranteed clean house."
      }
    ],
    faqs: [
      {
        question: "What's the difference between regular cleaning and deep cleaning?",
        answer: "Regular cleaning is ongoing maintenance designed to keep a previously cleaned home fresh on a recurring schedule. Deep cleaning is a comprehensive top-to-bottom scrub tackling buildup, baseboards, door frames, and hard-to-reach areas."
      },
      {
        question: "How long does a regular cleaning take?",
        answer: "Most regular house cleanings take 2 to 4 hours with our standard 2-person professional team, depending on home square footage and bedrooms/bathrooms."
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "No, most of our recurring clients provide a keyless entry door code, lockbox code, or leave a key with the leasing office. Your home is fully protected and secure with us."
      },
      {
        question: "Do you bring your own cleaning supplies and equipment?",
        answer: "Yes, we bring all professional equipment, fresh microfiber cloths, and 100% eco-friendly, non-toxic products safe for children and pets."
      }
    ]
  },
  "deep-cleaning": {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    seoTitle: "Deep Cleaning Services in Austin, TX | Cleanfy Home Services",
    metaDescription: "Detailed top-to-bottom deep cleaning in Austin, TX. Complete buildup removal, baseboards, tile grout, ceiling fans, and inside appliances for a fresh start.",
    benefitStatement: "Detailed, top-to-bottom cleaning for a fresh start, ideal for first-time service or seasonal cleaning.",
    overviewParagraphs: [
      "Over time, dust, soap scum, grease, and grime settle into neglected corners, baseboards, and fixture crevices that standard routines miss. Our Deep Cleaning service provides an intensive, top-to-bottom restoration for your entire residence.",
      "We scrub tile grout, hand-wash baseboards and door frames, eliminate kitchen grease buildup, clean inside appliances, and dust high ceiling fan blades. It's the perfect service if you haven't had professional cleaning in over 3 months or are starting a new recurring service.",
      "Every square inch is given detailed attention, leaving your home looking, feeling, and smelling completely transformed."
    ],
    image: "/assets/aistudio/image_3a535c6b.png",
    imageAlt: "Detailed deep cleaned dining room and sunlit living room",
    whatsIncluded: [
      {
        area: "Kitchen Deep Scrub",
        items: [
          "Heavy grease removal from stovetop, burners, & range hood",
          "Deep sanitization inside microwave & interior oven exterior",
          "Hand washing cabinet exteriors & drawer faces",
          "Scrubbing backsplash grout & sink limescale",
          "Detailed appliance exterior polishing"
        ]
      },
      {
        area: "Bathroom Restoration",
        items: [
          "Scrubbing soap scum & mineral deposits from shower glass",
          "Tile grout deep scrub & mildew treatment",
          "Sanitizing jet tubs, shower drains, & fixtures",
          "Hand washing vanity cabinets, mirrors, & lighting fixtures",
          "Deep toilet base & wall scrubbing"
        ]
      },
      {
        area: "Bedrooms & Living Areas",
        items: [
          "Hand washing baseboards, door frames, & wood trim",
          "Dusting ceiling fan blades, light fixtures, & air vents",
          "Wiping window sills, blinds, & interior glass panes",
          "Vacuuming behind and under moveables & couch cushions",
          "Spot cleaning switch plates & door handles"
        ]
      },
      {
        area: "Floors & Trim",
        items: [
          "Deep vacuuming edge-to-edge along wall perimeters",
          "Double damp mopping hardwood, tile, & stone floors",
          "Baseboard corner dust removal"
        ]
      }
    ],
    idealFor: [
      "First-time clients setting up new recurring cleaning services",
      "Homeowners preparing for seasonal spring or holiday hosting",
      "Homes that haven't received detailed professional cleaning in 3+ months",
      "Property owners preparing for high-profile photography or family visits"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Request Deep Clean Quote",
        description: "Specify your home square footage and bedrooms/bathrooms for an instant transparent rate."
      },
      {
        step: 2,
        title: "Customize Included Zones",
        description: "Select optional add-ons such as interior oven or interior refrigerator deep clean."
      },
      {
        step: 3,
        title: "Top-to-Bottom Scrub",
        description: "Our expert team spends 4 to 6 hours meticulously detailing every nook and cranny."
      },
      {
        step: 4,
        title: "Final Quality Inspection",
        description: "We review the checklist together ensuring 100% spotless perfection."
      }
    ],
    faqs: [
      {
        question: "How is deep cleaning different from regular cleaning?",
        answer: "Deep cleaning focuses on accumulated grime, hand washing baseboards, door frames, light fixtures, ceiling fan blades, tile grout, and intense kitchen grease removal. It takes substantially more time and effort than routine maintenance."
      },
      {
        question: "How often should I book a deep cleaning?",
        answer: "We recommend booking a deep cleaning every 3 to 6 months to maintain high sanitary standards, or as a mandatory first visit before transitioning into regular maintenance cleaning."
      },
      {
        question: "How long does a deep cleaning take?",
        answer: "A comprehensive deep clean usually takes 4 to 6 hours with a team of 2 to 3 professional cleaners, depending on the size and initial condition of the home."
      },
      {
        question: "Do you clean inside appliances during a deep clean?",
        answer: "Exterior appliance cleaning is included automatically. Inside refrigerator or inside oven deep cleaning can easily be selected as an add-on during checkout!"
      }
    ]
  },
  "post-construction": {
    id: "post-construction",
    name: "Post-Construction Cleaning",
    seoTitle: "Post-Construction Cleaning in Austin, TX | Cleanfy Home Services",
    metaDescription: "Post-construction & renovation cleaning in Austin, TX. Fine drywall dust removal, window scraping, paint residue removal, and move-in ready sanitization.",
    benefitStatement: "Remove dust, debris, and construction residue after renovation so your space is clean, safe, and move-in ready.",
    overviewParagraphs: [
      "Renovations and new builds create beautiful upgraded spaces, but they also leave behind microscopic drywall dust, sawdust, plaster, and paint overspray stuck in every crevice and air duct.",
      "Cleanfy's Post-Construction Cleaning team specializes in heavy-duty dust extraction and surface polishing. We systematically clean light fixtures, window tracks, cabinet interiors, vents, and flooring so your newly renovated home is safe, sterile, and ready to enjoy.",
      "We work with individual homeowners, interior designers, and general contractors throughout Greater Austin to deliver flawless, dust-free handovers."
    ],
    image: "/assets/aistudio/image_a29fd574.png",
    imageAlt: "Clean newly renovated home interior after post-construction cleaning",
    whatsIncluded: [
      {
        area: "Dust Extraction & Surfaces",
        items: [
          "HEPA vacuuming fine drywall dust from walls & ceilings",
          "Wiping down light fixtures, recessed lighting, & chandeliers",
          "Vacuuming inside HVAC vents, air returns, & duct covers",
          "Removing tape, labels, & protective film from new fixtures"
        ]
      },
      {
        area: "Cabinets & Millwork",
        items: [
          "Wiping interior & exterior of all new cabinets & drawers",
          "Vacuuming sawdust out of cabinet hinges & tracks",
          "Polishing custom wood trim, baseboards, & wainscoting",
          "Cleaning interior door frames & thresholds"
        ]
      },
      {
        area: "Windows & Glass",
        items: [
          "Scrubbing construction stickers & silicone residue from glass",
          "Vacuuming & wiping window tracks, sills, & frames",
          "Polishing glass shower enclosures & vanity mirrors"
        ]
      },
      {
        area: "Kitchen & Bath Renovation Reset",
        items: [
          "Deep scrubbing new tile grout lines & sealing haze",
          "Sanitizing newly installed countertops, sinks, & faucets",
          "Polishing stainless steel appliances & range hood",
          "Disinfecting new porcelain toilets & bathtubs"
        ]
      },
      {
        area: "Floors & Finish Work",
        items: [
          "HEPA vacuuming all hardwood, tile, & carpeted areas",
          "Specialty cleaning for newly installed hardwood or LVP",
          "Paint splatter & plaster residue spot removal"
        ]
      }
    ],
    idealFor: [
      "Homeowners finishing kitchen, bathroom, or whole-house remodels",
      "General contractors & interior designers needing a 5-star final client handover",
      "Buyers moving into newly constructed custom homes",
      "Property investors preparing flipped properties for immediate staging"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Request Post-Build Quote",
        description: "Provide details on the square footage and scope of renovation completed."
      },
      {
        step: 2,
        title: "Schedule Construction Sweep",
        description: "We coordinate with your contractor's final punch-list timeline."
      },
      {
        step: 3,
        title: "HEPA Dust Extraction",
        description: "Our post-build team extracts fine dust from vents, ledges, and cabinets."
      },
      {
        step: 4,
        title: "Move-In Ready Handover",
        description: "Walk into a spotless, safe, dust-free home ready for furniture and living."
      }
    ],
    faqs: [
      {
        question: "Do you remove large heavy construction debris?",
        answer: "We focus on detailed fine dust removal, surface scrubbing, and move-in polishing. Large structural debris or heavy lumber should be cleared by the general contractor before our arrival."
      },
      {
        question: "Do you work directly with general contractors?",
        answer: "Yes, we regularly partner with Austin general contractors, interior designers, and project managers for scheduled final handovers."
      },
      {
        question: "How is pricing set for post-construction cleaning?",
        answer: "Pricing is calculated based on total square footage, number of rooms renovated, and whether the job requires rough clean, final clean, or touch-up clean."
      },
      {
        question: "How do you handle ultrafine drywall dust?",
        answer: "We utilize commercial-grade HEPA filtration vacuums and specialized microfiber techniques that capture ultrafine drywall particles rather than circulating them through the air."
      }
    ]
  },
  "airbnb-cleaning": {
    id: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    seoTitle: "Airbnb & Vacation Rental Cleaning in Austin, TX | Cleanfy Home Services",
    metaDescription: "Fast turnover cleaning for Airbnb and VRBO short-term rentals in Austin, TX. Same-day turnovers, linen wash, guest restock, and 5-star cleanliness guarantee.",
    benefitStatement: "Fast turnover cleaning for short-term rentals so your property is guest-ready every single time.",
    overviewParagraphs: [
      "In the short-term rental industry, cleanliness is the #1 factor in driving 5-star guest reviews and maintaining Superhost status. A single missed detail can lead to negative reviews and lost revenue.",
      "Cleanfy provides reliable, high-speed turnover services specifically designed for Airbnb and VRBO hosts in Austin. We handle linen changes, towel staging, bathroom sanitization, amenity restocking, and property inspection reports within your 10 AM to 3 PM checkout window.",
      "With automated scheduling support and photo verification after every clean, you can manage your rental remotely with total confidence."
    ],
    image: "/assets/aistudio/image_3a535c6b.png",
    imageAlt: "Staged 5-star Airbnb guest bedroom and living room in Austin",
    whatsIncluded: [
      {
        area: "Linen & Laundry Turnover",
        items: [
          "Stripping bed linens & towels after guest checkout",
          "Washing, drying, & folding on-site linens or swapping backups",
          "Making beds with fresh crisp linens & decorative pillow staging",
          "Folding & displaying fresh bathroom & pool towels"
        ]
      },
      {
        area: "Guest Bathroom Reset",
        items: [
          "Sanitizing toilet, tub, shower glass, & vanity",
          "Restocking hand soaps, shampoo, conditioner, & toilet paper",
          "Clearing hair from drain covers & mirrors",
          "Emptying guest trash cans"
        ]
      },
      {
        area: "Kitchen & Dining",
        items: [
          "Emptying refrigerator of leftover guest food",
          "Running & unloading dishwasher, storing clean dishes",
          "Wiping countertops, stovetop, coffee maker, & toaster",
          "Restocking coffee pods, tea, paper towels, & trash bags"
        ]
      },
      {
        area: "Living & Guest Inspection",
        items: [
          "Vacuuming carpets & mopping hard surface floors",
          "Wiping remote controls, TV screens, & high-touch handles",
          "Checking closets & drawers for left-behind guest items",
          "Staging patio furniture & outdoor spaces"
        ]
      }
    ],
    idealFor: [
      "Airbnb, VRBO, and vacation rental hosts who need guaranteed turnover reliability",
      "Out-of-town property owners managing Austin rentals remotely",
      "Superhosts focused on maintaining top cleanliness ratings and high booking rates",
      "Boutique property management companies scaling their rental portfolio"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Sync Booking Calendar",
        description: "Connect your turnover schedule or notify us of upcoming checkout dates."
      },
      {
        step: 2,
        title: "Window Turnover (10am - 3pm)",
        description: "Our dedicated team arrives right after guest checkout to reset the property."
      },
      {
        step: 3,
        title: "Clean, Wash & Restock",
        description: "We sanitize surfaces, change linens, restock toiletries, and stage amenities."
      },
      {
        step: 4,
        title: "Photo Report & 5-Star Readiness",
        description: "Receive a completion report so your next guests walk into a perfect 5-star stay."
      }
    ],
    faqs: [
      {
        question: "Do you accommodate same-day guest turnovers?",
        answer: "Yes! Our turnover teams operate efficiently during the standard 10:00 AM checkout to 3:00 PM check-in window to ensure your property is ready for back-to-back guest arrivals."
      },
      {
        question: "Can you work around strict check-in and checkout times?",
        answer: "Absolutely. We specialize in time-sensitive turnover schedules and prioritize short-term rentals in our daily dispatch routines."
      },
      {
        question: "Do you handle laundry and restocking supplies?",
        answer: "Yes, if your property has an in-unit washer/dryer, we wash and dry linens on site during the turnover. We can also swap pre-washed backup linen sets and restock host supplies."
      },
      {
        question: "What happens if a guest damages something or leaves behind personal items?",
        answer: "Our cleaners inspect the property upon arrival and immediately send photo alerts of any damage, missing items, or guest belongings left behind so you can file host claims promptly."
      }
    ]
  },
  "move-in-move-out": {
    id: "move-in-move-out",
    name: "Move-In / Move-Out Cleaning",
    seoTitle: "Move-In / Move-Out Cleaning in Austin, TX | Cleanfy Home Services",
    metaDescription: "Comprehensive move-in and move-out house cleaning in Austin, TX. Inside cabinet scrub, appliance cleaning, baseboards, and deposit-back guarantee.",
    benefitStatement: "Full cleaning before or after moving, ideal for renters, homeowners, and real estate professionals.",
    overviewParagraphs: [
      "Moving is inherently stressful. Packing boxes, coordinating movers, and managing lease deadlines leave little time or energy for deep cleaning an empty house or apartment.",
      "Cleanfy's Move-In / Move-Out Cleaning service takes the burden completely off your shoulders. We specialize in empty-home deep cleaning—scrubbing inside every cabinet and drawer, deep cleaning the refrigerator and oven, hand washing baseboards, and wiping window sills.",
      "For tenants, this guarantees full security deposit return. For sellers and real estate agents, it ensures the property presents flawlessly for final walkthroughs and new buyers."
    ],
    image: "/assets/aistudio/image_a29fd574.png",
    imageAlt: "Empty pristine living room ready for move in",
    whatsIncluded: [
      {
        area: "Cabinets & Storage",
        items: [
          "Wiping interior & exterior of all kitchen & bathroom cabinets",
          "Vacuuming crumbs & shelf liner residue from all drawers",
          "Scrubbing pantry shelves & closet storage racks"
        ]
      },
      {
        area: "Appliance Deep Clean",
        items: [
          "Deep sanitizing inside & outside of refrigerator & freezer",
          "Scrubbing baked-on grease inside oven, racks, & glass door",
          "Wiping interior & exterior of microwave & dishwasher door"
        ]
      },
      {
        area: "Bathrooms",
        items: [
          "Disinfecting toilets, sinks, vanities, & medicine cabinets",
          "Scrubbing tile grout, shower walls, tubs, & glass doors",
          "Polishing mirrors & metal fixtures"
        ]
      },
      {
        area: "Wall Trim & Fixtures",
        items: [
          "Hand washing baseboards, door frames, & light switch plates",
          "Dusting ceiling fans, light fixtures, & air vent grilles",
          "Wiping window sills & interior glass panes"
        ]
      },
      {
        area: "Floors Throughout",
        items: [
          "Edge-to-edge HEPA vacuuming in all carpeted rooms",
          "Deep sweeping & damp mopping all tile, hardwood, & vinyl floors",
          "Closet floor vacuuming"
        ]
      }
    ],
    idealFor: [
      "Renters seeking 100% security deposit return from landlords and leasing offices",
      "Home buyers who want a completely sanitized, germ-free home before moving in",
      "Sellers and real estate agents preparing homes for photography and open houses",
      "Property managers turning over rental units between tenant leases"
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book Move Clean Online",
        description: "Select your move date and indicate whether the home will be completely empty."
      },
      {
        step: 2,
        title: "Keyless / Entry Setup",
        description: "Provide access code or lockbox instructions so movers can finish unhindered."
      },
      {
        step: 3,
        title: "Empty Home Deep Clean",
        description: "Our team scrubs inside cabinets, ovens, fridges, baseboards, and floors."
      },
      {
        step: 4,
        title: "Deposit / Walkthrough Pass",
        description: "Enjoy 100% lease inspection pass or move into a fresh, immaculate home."
      }
    ],
    faqs: [
      {
        question: "Will this cleaning help me get my security deposit back?",
        answer: "Yes! Our Move-Out checklist is specifically formatted to pass strict Austin property management lease inspection standards. In the rare event your landlord flags a cleaning item, we return within 24 hours to re-clean it free of charge."
      },
      {
        question: "Can you work with a real estate agent's tight timeline?",
        answer: "Absolutely. We regularly coordinate with Austin realtors to prepare properties for photography, open houses, or closing walkthroughs."
      },
      {
        question: "Does the home need to be completely empty before cleaning?",
        answer: "For best results, we strongly recommend that all furniture, boxes, and personal items be removed prior to our arrival so our team can access baseboards, closet interiors, and floor perimeters."
      },
      {
        question: "Are interior appliances (fridge & oven) included?",
        answer: "Yes, deep cleaning inside the refrigerator, freezer, and oven is included in our Move-In / Move-Out service package!"
      }
    ]
  }
};
