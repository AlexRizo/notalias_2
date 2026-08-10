// ─── Language-neutral shared data ────────────────────────────────────────────

const projectItems = [
  {
    name: "Bubelle",
    slug: "bubelle",
    description: "Brand Strategy · Brand Identity · Creative Direction",
    video_path: "/assets/videos/bubelle.mp4",
  },
  {
    name: "Flor y Fruto",
    slug: "flor-y-fruto",
    description: "Brand Strategy · Naming · Brand Identity · Packaging",
    video_path: "/assets/videos/flor-y-fruto.mp4",
  },
  {
    name: "Centinela Eterno",
    slug: "eterno-centinela",
    description: "Brand Strategy · Brand Identity · Creative Direction",
    video_path: "/assets/videos/centinela-eterno.mp4",
  },
  {
    name: "Nonstop",
    slug: "nonstop",
    description: "Brand Strategy · Brand Identity · Packaging",
    video_path: "/assets/videos/nonstop.mp4",
  },
  {
    name: "Tan Tan",
    slug: "tantan",
    description: "Brand Strategy · Brand Identity · Naming · Creative Direction",
    video_path: "/assets/img/interiors/tantan/media-03.mp4",
  },
  {
    name: "Amídemi",
    slug: "amidemi",
    description: "Brand Strategy · Brand Identity · Visual Identity · Creative Direction",
    video_path: "/assets/img/interiors/amidemi/media-01.mp4",
  },
  {
    name: "Swappp",
    slug: "swappp",
    description: "Rebranding · Visual Identity · Packaging Design",
    video_path: "/assets/videos/swappp.mp4",
  },
  {
    name: "Blissify",
    slug: "blissify",
    description: "Brand Identity",
    video_path: "/assets/img/interiors/blissify/media-01.mp4",
  },
  {
    name: "Ratito",
    slug: "ratito",
    description: "Brand Strategy · Brand Identity · Naming",
    video_path: "/assets/img/interiors/ratito/media-01.mp4",
  },
];

const buildProjects = (lang: "es" | "en") =>
  projectItems.map(({ slug, ...rest }) => ({
    ...rest,
    url: lang === "en" ? `/en/${slug}` : `/${slug}`,
  }));

export const projects = {
  en: { pages: 4, items: buildProjects("en") },
  es: { pages: 4, items: buildProjects("es") },
};

const sharedServices = {
  title: ["We build", "brand systems.", "for those raising the standard"],
  videoPath: "/assets/videos/ssd.mp4",
  services: "Services",
  items: [
    "Brand Strategy",
    "Brand Identity",
    "Brand Execution",
    "Digital Experience",
  ],
};

const sharedFooterSocial = {
  title: "Social",
  instagram: { label: "Instagram", url: "" },
  linkedin: { label: "LinkedIn", url: "" },
};

const sharedFooterLocations = {
  guadalajara: {
    title: "Guadalajara",
    address: "Av. de las Américas 1930, Country Club, 44668 Guadalajara, Jal.",
  },
  madrid: {
    title: "Madrid",
    address: "C. de Manuela Malasaña, 21, Centro, 28004 Madrid, España",
  },
};

const sharedTeam = {
  title: "OUR LEADERS",
  slides: [
    {
      name: "Marco Leyva",
      role: "Co-founder & Creative Director",
      image_path: "/assets/img/about/team/marco_leyva.webp",
    },
    {
      name: "Miguel de la Madrid",
      role: "Co-founder & Business Director",
      image_path: "/assets/img/about/team/miguel_de_la_madrid.webp",
    },
    {
      name: "Brando Rosales",
      role: "Chief Growth Officer & Partner",
      image_path: "/assets/img/about/team/brando_rosales.webp",
    },
    {
      name: "Ed Carrasco",
      role: "Strategy Director",
      image_path: "/assets/img/about/team/ed_carrasco.webp",
    },
  ],
};

// icon and media_path are the same for every slide in both languages
const slideMedia = {
  icon: "/assets/icons/about/brand-identity.svg",
  media_path: "/assets/videos/about_character.mp4",
};

const howWorkImagePaths = [
  "/assets/img/about/about-immersion.webp",
  "/assets/img/about/about-diagnosis.webp",
  "/assets/img/about/about-creation.webp",
  "/assets/img/about/about-delivery.webp",
];

const sharedWhyNotalias = {
  title: ["Why", "Not Alias?"],
  locations: "Guadalajara - Madrid",
};

const servicesPageTitle = "Where strategy meets craft";
const ourServicesTitle = "Our work services";

const blogMedia = [
  { url: "#", image: "/assets/img/home/erewhon.webp" },
  { url: "#", image: "/assets/img/home/human_intelligence_first.webp" },
  { url: "#", image: "/assets/img/home/currently_listening.webp" },
];

// ─── Translations ─────────────────────────────────────────────────────────────

export const translations = {
  es: {
    nav: {
      work: "Proyectos",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      switcher: "ES | EN",
    },
    menu: "Menú",
    home: {
      main_title: ["The strategic creative", "partner", "your brand needs."],
      description:
        "®Not Alias es un estudio creativo boutique que cuenta con talento internacional, una visión estratégica sólida y la maestría en el diseño necesaria para crear marcas que no pasan desapercibidas.",
    },
    selected_work: {
      title: "Proyectos Recientes",
      work_page_title: "Proyectos Destacados",
      project_button: "Ver más",
      projects: projects.es.items,
      contact: {
        title: "La próxima podría ser tu marca",
        contact_us: "Contáctanos",
      },
    },
    services: sharedServices,
    blog: {
      title: "Not a Journal",
      entries: [
        {
          title: "Built for Erewhon",
          description:
            "Desarrollamos el sistema de marca completo para un nuevo producto que lanzará exclusivamente en Erewhon este año. Pronto más.",
          open_label: "VER MÁS",
          ...blogMedia[0],
        },
        {
          title: "Human intelligence first",
          description:
            "La AI es una herramienta. Las decisiones que definen una marca siguen siendo humanas. Esa es nuestra apuesta.",
          open_label: "VER MÁS",
          ...blogMedia[1],
        },
        {
          title: "Current listening",
          description:
            "Tetragramaton de Rick Rubin — conversaciones sobre creatividad, oficio y proceso que mantienen nuestro pensamiento afilado.",
          open_label: "VER MÁS",
          ...blogMedia[2],
        },
      ],
    },
    contact: {
      title: "Todo gran proyecto comienza con una conversación ",
      contact_us: "Contáctanos",
    },
    footer: {
      contact_us: {
        title: "Contacto",
        texts: [
          "Nuevos proyectos:",
          "hello@notalias.com",
          "Llámanos / WhatsApp: +52 312 144 7976",
        ],
      },
      social: sharedFooterSocial,
      ...sharedFooterLocations,
      menu: {
        label: "Menú",
        home: { label: "Inicio", url: "/" },
        work: { label: "Proyectos", url: "/proyectos" },
        services: { label: "Servicios", url: "/servicios" },
        about: { label: "Nosotros", url: "/nosotros" },
        contact: { label: "Contacto", url: "/contacto" },
      },
      // los_angeles: {
      //   title: "Los Angeles",
      //   address: ["Not Alias LA", "Address TBD", "Los Angeles, CA"],
      //   phone: "+1 XXX XXX XXXX",
      // },
      copyright: [
        "Todos los contenidos son propiedad de Not Alias",
        "year",
        " / Aviso de Privacidad",
      ],
    },
    services_page: {
      hero_title: "SERVICIOS",
      title: servicesPageTitle,
      description:
        "Combinamos entendimiento cultural, pensamiento crítico y talento creativo de clase mundial para construir sistemas de marca que funcionan en cualquier mercado y plataforma. Del naming al packaging, del posicionamiento a la experiencia digital — cada decisión es intencional, cada detalle se gana.",
      our_services: {
        title: ourServicesTitle,
        description:
          "Nuestro trabajo se categoriza en cuatro pilares. Cada uno es independiente, pero están diseñados para construirse entre sí — la estrategia informa la identidad, la identidad define la ejecución, la ejecución se extiende a lo digital.",
        items: [
          {
            name: "Estrategia de Marca",
            subtitle: "El pensamiento antes del diseño.",
            description:
              "Definimos lo que tu marca necesita decir, a quién y por qué importa — antes de que alguien abra un archivo de diseño. Investigación, contexto cultural, posicionamiento y claridad competitiva. La base que hace sólida cada decisión creativa.",
            list: [
              "Brand DNA & Positioning",
              "Research & Benchmarking",
              "Cultural Strategy",
              "Naming & Brand Architecture",
              "Go-to-Market Strategy",
              "Strategic Workshops",
            ],
          },
          {
            name: "Identidad de Marca",
            subtitle: "Donde la estrategia se vuelve visible.",
            description:
              "La estrategia se convierte en sistema: lenguaje visual, tono verbal, dirección creativa y un conjunto de reglas que mantienen la marca coherente en cada punto de contacto. No es un logo — es una identidad completa, construida para adaptarse y escalar.",
            list: [
              "Visual Identity System",
              "Naming & Verbal Identity",
              "Creative & Art Direction",
              "Rebranding",
              "Brand Guidelines",
            ],
          },
          {
            name: "Ejecución de Marca",
            subtitle: "Los activos que dan vida a tu marca.",
            description:
              "La identidad sale de la pantalla y entra al mundo real. Packaging, campañas, materiales de lanzamiento, piezas editoriales — cada activo diseñado para construir reconocimiento y consistencia donde cuenta.",
            list: [
              "Packaging Design",
              "Key Visual & Campaign Concept",
              "Brand Launch Kit",
              "Brand Applications",
              "Merch Design",
              "Editorial Design",
            ],
          },
          {
            name: "Experiencia Digital",
            subtitle: "Tu marca, online.",
            description:
              "Diseñamos y construimos la capa digital del sistema de marca: sitios web, ecommerce y activos digitales que trabajan tan duro como la marca lo hace offline. Alineados con la estrategia, construidos para rendir.",
            list: [
              "UX/UI Design",
              "Web Development",
              "E-commerce",
              "Digital Brand Systems",
            ],
          },
        ],
      },
      contact: {
        title: "Descubramos juntos lo que tu marca necesita",
        contact_us: "Contáctanos",
      },
    },
    about_page: {
      hero: {
        title: "Qué creemos",
        description: [
          "La creatividad es lo más humano que existe. En un mundo que corre por automatizarlo todo, nosotros elegimos sentir, cuestionar, crear.",
          "Cada marca que construimos es prueba de que el pensamiento humano sigue importando.",
        ],
      },
      slide: {
        slides: [
          {
            title: "Human intelligence first",
            description:
              "La AI amplifica, pero no reemplaza. Las decisiones que definen una marca nacen de la sensibilidad humana — intuición, empatía, lectura cultural, criterio creativo.",
            media_path: "/assets/videos/about/carrousel-01.webm",
            icon: "/assets/videos/about/blue-brain.svg"
          },
          {
            title: "Better questions, better brands",
            description:
              "La calidad del resultado depende de la calidad del entendimiento. Invertimos en hacer las preguntas correctas antes de empezar a diseñar.",
            media_path: "/assets/videos/about/carrousel-02.webm",
            icon: "/assets/videos/about/mount.svg"
          },
          {
            title: "Culture is the brief",
            description:
              "Toda marca vive dentro de un contexto cultural. Los códigos, comportamientos y tensiones de ese contexto son la verdadera materia prima de la estrategia.",
            media_path: "/assets/videos/about/carrousel-03.webm",
            icon: "/assets/videos/about/sun.svg"
          },
          {
            title: "Brands are systems, not logos",
            description:
              "Una marca que funciona es un sistema conectado — visual, verbal, estratégico, digital — donde cada detalle es coherente y cada decisión es intencional.",
            media_path: "/assets/videos/about/carrousel-04.webm",
            icon: "/assets/videos/about/jellyfish.svg"
          },
        ],
      },
      how_work: {
        title: "How we work",
        modes: [
          {
            name: "Immersion",
            description:
              "Escuchamos antes de liderar. Inmersión profunda en el negocio, mercado, audiencia y ambición.",
            image_path: howWorkImagePaths[0],
          },
          {
            name: "Diagnosis",
            description:
              "Sintetizamos todo en una foto clara: dónde estás, hacia dónde necesitas ir y qué hay en el camino.",
            image_path: howWorkImagePaths[1],
          },
          {
            name: "Creation",
            description:
              "La estrategia toma forma. Conceptos, sistemas visuales, identidad verbal — sprints enfocados, retroalimentación ágil.",
            image_path: howWorkImagePaths[2],
          },
          {
            name: "Delivery",
            description:
              "Todo lo que tu equipo necesita para ejecutar: lineamientos, activos, creative books. Listo desde el día uno.",
            image_path: howWorkImagePaths[3],
          },
        ],
      },
      team: sharedTeam,
      why_notalias: {
        ...sharedWhyNotalias,
        items: [
          {
            title: "Estrategia y diseño bajo un mismo techo.",
            description: "Sin intermediarios, sin traspasos entre firmas.",
          },
          {
            title: "Atención boutique, estándares globales.",
            description:
              "Lo suficientemente cercanos para cuidar cada detalle. Con la experiencia para competir con cualquiera.",
          },
          {
            title: "Fluidez cultural.",
            description: "Leemos códigos culturales, no solo datos de mercado.",
          },
          {
            title: "Sistemas, no entregables.",
            description:
              "Te entregamos un sistema que tu equipo puede operar desde el día uno.",
          },
          {
            title: "Nuestros clientes se descubren en el proceso.",
            description: '"Nos ayudaron a entender nuestra propia marca."',
          },
        ],
      },
      work_together: {
        title: "Trabajemos juntos",
        contact_us: "Contáctanos",
      },
    },
    contact_page: {
      title: "Construyamos algo imposible de ignorar",
      description: "Cuéntanos sobre tu proyecto.",
      form: {
        name_field: {
          label: "Nombre*",
          placeholder: "Tu nombre",
        },
        phone_field: {
          label: "Teléfono / WhatsApp*",
          placeholder: "12 3456 7890",
        },
        email_field: {
          label: "Email de trabajo*",
          placeholder: "tu@empresa.com",
        },
        business_field: {
          label: "Nombre de tu empresa*",
          placeholder: "Tu empresa",
        },
        description_field: {
          label: "¿Cómo podemos ayudarte?*",
          placeholder:
            "Cuéntanos sobre tu proyecto, presupuesto, reto, idea, etc.",
        },
        button: "Enviar",
      },
      contact_data: {
        title: "Contáctanos directamente",
        items: [
          {
            label: "Email",
            value: "hello@notalias.com",
            copy: "Copiar",
          },
          {
            label: "Llámanos / WhatsApp",
            value: "+523121447976",
            copy: "Copiar",
          },
          {
            label: "Encuéntranos",
            value:
              "Av. de las Américas 1930, Country Club, 44668 Guadalajara, Jal",
            copy: "Copiar",
          },
        ],
      },
      form_modal: {
        title: "Estaremos en contacto",
        description:
          "Revisamos cada mensaje personalmente. Espera noticias nuestras en menos de 48 horas.",
      },
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
      title: "Recent Work",
      work_page_title: "Selected Work",
      project_button: "See more",
      projects: projects.en.items,
      contact: {
        title: "This could be your brand next",
        contact_us: "Contact us",
      },
    },
    services: sharedServices,
    blog: {
      title: "Not a journal",
      entries: [
        {
          title: "Built for Erewhon",
          description:
            "We developed the full brand system for a new product launching exclusively at Erewhon this year. More soon.",
          open_label: "OPEN LINK",
          ...blogMedia[0],
        },
        {
          title: "Human intelligence first",
          description:
            "AI is a tool. The real decisions — the ones that shape a brand — still come from people. That's our bet.",
          open_label: "OPEN LINK",
          ...blogMedia[1],
        },
        {
          title: "Current listening",
          description:
            "Tetragramaton by Rick Rubin — conversations on creativity, craft and process that keep our thinking sharp.",
          open_label: "OPEN LINK",
          ...blogMedia[2],
        },
      ],
    },
    contact: {
      title: "Every great project starts with a conversation",
      contact_us: "Contact Us",
    },
    footer: {
      contact_us: {
        title: "Contact Us",
        texts: [
          "New business inquiries:",
          "hello@notalias.com",
          "Call us / WhatsApp: +52 312 144 7976",
        ],
      },
      social: sharedFooterSocial,
      ...sharedFooterLocations,
      menu: {
        label: "Menu",
        home: { label: "Home", url: "/en" },
        work: { label: "Work", url: "/en/work" },
        services: { label: "Services", url: "/en/services" },
        about: { label: "About", url: "/en/about" },
        contact: { label: "Contact", url: "/en/contact" },
      },
      // los_angeles: {
      //   title: "Los Angeles",
      //   address: ["Not Alias LA", "Address TBD", "Los Angeles, CA"],
      //   phone: "+1 XXX XXX XXXX",
      // },
      copyright: [
        "All contents copyright Not Alias ",
        "year",
        " Privacy Policy",
      ],
    },
    services_page: {
      hero_title: "SERVICES",
      title: servicesPageTitle,
      description:
        "We bring cultural understanding, critical thinking, and world-class creative talent to build brand systems that perform across markets and platforms. From naming to packaging, from positioning to digital experience — every decision is intentional, every detail is earned.",
      our_services: {
        title: ourServicesTitle,
        description:
          "Our work is organized around four disciplines. Each one is independent, but they're designed to build on each other — strategy informs identity, identity defines execution, execution extends into digital.",
        items: [
          {
            name: "Brand Strategy",
            subtitle: "The thinking before the design.",
            description:
              "We define what the brand needs to say, to whom, and why it matters — before anyone opens a design file. Research, cultural context, positioning, and competitive clarity. The foundation that makes every creative decision solid.",
            list: [
              "Brand DNA & Positioning",
              "Research & Benchmarking",
              "Cultural Strategy",
              "Naming & Brand Architecture",
              "Go-to-Market Strategy",
              "Strategic Workshops",
            ],
          },
          {
            name: "Brand Identity",
            subtitle: "Where strategy becomes visible.",
            description:
              "Strategy becomes a system: visual language, verbal tone, creative direction, and a set of rules that keep the brand coherent across every touchpoint. Not a logo — a complete identity built to adapt and scale.",
            list: [
              "Visual Identity System",
              "Naming & Verbal Identity",
              "Creative & Art Direction",
              "Rebranding",
              "Brand Guidelines",
            ],
          },
          {
            name: "Brand Execution",
            subtitle: "The assets that bring your brand to life.",
            description:
              "The identity leaves the screen and enters the real world. Packaging, campaigns, launch materials, editorial pieces — every asset designed to build recognition and consistency where it counts.",
            list: [
              "Packaging Design",
              "Key Visual & Campaign Concept",
              "Brand Launch Kit",
              "Brand Applications",
              "Merch Design",
              "Editorial Design",
            ],
          },
          {
            name: "Digital Experience",
            subtitle: "Your brand, online.",
            description:
              "We design and build the digital layer of the brand system: websites, ecommerce, and digital assets that work as hard as the brand does offline. Aligned with strategy, built for performance.",
            list: [
              "UX/UI Design",
              "Web Development",
              "E-commerce",
              "Digital brand Systems",
            ],
          },
        ],
      },
      contact: {
        title: "Let's figure out what your brand needs",
        contact_us: "Contact Us",
      },
    },
    about_page: {
      hero: {
        title: "What we believe",
        description: [
          "Creativity is the most human thing there is. In a world racing to automate everything, we choose to feel, to question, to craft.",
          "Every brand we build is proof that human thinking still matters.",
        ],
      },
      slide: {
        slides: [
          {
            title: "Human intelligence first",
            description:
              "AI amplifies, but doesn't replace. The decisions that shape a brand come from human sensitivity — intuition, empathy, cultural reading, creative judgment.",
            media_path: "/assets/videos/about/carrousel-01.webm",
            icon: "/assets/videos/about/blue-brain.svg"
          },
          {
            title: "Better questions, better brands",
            description:
              "The quality of the outcome depends on the quality of the understanding. We invest in asking the right questions before we start designing.",
            media_path: "/assets/videos/about/carrousel-02.webm",
            icon: "/assets/videos/about/mount.svg"
          },
          {
            title: "Culture is the brief",
            description:
              "Every brand lives inside a cultural context. The codes, behaviors, and tensions of that context are the real raw material for strategy.",
            media_path: "/assets/videos/about/carrousel-03.webm",
            icon: "/assets/videos/about/sun.svg"
          },
          {
            title: "Brands are systems, not logos",
            description:
              "A brand that works is a connected system — visual, verbal, strategic, digital — where every detail is coherent and every decision is intentional.",
            media_path: "/assets/videos/about/carrousel-04.mp4",
            icon: "/assets/videos/about/jellyfish.svg"
          },
        ],
      },
      how_work: {
        title: "How we work",
        modes: [
          {
            name: "Immersion",
            description:
              "We listen before we lead. Deep dive into business, market, audience, ambition.",
            image_path: howWorkImagePaths[0],
          },
          {
            name: "Diagnosis",
            description:
              "We synthesize into a clear picture: where you are, where you need to go, what's in the way.",
            image_path: howWorkImagePaths[1],
          },
          {
            name: "Creation",
            description:
              "Strategy becomes form. Concepts, visual systems, verbal identity — focused sprints, tight feedback.",
            image_path: howWorkImagePaths[2],
          },
          {
            name: "Delivery",
            description:
              "Everything your team needs to execute: guidelines, assets, creative books. Ready from day one.",
            image_path: howWorkImagePaths[3],
          },
        ],
      },
      team: sharedTeam,
      why_notalias: {
        ...sharedWhyNotalias,
        items: [
          {
            title: "Strategy and design under one roof.",
            description: "No handoffs between firms.",
          },
          {
            title: "Boutique attention, global standards.",
            description: "Small enough to care, experienced enough to thrive.",
          },
          {
            title: "Culturally fluent",
            description: "We read cultural codes, not just market data.",
          },
          {
            title: "Systems, not deliverables.",
            description: "We hand you a system your team can run with.",
          },
          {
            title: "Clients discover themselves through our process.",
            description: '"You helped us understand our own brand."',
          },
        ],
      },
      work_together: {
        title: "Let's work together",
        contact_us: "Contact Us",
      },
    },
    contact_page: {
      title: "Let's build something they can't ignore",
      description: "Tell us what you're working on.",
      form: {
        name_field: {
          label: "Name*",
          placeholder: "Your name",
        },
        phone_field: {
          label: "Phone / WhatsApp*",
          placeholder: "12 3456 7890",
        },
        email_field: {
          label: "Work email*",
          placeholder: "your@company.com",
        },
        business_field: {
          label: "Business name*",
          placeholder: "Your business name",
        },
        description_field: {
          label: "How Can We Help?*",
          placeholder:
            "Tell us about your project, budget, challenge, idea, etc.",
        },
        button: "Submit",
      },
      contact_data: {
        title: "Contact us directly",
        items: [
          {
            label: "Email",
            value: "hello@notalias.com",
            copy: "Copy",
          },
          {
            label: "Call / WhatsApp",
            value: "+523121447976",
            copy: "Copy",
          },
          {
            label: "Find us",
            value:
              "Av. de las Américas 1930, Country Club, 44668 Guadalajara, Jal",
            copy: "Copy",
          },
        ],
      },
      form_modal: {
        title: "We'll Be In Touch",
        description:
          "We Review Every Inquiry Personally. Expect To Hear From Us Within 48 Hours.",
      },
    },
  },
};

export type Lang = keyof typeof translations;
export type UI = (typeof translations)[Lang];
