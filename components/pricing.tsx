 "use client"

 import { useEffect, useState } from "react"
 import Link from "next/link"
 import { Button } from "@/components/ui/button"
 import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
 import { CheckCircle2 } from "lucide-react"
 import { ExamplesDialog } from "./examples-dialog"

 type Feature = { text: string; muted?: boolean }

 const ACCENT = "#C6FF3A"

 function FeatureItem({ text, muted = false }: Feature) {
   return (
     <li className="flex items-start gap-2">
       <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
       <span className={`text-sm ${muted ? "text-neutral-300" : "text-neutral-100"}`}>{text}</span>
     </li>
   )
 }

 type Currency = "INR" | "USD"

 const PRICES: Record<Currency, { startup: string; pro: string; premium: string; save: string }> = {
   INR: {
     startup: "₹25,000/-",
     pro: "₹55,000/-",
     premium: "₹1,70,500/-",
     save: "Save Flat ₹1,500/-",
   },
   USD: {
     startup: "$33",
     pro: "$33",
     premium: "$33",
     save: "Save $33",
   },
 }

 function guessLocalCurrency(): Currency {
   const lang = typeof navigator !== "undefined" ? navigator.language : ""
   const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
   if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
   return "USD"
 }

 const startupVideos = [
   "H1h5dHpp1Nw",
   "HXARcSSdfMU",
   "fd8zraQ1JdE",
   "ARQyF2FA3Ec",
   "dEZfHADlFtw",
   "wuyfdfKO6Rc",
   "VakkmhtrUA0",
   "o8DoIg9yNGk",
   "rtReBkFt-To",
 ]
 const proVideos = [
   "ASV2myPRfKA",
   "eTfS2lqwf6A",
   "KALbYHmGV4I",
   "Go0AA9hZ4as",
   "sB7RZ9QCOAg",
   "TK2WboJOJaw",
   "5Xq7UdXXOxI",
   "kMjWCidQSK0",
   "RKKdQvwKOhQ",
 ]
 const premiumVideos = [
   "v2AC41dglnM",
   "pRpeEdMmmQ0",
   "3AtDnEC4zak",
   "JRfuAukYTKg",
   "LsoLEjrDogU",
   "RB-RcX5DS5A",
   "hTWKbfoikeg",
   "YQHsXMglC9A",
   "09R8_2nJtjg",
 ]

 export function Pricing() {
   const [openPlan, setOpenPlan] = useState<null | "Startup" | "Pro" | "Premium">(null)
   const [currency, setCurrency] = useState<Currency>("USD")

   useEffect(() => {
     let cancelled = false
     async function load() {
       try {
         const res = await fetch("/api/geo", { cache: "no-store" })
         if (!res.ok) throw new Error("geo failed")
         const data = await res.json()
         if (!cancelled) setCurrency(data?.currency === "INR" ? "INR" : "USD")
       } catch {
         if (!cancelled) setCurrency(guessLocalCurrency())
       }
     }
     load()
     return () => {
       cancelled = true
     }
   }, [])

   return (
     <section id="pricing" className="text-white" itemScope itemType="https:schema.org/PriceSpecification">
       <div className="container mx-auto px-4 py-16 sm:py-20">
         <div className="mx-auto max-w-3xl text-center">
           <div
             className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
             style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
           >
             Precio de la rentabilidad
           </div>
           <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" itemProp="name">
             Precios
           </h2>
           <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300" itemProp="description">
             Quien no pone el dinero en la mesa, no gana. Invertir en ti es la mejor inversión que puedes hacer. Te ayudaremos a formate de manera integral para que logres tus objetivos.
           </p>
           <div className="mt-6">
             <Button
               asChild
               className="rounded-full px-5 text-neutral-900 hover:brightness-95"
               style={{ backgroundColor: "#f2f2f2" }}
             >
               <Link href="https:wa.link/573163746711" target="_blank">
                 Contactanos
               </Link>
             </Button>
           </div>
         </div>

         <div className="mt-10 grid gap-6 lg:grid-cols-3">
           {/* Startup */}
           <Card
             className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
             itemScope
             itemType="https:schema.org/Offer"
           >
             <div
               className="absolute right-4 top-11 rounded-full px-2 py-0.5 text-[10px]"
               style={{ backgroundColor: "#1f1f1f", color: "#d4d4d4" }}
             >
               {PRICES[currency].save}
             </div>
             <CardHeader className="space-y-3 pb-4">
               <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                 Pro Trading
               </div>
               <div className="flex items-end gap-2 text-white">
                 <div className="text-xl font-bold tracking-tight" itemProp="price">
                   {PRICES[currency].startup}
                 </div>
                 <span className="pb-0.5 text-[11px] text-neutral-300">Como operaras?</span>
                 <meta itemProp="priceCurrency" content={currency} />
               </div>
               <Button
                 type="button"
                 onClick={() => setOpenPlan("Startup")}
                 onTouchStart={() => setOpenPlan("Startup")}
                 className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                 style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
               >
                 Ejemplos
               </Button>
             </CardHeader>
             <CardContent className="pt-0">
               <ul className="grid gap-2" itemProp="description">
                 {[
                   "Aprende los fundamentos del trading",
                   "Phiscología del trading y gestión de emociones",
                   "Analisis de mercado y estrategias",
                   "Plan de trading y gestión de riesgos",
                   "Bitacora de trading y seguimiento de resultados",
                   "Acceso a comunidad de traders y soporte",
                 ].map((f, i) => (
                   <FeatureItem key={i} text={f} />
                 ))}
               </ul>
             </CardContent>
             <CardFooter />
           </Card>

           {/* Pro */}
           <Card
             className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
             itemScope
             itemType="https:schema.org/Offer"
           >
             <CardHeader className="space-y-3 pb-4">
               <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                 Pro Trading IA
               </div>
               <div className="flex items-end gap-2 text-white">
                 <div className="text-xl font-bold tracking-tight" itemProp="price">
                   {PRICES[currency].pro}
                 </div>
                 <span className="pb-0.5 text-[11px] text-neutral-300">Como operaras?</span>
                 <meta itemProp="priceCurrency" content={currency} />
               </div>
               <Button
                 type="button"
                 onClick={() => setOpenPlan("Pro")}
                 onTouchStart={() => setOpenPlan("Pro")}
                 className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                 style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
               >
                 Ejemplos
               </Button>
             </CardHeader>
             <CardContent className="pt-0">
               <ul className="grid gap-2" itemProp="description">
                 {[
                   "Trading avanzado con estrategias de IA",
                   "Solo copia y pega las señales de trading en tu plataforma",
                   "Explicación de herramientas de IA y cómo utilizarlas",
                   "Aprende a crear tus propias estrategias de trading con IA",
                   "Crea tu propio sistema de IA con PINESCRIPT",
                   "Gana dinero mientras aprendes a operar con IA",
                 ].map((f, i) => (
                   <FeatureItem key={i} text={f} />
                 ))}
               </ul>
             </CardContent>
             <CardFooter />
           </Card>

           {/* Premium */}
           <Card
             className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
             itemScope
             itemType="https:schema.org/Offer"
           >
             <CardHeader className="relative space-y-3 pb-4">
               <div className="text-sm font-semibold text-neutral-100" itemProp="name">
                 Premium Marca Personal
               </div>
               <div className="flex items-end gap-2 text-white">
                 <div className="text-xl font-bold tracking-tight" itemProp="price">
                   {PRICES[currency].premium}
                 </div>
                 <span className="pb-0.5 text-[11px] text-neutral-300">Como operaras?</span>
                 <meta itemProp="priceCurrency" content={currency} />
               </div>
               <Button
                 type="button"
                 onClick={() => setOpenPlan("Premium")}
                 onTouchStart={() => setOpenPlan("Premium")}
                 className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                 style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
               >
                 Ver ejemplos
               </Button>
             </CardHeader>
             <CardContent className="relative pt-0">
               <ul className="grid gap-2" itemProp="description">
                 {[
                   "Cambia tu vida en 180 dias",
                   "Genera ingresos adicionales con tu marca personal",
                   "Desarrolla tu habilidad para generar ingresos adicionales",
                   "Vuelvete imparable aplicando lo aprendido en tu vida diaria",
                   "Alzancaza el exito con un plan de acción claro y efectivo",
                   "Vuelvete un referente en tu nicho de mercado y gana dinero con ello",
                 ].map((f, i) => (
                   <li key={i} className="flex items-start gap-2">
                     <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                     <span className="text-sm text-neutral-100">{f}</span>
                   </li>
                 ))}
               </ul>
             </CardContent>
             <CardFooter />
           </Card>
         </div>
       </div>

       {/* Modals */}
       <ExamplesDialog
         open={openPlan === "Startup"}
         onOpenChange={(v) => setOpenPlan(v ? "Startup" : null)}
         planName="Startup Plan"
         price={PRICES[currency].startup}
         videoIds={startupVideos}
       />
       <ExamplesDialog
         open={openPlan === "Pro"}
         onOpenChange={(v) => setOpenPlan(v ? "Pro" : null)}
         planName="Pro Plan"
         price={PRICES[currency].pro}
         videoIds={proVideos}
       />
       <ExamplesDialog
         open={openPlan === "Premium"}
         onOpenChange={(v) => setOpenPlan(v ? "Premium" : null)}
         planName="Premium Plan"
         price={PRICES[currency].premium}
         videoIds={premiumVideos}
       />
     </section>
   )
 }