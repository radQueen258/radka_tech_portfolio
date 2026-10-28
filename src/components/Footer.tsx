import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-950/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100 dark:border-neutral-900">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              className="font-display font-bold text-xl tracking-tight text-neutral-900 dark:text-white flex items-center gap-1.5"
            >
              <span>Radka</span>
              <span className="text-rose-500 font-serif-luxury italic font-normal">
                Nhapulo
              </span>
            </a>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-md">
              Software Engineer · Data Analyst · Certified Digital Consultant & UI/UX Designer · Founder of AUMA
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-rose-500 hover:border-rose-300 transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-rose-500 hover:border-rose-300 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-rose-500 hover:border-rose-300 transition-colors"
              aria-label="Email directly"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-rose-200 dark:border-rose-900 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors ml-2 cursor-pointer"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Philosophy Quote & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
          <div className="font-serif-luxury italic text-rose-600 dark:text-rose-300 text-sm">
            {t.footer.quote}
          </div>

          <div className="flex flex-col sm:items-end gap-1">
            <span>© {new Date().getFullYear()} Radka Nhapulo. {t.footer.rights}</span>
            <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
              {t.footer.builtWith}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
