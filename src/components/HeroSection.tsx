import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { AppleIcon } from './PanelIcons';

interface HeroSectionProps {
  language: 'en' | 'bn';
  selectedCategory?: 'mobile' | 'pc' | 'ios' | null;
  onScrollToPanels: () => void;
  onSelectCategory: (category: 'mobile' | 'pc' | 'ios') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  selectedCategory = null,
  onScrollToPanels,
  onSelectCategory,
}) => {
  return (
    <div className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Cyber Ambient Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/15 via-cyan-500/15 to-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Brand Logo Emblem */}
        <div className="flex flex-col items-center justify-center mb-5">
          <div className="relative group cursor-pointer" onClick={onScrollToPanels}>
            {/* Outer dual neon glow ring */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-r from-cyan-500 via-amber-500 to-yellow-400 opacity-75 blur-md group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
            <div className="relative p-1 rounded-full bg-gradient-to-br from-cyan-400 via-slate-900 to-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.45)]">
              <img
                src="/panel_zone_logo.jpg"
                alt="Panel Zone FF BD Official Logo"
                referrerPolicy="no-referrer"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-amber-400/90 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Status indicator banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 text-xs font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {language === 'en'
              ? 'Status: Active · 100% Safe & Undetected'
              : 'স্ট্যাটাস: অ্যাক্টিভ · ১০০% নিরাপদ ও আনডিটেক্টেড'}
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto">
          {language === 'en' ? (
            <h1 className="font-gaming font-extrabold tracking-tight text-white flex flex-col items-center">
              <span className="text-lg sm:text-2xl md:text-3xl text-slate-200 uppercase tracking-widest font-semibold mb-1">
                DOMINATE EVERY MATCH WITH
              </span>
              <span className="font-black text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl tracking-wide whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 drop-shadow-[0_4px_25px_rgba(245,158,11,0.35)] py-1">
                PANEL ZONE FF BD
              </span>
            </h1>
          ) : (
            <h1 className="font-gaming font-extrabold tracking-tight text-white flex flex-col items-center">
              <span className="text-lg sm:text-2xl md:text-3xl text-slate-200 uppercase tracking-wide font-semibold mb-1">
                মেইন আইডিতে ১০০% নিরাপদে খেলুন
              </span>
              <span className="font-black text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl tracking-wide whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400 drop-shadow-[0_4px_25px_rgba(245,158,11,0.35)] py-1">
                প্যানেল জোন এফএফ বিডি
              </span>
            </h1>
          )}
        </div>

        {/* Subtitle */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {language === 'en'
            ? 'Bangladesh\'s trusted source for premium safe Free Fire panels. Headshot Aim, Location Cham, and Emulator Bypass for Mobile, PC, and iOS.'
            : 'বাংলাদেশের বিশ্বস্ত ফ্রি ফায়ার প্যানেল সেলার। হেডশট এইম, লোকেশন চাম ও নো-রিকয়েল। মোবাইল, পিসি ও আইওএস এ ১০০% নিরাপদ।'}
        </p>

        {/* Quick Category Jump Buttons with 3D Elevation */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => onSelectCategory('mobile')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 text-xs sm:text-sm font-gaming font-extrabold tracking-wider uppercase cursor-pointer hover:-translate-y-1 ${
              selectedCategory === 'mobile'
                ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200 shadow-[0_0_25px_rgba(6,182,212,0.6)] ring-2 ring-cyan-400/60 scale-105'
                : 'border-cyan-500/60 bg-[#061226]/90 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-300 shadow-[0_4px_15px_rgba(6,182,212,0.3)]'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>{language === 'en' ? 'Mobile Panel' : 'মোবাইল প্যানেল'}</span>
          </button>

          <button
            onClick={() => onSelectCategory('pc')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 text-xs sm:text-sm font-gaming font-extrabold tracking-wider uppercase cursor-pointer hover:-translate-y-1 ${
              selectedCategory === 'pc'
                ? 'bg-emerald-500/30 border-emerald-400 text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.6)] ring-2 ring-emerald-400/60 scale-105'
                : 'border-emerald-500/60 bg-[#06181b]/90 text-emerald-300 hover:bg-emerald-900/40 hover:border-emerald-300 shadow-[0_4px_15px_rgba(16,185,129,0.3)]'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>{language === 'en' ? 'PC Panel' : 'পিসি প্যানেল'}</span>
          </button>

          <button
            onClick={() => onSelectCategory('ios')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 text-xs sm:text-sm font-gaming font-extrabold tracking-wider uppercase cursor-pointer hover:-translate-y-1 ${
              selectedCategory === 'ios'
                ? 'bg-amber-500/30 border-amber-400 text-amber-200 shadow-[0_0_25px_rgba(245,158,11,0.6)] ring-2 ring-amber-400/60 scale-105'
                : 'border-amber-500/60 bg-[#1c1206]/90 text-amber-300 hover:bg-amber-900/40 hover:border-amber-300 shadow-[0_4px_15px_rgba(245,158,11,0.3)]'
            }`}
          >
            <AppleIcon className="w-4 h-4" />
            <span>{language === 'en' ? 'iOS Panel' : 'আইওএস প্যানেল'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

