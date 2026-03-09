"use client"

import Image from "next/image"
import React from "react"

type CircleRowsProps = {
  title?: string
  topImages?: string[]
  bottomImages?: string[]
  topCaptions?: string[]
  bottomCaptions?: string[]
  text?: string
  sizeClass?: string
  fullWidth?: boolean
  shape?: "circle" | "rounded" | "square"
}

export default function CircleRows({
  title = "Mi equipo de trabajo",
  topImages = [
    "/icons/circleone.jpg",
    "/icons/circletwo.jpg",
    "/icons/circlethree.jpg",
    "/icons/circlefour.jpg",
    "/icons/circlefive.jpg",
    "/icons/circlesix.jpg",
    "/icons/circleseven.jpg",
  ],
  bottomImages = [
    "/icons/circleeight.jpg",
    "/icons/circlenine.jpg",
    "/icons/circleten.jpg",
    "/icons/circleeleven.jpg",
    "/icons/circletwelve.jpg",
    "/icons/circlethirteen.jpg",
    "/icons/circlefourteen.jpg",
  ],
  topCaptions = [
  "Mentalidad: Líder de charlas motivacionales",
  "Marca personal: De trabajar en McDonald's a convertirse en referente del mundo digital",
  "Networker: De tatuador a uno de los jóvenes mejor pagados en la industria del network marketing",
  "Coach de vida: De trabajar en sistemas a ayudar a las personas a transformar su vida",
  "Trader: De no saber nada de finanzas a convertirse en un trader rentable",
  "Empresario: De empresario tradicional a empresario digital",
  "Networker: Impactando de manera positiva la vida de miles de personas",
],

bottomCaptions = [
  "Networker: De vender dulces en TransMilenio a facturar miles de dólares",
  "Dropshipper: Emprendedor digital con ventas de productos a través de su tienda online",
  "Embajadora de marca: De comisionar una pequeña parte en el sector automovilístico a generar miles de dólares en lo digital",
  "¿Qué habilidad quieres desarrollar? Nosotros te ayudamos a lograrlo",
  "Networker: De comunicadora a empresaria digital",
  "Networker: Junto a su hermana mayor, impactando millones de vidas",
  "Networker: De no tener nada a convertirse en un networker exitoso",
],
  text = "Estas a un CLICK de transformar tu vida, unete a nuestra comunidad!",
  sizeClass = "",
  fullWidth = true,
  shape = "circle",
}: CircleRowsProps) {
  const shapeClass =
    shape === "rounded" ? "rounded-2xl" : shape === "square" ? "rounded-none" : "rounded-full"

  const renderRow = (images: string[], captions: string[], rowKey: string) => (
    <div className="w-full">
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 items-center">
        {images.slice(0, 7).map((src, i) => (
          <div
            key={`${rowKey}-${i}`}
            className={`group aspect-square overflow-hidden bg-white/5 p-0.5 transition-all hover:scale-105 hover:shadow-lg min-w-12 min-h-12 sm:min-w-16 sm:min-h-16 md:min-w-20 md:min-h-20 ${sizeClass}`}
          >
            <div className={`relative w-full h-full ${shapeClass} ring-1 ring-transparent hover:ring-lime-300/60 transition-all duration-300`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src={src}
                alt={captions[i] ?? `partner ${i + 1}`}
                fill
                sizes="(max-width: 640px) 3rem, 56px"
                className="object-cover transition-transform duration-300 group-hover:rotate-6"
              />

              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/0 text-center text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                <span className="px-2">{captions[i] ?? "Ver más"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="w-full py-8">
      <div className={`${fullWidth ? "w-full px-4" : "container mx-auto max-w-4xl"}`}>
        <div className="flex flex-col items-center gap-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
          </div>

          {/* Top Row */}
          {renderRow(topImages, topCaptions, "top")}

          {/* Center Text */}
          <div className="text-center">
            <p className="text-sm md:text-base text-lime-400 font-semibold">
              {text}
            </p>
          </div>

          {/* Bottom Row */}
          {renderRow(bottomImages, bottomCaptions, "bottom")}
        </div>
      </div>
    </section>
  )
}
