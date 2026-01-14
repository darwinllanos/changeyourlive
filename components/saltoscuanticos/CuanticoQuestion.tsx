import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CuanticoQuestion() {
  const faqs = [
    {
      question: "¿Es necesario tener experiencia previa para aplicar este método?",
      answer:
        "No, el método está diseñado especialmente para personas que nunca han tenido realcion alguna con lo digital. Todo está explicado paso a paso para que cualquier persona, sin importar su nivel de experiencia, pueda tener éxito.",
    },
    {
      question: "¿Cuándo tendré resultados o cuándo podré recuperar mi inversión?",
      answer:
        "Los resultados pueden variar según tu dedicación y esfuerzo. Sin embargo, muchos estudiantes han comenzado a generar ingresos en las primeras semanas de aplicar el método.",
    },
    {
      question: "¿Cuánto tiempo necesito dedicarle al día para obtener resultados?",
      answer:
        "Con dedicar 2-3 horas al día puedes comenzar a ver resultados. La clave está en la constancia y en aplicar correctamente lo que se enseña en el programa.",
    },
    {
      question: "¿Esto es un tema de vender como afiliado?",
      answer:
        "No, esto NO es marketing de afiliados. Es una metodología única para generar ingresos adicionales o si prefieres dejarlo como tu fuente de ingreso principal",
    },
    {
      question: "¿Qué tipo de herramientas de Inteligencia Artificial se utilizan?",
      answer:
        "Utilizamos INNSCANNER, un conjunto de herramientas de trading que permite identificar cuando entramos en una venta o en una compra. Ademas de que podemos ayudarnos con la IA en los demas modelos de negocios",
    },
    {
      question: "¿Esto es otro cursito de venta de PDF o Ebooks?",
      answer:
        "No. Esta es una metodología completamente diferente enfocada no en un solo modelo de negocio, si no en varios lo cual permite que pruebes y elijas el modelo que mas te guste",
    },
    {
      question: "¿Puedo generar ingresos adicionales desde cualquier país?",
      answer:
        "Sí, puedes generar dinero desde cualquier país del mundo. Solo necesitas una conexión a internet y seguir la metodología enseñada.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Preguntas{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Frecuentes</span>
        </h2>
        <p className="text-center text-slate-400 mb-12">Encuentra respuestas a las dudas más comunes</p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-white pr-4">
                  {index + 1}. {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}