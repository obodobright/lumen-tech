import type { Metadata } from "next";

import { defaultKeywords, siteConfig } from "@/lib/site";

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/images/lumen-automation-dashboard.png"
}: SeoOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1300,
          height: 900,
          alt: `${siteConfig.name} digital transformation dashboard`
        }
      ],
      locale: "en_NG",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed: ["Nigeria", "Africa"],
    sameAs: [siteConfig.social.instagram, siteConfig.social.tiktok, siteConfig.social.linkedin],
    knowsAbout: [
      "Artificial intelligence",
      "Business automation",
      "Custom software development",
      "Website development",
      "Digital transformation",
      "Microsoft 365",
      "Power Platform"
    ]
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.png`,
    url: siteConfig.url,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG"
    },
    areaServed: ["Nigeria", "Africa"],
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`
    }
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function serviceSchema(service: {
  title: string;
  metaDescription: string;
  slug: string;
  offers: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/${service.slug}#service`,
    name: service.title,
    description: service.metaDescription,
    url: `${siteConfig.url}/${service.slug}`,
    provider: {
      "@id": `${siteConfig.url}/#organization`
    },
    areaServed: ["Nigeria", "Africa"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Offerings`,
      itemListElement: service.offers.map((offer) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offer
        }
      }))
    }
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
