import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, ShieldCheck, Check, Send, Award, Landmark } from 'lucide-react';
import { ngoConfig } from '../data/ngoData';

export default function Footer({ onOpenDonate, onOpenVolunteer }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#062318] text-[#F3EFEA] pt-16 pb-10 border-t-4 border-amber-600/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Registration (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  {ngoConfig.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-amber-400 font-semibold">
                  Estd. 2011 • Registered Indian Non-Profit
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Dedicated to restoring human dignity through community education, mobile primary healthcare, and women-led rural micro-enterprises with 100% audited statutory transparency.
            </p>

            <div className="space-y-1.5 text-xs text-stone-400 font-mono pt-1">
              <div>Trust Reg: <strong className="text-white">{ngoConfig.regNumber}</strong></div>
              <div>PAN: <strong className="text-white">{ngoConfig.panNumber}</strong></div>
              <div>NGO Darpan: <strong className="text-white">{ngoConfig.darpanId}</strong></div>
              <div>FCRA No: <strong className="text-white">{ngoConfig.fcraNumber}</strong></div>
            </div>
          </div>

          {/* Column 2: Direct Banking Transfer Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-sm">
              <Landmark className="w-4 h-4" />
              <span>Direct NEFT / RTGS Giving</span>
            </div>
            <p className="text-[11px] text-stone-300">
              For high-value or corporate contributions directly via institutional bank wire:
            </p>
            <div className="text-[11px] space-y-1 text-stone-200 font-mono">
              <div><span className="text-stone-400">Bank:</span> {ngoConfig.bankDetails.bankName}</div>
              <div><span className="text-stone-400">A/C:</span> {ngoConfig.bankDetails.accountName}</div>
              <div><span className="text-stone-400">A/C No:</span> <strong className="text-amber-300">{ngoConfig.bankDetails.accountNumber}</strong></div>
              <div><span className="text-stone-400">IFSC:</span> <strong className="text-amber-300">{ngoConfig.bankDetails.ifscCode}</strong></div>
              <div><span className="text-stone-400">Branch:</span> {ngoConfig.bankDetails.branch}</div>
            </div>
            <div className="text-[10px] text-emerald-300 pt-1 border-t border-white/10">
              ✓ Eligible for Section 80G tax receipt upon email notification.
            </div>
          </div>

          {/* Column 3: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#causes" className="hover:text-amber-300 transition-colors">Girl Child STEM</a></li>
              <li><a href="#causes" className="hover:text-amber-300 transition-colors">Mobile Healthcare</a></li>
              <li><a href="#causes" className="hover:text-amber-300 transition-colors">Women Artisan Guild</a></li>
              <li><a href="#causes" className="hover:text-amber-300 transition-colors">Zero-Hunger Nutrition</a></li>
              <li><a href="#transparency" className="hover:text-amber-300 transition-colors">Audited Statements</a></li>
              <li>
                <button
                  onClick={() => onOpenVolunteer()}
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Volunteer Opportunities
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider text-amber-400">
              Quarterly Impact Gazette
            </h4>
            <p className="text-xs text-stone-300">
              Receive audited ground photo-reports and community news directly in your inbox. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-xl overflow-hidden border border-white/20 focus-within:border-amber-400">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/30 px-3.5 py-2.5 text-xs text-white placeholder-stone-400 flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-500 text-white px-3.5 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed successfully! Thank you for walking with us.</span>
                </div>
              )}
            </form>

            <div className="space-y-1.5 text-xs text-stone-300 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{ngoConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{ngoConfig.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{ngoConfig.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center md:text-left">
          <div className="space-y-1">
            <div>
              © {new Date().getFullYear()} {ngoConfig.legalName}. All Rights Reserved.
            </div>
            <div className="text-[11px] text-stone-500">
              Contributions are eligible for up to 50% deduction under Section 80G of the Indian Income Tax Act. Digital Form 10BE issued to all pan-card verified donors.
            </div>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <button onClick={() => onOpenDonate()} className="text-amber-400 hover:underline font-semibold cursor-pointer">
              Donate 80G
            </button>
            <span>•</span>
            <button onClick={() => onOpenVolunteer()} className="hover:underline cursor-pointer">
              Volunteer
            </button>
            <span>•</span>
            <a href="#transparency" className="hover:underline">
              Transparency
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

