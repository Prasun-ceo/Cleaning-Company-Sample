import { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Calendar as CalendarIcon, Sparkles, Clock, Calculator } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/cleaningData';

interface BookingQuoteModalProps {
  initialServiceId?: string;
  onClose: () => void;
}

export default function BookingQuoteModal({ initialServiceId, onClose }: BookingQuoteModalProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || 'regular-house-cleaning'
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [sqft, setSqft] = useState<number>(1800);
  const [frequency, setFrequency] = useState<'one-time' | 'weekly' | 'bi-weekly' | 'monthly'>('bi-weekly');
  
  // Add-ons
  const [addOns, setAddOns] = useState<{ [key: string]: boolean }>({
    fridge: false,
    oven: false,
    cabinets: false,
    windows: false,
    laundry: false
  });

  // Step state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Form Contact Info
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate Base Price
  const currentServiceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[1];
  let basePrice = currentServiceObj.basePrice;

  // Add bedroom & bathroom adjustments
  basePrice += (bedrooms - 1) * 25;
  basePrice += (bathrooms - 1) * 30;

  // Add sqft adjustment
  if (sqft > 1500) {
    basePrice += Math.floor((sqft - 1500) / 500) * 20;
  }

  // Add-ons prices
  let addOnsTotal = 0;
  if (addOns.fridge) addOnsTotal += 35;
  if (addOns.oven) addOnsTotal += 40;
  if (addOns.cabinets) addOnsTotal += 30;
  if (addOns.windows) addOnsTotal += 45;
  if (addOns.laundry) addOnsTotal += 25;

  const subtotal = basePrice + addOnsTotal;

  // Frequency discounts
  let discountPercent = 0;
  if (frequency === 'weekly') discountPercent = 0.15; // 15% off
  if (frequency === 'bi-weekly') discountPercent = 0.10; // 10% off
  if (frequency === 'monthly') discountPercent = 0.05; // 5% off

  const discountAmount = Math.round(subtotal * discountPercent);
  const finalPrice = Math.max(80, subtotal - discountAmount);

  const toggleAddOn = (key: string) => {
    setAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto">
        
        {/* Modal Top Header */}
        <div className="bg-[#16221D] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#253930]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#23362E] text-emerald-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Instant Quote &amp; Booking
              </h2>
              <p className="text-xs text-slate-300">
                Transparent pricing for {BUSINESS_INFO.mainCity} &amp; {BUSINESS_INFO.region}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#23362E] rounded-full transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-[#16221D]">
                Quote Request Received!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, <span className="font-bold text-[#16221D]">{fullName || 'Valued Client'}</span>! We have reserved your requested slot for <span className="font-bold text-[#16221D]">{preferredDate || 'your preferred date'}</span>.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-[#16221D]">{currentServiceObj.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Frequency:</span>
                <span className="font-bold text-[#16221D] capitalize">{frequency}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Home Specs:</span>
                <span className="font-bold text-[#16221D]">{bedrooms} Bed / {bathrooms} Bath ({sqft} sq ft)</span>
              </div>
              <div className="flex justify-between pt-1 text-base">
                <span className="font-bold text-[#16221D]">Estimated Total:</span>
                <span className="font-black text-emerald-700 text-lg">${finalPrice}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              Our dispatch team will confirm your exact arrival window via call/SMS at <span className="font-semibold text-slate-800">{phone || BUSINESS_INFO.phone}</span> within 30 minutes.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-[#16221D] text-white font-bold rounded-xl hover:bg-[#23362E] transition-all shadow-md"
            >
              Back to Website
            </button>
          </div>
        ) : (
          /* Multi-step form */
          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Step Navigation Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs sm:text-sm font-bold">
              <button
                onClick={() => setCurrentStep(1)}
                className={`flex items-center gap-2 ${currentStep === 1 ? 'text-emerald-700 border-b-2 border-emerald-600 pb-1' : 'text-slate-400'}`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs flex items-center justify-center">1</span>
                <span>Select Service</span>
              </button>

              <button
                onClick={() => setCurrentStep(2)}
                className={`flex items-center gap-2 ${currentStep === 2 ? 'text-emerald-700 border-b-2 border-emerald-600 pb-1' : 'text-slate-400'}`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs flex items-center justify-center">2</span>
                <span>Home Specs &amp; Add-ons</span>
              </button>

              <button
                onClick={() => setCurrentStep(3)}
                className={`flex items-center gap-2 ${currentStep === 3 ? 'text-emerald-700 border-b-2 border-emerald-600 pb-1' : 'text-slate-400'}`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs flex items-center justify-center">3</span>
                <span>Schedule &amp; Confirm</span>
              </button>
            </div>

            {/* STEP 1: Select Service & Frequency */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-150">
                
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-[#16221D] block">
                    Choose Your Service Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex items-start justify-between ${
                          selectedService === s.id
                            ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500/20'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-extrabold text-sm text-[#16221D]">{s.name}</div>
                          <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{s.shortDesc}</div>
                        </div>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0 ml-2">
                          From ${s.basePrice}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cleaning Frequency */}
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-[#16221D] block">
                    Select Frequency (Save up to 15%)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'weekly', label: 'Weekly', discount: '15% Off' },
                      { id: 'bi-weekly', label: 'Bi-Weekly', discount: '10% Off' },
                      { id: 'monthly', label: 'Monthly', discount: '5% Off' },
                      { id: 'one-time', label: 'One-Time', discount: 'Standard' }
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFrequency(f.id as any)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          frequency === f.id
                            ? 'border-emerald-600 bg-emerald-600 text-white shadow-md'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-sm">{f.label}</div>
                        <div className={`text-[11px] font-semibold mt-0.5 ${frequency === f.id ? 'text-emerald-100' : 'text-emerald-700'}`}>
                          {f.discount}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 bg-[#16221D] text-white font-bold rounded-xl hover:bg-[#23362E] transition-all flex items-center gap-2"
                  >
                    <span>Next: Home Specs</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 2: Bedrooms, Bathrooms, Sqft & Add-ons */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-150">
                
                {/* Bedrooms & Bathrooms Counters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 bg-[#FAF9F5] rounded-2xl border border-slate-200">
                  
                  {/* Bedrooms */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#16221D]">Number of Bedrooms</label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                        className="w-10 h-10 rounded-xl bg-white border border-slate-300 font-bold text-lg text-slate-700 hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="text-lg font-black text-[#16221D] w-8 text-center">{bedrooms}</span>
                      <button
                        type="button"
                        onClick={() => setBedrooms(bedrooms + 1)}
                        className="w-10 h-10 rounded-xl bg-white border border-slate-300 font-bold text-lg text-slate-700 hover:bg-slate-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Bathrooms */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#16221D]">Number of Bathrooms</label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                        className="w-10 h-10 rounded-xl bg-white border border-slate-300 font-bold text-lg text-slate-700 hover:bg-slate-100"
                      >
                        -
                      </button>
                      <span className="text-lg font-black text-[#16221D] w-8 text-center">{bathrooms}</span>
                      <button
                        type="button"
                        onClick={() => setBathrooms(bathrooms + 1)}
                        className="w-10 h-10 rounded-xl bg-white border border-slate-300 font-bold text-lg text-slate-700 hover:bg-slate-100"
                      >
                        +
                      </button>
                    </div>
                  </div>

                </div>

                {/* Square footage slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <label className="font-bold text-[#16221D]">Approx. Square Footage</label>
                    <span className="font-black text-emerald-700">{sqft} sq ft</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>500 sq ft</span>
                    <span>2,500 sq ft</span>
                    <span>5,000+ sq ft</span>
                  </div>
                </div>

                {/* Optional Add-Ons */}
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-[#16221D] block">
                    Popular Extra Add-Ons
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { key: 'fridge', label: 'Inside Fridge', price: '$35' },
                      { key: 'oven', label: 'Inside Oven', price: '$40' },
                      { key: 'cabinets', label: 'Inside Cabinets', price: '$30' },
                      { key: 'windows', label: 'Interior Windows', price: '$45' },
                      { key: 'laundry', label: 'Laundry Load', price: '$25' }
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => toggleAddOn(item.key)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                          addOns[item.key]
                            ? 'border-emerald-600 bg-emerald-50 text-[#16221D] font-bold ring-2 ring-emerald-500/20'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span className="text-xs">{item.label}</span>
                        <span className="text-xs font-bold text-emerald-700">{item.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-100"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 bg-[#16221D] text-white font-bold rounded-xl hover:bg-[#23362E] transition-all flex items-center gap-2"
                  >
                    <span>Next: Schedule &amp; Contact</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 3: Schedule & Contact Form */}
            {currentStep === 3 && (
              <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in duration-150">
                
                {/* Price summary bar */}
                <div className="p-4 bg-[#16221D] text-white rounded-2xl flex items-center justify-between shadow-md">
                  <div>
                    <div className="text-xs text-slate-300">Estimated Total Quote:</div>
                    <div className="text-2xl font-black text-emerald-300 tabular-nums">
                      ${finalPrice}
                    </div>
                  </div>
                  <div className="text-right text-xs text-slate-300">
                    <div>{currentServiceObj.name} ({frequency})</div>
                    <div className="text-[11px] text-emerald-400 font-semibold">{bedrooms} Bed / {bathrooms} Bath</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#16221D] block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Miller"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#16221D] block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(512) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#16221D] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#16221D] block mb-1">Home Address / Zip Code *</label>
                    <input
                      type="text"
                      required
                      placeholder="123 Main St, Austin, TX 78701"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#16221D] block mb-1">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#16221D] block mb-1">Arrival Window</label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="08:00 AM">Morning (8:00 AM - 11:00 AM)</option>
                      <option value="12:00 PM">Midday (12:00 PM - 3:00 PM)</option>
                      <option value="03:00 PM">Late Afternoon (3:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#16221D] block mb-1">Special Entry Instructions or Notes</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Keyless entry code is 1234. We have a friendly golden retriever in the backyard."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-100"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base rounded-xl transition-all shadow-xl flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Confirm My Booking Request</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
