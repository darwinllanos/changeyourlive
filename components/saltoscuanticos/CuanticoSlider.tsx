"use client"

export function CuanticoSlider() {
  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          PDTA: ¿Si un niño de 13 años pudo,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            por qué tú no?
          </span>
        </h2>

        <div className="mt-12 overflow-hidden relative">
          <div className="flex gap-6 animate-scroll">
            {/* Duplicamos las imágenes para loop infinito */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                <img
                  src="/young-person-checking-phone-with-financial-graphs-.jpg"
                  alt="Joven verificando teléfono con gráficos financieros"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
                <img
                  src="/young-entrepreneur-with-cap-in-urban-setting.jpg"
                  alt="Joven emprendedor con gorra en entorno urbano"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
                <img
                  src="/person-with-headphones-in-purple-neon-lighting-wor.jpg"
                  alt="Persona con auriculares en iluminación neón morada"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
                <img
                  src="/three-people-at-business-conference-with-badges-sm.jpg"
                  alt="Tres personas en conferencia de negocios con credenciales"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
                <img
                  src="/young-person-holding-award-trophy-proudly.jpg"
                  alt="Joven sosteniendo trofeo con orgullo"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
                <img
                  src="/phone-screen-showing-sales-notifications-and-commi.jpg"
                  alt="Pantalla de teléfono mostrando notificaciones de ventas"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
                <img
                  src="/hands-holding-phone-showing-business-dashboard.jpg"
                  alt="Manos sosteniendo teléfono mostrando panel de negocios"
                  className="w-80 h-96 object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}