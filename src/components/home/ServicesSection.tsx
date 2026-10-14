'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';
import { ServiceItem } from '@/types/services';
import { RESTORATIVE_SOLUTIONS_CONFIG } from '@/config/services';
import { Sparkles, Layers, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  services?: ServiceItem[];
  className?: string;
}

/**
 * Reusable Services Section Component.
 *
 * Implements a typed service architecture prepared for future catalog and CMS ingestion.
 * Renders an editorial restorative composition reflecting clinical collaboration,
 * scanner interoperability, and custom dental solutions without displaying unverified
 * commercial products or development placeholders.
 */
export function ServicesSection({ services = [], className = '' }: ServicesSectionProps) {
  const t = useTranslations('services');

  // Filter active services for future catalog display
  const activeServices = services.filter((service) => service.isActive);

  return (
    <section
      id="services"
      className={`relative py-20 lg:py-32 border-t border-brand-border/60 overflow-hidden scroll-mt-20 ${className}`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 end-1/4 w-96 h-96 rounded-full bg-brand-petrol-accent/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 start-10 w-80 h-80 rounded-full bg-[#023140]/30 blur-[120px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge={t('label')}
          title={t('headline')}
          description={t('description')}
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* Dynamic Service Cards (Rendered when official catalog items are supplied) */}
        {activeServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {activeServices
              .sort((a, b) => a.displayOrder - b.displayOrder)
              .map((service) => (
                <div
                  key={service.id}
                  className="p-6 sm:p-8 rounded-3xl bg-brand-surface/70 border border-brand-border hover:border-brand-petrol-accent/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{service.titleKey}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {service.descriptionKey}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          /* Premium Branded Editorial Restorative Composition */
          <div className="space-y-10 sm:space-y-12">
            {/* 3 Core Capability Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Pillar 1: Customized Restorative Solutions */}
              <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-brand-surface/85 via-brand-surface/50 to-brand-canvas-dark/95 border border-brand-border hover:border-brand-petrol-accent/40 transition-all duration-300 group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-brand-petrol-accent/10 border border-brand-petrol-accent/30 flex items-center justify-center text-brand-petrol-accent mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Sparkles className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="text-[11px] font-mono text-brand-petrol-accent tracking-widest uppercase font-semibold mb-2">
                  {t('pillar1Tag')}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {t('pillar1Title')}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed font-normal">
                  {t('pillar1Desc')}
                </p>
              </div>

              {/* Pillar 2: Open Scanner Interoperability */}
              <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-brand-surface/85 via-brand-surface/50 to-brand-canvas-dark/95 border border-brand-petrol-accent/30 hover:border-brand-petrol-accent/60 transition-all duration-300 group shadow-xl shadow-brand-petrol-accent/5">
                <div className="w-12 h-12 rounded-2xl bg-brand-petrol-accent/15 border border-brand-petrol-accent/40 flex items-center justify-center text-brand-petrol-accent mb-6 transition-transform duration-300 group-hover:scale-105">
                  <Layers className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="text-[11px] font-mono text-brand-petrol-accent tracking-widest uppercase font-semibold mb-2">
                  {t('pillar2Tag')}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {t('pillar2Title')}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed font-normal">
                  {t('pillar2Desc')}
                </p>
              </div>

              {/* Pillar 3: Clinical Collaboration & Guidance */}
              <div className="relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-brand-surface/85 via-brand-surface/50 to-brand-canvas-dark/95 border border-brand-border hover:border-brand-petrol-accent/40 transition-all duration-300 group shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-brand-petrol-accent/10 border border-brand-petrol-accent/30 flex items-center justify-center text-brand-petrol-accent mb-6 transition-transform duration-300 group-hover:scale-105">
                  <MessageSquare className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="text-[11px] font-mono text-brand-petrol-accent tracking-widest uppercase font-semibold mb-2">
                  {t('pillar3Tag')}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {t('pillar3Title')}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed font-normal">
                  {t('pillar3Desc')}
                </p>
              </div>
            </div>

            {/* Restorative Capabilities Showcase Panel */}
            <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-brand-surface/90 via-brand-surface/60 to-brand-canvas-dark/95 border border-brand-border/80 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Ambient Corner Glow Accent */}
              <div className="absolute -top-20 -end-20 w-80 h-80 rounded-full bg-brand-petrol-accent/10 blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Column 1 (7 cols on desktop): Content & 4 Verified Services */}
                <div className="lg:col-span-7 space-y-6 text-start">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-petrol-accent/30 bg-brand-petrol-accent/10 text-brand-petrol-accent text-xs font-semibold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t('catalogFrameworkBadge')}</span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {t('catalogFrameworkTitle')}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-normal">
                    {t('catalogFrameworkDesc')}
                  </p>

                  {/* 4 Restorative Services Grid (2 cols on sm+, 1 col on xs) */}
                  <div className="pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                      {RESTORATIVE_SOLUTIONS_CONFIG.services.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-surface-elevated/60 border border-brand-border/70 hover:border-brand-petrol-accent/40 transition-colors duration-200 group/item"
                        >
                          <div className="w-8 h-8 rounded-xl bg-brand-petrol-accent/10 border border-brand-petrol-accent/30 flex items-center justify-center text-brand-petrol-accent shrink-0 group-hover/item:scale-105 transition-transform duration-200">
                            <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                            {t(item.translationKey)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Column 2 (5 cols on desktop): Promotional Restorative Solutions Image */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border/80 bg-brand-surface shadow-2xl shadow-black/50 group/img">
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <Image
                        src={RESTORATIVE_SOLUTIONS_CONFIG.image.src}
                        alt={t('restorativeImageAlt')}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 520px"
                        className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Vignette & Ambient Edge Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-canvas-dark/60 via-transparent to-transparent pointer-events-none" />

                      {/* Illustrative Notice Badge */}
                      <div className="absolute bottom-3 end-3 z-10 px-2.5 py-1 rounded-lg bg-brand-canvas-dark/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-muted tracking-wider uppercase pointer-events-none">
                        {t('restorativeIllustrationNote')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
