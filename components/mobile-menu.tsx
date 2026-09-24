"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Menu, X, Mail } from 'lucide-react'
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
  const [mounted, setMounted] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const overlay = (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-0 z-[70] bg-black transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tight">REMOTE DIESEL</span>
            <span className="text-xs font-medium text-brand-red tracking-widest">TUNING</span>
          </div>
          <Button
            variant="default"
            size="icon"
            className="bg-brand-red hover:bg-brand-red-dark text-white border-none shadow-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="size-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>

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
                  className="block w-full text-left px-5 py-4 text-lg font-medium rounded-lg transition-all duration-200 text-white/90 hover:text-brand-red hover:bg-white/5 active:scale-[0.98]"
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
              href="/#contact"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg text-base font-semibold transition-all duration-200 bg-brand-red hover:bg-brand-red-dark text-white shadow-md hover:shadow-lg active:scale-[0.98]"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="size-5" />
              <span>Request a Tune</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )

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

      {mounted && createPortal(overlay, document.body)}
    </div>
  )
}
