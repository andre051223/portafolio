"use client";

import { useLanguage } from "@/lib/i18n";

/** Switch ES/EN para cambiar el idioma de la página. */
export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={lang === "en"}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className={`inline-flex items-center rounded-lg border border-gray-medium bg-bg-secondary p-1 font-mono text-xs ${className}`}
    >
      <span
        className={`rounded-md px-2.5 py-1.5 transition-colors ${
          lang === "es"
            ? "bg-accent font-semibold text-text-white"
            : "text-gray-text"
        }`}
      >
        ES
      </span>
      <span
        className={`rounded-md px-2.5 py-1.5 transition-colors ${
          lang === "en"
            ? "bg-accent font-semibold text-text-white"
            : "text-gray-text"
        }`}
      >
        EN
      </span>
    </button>
  );
}
