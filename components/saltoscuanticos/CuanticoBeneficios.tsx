import { DollarSign, Trophy, Globe } from "lucide-react"

export function CuanticoBeneficios() {
  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          ¿Cómo se va a ver tu vida luego de tener tu {" "}
          <span className="text-cyan-400">NEGOCIO DIGITAL?</span>
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 flex gap-4">
            <DollarSign className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <p className="text-slate-200 leading-relaxed">
              El primer día que accedas a nuestra academia es probable que:{" "}
              <span className="font-bold text-white">GENERES INGRESOS en menos de una semana </span> - Recuerda:{" "}
              <span className="text-cyan-400 font-semibold">&quot;SON PRODUCTOS DIGITALES&quot;</span>
            </p>
          </div>

          <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 flex gap-4">
            <Trophy className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <p className="text-slate-200 leading-relaxed">
              Nunca te va a faltar el dinero en tu mesa ya que aprenderás la habilidad de{" "}
              <span className="font-bold text-white">generar ingresos con los negocios DIGITALES he IA</span>
            </p>
          </div>

          <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 flex gap-4">
            <Globe className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <p className="text-slate-200 leading-relaxed">
              Podrás generar ingresos{" "}
              <span className="font-bold text-white">en todos los lugares del mundo.</span> Lo que
              significa que podrás ganar lo mismo o más que empresarios de Estados Unidos, Europa y otras partes del
              mundo <span className="text-cyan-400 font-semibold">(Y lo mejor… sin visa)</span>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">+10 Países</h3>
            <p className="text-slate-300">
              Nuestra comunidad se encuentra en varias partes del mundo generando ingresos, Sabemos cómo enseñarte a
              hacerlo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}