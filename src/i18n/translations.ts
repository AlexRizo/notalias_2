export const translations = {
  es: {
    nav: {
      work: "Trabajo",
      services: "Servicios",
      about: "Sobre",
      contact: "Contacto",
      switcher: "ES | EN",
    },
    menu: "Menú",
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Contact",
      switcher: "ES | EN",
    },
    menu: "Menu",
  },
};

export type Lang = keyof typeof translations;
export type UI = (typeof translations)[Lang];
