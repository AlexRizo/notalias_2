export interface Attributes {
  label: string;
  value: string[];
}

interface ProjectContent {
  description: string;
  context: string[];
  challenge: string[];
  the_work: string[];
}

interface InteriorProject {
  slug: string;
  attributes: Attributes[];
  es: ProjectContent;
  en: ProjectContent;
}

const projects: InteriorProject[] = [
  {
    slug: "eterno-centinela",
    attributes: [
      { label: "Client", value: ["Tequila Centinela", "Eterno Centinela"] },
      {
        label: "Services",
        value: ["Brand Strategy", "Brand Identity", "Creative Direction"],
      },
      { label: "Industry", value: ["Wine & Spirits"] },
    ],
    es: {
      description:
        "Hacer que una nueva generación eligiera un legado de 120 años.",
      context: [
        "Tequila Centinela tiene 120 años de historia. Eterno es su entrada al cristalino, la categoría que hoy define el crecimiento del tequila premium. El mercado estaba saturado de marcas gritando legado, tradición y herencia. Pero la generación que hoy impulsa el consumo ya no compraba discursos de historia, pedía significado, presencia, pertenencia a un momento.",
      ],
      challenge: [
        "La marca existía pero con presencia mínima y sin una identidad que levantara la mano en premium. El reto no era contar la historia otra vez — era encontrar el territorio donde pudiera vivir hoy, sin disfrazarse de juventud ni renunciar a lo que ya era.",
      ],
      the_work: [
        "Ese territorio era la noche. Leímos el high energy y la nightlife no como canal de activación, sino como el lugar donde Eterno tenía que existir culturalmente. De ahí nació \"SOMOS TIEMPO\", un concepto que ancla el peso del legado en la energía del ahora, en el momento, en la cultura nocturna.",
        "El sistema visual se construyó desde el entorno, no desde la botella. Cristales, metal, luz. El rojo como pulso. Un lenguaje que no describe la noche, la habita. Todo materializado en un Creative Book ejecutable desde el día uno.",
      ],
    },
    en: {
      description:
        "Repositioning a 120-year legacy for the generation redefining premium tequila.",
      context: [
        "Tequila Centinela carries over 120 years of heritage. Eterno marked the brand's entry into the Cristalino segment—a category driving the next wave of growth in premium tequila.",
        "The market was saturated with brands competing through the same narratives of legacy, tradition, and heritage. Yet the generation shaping today's premium spirits market was no longer persuaded by historical claims alone. They were looking for brands that created meaning, felt culturally relevant, and belonged in the moments that mattered.",
      ],
      challenge: [
        "While Eterno already existed, it lacked the presence and identity required to compete credibly in the premium space.",
        "The challenge wasn't to retell the brand's history—it was to redefine where that heritage could live today. The objective was to build a brand that felt contemporary without performing youthfulness, allowing Eterno to evolve while remaining authentic to its legacy.",
      ],
      the_work: [
        "We identified nightlife as the brand's cultural territory. Rather than treating high-energy occasions and nightlife as activation channels, we positioned them as the environment where Eterno could establish genuine cultural relevance. This insight led to \"WE ARE TIME\"—a strategic platform that connects the weight of a 120-year legacy with the energy of the present. A brand idea rooted in the value of the moment, designed to resonate within contemporary nightlife culture. The visual identity was built from the atmosphere surrounding the experience—not from the bottle itself. Crystal, metal, and light became the foundation of the system, while red emerged as the brand's pulse.",
        "The result is a visual language that doesn't merely represent the night—it belongs to it.",
        "Everything was consolidated into an execution-ready Creative Book, providing a cohesive brand system that could be deployed consistently from day one.",
      ],
    },
  },
  {
    slug: "flor-y-fruto",
    attributes: [
      { label: "Client", value: ["GRUPO AGR (Agrumex)", "Flor y Fruto"] },
      {
        label: "Services",
        value: ["Visual System", "Packaging", "Launch Kit"],
      },
      { label: "Industry", value: ["Agro-Industrial"] },
    ],
    es: {
      description:
        "Del campo a la botella: convertir quince años de agroindustria en una marca que el consumidor elige por nombre.",
      context: [
        "Grupo AGR lleva más de quince años operando en la industria citrícola mexicana. Campo, proceso, volumen, todo estaba ahí. Lo que no existía era la marca: un nombre, una identidad, una razón para que el consumidor final los eligiera sobre cualquier otra botella en el anaquel. El mercado de jugos de limón embotellados en México estaba dominado por marcas genéricas o productos con concentrado artificial.",
      ],
      challenge: [
        "El reto no era el producto, era el salto: pasar de proveedor anónimo de la cadena agroindustrial a marca de consumo con presencia en retail y HORECA. La marca tenía que comunicar el origen mexicano, Tecomán, el campo y el limonero, sin caer en lo folclórico.",
      ],
      the_work: [
        "El primer acto fue el naming. Antes de cualquier decisión visual, encontramos el nombre en el mismo árbol: el limonero es el único frutal que florece y fructifica de manera simultánea y continua. Flor y fruto conviven en la misma rama al mismo tiempo, un ciclo que no para, que no tiene estación. Ese insight no era botánico: era la metáfora exacta de lo que la marca necesitaba ser. \"Flor y Fruto\" no describe el producto, lo contextualiza: trae el campo adentro antes de que abras la botella. Desde ese núcleo se construyó el sistema completo, con un símbolo del limonero que une raíz y fruto en una sola unidad. El packaging fue diseñado para operar en ambos canales sin bifurcar la identidad: misma marca, misma voz, mismo símbolo, con lineamientos que permiten incorporar futuros productos sin perder el carácter.",
      ],
    },
    en: {
      description:
        "Transforming fifteen years of agricultural expertise into a consumer brand people choose by name.",
      context: [
        "Grupo AGR has operated in Mexico's citrus industry for more than fifteen years. The land, the process, the volume, all of it was already there. What didn't exist was the brand: a name, an identity, a reason for the end consumer to choose them over any other bottle on the shelf. The bottled lemon juice market in Mexico was dominated by generic brands or products made with artificial concentrate.",
      ],
      challenge: [
        "The challenge wasn't the product, it was the leap: moving from an anonymous supplier in the agro industrial chain to a consumer brand present in both retail and HORECA. The brand had to communicate its Mexican origin, Tecomán, the fields, the lemon tree, without falling into folklore.",
      ],
      the_work: [
        "The first move was naming. Before any visual decision, we found the name in the tree itself: the lemon tree is the only fruit tree that flowers and fruits at the same time, continuously. Flower and fruit live on the same branch together, a cycle that never stops, that has no season. That insight wasn't botanical, it was the exact metaphor the brand needed to become. \"Flor y Fruto\" doesn't describe the product, it contextualizes it: it brings the field inside before you even open the bottle. From that core we built the full system, anchored by a lemon tree symbol that unites root and fruit as a single form. The packaging was designed to work across both channels without splitting the identity: same brand, same voice, same symbol, with guidelines that allow future products to join without losing character.",
      ],
    },
  },
  {
    slug: "bubelle",
    attributes: [
      { label: "Client", value: ["Grupo AGR", "Bubelle"] },
      { label: "Services", value: ["Naming", "Brand Identity", "Packaging"] },
      { label: "Industry", value: ["Bevarages / Bebida sin alcohol"] },
    ],
    es: {
      description:
        "Bubelle: donde la burbuja se vuelve el momento en la mesa que no tiene prisa.",
      context: [
        "Las 12:00 del mediodía del domingo tienen un ritual propio. El brunch no es desayuno tardío ni almuerzo temprano es una pausa intencional, una excusa para juntarse, para que la mesa dure más de lo necesario. Y en ese momento, la Mimosa siempre tuvo un lugar reservado.",
        "El problema es que ese lugar lo ocupaba el alcohol. Quien no tomaba, se quedaba fuera del ritual: agua, refresco, jugo. Nada que estuviera a la altura del momento. Bubelle nació para cubrir ese espacio vacío: una bebida con la elegancia y la efervescencia de una Mimosa, sin el alcohol que la excluye de muchas mesas.",
      ],
      challenge: [
        "El reto era doble y contradictorio. Por un lado, Bubelle necesitaba evocar la Mimosa su textura, su ocasión, su aura sin copiarla ni depender de ella. Por otro lado, tenía que construir identidad propia desde cero en una categoría que en México prácticamente no existía: la bebida sin alcohol que se toma porque quiere tomarse, no porque no queda de otra.",
        'Nombrarla era el primer nudo. "Sin alcohol" como atributo siempre suena a resta, a lo que no tiene. El nombre tenía que traer lo que sí tiene: burbuja, belleza, ligereza, la belle époque. Bubelle resolvió eso en dos sílabas: bubble + belle. El producto y el mundo en el que vive, juntos en una sola palabra que suena francesa sin serlo y elegante sin esforzarse.',
      ],
      the_work: [
        "Construir Bubelle fue construir un mundo antes que un producto. La referencia no era ningún refresco ni ningún jugo era el Hotel Ritz de París. Donde se creó la mimosa, en ese mismo hotel por el barman Frank Meier, de ahí nos inspiramos en el entorno; sus fachadas, sus lámparas, su barra, como guiños en homenaje. Un lujo accesible, una elegancia sin pretensión. Las ilustraciones de elementos arquitectónicos que recorren el packaging no son decoración: son el territorio donde Bubelle existe.",
        "El isotipo resuelve la marca en una sola unidad: tipografía script con carácter propio, contenida en un marco que recuerda a las etiquetas de bebida europea clásica. La paleta parte del verde oscuro como base institucional seria, limpia y deja que el color de cada sabor entre como fondo de etiqueta: azul para la Clásica, rosa para Frambuesa, lila para Maracuyá. El verde permanece. El mundo cambia de ánimo según lo que hay dentro.",
        "El packaging opera en dos formatos desde el lanzamiento botella de vidrio con el mismo sistema gráfico sin forzarlo. La botella tiene presencia en mesa, en hielera, en foto. La botella tiene movilidad, inmediatez y anaquel. Juntas cubren todos los momentos del brunch: el que se sirve con calma y el que se agarra al vuelo.",
        "El nombre, el mundo y el sistema se diseñaron para que Bubelle no tenga que explicar qué es. Quien la ve, ya sabe en qué momento va.",
      ],
    },
    en: {
      description:
        "Reimagining the Mimosa ritual through a sophisticated alcohol-free brand made for brunch.",
      context: [
        "Sunday brunch has its own rhythm. It's neither a late breakfast nor an early lunch—it's an intentional pause, an occasion where conversations last longer and the table becomes the destination. Within that ritual, the Mimosa has always held a place of its own.",
        "The problem was that the experience revolved around alcohol. For those who chose not to drink, the alternatives were predictable: water, soda, or juice—none carrying the same sense of occasion. Bubelle was created to fill that gap: an alcohol-free sparkling beverage that delivers the elegance, freshness, and celebratory character of a Mimosa while making the ritual accessible to everyone.",
      ],
      challenge: [
        "The challenge was both strategic and paradoxical. Bubelle needed to evoke everything people associate with a Mimosa—its effervescence, sophistication, and social occasion—without imitating the cocktail or relying on it for meaning.",
        "At the same time, the brand had to establish its own identity within a category that was still largely undefined in Mexico: premium non-alcoholic beverages chosen because people genuinely want to drink them, not simply because they contain no alcohol.",
        'Naming became the first strategic challenge. "Alcohol-free" is often framed by what is missing. The brand needed a name that celebrated what was present instead: bubbles, beauty, lightness, and the effortless elegance associated with the Belle Époque.',
        "Bubelle brings those ideas together in a single word—combining bubble and belle to create a name that feels refined, memorable, and unmistakably premium.",
      ],
      the_work: [
        "Building Bubelle meant creating a world before creating a product. Our creative reference wasn't another soft drink or juice brand—it was the Ritz Paris, the birthplace of the Mimosa, first crafted there by legendary bartender Frank Meier. Rather than borrowing from the cocktail itself, we drew inspiration from its cultural setting: the hotel's architecture, lighting, and iconic bar became subtle visual references embedded throughout the brand.",
        "The result is a world defined by accessible luxury and understated elegance. Architectural illustrations woven throughout the packaging aren't decorative elements—they establish the cultural territory where Bubelle belongs.",
        "The logotype combines a custom script wordmark with a structured frame inspired by classic European beverage labels, balancing personality with timelessness. The color system is anchored by a deep institutional green, creating consistency across the portfolio while allowing each flavor to express its own identity through the label background: blue for Classic, pink for Raspberry, and lilac for Passion Fruit. The brand remains constant while each variant introduces its own mood.",
        "The packaging system was designed to scale seamlessly across multiple formats from launch while preserving a unified visual language. Every application reinforces the same premium brand experience, whether displayed on a brunch table, shared socially, or standing out on the shelf.",
        "Ultimately, the naming, identity, and packaging were designed to make Bubelle instantly intuitive. The brand doesn't need to explain what it is—the moment you see it, you understand exactly when it belongs.",
      ],
    },
  },
  {
    slug: "nonstop",
    attributes: [
      { label: "Client", value: ["Nonstop"] },
      {
        label: "Services",
        value: [
          "Brand DNA",
          "Visual System",
          "Packaging",
          "Digital Brand System",
        ],
      },
      { label: "Industry", value: ["Health & Performance / Consumer Goods"] },
    ],
    es: {
      description:
        "La primera marca de electrolitos en México diseñada para los que nunca paran.",
      context: [
        "Hay un perfil de persona en México que ya existe: entrena de lunes a lunes, cuida lo que come, busca rendir más y recuperarse mejor. Tiene entre 20 y 45 años, compra por convicción y no por precio, y cuando encuentra algo que se siente suyo, lo adopta como identidad. Esa persona no tenía una marca propia de electrolitos. Usaba lo que encontraba: importados caros, genéricos sin personalidad, o productos pensados para otro mercado. La categoría estaba vacante no por falta de producto, sino por falta de carácter e identidad.",
      ],
      challenge: [
        "El nombre lo decía todo desde el inicio: Nonstop. No es una descripción del producto, es una declaración de quien lo toma. El reto era que la identidad visual y verbal estuviera a la altura de ese nombre: directo, limpio y sin ruido, y que el sistema funcionara desde el primer día en packaging, digital, eventos y merchandising al mismo tiempo.",
      ],
      the_work: [
        "Empezamos por definir la narrativa de marca antes de tocar el diseño. Nonstop no es una marca de hidratación, es una afirmación silenciosa: \"For the non stop crowd\". Ese insight ordenó todas las decisiones: tono de voz directo y sin adornos, estética que elimina lo innecesario, un sistema construido sobre el negro y el blanco con un único acento de color por sabor. El símbolo nace de la letra N: dos formas orgánicas que representan movimiento continuo. Funciona solo o junto al logotipo, nunca combinado, una decisión deliberada para dar flexibilidad sin perder precisión. El packaging fue diseñado para ser transparente antes de bonito: ingredientes al frente, dosis claras, sin promesas vacías. El stick individual es el formato principal porque ese es el momento de la marca: antes del entreno, en la bolsa, en la mano.",
      ],
    },
    en: {
      description:
        "Building Mexico's first electrolyte brand designed for people who never slow down.",
      context: [
        "There's a profile of person in Mexico that already exists: trains every day of the week, watches what they eat, wants to perform better and recover faster. Between 20 and 45 years old, buys out of conviction rather than price, and once something feels like theirs, they wear it as identity. That person didn't have their own electrolyte brand. They used whatever they could find: expensive imports, generic products with no personality, or items built for another market. The category was empty, not for lack of product, but for lack of character and identity.",
      ],
      challenge: [
        "The name said it all from the start: Nonstop. It's not a description of the product, it's a statement from whoever takes it. The challenge was making the visual and verbal identity live up to that name: direct, clean, no noise, and ready to work from day one across packaging, digital, events, and merchandise at once.",
      ],
      the_work: [
        "We started by defining the brand narrative before touching the design. Nonstop isn't a hydration brand, it's a quiet statement: \"For the non stop crowd.\" That insight ordered every decision: a direct tone with no ornament, an aesthetic that strips away the unnecessary, a system built on black and white with a single color accent per flavor. The symbol comes from the letter N: two organic shapes that represent continuous movement. It works alone or alongside the logotype, never combined, a deliberate choice to allow flexibility without losing precision. The packaging was designed to be transparent before beautiful: ingredients up front, doses clear, no empty promises. The individual stick is the main format because that's the brand's real moment, before training, in the bag, in the hand.",
      ],
    },
  },
  {
    slug: "tantan",
    attributes: [
      { label: "Client", value: ["TAN TÁN"] },
      {
        label: "Services",
        value: ["Visual System", "Brand Applications"],
      },
      { label: "Industry", value: ["Food & Beverage / Hospitality"] },
    ],
    es: {
      description:
        "De la expresión al lugar: donde el vino y un vinilo se encuentran.",
      context: [
        "En Manzanillo había muchos bares, pero lo que faltaba era un lugar donde desconectarte de verdad. Donde salir del trabajo, soltar el peso del día y entrar a un espacio que te recibe con una buena copa, música que te hace sentir algo y conversación que vale la pena. Sin ruido innecesario, sin prisa. Un lugar para el que sabe que la mejor noche no siempre es la más loca, a veces es simplemente la que no quieres que termine.",
      ],
      challenge: [
        "El proyecto llegó sin nombre, sin identidad y sin referentes locales. Construir desde cero en un mercado donde la competencia no es directa pero el contexto sí pesa: la Marina Las Hadas tiene historia propia, y cualquier marca nueva tiene que ganarse su lugar ahí dentro sin disfrazarse del entorno. El reto era crear algo que se sintiera como si siempre hubiera existido y, al mismo tiempo, completamente nuevo.",
      ],
      the_work: [
        "El nombre lo dijo todo desde el principio. \"Tan tán\", esa expresión mexicana del punto justo, del equilibrio perfecto, del \"ni muy muy ni tan tan\", se convirtió en el concepto que ordenó todo lo demás. No había que inventar una personalidad: había que nombrar lo que el lugar ya quería ser. Desde ahí construimos un sistema de identidad completo: un logotipo con carácter propio que mezcla peso retro con frescura contemporánea, ilustraciones que habitan la marca con humor sin perder elegancia, y una paleta que balancea el verde esmeralda profundo con el naranja encendido, seria cuando tiene que serlo, eléctrica cuando la noche lo pide. El sistema se desplegó en cada punto de contacto, todo ejecutable desde el día uno, todo coherente, todo con esa vibra de lugar que ya conoces aunque sea tu primera vez.",
      ],
    },
    en: {
      description:
        "Creating a destination where great wine, vinyl records, and meaningful evenings come together.",
      context: [
        "Manzanillo already had plenty of bars, but what it lacked was a place to truly disconnect. A place to leave work behind, set down the weight of the day, and walk into a space that greets you with a good drink, music that makes you feel something, and conversation worth having. No unnecessary noise, no rush. A place for anyone who knows the best night isn't always the wildest one, sometimes it's just the one you don't want to end.",
      ],
      challenge: [
        "The project arrived with no name, no identity, and no local references. Building from zero in a market where competition isn't direct but context carries real weight: Marina Las Hadas has its own history, and any new brand has to earn its place there without disguising itself as part of the setting. The challenge was creating something that felt like it had always existed, while being completely new.",
      ],
      the_work: [
        "The name said it all from the start. \"Tan tán,\" that Mexican expression for the exact right point, \"ni muy muy ni tan tán,\" became the concept that ordered everything else. There was no need to invent a personality: we just had to name what the place already wanted to be. From there we built a complete identity system: a logotype with its own character that blends retro weight with contemporary freshness, illustrations that live in the brand with humor without losing elegance, and a palette that balances deep emerald green with bright orange, serious when it needs to be, electric when the night calls for it. The system was deployed across every touchpoint, ready from day one, coherent throughout, carrying that feeling of a place you already know even on your first visit.",
      ],
    },
  },
  {
    slug: "amidemi",
    attributes: [
      { label: "Client", value: ["AMÍDEMI"] },
      {
        label: "Services",
        value: ["Naming", "Visual System", "Packaging", "Launch Kit"],
      },
      { label: "Industry", value: ["Jewelry / E-commerce"] },
    ],
    es: {
      description:
        "Dar significado a una frase que ya vivía en la marca: de mí para mí.",
      context: [
        "La joyería accesible suele moverse entre dos extremos: el lujo aspiracional y las tendencias pasajeras. En medio de ese espacio existía una oportunidad para construir una marca pensada para quienes compran con intención, ya sea para sí mismas o para alguien más. AMÍDEMI nació con una idea con mucho peso pero aún sin una narrativa capaz de sostenerla: \"De mí para mí\".",
      ],
      challenge: [
        "El reto no era diseñar una marca de joyería más. Era construir una identidad con significado propio, una marca capaz de conectar con mujeres que buscan piezas versátiles, accesibles y atemporales, alejándose tanto de la comunicación aspiracional del lujo como de la estética efímera de las tendencias.",
      ],
      the_work: [
        "Partimos de una pregunta simple: ¿qué representa realmente regalarse joyería? La respuesta nos llevó a construir un territorio centrado en el auto regalo como un acto de ritual, conexión y consentimiento personal. Desde ahí desarrollamos una identidad verbal cómplice, sensorial y cercana, capaz de hablar sobre estilo, rutina y significado sin caer en clichés ni excesos. Visualmente diseñamos un sistema minimalista, cálido y orgánico que refleja la naturalidad de la marca, construido para acompañar momentos cotidianos y elevar la percepción de cada pieza sin depender del lenguaje tradicional del lujo.",
      ],
    },
    en: {
      description:
        'Giving meaning to an idea the brand already owned: "From me, to me."',
      context: [
        "Accessible jewelry tends to move between two extremes: aspirational luxury and passing trends. In the middle of that space there was an opportunity to build a brand for people who buy with intention, whether for themselves or for someone else. AMÍDEMI was born with an idea carrying real weight, but without a narrative able to hold it yet: \"From me, to me.\"",
      ],
      challenge: [
        "The challenge wasn't designing one more jewelry brand. It was building an identity with meaning of its own, one able to connect with women looking for versatile, accessible, timeless pieces, moving away from both the aspirational language of luxury and the fleeting aesthetic of trends.",
      ],
      the_work: [
        "We started from a simple question: what does it really mean to give yourself jewelry? The answer led us to build a territory centered on self gifting as an act of ritual, connection, and personal permission. From there we developed a verbal identity that's warm, sensory, and close, able to speak about style, routine, and meaning without falling into cliché or excess. Visually we designed a minimalist, warm, organic system that reflects the brand's natural quality, built to accompany everyday moments and elevate the perception of each piece without relying on traditional luxury language.",
      ],
    },
  },
  {
    slug: "swappp",
    attributes: [
      { label: "Client", value: ["SWAPPP"] },
      {
        label: "Services",
        value: ["Rebranding", "Packaging", "Retail Kit"],
      },
      { label: "Industry", value: ["Food & Beverage", "Energy Drinks"] },
    ],
    es: {
      description: "Redefinir cómo se ve la energía de todos los días.",
      context: [
        "SWAPPP nació con una propuesta clara: ofrecer una alternativa de energía más natural para personas con estilos de vida activos. La marca ya contaba con una personalidad fresca y cercana, pero necesitaba una identidad capaz de comunicar su propuesta con mayor claridad y consistencia.",
      ],
      challenge: [
        "En una categoría dominada por mensajes de rendimiento extremo, SWAPPP tenía una oportunidad distinta: posicionarse alrededor de una energía más natural, cercana y contemporánea. La identidad debía reflejar esa diferencia.",
      ],
      the_work: [
        "Desarrollamos una identidad visual construida alrededor de un principio simple: energía natural. Creamos un sistema gráfico minimalista, flexible y altamente reconocible, capaz de adaptarse a diferentes presentaciones de producto manteniendo una identidad consistente. Diseñamos además un sistema de packaging preparado para crecer junto con la marca, donde cada sabor encuentra una expresión propia sin perder reconocimiento dentro del portafolio. Good energy only.",
      ],
    },
    en: {
      description: "Redefining what everyday energy looks and feels like.",
      context: [
        "SWAPPP was born with a clear proposal: offering a more natural energy alternative for people with active lifestyles. The brand already had a fresh, approachable personality, but needed an identity able to communicate its proposal with greater clarity and consistency.",
      ],
      challenge: [
        "In a category dominated by extreme performance messaging, SWAPPP had a different opportunity: positioning itself around energy that's more natural, approachable, and contemporary. The identity had to reflect that difference.",
      ],
      the_work: [
        "We developed a visual identity built around one simple principle: natural energy. We created a minimalist, flexible, highly recognizable graphic system able to adapt across different product formats while keeping the identity consistent. We also designed a packaging system built to grow with the brand, where each flavor finds its own expression without losing recognition within the portfolio. Good energy only.",
      ],
    },
  },
  {
    slug: "blissify",
    attributes: [
      { label: "Client", value: ["BLISSIFY"] },
      {
        label: "Services",
        value: ["Rebranding", "Visual System", "Brand Applications"],
      },
      { label: "Industry", value: ["E-commerce / Fashion & Lifestyle"] },
    ],
    es: {
      description:
        "Transformar el acceso a tendencias globales en una experiencia de marca.",
      context: [
        "Blissify acerca tendencias globales a México a través de una experiencia de personal shopping. Moda, skincare, cosméticos, wellness y tecnología convivían dentro de una misma oferta, pero sin un sistema capaz de comunicarlo de manera consistente.",
      ],
      challenge: [
        "El acceso ya no era el diferenciador. La percepción sí. La marca corría el riesgo de ser vista como una reventa informal en lugar de una plataforma confiable para descubrir productos y tendencias internacionales.",
      ],
      the_work: [
        "Construimos una identidad editorial diseñada para ordenar la complejidad. Creamos un sistema visual capaz de integrar cinco categorías distintas bajo un mismo lenguaje, manteniendo claridad, coherencia y reconocimiento en cada punto de contacto. Más que una nueva imagen, desarrollamos una arquitectura de marca que permite crecer con consistencia. Una identidad con la formalidad de una empresa consolidada y la sensibilidad de un referente de tendencias.",
      ],
    },
    en: {
      description:
        "Transforming access to global trends into a curated brand experience.",
      context: [
        "Blissify brings global trends to Mexico through a personal shopping experience. Fashion, skincare, cosmetics, wellness, and tech all lived under one offer, but without a system able to communicate it consistently.",
      ],
      challenge: [
        "Access was no longer the differentiator. Perception was. The brand risked being seen as an informal resale operation instead of a trusted platform for discovering international products and trends.",
      ],
      the_work: [
        "We built an editorial identity designed to bring order to complexity. We created a visual system able to unite five distinct categories under one language, with clarity, coherence, and recognition at every touchpoint. More than a new image, we developed a brand architecture that allows growth with consistency, an identity with the formality of an established company and the sensibility of a trend authority.",
      ],
    },
  },
  {
    slug: "ratito",
    attributes: [
      { label: "Client", value: ["Ratito"] },
      {
        label: "Services",
        value: ["Naming", "Visual System", "Brand Applications"],
      },
      { label: "Industry", value: ["Turismo & Hospitalidad"] },
    ],
    es: {
      description: "Ponerle nombre y cara al tiempo bien vivido.",
      context: [
        "El mercado de renta vacacional en México lleva años creciendo, pero sin madurar. Entre Airbnb y los portales de distribución, cualquiera puede listar una propiedad y eso se nota. El resultado: un mercado saturado de opciones que se parecen todas, donde el precio termina siendo el único diferenciador y la experiencia del huésped queda en segundo plano. Meteoro Ventures llegó con una lectura distinta. Vieron en ese desorden una oportunidad: crear una empresa de hospitalidad y property management que no compitiera por precio, sino por experiencia. Una plataforma que entendiera que detrás de cada reserva hay alguien buscando un ratito para desconectarse, para estar, para vivir algo que valga la pena recordar. La idea de negocio era sólida. Lo que no existía todavía era la marca.",
      ],
      challenge: [
        "Crear desde cero la identidad de una empresa de hospitalidad que no quisiera verse como una empresa de hospitalidad. Ni hotel boutique aspiracional, ni plataforma tecnológica fría, ni el típico logo de casita con palmera que puebla la categoría. El reto era encontrar una personalidad que hiciera sentir al huésped que estaba eligiendo algo distinto antes de llegar a la propiedad, y convencer al propietario de que sus metros cuadrados estarían en manos de alguien que entiende lo que significa cuidar algo con criterio. Dos audiencias con necesidades opuestas. Una sola marca que tenía que funcionar para ambas.",
      ],
      the_work: [
        "El primer movimiento fue estratégico: encontrar el territorio emocional que pudiera contener todo lo que Ratito quería ser. Ese territorio fue el tiempo, no el tiempo como recurso escaso ni como lujo, sino el tiempo como experiencia. El instante que vale. El ratito que recuerdas. De ahí nació el nombre. Ratito no describe un producto, describe una sensación. Es coloquial sin ser informal, cercano sin ser ingenuo. En un mercado lleno de nombres genéricos o en inglés, Ratito se para solo. El claim cerró el concepto: \"Habitamos instantes. Creamos refugios pensados para disfrutar lo más valioso: el tiempo bien vivido.\" No habla de propiedades. Habla de lo que pasa dentro de ellas. La identidad visual tomó la misma dirección: una tipografía de script cálida y con personalidad propia, lejos del sans serif limpio que domina la categoría, sobre fotografía que privilegia la atmósfera sobre el inmueble. El azul como color de la marca: intenso, confiable, con la profundidad suficiente para sostener tanto la emoción del huésped como la seriedad que el propietario necesita ver.",
      ],
    },
    en: {
      description:
        "Naming and shaping a hospitality brand built around the value of time well spent.",
      context: [
        "Mexico's vacation rental market has grown for years without maturing. Between Airbnb and distribution platforms, anyone can list a property, and it shows. The result: a market saturated with options that all look alike, where price ends up as the only differentiator and the guest experience takes a back seat. Meteoro Ventures arrived with a different read. They saw an opportunity in that disorder: building a hospitality and property management company that competed on experience, not price. A platform built on the understanding that behind every booking there's someone looking for a little while to disconnect, to be present, to live something worth remembering. The business idea was solid. What didn't exist yet was the brand.",
      ],
      challenge: [
        "Creating from scratch the identity of a hospitality company that didn't want to look like a hospitality company. Not an aspirational boutique hotel, not a cold tech platform, not the typical little house with a palm tree logo that fills the category. The challenge was finding a personality that made guests feel they were choosing something different before ever arriving at the property, while convincing owners that their square meters would be in the hands of someone who understands what it means to care for something with judgment. Two audiences with opposite needs. One brand that had to work for both.",
      ],
      the_work: [
        "The first move was strategic: finding the emotional territory that could hold everything Ratito wanted to be. That territory was time, not time as a scarce resource or a luxury, but time as an experience. The moment that's worth it. The little while you remember. From there came the name. Ratito doesn't describe a product, it describes a feeling. It's colloquial without being informal, warm without being naive. In a market full of generic or English names, Ratito stands on its own. The claim closed the concept: \"We inhabit moments. We create refuges built to enjoy what matters most: time well spent.\" It doesn't talk about properties. It talks about what happens inside them. The visual identity followed the same direction: a warm script typeface with its own personality, far from the clean sans serif that dominates the category, paired with photography that favors atmosphere over the property itself. Blue as the brand's color: deep, trustworthy, with enough depth to hold both the guest's emotion and the seriousness an owner needs to see.",
      ],
    },
  },
  {
    slug: "meteoro",
    attributes: [
      { label: "Client", value: ["Meteoro Ventures"] },
      {
        label: "Services",
        value: ["Visual System", "UX/UI", "Web Development"],
      },
      { label: "Industry", value: ["Capital & Innovation"] },
    ],
    es: {
      description:
        "Construir desde cero la identidad de quien construye desde cero.",
      context: [
        "Meteoro nació con una misión clara: crear y potenciar negocios junto a emprendedores, conectando ideas, capital y talento para construir empresas que trascienden. Pero antes de salir al mundo a impulsar marcas de otros, tenía que resolver su propio reto de identidad. El ecosistema de venture studios y fondos de inversión en México está lleno de nombres que suenan parecido, prometen lo mismo y se presentan igual. Suits, cifras, retornos. Capital frío, lenguaje corporativo, distancia estratégica.",
      ],
      challenge: [
        "El reto no era solo nombrar a Meteoro, era dotarla de una identidad que hiciera tangible algo intangible: la diferencia entre un capital que acompaña y uno que transforma. Había que construir una marca capaz de hablarle al emprendedor que busca más que dinero, sin caer en el discurso motivacional vacío. Una identidad que transmitiera estructura y visión de largo plazo, pero que al mismo tiempo se sintiera dinámica, real y con criterio propio.",
      ],
      the_work: [
        "El punto de partida fue encontrar el territorio de sentido que justificara todo lo demás. Ese territorio fue el impacto: no como promesa, sino como dirección. Un meteoro no avisa, no pide permiso, aparece, genera cambio y deja marca. De ahí nació el claim \"Impulsamos ideas que cambian industrias\", una declaración que no describe lo que Meteoro hace, sino lo que Meteoro mueve. El lenguaje de la marca se construyó desde la misma lógica: preciso, estratégico, sin adornos. La identidad visual tomó ese mismo impulso: una tipografía geométrica y limpia que combina solidez con modernidad, y un símbolo que abstrae la trayectoria del meteoro. Meteoro salió al mundo con una identidad que no necesita explicación. Se presenta sola.",
      ],
    },
    en: {
      description:
        "Building the identity of a venture studio dedicated to building businesses from the ground up.",
      context: [
        "Meteoro was born with a clear mission: creating and powering businesses alongside entrepreneurs, connecting ideas, capital, and talent to build companies that last. But before going out into the world to build brands for others, it had to solve its own identity challenge. Mexico's venture studio and investment fund ecosystem is full of names that sound alike, promise the same things, and present themselves the same way. Suits, numbers, returns. Cold capital, corporate language, strategic distance.",
      ],
      challenge: [
        "The challenge wasn't just naming Meteoro, it was giving it an identity that made something intangible tangible: the difference between capital that accompanies and capital that transforms. The brand had to speak to entrepreneurs looking for more than money, without falling into empty motivational language. An identity that carried structure and long term vision while still feeling dynamic, real, and driven by its own judgment.",
      ],
      the_work: [
        "The starting point was finding the territory of meaning that could justify everything else. That territory was impact, not as a promise, but as a direction. A meteor doesn't announce itself, doesn't ask permission, it appears, creates change, and leaves a mark. From there came the claim \"We drive ideas that change industries,\" a statement that describes not what Meteoro does, but what Meteoro moves. The brand's language was built on the same logic: precise, strategic, no ornament. The visual identity carried that same momentum: a clean, geometric typeface that combines solidity with modernity, and a symbol that abstracts the meteor's trajectory. Meteoro went out into the world with an identity that needs no explanation. It speaks for itself.",
      ],
    },
  },
  {
    slug: "strategyos",
    attributes: [
      { label: "Client", value: ["Strategy OS"] },
      {
        label: "Services",
        value: ["Visual System", "Digital Brand System"],
      },
      { label: "Industry", value: ["SaaS / AI / Business Operations"] },
    ],
    es: {
      description: "Diseñar un sistema operativo para líderes que ejecutan.",
      context: [
        "Las empresas tecnológicas crecen cada vez más rápido, pero muchas siguen enfrentando el mismo problema: la estrategia vive en documentos, juntas y presentaciones, mientras la operación diaria avanza por otro camino. Strategy OS nace para cerrar esa brecha, una plataforma impulsada por AI diseñada para founders, C levels y líderes que necesitan visibilidad, estructura y claridad para conectar la estrategia con la ejecución.",
      ],
      challenge: [
        "El reto no era presentar otra herramienta de planeación. Era construir una marca capaz de reclamar un territorio propio: convertir la estrategia en un sistema vivo, medible y presente en el día a día. La identidad debía transmitir inteligencia y capacidad analítica sin caer en el lenguaje frío de software corporativo.",
      ],
      the_work: [
        "Partimos de una idea central: la claridad es el motor de la ejecución. De ahí nació el territorio narrativo \"Where Clarity Drives Execution\", una plataforma estratégica que transforma la claridad en una ventaja competitiva. Construimos una identidad verbal basada en tres arquetipos de marca, un lenguaje inteligente, técnico pero accesible, capaz de comunicar profundidad sin recurrir al hype tecnológico. Visualmente desarrollamos un sistema limpio, numérico y contemporáneo que refleja exactamente lo que el producto promete: orden, estructura, visibilidad y foco.",
      ],
    },
    en: {
      description:
        "Designing the operating system for leaders who turn strategy into execution.",
      context: [
        "Tech companies are growing faster than ever, but many still face the same problem: strategy lives in documents, meetings, and presentations, while daily operations move on a different track. Strategy OS was built to close that gap, an AI powered platform designed for founders, C levels, and leaders who need visibility, structure, and clarity to connect strategy with execution.",
      ],
      challenge: [
        "The challenge wasn't presenting another planning tool. It was building a brand capable of claiming its own territory: turning strategy into a living, measurable system present in day to day work. The identity needed to convey intelligence and analytical capability without falling into cold corporate software language.",
      ],
      the_work: [
        "We started from a central idea: clarity is the engine of execution. From there came the narrative territory \"Where Clarity Drives Execution,\" a strategic platform that turns clarity into a competitive advantage. We built a verbal identity based on three brand archetypes, a language that's intelligent and technical but accessible, able to communicate depth without leaning on tech hype. Visually we developed a clean, numeric, contemporary system that reflects exactly what the product promises: order, structure, visibility, and focus.",
      ],
    },
  },
  {
    slug: "seres",
    attributes: [
      { label: "Client", value: ["SERES"] },
      {
        label: "Services",
        value: ["Naming", "Visual System", "Art Direction"],
      },
      { label: "Industry", value: ["Hospitality & Entertainment"] },
    ],
    es: {
      description:
        "Darle identidad a un lugar donde los humanos buscan simplemente ser.",
      context: [
        "SERES nace en Sayulita, un destino en crecimiento acelerado donde la identidad de lugar se disputa entre lo auténtico y lo construido para el consumo. Su propuesta: un hotel boutique y un beach club que no compiten con el destino, sino que lo amplifican. Una marca diseñada para expandirse geográficamente adoptando la esencia cultural de cada lugar donde llegue.",
      ],
      challenge: [
        "El mercado de la hospitalidad boutique está saturado de marcas que prometen experiencias únicas y terminan diciendo lo mismo. El reto no era crear una marca de hotel, era crear un territorio de pertenencia: un nombre que pudiera viajar, adaptarse a nuevos destinos y seguir siendo reconocible sin perder su alma. Y hacerlo sin caer en el lujo performativo ni en la autenticidad forzada.",
      ],
      the_work: [
        "El punto de partida fue el nombre. SERES no describe un lugar, describe a quienes lo habitan. Desde ahí se construyó todo: un concepto creativo anclado en la conexión humana, la vulnerabilidad como fuerza y la comunidad como arquitectura social. La identidad verbal se desarrolló desde la filosofía \"la simplicidad es la mayor de las sofisticaciones\", traducida en un sistema de lenguaje que celebra lo local, lo humano y lo presente. El sistema visual respondió al mismo principio: propuestas que habitan el espacio entre lo contemporáneo y lo artesanal, entre la serenidad del retiro y la energía del beach club. El resultado es una marca diseñada para expandirse a nuevos destinos, Tulum, Puerto Escondido y más, sin perder lo que hace a SERES reconocible.",
      ],
    },
    en: {
      description:
        "Creating the identity of a place where people come simply to be.",
      context: [
        "SERES was born in Sayulita, a fast growing destination where a sense of place is contested between what's authentic and what's built for consumption. Its proposal: a boutique hotel and beach club that don't compete with the destination, but amplify it, a brand designed to expand geographically while adopting the cultural essence of each place it reaches.",
      ],
      challenge: [
        "The boutique hospitality market is saturated with brands that promise unique experiences and end up saying the same thing. The challenge wasn't creating a hotel brand, it was creating a territory of belonging: a name that could travel, adapt to new destinations, and stay recognizable without losing its soul, all without falling into performative luxury or forced authenticity.",
      ],
      the_work: [
        "The starting point was the name. SERES doesn't describe a place, it describes the people who inhabit it. From there everything else was built: a creative concept anchored in human connection, vulnerability as strength, and community as social architecture. The verbal identity was developed from the philosophy that simplicity is the highest form of sophistication, translated into a language that celebrates what's local, human, and present. The visual system followed the same principle: expressions that live between the contemporary and the artisanal, between the calm of a retreat and the energy of a beach club. The result is a brand designed to expand into new destinations, Tulum, Puerto Escondido, and beyond, without losing what makes SERES recognizable.",
      ],
    },
  },
  {
    slug: "salar",
    attributes: [
      { label: "Client", value: ["SALAR"] },
      {
        label: "Services",
        value: ["Visual System", "Packaging", "Brand Applications"],
      },
      { label: "Industry", value: ["Food & Beverage / Artisanal Products"] },
    ],
    es: {
      description:
        "Revelar el valor de la sal hecha con tiempo, territorio y oficio.",
      context: [
        "Cuyutlán, Colima lleva más de 500 años produciendo sal de la misma manera: extraer el agua del subsuelo, dejarla evaporar bajo el sol y recolectar cada grano a mano. El resultado es una sal con carácter, rica en minerales volcánicos, con sabor limpio y textura nítida. Pero sin una marca, todo ese origen y ese oficio no llegaban a ningún lado.",
      ],
      challenge: [
        "El mercado de sal artesanal está lleno de productos que se esconden detrás del folclor o del packaging bonito sin decir nada real. El reto no era hacer que SALAR se viera premium, era hacer que se sintiera honesta: que quien la tuviera en la mano entendiera de dónde viene, quién la cosechó y por qué eso importa. Sin romantizar, sin exagerar.",
      ],
      the_work: [
        "El territorio de marca se construyó desde una verdad simple: esto no se fabrica, se cosecha. De ahí nació un tono de voz directo y sin adornos, un sistema visual que habla de tierra, mar y sol, y un símbolo que retrata el instante exacto en que el agua se convierte en sal viva. El packaging se diseñó en dos versiones, pouch premium y pouch comercial, para que la marca pudiera vivir tanto en una cocina de autor como en un mercado local, sin perder coherencia ni carácter. Todo materializa la misma idea: una sal viva, honesta y hecha con paciencia.",
      ],
    },
    en: {
      description:
        "Revealing the value of salt shaped by time, place, and craftsmanship.",
      context: [
        "Cuyutlán, Colima has produced salt the same way for more than 500 years: drawing water from below ground, letting it evaporate under the sun, and gathering each grain by hand. The result is salt with character, rich in volcanic minerals, with a clean flavor and crisp texture. But without a brand, all that origin and craft went nowhere.",
      ],
      challenge: [
        "The artisanal salt market is full of products that hide behind folklore or pretty packaging without saying anything real. The challenge wasn't making SALAR look premium, it was making it feel honest: whoever held it in their hand needed to understand where it comes from, who harvested it, and why that matters. No romanticizing, no exaggeration.",
      ],
      the_work: [
        "The brand territory was built on a simple truth: this isn't manufactured, it's harvested. From there came a direct, unadorned tone of voice, a visual system that speaks of land, sea, and sun, and a symbol that captures the exact instant water becomes living salt. The packaging was designed in two versions, a premium pouch and a commercial pouch, so the brand could live in both a chef's kitchen and a local market without losing coherence or character. Everything materializes the same idea: a salt that's alive, honest, and made with patience.",
      ],
    },
  },
  {
    slug: "manna-foods",
    attributes: [
      { label: "Client", value: ["Manna Foods"] },
      {
        label: "Services",
        value: ["Rebranding", "Packaging System", "Retail Kit"],
      },
      { label: "Industry", value: ["Food & Beverage", "Healthy Snacks"] },
    ],
    es: {
      description: "Hacer del antojo el mejor aliado de lo saludable.",
      context: [
        "La categoría de snacks saludables ha crecido impulsada por consumidores que buscan mejores alternativas sin renunciar al sabor. Sin embargo, gran parte del mercado sigue comunicando desde la restricción: menos calorías, menos culpa, menos indulgencia. manna foods nació para demostrar que la alimentación saludable también puede ser emocionante y profundamente disfrutable.",
      ],
      challenge: [
        "En una categoría donde la salud suele comunicar sacrificio, la oportunidad estaba en cambiar la conversación. La marca necesitaba una identidad capaz de equilibrar bienestar, innovación y deseo, con un lenguaje que transmitiera calidad y cercanía sin depender de los códigos tradicionales de la alimentación saludable, y un sistema preparado para crecer hacia un portafolio de submarcas.",
      ],
      the_work: [
        "Desarrollamos una plataforma de marca construida alrededor de una idea central: transformando el sabor de lo saludable. A partir de ahí creamos una identidad verbal optimista, cercana y llena de energía, que posiciona a manna foods como una marca que convierte ingredientes cotidianos en experiencias sorprendentes. Visualmente diseñamos un sistema limpio, contemporáneo y altamente flexible que comunica frescura, calidad e innovación, con una arquitectura preparada para acompañar el crecimiento de la marca manteniendo consistencia en cada punto de contacto.",
      ],
    },
    en: {
      description: "Making cravings the best ally of healthy living.",
      context: [
        "The healthy snack category has grown driven by consumers looking for better alternatives without giving up flavor. Even so, much of the market still communicates from a place of restriction: fewer calories, less guilt, less indulgence. manna foods was born to prove that healthy eating can also be exciting and deeply enjoyable.",
      ],
      challenge: [
        "In a category where health usually communicates sacrifice, the opportunity was to change the conversation. The brand needed an identity able to balance wellness, innovation, and desire, with a language that conveyed quality and warmth without relying on the traditional codes of healthy eating, and a system built to grow into a portfolio of sub brands.",
      ],
      the_work: [
        "We developed a brand platform built around one central idea: transforming the flavor of healthy. From there we created an optimistic, warm, energetic verbal identity that positions manna foods as a brand that turns everyday ingredients into surprising experiences. Visually we designed a clean, contemporary, highly flexible system that communicates freshness, quality, and innovation, with an architecture built to support the brand's growth while keeping consistency at every touchpoint.",
      ],
    },
  },
  {
    slug: "pascal",
    attributes: [
      { label: "Client", value: ["Pascal"] },
      {
        label: "Services",
        value: ["Naming", "Visual System"],
      },
      { label: "Industry", value: ["Luxury Goods", "Jewelry & Diamonds"] },
    ],
    es: {
      description:
        "Construir una marca para celebrar los hitos que merecen ser recordados.",
      context: [
        "La compra de un diamante rara vez responde únicamente al producto. Detrás de cada elección existe una historia de compromiso, esfuerzo y decisiones que marcan un antes y un después. En un mercado donde la mayoría de las marcas compiten por precio, inventario o exclusividad, Pascal identificó una oportunidad distinta: construir una experiencia basada en la empatía y el significado de cada momento.",
      ],
      challenge: [
        "La categoría suele comunicar lujo, estatus y aspiración. Pascal necesitaba diferenciarse construyendo una marca que acompañara emocionalmente a sus clientes durante uno de los momentos más importantes de sus vidas. La identidad debía transmitir confianza, cercanía y sofisticación, convirtiendo el proceso de elegir un diamante en una experiencia segura y profundamente personal.",
      ],
      the_work: [
        "Construimos la estrategia alrededor de una idea central: celebrando hitos. Desde este territorio desarrollamos una identidad verbal que reconoce el esfuerzo, el compromiso y las decisiones valientes que existen detrás de cada compra. Visualmente diseñamos un sistema elegante y atemporal que equilibra sofisticación y calidez, alejándose de los códigos tradicionales del lujo para construir una experiencia más humana, transparente y cercana.",
      ],
    },
    en: {
      description:
        "Building a brand that celebrates the milestones worth remembering.",
      context: [
        "Buying a diamond rarely comes down to the product alone. Behind every choice is a story of commitment, effort, and decisions that mark a before and after. In a market where most brands compete on price, inventory, or exclusivity, Pascal saw a different opportunity: building an experience based on empathy and the meaning of each moment.",
      ],
      challenge: [
        "The category usually communicates luxury, status, and aspiration. Pascal needed to differentiate by building a brand that could emotionally accompany its clients through one of the most important moments of their lives. The identity had to convey trust, warmth, and sophistication, turning the process of choosing a diamond into a safe, deeply personal experience.",
      ],
      the_work: [
        "We built the strategy around one central idea: celebrating milestones. From this territory we developed a verbal identity that recognizes the effort, commitment, and brave decisions behind every purchase. Visually we designed an elegant, timeless system that balances sophistication and warmth, moving away from traditional luxury codes to build a more human, transparent, and approachable experience.",
      ],
    },
  },
  {
    slug: "apppadel",
    attributes: [
      { label: "Client", value: ["App Padel"] },
      {
        label: "Services",
        value: ["Brand DNA", "Visual System", "UX/UI"],
      },
      { label: "Industry", value: ["Sports Technology", "Mobile App"] },
    ],
    es: {
      description:
        "Unir la experiencia del pádel dentro de una sola plataforma.",
      context: [
        "El pádel ha dejado de ser únicamente un deporte para convertirse en una experiencia de comunidad. Cada partido genera nuevas conexiones entre jugadores, clubes, entrenadores, marcas y amigos, mientras el ecosistema digital continúa creciendo con soluciones independientes para cada necesidad. AppPadel nació para reunir todo ese universo en un solo lugar, construyendo una plataforma capaz de acompañar al jugador antes, durante y después de cada partido.",
      ],
      challenge: [
        "La oportunidad no estaba en crear otra aplicación para jugadores de pádel. El verdadero desafío consistía en construir una marca capaz de integrar múltiples servicios bajo una sola experiencia, posicionando a AppPadel como el punto de encuentro de una comunidad global. La identidad debía comunicar cercanía, simplicidad e innovación sin perder el componente humano que define al deporte.",
      ],
      the_work: [
        "Construimos la estrategia alrededor de un concepto central: la red del pádel. Desde este territorio desarrollamos una identidad que entiende el deporte como un espacio de conexión, más que una plataforma tecnológica. Diseñamos una identidad verbal cercana, optimista y colaborativa, acompañada de un sistema visual minimalista y flexible pensado para conectar con una comunidad global de jugadores.",
      ],
    },
    en: {
      description:
        "Bringing the entire padel experience together through one connected platform.",
      context: [
        "Padel has stopped being just a sport and become a community experience. Every match creates new connections between players, clubs, coaches, brands, and friends, while the digital ecosystem keeps growing with separate solutions for every need. AppPadel was born to bring that entire universe into one place, building a platform able to accompany players before, during, and after every match.",
      ],
      challenge: [
        "The opportunity wasn't creating another app for padel players. The real challenge was building a brand able to integrate multiple services under one experience, positioning AppPadel as the meeting point for a global community. The identity had to communicate closeness, simplicity, and innovation without losing the human component that defines the sport.",
      ],
      the_work: [
        "We built the strategy around one central concept: the padel network. From this territory we developed an identity that understands the sport as a space for connection, more than a tech platform. We designed a verbal identity that's warm, optimistic, and collaborative, paired with a minimalist, flexible visual system built to connect with a global community of players.",
      ],
    },
  },
  {
    slug: "buen-punto",
    attributes: [
      { label: "Client", value: ["BUEN PUNTO"] },
      {
        label: "Services",
        value: ["Rebranding", "Brand Positioning", "Launch Kit"],
      },
      { label: "Industry", value: ["Wine & Spirits"] },
    ],
    es: {
      description: "Cuando el momento lo pide, Buen Punto tiene la respuesta.",
      context: [
        "Buen Punto nace en Tonaya, Jalisco, una región de microclimas únicos, agave por generaciones y una tradición de bebidas que cuentan historias tanto como las conversaciones que las acompañan. Un tequila que no busca imponerse, busca acompañar: accesible, versátil, pensado para cualquier celebración, con tres expresiones (Blanco, Reposado y Cristalino) y visión de crecer tanto en anaquel nacional como en exportación.",
      ],
      challenge: [
        "El mercado de tequila está saturado de marcas que compiten por quién grita más fuerte su legado o su exclusividad. La oportunidad estaba en encontrar un equilibrio entre lo tradicional y lo contemporáneo: una identidad genuina y cercana, que transmitiera un carácter artesanal real, y que diferenciara desde el primer golpe de vista sin depender del agave de siempre.",
      ],
      the_work: [
        "Partimos del propio nombre como territorio de marca. \"Buen Punto\" nace de una expresión cotidiana que valida, coincide y continúa una conversación, una personalidad que invita al diálogo en lugar de dictar cómo celebrar. Visualmente construimos un sistema que equilibra tradición y modernidad: un logotipo de estructura clásica con guiños gráficos propios, y una reinterpretación abstracta del agave en lugar de la representación literal que domina la categoría. El sistema se extiende al packaging a través de una etiqueta que apela al tacto y a la vista, con papel texturizado y acabados que resaltan el punto sobre la ilustración de los volcanes, dejando que el olfato y el gusto queden a cargo del producto mismo.",
      ],
    },
    en: {
      description: "When the moment calls for it, Buen Punto has the answer.",
      context: [
        "Buen Punto was born in Tonaya, Jalisco, a region of unique microclimates, generations of agave, and a tradition of drinks that tell stories just as well as the conversations around them. A tequila that doesn't try to impose itself, it accompanies: accessible, versatile, built for any celebration, with three expressions (Blanco, Reposado, and Cristalino) and a vision to grow in both the domestic shelf and export markets.",
      ],
      challenge: [
        "The tequila market is saturated with brands competing over who shouts their heritage or exclusivity the loudest. The opportunity was finding a balance between tradition and the contemporary: an identity that felt genuine and approachable, carried real artisanal character, and stood out at first glance without relying on the usual agave imagery.",
      ],
      the_work: [
        "We started from the name itself as brand territory. \"Buen Punto\" comes from an everyday phrase that validates, agrees, and carries a conversation forward, a personality that invites dialogue instead of dictating how to celebrate. Visually we built a system that balances tradition and modernity: a logotype with a classic structure carrying its own graphic details, and an abstract reinterpretation of agave instead of the literal imagery that dominates the category. The system extends into packaging through a label that appeals to touch and sight, with textured paper and finishes that highlight the point over an illustration of volcanoes, leaving smell and taste to the product itself.",
      ],
    },
  },
  {
    slug: "grupo-rancagua",
    attributes: [
      { label: "Client", value: ["Grupo Rancagua"] },
      {
        label: "Services",
        value: ["Rebranding", "Visual System", "Brand Applications"],
      },
      { label: "Industry", value: ["Automotive / Mobility"] },
    ],
    es: {
      description: "Una sola marca para respaldar a todas las demás.",
      context: [
        "Grupo Rancagua operaba como un grupo automotriz con diversificación de alianzas estratégicas y marcas comerciales (Nissan, Neo Motors, Bestune, JIM, entre otras). El mercado actual de la movilidad exigía algo más que ser un distribuidor corporativo: consistencia institucional, claridad en la representación conjunta con marcas socias, y una estructura visual capaz de transmitir cercanía, tecnología y dinamismo.",
      ],
      challenge: [
        "El reto consistía en consolidar una arquitectura de marca que proyectara solidez y respaldo sin restar protagonismo a las marcas de vehículos con las que coexiste. Se necesitaba un sistema corporativo ordenado que garantizara coherencia en todas sus manifestaciones, transmitiendo legado, visión y confianza hacia el futuro.",
      ],
      the_work: [
        "El punto de partida fue definir un concepto que pudiera hablar por todas las marcas al mismo tiempo: \"Confianza que conduce el futuro\". Una idea lo suficientemente sólida para sostener al grupo, y lo suficientemente flexible para no ahogar a las marcas que opera. Desde ahí construimos una identidad corporativa contemporánea, con negro de base y acentos en rojo, y recursos gráficos lineales construidos a partir de la silueta de la \"R\" que se superponen sobre los vehículos en contextos reales: la marca no describe los autos, los habita. La pieza más crítica fue el sistema de co branding. Grupo Rancagua opera marcas con identidades propias y reglas estrictas, y el reto era que el grupo pudiera aparecer junto a ellas sin competir ni diluirse. Establecimos jerarquías claras y proporciones definidas para que Grupo Rancagua funcione siempre como respaldo sólido: presente, reconocible, pero nunca por encima de la marca socia.",
      ],
    },
    en: {
      description: "One brand to stand behind all the rest.",
      context: [
        "Grupo Rancagua operated as an automotive group with a diverse set of strategic alliances and commercial brands (Nissan, Neo Motors, Bestune, JIM, among others). Today's mobility market demanded more than being a corporate distributor: institutional consistency, clarity in how it appeared alongside partner brands, and a visual structure able to convey closeness, technology, and momentum.",
      ],
      challenge: [
        "The challenge was consolidating a brand architecture that projected strength and support without taking the spotlight away from the vehicle brands it coexists with. It needed an ordered corporate system that guaranteed coherence across every touchpoint, conveying legacy, vision, and confidence in the future.",
      ],
      the_work: [
        "The starting point was defining a concept that could speak for every brand at once: \"Confidence that drives the future.\" An idea solid enough to hold the group together, and flexible enough not to overshadow the brands it operates. From there we built a contemporary corporate identity, with black as its base and red accents, and linear graphic resources built from the silhouette of the \"R\" that overlay directly onto vehicles in real settings: the brand doesn't describe the cars, it inhabits them. The most critical piece was the co branding system. Grupo Rancagua operates brands with their own identities and strict rules, and the challenge was letting the group appear alongside them without competing or diluting them. We established clear hierarchies and defined proportions so Grupo Rancagua always functions as solid backing: present, recognizable, but never above the partner brand.",
      ],
    },
  },
  {
    slug: "alltern",
    attributes: [
      { label: "Client", value: ["Alltern"] },
      {
        label: "Services",
        value: ["Naming", "Visual System", "Brand Applications"],
      },
      { label: "Industry", value: ["Food & Beverage", "Healthy Fast Food"] },
    ],
    es: {
      description: "Fast food como una alternativa de bienestar.",
      context: [
        "Durante años, la comida rápida ha estado asociada al exceso, mientras que la alimentación saludable suele percibirse como poco práctica o limitada en sabor. Alltern nació para demostrar que comer bien no tiene por qué significar renunciar al tiempo, al sabor ni a la accesibilidad.",
      ],
      challenge: [
        "La categoría estaba dominada por dos discursos opuestos: la rapidez o el bienestar. La oportunidad consistía en construir una marca capaz de reconciliar ambos mundos, eliminando los estigmas alrededor de la comida rápida saludable.",
      ],
      the_work: [
        "Desarrollamos la estrategia alrededor de una idea central: healthy fast food. A partir de ahí construimos una identidad que redefine lo que significa la comida rápida, con un tono directo y cercano, y un concepto creativo, All In One Alternative, que comunica una solución completa para un estilo de vida en movimiento. Visualmente diseñamos un sistema contemporáneo con personalidad fresca y urbana, combinando recursos gráficos minimalistas con una paleta vibrante, pensado para romper con los códigos tradicionales de la categoría.",
      ],
    },
    en: {
      description: "Turning fast food into an alternative for wellbeing.",
      context: [
        "For years, fast food has been associated with excess, while healthy eating is often seen as impractical or limited in flavor. Alltern was born to prove that eating well doesn't mean giving up time, taste, or accessibility.",
      ],
      challenge: [
        "The category was dominated by two opposing narratives: speed or wellbeing. The opportunity was to build a brand able to reconcile both worlds, removing the stigma around healthy fast food.",
      ],
      the_work: [
        "We built the strategy around one central idea: healthy fast food. From there we developed an identity that redefines what fast food means, with a direct, approachable tone and a creative concept, All In One Alternative, that communicates a complete solution for a life in motion. Visually we designed a contemporary system with a fresh, urban personality, combining minimalist graphic resources with a vibrant palette, built to break away from the category's traditional codes.",
      ],
    },
  },
];

export function getInteriorContent(slug: string, lang: "es" | "en") {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;
  return {
    attributes: project.attributes,
    ...project[lang],
  };
}
