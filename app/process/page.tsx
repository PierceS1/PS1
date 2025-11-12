"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ImprovedHeader } from "@/components/improved-header"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { AnimatedCTAButton } from "@/components/animated-cta-button"
import { ClipboardCheck, Palette, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ImprovedHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center fade-in-bottom visible">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">How We Work</h1>
              <p className="text-xl text-gray-300">
                From initial consultation to final walkthrough, we guide you through every step with clarity and
                professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="w-full py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-12 fade-in visible">
                <ClipboardCheck className="h-10 w-10 text-brand-amber icon-bounce" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Our 5-Step Process</h2>
              </div>

              <div className="space-y-6">
                <Card className="bg-gray-900 border-gray-800 card-hover-effect slide-in-left visible">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg">
                          1
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Initial Consultation</h3>
                        <p className="text-gray-300 text-lg">
                          We walk the property and outline your goals. This is where we listen, ask questions, and
                          understand your vision.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gray-900 border-gray-800 card-hover-effect slide-in-right visible"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg">
                          2
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Design and Selections</h3>
                        <p className="text-gray-300 text-lg">
                          We align layouts and materials with your standard. You'll see options, pricing, and
                          recommendations before moving forward.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gray-900 border-gray-800 card-hover-effect slide-in-left visible"
                  style={{ transitionDelay: "0.2s" }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg">
                          3
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Proposal</h3>
                        <p className="text-gray-300 text-lg">
                          Clear scope and timeline. You'll know exactly what's included, how long it will take, and what
                          it costs.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gray-900 border-gray-800 card-hover-effect slide-in-right visible"
                  style={{ transitionDelay: "0.3s" }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg">
                          4
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Build</h3>
                        <p className="text-gray-300 text-lg">
                          Managed start to finish with daily oversight. We coordinate all trades, handle scheduling, and
                          keep you updated every step of the way.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gray-900 border-gray-800 card-hover-effect slide-in-left visible"
                  style={{ transitionDelay: "0.4s" }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold text-lg">
                          5
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Closeout</h3>
                        <p className="text-gray-300 text-lg">
                          Walk-through and correction list completed on-site. We don't leave until you're completely
                          satisfied.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 text-center float-animation">
                <AnimatedCTAButton href="/#contact">Start Your Project Today</AnimatedCTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Materials and Standards Section */}
        <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8 fade-in visible">
                <Palette className="h-10 w-10 text-brand-amber icon-bounce" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Materials and Standards</h2>
              </div>
              <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg slide-up visible">
                We only use premium materials from trusted suppliers. Your investment deserves quality that lasts.
              </p>

              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 scale-in visible shimmer-card">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">We source:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Custom Cabinets</h4>
                      <p className="text-gray-300 text-sm">
                        Premium semi-custom lines tailored to your space and style
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Natural Stone & Quartz</h4>
                      <p className="text-gray-300 text-sm">
                        Durable, beautiful countertops that stand the test of time
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">High-End Tile</h4>
                      <p className="text-gray-300 text-sm">
                        Local suppliers with extensive selections for every design aesthetic
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">LED Lighting Packages</h4>
                      <p className="text-gray-300 text-sm">
                        Energy-efficient, modern lighting solutions for every room
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">High-Efficiency Plumbing</h4>
                      <p className="text-gray-300 text-sm">
                        Quality fixtures that save water without sacrificing performance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Premium Paint Systems</h4>
                      <p className="text-gray-300 text-sm">Sherwin Williams and Benjamin Moore for lasting beauty</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-900 border border-gray-700 rounded-lg">
                  <p className="text-gray-300 text-center">
                    <span className="font-semibold text-white">Quality Guarantee:</span> Every material we install meets
                    or exceeds manufacturer specifications and industry standards. We stand behind our work.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center float-animation">
                <AnimatedCTAButton href="/#contact">Discuss Your Material Options</AnimatedCTAButton>
              </div>
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
