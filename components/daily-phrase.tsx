"use client"

import { useEffect, useState, useMemo } from "react"
import { getDailyPhrase } from "@/lib/phrases"
import { Quote } from "lucide-react"

export function DailyPhrase() {
  const phrase = useMemo(() => getDailyPhrase(), [])
  const [isVisible, setIsVisible] = useState(false)
  const [wordsRevealed, setWordsRevealed] = useState(0)
  const [authorVisible, setAuthorVisible] = useState(false)
  const [quoteVisible, setQuoteVisible] = useState(false)
  const [lineVisible, setLineVisible] = useState(false)

  const words = phrase.text.split(" ")

  useEffect(() => {
    // Fade in container
    const showTimer = setTimeout(() => setIsVisible(true), 200)

    // Show quote icon
    const quoteTimer = setTimeout(() => setQuoteVisible(true), 500)

    // Reveal words one by one
    const wordTimers = words.map((_, i) =>
      setTimeout(() => setWordsRevealed(i + 1), 800 + i * 120)
    )

    // Show decorative line
    const lineTimer = setTimeout(
      () => setLineVisible(true),
      800 + words.length * 120 + 200
    )

    // Show author after all words
    const authorTimer = setTimeout(
      () => setAuthorVisible(true),
      800 + words.length * 120 + 500
    )

    return () => {
      clearTimeout(showTimer)
      clearTimeout(quoteTimer)
      clearTimeout(lineTimer)
      clearTimeout(authorTimer)
      wordTimers.forEach(clearTimeout)
    }
  }, [words.length])

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-72px)] px-6 md:px-16 lg:px-24 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Quote icon */}
      <div
        className={`mb-8 md:mb-12 transition-all duration-700 ${
          quoteVisible
            ? "opacity-30 translate-y-0"
            : "opacity-0 -translate-y-4"
        }`}
      >
        <Quote className="h-10 w-10 md:h-14 md:w-14 text-accent" />
      </div>

      {/* Phrase - word by word reveal */}
      <p className="text-center max-w-4xl leading-relaxed">
        {words.map((word, i) => (
          <span
            key={i}
            className={`inline-block text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white transition-all duration-500 mr-[0.3em] ${
              i < wordsRevealed
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-6 blur-sm"
            }`}
            style={{
              transitionDelay: `${i * 30}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </p>

      {/* Decorative line */}
      <div
        className={`mt-8 md:mt-12 h-px bg-accent/40 transition-all duration-1000 ease-out ${
          lineVisible ? "w-24 md:w-32 opacity-100" : "w-0 opacity-0"
        }`}
      />

      {/* Author */}
      <span
        className={`mt-6 md:mt-8 text-sm md:text-base font-mono tracking-widest uppercase text-muted-foreground transition-all duration-700 ${
          authorVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        {"-- "}
        {phrase.author}
      </span>
    </div>
  )
}
