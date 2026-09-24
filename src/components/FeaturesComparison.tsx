import React from 'react';
import { Check, Crosshair } from 'lucide-react';
import { FAQS, VOUCHES } from '../data/panelsData';

interface SectionProps {
  language: 'en' | 'bn';
}

export const FeaturesComparison: React.FC<SectionProps> = ({ language }) => {
  return (
    <section id="features" className="py-16 border-t border-slate-900 bg-[#040712] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
            {language === 'en' ? 'CATEGORY BREAKDOWN' : 'ক্যাটাগরি তুলনা'}
          </div>
          <h2 className="font-gaming text-3xl sm:text-4xl font-bold text-white">
            {language === 'en' ? 'SAFETY FEATURES & MATRIX' : 'সেফটি ফিচার ও পারফরম্যান্স তুলনা'}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {language === 'en'
              ? 'Choose the panel tailored to your primary gaming device.'
              : 'আপনার পছন্দের ডিভাইসের উপযোগী প্যানেল বেছে নিন।'}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#060c1c]">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60">
                <th className="p-4 font-gaming text-slate-400 text-xs uppercase tracking-wider">
                  {language === 'en' ? 'Feature / Capability' : 'ফিচার সমূহ'}
                </th>
                <th className="p-4 font-gaming text-cyan-400 text-center text-sm font-bold">
                  Mobile Panel
                </th>
                <th className="p-4 font-gaming text-emerald-400 text-center text-sm font-bold">
                  PC Panel
                </th>
                <th className="p-4 font-gaming text-sky-400 text-center text-sm font-bold">
                  IOS Panel
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-medium text-white flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-cyan-400" />
                  <span>Headshot Aim (Safe)</span>
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-sky-400 mx-auto" />
                </td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-medium text-white">Location ESP / Cham</td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-sky-400 mx-auto" />
                </td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-medium text-white">AWM Auto Aim (Sniper Scope)</td>
                <td className="p-4 text-center text-slate-600">—</td>
                <td className="p-4 text-center">
                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                </td>
                <td className="p-4 text-center text-slate-600">—</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-medium text-white">Anti-Ban / Anti-Blacklist</td>
                <td className="p-4 text-center text-emerald-400 font-bold">✓ v4.6 Shield</td>
                <td className="p-4 text-center text-emerald-400 font-bold">✓ Bypass v6.9</td>
                <td className="p-4 text-center text-emerald-400 font-bold">✓ Direct DNS v4.1</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-medium text-white">Main Account Rank Push Safe</td>
                <td className="p-4 text-center text-cyan-300 font-bold">100% Safe</td>
                <td className="p-4 text-center text-emerald-300 font-bold">100% Safe</td>
                <td className="p-4 text-center text-sky-300 font-bold">100% Safe</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-4 font-medium text-white">Root / Jailbreak Requirement</td>
                <td className="p-4 text-center font-mono text-cyan-300">100% Non-Root</td>
                <td className="p-4 text-center font-mono text-emerald-300">Emulator Ready</td>
                <td className="p-4 text-center font-mono text-sky-300">No Jailbreak</td>
              </tr>
              <tr className="hover:bg-slate-900/40 bg-slate-900/30">
                <td className="p-4 font-bold text-amber-400">Starting Price</td>
                <td className="p-4 text-center font-gaming text-sm font-bold text-cyan-400">
                  ৳ 390
                </td>
                <td className="p-4 text-center font-gaming text-sm font-bold text-emerald-400">
                  ৳ 850
                </td>
                <td className="p-4 text-center font-gaming text-sm font-bold text-sky-400">
                  ৳ 750
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
    <section id="vouches" className="py-16 border-t border-slate-900 bg-[#030612]/90 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 px-4">
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{language === 'en' ? 'LIVE CUSTOMER VOUCHES & FEEDBACK' : 'কাস্টমার রিভিউ ও ফিডব্যাক'}</span>
          </div>
          <h3 className="font-gaming text-2xl sm:text-3xl font-bold text-white">
            {language === 'en' ? 'WHAT OUR PLAYERS ARE SAYING' : 'প্লেয়ারদের বাস্তব রিভিউ ও অভিজ্ঞতা'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'en'
              ? 'Hover or touch to pause review. Real feedback from Bangladeshi Free Fire players.'
              : 'মাউস বা স্পর্শ করে রিভিউ পজ করতে পারবেন। বাংলাদেশের এক্টিভ ফ্রি ফায়ার প্লেয়ারদের রিভিউ।'}
          </p>
        </div>

        {/* Marquee Ticker Container with gradient edges */}
        <div className="relative w-full overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-[#030612] via-[#030612]/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-[#030612] via-[#030612]/80 to-transparent" />

          {/* Seamless Doubled Array for Continuous Right-to-Left Loop */}
          <div className="animate-marquee gap-5 px-4">
            {[...VOUCHES, ...VOUCHES].map((vouch, i) => (
              <div
                key={i}
                className="w-[290px] sm:w-[330px] p-4 sm:p-5 rounded-xl border border-slate-800 bg-[#060c1d]/90 hover:bg-[#091228] hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all flex flex-col justify-between shrink-0 select-none cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-xs text-amber-400">★★★★★</span>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        VERIFIED
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">{vouch.date}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed italic mb-4 font-sans">
                    "{vouch.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white tracking-wide">{vouch.name}</div>
                    <div className="text-[11px] text-amber-400 font-mono">{vouch.rank}</div>
                  </div>
                  <div className="text-[10px] font-gaming font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-900 border border-slate-700 text-cyan-300 rounded">
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
    <section id="faq" className="py-16 border-t border-slate-900 bg-[#040712] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
            {language === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'সাধারণ প্রশ্নোত্তর'}
          </div>
          <h3 className="font-gaming text-2xl sm:text-3xl font-bold text-white">
            {language === 'en' ? 'NEED HELP? CHECK OUR FAQS' : 'যেকোনো জিজ্ঞাসায় সহায়তা'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="p-5 rounded-lg border border-slate-800 bg-[#060c1d]">
              <h4 className="font-bold text-sm text-white mb-2">
                {language === 'en' ? faq.question : faq.questionBn}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'en' ? faq.answer : faq.answerBn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
