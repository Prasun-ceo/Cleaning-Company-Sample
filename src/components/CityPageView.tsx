import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Calendar,
  ShieldCheck,
  Sparkles,
  Leaf,
  UserCheck,
  MapPin,
  Star,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { CITY_PAGES_DATA, CityPageDetail } from '../data/cityPagesData';
import { BUSINESS_INFO, SERVICES, WHY_CHOOSE_US } from '../data/cleaningData';

interface CityPageViewProps {
  citySlug: string;
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
  onSelectCity: (citySlug: string) => void;
  onOpenAreasWeServe: () => void;
  onGoHome: () => void;
}

export default function CityPageView({
  citySlug,
  onOpenBooking,
  onSelectService,
  onSelectCity,
  onOpenAreasWeServe,
  onGoHome
}: CityPageViewProps) {
  const cityData: CityPageDetail = CITY_PAGES_DATA[citySlug] || CITY_PAGES_DATA["austin"];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = cityData.seoTitle;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', cityData.metaDescription);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [citySlug, cityData]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChooseIcons = [Calendar, ShieldCheck, Sparkles, Leaf, UserCheck];

  return (
    <div className="bg-[#FAF9F5] text-slate-800">
      
      {/* Dynamic FAQ Schema JSON-LD Script tag for this specific city */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": cityData.localFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })
      }} />

      {/* Breadcrumb Bar with Link Back to Areas We Serve */}
      <div className="bg-[#121E19] text-slate-300 text-xs py-2.5 px-4 border-b border-[#22352C]">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={onGoHome} className="hover:text-white transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-500" />
          <button onClick={onOpenAreasWeServe} className="hover:text-white transition-colors text-slate-400">
            Areas We Serve
          </button>
          <ChevronRight className="w-3 h-3 text-slate-500" />
          <span className="text-emerald-400 font-bold">{cityData.cityName}, TX</span>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="bg-[#16221D] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#253930]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23382F] border border-[#324E42] text-xs font-bold text-emerald-300 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Local Service Hub · {cityData.county}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            House Cleaning &amp; Organizing in {cityData.cityName}, TX
          </h1>

          <p className="text-lg sm:text-2xl text-slate-200 font-bold max-w-3xl leading-snug">
            {cityData.heroStatement}
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Punctual, background-checked cleaners bringing 5-star perfection to {cityData.cityName} homes.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 text-base font-bold text-[#131E19] bg-white rounded-xl hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-5 h-5 text-[#131E19] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-7 py-4 text-base font-semibold text-white bg-[#1F3128] border border-[#3A5346] rounded-xl hover:bg-[#283E34] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>4.9 / 5.0 Rating in {cityData.cityName}</span>
            </div>
            <span>·</span>
            <span>Zip Codes Served: {cityData.zipCodes.join(', ')}</span>
          </div>

        </div>
      </section>

      {/* SECTION 2: LOCAL INTRO */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              LOCAL CLEANING EXCELLENCE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#131E19] tracking-tight">
              Trusted Residential Care in {cityData.cityName}, TX
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {cityData.introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <h3 className="font-extrabold text-base text-[#131E19] uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Neighborhoods We Serve in {cityData.cityName}</span>
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
              {cityData.neighborhoods.map((n) => (
                <div key={n} className="p-2.5 bg-[#FAF9F5] rounded-xl border border-slate-200/80 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{n}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-500 italic">
              * Fast response dispatch serving all zip codes in {cityData.county}.
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: SERVICES IN [CITY] */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              FULL SERVICE MENU
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#131E19]">
              Services Available in {cityData.cityName}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Select any service below for full checklist details and custom booking:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-[#FAF9F5] p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold text-[#131E19]">
                    {s.name} in {cityData.cityName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="text-xs font-bold text-emerald-700 hover:underline"
                  >
                    View Details →
                  </button>

                  <button
                    onClick={() => onOpenBooking(s.id)}
                    className="px-4 py-2 bg-[#16221D] text-white font-bold text-xs rounded-lg hover:bg-[#23362E] transition-colors"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY [CITY] HOMEOWNERS CHOOSE US */}
      <section className="py-16 sm:py-20 bg-[#16221D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Why {cityData.cityName} Homeowners Choose Us
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Dependable, background-checked cleaning backed by $2M liability protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.slice(0, 4).map((item, index) => {
              const IconComp = whyChooseIcons[index] || Sparkles;
              return (
                <div
                  key={item.title}
                  className="bg-[#1D2C26] border border-[#2B4037] rounded-2xl p-6 space-y-3 text-left"
                >
                  <div className="p-3 rounded-xl bg-[#253930] text-emerald-400 w-fit border border-[#355044]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: LOCAL REVIEWS FROM [CITY] */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            CLIENT FEEDBACK
          </div>
          <h2 className="text-3xl font-black text-[#131E19]">
            Local Reviews from {cityData.cityName} Clients
          </h2>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex text-amber-400">
              {[...Array(cityData.localTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              {cityData.localTestimonial.service}
            </span>
          </div>

          <p className="text-base text-slate-700 italic leading-relaxed">
            "{cityData.localTestimonial.text}"
          </p>

          <div className="pt-4 border-t border-slate-100 text-xs font-bold text-[#131E19]">
            {cityData.localTestimonial.clientName} · <span className="text-slate-500 font-normal">{cityData.localTestimonial.neighborhood}</span>
          </div>
        </div>
      </section>

      {/* SECTION 6: LOCAL FAQ WITH SCHEMA MARKUP */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              LOCAL FREQUENT QUESTIONS
            </div>
            <h2 className="text-3xl font-black text-[#131E19]">
              Questions About Cleaning in {cityData.cityName}
            </h2>
          </div>

          <div className="space-y-4">
            {cityData.localFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-[#FAF9F5] rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? 'border-emerald-600 shadow-md ring-1 ring-emerald-500/20' : 'border-slate-200'
                  }`}
                >
                  <button
                    id={`city-faq-button-${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`city-faq-answer-${index}`}
                  >
                    <span className="text-base font-bold text-[#131E19]">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-200 text-slate-600'}`}>
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </button>

                  {isOpen && (
                    <div 
                      id={`city-faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`city-faq-button-${index}`}
                      className="px-6 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 mt-2"
                    >
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7: NEARBY AREAS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-base font-extrabold text-[#131E19]">
          Nearby Communities Serviced Near {cityData.cityName}
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
          {cityData.nearbyCities.map((near, idx) => (
            <span key={near.slug} className="inline-flex items-center gap-2">
              <button
                onClick={() => onSelectCity(near.slug)}
                className="text-slate-700 hover:text-emerald-700 hover:underline transition-colors"
              >
                {near.name}, TX
              </button>
              {idx < cityData.nearbyCities.length - 1 && <span className="text-slate-300">•</span>}
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 8: MAP EMBED OF [CITY] */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-sm font-extrabold text-slate-600 uppercase tracking-widest text-center">
            {cityData.cityName}, TX Service Boundary Map
          </h3>
          <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-md h-80 bg-slate-100">
            <iframe
              title={`Service map of ${cityData.cityName}, TX`}
              src={cityData.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* SECTION 9: LINK BACK TO "AREAS WE SERVE" PAGE */}
      <section className="py-8 bg-[#FAF9F5] text-center border-b border-slate-200">
        <button
          onClick={onOpenAreasWeServe}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-900 underline underline-offset-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View All 50+ Cities in Central Texas Service Directory</span>
        </button>
      </section>

      {/* SECTION 10: FINAL CALL TO ACTION */}
      <section className="py-16 bg-[#16221D] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Book House Cleaning in {cityData.cityName}, TX
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Get an instant quote in 60 seconds with no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#16221D] font-extrabold text-base rounded-xl hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-5 h-5 text-[#16221D]" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-4 bg-[#22352C] border border-[#344E41] text-white font-bold text-base rounded-xl hover:bg-[#2B4237] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-emerald-300 underline">{BUSINESS_INFO.email}</a>
          </p>
        </div>
      </section>

    </div>
  );
}
