"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  Building,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Star,
  Calendar,
  DollarSign,
  ClipboardCheck,
  Palette,
  ArrowRight,
} from "lucide-react"
import { ImprovedHeader } from "@/components/improved-header"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { AnimatedCTAButton } from "@/components/animated-cta-button"
import { ContactForm } from "@/app/components/contact-form"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SchemaMarkup } from "@/app/components/schema-markup"
import { FAQSchema } from "@/app/components/faq-schema"
import { BreadcrumbSchema } from "@/app/components/breadcrumb-schema"
import { NeighborhoodsCarousel } from "@/components/neighborhoods-carousel"

export default function HomePage() {
  const heroAnimation = useScrollAnimation()
  const aboutAnimation = useScrollAnimation()
  const processAnimation = useScrollAnimation()
  const testimonialsAnimation = useScrollAnimation()
  const contactAnimation = useScrollAnimation()

  return (
    <>
      <SchemaMarkup />
      <FAQSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://pspremierconstruction.com/" }]} />
      <div className="flex min-h-screen flex-col">
        <ImprovedHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="w-full relative py-12 md:py-24 lg:py-32 text-white">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/img-0125.jpeg"
                alt="Luxury custom home in Austin by PS Premier Construction"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
              <div
                ref={heroAnimation.ref}
                className={`max-w-3xl mx-auto text-center ${heroAnimation.isVisible ? "visible" : ""}`}
              >
                <div className={`space-y-6 fade-in ${heroAnimation.isVisible ? "visible" : ""}`}>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                    Luxury Remodels and Residential Development in Austin
                  </h1>
                  <p className="max-w-[700px] mx-auto text-gray-100 text-lg md:text-xl drop-shadow-md">
                    Serving West Lake Hills, Tarrytown, Barton Creek, and Central Austin with premium residential
                    construction services. Clear execution. Clean communication.
                  </p>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center pt-4">
                    <button
                      onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-medium transition-all duration-200 bg-brand-red hover:bg-brand-red/90 text-white"
                    >
                      Request a Consultation
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-medium transition-all duration-200 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-black text-white"
                    >
                      View Our Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhoods Carousel */}
          <section id="neighborhoods" className="w-full bg-gray-950">
            <div className="text-center py-8 md:py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Austin's Premier Neighborhoods</h2>
              <p className="text-gray-300 text-lg">Explore our luxury projects across Central Texas</p>
            </div>
            <NeighborhoodsCarousel />
          </section>

          {/* Services Section */}
          <section id="services" className="w-full py-12 md:py-20 bg-gray-950 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div ref={aboutAnimation.ref} className={`fade-in ${aboutAnimation.isVisible ? "visible" : ""}`}>
                {/* Primary Services */}
                <div className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-center">What We Do Best</h2>
                  <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                    We specialize in high-end residential projects that transform how you live.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Palette className="h-10 w-10 text-brand-amber mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          <Link
                            href="/services/kitchen-remodeling-austin"
                            className="hover:text-brand-red transition-colors"
                          >
                            Luxury Kitchen & Bathroom Remodels
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Transform your most important spaces with custom cabinetry, premium finishes, and thoughtful
                          layouts.
                        </p>
                        <Link
                          href="/services/kitchen-remodeling-austin"
                          className="text-brand-red hover:text-brand-red-dark font-medium text-sm inline-flex items-center gap-1"
                        >
                          Learn more →
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Home className="h-10 w-10 text-brand-amber mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          <Link
                            href="/services/home-additions-austin"
                            className="hover:text-brand-red transition-colors"
                          >
                            Full-Home Renovations
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Comprehensive whole-home transformations that modernize every space while maintaining
                          architectural integrity.
                        </p>
                        <Link
                          href="/portfolio"
                          className="text-brand-red hover:text-brand-red-dark font-medium text-sm inline-flex items-center gap-1"
                        >
                          View projects →
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Building className="h-10 w-10 text-brand-amber mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          <Link
                            href="/services/custom-home-builder-austin"
                            className="hover:text-brand-red transition-colors"
                          >
                            Custom Home Builds
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Build your dream home from the ground up with personalized design and expert craftsmanship.
                        </p>
                        <Link
                          href="/services/custom-home-builder-austin"
                          className="text-brand-red hover:text-brand-red-dark font-medium text-sm inline-flex items-center gap-1"
                        >
                          Learn more →
                        </Link>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <MapPin className="h-10 w-10 text-brand-amber mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          <Link
                            href="/services/land-development-austin"
                            className="hover:text-brand-red transition-colors"
                          >
                            Residential Land Development
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">
                          From site planning to permitting and infrastructure, we guide your development projects to
                          completion.
                        </p>
                        <Link
                          href="/services/land-development-austin"
                          className="text-brand-red hover:text-brand-red-dark font-medium text-sm inline-flex items-center gap-1"
                        >
                          Learn more →
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Why Work With Us */}
                <div className="max-w-4xl mx-auto mb-16 border-t border-gray-200 pt-16">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
                    Why Clients Choose Us
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                      <Calendar className="h-8 w-8 text-brand-amber flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Communication</h3>
                        <p className="text-gray-600">Weekly updates. No surprises. You always know what's happening.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                      <Wrench className="h-8 w-8 text-brand-amber flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Coordination</h3>
                        <p className="text-gray-600">Quick responses with vendors. We keep your project moving.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                      <ClipboardCheck className="h-8 w-8 text-brand-amber flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate Timelines</h3>
                        <p className="text-gray-600">Predictable schedules based on real experience.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                      <DollarSign className="h-8 w-8 text-brand-amber flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                        <p className="text-gray-600">Clear pricing. You know what you're paying for.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meet Pierce */}
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="aspect-[2/3] max-w-md mx-auto relative rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src="/pierce-speyrer-photo.png"
                          alt="Pierce Speyrer, President of PS Premier Construction"
                          fill
                          className="object-cover object-center"
                          priority
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl font-bold tracking-tighter mb-3">Meet Pierce Speyrer</h2>
                        <p className="text-brand-amber text-xl font-semibold">President of PS Premier Construction</p>
                      </div>

                      <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                        <p>
                          Pierce Speyrer sets a higher standard in residential and commercial construction. He applies
                          corporate strategy, direct communication, and a client-first mindset to every project.
                        </p>
                        <p>
                          He brings seven years of consulting and sales experience. He has built reliable partnerships
                          across Central Texas. He leads PS Premier with one focus: Deliver a tailored turnkey solution
                          from the first phase of land development to the final punch list.
                        </p>
                      </div>

                      <div className="pt-6">
                        <AnimatedCTAButton href="#contact">Request a Consultation</AnimatedCTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="w-full py-12 md:py-24 bg-gray-950 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div ref={processAnimation.ref} className={`fade-in ${processAnimation.isVisible ? "visible" : ""}`}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <ClipboardCheck className="h-10 w-10 text-brand-amber" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Our Process</h2>
                  </div>
                  <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    From initial consultation to final walkthrough, we guide you through every step.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {[
                      { step: 1, title: "Consultation", desc: "Walk the property and outline your goals." },
                      { step: 2, title: "Design", desc: "Align layouts and materials with your vision." },
                      { step: 3, title: "Proposal", desc: "Clear scope, timeline, and pricing." },
                      { step: 4, title: "Build", desc: "Daily oversight and coordination." },
                      { step: 5, title: "Closeout", desc: "Walk-through until you're satisfied." },
                    ].map((item) => (
                      <div key={item.step} className="text-center p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold mx-auto mb-3">
                          {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 text-center">
                    <AnimatedCTAButton href="#contact">Request a Consultation</AnimatedCTAButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="w-full py-12 md:py-16 bg-white">
            <div ref={testimonialsAnimation.ref} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`flex flex-col items-center justify-center space-y-4 text-center mb-8 fade-in ${testimonialsAnimation.isVisible ? "visible" : ""}`}
              >
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-gray-900">What Our Clients Say</h2>
                <p className="max-w-[600px] text-gray-600">
                  We're proud of the relationships we've built with Austin homeowners.
                </p>
              </div>
              <div className={`scale-in ${testimonialsAnimation.isVisible ? "visible" : ""}`}>
                <TestimonialCarousel />
              </div>
              <div className="text-center mt-8">
                <Link
                  href="https://g.page/r/CZaWrbGUCHA0EAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-dark font-medium transition-colors"
                >
                  <Star className="size-5" />
                  View All Google Reviews
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
            <div
              ref={contactAnimation.ref}
              className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <div className={`space-y-2 slide-in-left ${contactAnimation.isVisible ? "visible" : ""}`}>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Request a Consultation</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start your construction or remodeling project? Let's discuss your vision and create a plan to
                  bring it to life.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-brand-amber" />
                    <div>
                      <h3 className="font-semibold text-white">Give Us a Call</h3>
                      <p className="text-sm text-gray-300">512-798-0701</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-brand-amber" />
                    <div>
                      <h3 className="font-semibold text-white">Drop Us a Line</h3>
                      <p className="text-sm text-gray-300">ps@pspremierconstruction.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`slide-in-right ${contactAnimation.isVisible ? "visible" : ""}`}>
                <ContactForm />
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
              <p className="text-sm text-gray-400 md:text-left">
                &copy; {new Date().getFullYear()} PS Premier Construction. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">Proudly serving Austin and Central Texas.</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574805621220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-amber transition-colors duration-300"
                aria-label="Visit our Facebook page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/pierce-speyrer-b60115195/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-amber transition-colors duration-300"
                aria-label="Visit LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/pspremierconstruction/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-amber transition-colors duration-300"
                aria-label="Visit Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </footer>

        <StickyContactButton />
      </div>
    </>
  )
}
