"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { TradingClassModule } from "@/lib/trading"

export default function ModuleAccordion({ module }: { module: TradingClassModule }) {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({})
  const [showQuestions, setShowQuestions] = React.useState<Record<string, boolean>>({})
  const [showEval, setShowEval] = React.useState<Record<string, boolean>>({})

  function toggleSection(id: string) {
    setOpenSections((s) => ({ ...s, [id]: !s[id] }))
  }

  function toggleQuestions(id: string) {
    setShowQuestions((s) => ({ ...s, [id]: !s[id] }))
  }

  function toggleEval(id: string) {
    setShowEval((s) => ({ ...s, [id]: !s[id] }))
  }

  const submodules = module.submodules ?? []

  if (submodules.length > 0) {
    return (
      <div className="mt-6 space-y-4">
        {submodules.map((submodule) => {
          const open = !!openSections[submodule.id]
          const questionsVisible = !!showQuestions[submodule.id]

          return (
            <div key={submodule.id} className="rounded-2xl border border-slate-700 bg-slate-950/90 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-lime-300">Submódulo</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{submodule.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{submodule.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant={open ? "secondary" : "outline"} size="sm">
                    <Link href={`/trading/${module.id}/${submodule.id}`}>Explorar módulo</Link>
                  </Button>
                  <Button variant={questionsVisible ? "secondary" : "default"} size="sm" onClick={() => toggleQuestions(submodule.id)}>
                    {questionsVisible ? "Ocultar preguntas" : "Responder preguntas"}
                  </Button>
                </div>
              </div>

              {open && (
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-white">Qué encontrarás aquí</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {submodule.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-lime-300">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {questionsVisible && (
                <div className="mt-4 space-y-3">
                  {submodule.questions.map((question) => {
                    const evalShown = !!showEval[question.id]

                    return (
                      <div key={question.id} className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                        <p className="font-medium text-white">{question.statement}</p>
                        <div className="mt-3 flex items-center gap-3">
                          <Button variant={evalShown ? "destructive" : "outline"} size="sm" onClick={() => toggleEval(question.id)}>
                            {evalShown ? "Ocultar respuesta" : "Mostrar respuesta"}
                          </Button>
                        </div>

                        {evalShown && (
                          <div className="mt-3 rounded-lg bg-slate-950/80 p-3 text-sm text-slate-300">
                            <p className="font-semibold text-white">Respuesta correcta</p>
                            <p className="mt-2 text-lime-300">{question.answer ? "Correcto" : "Incorrecto"}</p>
                            <p className="mt-2 text-slate-400">{question.explanation}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-4">
      {module.questions.map((q) => {
        const open = !!openSections[q.id]
        const evalShown = !!showEval[q.id]

        return (
          <div key={q.id} className="rounded-2xl border border-slate-700 bg-slate-950/90 p-4 cursor-pointer">
            <div onClick={() => toggleSection(q.id)} className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-white">{q.statement}</p>
                <p className="mt-2 text-sm text-slate-400">{open ? "Haz clic para ocultar" : "Haz clic para ver el contenido"}</p>
              </div>
              <div className="flex-shrink-0">
                <Button variant={open ? "secondary" : "outline"} size="sm">{open ? "Abierto" : "Abrir"}</Button>
              </div>
            </div>

            {open && (
              <div className="mt-4 space-y-3">
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-white">{q.statement}</span>.
                </div>

                <div className="flex items-center gap-3">
                  <Button variant={evalShown ? "destructive" : "default"} onClick={() => toggleEval(q.id)}>
                    {evalShown ? "Ocultar evaluación" : "Mostrar evaluación"}
                  </Button>
                </div>

                {evalShown && (
                  <div className="mt-3 rounded-xl bg-slate-900/80 p-3 text-slate-300">
                    <p className="font-semibold text-white">Evaluación</p>
                    <p className="mt-2">
                      Respuesta correcta: <span className="font-medium text-lime-300">{q.answer ? "Correcto" : "Incorrecto"}</span>
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{q.explanation}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
