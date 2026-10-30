import { useEffect } from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Leaf,
  UserCheck
} from 'lucide-react';
import { ABOUT_DATA } from '../data/aboutData';
import { BUSINESS_INFO, TRUST_STATS, WHY_CHOOSE_US } from '../data/cleaningData';

interface AboutPageViewProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
  onGoHome: () => void;
}

export default function AboutPageView({
  onOpenBooking,
  onOpenContact,
  onGoHome
}: AboutPageViewProps) {
  
  useEffect(() => {
    document.title = ABOUT_DATA.seoTitle;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', ABOUT_DATA.metaDescription);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const iconsMap = [Calendar, ShieldCheck, Sparkles, Leaf, UserCheck];

  return (
    <div className="bg-[#FAF9F5] text-slate-800">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#16221D] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-b border-[#253930]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23382F] border border-[#324E42] text-xs font-bold text-emerald-300 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Local Family-Owned Business</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {ABOUT_DATA.heroHeading}
          </h1>

          <p className="text-lg sm:text-2xl text-slate-200 font-bold max-w-2xl mx-auto leading-snug">
            {ABOUT_DATA.heroSubheading}
          </p>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              OUR JOURNEY &amp; FOUNDATION
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#131E19] tracking-tight">
              Built on Trust, Family Values &amp; Pride of Craft
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {ABOUT_DATA.storyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Owner / Team Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-4/3">
              <img
                src={ABOUT_DATA.storyImage}
                alt={ABOUT_DATA.storyImageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#16221D]/90 text-white p-4 rounded-2xl border border-[#2B3E36] text-xs">
                <div className="font-bold text-sm text-emerald-300">Elena &amp; Marcus Vance</div>
                <div className="text-slate-300">Founders of Cleanfy Home Services Austin</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: OUR VALUES / MISSION */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              WHAT DRIVES US
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#131E19] tracking-tight">
              Our Core Values &amp; Mission
            </h2>
            <p className="text-slate-600 text-sm">
              Principles that guide every cleaning visit across Greater Austin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.values.map((v, i) => (
              <div key={i} className="bg-[#FAF9F5] p-6 rounded-2xl border border-slate-200/80 space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#16221D] text-emerald-400 flex items-center justify-center font-bold text-base">
                  0{i + 1}
                </div>
                <h3 className="font-extrabold text-base text-[#131E19]">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: BY THE NUMBERS */}
      <section className="py-8 sm:py-12 bg-[#121E19] text-white border-y border-[#21352B]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-[#21352B] text-center">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="px-1 sm:px-4">
                <div className="text-xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-widest mt-0.5 sm:mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MEET THE TEAM */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            THE PEOPLE BEHIND CLEANFY
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#131E19] tracking-tight">
            Meet Our Experienced Leadership Team
          </h2>
          <p className="text-slate-600 text-sm">
            Dedicated professionals committed to delivering flawless home cleaning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_DATA.teamMembers.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={m.image}
                alt={m.imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 space-y-2">
                <h3 className="font-extrabold text-base text-[#131E19]">
                  {m.name}
                </h3>
                <div className="text-xs font-bold text-emerald-700">
                  {m.role}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-[#16221D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Why Choose {BUSINESS_INFO.name}
            </h2>
            <p className="text-slate-300 text-sm">
              Peace of mind guaranteed with every single service call.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1D2C26] p-6 rounded-2xl border border-[#2B4037] space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
              <h3 className="font-bold text-base text-white">Fully Insured</h3>
              <p className="text-xs text-slate-300">$2,000,000 liability policy protecting your property.</p>
            </div>

            <div className="bg-[#1D2C26] p-6 rounded-2xl border border-[#2B4037] space-y-3">
              <UserCheck className="w-8 h-8 text-emerald-400" />
              <h3 className="font-bold text-base text-white">Background-Checked</h3>
              <p className="text-xs text-slate-300">Vetted, background-screened, and professionally trained staff.</p>
            </div>

            <div className="bg-[#1D2C26] p-6 rounded-2xl border border-[#2B4037] space-y-3">
              <Leaf className="w-8 h-8 text-emerald-400" />
              <h3 className="font-bold text-base text-white">Eco-Friendly Products</h3>
              <p className="text-xs text-slate-300">100% plant-based non-toxic supplies safe for kids &amp; pets.</p>
            </div>

            <div className="bg-[#1D2C26] p-6 rounded-2xl border border-[#2B4037] space-y-3">
              <Calendar className="w-8 h-8 text-emerald-400" />
              <h3 className="font-bold text-base text-white">Flexible Scheduling</h3>
              <p className="text-xs text-slate-300">Weekly, bi-weekly, monthly, or one-time cleaning schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CREDENTIALS */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            OFFICIAL CREDENTIALS &amp; LICENSING
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#131E19]">
            Accredited, Licensed, and Fully Protected
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex items-start gap-4">
              <Award className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-sm text-[#131E19]">BBB Accreditation</div>
                <div className="text-xs text-slate-600">{ABOUT_DATA.credentials.bbbStatus}</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-sm text-[#131E19]">Full Insurance Coverage</div>
                <div className="text-xs text-slate-600">{ABOUT_DATA.credentials.insurance}</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-sm text-[#131E19]">City Licensing &amp; Bonding</div>
                <div className="text-xs text-slate-600">{ABOUT_DATA.credentials.licensing}</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-slate-200 flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <div className="font-bold text-sm text-[#131E19]">Satisfaction Guarantee</div>
                <div className="text-xs text-slate-600">{ABOUT_DATA.credentials.guarantee}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CALL TO ACTION */}
      <section className="py-16 bg-[#16221D] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Experience the Cleanfy Difference?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Book online in 60 seconds or contact our friendly local team in Austin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#16221D] font-extrabold text-base rounded-xl hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-5 h-5 text-[#16221D]" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-4 bg-[#22352C] border border-[#344E41] text-white font-bold text-base rounded-xl hover:bg-[#2B4237] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-emerald-300 underline">{BUSINESS_INFO.email}</a>
          </p>
        </div>
      </section>

    </div>
  );
}
