import React, { useState } from 'react';
import { ShieldCheck, FileDown, CheckCircle, PieChart, Users2, Lock, ExternalLink } from 'lucide-react';
import { financialBreakdown, trusteesData, ngoConfig } from '../data/ngoData';

export default function Transparency() {
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const handleDownload = (docName) => {
    setDownloadSuccess(docName);
    setTimeout(() => {
      setDownloadSuccess('');
    }, 4000);
  };

  return (
    <section id="transparency" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-[#0A3323] border border-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Financial Governance & Accountability
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A3323] tracking-tight">
            Open Books. Zero Ambiguity.
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            We adhere to rigorous statutory accounting standards. Every single rupee donated is tagged, recorded in public tax returns, and published annually for complete public scrutiny.
          </p>
        </div>

        {/* Financial Allocation Visual Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Breakdown Cards */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-emerald-800" />
              <span>Where Every Rupee Goes (FY 2024-25)</span>
            </h3>

            <div className="space-y-4">
              {financialBreakdown.map((item, idx) => (
                <div key={idx} className="bg-stone-50 border border-stone-200 p-5 rounded-2xl hover:border-stone-300 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-stone-900 text-sm sm:text-base">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-stone-500 font-medium">({item.amount})</span>
                      <span className="font-serif font-bold text-lg text-emerald-900 bg-emerald-100/80 px-2.5 py-0.5 rounded-lg">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color
                      }}
                    ></div>
                  </div>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                Audited independently by <strong>M/s Kapoor & Singhania Chartered Accountants</strong> (Firm Reg. 018491N).
              </span>
            </div>
          </div>

          {/* Right Column: Downloadable Statutory Reports */}
          <div className="lg:col-span-5 bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Public Disclosures & Audit Reports
              </span>
              <h4 className="font-serif text-xl font-bold text-stone-900 mt-1">
                Verified Compliance Documents
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                Download digitally certified annual returns and certificates.
              </p>
            </div>

            {/* Document List */}
            <div className="space-y-3">
              {[
                { title: 'Annual Report & Financials FY 2024-25', size: '2.4 MB PDF', tag: 'Latest' },
                { title: 'Statutory Audit & FCRA Return Form FC-4', size: '1.8 MB PDF', tag: 'Govt Portal' },
                { title: 'Section 80G & 12A Permanent Exemption Order', size: '890 KB PDF', tag: 'Permanent' },
                { title: 'NITI Aayog NGO Darpan Registration Certificate', size: '540 KB PDF', tag: 'Verified' },
              ].map((doc, i) => (
                <div
                  key={i}
                  className="bg-white p-3.5 rounded-xl border border-stone-200 hover:border-emerald-600 flex items-center justify-between transition-all group"
                >
                  <div className="pr-2">
                    <div className="text-xs sm:text-sm font-semibold text-stone-800 group-hover:text-emerald-900 transition-colors">
                      {doc.title}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5">
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-medium">{doc.tag}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(doc.title)}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-emerald-800 hover:text-white text-stone-700 transition-all cursor-pointer shrink-0"
                    title={`Download ${doc.title}`}
                  >
                    <FileDown className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {downloadSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-900 flex items-center gap-2 animate-fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Downloaded certified copy of <strong>{downloadSuccess}</strong>.</span>
              </div>
            )}

            <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-stone-400" />
                DigiLocker Verified Copies
              </span>
              <a
                href="#faq"
                className="text-emerald-800 hover:underline font-medium flex items-center gap-1"
              >
                <span>Read Governance FAQ</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

        {/* Board of Eminent Trustees Preview */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Leadership & Stewardship
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A3323] mt-1">
              Governed by Exemplary Public Servants
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Our board draws zero remuneration and maintains complete fiduciary separation from day-to-day procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trusteesData.map((trustee, idx) => (
              <div
                key={idx}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:shadow-md transition-all text-center space-y-3"
              >
                <div className="w-16 h-16 rounded-full bg-[#0A3323] text-amber-300 font-serif text-xl font-bold flex items-center justify-center mx-auto border-2 border-amber-400/50 shadow-sm">
                  {trustee.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>

                <div>
                  <h4 className="font-serif font-bold text-lg text-stone-900">
                    {trustee.name}
                  </h4>
                  <div className="text-xs font-semibold text-emerald-800 mt-0.5">
                    {trustee.role}
                  </div>
                  <div className="text-[11px] text-stone-500 font-mono mt-1">
                    {trustee.credentials}
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed border-t border-stone-200 pt-3">
                  {trustee.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

