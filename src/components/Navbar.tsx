import React, { useState, useEffect } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  theme,
  toggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#tech', label: t.nav.skills },
    { href: '#analytics', label: t.nav.analytics },
    { href: '#projects', label: t.nav.projects },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#venture', label: t.nav.venture },
    { href: '#journey', label: t.nav.journey },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-sm border-b border-rose-200/40 dark:border-rose-950/40 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="font-display font-bold text-lg sm:text-2xl tracking-tight text-neutral-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap shrink-0 group"
        >
          <span>Radka</span>
          <span className="text-rose-500 font-serif-luxury italic font-normal">
            Nhapulo
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 group-hover:scale-125 transition-transform" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-rose-300 dark:decoration-rose-500/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Preferences */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center rounded-full p-0.5 border border-rose-200/60 dark:border-rose-900/40 bg-white/60 dark:bg-neutral-900/60 text-xs font-semibold">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
              title="English"
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang('pt')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'pt'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
              title="Português (Moçambique)"
              aria-label="Mudar para Português"
            >
              PT
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-full border border-rose-200/60 dark:border-rose-900/40 text-neutral-700 dark:text-neutral-300 hover:text-rose-500 dark:hover:text-rose-400 bg-white/60 dark:bg-neutral-900/60 transition-colors focus-visible:ring-2 focus-visible:ring-rose-400 cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="px-4 sm:px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 rounded-full shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0"
          >
            {t.nav.hireMe}
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-rose-50 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-b border-rose-200/50 dark:border-rose-950/60 px-6 py-5 mt-2 animate-fadeIn max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-rose-500 py-1.5 border-b border-neutral-100 dark:border-neutral-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
