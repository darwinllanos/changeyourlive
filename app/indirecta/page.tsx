import { IndirectaHero } from "@/components/indirecta/IndirectaHero"
import { IndirectaPositioning } from "@/components/indirecta/IndirectaPositioning"
import { IndirectaModules } from "@/components/indirecta/IndirectaModules"
import { IndirectaBenefits } from "@/components/indirecta/IndirectaBenefits"
import { IndirectaCTA } from "@/components/indirecta/IndirectaCTA"
import { IndirectaQuestions } from "@/components/indirecta/IndirectaQuestions"
import { IndirectaPlans } from "@/components/indirecta/IndirectaPlans"
import { IndirectaMyHistory } from "@/components/indirecta/IndirectaMyHistory"
import { IndirectaTestimony } from "@/components/indirecta/IndirectaTestimony"

export const dynamic = "force-static"

export default function IndirectaPage() {
  return (
    <main className="min-h-screen text-white">
      <IndirectaHero />
      <IndirectaMyHistory />
      <IndirectaTestimony />
      <IndirectaPositioning />
      <IndirectaModules />
      <IndirectaBenefits />
      <IndirectaCTA />
      <IndirectaPlans />
      <IndirectaQuestions />
    </main>
  )
}
