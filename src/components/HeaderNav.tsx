import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, MAIN_CITIES } from '../data/cleaningData';

interface HeaderNavProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
  onSelectCity: (citySlug: string) => void;
  onOpenAbout: () => void;
  onOpenGallery: () => void;
  onOpenBlog: () => void;
  onOpenContact: () => void;
  onGoHome: () => void;
}

export default function HeaderNav({
  onOpenBooking,
  onSelectService,
  onSelectCity,
  onOpenAbout,
  onOpenGallery,
  onOpenBlog,
  onOpenContact,
  onGoHome
}: HeaderNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'about' | 'areas' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#16221D] border-b border-[#24352D] text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4" ref={navRef}>
          
          {/* Logo on Left */}
          <button
            onClick={() => {
              onGoHome();
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2.5 group text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors uppercase">
              {BUSINESS_INFO.shortName}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {/* Home */}
            <button
              onClick={onGoHome}
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md px-1.5 py-1 whitespace-nowrap shrink-0"
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
                aria-controls="services-dropdown"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md px-1.5 whitespace-nowrap shrink-0"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {activeDropdown === 'services' && (
                <div 
                  id="services-dropdown"
                  className="absolute top-full left-0 w-80 mt-1 py-3 bg-[#1A2923] border border-[#2D4238] rounded-xl shadow-2xl z-50 text-slate-200 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-4 py-2 border-b border-[#253930] text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                    Our Specialized Services
                  </div>
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectService(s.id);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-[#23362E] hover:text-white transition-colors flex items-center justify-between group focus:outline-none focus:bg-[#23362E]"
                    >
                      <div>
                        <div className="font-semibold text-white group-hover:text-emerald-300 text-sm">
                          {s.name}
                        </div>
                        <div className="text-xs text-slate-400 line-clamp-1">
                          {s.shortDesc}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                aria-expanded={activeDropdown === 'about'}
                aria-haspopup="true"
                aria-controls="about-dropdown"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md px-1.5 whitespace-nowrap shrink-0"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {activeDropdown === 'about' && (
                <div 
                  id="about-dropdown"
                  className="absolute top-full left-0 w-60 mt-1 py-2 bg-[#1A2923] border border-[#2D4238] rounded-xl shadow-2xl z-50 text-slate-200 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <button
                    onClick={() => {
                      onOpenAbout();
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#23362E] hover:text-emerald-300 transition-colors font-medium text-sm focus:outline-none focus:bg-[#23362E]"
                  >
                    About Cleanfy
                  </button>
                  <button
                    onClick={() => {
                      onOpenGallery();
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#23362E] hover:text-emerald-300 transition-colors font-medium text-sm focus:outline-none focus:bg-[#23362E]"
                  >
                    Gallery &amp; Before/After
                  </button>
                  <button
                    onClick={() => {
                      onOpenBlog();
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-[#23362E] hover:text-emerald-300 transition-colors font-medium text-sm focus:outline-none focus:bg-[#23362E]"
                  >
                    Cleaning Tips &amp; Blog
                  </button>
                </div>
              )}
            </div>

            {/* Areas We Serve Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'areas' ? null : 'areas')}
                aria-expanded={activeDropdown === 'areas'}
                aria-haspopup="true"
                aria-controls="areas-dropdown"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md px-1.5 whitespace-nowrap shrink-0"
              >
                <span>Areas We Serve</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeDropdown === 'areas' ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {activeDropdown === 'areas' && (
                <div 
                  id="areas-dropdown"
                  className="absolute top-full left-0 w-72 mt-1 py-3 bg-[#1A2923] border border-[#2D4238] rounded-xl shadow-2xl z-50 text-slate-200 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-4 py-1.5 text-xs font-semibold text-emerald-400 tracking-wider uppercase border-b border-[#253930]">
                    Main Cities &amp; Regions
                  </div>
                  <div className="max-h-80 overflow-y-auto py-1">
                    {MAIN_CITIES.map((city) => (
                      <button
                        key={city.slug}
                        onClick={() => {
                          onSelectCity(city.slug);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-[#23362E] hover:text-emerald-300 transition-colors flex items-center justify-between text-sm focus:outline-none focus:bg-[#23362E]"
                      >
                        <span className="font-medium text-white">{city.name}</span>
                        <span className="text-xs text-slate-400">{city.county}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md px-1.5 py-1 whitespace-nowrap shrink-0"
            >
              Contact Us
            </button>
          </nav>

          {/* Right Header Phone & Book Now Button */}
          <div className="hidden sm:flex items-center gap-5 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md px-2 py-1"
            >
              <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#0F1814] border border-[#2B4237] rounded-lg hover:bg-[#1C2C25] hover:border-emerald-500 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#0F1814] border border-[#2B4237] rounded-md shrink-0 sm:hidden"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-[#23362E] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-menu"
          role="region"
          aria-label="Mobile Navigation Drawer"
          className="lg:hidden bg-[#16221D] border-t border-[#253930] px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-2 text-base font-medium">
            <button
              onClick={() => {
                onGoHome();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-[#22352C] text-white font-semibold"
            >
              Home
            </button>

            {/* Services Mobile Accordion */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between text-left py-2.5 px-3 rounded-lg hover:bg-[#22352C] text-slate-200"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'services' && (
                <div className="ml-4 pl-3 border-l-2 border-emerald-500/40 my-1 space-y-1 py-1">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectService(s.id);
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 text-sm text-slate-300 hover:text-emerald-400"
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About Mobile Accordion */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'about' ? null : 'about')}
                className="w-full flex items-center justify-between text-left py-2.5 px-3 rounded-lg hover:bg-[#22352C] text-slate-200"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'about' && (
                <div className="ml-4 pl-3 border-l-2 border-emerald-500/40 my-1 space-y-1 py-1">
                  <button
                    onClick={() => {
                      onOpenAbout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-sm text-slate-300 hover:text-emerald-400"
                  >
                    About Cleanfy
                  </button>
                  <button
                    onClick={() => {
                      onOpenGallery();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-sm text-slate-300 hover:text-emerald-400"
                  >
                    Gallery &amp; Before/After
                  </button>
                  <button
                    onClick={() => {
                      onOpenBlog();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-sm text-slate-300 hover:text-emerald-400"
                  >
                    Cleaning Tips &amp; Blog
                  </button>
                </div>
              )}
            </div>

            {/* Areas Mobile Accordion */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'areas' ? null : 'areas')}
                className="w-full flex items-center justify-between text-left py-2.5 px-3 rounded-lg hover:bg-[#22352C] text-slate-200"
              >
                <span>Areas We Serve</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'areas' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpandedSection === 'areas' && (
                <div className="ml-4 pl-3 border-l-2 border-emerald-500/40 my-1 space-y-1 py-1 max-h-60 overflow-y-auto">
                  {MAIN_CITIES.map((city) => (
                    <button
                      key={city.slug}
                      onClick={() => {
                        onSelectCity(city.slug);
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left py-1.5 text-sm text-slate-300 hover:text-emerald-400"
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-[#22352C] text-slate-200"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-4 border-t border-[#253930] flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#22352C] text-white font-bold text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 px-4 rounded-xl bg-white text-[#16221D] font-extrabold text-center shadow-lg"
            >
              Get A Free Quote Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
