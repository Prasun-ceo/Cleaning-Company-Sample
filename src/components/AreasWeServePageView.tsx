import { useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { MAIN_CITIES, ALL_SERVICE_LOCATIONS, SERVICES, BUSINESS_INFO } from '../data/cleaningData';

interface AreasWeServePageViewProps {
  onSelectCity: (citySlug: string) => void;
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
  onOpenContact: () => void;
  onGoHome: () => void;
}

export default function AreasWeServePageView({
  onSelectCity,
  onSelectService,
  onOpenBooking,
  onOpenContact,
  onGoHome
}: AreasWeServePageViewProps) {
  
  useEffect(() => {
    document.title = `Areas We Serve | ${BUSINESS_INFO.name}, ${BUSINESS_INFO.region}`;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', `Explore all 50+ service locations across ${BUSINESS_INFO.county1} and ${BUSINESS_INFO.county2} served by ${BUSINESS_INFO.name}.`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Map for linked cities lookup
  const mainCitiesMap = new Map<string, string>();
  MAIN_CITIES.forEach((c) => {
    mainCitiesMap.set(c.name.toLowerCase(), c.slug);
  });

  return (
    <div className="bg-[#FAF9F5] text-slate-800">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#16221D] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#253930]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23382F] border border-[#324E42] text-xs font-bold text-emerald-300 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Central Texas Coverage Map</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Areas We Serve in {BUSINESS_INFO.region}
          </h1>

          <p className="text-lg sm:text-2xl text-slate-200 font-bold max-w-2xl mx-auto leading-snug">
            Serving 50+ locations across {BUSINESS_INFO.county1} and {BUSINESS_INFO.county2} with 5-star, background-checked residential maid services.
          </p>
        </div>
      </section>

      {/* SECTION 2: MAIN CITIES GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            PRIMARY SERVICE HUB PAGES
          </div>
          <h2 className="text-3xl font-black text-[#131E19]">
            Main Cities &amp; Dedicated Hubs
          </h2>
          <p className="text-slate-600 text-sm">
            Click any city below to view local service details, zip codes, and neighborhood reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAIN_CITIES.map((city) => (
            <div
              key={city.slug}
              onClick={() => onSelectCity(city.slug)}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                    {city.county}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-extrabold text-[#131E19] group-hover:text-emerald-700 transition-colors">
                  {city.name}, TX
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {city.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {city.zipCodes.slice(0, 4).map(zip => (
                    <span key={zip} className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {zip}
                    </span>
                  ))}
                  {city.zipCodes.length > 4 && (
                    <span className="text-[11px] font-bold text-slate-400 px-1 py-0.5">
                      +{city.zipCodes.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 text-xs font-bold text-emerald-700 group-hover:underline flex items-center gap-1">
                <span>View {city.name} Local Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: MAP EMBED */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              GEOGRAPHIC COVERAGE
            </div>
            <h2 className="text-3xl font-black text-[#131E19]">
              Service Territory Map
            </h2>
            <p className="text-slate-600 text-sm">
              Our central headquarters in Austin dispatches dedicated cleaning crews throughout Travis &amp; Williamson Counties daily.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-xl h-96 relative bg-slate-100">
            <iframe
              title="Cleanfy Home Services Central Texas Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220491.73482703816!2d-97.89348560882193!3d30.30746243296181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc0391%3A0x5d7f4e1b0080d901!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: OTHER LOCATIONS (DOT-SEPARATED LIST) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            ALL SERVED COMMUNITIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#131E19]">
            Full Directory of All Served Suburbs &amp; Towns
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Highlighted cities link directly to dedicated local city pages:
          </p>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm leading-loose text-sm sm:text-base">
          <p className="text-slate-600 leading-[2.2]">
            {ALL_SERVICE_LOCATIONS.map((loc, idx) => {
              const slug = mainCitiesMap.get(loc.toLowerCase());
              const isLinked = !!slug;

              return (
                <span key={loc}>
                  {isLinked ? (
                    <button
                      onClick={() => onSelectCity(slug)}
                      className="font-extrabold text-[#131E19] underline decoration-emerald-500/60 decoration-2 underline-offset-4 hover:text-emerald-700 transition-all focus:outline-none"
                    >
                      {loc}
                    </button>
                  ) : (
                    <span className="text-slate-600">{loc}</span>
                  )}
                  {idx < ALL_SERVICE_LOCATIONS.length - 1 && (
                    <span className="mx-2.5 text-emerald-600 font-bold select-none">•</span>
                  )}
                </span>
              );
            })}
          </p>
        </div>
      </section>

      {/* SECTION 5: SERVICES AVAILABLE EVERYWHERE */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              UNIFORM EXCELLENCE
            </div>
            <h2 className="text-3xl font-black text-[#131E19]">
              Services Available in Every Location
            </h2>
            <p className="text-slate-600 text-sm">
              Our complete lineup of 6 residential services is offered across all Central Texas service locations:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectService(s.id)}
                className="p-4 bg-[#FAF9F5] border border-slate-200 rounded-2xl text-center hover:border-emerald-500 transition-all group"
              >
                <div className="font-extrabold text-sm text-[#131E19] group-hover:text-emerald-700">
                  {s.name}
                </div>
                <div className="text-[11px] text-emerald-700 font-bold mt-1">
                  View Service →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: "DON'T SEE YOUR CITY?" BLOCK */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16221D] text-white rounded-3xl p-8 sm:p-12 border border-[#273B32] shadow-2xl text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#23382F] text-emerald-400 flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Don't See Your Specific City or Subdivision Listed?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            We frequently expand our dispatch routes throughout Travis and Williamson counties. Give us a call or request a quick online quote—chances are we already serve your neighborhood!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Local Dispatch: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#16221D] font-extrabold rounded-xl hover:bg-slate-100 transition-all"
            >
              Request Free Online Quote
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <section className="py-16 bg-[#16221D] text-white text-center border-t border-[#253930]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Book Your Central Texas Home Cleaning
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Instant quote calculation in 60 seconds. No contracts or hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
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
