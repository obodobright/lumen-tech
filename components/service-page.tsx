import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Layers3
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type ServicePageProps = {
  service: Service;
};

export function ServicePage({ service }: ServicePageProps) {
  const Icon = service.icon;
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="mesh-bg px-4 pb-20 pt-16 text-white md:px-6 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/8 px-3 py-2 text-sm text-cyan">
              <Icon className="h-4 w-4" />
              {service.title}
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-normal md:text-6xl">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
                  Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="border-white/20 bg-white/8 text-white">
                <Link href="/#services">
                  Explore Our Services <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-2 shadow-glow">
            <Image
              alt={`${service.title} dashboard by LumenTech Africa`}
              className="rounded-md object-cover"
              height={900}
              priority
              src="/images/lumen-automation-dashboard.png"
              width={1300}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Benefits"
            title={`Why African businesses invest in ${service.shortTitle.toLowerCase()}`}
            copy="Every engagement is designed to create operational clarity, measurable business value, and systems your team can actually adopt."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <Card key={benefit}>
                <CardContent>
                  <CheckCircle2 className="mb-5 h-6 w-6 text-electric" />
                  <p className="font-semibold leading-7">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Offer"
            title="Practical delivery, not vague technology talk"
            copy="We combine strategy, software engineering, automation, AI, and change support so the solution works in the real operating environment."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.offers.map((offer) => (
              <div className="flex gap-4 rounded-lg border border-border bg-background p-5" key={offer}>
                <Layers3 className="mt-1 h-5 w-5 shrink-0 text-electric" />
                <p className="font-medium leading-7">{offer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
              Industries Served
            </p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              Built for African organizations where reliability matters.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.industries.map((industry) => (
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-5" key={industry}>
                <Building2 className="h-5 w-5 text-electric" />
                <span className="font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="FAQ"
            title={`${service.shortTitle} questions leaders ask before they start`}
          />
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <Card key={faq.question}>
                <CardContent>
                  <div className="flex gap-4">
                    <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-electric" />
                    <div>
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl rounded-lg bg-navy p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
                Start the conversation
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold md:text-5xl">
                Ready to transform, automate, and scale?
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Book a free strategy call with LumenTech Africa and let us map the smartest next step for your business.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
                Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-normal md:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-lg leading-8 text-muted-foreground">{copy}</p> : null}
    </div>
  );
}
