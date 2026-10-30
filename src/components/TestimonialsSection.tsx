import { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/cleaningData';

export default function TestimonialsSection() {
  const [filterService, setFilterService] = useState<string>('All');
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredTestimonials = filterService === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.service === filterService);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-24 bg-[#121E19] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#21352B] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22352C] border border-[#324B3F] text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Testimonials
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Read real reviews from homeowners and short-term rental hosts across {BUSINESS_INFO.mainCity}.
            </p>
          </div>

          {/* Google rating overall summary badge */}
          <div className="bg-[#1C2C25] border border-[#2D453B] p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg">
            <div className="text-3xl font-black text-white tabular-nums">
              {BUSINESS_INFO.rating}
            </div>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                Based on {BUSINESS_INFO.reviewsCount}+ verified Google reviews
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-[#1B2923] border border-[#2B4036] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-emerald-500/50 transition-all shadow-md relative group"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Rating & Service tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-300 bg-[#253930] px-2.5 py-0.5 rounded-full border border-[#344E42]">
                    {review.service}
                  </span>
                </div>

                {/* Review body text */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer info */}
              <div className="pt-4 border-t border-[#273B32] flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-emerald-500/40 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {review.location} · {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
