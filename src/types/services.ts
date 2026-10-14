/**
 * Typed Service Data Structure for Premier Dental Lab.
 * Prepared for future official catalog ingestion and CMS integration.
 */
export interface ServiceItem {
  id: string;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  image?: string;
  displayOrder: number;
  isActive: boolean;
}
