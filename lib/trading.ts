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
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
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
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
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
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
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
