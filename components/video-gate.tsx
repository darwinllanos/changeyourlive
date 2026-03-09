"use client";

import { useRef, useState, useEffect, useCallback } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface VideoGateProps {
  /** URL of the video to play */
  videoSrc: string;
  /** Seconds at which the CTA button appears (default: 300 = 5 min) */
  unlockAt?: number;
  /** Poster image shown before video plays */
  poster?: string;
  /** Callback fired when the user clicks "Discover more" */
  onUnlock?: () => void;
  children?: React.ReactNode;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

// ─── Component ───────────────────────────────────────────────────────────────
export function VideoGate({
  videoSrc,
  unlockAt = 300,
  poster,
  onUnlock,
  children,
}: VideoGateProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [ctaVisible, setCtaVisible] = useState(false);
  const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const progress = duration ? (currentTime / duration) * 100 : 0;
  const unlockProgress = Math.min((currentTime / unlockAt) * 100, 100);

  // Show/hide native controls on inactivity
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    hideControlsTimer.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  }, [isPlaying]);

  useEffect(() => {
    resetHideTimer();
    return () => {
      if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    };
  }, [isPlaying, resetHideTimer]);

  // Unlock CTA when threshold reached
  useEffect(() => {
    if (currentTime >= unlockAt && !unlocked) {
      setUnlocked(true);
      setCtaVisible(true);
    }
  }, [currentTime, unlockAt, unlocked]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * duration;
  };

  const handleReveal = () => {
    setCtaVisible(false);
    setTimeout(() => {
      setRevealed(true);
      onUnlock?.();
    }, 600);
  };

  if (revealed) {
    return (
      <div
        className="animate-reveal"
        style={{
          animation: "revealContent 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes revealContent {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctaIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes progressGlow {
          0%,100% { box-shadow: 0 0 6px 1px rgba(250,204,21,0.4); }
          50%      { box-shadow: 0 0 12px 3px rgba(250,204,21,0.8); }
        }
        .cta-btn {
          background: linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn:hover {
          transform: scale(1.04);
          box-shadow: 0 0 28px 6px rgba(251,191,36,0.45);
        }
        .cta-btn:active { transform: scale(0.97); }
        .unlock-bar-fill {
          animation: progressGlow 2s ease-in-out infinite;
        }
      `}</style>

      <div
        className="relative w-full overflow-hidden bg-black"
        onMouseMove={resetHideTimer}
        onTouchStart={resetHideTimer}
        style={{ aspectRatio: "16/9", maxHeight: "100dvh" }}
      >
        {/* ── Video ── */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          className="w-full h-full object-cover"
          playsInline
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlay}
        />

        {/* ── Gradient overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)",
          }}
        />

        {/* ── Controls ── */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12 flex flex-col gap-3"
          style={{
            opacity: showControls ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: showControls ? "auto" : "none",
          }}
        >
          {/* Unlock progress bar */}
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-mono tracking-widest"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              DESBLOQUEANDO
            </span>
            <div
              className="flex-1 h-1 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <div
                className="h-full rounded-full unlock-bar-fill"
                style={{
                  width: `${unlockProgress}%`,
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  transition: "width 0.5s linear",
                }}
              />
            </div>
            <span
              className="text-xs font-mono"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {unlocked ? "✓" : formatTime(Math.max(unlockAt - currentTime, 0))}
            </span>
          </div>

          {/* Seek bar */}
          <div
            className="w-full h-1 rounded-full cursor-pointer group relative"
            style={{ background: "rgba(255,255,255,0.2)" }}
            onClick={seek}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "rgba(255,255,255,0.8)",
                transition: "width 0.25s linear",
              }}
            />
            {/* thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>

          {/* Buttons row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20 active:scale-90"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M6 4l14 8-14 8V4z" />
                  </svg>
                )}
              </button>

              {/* Mute */}
              <button
                onClick={toggleMute}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/20 active:scale-90"
                aria-label={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M15.54 8.46a5 5 0 010 7.07" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M19.07 4.93a10 10 0 010 14.14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                )}
              </button>

              {/* Time */}
              <span className="text-xs font-mono text-white/60 tabular-nums">
                {formatTime(currentTime)}{" "}
                <span className="text-white/30">/</span>{" "}
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* ── Big play button (center, when paused) ── */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Reproducir"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full bg-white/20"
                style={{ animation: "pulseRing 1.8s ease-out infinite" }}
              />
              <div className="relative w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M6 4l14 8-14 8V4z" />
                </svg>
              </div>
            </div>
          </button>
        )}

        {/* ── CTA Overlay ── */}
        {ctaVisible && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            style={{
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(4px)",
              animation: "ctaIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {/* Icon */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "rgba(251,191,36,0.25)",
                  animation: "pulseRing 2s ease-out infinite",
                }}
              />
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center border-2"
                style={{
                  background: "rgba(251,191,36,0.15)",
                  borderColor: "rgba(251,191,36,0.5)",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
            </div>

            <div className="text-center px-4">
              <h2
                className="text-3xl font-bold tracking-tight mb-2"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
              >
                ¡Ya puedes continuar!
              </h2>
              <p className="text-white/60 text-sm max-w-xs">
                Has visto el video introductorio. Ahora descubre todo lo que tenemos para ti.
              </p>
            </div>

            <button
              className="cta-btn relative px-8 py-3.5 rounded-full text-black font-bold tracking-wide text-sm uppercase"
              onClick={handleReveal}
            >
              Descubrir más
              <svg
                className="inline-block ml-2 -mr-1"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            {/* Skip option (subtle) */}
            <button
              className="text-xs text-white/30 hover:text-white/60 transition-colors underline underline-offset-2"
              onClick={handleReveal}
            >
              Omitir por ahora
            </button>
          </div>
        )}
      </div>
    </>
  );
}