import { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Instagram,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  BEFORE_AFTER_PAIRS,
  GalleryItem
} from '../data/galleryData';
import { BUSINESS_INFO } from '../data/cleaningData';

interface GalleryPageViewProps {
  onOpenBooking: () => void;
}

export default function GalleryPageView({ onOpenBooking }: GalleryPageViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState<number>(50);

  useEffect(() => {
    document.title = `Cleaning Gallery | ${BUSINESS_INFO.name}, ${BUSINESS_INFO.mainCity}`;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', `Explore photos of our house cleaning, deep cleaning, organizing, and move-out projects across ${BUSINESS_INFO.mainCity}, TX.`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
  };

  const currentLightboxItem: GalleryItem | undefined = lightboxIndex !== null ? filteredItems[lightboxIndex] : undefined;

  return (
    <div className="bg-[#FAF9F5] text-slate-800">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#16221D] text-white py-16 sm:py-20 relative overflow-hidden border-b border-[#253930]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23382F] border border-[#324E42] text-xs font-bold text-emerald-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Visual Work Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Work
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Explore recent residential cleaning, deep scrubbing, and organizing transformations across {BUSINESS_INFO.mainCity}, TX.
          </p>
        </div>
      </section>

      {/* SECTION 2: CATEGORY FILTER BAR */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#16221D] text-white shadow-md'
                      : 'bg-[#FAF9F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: IMAGE GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#16221D]/90 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md border border-[#2A3E34]">
                  {item.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-base text-[#131E19] group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: BEFORE-AND-AFTER SLIDER */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              TRANSFORMATION SHOWCASE
            </div>
            <h2 className="text-3xl font-black text-[#131E19]">
              Before &amp; After Comparison
            </h2>
            <p className="text-slate-600 text-sm">
              Slide to view real cleaning results achieved by Cleanfy professionals.
            </p>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 shadow-xl select-none">
            {/* After Image */}
            <img
              src={BEFORE_AFTER_PAIRS[0].afterImage}
              alt={BEFORE_AFTER_PAIRS[0].afterAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Before Image Overlaid */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${beforeAfterSlider}%` }}
            >
              <img
                src={BEFORE_AFTER_PAIRS[0].beforeImage}
                alt={BEFORE_AFTER_PAIRS[0].beforeAlt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-md">
                BEFORE
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-md">
              AFTER
            </div>

            {/* Range Input Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={beforeAfterSlider}
              onChange={(e) => setBeforeAfterSlider(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none z-10"
              style={{ left: `${beforeAfterSlider}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-800 font-bold text-xs border border-slate-300">
                ↔
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-slate-500 font-semibold">
            {BEFORE_AFTER_PAIRS[0].title} · {BEFORE_AFTER_PAIRS[0].location}
          </div>

        </div>
      </section>

      {/* SECTION 5: INSTAGRAM REEL / EMBED BANNER */}
      <section className="py-16 bg-[#16221D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Instagram className="w-12 h-12 text-emerald-400 mx-auto" />
          <h2 className="text-3xl font-black text-white">
            Follow Our Daily Cleanings on Instagram
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Watch our latest reel transformations, cleaning tips, and behind-the-scenes moments `@cleanfyhomes`.
          </p>
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#22352C] border border-[#344E41] rounded-xl text-white font-bold text-sm hover:bg-[#2B4237] transition-all"
          >
            <Instagram className="w-4 h-4 text-emerald-400" />
            <span>Visit @cleanfyhomes on Instagram</span>
          </a>
        </div>
      </section>

      {/* SECTION 6: FINAL CALL TO ACTION */}
      <section className="py-16 bg-[#FAF9F5] text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#131E19]">
            Want Results Like These in Your Home?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Get a free customized instant quote in less than 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-[#16221D] text-white font-extrabold text-base rounded-xl hover:bg-[#23362E] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-5 h-5 text-emerald-400" />
            </button>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 border border-slate-300 text-slate-800 font-bold text-base rounded-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-slate-700" />
              <span>Instagram Page</span>
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={handleNextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4">
            <img
              src={currentLightboxItem.image}
              alt={currentLightboxItem.imageAlt}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-slate-700"
              referrerPolicy="no-referrer"
            />

            <div className="text-center text-white space-y-1 max-w-xl">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                {currentLightboxItem.category} · {currentLightboxItem.location}
              </div>
              <h3 className="text-xl font-bold text-white">
                {currentLightboxItem.title}
              </h3>
              <p className="text-xs text-slate-300">
                {currentLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
