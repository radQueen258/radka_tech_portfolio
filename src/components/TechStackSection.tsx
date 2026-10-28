import React, { useState } from 'react';
import { Language, TechSkill } from '../types';
import { translations } from '../data/translations';
import { TECH_SKILLS } from '../data/portfolioData';
import {
  Coffee,
  Terminal,
  Cpu,
  Database,
  Code2,
  Layers,
  Zap,
  Network,
  Server,
  Boxes,
  LineChart,
  PieChart,
  GitBranch,
  Sparkles,
  MonitorSmartphone,
  Activity,
  CheckCircle,
  ExternalLink,
  Compass,
  Palette,
} from 'lucide-react';

interface TechStackProps {
  lang: Language;
}

export const TechStackSection: React.FC<TechStackProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(TECH_SKILLS[0]);

  const categories = [
    { id: 'all', label: t.tech.filterAll },
    { id: 'analytics', label: t.tech.filterAnalytics },
    { id: 'languages', label: t.tech.filterLanguages },
    { id: 'backend', label: t.tech.filterBackend },
    { id: 'databases', label: t.tech.filterDatabases },
    { id: 'tools', label: t.tech.filterTools },
    { id: 'specialties', label: t.tech.filterSpecialties },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? TECH_SKILLS
      : TECH_SKILLS.filter((s) => s.category === activeCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-rose-500' };
    switch (iconName) {
      case 'LineChart':
        return <LineChart {...props} />;
      case 'PieChart':
        return <PieChart {...props} />;
      case 'Coffee':
        return <Coffee {...props} />;
      case 'Terminal':
        return <Terminal {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Database':
        return <Database {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Network':
        return <Network {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Boxes':
        return <Boxes {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'MonitorSmartphone':
        return <MonitorSmartphone {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Figma':
        return <Palette {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section id="tech" className="py-20 md:py-28 bg-neutral-100/50 dark:bg-neutral-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest uppercase text-rose-500 mb-2">
              {t.tech.kicker}
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 dark:text-white tracking-tight">
              {t.tech.sectionTitle}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-sm sm:text-base">
              {t.tech.subtitle}
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/80 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid & Detail Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Grid of Interactive Skill Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.id === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 rounded-2xl text-left transition-all relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-neutral-800 border-2 border-rose-500 shadow-md transform -translate-y-0.5'
                      : 'bg-white/80 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/60 hover:border-rose-300 dark:hover:border-rose-900/60 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 group-hover:scale-110 transition-transform">
                      {renderIcon(skill.iconName)}
                    </div>
                    <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500">
                      {skill.level}
                    </span>
                  </div>

                  <div className="font-display font-bold text-sm text-neutral-900 dark:text-white mb-1">
                    {skill.name}
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                    {skill.description[lang]}
                  </p>

                  {/* Active indicator dot */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-rose-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Skill Focus Panel (4 cols) */}
          <div className="lg:col-span-4">
            {selectedSkill && (
              <div className="p-6 rounded-3xl glass-panel border border-rose-200/80 dark:border-neutral-700 shadow-sm sticky top-28">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-rose-500 text-white shadow-xs">
                    {renderIcon(selectedSkill.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white">
                      {selectedSkill.name}
                    </h3>
                    <div className="text-xs text-rose-600 dark:text-rose-400 font-semibold">
                      {selectedSkill.level}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-neutral-600 dark:text-neutral-300">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      Context & Experience
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
                      {selectedSkill.description[lang]}
                    </p>
                  </div>

                  {selectedSkill.projectRef && (
                    <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/50 dark:border-rose-900/40">
                      <div className="text-[11px] text-rose-500 font-semibold mb-0.5">
                        {t.tech.verifiedIn}
                      </div>
                      <div className="font-medium text-xs text-neutral-800 dark:text-rose-200 flex items-center justify-between">
                        <span>{selectedSkill.projectRef}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-rose-500" />
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <a
                      href="#analytics"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline"
                    >
                      <span>Explore Data Analytics & BI workflows</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
