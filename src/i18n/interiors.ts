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
        "Tequila Centinela tiene 120 años de historia. Eterno es su entrada al cristalino la categoría que hoy define el crecimiento del tequila premium. El mercado estaba saturado de marcas gritando legado, tradición y herencia. Pero la generación que hoy impulsa el consumo ya no compraba discursos de historia pedía significado, presencia, pertenencia a un momento.",
      ],
      challenge: [
        "La marca existía pero con presencia mínima y sin una identidad que levantara la mano en premium. El reto no era contar la historia otra vez era encontrar el territorio donde pudiera vivir hoy, sin disfrazarse de juventud ni renunciar a lo que ya era.",
      ],
      the_work: [
        'Ese territorio era la noche. Leímos el high energy y la nightlife no como canal de activación, sino como el lugar donde Eterno tenía que existir culturalmente. De ahí nació "SOMOS TIEMPO" un concepto que ancla el peso del legado en la energía del ahora, en el momento, en la cultura nocturna.',
        "El sistema visual se construyó desde el entorno, no desde la botella. Cristales, metal, luz. El rojo como pulso. Un lenguaje que no describe la noche la habita. Todo materializado en un Creative Book ejecutable desde el día uno.",
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
        'We identified nightlife as the brand\'s cultural territory. Rather than treating high-energy occasions and nightlife as activation channels, we positioned them as the environment where Eterno could establish genuine cultural relevance. This insight led to "WE ARE TIME"—a strategic platform that connects the weight of a 120-year legacy with the energy of the present. A brand idea rooted in the value of the moment, designed to resonate within contemporary nightlife culture.',
        "The visual identity was built from the atmosphere surrounding the experience—not from the bottle itself. Crystal, metal, and light became the foundation of the system, while red emerged as the brand's pulse. The result is a visual language that doesn't merely represent the night—it belongs to it. Everything was consolidated into an execution-ready Creative Book, providing a cohesive brand system that could be deployed consistently from day one.",
      ],
    },
  },
  {
    slug: "flor-y-fruto",
    attributes: [
      { label: "Client", value: ["GRUPO AGR (Agrumex)", "Flor y Fruto"] },
      {
        label: "Services",
        value: ["Brand Strategy", "Naming", "Brand Identity", "Packaging"],
      },
      { label: "Industry", value: ["Agro-Industrial"] },
    ],
    es: {
      description:
        "Del campo a la botella: convertir quince años de agroindustria en una marca que el consumidor elige por nombre.",
      context: [
        "Grupo AGR lleva más de quince años operando en la industria citrícola mexicana. Campo, proceso, volumen todo estaba ahí. Lo que no existía era la marca: un nombre, una identidad, una razón para que el consumidor final los eligiera sobre cualquier otra botella en el anaquel.",
        "El mercado de jugos de limón embotellados en México estaba dominado por marcas genéricas o productos con concentrado artificial.",
      ],
      challenge: [
        "El reto no era el producto era el salto.",
        " Pasar de proveedor anónimo de la cadena agroindustrial a marca de consumo con presencia en retail y HORECA al mismo tiempo. Dos canales con lógicas distintas:",
        "el chef que necesita funcionalidad y volumen, y el consumidor en el supermercado que necesita confianza y carácter.",
        "La marca tenía que comunicar origen mexicano Tecomán, el campo, el limonero sin caer en lo folclórico. Tenía que sonar natural y honesta sin sonar artesanal o regional. Y tenía que construirse con escalabilidad: Flor y Fruto no era solo jugo de limón, era la plataforma de marca de un grupo con visión de expandirse a otros productos.",
      ],
      the_work: [
        "El primer acto fue el naming. Antes de cualquier decisión visual, encontramos el nombre en el mismo árbol: el limonero es el único frutal que florece y fructifica de manera simultánea y continua. Flor y fruto conviven en la misma rama al mismo tiempo un ciclo que no para, que no tiene estación. Ese insight no era botánico: era la metáfora exacta de lo que la marca necesitaba ser.",
        '"Flor y Fruto" no describe el producto, lo contextualiza. Trae el campo adentro antes de que abras la botella. Sus dos mitades tienen peso propio: Flor es la promesa, el aroma, lo emocional;',
        "Fruto es la verdad tangible, la precisión natural, el resultado. Juntas construyen una marca en equilibrio entre lo bello y lo útil.",
        "Desde ese núcleo se construyó el sistema completo: identidad visual con símbolo del limonero (raíz y fruto como una sola unidad), paleta que refleja el origen verde campo, verde lima, crema cálida y tipografía que comunica elegancia sin distancia. El packaging fue diseñado para operar en ambos canales sin bifurcar la identidad: misma marca, misma voz, mismo símbolo. El Brand Book cierra el sistema con lineamientos que permiten incorporar futuros productos sin perder el carácter.",
      ],
    },
    en: {
      description:
        "Transforming fifteen years of agricultural expertise into a consumer brand people choose by name.",
      context: [
        "Grupo AGR has spent more than fifteen years operating across Mexico's citrus industry. The infrastructure, production expertise, and scale were already in place. What was missing was a brand—a name, an identity, and a compelling reason for consumers to choose its products over every other bottle on the shelf.",
        "Mexico's bottled lime juice category was largely dominated by generic brands and products made with artificial concentrate, leaving little room for brands built around authenticity and origin.",
      ],
      challenge: [
        "The challenge wasn't the product—it was the transformation.",
        "Grupo AGR needed to evolve from an anonymous supplier within the agricultural value chain into a consumer-facing brand capable of succeeding in both retail and HORECA. Each channel demanded a different value proposition: professional kitchens prioritized functionality and volume, while retail consumers looked for trust, quality, and brand recognition.",
        "The brand also needed to express its Mexican origin—rooted in Tecomán's citrus-growing region—without relying on folkloric or stereotypical visual codes. It had to feel natural, honest, and contemporary, avoiding both artisanal clichés and regional limitations.",
        "Most importantly, the brand had to be built as a scalable platform. Flor y Fruto was never intended to represent only bottled lime juice, but the foundation for a growing portfolio of agricultural products.",
      ],
      the_work: [
        "The project began with naming. Before defining any visual language, we found the answer in the lime tree itself: it is one of the few fruit trees that flowers and bears fruit simultaneously, sustaining a continuous cycle of growth.",
        "That observation became more than a botanical fact—it became the strategic idea behind the brand. Flor y Fruto doesn't describe the product; it frames its origin. It brings the orchard into the experience before the bottle is even opened.",
        "Each word carries a distinct role. Flor represents promise, freshness, and sensory appeal. Fruto embodies authenticity, natural precision, and the tangible result of that promise. Together, they create a brand that balances emotion with function, beauty with purpose.",
        "From this strategic foundation, we developed the complete brand system: a visual identity centered around a lime tree symbol that unifies roots and fruit into a single mark, a color palette inspired by its origin—field green, lime green, and warm cream—and a refined typographic system that conveys quality with approachability.",
        "The packaging was designed to perform consistently across both retail and HORECA without fragmenting the brand experience. One identity, one voice, and one visual system across every touchpoint.",
        "The project culminated in a comprehensive Brand Book, establishing the principles and guidelines needed to support future product extensions while preserving the brand's distinctive character.",
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
        value: ["Brand Strategy", "Brand Identity", "Packaging"],
      },
      { label: "Industry", value: ["Health & Performance / Consumer Goods"] },
    ],
    es: {
      description:
        "La primera marca de electrolitos en México diseñada para los que nunca paran.",
      context: [
        "Hay un perfil de persona en México que ya existe: entrena de lunes a lunes, cuida lo que come, busca rendir más y recuperarse mejor. Tiene entre 20 y 45 años, compra por convicción y no por precio, y cuánto encuentra algo que se siente suyo, lo adopta como identidad.",
        "Esa persona no tenía una marca propia de electrolitos. Usaba lo que encontraba: importados caros, genéricos sin personalidad, o productos pensados para otro mercado. La categoría estaba vacante no por falta de producto, sino por falta de carácter/ identidad.",
      ],
      challenge: [
        "El reto no era formular un buen electrolito – eso ya estaba resuelto. Era construir una marca para que esa persona se sintiera suya. Una marca que no se pareciera a lo que hay actualmente en el mercado. Que tuviera identidad propia, carácter y la capacidad de crecer hacia otros productos sin romperse.",
        "El nombre lo decía todo desde el inicio: Nonstop. No es una descripción del producto, es una declaración de quien lo toma. El reto era que la identidad visual y verbal estuviera a la altura de ese nombre: directo, limpio y sin ruido. Y que el sistema funcionará desde el primer día en packaging, digital, eventos y merchandising al mismo tiempo.",
      ],
      the_work: [
        'Empezamos por definir la narrativa de marca/ el concepto rector antes de tocar el diseño. Nonstop no es una marca de hidratación, es una afirmación silenciosa. "For the non stop crow". Ese insght ordeno todas las decisiones: tono de voz directo y sin adornos, estetica que elmina lo innecesario, un sistema visual construido sobre el negro y el blanco con un unico acento de colr que identifica cada sabor.',
        "El símbolo nace de la letra N: dos formas orgánicas que representan movimiento continuo, ritmo, flujo sin interrupción. Funciona solo o junto al logotipo, nunca combinado – una decisión deliberada para dar flexibilidad sin perder precisión. El logotipo en tipografía sans serif sólida refuerza lo mismo: disciplina, constancia, lo esencial.",
        "El packaging fue diseñado para ser transparente antes de ser bonito. Los ingredientes al frente, las dosis claras, sin promesas vacias. El stick individual como formato principal porque ese es el momento de la marca: antes del entreno, en la bolsa, en la mano, después de la meta. La pleca de color en la parte inferior es el unico elemento que diferncia sabores, manteniendo el sistema limpio y escalable para las versiones que vendran.",
        "El resultado es un sistema que puede vivir en un anaquel, en un evento de running, en una playera y en un billboard, con el mismo carácter que en todos.",
      ],
    },
    en: {
      description:
        "Building Mexico's first electrolyte brand designed for people who never slow down.",
      context: [
        "A new generation of performance-driven consumers has emerged in Mexico. They train consistently, pay close attention to their nutrition, and actively seek products that help them perform better and recover faster. Typically between 20 and 45 years old, they buy with intention rather than price in mind—and when they discover a brand that reflects who they are, they make it part of their identity.",
        "Yet this audience had no brand to truly call its own in the electrolyte category. Their options were limited to expensive imports, generic alternatives, or products designed for entirely different markets.",
        "The opportunity wasn't the product itself—it was creating a brand with a distinctive point of view.",
      ],
      challenge: [
        "The formulation was already strong. The real challenge was building a brand that people wanted to belong to.",
        "Nonstop needed to break away from the visual and verbal conventions of the category while creating a clear identity with enough flexibility to grow into a broader performance portfolio over time. The name established the ambition from day one. Nonstop isn't a product description—it's a statement about the people who choose it.",
        "The identity had to live up to that promise: direct, confident, and stripped of unnecessary complexity. It also needed to perform consistently across every touchpoint—from packaging and digital experiences to events and merchandise.",
      ],
      the_work: [
        "We began by defining the brand narrative before making a single design decision. Nonstop isn't a hydration brand—it's a quiet expression of commitment.",
        "For the Nonstop Crowd became the strategic platform that aligned every element of the identity. It informed a direct, no-nonsense tone of voice, a visual language built on reduction rather than decoration, and a design system centered on black and white with a single color accent assigned to each flavor.",
        "The symbol is derived from the letter N, formed by two organic shapes that communicate continuous movement, rhythm, and uninterrupted flow. Designed to work independently or alongside the wordmark—never as a locked combination—it gives the identity maximum flexibility without sacrificing consistency. The bold sans-serif logotype reinforces the same principles: discipline, consistency, and clarity.",
        "Packaging was designed to prioritize transparency before aesthetics. Ingredients are clearly presented on the front, dosage information is immediately accessible, and the communication avoids exaggerated performance claims. The single-serve stick pack became the hero format because it reflects the brand's real moments of use: before training, inside a gym bag, in hand after a workout, or crossing the finish line. A single color band at the base of each pack differentiates flavors while preserving a clean, scalable system ready to accommodate future product extensions.",
        "The result is a cohesive brand system that performs consistently across every touchpoint—from retail shelves and running events to apparel, digital platforms, and large-scale campaigns—always expressing the same unmistakable character.",
      ],
    },
  },
  {
    slug: "tantan",
    attributes: [
      { label: "Client", value: ["TAN TAN"] },
      {
        label: "Services",
        value: [
          "Brand Strategy",
          "Brand Identity",
          "Naming",
          "Creative Direction",
        ],
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
        "El proyecto llegó sin nombre, sin identidad y sin referentes locales. Construir desde cero en un mercado donde la competencia no es directa pero el contexto sí pesa: la Marina Las Hadas tiene historia propia, y cualquier marca nueva tiene que ganarse su lugar ahí dentro sin disfrazarse del entorno. El reto era crear algo que se sintiera como si siempre hubiera existido y al mismo tiempo, completamente nuevo.",
      ],
      the_work: [
        'El nombre lo dijo todo desde el principio. Tan tán esa expresión mexicana del punto justo, del equilibrio perfecto, del "ni muy muy ni tan tan" se convirtió en el concepto que ordenó todo lo demás. No había que inventar una personalidad: había que nombrar lo que el lugar ya quería ser.',
        "Desde ahí construimos un sistema de identidad completo. Un logotipo con carácter propio que mezcla peso retro con frescura contemporánea. Ilustraciones que habitan la marca con humor sin perder elegancia. Una paleta que balancea el verde esmeralda profundo con el naranja encendido: seria cuando tiene que serlo, eléctrica cuando la noche lo pide.",
        "El sistema se desplegó en cada punto de contacto: menú, señalética, merch, redes sociales y aplicaciones para el espacio. Todo ejecutable desde el día uno, todo coherente, todo con esa vibra de lugar que ya conoces aunque sea tu primera vez.",
      ],
    },
    en: {
      description:
        "Creating a destination where great wine, vinyl records, and meaningful evenings come together.",
      context: [
        "Manzanillo had no shortage of bars. What it lacked was a place to truly disconnect. A place to leave the day behind, settle in with a great glass of wine, listen to music that evokes emotion, and enjoy conversations worth staying for. No unnecessary noise. No rush. Just the kind of atmosphere that invites people to slow down.",
        "Designed for those who understand that the best nights aren't always the loudest—they're the ones you never want to end.",
      ],
      challenge: [
        "The project began with nothing but the ambition. There was no name, no identity, and no local point of reference. The challenge was to build a brand entirely from scratch within a location already defined by its own character. Marina Las Hadas carries a strong identity, and any new venue entering that environment must earn its place without simply blending into the surroundings.",
        "The objective was to create a brand that felt timeless from the moment it opened—something that belonged naturally while offering an experience unlike anything else in the area.",
      ],
      the_work: [
        "Everything started with the name. Tan Tan comes from a familiar Mexican expression associated with balance, effortless confidence, and knowing when something feels just right. That cultural insight became the strategic foundation for the entire brand.",
        "Rather than inventing a personality, we gave a name to the atmosphere the place already aspired to create. From there, we developed a complete identity system.",
        "A distinctive wordmark combines retro character with contemporary refinement, creating a visual presence that feels both nostalgic and current. A series of custom illustrations introduces warmth, personality, and subtle humor without compromising sophistication. The color palette balances deep emerald green with vibrant orange, allowing the brand to shift naturally between relaxed daytime moments and the energy of the evening.",
        "The identity system was designed to extend seamlessly across every customer touchpoint—from menus, signage, and merchandise to social media and environmental applications—creating a cohesive experience from day one. The result is a brand that feels instantly familiar, even on a first visit. A place that doesn't compete for attention, but earns it through atmosphere, character, and a strong sense of belonging.",
      ],
    },
  },
  {
    slug: "amidemi",
    attributes: [
      { label: "Client", value: ["AMÍDEMI"] },
      {
        label: "Services",
        value: [
          "Brand Strategy",
          "Brand Identity",
          "Visual Identity",
          "Creative Direction",
        ],
      },
      { label: "Industry", value: ["Jewerly / E-commerce"] },
    ],
    es: {
      description:
        "Dar significado a una frase que ya vivía en la marca: de mí para mí.",
      context: [
        "La joyería accesible suele moverse entre dos extremos: el lujo aspiracional y las tendencias pasajeras. En medio de ese espacio existía una oportunidad para construir una marca pensada para quienes compran con intención, ya sea para sí mismas o para alguien más.",
        'AMÍDEMI nació con una idea con mucho peso pero aún sin una narrativa capaz de sostenerla: "De mí para mí".',
      ],
      challenge: [
        "El reto no era diseñar una marca de joyería más.",
        "Era construir una identidad con significado propio. Una marca capaz de conectar con mujeres que buscan piezas versátiles, accesibles y atemporales, alejándose tanto de la comunicación aspiracional del lujo como de la estética efímera de las tendencias.",
      ],
      the_work: [
        "Partimos de una pregunta simple: ¿qué representa realmente regalarse joyería?",
        "La respuesta nos llevó a construir un territorio centrado en el auto-regalo como un acto de ritual, conexión y consentimiento personal. Desde ahí desarrollamos una identidad verbal cómplice, sensorial y cercana, capaz de hablar sobre estilo, rutina y significado sin caer en clichés ni excesos.",
        "Visualmente diseñamos un sistema minimalista, cálido y orgánico que refleja la naturalidad de la marca. Una identidad construida para acompañar momentos cotidianos, elevando la percepción de cada pieza sin depender del lenguaje tradicional del lujo.",
        "El resultado fue una marca que convierte una compra cotidiana en un gesto personal. Una identidad diseñada para funcionar tanto cuando alguien se regala algo a sí misma como cuando busca regalar algo con intención.",
      ],
    },
    en: {
      description:
        'Giving meaning to an idea the brand already owned: "From me, to me."',
      context: [
        "The accessible jewelry market often sits between two extremes: aspirational luxury and fast-moving trends. Between those spaces, there was an opportunity to create a brand for people who buy with intention—whether they're choosing a piece for themselves or for someone else.",
        'AMÍDEMI already had a powerful idea at its core, but it lacked the narrative to bring it to life: "From me, to me." The opportunity wasn\'t to invent a new message, but to give lasting meaning to one that was already there.',
      ],
      challenge: [
        "The challenge wasn't to create another jewelry brand. It was to build an identity with genuine emotional meaning. The brand needed to connect with women looking for versatile, timeless, and accessible pieces while distancing itself from both the aspirational language of luxury and the disposable aesthetics of trend-driven fashion.",
        "The objective was to create a brand that felt personal rather than transactional—one where every purchase carried intention beyond the product itself.",
      ],
      the_work: [
        "We started with a simple question: What does buying jewelry for yourself really represent?",
        "The answer became the foundation of the brand. We positioned self-gifting as an act of self-connection, self-expression, and intentional care—not as indulgence, but as a meaningful way of celebrating oneself.",
        "From this strategic territory, we developed a verbal identity that feels intimate, sensory, and conversational. The brand speaks about personal style, everyday moments, and emotional significance with authenticity, avoiding the clichés of both luxury communication and inspirational messaging. Visually, we created a minimalist identity system defined by warmth, softness, and organic simplicity. Every element was designed to reflect the effortless nature of the brand while elevating the perceived value of each piece without relying on traditional luxury codes.",
        "The result is a brand that transforms an everyday purchase into a personal gesture. An identity designed to feel equally meaningful whether someone is choosing a piece for themselves or giving one with intention.",
      ],
    },
  },
  {
    slug: "swappp",
    attributes: [
      { label: "Client", value: ["Swapp"] },
      {
        label: "Services",
        value: ["Rebranding", "Visual Identity", "Packaging Design"],
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
        "Desarrollamos una identidad visual construida alrededor de un principio simple: energía natural.",
        "Creamos un sistema gráfico minimalista, flexible y altamente reconocible, capaz de adaptarse a diferentes presentaciones de producto manteniendo una identidad consistente. El lenguaje visual combina una estructura limpia con elementos gráficos de apoyo, colores vibrantes y una tipografía con personalidad que transmite movimiento, frescura y carácter.",
        "Diseñamos además un sistema de packaging preparado para crecer junto con la marca, donde cada sabor encuentra una expresión propia sin perder reconocimiento dentro del portafolio. El resultado fue una identidad contemporánea y escalable que transforma una bebida energética en una marca con personalidad propia.",
        "GOOD ENERGY ONLY.",
      ],
    },
    en: {
      description: "Redefining what everyday energy looks and feels like.",
      context: [
        "SWAPPP was created with a clear proposition: to offer a more natural source of energy for people with active lifestyles.",
        "The brand already had an approachable personality and a compelling product, but its identity no longer communicated that promise with the clarity and consistency needed to stand out in an increasingly competitive category. The opportunity wasn't to reinvent the brand—it was to express its purpose more convincingly.",
      ],
      challenge: [
        "The energy drink category is largely defined by high-intensity performance, extreme sports, and aggressive visual language. SWAPPP had the opportunity to tell a different story.",
        "Rather than competing through intensity, the brand needed to own a territory centered on natural energy, everyday performance, and a more contemporary lifestyle. The challenge was to build an identity that made this positioning immediately recognizable while creating a flexible system capable of growing with the product portfolio.",
      ],
      the_work: [
        "We developed a visual identity built around one central idea: Natural energy.",
        "The identity system was designed to be minimal, flexible, and instantly recognizable. A clean graphic structure, bold color combinations, and a distinctive typographic approach work together to express movement, freshness, and optimism without relying on the visual conventions of traditional energy brands. Alongside the identity, we created a scalable packaging system that allows every flavor to establish its own personality while maintaining strong portfolio recognition. Each product feels distinct, yet unmistakably part of the same brand family.",
        "The result is a contemporary brand system that transforms an energy drink into a lifestyle brand with a clear point of view, ready to grow across products, channels, and future brand extensions.",
        "GOOD ENERGY ONLY.",
      ],
    },
  },
  {
    slug: "blissify",
    attributes: [
      { label: "Client", value: ["BLISSIFY"] },
      { label: "Services", value: ["Brand Identity"] },
      { label: "Industry", value: ["E-commerce / Fashion & Lifestyle"] },
    ],
    es: {
      description:
        "Transformar el acceso a tendencias globales en una experiencia de marca.",
      context: [
        "Blissify acerca tendencias globales a México a través de una experiencia de personal shopping. Moda, skincare, cosméticos, wellness y tecnología convivían dentro de una misma oferta, pero sin un sistema capaz de comunicarlo de manera consistente.",
      ],
      challenge: [
        "El acceso ya no era el diferenciador. La percepción sí.",
        "La marca corría el riesgo de ser vista como una reventa informal en lugar de una plataforma confiable para descubrir productos y tendencias internacionales.",
      ],
      the_work: [
        "Construimos una identidad editorial diseñada para ordenar la complejidad. Creamos un sistema visual capaz de integrar cinco categorías distintas bajo un mismo lenguaje, manteniendo claridad, coherencia y reconocimiento en cada punto de contacto.",
        "Más que una nueva imagen, desarrollamos una arquitectura de marca que permite crecer con consistencia. Una identidad con la formalidad de una empresa consolidada y la sensibilidad de un referente de tendencias.",
      ],
    },
    en: {
      description:
        "Transforming access to global trends into a curated brand experience.",
      context: [
        "Blissify brings global trends closer to Mexican consumers through a curated personal shopping experience.",
        "From fashion and skincare to beauty, wellness, and technology, the business offered access to a wide range of international products. What it lacked was a cohesive brand system capable of bringing these categories together under a clear and consistent identity.",
      ],
      challenge: [
        "Access was no longer the differentiator. Perception was.",
        "Without a strong identity, Blissify risked being perceived as an informal resale service rather than a trusted destination for discovering international brands, products, and emerging trends. The challenge was to elevate the business into a credible consumer brand while preserving the accessibility and excitement that define the personal shopping experience.",
      ],
      the_work: [
        "We developed an editorial-inspired identity system designed to bring clarity to a diverse product offering.",
        "The visual language was built to unify five distinct categories under a single brand experience, creating consistency, recognition, and flexibility across every customer touchpoint.",
        "More than a visual refresh, the project established a scalable brand architecture capable of supporting future growth without compromising coherence.",
        "The result is an identity that balances the credibility of an established company with the cultural awareness and aesthetic sensitivity of a modern trend curator.",
      ],
    },
  },
  {
    slug: "ratito",
    attributes: [
      { label: "Client", value: ["PRESENT"] },
      {
        label: "Services",
        value: ["Brand Strategy", "Brand Identity", "Naming"],
      },
      { label: "Industry", value: ["Turismo & Hospitalidad"] },
    ],
    es: {
      description: "Ponerle nombre y cara al tiempo bien vivido.",
      context: [
        "El mercado de renta vacacional en México lleva años creciendo, pero sin madurar. Entre Airbnb y los portales de distribución, cualquiera puede listar una propiedad y eso se nota. El resultado: un mercado saturado de opciones que se parecen todas, donde el precio termina siendo el único diferenciador y la experiencia del huésped queda en segundo plano.",
        "Meteoro ventures llegó con una lectura distinta. Vieron en ese desorden una oportunidad: crear una empresa de hospitalidad y property management que no compitiera por precio, sino por experiencia. Una plataforma que entendiera que detrás de cada reserva no hay un cliente buscando alojamiento hay alguien buscando un ratito para desconectarse, para estar, para vivir algo que valga la pena recordar.",
        "La idea de negocio era sólida. Lo que no existía todavía era la marca.",
      ],
      challenge: [
        "Crear desde cero la identidad de una empresa de hospitalidad que no quisiera verse como una empresa de hospitalidad. Ni hotel boutique aspiracional, ni plataforma tecnológica fría, ni el típico logo de casita con palmera que puebla la categoría.",
        "El reto era encontrar una personalidad que hiciera sentir al huésped que estaba eligiendo algo distinto antes de llegar a la propiedad, y convencer al propietario de que sus metros cuadrados estarían en manos de alguien que entiende lo que significa cuidar algo con criterio.",
        "Dos audiencias con necesidades opuestas. Una sola marca que tenía que funcionar para ambas sin perder carácter en el intento.",
      ],
      the_work: [
        "El primer movimiento fue estratégico: encontrar el territorio emocional que pudiera contener todo lo que Ratito quería ser. Ese territorio fue el tiempo no el tiempo como recurso escaso ni como lujo, sino el tiempo como experiencia. El instante que vale. El ratito que recuerdas.",
        "De ahí nació el nombre. Ratito no describe un producto describe una sensación. Es coloquial sin ser informal, cercano sin ser ingenuo. Tiene la calidez de algo hecho con intención y la ligereza de algo que no se toma demasiado en serio. En un mercado lleno de nombres genéricos o en inglés, Ratito se para solo.",
        '"Habitamos instantes. Creamos refugios pensados para disfrutar lo más valioso: el tiempo bien vivido." No habla de propiedades. Habla de lo que pasa dentro de ellas.',
        "La identidad visual tomó la misma dirección: una tipografía de script cálida y con personalidad propia lejos del sans-serif limpio que domina la categoría sobre fotografía que privilegia la atmósfera sobre el inmueble. Los atardeceres, la luz, el silencio antes de que lleguen los demás. El azul como color de la marca: intenso, confiable, con profundidad suficiente para sostener tanto la emoción del huésped como la seriedad que el propietario necesita ver.",
        "El resultado fue una marca que se reconoce al primer golpe de vista y que le dice a quien la ve exactamente lo que necesita escuchar: aquí el tiempo se cuida.",
      ],
    },
    en: {
      description:
        "Naming and shaping a hospitality brand built around the value of time well spent.",
      context: [
        "Mexico's vacation rental market has grown rapidly, but not necessarily with greater differentiation. Platforms like Airbnb have made it easy for anyone to list a property, resulting in a category crowded with similar offerings where price often becomes the primary differentiator and the guest experience is treated as an afterthought.",
        "Meteoro Ventures saw a different opportunity.",
        "Rather than building another property management company, they envisioned a hospitality brand centered on experience. A business that understood every booking as more than a transaction—not someone searching for accommodation, but someone looking for a meaningful escape, a moment to disconnect, and time worth remembering. The business model was already clear. What didn't exist yet was the brand.",
      ],
      challenge: [
        "The challenge was to create the identity of a hospitality company that didn't look or behave like one. It couldn't resemble an aspirational boutique hotel, a cold technology platform, or the familiar visual clichés that dominate the category.",
        "The brand needed to create an emotional connection with guests before they ever arrived, while simultaneously giving property owners confidence that their investment would be managed with professionalism, care, and intention.",
        "Two fundamentally different audiences. One brand capable of earning the trust of both without compromising its character.",
      ],
      the_work: [
        "We began by defining the emotional territory that could unify the entire brand.",
        "That territory became time—not as a scarce resource or a luxury, but as something deeply personal: moments that matter and experiences worth remembering.",
        "From that insight came the name. Present doesn't describe a service; it expresses a mindset. It speaks to being fully present, appreciating the moment, and valuing experiences over transactions. The name is simple, memorable, and emotionally resonant—bringing a universal idea into a category often dominated by generic or overly functional brands.",
        'The brand platform completed the narrative: "We create spaces where time becomes your most valuable experience." Rather than talking about properties, the brand focuses on what happens inside them.',
        "The visual identity follows the same philosophy. A warm, expressive typographic approach moves away from the minimalist sans-serif language common across hospitality brands, while photography prioritizes atmosphere over architecture—natural light, quiet mornings, shared moments, and the emotional quality of a place instead of simply showcasing the space.",
        "A deep blue anchors the identity, balancing warmth and trust while giving the brand the sophistication needed to connect with both guests and property owners.",
        "The result is a distinctive hospitality brand that shifts the conversation away from accommodation and toward something far more valuable: the experience of time well spent.",
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
