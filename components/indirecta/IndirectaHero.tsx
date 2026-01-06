import Link from "next/link"

export function IndirectaHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black px-6">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,165,0,0.25),transparent_55%)]" />

      <div className="relative z-10 max-w-5xl text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-orange-400">
          Comunidad privada · Acceso mensual
        </p>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          INDIRECTA
          <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            El club que transforma tu mente, tu dinero y tu vida
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Trading con Inteligencia Artificial, Dropshipping, educación financiera, cuerpo,
          mentalidad y comunidad de alto nivel en un solo ecosistema.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="https://wa.me/573163746711?text=Hola%2C+quiero+unirme+al+Club+INDIRECTA"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
          >
            Acceder al Club INDIRECTA
          </Link>
        </div>
      </div>
    </section>
  )
}
