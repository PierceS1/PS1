import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PS Premier Construction - Luxury Remodels & Residential Development in Austin",
  description:
    "Specialist in luxury kitchen & bathroom remodels, full-home renovations, and custom home builds in Austin. Serving West Lake Hills, Tarrytown, Barton Creek, and Central Austin with high-end residential construction.",
  keywords:
    "luxury remodeling Austin, custom home builder Austin, high-end kitchen remodel, luxury bathroom renovation, residential development Austin, West Lake Hills construction, Tarrytown remodeling, Barton Creek custom homes, Austin home renovation",
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
    title: "PS Premier Construction - Luxury Remodels & Residential Development in Austin",
    description:
      "Specialist in luxury remodels and residential development. Serving Austin's premium neighborhoods with high-end construction services.",
    url: "https://pspremierconstruction.com",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PS Premier Construction - Luxury Remodels & Residential Development in Austin",
    description:
      "Specialist in luxury remodels and residential development. Serving Austin's premium neighborhoods with high-end construction services.",
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
}
