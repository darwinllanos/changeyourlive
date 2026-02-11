import Link from "next/link"

export function IndirectaCTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-20 text-center text-black">
      <h2 className="text-3xl font-bold">
        Si estas leyendo esto, es por una razon.
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg">
        No existen las coincidencias.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <p className="mx-auto mt-4 max-w-xl text-lg">
          Esto llego a ti porque tal vez es momento de:
        </p>
        <p className="">
          ✔ Salir del promedio  
          <br />✔ Dejar de postergar
          <br />✔ y tomar accion por tu propio futuro
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="https://wa.me/573163746711?text=Hola%2C+quiero+unirme+al+Club+INDIRECTA"
          className="rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white"
        >
          Quiero conocer la oportunidad
        </Link>
      </div>

      <p className="mx-auto mt-6 max-w-xl text-sm">
        Haz click en el boton para hablar conmigo y explicarte todo en una llamada corta.
      </p>
    </section>
  )
}
