import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Que ganas con nuestra comunidad?</h1>
                  <p className="text-neutral-400 text-lg">
                    Te quiero hacer las siguientes preguntas, las cuales quiero que respondas de manera sincera:
                  </p>
                  <p>Contexto: Si nuestro objetivo es lograr que nuestros socios ganen 100.000 USD en un año o mas.</p>
                  <p className="text-neutral-400 text-lg">
                     1. Tu trabajo actual te permite alcanzar esa meta financiera?
                  </p>
                  <p className="text-neutral-400 text-lg">
                    2. Has intentado emprender por tu cuenta y no has logrado resultados consistentes?
                  </p>
                  <p className="text-neutral-400 text-lg">
                    3. Cuentas con el conocimiento y la disciplina necesaria para generar ingresos pasivos a traves de diferentes fuentes digitales?
                  </p>
                  <p className="text-lime-300">Si la respuestas a estas preguntas son negativas, innova sera tu mejor aliado para cambiar tu situacion financiera.</p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. Ingreso adicional
                  </h2>
                  <p className="text-lime-300">No pongas todos los huevos en la misma canasta.</p>
                  <p className="text-neutral-300">
                    Al diversificar tus fuentes de ingreso mediante nuestros productos digitales, reduces tu dependencia de un solo trabajo o sueldo. Nuestros socios han reportado ingresos adicionales de hasta $2000 mensuales o más, dependiendo de su constancia y estrategia.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Libertad de tiempo</h2>
                  <p className="text-lime-300">El tiempo es el recurso mas valioso que tenemos</p>
                  <p className="text-neutral-300">
                    Una vez domines las estrategias, podrás trabajar desde cualquier lugar y en cualquier momento, organizando tu vida según tus prioridades. Ganarás control sobre tu tiempo y tu estilo de vida.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Libertad Financiera
                  </h2>
                  <p className="text-lime-300">Haz que el dinero trabaje para ti, no tú para el dinero</p>
                  <p className="text-neutral-300">
                    Aprenderás a generar ingresos pasivos mediante diferentes áreas digitales como trading, dropshipping, network marketing, travel y marca personal. Esto te permitirá construir un sistema de ingresos sostenibles que crecen con el tiempo.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Acceso a canal de trading</h2>
                  <p className="text-lime-300">La disciplina vence a la suerte</p>
                  <p className="text-neutral-300">
                    Recibirás acompañamiento y análisis en tiempo real para aprender a invertir de forma inteligente. El conocimiento te permitirá generar ganancias basadas en estrategia e IA y no en azar.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    5. Acceso a canal de Dropshipping paso a paso
                  </h2>
                  <p className="text-lime-300">Mientras tu duermes, tu negocio puede seguir vendiendo</p>
                  <p className="text-neutral-300">
                    Aprenderás a crear y automatizar tu tienda online sin necesidad de inventario. Esto te da la oportunidad de escalar tu negocio y generar ingresos incluso mientras descansas.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. Acceso a canal de Travel</h2>
                  <p className="text-lime-300">Convierte tu pasión por viajar en una fuente de ingresos.</p>
                  <p className="text-neutral-300">
                    No solo disfrutarás de viajes a precios exclusivos, sino que también podrás generar ingresos gracias a convenios con una plataforma de turismo que ofrece tarifas preferenciales. 
    Tendrás la posibilidad de revender paquetes de viaje a precios competitivos, obteniendo ganancias por cada venta realizada. 
    Así, transformas tus experiencias de viaje en una oportunidad de negocio rentable y escalable.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    7. Se parte de una comunidad de emprendedores digitales
                  </h2>
                  <p className="text-lime-300">Rodeate de quienes te impulsen, no de quienes te limiten</p>
                  <p className="text-neutral-300">
                    Accederás a una comunidad exclusiva de emprendedores donde podrás compartir experiencias, consejos y oportunidades. El entorno correcto multiplica tus resultados.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">8. Acceso a plataforma Inntv</h2>
                  <p className="text-lime-300">El conocimiento es poder, y en Innova te damos las herramientas para empoderarte.</p>
                  <p className="text-neutral-300">
                    Obtendrás acceso exclusivo a la plataforma Innova, donde aprenderás estrategias digitales probadas y recibirás mentorías de expertos nacionales e internacionales. Tu inversión se transforma en educación práctica y rentable.
                    {/* can view our detailed pricing on our{" "}
                    <a href="/pricing" className="text-lime-300 underline">
                      pricing page
                    </a> */}
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Acceso a canal de InnAcademy
                  </h2>
                  <p className="text-lime-300">Una mente sin entrenar no puede lograr nada.</p>
                  <p className="text-neutral-300">
                    Accede a grabaciones exclusivas que te enseñarán a construir y potenciar tu mentalidad.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. Trabaja en equipo junto con la comunidad</h2>
                  <p className="text-lime-300">Si quieres llegar rápido, ve solo; si quieres llegar lejos, ve acompañado.</p>
                  <p className="text-neutral-300">
                    Formarás parte de equipos colaborativos donde la meta es el éxito colectivo. A través del apoyo mutuo, podrás alcanzar resultados más sólidos y sostenibles.
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
      <AppverseFooter />
    </>
  )
}
