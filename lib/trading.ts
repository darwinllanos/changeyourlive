export type TradingQuestion = {
  id: string
  statement: string
  answer: boolean
  explanation: string
}

export type TradingSubmoduleContent = {
  title: string
  text: string
}

export type TradingSubmodule = {
  id: string
  title: string
  description: string
  highlights: string[]
  questions: TradingQuestion[]
  videoUrl?: string
  imageUrl?: string
  imageAlt?: string
  contentBlocks?: TradingSubmoduleContent[]
}

export type TradingClassModule = {
  id: "base" | "medio" | "avanzado"
  title: string
  description: string
  questions: TradingQuestion[]
  submodules?: TradingSubmodule[]
}

export const tradingModules: TradingClassModule[] = [
  {
    id: "base",
    title: "Trading Base (En proceso de actualización)",
    description: "En este modulo aprenderás los fundamentos del trading, incluyendo conceptos clave, tipos de órdenes y gestión de riesgos básica.",
    questions: [
      {
        id: "base-1",
        statement: "Que es el trading?",
        answer: true,
        explanation: "Comercializar activos financieros con el objetivo de obtener ganancias a corto plazo, aprovechando las fluctuaciones del mercado. Imagina comprar papas en una plaza cuando estan baratas y venderlas cuando suben de precio. La diferencia es quue en trading no siempre recibes el producto fisico, sino que operas sobre su precio.",
      },
      {
        id: "base-2",
        statement: "Abrir muchas operaciones al mismo tiempo siempre reduce el riesgo general.",
        answer: false,
        explanation: "No necesariamente: más operaciones sin buena gestión pueden aumentar tu exposición y el riesgo total.",
      },
    ],
    submodules: [
      {
        id: "que-es-trading",
        title: "Que es el trading?",
        description: "Trading = comerciar activos financieros con el objetivo de obtener beneficio de las variaciones de precio, tanto cuando suben como cuando bajan. /n Analogia sencilla: Es como comprar en una plaza cuando estan baratas y venderlas cuando suben de precio. La diferencia es que en trading no siempre recibes el producto fisico, si no que operas sobre su precio.",
        highlights: ["Que es el trading", "Como funciona", "Analogia con comprar y vender productos"],
        videoUrl: "https://www.youtube.com/embed/4X7aQnRjQqU",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Que es trading y como funciona el mercado financiero",
        contentBlocks: [
          {
            title: "Qué es exactamente el trading",
            text: "El trading consiste en comprar y vender activos financieros con el objetivo de aprovechar las fluctuaciones de precio. La idea no es solo “comprar barato y vender caro”, sino hacerlo con una estrategia, gestión de riesgo y disciplina.",
          },
          {
            title: "¿Por qué aprenderlo paso a paso?",
            text: "Cuando entiendes los fundamentos, tomas mejores decisiones y evitas caer en impulsos. El trading requiere paciencia, análisis y control emocional más que simple suerte.",
          },
        ],
        questions: [
          {
            id: "que-es-trading-1",
            statement: "¿La vela puede mostrar apertura, máximo, mínimo y cierre en un solo símbolo visual?",
            answer: true,
            explanation: "Sí. La vela resume esos cuatro datos en un mismo bloque para ayudar a interpretar el comportamiento del precio.",
          },
          {
            id: "que-es-trading-2",
            statement: "¿Una vela alcista siempre significa que el precio seguirá subiendo?",
            answer: false,
            explanation: "No necesariamente. La vela ayuda a identificar impulso, pero el contexto y la confirmación también importan.",
          },
        ],
      },
      {
        id: "mercados-financieros",
        title: "Mercados financieros donde se hace trading",
        description: "Pendiente Descripcion",
        highlights: ["Principales Divisas", "Tipos de mercados", "Pares de divisas"],
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Análisis de contexto y gráfico de mercado",
        contentBlocks: [
          {
            title: "Cómo leer el contexto",
            text: "El contexto te ayuda a entender si una señal tiene más o menos peso dentro del mercado. Por ejemplo, una señal en tendencia fuerte suele tener más valor que la misma señal en una zona lateral.",
          },
          {
            title: "La importancia de la disciplina",
            text: "Cuando operas con contexto, reduces la tentación de entrar por emoción. La disciplina marca la diferencia entre una operación impulsiva y una operación pensada.",
          },
        ],
        questions: [
          {
            id: "base-contexto-1",
            statement: "¿El contexto del mercado ayuda a entender si una señal tiene más o menos probabilidad de funcionar?",
            answer: true,
            explanation: "Sí. Evaluar el contexto mejora la calidad de la señal y reduce decisiones impulsivas.",
          },
          {
            id: "base-contexto-2",
            statement: "¿Operar solo con una señal aislada es siempre la mejor opción?",
            answer: false,
            explanation: "No. Una señal aislada puede ser engañosa si no se valida con el contexto general.",
          },
        ],
      },
      {
        id: "pares-divisas",
        title: "Pares de divisas",
        description: "Entiende qué mueve el precio, cómo se forma una tendencia y por qué el contexto importa antes de abrir una operación.",
        highlights: ["Como funciona FOREX", "Pares Mayores, Exoticos, Cruzados"],
        videoUrl: "https://www.youtube.com/embed/4X7aQnRjQqU",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Gráfico de mercado y análisis financiero",
        contentBlocks: [
          {
            title: "Fundamentos clave",
            text: "Antes de operar, debes entender los conceptos básicos del mercado: precio, tendencia, volatilidad y gestión de riesgo. Estos pilares permiten construir una base sólida.",
          },
          {
            title: "Tu primer enfoque",
            text: "No necesitas complicarte desde el inicio. Aprende primero a identificar el contexto, definir tu riesgo y ejecutar con calma.",
          },
        ],
        questions: [
          {
            id: "pares-divisas-1",
            statement: "¿El precio siempre se mueve de forma predecible?",
            answer: false,
            explanation: "No. Aunque existen patrones, el mercado responde a múltiples factores y puede romper las expectativas.",
          },
          {
            id: "pares-divisas-2",
            statement: "¿Una tendencia clara siempre garantiza una operación rentable?",
            answer: false,
            explanation: "No. La tendencia ayuda, pero el timing, la gestión de riesgo y la confirmación también importan.",
          },
        ],
      },
      {
        id: "spread-lotaje",
        title: "Pip Spread y lotaje",
        description: "Aprende la diferencia entre órdenes de mercado, límite y stop, así como cuándo cada una encaja mejor.",
        highlights: ["Movimiento del precio", "Diferencia de precio de compra y venta", "Calcula el tamaño de tu posición"],
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Pantalla con análisis de órdenes y gráficos",
        contentBlocks: [
          {
            title: "Tipos de órdenes",
            text: "Las órdenes de mercado, límite y stop tienen funciones diferentes. Saber cuándo usarlas mejora tu ejecución y evita errores comunes al entrar o salir de una operación.",
          },
          {
            title: "Ejecutar con claridad",
            text: "Una orden bien colocada te ayuda a controlar el riesgo. La claridad en la ejecución es tan importante como la idea de la operación misma.",
          },
        ],
        questions: [
          {
            id: "spread-lotaje-1",
            statement: "¿Una orden de mercado se ejecuta al precio disponible más inmediato?",
            answer: true,
            explanation: "Sí. La orden de mercado prioriza la ejecución, aunque el precio final puede variar ligeramente.",
          },
          {
            id: "spread-lotaje-2",
            statement: "¿Un stop loss elimina automáticamente el riesgo de una operación?",
            answer: false,
            explanation: "No. Reduce la exposición, pero no garantiza que el resultado sea perfecto ni que se eviten todas las pérdidas.",
          },
        ],
      },
      {
        id: "broker-apalancamiento",
        title: "Tipos de Broker y apalancamiento",
        description: "Descubre cómo proteger tu capital y cómo controlar el tamaño de cada posición para operar con disciplina.",
        highlights: ["Qué es un broker", "Para que sirve el apalancamiento", "Aprende sobre los tipos de brokers y cual usar"],
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Planificación y gestión de riesgo en trading",
        contentBlocks: [
          {
            title: "Control del riesgo",
            text: "Gestionar el riesgo es esencial para que tu cuenta pueda sobrevivir a la volatilidad. Un buen trader protege capital antes que perseguir ganancias rápidas.",
          },
          {
            title: "Planificación diaria",
            text: "Definir cuánto estás dispuesto a perder, cuál será tu tamaño de posición y cómo saldrás si la operación no va como esperabas, te ayuda a operar con más orden.",
          },
        ],
        questions: [
          {
            id: "broker-apalancamiento-1",
            statement: "¿Controlar el tamaño de posición ayuda a mantener la cuenta sostenible?",
            answer: true,
            explanation: "Sí. Gestionar el tamaño reduce la probabilidad de perder demasiado en una sola operación.",
          },
          {
            id: "broker-apalancamiento-2",
            statement: "¿Operar sin plan siempre mejora la toma de decisiones?",
            answer: false,
            explanation: "No. Sin plan, las decisiones tienden a ser impulsivas y más arriesgadas.",
          },
        ],
      },
      {
        id: "participantes-mercado",
        title: "Participantes en el mercado",
        description: "Conoce quiénes son los actores principales del mercado y cómo sus acciones pueden influir en el precio.",
        highlights: ["Como operan las instituciones", "Traders minoristas", "Corredores institucionales"],
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Gráfico de participantes del mercado financiero",
        contentBlocks: [
          {
            title: "Quién mueve el mercado",
            text: "Los bancos, fondos de inversión y traders institucionales tienen un gran impacto en la dirección del mercado. Entender sus movimientos ayuda a anticipar tendencias.",
          },
          {
            title: "El rol del trader minorista",
            text: "Aunque los traders minoristas tienen menos influencia, sus decisiones colectivas pueden generar movimientos significativos, especialmente en mercados volátiles.",
          },
        ],
        questions: [
          {
            id: "participantes-mercado-1",
            statement: "¿Los bancos y fondos de inversión son los principales actores que mueven el mercado?",
            answer: true,
            explanation: "Sí. Su volumen de operaciones y estrategias influyen en la dirección del precio.",
          },
          {
            id: "participantes-mercado-2",
            statement: "¿Los traders minoristas no tienen ningún impacto en el mercado?",
            answer: false,
            explanation: "No. Aunque su influencia es menor, sus decisiones colectivas pueden generar movimientos significativos.",
          },
        ],
      }
    ],
  },
  {
    id: "medio",
    title: "Trading Medio (En proceso de actualización)",
    description: "Estrategias intermedias con análisis técnico, patrones de precio y gestión de capital avanzada.",
    questions: [
      {
        id: "medio-1",
        statement: "Un patrón de velas alcista confirma que el mercado subirá sin necesidad de otras señales.",
        answer: false,
        explanation: "Un patrón de velas por sí solo no garantiza la dirección; conviene confirmar con otros indicadores y contexto.",
      },
      {
        id: "medio-2",
        statement: "La gestión de tamaño de posición es clave para tener resultados consistentes a mediano plazo.",
        answer: true,
        explanation: "Correcto: controlar el tamaño de cada posición ayuda a proteger tu cuenta y mantener consistencia.",
      },
    ],
  },
  {
    id: "avanzado",
    title: "Trading Avanzado (En proceso de actualización)",
    description: "Tácticas avanzadas, automatización, psicología del trading y toma de decisiones con datos.",
    questions: [
      {
        id: "avanzado-1",
        statement: "Un sistema automatizado debe funcionar sin supervisión humana alguna en todos los mercados.",
        answer: false,
        explanation: "Falso: la supervisión y los ajustes son necesarios porque los mercados cambian y las condiciones varían.",
      },
      {
        id: "avanzado-2",
        statement: "Controlar las emociones es tan importante como la técnica cuando se opera en vivo.",
        answer: true,
        explanation: "Sí, la disciplina emocional es un factor crítico para ejecutar una estrategia sin cometer errores impulsivos.",
      },
    ],
  },
]
