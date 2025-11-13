import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ChatWidget } from "@/components/chat-widget"
import Script from "next/script"

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
