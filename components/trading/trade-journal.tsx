"use client"

import * as React from "react"
import { useMemo, useState } from "react"
import Link from "next/link"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isSameDay } from "date-fns"
import { es } from "date-fns/locale"
import { ArrowLeft, ArrowRight, BadgeDollarSign, ExternalLink, TrendingDown, TrendingUp, Upload, Wallet2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"

type TradeMethod = "Metodología IA" | "Metodología Personal"
type TradeOutcome = "win" | "loss"

type Trade = {
  id: string
  date: string
  method: TradeMethod
  symbol: string
  entryLink: string
  pnl: number
  notes: string
  outcome: TradeOutcome
}

type TradeFilter = "all" | TradeMethod

const INITIAL_TRADES: Trade[] = [
  /*{
    id: "t1", Ejemplos de como diligenciar el JSON para importar trades
    date: "2026-08-01",
    method: "Metodología A",
    symbol: "EURUSD",
    entryLink: "https://www.tradingview.com/chart/?symbol=OANDA:EURUSD",
    pnl: 132.5,
    notes: "Entrada en pullback con confluencia de soporte.",
    outcome: "win",
  },
  {
    id: "t2",
    date: "2026-08-03",
    method: "Metodología B",
    symbol: "XAUUSD",
    entryLink: "https://www.tradingview.com/chart/?symbol=OANDA:XAUUSD",
    pnl: -88.2,
    notes: "Ruptura falsa, se cerró con pérdida controlada.",
    outcome: "loss",
  },*/
]

function parseImportedTrades(rawText: string): Trade[] {
  const trimmed = rawText.trim()

  if (!trimmed) {
    throw new Error("El archivo está vacío")
  }

  try {
    const parsed = JSON.parse(trimmed)

    if (!Array.isArray(parsed)) {
      throw new Error("El JSON debe ser un array de trades")
    }

    return parsed.map((item, index) => {
      const pnl = Number(item.pnl ?? item.profit ?? item.result ?? 0)
      const method = item.method === "Metodología Personal" ? "Metodología Personal" : "Metodología IA"
      const outcome: TradeOutcome = pnl >= 0 ? "win" : "loss"

      return {
        id: `import-${index + 1}`,
        date: String(item.date ?? ""),
        method,
        symbol: String(item.symbol ?? item.asset ?? "N/A"),
        entryLink: String(item.entryLink ?? item.link ?? ""),
        pnl,
        notes: String(item.notes ?? item.description ?? "Sin notas"),
        outcome,
      }
    })
  } catch {
    throw new Error("No se pudo leer el archivo. Sube un JSON con trades válidos.")
  }
}

export function TradeJournal() {
  const [trades, setTrades] = useState<Trade[]>(INITIAL_TRADES)
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date(2026, 7, 1))
  const [selectedMethod, setSelectedMethod] = useState<TradeFilter>("all")
  const [selectedDay, setSelectedDay] = useState<string>("2026-08-01")
  const [personalStartingBalance, setPersonalStartingBalance] = useState(1284)
  const [fundedStartingBalance, setFundedStartingBalance] = useState(9974)
  const [importError, setImportError] = useState("")

  const filteredTrades = useMemo(() => {
    return trades.filter((trade) => selectedMethod === "all" || trade.method === selectedMethod)
  }, [trades, selectedMethod])

  const monthDays = useMemo(() => {
    const start = startOfMonth(selectedMonth)
    const end = endOfMonth(selectedMonth)
    return eachDayOfInterval({ start, end })
  }, [selectedMonth])

  const tradesByDay = useMemo(() => {
    return filteredTrades.reduce<Record<string, Trade[]>>((acc, trade) => {
      const dayKey = trade.date
      acc[dayKey] = acc[dayKey] ? [...acc[dayKey], trade] : [trade]
      return acc
    }, {})
  }, [filteredTrades])

  const totalPnl = filteredTrades.reduce((sum, trade) => sum + trade.pnl, 0)
  const winningTrades = filteredTrades.filter((trade) => trade.outcome === "win").length
  const winRate = filteredTrades.length ? Math.round((winningTrades / filteredTrades.length) * 100) : 0
  const biggestWin = Math.max(...filteredTrades.map((trade) => trade.pnl), 0)
  const biggestLoss = Math.min(...filteredTrades.map((trade) => trade.pnl), 0)
  const selectedDayTrades = selectedDay ? tradesByDay[selectedDay] ?? [] : []

  const personalCurrentBalance = personalStartingBalance + totalPnl
  const fundedCurrentBalance = fundedStartingBalance + totalPnl

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const text = await file.text()

    try {
      const imported = parseImportedTrades(text)
      setTrades(imported)
      setImportError("")
      setSelectedDay(imported[0]?.date ?? selectedDay)
    } catch (error) {
      setImportError(error instanceof Error ? error.message : "No se pudo procesar el archivo")
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(132,204,22,0.2),_transparent_40%)] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-3">
                <Badge className="w-fit border-lime-400/40 bg-lime-400/10 text-lime-300">
                  Historial de mi trading
                </Badge>
                <h1 className="text-3xl font-semibold sm:text-4xl">
                  Desde el 1 de Agosto de 2026 hasta hoy, he registrado mis operaciones y resultados en este journal.
                </h1>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  Aqui podras ver el historial de mis 2 cuentas en donde implemento mis metodologias de trading, la cuenta personal y la cuenta de fondeo. Dentro de estas puedes ingresar el valor de tu capital y el programa te simulara el rendimiento de tu cuenta en base a mis resultados.
                </p>
              </div>

              {/* <label className="flex cursor-pointer items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-300 transition hover:bg-lime-400/20">
                <Upload className="h-4 w-4" />
                Importar historial JSON
                <input type="file" accept=".json,application/json" className="sr-only" onChange={handleImport} />
              </label> */}
            </div>
            {importError ? <p className="mt-4 text-sm text-rose-400">{importError}</p> : null}
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card className="border-white/10 bg-slate-950/80 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Total de trades</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{filteredTrades.length}</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-slate-950/80 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Win rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{winRate}%</p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-slate-950/80 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">PnL neto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-3xl font-semibold ${totalPnl >= 0 ? "text-lime-300" : "text-rose-400"}`}>
                  {totalPnl >= 0 ? "+" : ""}${totalPnl.toFixed(2)}
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-slate-950/80 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Rango de resultados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lime-300">Mejor: +${biggestWin.toFixed(2)}</p>
                <p className="text-rose-400">Peor: ${biggestLoss.toFixed(2)}</p>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <Card className="border-white/10 bg-slate-950/80 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Wallet2 className="h-4 w-4 text-lime-300" /> Cuenta personal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 p-4">
                  <div>
                    <p className="text-sm text-slate-400">Saldo inicial</p>
                    <p className="text-xl font-semibold">${personalStartingBalance.toLocaleString()}</p>
                  </div>
                  <input
                    type="number"
                    value={personalStartingBalance}
                    onChange={(event) => setPersonalStartingBalance(Number(event.target.value || 0))}
                    className="w-28 rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-sm text-white"
                  />
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 p-4">
                  <div>
                    <p className="text-sm text-slate-400">Saldo actual</p>
                    <p className="text-xl font-semibold text-lime-300">${personalCurrentBalance.toLocaleString()}</p>
                  </div>
                  <BadgeDollarSign className="h-5 w-5 text-lime-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-slate-950/80 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Wallet2 className="h-4 w-4 text-cyan-300" /> Cuenta de fondeo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 p-4">
                  <div>
                    <p className="text-sm text-slate-400">Saldo inicial</p>
                    <p className="text-xl font-semibold">${fundedStartingBalance.toLocaleString()}</p>
                  </div>
                  <input
                    type="number"
                    value={fundedStartingBalance}
                    onChange={(event) => setFundedStartingBalance(Number(event.target.value || 0))}
                    className="w-28 rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-sm text-white"
                  />
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 p-4">
                  <div>
                    <p className="text-sm text-slate-400">Saldo actual</p>
                    <p className="text-xl font-semibold text-cyan-300">${fundedCurrentBalance.toLocaleString()}</p>
                  </div>
                  <BadgeDollarSign className="h-5 w-5 text-cyan-300" />
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() => setSelectedMethod("all")}
              className={selectedMethod === "all"
                ? "border-lime-400 bg-lime-400 text-slate-950 hover:bg-lime-300"
                : "border-white/15 bg-slate-900/70 text-slate-200 hover:bg-slate-800 hover:text-white"}
            >
              Todas
            </Button>
            <Button
              onClick={() => setSelectedMethod("Metodología IA")}
              className={selectedMethod === "Metodología IA"
                ? "border-lime-400 bg-lime-400 text-slate-950 hover:bg-lime-300"
                : "border-white/15 bg-slate-900/70 text-slate-200 hover:bg-slate-800 hover:text-white"}
            >
              Metodología IA
            </Button>
            <Button
              onClick={() => setSelectedMethod("Metodología Personal")}
              className={selectedMethod === "Metodología Personal"
                ? "border-lime-400 bg-lime-400 text-slate-950 hover:bg-lime-300"
                : "border-white/15 bg-slate-900/70 text-slate-200 hover:bg-slate-800 hover:text-white"}
            >
              Metodología Personal
            </Button>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
            <Card className="border-white/10 bg-slate-950/80 text-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Calendario de operaciones</CardTitle>
                  <p className="mt-2 text-sm text-slate-400">
                    {format(selectedMonth, "MMMM yyyy", { locale: es })}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    onClick={() => setSelectedMonth(subMonths(selectedMonth, 1))}
                    className="border-white/15 bg-slate-900/70 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    onClick={() => setSelectedMonth(addMonths(selectedMonth, 1))}
                    className="border-white/15 bg-slate-900/70 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-[0.24em] text-slate-400">
                  {['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'].map((day) => (
                    <div key={day}>{day}</div>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-7 gap-2">
                  {monthDays.map((day) => {
                    const dayKey = format(day, "yyyy-MM-dd")
                    const dayTrades = tradesByDay[dayKey] ?? []
                    const isSelected = selectedDay === dayKey

                    return (
                      <button
                        key={dayKey}
                        onClick={() => setSelectedDay(dayKey)}
                        className={`min-h-[92px] rounded-2xl border p-2 text-left transition ${isSelected ? "border-lime-400 bg-lime-400/10" : "border-white/10 bg-slate-900/70 hover:border-lime-400/50"}`}
                      >
                        <p className="text-sm font-semibold">{format(day, "d")}</p>
                        <div className="mt-2 space-y-1">
                          {dayTrades.slice(0, 2).map((trade) => (
                            <div key={trade.id} className={`rounded-lg px-2 py-1 text-[11px] ${trade.outcome === "win" ? "bg-lime-400/15 text-lime-300" : "bg-rose-400/15 text-rose-300"}`}>
                              {trade.symbol}
                            </div>
                          ))}
                          {dayTrades.length > 2 ? <p className="text-[10px] text-slate-400">+{dayTrades.length - 2} más</p> : null}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-slate-950/80 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Detalle del día</CardTitle>
                <p className="mt-2 text-sm text-slate-400">
                  {selectedDay ? format(new Date(selectedDay), "PPP", { locale: es }) : "Selecciona un día"}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {selectedDayTrades.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-white/10 bg-slate-900/50 p-4 text-sm text-slate-400">
                    No hay trades para esta fecha.
                  </div>
                ) : (
                  selectedDayTrades.map((trade) => (
                    <div key={trade.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold">{trade.symbol}</p>
                          <p className="text-sm text-slate-400">{trade.method}</p>
                        </div>
                        <Badge className={trade.outcome === "win" ? "border-lime-400/30 bg-lime-400/10 text-lime-300" : "border-rose-400/30 bg-rose-400/10 text-rose-300"}>
                          {trade.outcome === "win" ? <TrendingUp className="mr-1 h-3.5 w-3.5" /> : <TrendingDown className="mr-1 h-3.5 w-3.5" />}
                          {trade.pnl >= 0 ? "+" : ""}${trade.pnl.toFixed(2)}
                        </Badge>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-slate-300">{trade.notes}</p>

                      {trade.entryLink ? (
                        <Link
                          href={trade.entryLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-300"
                        >
                          Ver entrada en TradingView <ExternalLink className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  )
}
