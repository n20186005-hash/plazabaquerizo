import Link from "next/link";
import type { Locale } from "@/i18n/translations";
import { nearbyLabels, nearbyPath, nearbyPlaces } from "@/content/nearby";

export function NearbyPlaces({ locale }: { locale: Locale }) {
  const labels = nearbyLabels[locale];
  return (
    <section id="nearby" className="section">
      <h2 className="section-title">{labels.nearby}</h2>
      <div className="section-divider" />
      <p className="about-text">{labels.nearbyIntro}</p>
      <ul className="info-grid nearby-list">
        {nearbyPlaces.map((place) => (
          <li key={place.slug} className="info-card">
            <Link href={nearbyPath(locale, place.slug)} prefetch={false}>
              <h3 className="info-card-title">{place.names[locale]}</h3>
              <span className="info-card-content">{labels.details} →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
