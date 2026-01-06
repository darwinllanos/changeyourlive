"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function IndirectaTestimony() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
  const slider = sliderRef.current
  if (!slider || isDragging) return

  const halfScrollWidth = slider.scrollWidth / 1

  const interval = setInterval(() => {
    if (slider.scrollLeft >= halfScrollWidth) {
      slider.scrollLeft -= halfScrollWidth
    } else {
      slider.scrollLeft += 1
    }
  }, 30)

  return () => clearInterval(interval)
}, [isDragging])


  const handleMouseDown = (e: React.MouseEvent) => {
  if (!sliderRef.current) return
  setIsDragging(true)
  sliderRef.current.style.scrollBehavior = "auto"
  setStartX(e.pageX - sliderRef.current.offsetLeft)
  setScrollLeft(sliderRef.current.scrollLeft)
}

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  
const handleMouseUp = () => {
  setIsDragging(false)
  if (sliderRef.current) {
    sliderRef.current.style.scrollBehavior = "smooth"
  }
}

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

    return (
        <section className="py-20 px-4 from-black via-slate-950 to-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-balance">
            PDTA: ¿Si jovenes de 16 años pueden,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              por qué tú no?
            </span>
          </h2>

          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
            style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
          >
            {/* Duplicamos las imágenes para crear el efecto de loop infinito */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shrink-0 relative">
                  <Image
                    src="images/indirecta/Alejandra_Indirecta.webp"
                    alt="Persona viendo resultados en celular"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>

                <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shrink-0 relative">
                  <Image
                    src="/images/indirecta/Darwin_Indirecta.webp"
                    alt="Joven emprendedor"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>

                <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shrink-0 relative">
                  <Image
                    src="images/indirecta/Alejandro_Indirecta.webp"
                    alt="Persona trabajando con auriculares"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>

                <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shrink-0 relative">
                  <Image
                    src="/images/indirecta/Juan_David_Indirecta.webp"
                    alt="Conferencia de negocios"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>

                <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shrink-0 relative">
                  <Image
                    src="images/indirecta/Vaneza_Garcia_Indirecta.webp"
                    alt="Persona con premio"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>

                <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shrink-0 relative">
                  <Image
                    src="images/indirecta/Luisainy_Indirecta.webp"
                    alt="Notificaciones de ventas"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>

                <div className="w-[300px] h-[400px] rounded-2xl overflow-hidden shrink-0 relative">
                  <Image
                    src="images/indirecta/CamilaRojas_Indirecta.webp"
                    alt="Dashboard de negocios"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-8 italic">Arrastra para explorar más testimonios</p>
        </div>
      </section>
    );
}