import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CuanticoQuestion() {
  const faqs = [
    {
      question: "¿Es necesario tener experiencia previa para aplicar este método?",
      answer:
        "No, el método está diseñado especialmente para personas que nunca han vendido en Estados Unidos y Europa. Todo está explicado paso a paso para que cualquier persona, sin importar su nivel de experiencia, pueda tener éxito.",
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
        "No, esto NO es marketing de afiliados. Es una metodología única para crear y vender tus propios Activos Extranjeros Virales.",
    },
    {
      question: "¿Qué tipo de herramientas de Inteligencia Artificial se utilizan?",
      answer:
        "Utilizamos AURA, un conjunto de herramientas de IA que automatiza gran parte del proceso: desde encontrar productos virales hasta ayudarte a crear tu activo y encontrar clientes.",
    },
    {
      question: "¿Esto es otro cursito de venta de PDF o Ebooks?",
      answer:
        "No. Esta es una metodología completamente diferente enfocada en Activos Extranjeros Virales. No vendemos ebooks ni PDFs tradicionales.",
    },
    {
      question: "¿Qué pasa si no hablo inglés, francés, alemán, portugués?",
      answer:
        "No necesitas hablar otros idiomas. AURA se encarga de traducir y adaptar tus productos a cualquier idioma y mercado. Todo el proceso está automatizado.",
    },
    {
      question: "¿Puedo vender Activos extranjeros virales desde cualquier país?",
      answer:
        "Sí, puedes vender desde cualquier país del mundo. Solo necesitas una conexión a internet y seguir la metodología enseñada.",
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