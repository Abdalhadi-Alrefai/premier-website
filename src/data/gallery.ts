import { GalleryItem } from '@/types/gallery';

/**
 * Verified Initial Dental Restoration Gallery Items.
 *
 * Sourced directly from Premier Dental Lab clinical photography and benchwork.
 * Does not contain fabricated patient records, diagnoses, or unverified claims.
 */
export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'premier-work-01',
    image: '/images/gallery/image-1.jpeg',
    alt: {
      en: 'High-precision dental restoration clinical case showing natural contour and surface texture',
      ar: 'حالة ترميمية سنية عالية الدقة تبرز المعالم التشريحية الطبيعية والملمس السطحي',
    },
    title: {
      en: 'Clinical Aesthetic Restoration',
      ar: 'معالم ترميمية سريرية جمالية',
    },
    displayOrder: 1,
    isFeatured: true,
    isActive: true,
    width: 1600,
    height: 1066,
  },
  {
    id: 'premier-work-02',
    image: '/images/gallery/image-2.jpeg',
    alt: {
      en: 'Detailed anterior dental restoration profile highlighting incisal translucency',
      ar: 'مظهر جانبي لتركيبة سنية أمامية يوضح تفاصيل الشفافية الحدية',
    },
    title: {
      en: 'Anatomical Margin Detail',
      ar: 'تفاصيل الانطباق التشريحي',
    },
    displayOrder: 2,
    isFeatured: false,
    isActive: true,
    width: 1600,
    height: 1066,
  },
  {
    id: 'premier-work-03',
    image: '/images/gallery/image-3.jpeg',
    alt: {
      en: 'Anterior dental restoration smile alignment and aesthetic facial harmony',
      ar: 'تناغم وتطابق كامل لابتسامة التركيبات السنية الأمامية مع ملامح الوجه',
    },
    title: {
      en: 'Smile Aesthetic Harmony',
      ar: 'تناسق جمالي متكامل للابتسامة',
    },
    displayOrder: 3,
    isFeatured: false,
    isActive: true,
    width: 1600,
    height: 1066,
  },
  {
    id: 'premier-work-04',
    image: '/images/gallery/image-4.jpeg',
    alt: {
      en: 'High-magnification lateral view of restoration margin adaptation and gingival integration',
      ar: 'رؤية مقربة جانبية لدقة انطباق حواف التركيبة السنية واندماجها اللثوي',
    },
    title: {
      en: 'Lateral Margin Adaptation',
      ar: 'دقة انطباق الحواف الجانبية',
    },
    displayOrder: 4,
    isFeatured: false,
    isActive: true,
    width: 1280,
    height: 1600,
  },
  {
    id: 'premier-work-05',
    image: '/images/gallery/image-5.jpeg',
    alt: {
      en: 'Close-up clinical view of anterior tooth restorations and refined surface texture',
      ar: 'عرض سريري مقرب للتركيبات السنية الأمامية والملمس السطحي الدقيق',
    },
    title: {
      en: 'Surface Texture & Anatomy',
      ar: 'الملمس السطحي والمعالم التشريحية',
    },
    displayOrder: 5,
    isFeatured: false,
    isActive: true,
    width: 1280,
    height: 1600,
  },
  {
    id: 'premier-work-06',
    image: '/images/gallery/image-6.jpeg',
    alt: {
      en: 'Laboratory master model showcasing hand-crafted ceramic restorations on dental cast',
      ar: 'نموذج عمل مخبري يعرض التركيبات الخزفية المتقنة على قالب جبسي تشريحي',
    },
    title: {
      en: 'Laboratory Master Model',
      ar: 'نموذج عمل مخبري متقن',
    },
    displayOrder: 6,
    isFeatured: false,
    isActive: true,
    width: 1600,
    height: 1200,
  },
  {
    id: 'premier-work-07',
    image: '/images/gallery/image-7.jpeg',
    alt: {
      en: 'Anatomical ceramic tooth restorations on laboratory working cast',
      ar: 'تركيبات سنية خزفية تشريحية على قالب العمل المخبري',
    },
    title: {
      en: 'Precision Ceramic Layering',
      ar: 'طبقات خزفية تشريحية دقيقة',
    },
    displayOrder: 7,
    isFeatured: false,
    isActive: true,
    width: 1600,
    height: 1200,
  },
  {
    id: 'premier-work-08',
    image: '/images/gallery/image-8.jpeg',
    alt: {
      en: 'Multi-unit dental restorations on segmented laboratory die model',
      ar: 'تركيبات سنية متعددة على قالب مخبري تشريحي مجزأ',
    },
    title: {
      en: 'Master Cast Alignment',
      ar: 'محاذاة متقنة على قالب العمل',
    },
    displayOrder: 8,
    isFeatured: false,
    isActive: true,
    width: 1280,
    height: 960,
  },
];
