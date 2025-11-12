"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export function ImprovedHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState("")

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/about", label: "About", id: "about" },
    { href: "/process", label: "Process", id: "process" },
    { href: "/#services", label: "Services", id: "services" },
    { href: "/portfolio", label: "Portfolio", id: "portfolio" },
    { href: "/blog", label: "Blog", id: "blog" },
    { href: "/testimonials", label: "Testimonials", id: "testimonials" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

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
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [navLinks])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled ? "bg-white shadow-sm border-gray-200 py-3" : "bg-white/95 backdrop-blur-sm border-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative flex items-center shrink-0">
            <Image
              src="/images/ps-premier-logo-transparent.svg"
              alt="PS Premier Construction Logo"
              width={180}
              height={50}
              className={`transition-all duration-300 ${scrolled ? "h-10 w-auto" : "h-12 w-auto"}`}
              priority
            />
            <span className="sr-only">PS Premier Construction</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-2 text-[15px] font-medium tracking-tight transition-all duration-200
                ${
                  currentSection === link.id ||
                  (link.href === "/testimonials" && link.id === "testimonials") ||
                  (link.href === "/blog" && link.id === "blog")
                    ? "text-brand-red"
                    : "text-gray-700 hover:text-brand-red"
                }
              `}
                >
                  {link.label}
                  {(currentSection === link.id ||
                    (link.href === "/testimonials" && link.id === "testimonials") ||
                    (link.href === "/blog" && link.id === "blog")) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-red rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              className="ml-6 flex items-center gap-2 px-5 py-2.5 rounded-md text-[15px] font-semibold transition-all duration-200 bg-brand-red hover:bg-brand-red-dark text-white shadow-sm hover:shadow-md"
            >
              <Phone className="size-4" />
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </header>
  )
}
