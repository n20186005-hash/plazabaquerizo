import Link from "next/link";
import { legalDocuments, legalTitles } from "@/i18n/ui";
import type { Locale, Translations } from "@/i18n/translations";

export function SiteFooter({ footer, nearby, locale }: { locale: Locale; footer: Translations["footer"]; nearby?: { href: string; label: string } }) {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{footer.linksTitle}</p>
        <div className="footer-links-grid">
          {footer.links.map((link: { name: string; url: string }, i: number) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
          {nearby && <Link className="footer-link-item" href={nearby.href}>{nearby.label}</Link>}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        {legalDocuments.map((document) => (
          <Link key={document} href={`/${locale}/${document}`} className="footer-legal-link">
            {legalTitles[locale][document]}
          </Link>
        ))}
      </div>
      <p className="footer-text" style={{ marginTop: "2rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold)" }}>
        {footer.callToAction}
      </p>
      <p className="footer-text" style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{footer.text}</p>
    </footer>
  );
}
