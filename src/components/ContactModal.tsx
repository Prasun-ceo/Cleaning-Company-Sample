import { useState, useEffect } from 'react';
import { X, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent discard for bots
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative my-auto"
      >
        
        {/* Header */}
        <div className="bg-[#16221D] text-white p-6 flex items-center justify-between border-b border-[#253930]">
          <div>
            <h2 id="contact-modal-title" className="text-2xl font-black text-white">Contact {BUSINESS_INFO.name}</h2>
            <p className="text-xs text-slate-300">We'd love to answer your questions or discuss special requests</p>
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
        <div className="p-6 sm:p-8 space-y-6">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-[#16221D]">Message Sent!</h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you for contacting us, {name}. A member of our local Austin customer support team will reply to {email} or call {phone} shortly.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#16221D] text-white font-bold rounded-xl hover:bg-[#23362E] text-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Info Column */}
              <div className="md:col-span-5 space-y-4 bg-[#FAF9F5] p-5 rounded-2xl border border-slate-200 text-xs">
                <h3 className="font-extrabold text-[#16221D] text-sm border-b border-slate-200 pb-2">
                  Contact Direct
                </h3>

                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-2.5 text-slate-800 font-bold hover:text-emerald-700">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>

                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2.5 text-slate-800 font-bold hover:text-emerald-700">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>

                <div className="flex items-start gap-2.5 text-slate-600 pt-1">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>

                <div className="pt-2 border-t border-slate-200 text-slate-500">
                  <strong>Hours:</strong> Mon - Sat: 8:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </div>
              </div>

              {/* Right Form */}
              <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
                {/* Anti-spam honeypot */}
                <div aria-hidden="true" className="hidden">
                  <label htmlFor="website-url">Website</label>
                  <input
                    id="website-url"
                    type="text"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="contact-name" className="text-xs font-bold text-[#16221D] block mb-1">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="contact-phone" className="text-xs font-bold text-[#16221D] block mb-1">Phone *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="(512) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-xs font-bold text-[#16221D] block mb-1">Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs font-bold text-[#16221D] block mb-1">Message / Inquiry *</label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#16221D] hover:bg-[#23362E] text-white font-extrabold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <Send className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

