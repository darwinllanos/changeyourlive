import { Card } from "@/components/ui/card"
import { Brain, GraduationCap, FileText, Users } from "lucide-react"

export function CuanticoBenefits() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Qué te llevarás con <span className="text-cyan-400">SALTOS CUANTICOS</span> y nuestra metodología?
        </h2>

        <div className="space-y-8">
          {/* Beneficio 1 */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Acceso a INTRAVEL</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  INTRAVEL es una plataforma de turismo en la cual podras
                </p>
                <ul className="space-y-2 text-sm text-slate-300 mb-6">
                  <li>(1). Crear tu propia agencia de &quot;TURIMSO&quot;</li>
                  <li>(2). Usarla de manera propia para viajar</li>
                </ul>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $5000 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: A un precio que ni te imaginas</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Beneficio 2 */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <GraduationCap className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Comercio Electronico
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Te entregamos el entrenamiento completo, donde te enseñamos toda la metodología para usar SMART y llegar,
                  en cuestión de horas, a generar 100, 200 dólares diarios o más.
                </p>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Te ayudamos a crear la tienda en cuestion de minutos
                </p>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Te ponemos a disposicion mas de &quot;3000&quot; productos para que puedas empezar a vender desde el primer dia
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $3000 dólares</p>
                    <p className="text-cyan-400 font-bold">Te ayudamos a montar la tienda en cualquiera de estos paises: Colombia, Mexico, Panama, Peru, Chile, Paraguay, Argentina, Guatemala, Espana</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Beneficio 3 */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <FileText className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Inversiones en la bolsa de valores
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Tendras acceso a &quot;INNTRADE&quot; donde replicaras las senales de los especialistas en inversiones
                </p>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Tendras acceso a &quot;INNTELLIGENCE&quot; donde tu dinero crece automaticamente sin que tu tengas que hacer nada
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $7000 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: A un precio que ni te imaginas</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <FileText className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Comunidad
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Tendras acceso a &quot;INNTRADE&quot; donde replicaras las senales de los especialistas en inversiones
                </p>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Tendras acceso a &quot;INNTELLIGENCE&quot; donde tu dinero crece automaticamente sin que tu tengas que hacer nada
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $7000 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: A un precio que ni te imaginas</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Beneficio 4 - Mentoría 1 a 1 */}
          <Card className="bg-gradient-to-br from-orange-900/50 to-slate-900 border-orange-500/50 p-8">
            <div className="flex items-start gap-6">
              <Users className="w-16 h-16 text-orange-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  Mentoría 1 a 1 para las 5 primeras personas en ingresar hoy
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Las primeras 5 personas en comprar recibirán una asesoría personalizada uno a uno conmigo, de una hora
                  completa. Actualmente, una sesión de este tipo cuesta más de 4,000 dólares por hora conmigo.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $4000 dólares</p>
                    <p className="text-orange-400 font-bold">Hoy: GRATIS accediendo al programa</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-900 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <Users className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  INNACADEMY
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Las primeras 5 personas en comprar recibirán una asesoría personalizada uno a uno conmigo, de una hora
                  completa. Actualmente, una sesión de este tipo cuesta más de 4,000 dólares por hora conmigo.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $500 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: GRATIS accediendo al programa</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-900 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <Users className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  INNTV
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Accede a contenido en VIVO de profesionales en diferentes áreas que te ayudarán a crecer en tu vida personal y profesional.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $4000 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: GRATIS accediendo al programa</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-900 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <Users className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  MINDSET
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Reprograma tu forma de pensar para jugar en otra liga

No se trata de motivación barata.
Aquí entrenas la mentalidad de las personas que toman decisiones, ejecutan sin miedo y no dependen de la suerte.

Aprendes a:

Pensar en oportunidades, no en excusas

Tomar acción incluso con incertidumbre

Romper creencias que te mantienen estancado

👉 Si cambias tu mentalidad, todo lo demás se vuelve inevitable.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $500 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: GRATIS accediendo al programa</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-900 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <Users className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  MIXLR
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Acceso a conocimiento en tiempo real, sin filtros

Mixlr es donde sucede la verdad.
Sesiones en vivo donde se habla de lo que realmente funciona, sin guiones, sin edición y sin vender humo.

Aquí obtienes:

Experiencia cruda, directa y actualizada

Respuestas reales a problemas reales

La sensación de estar “dentro”, no mirando desde fuera

👉 Mientras otros consumen contenido, tú estás en la sala donde se toman decisiones.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $4000 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: GRATIS accediendo al programa</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-cyen-900/50 to-slate-900 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <Users className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  MASTERMIND
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Rodéate de personas que piensan en grande

Tu entorno define hasta dónde llegas.
El Master Mind es un espacio privado donde compartes ideas, avances y bloqueos con personas que están en el mismo camino de crecimiento.

Aquí sucede:

Feedback que acelera resultados

Mentalidad de progreso colectivo

Energía de acción constante

👉 Cuando tu círculo sube de nivel, tú subes con él.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $4000 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: GRATIS accediendo al programa</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}