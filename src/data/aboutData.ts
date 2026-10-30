export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface ValueItem {
  title: string;
  desc: string;
}

export const ABOUT_DATA = {
  seoTitle: "About Cleanfy Home Services | Cleaning Services in Austin, TX",
  metaDescription: "Learn about Cleanfy Home Services in Austin, TX. Founded in 2014, our fully insured, background-checked cleaning team brings 5-star residential care to every home.",
  heroHeading: "About Cleanfy Home Services",
  heroSubheading: "Providing reliable, eco-friendly, and trusted residential home cleaning across Austin & Greater Central Texas since 2014.",
  storyParagraphs: [
    "Cleanfy Home Services was founded in 2014 by Elena Vance, a long-time Austin resident who recognized a recurring frustration among busy local families: finding a home cleaning service that was consistently punctual, thoroughly detailed, and genuinely trustworthy.",
    "Starting with just one vacuum and a commitment to treat every client's home like her own, Elena built Cleanfy on old-fashioned values of integrity, respect, and meticulous craftsmanship. Word quickly spread across West Lake Hills, Tarrytown, and Round Rock.",
    "Over the past 12 years, Cleanfy has grown into a premier team of 25+ background-checked cleaning professionals serving over 1,000 happy clients across Travis and Williamson counties. Despite our growth, our core mission remains unchanged: delivering a spotless home and peace of mind with every visit."
  ],
  storyImage: "/assets/aistudio/image_a29fd574.png",
  storyImageAlt: "Elena Vance founder of Cleanfy Home Services in clean Austin home",
  values: [
    {
      title: "Reliability & Punctuality",
      desc: "We show up on time, follow your specific instructions, and never miss a scheduled cleaning window."
    },
    {
      title: "Uncompromising Attention to Detail",
      desc: "We clean thoroughly into corners, baseboards, and behind appliances—never just surface dusting."
    },
    {
      title: "Trust & Safety",
      desc: "Every team member undergoes background checks, drug screenings, and full bonded insurance coverage."
    },
    {
      title: "Genuine Care for the Home",
      desc: "We treat your property, pets, and family belongings with the utmost respect and non-toxic care."
    }
  ] as ValueItem[],
  teamMembers: [
    {
      name: "Elena Vance",
      role: "Founder & Operations Director",
      bio: "Austin local with 12+ years of residential hospitality and cleaning management experience.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      imageAlt: "Elena Vance Founder and Operations Director at Cleanfy"
    },
    {
      name: "Marcus Vance",
      role: "Co-Owner & Quality Assurance Manager",
      bio: "Oversees field training, eco-friendly product testing, and client inspection standards.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
      imageAlt: "Marcus Vance Co-Owner and Quality Assurance Manager"
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Team Lead - Deep Cleaning",
      bio: "8 years with Cleanfy specializing in post-construction and detailed residential deep cleaning.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
      imageAlt: "Maria Rodriguez Senior Team Lead Deep Cleaning"
    },
    {
      name: "David Sterling",
      role: "Short-Term Rental Turnover Specialist",
      bio: "Leads our fast-turnover team for Airbnb superhosts and property managers in Austin.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
      imageAlt: "David Sterling Short-Term Rental Turnover Specialist"
    }
  ] as TeamMember[],
  credentials: {
    bbbStatus: "A+ Rated Accredited Business",
    insurance: "$2,000,000 General Liability Policy & Full Worker's Compensation",
    licensing: "City of Austin Commercial Business Permit & Bonded Protection",
    guarantee: "100% Satisfaction Guarantee — Free Re-clean within 24 hours if not satisfied"
  }
};
