export interface GalleryItem {
  id: string;
  title: string;
  category: "Organizing" | "Regular Cleaning" | "Deep Cleaning" | "Post-Construction" | "Airbnb" | "Move-In/Move-Out";
  location: string;
  image: string;
  imageAlt: string;
  caption: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  service: string;
  location: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Organizing",
  "Regular Cleaning",
  "Deep Cleaning",
  "Post-Construction",
  "Airbnb",
  "Move-In/Move-Out"
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Deep Cleaned Luxury Kitchen",
    category: "Deep Cleaning",
    location: "West Lake Hills, Austin",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Deep cleaned luxury kitchen in West Lake Hills, Austin",
    caption: "Scrubbed marble countertops, degreased range hood, and polished brass fixtures in West Lake Hills."
  },
  {
    id: "g2",
    title: "Organized Walk-In Pantry & Closet",
    category: "Organizing",
    location: "Round Rock, TX",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Organized modern walk in closet in Round Rock, TX",
    caption: "Decluttered shelves, categorized hanging garments, and structured storage bins."
  },
  {
    id: "g3",
    title: "Spotless Living Room Maintenance",
    category: "Regular Cleaning",
    location: "Tarrytown, Austin",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Regular maintenance cleaned living room in Tarrytown, Austin",
    caption: "Dusting high ledges, vacuuming area rugs, and polishing hardwood floors during bi-weekly visit."
  },
  {
    id: "g4",
    title: "Post-Renovation Kitchen Handover",
    category: "Post-Construction",
    location: "Lakeway, TX",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Post-construction dust removal in Lakeway, TX kitchen",
    caption: "Extracted fine drywall dust from new cabinet interiors, light fixtures, and tile grout lines."
  },
  {
    id: "g5",
    title: "5-Star Airbnb Guest Bedroom Staging",
    category: "Airbnb",
    location: "Downtown Austin",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Airbnb turnover cleaned guest bedroom in Downtown Austin",
    caption: "Fresh linen change, towel origami staging, and complete bathroom sanitization between guest checkouts."
  },
  {
    id: "g6",
    title: "Move-Out Empty Apartment Scrub",
    category: "Move-In/Move-Out",
    location: "Cedar Park, TX",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Move-out cleaned empty living room in Cedar Park, TX",
    caption: "Full lease inspection clean including interior oven, refrigerator, cabinets, and baseboards."
  },
  {
    id: "g7",
    title: "Minimalist Kitchen Pantry System",
    category: "Organizing",
    location: "Bee Cave, TX",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Organized pantry with glass jars in Bee Cave, TX",
    caption: "Categorized food storage, decanted grains into clear containers, and labeled shelves."
  },
  {
    id: "g8",
    title: "Routine Housekeeping Dining Space",
    category: "Regular Cleaning",
    location: "Pflugerville, TX",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Regular house cleaning dining room in Pflugerville, TX",
    caption: "Weekly surface sanitization, baseboard dusting, and floor mopping in Pflugerville home."
  },
  {
    id: "g9",
    title: "Top-to-Bottom Bathroom Deep Scrub",
    category: "Deep Cleaning",
    location: "Georgetown, TX",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Deep cleaned master bathroom vanity in Georgetown, TX",
    caption: "Mineral deposit removal from glass shower doors, tile grout scrub, and fixture polishing."
  }
];

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "ba1",
    title: "Kitchen Deep Clean & Degreasing",
    service: "Deep Cleaning & Organizing",
    location: "West Lake Hills, Austin",
    beforeImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&auto=format&fit=crop&q=80",
    beforeAlt: "Cluttered kitchen before deep cleaning in Austin",
    afterImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&auto=format&fit=crop&q=80",
    afterAlt: "Spotless organized kitchen after Cleanfy deep clean in Austin"
  },
  {
    id: "ba2",
    title: "Living Room & Hardwood Restoration",
    service: "Regular House Cleaning",
    location: "Round Rock, TX",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80",
    beforeAlt: "Dusty living room before cleaning in Round Rock",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&auto=format&fit=crop&q=80",
    afterAlt: "Pristine living room after house cleaning in Round Rock"
  }
];
