import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { ServicePage } from "@/components/service-page";
import { createPageMetadata, faqSchema, serviceSchema } from "@/lib/seo";
import { serviceMap } from "@/lib/services";

const service = serviceMap["digital-transformation"];

export const metadata: Metadata = createPageMetadata({
  title: service.seoTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
  keywords: service.keywords
});

export default function DigitalTransformationPage() {
  return (
    <>
      <JsonLd data={[serviceSchema(service), faqSchema(service.faqs)]} />
      <ServicePage service={service} />
    </>
  );
}
