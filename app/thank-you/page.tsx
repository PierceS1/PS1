import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import type { Metadata } from "next"
import { StickyContactButton } from "@/components/sticky-contact-button"

export const metadata: Metadata = {
  title: "Thank You - PS Premier Construction",
  description: "Thank you for contacting PS Premier Construction. We'll be in touch with you shortly.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  // Update the navLinks array to remove the blog link
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projects" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="container w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="py-3">
              <Link href="/" className="block">
                <div className="logo-blend">
                  <Image
                    src="/images/ps-premier-logo-wide.png"
                    alt="PS Premier Construction Logo - Austin's Premier Construction Company"
                    width={400}
                    height={80}
                    className="h-12 w-auto"
                    priority
                  />
                </div>
                <span className="sr-only">PS Premier Construction</span>
              </Link>
            </div>
            <div className="flex w-full justify-end items-center py-2">
              <nav className="hidden md:flex gap-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`text-sm font-medium ${
                      link.isActive ? "text-brand-red" : "text-gray-700"
                    } transition-colors hover:text-brand-amber`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center md:ml-6">
                <MobileMenu links={navLinks} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Thank You!</h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                Your message has been received. We appreciate your interest in PS Premier Construction and will be in
                touch with you shortly.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red-dark text-white">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-gray-200 bg-white py-6 text-gray-900">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex items-center">
            <Image
              src="/images/ps-premier-logo-wide.png"
              alt="PS Premier Construction Logo - Austin's Premier Construction Company"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-center text-sm text-gray-600 md:text-left">
            &copy; {new Date().getFullYear()} PS Premier Construction. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61574805621220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-red"
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
                className="size-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pierce-speyrer-b60115195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-red"
              aria-label="Visit Pierce Speyrer's LinkedIn profile"
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
                className="size-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/pspremierconstruction/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-red"
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
                className="size-5"
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
  )
}
