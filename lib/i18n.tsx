"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang, type SiteContent } from "./data";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Contenido del sitio en el idioma activo. */
  t: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Restaura el idioma guardado (localStorage) al montar
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  // Actualiza el atributo lang del documento
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Persiste solo cuando el usuario cambia el idioma; escribir en un efecto
  // sobrescribía el valor guardado con el inicial ("es") antes de restaurarlo.
  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}
