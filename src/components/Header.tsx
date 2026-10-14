import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ExternalLink } from 'lucide-react';

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-canvas-dark/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white p-1 border border-brand-border flex items-center justify-center transition-all group-hover:border-brand-petrol-accent group-hover:shadow-[0_0_15px_rgba(34,166,191,0.35)] overflow-hidden shrink-0">
            <Image
              src="/images/logos/premier-logo.png"
              alt="Premier Dental Lab Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold tracking-wider text-white uppercase group-hover:text-brand-petrol-accent transition-colors">
              {/* Premier Dental Lab */}
            </div>
            <div className="text-[10px] tracking-widest uppercase text-brand-muted font-medium">
              Erbil, Iraq • Digital Dentistry
            </div>
          </div>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />

          <a
            href="http://localhost:3001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-brand-petrol-accent text-brand-canvas-dark hover:bg-brand-petrol-light hover:text-white transition-all shadow-sm shadow-brand-petrol-accent/20 cursor-pointer"
          >
            <span>{t('nav.dashboard')}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
