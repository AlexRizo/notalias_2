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
    blog: {
      title: "No es un diario",
      entries: [
        {
          title: "Construido para Erewhon",
          description:
            "Desarrollamos el sistema de marca completo para un nuevo producto que se lanza exclusivamente en Erewhon este año. Más pronto.",
          url: "#",
          image: "/assets/img/home/erewhon.png",
          open_label: "IR AL SITIO",
        },
        {
          title: "La inteligencia humana primero",
          description:
            "La inteligencia artificial es una herramienta. Las decisiones reales — las que dan forma a una marca — todavía vienen de las personas. Esa es nuestra apuesta.",
          url: "#",
          image: "/assets/img/home/human_intelligence_first.jpg",
          open_label: "IR AL SITIO",
        },
        {
          title: "Siempre escuchando",
          description:
            "Tetragramaton de Rick Rubin — conversaciones sobre creatividad, oficio y proceso que mantienen nuestra mente ágil.",
          url: "#",
          image: "/assets/img/home/currently_listening.png",
          open_label: "IR AL SITIO",
        },
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
    blog: {
      title: "Not a journal",
      entries: [
        {
          title: "Built for Erewhon",
          description:
            "We developed the full brand system for a new product launching exclusively at Erewhon this year. More soon.",
          url: "#",
          image: "/assets/img/home/erewhon.png",
          open_label: "OPEN LINK",
        },
        {
          title: "Human intelligence first",
          description:
            "AI is a tool. The real decisions — the ones that shape a brand — still come from people. That's our bet.",
          url: "#",
          image: "/assets/img/home/human_intelligence_first.jpg",
          open_label: "OPEN LINK",
        },
        {
          title: "Currently listening",
          description:
            "Tetragramaton by Rick Rubin — conversations on creativity, craft and process that keep our thinking sharp.",
          url: "#",
          image: "/assets/img/home/currently_listening.png",
          open_label: "OPEN LINK",
        },
      ],
    },
  },
};

export type Lang = keyof typeof translations;
export type UI = (typeof translations)[Lang];
