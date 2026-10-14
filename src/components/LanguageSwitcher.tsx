'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg border border-brand-border hover:border-brand-petrol-accent/50 bg-brand-surface/70 hover:bg-brand-surface transition-all text-xs sm:text-sm font-medium text-white group cursor-pointer shrink-0"
      aria-label="Toggle language between English and Arabic"
    >
      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-petrol-accent transition-transform group-hover:rotate-45 shrink-0" />
      <span>{locale === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}
