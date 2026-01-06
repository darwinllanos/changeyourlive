import { Card } from "@/components/ui/card"
import { GraduationCap, Baby, TrendingUp, Target } from "lucide-react"

export function CuanticoWhoIsFor() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Esto <span className="text-cyan-400">para quién es:</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-900/50 border-slate-800 p-6">
            <GraduationCap className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Profesionales</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Personas que quieren posicionar en internet su profesión y quieren aprender a vender ACTIVOS que sean
              virales (psicólogos, abogados, escritores, doctores, ingenieros, etc).
            </p>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 p-6">
            <Baby className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Niños de 13 años</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Que quieran realizar lo mismo que están haciendo estos niños de Brasil.
            </p>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 p-6">
            <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Quieres hacer más dinero</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Personas que quieren construir, de la FORMA MÁS PROBABLE, algo qué les permita hacer más dinero que con su
              antigua vida.
            </p>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 p-6">
            <Target className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Estás comenzando</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Personas que no sepan absolutamente nada de internet y cuenten con el tiempo y esfuerzo de hacer lo mismo
              que hizo un niño de 13 años para volverse millonario.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}