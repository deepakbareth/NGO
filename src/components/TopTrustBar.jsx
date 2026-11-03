import React from 'react';
import { ShieldCheck, PhoneCall, Heart, Award, FileText } from 'lucide-react';
import { ngoConfig } from '../data/ngoData';

export default function TopTrustBar({ onOpenDonate }) {
  return (
    <div className="bg-[#062318] text-[#F3EFEA] text-xs py-2 px-4 border-b border-[#145239]/60 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Statutory credentials */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-center md:text-left">
          <div className="flex items-center gap-1.5 font-medium text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Govt. Regd: {ngoConfig.regNumber}</span>
          </div>
          <span className="hidden sm:inline text-stone-500">|</span>
          <div className="flex items-center gap-1 text-emerald-300">
            <Award className="w-3.5 h-3.5" />
            <span>100% Tax Deductible (80G & 12A Eligible)</span>
          </div>
          <span className="hidden lg:inline text-stone-500">|</span>
          <div className="hidden lg:flex items-center gap-1 text-stone-300">
            <FileText className="w-3.5 h-3.5" />
            <span>FCRA Approved for Global Donations</span>
          </div>
        </div>

        {/* Right: Helpline & Quick Action */}
        <div className="flex items-center gap-4 text-stone-300 text-[11px] sm:text-xs">
          <a
            href={`tel:${ngoConfig.emergencyHelp}`}
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            title="Helpline for urgent community relief"
          >
            <PhoneCall className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>Emergency Desk: {ngoConfig.emergencyHelp}</span>
          </a>

          <button
            onClick={() => onOpenDonate()}
            className="hidden sm:inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-500 text-white font-medium px-2.5 py-0.5 rounded-full transition-all text-[11px] shadow-sm cursor-pointer"
          >
            <Heart className="w-3 h-3 fill-current text-white" />
            <span>Quick Give</span>
          </button>
        </div>
      </div>
    </div>
  );
}

