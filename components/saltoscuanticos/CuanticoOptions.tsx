import { Card } from "@/components/ui/card"
import { CheckCircle2, X } from "lucide-react"

export function CuanticoOptions() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ahora tienes <span className="text-cyan-400">dos opciones…</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Opción 1 */}
          <Card className="bg-slate-900/50 border-red-500/50 p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-2">Opción #1:</h3>
                <p className="text-lg">Continuar con una vida sin Activos extranjeros virales....</p>
              </div>
            </div>
          </Card>

          {/* Opción 2 */}
          <Card className="bg-slate-900/50 border-cyan-500/50 p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Opción #2:</h3>
                <p className="text-lg">Vivir de los Activos extranjeros virales</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}