"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CuanticoPricing() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 25, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Todo esto está valorado por <span className="text-cyan-400">más de 17 mil dólares</span>
        </h2>

        <div className="bg-gradient-to-br from-slate-900 to-black border-2 border-cyan-500 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-2xl font-semibold mb-6 text-slate-300">Hoy te llevarás todo esto por:</p>
          <div className="text-6xl md:text-8xl font-bold text-cyan-400 mb-8">$99 - $2000</div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold text-lg px-12 py-8 h-auto rounded-full mb-4"
          >
            <a href="https://wa.me/573163746711/?text=Estoy%20listo%20para%20aprender%20a%20generar%20más%20de%20100%20USD%20al%20día%20con%20Saltos%20Cuánticos">TOCA AQUÍ Y APRENDE A GENERAR MÁS DE $100 USD AL DÍA</a>
          </Button>

          <div className="mt-8 bg-cyan-500/20 border border-cyan-500/50 rounded-lg p-4 inline-block">
            <p className="text-cyan-400 font-semibold text-sm">
              ⏰ Oferta termina en: {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}