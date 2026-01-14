import Image from "next/image"

export function CuanticoInfo() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda - Texto */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tu mentor?{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sebastian Salas
              </span>
            </h1>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Empresario digital: {" "}
                <span className="font-bold text-white">
                  " Vivo de vacaciones +28 paises visitados
                </span>{" "}
                Tengo negocios en internet y le enseño a personas a hacer lo mismo.
              </p>

              <p>
                He ganado $ 1 Millon de USD haciendolo "
              </p>

              <p>
                Saltos Cuanticos
              </p>

              <p>
                " Una oportunidad que permite que{" "}
                <span className="font-bold text-white">
                  cualquiera pueda generar ingresos adicionales. 
                </span>
                 " 
              </p>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/saltoscuanticos/SebastianSalasPresentacion.webp"
                alt="Sebastian Salas"
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

