"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const neighborhoods = [
  {
    name: "West Lake Hills",
    description: "Luxury remodeling in Austin's most prestigious community",
    image: "/luxury-home-west-lake-hills-austin.jpg",
    href: "/locations/west-lake-hills",
  },
  {
    name: "Tarrytown",
    description: "Historic renovations preserving neighborhood character",
    image: "/historic-home-tarrytown-austin.jpg",
    href: "/locations/tarrytown",
  },
  {
    name: "Barton Creek",
    description: "Estate-level construction for luxury properties",
    image: "/estate-home-barton-creek-austin.jpg",
    href: "/locations/barton-creek",
  },
  {
    name: "Davenport Ranch",
    description: "Custom builds in premier northwest Austin",
    image: "/custom-home-davenport-ranch-austin.jpg",
    href: "/locations/davenport-ranch",
  },
  {
    name: "Rollingwood",
    description: "High-end renovations in exclusive lakeside community",
    image: "/luxury-home-rollingwood-austin.jpg",
    href: "/locations/rollingwood",
  },
  {
    name: "Cedar Park",
    description: "Family home additions and comprehensive remodels",
    image: "/family-home-cedar-park-austin.jpg",
    href: "/locations/cedar-park",
  },
]

export function NeighborhoodsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % neighborhoods.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + neighborhoods.length) % neighborhoods.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % neighborhoods.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const current = neighborhoods[currentIndex]

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-opacity duration-700">
        <Image
          src={current.image || "/placeholder.svg"}
          alt={`${current.name} neighborhood project preview`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-brand-amber/20 backdrop-blur-sm rounded-full">
            <span className="text-brand-amber font-semibold text-sm">
              {currentIndex + 1} / {neighborhoods.length}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">{current.name}</h2>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md max-w-xl">{current.description}</p>
          <Link
            href={current.href}
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-base font-medium transition-all duration-200 bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
        aria-label="Previous neighborhood"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center"
        aria-label="Next neighborhood"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {neighborhoods.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-brand-amber w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
