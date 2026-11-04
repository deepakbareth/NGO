import React, { useState } from 'react';
import { X, Users, CheckCircle2, ArrowRight, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteerModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('education');
  const [hours, setHours] = useState('2-4');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#0A3323] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                Join the Samarpan Volunteer Force
              </h3>
              <p className="text-xs text-stone-300">
                Lend your mind, skills, and heart to grassroots empowerment
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              </div>

              <h4 className="text-2xl font-bold text-stone-900">
                Application Received, {fullName}!
              </h4>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm mx-auto">
                Thank you for stepping forward. Our volunteer coordinator will connect with you on <strong>{phone || 'your phone'}</strong> and invite you to our upcoming volunteer orientation webinar.
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="mt-4 px-6 py-3 rounded-xl bg-[#0A3323] text-white font-bold text-xs sm:text-sm hover:bg-[#145239] transition-all cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Deepak Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Delhi, Remote"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Time Commitment *
                  </label>
                  <select
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                  >
                    <option value="2-4">2-4 Hours / Week (Weekends)</option>
                    <option value="5-8">5-8 Hours / Week</option>
                    <option value="fulltime">Full-Time Fellow (3 Months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Primary Area of Contribution:
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                >
                  <option value="education">Virtual / In-person Teaching & Curriculum</option>
                  <option value="medical">Medical / Nursing Camp Volunteer</option>
                  <option value="digital">Web, Design, Content & Social Media</option>
                  <option value="field">Field Logistics & Food Distribution Drives</option>
                  <option value="legal">Legal, Statutory & Audit Advisory</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-[#0A3323] hover:bg-[#145239] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>Submit Volunteer Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

