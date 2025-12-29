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
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Marca Personal</h1>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    Crea oportunidad
                  </h2>
                  <p className="text-lime-300">Tu marca personal es tu activo mas valioso.</p>
                  <p className="text-neutral-300">
                    En Innova te enseñamos a convertir tus conocimientos, habilidades y experiencia en una identidad sólida, confiable y rentable en el mundo digital. No se trata solo de vender, sino de posicionarte, generar autoridad y crear oportunidades reales de crecimiento personal y financiero.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">Da el primer paso</h2>
                  <p className="text-lime-300">Construir tu marca personal es una decisión que puede cambiar tu futuro.</p>
                  <p className="text-neutral-300">{" "}
                    <a href="https://api.whatsapp.com/send/?phone=573163746711&text&type=phone_number&app_absent=0" className="text-lime-300 underline">
                      Contactame
                    </a>{" "}y hagamos de tu historia un éxito, acompañado de una comunidad que cree en el crecimiento real y sostenible.
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