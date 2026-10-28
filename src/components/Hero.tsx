import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  BarChart3,
  Sparkles,
  Palette,
  Terminal,
} from 'lucide-react';
import portraitSrc from '../assets/images/radka_nhapulo_portrait.png';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];
  const [titleIndex, setTitleIndex] = useState(0);

  // Smooth rotating professional titles across all 6 facets
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % t.hero.rotatingTitles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [t.hero.rotatingTitles.length]);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient luxury lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[550px] rose-aura-gradient pointer-events-none -z-10 blur-3xl opacity-75" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-400/10 dark:bg-rose-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Availability status tag */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-rose-600 dark:text-rose-400 mb-5 py-1 px-3.5 rounded-full border border-rose-200 dark:border-rose-900/50 bg-rose-50/80 dark:bg-rose-950/40">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Greeting & Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-neutral-900 dark:text-white tracking-tight leading-[1.1] mb-4 text-balance">
              <span>{t.hero.greeting} </span>
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>

            {/* Dynamic Rotating Subtitle */}
            <div className="h-10 sm:h-12 flex items-center gap-2.5 mb-5">
              <span className="text-xl sm:text-2xl font-light text-rose-400">
                —
              </span>
              <span
                key={titleIndex}
                className="text-lg sm:text-2xl font-bold text-neutral-800 dark:text-rose-200 tracking-tight transition-all duration-500 animate-fadeIn"
              >
                {t.hero.rotatingTitles[titleIndex]}
              </span>
            </div>

            {/* Personal Statement / Bio */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
              {t.hero.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md hover:shadow-rose-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.hero.exploreProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#analytics"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800/80 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all"
              >
                <BarChart3 className="w-4 h-4 text-rose-500" />
                <span>{t.hero.viewAnalytics}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:border-rose-400 dark:hover:border-rose-500/60 hover:bg-rose-50/50 dark:hover:bg-neutral-800/60 transition-all"
              >
                <span>{t.hero.getInTouch}</span>
              </a>
            </div>

            {/* Direct Channels */}
            <div className="flex items-center gap-3.5 text-neutral-500 dark:text-neutral-400">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                Direct Channels
              </span>
              <span className="h-4 w-px bg-neutral-300 dark:bg-neutral-800" />
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-neutral-800 transition-colors"
                title="GitHub @radQueen258"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-neutral-800 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-full hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-neutral-800 transition-colors"
                title="Email direct"
                aria-label="Email Radka Nhapulo"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-neutral-800 transition-colors"
                title="WhatsApp Direct"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Art-Directed Photograph Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {/* Layer 1: Ambient Backlit Halo & Concentric Geometric Rings */}
              <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-rose-500/25 via-pink-400/15 to-purple-600/25 blur-3xl pointer-events-none" />
              <div className="absolute -inset-4 rounded-[3.8rem] border border-rose-300/30 dark:border-rose-500/20 pointer-events-none" />
              <div className="absolute -inset-8 rounded-[4.2rem] border border-dashed border-rose-200/25 dark:border-purple-500/15 pointer-events-none animate-spin [animation-duration:80s]" />

              {/* Layer 2: Sculptural Curved Silhouette Frame */}
              <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/80 dark:border-white/10 bg-gradient-to-b from-rose-100/40 via-white/20 to-neutral-900/60 dark:from-neutral-900/80 dark:via-neutral-950/90 dark:to-[#0B0A0F]">
                <img
                  src={portraitSrc}
                  alt="Radka Nhapulo — Software Engineer, Data Analyst & Founder of AUMA"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.01] transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Soft natural gradient blend at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F]/90 via-[#0B0A0F]/20 to-transparent pointer-events-none" />

                {/* Layer 3: Glass Floating Credential Pedestal */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-panel border border-white/50 dark:border-white/10 text-neutral-900 dark:text-white shadow-lg backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase font-bold tracking-widest text-rose-500 dark:text-rose-400">
                        AUMA Founder · 2026
                      </div>
                      <div className="text-sm font-extrabold text-neutral-900 dark:text-white">
                        Radka Nhapulo
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-neutral-600 dark:text-neutral-300">
                      <div>Software Engineer · Data Analyst</div>
                      <div className="font-semibold text-rose-500 dark:text-rose-400">
                        KFU Alumni (2022–2026)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 4: Orbital Floating Badges */}
              <div className="absolute -top-3 -right-3 z-20 px-3.5 py-1.5 rounded-full glass-pill shadow-lg text-xs font-semibold text-neutral-800 dark:text-rose-200 flex items-center gap-1.5 border border-rose-300/60 dark:border-rose-500/30">
                <BarChart3 className="w-3.5 h-3.5 text-rose-500" />
                <span>Power BI & SQL</span>
              </div>

              <div className="absolute top-1/4 -left-6 z-20 px-3.5 py-1.5 rounded-full glass-pill shadow-lg text-xs font-semibold text-neutral-800 dark:text-rose-200 flex items-center gap-1.5 border border-rose-300/60 dark:border-rose-500/30">
                <Terminal className="w-3.5 h-3.5 text-rose-500" />
                <span>Backend & APIs</span>
              </div>

              <div className="absolute bottom-28 -right-6 z-20 px-3.5 py-1.5 rounded-full glass-pill shadow-lg text-xs font-semibold text-neutral-800 dark:text-rose-200 flex items-center gap-1.5 border border-rose-300/60 dark:border-rose-500/30">
                <Palette className="w-3.5 h-3.5 text-rose-500" />
                <span>Certified UI/UX</span>
              </div>

              <div className="absolute -bottom-3 left-8 z-20 px-3.5 py-1.5 rounded-full glass-pill shadow-lg text-xs font-semibold text-neutral-800 dark:text-rose-200 flex items-center gap-1.5 border border-rose-300/60 dark:border-rose-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>AUMA Founder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width KPI strip below the split */}
        <div className="mt-16 pt-10 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div className="p-4 rounded-2xl bg-white/40 dark:bg-neutral-900/40 border border-rose-200/40 dark:border-neutral-800">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white tabular-nums">
              {t.hero.kpi1Value}
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
              {t.hero.kpi1Label}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/40 dark:bg-neutral-900/40 border border-rose-200/40 dark:border-neutral-800">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-rose-500 tabular-nums">
              {t.hero.kpi2Value}
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
              {t.hero.kpi2Label}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/40 dark:bg-neutral-900/40 border border-rose-200/40 dark:border-neutral-800">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white">
              {t.hero.kpi3Value}
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
              {t.hero.kpi3Label}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/40 dark:bg-neutral-900/40 border border-rose-200/40 dark:border-neutral-800">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-rose-500 tabular-nums">
              {t.hero.kpi4Value}
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
              {t.hero.kpi4Label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
