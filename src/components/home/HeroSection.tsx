import React from 'react';
import { useTranslations } from 'next-intl';
import { DentalCrownScene } from './DentalCrownScene';
import {
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  Activity,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 lg:py-20 overflow-hidden">
      {/* Background Ambient Illumination Highlights */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 rounded-full bg-brand-petrol-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-[30rem] h-[30rem] rounded-full bg-[#023140]/30 blur-[140px] pointer-events-none" />

      <div className="site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-start animate-fade-in-up">
            {/* Top Clinical Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-petrol-accent/30 bg-brand-petrol-accent/10 text-brand-petrol-accent text-xs font-semibold tracking-wide">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>{t('badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.12]">
              {t('headline')}
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t('supportingText')}
            </p>

            {/* Dual CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-brand-petrol-accent text-brand-canvas-dark font-semibold text-sm hover:bg-brand-petrol-light hover:text-white transition-all duration-200 shadow-xl shadow-brand-petrol-accent/25 hover:shadow-brand-petrol-accent/40 group cursor-pointer text-center"
              >
                <span>{t('ctaServices')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 shrink-0" />
              </a>

              <a
                href="#technology"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-brand-border bg-brand-surface/70 hover:bg-brand-surface text-sm font-semibold text-white hover:border-brand-petrol-accent/50 transition-all duration-200 cursor-pointer text-center"
              >
                <span>{t('ctaTechnology')}</span>
              </a>
            </div>

            {/* Clinical Telemetry Badges Strip */}
            <div className="pt-6 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-start">
              <div className="p-3 sm:p-3.5 rounded-xl bg-brand-surface/50 border border-brand-border/70 space-y-1">
                <span className="text-sm font-bold text-white block">{t('metrics.precision')}</span>
                <span className="text-[11px] text-brand-muted block leading-snug">
                  {t('metrics.precisionLabel')}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-surface/50 border border-brand-border/70 space-y-1">
                <span className="text-sm font-bold text-white block">{t('metrics.digital')}</span>
                <span className="text-[11px] text-brand-muted block leading-snug">
                  {t('metrics.digitalLabel')}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-surface/50 border border-brand-border/70 space-y-1">
                <span className="text-sm font-bold text-white block">
                  {t('metrics.turnaround')}
                </span>
                <span className="text-[11px] text-brand-muted block leading-snug">
                  {t('metrics.turnaroundLabel')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Dental Crown Viewport Architecture (5 columns on desktop) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <DentalCrownScene />
          </div>
        </div>
      </div>
    </section>
  );
}
