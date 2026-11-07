export const phrases: Array<{ text: string; author: string }> = [
  {
    text: "El unico modo de hacer un gran trabajo es amar lo que haces.",
    author: "Steve Jobs",
  },
  {
    text: "La vida es lo que pasa mientras estas ocupado haciendo otros planes.",
    author: "John Lennon",
  },
  {
    text: "No cuentes los dias, haz que los dias cuenten.",
    author: "Muhammad Ali",
  },
  {
    text: "El futuro pertenece a quienes creen en la belleza de sus suenos.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "La creatividad es la inteligencia divirtiendose.",
    author: "Albert Einstein",
  },
  {
    text: "Sé el cambio que deseas ver en el mundo.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Lo que no te mata te hace mas fuerte.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "La imaginacion es mas importante que el conocimiento.",
    author: "Albert Einstein",
  },
  {
    text: "El exito es ir de fracaso en fracaso sin perder el entusiasmo.",
    author: "Winston Churchill",
  },
  {
    text: "La mejor forma de predecir el futuro es inventarlo.",
    author: "Alan Kay",
  },
  {
    text: "Cada dia es una nueva oportunidad para cambiar tu vida.",
    author: "Anonimo",
  },
  {
    text: "No esperes el momento perfecto, toma el momento y hazlo perfecto.",
    author: "Zoey Sayward",
  },
  {
    text: "La disciplina es el puente entre las metas y los logros.",
    author: "Jim Rohn",
  },
  {
    text: "Tu tiempo es limitado, no lo desperdicies viviendo la vida de otro.",
    author: "Steve Jobs",
  },
  {
    text: "El conocimiento habla, pero la sabiduria escucha.",
    author: "Jimi Hendrix",
  },
  {
    text: "Cree en ti mismo y todo sera posible.",
    author: "Anonimo",
  },
  {
    text: "La vida comienza donde termina tu zona de confort.",
    author: "Neale Donald Walsch",
  },
  {
    text: "Nunca es demasiado tarde para ser lo que podrias haber sido.",
    author: "George Eliot",
  },
  {
    text: "La persistencia puede cambiar el fracaso en un logro extraordinario.",
    author: "Marv Levy",
  },
  {
    text: "Solo aquellos que se atreven a tener grandes fracasos terminan consiguiendo grandes exitos.",
    author: "Robert F. Kennedy",
  },
  {
    text: "La mente es todo. En lo que piensas, te conviertes.",
    author: "Buda",
  },
  {
    text: "Haz de cada dia tu obra maestra.",
    author: "John Wooden",
  },
  {
    text: "No se trata de cuanto deseas algo, sino de cuanto trabajas por ello.",
    author: "Anonimo",
  },
  {
    text: "El secreto de salir adelante es comenzar.",
    author: "Mark Twain",
  },
  {
    text: "La unica imposibilidad es aquella que no intentas.",
    author: "Anonimo",
  },
  {
    text: "Convierte tus heridas en sabiduria.",
    author: "Oprah Winfrey",
  },
  {
    text: "La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento.",
    author: "Maya Angelou",
  },
  {
    text: "El coraje no es la ausencia de miedo, sino el juicio de que algo es mas importante que el miedo.",
    author: "Ambrose Redmoon",
  },
  {
    text: "Lo que hacemos en la vida tiene eco en la eternidad.",
    author: "Gladiator",
  },
  {
    text: "Donde hay una voluntad, hay un camino.",
    author: "Proverbio",
  },
  {
    text: "La simplicidad es la maxima sofisticacion.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Nadie es mejor que tu, solo tienen informacion que tu no tienes",
    author: "Anonimo",
  },
  {
    text: "La oportunidad es como una diosa altenera, no pierde el tiempo con quien no la merece.",
    author: "Anonimo"
  },{
    text: "Los objetos en movimiento permanecen en movimiento, los objetos en reposo, permaanecen en reposo, el impulso lo es todo en la vida",
    author: "Anonimo"
  },{
    text: "Todo lo que sucede en tu vida es resultado de tu propia responabilidad, no de alguna fuente externa",
    author: "Anonimo"
  },
  {
    text: "Yo me equivoque y fracase muchas veces pero nunca fue por lo mismo",
    author: "Anonimo"
  },
  {
    text: "Si no sales a aplicar la informacion, no estuviste entrenando, estuviste entreteniendote",
    author: "Anonimo"
  },
  {
    text: "arriesgate o te arrepentiras toda la vida",
    author: "Anonimo"
  },
  {
    text: "Haz mas, mucho mas que suficiente y obtendras los resultados que superan por mucho tus expectativas",
    author: "Anonimo"
  },
  {
    text: "No voy a ser adicto a la informacion, pero alerjico a la ejecucion",
    author: "Anonimo"
  },
  {
    text: "Si trabajas por dinero, le estas dando el poder a tu empleador, si aprendes a hacer que el dinero trabaje pora ti, recuperas tu poder",
    author: "Anonimo"
  },
  {
    text: "Cada reto es un maestro disfrazado",
    author: "Anonimo"
  },
  {
    text: "Las noches mas oscuras producen las estrellas mas brillantes",
    author: "Anonimo"
  },
  {
    text: "Un empleado que comete errores tarde o temprano sera despedido, pero un emprendedor que comete errores tarde o temprano sera recompensado",
    author: "Anonimo"
  },
  {
    text: "No hay habilidad que se resista a la persistencia",
    author: "Anonimo"
  },
  {
    text: "El vendedor no se quiebra por vender barato, si no por vender poquito",
    author: "Anonimo"
  },
  {
    text: "Mientras el pobre pierde el tiempo buscando entender, el rico se mete y entiende sobre el camino",
    author: "Anonimo"
  },
  {
    text: "Ningun marinero experto se hizo en aguas calmas",
    author: "Anonimo"
  }
]

/**
 * Returns a phrase based on the current day of the year.
 * The same phrase is returned all day, and it changes at midnight.
 */
export function getDailyPhrase(): { text: string; author: string } {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  const dayOfYear = Math.floor(diff / oneDay)
  const index = dayOfYear % phrases.length
  return phrases[index]
}
