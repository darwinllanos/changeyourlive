import { SiteHeader } from "@/components/site-header"
import { tradingModules } from "@/lib/trading"

export default function MedioPage() {
  const module = tradingModules.find((m) => m.id === "medio")
  if (!module) return <div>No encontrado</div>

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        <h1 className="text-3xl font-bold text-lime-300">{module.title}</h1>
        <p className="mt-3 text-slate-300">{module.description}</p>

        <div className="mt-6 space-y-4">
          {module.questions.map((q) => (
            <div key={q.id} className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
              <p className="font-semibold text-white">{q.statement}</p>
              <p className="mt-2 text-sm text-slate-300">Respuesta: {q.answer ? "Verdadero" : "Falso"}</p>
              <p className="mt-2 text-sm text-slate-400">{q.explanation}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
