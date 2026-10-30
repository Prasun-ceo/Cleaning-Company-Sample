import { useState } from 'react';
import { Sparkles, ArrowRight, MapPin } from 'lucide-react';

interface HomeBeforeAfterSectionProps {
  onOpenBooking: () => void;
}

export default function HomeBeforeAfterSection({ onOpenBooking }: HomeBeforeAfterSectionProps) {
  const [slider1Pos, setSlider1Pos] = useState<number>(50);
  const [slider2Pos, setSlider2Pos] = useState<number>(50);

  return (
    <section className="py-20 lg:py-24 bg-white border-y border-slate-200/80 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-semibold text-emerald-800 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Before &amp; After Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#131E19] tracking-tight">
            See the Cleanfy Difference
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Drag the interactive sliders below to compare real before &amp; after home cleaning results achieved across Austin.
          </p>
        </div>

        {/* Two Sliders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* SLIDER 1: Kitchen Deep Clean */}
          <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  Deep Cleaning
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  West Lake Hills, Austin
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#131E19]">
                Kitchen Deep Clean &amp; Degreasing
              </h3>

              <p className="text-xs text-slate-600">
                Stovetop grease removal, backsplash tile scrub, and appliance exterior polishing.
              </p>
            </div>

            {/* Interactive Slider Container */}
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-300 shadow-md select-none">
              {/* After Image */}
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&auto=format&fit=crop&q=80"
                alt="Spotless After Kitchen Clean"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Before Image Overlaid */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${slider1Pos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&auto=format&fit=crop&q=80"
                  alt="Messy Before Kitchen"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/80 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow">
                  BEFORE
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow">
                AFTER
              </div>

              {/* Range Input Control */}
              <input
                type="range"
                min="0"
                max="100"
                value={slider1Pos}
                onChange={(e) => setSlider1Pos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                aria-label="Slide to compare kitchen before and after"
              />

              {/* Visual Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none z-10"
                style={{ left: `${slider1Pos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-2xl flex items-center justify-center text-[#131E19] font-black text-xs border border-slate-300">
                  ↔
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 text-center font-medium">
              ↔ Drag handle left or right to compare before &amp; after
            </div>
          </div>

          {/* SLIDER 2: Living Room & Hardwood Restoration */}
          <div className="bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  Regular House Cleaning
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  Round Rock, TX
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#131E19]">
                Living Room &amp; Hardwood Restoration
              </h3>

              <p className="text-xs text-slate-600">
                Dusting high ledges, rug vacuuming, and damp mopping hardwood floors.
              </p>
            </div>

            {/* Interactive Slider Container */}
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-300 shadow-md select-none">
              {/* After Image */}
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&auto=format&fit=crop&q=80"
                alt="Spotless After Living Room Clean"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Before Image Overlaid */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${slider2Pos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80"
                  alt="Dusty Before Living Room"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/80 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow">
                  BEFORE
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow">
                AFTER
              </div>

              {/* Range Input Control */}
              <input
                type="range"
                min="0"
                max="100"
                value={slider2Pos}
                onChange={(e) => setSlider2Pos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                aria-label="Slide to compare living room before and after"
              />

              {/* Visual Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none z-10"
                style={{ left: `${slider2Pos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-2xl flex items-center justify-center text-[#131E19] font-black text-xs border border-slate-300">
                  ↔
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 text-center font-medium">
              ↔ Drag handle left or right to compare before &amp; after
            </div>
          </div>

        </div>

        {/* CTA Prompt below sliders */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#16221D] hover:bg-[#23362E] text-white font-extrabold text-sm rounded-xl transition-all shadow-xl"
          >
            <span>Get Your Home Cleaned Like This</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
