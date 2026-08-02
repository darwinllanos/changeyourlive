import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { tradingModules } from "@/lib/trading"
import ModuleAccordion from "@/components/trading/ModuleAccordion"

export default function BasePage() {
  const module = tradingModules.find((m) => m.id === "base")
  if (!module) return <div>No encontrado</div>

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-sm uppercase tracking-[0.32em] text-lime-300">Trading Base</p>
          <h1 className="mt-3 text-3xl font-bold text-white">{module.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-300">{module.description}</p>
        </div>

        <section className="mt-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">Elige un tema para entrar</h2>
              <p className="mt-2 text-sm text-slate-400">Cada opción te llevará a una landing con video, texto e imagen para seguir el contenido.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {module.submodules?.map((submodule) => (
              <Link
                key={submodule.id}
                href={`/trading/base/${submodule.id}`}
                className="group rounded-2xl border border-slate-700 bg-slate-900/80 p-5 transition hover:-translate-y-1 hover:border-lime-300"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-lime-300">Submódulo</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{submodule.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{submodule.description}</p>
                <div className="mt-5 inline-flex items-center text-sm font-medium text-lime-300 group-hover:underline">
                  Entrar al contenido →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <ModuleAccordion module={module} />
        </section>
      </main>
    </>
  )
}
