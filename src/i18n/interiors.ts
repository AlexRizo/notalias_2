interface Attributes {
  label: string;
  value: string[];
}

interface Article {
  title: string;
  description: string[];
}

interface Section {
  media_paths: string[];
  article?: Article;
}

interface Interior {
  title: string;
  hero_path: string;
  description: string;
  attributes: Attributes[];
  sections: Section[];
}

interface Interiors {
  es: Interior;
  en: Interior;
}

export const interiors: Interiors = {
  es: {
    title: "Eterno Centinela",
    hero_path: "/assets/img/interiors/eterno-centinela/media-01.webp",
    description:
      "Hacer que una nueva generación eligiera un legado de 120 años.",
    attributes: [
      {
        label: "Client",
        value: ["Eterno Centinela"],
      },
      {
        label: "Services",
        value: ["Brand Strategy", "Brand Identity", "Creative Design"],
      },
      {
        label: "Industry",
        value: ["Wine & Spirits"],
      },
    ],
    sections: [
      {
        media_paths: ["/assets/img/interiors/eterno-centinela/media-02.webp"],
        article: {
          title: "Context",
          description: [
            "Tequila Centinela tiene 120 años de historia. Eterno es su entrada al cristalino — la categoría que hoy define el crecimiento del tequila premium. El mercado estaba saturado de marcas gritando legado, tradición y herencia. Pero la generación que hoy impulsa el consumo ya no compraba discursos de historia — pedía significado, presencia, pertenencia a un momento.",
          ],
        },
      },
      {
        media_paths: [
          "/assets/img/interiors/eterno-centinela/media-03.mp4",
          "/assets/img/interiors/eterno-centinela/media-04.webp",
        ],
        article: {
          title: "Challenge",
          description: [
            "La marca existía pero con presencia mínima y sin una identidad que levantara la mano en premium. El reto no era contar la historia otra vez — era encontrar el territorio donde pudiera vivir hoy, sin disfrazarse de juventud ni renunciar a lo que ya era.",
          ],
        },
      },
      {
        media_paths: ["/assets/img/interiors/eterno-centinela/media-05.webp"],
        article: {
          title: "The Work",
          description: [
            'Ese territorio era la noche. Leímos el high energy y la nightlife no como canal de activación, sino como el lugar donde Eterno tenía que existir culturalmente. De ahí nació "SOMOS TIEMPO" — un concepto que ancla el peso del legado en la energía del ahora, en el momento, en la cultura nocturna.',

            "El sistema visual se construyó desde el entorno, no desde la botella. Cristales, metal, luz. El rojo como pulso. Un lenguaje que no describe la noche — la habita. Todo materializado en un Creative Book ejecutable desde el día uno.",
          ],
        },
      },
      {
        media_paths: [
          "/assets/img/interiors/eterno-centinela/media-06.webp",
          "/assets/img/interiors/eterno-centinela/media-07.webp",
        ],
      },
    ],
  },
  en: {
    title: "Eterno Centinela",
    hero_path: "/assets/img/interiors/eterno-centinela/media-01.webp",
    description:
      "Hacer que una nueva generación eligiera un legado de 120 años.",
    attributes: [
      {
        label: "Client",
        value: ["Eterno Centinela"],
      },
      {
        label: "Services",
        value: ["Brand Strategy", "Brand Identity", "Creative Design"],
      },
      {
        label: "Industry",
        value: ["Wine & Spirits"],
      },
    ],
    sections: [
      {
        media_paths: ["/assets/img/interiors/eterno-centinela/media-02.webp"],
        article: {
          title: "Context",
          description: [
            "Tequila Centinela tiene 120 años de historia. Eterno es su entrada al cristalino — la categoría que hoy define el crecimiento del tequila premium. El mercado estaba saturado de marcas gritando legado, tradición y herencia. Pero la generación que hoy impulsa el consumo ya no compraba discursos de historia — pedía significado, presencia, pertenencia a un momento.",
          ],
        },
      },
      {
        media_paths: [
          "/assets/img/interiors/eterno-centinela/media-03.mp4",
          "/assets/img/interiors/eterno-centinela/media-04.webp",
        ],
        article: {
          title: "Challenge",
          description: [
            "La marca existía pero con presencia mínima y sin una identidad que levantara la mano en premium. El reto no era contar la historia otra vez — era encontrar el territorio donde pudiera vivir hoy, sin disfrazarse de juventud ni renunciar a lo que ya era.",
          ],
        },
      },
      {
        media_paths: ["/assets/img/interiors/eterno-centinela/media-05.webp"],
        article: {
          title: "The Work",
          description: [
            'Ese territorio era la noche. Leímos el high energy y la nightlife no como canal de activación, sino como el lugar donde Eterno tenía que existir culturalmente. De ahí nació "SOMOS TIEMPO" — un concepto que ancla el peso del legado en la energía del ahora, en el momento, en la cultura nocturna.',

            "El sistema visual se construyó desde el entorno, no desde la botella. Cristales, metal, luz. El rojo como pulso. Un lenguaje que no describe la noche — la habita. Todo materializado en un Creative Book ejecutable desde el día uno.",
          ],
        },
      },
      {
        media_paths: [
          "/assets/img/interiors/eterno-centinela/media-06.webp",
          "/assets/img/interiors/eterno-centinela/media-07.webp",
        ],
      },
    ],
  },
};
