"use client"

import { CuanticoHero } from "@/components/saltoscuanticos/CuanticoHero"
import { CuanticoSlider } from "@/components/saltoscuanticos/CuanticoSlider"
import { CuanticoOptions } from "@/components/saltoscuanticos/CuanticoOptions"
import { CuanticoBeneficios } from "@/components/saltoscuanticos/CuanticoBeneficios"

import { CuanticoInfo } from "@/components/saltoscuanticos/CuanticoInfo"
import { CuanticoGuarantee } from "@/components/saltoscuanticos/CaunticoGuarantee"
import { CuanticoQuestion } from "@/components/saltoscuanticos/CuanticoQuestion"
import { CuanticoWhatIsNot } from "@/components/saltoscuanticos/CanticoWhatIsNot"
import { CuanticoBenefits } from "@/components/saltoscuanticos/CuanticoBenefits"
import { CuanticoPricing } from "@/components/saltoscuanticos/CuanticoPricing"
import { CuanticoWhoIsFor } from "@/components/saltoscuanticos/CuanticoWhoIsFor"


import { useState } from "react"

export default function SaltosCuanticos() {
//   const [timeLeft, setTimeLeft] = useState({ minutes: 25, seconds: 0 })

//   // Countdown timer effect
//   window.useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 }
//         } else if (prev.minutes > 0) {
//           return { minutes: prev.minutes - 1, seconds: 59 }
//         }
//         return prev
//       })
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <CuanticoHero />
      <CuanticoSlider />
      <CuanticoOptions />
      <CuanticoBeneficios />
      <CuanticoInfo />
      <CuanticoGuarantee />
      <CuanticoWhatIsNot />
      <CuanticoBenefits />
      <CuanticoPricing />
      <CuanticoWhoIsFor />
      <CuanticoQuestion />
    </main>
  )
}