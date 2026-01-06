"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import {
  Trophy,
  Users,
  TrendingUp,
  Package,
  Target,
  Map,
  CreditCard,
  Crown,
  GraduationCap,
  Fingerprint,
  Zap,
  Brain,
  InfoIcon,
} from "lucide-react"

export function IndirectaPlans() {
  const [isAnnual, setIsAnnual] = useState(false)
  const today = new Date()

  const day = today.getDate()

  const month = today.toLocaleString("es-ES", { month: "long" }).toUpperCase()


  return (
    <main className="min-h-screen text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-400 text-sm font-semibold tracking-wider mb-4">TU NUEVO COMIENZO</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Planes para Club Indirecta</h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto text-pretty leading-relaxed">
            Alcanza tu libertad construyendo tu imperio digital paso a paso con productos digitales: gana en dólares y genera ingresos adicionales todos los dias.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-slate-400"}`}>Mensual</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-slate-700" />
          <span className={`text-sm font-medium ${isAnnual ? "text-white" : "text-slate-400"}`}>Anual</span>
          <Badge className="bg-yellow-500 text-black font-semibold border-none hover:bg-yellow-500">MEJOR OFERTA</Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Plan Standard */}
          
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white font-semibold border-none hover:bg-orange-500 px-6">
              RECOMENDADO
            </Badge>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-cyan-400">Standard</h2>
              </div>

              <p className="text-slate-300 mb-2 text-sm">
                Menos de $2 USD al día por aprender a generar ingresos digitales.
              </p>
              <p className="text-cyan-400 mb-6 text-sm">
                Para los que están listos para dejar de consumir y empezar a construir.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-cyan-400">${isAnnual ? "500" : "50"}</span>
                  <span className="text-slate-400 text-sm">/mes</span>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
                  <p className="text-cyan-400 text-xs font-semibold">
                    EL {day} DE {month} 2026 SUBE A ${isAnnual ? "1800" : "180"}/MES
                  </p>
                  <p className="text-slate-400 text-xs">
                    Los que entren hoy con ${isAnnual ? "500" : "50"} mantienen este precio por 6 meses.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Acceso a la plataforma Skool</p>
                  </div>
                  <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Comunidad</p>
                  </div>
                  <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white">
                      Trading con IA
                    </p>
                  </div>
                  <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                </div>

                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Dropshipping</p>
                  </div>
                  <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Meta ADS</p>
                  </div>
                  <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                </div>

                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Funnel Hacking de productos</p>
                  </div>
                  <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                </div>

                <div className="flex items-start gap-3">
                  <Map className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Mapa de ejecución</p>
                  </div>
                  <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Medios de venta automáticos</p>
                  </div>
                  <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                </div>
              </div>

              <Button className="w-full bg-cyan-700 hover:bg-cyan-600 text-white font-semibold h-12">
                <a href="https://wa.me/573163746711?text=Hola%2C+quiero+unirme+al+Club+INDIRECTA">Hazme Miembro Standard Ahora</a>
              </Button>

              <p className="text-center text-slate-500 text-xs mt-4">
                Garantía de reembolso de 15 días
                <br />
                <span className="text-slate-600">Cancela cuando quieras</span>
              </p>
            </div>
          </Card>

          {/* Plan Premium */}
          <Card className="bg-slate-900/50 border-orange-500/50 backdrop-blur-sm relative">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-orange-400">Premium</h2>
              </div>

              <p className="text-slate-300 mb-2 text-sm">Menos de $4 al día para expandir tus resultados.</p>
              <p className="text-orange-400 mb-6 text-sm">Para los que no quieren jugar pequeño y van en serio.</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-orange-400">${isAnnual ? "2500" : "250"}</span>
                  <span className="text-slate-400 text-sm">/mes</span>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                  <p className="text-orange-400 text-xs font-semibold">
                    EL {day} DE {month} 2026 SUBE A ${isAnnual ? "1188" : "99"}/MES
                  </p>
                  
                  <p className="text-slate-400 text-xs">
                    Los que entren hoy con ${isAnnual ? "2500" : "250"} mantienen este precio de por vida.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-yellow-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  <p className="text-yellow-500 font-semibold text-sm">TODO LO DEL PLAN STANDARD MÁS:</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Crown className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-white">2 Mentorías grupales a la semana</p>
                    </div>
                    <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                  </div>

                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-white">Acceso VIP a senales de trading</p>
                    </div>
                    <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-white">Masterclasses exclusivas con expertos</p>
                    </div>
                    <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                  </div>

                  <div className="flex items-start gap-3">
                    <Fingerprint className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-white">Identidad de Millonario digital</p>
                    </div>
                    <InfoIcon className="w-4 h-4 text-slate-500 shrink-0" />
                  </div>
                </div>
              </div>

              {/* <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 mb-6">
                <p className="text-orange-400 font-semibold text-sm mb-3">EN BREVE</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Clases de automatizaciones con N8n</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">Clases de agentes y IA</p>
                  </div>
                </div>
              </div> */}

              <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold h-12">
                Quiero Acceso Premium Completo
              </Button>

              <p className="text-center text-slate-500 text-xs mt-4">
                Garantía de reembolso de 15 días
                <br />
                <span className="text-slate-600">Cancela cuando quieras</span>
              </p>
            </div>
          </Card>
        </div>

        <p className="text-center text-white font-semibold text-lg mt-12">
          Estás a una decisión de cambiar cómo ganas dinero en 2026.
        </p>
      </div>
    </main>
  )
}