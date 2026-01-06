import Link from "next/link"

export function IndirectaCTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-20 text-center text-black">
      <h2 className="text-3xl font-bold">
        Accede hoy al Club INDIRECTA
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg">
        Membresía mensual · Acceso inmediato
      </p>

      <div className="mt-8">
        <Link
          href="https://wa.me/573163746711?text=Hola%2C+quiero+unirme+al+Club+INDIRECTA"
          className="rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white"
        >
          Unirme ahora
        </Link>
      </div>
    </section>
  )
}
