import { JsonLd } from "@/components/json-ld";
import { LumenLanding } from "@/components/lumen-landing";
import { faqSchema } from "@/lib/seo";
import { homepageFaqs } from "@/lib/services";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homepageFaqs)} />
      <LumenLanding />
    </>
  );
}
