import { MapPin, ArrowUpRight } from 'lucide-react';
import { MAIN_CITIES, BUSINESS_INFO } from '../data/cleaningData';

interface ServiceAreasSectionProps {
  onSelectCity: (citySlug: string) => void;
}

export default function ServiceAreasSection({ onSelectCity }: ServiceAreasSectionProps) {

  return (
    <section id="service-areas" className="py-20 lg:py-24 bg-[#FAF9F5] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Local SEO &amp; Coverage Map</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#131E19] tracking-tight">
            Cleaning Services in {BUSINESS_INFO.mainCity}, TX and Surrounding Area
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We proudly serve residential neighborhoods, condo towers, gated estates, and suburban communities across {BUSINESS_INFO.county1} &amp; {BUSINESS_INFO.county2}. Click highlighted cities to view dedicated local service details:
          </p>
        </div>

        {/* Featured City Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
          {MAIN_CITIES.slice(0, 10).map((city) => (
            <button
              key={city.slug}
              onClick={() => onSelectCity(city.slug)}
              className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-md transition-all text-left flex items-center justify-between group"
            >
              <div>
                <div className="font-bold text-[#131E19] group-hover:text-emerald-700 text-sm">
                  {city.name}
                </div>
                <div className="text-[11px] text-slate-500">{city.county}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
