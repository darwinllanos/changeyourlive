"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { tradingModules } from "@/lib/trading"

export default function TradingClassQuiz() {
  const [selectedClassId, setSelectedClassId] = React.useState(tradingModules[0].id)
  const [answers, setAnswers] = React.useState<Record<string, "correcto" | "incorrecto">>({})

  const selectedClass = tradingModules.find((module) => module.id === selectedClassId)!
  const correctCount = selectedClass.questions.filter((question) => {
    const answer = answers[question.id]
    if (!answer) return false
    return (answer === "correcto") === question.answer
  }).length

  function handleAnswer(questionId: string, value: "correcto" | "incorrecto") {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  return (
    <section className="container mx-auto px-4 py-12 text-white">
      <div className="rounded-3xl bg-slate-950/80 p-8 shadow-xl shadow-black/30 backdrop-blur-lg ring-1 ring-white/10">
        <div className="mb-8 space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-lime-300/90">Módulo de clases</p>
          <h2 className="text-3xl font-bold text-white">Clasifica tu nivel de trading</h2>
          <p className="text-neutral-300 max-w-3xl">
            Elige una clase y responde si cada afirmación es correcta o incorrecta. Este módulo te ayuda a segmentar el aprendizaje en:
            <span className="font-semibold text-lime-300"> Trading Base, Trading Medio y Trading Avanzado.</span>
          </p>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {tradingModules.map((module) => (
            <button
              key={module.id}
              type="button"
              onClick={() => setSelectedClassId(module.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                selectedClassId === module.id
                  ? "border-lime-300 bg-lime-400/10 text-white"
                  : "border-slate-700 bg-slate-950/70 text-slate-300 hover:border-lime-300/80 hover:bg-slate-900"
              }`}
            >
              <p className="text-sm uppercase tracking-[0.24em] text-lime-300">Clase</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{module.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{module.description}</p>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-lime-300">Clase seleccionada</p>
                <h3 className="text-2xl font-semibold text-white">{selectedClass.title}</h3>
              </div>
              <div className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200">
                Respuestas correctas: {correctCount}/{selectedClass.questions.length}
              </div>
            </div>
            <p className="mt-4 text-slate-300">{selectedClass.description}</p>
          </div>

          <div className="space-y-6">
            {selectedClass.questions.map((question) => {
              const selected = answers[question.id]
              const isCorrect = selected ? (selected === "correcto") === question.answer : undefined

              return (
                <div key={question.id} className="rounded-3xl border border-slate-700 bg-slate-950/90 p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-white">{question.statement}</p>
                      {selected && (
                        <p className={`mt-2 text-sm ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}>
                          {isCorrect ? "Respuesta correcta" : "Respuesta incorrecta"}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant={selected === "correcto" ? "secondary" : "outline"}
                        onClick={() => handleAnswer(question.id, "correcto")}
                      >
                        Correcto
                      </Button>
                      <Button
                        type="button"
                        variant={selected === "incorrecto" ? "secondary" : "outline"}
                        onClick={() => handleAnswer(question.id, "incorrecto")}
                      >
                        Incorrecto
                      </Button>
                    </div>
                  </div>
                  {selected && (
                    <div className="mt-4 rounded-2xl bg-slate-900/80 p-4 text-sm text-slate-300">
                      <span className="font-semibold text-white">Explicación:</span> {question.explanation}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex flex-col gap-3 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-400">¿Quieres repetir la clase?</p>
              <p className="text-white">Selecciona otra clase para ver sus preguntas y retos.</p>
            </div>
            <Button type="button" variant="default" onClick={() => setAnswers({})}>
              Reiniciar respuestas
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
