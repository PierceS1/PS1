import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Remote Diesel Tuning — Custom ECU Tuning for Cummins, Powerstroke & Duramax",
  description:
    "Custom ECU calibrations for diesel trucks, shipped nationwide. Performance and economy tunes for Cummins, Powerstroke, and Duramax built by experienced diesel calibrators.",
  keywords:
    "remote diesel tuning, ECU tuning, custom diesel tunes, Cummins tuning, Powerstroke tuning, Duramax tuning, diesel performance, mail-in tuning, diesel calibration",
  authors: [{ name: "Remote Diesel Tuning" }],
  creator: "Remote Diesel Tuning",
  publisher: "Remote Diesel Tuning",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.remotedieseltuning.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Remote Diesel Tuning — Custom ECU Tuning for Cummins, Powerstroke & Duramax",
    description:
      "Custom ECU calibrations for diesel trucks, shipped nationwide. Dyno-proven performance and economy tunes.",
    url: "https://www.remotedieseltuning.com",
    siteName: "Remote Diesel Tuning",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Diesel Tuning — Custom ECU Tuning for Cummins, Powerstroke & Duramax",
    description:
      "Custom ECU calibrations for diesel trucks, shipped nationwide. Dyno-proven performance and economy tunes.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
