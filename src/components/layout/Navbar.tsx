'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Menu, X, Lock, ExternalLink } from 'lucide-react';

export function Navbar() {
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.technology'), href: '#technology' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-brand-canvas-dark/90 backdrop-blur-md border-brand-border shadow-lg shadow-black/20'
          : 'bg-brand-canvas-dark/70 backdrop-blur-sm border-brand-border/60'
      }`}
    >
      <div className="site-container h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-20 h-20 rounded-xl p-1 border border-transparent flex items-center justify-center transition-all duration-300 overflow-hidden shrink-0">
            <Image
              src="/images/logos/premier-logo.png"
              alt="Premier Dental Lab Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold tracking-wider text-white uppercase group-hover:text-brand-petrol-accent transition-colors duration-200">
              Premier Dental Lab
            </div>
            {/* <div className="text-[10px] tracking-widest uppercase text-brand-muted font-medium">
              Erbil, Iraq • Digital Dentistry
            </div> */}
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-brand-muted hover:text-white hover:bg-brand-surface/60 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <LanguageSwitcher />

          {/* Doctor Portal Placeholder (Disabled / Coming Soon as per Phase 01/02 specifications) */}
          {/* <div className="relative group/portal">
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-brand-surface border border-brand-border text-brand-muted cursor-not-allowed opacity-80 transition-all"
              aria-label={t('nav.doctorPortal')}
            >
              <Lock className="w-3.5 h-3.5 text-brand-petrol-accent" />
              <span>{t('nav.doctorPortal')}</span>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-petrol-accent/10 text-brand-petrol-accent border border-brand-petrol-accent/20 font-medium">
                {t('nav.doctorPortalBadge')}
              </span>
            </button>

            <div className="absolute end-0 top-full mt-2 w-64 p-2.5 rounded-lg bg-brand-surface-elevated border border-brand-border text-[11px] text-brand-muted shadow-xl opacity-0 pointer-events-none group-hover/portal:opacity-100 transition-opacity duration-200 z-50">
              {t('nav.doctorPortalNote')}
            </div>
          </div> */}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-brand-muted hover:text-white hover:bg-brand-surface border border-brand-border transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border bg-brand-canvas-dark/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-fade-in-up">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-brand-muted hover:text-white hover:bg-brand-surface transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-brand-border">
            <div className="flex items-center justify-between p-3 rounded-lg bg-brand-surface/70 border border-brand-border">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-petrol-accent" />
                <span className="text-xs font-semibold text-white">{t('nav.doctorPortal')}</span>
              </div>
              <span className="text-[10px] text-brand-petrol-accent font-medium px-2 py-0.5 rounded-full bg-brand-petrol-accent/10 border border-brand-petrol-accent/20">
                {t('nav.doctorPortalBadge')}
              </span>
            </div>
            <p className="text-[11px] text-brand-muted mt-2 px-1 leading-relaxed">
              {t('nav.doctorPortalNote')}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
