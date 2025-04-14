import { PaymentDetails } from "@/lib/interfaces/payments";
import { MdDoubleArrow } from "react-icons/md";

export const paymentPlans: PaymentDetails[] = [
  {
    name: "essential-service-plan",
    title: "Essential Service Plan",
    short: "Starter Plan",
    icon: MdDoubleArrow,
    startingPrice: 1200,
    info: {
      intro: [
        "A lean, practical solution designed for startups and entrepreneurs.",
        "Ideal for businesses with tight budgets needing a fast, professional launch.",
      ],
      short: "Starter Plan",
      description:
        "The Essential Service Plan is designed for startups, solopreneurs, and small businesses who need a reliable and affordable entry point into the digital space. This plan provides just the core services required to establish an online presence quickly, with a strong focus on performance, usability, and accessibility.",
      features: [
        "Milestone-based billing — pay as each stage is completed",
        "Optional monthly installment plans (up to 3 months)",
        "Core design and development services",
        "SEO-ready site architecture and basic keyword implementation",
        "Mobile-responsive layout",
        "Essential accessibility compliance (WCAG AA)",
        "Contact form and basic CMS configuration",
      ],
    },
    explanation:
      "This plan offers a controlled, phased investment approach — allowing small businesses to build their digital foundation without overextending resources. Ideal for launching quickly and scaling later.",
    useCases: [
      "Startup MVP websites",
      "Freelancer portfolios or one-pagers",
      "Introductory digital presence for new local businesses",
    ],
    details: [
      {
        title: "Milestone-Based Payments",
        description:
          "Only pay when defined stages (e.g., wireframes, homepage, final site handoff) are completed, ensuring transparency and accountability.",
      },
      {
        title: "Optional Monthly Payments",
        description:
          "Choose to split the project total into equal monthly payments over a 3-month period to reduce financial strain.",
      },
      {
        title: "Launch-Ready Essentials",
        description:
          "Site includes homepage, about, contact, and services pages — with performance and mobile optimization included.",
      },
      {
        title: "Post-Launch Support (30 Days)",
        description:
          "Includes 30 days of support after launch to fix bugs, make small content changes, or handle minor updates.",
      },
    ],
  },

  {
    name: "comprehensive-service-package",
    title: "Comprehensive Service Package",
    short: "Classic Plan",
    icon: MdDoubleArrow,
    startingPrice: 7500,
    info: {
      intro: [
        "A strategic package for growing businesses looking to expand their digital presence.",
        "Balances affordability with advanced service offerings and long-term support.",
      ],
      short: "Classic Plan",
      description:
        "The Comprehensive Service Package is designed for growth-stage businesses that need more than a basic website. It offers deeper customization, refined user experiences, and foundational strategy support. It is perfect for rebrands, digital pivots, or expanding businesses looking to strengthen customer engagement.",
      features: [
        "Installment billing (4–6 payments)",
        "Dedicated project manager and communication dashboard",
        "Custom UI/UX design based on user flows and brand goals",
        "Scalable CMS with training materials",
        "Enhanced SEO (schema markup, on-page optimization)",
        "Accessibility auditing and compliance (WCAG 2.1 AA)",
        "Analytics setup (GA4, Hotjar, etc.) and reporting dashboard",
      ],
    },
    explanation:
      "Designed for projects requiring both thoughtful strategy and visual excellence, this plan combines structure, collaboration, and performance to ensure a standout digital presence.",
    useCases: [
      "Corporate site redesign or refresh",
      "Conversion-optimized service platforms",
      "SEO and UX focused business expansion",
    ],
    details: [
      {
        title: "4–6 Installments",
        description:
          "Budget-friendly installment options that allow you to focus on growth while investing steadily in your brand’s future.",
      },
      {
        title: "Strategic Design Process",
        description:
          "We begin with strategy workshops, personas, and wireframes to ensure the site matches both business and user needs.",
      },
      {
        title: "Growth-Focused Architecture",
        description:
          "Your site is structured with expansion in mind — easy to scale, optimize, and extend as your business evolves.",
      },
      {
        title: "Post-Launch Support (60 Days)",
        description:
          "Includes a two-month window for support, optimization, and minor feature tweaks to ensure stability post-launch.",
      },
    ],
  },

  {
    name: "elite-service-package",
    title: "Elite Service Package",
    short: "Advanced Plan",
    icon: MdDoubleArrow,
    startingPrice: 20000,
    info: {
      intro: [
        "An enterprise-ready plan designed for scale, innovation, and growth.",
        "Combines strategic consulting, continuous delivery, and full-service digital execution.",
      ],
      short: "Advanced Plan",
      description:
        "The Elite Service Package is built for companies needing a continuous, adaptive, and consultative digital partner. It includes advanced technical execution, marketing integration, custom features, and real-time strategy refinement throughout the project lifecycle.",
      features: [
        "Monthly retainer-based model for long-term collaboration",
        "Engagement term: 6 to 12 months",
        "Dedicated cross-functional team (design, dev, PM, QA)",
        "Performance monitoring and optimization cycles",
        "Multi-platform or multi-locale support",
        "Continuous improvement model with sprint-based releases",
        "Marketing funnel integration (CRM, analytics, automation)",
        "WCAG AAA / ADA accessibility option",
      ],
    },
    explanation:
      "Elite-level digital transformation designed for complex ecosystems and long-term results. Ideal for companies with evolving goals and high customer engagement requirements.",
    useCases: [
      "Enterprise SaaS platforms and dashboards",
      "Corporate sites with ongoing feature development",
      "Global websites with localization and accessibility compliance",
    ],
    details: [
      {
        title: "Monthly Retainer Engagement",
        description:
          "Secure ongoing service for 6 to 12 months with a dedicated team that evolves with your goals, tech stack, and user feedback.",
      },
      {
        title: "Agile Delivery Process",
        description:
          "Biweekly sprints and retrospectives ensure the roadmap stays aligned with your business and market shifts.",
      },
      {
        title: "Advanced Infrastructure Support",
        description:
          "Includes deployment strategy, version control best practices, CMS extensibility, and developer documentation.",
      },
      {
        title: "Post-Launch Optimization (120 Days)",
        description:
          "Includes performance audits, UX assessments, A/B testing, and monthly refinements after project handoff.",
      },
    ],
  },

  {
    name: "personalized-service-package",
    title: "Personalized Service Package",
    short: "Bespoke Plan",
    icon: MdDoubleArrow,
    startingPrice: 25000,
    info: {
      intro: [
        "A fully customized solution for complex, multi-phase, or experimental projects.",
        "Includes personalized financial structuring and multi-stakeholder collaboration.",
      ],
      short: "Bespoke Plan",
      description:
        "The Personalized Service Package is highly adaptable to unique project scopes, such as multi-product systems, startups requiring iterative MVPs, or organizations managing multiple brands or phases. Payment schedules, team engagement, and delivery milestones are all custom-defined.",
      features: [
        "Custom payment structures (fixed, milestone, or hybrid)",
        "Phased delivery model with review checkpoints",
        "Dedicated strategy consultant and technical advisor",
        "Support for integrations with external APIs or vendors",
        "Discovery and prototyping phases included",
        "Optional equity or hybrid equity/payment models",
        "Up to 24-month financing option",
        "Legal and compliance review support (HIPAA, GDPR, etc.)",
      ],
    },
    explanation:
      "A future-forward solution for teams requiring ultimate flexibility, strategic input, and deep customization. Best suited for complex, layered, or long-term projects where traditional packages don’t fit.",
    useCases: [
      "Startup platform MVPs with roadmap support",
      "Multi-tenant SaaS or product ecosystems",
      "Projects involving external stakeholders, VC firms, or grants",
    ],
    details: [
      {
        title: "Milestone or Hybrid Billing",
        description:
          "Choose a payment model that matches your financial plan, whether that’s fixed-price milestones, phased deposits, or usage-based billing.",
      },
      {
        title: "Collaborative Delivery Approach",
        description:
          "Weekly syncs, stakeholder demos, and deliverable previews help keep large teams aligned and informed.",
      },
      {
        title: "Extended Financing",
        description:
          "Project costs can be financed up to 24 months — ideal for larger builds with longer ROI timelines.",
      },
      {
        title: "Post-Launch Partnership (180 Days)",
        description:
          "We remain engaged for up to six months after launch to support user onboarding, integrations, and refinements based on data.",
      },
    ],
  },
];
