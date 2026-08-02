import { TradeJournal } from "@/components/trading/trade-journal"

export const metadata = {
  title: "Journal de Trading",
  description: "Calendario de trades, balances y acceso rápido a tus entradas en TradingView.",
}

export default function JournalPage() {
  return <TradeJournal />
}
