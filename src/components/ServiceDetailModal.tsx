import { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/cleaningData';

interface ServiceDetailModalProps {
  serviceId: string;
  onClose: () => void;
  onOpenBooking: (serviceId?: string) => void;
}

export default function ServiceDetailModal({ serviceId, onClose, onOpenBooking }: ServiceDetailModalProps) {
  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

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
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto">
        
        {/* Header Banner */}
        <div className="relative h-48 bg-slate-900">
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16221D] via-[#16221D]/70 to-transparent" />
          
          <button
            onClick={onClose}
            aria-label="Close service modal"
            className="absolute top-4 right-4 p-2 text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Specialized Service
            </span>
            <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-black">
              {service.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            {service.fullDesc}
          </p>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              What's Included in {service.name}:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 p-3 bg-[#FAF9F5] rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-600 font-semibold">Starting Price:</div>
              <div className="text-2xl font-black text-emerald-800">${service.basePrice}</div>
            </div>
            <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Guaranteed Satisfaction</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 border border-slate-300 rounded-xl text-slate-700 font-bold hover:bg-slate-100 text-sm"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking(service.id);
              }}
              className="w-full sm:w-auto px-7 py-3 bg-[#16221D] text-white font-extrabold rounded-xl hover:bg-[#23362E] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Book {service.name} Now</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
