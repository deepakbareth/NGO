import React from 'react';
import { Heart, Play, ShieldCheck, CheckCircle2, Award, ArrowUpRight, Sparkles } from 'lucide-react';
import { ngoConfig } from '../data/ngoData';

export default function Hero({ onOpenDonate, onOpenVideo }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEB] to-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/70">
      
      {/* Decorative heritage background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -ml-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Conviction */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Live Cause Urgent Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
              <span className="font-semibold text-amber-800">Active Winter Drive:</span>
              <span>Vidya Digital Classrooms & Mid-Day Nutrition</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#0A3323] leading-[1.15] tracking-tight">
              Transforming Quiet Compassion Into{' '}
              <span className="text-amber-700 italic font-normal">Measurable</span> Human Dignity.
            </h1>

            {/* Subtitle / Ground Mission */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              For over <span className="font-semibold text-stone-800">14 unbroken years</span>, {ngoConfig.name} has provided first-generation education to 34,000+ girls, served 450,000+ fresh meals, and mobilized emergency rural healthcare. 
              Every rupee is audited, geotagged, and eligible for <span className="font-semibold text-stone-800">Section 80G Tax Exemption</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenDonate()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#0A3323] via-[#145239] to-[#0A3323] hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-lg"
              >
                <Heart className="w-5 h-5 fill-amber-400 text-amber-400 animate-pulse" />
                <span>Make a Dignified Contribution</span>
              </button>

              <button
                onClick={() => onOpenVideo()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-400 transition-all duration-200 cursor-pointer shadow-xs group"
              >
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch 2-Min Ground Film</span>
              </button>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-stone-600 text-xs sm:text-[13px]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>80G Instant Tax Receipt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>88.4% Direct Field Ratio</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Govt. Darpan & FCRA Validated</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Narrative & Dignified Impact Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="relative aspect-[4/4.5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
                  alt="Rural students smiling with pride at their school desk"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Overlay Quote on Image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/90 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Project Vidya • Maharashtra Hamlets</span>
                  </div>
                  <p className="font-serif text-lg font-medium leading-snug">
                    "When you educate one girl, an entire village changes its destiny."
                  </p>
                  <p className="text-xs text-stone-200 mt-1">
                    3,200 tribal students in 14 digital learning pods this academic year.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Live Metric Card 1: Direct Allocation */}
            <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-stone-200/80 max-w-[200px] hidden sm:block animate-fade-in">
              <div className="flex items-center gap-2 text-emerald-800">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Award className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <span className="text-xs font-bold block text-stone-800">88.4% Spent</span>
                  <span className="text-[10px] text-stone-500">Directly on Field Programs</span>
                </div>
              </div>
            </div>

            {/* Floating Live Metric Card 2: Beneficiary Metric */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-stone-200/80 max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  34k
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">
                    34,200+ Lives
                  </div>
                  <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-0.5">
                    <span>Verified Impact</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

