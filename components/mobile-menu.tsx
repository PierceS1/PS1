"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  links: {
    href: string
    label: string
    isActive?: boolean
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavigation = (href: string) => {
    setIsOpen(false)

    // If it's a hash link to the homepage
    if (href.startsWith("/#")) {
      router.push("/")

      // Wait for navigation to complete then scroll to the element
      setTimeout(() => {
        const id = href.substring(2)
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      router.push(href)
    }
  }

  return (
    <div className="md:hidden">
      <Button
        variant="default"
        size="icon"
        className="bg-red-700 hover:bg-red-800 text-white border-none"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="absolute top-16 right-0 z-50 w-64 bg-gray-900 border border-gray-800 rounded-bl-lg shadow-lg">
          <nav className="py-4">
            <ul className="flex flex-col space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className={`block w-full text-left px-6 py-3 text-base font-medium ${
                      link.isActive ? "text-amber-500" : "text-gray-300"
                    } transition-colors hover:bg-gray-800 hover:text-amber-400`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
