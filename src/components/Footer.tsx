import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon } from './PanelIcons';
import { WHATSAPP_URL, FACEBOOK_URL } from '../data/panelsData';

interface FooterProps {
  language: 'en' | 'bn';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="border-t border-slate-900 bg-[#02050e] py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/panel_zone_logo.jpg"
              alt="Panel Zone FF BD"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border border-amber-400/80 object-cover shadow-[0_0_12px_rgba(245,158,11,0.4)] shrink-0"
            />
            <div>
              <span className="font-gaming text-base font-bold text-white tracking-wider whitespace-nowrap">
                PANEL ZONE <span className="text-amber-400">FF BD</span>
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Official Free Fire VIP Panel Provider in Bangladesh · Mobile, PC & iOS
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-medium text-slate-400">
            <a href="#panels" className="hover:text-amber-400 transition-colors">
              {language === 'en' ? 'Panels' : 'প্যানেলসমূহ'}
            </a>
            <a href="#features" className="hover:text-amber-400 transition-colors">
              {language === 'en' ? 'Features' : 'ফিচার'}
            </a>
            <a href="#tutorial" className="hover:text-amber-400 transition-colors">
              {language === 'en' ? 'Tutorial' : 'টিউটোরিয়াল'}
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              {language === 'en' ? 'FAQ' : 'প্রশ্নোত্তর'}
            </a>
            {/* WhatsApp SMS Contact Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/60 text-[#25D366] hover:text-emerald-300 font-gaming font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(37,211,102,0.25)] hover:shadow-[0_0_20px_rgba(37,211,102,0.45)] hover:scale-105 cursor-pointer active:scale-95"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366] shrink-0" />
              <span>{language === 'en' ? 'WhatsApp SMS' : 'হোয়াটসঅ্যাপ এসএমএস'}</span>
            </a>

            {/* Facebook Page Button */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/60 text-[#1877F2] hover:text-sky-300 font-gaming font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(24,119,242,0.25)] hover:shadow-[0_0_20px_rgba(24,119,242,0.45)] hover:scale-105 cursor-pointer active:scale-95"
              title="Panel Zone FF BD on Facebook"
            >
              <FacebookIcon className="w-4 h-4 fill-[#1877F2] shrink-0" />
              <span>{language === 'en' ? 'Facebook' : 'ফেসবুক'}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} Panel Zone FF BD. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-500 text-center">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500/80" />
            <span>
              {language === 'en'
                ? 'Free Fire sensitivity calibration & anti-lag utility. 100% Safe & Undetected.'
                : 'ফ্রি ফায়ার সেন্সিটিভিটি ও অ্যান্টি-ল্যাগ টিউনিং টুল। ১০০% নিরাপদ।'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
