import { useState } from 'react';
import { SERVICES, ROOM_CHECKLISTS } from '../data/cleaningData';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface CleaningServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export default function CleaningServicesSection({
  onSelectService,
  onOpenBooking
}: CleaningServicesSectionProps) {
  const [selectedRoomTab, setSelectedRoomTab] = useState<'All' | 'Kitchen' | 'Bathrooms' | 'LivingAreas' | 'Bedrooms'>('All');

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-[#FAF9F5] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Comprehensive Residential Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#131E19] tracking-tight">
            Our Cleaning Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Tailored cleaning solutions for every home, schedule, and lifestyle across Greater Austin.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {s.popular && (
                    <div className="absolute top-3 right-3 bg-[#16221D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border border-[#2B3E36]">
                      ★ Most Popular
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-extrabold text-[#131E19] group-hover:text-emerald-700 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {s.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(s.id)}
                  className="text-xs font-bold text-slate-600 hover:text-emerald-800 transition-colors underline underline-offset-4"
                >
                  Learn Details
                </button>

                <button
                  onClick={() => onOpenBooking(s.id)}
                  className="px-4 py-2.5 text-xs font-extrabold text-white bg-[#16221D] hover:bg-[#23352C] rounded-lg transition-all flex items-center gap-1.5 shadow-sm focus:outline-none"
                >
                  <span>Book A Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Room By Room Section (Matching Template Image 2) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Header & Image Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  WHAT WE TAKE CARE OF
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#131E19] mt-2 tracking-tight">
                  A proper clean, room by room.
                </h3>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-4/3">
                <img
                  src="/assets/aistudio/image_3a535c6b.png"
                  alt="A proper clean room by room dining area"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-xs text-slate-500 italic">
                * Exact inclusions may vary slightly based on service level (Regular vs Deep Clean).
              </p>
            </div>

            {/* Right Room Checklists Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              
              {/* Kitchen */}
              <div className="space-y-3 p-5 bg-[#FAF9F5] rounded-2xl border border-slate-200/60">
                <h4 className="text-base font-bold text-[#131E19] border-b border-slate-200 pb-2">
                  Kitchen
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {ROOM_CHECKLISTS.Kitchen.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bathrooms */}
              <div className="space-y-3 p-5 bg-[#FAF9F5] rounded-2xl border border-slate-200/60">
                <h4 className="text-base font-bold text-[#131E19] border-b border-slate-200 pb-2">
                  Bathrooms
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {ROOM_CHECKLISTS.Bathrooms.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Living Areas */}
              <div className="space-y-3 p-5 bg-[#FAF9F5] rounded-2xl border border-slate-200/60">
                <h4 className="text-base font-bold text-[#131E19] border-b border-slate-200 pb-2">
                  Living Areas
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {ROOM_CHECKLISTS.LivingAreas.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bedrooms */}
              <div className="space-y-3 p-5 bg-[#FAF9F5] rounded-2xl border border-slate-200/60">
                <h4 className="text-base font-bold text-[#131E19] border-b border-slate-200 pb-2">
                  Bedrooms
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {ROOM_CHECKLISTS.Bedrooms.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
