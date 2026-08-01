import { translations, type Lang, type UI } from "./translations";

export const defaultLang: Lang = "es";
export const lenguages: Record<Lang, string> = { es: "Español", en: "English" };

export const getLangFromUrl = (url: URL): Lang => {
  const [, lang] = url.pathname.split("/");
  return (lang in translations ? lang : defaultLang) as Lang;
};

export const useTranslations = (lang: Lang): UI => {
  const t = translations[lang];
  return t as UI;
};

export const getLocalizedPath = (url: URL, targetLang: Lang): string => {
  const [, , ...rest] = url.pathname.split("/");
  return `/${targetLang}/${rest.join("/")}`;
};

// Slugs that differ between languages. Pages with a shared slug (interior /
// project pages) pass through unchanged.
const esToEnSlugs: Record<string, string> = {
  proyectos: "work",
  servicios: "services",
  nosotros: "about",
  contacto: "contact",
};
const enToEsSlugs: Record<string, string> = Object.fromEntries(
  Object.entries(esToEnSlugs).map(([es, en]) => [en, es]),
);

// Returns the current page's URL in the target language, keeping the user on
// the equivalent page instead of sending them back home.
export const getAlternateLangUrl = (url: URL, targetLang: Lang): string => {
  const currentLang = getLangFromUrl(url);
  if (currentLang === targetLang) return url.pathname;

  const segments = url.pathname.split("/").filter(Boolean);
  if (currentLang === "en") segments.shift(); // drop the "en" prefix

  const translated = segments.map((seg) =>
    targetLang === "en" ? (esToEnSlugs[seg] ?? seg) : (enToEsSlugs[seg] ?? seg),
  );

  const path = translated.join("/");
  const prefix = targetLang === "en" ? "/en" : "";
  return path ? `${prefix}/${path}` : prefix || "/";
};
