import Image from "next/image"

export function IndirectaLider() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda - Texto */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quien esta detras de esto?{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Camilo Cortes
              </span>
            </h1>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Empresario digital y tradicional: {" "}
                <span className="font-bold text-white">
                  " 3 restaurantes, y varios negocios digitales exitosos.
                </span>{" "}
                Tengo negocios en internet y le enseño a personas a hacer lo mismo.
              </p>

              <p>
                He transformado a cientos de personas ensenandoles estrategias reales de crecimiento digital "
              </p>

              <p className="font-bold text-white">
                CEO Indirecta CLUB
              </p>

              <p>
                "Hemos construido un sistema que permite a cualquier persona sin experiencia{" "}
                <span className="font-bold text-white">
                  aprender, crecer y generar resultados.
                </span>
                 " 
              </p>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/indirecta/CamiloCortesPresentacion.webp"
                alt="Camilo Cortes"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Efecto de resplandor púrpura */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}