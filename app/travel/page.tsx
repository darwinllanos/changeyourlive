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
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">
                    Travel Marketing
                  </h1>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    Viaja más, paga menos y genera ingresos
                  </h2>
                  <p className="text-lime-300">El turismo también puede ser una oportunidad de negocio.</p>
                  <p className="text-neutral-300">
                    Travel Marketing funciona como una agencia de viajes digital,
  similar a plataformas como Booking, pero con una gran diferencia:
  tienes acceso a tarifas preferenciales y superdescuentos exclusivos.
  Esto te permite ofrecer viajes a precios más bajos que el mercado tradicional,
  beneficiando al cliente, a la plataforma y a ti.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">Escala el negocio con apoyo y comunidad</h2>
                  <p className="text-lime-300">Viajar conecta personas, crecer conecta oportunidades.</p>
                  <p className="text-neutral-300">
                    Además de vender viajes, formarás parte de una comunidad que aprende
  a recomendar el servicio, atraer clientes y escalar resultados.
  Recibes capacitación, acompañamiento y estrategias para construir
  una fuente de ingresos adicional aprovechando la industria del turismo.

  Simplemente{" "}
  <a
    href="https://api.whatsapp.com/send/?phone=573163746711&text&type=phone_number&app_absent=0"
    className="text-lime-300 underline"
  >
    contáctame
  </a>{" "}
  y comienza a ganar mientras otros disfrutan sus viajes.
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