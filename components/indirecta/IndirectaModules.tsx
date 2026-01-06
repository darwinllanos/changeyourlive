import Image from 'next/image';

const modules = [
  "Trading_Indirecta.webp",
  "Marketing_De_Afiliados_Indirecta.webp",
  "Educacion_Indirecta.webp",
  "Fisico_Indirecta.webp",
  "Espiritualidad_Indirecta.webp",
  "Mentalidad_Indirecta.webp",
  "Dropshipping_Indirecta.webp",
  "Marca_Personal_Indirecta_UGC.webp",
  "Podcast_Indirecta.webp",
  "Club_De_Lectura_Indirecta.webp",
  "Premios_Viajes_Indirecta.webp",
]

export function IndirectaModules() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Todo lo que desbloqueas al entrar
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {modules.map((mod) => (
            /*<div
              key={mod}
              className="rounded-xl border border-orange-400/20 bg-black p-6 text-center text-gray-200"
            >
              {mod}
            </div>*/
            <Image
              key={mod}
              src={`/images/indirecta/${mod}`}
              alt={mod}
              width={300}
              height={200}
            /> 
          ))}
        </div>
      </div>
    </section>
  )
}
