import { MapPin, Phone, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export default function TopHeaderStrip() {
  return (
    <div className="bg-[#121E19] text-[#A3B8B0] text-xs py-2 px-4 border-b border-[#21332C]/60 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left location indicator */}
        <div className="flex items-center gap-1.5 font-medium">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>📍 Serving {BUSINESS_INFO.mainCity} &amp; {BUSINESS_INFO.region}</span>
        </div>

        {/* Right phone & Google Business profile link */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto">
          <a
            href={BUSINESS_INFO.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
            <span className="font-semibold text-white">{BUSINESS_INFO.rating}</span>
            <span className="text-slate-400">({BUSINESS_INFO.reviewsCount}+ Google Reviews)</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-white font-semibold hover:text-emerald-400 transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
