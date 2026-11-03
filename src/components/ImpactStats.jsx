import React from 'react';
import { Award, CheckCircle2, TrendingUp, Building2, Shield, Calendar } from 'lucide-react';
import { impactStatsData, ngoConfig } from '../data/ngoData';

export default function ImpactStats() {
  const milestones = [
    { year: '2011', title: 'Inception in Purulia', desc: 'Started with 1 informal evening study hut for 35 tribal girls.' },
    { year: '2016', title: 'Aarogya Vahini Launch', desc: 'First mobile diagnostic van commissioned across 45 drought villages.' },
    { year: '2020', title: 'Emergency Pandemic Relief', desc: 'Delivered 2.8 million hot meals and 15,000 ration kits with zero leakage.' },
    { year: '2024', title: 'Digital STEM Classrooms', desc: '14 solar-powered tech pods installed with internet and digital curriculum.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A3323] via-[#062318] to-[#0A3323] text-white relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-subtle-noise opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-amber-400/30">
            <TrendingUp className="w-3.5 h-3.5" />
            Proof of Work & Ground Realities
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            14 Years of Unbroken Ground Service
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
            We measure success not in intentions, but in verifiable community dignity. Our books, receipts, and field registries are open for inspection 365 days a year.
          </p>
        </div>

        {/* 4 Grand Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {impactStatsData.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-stone-300 mt-2 leading-relaxed">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Milestones / Timeline strip */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Our Journey of Dignity
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Building Enduring Community Institutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 md:pl-0 md:pt-6 border-l-2 md:border-l-0 md:border-t-2 border-amber-500/50">
                {/* Milestone dot */}
                <div className="absolute -left-[9px] top-0 md:left-0 md:-top-[9px] w-4 h-4 rounded-full bg-amber-400 border-2 border-[#0A3323]"></div>
                
                <span className="inline-block text-xs font-bold text-amber-300 px-2 py-0.5 rounded bg-white/10 font-mono">
                  {m.year}
                </span>
                <h4 className="font-bold text-base text-white mt-2">
                  {m.title}
                </h4>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Accreditation Seals */}
        <div className="mt-14 p-5 rounded-2xl bg-black/30 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>NITI Aayog NGO Darpan ID: <strong>{ngoConfig.darpanId}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Income Tax 80G Approval: <strong>CIT(E)/80G/2021-22/1049</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>FCRA Registration No: <strong>{ngoConfig.fcraNumber}</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}

