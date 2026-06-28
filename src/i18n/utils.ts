import { interiors } from "./interiors";
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

export const useInteriorTranslations = (lang: Lang) => {
  const t = interiors[lang];
  return t;
};
