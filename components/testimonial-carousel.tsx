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
  keyword: string
}

export function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      name: "Michael and Jennifer Thompson",
      location: "West Lake Hills, TX",
      project: "Kitchen Remodel",
      quote:
        "We've lived in this house for 15 years and always dreamed of updating our kitchen. Pierce and his team made it happen without the stress we were expecting. They showed up every day on time, kept everything clean, and when we had questions, they actually picked up the phone. Our kitchen feels brand new, and honestly, we're cooking at home way more now because it's just so nice to be in there.",
      rating: 5,
      keyword: "Kitchen Remodel",
    },
    {
      name: "David Chen",
      location: "Tarrytown, TX",
      project: "Bathroom Renovation",
      quote:
        "My wife had been talking about redoing our master bathroom for years. I'll admit I was nervous about the whole process, but PS Premier made it easy. The shower alone is worth it - heated floors, rain head, the works. They finished in about three weeks, and yeah, it wasn't cheap, but you can tell they didn't cut any corners. Really happy we went with them.",
      rating: 5,
      keyword: "Bathroom Renovation",
    },
    {
      name: "Sarah Martinez",
      location: "Barton Creek, TX",
      project: "Home Addition",
      quote:
        "When baby number three was on the way, we knew we needed more space but didn't want to move. Pierce walked us through adding a second story, and I'm so glad we did it. The new master suite is incredible, and they managed to match the original house perfectly. My neighbors didn't even realize we'd done work until they came inside. That's attention to detail.",
      rating: 5,
      keyword: "Home Addition",
    },
    {
      name: "Robert and Linda Hayes",
      location: "Rollingwood, TX",
      project: "Custom Home Build",
      quote:
        "Building a custom home was always our retirement dream. We interviewed five builders, and Pierce was the only one who really listened to what we wanted. He helped us find the perfect lot, worked with our architect, and kept us in the loop the whole time. It took about 11 months, but now we're living in our dream home. Worth every penny and every minute of the process.",
      rating: 5,
      keyword: "Custom Home",
    },
    {
      name: "Amanda Rodriguez",
      location: "Austin, TX",
      project: "Whole Home Remodel",
      quote:
        "We bought a fixer-upper in '78704 and basically gutted the whole thing. New floors, new kitchen, new bathrooms, updated electrical - you name it. PS Premier coordinated everything, and surprisingly, it didn't feel as chaotic as I thought it would. They had different crews coming through for different things, but it all just worked. Four months later, our house went from dated to gorgeous. Friends keep asking who did the work.",
      rating: 5,
      keyword: "Whole Home Remodel",
    },
    {
      name: "James Wilson",
      location: "Cedar Park, TX",
      project: "Outdoor Living Space",
      quote:
        "We wanted a covered patio and outdoor kitchen for entertaining, and Pierce's team absolutely nailed it. They built this gorgeous cedar pergola, installed a built-in grill and fridge, added string lights, the whole nine yards. We've hosted three parties already this summer, and everyone wants to know who built it. Best investment we've made in our home, hands down.",
      rating: 5,
      keyword: "Outdoor Kitchen",
    },
    {
      name: "Christine Park",
      location: "Davenport Ranch, TX",
      project: "Basement Finishing",
      quote:
        "Our basement was just wasted space - concrete floors, exposed pipes, boxes everywhere. Now it's a full apartment with a bedroom, bathroom, and kitchenette for my mom. She moved in last month and loves having her own space while still being close to the grandkids. The team worked around our schedule and kept the dust contained. Really professional crew.",
      rating: 5,
      keyword: "Basement Finish",
    },
    {
      name: "Marcus Johnson",
      location: "Austin, TX",
      project: "Commercial Renovation",
      quote:
        "I own a small office building downtown, and the tenant spaces were looking pretty rough. PS Premier came in and completely modernized everything - new flooring, modern lighting, updated HVAC, fresh paint throughout. Took about six weeks, and we had new tenants signed within a month of finishing. The ROI on this project was better than I expected.",
      rating: 5,
      keyword: "Commercial Renovation",
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
