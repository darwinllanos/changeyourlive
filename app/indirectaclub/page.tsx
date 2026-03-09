"use client";

import { useState } from "react"
import { VideoGate } from "@/components/video-gate"

export default function IndirectaPage() {
  const [videoWatched, setVideoWatched] = useState(false);
  return (
    <main className="min-h-[100dvh] text-white">
       {!videoWatched ? (
        // ── FASE 1: Solo el video ──────────────────────────────────────────
        <VideoGate
          videoSrc="video/camiloDirecta.MP4"// ← tu video
          unlockAt={300}                     // ← segundos hasta habilitar CTA (300 = 5 min)
          onUnlock={() => setVideoWatched(true)}
        >
          {/* Este children se renderiza DESPUÉS del CTA — puedes dejarlo vacío
              si prefieres manejar el estado con onUnlock */}
        </VideoGate>
      ) : (
        // ── FASE 2: El resto de la página ─────────────────────────────────
        <>
        </>
      )}
    </main>
  )
}
