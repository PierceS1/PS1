"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export function ImprovedHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState("")

  // Update the navLinks array
  const navLinks = [
    { href: "#", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "/testimonials", label: "Testimonials", id: "testimonials" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = navLinks.filter((link) => link.href.startsWith("#")).map((link) => link.id)

      for (const section of sections) {
        if (section === "home" && window.scrollY < 100) {
          setCurrentSection("home")
          break
        }

        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [navLinks])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 py-2 shadow-md"
          : "bg-gradient-to-b from-black to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <div className={`logo-blend transition-all duration-300 ${scrolled ? "opacity-95" : "opacity-100"}`}>
              <Image
                src="/images/ps-premier-logo-wide.png"
                alt="PS Premier Construction Logo"
                width={220}
                height={50}
                className={`transition-all duration-300 ${scrolled ? "h-10 w-auto" : "h-12 w-auto"}`}
                priority
              />
            </div>
            <span className="sr-only">PS Premier Construction</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200
                  ${
                    currentSection === link.id || (link.href === "/testimonials" && link.id === "testimonials")
                      ? "text-amber-500"
                      : "text-gray-300 hover:text-amber-400"
                  }
                  ${scrolled ? "hover:bg-gray-800/50" : "hover:bg-black/30"}
                `}
                >
                  {link.label}
                  {(currentSection === link.id || (link.href === "/testimonials" && link.id === "testimonials")) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <Link
              href="#contact"
              className={`ml-4 flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${scrolled ? "bg-red-700 hover:bg-red-800 text-white" : "bg-red-700/90 hover:bg-red-700 text-white"}
            `}
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </header>
  )
}
