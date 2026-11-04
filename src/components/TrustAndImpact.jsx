import React, { useState } from 'react';
import { ShieldCheck, Award, FileDown, CheckCircle, PieChart, Landmark } from 'lucide-react';
import { impactStatsData, ngoConfig } from '../data/ngoData';

export default function TrustAndImpact() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <section id="trust-impact" className="py-10 sm:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Proof of Work & Governance
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#09281B] tracking-tight">
            14 Years of Ground Impact. 100% Audited.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Every rupee is registered, audited by independent Chartered Accountants, and backed by government statutory compliance.
          </p>
        </div>

        {/* 4 Crisp Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {impactStatsData.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-4 sm:p-5 rounded-2xl text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-stone-900 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Financial Allocation & Audit Card */}
        <div className="glass-panel p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg space-y-5 sm:space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/60 pb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                <PieChart className="w-4 h-4 text-emerald-700" />
                <span>Audited Fund Allocation (FY 2024-25)</span>
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Zero leakage guarantee verified by independent statutory auditors.
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#09281B] bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-all cursor-pointer self-start sm:self-auto"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{downloaded ? 'Downloaded PDF!' : 'Download FY25 Audit PDF'}</span>
            </button>
          </div>

          {/* Allocation Bar */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-stone-200 rounded-full overflow-hidden flex shadow-inner">
              <div style={{ width: '88.4%' }} className="bg-[#09281B] h-full" title="88.4% Direct Programs"></div>
              <div style={{ width: '6.8%' }} className="bg-amber-600 h-full" title="6.8% Governance"></div>
              <div style={{ width: '4.8%' }} className="bg-orange-400 h-full" title="4.8% Compliance"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#09281B] shrink-0"></div>
                <div>
                  <span className="font-bold text-stone-900">88.4%</span>
                  <span className="text-stone-600 ml-1">Direct Field Programs (₹14.28 Cr)</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-600 shrink-0"></div>
                <div>
                  <span className="font-bold text-stone-900">6.8%</span>
                  <span className="text-stone-600 ml-1">Audits & Field Operations (₹1.1 Cr)</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400 shrink-0"></div>
                <div>
                  <span className="font-bold text-stone-900">4.8%</span>
                  <span className="text-stone-600 ml-1">Statutory Compliance (₹0.77 Cr)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statutory Registration Seals */}
          <div className="pt-4 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
            <div className="flex items-center gap-2 bg-white/70 p-2.5 rounded-xl border border-white">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="text-[10px] text-stone-500 block uppercase font-bold">NITI Aayog Darpan</span>
                <strong className="font-mono text-stone-900">{ngoConfig.darpanId}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/70 p-2.5 rounded-xl border border-white">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <div>
                <span className="text-[10px] text-stone-500 block uppercase font-bold">Section 80G Approval</span>
                <strong className="font-mono text-stone-900">CIT(E)/80G/2021-22/1049</strong>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/70 p-2.5 rounded-xl border border-white">
              <Landmark className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-[10px] text-stone-500 block uppercase font-bold">FCRA Global Clearance</span>
                <strong className="font-mono text-stone-900">{ngoConfig.fcraNumber}</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

