import type { Metadata } from "next"
import Image from "next/image"
import { ImprovedHeader } from "@/components/improved-header"
import { ContactForm } from "@/app/components/contact-form"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Kitchen Remodeling Austin | PS Premier Construction",
  description:
    "Transform your kitchen with PS Premier Construction. Expert kitchen remodeling in Austin, serving West Lake, Tarrytown, and Central Austin. Custom cabinetry, modern appliances, and beautiful finishes.",
  keywords:
    "kitchen remodeling Austin, kitchen renovation Austin, custom kitchen Austin, kitchen remodel West Lake, kitchen contractor Austin, modern kitchen design Austin",
  alternates: {
    canonical: "/services/kitchen-remodeling-austin",
  },
}

export default function KitchenRemodelingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ImprovedHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Kitchen Remodeling Austin</h1>
              <p className="max-w-[900px] mx-auto text-gray-300 text-xl">
                Transform your kitchen into the heart of your home with custom cabinetry, modern appliances, and
                beautiful finishes that make cooking a joy.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Paragraph */}
        <section className="w-full py-12 bg-black">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Your kitchen is more than just a place to cook—it's where memories are made, families gather, and
              celebrations happen. At PS Premier Construction, we specialize in creating stunning kitchen spaces
              throughout Austin, from West Lake to Tarrytown, Barton Creek to Central Austin. Whether you're dreaming of
              a chef's kitchen with professional-grade appliances, a family-friendly space with smart storage solutions,
              or a modern entertaining hub that flows seamlessly into your living areas, our team brings expertise,
              creativity, and precision to every kitchen remodeling project. We handle everything from initial design
              consultation through final installation, ensuring your vision becomes reality.
            </p>
          </div>
        </section>

        {/* Three Columns: Scope, Process, Materials */}
        <section className="w-full py-12 md:py-16 bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Scope Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Scope of Work</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom cabinet design and installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">
                      Countertop selection and fabrication (granite, quartz, marble)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Premium appliance installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Designer lighting and electrical upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Backsplash tile design and installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Plumbing fixture upgrades and modifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Flooring installation (hardwood, tile, luxury vinyl)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Kitchen island design and construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Pantry organization systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Structural modifications and wall removal</span>
                  </li>
                </ul>
              </div>

              {/* Process Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Our Process</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Initial consultation and vision planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Detailed measurements and space assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">3D design renderings and material selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Transparent budget and timeline development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Permit acquisition and approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Demolition and preparation work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Electrical and plumbing rough-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Cabinet and countertop installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Finish work and appliance installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Final walkthrough and quality assurance</span>
                  </li>
                </ul>
              </div>

              {/* Materials Column */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-amber">Premium Materials</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Custom solid wood and thermofoil cabinetry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Engineered quartz and natural stone countertops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Energy-efficient LED lighting systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Designer hardware and fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Premium ceramic, porcelain, and glass tile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Professional-grade plumbing fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Hardwood, engineered wood, and luxury vinyl flooring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Stainless steel and custom range hoods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Soft-close drawer and cabinet mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Eco-friendly and sustainable building materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contact Form Section */}
        <section className="w-full py-12 md:py-24 bg-black">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Kitchen?</h2>
              <p className="text-gray-300 text-lg">
                Let's discuss your kitchen remodeling project and create the space you've always dreamed of. Fill out
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
