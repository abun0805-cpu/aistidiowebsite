import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { PanelItem, PriceTier } from '../types';
import { PAYMENT_METHODS, WHATSAPP_URL } from '../data/panelsData';
import { WhatsAppIcon } from './PanelIcons';

interface OrderModalProps {
  panel: PanelItem;
  initialTier: PriceTier;
  language: 'en' | 'bn';
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  panel,
  initialTier,
  language,
  onClose,
}) => {
  const [selectedTier, setSelectedTier] = useState<PriceTier>(initialTier);
  const [paymentMethodId, setPaymentMethodId] = useState<string>('bKash');
  const [copiedNumber, setCopiedNumber] = useState<boolean>(false);

  const currentMethod =
    PAYMENT_METHODS.find((m) => m.id === paymentMethodId) || PAYMENT_METHODS[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const downloadLink = panel.downloadUrl || WHATSAPP_URL;

  // WhatsApp order link
  const whatsappUrl = () => {
    return WHATSAPP_URL;
  };

  const getPlatformFileLabel = () => {
    if (panel.id === 'mobile') {
      return language === 'en'
        ? 'Official Android APK (v8.4.2 · Anti-Ban)'
        : 'অফিসিয়াল অ্যান্ড্রয়েড APK (v8.4.2 · অ্যান্টি-ব্যান)';
    }
    if (panel.id === 'pc') {
      return language === 'en'
        ? 'PC Emulator Bypass ZIP/Setup (v6.9.1 · 100% Safe)'
        : 'পিসি এমুলেটর বাইপাস ZIP/সেটআপ (v6.9.1 · ১০০% সেইফ)';
    }
    return language === 'en'
      ? 'iOS DNS Profile & IPA Package (v4.1.0 · Anti-Revoke)'
      : 'আইওএস DNS প্রোফাইল ও IPA প্যাকেজ (v4.1.0 · অ্যান্টি-রিভোক)';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-amber-500/50 bg-[#060c1d] p-5 sm:p-7 shadow-[0_0_50px_rgba(0,0,0,0.9)] my-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/panel_zone_logo.jpg"
              alt="Panel Zone FF BD"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border-2 border-amber-400 object-cover shadow-[0_0_12px_rgba(245,158,11,0.4)]"
            />
            <div>
              <div className="font-gaming font-bold text-sm text-amber-400 tracking-wider">
                PANEL ZONE FF BD
              </div>
              <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>100% Safe · Status: Active</span>
              </div>
            </div>
          </div>
          <h3 className="font-gaming text-xl sm:text-2xl font-bold text-white mt-1">
            {panel.nameBn} ({panel.name})
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {language === 'en'
              ? 'Direct Panel Download Link & Official bKash/Nagad Payment'
              : 'সরাসরি প্যানেল ডাউনলোড লিংক এবং বিকাশ ও নগদ পেমেন্ট মাধ্যম'}
          </p>
        </div>

        {/* 🌟 BIG PROMINENT DOWNLOAD PANEL SECTION (As Requested) */}
        <div className="mb-6 p-4 rounded-xl border-2 border-cyan-500/60 bg-gradient-to-b from-[#0a1f38] to-[#040d1a] shadow-[0_0_25px_rgba(6,182,212,0.25)] text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 mb-2.5 uppercase font-bold tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{language === 'en' ? 'OFFICIAL DIRECT DOWNLOAD' : 'অফিশিয়াল সরাসরি ডাউনলোড'}</span>
          </div>

          <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-3">
            {getPlatformFileLabel()}
          </div>

          {/* LARGE DOWNLOAD BUTTON */}
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-gaming font-black text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all cursor-pointer active:scale-95 group"
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] group-hover:translate-y-0.5 transition-transform" />
            <span>
              {language === 'en'
                ? `DOWNLOAD ${panel.name.toUpperCase()} NOW`
                : `ডাউনলোড ${panel.nameBn} এখনই`}
            </span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
          </a>

          <div className="mt-2.5 flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              {language === 'en'
                ? 'Latest Version · Anti-Blacklist Active · Direct File'
                : 'লেটেস্ট ভার্সন · অ্যান্টি-ব্ল্যাকলিস্ট অ্যাক্টিভ · ডিরেক্ট ফাইল'}
            </span>
          </div>
        </div>

        {/* Plan Duration Selector */}
        <div className="mb-5">
          <label className="block text-xs font-mono text-slate-300 mb-2">
            {language === 'en' ? 'Select Plan Duration:' : 'প্যাকেজের মেয়াদ ও মূল্য নির্বাচন করুন:'}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {panel.prices.map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTier(tier)}
                className={`p-2 rounded-lg text-center border transition-all cursor-pointer ${
                  selectedTier.id === tier.id
                    ? 'border-amber-400 bg-amber-950/40 text-white shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                    : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-[11px] font-medium">
                  {language === 'en' ? tier.duration : tier.durationBn}
                </div>
                <div className="font-gaming text-sm font-bold text-amber-300">
                  ৳{tier.price}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 💳 OFFICIAL BKASH & NAGAD PAYMENT BOX */}
        <div className="mb-5 rounded-xl border border-slate-700 bg-[#040816] p-4">
          <div className="flex items-center justify-between text-xs mb-3">
            <span className="font-bold text-white">
              {language === 'en' ? 'bKash / Nagad Payment Info:' : 'বিকাশ ও নগদ পেমেন্ট তথ্য:'}
            </span>
            <span className="font-gaming font-bold text-amber-400 text-sm">
              {language === 'en' ? 'Price:' : 'মূল্য:'} ৳{selectedTier.price}
            </span>
          </div>

          {/* Payment Method Switcher */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {PAYMENT_METHODS.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setPaymentMethodId(method.id)}
                className={`flex items-center justify-center gap-2 p-2 rounded-lg border transition-all cursor-pointer text-xs font-bold ${
                  paymentMethodId === method.id
                    ? 'border-cyan-400 bg-cyan-950/60 text-white shadow-sm'
                    : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: method.color }}
                />
                <span>{method.name}</span>
              </button>
            ))}
          </div>

          {/* Copy Number Box */}
          <div className="flex items-center justify-between bg-slate-950 px-3.5 py-2.5 rounded-lg border border-slate-700/80 font-mono text-base font-bold text-white mb-2">
            <span>{currentMethod.number}</span>
            <button
              type="button"
              onClick={() => handleCopy(currentMethod.number)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-amber-300 hover:text-amber-200 cursor-pointer font-sans transition-colors active:scale-95"
            >
              {copiedNumber ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">কপি হয়েছে</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>নম্বর কপি করুন</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            {language === 'en'
              ? `Send ৳${selectedTier.price} to this ${currentMethod.name} Personal number (Send Money), then tap below to contact us on Telegram with your screenshot to get your VIP activation key instantly.`
              : `উপরের ${currentMethod.name} পার্সোনাল নম্বরে ৳${selectedTier.price} Send Money করুন। এরপর নিচে হোয়াটসঅ্যাপ বাটনে ক্লিক করে স্ক্রিনশট পাঠিয়ে ১ মিনিটে অ্যাক্টিভেশন কী গ্রহণ করুন।`}
          </p>
        </div>

        {/* Action: Direct WhatsApp Key Delivery */}
        <div>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-gaming font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all cursor-pointer active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
            <span>
              {language === 'en'
                ? 'CONFIRM PAYMENT & GET KEY ON WHATSAPP'
                : 'হোয়াটসঅ্যাপে স্ক্রিনশট পাঠিয়ে কী (KEY) নিন'}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
