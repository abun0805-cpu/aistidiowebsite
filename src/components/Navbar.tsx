import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Header3D } from './Header3D';

interface NavbarProps {
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [activeSection, setActiveSection] = useState<string>('panels');

  const NAV_ITEMS = [
    { id: 'panels', labelEn: 'Panels', labelBn: 'প্যানেল' },
    { id: 'features', labelEn: 'Safety Features', labelBn: 'সেফটি ফিচার' },
    { id: 'tutorial', labelEn: 'Setup Guide', labelBn: 'টিউটোরিয়াল' },
    { id: 'vouches', labelEn: 'Customer Reviews', labelBn: 'কাস্টমার রিভিউ' },
    { id: 'faq', labelEn: 'FAQ', labelBn: 'প্রশ্নোত্তর' },
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
      const isDesktop = window.innerWidth >= 1024;
      const navOffset = isDesktop ? 75 : 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-cyan-500/30 bg-[#030712]/95 shadow-[0_8px_32px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all">
      {/* 3D WebGL Header Scene (Holographic VIP Diamond & Cyber Particle Laser Stream) */}
      <Header3D />

      {/* 3D Holographic Animated Laser Accent Line at Bottom Border */}
      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 via-amber-400 to-transparent opacity-90 shadow-[0_0_12px_rgba(0,240,255,0.8)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Zone 1: Wordmark & Logo */}
        <div className="flex items-center min-w-0">
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-cyan-500 opacity-80 blur-sm group-hover:opacity-100 transition duration-300" />
              <img
                src="/panel_zone_logo.jpg"
                alt="Panel Zone FF BD Logo"
                referrerPolicy="no-referrer"
                className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-amber-400 object-cover shadow-[0_0_15px_rgba(245,158,11,0.6)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-gaming text-base sm:text-xl font-black tracking-wider text-white whitespace-nowrap leading-none drop-shadow-md">
                PANEL ZONE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400">FF BD</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-amber-300 font-bold mt-1 whitespace-nowrap">
                FREE FIRE VIP SELLER
              </span>
            </div>
          </a>
        </div>

        {/* Zone 2: Desktop Navigation Links with 3D Depth & Crystal Clear Text */}
        <nav className="hidden lg:flex items-center gap-2 text-sm perspective-[800px]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer transform-gpu hover:-translate-y-0.5 active:translate-y-0 ${
                  isActive
                    ? 'text-amber-300 bg-gradient-to-b from-amber-500/30 to-amber-600/15 border border-amber-400 shadow-[0_4px_16px_rgba(245,158,11,0.4)] ring-1 ring-amber-400/60 scale-[1.02]'
                    : 'text-white hover:text-amber-200 bg-slate-900/85 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/70 shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_4px_14px_rgba(0,240,255,0.25)]'
                }`}
              >
                {/* 3D Specular Top Bevel */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-t-lg pointer-events-none" />
                <span className="relative z-10">{language === 'en' ? item.labelEn : item.labelBn}</span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Toggle Button Only */}
        <div className="flex items-center shrink-0 perspective-[800px]">
          <button
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg border border-amber-400/90 bg-gradient-to-b from-slate-900 to-slate-950 hover:from-slate-850 hover:to-slate-900 text-amber-300 hover:text-amber-200 transition-all duration-200 cursor-pointer shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transform-gpu"
            title={language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
          >
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/40 to-transparent rounded-t-lg pointer-events-none" />
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-sans font-bold">
              {language === 'bn' ? 'English' : 'বাংলা'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Sub-Navigation Bar: 3D Depth Pills, Crystal Clear Text */}
      <div className="lg:hidden w-full border-t border-cyan-800/40 bg-[#030612]/98 px-2.5 py-2 overflow-x-auto no-scrollbar shadow-inner">
        <div className="flex items-center gap-2 min-w-max px-1 text-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3 py-1.5 rounded-lg active:scale-95 transition-all shrink-0 cursor-pointer font-bold transform-gpu ${
                  isActive
                    ? 'bg-gradient-to-b from-amber-500/30 to-amber-600/15 border border-amber-400 text-amber-300 shadow-[0_0_14px_rgba(245,158,11,0.4)]'
                    : 'bg-slate-900 border border-slate-700 text-white hover:text-amber-300 hover:border-amber-400/70 shadow-sm'
                }`}
              >
                <span className="relative z-10">{language === 'en' ? item.labelEn : item.labelBn}</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};
