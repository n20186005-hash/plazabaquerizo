import type { MetadataRoute } from "next";
import { guideSlugs } from "@/i18n/visitor-guides";
import { localizedAlternates, locales, siteUrl } from "./site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...guideSlugs.map((slug) => `/guide/${slug}`)];
  return routes.flatMap((route) => locales.map((locale) => ({
    url: `${siteUrl}/${locale}${route}`,
    alternates: { languages: localizedAlternates(route) },
  })));
}
