"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export function StickyContactButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Store current scroll position
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 md:hidden transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
    >
      <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 text-white rounded-full shadow-lg">
        <Link href="#contact" aria-label="Contact Us">
          <Phone className="h-5 w-5 mr-2" />
          <span>Contact Us</span>
        </Link>
      </Button>
    </div>
  )
}
