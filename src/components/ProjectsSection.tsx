import React, { useState } from 'react';
import { Language, Project } from '../types';
import { translations } from '../data/translations';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Github, ArrowUpRight, Terminal, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'backend' | 'ai' | 'web'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'ai', label: t.projects.filterAi },
    { id: 'backend', label: t.projects.filterBackend },
    { id: 'web', label: t.projects.filterWeb },
  ];

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest uppercase text-rose-500 mb-2">
              {t.projects.kicker}
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              {t.projects.sectionTitle}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-sm sm:text-base">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  filter === tab.id
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Bento / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 overflow-hidden shadow-xs hover:border-rose-300 dark:hover:border-rose-900/60 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Card Media Banner */}
              <div
                onClick={() => setActiveProject(project)}
                className="w-full aspect-[16/10] bg-neutral-100 dark:bg-neutral-950 overflow-hidden relative cursor-pointer"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-rose-950/20 via-neutral-900 to-neutral-900 flex flex-col items-center justify-center p-6 text-center">
                    <Terminal className="w-10 h-10 text-rose-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="font-display font-semibold text-sm text-neutral-200">
                      {project.title}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono mt-1">Go Microservice</span>
                  </div>
                )}
                {/* Subtle dark gradient scrim for hover affordance */}
                <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full glass-panel text-xs font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5 shadow-md">
                    <span>{t.projects.architectureDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata separator (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-rose-500 font-medium mb-2.5">
                    <span className="uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.technologies[0]}</span>
                  </div>

                  <h3
                    onClick={() => setActiveProject(project)}
                    className="font-display font-bold text-xl text-neutral-900 dark:text-white group-hover:text-rose-500 transition-colors mb-2 cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-rose-500 shrink-0" />
                  </h3>

                  <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.description[lang]}
                  </p>
                </div>

                <div>
                  {/* Technology labels (Unboxed mono text) */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                    <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 truncate max-w-[200px]">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        title="View GitHub repository"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline"
                      >
                        {t.projects.architectureDetails}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-dive Project Architecture Modal */}
      <ProjectModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
