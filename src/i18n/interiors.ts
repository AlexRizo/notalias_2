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
        value: ["Visual System", "Packaging", "Launch Kit"],
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
        "Hay un perfil de persona en México que ya existe: entrena de lunes a lunes, cuida lo que come, busca rendir más y recuperarse mejor. Tiene entre 20 y 45 años, compra por convicción y no por precio, y cuando encuentra algo que se siente suyo, lo adopta como identidad.",
        "Esa persona no tenía una marca propia de electrolitos. Usaba lo que encontraba: importados caros, genéricos sin personalidad, o productos pensados para otro mercado. La categoría estaba vacante no por falta de producto, sino por falta de carácter/ identidad.",
      ],
      challenge: [
        "El reto no era formular un buen electrolito – eso ya estaba resuelto. Era construir una marca para que esa persona se sintiera suya. Una marca que no se pareciera a lo que hay actualmente en el mercado. Que tuviera identidad propia, carácter y la capacidad de crecer hacia otros productos sin romperse.",
        "El nombre lo decía todo desde el inicio: Nonstop. No es una descripción del producto, es una declaración de quien lo toma. El reto era que la identidad visual y verbal estuviera a la altura de ese nombre: directo, limpio y sin ruido. Y que el sistema funcionará desde el primer día en packaging, digital, eventos y merchandising al mismo tiempo.",
      ],
      the_work: [
        'Empezamos por definir la narrativa de marca/ el concepto rector antes de tocar el diseño. Nonstop no es una marca de hidratación, es una afirmación silenciosa. "For the non stop crowd". Ese insight ordenó todas las decisiones: tono de voz directo y sin adornos, estética que elimina lo innecesario, un sistema visual construido sobre el negro y el blanco con un único acento de color que identifica cada sabor.',
        "El símbolo nace de la letra N: dos formas orgánicas que representan movimiento continuo, ritmo, flujo sin interrupción. Funciona solo o junto al logotipo, nunca combinado – una decisión deliberada para dar flexibilidad sin perder precisión. El logotipo en tipografía sans serif sólida refuerza lo mismo: disciplina, constancia, lo esencial.",
        "El packaging fue diseñado para ser transparente antes de ser bonito. Los ingredientes al frente, las dosis claras, sin promesas vacías. El stick individual como formato principal porque ese es el momento de la marca: antes del entreno, en la bolsa, en la mano, después de la meta. La pleca de color en la parte inferior es el único elemento que diferencia sabores, manteniendo el sistema limpio y escalable para las versiones que vendrán.",
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
        "En Manzanillo había muchos bares, pero lo que faltaba era un lugar donde desconectarte de verdad. Donde salir del trabajo, soltar el peso del día y entrar a un espacio que te recibe con una buena copa, música que te hace sentir algo y conversación que vale la pena. Sin ruido innecesario, sin prisa.",
        "Un lugar para el que sabe que la mejor noche no siempre es la más loca, a veces es simplemente la que no quieres que termine.",
      ],
      challenge: [
        "El proyecto llegó sin nombre, sin identidad y sin referentes locales. Construir desde cero en un mercado donde la competencia no es directa pero el contexto sí pesa: la Marina Las Hadas tiene historia propia, y cualquier marca nueva tiene que ganarse su lugar ahí dentro sin disfrazarse del entorno. El reto era crear algo que se sintiera como si siempre hubiera existido y al mismo tiempo, completamente nuevo.",
      ],
      the_work: [
        'El nombre lo dijo todo desde el principio. Tan tán esa expresión mexicana del punto justo, del equilibrio perfecto, del "ni muy muy ni tan tan" se convirtió en el concepto que ordenó todo lo demás. No había que inventar una personalidad: había que nombrar lo que el lugar ya quería ser.',
        "Desde ahí construimos un sistema de identidad completo. Un logotipo con carácter propio que mezcla peso retro con frescura contemporánea. Ilustraciones que habitan la marca con humor sin perder elegancia.",
        "Una paleta que balancea el verde esmeralda profundo con el naranja encendido: seria cuando tiene que serlo, eléctrica cuando la noche lo pide.",
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
        value: ["Naming", "Visual System", "Packaging", "Launch Kit"],
      },
      { label: "Industry", value: ["Jewelry / E-commerce"] },
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
        "Desarrollamos una identidad visual construida alrededor de un principio simple: energía natural.",
        "Creamos un sistema gráfico minimalista, flexible y altamente reconocible, capaz de adaptarse a diferentes presentaciones de producto manteniendo una identidad consistente. El lenguaje visual combina una estructura limpia con elementos gráficos de apoyo, colores vibrantes y una tipografía con personalidad que transmite movimiento, frescura y carácter.",
        "Diseñamos además un sistema de packaging preparado para crecer junto con la marca, donde cada sabor encuentra una expresión propia sin perder reconocimiento dentro del portafolio.",
        "El resultado fue una identidad contemporánea y escalable que transforma una bebida energética en una marca con personalidad propia.",
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
        "Meteoro nació con una misión clara: crear y potenciar negocios junto a emprendedores, conectando ideas, capital y talento para construir empresas que trascienden. Pero antes de salir al mundo a impulsar marcas de otros, tenía que resolver su propio reto de identidad.",
        "El ecosistema de venture studios y fondos de inversión en México está lleno de nombres que suenan parecido, prometen lo mismo y se presentan igual. Suits, cifras, retornos. Capital frío, lenguaje corporativo, distancia estratégica. Un mercado donde la diferencia entre un socio real y un inversionista pasivo raramente se hace visible desde la identidad.",
      ],
      challenge: [
        "El reto no era solo nombrar a meteoro era dotarla de una identidad que hiciera tangible algo intangible: la diferencia entre un capital que acompaña y uno que transforma.",
        "Había que construir una marca capaz de hablarle al emprendedor que busca más que dinero, sin caer en el discurso motivacional vacío. Una identidad que transmitiera estructura y visión de largo plazo, pero que al mismo tiempo se sintiera dinámica, real y con criterio propio. Que no sonara a fondo, ni a aceleradora, ni a consultora. Que sonara a socio.",
        "El nombre ya existía. La tarea era darle sistema, profundidad y presencia.",
      ],
      the_work: [
        "El punto de partida fue encontrar el territorio de sentido que justificara todo lo demás. Ese territorio fue el impacto: no como promesa, sino como dirección. Un meteoro no avisa, no pide permiso aparece, genera cambio y deja marca.",
        'De ahí nació el claim "Impulsamos ideas que cambian industrias" una declaración que no describe lo que meteoro hace, sino lo que meteoro mueve. El lenguaje de la marca se construyó desde la misma lógica: preciso, estratégico, sin adornos. Verbos que pesan, frases que avanzan. ',
        "La identidad visual tomó ese mismo impulso. Una tipografía geométrica y limpia Bai Jamjuree y Standard que combina solidez con modernidad. Un símbolo que abstrae la trayectoria del meteoro: núcleo claro, dirección definida, listo para impactar. Una paleta construida sobre dos ejes: Insight Blue, azul profundo que habla de visión y liderazgo; y Venture Core, gris azuláceo que ancla la estructura y la ejecución. El sistema completo verbal y visual se diseñó para ser ejecutable desde el día uno, en papelería, comunicación digital, OOH y presencia web. Coherente en todos los soportes. Reconocible desde cualquier punto de contacto. Meteoro salió al mundo con una identidad que no necesita explicación. Se presenta sola.",
      ],
    },
    en: {
      description:
        "Building the identity of a venture studio dedicated to building businesses from the ground up.",
      context: [
        "Meteoro was founded with a clear mission: to build and scale businesses alongside entrepreneurs by connecting ideas, capital, and talent to create companies with lasting impact.",
        "Before helping founders shape the next generation of businesses, however, Meteoro needed to define its own identity.",
        "Mexico's venture studio and investment landscape is crowded with firms that look, sound, and position themselves in remarkably similar ways. Corporate language, financial metrics, and institutional aesthetics dominate the category, making it difficult to distinguish true operating partners from traditional sources of capital.",
        "The opportunity was to build a brand that reflected a fundamentally different way of investing.",
      ],
      challenge: [
        "The challenge extended far beyond visual identity. Meteoro needed to express something inherently intangible: the difference between capital that simply funds growth and capital that actively helps create it.",
        "The brand had to resonate with founders looking for more than investment—entrepreneurs seeking a strategic partner capable of contributing experience, perspective, and long-term commitment. It needed to communicate structure without rigidity, ambition without corporate distance, and credibility without relying on the conventions of venture capital firms, accelerators, or consulting companies.",
        "The name already existed. Our role was to transform it into a complete brand system with clarity, depth, and presence.",
      ],
      the_work: [
        "Our starting point was defining the brand's strategic territory. That territory became impact—not as an aspiration, but as a direction. A meteor doesn't announce its arrival. It creates momentum, changes trajectories, and leaves a lasting mark. That idea became the foundation for the entire identity system.",
        'From this positioning emerged the brand platform: "Powering ideas that transform industries." More than a description of what Meteoro does, it expresses the kind of change the venture studio exists to create. The verbal identity follows the same philosophy: precise, strategic, and intentional. Every message is built around confident language, purposeful verbs, and concise statements that move ideas forward rather than embellish them.',
        "The visual identity translates that momentum into form. A geometric typographic system—built with Bai Jamjuree and Standard—balances precision with contemporary character. The symbol abstracts the trajectory of a meteor: a defined core moving with clarity and purpose, ready to create impact. The color palette is anchored by two core assets. Insight Blue conveys vision, intelligence, and leadership, while Venture Core, a muted blue-grey, reinforces structure, execution, and long-term thinking. The complete identity system—both verbal and visual—was designed for immediate implementation across every touchpoint, from corporate communications and digital platforms to out-of-home campaigns, stationery, and the website.",
        "The result is a brand that communicates its role without explanation: not simply an investor, but a venture-building partner with a clear point of view and an identity designed to match its ambition.",
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
        "Las empresas tecnológicas crecen cada vez más rápido, pero muchas siguen enfrentando el mismo problema: la estrategia vive en documentos, juntas y presentaciones, mientras la operación diaria avanza por otro camino.",
        "StrategyOS nace para cerrar esa brecha. Una plataforma impulsada por AI diseñada para founders, C-levels y líderes que necesitan visibilidad, estructura y claridad para conectar la estrategia con la ejecución. En una categoría dominada por herramientas complejas y discursos centrados en productividad, la oportunidad estaba en construir una marca que hablara de resultados, no de procesos.",
      ],
      challenge: [
        "El reto no era presentar otra herramienta de planeación.",
        "Era construir una marca capaz de reclamar un territorio propio: convertir la estrategia en un sistema vivo, medible y presente en el día a día. La identidad debía transmitir inteligencia y capacidad analítica sin caer en el lenguaje frío de software corporativo, posicionando a StrategyOS como el aliado que ayuda a los líderes a tomar mejores decisiones y generar impacto real.",
      ],
      the_work: [
        "Partimos de una idea central: la claridad es el motor de la ejecución.",
        'De ahí nació el territorio narrativo "Where Clarity Drives Execution", una plataforma estratégica que transforma la claridad en una ventaja competitiva. La marca fue diseñada para hablarle a líderes que buscan resultados, no más complejidad. ',
        "Construimos una identidad verbal basada en la combinación de tres arquetipos: El Creador, El Mentor Analista y El Social Techy. Un lenguaje inteligente, técnico pero accesible, capaz de comunicar profundidad sin recurrir al hype tecnológico.",
        "Visualmente desarrollamos un sistema limpio, numérico y contemporáneo que refleja exactamente lo que el producto promete: orden, estructura, visibilidad y foco. Cada elemento fue diseñado para reforzar la percepción de una plataforma tecnológica orientada a outcomes, donde la estrategia deja de ser una intención y se convierte en ejecución medible.",
        "El resultado es una marca preparada para escalar junto con el producto: moderna, confiable y construida para demostrar que la mejor estrategia es la que sucede todos los días.",
      ],
    },
    en: {
      description:
        "Designing the operating system for leaders who turn strategy into execution.",
      context: [
        "Technology companies are scaling faster than ever, yet many continue to face the same challenge: strategy lives in documents, presentations, and leadership meetings, while day-to-day operations follow a different path.",
        "Strategy OS was created to close that gap.",
        "Powered by AI, the platform is designed for founders, executives, and leadership teams who need visibility, structure, and clarity to align strategic direction with everyday execution. In a category crowded with complex software and productivity-driven messaging, the opportunity was to build a brand centered on outcomes rather than processes.",
      ],
      challenge: [
        "The challenge wasn't to launch another planning platform.",
        "It was to establish a distinct position within the category by redefining strategy as a living operating system—one that is measurable, actionable, and embedded in daily decision-making.",
        "The identity needed to communicate intelligence, analytical rigor, and strategic thinking without adopting the impersonal tone typical of enterprise software. Instead, Strategy OS had to position itself as the trusted partner that empowers leaders to make better decisions and drive meaningful business outcomes.",
      ],
      the_work: [
        'We began with a simple strategic belief: Clarity drives execution. From that idea, we developed the brand platform "Where Clarity Drives Execution"—a positioning that reframes clarity as a competitive advantage rather than a byproduct of planning.',
        "The brand was designed for leaders who seek measurable impact, not additional complexity.",
        "We built a verbal identity by combining three complementary archetypes: The Creator, The Analytical Mentor, and The Social Technologist. The resulting voice is intelligent, precise, and approachable—technical enough to establish credibility while remaining accessible and free from the exaggerated language often associated with AI products.",
        "Visually, we created a clean, structured, and contemporary identity system inspired by the principles the platform itself delivers: clarity, organization, visibility, and focus. Every element reinforces the perception of a technology platform built around measurable outcomes, where strategy evolves from static intent into continuous execution.",
        "The result is a scalable brand system designed to grow alongside the product—modern, credible, and built to demonstrate that the most effective strategy is the one that gets executed every day.",
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
        "El mercado de la hospitalidad boutique está saturado de marcas que prometen experiencias únicas y terminan diciendo lo mismo. El reto no era crear una marca de hotel, era crear un territorio de pertenencia. Un nombre que pudiera viajar, adaptarse a nuevos destinos y seguir siendo reconocible sin perder su alma. Y hacerlo sin caer en el lujo performativo ni en la autenticidad forzada.",
      ],
      the_work: [
        "El punto de partida fue el nombre. SERES no describe un lugar, describe a quienes lo habitan. Desde ahí se construyó todo: un concepto creativo anclado en la conexión humana, la vulnerabilidad como fuerza y la comunidad como arquitectura social.",
        'La identidad verbal se desarrolló desde la filosofía "la simplicidad es la mayor de las sofisticaciones" traducida en un sistema de lenguaje que celebra lo local, lo humano y lo presente.',
        "El sistema visual respondió al mismo principio: propuestas que habitan el espacio entre lo contemporáneo y lo artesanal, entre la serenidad del retiro y la energía del beach club.",
        "El resultado es una marca que puede crecer, hacia tulum, puerto escondido, etc. sin perder lo que hace SERES.",
      ],
    },
    en: {
      description:
        "Creating the identity of a place where people come simply to be.",
      context: [
        "SERES was born in Sayulita, a destination experiencing rapid growth where local identity is constantly being negotiated between authenticity and tourism. Its vision was different: a boutique hotel and beach club designed not to compete with the destination, but to amplify it. A hospitality brand conceived as a platform—one capable of expanding into new locations while embracing the unique culture, character, and rhythm of every place it inhabits. The ambition wasn't to replicate an experience. It was to create a brand that could belong anywhere by genuinely belonging somewhere first.",
      ],
      challenge: [
        "The boutique hospitality market is saturated with brands promising unique experiences while communicating virtually the same message. The challenge wasn't to create another hotel brand. It was to define a territory of belonging.",
        "The name needed to travel across destinations, adapt to different cultural contexts, and remain instantly recognizable without losing its essence. At the same time, the brand had to avoid both performative luxury and the increasingly familiar aesthetic of manufactured authenticity. The goal was to create a hospitality brand rooted in human connection rather than hospitality conventions.",
      ],
      the_work: [
        "Everything began with the name. SERES doesn't describe a place—it describes the people who give that place meaning. That insight became the strategic foundation for the entire brand. We built a creative platform centered on human connection, vulnerability as strength, and community as the architecture of meaningful experiences. Rather than positioning the brand around amenities or destinations, we positioned it around the relationships and moments that naturally unfold within its spaces.",
        "The verbal identity was inspired by the belief that simplicity is the highest form of sophistication, resulting in a voice that celebrates local culture, human connection, and living fully in the present. The visual identity follows the same philosophy. It balances contemporary design with handcrafted character, creating a system capable of moving seamlessly between the calm of a boutique retreat and the vibrant energy of a beach club without losing coherence. The result is a scalable hospitality brand designed to grow into future destinations—from Tulum to Puerto Escondido and beyond—while preserving the qualities that make SERES unmistakably itself.",
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
        "El mercado de sal artesanal está lleno de productos que se esconden detrás del folclor o del packaging bonito sin decir nada real. El reto no era hacer que SALAR se viera premium, era hacer que se sintiera honesta. Que quien la tuviera en la mano entendiera de dónde viene, quién la cosechó y por qué eso importa. Sin romantizar, sin exagerar.",
      ],
      the_work: [
        "El territorio de marca se construyó desde una verdad simple: esto no se fabrica, se cosecha. De ahí nació todo, un tono de voz directo y sin adornos, un sistema visual que habla de tierra, mar y sol, y un símbolo que retrata el instante exacto en que el agua se convierte en sal viva.",
        "El packaging se diseñó en dos versiones: pouch premium y pouch comercial, para que la marca pudiera vivir tanto en una cocina de autor como en un mercado local, sin perder coherencia ni carácter. La paleta, los costales, la lata, el sitio web. Todo materializa la misma idea. Una sal viva, honesta y hecha con paciencia.",
      ],
    },
    en: {
      description:
        "Revealing the value of salt shaped by time, place, and craftsmanship.",
      context: [
        "For more than 500 years, the salt flats of Cuyutlán, Colima have produced salt using the same ancestral process: drawing mineral-rich water from underground wells, allowing it to evaporate naturally under the sun, and harvesting every crystal by hand. The result is a salt distinguished by its clean flavor, crisp texture, and volcanic mineral profile. What was missing wasn't quality—it was a brand capable of communicating the value of that origin and craftsmanship.",
      ],
      challenge: [
        "The artisanal salt category is crowded with brands that rely on folkloric narratives or premium-looking packaging while saying very little about the product itself. The challenge wasn't to make SALAR look premium. It was to make it feel authentic.",
        "The brand needed to communicate where the salt comes from, who harvests it, and why that process matters—without romanticizing tradition or overstating the story. Authenticity had to come from transparency rather than storytelling alone.",
      ],
      the_work: [
        "The brand was built around one simple truth: Salt isn't manufactured. It's harvested. That belief became the foundation of the entire identity system. We developed a verbal identity that is direct, confident, and free of unnecessary embellishment, allowing the product's origin to speak for itself. The visual language draws inspiration from the three elements that define the harvesting process—earth, sea, and sun—while the symbol captures the precise moment when seawater transforms into living salt.",
        "The packaging system was developed across both premium and commercial pouch formats, enabling the brand to perform equally well in fine dining kitchens and local markets without compromising consistency or character. From the color palette and woven sacks to the signature tin and digital experience, every touchpoint reinforces the same idea:",
        "A living salt, harvested with patience, shaped by nature, and presented with honesty.",
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
        "La categoría de snacks saludables ha crecido impulsada por consumidores que buscan mejores alternativas sin renunciar al sabor. Sin embargo, gran parte del mercado sigue comunicando desde la restricción: menos calorías, menos culpa, menos indulgencia.",
        "manna foods® nació para demostrar que la alimentación saludable también puede ser emocionante, sorprendente y profundamente disfrutable. Una marca construida para cambiar la forma en que las personas viven la experiencia de un snack.",
      ],
      challenge: [
        "En una categoría donde la salud suele comunicar sacrificio, la oportunidad estaba en cambiar la conversación.",
        "La marca necesitaba construir una identidad capaz de equilibrar bienestar, innovación y deseo, creando un lenguaje que transmita calidad, cercanía y sabor sin depender de los códigos tradicionales de la alimentación saludable.",

        "Además, el sistema debía permitir el crecimiento de un portafolio de submarcas y nuevos sabores bajo una identidad coherente y reconocible.",
      ],
      the_work: [
        "Desarrollamos una plataforma de marca construida alrededor de una idea central: Transformando el sabor de lo saludable.",
        "A partir de este concepto creamos una identidad verbal optimista, cercana y llena de energía, enfocada en inspirar una nueva forma de disfrutar los snacks saludables. La narrativa posiciona a manna foods® como una marca que transforma ingredientes cotidianos en experiencias sorprendentes, celebrando la innovación, el sabor y el bienestar como parte de un mismo universo.",
        "Visualmente diseñamos un sistema limpio, contemporáneo y altamente flexible que comunica frescura, calidad e innovación. La identidad incorpora un símbolo construido a partir de cuatro chips que forman una flor, representando la unión entre naturaleza, sabor y transformación. Además, desarrollamos una arquitectura preparada para acompañar el crecimiento de submarcas como Colichips y Kalechips, manteniendo consistencia en cada empaque y punto de contacto.",
        "El resultado es una marca preparada para competir en una categoría en constante evolución, demostrando que lo saludable no tiene por qué sentirse como una renuncia, sino como una experiencia que despierta el apetito desde el primer vistazo.",
      ],
    },
    en: {
      description: "Making cravings the best ally of healthy living.",
      context: [
        "The healthy snack category has grown rapidly as consumers seek better-for-you alternatives without compromising on taste. Yet much of the market continues to communicate through restriction: fewer calories, less guilt, fewer indulgences. Manna Foods® was created to challenge that narrative. The ambition was to prove that healthy eating can be exciting, flavorful, and genuinely enjoyable—a brand designed to transform the way people experience everyday snacking.",
      ],
      challenge: [
        "In a category where health is often associated with sacrifice, the opportunity was to change the conversation. The brand needed an identity capable of balancing wellness, innovation, and desire, creating a language that communicated quality, approachability, and great taste without relying on the familiar visual and verbal codes of healthy food brands.",
        "At the same time, the system needed to support long-term growth, providing a scalable architecture for future sub-brands and product lines while maintaining a cohesive and recognizable identity.",
      ],
      the_work: [
        "We developed a brand platform around one central idea: Transforming the Flavor of Healthy.",
        "This strategic concept became the foundation of a verbal identity that is optimistic, approachable, and full of energy—encouraging a new way of thinking about healthy snacks. Rather than focusing on what consumers should avoid, the brand celebrates what they gain: flavor, discovery, and enjoyment. The narrative positions Manna Foods® as a company that transforms everyday ingredients into memorable food experiences, bringing together innovation, taste, and wellbeing within a single brand universe.",
        "Visually, we created a clean, contemporary, and highly flexible identity system that communicates freshness, quality, and innovation. At its core is a symbol composed of four chips forming a flower, representing the intersection of nature, flavor, and transformation. We also developed a scalable brand architecture designed to accommodate sub-brands such as Colichips and Kalechips, ensuring consistency across packaging, product lines, and every customer touchpoint.",
        "The result is a future-ready brand built to compete in an evolving category—demonstrating that healthy eating should never feel like a compromise, but an experience that sparks appetite from the very first glance.",
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
        "La compra de un diamante rara vez responde únicamente al producto. Detrás de cada elección existe una historia de compromiso, esfuerzo y decisiones que marcan un antes y un después.",
        "En un mercado donde la mayoría de las marcas compiten por precio, inventario o exclusividad, Pascal identificó una oportunidad distinta: construir una experiencia basada en la empatía y el significado de cada momento.",
      ],
      challenge: [
        "La categoría suele comunicar lujo, estatus y aspiración.",
        "Pascal necesitaba diferenciarse construyendo una marca que acompañara emocionalmente a sus clientes durante uno de los momentos más importantes de sus vidas. La identidad debía transmitir confianza, cercanía y sofisticación, convirtiendo el proceso de elegir un diamante en una experiencia segura y profundamente personal.",
      ],
      the_work: [
        "Construimos la estrategia alrededor de una idea central: Celebrando hitos.",
        "Desde este territorio desarrollamos una identidad verbal que reconoce el esfuerzo, el compromiso y las decisiones valientes que existen detrás de cada compra. Más que vender diamantes, la marca celebra los momentos que transforman la vida de sus clientes, convirtiéndose en un acompañante cercano durante todo el proceso.",
        "Visualmente diseñamos un sistema elegante y atemporal que equilibra sofisticación y calidez. La identidad combina una estética limpia con un lenguaje contemporáneo, alejándose de los códigos tradicionales del lujo para construir una experiencia más humana, transparente y cercana. Cada elemento fue pensado para reforzar la confianza y consolidar a Pascal como un espacio donde elegir una joya también significa celebrar una historia personal.",
        "El resultado es una marca que trasciende el producto y convierte cada diamante en el símbolo de un logro, una promesa o un nuevo comienzo.",
      ],
    },
    en: {
      description:
        "Building a brand that celebrates the milestones worth remembering.",
      context: [
        "Purchasing a diamond is rarely just about the product.",
        "Behind every decision lies a story of commitment, ambition, and milestones that mark a meaningful turning point in someone's life.",
        "In a category where most brands compete through price, inventory, or exclusivity, Pascal recognized a different opportunity: to build an experience rooted in empathy and the emotional significance behind every purchase.",
      ],
      challenge: [
        "The fine jewelry category is traditionally defined by luxury, status, and aspiration. Pascal needed to stand apart by creating a brand that supports customers through one of the most meaningful moments of their lives. The identity had to inspire trust, warmth, and sophistication while transforming the process of choosing a diamond into an experience that feels personal, reassuring, and deeply memorable.",
      ],
      the_work: [
        "We built the strategy around one defining idea: Celebrating Life's Milestones. This strategic platform shaped a verbal identity that acknowledges the commitment, courage, and personal achievements behind every purchase. Rather than focusing on diamonds themselves, the brand celebrates the stories they represent, positioning Pascal as a trusted companion throughout each customer's journey.",
        "Visually, we designed an identity system that balances timeless elegance with genuine warmth. A refined and contemporary aesthetic moves away from the traditional codes of luxury, creating a more human, transparent, and approachable brand experience. Every element of the system was crafted to reinforce confidence, ensuring that Pascal is perceived not simply as a jeweler, but as a place where selecting a diamond becomes the celebration of a personal story.",
        "The result is a brand that transcends the product itself, transforming every diamond into a symbol of achievement, commitment, and new beginnings.",
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
        "El pádel ha dejado de ser únicamente un deporte para convertirse en una experiencia de comunidad. Cada partido genera nuevas conexiones entre jugadores, clubes, entrenadores, marcas y amigos, mientras el ecosistema digital continúa creciendo con soluciones independientes para cada necesidad.",
        "AppPadel nació para reunir todo ese universo en un solo lugar, construyendo una plataforma capaz de acompañar al jugador antes, durante y después de cada partido.",
      ],
      challenge: [
        "La oportunidad no estaba en crear otra aplicación para jugadores de pádel.",
        "El verdadero desafío consistía en construir una marca capaz de integrar múltiples servicios bajo una sola experiencia, posicionando a AppPadel como el punto de encuentro de una comunidad global. La identidad debía comunicar cercanía, simplicidad e innovación sin perder el componente humano que define al deporte.",
      ],
      the_work: [
        "Construimos la estrategia alrededor de un concepto central: La red del pádel.",
        "Desde este territorio desarrollamos una identidad que entiende el deporte como un espacio de conexión. Más que una plataforma tecnológica, AppPadel se presenta como un ecosistema donde reservar pistas, encontrar jugadores, comprar equipamiento, seguir noticias, realizar apuestas y descubrir nuevos lugares forman parte de una misma experiencia.",
        "Diseñamos una identidad verbal cercana, optimista y colaborativa, acompañada de un sistema visual minimalista y flexible pensado para conectar con una comunidad global de jugadores. Cada elemento fue desarrollado para reforzar la idea de una plataforma simple, accesible y preparada para crecer junto con el deporte.",
        "El resultado es una marca que trasciende la funcionalidad de una aplicación y se posiciona como el hub social que conecta al mundo del pádel.",
      ],
    },
    en: {
      description:
        "Bringing the entire padel experience together through one connected platform.",
      context: [
        "Padel has evolved beyond a sport into a thriving social ecosystem. Every match creates new connections between players, clubs, coaches, brands, and communities, while the digital landscape continues to grow through fragmented tools designed to solve individual needs. AppPadel was created to bring that entire ecosystem together within a single platform—supporting players before, during, and after every match.",
      ],
      challenge: [
        "The opportunity wasn't to launch another app for padel players. The real challenge was to build a brand capable of unifying multiple services into one seamless experience, positioning AppPadel as the central hub of a growing global community. The identity needed to communicate simplicity, innovation, and accessibility while preserving the human connection that makes the sport unique.",
      ],
      the_work: [
        "We built the strategy around one defining idea: The Padel Network. This strategic territory positioned the brand around connection rather than functionality.",
        "Instead of presenting AppPadel as just another technology platform, we framed it as a complete ecosystem where booking courts, finding playing partners, shopping for equipment, following tournaments, exploring news, placing bets, and discovering new clubs all become part of one connected experience. We developed a verbal identity that is approachable, optimistic, and community-driven, supported by a clean and flexible visual system designed to resonate with a global audience of players.",
        "Every element of the identity reinforces the platform's promise: making the sport more connected, accessible, and intuitive without adding complexity. The result is a scalable brand that goes beyond the role of an application, positioning AppPadel as the social hub for the global padel community.",
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
        'Partimos del propio nombre como territorio de marca. Buen Punto nace de una expresión cotidiana que funciona como una forma de validar, coincidir y continuar una conversación: "Buen punto, tienes razón." Una frase sencilla, cercana y flexible que permitió construir una personalidad de marca que invita a la conversación.',
        "A partir de este concepto desarrollamos una identidad que busca hacer del tequila una elección natural para distintos momentos de consumo. Una marca que no dicta cómo celebrar, sino que está lista para acompañar la ocasión.",
        "Visualmente, construimos un sistema que equilibra tradición y modernidad. El logotipo parte de una estructura clásica, incorporando pequeños guiños gráficos que le aportan carácter y personalidad sin alejarlo de los códigos de la categoría.",
        "Para el símbolo desarrollamos una reinterpretación del agave. En lugar de recurrir a la representación literal que domina gran parte del universo del tequila, abstrajimos sus formas y modificamos su composición para crear un recurso propio, reconocible y menos predecible.",
        "El sistema se extiende al packaging a través de una etiqueta que apela a los sentidos del tacto y de la vista: papel texturizado y materiales que aportan un distintivo visual, con terminado como la técnica debossing y hot stamping (foil) que resalta el punto sobre la ilustración de los volcanes, todo complementado con una paleta de colores e ilustraciones que refuerzan el equilibrio entre lo tradicional y lo contemporáneo. Finalmente, los sentidos del olfato y del gusto quedan a cargo del producto mismo.",
        "El resultado es una marca que reconoce de dónde viene, pero está diseñada para todo lo que viene después: una nueva forma de llevar el tequila a la mesa, a la celebración y a los momentos que simplemente son un buen punto.",
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
        'We started from the name itself as brand territory. "Buen Punto" comes from an everyday phrase that validates, agrees, and carries a conversation forward, a personality that invites dialogue instead of dictating how to celebrate.',
        "Visually we built a system that balances tradition and modernity: a logotype with a classic structure carrying its own graphic details, and an abstract reinterpretation of agave instead of the literal imagery that dominates the category.",
        "The system extends into packaging through a label that appeals to touch and sight, with textured paper and finishes that highlight the point over an illustration of volcanoes, leaving smell and taste to the product itself.",
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
        'El punto de partida fue definir un concepto que pudiera hablar por todas las marcas al mismo tiempo: "Confianza que conduce el futuro." Una idea lo suficientemente sólida para sostener al grupo, y lo suficientemente flexible para no ahogar a las marcas que opera.',
        'Desde ahí construimos una identidad visual corporativa contemporánea, complementada con una paleta sobria siendo el negro de base con acentos en rojo vibrante, diseñada para comunicar autoridad sin perder accesibilidad. Para darle movimiento y presencia al sistema, desarrollamos recursos gráficos lineales construidos a partir de la silueta de la "R", que no viven estáticos en una página sino que se superponen directamente sobre los vehículos en contextos reales: en el espectacular, en la señalética, en la campaña digital. La marca no describe los autos, los habita.',
        "Una de las piezas más críticas del proyecto fue el sistema de co-branding. Grupo Rancagua opera marcas con identidades propias y reglas estrictas (Nissan Rancagua, Neo Motors, Bestune, JIM) y el reto era que el grupo pudiera aparecer junto a ellas sin competir ni diluirse. Establecimos jerarquías claras, zonas de convivencia y proporciones definidas para que Grupo Rancagua funcione siempre como respaldo sólido: presente, reconocible, pero nunca por encima de la marca socia.",
        "Todo el sistema se tradujo en aplicaciones concretas: papelería corporativa, campañas digitales, espectaculares y señalética, un Brand Book ejecutable desde el primer día.",
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
        'The starting point was defining a concept that could speak for every brand at once: "Confidence that drives the future." An idea solid enough to hold the group together, and flexible enough not to overshadow the brands it operates.',
        'From there we built a contemporary corporate identity, with black as its base and red accents, and linear graphic resources built from the silhouette of the "R" that overlay directly onto vehicles in real settings: the brand doesn\'t describe the cars, it inhabits them.',
        "The most critical piece was the co branding system. Grupo Rancagua operates brands with their own identities and strict rules, and the challenge was letting the group appear alongside them without competing or diluting them. We established clear hierarchies and defined proportions so Grupo Rancagua always functions as solid backing: present, recognizable, but never above the partner brand.",
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
        "Desarrollamos la estrategia alrededor de una idea central: Healthy Fast Food.",
        "A partir de este concepto construimos una identidad que redefine lo que significa la comida rápida, integrando cuatro atributos esenciales en una sola propuesta: saludable, rápida, accesible y deliciosa. La identidad verbal adopta un tono directo, irreverente y cercano, mientras que el concepto creativo All In One Alternative comunica una solución completa para un estilo de vida en movimiento.",
        "Visualmente diseñamos un sistema contemporáneo con una personalidad fresca y urbana. La identidad combina recursos gráficos minimalistas, una paleta vibrante y un lenguaje flexible que transmite dinamismo sin perder claridad. Cada aplicación fue pensada para reforzar la percepción de una marca moderna, honesta y accesible, capaz de romper con los códigos tradicionales de la categoría.",
        "El resultado es una marca que deja de enfrentar salud y sabor como conceptos opuestos para convertirlos en una misma experiencia.",
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
        "We built the strategy around one central idea: healthy fast food. From there we developed an identity that redefines what fast food means, with a direct, approachable tone and a creative concept, All In One Alternative, that communicates a complete solution for a life in motion.",
        "Visually we designed a contemporary system with a fresh, urban personality, combining minimalist graphic resources with a vibrant palette, built to break away from the category's traditional codes.",
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
