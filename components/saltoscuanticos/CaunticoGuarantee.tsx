import { Shield } from "lucide-react"

export function CuanticoGuarantee() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Qué es lo peor que puede pasar <span className="text-cyan-400">si lo intentas?</span>
        </h2>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Que no funcione… y sigas exactamente donde estás hoy.  
          <br />
          <span className="text-white font-semibold">
            ¿Y lo mejor? Que cambies el rumbo de tu vida para siempre.
          </span>
        </p>

        <p className="text-slate-400">
          El verdadero riesgo no es intentarlo.  
          <br />
          El verdadero riesgo es mirar atrás en 5 años y darte cuenta de que
          <span className="text-cyan-400 font-semibold"> nunca lo intentaste.</span>
        </p>
      </div>
    </section>
  )
}