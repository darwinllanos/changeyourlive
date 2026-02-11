import Link from "next/link"

export function IndirectaHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black px-6">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.25),transparent_55%)]" />

      <div className="relative z-10 max-w-5xl text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-orange-400">
          La comunidad que esta cambiando la vida de jovenes en Latinoamérica.
        </p>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          INDIRECTA
          <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            El club donde las personas cambian su mentalidad, construyen ingresos digitales y crean nuevo futuro.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          No importa de donde vengas. Importa donde quieres llegar
        </p>

        <iframe
            className="w-full max-w-2xl mx-auto mt-6 aspect-video rounded-xl"
            src="https://www.youtube.com/embed/3--uoMSomnw?si=ICnZGKFAnrrJSGCp"
            title="Video presentación Indirecta Club"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        <div className="mt-10 flex justify-center">
          <Link
            href="https://wa.me/573163746711?text=Hola%2C+quiero+unirme+al+Club+INDIRECTA"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
          >
            👉 Quiero ser parte del club
          </Link>
        </div>
      </div>
    </section>
  )
}
