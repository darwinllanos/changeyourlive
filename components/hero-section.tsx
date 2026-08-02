"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/50 text-lime-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Oportunidad única para transformar tu vida
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              <span className="text-white">Transforma tu vida y</span> {" "}
              <span className="text-lime-300">alcanza la libertad</span> <span className="text-white">que mereces</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-white">
              En 2025 ingrese a una comunidad de empresarios y emprendedores exitosos, 
              decidi replicar sus estrategias y conocimientos, y hoy quiero compartir 
              contigo mi experiencia y desbloquear tu maximo potencial para que logres tus objetivos y sueños.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                <Link href="/faq">
                  Quiero saber más
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full bg-transparent"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver mi historia
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground text-lime-300">100+</p>
                <p className="text-sm text-muted-foreground">Vidas transformadas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground text-white">3 años</p>
                <p className="text-sm text-muted-foreground text-lime-300">De experiencia</p>
              </div>
              <div className="text-3xl font-bold text-foreground text-center text-white">
                <p>Top 1%</p>
                <p className="text-sm text-muted-foreground font-normal">mindset</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-secondary relative">
                <img
                  src="/images/jhonllanos.png"
                  alt="Emprendedor exitoso"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/80 p-5 shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                      <img
                        src="/images/jhonllanos.png"
                        alt="Jhon Llanos"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Jhon Llanos</p>
                      <p className="text-sm text-white/70">Trader | Bussines and Mindset Coach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="bg-card rounded-2xl p-2 max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-secondary rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/w0_dV8Y_Kr8?rel=0"
                title="Mi historia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowVideo(false)}
                className="text-sm text-muted-foreground px-3 py-2 rounded-md hover:bg-accent"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
