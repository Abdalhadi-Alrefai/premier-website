import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://premierdentallab.iq';
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
          'x-default': `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
          'x-default': `${baseUrl}/en`,
        },
      },
    },
  ];
}
