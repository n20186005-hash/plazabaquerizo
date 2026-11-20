import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { locales, nearbyLabels } from "@/content/nearby";
import { legalCopy } from "@/i18n/legal";
import { translations, type Locale } from "@/i18n/translations";
import { legalDocuments, legalTitles, uiText } from "@/i18n/ui";
import CookieSettings from "./CookieSettings";

type Document = (typeof legalDocuments)[number];
type Props = { params: Promise<{ locale: string; document: string }> };

export function generateStaticParams() {
  return legalDocuments.map((document) => ({ document }));
}

async function resolve(params: Props["params"]) {
  const { locale, document } = await params;
  if (!locales.includes(locale as Locale) || !legalDocuments.includes(document as Document)) notFound();
  return { locale: locale as Locale, document: document as Document };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, document } = await resolve(params);
  return {
    title: legalTitles[locale][document],
    description: document === "cookies" ? legalCopy[locale].cookies.intro : legalCopy[locale][document][0][1],
    alternates: {
      canonical: `/${locale}/${document}`,
      languages: { ...Object.fromEntries(locales.map((language) => [language, `/${language}/${document}`])), "x-default": `/en/${document}` },
    },
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale, document } = await resolve(params);
  const copy = legalCopy[locale];
  return (
    <>
      <SiteNav homeHref={`/${locale}`} locale={locale} languageSwitcher={
        <div className="lang-switcher" aria-label={uiText[locale].language} role="group">
          {(["zh", "en", "es"] as const).map((language) => (
            <Link key={language} className={`lang-btn ${language === locale ? "active" : ""}`} href={`/${language}/${document}`} lang={language} hrefLang={language} aria-current={language === locale ? "page" : undefined}>
              {language === "zh" ? "中文" : language.toUpperCase()}
            </Link>
          ))}
        </div>
      }>
        <Link href={`/${locale}#nearby`}>{nearbyLabels[locale].nearby}</Link>
      </SiteNav>
      <main className="section legal-content">
        <h1 className="section-title">{legalTitles[locale][document]}</h1>
        <div className="section-divider" />
        <p className="about-text">{copy.updated}</p>
        {document === "cookies" ? <CookieSettings locale={locale} /> : copy[document].map(([title, text]) => (
          <section className="info-card" key={title}>
            <h2 className="info-card-title">{title}</h2>
            <p className="about-text">{text}</p>
          </section>
        ))}
        <Link className="maps-link" href={`/${locale}`}>{uiText[locale].home}</Link>
      </main>
      <SiteFooter footer={translations[locale].footer} locale={locale} />
    </>
  );
}
