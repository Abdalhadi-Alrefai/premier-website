'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { LABORATORY_CONFIG } from '@/config/laboratory';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const t = useTranslations('contact');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Detect if body scroll is locked by a modal (such as GalleryLightbox)
  useEffect(() => {
    // Show after slight initial delay so it animates in smoothly
    const timer = setTimeout(() => setIsVisible(true), 1000);

    const checkModalState = () => {
      if (typeof document !== 'undefined') {
        setIsModalOpen(document.body.style.overflow === 'hidden');
      }
    };

    // Check periodically or via MutationObserver
    const observer = new MutationObserver(checkModalState);
    if (typeof document !== 'undefined') {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['style'],
      });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Hide when modal / lightbox is active or before initial reveal
  if (isModalOpen || !isVisible) {
    return null;
  }

  const { whatsappUrl } = LABORATORY_CONFIG.primaryBranch;

  return (
    <aside aria-label={t('floatingWhatsApp')}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('floatingWhatsApp')}
        className="fixed z-40 bottom-5 end-4 sm:bottom-6 sm:end-6 flex items-center gap-2 sm:gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl shadow-emerald-950/40 border border-emerald-400/30 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all duration-300 group cursor-pointer"
        style={{
          bottom: 'max(1.25rem, calc(0.75rem + env(safe-area-inset-bottom)))',
        }}
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5 fill-white/20 stroke-white stroke-[2.2]" />
          <span className="absolute -top-0.5 -end-0.5 w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
          <span className="absolute -top-0.5 -end-0.5 w-2 h-2 rounded-full bg-emerald-400" />
        </div>

        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          {t('floatingTooltip')}
        </span>
      </a>
    </aside>
  );
}
