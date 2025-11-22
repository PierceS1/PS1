"use client"

export function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a kitchen remodel cost in Austin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kitchen remodeling costs in Austin typically range from $25,000 for a basic refresh to $150,000+ for a luxury transformation. The final cost depends on size, materials, appliances, and whether you're changing the layout. Most mid-range remodels fall between $50,000-$85,000.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical remodel take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most kitchen remodels in Austin take 6-12 weeks from start to finish. Bathroom remodels typically take 3-6 weeks. Timelines vary based on project scope, custom orders, permit requirements, and material availability.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle permits and inspections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we handle all permits, inspections, and coordination with the City of Austin. We ensure your project meets all building codes and passes all required inspections.",
        },
      },
      {
        "@type": "Question",
        name: "What areas of Austin do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We proudly serve West Lake Hills, Tarrytown, Barton Creek, Davenport Ranch, Rollingwood, Cedar Park, Steiner Ranch, and all of Central Austin. We're familiar with local building codes, HOA requirements, and the unique construction challenges of each neighborhood.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed and insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PS Premier Construction is fully licensed, bonded, and insured. We carry general liability insurance and workers' compensation coverage to protect you and our team throughout your project.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer warranties on your work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we stand behind our craftsmanship with comprehensive warranties on both labor and materials. Specific warranty terms vary by project scope and materials used, and we'll discuss these details during your consultation.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
}
