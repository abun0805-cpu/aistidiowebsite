import React, { useState } from 'react';
import { Smartphone, Monitor, ShieldCheck, CheckCircle2, Terminal, AlertTriangle } from 'lucide-react';
import { AppleIcon } from './PanelIcons';
import { TELEGRAM_URL } from '../data/panelsData';

interface SetupGuideProps {
  language: 'en' | 'bn';
}

export const SetupGuide: React.FC<SetupGuideProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'mobile' | 'pc' | 'ios'>('mobile');

  const guides = {
    mobile: {
      title: language === 'en' ? 'Mobile Panel (Android Setup)' : 'মোবাইল প্যানেল (অ্যান্ড্রয়েড সেটআপ)',
      device: 'Android 9 - 15+ (No Root Needed)',
      steps: [
        {
          num: '01',
          title: language === 'en' ? 'Download & Install Panel Zone APK' : 'Panel Zone APK ডাউনলোড ও ইনস্টল করুন',
          desc:
            language === 'en'
              ? 'Download the lightweight Panel Zone VIP client APK file received from Telegram or client portal.'
              : 'Telegram বা সাপোর্ট পোর্টাল থেকে প্রাপ্ত Panel Zone VIP ক্লায়েন্ট APK ফাইলটি ডাউনলোড করে ইনস্টল করুন।',
        },
        {
          num: '02',
          title: language === 'en' ? 'Grant Display Overlay Permission' : 'ডিসপ্লে ওভারলে পারমিশন দিন',
          desc:
            language === 'en'
              ? 'Enable "Display over other apps" permission in Android settings so the floating menu can appear over Free Fire.'
              : 'অ্যান্ড্রয়েড সেটিংসে গিয়ে "Display over other apps" পারমিশন অন করুন যেন গেমে ফ্লোটিং মেনু দেখা যায়।',
        },
        {
          num: '03',
          title: language === 'en' ? 'Enter VIP License Key' : 'ভিআইপি লাইসেন্স কী দিন',
          desc:
            language === 'en'
              ? 'Paste your unique license key and tap "Login & Inject Bypass". The system will auto-calibrate sensitivity.'
              : 'আপনার লাইসেন্স কী পেস্ট করে "Login & Inject Bypass" চাপুন। স্বয়ংক্রিয়ভাবে সেন্সিটিভিটি ক্যালিব্রেট হবে।',
        },
        {
          num: '04',
          title: language === 'en' ? 'Launch Free Fire & Play Safe' : 'ফ্রি ফায়ার চালু করে খেলুন',
          desc:
            language === 'en'
              ? 'Open Free Fire directly. You will see the discrete floating widget to turn Headshot Aim & Location Cham ON/OFF.'
              : 'ফ্রি ফায়ার ওপেন করুন। স্ক্রিনে ছোট উইজেট থেকে হেডশট এইম এবং লোকেশন চাম অন/অফ করতে পারবেন।',
        },
      ],
    },
    pc: {
      title: language === 'en' ? 'PC Panel (Gameloop / BlueStacks Setup)' : 'পিসি প্যানেল (গেমলুপ / ব্লুস্ট্যাক্স সেটআপ)',
      device: 'Windows 10 / 11 (Gameloop, BlueStacks 4/5, MSI)',
      steps: [
        {
          num: '01',
          title: language === 'en' ? 'Open Emulator & Free Fire' : 'এমুলেটর ও ফ্রি ফায়ার ওপেন করুন',
          desc:
            language === 'en'
              ? 'Start Gameloop 32/64 bit or BlueStacks 5 and launch Free Fire to the main game lobby.'
              : 'গেমলুপ অথবা ব্লুস্ট্যাক্স ৫ চালু করে ফ্রি ফায়ার গেমের মূল লবি পর্যন্ত নিয়ে যান।',
        },
        {
          num: '02',
          title: language === 'en' ? 'Run Panel Zone PC Loader as Admin' : 'Panel Zone PC লোডার রান করুন (Run as Administrator)',
          desc:
            language === 'en'
              ? 'Right-click on PanelZone_PC_Loader.exe and select "Run as administrator" to hook internal memory safely.'
              : 'PanelZone_PC_Loader.exe রাইট ক্লিক করে "Run as administrator" দিন যাতে মেমোরি হুক নিরাপদে কাজ করে।',
        },
        {
          num: '03',
          title: language === 'en' ? 'Activate Bypass & AWM Auto Aim' : 'বাইপাস ও AWM অটো এইম একটিভ করুন',
          desc:
            language === 'en'
              ? 'Press F1 for Emulator Bypass (matches with mobile players), F2 for Headshot Aim, and F3 for Location Cham.'
              : 'হটকি শর্টকাট চাপুন: F1 বাইপাস (মোবাইল লবি), F2 হেডশট এইম, এবং F3 লোকেশন চাম।',
        },
        {
          num: '04',
          title: language === 'en' ? 'Stream Proof Guarantee' : 'স্ট্রিম প্রুফ ও স্মুথ পারফরম্যান্স',
          desc:
            language === 'en'
              ? 'Play smoothly at 90-120 FPS. The panel automatically hides ESP overlays when OBS/Discord screen share is active.'
              : '৯০-১২০ FPS এ স্মুথলি খেলুন। OBS বা ডিসকর্ড স্ক্রিন শেয়ারে প্যানেলের কোনো দাগ বা ESP দেখা যাবে না।',
        },
      ],
    },
    ios: {
      title: language === 'en' ? 'IOS Panel (iPhone & iPad Setup)' : 'আইওএস প্যানেল (আইফোন ও আইপ্যাড সেটআপ)',
      device: 'iOS 15 to 18.2+ (No Jailbreak Required)',
      steps: [
        {
          num: '01',
          title: language === 'en' ? 'Install Enterprise Profile / IPA' : 'এন্টারপ্রাইজ প্রোফাইল / IPA ইনস্টল করুন',
          desc:
            language === 'en'
              ? 'Use our provided 1-click Safari link or Scarlet / AltStore to install the signed VIP client directly.'
              : 'আমাদের দেওয়া সরাসরি সাফারি লিংক অথবা স্কারলেট / অল্টস্টোরের মাধ্যমে সাইন করা VIP ফাইল নামান।',
        },
        {
          num: '02',
          title: language === 'en' ? 'Trust Enterprise Certificate' : 'এন্টারপ্রাইজ সার্টিফিকেট ট্রাস্ট করুন',
          desc:
            language === 'en'
              ? 'Go to iOS Settings -> General -> VPN & Device Management -> Tap "Trust Panel Zone Enterprise".'
              : 'আইফোনের Settings -> General -> VPN & Device Management এ গিয়ে সার্টিফিকেটটি "Trust" করুন।',
        },
        {
          num: '03',
          title: language === 'en' ? 'Login with VIP License' : 'ভিআইপি লাইসেন্স দিয়ে লগইন করুন',
          desc:
            language === 'en'
              ? 'Open the app and input your license code. The built-in Anti-Revoke DNS shields will activate instantly.'
              : 'অ্যাপ ওপেন করে লাইসেন্স কোড দিন। সাথে সাথেই অ্যান্টি-রিভোক DNS শিল্ড সক্রিয় হয়ে যাবে।',
        },
        {
          num: '04',
          title: language === 'en' ? 'Play on Ranked with Safe Settings' : 'র‍্যাংক ম্যাচে নিরাপদ কনফিগে খেলুন',
          desc:
            language === 'en'
              ? 'Enjoy crisp 120 FPS touch response with discrete headshot assistance safe on main accounts.'
              : 'মেইন আইডিতে কোন ভয় ছাড়াই ১২০ FPS এ মসৃণ টাচ রেসপন্সে র‍্যাংক পুশ করুন।',
        },
      ],
    },
  };

  const currentGuide = guides[activeTab];

  return (
    <section id="tutorial" className="py-16 border-t border-slate-900 bg-[#030612]/70 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
            {language === 'en' ? 'STEP-BY-STEP INSTALLATION' : 'সহজ ইনস্টলেশন গাইড'}
          </div>
          <h2 className="font-gaming text-3xl sm:text-4xl font-bold text-white">
            {language === 'en' ? 'HOW TO SETUP YOUR PANEL' : 'কীভাবে প্যানেল সেটআপ করবেন'}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {language === 'en'
              ? 'Zero technical knowledge required. Ready to play within 3 minutes of purchase.'
              : 'কোন জটিলতা ছাড়া ৩ মিনিটের মধ্যে সহজেই গেম শুরু করুন।'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-900/90 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-gaming font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'mobile'
                  ? 'bg-cyan-500 text-black shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Panel</span>
            </button>
            <button
              onClick={() => setActiveTab('pc')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-gaming font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'pc'
                  ? 'bg-emerald-500 text-black shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>PC Panel</span>
            </button>
            <button
              onClick={() => setActiveTab('ios')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-gaming font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'ios'
                  ? 'bg-sky-500 text-black shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AppleIcon className="w-3.5 h-3.5" />
              <span>IOS Panel</span>
            </button>
          </div>
        </div>

        {/* Steps Grid with 3D Card Hover Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentGuide.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-5 rounded-xl border border-slate-700/80 bg-[#060c1d]/90 hover:bg-[#091530] hover:border-cyan-400 hover:shadow-[0_15px_30px_rgba(6,182,212,0.25)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between backdrop-blur-md group"
            >
              <div>
                <div className="font-gaming text-3xl font-extrabold text-cyan-400/40 group-hover:text-cyan-400 transition-colors mb-2">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-200 transition-colors">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">{step.desc}</p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-700/80 flex items-center gap-1.5 text-xs text-cyan-300 font-mono font-bold">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{language === 'en' ? 'Verified Safe' : 'ভেরিফাইড ও সেইফ'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Safety Notice */}
        <div className="mt-8 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-cyan-200">
                {language === 'en'
                  ? 'Anti-Ban Protection & Main ID Recommended'
                  : 'অ্যান্টি-ব্যান সুরক্ষা ও মেইন আইডি রেকমেন্ডেশন'}
              </h4>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                {language === 'en'
                  ? 'All 3 categories are crafted with safe natural head tracking FOV so opponent players cannot detect or report your gameplay.'
                  : 'আমাদের সব প্যানেলে ন্যাচারাল হেড ট্র্যাকিং থাকায় সাধারণ স্পেক্টেটররা কোনো অস্বাভাবিকতা দেখতে পায় না।'}
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/message/CZX426NMSQ7LN1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-gaming font-extrabold text-[#25D366] hover:text-emerald-200 whitespace-nowrap flex items-center gap-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/60 px-3 py-1.5 rounded-lg transition-all"
          >
            <span>{language === 'en' ? 'Need Live WhatsApp Support?' : 'হোয়াটসঅ্যাপ লাইভ সাপোর্ট লাগবে?'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
