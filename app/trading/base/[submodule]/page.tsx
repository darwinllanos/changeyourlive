"use client"

import * as React from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { tradingModules } from "@/lib/trading"

export default function TradingSubmodulePage({
  params,
}: {
  params: { submodule: string }
}) {
  const [answers, setAnswers] = React.useState<Record<string, boolean>>({})

  const module = tradingModules.find((item) => item.id === "base")
  const submodule = module?.submodules?.find((item) => item.id === params.submodule)

  function handleAnswer(questionId: string, value: boolean) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  if (!module || !submodule) {
    return (
      <>
        <SiteHeader />
        <main className="container mx-auto px-4 py-16 text-white">
          <p className="text-lg text-slate-300">No se encontró este submódulo.</p>
          <Link href="/trading/base" className="mt-4 inline-block text-lime-300 underline">
            Volver a Trading Base
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        <Link href="/trading/base" className="text-sm text-lime-300 underline">
          ← Volver a Trading Base
        </Link>

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/90 shadow-2xl shadow-black/20">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-lime-300">Submódulo</p>
              <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{submodule.title}</h1>
              <p className="mt-4 text-lg leading-8 text-slate-300">{submodule.description}</p>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-300">Lo que aprenderás</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {submodule.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-lime-300">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-700 bg-slate-900/70 p-6 sm:p-8 lg:border-t-0 lg:border-l">
              {submodule.videoUrl ? (
                <div className="overflow-hidden rounded-2xl border border-slate-800">
                  <iframe
                    src={submodule.videoUrl}
                    title={submodule.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="aspect-video w-full"
                  />
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 text-sm text-slate-400">
                  Inserta aquí tu video de introducción.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">Contenido clave</h2>
              {submodule.contentBlocks?.length ? (
                <div className="mt-4 space-y-4">
                  {submodule.contentBlocks.map((block) => (
                    <div key={block.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                      <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{block.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-slate-300 leading-8">
                  Agrega bloques de contenido personalizados para este submódulo.
                </p>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/80">
            {submodule.imageUrl ? (
              <img
                src={submodule.imageUrl}
                alt={submodule.imageAlt ?? submodule.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-[260px] items-center justify-center bg-slate-900/70 text-sm text-slate-400">
                Inserta aquí una imagen de apoyo.
              </div>
            )}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">Preguntas de repaso</h2>
          <div className="mt-6 space-y-4">
            {submodule.questions.map((question) => {
              const selected = answers[question.id]
              const isCorrect = selected === question.answer

              return (
                <div key={question.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="font-medium text-white">{question.statement}</p>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <Button
                      type="button"
                      size="sm"
                      variant={selected === true ? "secondary" : "outline"}
                      className={selected === true ? "bg-[#a3e635] text-black hover:bg-[#b4f04a] border-[#a3e635] shadow-sm" : "border-slate-600 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"}
                      onClick={() => handleAnswer(question.id, true)}
                    >
                      Verdadero
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant={selected === false ? "secondary" : "outline"}
                      className={selected === false ? "bg-[#a3e635] text-black hover:bg-[#b4f04a] border-[#a3e635] shadow-sm" : "border-slate-600 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"}
                      onClick={() => handleAnswer(question.id, false)}
                    >
                      Falso
                    </Button>
                  </div>

                  {selected !== undefined && (
                    <div className="mt-4 rounded-xl bg-slate-900/80 p-3 text-sm text-slate-300">
                      <p className={isCorrect ? "text-emerald-400" : "text-rose-400"}>
                        {isCorrect ? "Respuesta correcta" : "Respuesta incorrecta"}
                      </p>
                      <p className="mt-2 text-slate-300">
                        La respuesta correcta es: <span className="font-semibold text-white">{question.answer ? "Verdadero" : "Falso"}</span>
                      </p>
                      <p className="mt-2 text-slate-400">{question.explanation}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
