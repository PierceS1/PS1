import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { ImprovedHeader } from "@/components/improved-header"
import { StickyContactButton } from "@/components/sticky-contact-button"
import { notFound } from "next/navigation"

const blogPosts = {
  "kitchen-remodeling-cost-guide-austin": {
    title: "Kitchen Remodeling Cost Guide for Austin Homeowners",
    date: "November 8, 2025",
    readTime: "8 min read",
    category: "Kitchen Remodeling",
    content: `
      <p>If you're considering a kitchen remodel in Austin, you're probably wondering: "What's this going to cost?" It's the first question we hear from nearly every homeowner, and for good reason. Kitchen remodels represent one of the largest investments you'll make in your home.</p>

      <p>The truth is, kitchen remodeling costs in Austin can range from $25,000 for a basic refresh to $150,000+ for a luxury transformation. That's a wide range, and the final number depends on factors specific to your project and goals.</p>

      <h2>What Drives Kitchen Remodeling Costs in Austin?</h2>

      <h3>1. Size and Layout Changes</h3>
      <p>A simple cosmetic update keeping the same footprint costs significantly less than moving walls or expanding square footage. Structural changes require permits, engineering, and more labor—all of which add up quickly.</p>

      <h3>2. Cabinetry Selection</h3>
      <p>Cabinets typically consume 30-40% of your kitchen budget. Stock cabinets from big-box stores start around $3,000-$5,000 for an average kitchen. Semi-custom options range from $8,000-$20,000. Custom cabinetry? Expect $25,000-$60,000 or more.</p>

      <h3>3. Countertop Materials</h3>
      <p>Laminate countertops might run $1,500-$3,000. Granite or quartz? Plan for $4,000-$10,000. Exotic natural stone or premium engineered surfaces can exceed $15,000.</p>

      <h3>4. Appliances</h3>
      <p>A basic appliance package (refrigerator, range, dishwasher, microwave) starts around $3,000-$5,000. Mid-range brands like KitchenAid or Bosch run $7,000-$12,000. Professional-grade Viking or Wolf? Budget $15,000-$30,000+.</p>

      <h3>5. Flooring</h3>
      <p>Vinyl plank flooring costs $2,000-$4,000 for an average kitchen. Tile runs $3,000-$7,000. Hardwood flooring? Expect $5,000-$10,000 or more depending on species and installation complexity.</p>

      <h2>Real Austin Kitchen Remodel Examples</h2>

      <p><strong>Budget Refresh ($25,000-$40,000):</strong> New paint, updated hardware, countertop replacement, new appliances, lighting upgrades. Layout stays the same.</p>

      <p><strong>Mid-Range Transformation ($50,000-$85,000):</strong> New cabinets, quartz countertops, tile backsplash, mid-range appliances, new flooring, updated plumbing and electrical, recessed lighting.</p>

      <p><strong>Luxury Renovation ($100,000-$150,000+):</strong> Custom cabinetry, natural stone countertops, high-end appliances, structural changes, custom tile work, premium fixtures, expanded square footage.</p>

      <h2>How to Get the Most Value From Your Kitchen Remodel</h2>

      <ol>
        <li><strong>Invest in Quality Cabinets:</strong> They're the backbone of your kitchen and make the biggest visual impact.</li>
        <li><strong>Don't Skimp on Labor:</strong> Poor installation ruins even the best materials. Work with experienced trades.</li>
        <li><strong>Plan for Contingencies:</strong> Add 10-15% to your budget for unexpected issues—especially in older homes.</li>
        <li><strong>Focus on Function:</strong> Pretty doesn't matter if your kitchen doesn't work for how you actually cook and live.</li>
      </ol>

      <h2>Timeline Expectations</h2>

      <p>Most kitchen remodels in Austin take 6-12 weeks from start to finish. Factors that extend timelines include custom orders, permit delays, structural changes, and material availability.</p>

      <p>The best approach? Start with a clear vision of what you want, get multiple detailed estimates, and work with a contractor who has a proven track record with kitchens similar to yours.</p>

      <p>We've completed over 200 projects in Austin, and every successful kitchen remodel starts the same way: honest conversations about budget, realistic expectations, and a detailed plan. Let's build yours together.</p>
    `,
  },
  "foundation-repair-signs-austin": {
    title: "5 Signs Your Austin Home Needs Foundation Repair",
    date: "November 5, 2025",
    readTime: "6 min read",
    category: "Home Maintenance",
    content: `
      <p>Central Texas sits on expansive clay soil that swells when wet and shrinks when dry. This constant movement puts tremendous stress on your foundation. Catching problems early can save you tens of thousands of dollars and prevent structural damage throughout your home.</p>

      <h2>1. Cracks in Walls, Floors, or Ceilings</h2>

      <p><strong>What to Look For:</strong> Diagonal cracks extending from door frames or windows. Cracks wider than 1/4 inch. Cracks that continue from interior walls to exterior brick.</p>

      <p><strong>Why It Matters:</strong> Small hairline cracks from normal settling are common. But progressive cracks that widen over time signal foundation movement. Diagonal cracks often indicate differential settlement where one part of your foundation is sinking faster than another.</p>

      <h2>2. Doors and Windows That Stick or Won't Close</h2>

      <p><strong>What to Look For:</strong> Doors that suddenly won't latch. Windows that bind when opening or closing. Gaps between door frames and walls.</p>

      <p><strong>Why It Matters:</strong> As your foundation shifts, it throws your entire house out of level. Door and window frames are precisely measured—even small foundation movements create noticeable binding or gaps.</p>

      <h2>3. Uneven or Sloping Floors</h2>

      <p><strong>What to Look For:</strong> Floors that visibly slope toward one area. Gaps between baseboards and floors. Marbles or balls rolling to one side of a room.</p>

      <p><strong>Why It Matters:</strong> Floor slopes exceeding 1-2 inches over 20 feet indicate significant foundation settlement. This doesn't always mean immediate danger, but it requires professional assessment.</p>

      <h2>4. Separation Between Walls and Ceiling or Floor</h2>

      <p><strong>What to Look For:</strong> Gaps where walls meet ceilings. Baseboards pulling away from walls. Crown molding with visible separation.</p>

      <p><strong>Why It Matters:</strong> These gaps indicate your home's frame is moving independently from the foundation. This type of separation often precedes more serious structural issues.</p>

      <h2>5. Exterior Warning Signs</h2>

      <p><strong>What to Look For:</strong> Cracks in exterior brick veneer. Separation between walls and chimney. Gaps between siding boards. Water pooling near the foundation.</p>

      <p><strong>Why It Matters:</strong> Exterior signs are often the earliest warning of foundation problems. Poor drainage accelerates foundation issues by causing soil expansion and contraction cycles.</p>

      <h2>What Causes Foundation Problems in Austin?</h2>

      <p>Our expansive clay soils are the primary culprit. During dry periods, soil shrinks and pulls away from your foundation. When rain returns, soil swells and pushes against foundation walls. This constant cycle stresses concrete and creates movement.</p>

      <p>Other contributing factors include: poor drainage around your home, plumbing leaks saturating soil, large trees with aggressive root systems pulling moisture from soil, and inadequate soil preparation during original construction.</p>

      <h2>When to Call a Professional</h2>

      <p>If you notice multiple signs from this list, schedule a professional foundation inspection immediately. Most foundation repair companies in Austin offer free inspections.</p>

      <p>Small problems caught early often require simple solutions like improving drainage or minor crack repair. Waiting allows minor issues to become major structural problems requiring expensive pier installation or full foundation replacement.</p>

      <p>Don't let foundation issues compromise your home's value and safety. We work with Austin's most trusted foundation specialists and can coordinate comprehensive repairs that address both structural and cosmetic damage.</p>
    `,
  },
  "choosing-contractor-west-lake-hills": {
    title: "How to Choose the Right Contractor in West Lake Hills",
    date: "November 1, 2025",
    readTime: "7 min read",
    category: "Contractor Tips",
    content: `
      <p>Choosing the wrong contractor can turn your dream project into a nightmare. We've seen homeowners in West Lake Hills lose tens of thousands of dollars to contractors who disappeared mid-project, delivered substandard work, or exceeded budgets by 50% or more.</p>

      <p>Here's what West Lake Hills homeowners should look for when selecting a construction partner.</p>

      <h2>1. Verify Their License and Insurance</h2>

      <p><strong>What to Ask For:</strong> Current general contractor license number. Certificate of insurance showing general liability ($1M minimum) and workers' compensation coverage.</p>

      <p><strong>Why It Matters:</strong> Unlicensed contractors can't legally pull permits. If someone gets hurt on your property and the contractor lacks workers' comp, you could be liable. General liability protects you if they damage your home.</p>

      <p><strong>Red Flag:</strong> Any contractor who hesitates to provide proof of licensing and insurance or says "we're covered under the builder's policy."</p>

      <h2>2. Check Their Track Record in West Lake Hills</h2>

      <p><strong>What to Look For:</strong> Completed projects in West Lake Hills specifically. References from neighbors. Familiarity with local building codes and HOA requirements.</p>

      <p><strong>Why It Matters:</strong> West Lake Hills has specific architectural standards and permitting requirements. Contractors experienced in the area navigate these efficiently. They also understand local soil conditions and construction challenges unique to hillside properties.</p>

      <p><strong>Smart Move:</strong> Ask to visit completed projects in the area. Walk through and talk to homeowners about their experience.</p>

      <h2>3. Demand Detailed, Written Estimates</h2>

      <p><strong>What to Expect:</strong> Line-item pricing breaking down materials, labor, permits, and contingencies. Clear scope of work defining exactly what's included. Timeline with milestones. Payment schedule tied to completed work.</p>

      <p><strong>Why It Matters:</strong> Vague estimates lead to disputes. "Around $80,000" isn't a real number. Detailed estimates force contractors to think through your project completely and give you a clear picture of where money goes.</p>

      <p><strong>Red Flag:</strong> Contractors who provide estimates without seeing your property or require large upfront deposits (more than 10-15% is suspicious).</p>

      <h2>4. Evaluate Their Communication Style</h2>

      <p><strong>What to Assess:</strong> Response time to your calls and emails. Willingness to explain their recommendations. Patience with your questions. Follow-through on promised information.</p>

      <p><strong>Why It Matters:</strong> How contractors communicate during the sales process predicts how they'll communicate during construction. Poor communication leads to mistakes, misunderstandings, and frustration.</p>

      <p><strong>Trust Your Gut:</strong> If they're hard to reach or dismissive now, it gets worse after they have your money.</p>

      <h2>5. Review Their Contract Thoroughly</h2>

      <p><strong>Must-Have Contract Elements:</strong> Complete scope of work. Total cost and payment schedule. Start and completion dates. Change order process. Warranty information. Cleanup and disposal responsibilities. Dispute resolution process.</p>

      <p><strong>Why It Matters:</strong> Your contract is your protection. Without clear terms in writing, you have no recourse when disputes arise.</p>

      <p><strong>Pro Tip:</strong> Have an attorney review contracts for major projects ($100K+). The few hundred dollars spent on legal review can save you thousands in disputes.</p>

      <h2>6. Ask the Right Questions</h2>

      <ul>
        <li>How many projects are you currently managing?</li>
        <li>Who will be my primary point of contact?</li>
        <li>What subcontractors do you use? (Ask for their info and call them directly)</li>
        <li>How do you handle change orders?</li>
        <li>What warranties do you provide on labor and materials?</li>
        <li>What's your typical payment schedule?</li>
        <li>How do you handle permits and inspections?</li>
      </ul>

      <h2>Warning Signs to Walk Away</h2>

      <ul>
        <li>Pressure to sign immediately or "special pricing expires today"</li>
        <li>No physical business address or professional website</li>
        <li>Request for full payment upfront</li>
        <li>Unwillingness to provide references</li>
        <li>Negative reviews citing similar issues (money disputes, incomplete work, poor communication)</li>
        <li>Can't provide proof of insurance</li>
      </ul>

      <h2>Final Thoughts</h2>

      <p>The right contractor doesn't just build—they communicate, plan, problem-solve, and deliver. They treat your home with respect, show up when promised, and stand behind their work.</p>

      <p>At PS Premier Construction, we've built our reputation one West Lake Hills project at a time. We know the area, understand the expectations, and deliver the craftsmanship your home deserves.</p>

      <p>Let's talk about your project. No pressure, no gimmicks—just honest conversation about what it takes to do it right.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Blog Post Not Found | PS Premier Construction",
    }
  }

  return {
    title: `${post.title} | PS Premier Construction Blog`,
    description: post.content.substring(0, 155),
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <ImprovedHeader />

        <main className="flex-1 bg-gray-950">
          {/* Hero Section */}
          <section className="w-full py-16 bg-black text-white">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-amber hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <div className="mb-6">
                <span className="inline-block bg-brand-red px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="w-full py-12 bg-gray-950 text-white">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <article
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Social Share */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">Share this article:</p>
                  <button className="flex items-center gap-2 text-brand-amber hover:text-white transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span className="font-semibold">Share</span>
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can bring your vision to life with quality craftsmanship and clear communication.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-gray-800 bg-black py-6 text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} PS Premier Construction. All rights reserved.
            </p>
            <Link
              href="https://www.google.com/search?client=mobilesearchapp&sca_esv=8a5138757e73c890&bih=820&biw=402&channel=iss&cs=1&hl=en&rlz=1MDAPLA_enUS1013US1013&v=393.0.825685754&kgmid=/g/11x5kcfr2r&q=PS+Premier+Construction&shndl=30&shem=bdse,shrtsdl&source=sh/x/loc/hdr/m1/5&kgs=38ded009b8beeab0&utm_source=bdse,shrtsdl,sh/x/loc/hdr/m1/5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-amber hover:text-white transition-colors"
            >
              Find Us on Google
            </Link>
          </div>
        </footer>

        <StickyContactButton />
      </div>
    </>
  )
}
