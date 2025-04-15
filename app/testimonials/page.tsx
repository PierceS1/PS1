"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { ImprovedHeader } from "@/components/improved-header"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { AnimatedCTAButton } from "@/components/animated-cta-button"
import { TestimonialsSchema } from "@/app/components/testimonials-schema"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      location: "Austin, TX",
      project: "Whole-Home Luxury Remodel",
      quote:
        "PS Premier Construction transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, responsive, and delivered on time and within budget.",
      rating: 5,
    },
    {
      name: "Jennifer Chang",
      location: "Austin, TX",
      project: "Kitchen & Bath Renovation",
      quote:
        "We couldn't be happier with our kitchen and bathroom renovation. The design team understood our vision perfectly, and the craftsmanship is impeccable. The smart home integration has made our daily routines so much more convenient.",
      rating: 5,
    },
    {
      name: "David Wilson",
      location: "Cedar Park, TX",
      project: "Commercial Office Transformation",
      quote:
        "Our office space was completely transformed by PS Premier Construction. The premium upgrades have impressed our clients and created a more productive environment for our team. The project was completed with minimal disruption to our business.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      location: "Austin, TX",
      project: "Short-Term Rental Luxe Package",
      quote:
        "After PS Premier Construction renovated our Airbnb property, our bookings and revenue increased dramatically. The luxury finishes and thoughtful design elements have earned us consistent 5-star reviews from guests.",
      rating: 5,
    },
    {
      name: "Robert Martinez",
      location: "Round Rock, TX",
      project: "Custom Home Build",
      quote:
        "Building our dream home with PS Premier Construction was a seamless experience from start to finish. Their team guided us through every decision and delivered a home that perfectly reflects our lifestyle and preferences.",
      rating: 5,
    },
    {
      name: "Emily Parker",
      location: "Austin, TX",
      project: "Interior Renovation",
      quote:
        "The interior renovation of our home has completely transformed how we live in our space. PS Premier Construction brought innovative ideas while respecting our vision. Their craftsmanship is unmatched in Austin.",
      rating: 5,
    },
    {
      name: "Thomas Wright",
      location: "Lakeway, TX",
      project: "Luxury Bathroom Remodel",
      quote:
        "Our bathroom remodel exceeded all expectations. The team at PS Premier Construction created a spa-like retreat in our home with high-end fixtures and impeccable tile work. It's become our favorite room in the house.",
      rating: 5,
    },
    {
      name: "Lisa Hernandez",
      location: "Austin, TX",
      project: "Commercial Retail Space",
      quote:
        "PS Premier Construction helped us create a retail space that perfectly represents our brand. Their understanding of commercial requirements while maintaining aesthetic appeal was impressive. Our customers constantly compliment the design.",
      rating: 5,
    },
    {
      name: "James Thompson",
      location: "Georgetown, TX",
      project: "Outdoor Living Space",
      quote:
        "Our backyard was transformed into an amazing outdoor living area with a kitchen, fireplace, and covered patio. PS Premier Construction's expertise in creating functional and beautiful outdoor spaces has allowed us to enjoy the Texas weather year-round.",
      rating: 5,
    },
    {
      name: "Sophia Garcia",
      location: "Austin, TX",
      project: "Home Addition",
      quote:
        "Adding square footage to our home seemed daunting, but PS Premier Construction made it stress-free. The new addition seamlessly integrates with our existing home, and the quality of construction is evident in every detail.",
      rating: 5,
    },
    {
      name: "Daniel Lee",
      location: "Pflugerville, TX",
      project: "Kitchen Renovation",
      quote:
        "Our kitchen renovation has completely changed how we entertain. PS Premier Construction created a space that's both functional for cooking and perfect for hosting. The custom cabinetry and island design receive compliments from everyone who visits.",
      rating: 5,
    },
    {
      name: "Olivia Williams",
      location: "Austin, TX",
      project: "Master Suite Remodel",
      quote:
        "The master suite remodel by PS Premier Construction gave us the retreat we've always wanted. From the custom closets to the luxury bathroom, every element was thoughtfully designed and expertly executed.",
      rating: 5,
    },
    {
      name: "Christopher Davis",
      location: "Bee Cave, TX",
      project: "Whole-Home Renovation",
      quote:
        "Renovating our entire home while living out of state could have been a nightmare, but PS Premier Construction's communication and project management made it seamless. The results are even better than we imagined.",
      rating: 5,
    },
    {
      name: "Amanda Miller",
      location: "Austin, TX",
      project: "Office Building Renovation",
      quote:
        "Our commercial property needed significant updates to attract premium tenants. PS Premier Construction delivered a modern, efficient space that leased quickly at rates exceeding our projections. The investment has already paid for itself.",
      rating: 5,
    },
    {
      name: "Jonathan Taylor",
      location: "Dripping Springs, TX",
      project: "Custom Home Build",
      quote:
        "Building our forever home with PS Premier Construction was the best decision we made. Their team's expertise, craftsmanship, and attention to detail created a home that perfectly balances luxury and comfort. We couldn't be happier.",
      rating: 5,
    },
  ]

  return (
    <>
      <TestimonialsSchema testimonials={testimonials} />

      <div className="flex min-h-screen flex-col bg-black">
        <ImprovedHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Client Testimonials</h1>
                  <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear what our clients in Austin and Central Texas have to say about their experience working with PS
                    Premier Construction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-gray-800 border border-gray-700 shadow-sm text-white overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <blockquote className="border-l-4 border-red-700 pl-4 italic mb-4 text-gray-300">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="mt-4">
                        <p className="font-semibold text-amber-500">{testimonial.name}</p>
                        <p className="text-sm text-gray-300">{testimonial.location}</p>
                        <p className="text-sm text-gray-300">{testimonial.project}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-16 bg-black text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">Ready to Start Your Project?</h2>
                  <p className="max-w-[600px] text-gray-300">
                    Join our satisfied clients and experience the PS Premier Construction difference.
                  </p>
                  <div className="pt-4">
                    <AnimatedCTAButton href="/#contact">Contact Us Today</AnimatedCTAButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-gray-800 bg-black py-6 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
            <div className="flex items-center">
              <div className="logo-blend max-w-[200px]">
                <div className="logo-background"></div>
                <Image
                  src="/images/ps-premier-logo-wide.png"
                  alt="PS Premier Construction Logo - Austin's Premier Construction Company"
                  width={200}
                  height={40}
                  className="h-8 w-auto logo-image"
                />
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 md:text-left">
              &copy; {new Date().getFullYear()} PS Premier Construction. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61574805621220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500"
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
                className="text-gray-400 hover:text-amber-500"
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
