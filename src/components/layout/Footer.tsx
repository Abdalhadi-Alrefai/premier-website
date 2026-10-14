import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { LABORATORY_CONFIG } from '@/config/laboratory';
import {
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const currentYear = new Date().getFullYear();

  const branch = LABORATORY_CONFIG.primaryBranch;
  const ChevronIcon = isArabic ? ChevronLeft : ChevronRight;

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'technology', href: '#technology' },
    { key: 'gallery', href: '#gallery' },
    { key: 'contact', href: '#contact' },
  ] as const;

  const restorativeServices = [
    { key: 'crowns', href: '#services' },
    { key: 'bridges', href: '#services' },
    { key: 'veneers', href: '#services' },
    { key: 'implants', href: '#services' },
  ] as const;

  return (
    <footer
      aria-labelledby="footer-heading"
      className="w-full border-t border-brand-border/70 bg-brand-canvas-dark text-brand-muted transition-colors relative z-20"
    >
      <h2 id="footer-heading" className="sr-only">
        {isArabic ? 'تذييل الصفحة' : 'Website Footer'}
      </h2>

      {/* Main 4-Column Footer Content */}
      <div className="site-container py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 sm:gap-12 lg:gap-14">
          {/* ========================================================
              COLUMN 1: BRAND IDENTITY (Span 4 on XL)
              ======================================================== */}
          <div className="xl:col-span-4 space-y-5">
            {/* Logo & Laboratory Name */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-brand-surface/80 border border-brand-border/80 p-2 flex items-center justify-center shrink-0 shadow-lg shadow-black/20">
                <Image
                  src="/images/logos/premier-logo.png"
                  alt={isArabic ? 'شعار مختبر بريمير' : 'Premier Dental Lab Logo'}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-base font-bold tracking-wider text-white uppercase block leading-tight">
                  {t('brand.name')}
                </span>
                <span className="text-xs text-brand-muted flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-petrol-accent inline shrink-0" />
                  <span>{t('footer.location')}</span>
                </span>
              </div>
            </div>

            {/* Professional Description */}
            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              {t('footer.brandDescription')}
            </p>

            {/* Quality Workflow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border/80 bg-brand-surface/50 text-xs text-brand-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-petrol-accent shrink-0" />
              <span className="text-brand-text/90 font-medium">{t('footer.workflowBadge')}</span>
            </div>
          </div>

          {/* ========================================================
              COLUMN 2: QUICK LINKS (Span 2 on XL)
              ======================================================== */}
          <div className="xl:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-petrol-accent">
              {t('footer.quickLinksHeading')}
            </h3>

            <nav aria-label={t('footer.quickLinksHeading')}>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-brand-muted hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-petrol-accent rounded-md py-0.5"
                    >
                      <ChevronIcon className="w-3.5 h-3.5 text-brand-muted/40 group-hover:text-brand-petrol-accent transition-colors shrink-0" />
                      <span>{t(`footer.links.${link.key}`)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ========================================================
              COLUMN 3: OUR SERVICES (Span 3 on XL)
              ======================================================== */}
          <div className="xl:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-petrol-accent">
              {t('footer.servicesHeading')}
            </h3>

            <nav aria-label={t('footer.servicesHeading')}>
              <ul className="space-y-2.5">
                {restorativeServices.map((service) => (
                  <li key={service.key}>
                    <a
                      href={service.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-brand-muted hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-petrol-accent rounded-md py-0.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-petrol-accent/40 group-hover:bg-brand-petrol-accent transition-colors shrink-0" />
                      <span>{t(`footer.servicesList.${service.key}`)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ========================================================
              COLUMN 4: CONTACT INFORMATION (Span 3 on XL)
              ======================================================== */}
          <div className="xl:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-petrol-accent">
              {t('footer.contactHeading')}
            </h3>

            <div className="space-y-3.5">
              {/* Phone Line */}
              <a
                href={`tel:${branch.phoneRaw}`}
                className="flex items-start gap-3 group text-sm text-brand-muted hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-petrol-accent rounded-lg p-1 -m-1"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border/80 flex items-center justify-center shrink-0 text-brand-petrol-accent group-hover:border-brand-petrol-accent/50 group-hover:bg-brand-surface-elevated transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-white group-hover:text-brand-petrol-accent transition-colors mt-0.5"
                    dir="ltr"
                  >
                    {branch.phone}
                  </div>
                </div>
              </a>

              {/* Physical Laboratory Address */}
              <div className="flex items-start gap-3 text-sm text-brand-muted">
                <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border/80 flex items-center justify-center shrink-0 text-brand-petrol-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-brand-text/90 leading-relaxed mt-0.5">
                    {isArabic ? branch.address.ar : branch.address.en}
                  </p>
                </div>
              </div>

              {/* Direct Actions: WhatsApp & Google Maps */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <a
                  href={branch.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-petrol-accent/10 border border-brand-petrol-accent/30 text-brand-petrol-accent hover:bg-brand-petrol-accent/20 hover:border-brand-petrol-accent/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-petrol-accent"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{t('footer.contact.whatsappAction')}</span>
                </a>

                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border/90 text-brand-muted hover:text-white hover:border-brand-petrol-accent/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-petrol-accent"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brand-petrol-accent shrink-0" />
                  <span>{t('footer.contact.directionsAction')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM BAR: COPYRIGHT & SUBTEXT
            ======================================================== */}
        <div className="mt-12 pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted/80 text-center sm:text-start">
          <p>
            © {currentYear} {t('brand.name')}. {t('footer.rights')}
          </p>

          <div className="flex items-center gap-4 text-[11px] text-brand-muted/60">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-petrol-accent inline shrink-0" />
              <span>{t('footer.location')}</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">{t('footer.subtext')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
