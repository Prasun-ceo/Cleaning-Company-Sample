import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  ShieldCheck,
  Award,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cleaningData';

interface ContactPageViewProps {
  onOpenBooking: (serviceId?: string) => void;
  onGoHome: () => void;
}

export default function ContactPageView({ onOpenBooking, onGoHome }: ContactPageViewProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Regular House Cleaning');
  const [cityZip, setCityZip] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Spam protection trap

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.title = `Contact ${BUSINESS_INFO.name} | Cleaning Services in ${BUSINESS_INFO.mainCity}, TX`;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', `Get in touch with ${BUSINESS_INFO.name} in Austin, TX. Call ${BUSINESS_INFO.phone}, email us, or send a message for quick responses within 30 minutes.`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (honeypot.trim() !== '') {
      // Silently ignore spam bot submissions
      return;
    }

    if (!fullName || !email || !phone || !message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F5] text-slate-800">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#16221D] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#253930]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23382F] border border-[#324E42] text-xs font-bold text-emerald-300 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>We're Here to Help</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Contact {BUSINESS_INFO.name}
          </h1>

          <p className="text-base sm:text-xl text-slate-200 font-bold max-w-2xl mx-auto leading-snug">
            Call us directly, send a message, or calculate your free online quote in under 60 seconds.
          </p>
        </div>
      </section>

      {/* TRUST STRIP (SECTION 7) */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-2 sm:pt-0 sm:pr-4 flex items-center justify-center sm:justify-start gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <div className="font-extrabold text-sm text-[#131E19]">Fully Insured &amp; Bonded</div>
                <div className="text-xs text-slate-500">$2M comprehensive liability coverage</div>
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 flex items-center justify-center sm:justify-start gap-3">
              <Lock className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <div className="font-extrabold text-sm text-[#131E19]">Background-Checked Team</div>
                <div className="text-xs text-slate-500">100% vetted &amp; trained specialists</div>
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-4 flex items-center justify-center sm:justify-start gap-3">
              <Award className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <div className="font-extrabold text-sm text-[#131E19]">BBB Accredited Business</div>
                <div className="text-xs text-emerald-700 font-bold">A+ Rating on BBB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: CONTACT DETAILS & FORM GRID */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SECTION 2: CONTACT DETAILS BLOCK */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                DIRECT CHANNELS
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#131E19]">
                Get in Touch Directly
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you have questions about specific home cleaning requirements, customized scheduling, or commercial inquiries, our local team is ready.
              </p>
            </div>

            {/* Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
              
              {/* Phone */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-3 text-lg font-black text-[#131E19] hover:text-emerald-700 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Email */}
              <div className="space-y-1 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</div>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3 text-base font-bold text-[#131E19] hover:text-emerald-700 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>

              {/* Location */}
              <div className="space-y-1 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location &amp; Service Area</div>
                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#131E19]">{BUSINESS_INFO.address}</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Serving 50+ locations in {BUSINESS_INFO.county1} &amp; {BUSINESS_INFO.county2}.
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-1 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Hours</div>
                <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="font-bold text-[#131E19]">Monday – Saturday: 8:00 AM – 7:00 PM</div>
                    <div className="text-slate-500">Sunday: Closed (Online booking open 24/7)</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Follow Our Cleanings:</span>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF9F5] border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:border-emerald-500 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-emerald-600" />
                  <span>@cleanfyhomes</span>
                </a>
              </div>

            </div>

            {/* RESPONSE PROMISE (SECTION 5) & QUICK QUOTE PROMPT (SECTION 6) */}
            <div className="bg-[#16221D] text-white p-6 rounded-3xl border border-[#273B32] shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Our Response Promise</span>
              </div>

              <p className="text-sm text-slate-200 font-semibold leading-relaxed">
                We reply within <span className="text-emerald-300 font-extrabold underline">30 minutes</span> during business hours so you never wait.
              </p>

              <div className="pt-2 border-t border-[#293E34] space-y-2">
                <div className="text-xs text-slate-300">
                  Looking for immediate pricing instead of general contact?
                </div>
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 bg-white text-[#16221D] font-extrabold text-xs rounded-xl hover:bg-slate-100 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Get A Free Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#16221D]" />
                </button>
              </div>
            </div>

          </div>

          {/* SECTION 3: CONTACT FORM */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#131E19]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Thank you, <span className="font-bold text-[#131E19]">{fullName}</span>. A confirmation notification has been sent to <span className="font-bold text-[#131E19]">{email}</span> and routed to our team at <span className="font-bold text-[#131E19]">{BUSINESS_INFO.email}</span>.
                  </p>
                </div>

                <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-slate-200 text-xs text-left max-w-md mx-auto space-y-2">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Service Inquiry:</span>
                    <span className="font-bold text-[#131E19]">{selectedService}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Contact Phone:</span>
                    <span className="font-bold text-[#131E19]">{phone}</span>
                  </div>
                  {cityZip && (
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Location:</span>
                      <span className="font-bold text-[#131E19]">{cityZip}</span>
                    </div>
                  )}
                  <div className="pt-1 text-slate-600">
                    <strong>Message:</strong> "{message}"
                  </div>
                </div>

                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  We will reply within 30 minutes via email or phone call.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-[#16221D] text-white font-bold rounded-xl text-xs hover:bg-[#23362E] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-[#131E19]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below and our team will get back to you promptly.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-bold">
                    {errorMessage}
                  </div>
                )}

                {/* Honeypot Spam Protection Field (Hidden from human users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave empty</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#131E19] block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Miller"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#131E19] block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(512) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Email & City/Zip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#131E19] block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#131E19] block mb-1">City or Zip Code</label>
                    <input
                      type="text"
                      placeholder="e.g. Austin, TX 78701"
                      value={cityZip}
                      onChange={(e) => setCityZip(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Service Needed Dropdown */}
                <div>
                  <label className="text-xs font-bold text-[#131E19] block mb-1">Service Needed *</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="General Inquiry / Other">General Inquiry / Other</option>
                  </select>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="text-xs font-bold text-[#131E19] block mb-1">Message / Details About Your Home *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your home size (bedrooms/bathrooms), preferred cleaning dates, or any special requests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF9F5] border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#16221D] hover:bg-[#23362E] text-white font-extrabold text-base rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Protected by anti-spam security. Submissions automatically notify {BUSINESS_INFO.email}.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* SECTION 4: MAP WITH "GET DIRECTIONS" LINK */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">AUSTIN HEADQUARTERS</div>
              <h2 className="text-2xl font-black text-[#131E19]">
                Find Us in Central Austin
              </h2>
            </div>

            <a
              href="https://maps.google.com/?q=100+Congress+Ave,+Austin,+TX+78701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#16221D] text-white rounded-xl font-bold text-xs hover:bg-[#23362E] transition-colors self-start sm:self-auto"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-md h-80 bg-slate-100">
            <iframe
              title="Cleanfy Home Services Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.834!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50000000000%3A0x0!2s100+Congress+Ave%2C+Austin%2C+TX+78701!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
