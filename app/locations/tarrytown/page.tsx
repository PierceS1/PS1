import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ImprovedHeader } from "@/components/improved-header"
import { ContactForm } from "@/app/components/contact-form"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Tarrytown Construction & Remodeling | PS Premier Construction",
  description:
    "Historic home renovation and remodeling in Tarrytown, Austin. Expert kitchen & bath renovations, home additions, and restoration services preserving Tarrytown's character.",
  keywords:
    "Tarrytown construction, Tarrytown remodeling, Tarrytown renovation, Tarrytown kitchen remodel, Tarrytown bathroom remodel, historic home restoration Tarrytown",
  alternates: {
    canonical: "/locations/tarrytown",
  },
  openGraph: {
    title: "Tarrytown Construction & Remodeling | PS Premier Construction",
    description:
      "Historic home renovation and remodeling in Tarrytown, Austin. Expert kitchen & bath renovations preserving neighborhood character.",
    url: "https://pspremierconstruction.com/locations/tarrytown",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
}

export default function TarrytownPage() {
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
                  <span className="text-sm text-brand-amber">Tarrytown, Austin TX</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Tarrytown Construction & Historic Home Renovation
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Preserving Tarrytown's historic charm while bringing modern comfort and functionality to one of
                  Austin's most beloved neighborhoods.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
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
                  src="/historic-craftsman-home-tarrytown-austin.jpg"
                  alt="Historic Craftsman home in Tarrytown featuring classic Austin architecture"
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
            <h2 className="text-3xl font-bold mb-6">Your Tarrytown Renovation Specialists</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Tarrytown's tree-lined streets and historic homes tell the story of Austin's architectural heritage.
                Since the 1930s, this neighborhood has been home to some of Austin's most beautiful craftsman bungalows,
                traditional cottages, and mid-century modern gems. PS Premier Construction understands that renovating a
                Tarrytown home isn't just about updates – it's about honoring history while creating spaces for modern
                family living.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Our experience throughout Tarrytown has taught us how to work with original hardwood floors, preserve
                architectural details like crown molding and built-ins, and seamlessly integrate modern amenities
                without compromising your home's character. Whether you're opening up a compartmentalized floor plan,
                adding a primary suite that feels original to the home, or creating a dream kitchen that still honors
                the neighborhood aesthetic, we bring the specialized expertise that Tarrytown renovations demand.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We also understand Tarrytown's unique considerations – from mature trees and lot coverage restrictions
                to working within the neighborhood's established streetscape. Our respectful construction practices and
                attention to preserving what makes your home special have made us the go-to builder for discerning
                Tarrytown homeowners who want renovation excellence without sacrificing neighborhood character.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Tarrytown Renovation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Historic Home Restoration</h3>
                  <p className="text-gray-300 text-sm">
                    Preserving original character while updating for modern living
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Kitchen Remodels</h3>
                  <p className="text-gray-300 text-sm">
                    Open concepts that maintain the home's architectural integrity
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Primary Suite Additions</h3>
                  <p className="text-gray-300 text-sm">Sympathetic additions that look original to the home</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Bathroom Renovations</h3>
                  <p className="text-gray-300 text-sm">Period-appropriate finishes with modern functionality</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Basement Finishing</h3>
                  <p className="text-gray-300 text-sm">Converting unused space into functional family areas</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Whole Home Renovations</h3>
                  <p className="text-gray-300 text-sm">Complete transformations maintaining neighborhood character</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-16 bg-gray-950">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Tarrytown Homeowners Choose PS Premier</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Historic Home Expertise</h3>
                  <p className="text-gray-300 text-sm">
                    Understanding of period architecture and appropriate renovation approaches
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Neighborhood Knowledge</h3>
                  <p className="text-gray-300 text-sm">
                    Familiarity with Tarrytown regulations, tree preservation, and lot coverage
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Respectful Construction</h3>
                  <p className="text-gray-300 text-sm">
                    Minimal disruption on narrow streets with consideration for neighbors
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Detail Preservation</h3>
                  <p className="text-gray-300 text-sm">
                    Careful protection and restoration of original architectural elements
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Modern Integration</h3>
                  <p className="text-gray-300 text-sm">Seamless addition of HVAC, electrical, and plumbing upgrades</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Value Enhancement</h3>
                  <p className="text-gray-300 text-sm">
                    Renovations that increase property value while maintaining character
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews CTA */}
        <section className="w-full py-12 bg-black">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Star className="size-12 text-brand-amber mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">See What Your Tarrytown Neighbors Are Saying</h2>
            <p className="text-gray-300 mb-6">
              Read reviews from homeowners throughout Tarrytown and Austin who have trusted us with their historic home
              renovations.
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
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Tarrytown Home?</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Let's discuss how we can honor your home's history while creating the modern functionality your family
                  needs. Contact us for a consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-6 text-brand-amber shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Serving Tarrytown</h3>
                      <p className="text-gray-300 text-sm">
                        And surrounding Central Austin neighborhoods including Old West Austin and Clarksville
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
