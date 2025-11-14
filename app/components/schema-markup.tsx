"use client"

export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pspremierconstruction.com/#organization",
    name: "PS Premier Construction",
    image: "https://pspremierconstruction.com/images/ps-premier-logo-gold.png",
    logo: "https://pspremierconstruction.com/images/ps-premier-logo-gold.png",
    description:
      "Quality construction and remodeling services for residential and commercial projects in Austin, Texas. Specializing in luxury remodels, kitchen & bath renovations, custom home building, and commercial construction.",
    url: "https://pspremierconstruction.com",
    telephone: "+1-512-798-0701",
    email: "ps@pspremierconstruction.com",
    founder: {
      "@type": "Person",
      name: "Pierce Speyrer",
      jobTitle: "President",
      description:
        "Pierce Speyrer is raising the bar in residential & commercial construction by bringing corporate-level strategy, consistent communication, and a client-first mindset to the industry.",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78746",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.2672,
      longitude: -97.7431,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Austin",
      },
      {
        "@type": "City",
        name: "West Lake Hills",
      },
      {
        "@type": "City",
        name: "Tarrytown",
      },
      {
        "@type": "City",
        name: "Barton Creek",
      },
      {
        "@type": "City",
        name: "Davenport Ranch",
      },
      {
        "@type": "City",
        name: "Rollingwood",
      },
      {
        "@type": "City",
        name: "Cedar Park",
      },
      {
        "@type": "City",
        name: "Steiner Ranch",
      },
    ],
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61574805621220",
      "https://www.instagram.com/ps_premier_construction/",
      "https://www.linkedin.com/in/pierce-speyrer-b60115195/",
      "https://g.page/r/CZaWrbGUCHA0EAE/review",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "31",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Remodeling",
            description:
              "Transform your kitchen with custom cabinetry, modern appliances, and beautiful finishes that make cooking a joy.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Remodeling",
            description: "Create your dream bathroom with luxury fixtures, custom tile work, and spa-like amenities.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Additions",
            description:
              "Expand your living space with seamless additions that blend perfectly with your home's existing architecture.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Home Building",
            description: "Build your dream home from the ground up with personalized design and quality craftsmanship.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Land Development",
            description:
              "From raw land to finished communities, we handle permitting, infrastructure, and construction.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tenant Improvement",
            description:
              "Turnkey construction solutions for property managers and owners, from build-outs to renovations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Roofing",
            description: "Professional commercial flat roof replacement and waterproofing services.",
          },
        },
      ],
    },
  }

  const webPageSchema = {
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
      "@id": "https://pspremierconstruction.com/#organization",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  )
}
