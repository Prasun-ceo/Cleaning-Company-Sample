import { useState } from 'react';
import TopHeaderStrip from './components/TopHeaderStrip';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import TrustStatsSection from './components/TrustStatsSection';
import CleaningServicesSection from './components/CleaningServicesSection';
import HomeBeforeAfterSection from './components/HomeBeforeAfterSection';
import WhyChooseSection from './components/WhyChooseSection';
import FaqSection from './components/FaqSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServiceAreasSection from './components/ServiceAreasSection';
import GetQuoteCTASection from './components/GetQuoteCTASection';
import Footer from './components/Footer';

// Full Page Views
import ServicePageView from './components/ServicePageView';
import AboutPageView from './components/AboutPageView';
import GalleryPageView from './components/GalleryPageView';
import BlogPageView from './components/BlogPageView';
import AreasWeServePageView from './components/AreasWeServePageView';
import CityPageView from './components/CityPageView';
import ContactPageView from './components/ContactPageView';

// Modals
import BookingQuoteModal from './components/BookingQuoteModal';
import CityDetailModal from './components/CityDetailModal';

// List of known service IDs
const KNOWN_SERVICES = [
  'organizing',
  'regular-house-cleaning',
  'deep-cleaning',
  'post-construction',
  'airbnb-cleaning',
  'move-in-move-out'
];

export default function App() {
  // Page view state: 'home' | 'about' | 'gallery' | 'blog' | 'areas-we-serve' | 'contact' | service id | city slug
  const [currentPageView, setCurrentPageView] = useState<string>('home');

  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);

  const [activeCityModalSlug, setActiveCityModalSlug] = useState<string | null>(null);

  // Handlers
  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId || (KNOWN_SERVICES.includes(currentPageView) ? currentPageView : undefined));
    setBookingModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setCurrentPageView(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCity = (citySlug: string) => {
    setCurrentPageView(`city-${citySlug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAreasWeServe = () => {
    setCurrentPageView('areas-we-serve');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    setCurrentPageView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentPageView('home');
    document.title = "Cleanfy Home Services | Professional House Cleaning Austin & Central TX";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicePage = KNOWN_SERVICES.includes(currentPageView);
  const isCityPage = currentPageView.startsWith('city-');
  const activeCitySlug = isCityPage ? currentPageView.replace('city-', '') : null;

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-slate-800 flex flex-col selection:bg-emerald-500 selection:text-white">
      
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-emerald-700 focus:text-white focus:font-extrabold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Top Bar Header Strip */}
      <TopHeaderStrip />

      {/* Main Sticky Navigation */}
      <HeaderNav
        onOpenBooking={handleOpenBooking}
        onSelectService={handleSelectService}
        onSelectCity={handleSelectCity}
        onOpenAbout={() => {
          setCurrentPageView('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenGallery={() => {
          setCurrentPageView('gallery');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBlog={() => {
          setCurrentPageView('blog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={handleOpenContact}
        onGoHome={handleGoHome}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {currentPageView === 'home' && (
          <>
            {/* SECTION 1: HERO */}
            <HeroSection
              onOpenBooking={() => handleOpenBooking()}
              onOpenContact={handleOpenContact}
            />

            {/* SECTION 2: TRUST STATS */}
            <TrustStatsSection />

            {/* SECTION 3: OUR CLEANING SERVICES */}
            <CleaningServicesSection
              onSelectService={handleSelectService}
              onOpenBooking={handleOpenBooking}
            />

            {/* HOME BEFORE AND AFTER SLIDERS */}
            <HomeBeforeAfterSection
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* SECTION 4: WHY CHOOSE CLEANFY */}
            <WhyChooseSection />

            {/* SECTION 5: FAQ */}
            <FaqSection
              onOpenContact={handleOpenContact}
            />

            {/* SECTION 6: TESTIMONIALS */}
            <TestimonialsSection />

            {/* SECTION 7: SERVICE AREAS (LOCAL SEO BLOCK) */}
            <ServiceAreasSection
              onSelectCity={handleSelectCity}
            />

            {/* SECTION 8: GET YOUR QUOTE (FINAL CALL TO ACTION) */}
            <GetQuoteCTASection
              onOpenBooking={() => handleOpenBooking()}
            />
          </>
        )}

        {currentPageView === 'about' && (
          <AboutPageView
            onOpenBooking={() => handleOpenBooking()}
            onOpenContact={handleOpenContact}
            onGoHome={handleGoHome}
          />
        )}

        {currentPageView === 'gallery' && (
          <GalleryPageView
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPageView === 'blog' && (
          <BlogPageView
            onOpenBooking={() => handleOpenBooking()}
            onSelectCity={handleSelectCity}
          />
        )}

        {currentPageView === 'areas-we-serve' && (
          <AreasWeServePageView
            onSelectCity={handleSelectCity}
            onSelectService={handleSelectService}
            onOpenBooking={() => handleOpenBooking()}
            onOpenContact={handleOpenContact}
            onGoHome={handleGoHome}
          />
        )}

        {currentPageView === 'contact' && (
          <ContactPageView
            onOpenBooking={() => handleOpenBooking()}
            onGoHome={handleGoHome}
          />
        )}

        {isCityPage && activeCitySlug && (
          <CityPageView
            citySlug={activeCitySlug}
            onOpenBooking={handleOpenBooking}
            onSelectService={handleSelectService}
            onSelectCity={handleSelectCity}
            onOpenAreasWeServe={handleOpenAreasWeServe}
            onGoHome={handleGoHome}
          />
        )}

        {isServicePage && (
          <ServicePageView
            serviceId={currentPageView}
            onOpenBooking={handleOpenBooking}
            onSelectCity={handleSelectCity}
            onGoHome={handleGoHome}
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onSelectService={handleSelectService}
        onSelectCity={handleSelectCity}
        onOpenAbout={() => {
          setCurrentPageView('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenGallery={() => {
          setCurrentPageView('gallery');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBlog={() => {
          setCurrentPageView('blog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={handleOpenContact}
        onGoHome={handleGoHome}
      />

      {/* MODALS */}

      {/* Booking / Instant Quote Modal */}
      {bookingModalOpen && (
        <BookingQuoteModal
          initialServiceId={bookingServiceId}
          onClose={() => setBookingModalOpen(false)}
        />
      )}

      {/* City Detail Modal */}
      {activeCityModalSlug && (
        <CityDetailModal
          citySlug={activeCityModalSlug}
          onClose={() => setActiveCityModalSlug(null)}
          onOpenBooking={() => handleOpenBooking()}
        />
      )}

    </div>
  );
}
