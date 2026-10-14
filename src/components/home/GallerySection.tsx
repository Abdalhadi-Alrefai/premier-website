'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SectionHeading } from './SectionHeading';
import { GalleryItem } from '@/types/gallery';
import { DEFAULT_GALLERY_ITEMS } from '@/data/gallery';
import { GalleryGrid } from '../gallery/GalleryGrid';
import { GalleryLightbox } from '../gallery/GalleryLightbox';
import { ShieldCheck } from 'lucide-react';

interface GallerySectionProps {
  items?: GalleryItem[];
  className?: string;
}

/**
 * Gallery Section Component (#gallery)
 *
 * Showcases verified Premier Dental Lab restoration cases.
 * Features an editorial masonry-inspired grid, subtle hover interactions,
 * and an accessible fullscreen lightbox with zoom controls and RTL support.
 */
export function GallerySection({
  items = DEFAULT_GALLERY_ITEMS,
  className = '',
}: GallerySectionProps) {
  const t = useTranslations('gallery');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className={`relative py-20 lg:py-32 border-t border-brand-border/60 overflow-hidden scroll-mt-20 bg-brand-canvas-dark ${className}`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 start-1/3 w-[500px] h-[300px] rounded-full bg-brand-petrol-accent/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 start-10 w-80 h-80 rounded-full bg-brand-petrol/20 blur-[130px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge={t('label')}
          title={t('headline')}
          description={t('description')}
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* Gallery Masonry Grid */}
        <GalleryGrid items={items} onSelectImage={(index) => setSelectedImageIndex(index)} />
      </div>

      {/* Fullscreen Interactive Lightbox */}
      <GalleryLightbox
        items={items}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNavigate={(newIndex) => setSelectedImageIndex(newIndex)}
      />
    </section>
  );
}
