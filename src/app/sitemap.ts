import { legalDocuments } from '@/i18n/ui';
import { MetadataRoute } from 'next';
import { locales, nearbyPath, nearbyPlaces } from '@/content/nearby';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || 'plazabaquerizo.com'}`;

  return [
    ...legalDocuments.flatMap((document) => {
      const languages = Object.fromEntries(locales.map((locale) => [locale, `${baseUrl}/${locale}/${document}`]));
      return locales.map((locale) => ({ url: languages[locale], alternates: { languages } }));
    }),
    ...nearbyPlaces.flatMap(({ slug }) => {
      const languages = Object.fromEntries(locales.map(locale => [locale, baseUrl + nearbyPath(locale, slug)]));
      return locales.map(locale => ({ url: languages[locale], alternates: { languages } }));
    }),
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          zh: `${baseUrl}/zh`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ];
}
