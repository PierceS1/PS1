"use client"

export function TestimonialsSchema({ testimonials }: { testimonials: any[] }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pspremierconstruction.com/testimonials",
    name: "Client Testimonials - PS Premier Construction",
    description:
      "Read what our clients in Austin, Texas have to say about their experience with PS Premier Construction.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://pspremierconstruction.com",
      name: "PS Premier Construction",
      url: "https://pspremierconstruction.com",
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "PS Premier Construction",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Austin",
          addressRegion: "TX",
          addressCountry: "US",
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: "5",
      },
      reviewBody: testimonial.quote,
    })),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: testimonials.map((testimonial, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Review",
          reviewBody: testimonial.quote,
          author: { "@type": "Person", name: testimonial.name },
        },
      })),
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
}
