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
      "Specialist in luxury remodels and residential development in Austin, Texas. Focusing on high-end kitchen & bathroom renovations, full-home remodels, custom home builds, and residential land development.",
    url: "https://pspremierconstruction.com",
    telephone: "+1-512-798-0701",
    email: "ps@pspremierconstruction.com",
    founder: {
      "@type": "Person",
      name: "Pierce Speyrer",
      jobTitle: "President",
      description:
        "Pierce Speyrer leads PS Premier Construction with corporate-level strategy and client-first approach, specializing in high-end residential projects across Austin.",
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
            name: "Luxury Kitchen Remodeling",
            description:
              "High-end kitchen transformations with custom cabinetry, premium appliances, and designer finishes for Austin's finest homes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Luxury Bathroom Remodeling",
            description:
              "Spa-like bathroom renovations with luxury fixtures, custom tile work, and sophisticated design for upscale Austin residences.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Home Renovations",
            description:
              "Complete residential transformations that modernize and elevate entire homes in West Lake Hills, Tarrytown, and Barton Creek.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Home Building",
            description:
              "Build your dream luxury home from the ground up with personalized design and quality craftsmanship in Austin's premium neighborhoods.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Land Development",
            description:
              "Comprehensive residential development support from site planning to permitting and infrastructure for Austin properties.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tenant Improvement",
            description: "Commercial build-outs and property upgrades for landlords and property managers.",
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

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "PS Premier Construction",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Austin Homeowner",
    },
    reviewBody:
      "PS Premier Construction exceeded our expectations. Professional, communicative, and delivered exactly what was promised.",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
    </>
  )
}
