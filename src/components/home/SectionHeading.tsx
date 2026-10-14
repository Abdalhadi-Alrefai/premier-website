import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`space-y-3 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-start max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-petrol-accent/10 border border-brand-petrol-accent/20 text-brand-petrol-accent text-xs font-semibold tracking-wide uppercase">
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-brand-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
