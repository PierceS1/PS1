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
  CheckCircle,
  Calendar,
  DollarSign,
  ClipboardCheck,
  Palette,
} from "lucide-react"
import { ImprovedHeader } from "@/components/improved-header"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { AnimatedCTAButton } from "@/components/animated-cta-button"
import { ContactForm } from "@/app/components/contact-form"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"
import { SchemaMarkup } from "@/app/components/schema-markup"
import { FAQSchema } from "@/app/components/faq-schema"
import { BreadcrumbSchema } from "@/app/components/breadcrumb-schema"
import { NeighborhoodsCarousel } from "@/components/neighborhoods-carousel"
import { FeaturedProjectsTabs } from "@/components/featured-projects-tabs"

export default function HomePage() {
  // Animation hooks
  const heroAnimation = useScrollAnimation()
  const aboutAnimation = useScrollAnimation()
  const processAnimation = useScrollAnimation()
  const materialsAnimation = useScrollAnimation()
  const servicesAnimation = useScrollAnimation()
  const projectsAnimation = useScrollAnimation()
  const testimonialsAnimation = useScrollAnimation()
  const contactAnimation = useScrollAnimation()

  // For staggered animations
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  // Staggered animation for service cards
  useEffect(() => {
    if (servicesAnimation.isVisible) {
      const totalItems = 6 // Updated number of service cards (removed Interior Renovations)
      let timer: NodeJS.Timeout

      for (let i = 0; i < totalItems; i++) {
        timer = setTimeout(() => {
          setVisibleItems((prev) => [...prev, i])
        }, 150 * i)
      }

      return () => clearTimeout(timer)
    }
  }, [servicesAnimation.isVisible])

  return (
    <>
      <SchemaMarkup />
      <FAQSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://pspremierconstruction.com/" }]} />
      <div className="flex min-h-screen flex-col">
        <ImprovedHeader />

        <main className="flex-1">
          {/* Hero Section with Animation */}
          <section id="home" className="w-full relative py-12 md:py-24 lg:py-32 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/img-0125.jpeg"
                alt="Luxury custom home in Austin by PS Premier Construction"
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay for text readability */}
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
                    construction services. Clear execution. Clean communication. Your trusted construction partner.
                  </p>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center pt-4">
                    <AnimatedCTAButton href="#contact">Request a Consultation</AnimatedCTAButton>
                    <Link
                      href="#neighborhoods"
                      className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md text-sm font-medium transition-all duration-200 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-black text-white animate-pulse hover:animate-none"
                    >
                      View Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-gray-900">
                  Your Specialist for High-End Residential Projects
                </h2>
                <p className="text-xl text-gray-700 mb-4">
                  PS Premier Construction focuses on luxury remodels and residential development in Austin.
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  You get clarity, clean execution, and a partner who handles design coordination, budgeting, scopes,
                  and project management from start to finish.
                </p>
              </div>
            </div>
          </section>

          <section id="neighborhoods" className="w-full bg-gray-950">
            <div className="text-center py-8 md:py-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Austin's Premier Neighborhoods</h2>
              <p className="text-gray-300 text-lg">Explore our luxury projects across Central Texas</p>
            </div>
            <NeighborhoodsCarousel />
          </section>

          <FeaturedProjectsTabs />

          <section id="services" className="w-full py-12 md:py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div ref={aboutAnimation.ref} className={`fade-in ${aboutAnimation.isVisible ? "visible" : ""}`}>
                <div className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-center">Primary Services</h2>
                  <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
                    We specialize in high-end residential projects that transform how you live and increase property
                    value.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Palette className="h-10 w-10 text-brand-amber mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Kitchen & Bathroom Remodels</h3>
                        <p className="text-gray-600">
                          Transform your most important spaces with custom cabinetry, premium finishes, and thoughtful
                          layouts that elevate your daily life.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Home className="h-10 w-10 text-brand-amber mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Home Renovations</h3>
                        <p className="text-gray-600">
                          Comprehensive whole-home transformations that modernize every space while maintaining
                          architectural integrity and style.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Building className="h-10 w-10 text-brand-amber mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Home Builds</h3>
                        <p className="text-gray-600">
                          Build your dream home from the ground up with personalized design, quality materials, and
                          expert craftsmanship throughout.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <MapPin className="h-10 w-10 text-brand-amber mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Land Development Support</h3>
                        <p className="text-gray-600">
                          From site planning to permitting and infrastructure, we guide your residential development
                          projects to completion.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto mb-16 border-t border-gray-200 pt-16">
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 text-center">
                    Additional Services When Needed
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Tenant Improvements</h4>
                        <p className="text-sm text-gray-600">Commercial build-outs and property upgrades</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Property Management Repairs</h4>
                        <p className="text-sm text-gray-600">Turnkey solutions for rental properties</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Scope Writing & Oversight</h4>
                        <p className="text-sm text-gray-600">Project management and documentation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Contractor Consulting</h4>
                        <p className="text-sm text-gray-600">Sales, CRM, and operations support</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">
                    Why Clients Work With Us
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Calendar className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Communication</h3>
                        <p className="text-gray-600">
                          Weekly updates keep you informed. No surprises, no guessing. You always know what's happening
                          and what's next.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Wrench className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Coordination</h3>
                        <p className="text-gray-600">
                          Quick responses with vendors and designers. We keep your project moving without delays or
                          bottlenecks.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <ClipboardCheck className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate Scopes & Timelines</h3>
                        <p className="text-gray-600">
                          Predictable schedules based on real experience. Clear pricing and change order control so you
                          know what you're paying for.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Star className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Strong Systems & Tracking</h3>
                        <p className="text-gray-600">
                          Experience across residential, commercial, and development projects with proven systems for
                          updates and job tracking.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Section 2: What You Get */}
                <div className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">What You Get</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <CheckCircle className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Clean and Organized Job Sites</h3>
                        <p className="text-gray-600">
                          Your property is treated with respect. We maintain clean work areas and protect your home
                          throughout construction.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Calendar className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Communication</h3>
                        <p className="text-gray-600">
                          Weekly updates keep you informed. No surprises, no guessing. You always know what's happening.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <Star className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Quality-Focused Trades</h3>
                        <p className="text-gray-600">
                          No low-bid crews. We work with skilled professionals who take pride in their craftsmanship.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <DollarSign className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                        <p className="text-gray-600">
                          Clear pricing and change order control. You know what you're paying for and why.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="inline-block bg-brand-amber/10 px-6 py-2 rounded-full mb-4">
                      <span className="text-brand-amber font-bold text-lg">200+ Projects Completed</span>
                    </div>
                  </div>

                  <div className="mb-16">
                    <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
                      <Star className="h-12 w-12 text-brand-amber mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-3 text-center">See What Our Neighbors Are Saying</h3>
                      <p className="text-gray-600 mb-6 text-center">
                        Check out our reviews and ratings from real Austin homeowners on Google.
                      </p>
                      <div className="text-center">
                        <Link
                          href="https://g.page/r/CZaWrbGUCHA0EAE/review"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-full font-medium transition-colors animate-pulse hover:animate-none"
                        >
                          <Star className="size-5" />
                          View Our Google Reviews
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="aspect-[2/3] max-w-md mx-auto relative rounded-xl overflow-hidden shadow-2xl ring-2 ring-brand-amber/20 hover:ring-brand-amber/40 transition-all duration-300">
                        <Image
                          src="/pierce-speyrer-photo.png"
                          alt="Pierce Speyrer, President of PS Premier Construction"
                          fill
                          className="object-cover object-center"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl font-bold tracking-tighter mb-3">Meet Pierce Speyrer</h2>
                        <p className="text-brand-amber text-xl font-semibold">President of PS Premier Construction</p>
                      </div>

                      <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                        <p>
                          Pierce Speyrer is raising the bar in residential & commercial construction by bringing
                          corporate-level strategy, consistent communication, and a client-first mindset to an industry
                          that's overdue for disruption.
                        </p>
                        <p>
                          Backed by seven years of consulting and sales expertise, and years of strong partnerships
                          across Central Texas, Pierce leads PS Premier with one goal — to deliver a tailored turnkey
                          solution for both residential and commercial construction projects all the way from land
                          development to the punch list!
                        </p>
                      </div>

                      <div className="pt-6">
                        <AnimatedCTAButton href="#contact">Work With Pierce</AnimatedCTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div ref={processAnimation.ref} className={`fade-in ${processAnimation.isVisible ? "visible" : ""}`}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <ClipboardCheck className="h-10 w-10 text-brand-amber" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Our Process</h2>
                  </div>
                  <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    From initial consultation to final walkthrough, we guide you through every step with clarity and
                    professionalism.
                  </p>

                  <div className="space-y-6">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white font-bold">
                              1
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">Initial Consultation</h3>
                            <p className="text-gray-300">
                              We walk the property and outline your goals. This is where we listen, ask questions, and
                              understand your vision.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white font-bold">
                              2
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">Design and Selections</h3>
                            <p className="text-gray-300">
                              We align layouts and materials with your standard. You'll see options, pricing, and
                              recommendations before moving forward.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white font-bold">
                              3
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">Proposal</h3>
                            <p className="text-gray-300">
                              Clear scope and timeline. You'll know exactly what's included, how long it will take, and
                              what it costs.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white font-bold">
                              4
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">Build</h3>
                            <p className="text-gray-300">
                              Managed start to finish with daily oversight. We coordinate all trades, handle scheduling,
                              and keep you updated every step of the way.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-white font-bold">
                              5
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">Closeout</h3>
                            <p className="text-gray-300">
                              Walk-through and correction list completed on-site. We don't leave until you're completely
                              satisfied.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-12 text-center">
                    <AnimatedCTAButton href="#contact">Start Your Project Today</AnimatedCTAButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section with Animation */}
          <section className="w-full py-12 md:py-16 bg-gray-950 text-white">
            <div ref={testimonialsAnimation.ref} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                className={`flex flex-col items-center justify-center space-y-4 text-center mb-8 fade-in ${testimonialsAnimation.isVisible ? "visible" : ""}`}
              >
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-white">
                  The Stories Our Clients Share
                </h2>
                <p className="max-w-[600px] text-gray-300">
                  We're proud of the relationships we've built. Here's what some of our friends and clients have to say
                  about working with us.
                </p>
              </div>
              <div className={`scale-in ${testimonialsAnimation.isVisible ? "visible" : ""}`}>
                <TestimonialCarousel />
              </div>
              <div className="text-center mt-8"></div>
            </div>
          </section>

          {/* Contact Section with Animation */}
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
            <div
              ref={contactAnimation.ref}
              className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <div className={`space-y-2 slide-in-left ${contactAnimation.isVisible ? "visible" : ""}`}>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Request a Consultation</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start your construction or remodeling project? Let's discuss your vision and create a plan to
                  bring it to life. Contact us today for a free consultation.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-brand-amber" />
                    <div>
                      <h3 className="font-semibold text-white">Give Us a Call</h3>
                      <p className="text-sm text-gray-300">512-798-0701 (We actually answer our phone!)</p>
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
                alt="PS Premier Construction Logo - Austin's Premier Construction Company"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400 md:text-left">
                &copy; {new Date().getFullYear()} PS Premier Construction. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Proudly serving Austin and Central Texas with heart and craftsmanship.
              </p>
              {/* Google Business Profile link in footer */}
              <Link
                href="https://g.page/r/CZaWrbGUCHA0EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-amber hover:text-white mt-2 inline-block transition-colors"
              >
                Find Us on Google
              </Link>
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
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/pierce-speyrer-b60115195/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-amber transition-colors duration-300"
                aria-label="Visit Pierce Speyrer's LinkedIn profile"
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
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/pspremierconstruction/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-amber transition-colors duration-300"
                aria-label="Visit our Instagram page"
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
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </footer>

        <StickyContactButton />
      </div>
    </>
  )
}
