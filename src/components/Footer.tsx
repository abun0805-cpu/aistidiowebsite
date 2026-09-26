import React from 'react';
import { ShieldAlert, ExternalLink } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon } from './PanelIcons';
import { WHATSAPP_URL, FACEBOOK_URL } from '../data/panelsData';

interface FooterProps {
  language: 'en' | 'bn';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="relative border-t-2 border-cyan-500/40 bg-[#02050e]/98 py-12 text-slate-300 text-xs backdrop-blur-xl shadow-[0_-10px_35px_rgba(0,0,0,0.8)]">
      {/* 3D Cyber Ambient Edge at Top of Footer */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-12 bg-cyan-500/10 blur-2xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Brand Info */}
          <div className="flex items-center gap-3.5 text-center lg:text-left">
            <img
              src="/panel_zone_logo.jpg"
              alt="Panel Zone FF BD"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full border-2 border-amber-400 object-cover shadow-[0_0_15px_rgba(245,158,11,0.5)] shrink-0"
            />
            <div>
              <span className="font-gaming text-lg font-bold text-white tracking-wider whitespace-nowrap">
                PANEL ZONE <span className="text-amber-400">FF BD</span>
              </span>
              <p className="text-xs text-slate-300 font-medium mt-0.5 max-w-md">
                {language === 'en'
                  ? 'Official Free Fire VIP Panel Provider in Bangladesh · Mobile, PC & iOS'
                  : 'অফিশিয়াল ফ্রি ফায়ার ভিআইপি প্যানেল প্রোভাইডার ইন বাংলাদেশ · মোবাইল, পিসি ও আইওএস'}
              </p>
            </div>
          </div>

          {/* Quick Header Links with High Contrast & Crystal Clear Text */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-bold">
            <a
              href="#panels"
              className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-white hover:text-amber-300 hover:border-amber-400 transition-all shadow-sm active:scale-95"
            >
              {language === 'en' ? 'Panels' : 'প্যানেলসমূহ'}
            </a>
            <a
              href="#features"
              className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-white hover:text-amber-300 hover:border-amber-400 transition-all shadow-sm active:scale-95"
            >
              {language === 'en' ? 'Safety Features' : 'সেফটি ফিচার'}
            </a>
            <a
              href="#tutorial"
              className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-white hover:text-amber-300 hover:border-amber-400 transition-all shadow-sm active:scale-95"
            >
              {language === 'en' ? 'Setup Guide' : 'টিউটোরিয়াল'}
            </a>
            <a
              href="#faq"
              className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-white hover:text-amber-300 hover:border-amber-400 transition-all shadow-sm active:scale-95"
            >
              {language === 'en' ? 'FAQ' : 'প্রশ্নোত্তর'}
            </a>

            {/* Bright WhatsApp Contact Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/25 hover:bg-[#25D366]/35 border-2 border-[#25D366] text-[#25D366] hover:text-emerald-200 font-gaming font-extrabold tracking-wide transition-all shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:shadow-[0_0_28px_rgba(37,211,102,0.55)] hover:scale-105 cursor-pointer active:scale-95"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366] shrink-0" />
              <span>{language === 'en' ? 'WhatsApp' : 'হোয়াটসঅ্যাপ'}</span>
              <ExternalLink className="w-3 h-3 text-[#25D366] opacity-80" />
            </a>

            {/* Bright Facebook Page Button */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2]/25 hover:bg-[#1877F2]/35 border-2 border-[#1877F2] text-[#38bdf8] hover:text-white font-gaming font-extrabold tracking-wide transition-all shadow-[0_0_20px_rgba(24,119,242,0.35)] hover:shadow-[0_0_28px_rgba(24,119,242,0.55)] hover:scale-105 cursor-pointer active:scale-95"
              title="Panel Zone FF BD on Facebook"
            >
              <FacebookIcon className="w-4 h-4 fill-[#1877F2] shrink-0" />
              <span>{language === 'en' ? 'Facebook' : 'ফেসবুক'}</span>
              <ExternalLink className="w-3 h-3 text-[#38bdf8] opacity-80" />
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="font-medium text-slate-300">© {new Date().getFullYear()} Panel Zone FF BD. All rights reserved.</p>
          <div className="flex items-center gap-2 text-amber-300 bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-500/40 font-medium">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {language === 'en'
                ? 'Free Fire calibration & anti-lag utility. 100% Safe & Undetected.'
                : 'ফ্রি ফায়ার সেন্সিটিভিটি ও অ্যান্টি-ল্যাগ টিউনিং টুল। ১০০% নিরাপদ।'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
