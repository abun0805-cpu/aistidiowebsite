import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, Check, Smartphone, Monitor, Download } from 'lucide-react';
import { PanelItem, PriceTier } from '../types';
import { AppleIcon, WhatsAppIcon } from './PanelIcons';
import { WHATSAPP_URL } from '../data/panelsData';

interface PanelCardProps {
  panel: PanelItem;
  language: 'en' | 'bn';
  onSelectPlan?: (panel: PanelItem, priceTier: PriceTier) => void;
  defaultExpanded?: boolean;
  isFocused?: boolean;
}

export const PanelCard: React.FC<PanelCardProps> = ({
  panel,
  language,
  defaultExpanded = false,
  isFocused = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const defaultTier: PriceTier =
    panel.prices.find((p) => p.popular) ||
    panel.prices[0] || {
      id: 'default',
      duration: '1 Month',
      durationBn: '১ মাস',
      price: 500,
    };

  const [selectedTier, setSelectedTier] = useState<PriceTier>(defaultTier);

  // Border & Glow Accents
  const cardBorderClasses = {
    cyan: 'border-cyan-500/50 hover:border-cyan-300 shadow-[0_10px_30px_rgba(6,182,212,0.2)] hover:shadow-[0_20px_45px_rgba(6,182,212,0.35)]',
    green: 'border-emerald-500/50 hover:border-emerald-300 shadow-[0_10px_30px_rgba(16,185,129,0.2)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.35)]',
    blue: 'border-sky-500/50 hover:border-sky-300 shadow-[0_10px_30px_rgba(56,189,248,0.2)] hover:shadow-[0_20px_45px_rgba(56,189,248,0.35)]',
  };

  const badgeBorderClasses = {
    cyan: 'bg-cyan-950/90 border-cyan-400 text-cyan-200',
    green: 'bg-emerald-950/90 border-emerald-400 text-emerald-200',
    blue: 'bg-sky-950/90 border-sky-400 text-sky-200',
  };

  const seeDetailsBtnClasses = {
    cyan: 'bg-cyan-950/60 hover:bg-cyan-900/80 border-cyan-500/50 text-cyan-200 hover:text-white',
    green: 'bg-emerald-950/60 hover:bg-emerald-900/80 border-emerald-500/50 text-emerald-200 hover:text-white',
    blue: 'bg-sky-950/60 hover:bg-sky-900/80 border-sky-500/50 text-sky-200 hover:text-white',
  };

  const bulletColorClasses = {
    cyan: 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]',
    green: 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
    blue: 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]',
  };

  // Custom WhatsApp contact URL
  const contactOrderUrl = WHATSAPP_URL;

  // 3D Perspective Tilt on Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      id={`panel-${panel.id}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.025, 1.025, 1.025)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered
          ? 'transform 0.12s ease-out'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative flex flex-col rounded-xl border bg-[#060b18]/95 backdrop-blur-md overflow-hidden scroll-mt-32 md:scroll-mt-24 ${
        cardBorderClasses[panel.accentColor]
      } ${
        isFocused
          ? '!border-amber-400 ring-2 ring-amber-400 shadow-[0_0_40px_rgba(245,158,11,0.65)] scale-[1.02]'
          : ''
      }`}
    >
      {/* 3D Specular Glare Reflection on Hover */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-30 transition-opacity duration-300 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.45) 0%, transparent 60%)`,
          }}
        />
      )}

      {/* 1. TOP PICTURE CONTAINER */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950 group">
        <img
          src={panel.image}
          alt={panel.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Soft bottom fade gradient for visual cohesion */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-black/40" />

        {/* Top-left: Platform Badge */}
        <div className="absolute top-3 left-3 z-10" style={{ transform: 'translateZ(25px)' }}>
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-gaming font-bold uppercase tracking-wider border shadow-lg backdrop-blur-md ${badgeBorderClasses[panel.accentColor]}`}
          >
            {panel.id === 'mobile' && <Smartphone className="w-4 h-4" />}
            {panel.id === 'pc' && <Monitor className="w-4 h-4" />}
            {panel.id === 'ios' && <AppleIcon className="w-4 h-4" />}
            <span>{language === 'en' ? panel.categoryName : panel.categoryNameBn}</span>
          </span>
        </div>

        {/* Top-right: Server Status Badge */}
        <div className="absolute top-3 right-3 z-10" style={{ transform: 'translateZ(25px)' }}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-black/90 border border-emerald-400 text-emerald-300 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{language === 'en' ? '100% SAFE' : '১০০% সেইফ'}</span>
          </span>
        </div>
      </div>

      {/* 2. CARD CONTENT CONTAINER */}
      <div className="p-5 flex flex-col flex-1" style={{ transform: 'translateZ(10px)' }}>
        {/* Title & Subtitle */}
        <div className="mb-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-gaming text-xl sm:text-2xl font-bold tracking-wide text-white drop-shadow-sm">
              {language === 'en' ? panel.name : panel.nameBn}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-950/90 border border-emerald-400 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)] shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {language === 'en' ? 'Status: 100% Active' : 'স্ট্যাটাস: ১০০% অ্যাক্টিভ'}
            </span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium">
            {language === 'en' ? panel.subtitle : panel.subtitleBn}
          </p>
        </div>

        {/* Core Quick Highlights: Clean badges */}
        <div className={`grid ${panel.features.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-2 mb-4`}>
          {panel.features.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-1.5 py-2 px-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-center shadow-inner"
            >
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${bulletColorClasses[panel.accentColor]}`} />
              <span className="text-xs font-bold text-white tracking-wide truncate">
                {language === 'en' ? feat.name : feat.nameBn}
              </span>
            </div>
          ))}
        </div>

        {/* 3. ALL PRICES DISPLAYED DIRECTLY */}
        <div className="mb-4 rounded-lg border border-slate-800 bg-[#030611] p-3 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-gaming font-bold tracking-wider text-amber-400 uppercase">
              {language === 'en' ? 'ALL PACKAGE PRICES' : 'প্যাকেজের মূল্য তালিকা'}
            </span>
            <span className="text-[11px] font-mono text-slate-400 font-semibold">
              {language === 'en' ? 'Tap to choose plan' : 'প্ল্যান সিলেক্ট করুন'}
            </span>
          </div>

          <div className="space-y-1.5">
            {panel.prices.map((tier) => {
              const isSelected = selectedTier.id === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  className={`flex items-center justify-between py-2 px-2.5 rounded-md transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-400 text-white shadow-[0_0_12px_rgba(245,158,11,0.25)] font-bold'
                      : 'border-transparent text-slate-300 hover:bg-slate-900/70 hover:text-white font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-amber-400 bg-amber-400 text-black'
                          : 'border-slate-500'
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs">
                      {language === 'en' ? tier.duration : tier.durationBn}
                    </span>
                    {tier.popular && (
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-amber-500/25 text-amber-300 border border-amber-400 rounded font-bold">
                        {language === 'en' ? 'Best Value' : 'জনপ্রিয়'}
                      </span>
                    )}
                  </div>
                  <div className="font-gaming text-sm font-bold tracking-wider tabular-nums text-amber-400">
                    ৳{tier.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* EXPANDED SPECIFICATIONS & ADVANCED BYPASS FEATURES */}
        {isExpanded && (
          <div className="mb-4 p-3.5 rounded-lg border border-slate-700 bg-[#040916] space-y-2.5 text-xs text-slate-200 animate-in fade-in duration-200">
            <div className="font-gaming font-bold text-amber-300 text-xs tracking-wider uppercase border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>{language === 'en' ? 'VIP ADVANCED FEATURES' : 'ভিআইপি অ্যাডভান্সড ফিচারসমূহ'}</span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">100% Safe</span>
            </div>
            <ul className="space-y-1.5 pl-1">
              {((language === 'en' ? panel.extraFeatures : panel.extraFeaturesBn) || []).map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 shrink-0 mt-0.5">✔</span>
                    <span className="font-medium text-slate-200">{item}</span>
                  </li>
                )
              )}
            </ul>
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {language === 'en'
                  ? panel.compatibility
                  : panel.compatibilityBn || panel.compatibility}
              </span>
            </div>
          </div>
        )}

        {/* 3 CORE FUNCTIONS: বিস্তারিত | কন্টাক্ট | ডাউনলোড প্যানেল */}
        <div className="mt-auto space-y-2.5" style={{ transform: 'translateZ(18px)' }}>
          {/* FUNCTION 1: বিস্তারিত */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full py-2.5 px-3 rounded-lg text-xs font-gaming font-bold tracking-wider uppercase border flex items-center justify-center gap-2 cursor-pointer transition-all ${seeDetailsBtnClasses[panel.accentColor]}`}
          >
            <span>
              {language === 'en'
                ? isExpanded ? 'HIDE DETAILS' : 'SEE DETAILS'
                : isExpanded ? 'বিস্তারিত বন্ধ করুন' : 'বিস্তারিত'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 stroke-[2.5]" />
            ) : (
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            )}
          </button>

          {/* FUNCTION 2: কন্টাক্ট (হোয়াটসঅ্যাপ) */}
          <a
            href={contactOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-gaming font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all cursor-pointer active:scale-[0.99] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
            <span>
              {language === 'en' ? 'CONTACT (WHATSAPP)' : 'কন্টাক্ট (হোয়াটসঅ্যাপ)'}
            </span>
          </a>

          {/* FUNCTION 3: ডাউনলোড প্যানেল (DIRECT DOWNLOAD LINK) */}
          <a
            href={panel.downloadUrl || WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-gaming font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_28px_rgba(16,185,129,0.6)] transition-all cursor-pointer active:scale-[0.99]"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>
              {language === 'en' ? 'DOWNLOAD PANEL' : 'ডাউনলোড প্যানেল'}
            </span>
          </a>

          <div className="text-center pt-1">
            <span className="text-[11px] text-slate-400 font-mono font-medium">
              {language === 'en'
                ? '⚡ Instant Direct Download · 100% Anti-Ban Guarantee'
                : '⚡ সরাসরি ডিরেক্ট ডাউনলোড · ১০০% নিরাপদ'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
