import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    template: "%s | PS Premier Construction",
    default: "PS Premier Construction - Austin's Premier Construction Company",
  },
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
        url: "https://pspremierconstruction.com/images/ps-premier-logo-wide.png",
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
    images: ["https://pspremierconstruction.com/images/ps-premier-logo-wide.png"],
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
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Enhanced Schema.org markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://pspremierconstruction.com",
              name: "PS Premier Construction",
              image: "https://pspremierconstruction.com/images/ps-premier-logo-wide.png",
              logo: "https://pspremierconstruction.com/images/ps-premier-logo.png",
              url: "https://pspremierconstruction.com",
              telephone: "337-565-7690",
              email: "ps@pspremierconstruction.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Austin",
                addressRegion: "TX",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.2672,
                longitude: -97.7431,
              },
              priceRange: "$$$$",
              description:
                "Quality construction and remodeling services for residential and commercial projects in Austin, Texas. Specializing in luxury remodels, kitchen & bath renovations, and commercial transformations.",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61574805621220",
                "https://www.instagram.com/ps_premier_construction/",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Construction Services",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Residential Construction",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Whole-Home Luxury Remodel",
                          description: "Full interior and exterior transformation",
                          estimatedCost: {
                            "@type": "MonetaryAmount",
                            currency: "USD",
                            minValue: 250000,
                            maxValue: 500000,
                          },
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Signature Kitchen & Bath",
                          description: "High-end finishes, smart home integration",
                          estimatedCost: {
                            "@type": "MonetaryAmount",
                            currency: "USD",
                            minValue: 75000,
                            maxValue: 150000,
                          },
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Short-Term Rental Luxe Package",
                          description: "Turn Airbnbs into high-end revenue machines",
                          estimatedCost: {
                            "@type": "MonetaryAmount",
                            currency: "USD",
                            minValue: 50000,
                            maxValue: 100000,
                          },
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Commercial Construction",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Commercial Office Transformation",
                          description: "Premium office upgrades for executives",
                          estimatedCost: {
                            "@type": "MonetaryAmount",
                            currency: "USD",
                            minValue: 200000,
                            maxValue: 500000,
                          },
                        },
                      },
                    ],
                  },
                ],
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 30.2672,
                  longitude: -97.7431,
                },
                geoRadius: "50 mi",
              },
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://pspremierconstruction.com/#contact",
                  inLanguage: "en-US",
                  actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
                },
                result: {
                  "@type": "Reservation",
                  name: "Construction Consultation",
                },
              },
            }),
          }}
        />

        {/* Canonical link */}
        <link rel="canonical" href="https://pspremierconstruction.com" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'