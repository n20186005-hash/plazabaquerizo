"use client";

import { useSyncExternalStore, useState } from "react";
import { legalCopy } from "@/i18n/legal";
import type { Locale } from "@/i18n/translations";

const storageKey = "baq-cookie-preferences";
const defaults = "1010";
const subscribe = () => () => {};

function storedPreferences() {
  try {
    const value = localStorage.getItem(storageKey);
    return value && /^1[01]{3}$/.test(value) ? value : defaults;
  } catch {
    return defaults;
  }
}

export default function CookieSettings({ locale }: { locale: Locale }) {
  const copy = legalCopy[locale].cookies;
  const stored = useSyncExternalStore(subscribe, storedPreferences, () => defaults);
  const [draft, setDraft] = useState<string>();
  const [message, setMessage] = useState<"saved" | "unavailable">();
  const preferences = draft ?? stored;

  function save(value: string) {
    try {
      localStorage.setItem(storageKey, value);
      setDraft(value);
      setMessage("saved");
    } catch {
      setMessage("unavailable");
    }
  }

  return (
    <>
      <p className="about-text">{copy.intro}</p>
      {copy.categories.map(([name, description], index) => (
        <section className="info-card" key={name}>
          <h2 className="info-card-title">
            <label>
              <input type="checkbox" checked={preferences[index] === "1"} disabled={index === 0} onChange={(event) => {
                setDraft(preferences.slice(0, index) + (event.target.checked ? "1" : "0") + preferences.slice(index + 1));
                setMessage(undefined);
              }} /> {name}
            </label>
          </h2>
          <p className="about-text">{description}</p>
        </section>
      ))}
      <p className="about-text">{copy.notice}</p>
      <div className="legal-actions">
        <button type="button" className="google-maps-btn" onClick={() => save(preferences)}>{copy.save}</button>
        <button type="button" className="google-maps-btn" onClick={() => save("1000")}>{copy.reject}</button>
      </div>
      {message && <p className="about-text" role="status">{copy[message]}</p>}
    </>
  );
}
