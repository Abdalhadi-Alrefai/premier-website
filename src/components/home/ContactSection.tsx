'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SectionHeading } from './SectionHeading';
import { LABORATORY_CONFIG } from '@/config/laboratory';
import { ContactForm } from '@/components/contact/ContactForm';
import { LaboratoryMap } from '@/components/contact/LaboratoryMap';
import {
  Phone,
  MessageCircle,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Building2,
  Stethoscope,
} from 'lucide-react';

interface ContactSectionProps {
  className?: string;
}

export function ContactSection({ className = '' }: ContactSectionProps) {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const { phone, phoneRaw, whatsapp, whatsappUrl, address, googleMapsUrl } =
    LABORATORY_CONFIG.primaryBranch;

  const localizedAddress = isArabic ? address.ar : address.en;

  return (
    <section
      id="contact"
      className={`relative py-20 lg:py-32 border-t border-brand-border/60 overflow-hidden scroll-mt-20 bg-brand-canvas-dark ${className}`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 start-1/4 w-[500px] h-[300px] rounded-full bg-brand-petrol-accent/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 end-10 w-80 h-80 rounded-full bg-brand-petrol/20 blur-[130px] pointer-events-none" />

      <div className="site-container relative z-10 space-y-16 sm:space-y-24">
        {/* Section Heading */}
        <SectionHeading
          badge={t('label')}
          title={t('headline')}
          description={t('description')}
          align="center"
          className="max-w-3xl"
        />

        {/* Two-Column Grid: Contact Information & Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 columns on desktop): Contact Cards & Clinical Focus */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Clinical Collaboration Focus Callout */}
            <div className="p-6 rounded-3xl bg-brand-surface/40 border border-brand-border/70 backdrop-blur-sm space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-petrol-accent uppercase tracking-wider">
                <Stethoscope className="w-4 h-4" />
                <span>
                  {isArabic ? 'التعاون السريري والمخبري' : 'Clinical & Technical Partnership'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {isArabic
                  ? 'نعمل جنباً إلى جنب مع أطباء وجراحي الأسنان والمراكز التخصصية في أربيل وعموم العراق لتقديم تركيبات رقمية فائقة الدقة.'
                  : 'We partner closely with dental practitioners, prosthodontists, and clinics throughout Erbil and Iraq to provide reliable, high-precision restorative solutions.'}
              </p>
            </div>

            {/* Direct Contact Methods Cards Stack */}
            <div className="space-y-4">
              {/* Card 01: Direct Phone */}
              <a
                href={`tel:${phoneRaw}`}
                className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-brand-surface/80 via-brand-surface/50 to-brand-canvas-dark/90 border border-brand-border hover:border-brand-petrol-accent/60 transition-all duration-300 flex items-center justify-between gap-4 shadow-xl hover:shadow-[0_0_25px_rgba(34,166,191,0.12)] cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-petrol-accent/10 border border-brand-petrol-accent/30 text-brand-petrol-accent flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    {/* <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-brand-petrol-accent block mb-0.5">
                      {t('phoneLabel')}
                    </span> */}
                    <span
                      className="text-base sm:text-lg font-bold text-white font-mono block"
                      dir="ltr"
                    >
                      {phone}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-semibold text-brand-muted group-hover:text-white transition-colors shrink-0">
                  {t('phoneAction')}
                </div>
              </a>

              {/* Card 02: WhatsApp Official Chat */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-brand-surface/80 via-brand-surface/50 to-brand-canvas-dark/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 flex items-center justify-between gap-4 shadow-xl hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    {/* <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-emerald-400 block mb-0.5">
                      {t('whatsappLabel')}
                    </span> */}
                    <span
                      className="text-base sm:text-lg font-bold text-white font-mono block"
                      dir="ltr"
                    >
                      {whatsapp}
                    </span>
                  </div>
                </div>
                <div className="text-xs font-semibold text-emerald-300/80 group-hover:text-emerald-300 transition-colors shrink-0 flex items-center gap-1">
                  <span>{t('whatsappAction')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Card 03: Visit Our Laboratory (Address & Directions) */}
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-brand-surface/80 via-brand-surface/50 to-brand-canvas-dark/90 border border-brand-border space-y-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-petrol-accent/10 border border-brand-petrol-accent/30 text-brand-petrol-accent flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="space-y-1">
                    {/* <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-brand-petrol-accent block">
                      {t('addressLabel')}
                    </span> */}
                    <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                      {localizedAddress}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-brand-border/40 flex items-center justify-between">
                  <span className="text-[11px] text-brand-muted font-mono">
                    {LABORATORY_CONFIG.primaryBranch.plusCode}
                  </span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-petrol-accent hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{t('getDirections')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 columns on desktop): Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Cinematic Laboratory Location Map */}
        <div className="pt-8">
          <LaboratoryMap />
        </div>
      </div>
    </section>
  );
}
