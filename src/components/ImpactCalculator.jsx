import React, { useState } from 'react';
import { Calculator, Heart, ShieldCheck, Sparkles, ArrowRight, Utensils, Users, Award } from 'lucide-react';
import { impactCalculatorTiers } from '../data/ngoData';

export default function ImpactCalculator({ onOpenDonate }) {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // Default to ₹1,500
  const [isMonthly, setIsMonthly] = useState(false);

  const activeTier = impactCalculatorTiers[selectedTierIndex];
  const finalAmount = isMonthly ? activeTier.amount : activeTier.amount;
  const taxSavings = Math.round(finalAmount * 0.5); // Approximate 50% 80G deduction
  const mealsEquivalent = isMonthly ? activeTier.mealsCount * 12 : activeTier.mealsCount;

  return (
    <section id="impact-calculator" className="py-16 sm:py-20 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            Transparent Giving
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3323] tracking-tight">
            Calculate the Tangible Impact of Your Rupee
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Every contribution directly funds audited field items. Select an amount below to see the exact human outcome and your official Section 80G tax benefit.
          </p>

          {/* Monthly vs One-Time Toggle */}
          <div className="pt-2 flex justify-center items-center">
            <div className="bg-white p-1 rounded-full border border-stone-300 shadow-sm inline-flex">
              <button
                type="button"
                onClick={() => setIsMonthly(false)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  !isMonthly
                    ? 'bg-[#0A3323] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setIsMonthly(true)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isMonthly
                    ? 'bg-[#0A3323] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span>Monthly Guardian</span>
                <span className="text-[10px] bg-amber-500 text-white font-bold px-1.5 py-0.5 rounded-full">
                  Most Lasting
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Calculator Body */}
        <div className="mt-10 max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
          
          {/* Top Tiers Horizontal Selector */}
          <div className="bg-stone-50 border-b border-stone-200 p-4 sm:p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 text-center sm:text-left">
              Choose or Click an Impact Level:
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {impactCalculatorTiers.map((tier, idx) => (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => setSelectedTierIndex(idx)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedTierIndex === idx
                      ? 'border-[#0A3323] bg-[#0A3323] text-white shadow-md scale-[1.02]'
                      : 'border-stone-200 bg-white text-stone-800 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  <div className={`text-base sm:text-lg font-bold ${selectedTierIndex === idx ? 'text-amber-300' : 'text-stone-900'}`}>
                    ₹{tier.amount.toLocaleString('en-IN')}
                  </div>
                  <div className={`text-[11px] truncate mt-0.5 ${selectedTierIndex === idx ? 'text-stone-200' : 'text-stone-500'}`}>
                    {tier.beneficiaries}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Dynamic Impact Display */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Tangible Outcome Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Direct Ground Allocation</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3323]">
                {activeTier.title}
              </h3>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {activeTier.description}
              </p>

              {isMonthly && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                  <span className="text-base">💌</span>
                  <span>
                    <strong>Monthly Guardian Promise:</strong> You will receive quarterly personalized progress report letters and direct video updates from the community learning center you sponsor.
                  </span>
                </div>
              )}

              {/* Impact Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                    <Users className="w-4 h-4 text-emerald-700" />
                    <span>Direct Beneficiaries</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 mt-1">
                    {activeTier.beneficiaries}
                  </div>
                </div>

                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                    <Utensils className="w-4 h-4 text-amber-600" />
                    <span>Hot Meals Eqv.</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-stone-900 mt-1">
                    {mealsEquivalent}+ Meals
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <div className="flex items-center gap-1.5 text-stone-500 text-xs font-medium">
                    <Award className="w-4 h-4 text-emerald-700" />
                    <span>80G Tax Exemption</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-emerald-800 mt-1">
                    Save ~₹{taxSavings.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Donation Action Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#062318] to-[#0A3323] text-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-5">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Your Contribution Summary
              </div>

              <div className="border-b border-emerald-800 pb-4">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  ₹{finalAmount.toLocaleString('en-IN')}
                  <span className="text-xs font-sans text-stone-300 font-normal ml-1">
                    {isMonthly ? '/ month' : 'one-time'}
                  </span>
                </div>
                <div className="text-xs text-emerald-300 mt-1">
                  100% Tax Exemption Eligible under Sec 80G
                </div>
              </div>

              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span>Gross Donation</span>
                  <span className="font-semibold text-white">₹{finalAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-amber-300 font-medium">
                  <span>Estimated Tax Deduction (50%)</span>
                  <span>- ₹{taxSavings.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-t border-emerald-800/80 pt-2 text-sm font-bold text-white">
                  <span>Effective Net Out-of-Pocket</span>
                  <span className="text-amber-400">≈ ₹{(finalAmount - taxSavings).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenDonate({ amount: finalAmount, isMonthly })}
                className="w-full py-4 px-4 rounded-xl font-bold text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Heart className="w-4 h-4 fill-stone-900 text-stone-900 group-hover:scale-125 transition-transform" />
                <span>Complete This Contribution</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Secured 256-Bit SSL Encrypted Rail</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

