"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ImprovedHeader } from "@/components/improved-header"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { OptimizedImage } from "@/components/optimized-image"
import { AnimatedCTAButton } from "@/components/animated-cta-button"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ImprovedHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center fade-in-bottom visible">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Our Recent Work</h1>
              <p className="text-xl text-gray-300">
                Every project tells a story. Here are some of our favorites from around Austin that showcase what we can
                create together.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="w-full py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden bg-gray-900 border border-gray-800 card-hover-effect stagger-item visible">
                <div className="relative aspect-video">
                  <OptimizedImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1491.png-sdKtvyMfFEFS9t0ThPI42kSxRGi52H.jpeg"
                    alt="Commercial flat roof replacement and waterproofing project in Austin by PS Premier Construction"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Commercial Roofing Project</h3>
                  <p className="text-gray-300">
                    Professional commercial flat roof replacement featuring advanced waterproofing membrane systems.
                    This comprehensive roofing project included complete tear-off, new underlayment installation, and
                    high-performance flat roofing materials designed for Austin's climate. Our experienced crew
                    completed this commercial roof on schedule while ensuring zero business disruption for the property
                    owner.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="overflow-hidden bg-gray-900 border border-gray-800 card-hover-effect stagger-item visible"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="relative aspect-video">
                  <OptimizedImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-12-NFZkcor9738CQI559lujpl7N5izS6K.jpeg"
                    alt="Modern Austin living room renovation featuring contemporary design by PS Premier Construction"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Modern Austin Living Room Remodel</h3>
                  <p className="text-gray-300">
                    Contemporary living space transformation featuring floor-to-ceiling windows, light wood flooring,
                    and modern fixtures. This stylish renovation includes custom lighting design with statement pendant
                    and floor lamps, creating an open and airy atmosphere perfect for modern Austin living.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="overflow-hidden bg-gray-900 border border-gray-800 card-hover-effect stagger-item visible"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="relative aspect-video">
                  <OptimizedImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0115.png-woinRbMi603fIfnimeOd53x8hbEyTg.jpeg"
                    alt="Professional tile installation in Steiner Ranch by PS Premier Construction"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Steiner Ranch Tile Installation</h3>
                  <p className="text-gray-300">
                    Complete tile renovation in Steiner Ranch featuring premium large-format porcelain tile installation
                    throughout bathroom and hallway spaces. This precision tile work included custom layout planning,
                    professional surface preparation, and expert installation with clean grout lines and perfect
                    alignment.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="overflow-hidden bg-gray-900 border border-gray-800 card-hover-effect stagger-item visible"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="relative aspect-video">
                  <OptimizedImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1489-uixeXZfwohHwb2G06PKzzC58L6tyw9.png"
                    alt="Professional exterior home renovation in Austin by PS Premier Construction"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Austin Home Exterior Renovation</h3>
                  <p className="text-gray-300">
                    Complete exterior renovation featuring professional gutter installation, fresh paint, and updated
                    trim work. This comprehensive exterior upgrade enhanced both curb appeal and weather protection for
                    this Austin home.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center float-animation">
              <AnimatedCTAButton href="/#contact">Start Your Project</AnimatedCTAButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-800 bg-black py-6 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex items-center">
            <Image
              src="/images/ps-premier-logo-wide.png"
              alt="PS Premier Construction Logo"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} PS Premier Construction. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Proudly serving Austin and Central Texas with heart and craftsmanship.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61574805621220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-amber transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pierce-speyrer-b60115195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-amber transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/pspremierconstruction/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-amber transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2} />
                <path strokeWidth={2} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth={2} />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>

      <StickyContactButton />
    </div>
  )
}
