import { useEffect } from 'react';
import { X, ShieldCheck, Users, Leaf, Award, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface AboutModalProps {
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function AboutModal({ onClose, onOpenBooking }: AboutModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto">
        
        <div className="bg-[#16221D] text-white p-6 flex items-center justify-between border-b border-[#253930]">
          <div>
            <h2 id="about-modal-title" className="text-2xl font-black text-white">About {BUSINESS_INFO.name}</h2>
            <p className="text-xs text-slate-300">Austin's Most Trusted House Cleaning Service Since 2014</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close about modal"
            className="p-2 text-slate-400 hover:text-white hover:bg-[#23362E] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Founded over {BUSINESS_INFO.yearsExperience} years ago, {BUSINESS_INFO.name} was built on a simple promise: to provide hard-working homeowners across {BUSINESS_INFO.mainCity} with reliable, top-tier residential cleaning backed by complete trust and transparent pricing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-extrabold text-[#16221D]">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Fully Insured &amp; Bonded</span>
              </div>
              <p className="text-xs text-slate-600">
                Your home and belongings are protected by our $2,000,000 comprehensive liability coverage.
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-extrabold text-[#16221D]">
                <Users className="w-5 h-5 text-emerald-600" />
                <span>Vetted Local Staff</span>
              </div>
              <p className="text-xs text-slate-600">
                Every cleaner undergoes rigorous national background checks, drug screenings, and 80+ hours of training.
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-extrabold text-[#16221D]">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <span>100% Eco-Friendly</span>
              </div>
              <p className="text-xs text-slate-600">
                Non-toxic, plant-based products and HEPA filtration vacuums safe for kids and pets.
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-extrabold text-[#16221D]">
                <Award className="w-5 h-5 text-emerald-600" />
                <span>Satisfaction Guarantee</span>
              </div>
              <p className="text-xs text-slate-600">
                If any area is not cleaned to your perfection, we will re-clean it within 24 hours free of charge.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 font-bold hover:bg-slate-100 text-sm"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 bg-[#16221D] text-white font-extrabold rounded-xl hover:bg-[#23362E] transition-all flex items-center gap-2 text-sm"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
