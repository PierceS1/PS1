"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "/images/project-kitchen-marble.jpg",
    alt: "Luxury kitchen remodel with marble slab backsplash and quartz island",
    caption: "Kitchen Remodel",
    location: "Central Austin",
  },
  {
    src: "/images/project-bathroom-gold.jpg",
    alt: "Master bathroom remodel with walnut vanity and brushed gold fixtures",
    caption: "Master Bath Renovation",
    location: "West Lake Hills",
  },
  {
    src: "/images/project-living-fireplace.jpg",
    alt: "Open living room addition with modern fireplace and white oak floors",
    caption: "Full-Home Renovation",
    location: "Tarrytown",
  },
  {
    src: "/images/project-dining-wine.jpg",
    alt: "Dining room with custom glass wine wall and designer lighting",
    caption: "Custom Wine Wall & Dining",
    location: "Central Austin",
  },
  {
    src: "/images/project-adu-exterior.jpg",
    alt: "Custom ADU backyard studio build with cedar soffit and sliding glass door",
    caption: "Backyard ADU Build",
    location: "South Austin",
  },
  {
    src: "/images/project-bedroom-shelves.jpg",
    alt: "Renovated primary bedroom with floating shelves and tile accent wall",
    caption: "Primary Suite Remodel",
    location: "Rollingwood",
  },
  {
    src: "/images/project-accent-wall.jpg",
    alt: "Modern hallway with oak slat accent wall and designer console",
    caption: "Full-Home Renovation",
    location: "Barton Creek",
  },
]

export function HeroSlideshow({ children }: { children?: React.ReactNode }) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return
      setPrev(current)
      setCurrent(index)
      setTransitioning(true)
      setTimeout(() => {
        setPrev(null)
        setTransitioning(false)
      }, 900)
    },
    [current, transitioning]
  )

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    const id = setInterval(goNext, 5500)
    return () => clearInterval(id)
  }, [paused, goNext])

  return (
    <section
      id="home"
      className="w-full relative text-white overflow-hidden hero-slideshow-section"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide layers */}
      {slides.map((slide, i) => {
        const isActive = i === current
        const isPrev = i === prev
        return (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : isPrev ? 1 : 0,
              transition: isActive || isPrev ? "opacity 0.9s ease-in-out" : "none",
              zIndex: isActive ? 1 : isPrev ? 0 : -1,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              style={{
                transform: isActive ? "scale(1.06)" : "scale(1.0)",
                transition: isActive ? "transform 6s ease-out" : "none",
                transformOrigin: "center center",
              }}
              priority={i === 0}
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.40) 70%, rgba(0,0,0,0.72) 100%)",
              }}
            />
          </div>
        )
      })}

      {/* Content layer */}
      <div className="relative flex flex-col justify-end" style={{ zIndex: 10, minHeight: "100svh" }}>

        {/* Centered hero CTA */}
        {children && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 20 }}>
            <div className="pointer-events-auto w-full">{children}</div>
          </div>
        )}

        {/* Slide caption bottom-left */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-28" style={{ zIndex: 20 }}>
          <div className="max-w-2xl">
            <div
              key={`tag-${current}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 hero-fade-up"
              style={{
                background: "rgba(196,150,50,0.20)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(196,150,50,0.4)",
              }}
            >
              <span className="text-sm font-semibold" style={{ color: "#C49632" }}>
                {slides[current].location}
              </span>
            </div>
            <h2
              key={`cap-${current}`}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-6 hero-fade-up-delay"
            >
              {slides[current].caption}
            </h2>
          </div>
        </div>

        {/* Nav arrows */}
        <button
          onClick={() => { setPaused(true); goPrev() }}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            zIndex: 20,
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => { setPaused(true); goNext() }}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            zIndex: 20,
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2" style={{ zIndex: 20 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPaused(true); goTo(i) }}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "0.5rem",
                background: i === current ? "#C49632" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ zIndex: 20, background: "rgba(255,255,255,0.1)" }}>
          <div
            key={`progress-${current}`}
            className="h-full hero-progress-bar"
            style={{
              background: "#C49632",
              animationPlayState: paused ? "paused" : "running",
            }}
          />
        </div>
      </div>
    </section>
  )
}
