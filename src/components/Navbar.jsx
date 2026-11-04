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
      // Scrolls precisely to the top of the target section so no content from above is shown
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-2.5 pb-2 transition-all duration-300">
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/92 backdrop-blur-xl border border-amber-200/70 shadow-lg shadow-black/5'
              : 'bg-white/85 backdrop-blur-md border border-white/80 shadow-xs'
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

            {/* Desktop Nav links */}
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

            {/* Mobile Actions: Donate + Hamburger Button */}
            <div className="flex items-center gap-1.5 md:hidden">
              <button
                onClick={() => onOpenDonate()}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-500 shadow-xs cursor-pointer"
              >
                <Heart className="w-3 h-3 fill-white text-white" />
                <span>Donate</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 rounded-xl text-stone-700 hover:bg-stone-100 cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Floating Glass Overlay with Curved Corners */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 p-3 sm:p-4 flex flex-col justify-start animate-fade-in">
          {/* Frosted Dimmed Backdrop - click to close */}
          <div
            className="fixed inset-0 bg-black/35 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Floating Curved Glass Card */}
          <div className="relative w-full max-w-md mx-auto bg-white/92 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl p-5 space-y-4 z-10">
            
            {/* Top row: Brand Seal + Close Button */}
            <div className="flex items-center justify-between border-b border-stone-200/60 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#09281B] to-[#145239] flex items-center justify-center text-amber-400 shadow-sm shrink-0">
                  <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-extrabold tracking-tight text-[#09281B] leading-none">
                      Samarpan
                    </span>
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60">
                      80G Certified
                    </span>
                  </div>
                  <p className="text-[9px] text-stone-500 font-medium tracking-wide mt-0.5">
                    Regd. Non-Profit • Estd. 2011
                  </p>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-2.5 px-3.5 rounded-2xl text-sm font-bold text-stone-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all cursor-pointer"
                >
                  <span>{link.name}</span>
                  <span className="text-stone-300 text-xs">→</span>
                </a>
              ))}
            </nav>

            {/* Bottom Action CTAs */}
            <div className="pt-2 border-t border-stone-200/60 grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteer();
                }}
                className="py-3 px-3 rounded-2xl text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-stone-600" />
                <span>Volunteer</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="py-3 px-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-md transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                <span>Donate 80G</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
