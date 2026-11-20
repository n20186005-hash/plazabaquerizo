import { notFound } from "next/navigation";
import { NearbyPlaces } from "@/components/NearbyPlaces";
import { locales } from "@/content/nearby";
import type { Locale } from "@/i18n/translations";
import { generateSchema } from "../schema";
import HomeContent from "./HomeContent";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: language } = await params;
  const locale = language as Locale;
  if (!locales.includes(locale)) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema(locale)).replace(/</g, "\\u003c") }} />
      <HomeContent locale={locale} nearby={<NearbyPlaces locale={locale} />} />
    </>
  );
}
