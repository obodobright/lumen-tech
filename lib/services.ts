import {
  Bot,
  BrainCircuit,
  Building2,
  Code2,
  Globe2,
  Network,
  Workflow
} from "lucide-react";

export type ServiceSlug =
  | "ai-solutions"
  | "business-automation"
  | "software-development"
  | "website-development"
  | "digital-transformation"
  | "microsoft-365-consulting";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  navTitle: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  icon: typeof Bot;
  keywords: string[];
  benefits: string[];
  offers: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI Solutions",
    navTitle: "AI",
    seoTitle: "AI Solutions in Nigeria & Africa | LumenTech Africa",
    metaDescription:
      "Deploy practical AI solutions for African businesses, including AI assistants, workflow intelligence, knowledge automation, and customer support AI.",
    h1: "AI Solutions for African Businesses",
    intro:
      "LumenTech Africa helps ambitious organizations apply artificial intelligence where it creates measurable business value: faster decisions, better service, smarter operations, and scalable knowledge systems.",
    icon: BrainCircuit,
    keywords: [
      "AI solutions Nigeria",
      "AI consulting Africa",
      "AI automation for business",
      "enterprise AI assistants"
    ],
    benefits: [
      "Improve decision-making with intelligent insights",
      "Reduce repetitive work with AI-powered workflows",
      "Turn company knowledge into searchable, useful systems",
      "Support customers and teams with always-on AI assistants"
    ],
    offers: [
      "Internal AI assistants and copilots",
      "Customer support AI and chatbot systems",
      "AI workflow automation",
      "Knowledge management and document intelligence",
      "AI readiness assessment and adoption strategy"
    ],
    industries: ["Financial services", "Energy", "Healthcare", "Education", "Public sector", "Professional services"],
    faqs: [
      {
        question: "Does LumenTech Africa offer AI solutions?",
        answer:
          "Yes. LumenTech Africa designs and implements AI assistants, intelligent workflow systems, knowledge automation, and customer support AI for businesses in Nigeria and across Africa."
      },
      {
        question: "Can AI help my team automate daily work?",
        answer:
          "Yes. We identify repetitive processes, connect the right data sources, and build AI-powered automations that help teams work faster with better visibility."
      },
      {
        question: "Do you help with AI strategy before implementation?",
        answer:
          "Yes. We can assess your business processes, data readiness, security needs, and adoption plan before building the AI solution."
      }
    ]
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Business Automation",
    navTitle: "Automation",
    seoTitle: "Business Automation in Nigeria & Africa | LumenTech Africa",
    metaDescription:
      "Automate approvals, HR, finance, operations, and reporting workflows with secure business automation solutions built for African organizations.",
    h1: "Business Automation for Faster, Smarter Operations",
    intro:
      "We transform manual processes into governed digital workflows so African businesses can reduce delays, improve accountability, and scale operations without adding unnecessary complexity.",
    icon: Workflow,
    keywords: [
      "business automation Nigeria",
      "workflow automation Africa",
      "process automation consulting",
      "Power Automate Nigeria"
    ],
    benefits: [
      "Shorten approval cycles and reduce bottlenecks",
      "Create clear audit trails for sensitive requests",
      "Improve visibility across HR, finance, and operations",
      "Standardize processes across teams and branches"
    ],
    offers: [
      "Approval workflow automation",
      "HR and employee self-service systems",
      "Finance request and procurement workflows",
      "Operations dashboards and reporting",
      "Microsoft Power Automate implementation"
    ],
    industries: ["Banking", "Energy", "NGOs", "Government", "Logistics", "Manufacturing"],
    faqs: [
      {
        question: "Can LumenTech automate business processes?",
        answer:
          "Yes. We automate business processes such as leave requests, procurement approvals, finance requests, onboarding, reporting, and operational tracking."
      },
      {
        question: "What tools do you use for business automation?",
        answer:
          "We use the right tool for the business need, including custom software, Microsoft Power Platform, SharePoint, Power Automate, and secure integrations."
      },
      {
        question: "Can you automate an existing manual workflow?",
        answer:
          "Yes. We map the current process, remove unnecessary steps, define approval rules, and build a digital workflow your team can use confidently."
      }
    ]
  },
  {
    slug: "software-development",
    title: "Custom Software Development",
    shortTitle: "Software Development",
    navTitle: "Software",
    seoTitle: "Custom Software Development in Nigeria & Africa | LumenTech Africa",
    metaDescription:
      "Build secure, scalable web applications, portals, dashboards, and internal systems with LumenTech Africa's custom software development team.",
    h1: "Custom Software Development for Serious Business Growth",
    intro:
      "LumenTech Africa builds business-critical software for organizations that need dependable systems, clean user experiences, and scalable architecture.",
    icon: Code2,
    keywords: [
      "custom software development Nigeria",
      "software development company Africa",
      "web application development Nigeria",
      "enterprise software Africa"
    ],
    benefits: [
      "Replace spreadsheet-heavy operations with reliable systems",
      "Build software around your exact workflow",
      "Improve reporting, access control, and operational visibility",
      "Create scalable digital products and internal platforms"
    ],
    offers: [
      "Custom web applications",
      "Enterprise portals and dashboards",
      "Internal business systems",
      "API integrations",
      "Product strategy, UX, and technical delivery"
    ],
    industries: ["Fintech", "Professional services", "Real estate", "Healthcare", "Education", "Enterprise operations"],
    faqs: [
      {
        question: "Does LumenTech build custom software?",
        answer:
          "Yes. LumenTech Africa builds custom software, portals, dashboards, workflow systems, and web applications for businesses in Nigeria and across Africa."
      },
      {
        question: "Can you modernize an existing system?",
        answer:
          "Yes. We can assess existing software, improve user experience, rebuild weak components, and integrate modern automation or AI features."
      },
      {
        question: "Do you build software for internal operations?",
        answer:
          "Yes. Many of our solutions support internal workflows such as HR, finance, operations, procurement, reporting, and customer management."
      }
    ]
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    navTitle: "Websites",
    seoTitle: "Website Development Company in Nigeria & Africa | LumenTech Africa",
    metaDescription:
      "Build fast, SEO-ready, conversion-focused websites for African businesses that need credibility, leads, and a stronger digital presence.",
    h1: "Website Development for Credibility, SEO, and Leads",
    intro:
      "We design and build high-performance websites that communicate authority, rank for relevant searches, and convert visitors into qualified business conversations.",
    icon: Globe2,
    keywords: [
      "website development Nigeria",
      "website design company Africa",
      "SEO website development Nigeria",
      "business website development"
    ],
    benefits: [
      "Strengthen brand credibility with premium positioning",
      "Improve search visibility with technical SEO foundations",
      "Convert traffic into enquiries and strategy calls",
      "Deliver fast, responsive experiences across devices"
    ],
    offers: [
      "Corporate and enterprise websites",
      "SEO-focused landing pages",
      "Conversion copy and page structure",
      "Performance optimization",
      "Analytics and lead generation setup"
    ],
    industries: ["Technology", "Consulting", "Finance", "Education", "Healthcare", "B2B services"],
    faqs: [
      {
        question: "Does LumenTech build websites?",
        answer:
          "Yes. LumenTech Africa builds fast, SEO-ready, conversion-focused websites for businesses that need stronger credibility and lead generation."
      },
      {
        question: "Do your websites include SEO?",
        answer:
          "Yes. We structure pages with clean metadata, semantic HTML, performance best practices, internal linking, and search-focused content."
      },
      {
        question: "Is LumenTech only a web design agency?",
        answer:
          "No. Website development is one capability within a broader AI, software, business automation, and digital transformation practice."
      }
    ]
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortTitle: "Digital Transformation",
    navTitle: "Transformation",
    seoTitle: "Digital Transformation Consulting in Nigeria & Africa | LumenTech Africa",
    metaDescription:
      "Modernize operations with digital transformation strategy, automation, AI adoption, systems integration, and change enablement for African businesses.",
    h1: "Digital Transformation Consulting for African Enterprises",
    intro:
      "We help organizations move from fragmented manual work to integrated digital operations powered by strategy, automation, AI, software, and measurable adoption.",
    icon: Building2,
    keywords: [
      "digital transformation Nigeria",
      "digital transformation Africa",
      "technology consulting Nigeria",
      "business digitalization Africa"
    ],
    benefits: [
      "Align technology investments with business outcomes",
      "Modernize core processes without disrupting operations",
      "Improve data visibility for leadership decisions",
      "Increase adoption through practical implementation support"
    ],
    offers: [
      "Digital transformation roadmap",
      "Process assessment and redesign",
      "Automation and AI adoption planning",
      "Systems integration strategy",
      "Implementation support and team enablement"
    ],
    industries: ["Public sector", "Financial services", "Energy", "NGOs", "Education", "Multi-location enterprises"],
    faqs: [
      {
        question: "What does digital transformation mean for a business?",
        answer:
          "It means improving how the business operates by redesigning processes, adopting the right technologies, connecting data, and helping teams work in smarter digital systems."
      },
      {
        question: "Does LumenTech provide digital transformation consulting?",
        answer:
          "Yes. We provide digital transformation strategy, automation planning, AI adoption, software delivery, and Microsoft 365 consulting."
      },
      {
        question: "Can you help a business start small?",
        answer:
          "Yes. We often begin with a high-impact workflow, prove value quickly, and then expand into broader transformation initiatives."
      }
    ]
  },
  {
    slug: "microsoft-365-consulting",
    title: "Microsoft 365 / Power Platform Consulting",
    shortTitle: "Microsoft 365 Consulting",
    navTitle: "Microsoft 365",
    seoTitle: "Microsoft 365 & Power Platform Consulting in Nigeria | LumenTech Africa",
    metaDescription:
      "Get Microsoft 365, SharePoint, Power Apps, Power Automate, Teams, and Power Platform consulting for automation and digital workplace transformation.",
    h1: "Microsoft 365 and Power Platform Consulting",
    intro:
      "LumenTech Africa helps organizations get more value from Microsoft 365 by turning SharePoint, Power Apps, Power Automate, Teams, and Outlook into practical business systems.",
    icon: Network,
    keywords: [
      "Microsoft 365 consulting Nigeria",
      "Power Platform consulting Africa",
      "Power Automate consultant Nigeria",
      "SharePoint consulting Nigeria"
    ],
    benefits: [
      "Maximize existing Microsoft 365 investments",
      "Automate approvals and notifications with Power Automate",
      "Build low-code apps for internal teams",
      "Improve governance, security, and adoption"
    ],
    offers: [
      "Power Automate workflow implementation",
      "Power Apps business applications",
      "SharePoint portals and document systems",
      "Teams and Outlook workflow integration",
      "Microsoft 365 training and adoption support"
    ],
    industries: ["Government", "Energy", "Finance", "NGOs", "Education", "Enterprise teams"],
    faqs: [
      {
        question: "Does LumenTech provide Microsoft 365 consulting?",
        answer:
          "Yes. LumenTech Africa provides Microsoft 365, SharePoint, Power Automate, Power Apps, Teams, and Power Platform consulting."
      },
      {
        question: "Can you build workflows with Power Automate?",
        answer:
          "Yes. We build approval flows, notifications, request systems, document workflows, and reporting automations with Power Automate."
      },
      {
        question: "Do you train teams on Microsoft 365 tools?",
        answer:
          "Yes. We support adoption through practical training, documentation, and advisory sessions tailored to each team."
      }
    ]
  }
];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service])
) as Record<ServiceSlug, Service>;

export const homepageFaqs = [
  {
    question: "What does LumenTech Africa do?",
    answer:
      "LumenTech Africa is an AI, software, business automation, and digital transformation company helping African businesses transform, automate, and scale through smart technology."
  },
  {
    question: "Does LumenTech build websites?",
    answer:
      "Yes. We build fast, SEO-ready, conversion-focused websites, but LumenTech Africa is broader than a web design agency. We also deliver AI solutions, custom software, business automation, and digital transformation."
  },
  {
    question: "Can LumenTech automate business processes?",
    answer:
      "Yes. We automate workflows for approvals, HR, finance, procurement, operations, reporting, and Microsoft 365 environments."
  },
  {
    question: "Does LumenTech offer AI solutions?",
    answer:
      "Yes. We design and implement AI assistants, workflow intelligence, knowledge automation, customer support AI, and AI adoption strategies."
  },
  {
    question: "Does LumenTech provide Microsoft 365 consulting?",
    answer:
      "Yes. We consult on Microsoft 365, SharePoint, Power Automate, Power Apps, Teams, Outlook, and Power Platform adoption."
  },
  {
    question: "Which businesses does LumenTech work with?",
    answer:
      "We work with growing companies, enterprises, public sector organizations, NGOs, and professional service firms across Nigeria and Africa."
  }
];
