import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, ChevronRight, Sparkles } from 'lucide-react';
import { ngoConfig } from '../data/ngoData';

export default function Navbar({ onOpenDonate, onOpenVolunteer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Causes', href: '#causes' },
    { name: 'Urgent Appeal', href: '#urgent-appeal' },
    { name: 'Impact Calculator', href: '#impact-calculator' },
    { name: 'Stories of Change', href: '#stories' },
    { name: 'Transparency', href: '#transparency' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200/90'
          : 'bg-[#FAF8F5] py-4 border-b border-stone-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Heritage Seal */}
          <a href="#" className="flex items-center gap-3 group text-left">
            <div className="w-11 h-11 rounded-full bg-[#0A3323] border-2 border-amber-500/70 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-300">
              {/* Emblem icon */}
              <div className="relative flex items-center justify-center">
                <Heart className="w-5 h-5 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" />
                <Sparkles className="w-3 h-3 text-amber-200 absolute -top-1.5 -right-1.5 animate-pulse" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#0A3323] leading-none">
                  Samarpan
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300/60">
                  Trust
                </span>
              </div>
              <p className="text-[11px] text-stone-500 tracking-wider uppercase font-medium mt-0.5">
                Foundation • Estd. 2011
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-stone-700 hover:text-[#0A3323] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0A3323] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenVolunteer()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#0A3323] bg-stone-100 hover:bg-stone-200 border border-stone-300/80 transition-all cursor-pointer shadow-xs"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Volunteer</span>
            </button>

            <button
              onClick={() => onOpenDonate()}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#0A3323] to-[#145239] hover:from-[#062318] hover:to-[#0A3323] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="tracking-wide">DONATE NOW</span>
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenDonate()}
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0A3323] shadow-sm cursor-pointer"
            >
              <Heart className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>Donate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-stone-800 hover:text-[#0A3323] py-2 border-b border-stone-100"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}

            <div className="pt-3 grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="w-full py-2.5 px-3 rounded-lg border border-stone-300 text-xs font-semibold text-stone-800 bg-stone-100 text-center"
              >
                Volunteer With Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-[#0A3323] text-xs font-bold text-white text-center flex items-center justify-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Donate Now</span>
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-stone-500">
              Tax Exemption available under 80G • Reg. {ngoConfig.regNumber}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

