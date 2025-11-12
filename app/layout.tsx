import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ChatWidget } from "@/components/chat-widget"

export const metadata: Metadata = {
  title: "PS Premier Construction - Austin's Premier Construction Company",
  description:
    "Quality construction and remodeling services for residential and commercial projects in Austin, Texas. Specializing in luxury remodels, kitchen & bath renovations, and commercial transformations.",
  keywords:
    "construction, remodeling, Austin, Texas, luxury remodels, kitchen renovation, bathroom renovation, commercial construction, residential construction, home renovation",
  authors: [{ name: "PS Premier Construction" }],
  creator: "PS Premier Construction",
  publisher: "PS Premier Construction",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://pspremierconstruction.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "PS Premier Construction - Austin's Premier Construction Company",
    description:
      "Quality construction and remodeling services for residential and commercial projects in Austin, Texas.",
    url: "https://pspremierconstruction.com",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ps-premier-logo-gold.png",
        width: 1200,
        height: 630,
        alt: "PS Premier Construction Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PS Premier Construction - Austin's Premier Construction Company",
    description:
      "Quality construction and remodeling services for residential and commercial projects in Austin, Texas.",
    images: ["/images/ps-premier-logo-gold.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
