export const siteUrl = "https://plazabaquerizo.com";

export const locales = ["es", "en", "zh"] as const;
export type SiteLocale = (typeof locales)[number];

export function isSiteLocale(locale: string): locale is SiteLocale {
  return locales.some((supported) => supported === locale);
}

export function localizedAlternates(suffix = "") {
  return {
    es: `${siteUrl}/es${suffix}`,
    en: `${siteUrl}/en${suffix}`,
    zh: `${siteUrl}/zh${suffix}`,
    "x-default": `${siteUrl}/en${suffix}`,
  };
}
