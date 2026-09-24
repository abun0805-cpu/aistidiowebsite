import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

interface NavbarProps {
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [activeSection, setActiveSection] = useState<string>('panels');

  const NAV_ITEMS = [
    { id: 'panels', labelEn: 'Panels', labelBn: 'প্যানেল' },
    { id: 'features', labelEn: 'Safety Features', labelBn: 'সেফটি ফিচার' },
    { id: 'tutorial', labelEn: 'Setup Guide', labelBn: 'সেটআপ গাইড' },
    { id: 'vouches', labelEn: 'Customer Reviews', labelBn: 'কাস্টমার রিভিউ' },
    { id: 'faq', labelEn: 'FAQ', labelBn: 'এফএকিউ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['panels', 'features', 'tutorial', 'vouches', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('panels');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-900/40 bg-[#040711]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Zone 1: Wordmark & Logo */}
        <div className="flex items-center min-w-0">
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-cyan-500 opacity-70 blur-sm group-hover:opacity-100 transition duration-300" />
              <img
                src="/panel_zone_logo.jpg"
                alt="Panel Zone FF BD Logo"
                referrerPolicy="no-referrer"
                className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-amber-400/90 object-cover shadow-[0_0_15px_rgba(245,158,11,0.5)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-gaming text-base sm:text-xl font-black tracking-wider text-white whitespace-nowrap leading-none">
                PANEL ZONE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400">FF BD</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-amber-400 font-bold mt-1 whitespace-nowrap">
                FREE FIRE PANEL SELLER
              </span>
            </div>
          </a>
        </div>

        {/* Zone 2: Navigation Links (Desktop: Identical items with golden highlight when selected/active) */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'text-amber-300 bg-amber-500/15 border border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.25)] font-bold'
                    : 'text-slate-300 hover:text-amber-200 border border-transparent hover:border-slate-800'
                }`}
              >
                {language === 'en' ? item.labelEn : item.labelBn}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Toggle Button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-amber-500/50 bg-slate-900/90 hover:bg-slate-800 text-amber-300 hover:text-amber-200 transition-all cursor-pointer shadow-[0_0_12px_rgba(245,158,11,0.2)] active:scale-95"
            title={language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-sans font-bold">
              {language === 'bn' ? 'English' : 'বাংলা'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Sticky Feature Navigation Bar: Identical items with golden highlight when selected/active */}
      <div className="md:hidden w-full border-t border-cyan-900/30 bg-[#030611]/95 px-2 py-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max px-1 text-[11px]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-1 rounded-full active:scale-95 transition-all shrink-0 cursor-pointer font-semibold ${
                  isActive
                    ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.3)] font-bold'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-amber-200'
                }`}
              >
                {language === 'en' ? item.labelEn : item.labelBn}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};
