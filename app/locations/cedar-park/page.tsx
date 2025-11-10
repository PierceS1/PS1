import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ImprovedHeader } from "@/components/improved-header"
import { ContactForm } from "@/app/components/contact-form"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Cedar Park Construction & Remodeling | PS Premier Construction",
  description:
    "Trusted construction and home remodeling services in Cedar Park, TX. Kitchen renovations, home additions, custom builds, and bathroom remodels for Cedar Park families.",
  keywords:
    "Cedar Park construction, Cedar Park remodeling, Cedar Park home builder, Cedar Park renovation, Cedar Park home addition, family home remodeling Cedar Park",
  alternates: {
    canonical: "/locations/cedar-park",
  },
  openGraph: {
    title: "Cedar Park Construction & Remodeling | PS Premier Construction",
    description:
      "Trusted construction and home remodeling services in Cedar Park, TX. Kitchen renovations, home additions, custom builds, and bathroom remodels.",
    url: "https://pspremierconstruction.com/locations/cedar-park",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
}

export default function CedarParkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ImprovedHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-950 to-black">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-2 rounded-full">
                  <MapPin className="size-4 text-brand-amber" />
                  <span className="text-sm text-brand-amber">Cedar Park, TX</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Cedar Park Construction & Family Home Remodeling
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Serving Cedar Park families with reliable construction services, home additions, kitchen renovations,
                  and quality craftsmanship that grows with your family's needs.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Request a Consultation
                  </Link>
                  <Link
                    href="https://www.google.com/search?client=mobilesearchapp&sca_esv=8a5138757e73c890&bih=820&biw=402&channel=iss&cs=1&hl=en&rlz=1MDAPLA_enUS1013US1013&v=393.0.825685754&kgmid=/g/11x5kcfr2r&q=PS+Premier+Construction&shndl=30&shem=bdse,shrtsdl&source=sh/x/loc/hdr/m1/5&kgs=38ded009b8beeab0&utm_source=bdse,shrtsdl,sh/x/loc/hdr/m1/5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition-colors border border-gray-800"
                  >
                    <Star className="size-4 text-brand-amber" />
                    View Our Reviews
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/modern-family-home-cedar-park-texas.jpg"
                  alt="Modern family home in Cedar Park featuring contemporary design and spacious layout"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="w-full py-12 md:py-16 bg-gray-950">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Your Cedar Park Construction Partner</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Cedar Park has become one of the Austin area's most popular communities for growing families, known for
                excellent schools, family-friendly neighborhoods, and strong community values. PS Premier Construction
                understands what makes Cedar Park special and delivers construction services designed for families who
                need more space, better functionality, and homes that adapt to their changing needs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Whether you're adding a bedroom for a new baby, renovating your kitchen to create a family gathering
                space, building a custom home in one of Cedar Park's newer developments, or transforming your entire
                home to better suit your lifestyle, our team brings reliability, quality, and honest pricing to every
                project. We understand family budgets and work hard to deliver maximum value.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our Cedar Park clients choose us because we're responsive, transparent, and committed to making the
                construction process as smooth as possible for busy families. We coordinate around your schedule, keep
                disruption to a minimum, and deliver results that make your house feel like the perfect home.
              </p>
            </div>
          </div>
        </section>

        {/* Work Style, Materials, Timeline */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Work Style */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Our Work Style</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Family-friendly scheduling and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Clear pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Reliable crews who show up on time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Safe, clean job sites for families with children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Quick response to questions and concerns</span>
                  </li>
                </ul>
              </div>

              {/* Materials Standard */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Materials Standard</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Quality materials built to last</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Durable finishes for active families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Energy-efficient options to reduce utility costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Low-maintenance solutions for busy households</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Best value for your investment</span>
                  </li>
                </ul>
              </div>

              {/* Timeline Expectations */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Timeline Expectations</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Kitchen remodel: 5-7 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Bathroom remodel: 2-3 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Bedroom addition: 2-4 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Whole home renovation: 3-5 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom home build: 8-12 months</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services in Cedar Park */}
        <section className="w-full py-12 md:py-16 bg-gray-950">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Services We Provide in Cedar Park</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Home Additions</h3>
                  <p className="text-gray-300 text-sm">Add bedrooms, playrooms, or living space as your family grows</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Kitchen Renovations</h3>
                  <p className="text-gray-300 text-sm">Family-friendly kitchens with smart storage and durability</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Bathroom Remodels</h3>
                  <p className="text-gray-300 text-sm">Updated bathrooms that work for the whole family</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Custom Home Builds</h3>
                  <p className="text-gray-300 text-sm">Build your perfect family home in Cedar Park</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Outdoor Living Spaces</h3>
                  <p className="text-gray-300 text-sm">Covered patios and outdoor areas for family time</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Whole Home Renovations</h3>
                  <p className="text-gray-300 text-sm">Transform your entire home to fit your family's lifestyle</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Business Profile CTA */}
        <section className="w-full py-12 bg-black">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Star className="size-12 text-brand-amber mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">See What Your Cedar Park Neighbors Are Saying</h2>
            <p className="text-gray-300 mb-6">
              Read real reviews from families throughout Cedar Park and the greater Austin area who have trusted us with
              their home construction and remodeling projects.
            </p>
            <Link
              href="https://www.google.com/search?client=mobilesearchapp&sca_esv=8a5138757e73c890&bih=820&biw=402&channel=iss&cs=1&hl=en&rlz=1MDAPLA_enUS1013US1013&v=393.0.825685754&kgmid=/g/11x5kcfr2r&q=PS+Premier+Construction&shndl=30&shem=bdse,shrtsdl&source=sh/x/loc/hdr/m1/5&kgs=38ded009b8beeab0&utm_source=bdse,shrtsdl,sh/x/loc/hdr/m1/5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              <Star className="size-5" />
              Read Our Google Reviews
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cedar Park Project?</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Let's discuss how we can help your family create the home you need with quality craftsmanship and
                  honest pricing. Contact us today for a free consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-6 text-brand-amber shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Serving Cedar Park</h3>
                      <p className="text-gray-300 text-sm">
                        And surrounding northwest Austin communities including Leander and Round Rock
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-800 bg-black py-6 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PS Premier Construction. All rights reserved.
          </p>
          <Link
            href="https://www.google.com/search?client=mobilesearchapp&sca_esv=8a5138757e73c890&bih=820&biw=402&channel=iss&cs=1&hl=en&rlz=1MDAPLA_enUS1013US1013&v=393.0.825685754&kgmid=/g/11x5kcfr2r&q=PS+Premier+Construction&shndl=30&shem=bdse,shrtsdl&source=sh/x/loc/hdr/m1/5&kgs=38ded009b8beeab0&utm_source=bdse,shrtsdl,sh/x/loc/hdr/m1/5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-amber hover:text-white mt-2 inline-block transition-colors"
          >
            Find Us on Google
          </Link>
        </div>
      </footer>

      <StickyContactButton />
    </div>
  )
}
