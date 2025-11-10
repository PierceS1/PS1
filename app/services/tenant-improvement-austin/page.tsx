import type { Metadata } from "next"
import Image from "next/image"
import { ImprovedHeader } from "@/components/improved-header"
import { ContactForm } from "@/app/components/contact-form"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Tenant Improvement Austin | PS Premier Construction",
  description:
    "Expert tenant improvement and turnkey construction solutions in Austin. Serving property managers and owners with build-outs, renovations, and commercial TI services.",
  keywords:
    "tenant improvement Austin, commercial TI Austin, tenant build-out Austin, commercial renovation Austin, property management construction Austin, turnkey construction Austin",
  alternates: {
    canonical: "/services/tenant-improvement-austin",
  },
}

export default function TenantImprovementPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ImprovedHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Tenant Improvement Austin</h1>
              <p className="max-w-[900px] mx-auto text-gray-300 text-xl">
                Turnkey construction solutions for property managers and owners. From tenant build-outs to property
                renovations, we keep your investments performing.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-black">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Property managers and owners need a reliable construction partner who understands the unique challenges of
              tenant improvements, vacancy turnovers, and maintaining property values. At PS Premier Construction, we
              specialize in tenant improvement (TI) services and turnkey construction solutions for both commercial and
              residential properties throughout Austin. Whether you're preparing a retail space for a new tenant,
              renovating between leases to command higher rents, ensuring ADA compliance, or managing multiple
              properties across your portfolio, we deliver quality work on time and within budget. Our streamlined
              approach minimizes vacancy periods, maintains positive tenant relationships, and maximizes your return on
              investment. Serving West Lake, Tarrytown, Barton Creek, and all of Central Austin's commercial and
              residential property markets.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Scope of Work</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Commercial tenant build-outs and fit-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Residential property renovations between tenants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Retail and office space customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">ADA compliance upgrades and modifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Interior demolition and removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Electrical and lighting system upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">HVAC modifications and installations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Flooring and ceiling systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Painting and cosmetic refreshes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Portfolio-wide project management</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Our Process</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Rapid response and site assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Scope review with property management team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Transparent pricing and timeline development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Coordination with existing tenants and neighbors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Permit handling and code compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Efficient demolition and construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Regular progress updates and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Quality control and safety management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Thorough cleanup and final inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Post-project support and warranty service</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Premium Materials</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Commercial-grade flooring systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Durable wall coverings and paint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Energy-efficient LED lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Code-compliant electrical components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">High-efficiency HVAC equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">ADA-compliant fixtures and hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Commercial cabinetry and storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Fire-rated doors and safety systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Low-VOC and eco-friendly finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Durable countertops and work surfaces</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-black">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Properties?</h2>
              <p className="text-gray-300 text-lg">
                Let's discuss your tenant improvement needs and keep your properties performing at their best. Fill out
                the form below or call us at 512-798-0701.
              </p>
            </div>
            <ContactForm />
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
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PS Premier Construction. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyContactButton />
    </div>
  )
}
