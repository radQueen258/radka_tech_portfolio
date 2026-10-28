import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  BarChart3,
  LineChart,
  Database,
  PieChart,
  TrendingUp,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Info,
} from 'lucide-react';

interface DataAnalyticsSectionProps {
  lang: Language;
}

export const DataAnalyticsSection: React.FC<DataAnalyticsSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeMetricTab, setActiveMetricTab] = useState<'transactions' | 'latency' | 'curriculum'>('transactions');

  return (
    <section id="analytics" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background soft ambient luxury glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-rose-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-rose-500 mb-2">
            {t.analytics.kicker}
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 dark:text-white tracking-tight leading-tight mb-4">
            {t.analytics.headline}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.analytics.subtitle}
          </p>
        </div>

        {/* 4 Analytical Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-rose-300 dark:hover:border-rose-900 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white mb-2">
              {t.analytics.powerBiCardTitle}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t.analytics.powerBiCardDesc}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-rose-300 dark:hover:border-rose-900 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-500 flex items-center justify-center mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white mb-2">
              {t.analytics.sqlCardTitle}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t.analytics.sqlCardDesc}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-rose-300 dark:hover:border-rose-900 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/50 text-purple-500 flex items-center justify-center mb-4">
              <LineChart className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white mb-2">
              System Observability
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Collecting, aggregating, and visualizing timeseries application telemetry with Prometheus scrapers and Grafana dashboards in BankOps.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-rose-300 dark:hover:border-rose-900 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center mb-4">
              <PieChart className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white mb-2">
              {t.analytics.visualCardTitle}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {t.analytics.visualCardDesc}
            </p>
          </div>
        </div>

        {/* Interactive Dashboard Inspired Showcase */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-neutral-900 via-[#13111A] to-neutral-950 text-white p-6 sm:p-10 border border-rose-500/20 shadow-2xl relative overflow-hidden mb-12">
          {/* Top Bar of the Dashboard console */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    Analytical Operations & Metrics Console
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live Telemetry
                  </span>
                </div>
                <div className="text-xs text-neutral-400">
                  Data telemetry & metric pipelines verified in GitHub BankOps & Tutor architectures
                </div>
              </div>
            </div>

            {/* Interactive metric selector tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-800/80 rounded-xl border border-neutral-700 text-xs">
              <button
                onClick={() => setActiveMetricTab('transactions')}
                className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${
                  activeMetricTab === 'transactions'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                BankOps Transactions
              </button>
              <button
                onClick={() => setActiveMetricTab('latency')}
                className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${
                  activeMetricTab === 'latency'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                API Latency (p99)
              </button>
              <button
                onClick={() => setActiveMetricTab('curriculum')}
                className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${
                  activeMetricTab === 'curriculum'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                EdTech AI Retention
              </button>
            </div>
          </div>

          {/* Metric KPI cards inside the console */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-neutral-800">
            <div className="p-4 rounded-2xl bg-neutral-800/40 border border-white/5">
              <div className="text-xs text-neutral-400 font-medium mb-1">
                {activeMetricTab === 'transactions'
                  ? 'Total Ingested Volume'
                  : activeMetricTab === 'latency'
                  ? 'Mean Response Time'
                  : 'Active Student Sessions'}
              </div>
              <div className="font-display font-extrabold text-2xl text-white tabular-nums">
                {activeMetricTab === 'transactions'
                  ? '1.42M'
                  : activeMetricTab === 'latency'
                  ? '14.8 ms'
                  : '8,420'}
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                <TrendingUp className="w-3 h-3" />
                <span>+18.4% efficiency</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-800/40 border border-white/5">
              <div className="text-xs text-neutral-400 font-medium mb-1">
                {activeMetricTab === 'transactions'
                  ? 'Peak TPS Throughput'
                  : activeMetricTab === 'latency'
                  ? 'P99 Tail SLA'
                  : 'Quiz Completion Rate'}
              </div>
              <div className="font-display font-extrabold text-2xl text-rose-400 tabular-nums">
                {activeMetricTab === 'transactions'
                  ? '1,850/s'
                  : activeMetricTab === 'latency'
                  ? '28.2 ms'
                  : '94.2%'}
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                PostgreSQL index tuned
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-800/40 border border-white/5">
              <div className="text-xs text-neutral-400 font-medium mb-1">
                {activeMetricTab === 'transactions'
                  ? 'Zero Ledger Errors'
                  : activeMetricTab === 'latency'
                  ? 'Error Rate %'
                  : 'AI Response Accuracy'}
              </div>
              <div className="font-display font-extrabold text-2xl text-white tabular-nums">
                {activeMetricTab === 'transactions'
                  ? '99.99%'
                  : activeMetricTab === 'latency'
                  ? '0.02%'
                  : '98.7%'}
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                <span>Verified in test suites</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-800/40 border border-white/5">
              <div className="text-xs text-neutral-400 font-medium mb-1">
                BI Reporting Frequency
              </div>
              <div className="font-display font-extrabold text-2xl text-amber-400">
                Real-Time
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                DAX & PromQL models
              </div>
            </div>
          </div>

          {/* Graphical Visualization Area (Clean SVG Chart) */}
          <div className="pt-6">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
              <span className="font-medium">
                {activeMetricTab === 'transactions'
                  ? '24-Hour Transaction Flow & Analytical Trend Curve'
                  : activeMetricTab === 'latency'
                  ? 'Microservice Telemetry Scraped via Prometheus'
                  : 'Student Diagnostic Engagement Curve'}
              </span>
              <span className="font-mono text-rose-400 text-[11px]">
                Sampling Interval: 15s
              </span>
            </div>

            {/* SVG Visual Chart */}
            <div className="w-full h-44 relative bg-neutral-950/60 rounded-2xl p-4 border border-white/5 overflow-hidden flex items-end">
              {/* Subtle background grid lines */}
              <div className="absolute inset-0 grid grid-rows-4 divide-y divide-white/5 pointer-events-none opacity-40">
                <div />
                <div />
                <div />
                <div />
              </div>

              {/* Chart SVG */}
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 120">
                <defs>
                  <linearGradient id="roseGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {activeMetricTab === 'transactions' ? (
                  <>
                    <path
                      d="M0,80 Q70,40 140,65 T280,30 T420,50 T500,20 L500,120 L0,120 Z"
                      fill="url(#roseGradient)"
                    />
                    <path
                      d="M0,80 Q70,40 140,65 T280,30 T420,50 T500,20"
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="3"
                    />
                  </>
                ) : activeMetricTab === 'latency' ? (
                  <>
                    <path
                      d="M0,50 Q80,70 160,35 T320,60 T440,25 T500,35 L500,120 L0,120 Z"
                      fill="url(#roseGradient)"
                    />
                    <path
                      d="M0,50 Q80,70 160,35 T320,60 T440,25 T500,35"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="3"
                    />
                  </>
                ) : (
                  <>
                    <path
                      d="M0,90 Q90,75 180,45 T340,30 T450,20 T500,15 L500,120 L0,120 Z"
                      fill="url(#roseGradient)"
                    />
                    <path
                      d="M0,90 Q90,75 180,45 T340,30 T450,20 T500,15"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="3"
                    />
                  </>
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* Dedicated Power BI Showcase & Future Drop-In Slot */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-amber-300/40 dark:border-amber-900/30 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Power BI & Business Intelligence Hub</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-neutral-900 dark:text-white mb-2">
                {t.analytics.placeholderTitle}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                {t.analytics.placeholderDesc}
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <Info className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{t.analytics.addProjectNote}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
              >
                <span>Commission Power BI Report</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/radQueen258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-rose-400 transition-colors"
              >
                <span>View SQL Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
