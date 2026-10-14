'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { GalleryItem } from '@/types/gallery';
import { GalleryCard } from './GalleryCard';
import { Camera } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
  onSelectImage: (index: number) => void;
  className?: string;
}

export function GalleryGrid({ items, onSelectImage, className = '' }: GalleryGridProps) {
  const t = useTranslations('gallery');

  const activeItems = items.filter((item) => item.isActive);

  if (activeItems.length === 0) {
    return (
      <div className="text-center py-20 px-6 rounded-3xl bg-brand-surface/40 border border-brand-border/60 max-w-xl mx-auto space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-petrol-accent mx-auto">
          <Camera className="w-6 h-6 stroke-[1.5]" />
        </div>
        <p className="text-sm text-brand-muted leading-relaxed font-normal">{t('emptyState')}</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 ${className}`}
    >
      {activeItems.map((item, index) => {
        const isFeatured = item.isFeatured === true;

        return (
          <div
            key={item.id}
            className={`transition-all duration-300 ${
              isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
            }`}
          >
            <GalleryCard
              item={item}
              isFeatured={isFeatured}
              priority={index < 3}
              onSelect={() => onSelectImage(index)}
            />
          </div>
        );
      })}
    </div>
  );
}
