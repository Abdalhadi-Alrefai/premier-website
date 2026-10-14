/**
 * Typed Gallery Data Architecture for Premier Dental Lab.
 *
 * Defines the schema for laboratory restoration gallery items.
 * Prepared for future dashboard CMS integration (upload, reorder, feature, categorize).
 */
export interface GalleryItem {
  /** Unique identifier for the gallery item */
  id: string;

  /** Absolute or public path to the image asset */
  image: string;

  /** Localized accessible descriptions for screen readers and search engines */
  alt: {
    en: string;
    ar: string;
  };

  /** Optional localized title or caption */
  title?: {
    en: string;
    ar: string;
  };

  /** Optional future category (e.g., 'crowns', 'veneers', 'models') */
  category?: string;

  /** Display sequence order (1-indexed) */
  displayOrder: number;

  /** Visually emphasized featured item within the masonry grid */
  isFeatured?: boolean;

  /** Visibility flag allowing items to be active or hidden */
  isActive: boolean;

  /** Optional native image dimensions to prevent layout shifts */
  width?: number;
  height?: number;
}
