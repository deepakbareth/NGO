import React, { useState } from 'react';
import { Heart, Check, Send, Landmark } from 'lucide-react';
import { ngoConfig } from '../data/ngoData';

const currentYear = new Date().getFullYear();

export default function Footer({ onOpenDonate, onOpenVolunteer }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#09281B] text-stone-200 pt-12 pb-8 border-t-2 border-amber-500/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand & Statutory (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <span className="text-xl font-extrabold text-white">
                {ngoConfig.name}
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Non-profit trust dedicated to girl-child STEM education, mobile clinics, and zero-hunger drives across rural India with 100% audited transparency.
            </p>

            <div className="text-[11px] text-stone-400 font-mono space-y-0.5 pt-1">
              <div>Trust Reg: <strong className="text-white">{ngoConfig.regNumber}</strong></div>
              <div>NGO Darpan: <strong className="text-white">{ngoConfig.darpanId}</strong> | 80G Tax Deductible</div>
              <div>FCRA Approval: <strong className="text-white">{ngoConfig.fcraNumber}</strong></div>
            </div>
          </div>

          {/* Direct Bank Wire for RTGS/NEFT (4 cols) */}
          <div className="md:col-span-4 bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Landmark className="w-4 h-4" />
              <span>Direct Bank RTGS / NEFT Giving</span>
            </div>
            <div className="text-[11px] font-mono space-y-0.5 text-stone-300">
              <div>Bank: {ngoConfig.bankDetails.bankName}</div>
              <div>A/C: <strong className="text-amber-300">{ngoConfig.bankDetails.accountNumber}</strong></div>
              <div>IFSC: <strong className="text-amber-300">{ngoConfig.bankDetails.ifscCode}</strong></div>
            </div>
            <div className="text-[10px] text-emerald-300">
              ✓ Eligible for Section 80G tax receipt on email notification.
            </div>
          </div>

          {/* Quick Newsletter (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Stay Connected
            </h4>
            
            <form onSubmit={handleSubscribe} className="space-y-1.5">
              <div className="flex rounded-xl overflow-hidden border border-white/20 focus-within:border-amber-400">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/30 px-3 py-2 text-xs text-white placeholder-stone-400 flex-1 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-500 text-white px-3 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Subscribed! Thank you for walking with us.</span>
                </div>
              )}
            </form>

            <div className="text-[11px] text-stone-300 space-y-1 pt-1">
              <div>{ngoConfig.phone}</div>
              <div>{ngoConfig.email}</div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <div>
            © {currentYear} {ngoConfig.legalName}. Section 80G Approved.
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => onOpenDonate()} className="text-amber-400 hover:underline font-bold cursor-pointer">
              Donate 80G
            </button>
            <span>•</span>
            <button onClick={() => onOpenVolunteer()} className="hover:underline cursor-pointer">
              Volunteer
            </button>
            <span>•</span>
            <a href="#trust-impact" className="hover:underline">
              Audit Disclosures
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
