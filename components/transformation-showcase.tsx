"use client"

import { useState } from "react"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Define our transformation projects
const transformationProjects = [
  {
    id: 1,
    title: "Kitchen Renovation",
    description:
      "Complete transformation of an outdated kitchen into a modern, open-concept cooking and entertaining space.",
    location: "Tarrytown, Austin",
    beforeImage: "/dark-cabinet-kitchen-before.png",
    afterImage: "/sleek-island-kitchen.png",
    beforeAlt:
      "Outdated kitchen with dark cabinets and limited counter space before renovation by PS Premier Construction",
    afterAlt:
      "Modern luxury kitchen with custom island and open concept design after renovation by PS Premier Construction",
  },
  {
    id: 2,
    title: "Bathroom Remodel",
    description: "Luxury bathroom renovation featuring custom tile work, walk-in shower, and modern fixtures.",
    location: "West Lake Hills, Austin",
    beforeImage: "/vintage-bathroom-blues.png",
    afterImage: "/sleek-shower-spa.png",
    beforeAlt: "Outdated bathroom with old fixtures and limited space before remodel by PS Premier Construction",
    afterAlt:
      "Luxury modern bathroom with walk-in shower and custom tile work after remodel by PS Premier Construction",
  },
  {
    id: 3,
    title: "Living Room Transformation",
    description: "Complete redesign of a living space with new flooring, lighting, and custom built-ins.",
    location: "Downtown Austin",
    beforeImage: "/dated-living-room.png",
    afterImage: "/placeholder.svg?height=800&width=1200&query=modern+living+room+with+hardwood+floors",
    beforeAlt: "Outdated living room with carpet and old fixtures before transformation by PS Premier Construction",
    afterAlt:
      "Modern living room with hardwood floors and custom built-ins after transformation by PS Premier Construction",
  },
]

export function TransformationShowcase() {
  const [activeProject, setActiveProject] = useState(transformationProjects[0])
  const showcaseAnimation = useScrollAnimation()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
      <div ref={showcaseAnimation.ref} className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center fade-in ${showcaseAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Before & After Transformations</h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See the dramatic difference our work makes. Drag the slider to reveal the transformation.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 slide-in-left ${showcaseAnimation.isVisible ? "visible" : ""}`}>
            <BeforeAfterSlider
              beforeImage={activeProject.beforeImage}
              afterImage={activeProject.afterImage}
              beforeAlt={activeProject.beforeAlt}
              afterAlt={activeProject.afterAlt}
              className="h-[400px] md:h-[500px]"
            />

            <div className="mt-4 bg-gray-900 p-4 rounded-lg">
              <h3 className="text-xl font-bold">{activeProject.title}</h3>
              <p className="text-amber-500">{activeProject.location}</p>
              <p className="mt-2 text-gray-300">{activeProject.description}</p>
            </div>
          </div>

          <div className={`space-y-4 slide-in-right ${showcaseAnimation.isVisible ? "visible" : ""}`}>
            <h3 className="text-xl font-bold">Our Transformations</h3>
            <p className="text-gray-300">Select a project to see the before and after:</p>

            <div className="space-y-3 mt-4">
              {transformationProjects.map((project) => (
                <Card
                  key={project.id}
                  className={`bg-gray-900 border ${activeProject.id === project.id ? "border-amber-500" : "border-gray-800"} cursor-pointer hover:border-amber-500 transition-all`}
                  onClick={() => setActiveProject(project)}
                >
                  <CardContent className="p-4">
                    <h4 className="font-bold">{project.title}</h4>
                    <p className="text-sm text-gray-400">{project.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Ready to Transform Your Space?</h3>
              <p className="text-sm text-gray-300 mb-4">
                Let's discuss how we can create a similar transformation for your property.
              </p>
              <a
                href="#contact"
                className="block w-full py-2 px-4 bg-red-700 hover:bg-red-800 text-white text-center rounded-md transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
