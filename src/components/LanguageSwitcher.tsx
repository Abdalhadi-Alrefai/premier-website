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
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-border hover:border-brand-petrol-accent/50 bg-brand-surface/70 hover:bg-brand-surface transition-all text-sm font-medium text-white group cursor-pointer"
      aria-label="Toggle language between English and Arabic"
    >
      <Globe className="w-4 h-4 text-brand-petrol-accent transition-transform group-hover:rotate-45" />
      <span>{locale === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}
