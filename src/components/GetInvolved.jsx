import React from 'react';
import { Users, Building, Heart, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function GetInvolved({ onOpenVolunteer, onOpenDonate }) {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Walk With Us
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3323] tracking-tight">
            Two Meaningful Ways to Catalyze Lasting Change
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Whether as an individual giving your weekend hours or a company fulfilling your CSR mandate, your involvement transforms lives on the ground.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Volunteer */}
          <div className="bg-gradient-to-br from-[#062318] to-[#0A3323] text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-xl border border-emerald-900 group">
            <div className="space-y-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  For Individuals & Youth
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Join as a Ground or Virtual Volunteer
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
                  Offer your skills in curriculum design, English/math tutoring, health camps, or field story reporting. Flexible commitments starting from 3 hours per week.
                </p>
              </div>

              <div className="space-y-2 text-xs text-stone-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Official Certificate of Social Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direct mentorship with senior grassroots leaders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Flexible remote tutoring or on-ground weekend routes</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <button
                onClick={() => onOpenVolunteer()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#0A3323] bg-white hover:bg-stone-100 transition-all cursor-pointer shadow-md group-hover:scale-105"
              >
                <span>Register as a Volunteer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Corporate CSR */}
          <div className="bg-stone-50 border border-stone-200 p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center border border-emerald-200">
                <Building className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold">
                  For Enterprises & Family Offices
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  Corporate CSR Alignment & Payroll Giving
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  Fulfill Schedule VII Section 135 CSR obligations with zero compliance friction. Full project adoption, naming rights for digital labs, and quarterly external audit reports.
                </p>
              </div>

              <div className="space-y-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>MCA Registered CSR-1 (Form CSR-1 Reg. 00019482)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Custom ESG Impact Metrics & Employee Volunteering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Statutory Form 10BE issued within statutory timeline</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenDonate({ isCorporate: true })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0A3323] hover:bg-[#145239] transition-all cursor-pointer shadow-md group-hover:scale-105"
              >
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Initiate Corporate Grant</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

