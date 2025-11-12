import { type NextRequest, NextResponse } from "next/server"

const KNOWLEDGE_BASE = {
  services:
    "We offer kitchen & bathroom remodeling, custom renovations, painting, roofing, flooring, decks, carpentry, and foundation repair. What type of project are you interested in?",
  pricing:
    "Project costs vary based on size and materials. Most kitchen remodels range from $25k-$100k+, bathrooms $10k-$40k, and painting $3k-$15k. We offer free estimates - would you like to schedule one?",
  timeline:
    "Timeline depends on project scope. Most bathroom remodels take 2-4 weeks, kitchens 4-8 weeks, and full home renovations 2-4 months. We provide detailed schedules with every estimate.",
  areas:
    "We serve West Lake Hills, Tarrytown, Barton Creek, Rollingwood, Davenport Ranch, Cedar Park, and the greater Austin area. We'd love to work on your project!",
  contact:
    "Call us at (512) 968-0169 or email info@pspremierconstruction.com. We respond within 24 hours and offer free consultations!",
  estimate:
    "Great! We offer free, no-obligation estimates. Our owner Pierce Speyrer personally reviews every project. Call (512) 968-0169 or share your contact info and we'll reach out within 24 hours.",
  experience:
    "PS Premier Construction has 10+ years of experience in Austin. We're licensed, insured, and specialize in high-quality craftsmanship for both residential and commercial projects.",
  process:
    "Our process: 1) Free consultation & estimate, 2) Design & planning, 3) Scheduling & materials, 4) Professional construction, 5) Final walkthrough. We communicate every step of the way!",
}

function findBestResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Check for specific keywords
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
    return KNOWLEDGE_BASE.pricing
  }
  if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("what do you do") ||
    lowerMessage.includes("what can you")
  ) {
    return KNOWLEDGE_BASE.services
  }
  if (lowerMessage.includes("how long") || lowerMessage.includes("timeline") || lowerMessage.includes("time")) {
    return KNOWLEDGE_BASE.timeline
  }
  if (lowerMessage.includes("area") || lowerMessage.includes("location") || lowerMessage.includes("where")) {
    return KNOWLEDGE_BASE.areas
  }
  if (lowerMessage.includes("estimate") || lowerMessage.includes("quote") || lowerMessage.includes("consultation")) {
    return KNOWLEDGE_BASE.estimate
  }
  if (
    lowerMessage.includes("experience") ||
    lowerMessage.includes("how long have you") ||
    lowerMessage.includes("years")
  ) {
    return KNOWLEDGE_BASE.experience
  }
  if (lowerMessage.includes("process") || lowerMessage.includes("how does it work") || lowerMessage.includes("steps")) {
    return KNOWLEDGE_BASE.process
  }
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("call") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("reach")
  ) {
    return KNOWLEDGE_BASE.contact
  }

  // Default response
  return "I'd be happy to help! I can answer questions about our services, pricing, timelines, service areas, or schedule a free estimate. What would you like to know?"
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    // Get the last user message
    const lastMessage = messages[messages.length - 1]

    if (!lastMessage || lastMessage.role !== "user") {
      throw new Error("Invalid message format")
    }

    const response = findBestResponse(lastMessage.content)

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json(
      {
        message:
          "I'm having trouble right now. Please call us at (512) 968-0169 or email info@pspremierconstruction.com for immediate assistance.",
      },
      { status: 500 },
    )
  }
}
