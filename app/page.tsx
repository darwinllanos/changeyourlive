import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TextImageSection } from "@/components/text-image"
import { Features } from "@/components/features"
import CircleRows from "@/components/circle-rows"
// import { LogoMarquee } from "@/components/logo-marquee"
// import { Pricing } from "@/components/pricing"
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
    description: "Cambia tu vida en 180 dias con nuestros productos digitales",
    url: "https://theskitbit.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "3D Animation Services",
      description: "Professional 3D animation services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Up to 15s 3D Animation with 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description: "Up to 25s 3D Animation with 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description: "40-60s 3D Animation with unlimited revisions",
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

        <TextImageSection
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
        />

        <CircleRows fullWidth={true} sizeClass="min-w-16 min-h-16 sm:min-w-20 sm:min-h-20 md:min-w-24 md:min-h-24" />
        {/* <Features /> */}
        <AppverseFooter />
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
