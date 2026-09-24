import React, { useState } from 'react';
import { PANELS_DATA } from './data/panelsData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PanelCard } from './components/PanelCard';
import { SetupGuide } from './components/SetupGuide';
import { FeaturesComparison, CustomerVouches, FAQSection } from './components/FeaturesComparison';
import { FloatingSupport } from './components/FloatingSupport';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('bn');
  const [selectedCategory, setSelectedCategory] = useState<'mobile' | 'pc' | 'ios' | null>(null);
  const [highlightedPanel, setHighlightedPanel] = useState<'mobile' | 'pc' | 'ios' | null>(null);

  const handleSelectCategory = (catId: 'mobile' | 'pc' | 'ios') => {
    setSelectedCategory(catId);
    setHighlightedPanel(catId);

    const targetId = `panel-${catId}`;
    const element = document.getElementById(targetId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const navOffset = isMobile ? 120 : 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }

    // Auto-remove highlight glow after 2.5 seconds
    setTimeout(() => {
      setHighlightedPanel(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#040711] bg-cyber-grid text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navigation */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          language={language}
          selectedCategory={selectedCategory}
          onScrollToPanels={() => {
            const el = document.getElementById('panels');
            if (el) {
              const isMobile = window.innerWidth < 768;
              const navOffset = isMobile ? 120 : 85;
              const elementPosition = el.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - navOffset;
              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth',
              });
            }
          }}
          onSelectCategory={(cat) => handleSelectCategory(cat)}
        />

        {/* The 3 Core Panel Packages: Mobile Panel, PC Panel, IOS Panel */}
        <section id="panels" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
              {language === 'en' ? 'OFFICIAL FREE FIRE VIP CATALOG' : 'অফিশিয়াল ফ্রি ফায়ার ভিআইপি ক্যাটালগ'}
            </div>
            <h2 className="font-gaming text-2xl sm:text-4xl font-bold text-white tracking-wide">
              {language === 'en' ? 'PANEL ZONE FF BD PACKAGES' : 'প্যানেল জোন এফএফ বিডি প্যাকেজসমূহ'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              {language === 'en'
                ? 'Choose between Mobile, PC, or iOS panel with direct download and full anti-ban security.'
                : 'আপনার মোবাইল, পিসি বা আইওএস ডিভাইসের জন্য সরাসরি ডাউনলোড করুন ১০০% নিরাপদ প্যানেল।'}
            </p>
          </div>

          {/* All 3 panels are always displayed directly: Mobile Panel -> PC Panel -> iOS Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {PANELS_DATA.map((panel) => (
              <PanelCard
                key={panel.id}
                panel={panel}
                language={language}
                defaultExpanded={false}
                isFocused={highlightedPanel === panel.id}
              />
            ))}
          </div>
        </section>

        {/* 2. Safety Features Comparison Matrix */}
        <FeaturesComparison language={language} />

        {/* 3. Step-by-Step Setup Tutorial */}
        <SetupGuide language={language} />

        {/* 4. Customer Reviews & Vouches */}
        <CustomerVouches language={language} />

        {/* 5. Frequently Asked Questions */}
        <FAQSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Floating Telegram Support Quick Action */}
      <FloatingSupport language={language} />
    </div>
  );
}
