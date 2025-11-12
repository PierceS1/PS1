"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileMenuProps {
  links: {
    href: string
    label: string
    id: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="lg:hidden">
      <Button
        variant="default"
        size="icon"
        className="bg-brand-red hover:bg-brand-red-dark text-white border-none shadow-sm"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-[73px] left-0 right-0 bottom-0 z-50 bg-white transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="container mx-auto px-4 py-8">
          <ul className="flex flex-col space-y-2">
            {links.map((link, index) => (
              <li
                key={link.id}
                className={`transform transition-all duration-300 ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  className="block w-full text-left px-5 py-4 text-lg font-medium rounded-lg transition-all duration-200 text-gray-700 hover:text-brand-red hover:bg-red-50 active:scale-[0.98]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-8 transform transition-all duration-300 ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? `${links.length * 50}ms` : "0ms",
            }}
          >
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg text-base font-semibold transition-all duration-200 bg-brand-red hover:bg-brand-red-dark text-white shadow-md hover:shadow-lg active:scale-[0.98]"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="size-5" />
              <span>Get a Free Quote</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
