import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Remote Diesel Tuning — Custom ECU Tuning for Cummins, Powerstroke & Duramax",
  description:
    "Remote Diesel Tuning delivers custom ECU calibrations shipped nationwide. Performance and economy tunes for Cummins, Powerstroke, and Duramax trucks — dyno-proven results without leaving your driveway.",
  keywords:
    "remote diesel tuning, ECU tuning, custom diesel tunes, Cummins tuning, Powerstroke tuning, Duramax tuning, diesel performance, EFILive, HP Tuners, EZ LYNK, diesel dyno tuning, mail-in ECU tuning",
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
  openGraph: {
    title: "Remote Diesel Tuning — Custom ECU Tuning for Cummins, Powerstroke & Duramax",
    description:
      "Custom ECU calibrations shipped nationwide. Performance and economy tunes for Cummins, Powerstroke, and Duramax diesels.",
    url: "https://www.remotedieseltuning.com",
    siteName: "Remote Diesel Tuning",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Diesel Tuning — Custom ECU Tuning for Cummins, Powerstroke & Duramax",
    description:
      "Custom ECU calibrations shipped nationwide. Performance and economy tunes for Cummins, Powerstroke, and Duramax diesels.",
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
