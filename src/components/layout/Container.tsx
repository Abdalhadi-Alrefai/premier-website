import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Premier Dental Lab — Global Responsive Container (Phase 02.9)
 *
 * Implements the refined layout system:
 * - Maximum Width: 1440px
 * - Responsive Horizontal Padding Scale:
 *   - Mobile (< 640px): 20px (px-5)
 *   - Tablet (640px–1023px): 32px (sm:px-8)
 *   - Desktop (1024px–1439px): 40px (lg:px-10)
 *   - Large Desktop (>= 1440px): 48px (xl:px-12)
 *   - Ultra-Wide Desktop (>= 1920px): 64px (2xl:px-16)
 */
export function Container({
  children,
  className = '',
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component className={`site-container ${className}`} {...props}>
      {children}
    </Component>
  );
}

export default Container;
