import React from 'react';
import { Heart, Play, ShieldCheck, CheckCircle2, Award, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenDonate, onOpenVideo }) {
  return (
    <section className="relative pt-6 pb-14 sm:pb-20 overflow-visible">
      
      {/* Soft warm sunset ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -top-10 right-10 w-72 h-72 bg-orange-200/25 rounded-full blur-2xl pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Punchy Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-5">
            
            {/* Live Campaign Pill - Clean on mobile */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full glass-card text-[11px] sm:text-xs font-semibold text-amber-900 border border-amber-300/60 shadow-xs max-w-full">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping shrink-0"></span>
              <span className="font-bold text-amber-800 shrink-0">Active Drive:</span>
              <span className="truncate">Vidya Digital Pods & Meals</span>
            </div>

            {/* Clear, Bold Modern Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[50px] font-extrabold text-[#09281B] leading-[1.2] tracking-tight">
              Transforming Quiet Compassion Into{' '}
              <span className="text-amber-600 bg-clip-text">Lasting Dignity</span>.
            </h1>

            {/* Punchy 1-sentence description */}
            <p className="text-xs sm:text-sm lg:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              34,000+ rural girls in school, 450,000+ nutritious meals served, and mobile health clinics across 185 villages. Every rupee is verified, audited, and eligible for <strong className="text-stone-800">Section 80G Tax Deductions</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <button
                onClick={() => onOpenDonate()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#09281B] to-[#145239] hover:from-[#062015] hover:to-[#0C3825] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-125 transition-transform" />
                <span>Make a Contribution</span>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </button>

              <button
                onClick={() => onOpenVideo()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-stone-700 glass-card hover:bg-white transition-all cursor-pointer"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current ml-0.5" />
                </div>
                <span>Watch 2-Min Film</span>
              </button>
            </div>

            {/* Glassy Trust Badges - 1 Col on mobile, 3 Col on desktop */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-stone-600 text-xs">
              <div className="glass-card px-3 py-2 rounded-xl flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-xs">80G Instant Tax Receipt</span>
              </div>
              <div className="glass-card px-3 py-2 rounded-xl flex items-center justify-center sm:justify-start gap-2">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-medium text-xs">88.4% Direct Field Ratio</span>
              </div>
              <div className="glass-card px-3 py-2 rounded-xl flex items-center justify-center sm:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium text-xs">NITI Aayog Darpan Regd</span>
              </div>
            </div>

          </div>

          {/* Right: Masterfully Polished Hero Visual Card (Mobile Responsive) */}
          <div className="lg:col-span-5 relative pt-4 pb-4 px-1 sm:px-4 max-w-md mx-auto lg:max-w-none">
            
            {/* Outer card container */}
            <div className="relative rounded-3xl glass-card p-2 sm:p-3 shadow-xl border-2 border-white/90">
              
              {/* Top-Left Floating Badge: Anchored safely on mobile */}
              <div className="absolute -top-3.5 left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-xl border border-amber-200/80 flex items-center gap-2 animate-fade-in">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center font-extrabold text-[11px] sm:text-xs shadow-sm">
                  88%
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-stone-900 block leading-tight">
                    Direct Ground Use
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-stone-500 font-medium">
                    Audited by Chartered Accts
                  </span>
                </div>
              </div>

              {/* Genuine, Joyful Rural Education Photo */}
              <div className="relative aspect-[4/4.2] rounded-2xl overflow-hidden shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1000&q=80"
                  alt="Joyful rural students smiling with books and dignity"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                
                {/* Clear Quote Overlay positioned with plenty of breathing room */}
                <div className="absolute bottom-3 left-3 right-3 text-white z-10 space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span>Project Vidya</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold leading-snug text-white/95 max-w-[75%] sm:max-w-[70%]">
                    "When you educate a girl, an entire village rises."
                  </p>
                </div>
              </div>

              {/* Bottom-Right Floating Badge: Anchored safely on mobile */}
              <div className="absolute -bottom-3.5 right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-xl border border-emerald-200/80 flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-extrabold text-[11px] sm:text-xs shadow-sm">
                  34k
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-stone-900 block leading-tight">
                    34,200+ Lives
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                    ✓ Verified Ground Impact
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
