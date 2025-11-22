import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ImprovedHeader } from "@/components/improved-header"
import { ContactForm } from "@/app/components/contact-form"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Barton Creek Construction & Estate Remodeling | PS Premier Construction",
  description:
    "Luxury estate construction and high-end remodeling in Barton Creek, Austin. Custom home builds, pool houses, outdoor living spaces, and comprehensive renovation services.",
  keywords:
    "Barton Creek construction, Barton Creek custom homes, Barton Creek remodeling, luxury home builder Barton Creek, estate renovation Barton Creek, pool house construction",
  alternates: {
    canonical: "/locations/barton-creek",
  },
  openGraph: {
    title: "Barton Creek Construction & Estate Remodeling | PS Premier Construction",
    description:
      "Luxury estate construction and high-end remodeling in Barton Creek, Austin. Custom home builds and comprehensive renovation services.",
    url: "https://pspremierconstruction.com/locations/barton-creek",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
}

export default function BartonCreekPage() {
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
                  <span className="text-sm text-brand-amber">Barton Creek, Austin TX</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Barton Creek Estate Construction & Luxury Remodeling
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Creating exceptional estate-level construction and comprehensive renovations for Barton Creek's most
                  prestigious properties with uncompromising quality and attention to detail.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-md font-medium transition-colors animate-pulse hover:animate-none"
                  >
                    Start Your Project
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
                  src="/luxury-estate-barton-creek-austin-texas.jpg"
                  alt="Luxury estate in Barton Creek featuring modern architecture and expansive outdoor living"
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
            <h2 className="text-3xl font-bold mb-6">Your Barton Creek Estate Construction Partner</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Barton Creek represents the epitome of luxury living in Austin, with sprawling estates, world-class golf
                courses, and properties that demand the highest level of construction expertise. PS Premier Construction
                brings estate-level experience to every Barton Creek project, whether you're building a custom home from
                the ground up, creating elaborate outdoor living spaces, or undertaking a comprehensive estate
                renovation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Our work throughout Barton Creek has given us intimate knowledge of the unique challenges these
                properties present – from significant elevation changes and complex site preparation to integrating
                guest houses, pool complexes, and outdoor entertainment areas that rival resort amenities. We coordinate
                with landscape architects, pool designers, and luxury suppliers to create cohesive outdoor and indoor
                spaces that take full advantage of Barton Creek's natural beauty.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Barton Creek clients choose PS Premier because we understand that at this level, every detail matters.
                From custom millwork and imported materials to smart home integration and sustainable building
                practices, we deliver the sophisticated results and white-glove service that Barton Creek estates
                deserve. Our project management ensures your renovation or build progresses smoothly while maintaining
                the privacy and security your property requires.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Estate Services in Barton Creek</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Custom Estate Homes</h3>
                  <p className="text-gray-300 text-sm">
                    Ground-up construction of luxury homes with resort-level amenities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Outdoor Living Complexes</h3>
                  <p className="text-gray-300 text-sm">
                    Covered patios, outdoor kitchens, fireplaces, and entertainment areas
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Pool Houses & Cabanas</h3>
                  <p className="text-gray-300 text-sm">
                    Custom structures with full kitchens, baths, and entertainment systems
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Whole Estate Renovations</h3>
                  <p className="text-gray-300 text-sm">Complete transformations maintaining property value</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Guest Houses</h3>
                  <p className="text-gray-300 text-sm">Separate living quarters with full amenities</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Luxury Kitchen & Bath</h3>
                  <p className="text-gray-300 text-sm">High-end finishes, custom cabinetry, and premium appliances</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-16 bg-gray-950">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Barton Creek Estate Owners Choose PS Premier</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Estate-Level Experience</h3>
                  <p className="text-gray-300 text-sm">
                    Proven track record with large-scale, complex luxury properties
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Premium Material Network</h3>
                  <p className="text-gray-300 text-sm">
                    Relationships with luxury suppliers and custom manufacturers worldwide
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Comprehensive Project Management</h3>
                  <p className="text-gray-300 text-sm">Coordination of all trades, designers, and specialists</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Privacy & Security</h3>
                  <p className="text-gray-300 text-sm">Discreet construction practices with background-checked crews</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Smart Home Integration</h3>
                  <p className="text-gray-300 text-sm">Seamless technology integration for modern luxury living</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">White-Glove Service</h3>
                  <p className="text-gray-300 text-sm">Exceptional communication and attention to every detail</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews CTA */}
        <section className="w-full py-12 bg-black">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Star className="size-12 text-brand-amber mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">See What Your Barton Creek Neighbors Are Saying</h2>
            <p className="text-gray-300 mb-6">
              Read reviews from estate owners throughout Barton Creek and Austin who have trusted us with their luxury
              construction projects.
            </p>
            <Link
              href="https://www.google.com/search?client=mobilesearchapp&sca_esv=8a5138757e73c890&bih=820&biw=402&channel=iss&cs=1&hl=en&rlz=1MDAPLA_enUS1013US1013&v=393.0.825685754&kgmid=/g/11x5kcfr2r&q=PS+Premier+Construction&shndl=30&shem=bdse,shrtsdl&source=sh/x/loc/hdr/m1/5&kgs=38ded009b8beeab0&utm_source=bdse,shrtsdl,sh/x/loc/hdr/m1/5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-medium transition-colors text-lg animate-pulse hover:animate-none"
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
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Barton Creek Project?</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Let's discuss how we can bring your estate vision to life with exceptional craftsmanship and
                  comprehensive project management. Contact us for a confidential consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-6 text-brand-amber shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Serving Barton Creek</h3>
                      <p className="text-gray-300 text-sm">
                        And surrounding luxury communities including West Lake Hills and Rob Roy
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
