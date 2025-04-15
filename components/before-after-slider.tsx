"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt, className }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const containerWidth = rect.width

      // Calculate position as percentage and clamp between 0 and 100
      const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100))
      setSliderPosition(newPosition)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const containerWidth = rect.width

      // Calculate position as percentage and clamp between 0 and 100
      const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100))
      setSliderPosition(newPosition)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("touchmove", handleTouchMove)

      return () => {
        container.removeEventListener("touchmove", handleTouchMove)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-[400px] overflow-hidden rounded-lg cursor-ew-resize", className)}
      onMouseDown={handleMouseDown}
      onTouchStart={() => {}}
    >
      {/* Before Image (Full width, visible based on slider) */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeAlt} fill className="object-cover" priority />
      </div>

      {/* After Image (Partial width based on slider position) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image src={afterImage || "/placeholder.svg"} alt={afterAlt} fill className="object-cover" priority />
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-800"
          >
            <path d="m9 18 6-6-6-6" />
            <path d="m15 18-6-6 6-6" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
        After
      </div>
    </div>
  )
}
