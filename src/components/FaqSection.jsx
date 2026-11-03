import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileCheck, ArrowRight } from 'lucide-react';
import { faqsData } from '../data/ngoData';

export default function FaqSection({ onOpenDonate }) {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A3323] tracking-tight">
            Clear Answers for Conscientious Donors
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Everything you need to know about statutory tax rebates, fund utilization certificates, and our open-door inspection policy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-stone-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-900' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#0A3323] flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5 text-emerald-800" />
            </div>
            <div>
              <div className="font-bold text-stone-900 text-sm">
                Have an institutional CSR inquiry or statutory compliance question?
              </div>
              <div className="text-xs text-stone-500">
                Our compliance officer responds within 4 working hours.
              </div>
            </div>
          </div>

          <a
            href="mailto:care@samarpanfoundation.org"
            className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-800 border border-stone-300 shrink-0 transition-all"
          >
            Email Compliance Desk
          </a>
        </div>

      </div>
    </section>
  );
}

