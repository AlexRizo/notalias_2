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
      project_button: "Ver más",
      projects: [
        {
          name: "Bubelle",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/bubelle.mp4",
        },
        {
          name: "Flor y fruto",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/flor-y-fruto.mp4",
        },
        {
          name: "Centinela Eterno",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/centinela-eterno.mp4",
        },
        {
          name: "Nonstop",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/nonstop.mp4",
        },
        {
          name: "Swappp",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/swappp.mp4",
        },
        {
          name: "Manna Foods",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/manna-foods.mp4",
        },
      ],
    },
    services: {
      title: [
        "Creamos",
        "sistemas de marca",
        "para los que están subiendo el estándar",
      ],
      videoPath: "/assets/videos/ssd.mp4",
      services: "Servicios",
      items: [
        "Estrategia de Marca",
        "Identidad de Marca",
        "Ejecución de Marca",
        "Experiencia Digital",
      ],
    },
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
      project_button: "See more",
      projects: [
        {
          name: "Bubelle",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/bubelle.mp4",
        },
        {
          name: "Flor y fruto",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/flor-y-fruto.mp4",
        },
        {
          name: "Centinela Eterno",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/centinela-eterno.mp4",
        },
        {
          name: "Nonstop",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/nonstop.mp4",
        },
        {
          name: "Swappp",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/swappp.mp4",
        },
        {
          name: "Manna Foods",
          description:
            "Brand Identity · Brand Execution (Packaging, Brand Applications)",
          url: "",
          video_path: "/assets/videos/manna-foods.mp4",
        },
      ],
    },
    services: {
      title: ["We build", "brand systems,", "for those raising the standard"],
      videoPath: "/assets/videos/ssd.mp4",
      services: "Services",
      items: [
        "Brand Strategy",
        "Brand Identity",
        "Brand Execution",
        "Digital Experience",
      ],
    },
  },
};

export type Lang = keyof typeof translations;
export type UI = (typeof translations)[Lang];
