import React from 'react';
import { WhatsAppIcon } from './PanelIcons';
import { WHATSAPP_URL } from '../data/panelsData';

interface FloatingSupportProps {
  language: 'en' | 'bn';
}

export const FloatingSupport: React.FC<FloatingSupportProps> = ({ language }) => {
  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-2.5">
      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 py-2.5 px-4 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-[0_4px_22px_rgba(37,211,102,0.55)] hover:bg-[#20bd5a] hover:shadow-[0_4px_28px_rgba(37,211,102,0.75)] transition-all hover:scale-105 cursor-pointer border border-emerald-300/40"
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
        <span className="font-gaming tracking-wide">
          {language === 'en' ? 'Contact WhatsApp' : 'কন্টাক্ট হোয়াটসঅ্যাপ'}
        </span>
      </a>
    </div>
  );
};
