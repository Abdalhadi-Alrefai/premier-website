/**
 * Premier Dental Lab — Official Laboratory Configuration
 * Centralized source of truth for confirmed clinical facilities, contact numbers, and locations.
 * Structured to support multi-branch growth (e.g. Erbil, future branches) without UI refactoring.
 */

export interface BranchLocation {
  id: string;
  isHeadquarters: boolean;
  isPubliclyActive: boolean;
  name: {
    en: string;
    ar: string;
  };
  city: {
    en: string;
    ar: string;
  };
  address: {
    en: string;
    ar: string;
  };
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappUrl: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  plusCode: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export interface LaboratoryConfig {
  name: {
    en: string;
    ar: string;
  };
  tagline: {
    en: string;
    ar: string;
  };
  primaryBranch: BranchLocation;
  branches: BranchLocation[];
}

export const LABORATORY_CONFIG: LaboratoryConfig = {
  name: {
    en: 'Premier Dental Lab',
    ar: 'مختبر بريمير لطب الأسنان',
  },
  tagline: {
    en: 'Digital Dentistry & CAD/CAM Excellence',
    ar: 'طب الأسنان الرقمي المتقدم وتركيبات CAD/CAM',
  },
  primaryBranch: {
    id: 'erbil-hq',
    isHeadquarters: true,
    isPubliclyActive: true,
    name: {
      en: 'Premier Dental Lab — Erbil Facility',
      ar: 'مختبر بريمير لطب الأسنان — منشأة أربيل',
    },
    city: {
      en: 'Erbil, Iraq',
      ar: 'أربيل، العراق',
    },
    address: {
      en: '40 Meter Street, Brayati, Hol Zard Branch, Erbil, Iraq',
      ar: 'شارع 40 – برايتي – فرع هولزرد، أربيل، العراق',
    },
    phone: '+964 751 771 4874',
    phoneRaw: '+9647517714874',
    whatsapp: '+964 751 771 4874',
    whatsappRaw: '9647517714874',
    whatsappUrl: 'https://wa.me/9647517714874',
    coordinates: {
      latitude: 36.196152,
      longitude: 44.03318,
    },
    plusCode: '52WM+F77',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=36.1961520%2C44.0331800',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=36.1961520,44.0331800&z=16&output=embed',
  },
  // Multi-branch architecture ready: only Erbil is currently active
  branches: [
    {
      id: 'erbil-hq',
      isHeadquarters: true,
      isPubliclyActive: true,
      name: {
        en: 'Premier Dental Lab — Erbil Facility',
        ar: 'مختبر بريمير لطب الأسنان — منشأة أربيل',
      },
      city: {
        en: 'Erbil, Iraq',
        ar: 'أربيل، العراق',
      },
      address: {
        en: '40 Meter Street, Brayati, Hol Zard Branch, Erbil, Iraq',
        ar: 'شارع 40 – برايتي – فرع هولزرد، أربيل، العراق',
      },
      phone: '+964 751 771 4874',
      phoneRaw: '+9647517714874',
      whatsapp: '+964 751 771 4874',
      whatsappRaw: '9647517714874',
      whatsappUrl: 'https://wa.me/9647517714874',
      coordinates: {
        latitude: 36.196152,
        longitude: 44.03318,
      },
      plusCode: '52WM+F77',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=36.1961520%2C44.0331800',
      googleMapsEmbedUrl: 'https://maps.google.com/maps?q=36.1961520,44.0331800&z=16&output=embed',
    },
  ],
};
