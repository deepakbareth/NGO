import React from 'react';
import { Star, ShieldCheck, HeartHandshake, Quote, Building } from 'lucide-react';
import { partnersData } from '../data/ngoData';

export default function PartnersTestimonials() {
  const testimonials = [
    {
      name: "Dr. Arvind Mehta",
      role: "Patron & Sustaining Donor since 2014",
      quote: "What convinced me to support Samarpan for 10 years is the meticulous geotagged documentation. Every single child's school fee receipt and medical report is accounted for. Zero pretense, pure ground devotion.",
      location: "Bengaluru, India"
    },
    {
      name: "Shweta Kulkarni",
      role: "Head of CSR, Tech Solutions India",
      quote: "Partnering with Samarpan for our mandatory 2% CSR fund allocation was the smoothest compliance experience. Form 10BE, utilization certificates, and third-party audit reports arrived well before statutory deadlines.",
      location: "Pune, India"
    },
    {
      name: "Priya Mathur",
      role: "Vidya Virtual Math Tutor & Volunteer",
      quote: "Teaching tribal students through Samarpan's digital learning pods every Saturday morning has been the most meaningful part of my week. The hunger to learn in these children's eyes is unforgettable.",
      location: "New Delhi, India"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-stone-100/60 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: CSR Partners & Grant Rails Strip */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Institutional Trust & CSR Coalitions
          </span>
          <h3 className="text-2xl font-extrabold text-[#0A3323] mt-1">
            Backed by Respected Institutions & Corporate CSR Funds
          </h3>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partnersData.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#0A3323] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-[#0A3323] group-hover:bg-emerald-50 transition-colors mb-2">
                <Building className="w-5 h-5 text-emerald-800" />
              </div>
              <div className="text-xs font-bold text-stone-800 line-clamp-1">
                {partner.name}
              </div>
              <div className="text-[10px] text-stone-500 mt-0.5">
                {partner.type}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Testimonials Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-stone-900 text-sm">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">
                    {item.role}
                  </div>
                </div>
                <span className="text-[10px] text-stone-400 font-medium bg-stone-100 px-2 py-0.5 rounded">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

