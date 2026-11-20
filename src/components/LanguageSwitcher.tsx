"use client";

import { uiText } from "@/i18n/ui";
import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const { locale } = useLang();
  return (
    <div className="lang-switcher" role="group" aria-label={uiText[locale].language}>
      {(["zh", "en", "es"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => {
            if (l !== locale) {
              window.location.href = `/${l}${window.location.hash}`;
            }
          }}
          lang={l}
          aria-current={locale === l ? "page" : undefined}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
