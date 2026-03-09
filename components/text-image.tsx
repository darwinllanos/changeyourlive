import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CtaItem {
  label: string
  href: string
}

interface TextImageSectionProps {
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  ctas?: CtaItem[]
  imageSrc: string
  imageAlt: string
  imagePosition?: "right" | "left"
}

export function TextImageSection({
  title,
  description,
  ctaLabel,
  ctaHref,
  ctas,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: TextImageSectionProps) {
  const isImageRight = imagePosition === "right"
  const containerClasses = isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"

  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex flex-col items-center justify-center gap-14 lg:items-center lg:justify-between ${containerClasses}`}
        >
          <div className="w-full lg:w-1/2">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                {description}
              </p>
              {(ctas?.length ?? 0) > 0 ? (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {ctas.map((cta) => (
                    <Button
                      key={cta.href + cta.label}
                      asChild
                      className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300"
                    >
                      <a href={cta.href}>{cta.label}</a>
                    </Button>
                  ))}
                </div>
              ) : ctaLabel && ctaHref ? (
                <div className="mt-8">
                  <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
                    <a href={ctaHref}>{ctaLabel}</a>
                  </Button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 90vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
