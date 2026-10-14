import React from 'react';
import { Box, Sparkles } from 'lucide-react';

interface CanvasSlotProps {
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Architectural placeholder container for future React Three Fiber (R3F) Canvas
 * and GSAP interactive 3D dental restoration models.
 */
export function CanvasSlot({
  title = 'Interactive 3D Viewport',
  description = 'Architectural slot reserved for React Three Fiber (R3F) & GSAP dental restorations showcase.',
  className = '',
}: CanvasSlotProps) {
  return (
    <div
      data-canvas-slot="r3f-container"
      className={`relative w-full h-[380px] lg:h-[480px] rounded-2xl border border-brand-border bg-brand-surface/40 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-8 text-center group ${className}`}
    >
      {/* Background CAD grid wireframe effect */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0B3A4C 1px, transparent 1px),
            linear-gradient(to bottom, #0B3A4C 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial Petrol Brand Ambient Illumination (Designed for future 3D crown illumination) */}
      <div className="absolute w-80 h-80 rounded-full bg-brand-petrol-accent/15 blur-3xl pointer-events-none" />

      {/* Decorative center icon */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-surface border border-brand-petrol-accent/30 flex items-center justify-center shadow-lg shadow-brand-petrol-accent/10 mb-4 transition-transform group-hover:scale-105">
        <Box className="w-8 h-8 text-brand-petrol-accent" />
      </div>

      <div className="relative z-10 max-w-md">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-petrol-accent/10 border border-brand-petrol-accent/25 text-brand-petrol-accent text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>3D Architecture Slot</span>
        </div>
        <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
        <p className="text-sm text-brand-muted mt-1 leading-relaxed">{description}</p>
      </div>

      {/* Status indicator badge */}
      <div className="absolute bottom-4 start-4 flex items-center gap-2 text-xs text-brand-muted">
        <span className="w-2 h-2 rounded-full bg-brand-petrol-accent animate-pulse" />
        <span>Canvas Viewport Ready</span>
      </div>
    </div>
  );
}
