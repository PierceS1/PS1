import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { ImprovedHeader } from "@/components/improved-header"
import { StickyContactButton } from "@/components/sticky-contact-button"

export const metadata = {
  title: "Construction & Remodeling Blog | PS Premier Construction Austin",
  description:
    "Expert insights on home remodeling, construction trends, and project planning in Austin, Texas. Get professional advice from PS Premier Construction.",
}

export default function BlogPage() {
  const posts = [
    {
      slug: "kitchen-remodeling-cost-guide-austin",
      title: "Kitchen Remodeling Cost Guide for Austin Homeowners",
      excerpt:
        "Planning a kitchen remodel in Austin? Here's what you need to know about costs, timelines, and getting the most value from your investment.",
      date: "November 8, 2025",
      readTime: "8 min read",
      category: "Kitchen Remodeling",
    },
    {
      slug: "foundation-repair-signs-austin",
      title: "5 Signs Your Austin Home Needs Foundation Repair",
      excerpt:
        "Central Texas soil conditions can wreak havoc on your foundation. Learn to spot the warning signs before minor issues become major problems.",
      date: "November 5, 2025",
      readTime: "6 min read",
      category: "Home Maintenance",
    },
    {
      slug: "choosing-contractor-west-lake-hills",
      title: "How to Choose the Right Contractor in West Lake Hills",
      excerpt:
        "Not all contractors are created equal. Here's what West Lake Hills homeowners should look for when selecting a construction partner.",
      date: "November 1, 2025",
      readTime: "7 min read",
      category: "Contractor Tips",
    },
    {
      slug: "bathroom-remodel-roi-austin",
      title: "Bathroom Remodel ROI: What Austin Homeowners Need to Know",
      excerpt:
        "A bathroom remodel can increase your home's value significantly. Learn which upgrades offer the best return on investment in the Austin market.",
      date: "October 28, 2025",
      readTime: "9 min read",
      category: "Bathroom Remodeling",
    },
    {
      slug: "commercial-tenant-improvement-guide",
      title: "Commercial Tenant Improvement: A Complete Guide for Austin Property Owners",
      excerpt:
        "Maximizing your commercial property's value starts with smart tenant improvements. Here's how to plan, budget, and execute successful TI projects.",
      date: "October 25, 2025",
      readTime: "10 min read",
      category: "Commercial Construction",
    },
    {
      slug: "austin-building-permits-guide",
      title: "Navigating Austin Building Permits: What You Need to Know",
      excerpt:
        "Austin's permitting process can be complex. This guide walks you through permit requirements, timelines, and how to avoid common delays.",
      date: "October 20, 2025",
      readTime: "11 min read",
      category: "Permits & Planning",
    },
  ]

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <ImprovedHeader />

        <main className="flex-1 bg-gray-950">
          {/* Hero Section */}
          <section className="w-full py-16 md:py-24 bg-black text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                  Construction Insights & Expert Advice
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Real answers from real builders. Get practical advice on remodeling, construction, and home
                  improvement projects in Austin and Central Texas.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Grid */}
          <section className="w-full py-12 md:py-24 bg-gray-950 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="bg-gray-900 border-gray-800 hover:border-brand-amber transition-all duration-300 h-full overflow-hidden group">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <span className="inline-block bg-brand-red px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-amber transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center text-brand-amber font-semibold group-hover:gap-2 transition-all">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-16 bg-gray-900 text-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-300 mb-8">
                  Have questions about your upcoming remodel or construction project? Let's discuss how we can bring
                  your vision to life.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-5 w-5" />
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
