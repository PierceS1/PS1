"use client"

export function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pspremierconstruction.com/",
    name: "PS Premier Construction - Austin's Premier Construction Company",
    description:
      "Quality construction and remodeling services for residential and commercial projects in Austin, Texas.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://pspremierconstruction.com",
      name: "PS Premier Construction",
      url: "https://pspremierconstruction.com",
    },
    about: {
      "@type": "Organization",
      name: "PS Premier Construction",
      description:
        "Quality construction and remodeling services for residential and commercial projects in Austin, Texas.",
      founder: {
        "@type": "Person",
        name: "Pierce Speyrer",
        jobTitle: "President",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Commercial Construction",
            description:
              "From office buildings to retail spaces, we deliver high-quality commercial construction projects tailored to your business needs.",
            provider: {
              "@type": "LocalBusiness",
              name: "PS Premier Construction",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Residential Construction",
            description:
              "We build custom homes and renovate existing properties with attention to detail and quality craftsmanship.",
            provider: {
              "@type": "LocalBusiness",
              name: "PS Premier Construction",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Land & Residential Development",
            description:
              "From raw land acquisition to finished communities, we handle all aspects of development including permitting, infrastructure, and construction.",
            provider: {
              "@type": "LocalBusiness",
              name: "PS Premier Construction",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Commercial Tenant Improvement & Turnkey Solutions",
            description:
              "Specialized construction services for property management companies and property owners, providing comprehensive tenant improvement and turnkey construction solutions.",
            provider: {
              "@type": "LocalBusiness",
              name: "PS Premier Construction",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            name: "Mechanical, Electrical & Plumbing Services",
            description:
              "Comprehensive MEP services for both residential and commercial projects, ensuring all systems are designed and installed to meet the highest standards of safety, efficiency, and performance.",
            provider: {
              "@type": "LocalBusiness",
              name: "PS Premier Construction",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Service",
            name: "Civil & Architectural Design Services",
            description:
              "Comprehensive civil and architectural design services through our trusted partner Architect Builder Group, offering custom designs, civil engineering solutions, and permit-ready drawings.",
            provider: {
              "@type": "LocalBusiness",
              name: "PS Premier Construction",
            },
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
