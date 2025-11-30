"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function FeaturedProjectsTabs() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential")

  const residentialProjects = [
    {
      title: "West Lake Hills Kitchen Remodel",
      description: "Complete luxury kitchen transformation with custom cabinetry and premium finishes.",
      image: "/luxury-kitchen-remodel-white-cabinets-marble-count.jpg",
      location: "West Lake Hills",
    },
    {
      title: "Tarrytown Whole Home Renovation",
      description: "Historic home restored with modern amenities while preserving original character.",
      image: "/historic-home-renovation-austin-texas.jpg",
      location: "Tarrytown",
    },
    {
      title: "Barton Creek Custom Build",
      description: "Ground-up estate construction with Hill Country views and luxury finishes.",
      image: "/luxury-custom-home-hill-country-views.jpg",
      location: "Barton Creek",
    },
    {
      title: "Rollingwood Master Suite Addition",
      description: "Seamless home addition featuring spa-like bathroom and walk-in closet.",
      image: "/luxury-master-bathroom-spa-tile.jpg",
      location: "Rollingwood",
    },
  ]

  const commercialProjects = [
    {
      title: "Commercial Roofing Project",
      description: "Professional flat roof replacement with advanced waterproofing systems.",
      image: "/commercial-flat-roof.png",
      location: "Austin",
    },
    {
      title: "Office Tenant Improvement",
      description: "Complete build-out for modern office space with custom finishes.",
      image: "/modern-office-space-tenant-improvement.jpg",
      location: "Cedar Park",
    },
    {
      title: "Property Management Repairs",
      description: "Turnkey HOA repairs and maintenance for residential communities.",
      image: "/property-management-repairs-maintenance.jpg",
      location: "Central Texas",
    },
    {
      title: "Retail Space Renovation",
      description: "Complete interior renovation for high-end retail storefront.",
      image: "/retail-store-renovation-modern.jpg",
      location: "Austin",
    },
  ]

  const projects = activeTab === "residential" ? residentialProjects : commercialProjects

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mb-8">
            Every project tells a story. Here are a few of our favorites from around Austin.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all text-base ${
                activeTab === "residential"
                  ? "bg-brand-red text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Residential Highlights
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all text-base ${
                activeTab === "commercial"
                  ? "bg-brand-red text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              Commercial Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-brand-red">{project.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button
                  asChild
                  variant="link"
                  className="text-brand-red hover:text-brand-amber p-0 h-auto font-semibold"
                >
                  <Link href="#contact">
                    Request More Information <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-brand-red hover:bg-brand-amber text-white">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
