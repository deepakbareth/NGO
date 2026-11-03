import React, { useState } from 'react';
import { AlertCircle, Clock, Heart, Users, ArrowRight, Check } from 'lucide-react';

export default function UrgentAppeal({ onOpenDonate }) {
  const [selectedAmount, setSelectedAmount] = useState(1500);
  const targetAmount = 2500000;
  const currentRaised = 1840000;
  const percentage = Math.round((currentRaised / targetAmount) * 100);

  const presets = [
    { amount: 500, label: '₹500', desc: 'Warm woolens for 2 kids' },
    { amount: 1500, label: '₹1,500', desc: 'Winter kit + 1 month meals' },
    { amount: 3500, label: '₹3,500', desc: 'Digital tablet & study pack' },
  ];

  return (
    <section id="urgent-drive" className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="glass-dark rounded-3xl text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
          
          {/* Subtle amber light burst */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            
            {/* Left: Headline & Progress */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  Urgent Winter Relief
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] text-stone-300 bg-white/10">
                  <Clock className="w-3 h-3 text-amber-300" />
                  12 Days Remaining
                </span>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-snug">
                  Protect 5,000 Tribal Students from Severe Winter Drops
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Temperatures drop below 4°C in Purulia hamlets. Without thermal kits and warm mid-day meals, attendance plummets. Your gift keeps them in classrooms.
                </p>
              </div>

              {/* Compact Progress Bar */}
              <div className="bg-black/30 p-3.5 rounded-2xl border border-white/10 space-y-1.5">
                <div className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">Raised</span>
                    <span className="text-xl font-extrabold text-white ml-2">₹{(currentRaised).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-stone-300 text-xs">
                    Goal: <span className="font-semibold text-white">₹{(targetAmount).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="w-full bg-white/15 h-2.5 rounded-full overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-[11px] text-stone-300 pt-0.5">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-amber-400" />
                    <strong>1,420 supporters</strong>
                  </span>
                  <span className="font-bold text-amber-300">{percentage}% Reached</span>
                </div>
              </div>
            </div>

            {/* Right: Compact Giving Chips */}
            <div className="lg:col-span-5 bg-white text-stone-900 rounded-2xl p-5 shadow-lg space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="text-xs font-bold text-[#09281B] uppercase tracking-wider">Quick Giving Tier</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  80G 50% Tax Saved
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {presets.map((item) => (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() => setSelectedAmount(item.amount)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedAmount === item.amount
                        ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-500/20'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-sm text-stone-900">{item.label}</div>
                    <div className="text-[10px] text-stone-500 mt-0.5 line-clamp-1">{item.desc}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => onOpenDonate({ amount: selectedAmount, cause: 'winter-warmth' })}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Donate ₹{selectedAmount.toLocaleString('en-IN')} with 80G Receipt</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
