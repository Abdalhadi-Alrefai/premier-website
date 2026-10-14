'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations, useLocale } from 'next-intl';
import { Sparkles, Layers, Cpu } from 'lucide-react';

// Dynamic client-side import for WebGL Canvas
const DentalCrownCanvas = dynamic(() => import('./DentalCrownCanvas'), {
  ssr: false,
  loading: () => <DentalCrownCanvasLoader />,
});

/**
 * Lightweight loading skeleton while WebGL canvas initializes
 */
function DentalCrownCanvasLoader() {
  return (
    <div className="w-full h-full min-h-[350px] sm:min-h-[440px] flex flex-col items-center justify-center animate-pulse">
      <div className="w-20 h-20 rounded-2xl bg-brand-surface border border-brand-petrol-accent/30 flex items-center justify-center shadow-lg">
        <Cpu
          className="w-8 h-8 text-brand-petrol-accent animate-spin"
          style={{ animationDuration: '6s' }}
        />
      </div>
      <div className="mt-4 h-2 w-28 bg-brand-petrol-accent/20 rounded-full" />
    </div>
  );
}

/**
 * Fallback rendered if WebGL is disabled or unsupported
 */
function WebGLFallbackView({ message }: { message: string }) {
  return (
    <div className="w-full h-full min-h-[350px] sm:min-h-[440px] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center shadow-lg mb-4">
        <Layers className="w-9 h-9 text-brand-petrol-accent" />
      </div>
      <h4 className="text-sm font-semibold text-white mb-1">3D Restoration View</h4>
      <p className="text-xs text-brand-muted max-w-xs">{message}</p>
    </div>
  );
}

interface DentalCrownSceneProps {
  className?: string;
}

/**
 * Visual Container for the Interactive 3D Dental Crown.
 *
 * Hosts client-side Three.js / React Three Fiber interactive viewport with:
 * - Direct GLB loading of the dental crown model
 * - Studio lighting using official Premier brand tones (#023140, #22A6BF)
 * - Ivory ceramic restorative material (MeshPhysicalMaterial)
 * - OrbitControls with auto-rotation, touch rotation, and damping
 */
export function DentalCrownScene({ className = '' }: DentalCrownSceneProps) {
  const t = useTranslations('crownScene');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  return (
    <div
      data-r3f-mount-point="dental-crown-canvas"
      className={`relative w-full aspect-square max-w-[560px] mx-auto rounded-3xl border border-brand-border/80 bg-gradient-to-b from-brand-surface/90 via-brand-surface/40 to-brand-canvas-dark/95 backdrop-blur-md overflow-hidden flex flex-col items-center justify-between p-5 sm:p-7 shadow-2xl shadow-black/50 group ${className}`}
    >
      {/* Atmospheric Brand Rim-Lighting behind the 3D Crown */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-brand-petrol-accent/15 blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-56 h-56 rounded-full bg-[#023140]/70 blur-[70px] pointer-events-none" />

      {/* Top Viewport Header */}
      <div className="relative z-10 w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-petrol-accent/10 border border-brand-petrol-accent/25 text-brand-petrol-accent text-[11px] font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t('badge')}</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-brand-muted font-medium bg-brand-surface/80 px-2.5 py-1 rounded-md border border-brand-border">
          <span className="w-2 h-2 rounded-full bg-brand-petrol-accent" />
          <span>{t('demonstrationTag')}</span>
        </div>
      </div>

      {/* Center 3D Interactive WebGL Stage */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center my-1 overflow-hidden">
        {hasWebGL === false ? (
          <WebGLFallbackView message={t('webglUnavailable')} />
        ) : (
          <DentalCrownCanvas isRtl={isRtl} rotateHint={t('rotateHint')} />
        )}
      </div>

      {/* Bottom Technical Telemetry Strip */}
      <div className="relative z-10 w-full pt-3 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <div className="flex items-center gap-2 text-brand-muted">
          <Layers className="w-3.5 h-3.5 text-brand-petrol-accent" />
          <span className="truncate max-w-[220px] sm:max-w-xs">{t('materialProfile')}</span>
        </div>

        <div className="flex items-center gap-1.5 font-medium text-emerald-400/90 text-[10px] tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t('status')}</span>
        </div>
      </div>
    </div>
  );
}
