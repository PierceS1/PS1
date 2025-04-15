import type { Metadata } from "next"

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
  openGraph: {
    title: "PS Premier Construction - Austin's Premier Construction Company",
    description:
      "Quality construction and remodeling services for residential and commercial projects in Austin, Texas.",
    url: "https://pspremierconstruction.com",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PS Premier Construction - Austin's Premier Construction Company",
    description:
      "Quality construction and remodeling services for residential and commercial projects in Austin, Texas.",
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
