import React from 'react';
import { TelegramIcon } from './PanelIcons';
import { TELEGRAM_URL } from '../data/panelsData';

interface FloatingSupportProps {
  language: 'en' | 'bn';
}

export const FloatingSupport: React.FC<FloatingSupportProps> = ({ language }) => {
  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-2.5">
      {/* Telegram Floating Button */}
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 py-2.5 px-4 rounded-full bg-[#0088cc] text-white font-bold text-xs shadow-[0_4px_20px_rgba(0,136,204,0.5)] hover:bg-[#0099e6] hover:shadow-[0_4px_25px_rgba(0,136,204,0.7)] transition-all hover:scale-105 cursor-pointer border border-sky-300/40"
        aria-label="Contact on Telegram"
      >
        <TelegramIcon className="w-5 h-5 fill-white shrink-0" />
        <span className="font-gaming tracking-wide">
          {language === 'en' ? 'Telegram Support' : 'টেলিগ্রাম সাপোর্ট'}
        </span>
      </a>
    </div>
  );
};
