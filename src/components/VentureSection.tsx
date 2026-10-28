import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import aumaLogo from '../assets/images/auma_logo.png';
import { ArrowUpRight, Sparkles, Rocket, Globe2, ShieldCheck, Mail } from 'lucide-react';

interface VentureSectionProps {
  lang: Language;
}

export const VentureSection: React.FC<VentureSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="venture" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background ambient luxury glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Venture Showcase Box */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-neutral-900 via-[#14121B] to-neutral-950 text-white p-7 sm:p-12 lg:p-16 border border-rose-400/20 shadow-2xl overflow-hidden">
          {/* Decorative hairline rings */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-rose-500/10 pointer-events-none" />
          <div className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full border border-dashed border-rose-500/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Text & Story (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-purple-950/40 text-purple-300 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>{t.venture.kicker}</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4 leading-tight">
                {t.venture.headline}
              </h2>

              <p className="text-rose-200/90 text-sm sm:text-base font-serif-luxury italic mb-6">
                "{t.venture.tagline}"
              </p>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
                {t.venture.story}
              </p>

              {/* Venture Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {t.venture.pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-neutral-800/50 border border-white/5 backdrop-blur-xs"
                  >
                    <div className="text-rose-400 mb-2">
                      {index === 0 ? (
                        <Globe2 className="w-5 h-5" />
                      ) : index === 1 ? (
                        <Rocket className="w-5 h-5" />
                      ) : (
                        <ShieldCheck className="w-5 h-5" />
                      )}
                    </div>
                    <div className="font-display font-bold text-xs text-white mb-1">
                      {pillar.title}
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-neutral-950 bg-gradient-to-r from-rose-300 via-rose-200 to-pink-200 hover:brightness-105 shadow-md transition-all"
                >
                  <Mail className="w-4 h-4 text-neutral-900" />
                  <span>{t.venture.cta}</span>
                </a>

                <a
                  href="https://github.com/radQueen258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 hover:text-white transition-colors"
                >
                  <span>{t.venture.ventureWebsite}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Official AUMA Logo Showcase (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 sm:w-72 aspect-square rounded-3xl overflow-hidden border-2 border-purple-400/30 shadow-2xl bg-white p-5 flex items-center justify-center group hover:scale-[1.02] transition-transform">
                <img
                  src={aumaLogo}
                  alt="AUMA Official Brand Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>

              <div className="mt-5 text-center text-xs text-neutral-300 max-w-xs font-medium">
                Official Brand of <span className="text-purple-300 font-semibold">AUMA</span> · Founded by Radka Nhapulo
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                Fusing Engineering, Data Analytics, and UI/UX Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
