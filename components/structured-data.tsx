// components/structured-data.tsx

interface StructuredDataProps {
  type: 'website' | 'article' | 'organization' | 'product'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData = {}

  switch (type) {
    case 'website':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "ArticleIP",
        "description": "AI-Powered Patent Generation Platform",
        "url": "https://www.articleip.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.articleip.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
      break

    case 'organization':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ArticleIP",
        "description": "AI-Powered Patent Generation Platform trusted by inventors and IP attorneys worldwide",
        "url": "https://www.articleip.com",
        "logo": "https://www.articleip.com/articleiplogo.png",
        "sameAs": [
          "https://twitter.com/ArticleIP",
          "https://linkedin.com/company/articleip"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@articleip.com"
        }
      }
      break

    case 'product':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ArticleIP",
        "description": "AI-Powered Patent Generation Platform",
        "url": "https://www.articleip.com",
        "applicationCategory": "Legal Technology",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free trial available"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1250"
        }
      }
      break

    case 'article':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "image": data.image || "https://www.articleip.com/articleip_redesign.png",
        "author": {
          "@type": "Organization",
          "name": "ArticleIP Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ArticleIP",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.articleip.com/articleiplogo.png"
          }
        },
        "datePublished": data.datePublished,
        "dateModified": data.dateModified || data.datePublished,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.url
        }
      }
      break
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}