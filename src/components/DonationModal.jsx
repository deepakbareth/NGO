import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, Lock, ArrowRight, Download, RefreshCw, CreditCard, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ngoConfig, causesData } from '../data/ngoData';

export default function DonationModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1); // 1: Amount & Cause, 2: Donor Info & 80G PAN, 3: Success Receipt
  const [frequency, setFrequency] = useState(initialData.isMonthly ? 'monthly' : 'onetime');
  const [selectedAmount, setSelectedAmount] = useState(initialData.amount || 2500);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState(initialData.cause || 'all');
  
  // Donor details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  // Update when initialData changes
  useEffect(() => {
    if (initialData.amount) setSelectedAmount(initialData.amount);
    if (initialData.isMonthly !== undefined) {
      setFrequency(initialData.isMonthly ? 'monthly' : 'onetime');
    }
    if (initialData.cause) setSelectedCause(initialData.cause);
  }, [initialData]);

  if (!isOpen) return null;

  const presets = [500, 1200, 2500, 5000, 10000];

  const handleAmountClick = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(Number(val));
    }
  };

  const handleProceedToDetails = (e) => {
    e.preventDefault();
    if (selectedAmount >= 100) {
      setStep(2);
    }
  };

  const handleCompleteDonation = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedReceipt = `SMP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setReceiptNumber(generatedReceipt);
      setStep(3);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#062318] to-[#0A3323] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/40">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                {step === 3 ? 'Donation Confirmed!' : 'Dignified Contribution'}
              </h3>
              <p className="text-xs text-emerald-300">
                100% Tax Deductible under Section 80G • Reg: {ngoConfig.regNumber}
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Amount & Cause Selection */}
          {step === 1 && (
            <form onSubmit={handleProceedToDetails} className="space-y-5">
              
              {/* Frequency Toggle */}
              <div className="flex bg-stone-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFrequency('onetime')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    frequency === 'onetime'
                      ? 'bg-white text-[#0A3323] shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  One-Time Contribution
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    frequency === 'monthly'
                      ? 'bg-[#0A3323] text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <span>Monthly Guardian</span>
                  <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.2 rounded-full font-bold">
                    Lasting
                  </span>
                </button>
              </div>

              {/* Cause Selector Dropdown */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Designate Your Contribution:
                </label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                >
                  <option value="all">Samarpan General Impact Fund (Highest Priority Need)</option>
                  {causesData.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                  <option value="winter-warmth">Special Campaign: Winter Warmth for 5,000 Schoolkids</option>
                </select>
              </div>

              {/* Preset Amounts */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Select Donation Amount:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {presets.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountClick(amt)}
                      className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                        selectedAmount === amt && !customAmount
                          ? 'border-[#0A3323] bg-emerald-50 text-[#0A3323] ring-2 ring-[#0A3323]/20 shadow-xs'
                          : 'border-stone-200 bg-white text-stone-800 hover:border-stone-300'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount Field */}
              <div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-bold">
                    ₹
                  </span>
                  <input
                    type="text"
                    placeholder="Or enter any custom amount (min ₹100)"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-stone-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                  />
                </div>
              </div>

              {/* Tax benefit highlight */}
              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <span>Estimated 80G Tax Exemption (50%):</span>
                <strong className="text-sm font-bold text-[#0A3323]">
                  Save ≈ ₹{Math.round(selectedAmount * 0.5).toLocaleString('en-IN')}
                </strong>
              </div>

              {/* Next Step Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-[#0A3323] hover:bg-[#145239] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Continue to Donor Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}

          {/* STEP 2: Donor Info & 80G PAN */}
          {step === 2 && (
            <form onSubmit={handleCompleteDonation} className="space-y-4">
              
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Contribution: <strong className="text-stone-900 font-bold text-sm">₹{selectedAmount.toLocaleString('en-IN')}</strong> ({frequency})
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-emerald-800 hover:underline font-semibold cursor-pointer"
                >
                  Change
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Full Name (As per PAN for 80G) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Deepak Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    placeholder="To receive 80G receipt"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="For WhatsApp impact reports"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    PAN Card Number (Required for 80G Tax Exemption)
                  </label>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">
                    Form 10BE
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={10}
                  placeholder="e.g. ABCDE1234F"
                  value={pan}
                  onChange={(e) => setPan(e.target.value.toUpperCase())}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm uppercase font-mono focus:outline-none focus:ring-2 focus:ring-[#0A3323]"
                />
                <span className="text-[10px] text-stone-400 mt-1 block">
                  Income Tax department mandates PAN for 80G tax benefit claim.
                </span>
              </div>

              {/* Payment Rail Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Select Payment Rail:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'upi'
                        ? 'border-[#0A3323] bg-emerald-50 text-[#0A3323] font-bold'
                        : 'border-stone-200 text-stone-700'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs">UPI / GPay / PhonePe</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#0A3323] bg-emerald-50 text-[#0A3323] font-bold'
                        : 'border-stone-200 text-stone-700'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs">Debit / Credit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      paymentMethod === 'netbanking'
                        ? 'border-[#0A3323] bg-emerald-50 text-[#0A3323] font-bold'
                        : 'border-stone-200 text-stone-700'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs">Net Banking / NEFT</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing Secure Contribution...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-amber-200" />
                    <span>Confirm & Donate ₹{selectedAmount.toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit Bank-Grade Encryption • Zero Transaction Fee on UPI</span>
              </div>

            </form>
          )}

          {/* STEP 3: Instant 80G Receipt & Confirmation */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-stone-900">
                  Thank You, {name || 'Conscientious Patron'}!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Your dignified contribution has been recorded in the statutory registry.
                </p>
              </div>

              {/* Receipt Preview Card */}
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-left space-y-3 font-sans">
                <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                  <span className="font-bold text-[#0A3323] text-sm">
                    {ngoConfig.legalName}
                  </span>
                  <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                    80G Approved
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-400 block">Receipt No:</span>
                    <strong className="font-mono text-stone-900">{receiptNumber}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Amount Donated:</span>
                    <strong className="text-stone-900 font-bold">₹{selectedAmount.toLocaleString('en-IN')}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Donor Name:</span>
                    <strong className="text-stone-900">{name || 'Patron'}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block">80G Tax Exemption:</span>
                    <strong className="text-emerald-800 font-bold">50% Deductible</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500">
                  A digitally signed copy has been emailed to <strong>{email || 'your registered email'}</strong> for filing Form 10BE with the Income Tax Department.
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => alert(`Receipt ${receiptNumber} has been downloaded to your system.`)}
                  className="flex-1 py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-xs sm:text-sm font-semibold text-stone-700 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Receipt</span>
                </button>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0A3323] hover:bg-[#145239] text-xs sm:text-sm font-bold text-white transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

