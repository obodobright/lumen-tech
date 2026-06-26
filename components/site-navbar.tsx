import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteNavbarProps = {
  variant?: "fixed" | "static";
};

const homeNavItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const siteNavItems = [
  { label: "Home", href: "/" },
  ...services.map((service) => ({
    label: service.navTitle,
    href: `/${service.slug}`
  }))
];

export function SiteNavbar({ variant = "static" }: SiteNavbarProps) {
  const isFixed = variant === "fixed";
  const navItems = isFixed ? homeNavItems : siteNavItems;

  return (
    <header
      className={cn(
        "z-50 border-b backdrop-blur-xl",
        isFixed
          ? "fixed inset-x-0 top-0 border-white/10 bg-background/78"
          : "border-border bg-background/95"
      )}
    >
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          className="flex items-center gap-3"
          href={isFixed ? "#home" : "/"}
          aria-label="LumenTech Africa"
        >
          <Image
            alt="LumenTech Africa logo"
            src="/images/logo.png"
            width={isFixed ? 70 : 58}
            height={isFixed ? 70 : 58}
            priority={isFixed}
          />
          <span
            className={cn(
              "hidden text-lg font-semibold lg:block",
              isFixed ? "text-white" : "text-foreground"
            )}
          >
            LumenTech
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button asChild className="hidden sm:inline-flex">
          <Link href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
            Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </nav>

      <div className="border-t border-border/60 px-4 py-2 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm">
          {navItems.map((item) => (
            <Link
              className="shrink-0 font-medium text-muted-foreground transition hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
