import { DailyPhrase } from "@/components/daily-phrase"
import { SiteHeader } from "@/components/site-header"
import { Sparkles } from "lucide-react"

export default function phrase() {
  return (
    <>
        <SiteHeader />
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-5 bg-background/60 backdrop-blur-xl border-b border-border/40">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent" />
        <span className="text-sm font-medium tracking-widest uppercase text-foreground">
          Frase del dia
        </span>
      </div>
      <div className="text-xs text-muted-foreground font-mono tracking-wider">
        {new Date().toLocaleDateString("es-MX", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </div>
    </nav>
        <DailyPhrase />
    </> 
  )
}