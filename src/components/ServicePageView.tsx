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
  Clock,
  MapPin,
  Star,
  ChevronRight
} from 'lucide-react';
import { SERVICE_PAGES_DATA, ServicePageData } from '../data/servicePagesData';
import { BUSINESS_INFO, MAIN_CITIES, WHY_CHOOSE_US } from '../data/cleaningData';

interface ServicePageViewProps {
  serviceId: string;
  onOpenBooking: (serviceId?: string) => void;
  onSelectCity: (citySlug: string) => void;
  onGoHome: () => void;
}

export default function ServicePageView({
  serviceId,
  onOpenBooking,
  onSelectCity,
  onGoHome
}: ServicePageViewProps) {
  const serviceData: ServicePageData = SERVICE_PAGES_DATA[serviceId] || SERVICE_PAGES_DATA["regular-house-cleaning"];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Update Page Title and Meta Description dynamically for SEO
  useEffect(() => {
    document.title = serviceData.seoTitle;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', serviceData.metaDescription);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId, serviceData]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChooseIcons = [Calendar, ShieldCheck, Sparkles, Leaf, UserCheck];

  return (
    <div className="bg-[#FAF9F5] text-slate-800">
      
      {/* Dynamic FAQ Schema JSON-LD Script tag */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": serviceData.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })
      }} />

      {/* Breadcrumb Bar */}
      <div className="bg-[#121E19] text-slate-300 text-xs py-2.5 px-4 border-b border-[#22352C]">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={onGoHome} className="hover:text-white transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-500" />
          <span className="text-slate-400">Services</span>
          <ChevronRight className="w-3 h-3 text-slate-500" />
          <span className="text-emerald-400 font-bold">{serviceData.name} in {BUSINESS_INFO.mainCity}, TX</span>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative bg-[#16221D] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#253930]">
        
        {/* Background photo blend matching template 1 */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={serviceData.image}
            alt={serviceData.imageAlt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131E19] via-[#131E19]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23382F] border border-[#324E42] text-xs font-bold text-emerald-300 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Specialized Residential Service</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            {serviceData.name} in {BUSINESS_INFO.mainCity}, TX
          </h1>

          <p className="text-lg sm:text-2xl text-slate-200 max-w-3xl font-bold leading-snug">
            {serviceData.benefitStatement}
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
            Insured, background-checked local cleaning specialists serving {BUSINESS_INFO.county1} &amp; {BUSINESS_INFO.county2}.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenBooking(serviceData.id)}
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

          <div className="pt-4 flex items-center gap-2 text-xs text-amber-400 font-semibold">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold">{BUSINESS_INFO.rating}</span>
            <span className="text-slate-400">({BUSINESS_INFO.reviewsCount}+ Verified Client Reviews in {BUSINESS_INFO.mainCity})</span>
          </div>

        </div>
      </section>

      {/* SECTION 2: OVERVIEW */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              SERVICE OVERVIEW
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#131E19] tracking-tight">
              Professional {serviceData.name} Crafted for Your Home
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {serviceData.overviewParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-4/3">
              <img
                src={serviceData.image}
                alt={serviceData.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#16221D]/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-[#2B3E36] text-xs flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>100% Satisfaction Guaranteed on all {serviceData.name} jobs.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: WHAT'S INCLUDED */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              CHECKLIST &amp; TASK COVERAGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#131E19] tracking-tight">
              What's Included in Our {serviceData.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every area is meticulously cleaned according to our strict quality assurance guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.whatsIncluded.map((group, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/80 space-y-4 shadow-sm hover:border-emerald-500/40 transition-colors"
              >
                <h3 className="text-base font-extrabold text-[#131E19] border-b border-slate-200 pb-2">
                  {group.area}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: WHO IT'S IDEAL FOR / WHEN TO BOOK */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16221D] text-white rounded-3xl p-8 sm:p-12 border border-[#273B32] shadow-2xl space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              PERFECT MATCH
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Who It's Ideal For &amp; When to Book
            </h2>
            <p className="text-slate-300 text-sm">
              Our {serviceData.name} service is tailored for:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceData.idealFor.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#203129] border border-[#2E463B] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              SIMPLE 4-STEP PROCESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#131E19] tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Booking professional cleaning with Cleanfy is seamless and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-[#FAF9F5] border border-slate-200 rounded-2xl p-6 relative space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#16221D] text-emerald-400 font-black text-lg flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="font-extrabold text-base text-[#131E19]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE CLEANFY */}
      <section className="py-16 sm:py-20 bg-[#16221D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Why Choose {BUSINESS_INFO.name}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Five core standards that guarantee superior service and complete trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComp = whyChooseIcons[index] || Sparkles;
              return (
                <div
                  key={item.title}
                  className="bg-[#1D2C26] border border-[#2B4037] rounded-2xl p-5 space-y-3 text-left"
                >
                  <div className="p-3 rounded-xl bg-[#253930] text-emerald-400 w-fit border border-[#355044]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 7: FAQ (ACCORDION WITH SCHEMA MARKUP) */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            SERVICE FAQS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#131E19] tracking-tight">
            Frequently Asked Questions About {serviceData.name}
          </h2>
          <p className="text-slate-600 text-sm">
            Got questions specific to this service? Here are the answers:
          </p>
        </div>

        <div className="space-y-4">
          {serviceData.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-emerald-600 shadow-md ring-1 ring-emerald-500/20' : 'border-slate-200'
                }`}
              >
                <button
                  id={`service-faq-button-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`service-faq-answer-${index}`}
                >
                  <span className="text-base font-bold text-[#131E19]">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}>
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={`service-faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`service-faq-button-${index}`}
                    className="px-6 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2"
                  >
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* SECTION 8: AREAS SERVED */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-lg font-bold text-[#131E19]">
            Main Service Areas in Greater Austin
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
            {MAIN_CITIES.map((city, idx) => (
              <span key={city.slug} className="inline-flex items-center gap-2">
                <button
                  onClick={() => onSelectCity(city.slug)}
                  className="hover:text-emerald-700 hover:underline transition-colors"
                >
                  {city.name}, TX
                </button>
                {idx < MAIN_CITIES.length - 1 && <span className="text-slate-300">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[#16221D] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready for a Spotless Home?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Calculate your custom instant quote in less than 60 seconds with no hidden fees or contracts.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking(serviceData.id)}
              className="w-full sm:w-auto px-8 py-4 text-base font-extrabold text-[#131E19] bg-white rounded-xl hover:bg-slate-100 transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <span>Get Your Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-white bg-[#22352C] border border-[#344E41] rounded-xl hover:bg-[#2B4237] transition-all flex items-center justify-center gap-2"
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
