import { SiteHeader } from "@/components/site-header"
import CircleRows from "@/components/circle-rows"
import TradingClassQuiz from "@/components/trading/TradingClassQuiz"
import Link from "next/link"
import { tradingModules } from "@/lib/trading"

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
                  <h2 className="text-2xl font-semibold text-white">Aprende a hacer trading con analisis tecnico</h2>   
                  <p className="text-lime-300">Transforma tu futuro</p>
                  <ul className="list-disc list-inside text-neutral-300">
                    <li>📊 Aprende a interpretar el mercado y tomar decisiones con fundamentos, no con emociones.</li>
                    <li>🎯 Crea un sistema de trading claro y repetible adaptado a tu estilo.</li>
                    <li>📈 Aplica análisis técnico en acciones, índices, forex o criptomonedas.</li>
                    <li>🤖 Diseña indicadores y automatizaciones en Pine Script para agilizar tu análisis.</li>
                    <li>💬 Forma parte de una comunidad donde compartimos estrategias, ideas y aprendizaje continuo.</li>
                  </ul>
                  <p className="text-neutral-300">
                    Aprende la manera en que opero 1 a 1: {" "}
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

      {/* <TradingClassQuiz /> */}

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-3">
            <Link href="/trading/journal" className="block rounded-2xl border border-lime-400/40 bg-gradient-to-br from-lime-500/20 to-slate-950/80 p-6 transition hover:border-lime-300">
              <p className="text-sm uppercase tracking-[0.24em] text-lime-300">Herramienta</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Journal de trades</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Calendario con PnL diario, balances y acceso rápido a tus entradas de TradingView.</p>
            </Link>
            {tradingModules.map((m) => (
              <Link key={m.id} href={`/trading/${m.id}`} className="block rounded-2xl border border-slate-700 bg-slate-950/80 p-6 hover:border-lime-300 transition">
                <p className="text-sm uppercase tracking-[0.24em] text-lime-300">Nivel</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{m.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}