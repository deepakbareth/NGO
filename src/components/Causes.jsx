import React, { useState } from 'react';
import { Heart, Users, ArrowRight, Sparkles } from 'lucide-react';
import { causesData } from '../data/ngoData';

export default function Causes({ onOpenDonate }) {
  const [filter, setFilter] = useState('all');

  const displayCauses = filter === 'all' 
    ? causesData.slice(0, 3) 
    : causesData.filter(c => c.category.toLowerCase() === filter);

  return (
    <section id="causes" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100/80 text-amber-900 border border-amber-300/60 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              Active Ground Programs
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#09281B] tracking-tight">
              Causes That Create Generational Change
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'Top Programs' },
              { id: 'education', label: 'Education' },
              { id: 'healthcare', label: 'Healthcare' },
              { id: 'nutrition', label: 'Nutrition' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-[#09281B] text-white shadow-xs'
                    : 'glass-card text-stone-700 hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Crisp Glassy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayCauses.map((cause) => {
            const percent = Math.min(100, Math.round((cause.raised / cause.goal) * 100));

            return (
              <div
                key={cause.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with category pill */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <span className="absolute top-2.5 left-2.5 bg-[#09281B]/90 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {cause.category}
                    </span>

                    <span className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-[11px] font-medium line-clamp-1 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                      💡 {cause.impactUnit}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-base text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
                      {cause.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {cause.subtitle}
                    </p>
                  </div>
                </div>

                {/* Progress & Button */}
                <div className="p-4 pt-0 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-stone-900">₹{(cause.raised).toLocaleString('en-IN')}</span>
                      <span className="text-stone-500">Goal: ₹{(cause.goal).toLocaleString('en-IN')}</span>
                    </div>

                    <div className="w-full bg-stone-200/70 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-[11px] text-stone-500">
                      <span>{cause.donorsCount} Supporters</span>
                      <span className="font-bold text-emerald-800">{percent}% Funded</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenDonate({ cause: cause.id, amount: 2500 })}
                    className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-[#09281B] bg-amber-100/70 hover:bg-[#09281B] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>Sponsor This</span>
                    <ArrowRight className="w-3 h-3" />
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
