import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  MapPin,
  Globe,
  Cpu,
  BarChart2,
  Palette,
  Compass,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const pillarIcons = [
    <Cpu className="w-5 h-5" key="cpu" />,
    <BarChart2 className="w-5 h-5" key="bar" />,
    <Palette className="w-5 h-5" key="palette" />,
    <Compass className="w-5 h-5" key="compass" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs font-bold tracking-widest uppercase text-rose-500 mb-2">
            {t.about.kicker}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight leading-tight">
            {t.about.headline}
          </h2>
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>

            {/* 4 Core Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-rose-300 dark:hover:border-rose-900 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center mb-3">
                    {pillarIcons[i]}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-neutral-900 dark:text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-3xl glass-panel border border-rose-200/60 dark:border-neutral-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-400/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Verified Background</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-500 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                      Degree & Major
                    </div>
                    <div className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {t.about.quickFacts.degree}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      {t.about.quickFacts.university}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-neutral-200/60 dark:bg-neutral-800/80" />

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-500 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                      Professional Certifications
                    </div>
                    <div className="font-semibold text-rose-600 dark:text-rose-400 text-xs sm:text-sm">
                      {t.about.quickFacts.certifications}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-neutral-200/60 dark:bg-neutral-800/80" />

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                      Base Location
                    </div>
                    <div className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {t.about.quickFacts.location}
                    </div>
                    <div className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                      Open to international roles & remote collaboration
                    </div>
                  </div>
                </div>

                <div className="h-px bg-neutral-200/60 dark:bg-neutral-800/80" />

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-500 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                      Languages & Dialects
                    </div>
                    <div className="font-semibold text-neutral-800 dark:text-neutral-200">
                      Portuguese (Native) · English (Professional) · Russian (Conversational)
                    </div>
                  </div>
                </div>

                <div className="h-px bg-neutral-200/60 dark:bg-neutral-800/80" />

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-500 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                      Primary Engineering & Analytics Focus
                    </div>
                    <div className="font-semibold text-neutral-800 dark:text-neutral-200">
                      {t.about.quickFacts.focus}
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Link adjacency */}
              <div className="mt-7 pt-4 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Public Repositories</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-rose-600 dark:text-rose-400 hover:underline"
                >
                  github.com/radQueen258 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
