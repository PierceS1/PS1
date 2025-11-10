import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ImprovedHeader } from "@/components/improved-header"
import { ContactForm } from "@/app/components/contact-form"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Rollingwood Construction & Remodeling | PS Premier Construction",
  description:
    "Elite construction and luxury remodeling services in Rollingwood, TX. Custom home builds, high-end renovations, and estate-level craftsmanship for Rollingwood residents.",
  keywords:
    "Rollingwood construction, Rollingwood remodeling, Rollingwood custom homes, luxury construction Rollingwood, Rollingwood home builder, estate remodeling Rollingwood",
  alternates: {
    canonical: "/locations/rollingwood",
  },
  openGraph: {
    title: "Rollingwood Construction & Remodeling | PS Premier Construction",
    description:
      "Elite construction and luxury remodeling services in Rollingwood, TX. Custom home builds, high-end renovations, and estate-level craftsmanship.",
    url: "https://pspremierconstruction.com/locations/rollingwood",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
}

export default function RollingwoodPage() {
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
                  <span className="text-sm text-brand-amber">Rollingwood, TX</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Rollingwood Construction & Estate-Level Renovations
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Serving Austin's exclusive lakeside community with custom home builds, luxury renovations, and
                  exceptional craftsmanship that honors Rollingwood's prestigious character.
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
                  src="/luxury-lakeside-home-rollingwood-austin.jpg"
                  alt="Luxury lakeside home in Rollingwood featuring premium architecture and hill country views"
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
            <h2 className="text-3xl font-bold mb-6">Your Rollingwood Construction Partner</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Rollingwood stands as one of Austin's most exclusive communities, where privacy, natural beauty, and
                architectural excellence converge. PS Premier Construction brings estate-level expertise to this
                distinguished neighborhood, understanding that Rollingwood homes demand the highest standards of
                craftsmanship, attention to detail, and respect for the community's unique character.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Whether you're building a custom waterfront estate, renovating a classic Rollingwood home to modern
                luxury standards, or adding sophisticated outdoor living spaces to take advantage of your lakeside
                views, our team delivers the discretion, quality, and expertise that Rollingwood homeowners expect. We
                work seamlessly with the city's building department and understand the importance of preserving the
                natural landscape while creating exceptional living spaces.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our Rollingwood clients value our commitment to excellence, our ability to source premium materials and
                finishes, and our dedication to protecting their investment while enhancing their home's value and their
                family's quality of life.
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
                    <span className="text-gray-300">White-glove service and discretion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Direct access to project leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Vetted, professional craftsmen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Immaculate job site management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Flexible scheduling to minimize disruption</span>
                  </li>
                </ul>
              </div>

              {/* Materials Standard */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Materials Standard</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Luxury-grade finishes and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom millwork and cabinetry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Premium natural stone and exotic woods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Designer lighting and smart home systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Energy-efficient luxury systems</span>
                  </li>
                </ul>
              </div>

              {/* Timeline Expectations */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Timeline Expectations</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Luxury kitchen: 8-12 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Master suite renovation: 6-8 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Estate addition: 5-8 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Whole home estate renovation: 6-10 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom lakeside home: 12-18 months</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services in Rollingwood */}
        <section className="w-full py-12 md:py-16 bg-gray-950">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Services We Provide in Rollingwood</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Custom Estate Homes</h3>
                  <p className="text-gray-300 text-sm">Waterfront and hillside estates designed for luxury living</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Luxury Kitchen Renovations</h3>
                  <p className="text-gray-300 text-sm">Chef-worthy kitchens with premium appliances and finishes</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Master Suite Retreats</h3>
                  <p className="text-gray-300 text-sm">Spa-inspired suites with custom features and lakeside views</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Lakeside Outdoor Living</h3>
                  <p className="text-gray-300 text-sm">Custom patios, pools, and outdoor entertaining spaces</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Whole Estate Renovations</h3>
                  <p className="text-gray-300 text-sm">Complete transformations to modern luxury standards</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Wine Cellars & Specialty Rooms</h3>
                  <p className="text-gray-300 text-sm">Custom designed spaces for collectors and enthusiasts</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Business Profile CTA */}
        <section className="w-full py-12 bg-black">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Star className="size-12 text-brand-amber mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">See What Your Rollingwood Neighbors Are Saying</h2>
            <p className="text-gray-300 mb-6">
              Read real reviews from homeowners throughout Rollingwood and the greater Austin area who have trusted us
              with their estate construction and remodeling projects.
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
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Rollingwood Project?</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Let's discuss how we can bring your vision to life with estate-level craftsmanship and personalized
                  service. Contact us today for a private consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-6 text-brand-amber shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Serving Rollingwood</h3>
                      <p className="text-gray-300 text-sm">
                        And surrounding exclusive Austin communities including West Lake Hills and Barton Creek
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
