import { Card } from "@/components/ui/card"
import { Brain, GraduationCap, FileText, Users } from "lucide-react"

export function CuanticoBenefits() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Qué te llevarás con <span className="text-cyan-400">AURA</span> y nuestra metodología?
        </h2>

        <div className="space-y-8">
          {/* Beneficio 1 */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/50 p-8">
            <div className="flex items-start gap-6">
              <Brain className="w-16 h-16 text-cyan-400 shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">INTELIGENCIA ARTIFICIAL DE AURA:</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  AURA es un conjunto de inteligencias artificiales formado por múltiples robots que, como ya te
                  mencioné, hará todo por ti:
                </p>
                <ul className="space-y-2 text-sm text-slate-300 mb-6">
                  <li>(1). Encontrará el problema &quot;diarrea&quot; 💩</li>
                  <li>(2). Detectará quién lo está vendiendo en otros países.</li>
                  <li>(3). Traducirá el producto a cualquier idioma.</li>
                  <li>(4). Creará tu Activo Extranjero Viral.</li>
                  <li>(5). Encontrará a los clientes correctos.</li>
                  <li>(6). Y, finalmente, te ayudará a venderlo.</li>
                </ul>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $2997 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: GRATIS accediendo al programa</p>
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
                  Entrenamiento de venta de Activos Extranjeros Virales
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Te entregaré el entrenamiento completo, donde te enseñaré toda mi metodología para usar AURA y llegar,
                  en cuestión de horas, a generar 100, 200 dólares diarios o más.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $1500 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: GRATIS accediendo al programa</p>
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
                  Vitrina de Activos Extranjeros Virales Validados
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Te entregaré más de 100 activos extranjeros virales que AURA me ayudó a crear. Son activos que ya
                  están validados, que ya demostraron generar resultados reales y que están listos para vender.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-500 line-through text-sm">Valorado en: $790 dólares</p>
                    <p className="text-cyan-400 font-bold">Hoy: GRATIS accediendo al programa</p>
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
        </div>
      </div>
    </section>
  )
}