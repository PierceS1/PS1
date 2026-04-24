import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImprovedHeader } from "@/components/improved-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You — Remote Diesel Tuning",
  description: "Thanks for reaching out to Remote Diesel Tuning. We'll reply shortly with next steps.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ImprovedHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Thanks — we got it.</h1>
            <p className="text-gray-300 md:text-xl/relaxed">
              Your tune request has been received. We'll reply shortly with a quote and the next steps for your
              truck.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red-dark text-white">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t border-gray-800 bg-gray-900 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="font-bold">REMOTE DIESEL TUNING</div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Remote Diesel Tuning. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
