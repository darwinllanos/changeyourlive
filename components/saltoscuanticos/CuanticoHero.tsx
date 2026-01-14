import { Button } from "@/components/ui/button"

export function CuanticoHero() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
          ¡FINALMENTE! La respuesta para los que{" "}
          <span className="text-cyan-500">no aguantan un día más en su trabajo.</span>
        </h1>

        <div className="bg-slate-800/50 border border-cyan-500/30 rounded-2xl p-8 md:p-12 mb-8">
          <p className="text-lg md:text-2xl font-semibold mb-4 text-balance">
            Presentación revela cómo generar entre 100 a 500 dólares al día con la metodología de{" "}
            <span className="text-cyan-400">&quot;Saltos Cuanticos&quot;</span>
          </p>
          <p className="text-slate-300 text-sm md:text-base">
            (Cualquier persona puede ganar dinero en menos de 7 días... te pruebo cómo)
          </p>

          <iframe
            className="w-full max-w-2xl mx-auto mt-6 aspect-video rounded-xl"
            src="https://www.youtube.com/embed/BHobblukooc"
            title="Video presentación saltos cuanticos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-500 hover:to-cyan-700 text-white font-bold text-lg px-8 py-6 h-auto rounded-full"
        >
          <a href="https://wa.me/573163746711/?text=Estoy%20listo%20para%20aprender%20a%20generar%20más%20de%20100%20USD%20al%20día%20con%20Saltos%20Cuánticos">
            TOCA AQUÍ Y APRENDE A GENERAR MÁS DE $100 USD AL DÍA
          </a>
        </Button>
      </div>
    </section>
  )
}