import React, { useState } from 'react';
import { Language, Certification } from '../types';
import { translations } from '../data/translations';
import { CERTIFICATIONS } from '../data/portfolioData';
import {
  Award,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  X,
  Compass,
  Palette,
  Calendar,
} from 'lucide-react';

interface CertificationsSectionProps {
  lang: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-neutral-100/40 dark:bg-neutral-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-rose-500 mb-2">
            {t.certifications.kicker}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 dark:text-white tracking-tight leading-tight mb-4">
            {t.certifications.headline}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-8 sm:p-9 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:border-rose-400 dark:hover:border-rose-900/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-11 h-11 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {cert.id.includes('digital') ? (
                        <Compass className="w-6 h-6" />
                      ) : (
                        <Palette className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
                        {cert.badge[lang]}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        Status: Active & Verified
                      </div>
                    </div>
                  </div>

                  <span className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white mb-3">
                  {cert.title[lang]}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {cert.description[lang]}
                </p>

                {/* Key Tested Competencies */}
                <div className="space-y-2 mb-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                    Verified Competencies
                  </div>
                  {cert.competencies.map((comp, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials Footer */}
              <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-rose-500" />
                  <span>Year: {cert.issueDate}</span>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>{t.certifications.viewCertificate}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Future File Uploads */}
        <div className="p-4 rounded-2xl bg-white/60 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
          <span>{t.certifications.uploadNotice}</span>
          <span className="font-mono text-[11px] text-rose-500">
            src/data/portfolioData.ts
          </span>
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 shadow-2xl text-neutral-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-rose-500 text-white shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900 dark:text-white">
                  {selectedCert.title[lang]}
                </h3>
                <div className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
                  {selectedCert.badge[lang]}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 space-y-4 text-xs mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-neutral-400 uppercase tracking-wider font-semibold text-[10px]">
                    Candidate
                  </div>
                  <div className="font-bold text-sm text-neutral-900 dark:text-white">
                    Radka Nhapulo
                  </div>
                </div>

                <div>
                  <div className="text-neutral-400 uppercase tracking-wider font-semibold text-[10px]">
                    Status
                  </div>
                  <div className="font-semibold text-emerald-500">
                    Verified Credential
                  </div>
                </div>

                <div>
                  <div className="text-neutral-400 uppercase tracking-wider font-semibold text-[10px]">
                    Credential Year
                  </div>
                  <div className="font-mono text-neutral-800 dark:text-neutral-200">
                    {selectedCert.issueDate}
                  </div>
                </div>

                <div>
                  <div className="text-neutral-400 uppercase tracking-wider font-semibold text-[10px]">
                    Category
                  </div>
                  <div className="text-neutral-800 dark:text-neutral-200 font-medium">
                    {selectedCert.id.includes('digital') ? 'Digital Strategy & Advisory' : 'User Experience & Interface Design'}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 leading-relaxed text-xs">
                {selectedCert.description[lang]}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-neutral-400">
                Official certificate PDF or external link can be updated in portfolioData.ts.
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-colors cursor-pointer"
              >
                {t.certifications.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
