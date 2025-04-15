"use client"

import { useState, useEffect, useRef } from "react"

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isVisible }
}
