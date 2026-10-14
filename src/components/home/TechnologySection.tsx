'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from './SectionHeading';
import { WorkflowStep, DEFAULT_WORKFLOW_STEPS } from '@/types/workflow';
import {
  Scan,
  Monitor,
  Cog,
  Sparkles,
  PackageCheck,
  ChevronRight,
  ChevronLeft,
  Info,
} from 'lucide-react';

interface TechnologySectionProps {
  steps?: WorkflowStep[];
  className?: string;
}

// Map icon string names to Lucide icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Scan,
  Monitor,
  Cog,
  Sparkles,
  PackageCheck,
};

export function TechnologySection({
  steps = DEFAULT_WORKFLOW_STEPS,
  className = '',
}: TechnologySectionProps) {
  const t = useTranslations('technology');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Filter active steps and sort by displayOrder
  const activeSteps = steps
    .filter((step) => step.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  const totalSteps = activeSteps.length;
  const currentStep = activeSteps[activeStepIndex] || activeSteps[0];

  // Intersection Observer for graceful scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="technology"
      ref={sectionRef}
      className={`relative py-20 lg:py-32 border-t border-brand-border/60 overflow-hidden scroll-mt-20 bg-brand-canvas-dark ${className}`}
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/3 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-brand-petrol-accent/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 end-10 w-96 h-96 rounded-full bg-brand-petrol/20 blur-[130px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <SectionHeading
          badge={t('label')}
          title={t('headline')}
          description={t('description')}
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* ========================================================
            DESKTOP WORKFLOW TIMELINE (Large Screens: lg and xl)
            ======================================================== */}
        <div className="hidden lg:block">
          {/* Top Interactive Stepper Track */}
          <div
            className={`relative mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Horizontal Continuous Line */}
            <div className="absolute top-7 start-10 end-10 h-0.5 bg-brand-border/70 z-0" />

            {/* Glowing Active Progress Segment */}
            <div
              className="absolute top-7 start-10 h-0.5 bg-gradient-to-r from-brand-petrol-accent via-brand-petrol-accent to-brand-petrol-accent/40 z-0 transition-all duration-500 ease-out"
              style={{
                width: `${(activeStepIndex / (totalSteps - 1)) * 100}%`,
              }}
            />

            {/* Step Nodes Row */}
            <div
              role="tablist"
              aria-label={t('headline')}
              className="relative z-10 grid grid-cols-5 gap-4"
            >
              {activeSteps.map((step, index) => {
                const IconComponent = ICON_MAP[step.icon] || Scan;
                const isActive = index === activeStepIndex;
                const isPassed = index < activeStepIndex;

                return (
                  <button
                    key={step.id}
                    role="tab"
                    id={`workflow-tab-${step.id}`}
                    aria-selected={isActive}
                    aria-controls={`workflow-panel-${step.id}`}
                    tabIndex={0}
                    onClick={() => setActiveStepIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowRight') {
                        isRtl ? handlePrev() : handleNext();
                      } else if (e.key === 'ArrowLeft') {
                        isRtl ? handleNext() : handlePrev();
                      }
                    }}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-petrol-accent/80 rounded-2xl p-2 transition-all"
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-brand-surface-elevated border-2 border-brand-petrol-accent text-brand-petrol-accent shadow-[0_0_24px_rgba(34,166,191,0.35)] scale-110'
                          : isPassed
                            ? 'bg-brand-surface border border-brand-petrol-accent/50 text-brand-petrol-accent/80 hover:border-brand-petrol-accent'
                            : 'bg-brand-surface/70 border border-brand-border text-brand-muted hover:border-brand-border/90 hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Stage Number Badge */}
                    <span
                      className={`mt-3 text-[11px] font-mono tracking-wider font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'text-brand-petrol-accent'
                          : isPassed
                            ? 'text-brand-petrol-accent/70'
                            : 'text-brand-muted/70 group-hover:text-brand-muted'
                      }`}
                    >
                      {t(`steps.${step.id}.tag`)}
                    </span>

                    {/* Step Title Label */}
                    <span
                      className={`mt-1 text-xs font-bold leading-snug transition-colors duration-200 max-w-[160px] ${
                        isActive ? 'text-white' : 'text-brand-muted group-hover:text-brand-text'
                      }`}
                    >
                      {t(step.titleKey)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5-Stage Cards Grid (Simultaneous viewing of all workflow stages) */}
          <div
            className={`grid grid-cols-5 gap-4 xl:gap-5 mb-10 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {activeSteps.map((step, index) => {
              const IconComponent = ICON_MAP[step.icon] || Scan;
              const isActive = index === activeStepIndex;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(index)}
                  className={`relative p-5 xl:p-6 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-b from-brand-surface-elevated via-brand-surface to-brand-canvas-dark border-2 border-brand-petrol-accent shadow-[0_0_30px_rgba(34,166,191,0.18)] -translate-y-1'
                      : 'bg-brand-surface/60 border border-brand-border/80 hover:border-brand-petrol-accent/40 hover:bg-brand-surface/80'
                  }`}
                >
                  {/* Top Row: Icon + Number */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-brand-petrol-accent/15 text-brand-petrol-accent'
                            : 'bg-brand-surface text-brand-muted'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <span
                        className={`text-xs font-mono font-bold tracking-widest ${
                          isActive ? 'text-brand-petrol-accent' : 'text-brand-muted/60'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-sm xl:text-base font-bold mb-2.5 transition-colors leading-snug ${
                        isActive ? 'text-white' : 'text-brand-text/90'
                      }`}
                    >
                      {t(step.titleKey)}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-brand-muted leading-relaxed line-clamp-4">
                      {t(step.descriptionKey)}
                    </p>
                  </div>

                  {/* Bottom Technical Tag */}
                  <div className="mt-5 pt-3 border-t border-brand-border/40">
                    <span
                      className={`inline-block text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-brand-petrol-accent/10 text-brand-petrol-accent border border-brand-petrol-accent/30 font-medium'
                          : 'bg-brand-surface text-brand-muted/70 border border-brand-border/50'
                      }`}
                    >
                      {t(`steps.${step.id}.badge`)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Active Spotlight Banner & Stepper Controls */}
          <div
            id={`workflow-panel-${currentStep.id}`}
            role="tabpanel"
            aria-labelledby={`workflow-tab-${currentStep.id}`}
            className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-brand-surface/90 via-brand-surface-elevated/80 to-brand-surface/90 border border-brand-petrol-accent/30 backdrop-blur-md flex items-center justify-between gap-6 shadow-xl"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-petrol-accent/15 border border-brand-petrol-accent/40 flex items-center justify-center text-brand-petrol-accent shrink-0 shadow-[0_0_15px_rgba(34,166,191,0.25)]">
                {React.createElement(ICON_MAP[currentStep.icon] || Scan, {
                  className: 'w-6 h-6 stroke-[1.8]',
                })}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {/* <span className="text-[10px] font-mono tracking-widest text-brand-petrol-accent uppercase font-bold px-2 py-0.5 rounded bg-brand-petrol-accent/10 border border-brand-petrol-accent/20">
                    {t('activeStageLabel')} • {t(`steps.${currentStep.id}.tag`)}
                  </span>
                  <span className="text-xs text-brand-muted">
                    {t('stageCounter', {
                      current: activeStepIndex + 1,
                      total: totalSteps,
                    })}
                  </span> */}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {t(currentStep.titleKey)}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl">
                  {t(currentStep.descriptionKey)}
                </p>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={isRtl ? handleNext : handlePrev}
                aria-label="Previous Workflow Step"
                className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-petrol-accent text-brand-muted hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              <button
                type="button"
                onClick={isRtl ? handlePrev : handleNext}
                aria-label="Next Workflow Step"
                className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-petrol-accent text-brand-muted hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE & TABLET WORKFLOW TIMELINE (Vertical Layout: < lg)
            ======================================================== */}
        <div className="block lg:hidden">
          <div className="relative start-0 space-y-6 sm:space-y-8 ps-2 sm:ps-4">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute top-4 bottom-4 start-7 sm:start-9 w-0.5 bg-gradient-to-b from-brand-petrol-accent via-brand-petrol-accent/50 to-brand-border/60" />

            {activeSteps.map((step, index) => {
              const IconComponent = ICON_MAP[step.icon] || Scan;
              const isActive = index === activeStepIndex;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(index)}
                  className="relative flex items-start gap-4 sm:gap-6 group cursor-pointer"
                >
                  {/* Vertical Node Indicator */}
                  <div
                    className={`relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-surface-elevated border-2 border-brand-petrol-accent text-brand-petrol-accent shadow-[0_0_20px_rgba(34,166,191,0.35)] scale-105'
                        : 'bg-brand-surface border border-brand-border text-brand-muted group-hover:border-brand-petrol-accent/40'
                    }`}
                  >
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Stage Card */}
                  <div
                    className={`flex-1 p-5 sm:p-6 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-b from-brand-surface-elevated via-brand-surface to-brand-canvas-dark border border-brand-petrol-accent shadow-lg shadow-brand-petrol-accent/5'
                        : 'bg-brand-surface/70 border border-brand-border group-hover:border-brand-border/90'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono tracking-wider font-semibold text-brand-petrol-accent">
                        {t(`steps.${step.id}.tag`)}
                      </span>
                      <span
                        className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded ${
                          isActive
                            ? 'bg-brand-petrol-accent/15 text-brand-petrol-accent font-medium'
                            : 'bg-brand-surface text-brand-muted/70'
                        }`}
                      >
                        {t(`steps.${step.id}.badge`)}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      {t(step.titleKey)}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Clinical Note (Provisional Workflow Non-Absolute Statement) */}
        {/* <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-brand-surface/40 border border-brand-border/60 flex items-start sm:items-center gap-3.5 backdrop-blur-sm">
          <Info className="w-5 h-5 text-brand-petrol-accent shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            {t('editorialNote')}
          </p>
        </div> */}
      </div>
    </section>
  );
}
