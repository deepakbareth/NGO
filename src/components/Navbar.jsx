import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Users } from 'lucide-react';

export default function Navbar({ onOpenDonate, onOpenVolunteer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Causes', href: '#causes' },
    { name: 'Urgent Drive', href: '#urgent-drive' },
    { name: 'Impact Calculator', href: '#calculator' },
    { name: 'Proof & Audits', href: '#trust-impact' },
    { name: 'Stories', href: '#stories' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Balanced offset so the title and badge sit with a clean, comfortable gap below navbar
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 px-3 sm:px-6 pt-3 pb-2 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-md border-amber-200/50'
            : 'bg-white/80 backdrop-blur-md border border-white/80 shadow-xs'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo with warm badge */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#09281B] to-[#145239] flex items-center justify-center text-amber-400 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#09281B] leading-none">
                  Samarpan
                </span>
                <span className="hidden xs:inline-block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60">
                  80G Certified
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-stone-500 font-medium tracking-wide mt-0.5">
                Regd. Non-Profit • Estd. 2011
              </p>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-amber-700 transition-colors py-1 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenVolunteer()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-stone-700 hover:text-stone-900 hover:bg-stone-100/70 transition-all cursor-pointer"
            >
              <Users className="w-3.5 h-3.5 text-stone-500" />
              <span>Volunteer</span>
            </button>

            <button
              onClick={() => onOpenDonate()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <Heart className="w-3.5 h-3.5 fill-white text-white group-hover:scale-125 transition-transform" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenDonate()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-amber-600 shadow-xs cursor-pointer"
            >
              <Heart className="w-3 h-3 fill-white text-white" />
              <span>Donate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-stone-700 hover:bg-stone-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 mt-2 border-t border-stone-200/60 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-1.5 px-2 text-sm font-medium text-stone-800 hover:text-amber-700 rounded-lg cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="py-2 text-xs font-semibold text-stone-700 bg-stone-100 rounded-xl"
              >
                Volunteer
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="py-2 text-xs font-bold text-white bg-amber-600 rounded-xl flex items-center justify-center gap-1"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate 80G</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
