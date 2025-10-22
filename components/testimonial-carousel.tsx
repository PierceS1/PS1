"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  name: string
  location: string
  project: string
  quote: string
  rating: number
}

export function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      name: "Michael Rodriguez",
      location: "Austin, TX",
      project: "Whole-Home Luxury Remodel",
      quote:
        "PS Premier Construction transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Jennifer Chang",
      location: "Austin, TX",
      project: "Kitchen & Bath Renovation",
      quote:
        "We couldn't be happier with our kitchen and bathroom renovation. The design team understood our vision perfectly, and the craftsmanship is impeccable.",
      rating: 5,
    },
    {
      name: "David Wilson",
      location: "Cedar Park, TX",
      project: "Commercial Office Transformation",
      quote:
        "Our office space was completely transformed by PS Premier Construction. The premium upgrades have impressed our clients and created a more productive environment.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      location: "Austin, TX",
      project: "Short-Term Rental Luxe Package",
      quote:
        "After PS Premier Construction renovated our Airbnb property, our bookings and revenue increased dramatically. The luxury finishes have earned us consistent 5-star reviews.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="bg-gray-900 border-gray-800 text-white overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center mb-4">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="size-5 fill-brand-amber text-brand-amber" />
            ))}
          </div>
          <blockquote className="border-l-4 border-brand-red pl-4 italic mb-6 text-lg text-gray-300">
            &quot;{testimonials[currentIndex].quote}&quot;
          </blockquote>
          <div className="mt-4">
            <p className="font-semibold text-brand-amber">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-gray-300">{testimonials[currentIndex].location}</p>
            <p className="text-sm text-gray-300">{testimonials[currentIndex].project}</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-4 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="size-4" />
        </Button>
        <div className="flex gap-1 items-center">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`block size-2 rounded-full ${index === currentIndex ? "bg-brand-amber" : "bg-gray-600"}`}
              aria-hidden="true"
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
          aria-label="Next testimonial"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
