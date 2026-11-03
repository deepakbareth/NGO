import React, { useState } from 'react';
import { AlertCircle, Clock, Heart, Users, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function UrgentAppeal({ onOpenDonate }) {
  const [selectedAmount, setSelectedAmount] = useState(1500);
  const [customAmount, setCustomAmount] = useState('');

  const targetAmount = 2500000;
  const currentRaised = 1840000;
  const percentage = Math.round((currentRaised / targetAmount) * 100);

  const presets = [
    { amount: 500, label: '₹500', desc: 'Warm woolens & gloves for 2 kids' },
    { amount: 1500, label: '₹1,500', desc: 'Winter kit + 1 month meals for 1 student' },
    { amount: 3500, label: '₹3,500', desc: 'Digital tablet & study materials for 1 girl' },
    { amount: 7500, label: '₹7,500', desc: 'Solar heating & nutrition kit for classroom' },
  ];

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(Number(val));
    }
  };

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  return (
    <section id="urgent-appeal" className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Urgent Callout Card Container */}
        <div className="bg-gradient-to-br from-[#062318] via-[#0A3323] to-[#145239] rounded-3xl text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-emerald-900">
          
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Mission Description & Live Progress */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  Time-Sensitive Winter Campaign
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs text-stone-300 bg-white/10">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  12 Days Remaining
                </span>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Protect 5,000 Remote Schoolchildren from Harsh Winter Drops
                </h2>
                <p className="text-stone-300 text-sm sm:text-base mt-2 leading-relaxed">
                  Temperatures in the Himalayan foothills and Purulia tribal belts drop below 4°C. Without thermal wear and hot protein mid-day meals, school attendance collapses by 65%. Your timely contribution keeps them warm, nourished, and studying.
                </p>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-2 bg-black/20 p-4 rounded-2xl border border-white/10">
                <div className="flex justify-between items-end text-sm">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-bold block">
                      Raised So Far
                    </span>
                    <span className="text-2xl font-bold font-serif text-white">
                      ₹{(currentRaised).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-bold block">
                      Target Goal
                    </span>
                    <span className="text-lg font-semibold text-stone-300">
                      ₹{(targetAmount).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Progress track */}
                <div className="w-full bg-white/15 h-3 rounded-full overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-amber-500 h-full rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-xs text-stone-300 pt-1">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <strong>1,420 generous donors</strong> have contributed
                  </span>
                  <span className="font-bold text-amber-300">{percentage}% Reached</span>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Donation Chip Selector */}
            <div className="lg:col-span-5 bg-white text-stone-900 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="font-serif font-bold text-lg text-[#0A3323]">
                  Select Your Giving Tier
                </h3>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  80G Tax Deductible
                </span>
              </div>

              {/* Preset Chips */}
              <div className="grid grid-cols-2 gap-2.5">
                {presets.map((item) => (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() => handlePresetClick(item.amount)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedAmount === item.amount && !customAmount
                        ? 'border-[#0A3323] bg-emerald-50/70 ring-2 ring-[#0A3323]/20'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-stone-900">{item.label}</span>
                      {selectedAmount === item.amount && !customAmount && (
                        <Check className="w-4 h-4 text-emerald-700" />
                      )}
                    </div>
                    <p className="text-[11px] text-stone-600 mt-1 leading-snug line-clamp-2">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-semibold">
                  ₹
                </span>
                <input
                  type="text"
                  placeholder="Enter other custom amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0A3323] text-sm font-medium"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenDonate({ amount: selectedAmount, cause: 'winter-warmth' })}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>Support With ₹{(selectedAmount || 1500).toLocaleString('en-IN')} Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant 80G Tax Receipt emailed with Form 10BE</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

