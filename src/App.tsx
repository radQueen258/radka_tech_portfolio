import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { DataAnalyticsSection } from './components/DataAnalyticsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { VentureSection } from './components/VentureSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('radka_lang');
    return (saved === 'en' || saved === 'pt') ? saved : 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('radka_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // Default to dark mode for the sleek, luxurious aesthetic
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('radka_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('radka_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0B0A0F] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans selection:bg-rose-500/25 selection:text-rose-600 dark:selection:text-rose-300">
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero lang={lang} />

        {/* 2. About Section */}
        <AboutSection lang={lang} />

        {/* 3. Tech Stack & Competencies */}
        <TechStackSection lang={lang} />

        {/* 4. Data Analytics & Business Intelligence Section */}
        <DataAnalyticsSection lang={lang} />

        {/* 5. Featured Projects */}
        <ProjectsSection lang={lang} />

        {/* 6. Professional Certifications Section */}
        <CertificationsSection lang={lang} />

        {/* 7. Founder & Venture Showcase (AUMA) */}
        <VentureSection lang={lang} />

        {/* 8. Education & Journey Timeline */}
        <JourneySection lang={lang} />

        {/* 9. Contact Section */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
