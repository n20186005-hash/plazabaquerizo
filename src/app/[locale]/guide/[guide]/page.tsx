import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isSiteLocale, localizedAlternates, locales, siteUrl } from "@/app/site-url";
import { guideLabels, guideSlugs, visitorGuides } from "@/i18n/visitor-guides";

type Props = { params: Promise<{ locale: string; guide: string }> };

function getGuide(locale: string, slug: string) {
  const guide = guideSlugs.find((candidate) => candidate === slug);
  if (!isSiteLocale(locale) || !guide) notFound();
  return { locale, guide, content: visitorGuides[locale][guide], labels: guideLabels[locale] };
}

export function generateStaticParams() {
  return locales.flatMap((locale) => guideSlugs.map((guide) => ({ locale, guide })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, guide } = await params;
  const page = getGuide(locale, guide);
  const suffix = `/guide/${guide}`;
  const canonical = `${siteUrl}/${locale}${suffix}`;
  const { title, description } = page.content;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical, languages: localizedAlternates(suffix) },
    openGraph: { title, description, url: canonical, type: "article" },
    twitter: { card: "summary", title, description },
  };
}

export default async function VisitorGuide({ params }: Props) {
  const route = await params;
  const { locale, guide, content, labels } = getGuide(route.locale, route.guide);
  const home = `/${locale}`;
  const suffix = `/guide/${guide}`;

  return (
    <main className="section">
      <nav aria-label={labels.guides} className="visitor-guide-nav">
        <Link href={home}>{labels.home}</Link>
        <div className="visitor-guide-languages">
          {locales.map((language) => (
            <Link key={language} href={`/${language}${suffix}`} hrefLang={language}
              lang={language} aria-current={locale === language ? "page" : undefined}>
              {{ es: "Español", en: "English", zh: "中文" }[language]}
            </Link>
          ))}
        </div>
      </nav>
      <header>
        <h1 className="section-title">{content.title}</h1>
        <div className="section-divider" />
        <p className="about-text">{content.description}</p>
        <p className="about-text">
          <a href={content.map}>{labels.map}</a>
          {" · "}
          <Link href={`${home}#gallery`}>{labels.gallery}</Link>
        </p>
      </header>
      {content.steps && (
        <section>
          <h2 className="section-title">{labels.route}</h2>
          <ol className="about-text visitor-guide-steps">
            {content.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>
      )}
      {content.sections.map(({ title, text }) => (
        <section key={title}>
          <h2 className="visitor-guide-heading">{title}</h2>
          <p className="about-text">{text}</p>
        </section>
      ))}
      <section>
        <h2 className="visitor-guide-heading">{labels.sources}</h2>
        <ul className="about-text visitor-guide-sources">
          {content.sources.map(([label, url]) => <li key={url}><a href={url}>{label}</a></li>)}
        </ul>
      </section>
      <nav aria-label={labels.guides}>
        <h2 className="visitor-guide-heading">{labels.guides}</h2>
        <ul className="about-text visitor-guide-sources">
          {guideSlugs.filter((slug) => slug !== guide).map((slug) => (
            <li key={slug}><Link href={`${home}/guide/${slug}`}>{visitorGuides[locale][slug].card}</Link></li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
