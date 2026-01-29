import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ChatWidget } from "@/components/chat-widget"
import Script from "next/script"
import { Cormorant_Garamond, Inter } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PS Premier Construction - Luxury Remodeling & Custom Builds in Austin",
  description:
    "Luxury residential remodeling and custom home building in Austin's premier neighborhoods. Specializing in West Lake Hills, Tarrytown, and Barton Creek. From kitchen and bath renovations to full-home transformations.",
  keywords:
    "luxury remodeling Austin, custom home builder Austin, West Lake Hills contractor, Tarrytown renovation, Barton Creek construction, high-end kitchen remodel, luxury bathroom renovation, residential development Austin",
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
    title: "PS Premier Construction - Luxury Remodeling & Custom Builds in Austin",
    description: "Luxury residential remodeling and custom home building in Austin's premier neighborhoods.",
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
    title: "PS Premier Construction - Luxury Remodeling & Custom Builds in Austin",
    description: "Luxury residential remodeling and custom home building in Austin's premier neighborhoods.",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <head>
        <Script id="tealium-utag-data" strategy="beforeInteractive">
          {`var utag_data = {};`}
        </Script>
        <Script id="tealium-utag" strategy="afterInteractive">
          {`
            (function(a,b,c,d){
              a='https://tags.tiqcdn.com/utag/marketingcenter/common/prod/utag.js';
              b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
              a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
            })();
          `}
        </Script>
        <Script id="tealium-parameters" strategy="beforeInteractive">
          {`window.Parameters = window.Parameters || {ExternalUid: 'LOC1B02B18A7'}`}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QF8GS27JKD" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QF8GS27JKD');
          `}
        </Script>
      </head>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
