import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CtaItem {
  label: string
  href: string
}

interface TextImageSectionProps {
  title?: string
  description?: string
  ctas?: CtaItem[]
  imageSrc: string
  imageAlt?: string
  imagePosition?: "right" | "left"
}

function ProfileCard() {
  return (
    <div className="absolute right-6 bottom-6 flex items-center gap-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-amber-600 text-white grid place-items-center font-semibold">
        MC
      </div>
      <div className="text-sm">
        <div className="font-semibold text-gray-900">Jhon Darwin Llanos Narvaez</div>
        <div className="text-xs text-gray-600">Trader | Desarrollo mental y financiero | Embajador INNOVA</div>
      </div>
    </div>
  )
}

export function TextImageSection({
  title = "Transforma tu vida y alcanza la libertad que mereces",
  description =
    "Descubre cómo miles de personas han cambiado su destino financiero construyendo un negocio desde casa con un sistema probado y el acompañamiento de un equipo ganador.",
  ctas,
  imageSrc,
  imageAlt = "Persona de negocios",
  imagePosition = "right",
}: TextImageSectionProps) {
  const isImageRight = imagePosition === "right"

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-12`}>
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-3 py-1 text-xs font-medium">
                ● Oportunidad de negocio disponible
              </span>

              <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight">
                {title.split(" ").map((word, i) => {
                  // highlight first occurrence of 'alcanz' or 'libertad' to mimic screenshot
                  if (/(alcanz|libertad)/i.test(word)) {
                    return (
                      <span key={i} className="text-amber-600">{` ${word}`}</span>
                    )
                  }
                  return <span key={i}>{` ${word}`}</span>
                })}
              </h2>

              <p className="mt-6 text-lg text-gray-700">{description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full bg-amber-600 px-6 py-3 text-white shadow-md">
                  <a href="#">Quiero saber más</a>
                </Button>

                <Button asChild className="rounded-full border border-gray-200 px-5 py-3 bg-white text-gray-800">
                  <a href="#">Ver mi historia</a>
                </Button>
              </div>

              <div className="mt-12 flex gap-12">
                <div>
                  <div className="text-3xl font-extrabold">5,000+</div>
                  <div className="text-sm text-gray-500">Vidas transformadas en INNOVA</div>
                </div>

                <div>
                  <div className="text-3xl font-extrabold">1 año</div>
                  <div className="text-sm text-gray-500">De experiencia</div>
                </div>

                <div>
                  <div className="text-3xl font-extrabold">Embajador</div>
                  <div className="text-sm text-gray-500">De la compañía INNOVA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute left-6 top-6 rounded-md bg-white/80 px-3 py-1 text-sm text-gray-800"> </div>
              <div className="relative h-[520px] w-full lg:h-[640px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 90vw"
                />
              </div>

              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
