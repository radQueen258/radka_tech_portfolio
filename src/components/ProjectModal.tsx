import React from 'react';
import { Project, Language } from '../types';
import { translations } from '../data/translations';
import { X, Github, ExternalLink, Layers, CheckCircle2, Calendar } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  if (!project) return null;
  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-500 mb-1">
            <span className="capitalize">{project.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 dark:text-white mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
            {project.tagline[lang]}
          </p>
        </div>

        {/* Media / Visual banner */}
        {project.image ? (
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full aspect-[16/9] rounded-2xl mb-6 bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-neutral-900/40 border border-rose-300/30 flex items-center justify-center p-8 text-center">
            <div>
              <Layers className="w-12 h-12 text-rose-500 mx-auto mb-3" />
              <div className="font-display font-bold text-lg text-neutral-900 dark:text-white">
                {project.title}
              </div>
              <div className="text-xs text-neutral-500 mt-1 font-mono">
                {project.technologies.join(' · ')}
              </div>
            </div>
          </div>
        )}

        {/* Detailed Description */}
        <div className="mb-8">
          <h3 className="font-display font-semibold text-base text-neutral-900 dark:text-white mb-2">
            Architecture & Purpose
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.longDescription[lang]}
          </p>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-8">
          <h3 className="font-display font-semibold text-base text-neutral-900 dark:text-white mb-3">
            {t.projects.keyHighlights}
          </h3>
          <ul className="space-y-2.5">
            {project.architectureHighlights[lang].map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300"
              >
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack used */}
        <div className="mb-8 pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
            Technologies & Tools
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footers */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t.projects.viewCode}</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-rose-600 border border-rose-300 dark:border-rose-900 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t.projects.liveDemo}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {t.projects.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
