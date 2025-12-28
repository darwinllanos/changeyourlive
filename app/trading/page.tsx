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
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Trading</h1>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    Opera con confianza, Lidera con resultados
                  </h2>
                  <p className="text-lime-300">La disciplina vence a la suerte</p>
                  <p className="text-neutral-300">
                    Opera como un experto, no como un principiante
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">Aprende Trading junto con profesionales</h2>   
                  <p className="text-lime-300">Transforma tu futuro: educación profesional + trading inteligente</p>
                  <ul className="list-disc list-inside text-neutral-300">
                    <li>📊 Formación de alto nivel impartida por profesionales con experiencia real.</li>
                    <li>💡 La posibilidad de replicar las operaciones de nuestros expertos, aprendiendo con ejemplos prácticos.</li>
                    <li>🤖 Acceso exclusivo al indicador INNSCANNER, para tomar decisiones informadas.</li>
                    <li>🧠 Opción de programar un sistema de operaciones con IA, automatizando tu estrategia y optimizando tu tiempo.</li>
                  </ul>
                  <p className="text-neutral-300">
                    En nuestra academia obtendras mas que teoria: {" "}
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