"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Linkedin,
  MessageSquareQuote,
  Moon,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Sun,
  Workflow,
  Zap
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const navItems = ["Home", "Services", "Solutions", "Case Studies", "About", "Contact"];

const services = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Transform manual workflows into automated, auditable, and scalable business processes.",
    examples: [
      "Leave Management",
      "Procurement Approvals",
      "Fund Requests",
      "Employee Onboarding",
      "Asset Management"
    ]
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Deploy intelligent AI assistants and automation systems that improve productivity and decision-making.",
    examples: [
      "Internal AI Assistants",
      "Knowledge Management AI",
      "Customer Support AI",
      "AI Workflow Automation"
    ]
  },
  {
    icon: Building2,
    title: "Enterprise Portals & Internal Systems",
    description:
      "Design and build secure internal applications that centralize business operations.",
    examples: [
      "HR Portals",
      "Finance Portals",
      "Operations Dashboards",
      "Employee Self-Service Platforms"
    ]
  },
  {
    icon: Network,
    title: "Microsoft 365 Consulting",
    description:
      "Unlock the full potential of Microsoft 365 through workflow automation and digital transformation.",
    examples: ["SharePoint", "Power Automate", "Power Apps", "Teams", "Outlook"]
  },
  {
    icon: Sparkles,
    title: "Training & Advisory",
    description:
      "Equip teams with the skills and strategies required to adopt AI and modern workplace technologies.",
    examples: [
      "AI Adoption",
      "Microsoft 365 Training",
      "Automation Strategy",
      "Digital Transformation"
    ]
  }
];

const solutions = [
  ["Human Resources", "Leave Management", "Recruitment Workflows", "Employee Onboarding"],
  ["Finance", "Fund Requests", "Expense Claims", "Purchase Approvals"],
  ["Operations", "Asset Tracking", "Vehicle Requests", "Incident Reporting"],
  ["Government & Public Sector", "Staff Requests", "Internal Approvals", "Digital Service Workflows"],
  ["NGOs & Development Organizations", "Grant Requests", "Travel Approvals", "Volunteer Management"]
];

const benefits = [
  "Deep Business Understanding",
  "AI-Driven Innovation",
  "Microsoft 365 Expertise",
  "Enterprise-Grade Solutions",
  "Scalable Architecture",
  "End-to-End Delivery"
];

const process = [
  "Discovery",
  "Process Mapping",
  "Solution Design",
  "Implementation",
  "Support & Optimization"
];

const testimonials = [
  {
    name: "Amara Okafor",
    role: "HR Manager",
    company: "Energy Operations Group",
    outcome: "Approval time reduced",
    quote:
      "Lumen helped us move approvals from inbox chaos to a transparent, automated workflow our teams actually trust."
  },
  {
    name: "David Mensah",
    role: "Head of Operations",
    company: "Regional Services Enterprise",
    outcome: "Live operational visibility",
    quote:
      "The solution gave leadership visibility across requests, assets, and service timelines without adding complexity."
  },
  {
    name: "Tomi Adewale",
    role: "IT Director",
    company: "Public Sector Institution",
    outcome: "Secure Microsoft 365 adoption",
    quote:
      "Their Microsoft 365 expertise meant we could modernize quickly while staying aligned with our security standards."
  }
];

const calendlyUrl = "https://calendly.com/obodobright0/30min";

function sectionId(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

function SectionHeader({
  eyebrow,
  title,
  copy,
  inverse = false
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  inverse?: boolean;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-normal md:text-5xl",
          inverse ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-4 text-base leading-7 md:text-lg",
            inverse ? "text-slate-300" : "text-muted-foreground"
          )}
        >
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <Button
      aria-label="Toggle theme"
      className="h-10 w-10 px-0"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="secondary"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
const manrope = Manrope({
  subsets: ["latin"],
});

export function LumenLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/78 backdrop-blur-xl">
        <nav className="mx-auto relative flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link
            className="flex items-center"
            href="#home"
            aria-label="Lumen Technologies home"
          >
            <Image
              alt="Logo"
              src="/images/logo.png"
              width={70}
              height={70}
            />

            <span className={`text-xl hidden lg:block font-semibold text-white ${manrope.className}`}>
              Lumen Technologies
            </span>
          </Link>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                href={`#${sectionId(item)}`}
                key={item}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <Button asChild className="hidde sm:inline-flex">
              <Link href="#contact">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
        <div className="border-t border-border/60 px-4 py-2 hidden lg:hidden">
          <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm">
            {navItems.map((item) => (
              <Link
                className="shrink-0 font-medium text-muted-foreground transition hover:text-foreground"
                href={`#${sectionId(item)}`}
                key={item}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <section id="home" className="mesh-bg relative pt-20 text-white md:pt-36">
        <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
        <motion.div
          className="absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl"
          animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 md:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-24">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/8 px-3 py-2 text-sm text-cyan">
              <Sparkles className="h-4 w-4" />
              Automating Business. Amplifying Intelligence.
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-normal md:text-7xl">
              Automate Operations. Accelerate Growth.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Lumen Technologies helps organizations streamline workflows, deploy AI-powered
              solutions, and transform manual processes into intelligent digital systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">
                  Book a Consultation <CalendarCheck className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="border-white/20 bg-white/8 text-white">
                <Link href="#services">
                  View Services <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <div className="absolute inset-4 rounded-lg bg-electric/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-2 shadow-glow backdrop-blur">
              <Image
                alt="AI and workflow automation dashboard"
                className="rounded-md object-cover"
                height={900}
                priority
                src="/images/lumen-automation-dashboard.png"
                width={1300}
              />
            </div>
            <motion.div
              className="absolute -bottom-5 left-6 hidden rounded-lg border border-white/15 bg-navy/90 p-4 shadow-glow backdrop-blur md:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-cyan" />
                <div>
                  <p className="text-sm font-semibold">AI assistant active</p>
                  <p className="text-xs text-slate-300">12 workflow insights generated</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35 py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Helping organizations modernize operations with Microsoft 365 and AI.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-5">
            {["ApexBank", "NorthGrid", "CivicWorks", "Atlas Energy", "ImpactAid"].map((logo) => (
              <div
                className="rounded-lg border border-border bg-background/70 px-4 py-4 text-center text-sm font-semibold text-muted-foreground"
                key={logo}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Consulting capabilities built for measurable transformation."
            copy="From process automation to AI adoption, every engagement is designed around operational clarity, security, and long-term scale."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                initial="hidden"
                key={service.title}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                variants={fadeUp}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -6 }}
                whileInView="show"
              >
                <Card className="h-full overflow-hidden">
                  <CardContent>
                    <service.icon className="mb-6 h-8 w-8 text-electric" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{service.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.examples.map((example) => (
                        <span
                          className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                          key={example}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-muted/35 px-4 py-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Solutions"
            title="Industry workflows for complex organizations."
            copy="Purpose-built systems for teams that need visibility, governance, and speed across high-value internal operations."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {solutions.map(([title, ...items], index) => (
              <motion.div
                className="rounded-lg border border-border bg-background p-5 shadow-premium"
                initial={{ opacity: 0, y: 24 }}
                key={title}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="min-h-12 text-base font-semibold">{title}</h3>
                <div className="mt-5 space-y-3">
                  {items.map((item) => (
                    <p className="flex items-start gap-2 text-sm text-muted-foreground" key={item}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="px-4 py-24 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
              Featured Case Study
            </p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              Energy Sector Digital Transformation
            </h2>
            <p className="mt-3 text-lg font-medium text-electric">
              HR & Finance Process Automation
            </p>
            <p className="mt-6 leading-8 text-muted-foreground">
              Manual leave requests and fund approvals created delays and limited visibility.
              Lumen implemented a Leave Management System, Fund Request Workflow, Employee
              Self-Service Portal, automated notifications, and calendar integration using
              Microsoft 365.
            </p>
          </div>
          <Card className="bg-navy text-white">
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Faster approvals", "Workflow routing with clear ownership"],
                  ["Improved HR visibility", "Centralized request dashboards"],
                  ["Automated tracking", "Notifications and calendar sync"],
                  ["Centralized records", "Auditable Microsoft 365 storage"]
                ].map(([metric, detail]) => (
                  <div className="rounded-lg border border-white/12 bg-white/8 p-5" key={metric}>
                    <Gauge className="mb-4 h-6 w-6 text-cyan" />
                    <p className="text-lg font-semibold">{metric}</p>
                    <p className="mt-2 text-sm text-slate-300">{detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/35 px-4 py-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Lumen Technologies"
            title="A partner for organizations where reliability matters."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-5" key={benefit}>
                <ShieldCheck className="h-6 w-6 text-electric" />
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Process" title="From operational insight to supported delivery." />
          <div className="grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <motion.div
                className="relative rounded-lg border border-border bg-background p-5 shadow-premium"
                initial={{ opacity: 0, y: 24 }}
                key={step}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="text-sm font-semibold text-electric">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{step}</h3>
                <div className="mt-6 h-1 rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-electric"
                    initial={{ width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.12 }}
                    viewport={{ once: true }}
                    whileInView={{ width: "100%" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-4 py-24 text-white md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(47,128,255,0.22),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(93,226,255,0.13),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
        <motion.div
          className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl"
          animate={{ opacity: [0.25, 0.65, 0.25], scale: [0.92, 1.08, 0.92] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by leaders modernizing critical internal operations."
            copy="Enterprise teams rely on Lumen to turn process complexity into governed, intelligent systems that leadership can measure."
            inverse
          />
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.07] p-6 shadow-glow backdrop-blur-xl md:p-8"
              initial={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.35 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-electric via-cyan to-transparent" />
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-cyan/30 bg-cyan/10">
                  <MessageSquareQuote className="h-7 w-7 text-cyan" />
                </div>
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm text-cyan">
                    <Radar className="h-4 w-4" />
                    Verified transformation signal
                  </div>
                  <p className="text-balance text-2xl font-semibold leading-10 text-white md:text-4xl md:leading-[1.25]">
                    &quot;{testimonials[0].quote}&quot;
                  </p>
                  <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonials[0].name}</p>
                      <p className="mt-1 text-sm text-slate-300">
                        {testimonials[0].role}, {testimonials[0].company}
                      </p>
                    </div>
                    <div className="rounded-lg border border-electric/30 bg-electric/10 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-cyan">Outcome</p>
                      <p className="mt-1 text-sm font-semibold text-white">{testimonials[0].outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-5">
              <motion.div
                className="rounded-lg border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl"
                initial={{ opacity: 0, x: 28 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-cyan">Client sentiment engine</p>
                    <p className="mt-1 text-xs text-slate-400">Signals from modernization leaders</p>
                  </div>
                  <span className="rounded-md bg-cyan/10 px-3 py-1 text-sm font-semibold text-cyan">
                    98%
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {["Trust", "Visibility", "Adoption"].map((signal, index) => (
                    <div key={signal}>
                      <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                        <span>{signal}</span>
                        <span>{94 + index * 2}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-electric to-cyan"
                          initial={{ width: 0 }}
                          transition={{ duration: 0.9, delay: index * 0.14 }}
                          viewport={{ once: true }}
                          whileInView={{ width: `${94 + index * 2}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {testimonials.slice(1).map((testimonial, index) => (
                <motion.div
                  className="group rounded-lg border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:border-cyan/40 hover:bg-white/[0.085]"
                  initial={{ opacity: 0, y: 22 }}
                  key={testimonial.role}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.35 }}
                  whileHover={{ y: -4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex gap-4">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-lg border border-electric/30 bg-electric/10 p-2 text-cyan">
                      <Sparkles className="h-full w-full" />
                    </div>
                    <div>
                      <p className="leading-7 text-slate-200">&quot;{testimonial.quote}&quot;</p>
                      <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="mt-1 text-sm text-slate-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-cyan">{testimonial.outcome}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-24 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
              About
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">Modern consulting for intelligent work.</h2>
          </div>
          <div className="grid gap-5 lg:col-span-2 md:grid-cols-2">
            {[
              [
                "Company",
                "Lumen Technologies is a modern consulting and technology company focused on helping organizations automate processes and leverage AI."
              ],
              [
                "Mission",
                "To help organizations work smarter through intelligent automation and digital transformation."
              ],
              [
                "Vision",
                "To become Africa's leading business process automation and AI consulting company."
              ],
              [
                "Enterprise Focus",
                "Built for governments, banks, energy companies, NGOs, and large organizations that need dependable systems."
              ]
            ].map(([title, copy]) => (
              <Card key={title}>
                <CardContent>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-muted/35 px-4 py-24 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
              Contact
            </p>
            <h2 className="text-balance text-3xl font-semibold md:text-5xl">
              Schedule a free consultation.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Share your process challenge, AI initiative, or Microsoft 365 modernization goal.
              We will map the right next step with your team.
            </p>
            <div className="mt-8 rounded-lg border border-electric/30 bg-background p-5 shadow-premium">
              <CalendarCheck className="mb-3 h-6 w-6 text-electric" />
              <p className="font-semibold">Book directly with Calendly</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Choose a time that works for your team and bring the workflow, AI, or Microsoft
                365 opportunity you want to discuss.
              </p>
              <Button asChild className="mt-5" variant="secondary">
                <Link href={calendlyUrl} target="_blank" rel="noreferrer">
                  Open Calendly <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-background shadow-premium">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <p className="font-semibold">30-minute consultation</p>
                <p className="mt-1 text-sm text-muted-foreground">Powered by Calendly</p>
              </div>
              <span className="rounded-md bg-electric/10 px-3 py-1 text-sm font-semibold text-electric">
                Free
              </span>
            </div>
            <iframe
              className="h-[720px] w-full bg-background"
              src={`${calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`}
              title="Schedule a free consultation with Lumen Technologies"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-10 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">

          <Image alt="Logo" src="/images/logo.png" width={150} height={150} />
          <FooterLinks title="Services" items={["Automation", "AI Solutions", "Microsoft 365", "Training"]} />
          <FooterLinks title="Solutions" items={["HR", "Finance", "Operations", "Public Sector"]} />
          <div>
            <p className="font-semibold">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>hello@lumentechnologies.example</p>
              <p>Enterprise consulting for Africa and global teams</p>
              <Link className="inline-flex items-center gap-2 text-electric" href="#">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterLinks({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-semibold">{title}</p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <Link
            className={cn("block text-sm text-muted-foreground transition hover:text-foreground")}
            href="#services"
            key={item}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
