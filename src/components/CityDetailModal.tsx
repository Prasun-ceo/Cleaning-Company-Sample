import { useEffect } from 'react';
import { X, MapPin, CheckCircle2, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { MAIN_CITIES, BUSINESS_INFO } from '../data/cleaningData';

interface CityDetailModalProps {
  citySlug: string;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function CityDetailModal({ citySlug, onClose, onOpenBooking }: CityDetailModalProps) {
  const city = MAIN_CITIES.find(c => c.slug === citySlug) || MAIN_CITIES[0];

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
      aria-labelledby="city-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto">
        
        {/* Header */}
        <div className="bg-[#16221D] text-white p-6 flex items-center justify-between border-b border-[#253930]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#23362E] text-emerald-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 id="city-modal-title" className="text-2xl font-black text-white">
                Cleaning Services in {city.name}, TX
              </h2>
              <p className="text-xs text-slate-300">
                Local residential coverage for {city.county}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#23362E] rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-slate-700 leading-relaxed font-medium">
            {city.description} Our trained, insured cleaners provide 5-star home maintenance throughout {city.name} and surrounding neighborhoods.
          </p>

          <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Serving Zip Codes in {city.name}:
            </h4>
            <div className="flex flex-wrap gap-2">
              {city.zipCodes.map(zip => (
                <span key={zip} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#16221D]">
                  {zip}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Most Popular Services in {city.name}:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {city.popularServices.map(srv => (
                <div key={srv} className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl text-sm font-bold text-[#16221D]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-bold text-[#16221D] hover:text-emerald-700"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Local Team: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#16221D] text-white font-extrabold rounded-xl hover:bg-[#23362E] transition-all flex items-center justify-center gap-2"
            >
              <span>Get Quote for {city.name}</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
