import React from 'react';
import { Heart, Play, ShieldCheck, CheckCircle2, Award, Sparkles, ArrowRight } from 'lucide-react';
import { ngoConfig } from '../data/ngoData';

export default function Hero({ onOpenDonate, onOpenVideo }) {
  return (
    <section className="relative pt-6 pb-14 sm:pb-20 overflow-hidden">
      
      {/* Soft warm sunset ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -top-10 right-10 w-72 h-72 bg-orange-200/25 rounded-full blur-2xl pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Punchy Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Live Campaign Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-semibold text-amber-900 border border-amber-300/60 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
              <span className="font-bold text-amber-800">Active Ground Drive:</span>
              <span>Vidya Digital Classrooms & Warm Meals</span>
            </div>

            {/* Clear, Bold Modern Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-[#09281B] leading-[1.16] tracking-tight">
              Transforming Quiet Compassion Into{' '}
              <span className="text-amber-600 bg-clip-text">Lasting Dignity</span>.
            </h1>

            {/* Punchy 1-sentence description */}
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              34,000+ rural girls in school, 450,000+ nutritious meals served, and mobile health clinics across 185 villages. Every rupee is verified, audited, and eligible for <strong className="text-stone-800">Section 80G Tax Deductions</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => onOpenDonate()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#09281B] to-[#145239] hover:from-[#062015] hover:to-[#0C3825] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-125 transition-transform" />
                <span>Make a Contribution</span>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </button>

              <button
                onClick={() => onOpenVideo()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold text-stone-700 glass-card hover:bg-white transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch 2-Min Film</span>
              </button>
            </div>

            {/* Glassy Trust Badges */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-stone-600 text-xs">
              <div className="glass-card px-3 py-2 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">80G Instant Tax Receipt</span>
              </div>
              <div className="glass-card px-3 py-2 rounded-xl flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-medium">88.4% Direct Field Ratio</span>
              </div>
              <div className="col-span-2 sm:col-span-1 glass-card px-3 py-2 rounded-xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">NITI Aayog Darpan Regd</span>
              </div>
            </div>

          </div>

          {/* Right: Glassy Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 border-2 border-white/80 shadow-xl">
              <div className="relative aspect-[4/4.2] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
                  alt="Rural students smiling with pride at their desk"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                
                {/* Overlay Quote */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white mb-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Project Vidya</span>
                  </div>
                  <p className="text-sm font-semibold leading-snug">
                    "When you educate a girl, an entire village rises."
                  </p>
                </div>
              </div>

              {/* Floating Glassy Badge 1 */}
              <div className="absolute -top-3 -left-3 glass-panel rounded-2xl px-3.5 py-2.5 shadow-lg border border-amber-200/60 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  88%
                </div>
                <div>
                  <span className="text-[11px] font-bold block text-stone-800">Direct Ground Use</span>
                  <span className="text-[10px] text-stone-500">Audited by Chartered Accts</span>
                </div>
              </div>

              {/* Floating Glassy Badge 2 */}
              <div className="absolute -bottom-3 -right-3 glass-panel rounded-2xl px-3.5 py-2.5 shadow-lg border border-emerald-200/60 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  34k
                </div>
                <div>
                  <span className="text-[11px] font-bold block text-stone-800">34,200+ Lives</span>
                  <span className="text-[10px] text-emerald-700 font-semibold">Verified Impact</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
