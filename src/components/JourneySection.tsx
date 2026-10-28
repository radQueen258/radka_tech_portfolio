import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { MILESTONES } from '../data/portfolioData';
import { GraduationCap, Briefcase, Rocket, CheckCircle2, MapPin } from 'lucide-react';

interface JourneySectionProps {
  lang: Language;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="journey" className="py-20 md:py-28 bg-neutral-100/40 dark:bg-neutral-900/20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-rose-500 mb-2">
            {t.journey.kicker}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
            {t.journey.sectionTitle}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-sm sm:text-base">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Vertical Connected Timeline */}
        <div className="relative border-l-2 border-rose-200 dark:border-rose-950/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {MILESTONES.map((milestone) => (
            <div key={milestone.id} className="relative group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border-2 border-rose-500 text-rose-500 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all">
                {milestone.type === 'education' ? (
                  <GraduationCap className="w-4 h-4" />
                ) : milestone.type === 'venture' ? (
                  <Rocket className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-rose-300 dark:hover:border-rose-900/60 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400">
                    <span className="font-mono">{milestone.year}</span>
                    <span>·</span>
                    <span>{milestone.organization}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-neutral-400 dark:text-neutral-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{milestone.location}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-2">
                  {milestone.title[lang]}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  {milestone.description[lang]}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  {milestone.highlights[lang].map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-neutral-500 dark:text-neutral-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
