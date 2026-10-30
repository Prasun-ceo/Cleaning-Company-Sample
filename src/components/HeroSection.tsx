import { Star, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenBooking, onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative bg-[#16221D] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
      
      {/* Hero Split Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Background template photo */}
          <img
            src="/assets/aistudio/image_a29fd574.png"
            alt="Professional home cleaning service"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Dark gradient overlay matching Template 1 (#16221D / #131E19) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#131E19] via-[#131E19]/90 to-[#131E19]/40 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131E19] via-transparent to-[#131E19]/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          
          {/* Kicker label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23382F]/80 border border-[#324E42] backdrop-blur-sm text-xs font-semibold text-emerald-300 tracking-wider uppercase">
            <span>Residential Home Cleaning</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] text-wrap balance">
            Professional Cleaning Services in{' '}
            <span className="text-white">
              {BUSINESS_INFO.mainCity} &amp; {BUSINESS_INFO.region}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
            Reliable. Insured. Trusted by {BUSINESS_INFO.clientsCount} Clients
          </p>

          {/* Supporting line */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-medium leading-relaxed">
            Serving {BUSINESS_INFO.locationsCount} locations in {BUSINESS_INFO.county1} &amp; {BUSINESS_INFO.county2} with meticulous care, eco-friendly products, and guaranteed satisfaction.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 text-base font-bold text-[#131E19] bg-white rounded-xl hover:bg-slate-100 transition-all transform active:scale-95 shadow-2xl flex items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-5 h-5 text-[#131E19] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenContact}
              className="px-7 py-4 text-base font-semibold text-white bg-[#1F3128]/90 border border-[#3A5346] rounded-xl hover:bg-[#283E34] hover:border-emerald-400/60 transition-all flex items-center justify-center gap-2 backdrop-blur-md focus:outline-none"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Ratings & Trust badge footer line */}
          <div className="pt-6 border-t border-[#2A3E34]/80 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">{BUSINESS_INFO.rating}</span>
              <span>from 500+ customers</span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
