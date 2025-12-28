import { SiteHeader } from "@/components/site-header"
import CircleRows from "@/components/circle-rows"

export default function page() {
  return (
    <>
      <SiteHeader />
      <section className=" text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Dropshipping</h1>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    Construye tu negocio digital: Dropshipping sin límites
                  </h2>
                  <p className="text-lime-300">En nuestra academia te guiamos paso a paso para crear un negocio de dropshipping sólido y rentable:</p>
                  <p className="text-neutral-300">
                    Al diversificar tus fuentes de ingreso mediante nuestros productos digitales, reduces tu dependencia de un solo trabajo o sueldo. Nuestros socios han reportado ingresos adicionales de hasta $2000 mensuales o más, dependiendo de su constancia y estrategia.
                  </p>
                  <ul className="list-disc list-inside text-neutral-300">
                    <li>Aprende de profesionales con experiencia real en comercio electrónico y ventas digitales.</li>
                    <li>Replica las estrategias ganadoras que utilizan nuestros expertos para encontrar productos virales y escalar tiendas.</li>
                    <li>Accede a herramientas especializadas para validar productos, analizar competencia y optimizar conversiones.</li>
                    <li>Diseña y automatiza tu propio sistema de ventas usando IA, desde la selección de productos hasta la creación de anuncios.</li>
                    <li>Convierte tu idea en un negocio digital funcionando 24/7, incluso mientras duermes.</li>
                  </ul>
                  <p className="text-neutral-300">
                    Únete a nuestra comunidad de emprendedores digitales y comienza a construir tu imperio de dropshipping hoy mismo. ¡El éxito está a solo un clicK de distancia!
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CircleRows />
    </> 
  )
}