import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Process | PS Premier Construction Austin",
  description:
    "Learn how PS Premier Construction manages every project from initial consultation to final walkthrough. Our 5-step process keeps your Austin remodel on time, on budget, and stress-free.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Our Process | PS Premier Construction Austin",
    description:
      "From first walk-through to punch list — see how PS Premier Construction manages your Austin remodel with clarity and professionalism.",
    url: "https://pspremierconstruction.com/process",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
