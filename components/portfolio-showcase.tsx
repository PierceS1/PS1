"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortfolioProject {
  id: number
  title: string
  location: string
  description: string
  beforeImage: string
  duringImage: string
  afterImage: string
}

const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "West Lake Hills Kitchen Transformation",
    location: "West Lake Hills, TX",
    description:
      "Complete kitchen renovation featuring custom cabinetry, quartz countertops, and designer lighting. Transformed outdated 1990s kitchen into modern chef's paradise.",
    beforeImage: "/dark-cabinet-kitchen-before.png",
    duringImage: "/kitchen-renovation.png",
    afterImage: "/sleek-island-kitchen.png",
  },
  {
    id: 2,
    title: "Tarrytown Luxury Bathroom Remodel",
    location: "Tarrytown, Austin",
    description:
      "Spa-inspired bathroom renovation with walk-in shower, heated floors, and premium fixtures. Created a relaxing retreat for our clients.",
    beforeImage: "/vintage-bathroom-blues.png",
    duringImage: "/bathroom-renovation.png",
    afterImage: "/sleek-shower-spa.png",
  },
  {
    id: 3,
    title: "Downtown Austin Office Remodel",
    location: "Downtown Austin",
    description:
      "Commercial office transformation with custom ceiling design, LED lighting, and modern finishes. Completed ahead of schedule with minimal business disruption.",
    beforeImage: "/dated-living-room.png",
    duringImage: "/commercial-office-renovation-progress.jpg",
    afterImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9848.jpg-V5Z95SSD8QHBoBgDM9y9PDB4PuIu5H.jpeg",
  },
]

export function PortfolioShowcase() {
  const [activeProject, setActiveProject] = useState(0)
  const [activePhase, setActivePhase] = useState<"before" | "during" | "after">("before")

  const currentProject = projects[activeProject]

  const getActiveImage = () => {
    switch (activePhase) {
      case "before":
        return currentProject.beforeImage
      case "during":
        return currentProject.duringImage
      case "after":
        return currentProject.afterImage
    }
  }

  const handlePrev = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    setActivePhase("before")
  }

  const handleNext = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    setActivePhase("before")
  }

  return (
    <section className="w-full py-12 md:py-24 bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Work: Before, During & After</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See the transformation process from start to finish. Quality craftsmanship and attention to detail in every
            project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Image Display */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
              <Image
                src={getActiveImage() || "/placeholder.svg"}
                alt={`${currentProject.title} - ${activePhase} phase`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Phase Selector */}
            <div className="flex gap-2 justify-center">
              <Button
                variant={activePhase === "before" ? "default" : "outline"}
                onClick={() => setActivePhase("before")}
                className={
                  activePhase === "before"
                    ? "bg-brand-red hover:bg-brand-red-dark"
                    : "border-gray-700 hover:bg-gray-800"
                }
              >
                Before
              </Button>
              <Button
                variant={activePhase === "during" ? "default" : "outline"}
                onClick={() => setActivePhase("during")}
                className={
                  activePhase === "during"
                    ? "bg-brand-red hover:bg-brand-red-dark"
                    : "border-gray-700 hover:bg-gray-800"
                }
              >
                During
              </Button>
              <Button
                variant={activePhase === "after" ? "default" : "outline"}
                onClick={() => setActivePhase("after")}
                className={
                  activePhase === "after" ? "bg-brand-red hover:bg-brand-red-dark" : "border-gray-700 hover:bg-gray-800"
                }
              >
                After
              </Button>
            </div>

            {/* Project Info */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                <p className="text-brand-amber mb-3">{currentProject.location}</p>
                <p className="text-gray-300">{currentProject.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Project List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all ${
                  activeProject === index
                    ? "bg-gray-800 border-brand-amber"
                    : "bg-gray-900 border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => {
                  setActiveProject(index)
                  setActivePhase("before")
                }}
              >
                <CardContent className="p-4">
                  <h4 className="font-bold mb-1">{project.title}</h4>
                  <p className="text-sm text-gray-400">{project.location}</p>
                </CardContent>
              </Card>
            ))}

            {/* Navigation Arrows */}
            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="flex-1 border-gray-700 hover:bg-gray-800 bg-transparent"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="flex-1 border-gray-700 hover:bg-gray-800 bg-transparent"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
