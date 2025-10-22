"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import type { ReactNode } from "react"

interface AnimatedCTAButtonProps {
  href: string
  children: ReactNode
  className?: string
}

export function AnimatedCTAButton({ href, children, className = "" }: AnimatedCTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      asChild
      size="lg"
      className={`bg-brand-red hover:bg-brand-red-dark text-white relative overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>
        <span className="relative z-10 flex items-center">
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`ml-2 size-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
        <span className="absolute inset-0 bg-brand-red-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
      </Link>
    </Button>
  )
}
