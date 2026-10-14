'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { LABORATORY_CONFIG } from '@/config/laboratory';
import { MapPin, ExternalLink, Navigation, Compass, AlertCircle } from 'lucide-react';

export function LaboratoryMap() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const [hasMapError, setHasMapError] = useState(false);

  const { coordinates, plusCode, googleMapsUrl, googleMapsEmbedUrl, address, city } =
    LABORATORY_CONFIG.primaryBranch;

  const localizedAddress = isArabic ? address.ar : address.en;
  const localizedCity = isArabic ? city.ar : city.en;

  // Localized embed URL with language parameter
  const embedSrc = `${googleMapsEmbedUrl}&hl=${locale === 'ar' ? 'ar' : 'en'}`;

  return (
    <div className="relative rounded-3xl overflow-hidden border border-brand-border/80 bg-brand-surface/60 backdrop-blur-md shadow-2xl">
      {/* Top Map Header Bar */}
      <div className="p-5 sm:p-6 border-b border-brand-border/70 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-brand-surface-elevated/40">
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-white">{t('mapTitle')}</h4>
          <p className="text-xs sm:text-sm text-brand-muted">{localizedAddress}</p>
        </div>

        {/* Telemetry / Coordinates & Action Link */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-petrol-accent text-brand-canvas-dark hover:bg-brand-petrol-light hover:text-white text-xs font-semibold transition-all duration-200 shadow-md shadow-brand-petrol-accent/20 cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>{t('getDirections')}</span>
            <ExternalLink className="w-3 h-3 opacity-75" />
          </a>
        </div>
      </div>

      {/* Map Embed Viewport with Fallback Support */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] min-h-[320px] bg-brand-canvas-dark">
        {!hasMapError ? (
          <iframe
            title={t('interactiveMapAria')}
            src={embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onError={() => setHasMapError(true)}
            className="w-full h-full filter saturate-[0.85] contrast-[1.05] opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        ) : (
          /* Robust Fallback View if iframe fails or is blocked */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4 bg-brand-surface/70">
            <div className="w-14 h-14 rounded-2xl bg-brand-petrol-accent/10 border border-brand-petrol-accent/30 flex items-center justify-center text-brand-petrol-accent">
              <MapPin className="w-7 h-7" />
            </div>
            <div className="max-w-md space-y-1">
              <h5 className="text-base font-bold text-white">{t('mapTitle')}</h5>
              <p className="text-xs sm:text-sm text-brand-muted">{localizedAddress}</p>
              <p className="text-xs font-mono text-brand-petrol-accent pt-1">
                {t('coordinates')}: {coordinates.latitude}, {coordinates.longitude}
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-petrol-accent text-brand-canvas-dark font-semibold text-xs shadow-lg shadow-brand-petrol-accent/20 transition-all hover:bg-white cursor-pointer"
            >
              <span>{t('openInGoogleMaps')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Ambient Map Bottom Gradient Edge */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-brand-canvas-dark/60 to-transparent pointer-events-none" />
      </div>

      {/* Map Bottom Subtext Note */}
      <div className="px-5 py-3.5 bg-brand-canvas-dark/80 border-t border-brand-border/60 flex items-center justify-between gap-4 text-[11px] text-brand-muted">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-brand-petrol-accent shrink-0" />
          <span>{t('mapNotice')}</span>
        </div>
        <span className="font-mono text-brand-muted/70 hidden sm:inline-block">
          LAT: {coordinates.latitude} | LNG: {coordinates.longitude}
        </span>
      </div>
    </div>
  );
}
