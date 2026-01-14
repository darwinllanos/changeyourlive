import { Card } from "@/components/ui/card"
import { CheckCircle2, X } from "lucide-react"
import Image from "next/image"

export function CuanticoOptions() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ahora tienes <span className="text-cyan-400">dos opciones…</span>
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-center mb-12">“Elige tu futuro”, “Dos caminos, una decisión”</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Opción 1 */}
          <Card className="bg-slate-900/50 border-red-500/50 p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400 mb-2">Opción #1:</h3>
                <p className="text-lg text-red-400">Continuar con una vida normal, Sin futuro....</p>
              </div>
            </div>
            <Image
                src="/icons/resultadostradicional.png"
                alt="Opción 1"
                width={100}
                height={100}
                className="ml-auto hidden md:block w-full"
              />
          </Card>

          {/* Opción 2 */}
          <Card className="bg-slate-900/50 border-cyan-500/50 p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Opción #2:</h3>
                <p className="text-lg text-cyan-400">Vivir de los negocios digitales y vivir lo extraordinario!</p>
              </div>
            </div>
            <Image
                src="/icons/resultadossaltoscuanticos.png"
                alt="Opción 1"
                width={100}
                height={100}
                className="ml-auto hidden md:block w-full"
              />
          </Card>
        </div>
      </div>
    </section>
  )
}