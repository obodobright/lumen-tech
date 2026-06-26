import type { MetadataRoute } from "next";

import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    ...services.map((service) => ({
      url: `${siteConfig.url}/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9
    }))
  ];
}
