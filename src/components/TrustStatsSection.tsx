import { MapPin, Users, Award } from 'lucide-react';
import { TRUST_STATS } from '../data/cleaningData';

export default function TrustStatsSection() {
  const statIcons = [MapPin, Users, Award];

  return (
    <section className="bg-[#121E19] border-y border-[#21352B] py-6 sm:py-10 text-white relative z-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-[#21352B]">
          {TRUST_STATS.map((stat, idx) => {
            const Icon = statIcons[idx] || Award;
            return (
              <div
                key={stat.label}
                className={`px-1.5 sm:px-4 md:px-8 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-4 md:gap-5`}
              >
                <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#1C2C25] border border-[#2D453B] text-emerald-400 shrink-0 shadow-inner">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-300 uppercase tracking-wider mt-0.5 sm:mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
