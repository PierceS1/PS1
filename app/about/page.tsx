"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ImprovedHeader } from "@/components/improved-header"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { AnimatedCTAButton } from "@/components/animated-cta-button"
import { CheckCircle, Star, Calendar, DollarSign } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ImprovedHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center fade-in-bottom visible">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Your Vision, Our Expertise
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We lead your project from first walk-through to final punch list with transparency, quality, and care.
              </p>
            </div>
          </div>
        </section>

        {/* Positioning Section */}
        <section className="w-full py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto slide-up visible">
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  You want a remodel that increases value and improves how you live. You need a builder who listens,
                  plans, and delivers without delays and excuses.
                </p>
                <p className="font-semibold text-white text-xl">
                  PS Premier Construction leads your project from first walk-through to final punch list.
                </p>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-6">We manage:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                      <span>Design coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                      <span>Material selections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                      <span>Scheduling and trades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                      <span>Budget control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center fade-in visible">
                What You Get
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gray-800 border-gray-700 card-hover-effect">
                  <CardContent className="p-6">
                    <CheckCircle className="h-8 w-8 text-brand-amber mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">Clean and Organized Job Sites</h3>
                    <p className="text-gray-300">
                      Your property is treated with respect. We maintain clean work areas and protect your home
                      throughout construction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 card-hover-effect">
                  <CardContent className="p-6">
                    <Calendar className="h-8 w-8 text-brand-amber mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">Clear Communication</h3>
                    <p className="text-gray-300">
                      Weekly updates keep you informed. No surprises, no guessing. You always know what's happening.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 card-hover-effect">
                  <CardContent className="p-6">
                    <Star className="h-8 w-8 text-brand-amber mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">Quality-Focused Trades</h3>
                    <p className="text-gray-300">
                      No low-bid crews. We work with skilled professionals who take pride in their craftsmanship.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 card-hover-effect">
                  <CardContent className="p-6">
                    <DollarSign className="h-8 w-8 text-brand-amber mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
                    <p className="text-gray-300">
                      Clear pricing and change order control. You know what you're paying for and why.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Badge & Reviews */}
        <section className="w-full py-16 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 bounce-in visible">
                <div className="inline-block bg-brand-amber/10 px-6 py-2 rounded-full mb-4 count-up">
                  <span className="text-brand-amber font-bold text-lg">200+ Projects Completed</span>
                </div>
              </div>

              <div className="mb-16 scale-in visible">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                  <Star className="h-12 w-12 text-brand-amber mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-center">See What Our Neighbors Are Saying</h3>
                  <p className="text-gray-300 mb-6 text-center">
                    Check out our reviews and ratings from real Austin homeowners on Google.
                  </p>
                  <div className="text-center">
                    <Link
                      href="https://g.page/r/CZaWrbGUCHA0EAE/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      <Star className="size-5" />
                      View Our Google Reviews
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Pierce Section */}
        <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative reveal visible">
                  <div className="aspect-square max-w-md mx-auto relative rounded-lg overflow-hidden shadow-2xl bg-gray-800 hover-lift">
                    <Image
                      src="/pierce-speyrer-photo.png"
                      alt="Pierce Speyrer, President of PS Premier Construction"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-6 slide-in-right visible">
                  <div>
                    <h2 className="text-4xl font-bold tracking-tighter mb-3">Meet Pierce Speyrer</h2>
                    <p className="text-brand-amber text-xl font-semibold">President of PS Premier Construction</p>
                  </div>

                  <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                      Pierce Speyrer is raising the bar in residential & commercial construction by bringing
                      corporate-level strategy, consistent communication, and a client-first mindset to an industry
                      that's overdue for disruption.
                    </p>
                    <p>
                      Backed by seven years of consulting and sales expertise, and years of strong partnerships across
                      Central Texas, Pierce leads PS Premier with one goal — to deliver a tailored turnkey solution for
                      both residential and commercial construction projects all the way from land development to the
                      punch list!
                    </p>
                  </div>

                  <div className="pt-6">
                    <AnimatedCTAButton href="/#contact">Work With Pierce</AnimatedCTAButton>
                  </div>
                </div>
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
