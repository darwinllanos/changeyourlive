import { SiteHeader } from "@/components/site-header"
import { TextImageSection } from "@/components/text-image"
import { HeroSection } from "@/components/hero-section"
import { Pricing } from "@/components/pricing"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import CircleRows from "@/components/circle-rows"
// import { LogoMarquee } from "@/components/logo-marquee"

import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://theskitbit.com/#pricing",
    name: "Change Your Life in 180 Days",
    description: "Cambia tu vida en 180 dias",
    url: "https://theskitbit.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Change Your Life in 180 Days",
      description: "Cambia tu vida en 180 dias",
      offers: [
        {
          "@type": "Offer",
          name: "Trading Basic Plan",
          price: "10",
          priceCurrency: "USD",
          description: "Aprende los fundamentos del trading y la gestión de riesgos básica.",
        },
        {
          "@type": "Offer",
          name: "Trading Pro Plan",
          price: "33",
          priceCurrency: "USD",
          description: "Aprende estrategias avanzadas de trading y gestión de riesgos.",
        },
        {
          "@type": "Offer",
          name: "Marca Personal Plan",
          price: "33",
          priceCurrency: "USD",
          description: "Aprende a crear y gestionar tu marca personal de forma efectiva.",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://theskitbit.com/",
    name: "CYL180 | Cambia tu vida en 180 dias",
    description:
      "Te demostrare como 180 dias enfocados pueden cambiar tu vida. Descubre nuestros productos digitales diseñados para ayudarte a alcanzar tus metas y transformar tu vida en solo 180 dias.",
    url: "https://theskitbit.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Skitbit",
      url: "https://changeyourlive180.com",
      sameAs: [  
        "https://www.youtube.com/@changeyourlive180",
        "https://instagram.com/changeyourlive180",
        "https://threads.com/changeyourlive180",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://theskitbit.com/#pricing",
        name: "Pricing Section",
        url: "https://theskitbit.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <HeroSection />
        {/* <TextImageSection
          title="Mi Transformacion en 180 Dias"
          description="En 2025 me rodee de un grupo de personas que me inspiraron a cambiar mi vida. En 180 dias, intento transformar mi salud, mi mentalidad y mis finanzas. Ahora quiero compartir contigo las herramientas y estrategias que me ayudaran y me estan ayudando a conseguirlo."
          ctas={[
            { label: "Tu vida sin cambio", href: "https://vt.tiktok.com/ZSuFc1A42/" },
            { label: "Vida con cambio", href: "https://vt.tiktok.com/ZSuFtwH3m/" },
            { label: "Comienza ahora", href: "https://wa.me/3163746711" },
          ]}
          imageSrc="/images/CYAN180H.png"
          imageAlt="Persona celebrando logro frente a una pantalla"
          imagePosition="right"
        /> */}

        {/* <CircleRows fullWidth={true} sizeClass="min-w-16 min-h-16 sm:min-w-20 sm:min-h-20 md:min-w-24 md:min-h-24" /> */}
        {/* <Features /> */}
        {/* <Pricing /> */}
        {/* <AppverseFooter /> */}
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
