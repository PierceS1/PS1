import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ImprovedHeader } from "@/components/improved-header"
import { ContactForm } from "@/app/components/contact-form"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "West Lake Hills Construction & Remodeling | PS Premier Construction",
  description:
    "Premier construction and luxury remodeling services in West Lake Hills, TX. Custom home builds, kitchen & bath renovations, and home additions for West Lake Hills residents.",
  keywords:
    "West Lake Hills construction, West Lake Hills remodeling, West Lake Hills home builder, West Lake Hills kitchen remodel, West Lake Hills bathroom remodel, luxury construction West Lake Hills",
  alternates: {
    canonical: "/locations/west-lake-hills",
  },
  openGraph: {
    title: "West Lake Hills Construction & Luxury Remodeling | PS Premier Construction",
    description:
      "Premier construction and luxury remodeling services in West Lake Hills, TX. Custom home builds, kitchen & bath renovations, and home additions.",
    url: "https://pspremierconstruction.com/locations/west-lake-hills",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
}

export default function WestLakeHillsPage() {
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
                  <span className="text-sm text-brand-amber">West Lake Hills, TX</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  West Lake Hills Construction & Luxury Remodeling
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Serving one of Austin's most prestigious communities with exceptional craftsmanship, custom home
                  builds, and luxury renovations that enhance your West Lake Hills lifestyle.
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
                  src="/luxury-home-west-lake-hills-austin.jpg"
                  alt="Luxury home in West Lake Hills featuring modern architecture and hill country views"
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
            <h2 className="text-3xl font-bold mb-6">Your West Lake Hills Construction Partner</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                West Lake Hills represents the pinnacle of Austin luxury living, and your home deserves construction and
                remodeling services that match this standard of excellence. PS Premier Construction has built a
                reputation throughout West Lake Hills for delivering exceptional craftsmanship, innovative design
                solutions, and project management that respects both your time and investment.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We understand the unique characteristics of West Lake Hills properties – from challenging hillside
                builds to strict city codes and the importance of preserving those stunning hill country views. Whether
                you're planning a complete custom home build, a kitchen remodel that opens to your outdoor living space,
                or a primary suite addition that takes advantage of your lot's natural beauty, our team brings the
                expertise and attention to detail that West Lake Hills homeowners expect.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our West Lake Hills clients choose us because we're not just contractors – we're neighbors who
                understand the community's commitment to quality, aesthetics, and property values. We coordinate
                seamlessly with West Lake Hills building officials, respect your neighbors during construction, and
                deliver results that enhance your home's value and your family's lifestyle.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services in West Lake Hills */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Services We Provide in West Lake Hills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Custom Home Builds</h3>
                  <p className="text-gray-300 text-sm">
                    Ground-up construction designed for your lot's topography and views
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Luxury Kitchen Remodels</h3>
                  <p className="text-gray-300 text-sm">High-end finishes and layouts that enhance entertaining</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Primary Suite Additions</h3>
                  <p className="text-gray-300 text-sm">Spa-like retreats with walk-in closets and luxury baths</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Outdoor Living Spaces</h3>
                  <p className="text-gray-300 text-sm">Covered patios, outdoor kitchens, and pool integration</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Whole Home Renovations</h3>
                  <p className="text-gray-300 text-sm">Complete transformations while you enjoy a temporary home</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Bathroom Remodels</h3>
                  <p className="text-gray-300 text-sm">Custom tile, frameless showers, and premium fixtures</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why West Lake Hills Homeowners Choose Us */}
        <section className="w-full py-12 md:py-16 bg-gray-950">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why West Lake Hills Homeowners Trust PS Premier</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Hill Country Expertise</h3>
                  <p className="text-gray-300 text-sm">
                    Experience building on challenging hillside lots with unique drainage and foundation requirements
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Seamless Permitting</h3>
                  <p className="text-gray-300 text-sm">
                    We navigate West Lake Hills building codes and HOA requirements efficiently
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Premium Material Network</h3>
                  <p className="text-gray-300 text-sm">
                    Access to luxury suppliers and custom manufacturers for unique finishes
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Respectful Construction</h3>
                  <p className="text-gray-300 text-sm">
                    Clean job sites, professional crews, and consideration for your neighbors
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Investment Protection</h3>
                  <p className="text-gray-300 text-sm">
                    Quality construction that maintains and enhances West Lake Hills property values
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="size-6 text-brand-amber shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Communication Excellence</h3>
                  <p className="text-gray-300 text-sm">
                    Regular updates, transparent budgeting, and decisions made together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Business Profile CTA */}
        <section className="w-full py-12 bg-black">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Star className="size-12 text-brand-amber mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">See What Your West Lake Hills Neighbors Are Saying</h2>
            <p className="text-gray-300 mb-6">
              Read real reviews from homeowners throughout West Lake Hills and the greater Austin area who have trusted
              us with their construction and remodeling projects.
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
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your West Lake Hills Construction Project?</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Let's discuss how we can bring your vision to life with quality craftsmanship and personalized
                  service. Contact us today for a consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-6 text-brand-amber shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Serving West Lake Hills</h3>
                      <p className="text-gray-300 text-sm">
                        And surrounding Austin communities including Tarrytown, Barton Creek, and Rollingwood
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
