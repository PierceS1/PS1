import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio & About | PS Premier Construction Austin",
  description:
    "Explore PS Premier Construction's portfolio of luxury kitchen remodels, bathroom renovations, custom home builds, and commercial projects across Austin, TX. Meet owner Pierce Speyrer.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & About | PS Premier Construction Austin",
    description:
      "200+ completed projects across Austin — custom homes, luxury remodels, and commercial renovations. See our work and meet the team.",
    url: "https://pspremierconstruction.com/portfolio",
    siteName: "PS Premier Construction",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
