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
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Network Marketing</h1>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    El negocio que mas millonarios genera en el mundo
                  </h2>
                  <p className="text-lime-300">Crecer juntos es más poderoso que crecer solo.</p>
                  <p className="text-neutral-300">
                    El Network Marketing es un modelo de negocio donde recomiendas servicios que realmente aportan valor,
  construyendo una red de personas con los mismos objetivos de crecimiento. En Innova,
  no solo vendes, aprendes a educar, posicionarte y crear ingresos sostenibles
  a través de la expansión de la comunidad.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">Crece acompañado de una comunidad sólida</h2>
                  <p className="text-lime-300">Si quieres llegar rápido, ve solo; si quieres llegar lejos, ve acompañado.</p>
                  <p className="text-neutral-300">
                    Formarás parte de una comunidad enfocada en el crecimiento personal,
  financiero y profesional. Aquí aprenderás a trabajar en equipo,
  duplicar procesos y ayudar a otros a lograr resultados,
  mientras tú también avanzas.
  Simplemente {" "}
                    <a href="https://api.whatsapp.com/send/?phone=573163746711&text&type=phone_number&app_absent=0" className="text-lime-300 underline">
                      contactame
                    </a>{" "}
                    y hagamos de tu historia un exito.
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