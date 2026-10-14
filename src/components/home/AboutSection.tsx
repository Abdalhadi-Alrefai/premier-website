'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Sparkles, MapPin, Cpu, Award, Quote } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 border-t border-brand-border/60 overflow-hidden scroll-mt-20"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/3 start-0 w-80 h-80 rounded-full bg-brand-petrol-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 end-0 w-96 h-96 rounded-full bg-[#023140]/30 blur-[130px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text Column (6 columns on desktop) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-start">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-petrol-accent/30 bg-brand-petrol-accent/10 text-brand-petrol-accent text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('label')}</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
              {t('headline')}
            </h2>

            {/* Editorial Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
            </div>

            {/* Philosophy Callout Card */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-brand-surface/70 border border-brand-petrol-accent/30 shadow-xl backdrop-blur-sm group transition-all duration-300 hover:border-brand-petrol-accent/50">
              <div className="absolute -top-3 start-6 px-3 py-0.5 rounded-md bg-brand-petrol-accent text-brand-canvas-dark text-[11px] font-bold tracking-wide uppercase flex items-center gap-1.5 shadow-md">
                <Quote className="w-3 h-3" />
                <span>{t('philosophyLabel')}</span>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-white italic leading-relaxed pt-1">
                &ldquo;{t('philosophy')}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Laboratory Visual Showcase (6 columns on desktop) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[560px] group">
              {/* Subtle Ambient Glow Behind Frame */}
              <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-tr from-brand-petrol-accent/25 via-brand-petrol-accent/10 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div
                data-laboratory-image-slot="true"
                className="relative w-full aspect-[5/4] sm:aspect-[6/5] rounded-3xl border border-brand-border/80 bg-brand-surface/90 overflow-hidden shadow-2xl shadow-black/60 group-hover:border-brand-petrol-accent/40 transition-colors duration-500"
              >
                {/* Real Laboratory CAD/CAM Image */}
                <Image
                  src="/images/about-us-image.png"
                  alt={t('imageAlt')}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Ambient Atmospheric Vignette & Legibility Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-canvas-dark/90 via-brand-canvas-dark/20 to-black/35 pointer-events-none" />

                {/* Top Badges: Laboratory & Location */}
                <div className="absolute top-4 sm:top-5 inset-x-4 sm:inset-x-5 z-10 flex items-center justify-between gap-3 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-canvas-dark/80 backdrop-blur-md border border-brand-border/80 text-[11px] font-semibold text-brand-petrol-accent tracking-wide uppercase shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t('imageSlotBadge')}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-canvas-dark/80 backdrop-blur-md border border-brand-border/80 text-[11px] font-medium text-brand-muted shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-brand-petrol-accent" />
                    <span>{t('imageSlotLocation')}</span>
                  </div>
                </div>

                {/* Bottom Telemetry Card: Technology & Craftsmanship */}
                <div className="absolute bottom-4 sm:bottom-5 inset-x-4 sm:inset-x-5 z-10 p-4 sm:p-5 rounded-2xl bg-brand-canvas-dark/85 backdrop-blur-md border border-brand-border/80 shadow-2xl space-y-2 pointer-events-none">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                      <Cpu className="w-4 h-4 text-brand-petrol-accent" />
                      <span>{t('imageSlotFacility')}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-brand-petrol-accent/15 border border-brand-petrol-accent/30 text-[10px] font-mono font-semibold text-brand-petrol-accent uppercase shrink-0">
                      <Award className="w-3 h-3" />
                      <span>{t('craftsmanshipPillar')}</span>
                    </div>
                  </div>
                  {/* <p className="text-xs text-brand-muted leading-relaxed">
                    {t('craftsmanshipSub')}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
