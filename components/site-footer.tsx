import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: Instagram
  },
  {
    label: "TikTok",
    href: siteConfig.social.tiktok,
    icon: TikTokIcon
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin
  }
];

const solutionLinks = [
  { label: "AI Transformation", href: "/ai-solutions" },
  { label: "Workflow Automation", href: "/business-automation" },
  { label: "Power Platform", href: "/microsoft-365-consulting" },
  { label: "Enterprise Software", href: "/software-development" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <Image alt="LumenTech Africa logo" src="/images/logo.png" width={150} height={150} />
        <FooterLinks
          title="Services"
          items={services.map((service) => ({
            label: service.shortTitle,
            href: `/${service.slug}`
          }))}
        />
        <FooterLinks title="Solutions" items={solutionLinks} />
        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>
            <p>Enterprise consulting for Africa and global teams</p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background text-muted-foreground transition hover:border-electric/50 hover:bg-electric/10 hover:text-electric"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                    title={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 4v9.5a4.5 4.5 0 1 1-4.5-4.5" />
      <path d="M14 4c.7 3.1 2.5 5 6 5" />
    </svg>
  );
}

function FooterLinks({
  title,
  items
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-semibold">{title}</p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <Link
            className={cn("block text-sm text-muted-foreground transition hover:text-foreground")}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
