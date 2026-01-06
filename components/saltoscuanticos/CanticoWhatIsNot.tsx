import { X } from "lucide-react"

export function CuanticoWhatIsNot() {
  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          PDTA: Esto <span className="text-red-400">NO ES</span> un curso de venta de:
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {["Ebooks", "PDFs", "Inteligencia Artificial", "Afiliados"].map((item) => (
            <div key={item} className="bg-red-950/30 border border-red-500/30 rounded-lg p-4 flex items-center gap-3">
              <X className="w-6 h-6 text-red-400 shrink-0" />
              <span className="font-semibold">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Es UNA Metodología de venta de Activos Extranjeros Virales gracias a AURA
          </h3>
          <ul className="space-y-2 text-slate-300">
            <li>✓ Nadie en internet habla de eso</li>
            <li>
              ✓ Así que no lo encontrarás en otro lado. Somos los únicos en todo internet hablando de esté tipo de
              productos.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}