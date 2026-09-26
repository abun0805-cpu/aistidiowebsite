import React, { useState } from 'react';
import { Check, Crosshair, Sparkles, Shield, Zap } from 'lucide-react';
import { FAQS, VOUCHES, WHATSAPP_URL } from '../data/panelsData';
import { WhatsAppIcon } from './PanelIcons';

interface SectionProps {
  language: 'en' | 'bn';
}

export const FeaturesComparison: React.FC<SectionProps> = ({ language }) => {
  return (
    <section id="features" className="relative py-16 border-t border-cyan-900/40 bg-[#040712]/90 scroll-mt-24">
      {/* 3D Perspective Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-2 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{language === 'en' ? 'CATEGORY BREAKDOWN' : 'ক্যাটাগরি তুলনা'}</span>
          </div>
          <h2 className="font-gaming text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
            {language === 'en' ? 'SAFETY FEATURES & MATRIX' : 'সেফটি ফিচার ও পারফরম্যান্স তুলনা'}
          </h2>
          <p className="mt-2 text-sm text-slate-300 font-medium">
            {language === 'en'
              ? 'Choose the panel tailored to your primary gaming device.'
              : 'আপনার পছন্দের ডিভাইসের উপযোগী প্যানেল বেছে নিন।'}
          </p>
        </div>

        {/* Comparison Table with 3D Border Glow */}
        <div className="overflow-x-auto rounded-xl border border-cyan-500/30 bg-[#060c1c]/95 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700/80 bg-slate-900/90">
                <th className="p-4 font-gaming text-slate-200 text-xs uppercase tracking-wider">
                  {language === 'en' ? 'Feature / Capability' : 'ফিচার সমূহ'}
                </th>
                <th className="p-4 font-gaming text-cyan-300 text-center text-sm font-black">
                  Mobile Panel
                </th>
                <th className="p-4 font-gaming text-emerald-300 text-center text-sm font-black">
                  PC Panel
                </th>
                <th className="p-4 font-gaming text-sky-300 text-center text-sm font-black">
                  IOS Panel
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              <tr className="hover:bg-slate-850/80 transition-colors">
                <td className="p-4 font-bold text-white flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-cyan-400" />
                  <span>Headshot Aim (Safe)</span>
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-cyan-400 mx-auto stroke-[3]" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-emerald-400 mx-auto stroke-[3]" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-sky-400 mx-auto stroke-[3]" />
                </td>
              </tr>
              <tr className="hover:bg-slate-850/80 transition-colors">
                <td className="p-4 font-bold text-white">Location ESP / Cham</td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-cyan-400 mx-auto stroke-[3]" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-emerald-400 mx-auto stroke-[3]" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-sky-400 mx-auto stroke-[3]" />
                </td>
              </tr>
              <tr className="hover:bg-slate-850/80 transition-colors">
                <td className="p-4 font-bold text-white">AWM Auto Aim (Sniper Scope)</td>
                <td className="p-4 text-center text-slate-500 font-bold">—</td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-emerald-400 mx-auto stroke-[3]" />
                </td>
                <td className="p-4 text-center text-slate-500 font-bold">—</td>
              </tr>
              <tr className="hover:bg-slate-850/80 transition-colors">
                <td className="p-4 font-bold text-white">Anti-Ban / Anti-Blacklist</td>
                <td className="p-4 text-center text-emerald-400 font-bold">✓ v4.6 Shield</td>
                <td className="p-4 text-center text-emerald-400 font-bold">✓ Bypass v6.9</td>
                <td className="p-4 text-center text-emerald-400 font-bold">✓ Direct DNS v4.1</td>
              </tr>
              <tr className="hover:bg-slate-850/80 transition-colors">
                <td className="p-4 font-bold text-white">Main Account Rank Push Safe</td>
                <td className="p-4 text-center text-cyan-300 font-bold">100% Safe</td>
                <td className="p-4 text-center text-emerald-300 font-bold">100% Safe</td>
                <td className="p-4 text-center text-sky-300 font-bold">100% Safe</td>
              </tr>
              <tr className="hover:bg-slate-850/80 transition-colors">
                <td className="p-4 font-bold text-white">Root / Jailbreak Requirement</td>
                <td className="p-4 text-center font-mono text-cyan-300 font-bold">100% Non-Root</td>
                <td className="p-4 text-center font-mono text-emerald-300 font-bold">Emulator Ready</td>
                <td className="p-4 text-center font-mono text-sky-300 font-bold">No Jailbreak</td>
              </tr>
              <tr className="hover:bg-slate-850/80 bg-slate-900/60">
                <td className="p-4 font-black text-amber-400 text-sm">Starting Price</td>
                <td className="p-4 text-center font-gaming text-base font-black text-cyan-400">
                  ৳ 390
                </td>
                <td className="p-4 text-center font-gaming text-base font-black text-emerald-400">
                  ৳ 750
                </td>
                <td className="p-4 text-center font-gaming text-base font-black text-sky-400">
                  ৳ 900
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export const CustomerVouches: React.FC<SectionProps> = ({ language }) => {
  return (
    <section id="vouches" className="relative py-16 border-t border-cyan-900/30 bg-[#030612]/90 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/50 bg-emerald-950/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider mb-2 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{language === 'en' ? 'LIVE CUSTOMER VOUCHES & FEEDBACK' : 'কাস্টমার রিভিউ ও ফিডব্যাক'}</span>
          </div>
          <h3 className="font-gaming text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
            {language === 'en' ? 'WHAT OUR PLAYERS ARE SAYING' : 'প্লেয়ারদের বাস্তব রিভিউ ও অভিজ্ঞতা'}
          </h3>
          <p className="text-xs text-slate-300 mt-1 font-medium">
            {language === 'en'
              ? 'Hover or touch to pause review. Real feedback from Bangladeshi Free Fire players.'
              : 'মাউস বা স্পর্শ করে রিভিউ পজ করতে পারবেন। বাংলাদেশের এক্টিভ ফ্রি ফায়ার প্লেয়ারদের রিভিউ।'}
          </p>
        </div>

        {/* Marquee Ticker Container with 3D Card Hover Depth */}
        <div className="relative w-full overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[#030612] via-[#030612]/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[#030612] via-[#030612]/80 to-transparent" />

          {/* Seamless Doubled Array for Continuous Right-to-Left Loop with 3D elevation */}
          <div className="animate-marquee gap-5 px-4">
            {[...VOUCHES, ...VOUCHES].map((vouch, i) => (
              <div
                key={i}
                className="w-[290px] sm:w-[330px] p-4 sm:p-5 rounded-xl border border-slate-700/80 bg-[#060c1d]/95 hover:bg-[#0a1532] hover:border-amber-400 hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between shrink-0 select-none cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-xs text-amber-400">★★★★★</span>
                      <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/50">
                        VERIFIED
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold">{vouch.date}</span>
                  </div>
                  <p className="text-xs text-slate-100 leading-relaxed italic mb-4 font-sans font-medium">
                    "{vouch.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white tracking-wide">{vouch.name}</div>
                    <div className="text-[11px] text-amber-300 font-mono font-bold">{vouch.rank}</div>
                  </div>
                  <div className="text-[10px] font-gaming font-bold uppercase tracking-wider px-2 py-1 bg-slate-900 border border-slate-600 text-cyan-300 rounded shadow-sm">
                    {vouch.panel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQSection: React.FC<SectionProps> = ({ language }) => {
  return (
    <section id="faq" className="relative py-16 border-t border-cyan-900/40 bg-[#040712]/95 scroll-mt-24">
      {/* Bottom 3D Cyber Ambient Edge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-2 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{language === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'সাধারণ প্রশ্নোত্তর'}</span>
          </div>
          <h3 className="font-gaming text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
            {language === 'en' ? 'NEED HELP? CHECK OUR FAQS' : 'যেকোনো জিজ্ঞাসায় সহায়তা'}
          </h3>
        </div>

        {/* 3D Hover Depth FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-slate-700/80 bg-[#060c1d]/90 hover:bg-[#08122a] hover:border-cyan-400/80 hover:shadow-[0_12px_25px_rgba(6,182,212,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
            >
              <h4 className="font-bold text-sm text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
                <span>{language === 'en' ? faq.question : faq.questionBn}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-medium pl-4">
                {language === 'en' ? faq.answer : faq.answerBn}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom 3D VIP Gaming Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border-2 border-amber-500/50 bg-gradient-to-r from-[#061226]/95 via-[#0b1b36]/95 to-[#1c1206]/95 shadow-[0_15px_40px_rgba(245,158,11,0.2)] backdrop-blur-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.6)] shrink-0">
              <Shield className="w-7 h-7 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-gaming text-lg sm:text-xl font-bold text-white">
                {language === 'en' ? 'PLAY WITH VIP PANEL RIGHT NOW' : 'ভিআইপি প্যানেল নিয়ে এখনই খেলা শুরু করবেন'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                {language === 'en'
                  ? 'Contact directly on WhatsApp for instant setup and VIP key.'
                  : 'সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন'}
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-gaming font-extrabold text-sm tracking-wider uppercase flex items-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
            <span>{language === 'en' ? 'CONTACT ON WHATSAPP' : 'সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
