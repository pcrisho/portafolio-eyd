export type CareerSlug = "admin-turismo" | "comunicacion" | "ingenieria";

export type IconKey =
  | "accessibility"
  | "baby"
  | "book-open-text"
  | "briefcase-business"
  | "compass"
  | "credit-card"
  | "database"
  | "file-search"
  | "globe"
  | "handshake"
  | "heart-handshake"
  | "leaf"
  | "map-pinned"
  | "megaphone"
  | "monitor-smartphone"
  | "scale"
  | "sparkles"
  | "smartphone"
  | "trees"
  | "ticket"
  | "users"
  | "wand-sparkles";

export interface CareerTheme {
  name: string;
  subtitle: string;
  colorBg: string;
  colorAccent: string;
  colorText: string;
  colorMuted: string;
  colorCard: string;
  colorBorder: string;
  colorPositive: string;
  colorNegative: string;
  gradient: string;
}

export interface CareerData {
  slug: CareerSlug;
  id: string;
  theme: CareerTheme;
  metafora: {
    titulo: string;
    descripcion: string;
  };
  problematica: string;
  poblacion: { iconKey: IconKey; titulo: string; descripcion: string }[];
  scheler: { nivel: string; valor: string; descripcion: string; iconKey: IconKey }[];
  mapaCritico: {
    negligencias: string[];
    acciones: string[];
  };
  integrantes: { nombre: string; carrera: string }[];
}

export const careerData: Record<CareerSlug, CareerData> = {
  "admin-turismo": {
    slug: "admin-turismo",
    id: "administracion-turismo",
    theme: {
      name: "Administración, Hotelería y Turismo",
      subtitle: "El explorador que abre caminos nuevos sin destruir los que encuentra",
      colorBg: "#f1f8e9",
      colorAccent: "#2e7d32",
      colorText: "#3e2723",
      colorMuted: "#795548",
      colorCard: "#ffffff",
      colorBorder: "#a5d6a7",
      colorPositive: "#2e7d32",
      colorNegative: "#c62828",
      gradient: "from-amber-400/20 via-bosque-500/10 to-tierra-500/10",
    },
    metafora: {
      titulo: "El explorador ético deja los destinos mejor de como los encontró",
      descripcion:
        "Representa la tensión creativa entre descubrir y preservar, expandir sin depredar. El verdadero explorador no conquista territorios: los comprende, los respeta y los regenera.",
    },
    problematica:
      "Greenwashing y sostenibilidad falsa en empresas turísticas: cuando las certificaciones verdes ocultan prácticas que destruyen ecosistemas y culturas.",
    poblacion: [
      {
        iconKey: "users",
        titulo: "Comunidades locales",
        descripcion:
          "Destinos turísticos sobreexplotados cuyas comunidades pierden control sobre su territorio, su cultura y su economía frente a operadores externos.",
      },
      {
        iconKey: "briefcase-business",
        titulo: "Trabajadores informales",
        descripcion:
          "Personal del sector turismo sin protección laboral, sin contratos formales y sin acceso a seguridad social, expuestos a temporadas de alta demanda sin derechos.",
      },
      {
        iconKey: "trees",
        titulo: "Ecosistemas y territorios indígenas",
        descripcion:
          "Áreas naturales y comunidades originarias afectadas por turismo masivo: contaminación, desplazamiento y mercantilización de su patrimonio cultural.",
      },
      {
        iconKey: "ticket",
        titulo: "Consumidores engañados",
        descripcion:
          "Viajeros que eligen destinos o servicios bajo la promesa de sostenibilidad falsa, sin herramientas para distinguir certificaciones genuinas de greenwashing.",
      },
    ],
    scheler: [
      {
        nivel: "I",
        valor: "Espirituales",
        descripcion: "Autenticidad y verdad en la sostenibilidad",
        iconKey: "sparkles",
      },
      {
        nivel: "II",
        valor: "Vitales",
        descripcion: "Preservación de ecosistemas y culturas vivas",
        iconKey: "leaf",
      },
      {
        nivel: "III",
        valor: "De civilización",
        descripcion: "Gestión responsable y turismo regenerativo",
        iconKey: "compass",
      },
      {
        nivel: "IV",
        valor: "Sensoriales",
        descripcion: "Experiencia turística y rentabilidad del negocio",
        iconKey: "credit-card",
      },
    ],
    mapaCritico: {
      negligencias: [
        "Certificaciones verdes falsas o auto-otorgadas sin verificación externa",
        "Masificación de destinos frágiles sin límites de carga",
        "Explotación de la cultura local como producto folclórico desechable",
        "Silencio cómplice ante prácticas corruptas en adjudicaciones turísticas",
      ],
      acciones: [
        "Auditar el impacto ambiental real con indicadores medibles y públicos",
        "Diseñar modelos de turismo regenerativo que devuelvan más de lo que toman",
        "Transparencia total en reportes de sostenibilidad verificables por terceros",
        "Alianzas de co-gestión con comunidades locales como socias, no como insumos",
      ],
    },
    integrantes: [
      { nombre: "Lovera Castillo, Rafael Fabricio", carrera: "Administración, Hotelería y Turismo" },
      { nombre: "Rojas Pañahua, Estrella Celeste", carrera: "Administración, Hotelería y Turismo" },
    ],
  },

  comunicacion: {
    slug: "comunicacion",
    id: "comunicacion-publicidad",
    theme: {
      name: "Comunicación y Publicidad",
      subtitle: "El narrador que construye verdades sin distorsionar la realidad",
      colorBg: "#e8eaf6",
      colorAccent: "#283593",
      colorText: "#1a237e",
      colorMuted: "#5c6bc0",
      colorCard: "#ffffff",
      colorBorder: "#9fa8da",
      colorPositive: "#283593",
      colorNegative: "#b71c1c",
      gradient: "from-indigo-700/10 via-coral-400/10 to-blanco-roto",
    },
    metafora: {
      titulo: "El narrador ético sabe que toda historia elegida implica otra silenciada",
      descripcion:
        "La comunicación no es inocente. Cada palabra, cada imagen, cada omisión construye realidades. El comunicador ético asume la responsabilidad de lo que narra y de lo que calla.",
    },
    problematica:
      "Publicidad engañosa y manipulación del consumidor: cuando la creatividad se convierte en herramienta de distorsión que explota vulnerabilidades humanas.",
    poblacion: [
      {
        iconKey: "baby",
        titulo: "Niños y adolescentes",
        descripcion:
          "Expuestos a publicidad diseñada para explotar sus inseguridades, crear necesidades artificiales y normalizar patrones de consumo poco saludables desde edades tempranas.",
      },
      {
        iconKey: "credit-card",
        titulo: "Consumidores de bajos ingresos",
        descripcion:
          "Objetivo de publicidad predatoria que ofrece créditos abusivos, productos milagro y falsas ofertas que profundizan su vulnerabilidad económica.",
      },
      {
        iconKey: "handshake",
        titulo: "Comunidades culturales",
        descripcion:
          "Grupos cuya identidad cultural es apropiada sin consentimiento ni crédito, transformada en campaña publicitaria descontextualizada y sin retribución justa.",
      },
      {
        iconKey: "smartphone",
        titulo: "Usuarios de redes sociales",
        descripcion:
          "Personas expuestas a dark patterns, publicidad no identificada, contenido patrocinado sin etiquetar y algoritmos diseñados para maximizar adicción, no bienestar.",
      },
    ],
    scheler: [
      {
        nivel: "I",
        valor: "Espirituales",
        descripcion: "Verdad, honestidad narrativa y respeto al receptor",
        iconKey: "sparkles",
      },
      {
        nivel: "II",
        valor: "Vitales",
        descripcion: "Dignidad de las personas representadas en los mensajes",
        iconKey: "heart-handshake",
      },
      {
        nivel: "III",
        valor: "De civilización",
        descripcion: "Comunicación útil, clara y no manipuladora",
        iconKey: "megaphone",
      },
      {
        nivel: "IV",
        valor: "Sensoriales",
        descripcion: "Impacto creativo, viralidad y éxito comercial",
        iconKey: "wand-sparkles",
      },
    ],
    mapaCritico: {
      negligencias: [
        "Publicidad que explota inseguridades corporales, económicas o sociales",
        "Dark patterns de UX que manipulan decisiones del usuario sin transparencia",
        "Disonancia entre promesa y experiencia, cuando las expectativas son mayores que la entrega del producto.",
        "Silencio ante campañas discriminatorias por temor a perder al cliente",
      ],
      acciones: [
        "Fact-checking propio antes de publicar cualquier contenido",
        "Diseño de mensajes inclusivos que representen la diversidad real del Perú",
        "Transparencia en publicidad pagada con etiquetado claro y verificable",
        "Denuncia activa de campañas engañosas, incluso cuando provienen de colegas",
      ],
    },
    integrantes: [
      { nombre: "Chávez Becerra, Brigitte Kimberly", carrera: "Comunicación y Publicidad" },
    ],
  },

  ingenieria: {
    slug: "ingenieria",
    id: "ingenieria-empresarial",
    theme: {
      name: "Ingeniería Empresarial y de Sistemas",
      subtitle: "El traductor que conecta tecnología y humanidad",
      colorBg: "#eceff1",
      colorAccent: "#004d9a",
      colorText: "#0d47a1",
      colorMuted: "#546e7a",
      colorCard: "#ffffff",
      colorBorder: "#90a4ae",
      colorPositive: "#004d9a",
      colorNegative: "#b71c1c",
      gradient: "from-cobalto-700/10 via-acero-400/10 to-white",
    },
    metafora: {
      titulo: "El ingeniero ético sabe que lo que construye afecta a quienes no hablan código",
      descripcion:
        "Cada línea de código, cada base de datos, cada algoritmo es un puente entre sistemas y personas. El ingeniero actúa como traductor: su deber es que ese puente sea seguro, justo y comprensible para todos.",
    },
    problematica:
      "Uso irresponsable de datos personales: cuando la minería de datos se convierte en extracción sin consentimiento y los algoritmos perpetúan desigualdades.",
    poblacion: [
      {
        iconKey: "accessibility",
        titulo: "Adultos mayores",
        descripcion:
          "Usuarios de banca móvil y servicios del Estado que enfrentan interfaces no diseñadas para ellos, expuestos a fraudes digitales y exclusión de servicios esenciales por la brecha digital.",
      },
      {
        iconKey: "monitor-smartphone",
        titulo: "Trabajadores de plataformas",
        descripcion:
          "Repartidores y trabajadores informales integrados a plataformas digitales sin protección laboral, cuyos datos y rutas son propiedad de la empresa pero cuyo bienestar no es responsabilidad de nadie.",
      },
      {
        iconKey: "map-pinned",
        titulo: "Comunidades rurales andinas",
        descripcion:
          "Poblaciones con acceso limitado a información legal sobre sus derechos digitales. El 42% de peruanos con internet no comprende términos como cookies o consentimiento informado (INEI, 2023).",
      },
      {
        iconKey: "globe",
        titulo: "Usuarios con baja alfabetización digital",
        descripcion:
          "Millones de peruanos que usan servicios digitales sin entender cómo se recolectan, almacenan y utilizan sus datos personales, vulnerables a la extracción no consentida de información.",
      },
    ],
    scheler: [
      {
        nivel: "I",
        valor: "Espirituales",
        descripcion: "Honestidad en datos y transparencia algorítmica",
        iconKey: "sparkles",
      },
      {
        nivel: "II",
        valor: "Vitales",
        descripcion: "Responsabilidad social y sostenibilidad ambiental digital",
        iconKey: "leaf",
      },
      {
        nivel: "III",
        valor: "De civilización",
        descripcion: "Inclusión, equidad y accesibilidad digital",
        iconKey: "globe",
      },
      {
        nivel: "IV",
        valor: "Sensoriales",
        descripcion: "Experiencia de usuario y rentabilidad",
        iconKey: "credit-card",
      },
    ],
    mapaCritico: {
      negligencias: [
        "Recolección de datos sin consentimiento real, informado y revocable",
        "Sesgo algorítmico que discrimina por género, origen o nivel socioeconómico",
        "Diseño adictivo de interfaces que maximiza tiempo en pantalla sobre bienestar",
        "Venta de datos sin trazabilidad ni auditoría del ciclo de vida de la información",
      ],
      acciones: [
        "Privacy by design: protección de datos como requisito desde la arquitectura",
        "DPIA (Data Protection Impact Assessment) antes de cada despliegue a producción",
        "Interfaces transparentes que expliquen en lenguaje claro qué datos se recolectan",
        "Denuncia de irregularidades y cultura organizacional de datos éticos desde el pregrado",
      ],
    },
    integrantes: [
      { nombre: "Crisóstomo Berrocal, Roberto Paolo", carrera: "Ingeniería Empresarial y de Sistemas" },
      { nombre: "Villafuerte Berrospi, Jose Miguel", carrera: "Ingeniería Empresarial y de Sistemas" },
    ],
  },
};

export const valoresCompartidos = [
  {
    titulo: "Honestidad e integridad",
    iconKey: "sparkles",
    descripcion:
      "Actuar con transparencia y coherencia en cada decisión profesional, sin ceder ante sistemas que normalizan la transgresión ética.",
  },
  {
    titulo: "Responsabilidad social",
    iconKey: "heart-handshake",
    descripcion:
      "Reconocer que cada acto profesional impacta en comunidades reales y asumir las consecuencias de nuestras decisiones con valentía.",
  },
  {
    titulo: "Sostenibilidad y medio ambiente",
    iconKey: "leaf",
    descripcion:
      "Integrar la dimensión ambiental en cada proyecto como un eje transversal, no como un accesorio de marketing o una certificación de fachada.",
  },
  {
    titulo: "Inclusión y equidad",
    iconKey: "scale",
    descripcion:
      "Diseñar para todas las personas, especialmente para quienes no tienen voz en las decisiones que definen sus vidas digitales, económicas y culturales.",
  },
];

export const referencesAPA = [
  {
    texto:
      "Scheler, M. (1941). Ética: Nuevo ensayo de fundamentación de un personalismo ético. Revista de Occidente.",
    doi: null,
  },
  {
    texto:
      "Cavoukian, A. (2009). Privacy by design: The 7 foundational principles. Information and Privacy Commissioner of Ontario.",
    doi: null,
  },
  {
    texto:
      "INEI. (2023). Estadísticas de las tecnologías de información y comunicación en los hogares. Instituto Nacional de Estadística e Informática.",
    doi: null,
  },
  {
    texto:
      "Floridi, L., & Cowls, J. (2019). A unified framework of five principles for AI in society. Harvard Data Science Review, 1(1).",
    doi: "https://doi.org/10.1162/99608f92.8cd550d1",
  },
  {
    texto:
      "Zuboff, S. (2019). The age of surveillance capitalism: The fight for a human future at the new frontier of power. PublicAffairs.",
    doi: null,
  },
  {
    texto:
      "OMT. (2022). Código ético mundial para el turismo. Organización Mundial del Turismo.",
    doi: null,
  },
  {
    texto:
      "Kotler, P., & Lee, N. (2005). Corporate social responsibility: Doing the most good for your company and your cause. Wiley.",
    doi: null,
  },
];
