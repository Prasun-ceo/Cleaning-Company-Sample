import { Calendar, ShieldCheck, Sparkles, Leaf, UserCheck } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/cleaningData';

export default function WhyChooseSection() {
  const iconsMap = [Calendar, ShieldCheck, Sparkles, Leaf, UserCheck];

  return (
    <section className="py-20 lg:py-24 bg-[#16221D] text-white relative overflow-hidden">
      
      {/* Background subtle mesh glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#24372E] border border-[#344E41] text-xs font-semibold text-emerald-300 tracking-wider uppercase">
            <span>Our Commitment to Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Choose {BUSINESS_INFO.name}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            We deliver reliable, spotless home cleaning backed by strict standards, trusted staff, and complete peace of mind.
          </p>
        </div>

        {/* 5 Feature Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconsMap[index] || Sparkles;
            return (
              <div
                key={item.title}
                className="bg-[#1D2C26] border border-[#2B4037] rounded-2xl p-6 hover:border-emerald-500/60 transition-all duration-300 flex flex-col items-start space-y-4 shadow-lg hover:-translate-y-1"
              >
                <div className="p-3.5 rounded-xl bg-[#253930] text-emerald-400 border border-[#355044]">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
