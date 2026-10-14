/**
 * Premier Dental Lab — Restorative Services Configuration
 * Centralized configuration for the Restorative Solutions bottom panel.
 * Provides a single source of truth for the promotional image asset, aspect ratio,
 * and verified restorative services, facilitating future replacements without UI redesign.
 */

export interface RestorativeServiceItem {
  id: string;
  translationKey: string;
}

export interface RestorativeSolutionsConfig {
  image: {
    src: string;
    width: number;
    height: number;
    aspectRatio: string;
    isIllustrative: boolean;
  };
  services: RestorativeServiceItem[];
}

export const RESTORATIVE_SOLUTIONS_CONFIG: RestorativeSolutionsConfig = {
  image: {
    src: '/images/services/restorative-solutions.webp',
    width: 1672,
    height: 941,
    aspectRatio: '16/9',
    isIllustrative: true,
  },
  services: [
    {
      id: 'crowns',
      translationKey: 'items.crowns',
    },
    {
      id: 'bridges',
      translationKey: 'items.bridges',
    },
    {
      id: 'veneers',
      translationKey: 'items.veneers',
    },
    {
      id: 'implants',
      translationKey: 'items.implants',
    },
  ],
};
