"use client"

interface BlogPostSchemaProps {
  title: string
  description: string
  datePublished: string
  dateModified: string
  authorName: string
  imageUrl?: string
}

export function BlogPostSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  imageUrl,
}: BlogPostSchemaProps) {
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: "https://pspremierconstruction.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "PS Premier Construction",
      logo: {
        "@type": "ImageObject",
        url: "https://pspremierconstruction.com/images/ps-premier-logo-gold.png",
      },
    },
    image: imageUrl || "https://pspremierconstruction.com/images/ps-premier-logo-gold.png",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pspremierconstruction.com/blog/${title.toLowerCase().replace(/\s+/g, "-")}`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }} />
}
