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
          Tienes 7 días para probarlo. Pruébalo y si no te gusta te reembolsamos a tu medio de pago el 100% del dinero.
        </p>
        <p className="text-slate-400">Solo hace basta hacer un clic y tu reembolso será procesado en pocas horas.</p>
      </div>
    </section>
  )
}