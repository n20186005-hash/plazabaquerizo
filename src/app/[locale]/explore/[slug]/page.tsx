import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/translations";
import { locales, metroUrl, nearbyLabels, nearbyPath, nearbyPlaces, placeMap } from "@/content/nearby";

import { getVisitNotice, lodgingFor, placeKinds, visitLabels } from "@/content/nearby-visit";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return nearbyPlaces.map(({ slug }) => ({ slug }));
}

async function getPlace(params: PageProps["params"]) {
  const { locale, slug } = await params;
  const place = nearbyPlaces.find((candidate) => candidate.slug === slug);
  if (!place || !locales.includes(locale as Locale)) notFound();
  return { locale: locale as Locale, place };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, place } = await getPlace(params);
  const path = nearbyPath(locale, place.slug);
  const description = place.content[locale].intro;
  const images = [`/nearby/${place.slug}.webp`];
  return {
    title: place.names[locale],
    description,
    alternates: {
      canonical: path,
      languages: { ...Object.fromEntries(locales.map((language) => [language, nearbyPath(language, place.slug)])), "x-default": nearbyPath("en", place.slug) },
    },
    openGraph: { type: "website", url: path, title: place.names[locale], description, images },
    twitter: { card: "summary_large_image", title: place.names[locale], description, images },
  };
}

export default async function AttractionPage({ params }: PageProps) {
  const { locale, place } = await getPlace(params);
  const { intro, route, photoHint, question, answer, discovery, lastStep } = place.content[locale];
  const t = nearbyLabels[locale];
  const map = placeMap(place);
  const city = visitLabels[place.slug === "parque-historico" ? "samborondon" : "guayaquil"][locale];
  const kind = placeKinds[place.kind][locale];
  const notice = getVisitNotice(place.slug, locale);
  const [opening, ...features] = intro.split(locale === "zh" ? /(?<=。)/ : /(?<=\.) /);
  const duration = `${place.duration} ${visitLabels.minutes[locale]}`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${place.names.es}, ${place.address}`)}`;
  const lodging = lodgingFor(place.slug, place.kind, locale, t.lodgingText);
  const imagePath = `/nearby/${place.slug}.webp`;
  const related = place.related.flatMap((slug) => nearbyPlaces.filter((item) => item.slug === slug));
  const schema = {
    "@context": "https://schema.org", "@type": "TouristAttraction", name: place.names[locale],
    alternateName: place.names.es, description: intro, address: place.address,
    hasMap: map, image: `https://${process.env.CURRENT_SITE_DOMAIN || "plazabaquerizo.com"}${imagePath}`,
  };
  return (
    <>
      <header className="nearby-header">
        <Link href={`/${locale}`}>{t.home}</Link>
        <Link href={`/${locale}#nearby`}>{t.nearby}</Link>
        <nav className="lang-switcher">
          {locales.map((language) => (
            <Link key={language} className={`lang-btn ${language === locale ? "active" : ""}`} href={nearbyPath(language, place.slug)} hrefLang={language} aria-current={language === locale ? "page" : undefined}>
              {language === "zh" ? "中文" : language.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>
      <main className="nearby-guide">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
        <section className="hero nearby-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="nearby-hero-photo" src={imagePath} alt={place.names[locale]} fetchPriority="high" />
          <div className="hero-content">
            <p className="hero-tagline">{city} · {visitLabels.area[locale]}</p>
            <h1 className="hero-title">{place.names[locale]}</h1>
            <p className="hero-subtitle">{opening}</p>
            <p className="nearby-hero-hours">{t.hours} · {notice?.hours ?? place.hours[locale]}</p>
            <div className="nearby-hero-links">
              <a className="hero-cta" href={map}>{t.map}</a>
              <a href="#reviews">{t.rating}</a>
            </div>
          </div>
        </section>
        <div className="section nearby-content">
          <section>
            <h2 className="section-title">{t.intro}</h2>
            <p className="about-text">{opening}</p>
          </section>
          <section>
            <h2 className="section-title">{visitLabels.plan[locale]}</h2>
            <p className="about-text"><strong>{visitLabels.duration[locale]} · {duration}</strong></p>
            <p className="about-text">{visitLabels.excludes[locale]}</p>
            <p className="about-text">{place.tips[locale]}</p>
            {notice?.tip && <p className="about-text">{notice.tip} <a href={notice.source}>{t.source}</a></p>}
          </section>
          <section>
            <h2 className="section-title">{visitLabels.highlights[locale]}</h2>
            <p className="about-text">{features.length ? features.join(locale === "zh" ? "" : " ") : discovery}</p>
          </section>
          <section className="info-card nearby-management">
            <h2 className="info-card-title">{t.about}</h2>
            <p>{place.management[locale]}</p>
            <a href={place.source}>{t.source}</a>
          </section>
          <section>
            <h2 className="section-title">{t.basic}</h2>
            <dl className="nearby-facts">
              <dt>{visitLabels.officialName[locale]}</dt><dd lang="es">{place.names.es}</dd>
              <dt>{visitLabels.kind[locale]}</dt><dd>{kind}</dd>
              <dt>{visitLabels.city[locale]}</dt><dd>{city}, {visitLabels.area[locale]}</dd>
              <dt>{t.address}</dt><dd lang="es">{place.address}</dd>
              <dt>{visitLabels.duration[locale]}</dt><dd>{duration}</dd>
            </dl>
          </section>
          <section>
            <h2 className="section-title">{t.hours}</h2>
            <p className="about-text">{place.hours[locale]}</p>
            {notice?.hours && <p className="about-text">{notice.hours} <a href={notice.source}>{t.source}</a></p>}
          </section>
          <section>
            <h2 className="section-title">{t.fare}</h2>
            <p className="about-text">{place.fare[locale]}</p>
            {notice?.fare && <p className="about-text">{notice.fare} <a href={notice.source}>{t.source}</a></p>}
          </section>
          <section>
            <h2 className="section-title">{t.transport}</h2>
            <p className="about-text">{place.transport[locale]}</p>
            <p><a href={metroUrl}>Metrovía</a> · <a href={map}>{t.map}</a></p>
          </section>
          <section>
            <h2 className="section-title">{visitLabels.discover[locale]}</h2>
            <p className="about-text">{discovery}</p>
            {place.slug === "biblioteca-artes" && notice && <a href={notice.source}>{t.source}</a>}
          </section>
          <section>
            <h2 className="section-title">{t.route}</h2>
            <ol className="nearby-steps">
              <li><a href={map}>{visitLabels.access[locale]}</a> · <span lang="es">{place.address}</span></li>
              <li>{route}</li>
              <li>{lastStep}</li>
            </ol>
          </section>
          <section>
            <h2 className="section-title">{t.tips}</h2>
            <h3 className="info-card-title">{t.faq}</h3>
            <details className="info-card"><summary>{question}</summary><p>{answer}</p></details>
          </section>
          <section>
            <h2 className="section-title">{t.photo}</h2>
            <p className="about-text">{photoHint}</p>
            <figure className="nearby-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imagePath} alt={place.names[locale]} loading="lazy" />
              <figcaption className="info-card-note">
                {t.credit} · <a href={place.image.source}>{place.image.author} / Wikimedia Commons</a> · <a href={place.image.licenseUrl}>{place.image.license}</a>
              </figcaption>
            </figure>
          </section>
          <section>
            <h2 className="section-title">{t.lodging}</h2>
            <p className="about-text">{lodging}</p>
            {lodging !== t.lodgingText && <p className="about-text">{t.lodgingText}</p>}
          </section>
          <section id="reviews">
            <h2 className="section-title">{t.reviews}</h2>
            <p className="about-text">{t.reviewsNote}</p>
            <a className="maps-link" href={map}>{t.rating}</a>
          </section>
          <section>
            <h2 className="section-title">{visitLabels.directions[locale]}</h2>
            <p className="about-text" lang="es">{place.address}</p>
            <p><a href={directions}>{visitLabels.directionsLink[locale]}</a> · <a href={map}>{t.map}</a></p>
          </section>
          <section>
            <h2 className="section-title">{t.more}</h2>
            <ul className="info-grid nearby-list">
              {related.map((item) => (
                <li className="info-card" key={item.slug}><Link href={nearbyPath(locale, item.slug)}>{item.names[locale]}</Link></li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="site-footer"><Link href={`/${locale}#nearby`}>{t.nearby}</Link></footer>
    </>
  );
}
