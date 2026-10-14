'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { GalleryItem } from '@/types/gallery';
import { Maximize2, Sparkles } from 'lucide-react';

interface GalleryCardProps {
  item: GalleryItem;
  isFeatured?: boolean;
  onSelect: (item: GalleryItem) => void;
  priority?: boolean;
  className?: string;
}

export function GalleryCard({
  item,
  isFeatured = false,
  onSelect,
  priority = false,
  className = '',
}: GalleryCardProps) {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const localizedAlt = isArabic ? item.alt.ar : item.alt.en;
  const localizedTitle = item.title ? (isArabic ? item.title.ar : item.title.en) : '';

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-label={`${t('viewImage')}: ${localizedTitle || localizedAlt}`}
      className={`group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-surface/80 border border-brand-border/80 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-petrol-accent/80 transition-all duration-300 ${
        isFeatured
          ? 'border-brand-petrol-accent/40 shadow-xl shadow-brand-petrol-accent/5 hover:border-brand-petrol-accent hover:shadow-[0_0_35px_rgba(34,166,191,0.22)]'
          : 'hover:border-brand-petrol-accent/50 hover:shadow-[0_0_25px_rgba(34,166,191,0.14)]'
      } ${className}`}
    >
      {/* Image Container with Controlled Aspect Ratio */}
      <div
        className={`relative w-full overflow-hidden bg-brand-canvas-dark ${
          isFeatured
            ? 'aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10]'
            : 'aspect-[4/3] sm:aspect-[4/3]'
        }`}
      >
        <Image
          src={item.image}
          alt={localizedAlt}
          fill
          priority={priority}
          sizes={
            isFeatured
              ? '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw'
              : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          }
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Subtle Bottom Gradient Overlay for Title Legibility */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-canvas-dark/95 via-brand-canvas-dark/40 to-transparent pointer-events-none" />

        {/* Featured Case Badge (Top Start) */}
        {isFeatured && (
          <div className="absolute top-3.5 start-3.5 sm:top-4 sm:start-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-canvas-dark/85 border border-brand-petrol-accent/60 text-brand-petrol-accent text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('featuredBadge')}</span>
          </div>
        )}

        {/* Hover Action Badge (Center / Top End) */}
        <div className="absolute top-3.5 end-3.5 sm:top-4 end-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-canvas-dark/80 border border-brand-border text-brand-muted flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:text-brand-petrol-accent group-hover:border-brand-petrol-accent/60 transition-all duration-300 backdrop-blur-md scale-90 group-hover:scale-100">
          <Maximize2 className="w-4 h-4" />
        </div>

        {/* Content Info: Short Title Only */}
        {localizedTitle && (
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
            <h3 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-brand-petrol-accent transition-colors duration-200 drop-shadow-sm">
              {localizedTitle}
            </h3>
          </div>
        )}
      </div>
    </button>
  );
}
