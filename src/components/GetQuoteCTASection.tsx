import { ArrowRight, Sparkles, CheckCircle, Clock } from 'lucide-react';

interface GetQuoteCTASectionProps {
  onOpenBooking: () => void;
}

export default function GetQuoteCTASection({ onOpenBooking }: GetQuoteCTASectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-[#16221D] text-white relative overflow-hidden">
      
      {/* Background interior photo overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/image_a29fd574.png"
          alt="Spotless clean interior backdrop"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131E19] via-[#131E19]/90 to-[#131E19]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C2C25]/90 border border-[#2E473C] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-semibold text-emerald-300 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant Pricing Calculator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Get Your Quote
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Experience the joy of a pristine, stress-free home. Calculate your customized instant estimate in under 60 seconds with no hidden fees or contracts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm font-semibold text-emerald-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Book in 60 Seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right CTA Button Box */}
          <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-9 py-5 text-lg font-black text-[#131E19] bg-white rounded-2xl hover:bg-slate-100 transition-all transform active:scale-95 shadow-2xl flex items-center justify-center gap-3 group focus:outline-none focus:ring-4 focus:ring-emerald-400"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-5 h-5 text-[#131E19] group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-slate-400 text-center lg:text-right mt-3 font-medium">
              Free instant quote · No credit card required to check prices
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
