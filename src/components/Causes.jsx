import React, { useState } from 'react';
import { Heart, Users, Target, ArrowRight, Sparkles } from 'lucide-react';
import { causesData } from '../data/ngoData';

export default function Causes({ onOpenDonate }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Education', 'Healthcare', 'Livelihood', 'Nutrition', 'Environment', 'Elderly Care'];

  const filteredCauses = activeCategory === 'All'
    ? causesData
    : causesData.filter(cause => cause.category === activeCategory);

  return (
    <section id="causes" className="py-16 sm:py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#0A3323] border border-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Active Ground Initiatives
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3323] tracking-tight">
            Targeted Causes That Build Sustainable Self-Reliance
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            We don't believe in temporary hand-outs. Every program is co-designed with rural panchayats and grassroots teachers to create permanent, generational transformation.
          </p>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0A3323] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {filteredCauses.map((cause) => {
            const percent = Math.min(100, Math.round((cause.raised / cause.goal) * 100));

            return (
              <div
                key={cause.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group card-shine-effect"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Chip */}
                  <span className="absolute top-3 left-3 bg-[#0A3323]/90 backdrop-blur-xs text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-700">
                    {cause.category}
                  </span>

                  {/* Days left */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                    {cause.daysLeft} days left
                  </span>

                  {/* Impact Unit Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md font-medium inline-block line-clamp-1 border border-white/20">
                      💡 {cause.impactUnit}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[#0A3323] transition-colors line-clamp-2">
                      {cause.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {cause.subtitle}
                    </p>
                  </div>

                  {/* Progress & Stats */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="flex justify-between text-xs">
                      <div>
                        <span className="text-stone-500 block">Raised</span>
                        <span className="font-bold text-stone-900 text-sm">
                          ₹{(cause.raised).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-stone-500 block">Goal</span>
                        <span className="font-bold text-stone-900 text-sm">
                          ₹{(cause.goal).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-700 h-full rounded-full transition-all duration-700 group-hover:bg-amber-600"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-stone-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-stone-400" />
                        {cause.donorsCount} Supporters
                      </span>
                      <span className="font-bold text-[#0A3323]">{percent}% Funded</span>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <button
                    onClick={() => onOpenDonate({ cause: cause.id, amount: 2500 })}
                    className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-[#0A3323] bg-emerald-50 hover:bg-[#0A3323] hover:text-white border border-emerald-200 hover:border-[#0A3323] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Heart className="w-4 h-4 fill-amber-500 text-amber-500 group-hover:scale-110" />
                    <span>Sponsor This Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

