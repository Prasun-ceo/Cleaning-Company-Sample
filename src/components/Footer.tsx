import { Phone, Mail, MapPin, Instagram, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, MAIN_CITIES } from '../data/cleaningData';

interface FooterProps {
  onOpenBooking: () => void;
  onSelectService: (serviceId: string) => void;
  onSelectCity: (citySlug: string) => void;
  onOpenAbout: () => void;
  onOpenGallery: () => void;
  onOpenBlog: () => void;
  onOpenContact: () => void;
  onGoHome: () => void;
}

export default function Footer({
  onOpenBooking,
  onSelectService,
  onSelectCity,
  onOpenAbout,
  onOpenGallery,
  onOpenBlog,
  onOpenContact,
  onGoHome
}: FooterProps) {
  return (
    <footer className="bg-[#0F1714] text-slate-300 border-t border-[#1C2C25] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top CTA Banner inside Footer */}
        <div className="bg-[#182620] border border-[#273B32] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-black text-white">Ready for a sparkling clean home?</h3>
            <p className="text-sm text-slate-300">Book online in 60 seconds or call our local team today.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#22352C] text-white font-bold text-sm hover:bg-[#2B4237] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#0F1714] font-black text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4 text-[#0F1714]" />
            </button>
          </div>
        </div>

        {/* 4 Columns Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-4">
            <button
              onClick={onGoHome}
              className="text-2xl font-black tracking-tight text-white hover:text-emerald-400 transition-colors uppercase flex items-center gap-2 focus:outline-none"
            >
              <span>{BUSINESS_INFO.name}</span>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed">
              Austin's premier residential cleaning company. Fully insured, background-checked cleaners bringing 5-star perfection to every room.
            </p>

            <div className="space-y-2 text-xs pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>

            {/* BBB Accreditation Badge & Instagram Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* BBB Badge */}
              <a
                href={BUSINESS_INFO.bbbProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#192721] border border-[#2A3E35] text-xs font-bold text-white hover:border-emerald-500 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase leading-none">BBB Accredited</div>
                  <div className="text-emerald-300 font-extrabold text-xs">A+ Rating</div>
                </div>
              </a>

              {/* Instagram link */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#192721] border border-[#2A3E35] text-slate-300 hover:text-white hover:border-emerald-500 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#1F3028] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={onGoHome} className="hover:text-emerald-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-emerald-400 transition-colors">
                  About Cleanfy
                </button>
              </li>
              <li>
                <button onClick={onOpenGallery} className="hover:text-emerald-400 transition-colors">
                  Gallery &amp; Before/After
                </button>
              </li>
              <li>
                <button onClick={onOpenBlog} className="hover:text-emerald-400 transition-colors">
                  Cleaning Tips &amp; Blog
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-emerald-400 transition-colors font-semibold text-emerald-300">
                  Book A Cleaning Online
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Cleaning Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#1F3028] pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Service Areas Served */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#1F3028] pb-2">
              Main Areas Served
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {MAIN_CITIES.map((c) => (
                <li key={c.slug}>
                  <button
                    onClick={() => onSelectCity(c.slug)}
                    className="hover:text-emerald-400 transition-colors text-left flex items-center justify-between w-full"
                  >
                    <span>{c.name}, TX</span>
                    <span className="text-[10px] text-slate-500">{c.county}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal line */}
        <div className="pt-8 border-t border-[#1C2C25] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenAbout} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={onOpenAbout} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={onOpenContact} className="hover:text-slate-300">Sitemap</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
