'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { GalleryItem } from '@/types/gallery';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Sparkles } from 'lucide-react';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  // Save the currently focused element upon opening and restore when closing
  useEffect(() => {
    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement;
      // Prevent background body scrolling
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
        if (previousActiveElementRef.current) {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [isOpen]);

  // Reset zoom level whenever current image index changes
  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard Navigation & Escape handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (isArabic) {
          handlePrev();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (isArabic) {
          handleNext();
        } else {
          handlePrev();
        }
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === '0') {
        e.preventDefault();
        handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isArabic, handlePrev, handleNext, onClose]);

  // Touch Swipe handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || zoomLevel > 1) {
      // Pause swipe navigation when user is zoomed in to inspect fine details
      touchStartRef.current = null;
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartRef.current.x;
    const deltaY = touchEndY - touchStartRef.current.y;

    // Ensure horizontal gesture with minimum threshold of 45px
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        // Swiped Left
        isArabic ? handlePrev() : handleNext();
      } else {
        // Swiped Right
        isArabic ? handleNext() : handlePrev();
      }
    }

    touchStartRef.current = null;
  };

  if (!isOpen || !currentItem) {
    return null;
  }

  const localizedAlt = isArabic ? currentItem.alt.ar : currentItem.alt.en;
  const localizedTitle = currentItem.title
    ? isArabic
      ? currentItem.title.ar
      : currentItem.title.en
    : '';

  // Formatted 2-digit counter: "03 / 08"
  const formattedIndex = String((currentIndex ?? 0) + 1).padStart(2, '0');
  const formattedTotal = String(items.length).padStart(2, '0');

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={t('headline')}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-brand-canvas-dark/95 backdrop-blur-xl animate-fade-in-up select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Controls Toolbar */}
      <div className="relative z-20 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 border-b border-brand-border/60 bg-brand-canvas-dark/70 backdrop-blur-md">
        {/* Left / Start: Image Counter */}
        <div className="flex items-center gap-3">
          <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-brand-petrol-accent px-3 py-1 rounded-lg bg-brand-surface border border-brand-border/80">
            {formattedIndex} / {formattedTotal}
          </div>
          {currentItem.isFeatured && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-petrol-accent/10 border border-brand-petrol-accent/30 text-brand-petrol-accent text-[11px] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>{t('featuredBadge')}</span>
            </span>
          )}
        </div>

        {/* Center / Zoom Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-1 rounded-xl bg-brand-surface/70 border border-brand-border">
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={zoomLevel <= 1}
            aria-label={t('zoomOut')}
            className="p-1.5 sm:p-2 rounded-lg text-brand-muted hover:text-white disabled:opacity-30 disabled:hover:text-brand-muted transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="text-[11px] font-mono text-brand-muted w-10 text-center font-medium">
            {Math.round(zoomLevel * 100)}%
          </span>

          <button
            type="button"
            onClick={handleZoomIn}
            disabled={zoomLevel >= 3}
            aria-label={t('zoomIn')}
            className="p-1.5 sm:p-2 rounded-lg text-brand-muted hover:text-white disabled:opacity-30 disabled:hover:text-brand-muted transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {zoomLevel > 1 && (
            <button
              type="button"
              onClick={handleResetZoom}
              aria-label={t('resetZoom')}
              className="p-1.5 sm:p-2 rounded-lg text-brand-petrol-accent hover:text-white border-s border-brand-border/60 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right / End: Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t('close')}
          className="p-2 sm:p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-muted hover:text-white hover:border-brand-petrol-accent/60 transition-all cursor-pointer shadow-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Viewport: High Quality Contain Display */}
      <div
        className="relative flex-1 w-full h-full flex items-center justify-center p-3 sm:p-6 overflow-hidden"
        onClick={(e) => {
          // Close if clicking the outer container backdrop
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Navigation Button: Previous (Start Side) */}
        <button
          type="button"
          onClick={isArabic ? handleNext : handlePrev}
          aria-label={t('previous')}
          className="absolute start-3 sm:start-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-brand-surface/85 border border-brand-border text-brand-muted hover:text-white hover:border-brand-petrol-accent/80 hover:shadow-[0_0_20px_rgba(34,166,191,0.25)] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
        >
          {isArabic ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
        </button>

        {/* Image Display Area with Smooth Zoom Scaling */}
        <div className="relative w-full h-full max-w-5xl max-h-[78vh] flex items-center justify-center overflow-hidden">
          <div
            className="relative w-full h-full transition-transform duration-300 ease-out flex items-center justify-center"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src={currentItem.image}
              alt={localizedAlt}
              fill
              priority
              quality={95}
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation Button: Next (End Side) */}
        <button
          type="button"
          onClick={isArabic ? handlePrev : handleNext}
          aria-label={t('next')}
          className="absolute end-3 sm:end-6 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-brand-surface/85 border border-brand-border text-brand-muted hover:text-white hover:border-brand-petrol-accent/80 hover:shadow-[0_0_20px_rgba(34,166,191,0.25)] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
        >
          {isArabic ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        </button>
      </div>

      {/* Caption & Metadata Footer Bar */}
      <div className="relative z-20 px-4 sm:px-8 py-4 sm:py-5 border-t border-brand-border/60 bg-brand-canvas-dark/85 backdrop-blur-md">
        <div className="max-w-3xl mx-auto text-center space-y-1.5">
          {localizedTitle && (
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {localizedTitle}
            </h4>
          )}
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{localizedAlt}</p>
        </div>
      </div>
    </div>
  );
}
