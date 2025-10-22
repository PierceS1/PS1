"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building, Phone, Mail, MapPin, Wrench } from "lucide-react"
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
  const servicesAnimation = useScrollAnimation()
  const projectsAnimation = useScrollAnimation()
  const testimonialsAnimation = useScrollAnimation()
  const contactAnimation = useScrollAnimation()
  const presidentAnimation = useScrollAnimation()

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
                    Building Your Vision in Austin, One Project at a Time
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Welcome to PS Premier Construction. We're not just contractors – we're your neighbors, partners, and
                    fellow Austinites passionate about transforming spaces and bringing your dreams to life throughout
                    Central Texas.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <AnimatedCTAButton href="#contact">Let's Talk About Your Project</AnimatedCTAButton>
                  </div>
                </div>
                <div
                  className={`relative h-[400px] overflow-hidden rounded-xl slide-in-right ${heroAnimation.isVisible ? "visible" : ""}`}
                >
                  <OptimizedImage
                    src="/images/modern-interior-lobby.jpeg"
                    alt="Modern interior design by PS Premier Construction featuring contemporary shelving and natural lighting"
                    fill
                    priority
                    className="object-cover hero-image-enhance"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section with Animation */}
          <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div
                ref={aboutAnimation.ref}
                className={`flex flex-col items-center justify-center space-y-4 text-center fade-in ${aboutAnimation.isVisible ? "visible" : ""}`}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h2>
                  <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We started PS Premier Construction with a simple belief: every Austin home and business deserves
                    craftsmanship that reflects the unique character of our vibrant city. Our journey has been built on
                    relationships, not just projects.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center mt-12">
                <div className={`space-y-4 max-w-3xl mx-auto fade-in ${aboutAnimation.isVisible ? "visible" : ""}`}>
                  <h3 className="text-2xl font-bold">Our Promise to You</h3>
                  <p className="text-gray-300">
                    When you work with us, you're family. That means open communication, honest pricing, and a
                    commitment to treating your property with the same care we would our own. From our first
                    conversation to the final walkthrough, we're here to make your construction experience enjoyable and
                    stress-free.
                  </p>
                  <h3 className="text-2xl font-bold">How We Work With You</h3>
                  <p className="text-gray-300">
                    We believe in collaboration, creativity, and coffee (lots of it!). Our team will sit down with you,
                    understand your vision, and bring it to life with our expertise. We'll guide you through each
                    decision, keeping you informed and involved as much as you want to be. Your dream is our blueprint.
                  </p>
                  <div className="flex flex-col pt-4 items-center">
                    <div className="text-5xl font-bold text-brand-amber pulse">200+</div>
                    <div className="text-xl text-gray-300">Projects Completed</div>
                  </div>
                </div>
              </div>
              {/* Meet the President Subsection with Animation */}
              <div className="mt-16 border-t border-gray-800 pt-12">
                <div ref={presidentAnimation.ref} className={`flex flex-col md:flex-row gap-8 items-center`}>
                  <div className={`w-full md:w-1/3 slide-in-left ${presidentAnimation.isVisible ? "visible" : ""}`}>
                    <div className="bg-[#0a0d17] rounded-lg overflow-hidden hover-lift">
                      <div className="aspect-[3/4] relative">
                        <OptimizedImage
                          src="/images/pierce-speyrer.png"
                          alt="Pierce Speyrer, President of PS Premier Construction - Austin's leading construction professional"
                          fill
                          className="object-cover object-center img-filter-president"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-full md:w-2/3 space-y-4 bg-[#0a0d17] p-6 rounded-r-lg slide-in-right ${presidentAnimation.isVisible ? "visible" : ""}`}
                  >
                    <h3 className="text-3xl font-bold text-white">Meet Pierce Speyrer</h3>
                    <h4 className="text-xl text-brand-amber">President of PS Premier Construction</h4>
                    <p className="text-gray-300">
                      Pierce Speyrer is raising the bar in residential & commercial construction by bringing
                      corporate-level strategy, consistent communication, and a client-first mindset to an industry
                      that's overdue for disruption. Backed by seven years of consulting and sales expertise, and years
                      of strong partnerships across Central Texas, Pierce leads PS Premier with one goal — to deliver a
                      tailored turnkey solution for both residential and commercial construction projects all the way
                      from land development to the punch list!
                    </p>
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Can Help You</h2>
                  <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    From dream homes to business spaces, we've got you covered. Here's what we love to do for our Austin
                    neighbors.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                {/* Service Cards with Staggered Animation */}
                <Card
                  className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(0) ? "visible" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
                    <p className="text-gray-300">
                      From office buildings to retail spaces, we deliver high-quality commercial construction projects
                      tailored to your business needs.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(1) ? "visible" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                      <Home className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Residential Construction</h3>
                    <p className="text-gray-300">
                      We build custom homes and renovate existing properties with attention to detail and quality
                      craftsmanship.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(2) ? "visible" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Land & Residential Development</h3>
                    <p className="text-gray-300">
                      From raw land acquisition to finished communities, we handle all aspects of development including
                      permitting, infrastructure, and construction in the Austin area.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(3) ? "visible" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Commercial Tenant Improvement & Turnkey Solutions</h3>
                    <p className="text-gray-300">
                      Specialized construction services for property management companies and property owners. We
                      provide comprehensive tenant improvement and turnkey construction solutions for both residential
                      and commercial properties.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Tenant build-outs and improvements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Property renovations between tenants</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>ADA compliance upgrades</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Streamlined project management for property portfolios</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(4) ? "visible" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
                      <Wrench className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Mechanical, Electrical & Plumbing Services</h3>
                    <p className="text-gray-300">
                      Comprehensive MEP services for both residential and commercial projects. Our licensed
                      professionals ensure all systems are designed and installed to meet the highest standards of
                      safety, efficiency, and performance.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>HVAC installation, maintenance, and upgrades</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Electrical system design and installation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Plumbing installations and repairs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Energy-efficient system upgrades</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Code compliance and permitting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className={`bg-gray-900 border border-gray-800 text-white hover-lift stagger-item ${visibleItems.includes(5) ? "visible" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red text-white mb-4">
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
                        className="h-6 w-6"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Civil & Architectural Design Services</h3>
                    <div className="flex items-center mb-4">
                      <p className="text-gray-300">
                        We now offer comprehensive civil and architectural design services through our trusted partner:
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg mb-4">
                      <div className="flex justify-center">
                        <Image
                          src="/images/abg-ps-partnership.png"
                          alt="Architect Builder Group & PS Premier Construction Partnership"
                          width={300}
                          height={200}
                          className="h-auto w-full max-w-[300px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-3">
                      <div className="flex space-x-3">
                        <a
                          href="https://architectbuildergroup.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
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
                            className="h-5 w-5 text-brand-amber"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          <span className="text-gray-300">Website</span>
                        </a>
                        <a
                          href="https://www.instagram.com/architect.builder/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
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
                            className="h-5 w-5 text-brand-amber"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                          <span className="text-gray-300">Instagram</span>
                        </a>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Custom architectural designs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Civil engineering solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Permit-ready drawings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-amber mr-2">•</span>
                        <span>Seamless integration with construction</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Proudest Moments</h2>
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9848.jpg-V5Z95SSD8QHBoBgDM9y9PDB4PuIu5H.jpeg"
                      alt="Downtown Austin commercial office remodel with custom ceiling design and LED lighting by PS Premier Construction"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">Downtown Austin Commercial Remodel</h3>
                    <p className="text-sm text-gray-300">
                      Complete office transformation in the heart of Downtown Austin. This extensive commercial remodel
                      included custom ceiling design with integrated LED lighting systems, energy-efficient HVAC
                      upgrades, and premium finishes throughout the 5,000 sq ft space. Our team worked nights and
                      weekends to minimize business disruption for this financial services client, completing the
                      project ahead of schedule and under budget.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`overflow-hidden bg-gray-900 border border-gray-800 hover-lift scale-in ${projectsAnimation.isVisible ? "visible" : ""}`}
                >
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1041.jpg-tkSFxZbOgO7bETW8hXu5yvJ33Z4uYI.jpeg"
                      alt="West Lake Hills luxury kitchen and dining renovation with open concept design by PS Premier Construction"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">West Lake Hills Kitchen & Dining Renovation</h3>
                    <p className="text-sm text-gray-300">
                      This fun and challenging West Lake Hills kitchen and dining renovation transformed a
                      compartmentalized 1990s layout into a stunning open-concept entertainment space. The homeowners
                      were thrilled with how we maintained the home's character while bringing in modern Austin design
                      elements.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`overflow-hidden bg-gray-900 border border-gray-800 hover-lift scale-in ${projectsAnimation.isVisible ? "visible" : ""}`}
                >
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1042.jpg-xBHjlrusoji0YNmH3i5hvfnDbvTvC0.jpeg"
                      alt="Tarrytown living room transformation with contemporary design and historic character by PS Premier Construction"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">Tarrytown Living Room Transformation</h3>
                    <p className="text-sm text-gray-300">
                      This unexpected Tarrytown project came with tight deadlines after water damage required immediate
                      remediation and renovation. Our team mobilized within 24 hours to help these Austin homeowners. We
                      completed this contemporary living space renovation in just 6 weeks, incorporating custom finishes
                      that honored the home's historic character while adding modern functionality.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`overflow-hidden bg-gray-900 border border-gray-800 hover-lift scale-in ${projectsAnimation.isVisible ? "visible" : ""}`}
                >
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8943.jpg-azFgxL2wEGdwJMjqF0EzV8StIP4DEn.jpeg"
                      alt="Rainey Street high-rise luxury kitchen renovation with panoramic views of Lady Bird Lake by PS Premier Construction"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white">Rainey Street High-Rise Kitchen</h3>
                    <p className="text-sm text-gray-300">
                      This luxury kitchen renovation in a Rainey Street high-rise condominium presented unique
                      challenges with building regulations and material delivery logistics. Working within the
                      constraints of a downtown Austin high-rise, we coordinated with building management to create a
                      stunning kitchen that maximizes the panoramic views of Lady Bird Lake while providing our client
                      with a chef-worthy cooking space.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Let's Create Something Amazing Together
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? A question? Or just want to chat about possibilities? We'd love to hear from
                  you! Reach out and let's start a conversation about bringing your vision to life.
                </p>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-brand-amber" />
                    <div>
                      <h3 className="font-semibold text-white">Give Us a Call</h3>
                      <p className="text-sm text-gray-300">337-565-7690 (We actually answer our phone!)</p>
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
                href="https://www.instagram.com/ps_premier_construction/"
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
