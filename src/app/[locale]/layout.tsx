import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/contact/FloatingWhatsApp';
import '@/app/globals.css';

const SUPPORTED_LOCALES = ['en', 'ar'];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === 'ar';
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || process.env.WEBSITE_URL || 'https://premierdentallab.iq';

  const title = isArabic
    ? 'مختبر بريمير لطب الأسنان | طب الأسنان الرقمي وتركيبات CAD/CAM أربيل'
    : 'Premier Dental Lab | Digital Dentistry & CAD/CAM Restorations Erbil';

  const description = isArabic
    ? 'مختبر رقمي متخصص لطب الأسنان في أربيل، العراق. نقدم تركيبات الزيركون والجسور السنية الدقيقة باستخدام أحدث تقنيات CAD/CAM وسير العمل الرقمي للعيادات التخصصية.'
    : 'Premier Dental Lab in Erbil, Iraq provides high-precision CAD/CAM dental restorations, zirconia crowns, bridges, and digital workflows for dental professionals and clinics.';

  const keywords = isArabic
    ? [
        'مختبر أسنان في أربيل',
        'مختبر أسنان رقمي',
        'تركيبات الأسنان في أربيل',
        'مختبر CAD/CAM للأسنان',
        'مختبر بريمير لطب الأسنان',
        'تيجان زيركون أربيل',
        'طب الأسنان الرقمي العراق',
      ]
    : [
        'Dental laboratory in Erbil',
        'Digital dental laboratory Erbil',
        'CAD/CAM dental laboratory Iraq',
        'Dental restorations Erbil',
        'Zirconia crowns Erbil',
        'Premier Dental Lab',
        'Digital impressions Kurdistan',
      ];

  return {
    title: {
      default: title,
      template: `%s | ${isArabic ? 'مختبر بريمير لطب الأسنان' : 'Premier Dental Lab'}`,
    },
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ar: '/ar',
        'x-default': '/en',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${locale}`,
      locale: isArabic ? 'ar_IQ' : 'en_US',
      alternateLocale: isArabic ? 'en_US' : 'ar_IQ',
      siteName: isArabic ? 'مختبر بريمير لطب الأسنان' : 'Premier Dental Lab',
      images: [
        {
          url: '/images/about-us-image.png',
          width: 1374,
          height: 1145,
          alt: isArabic
            ? 'مختبر بريمير لطب الأسنان — أربيل، العراق'
            : 'Premier Dental Lab — Erbil, Iraq',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/about-us-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const isArabic = locale === 'ar';
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || process.env.WEBSITE_URL || 'https://premierdentallab.iq';

  // Schema.org Structured Data for Premier Dental Lab (Erbil)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: isArabic ? 'مختبر بريمير لطب الأسنان' : 'Premier Dental Lab',
    alternateName: isArabic ? 'Premier Dental Lab' : 'مختبر بريمير لطب الأسنان',
    description: isArabic
      ? 'مختبر رقمي متخصص لطب الأسنان في أربيل، العراق، يقدم تركيبات الأسنان عالية الدقة وتقنيات CAD/CAM المتقدمة.'
      : 'Professional digital dental laboratory in Erbil, Iraq, specializing in precision dental restorations and CAD/CAM technology.',
    url: `${siteUrl}/${locale}`,
    telephone: '+9647517714874',
    address: {
      '@type': 'PostalAddress',
      streetAddress: isArabic
        ? 'شارع 40 – برايتي – فرع هولزرد'
        : '40 Meter Street, Brayati, Hol Zard Branch',
      addressLocality: isArabic ? 'أربيل' : 'Erbil',
      addressCountry: 'IQ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.196152,
      longitude: 44.03318,
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=36.1961520%2C44.0331800',
    isAcceptingNewPatients: false, // B2B dental laboratory serving dental clinics/dentists
    image: `${siteUrl}/images/about-us-image.png`,
  };

  return (
    <html lang={locale} dir={isArabic ? 'rtl' : 'ltr'}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`min-h-screen bg-brand-canvas-dark text-white antialiased ${
          isArabic ? 'font-arabic' : 'font-sans'
        }`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="relative min-h-screen flex flex-col bg-mesh-grid">  
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}