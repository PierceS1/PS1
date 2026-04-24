"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export function ImprovedHeader() {
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/#services", label: "Services", id: "services" },
    { href: "/#process", label: "Process", id: "process" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur shadow-lg py-3" : "bg-black/80 backdrop-blur py-4"
      } border-b border-gray-800`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="relative flex items-center shrink-0">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">REMOTE DIESEL</span>
              <span className="text-xs font-medium text-brand-red tracking-widest">TUNING</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="relative px-4 py-2 text-[15px] font-medium tracking-tight transition-all duration-200 text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              className="ml-6 flex items-center gap-2 px-5 py-2.5 rounded-md text-[15px] font-semibold transition-all duration-200 bg-brand-red hover:bg-brand-red-dark text-white shadow-sm hover:shadow-md"
            >
              <Mail className="size-4" />
              <span>Request a Tune</span>
            </Link>
          </div>

          <div className="lg:hidden">
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </div>
    </header>
  )
}
