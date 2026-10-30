import { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';

interface GalleryModalProps {
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function GalleryModal({ onClose, onOpenBooking }: GalleryModalProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto"
      >
        
        {/* Header */}
        <div className="bg-[#16221D] text-white p-6 flex items-center justify-between border-b border-[#253930]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#23362E] text-emerald-400">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h2 id="gallery-modal-title" className="text-2xl font-black text-white">
                Gallery &amp; Before / After
              </h2>
              <p className="text-xs text-slate-300">Real transformation results from Cleanfy clients</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-white hover:bg-[#23362E] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          <p className="text-sm text-slate-600">
            Slide the handle left or right to see how our professional cleaning team transforms messy, dusty living areas into sparkling clean homes.
          </p>

          {/* Interactive Before / After Comparison */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between">
              <span>BEFORE: Messy &amp; Cluttered</span>
              <span>AFTER: Cleanfy Deep Clean</span>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-300 select-none shadow-lg">
              {/* After Image */}
              <img
                src="/assets/aistudio/image_3a535c6b.png"
                alt="Living room after professional deep cleaning"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Before Image Overlaid with Clip Path */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/assets/aistudio/image_a29fd574.png"
                  alt="Living room before cleaning"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/75 text-white text-xs font-bold px-3 py-1 rounded-md">
                  BEFORE
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                AFTER
              </div>

              {/* Slider Controller */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                aria-label="Before and after image comparison slider"
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />

              {/* Slider Line Visual */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-800 font-bold text-xs border border-slate-300">
                  ↔
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              ✓ All photos taken directly from verified Cleanfy client jobs in Austin, TX.
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#16221D] text-white font-extrabold rounded-xl hover:bg-[#23362E] transition-all flex items-center justify-center gap-2"
            >
              <span>Get Your Home Cleaned Like This</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

