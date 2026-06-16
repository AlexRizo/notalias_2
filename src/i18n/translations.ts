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
    home: {
      main_title: [
        "El socio creativo",
        "estratégico",
        "que tu marca necesita.",
      ],
      description:
        "®Not Alias es un estudio creativo boutique con talento global, pensamiento estratégico agudo y el oficio de diseño para hacer que las marcas sean imposibles de ignorar.",
    },
    selected_work: {
      title: "Trabajos seleccionados",
    }
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
    home: {
      main_title: ["The strategic creative", "partner", "your brand needs."],
      description:
        "®Not Alias is a boutique creative studio with global talent, sharp strategic thinking, and the design craft to make brands impossible to ignore.",
    },
    selected_work: {
      title: "Selected Work",
    }
  },
};

export type Lang = keyof typeof translations;
export type UI = (typeof translations)[Lang];
