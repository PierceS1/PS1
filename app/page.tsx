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
import { OptimizedImage } from "@/components/optimized-image"
import { ImprovedHeader } from "@/components/improved-header"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { AnimatedCTAButton } from "@/components/animated-cta-button"
import { ContactForm } from "@/app/components/contact-form"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"
import { SchemaMarkup } from "@/app/components/schema-markup"

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
      <div className="flex min-h-screen flex-col">
        <ImprovedHeader />

        <main className="flex-1">
          {/* Hero Section with Animation */}
          <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white animated-bg">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                ref={heroAnimation.ref}
                className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${heroAnimation.isVisible ? "visible" : ""}`}
              >
                <div className={`space-y-4 slide-in-left ${heroAnimation.isVisible ? "visible" : ""}`}>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Luxury Remodeling and Custom Builds in Austin
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Serving West Lake, Tarrytown, Barton Creek, and Central Austin with premium construction services.
                    Transform your home or business with Austin's trusted construction partner.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedCTAButton href="#contact">Request a Consultation</AnimatedCTAButton>
                  </div>
                </div>
                <div
                  className={`relative h-[400px] overflow-hidden rounded-xl slide-in-right ${heroAnimation.isVisible ? "visible" : ""}`}
                >
                  <OptimizedImage
                    src="/images/worker-pressure-washing-fence.png"
                    alt="PS Premier Construction professional worker performing pressure washing and fence maintenance work in Austin, Texas"
                    fill
                    priority
                    className="object-cover hero-image-enhance"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div ref={aboutAnimation.ref} className={`fade-in ${aboutAnimation.isVisible ? "visible" : ""}`}>
                {/* Section 1: Positioning */}
                <div className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-center">
                    Your Vision, Our Expertise
                  </h2>
                  <div className="space-y-4 text-gray-300 text-lg">
                    <p>
                      You want a remodel that increases value and improves how you live. You need a builder who listens,
                      plans, and delivers without delays and excuses.
                    </p>
                    <p className="font-semibold text-white">
                      PS Premier Construction leads your project from first walk-through to final punch list.
                    </p>
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-white mb-4">We manage:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                          <span>Design coordination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                          <span>Material selections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                          <span>Scheduling and trades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-brand-amber flex-shrink-0 mt-1" />
                          <span>Budget control</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2: What You Get */}
                <div className="max-w-4xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">What You Get</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <CheckCircle className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-white mb-2">Clean and Organized Job Sites</h3>
                        <p className="text-gray-300">
                          Your property is treated with respect. We maintain clean work areas and protect your home
                          throughout construction.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <Calendar className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-white mb-2">Clear Communication</h3>
                        <p className="text-gray-300">
                          Weekly updates keep you informed. No surprises, no guessing. You always know what's happening.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <Star className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-white mb-2">Quality-Focused Trades</h3>
                        <p className="text-gray-300">
                          No low-bid crews. We work with skilled professionals who take pride in their craftsmanship.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <DollarSign className="h-8 w-8 text-brand-amber mb-3" />
                        <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
                        <p className="text-gray-300">
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

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="aspect-square max-w-md mx-auto relative rounded-lg overflow-hidden shadow-2xl bg-gray-800">
                        <Image
                          src="/pierce-speyrer-photo.png"
                          alt="Pierce Speyrer, President of PS Premier Construction"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-4xl font-bold tracking-tighter mb-3">Meet Pierce Speyrer</h2>
                        <p className="text-brand-amber text-xl font-semibold">President of PS Premier Construction</p>
                      </div>

                      <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
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

          <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
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
                    <Card className="bg-gray-900 border-gray-800">
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

                    <Card className="bg-gray-900 border-gray-800">
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

                    <Card className="bg-gray-900 border-gray-800">
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

                    <Card className="bg-gray-900 border-gray-800">
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

                    <Card className="bg-gray-900 border-gray-800">
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

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div ref={materialsAnimation.ref} className={`fade-in ${materialsAnimation.isVisible ? "visible" : ""}`}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Palette className="h-10 w-10 text-brand-amber" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                      Materials and Standards
                    </h2>
                  </div>
                  <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    We only use premium materials from trusted suppliers. Your investment deserves quality that lasts.
                  </p>

                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">We source:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Custom Cabinets</h4>
                          <p className="text-gray-300 text-sm">
                            Premium semi-custom lines tailored to your space and style
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Natural Stone & Quartz</h4>
                          <p className="text-gray-300 text-sm">
                            Durable, beautiful countertops that stand the test of time
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">High-End Tile</h4>
                          <p className="text-gray-300 text-sm">
                            Local suppliers with extensive selections for every design aesthetic
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">LED Lighting Packages</h4>
                          <p className="text-gray-300 text-sm">
                            Energy-efficient, modern lighting solutions for every room
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">High-Efficiency Plumbing</h4>
                          <p className="text-gray-300 text-sm">
                            Quality fixtures that save water without sacrificing performance
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-brand-amber flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Premium Paint Systems</h4>
                          <p className="text-gray-300 text-sm">
                            Sherwin Williams and Benjamin Moore for lasting beauty
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gray-900 border border-gray-700 rounded-lg">
                      <p className="text-gray-300 text-center">
                        <span className="font-semibold text-white">Quality Guarantee:</span> Every material we install
                        meets or exceeds manufacturer specifications and industry standards. We stand behind our work.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <AnimatedCTAButton href="#contact">Discuss Your Material Options</AnimatedCTAButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section with Animation */}
          <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                ref={servicesAnimation.ref}
                className={`flex flex-col items-center justify-center space-y-4 text-center fade-in ${servicesAnimation.isVisible ? "visible" : ""}`}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                  <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    From kitchen remodels to custom builds, we've got you covered. Here's what we love to do for our
                    Austin neighbors.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                {/* Service Cards with Staggered Animation */}
                <Link href="/services/kitchen-remodeling-austin">
                  <Card
                    className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(0) ? "visible" : ""} cursor-pointer transition-all hover:border-brand-amber`}
                  >
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                        <Home className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Kitchen Remodeling</h3>
                      <p className="text-gray-300">
                        Transform your kitchen with custom cabinetry, modern appliances, and beautiful finishes that
                        make cooking a joy.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/services/bathroom-remodeling-austin">
                  <Card
                    className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(1) ? "visible" : ""} cursor-pointer transition-all hover:border-brand-amber`}
                  >
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                        <Building className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Bathroom Remodeling</h3>
                      <p className="text-gray-300">
                        Create your dream bathroom with luxury fixtures, custom tile work, and spa-like amenities.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/services/home-additions-austin">
                  <Card
                    className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(2) ? "visible" : ""} cursor-pointer transition-all hover:border-brand-amber`}
                  >
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                        <Home className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Home Additions</h3>
                      <p className="text-gray-300">
                        Expand your living space with seamless additions that blend perfectly with your home's existing
                        architecture.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/services/custom-home-builder-austin">
                  <Card
                    className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(3) ? "visible" : ""} cursor-pointer transition-all hover:border-brand-amber`}
                  >
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                        <Building className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Custom Home Builder</h3>
                      <p className="text-gray-300">
                        Build your dream home from the ground up with personalized design and quality craftsmanship.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/services/land-development-austin">
                  <Card
                    className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(4) ? "visible" : ""} cursor-pointer transition-all hover:border-brand-amber`}
                  >
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Land Development</h3>
                      <p className="text-gray-300">
                        From raw land to finished communities, we handle permitting, infrastructure, and construction.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/services/tenant-improvement-austin">
                  <Card
                    className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(5) ? "visible" : ""} cursor-pointer transition-all hover:border-brand-amber`}
                  >
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                        <Wrench className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Tenant Improvement</h3>
                      <p className="text-gray-300">
                        Turnkey construction solutions for property managers and owners, from build-outs to renovations.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </section>

          {/* Service Areas / Neighborhoods Section with GBP Link */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Serving Austin's Premier Neighborhoods
                  </h2>
                  <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                    From West Lake Hills to Tarrytown, we're proud to serve Austin's most sought-after communities with
                    exceptional construction and remodeling services.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Link href="/locations/west-lake-hills">
                  <Card className="bg-gray-900 border border-gray-800 text-white hover-lift cursor-pointer transition-all hover:border-brand-amber">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-brand-amber mb-3" />
                      <h3 className="text-xl font-bold mb-2">West Lake Hills</h3>
                      <p className="text-gray-300 text-sm">
                        Luxury remodeling and custom builds in one of Austin's most prestigious communities.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/locations/tarrytown">
                  <Card className="bg-gray-900 border border-gray-800 text-white hover-lift cursor-pointer transition-all hover:border-brand-amber">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-brand-amber mb-3" />
                      <h3 className="text-xl font-bold mb-2">Tarrytown</h3>
                      <p className="text-gray-300 text-sm">
                        Historic home renovations and modern updates that preserve neighborhood character.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/locations/barton-creek">
                  <Card className="bg-gray-900 border border-gray-800 text-white hover-lift cursor-pointer transition-all hover:border-brand-amber">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-brand-amber mb-3" />
                      <h3 className="text-xl font-bold mb-2">Barton Creek</h3>
                      <p className="text-gray-300 text-sm">
                        Estate-level construction services for Barton Creek's luxury properties.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/locations/davenport-ranch">
                  <Card className="bg-gray-900 border border-gray-800 text-white hover-lift cursor-pointer transition-all hover:border-brand-amber">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-brand-amber mb-3" />
                      <h3 className="text-xl font-bold mb-2">Davenport Ranch</h3>
                      <p className="text-gray-300 text-sm">
                        Custom home building and remodeling in this premier northwest Austin neighborhood.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/locations/rollingwood">
                  <Card className="bg-gray-900 border border-gray-800 text-white hover-lift cursor-pointer transition-all hover:border-brand-amber">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-brand-amber mb-3" />
                      <h3 className="text-xl font-bold mb-2">Rollingwood</h3>
                      <p className="text-gray-300 text-sm">
                        High-end renovations and additions for this exclusive lakeside community.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/locations/cedar-park">
                  <Card className="bg-gray-900 border border-gray-800 text-white hover-lift cursor-pointer transition-all hover:border-brand-amber">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-brand-amber mb-3" />
                      <h3 className="text-xl font-bold mb-2">Cedar Park</h3>
                      <p className="text-gray-300 text-sm">
                        Growing families trust us for home additions and comprehensive remodels.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              {/* Google Business Profile CTA with strategic link */}
              <div className="mt-12 text-center">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
                  <Star className="h-12 w-12 text-brand-amber mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">See What Our Neighbors Are Saying</h3>
                  <p className="text-gray-300 mb-6">
                    Check out our reviews and ratings from real Austin homeowners on Google.
                  </p>
                  <Link
                    href="https://www.google.com/search?client=mobilesearchapp&sca_esv=8a5138757e73c890&bih=820&biw=402&channel=iss&cs=1&hl=en&rlz=1MDAPLA_enUS1013US1013&v=393.0.825685754&kgmid=/g/11x5kcfr2r&q=PS+Premier+Construction&shndl=30&shem=bdse,shrtsdl&source=sh/x/loc/hdr/m1/5&kgs=38ded009b8beeab0&utm_source=bdse,shrtsdl,sh/x/loc/hdr/m1/5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    <Star className="size-5" />
                    View Our Google Reviews
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section with Animation */}
          <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                ref={projectsAnimation.ref}
                className={`flex flex-col items-center justify-center space-y-4 text-center fade-in ${projectsAnimation.isVisible ? "visible" : ""}`}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Jobs</h2>
                  <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Every project tells a story. Here are a few of our favorites from around Austin that showcase what
                    we can create together.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                <Card
                  className={`overflow-hidden bg-gray-900 border border-gray-800 hover-lift scale-in ${projectsAnimation.isVisible ? "visible" : ""}`}
                >
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1491.png-sdKtvyMfFEFS9t0ThPI42kSxRGi52H.jpeg"
                      alt="Commercial flat roof replacement and waterproofing project in Austin by PS Premier Construction"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">Commercial Roofing Project</h3>
                    <p className="text-sm text-gray-300">
                      Professional commercial flat roof replacement featuring advanced waterproofing membrane systems.
                      This comprehensive roofing project included complete tear-off, new underlayment installation, and
                      high-performance flat roofing materials designed for Austin's climate. Our experienced crew
                      completed this commercial roof on schedule while ensuring zero business disruption for the
                      property owner.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`overflow-hidden bg-gray-900 border border-gray-800 hover-lift scale-in ${projectsAnimation.isVisible ? "visible" : ""}`}
                >
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-12-NFZkcor9738CQI559lujpl7N5izS6K.jpeg"
                      alt="Modern Austin living room renovation featuring contemporary design with pop art, leather furniture, and natural light by PS Premier Construction"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">Modern Austin Living Room Remodel</h3>
                    <p className="text-sm text-gray-300">
                      Contemporary living space transformation featuring floor-to-ceiling windows, light wood flooring,
                      and modern fixtures. This stylish renovation includes custom lighting design with statement
                      pendant and floor lamps, creating an open and airy atmosphere perfect for modern Austin living.
                      The space showcases clean lines, natural materials, and thoughtful design that maximizes natural
                      light while maintaining comfort and functionality.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`overflow-hidden bg-gray-900 border border-gray-800 hover-lift scale-in ${projectsAnimation.isVisible ? "visible" : ""}`}
                >
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0115.png-woinRbMi603fIfnimeOd53x8hbEyTg.jpeg"
                      alt="Professional tile installation in Steiner Ranch bathroom and hallway featuring large-format beige porcelain tile by PS Premier Construction"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">Steiner Ranch Tile Installation</h3>
                    <p className="text-sm text-gray-300">
                      Complete tile renovation in Steiner Ranch featuring premium large-format porcelain tile
                      installation throughout bathroom and hallway spaces. This precision tile work included custom
                      layout planning, professional surface preparation, and expert installation with clean grout lines
                      and perfect alignment. Our skilled craftsmen transformed these spaces with durable, beautiful tile
                      that will last for decades while enhancing the home's overall aesthetic and value.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`overflow-hidden bg-gray-900 border border-gray-800 hover-lift scale-in ${projectsAnimation.isVisible ? "visible" : ""}`}
                >
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1489-uixeXZfwohHwb2G06PKzzC58L6tyw9.png"
                      alt="Professional exterior home renovation featuring gutter installation and painting work in Austin, Texas by PS Premier Construction"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">Austin Home Exterior Renovation</h3>
                    <p className="text-sm text-gray-300">
                      Complete exterior renovation featuring professional gutter installation, fresh paint, and updated
                      trim work. This comprehensive exterior upgrade enhanced both curb appeal and weather protection
                      for this Austin home. Our skilled team completed all exterior work including new seamless gutters,
                      premium paint application, and precision trim installation while maintaining the home's original
                      architectural charm.
                    </p>
                  </CardContent>
                </Card>
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
                href="https://www.google.com/search?client=mobilesearchapp&sca_esv=8a5138757e73c890&bih=820&biw=402&channel=iss&cs=1&hl=en&rlz=1MDAPLA_enUS1013US1013&v=393.0.825685754&kgmid=/g/11x5kcfr2r&q=PS+Premier+Construction&shndl=30&shem=bdse,shrtsdl&source=sh/x/loc/hdr/m1/5&kgs=38ded009b8beeab0&utm_source=bdse,shrtsdl,sh/x/loc/hdr/m1/5"
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
