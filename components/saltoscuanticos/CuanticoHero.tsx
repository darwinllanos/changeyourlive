import { Button } from "@/components/ui/button"

export function CuanticoHero() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
          ¡FINALMENTE! La respuesta para los que{" "}
          <span className="text-orange-500">no aguantan un día más en su trabajo.</span>
        </h1>

        <div className="bg-slate-800/50 border border-cyan-500/30 rounded-2xl p-8 md:p-12 mb-8">
          <p className="text-lg md:text-2xl font-semibold mb-4 text-balance">
            Presentación revela cómo generar entre 100 a 500 dólares al día con la metodología de{" "}
            <span className="text-cyan-400">&quot;Productos extranjeros virales&quot;</span>
          </p>
          <p className="text-slate-300 text-sm md:text-base">
            (Cualquier persona puede ganar dinero en menos de 7 días... te pruebo cómo)
          </p>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-6 h-auto rounded-full"
        >
          TOCA AQUÍ Y APRENDE A GENERAR MÁS DE $100 USD AL DÍA
        </Button>
      </div>
    </section>
  )
}