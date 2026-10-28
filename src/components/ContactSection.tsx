import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Terminal,
  BarChart3,
  Palette,
  Briefcase,
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const collaborationAreas = [
    {
      title: lang === 'en' ? 'Software & Backend Engineering' : 'Engenharia de Software e Backend',
      desc: lang === 'en' ? 'Distributed APIs, Java/Spring Boot, Python/FastAPI, Go microservices, PostgreSQL architectures.' : 'APIs distribuídas, Java/Spring Boot, Python/FastAPI, microsserviços em Go, PostgreSQL.',
      icon: <Terminal className="w-5 h-5 text-rose-500" />,
    },
    {
      title: lang === 'en' ? 'Data Analytics & Power BI' : 'Análise de Dados e Power BI',
      desc: lang === 'en' ? 'Interactive executive dashboards, SQL modeling, telemetry metrics, and business intelligence.' : 'Dashboards executivos, modelagem SQL, métricas de telemetria e business intelligence.',
      icon: <BarChart3 className="w-5 h-5 text-amber-500" />,
    },
    {
      title: lang === 'en' ? 'UI/UX Design & Digital Advisory' : 'Design UI/UX e Consultoria Digital',
      desc: lang === 'en' ? 'User-centred interfaces, wireframing, design systems, and strategic digital transformation advisory.' : 'Interfaces centradas no utilizador, wireframing, design systems e transformação digital.',
      icon: <Palette className="w-5 h-5 text-purple-500" />,
    },
    {
      title: lang === 'en' ? 'AUMA Ventures & Partnerships' : 'Parcerias e Empreendimentos AUMA',
      desc: lang === 'en' ? 'Commissioning bespoke digital platforms, technology products, and innovative joint ventures.' : 'Desenvolvimento de plataformas sob medida, produtos digitais e iniciativas inovadoras.',
      icon: <Briefcase className="w-5 h-5 text-rose-500" />,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background soft ambient luxury glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rose-aura-gradient pointer-events-none -z-10 blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-rose-500 mb-2">
            {t.contact.kicker}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 dark:text-white tracking-tight leading-tight mb-4">
            {t.contact.headline}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Primary Direct Email Spotlight Card (Full Width) */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-br from-white via-rose-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-[#15121E] dark:to-neutral-950 border border-rose-200/80 dark:border-rose-900/40 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold mb-3 border border-rose-500/20">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>{lang === 'en' ? 'Direct Communication Hub' : 'Canal Direto de Comunicação'}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-white mb-2">
                {lang === 'en' ? 'Start a Conversation with Radka' : 'Inicie uma Conversa com a Radka'}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                {lang === 'en'
                  ? 'Whether you are seeking a Software Engineer, Backend Developer, Data Analyst, UI/UX Designer, or exploring technology solutions with AUMA, I welcome direct inquiries.'
                  : 'Quer procure uma Engenheira de Software, Desenvolvedora Backend, Analista de Dados, Designer UI/UX ou queira explorar soluções com a AUMA, estou à disposição para conversas diretas.'}
              </p>
              <div className="font-mono text-base sm:text-lg text-rose-600 dark:text-rose-400 font-semibold select-all break-all">
                {PERSONAL_INFO.email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                  'Engineering / Data / AUMA Collaboration'
                )}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{lang === 'en' ? 'Open Mail Client' : 'Abrir Email'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-rose-400 dark:hover:border-rose-500 transition-colors bg-white/60 dark:bg-neutral-800/60 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t.contact.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {/* WhatsApp Direct */}
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-emerald-400 dark:hover:border-emerald-900/60 transition-all shadow-xs group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                WhatsApp
              </h4>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
              {lang === 'en'
                ? 'Quick chat for professional discussions, scheduling, and project consultation.'
                : 'Conversas rápidas para alinhamento profissional, agendamentos e propostas.'}
            </p>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {lang === 'en' ? 'Start WhatsApp Chat ↗' : 'Conversar no WhatsApp ↗'}
            </span>
          </a>

          {/* GitHub Profile */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-rose-400 dark:hover:border-rose-900/60 transition-all shadow-xs group"
          >
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                GitHub Repositories
              </h4>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-rose-500 transition-colors" />
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
              {lang === 'en'
                ? 'Review open-source codebases, commit histories, backend APIs, and technical architectures.'
                : 'Aceda aos repositórios abertos, histórico de código, APIs e arquiteturas.'}
            </p>
            <span className="text-xs font-mono font-semibold text-rose-600 dark:text-rose-400">
              github.com/radQueen258 ↗
            </span>
          </a>

          {/* LinkedIn Network */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-blue-400 dark:hover:border-blue-900/60 transition-all shadow-xs group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                LinkedIn Network
              </h4>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
              {lang === 'en'
                ? 'Connect on LinkedIn for international technology roles, career networks, and partnerships.'
                : 'Conecte-se no LinkedIn para oportunidades profissionais, redes e parcerias.'}
            </p>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              {lang === 'en' ? 'Connect on LinkedIn ↗' : 'Conectar no LinkedIn ↗'}
            </span>
          </a>
        </div>

        {/* Expanded 4 Collaboration Areas (Replacing the previous message form) */}
        <div className="mb-10">
          <h3 className="font-display font-bold text-xl text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span>{lang === 'en' ? 'Areas of Engagement & Collaboration' : 'Áreas de Atuação e Colaboração'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {collaborationAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/70 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800"
              >
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 w-fit mb-3">
                  {area.icon}
                </div>
                <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white mb-1.5">
                  {area.title}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Timezone Banner */}
        <div className="p-6 rounded-3xl glass-panel border border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                {t.contact.locationLabel}
              </div>
              <div className="text-sm font-bold text-neutral-900 dark:text-white">
                {PERSONAL_INFO.location}
              </div>
              <div className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                {lang === 'en'
                  ? 'Open to remote roles globally and relocation opportunities'
                  : 'Disponível para trabalho remoto global e oportunidades de relocação'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono bg-white/50 dark:bg-neutral-800/50 px-4 py-2 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50">
            <Clock className="w-4 h-4 text-rose-500 shrink-0" />
            <span>Central Africa Time (CAT / UTC+2)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
