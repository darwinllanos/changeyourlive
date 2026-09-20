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
        description: "Trading = comerciar activos financieros con el objetivo de obtener beneficio de las variaciones de precio, tanto cuando suben como cuando bajan.\nAnalogia sencilla: es como comprar en una plaza cuando están baratas y venderlas cuando suben de precio. La diferencia es que en trading no siempre recibes el producto físico, sino que operas sobre su precio.",
        highlights: ["Que es el trading", "Como funciona", "Analogia con comprar y vender productos"],
        videoUrl: "https://www.youtube.com/embed/4X7aQnRjQqU",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Que es trading y como funciona el mercado financiero",
        contentBlocks: [
          {
            title: "Qué es el trading",
            text: "El trading consiste en comprar y vender activos financieros con el objetivo de aprovechar las fluctuaciones (Subidas y bajadas) de precio. La idea no es solo “comprar barato y vender caro”, sino hacerlo con una estrategia, gestión de riesgo y disciplina.",
          },
          {
            title: "Cómo funciona",
            text: "El mercado financiero es un lugar donde se encuentran compradores y vendedores. Los precios suben y bajan según la oferta y la demanda, y los traders buscan aprovechar estas variaciones para obtener ganancias.",
          },
          {
            title: "Como ganas con las compras y como ganas con las ventas",
            text: "Vamos a hacer el ejemplo de como se gana con la compra y la venta en trading usando la analogia de un carro. Ventas: Compraste un carro de 10.000 USD y lo vendes por 12.000 USD ganando 2.000 USD. Compras: Vendes un carro que no tienes por 10.000 USD y luego lo compras por 8.000 USD ganando 2.000 USD.",
          },
        ],
        questions: [
          {
            id: "que-es-trading-1",
            statement: "En el trading puedes ganar tanto comprando como vendiendo activos financieros.",
            answer: true,
            explanation: "Sí. Puedes obtener ganancias al comprar barato y vender caro, o al vender primero y luego comprar más barato.",
          },
          {
            id: "que-es-trading-2",
            statement: "En trading solo con comprar y vender ya es suficiente para tener éxito. ",
            answer: false,
            explanation: "No necesariamente. El éxito en trading requiere estrategia, gestión de riesgo y disciplina, no solo comprar y vender.",
          },
        ],
      },
      {
        id: "mercados-financieros",
        title: "Mercados financieros donde se hace trading",
        description: "Dentro de este mundo del trading existen diferentes mercados financieros, cada uno con sus particularidades y activos específicos. En este submódulo aprenderás sobre los principales mercados y cómo funcionan.",
        highlights: ["Principales Divisas", "Tipos de mercados", "Pares de divisas"],
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        imageUrl: "/images/mercados-financieros.jpeg",
        imageAlt: "Análisis de contexto y gráfico de mercado",
        contentBlocks: [
          {
            title: "Principales divisas",
            text: "Las divisas son monedas de diferentes países que se negocian en el mercado Forex. Las principales divisas incluyen el dólar estadounidense (USD), el euro (EUR), la libra esterlina (GBP), el yen japonés (JPY) y el franco suizo (CHF). Estas monedas son las más líquidas y ampliamente negociadas en el mundo.",
          },
          {
            title: "Tipos de mercados",
            text: 'Divisas - forex (Foreign Exhange) El mercado de intercambio de monedas. Siempre se negocian en pares (Una moneda contra otra). Ejemplo: EUR/USD. DATO: Forex es el mercado mas liquido del mundo. (Mucho movimiento) \n Acciones - mercado de valores. Se negocian acciones de empresas que cotizan en bolsa. Ejemplo: Apple, Tesla, Amazon. Una accion representa una parte de una empresa. Si una empresa tiene 10.000 acciones y eres dueno de 100 acciones tienes el 1% de la empresa. \n Commodities (Materias primas): Son los bienes fisicos que se pueden comerciar, cafe, trigo, gas, petroleo etc \n Metales: Sub categoria de commodities Ejemplo oro,  plata DATO: Cuando hay miedo en la economia, la gente corre a comprar estos activos \n Indices bursatiles: Un numero que representa el comportamiento de muchas empreas al mismo tiempo. Como ejemplpo tenemos el NASDAQ 100 y el S&P 500\n Criptomonedas: Son monedas digitales que no dependen de un banco central. Su valor puede ser muy volátil y se negocian en plataformas especializadas. Ejemplo: Bitcoin, Ethereum, Dogecoin.\n derivados: Instrumento financiero cuyo valor depende de otro activo.',
          },
          {
            title: "Pares de divisas",
            text: "En forex no se compra una moneda sola, siempre se compara una moneda con otra. Por eso se opera en pares. Cuando comparas una moneda al mismo tiempo vendes otra. En las divisas siempre encontraremos la divisa base y la divisa cotizada. Ej EUR/USD. EUR es la divisa base y USD es la divisa cotizada. Si el precio sube significa que la divisa base se esta apreciando frente a la divisa cotizada. Si el precio baja significa que la divisa base se esta depreciando frente a la divisa cotizada. Cuando compras EUR/USD esperas a que el euro suba y el dolar baje. Cuando vendes EUR/USD esperas a que el euro abje y el dolar suba. Las divisas se pueden clasificar en pares mayores: EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD, USD/CAD. Pares menores: EUR/GBP, EUR/AUD, GBP/JPY. Pares exóticos: USD/TRY, USD/ZAR, EUR/SEK.",
          },
        ],
        questions: [
          {
            id: "base-contexto-1",
            statement: "Los pares mayores son todos los que incluyen al dolar?",
            answer: true,
            explanation: "Sí. Los pares mayores siempre incluyen al dólar estadounidense (USD) como una de las dos monedas en el par.",
          },
          {
            id: "base-contexto-2",
            statement: "El mercado mas liquido del mundo son las criptomonedas.",
            answer: false,
            explanation: "No. El mercado más líquido del mundo es el mercado de divisas (Forex), no las criptomonedas.",
          },
        ],
      },
      {
        id: "pares-divisas",
        title: "Pares de divisas (FOREX)",
        description: "Entiende qué mueve el precio, Cuando es mejor comprar o vender, porque es mejor una sesion de trading que otra y porque no todos los dias se debe operar en el mercado de divisas.",
        highlights: ["Fundamentales", "Sesiones", "Analisis tecnico"],
        videoUrl: "https://www.youtube.com/embed/4X7aQnRjQqU",
        imageUrl: "/images/pares-divisas.jpeg",
        imageAlt: "Gráfico de mercado y análisis financiero",
        contentBlocks: [
          {
            title: "Fundamentales del mercado",
            text: "En las divisas, los fundamentales incluyen noticias económicas, decisiones de bancos centrales y eventos geopolíticos. Estos factores pueden causar movimientos significativos en los precios de las divisas. Ejemplo: Un anuncio de aumento de tasas de interés por parte de la Reserva Federal puede fortalecer al dólar estadounidense frente a otras monedas.",
          },
          {
            title: "Sesiones de trading",
            text: "Dependiendo del par que operes y la hora del día, el mercado puede estar más o menos activo. Las principales sesiones son: Sesión de Londres, Sesión de Nueva York y Sesión de Asia (Tokio). La sesión de Londres y Nueva York suelen tener mayor liquidez y volatilidad, mientras que la sesión de Tokio puede ser más tranquila.",
          },
          {
            title: "Análisis técnico",
            text: "El análisis técnico implica estudiar gráficos de precios y patrones históricos para predecir movimientos futuros. Herramientas como líneas de tendencia, soportes, resistencias y indicadores técnicos ayudan a los traders a tomar decisiones informadas. Porque funciona? Porque el mercado es un reflejo de la psicología de los participantes y los patrones tienden a repetirse.",
          }
        ],
        questions: [
          {
            id: "pares-divisas-1",
            statement: "Dependiendo de la sesion y el par de divisas, el mercado puede ser más o menos activo.",
            answer: true,
            explanation: "Si. La actividad del mercado varía según la sesión de trading y el par de divisas, afectando la liquidez y volatilidad.",
          },
          {
            id: "pares-divisas-2",
            statement: "Las sesiones principales son: NEW YORK, ASIA, LONDRES Y AUSTRALIA.",
            answer: false,
            explanation: "No. Las sesiones principales son: Londres, Nueva York y Asia (Tokio). Australia es menos relevante en comparación.",
          },
        ],
      },
      {
        id: "spread-lotaje",
        title: "Pip Spread y lotaje",
        description: "Aprende la diferencia entre órdenes de mercado, límite y stop, así como cuándo cada una encaja mejor.",
        highlights: ["Pip", "Pipette", "Spread"],
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        imageUrl: "/images/spread-lotaje.jpeg",
        imageAlt: "Pantalla con análisis de órdenes y gráficos",
        contentBlocks: [
          {
            title: "Pips y Pipettes",
            text: "El pip es la la unidad minima de movimiento del precio en el mercado de divisas. Por ejemplo, si el par EUR/USD pasa de 1.1000 a 1.1001, ha subido 1 pip. Una pipette es una fracción de un pip, representando un movimiento aún más pequeño en el precio.",
          },
          {
            title: "Spread",
            text: "El spread es la diferencia entre el precio de compra (Ask) y el precio de venta (Bid) de un par de divisas. Un spread más estrecho generalmente significa menores costos de transacción. En el caso del par EUR/USD 1.1000/1.1002, el spread es de 2 pips.",
          },
        ],
        questions: [
          {
            id: "spread-lotaje-1",
            statement: "El pip es la unidad mínima de movimiento del precio en el mercado de divisas?",
            answer: true,
            explanation: "Sí. Un pip representa el cambio más pequeño en el precio de un par de divisas, generalmente en la cuarta posición decimal.",
          },
          {
            id: "spread-lotaje-2",
            statement: "Compras en el ASK y vendes en el BID, por eso el spread es la diferencia entre ambos precios.",
            answer: true,
            explanation: "Sí. El spread representa el costo de transacción al ser la diferencia entre el precio de compra y venta.",
          },
        ],
      },
      {
        id: "broker-apalancamiento",
        title: "Tipos de Broker y apalancamiento",
        description: "Conoce los diferentes tipos de brokers, cómo funcionan y cómo el apalancamiento puede afectar tus operaciones.",
        highlights: ["Qué es un broker", "Para que sirve el apalancamiento", "Aprende sobre los tipos de brokers y cual usar"],
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        imageUrl: "/images/brokers.png",
        imageAlt: "Planificación y gestión de riesgo en trading",
        contentBlocks: [
          {
            title: "Qué es un broker",
            text: "Gestionar el riesgo es esencial para que tu cuenta pueda sobrevivir a la volatilidad. Un buen trader protege capital antes que perseguir ganancias rápidas.",
          },
          {
            title: "Para que sirve el apalancamiento",
            text: "El apalancamiento permite controlar una posición mayor con menos capital. Por ejemplo, con un apalancamiento de 1:100, puedes controlar $10,000 con solo $100. Sin embargo, aumenta tanto las ganancias como las pérdidas potenciales.",
          },
          {
            title: "Tipos de brokers",
            text: "Dealink desk (DD): El broker actúa como contraparte de tus operaciones. Market maker (MM): El broker ejecuta tus órdenes en el mercado real. No dealink desk (NDD): El broker conecta directamente con proveedores de liquidez, ofreciendo spreads más ajustados y ejecución más rápida. ECN (Electronic Communication Network): Tipo de NDD que conecta a traders con múltiples participantes del mercado. STP (Straight Through Processing): Tipo de NDD que envía las órdenes directamente al mercado sin intervención del broker.",
          },
        ],
        questions: [
          {
            id: "broker-apalancamiento-1",
            statement: "Si te apalancas en 1:100, puedes controlar $10,000 con solo $100 de capital propio.",
            answer: true,
            explanation: "Sí. El apalancamiento permite controlar una posición mayor con menos capital, aumentando tanto las ganancias como las pérdidas potenciales.",
          },
          {
            id: "broker-apalancamiento-2",
            statement: "Los tipos de broker principales son los no dealing desk (NDD), los dealing desk (DD) y los mid dealing desk (MDD).",
            answer: false,
            explanation: "No. Los tipos principales son: Dealing Desk (DD), Market Maker (MM) y No Dealing Desk (NDD), que incluye ECN y STP.",
          },
        ],
      },
      {
        id: "participantes-mercado",
        title: "Participantes en el mercado",
        description: "Conoce quiénes son los actores principales del mercado y cómo sus acciones pueden influir en el precio.",
        highlights: ["Proveedores de liquidez", "Traders minoristas", "Corredores institucionales"],
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        imageUrl: "/images/participantesmercado.png",
        imageAlt: "Gráfico de participantes del mercado financiero",
        contentBlocks: [
          {
            title: "Principales participantes del mercado",
            text: "Los principales participantes del mercado incluyen bancos, fondos de inversión, traders institucionales y traders minoristas. Cada grupo tiene diferentes niveles de influencia y estrategias que afectan la dirección del precio.",
          },
          {
            title: "Proveedores de liquidez",
            text: "Los proveedores de liquidez son instituciones que ofrecen capital para facilitar las transacciones en el mercado. Su presencia es crucial para mantener la eficiencia y la estabilidad del sistema financiero.",
          },
          {
            title: "Corredores institucionales",
            text: "Bancos centrales, fondos mutuos, hedge funds y otros grandes actores institucionales tienen un impacto significativo en el mercado debido a su volumen de operaciones y estrategias de inversión.",
          },
          {
            title: "Traders minoristas o retail traders",
            text: "Los traders minoristas son individuos que operan en el mercado con capital propio. Aunque su influencia es menor en comparación con los grandes actores, sus decisiones colectivas pueden generar movimientos significativos en ciertos momentos. Pero de manera individual, su impacto es limitado.",
          },
          {
            title: "Aclaraciones",
            text: "El mercado no sabe que existes, tu problema es la gestion de riesgo y la disciplina. No importa si eres un trader minorista o institucional, todos enfrentan los mismos riesgos y deben gestionar su capital de manera efectiva. En el mercado de FOREZ se mueve aproximadamente de 6 a 7 trillones de dolares diarios. Si usaramos una analogia tu operacion es una gota, no mueve el precio.",
          }
        ],
        questions: [
          {
            id: "participantes-mercado-1",
            statement: "Un retail trader puede influir en la dirección del precio del mercado de manera significativa ?",
            answer: false,
            explanation: "No. Aunque su volumen de operaciones y estrategias pueden tener algún impacto, su influencia es limitada en comparación con los grandes actores del mercado.",
          },
          {
            id: "participantes-mercado-2",
            statement: "Los actores principales dentro del mercado son proveedores de liquidez, traders minoristas y corredores institucionales.",
            answer: true,
            explanation: "Sí. Estos son los principales actores que influyen en la dirección del precio del mercado.",
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
    submodules: [
      {
        id: "patrones-velas",
        title: "Patrones de velas y contextos",
        description: "Aprende a leer la estructura del precio y a confirmar señales con contexto antes de abrir una operación.",
        highlights: ["Patrones alcistas y bajistas", "Confirmación con contexto", "Lectura del impulso"],
        videoUrl: "https://www.youtube.com/embed/4X7aQnRjQqU",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Patrones de velas y análisis técnico",
        contentBlocks: [
          {
            title: "Qué observamos en el precio",
            text: "Los patrones de velas te ayudan a interpretar la presión compradora o vendedora, pero nunca deben leerse de forma aislada. El contexto del mercado, la tendencia y los niveles clave aportan la confirmación necesaria.",
          },
          {
            title: "Confirmación antes de operar",
            text: "Una vela alcista puede indicar fuerza, pero si aparece en una zona de resistencia o en una tendencia negativa, su valor es limitado. La combinación con estructura, volumen y niveles relevantes mejora la calidad de la señal.",
          },
        ],
        questions: [
          {
            id: "medio-patrones-1",
            statement: "Un patrón de velas por sí solo debe ser suficiente para operar sin más contexto.",
            answer: false,
            explanation: "No. El contexto del mercado, la estructura y los niveles clave son esenciales para validar la señal.",
          },
          {
            id: "medio-patrones-2",
            statement: "Un patrón alcista puede ser más fuerte si se forma cerca de una zona de soporte.",
            answer: true,
            explanation: "Sí. La cercanía a zonas de soporte o tendencia favorable puede reforzar la validez de la señal.",
          },
        ],
      },
      {
        id: "gestion-tamano",
        title: "Gestión del tamaño de posición",
        description: "Controla el riesgo por operación para conservar capital y mantener resultados consistentes a largo plazo.",
        highlights: ["Riesgo por operación", "Lotaje y tamaño", "Protección del capital"],
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Gestión del tamaño de posición",
        contentBlocks: [
          {
            title: "Qué es el tamaño de posición",
            text: "El tamaño de posición indica cuánto capital asumes en cada operación. Se calcula en función del riesgo máximo aceptado, la distancia al stop y el saldo disponible.",
          },
          {
            title: "Por qué importa",
            text: "La consistencia viene de controlar el riesgo por operación, no de conseguir una serie de ganancias aisladas. Si una operación sale mal, la pérdida no debe afectar a la cuenta de forma desproporcionada.",
          },
        ],
        questions: [
          {
            id: "medio-gestion-1",
            statement: "El tamaño de posición ayuda a limitar la pérdida máxima por operación.",
            answer: true,
            explanation: "Sí. Un tamaño bien calculado mantiene el riesgo controlado y protege tu cuenta de variaciones fuertes.",
          },
          {
            id: "medio-gestion-2",
            statement: "Operar con un riesgo fijo en cada trade es una buena práctica para mantener consistencia.",
            answer: true,
            explanation: "Correcto. La gestión del riesgo es una base clave para sostener resultados a mediano plazo.",
          },
        ],
      },
      {
        id: "niveles-y-tendencias",
        title: "Niveles y tendencias",
        description: "Identifica estructura, zonas de soporte y resistencia, y cómo la tendencia influye en la probabilidad de una operación.",
        highlights: ["Soportes y resistencias", "Tendencia", "Líneas de estructura"],
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Niveles clave y sentido de tendencia",
        contentBlocks: [
          {
            title: "Tendencia y contexto",
            text: "La tendencia envía información sobre la dirección dominante del mercado. Operar contra la tendencia puede aumentar el riesgo si no hay una validación clara.",
          },
          {
            title: "Zonas de interés",
            text: "Los soportes y resistencias representan áreas donde el precio suele reaccionar. Estas zonas ayudan a pensar en puntos de entrada, stop y toma de ganancias con more evidencia.",
          },
        ],
        questions: [
          {
            id: "medio-niveles-1",
            statement: "Las zonas de soporte y resistencia ayudan a identificar áreas de interés.",
            answer: true,
            explanation: "Sí. Son regiones donde el precio suele reaccionar y donde se suele buscar lógica operativa.",
          },
          {
            id: "medio-niveles-2",
            statement: "La tendencia solo importa si el mercado está en una sesión de alta volatilidad.",
            answer: false,
            explanation: "No. La tendencia siempre tiene valor como contexto, independientemente de la volatilidad inmediata.",
          },
        ],
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
    submodules: [
      {
        id: "psicologia-operativa",
        title: "Psicología operativa",
        description: "Entrena tu disciplina emocional y aprender a ejecutar la estrategia sin caer en decisiones impulsivas.",
        highlights: ["Control emocional", "Disciplina", "Ejecución de plan"],
        videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Psicología operativa y disciplina",
        contentBlocks: [
          {
            title: "Rendimiento más que señal",
            text: "La técnica sin control emocional es insuficiente. Un trader avanzado no solo conoce la estrategia, sino que también regula impulsos, frustración y exceso de confianza.",
          },
          {
            title: "Sistema de ejecución",
            text: "Una buena ejecución incluye revisar el plan, limitar el riesgo y seguir reglas claras sin reaccionar por la emoción del momento. El proceso es tan importante como la idea.",
          },
        ],
        questions: [
          {
            id: "avanzado-psicologia-1",
            statement: "La disciplina emocional es tan importante como la técnica para operar bien.",
            answer: true,
            explanation: "Sí. La ejecución consistente depende tanto del sistema como del control del estado mental.",
          },
          {
            id: "avanzado-psicologia-2",
            statement: "Si una operación falla, lo mejor es intentar recuperarla de inmediato para compensar la pérdida.",
            answer: false,
            explanation: "No. Recuperar pérdidas de forma impulsiva suele empeorar la situación y romper el plan de riesgo.",
          },
        ],
      },
      {
        id: "sistemas-y-analisis",
        title: "Sistemas y análisis multidimensional",
        description: "Diseña reglas de entrada, gestión y validación para crear un enfoque más robusto y repetible.",
        highlights: ["Reglas de entrada", "Backtesting", "Validación"],
        videoUrl: "https://www.youtube.com/embed/4X7aQnRjQqU",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Sistema de trading y análisis",
        contentBlocks: [
          {
            title: "Un sistema operativo",
            text: "Un sistema avanzado no se basa en una sola señal. Se compone de reglas claras de entrada, salida, gestión del riesgo y validación sobre datos históricos o condiciones reales.",
          },
          {
            title: "Robustez",
            text: "La clave es que el sistema funcione en distintas condiciones, no solo en momentos favorables. Un plan robusto se mide por su capacidad de seguir siendo útil cuando cambia el mercado.",
          },
        ],
        questions: [
          {
            id: "avanzado-sistema-1",
            statement: "Un buen sistema debe depender de una sola señal para ser útil.",
            answer: false,
            explanation: "No. Los sistemas más sólidos suelen combinar varias condiciones y reglas para reducir el ruido.",
          },
          {
            id: "avanzado-sistema-2",
            statement: "Validar una estrategia con datos históricos ayuda a entender su comportamiento real.",
            answer: true,
            explanation: "Sí. La validación aporta contexto sobre consistencia, riesgo y comportamiento en distintos escenarios.",
          },
        ],
      },
      {
        id: "automatizacion-y-monitoring",
        title: "Automatización y monitoreo",
        description: "Explora cómo automatizar tareas y revisar el rendimiento sin abandonar la supervisión del plan.",
        highlights: ["Automatización", "Monitoreo", "Ajustes de sistema"],
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        imageUrl: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Automatización y supervisión de sistema",
        contentBlocks: [
          {
            title: "Automatización útil",
            text: "La automatización puede ahorrar tiempo y eliminar errores repetitivos, pero no reemplaza el proceso de revisión y ajuste. Los mercados cambian y la estrategia debe adaptarse.",
          },
          {
            title: "Supervisión constante",
            text: "Un sistema automatizado requiere revisión de rendimiento, logs y ajustes periódicos. La supervisión humana es parte del control de riesgo y no un obstáculo.",
          },
        ],
        questions: [
          {
            id: "avanzado-automatizacion-1",
            statement: "La automatización puede reemplazar por completo la supervisión humana en cualquier condición del mercado.",
            answer: false,
            explanation: "No. Aunque ayuda, la supervisión humana sigue siendo necesaria para ajustar y validar el comportamiento del sistema.",
          },
          {
            id: "avanzado-automatizacion-2",
            statement: "Revisar el rendimiento de un sistema es clave para detectar problemas o cambios de comportamiento.",
            answer: true,
            explanation: "Sí. El monitoreo constante ayuda a mantener la estrategia en consonancia con las condiciones reales del mercado.",
          },
        ],
      },
    ],
  },
]
