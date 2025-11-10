import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { ImprovedHeader } from "@/components/improved-header"
import { ContactForm } from "@/app/components/contact-form"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Davenport Ranch Construction & Remodeling | PS Premier Construction",
  description:
    "Premier construction and custom home building services in Davenport Ranch, TX. Kitchen & bath renovations, home additions, and luxury remodeling for Davenport Ranch residents.",
  keywords:
    "Davenport Ranch construction, Davenport Ranch remodeling, Davenport Ranch home builder, Davenport Ranch custom homes, northwest Austin construction, luxury construction Davenport Ranch",
  alternates: {
    canonical: "/locations/davenport-ranch",
  },
  openGraph: {
    title: "Davenport Ranch Construction & Remodeling | PS Premier Construction",
    description:
      "Premier construction and custom home building services in Davenport Ranch, TX. Kitchen & bath renovations, home additions, and luxury remodeling.",
    url: "https://pspremierconstruction.com/locations/davenport-ranch",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
}

export default function DavenportRanchPage() {
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
                  <span className="text-sm text-brand-amber">Davenport Ranch, TX</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Davenport Ranch Construction & Custom Home Building
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Serving northwest Austin's premier planned community with custom home builds, luxury renovations, and
                  exceptional craftsmanship that complements Davenport Ranch's natural beauty.
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
                  src="/davenport-ranch-custom-home-exterior.jpg"
                  alt="Custom home in Davenport Ranch featuring hill country architecture"
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
            <h2 className="text-3xl font-bold mb-6">Your Davenport Ranch Construction Partner</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Davenport Ranch represents one of northwest Austin's most desirable communities, known for its
                family-friendly atmosphere, excellent schools, and beautiful hill country setting. PS Premier
                Construction understands what makes this neighborhood special and delivers construction services that
                enhance your home while respecting the community's character and standards.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Whether you're building a custom home on your Davenport Ranch lot, adding square footage to accommodate
                a growing family, or renovating your kitchen and bathrooms to modern standards, our team brings
                experience with the neighborhood's building requirements, HOA guidelines, and the unique considerations
                of working in this established northwest Austin community.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our Davenport Ranch clients appreciate our communication, reliability, and commitment to delivering
                projects on schedule and within budget. We coordinate with local suppliers, work efficiently to minimize
                disruption, and ensure your construction project adds value and beauty to your home.
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
                    <span className="text-gray-300">Collaborative design process with homeowners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Transparent communication and weekly updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Professional crews with background checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Daily job site cleanup and organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Respectful of neighbors and community standards</span>
                  </li>
                </ul>
              </div>

              {/* Materials Standard */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Materials Standard</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Premium-grade lumber and framing materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Energy-efficient windows and insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Designer fixtures and hardware selections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Quality cabinetry with soft-close mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Durable flooring options for family living</span>
                  </li>
                </ul>
              </div>

              {/* Timeline Expectations */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Timeline Expectations</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Kitchen remodel: 6-8 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Bathroom remodel: 3-4 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Home addition: 3-5 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Whole home renovation: 4-6 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom home build: 9-14 months</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services in Davenport Ranch */}
        <section className="w-full py-12 md:py-16 bg-gray-950">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Services We Provide in Davenport Ranch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Custom Home Builds</h3>
                  <p className="text-gray-300 text-sm">
                    Build your dream home in Davenport Ranch with personalized design
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Kitchen Renovations</h3>
                  <p className="text-gray-300 text-sm">Modern kitchens perfect for family cooking and entertaining</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Home Additions</h3>
                  <p className="text-gray-300 text-sm">Add space for growing families with seamless additions</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Bathroom Remodels</h3>
                  <p className="text-gray-300 text-sm">Spa-inspired bathrooms with modern fixtures and finishes</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Outdoor Living Spaces</h3>
                  <p className="text-gray-300 text-sm">Patios, pergolas, and outdoor kitchens for Texas living</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Home className="size-8 text-brand-amber mb-3" />
                  <h3 className="text-xl font-bold mb-2">Whole Home Renovations</h3>
                  <p className="text-gray-300 text-sm">Complete transformations to modernize your home</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Business Profile CTA */}
        <section className="w-full py-12 bg-black">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Star className="size-12 text-brand-amber mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">See What Your Davenport Ranch Neighbors Are Saying</h2>
            <p className="text-gray-300 mb-6">
              Read real reviews from homeowners throughout Davenport Ranch and the greater Austin area who have trusted
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
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Davenport Ranch Project?</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Let's discuss how we can bring your vision to life with quality craftsmanship and personalized
                  service. Contact us today for a free consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-6 text-brand-amber shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Serving Davenport Ranch</h3>
                      <p className="text-gray-300 text-sm">
                        And surrounding northwest Austin communities including Cedar Park and Leander
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
