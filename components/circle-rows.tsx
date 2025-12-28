"use client"

import Image from "next/image"
import React from "react"

type CircleRowsProps = {
  topImages?: string[]
  bottomImages?: string[]
  text?: string
  size?: number
  sizeClass?: string
  fullWidth?: boolean
}

export default function CircleRows({
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
    "/icons/circlefourteen.jpg"
  ],
  text = "Estas a un CLICK de transformar tu vida, unete a nuestra comunidad!",
  size = 46,
  sizeClass = "",
  fullWidth = true,
}: CircleRowsProps) {
  return (
    <section className="w-full py-8">
      <div className={`${fullWidth ? "w-full px-4" : "container mx-auto max-w-4xl"}`}>
        <div className="flex flex-col items-center gap-6">
          {/* Top Row: 7 circle images */}
          {/* Top Row as grid with 7 columns (responsive) */}
          <div className="w-full">
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 items-center">
              {topImages.slice(0, 7).map((src, i) => (
                <div
                  key={`top-${i}`}
                  className={`aspect-square rounded-full overflow-hidden bg-white/5 p-0.5 transition-all hover:scale-105 hover:shadow-lg min-w-12 min-h-12 sm:min-w-16 sm:min-h-16 md:min-w-20 md:min-h-20 ${sizeClass}`}
                >
                  <div className="relative w-full h-full rounded-full ring-1 ring-transparent hover:ring-lime-300/60">
                    <Image src={src} alt={`partner ${i + 1}`} fill sizes="(max-width: 540px) 1rem, 56px" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center">
            <p className="text-sm md:text-base text-lime-400 font-semibold">
              {text}
            </p>
          </div>

          {/* Bottom Row: 7 circle images */}
          <div className="w-full">
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 items-center">
              {bottomImages.slice(0, 7).map((src, i) => (
                <div
                  key={`bottom-${i}`}
                  className={`aspect-square rounded-full overflow-hidden bg-white/5 p-0.5 transition-all hover:scale-105 hover:shadow-lg min-w-12 min-h-12 sm:min-w-16 sm:min-h-16 md:min-w-20 md:min-h-20 ${sizeClass}`}
                >
                  <div className="relative w-full h-full rounded-full ring-1 ring-transparent hover:ring-lime-300/60">
                    <Image src={src} alt={`partner ${i + 1}`} fill sizes="(max-width: 640px) 3rem, 56px" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
