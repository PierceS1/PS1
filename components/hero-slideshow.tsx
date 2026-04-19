"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "/images/project-kitchen-marble.jpg",
    alt: "Luxury kitchen remodel with marble slab backsplash",
    label: "Kitchen Remodel · Central Austin",
  },
  {
    src: "/images/project-bathroom-gold.jpg",
    alt: "Master bathroom with walnut vanity and gold fixtures",
    label: "Master Bath · West Lake Hills",
  },
  {
    src: "/images/project-living-fireplace.jpg",
    alt: "Living room addition with modern fireplace",
    label: "Full-Home Renovation · Tarrytown",
  },
  {
    src: "/images/project-dining-wine.jpg",
    alt: "Dining room with custom glass wine wall",
    label: "Custom Wine Wall · Central Austin",
  },
  {
    src: "/images/project-adu-exterior.jpg",
    alt: "Custom ADU backyard studio build",
    label: "Backyard ADU · South Austin",
  },
  {
    src: "/images/project-bedroom-shelves.jpg",
    alt: "Primary bedroom with floating shelves",
    label: "Primary Suite · Rollingwood",
  },
  {
    src: "/images/project-accent-wall.jpg",
    alt: "Modern hallway with oak slat accent wall",
    label: "Full-Home Renovation · Barton Creek",
  },
]

const INTERVAL = 5500

export function HeroSlideshow({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((n: number) => {
    setIndex((n + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(index + 1), [index, goTo])
  const prev = useCallback(() => goTo(index - 1), [index, goTo])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, INTERVAL)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [index, paused, next])

  return (
    <section
      id="home"
      className="w-full relative text-white overflow-hidden"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            style={{
              transform: i === index ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease-out",
            }}
            priority={i === 0}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.7) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative flex flex-col" style={{ zIndex: 10, minHeight: "100svh" }}>

        {/* Hero CTA — vertically centered */}
        <div className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32 px-4">
          {children}
        </div>

        {/* Caption bottom-left */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div
            key={index}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(196,150,50,0.2)",
              border: "1px solid rgba(196,150,50,0.4)",
              color: "#C49632",
              backdropFilter: "blur(6px)",
              animation: "psHeroFade 0.6s ease both",
            }}
          >
            {slides[index].label}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => { setPaused(true); prev() }}
          aria-label="Previous"
          className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          style={{
            zIndex: 20,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => { setPaused(true); next() }}
          aria-label="Next"
          className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          style={{
            zIndex: 20,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 20 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPaused(true); goTo(i) }}
              aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                height: "6px",
                width: i === index ? "28px" : "6px",
                background: i === index ? "#C49632" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ zIndex: 20, height: "3px", background: "rgba(255,255,255,0.1)" }}
        >
          <div
            key={`bar-${index}-${paused}`}
            style={{
              height: "100%",
              background: "#C49632",
              animation: paused ? "none" : `psHeroProgress ${INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
