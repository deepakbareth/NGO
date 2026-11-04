import React, { useState } from 'react';
import { Calculator, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { impactCalculatorTiers } from '../data/ngoData';

export default function ImpactCalculator({ onOpenDonate }) {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // ₹1,500
  const [isMonthly, setIsMonthly] = useState(false);

  const activeTier = impactCalculatorTiers[selectedTierIndex];
  const finalAmount = activeTier.amount;
  const taxSavings = Math.round(finalAmount * 0.5);
  const mealsEquivalent = isMonthly ? activeTier.mealsCount * 12 : activeTier.mealsCount;

  return (
    <section id="calculator" className="py-6 sm:py-10 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            Transparent Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09281B] tracking-tight">
            See Where Every Rupee Actually Goes
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Select an amount below to view the tangible ground outcome and your estimated Section 80G tax rebate.
          </p>

          {/* Toggle */}
          <div className="pt-2 flex justify-center">
            <div className="bg-white/80 p-1 rounded-full border border-stone-200/80 shadow-xs inline-flex">
              <button
                type="button"
                onClick={() => setIsMonthly(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  !isMonthly ? 'bg-[#09281B] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setIsMonthly(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                  isMonthly ? 'bg-[#09281B] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Monthly Supporter</span>
                <span className="text-[10px] bg-amber-500 text-white font-bold px-1.5 py-0.2 rounded-full">
                  Lasting
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Glassmorphic Calculator Card */}
        <div className="glass-panel rounded-3xl p-5 sm:p-8 max-w-4xl mx-auto shadow-xl">
          
          {/* Preset Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            {impactCalculatorTiers.slice(0, 4).map((tier, idx) => (
              <button
                key={tier.amount}
                type="button"
                onClick={() => setSelectedTierIndex(idx)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  selectedTierIndex === idx
                    ? 'border-amber-600 bg-amber-500 text-white shadow-md'
                    : 'border-white/80 bg-white/70 hover:bg-white text-stone-800'
                }`}
              >
                <div className="font-extrabold text-base">₹{tier.amount.toLocaleString('en-IN')}</div>
                <div className={`text-[11px] truncate mt-0.5 ${selectedTierIndex === idx ? 'text-amber-100' : 'text-stone-500'}`}>
                  {tier.beneficiaries}
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white/80 rounded-2xl p-5 sm:p-6 border border-white">
            
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-900">
                <Sparkles className="w-3 h-3 text-emerald-700" />
                <span>Tangible Delivery</span>
              </div>

              <h3 className="text-xl font-extrabold text-[#09281B]">
                {activeTier.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {activeTier.description}
              </p>

              {/* Quick outcome stats */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="bg-stone-50 p-2 rounded-xl border border-stone-200/60">
                  <div className="text-[10px] text-stone-500">Beneficiaries</div>
                  <div className="font-bold text-xs sm:text-sm text-stone-900">{activeTier.beneficiaries}</div>
                </div>
                <div className="bg-stone-50 p-2 rounded-xl border border-stone-200/60">
                  <div className="text-[10px] text-stone-500">Meals Eqv.</div>
                  <div className="font-bold text-xs sm:text-sm text-stone-900">{mealsEquivalent}+ Meals</div>
                </div>
                <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-200/60">
                  <div className="text-[10px] text-emerald-700">80G Benefit</div>
                  <div className="font-bold text-xs sm:text-sm text-emerald-900">Save ₹{taxSavings}</div>
                </div>
              </div>
            </div>

            {/* Quick action card */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#09281B] to-[#145239] text-white p-5 rounded-2xl space-y-4">
              <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                <span className="text-xs text-stone-300">Your Donation</span>
                <span className="text-2xl font-extrabold text-amber-300">
                  ₹{finalAmount.toLocaleString('en-IN')}
                  <span className="text-xs text-stone-300 font-normal ml-1">
                    {isMonthly ? '/mo' : ''}
                  </span>
                </span>
              </div>

              <div className="text-[11px] text-stone-300 space-y-1">
                <div className="flex justify-between">
                  <span>Gross Contribution:</span>
                  <span>₹{finalAmount}</span>
                </div>
                <div className="flex justify-between text-amber-300 font-medium">
                  <span>50% Tax Deduction:</span>
                  <span>- ₹{taxSavings}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-1 font-bold text-white">
                  <span>Effective Cost:</span>
                  <span className="text-emerald-300">≈ ₹{finalAmount - taxSavings}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenDonate({ amount: finalAmount, isMonthly })}
                className="w-full py-3 px-3 rounded-xl font-bold text-xs sm:text-sm text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-stone-900" />
                <span>Complete Contribution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
