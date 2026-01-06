import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function IndirectaQuestions() {
  const faqs = [
    {
      id: "1",
      question: "Ya probe otros cursos... Que hace que indirecta sea diferente?",
      answer:
        "Aqui tienes: Clases grabadas practicas paso a paso \n Sesiones en vivo para resolver duda en tiempo real \n Un espacio 24/7 para hacer preguntas y recibir apoyo \n Actualizaciones constantes basadas en lo que realmente funciona hoy \n Un movimiento donde todos estamos comprometidos a crecer juntos",
    },
    {
      id: "2",
      question: "¿Cuánto tiempo me toma ver resultados?",
      answer:
        "Hay personas que en 24 horas han generado su primer ingreso, pero lo común es que en 2 a 4 semanas empieces a ver resultados consistentes aplicando el método correctamente. En otros casos: \n Depende de cuanto implementes. \n Depende que tan rapido te mueves con nosotros \n Si sigues el sistema, Los resultados llegan y luego escala progresivamente. Aqui no vendemos fantasias. Vendemos un sistema probado.",
    },
    {
      id: "3",
      question: "No se mucho de tecnologia, ¿Puedo hacerlo?",
      answer:
        "Totalmente. El sistema esta diseñado para ser simple y directo. No necesitas ser un experto en tecnologia. Nosotros te guiaremos paso a paso y las herramientas de IA incluidas hacen gran parte del trabajo pesado por ti.",
    },
    {
      id: "4",
      question: "No quiero mostrar mi rostro. ¿Igual puedo generar ingresos?",
      answer:
        "100% Si. El club INDIRECTA se enfoca en enseñar métodos que no requieren mostrar tu rostro. Puedes generar ingresos mediante herramientas digitales de manera anónima utilizando las herramientas y estrategias que te proporcionamos.",
    },
    {
      id: "5",
      question: "¿Necesito audiencia o seguidores para empezar?",
      answer:
        "No. Este sistema no depende de audiencia organica. Empiezas desde cero y construyes tu camino en negocios digitales.",
    },
    {
      id: "6",
      question: "¿Cuanto dinero necesito para empezar?",
      answer:
        "Puedes empezar con: \n El costo de un plan! \n Un presupuesto minimo para probar varias herramientas digitales.",
    },
    {
      id: "7",
      question: "¿Que pasa si entro y no es para mi?",
      answer:
        "Tienes 15 dias de garantia cero riesgo. Entras, pruebas el sistema y si no es para ti, te devolvemos el dinero sin preguntas.",
    },
    {
      id: "8",
      question: "¿Hay soporte si me quedo atascado?",
      answer:
        "Sí, Tienes: \n Comunidad activa 24/7 \n Clases en vivo \n Respuesta rapidas \n Acompanamiento en tus primeros pasos \n Guias paso a paso \n Aqui nadie avanza solo.",
    },
    {
        id: "9",
        question: "¿Esto es legal?",
        answer:
          "Sí, todo lo que hacemos está dentro de la ley. No vendemos productos ilegales ni usamos métodos fraudulentos.",
    },
    {
        id: "10",
        question: "¿Y si tengo un negocio, esto me sirve?",
        answer:
          "Sí, el método está diseñado para que puedas integrarlo con tu negocio actual. No necesitas dejarlo atrás para empezar. Puedes escalar tu negocio existente o crear nuevos ingresos con el sistema.",
    },
    {        
        id: "11",
        question: "¿Cuanto tiempo debo dedicarle?",
        answer:
          "Recomendado: \n \n 1-2 horas diarias \n \n Lo minimo: \n \n 3-4 horas semanales \n \n Entre mas tiempo le dediques, mas rapido veras resultados. Pero con solo unas horas a la semana puedes empezar a ver avances significativos." 
    },
    {
        id: "12",
        question: "¿Puedo acceder desde cualquier lugar?",
        answer:
          "Sí, el club INDIRECTA es completamente en línea. Puedes acceder a las clases, recursos y comunidad desde cualquier lugar con conexión a internet."
    },
    {
        id: "13",
        question: "¿Cuando tendre resultados o cuando podre recuperar mi inversion?",
        answer:
          "Despues de que estudies y apliques la metodologia del programa paso a paso, es muy probable que obtengas resultados en 7 dias, pues estaras retornando tu inversion incial con cualquiera de nuestros modelos de negocios digitales. Por eso, la probabilidad de que retornes tu inversion en la primera semana es demasiado alta."
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900">
          Preguntas <span className="text-indigo-600 italic">Frecuentes</span>
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-none bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <AccordionTrigger className="px-6 py-5 pt-5 text-white hover:no-underline hover:bg-slate-800 transition-colors">
                <span className="text-left font-normal">
                  {index + 1}. {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-5 text-slate-300 bg-slate-900">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  )
}