/**
 * Typed Contact & Inquiry Definitions for Premier Dental Lab.
 * Supports visitor categorization and validated handoff architecture.
 */

export type VisitorType = 'dentist' | 'clinic' | 'general';

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  visitorType: VisitorType;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  visitorType?: string;
  message?: string;
}
