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
        "A lean and highly practical solution tailored specifically for startups and solo entrepreneurs aiming to establish a strong digital presence quickly. Strategically crafted for businesses operating on tight budgets, this package delivers a professional, polished launch experience without unnecessary overhead.",
        "Perfect for those who prioritize speed, simplicity, and functionality while maintaining a high standard of design and usability. Empowers early-stage ventures to go to market faster with confidence, clarity, and a user-first digital experience.",
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
      "This plan provides a strategic, phased investment model that enables small businesses to establish a solid digital foundation while maintaining financial control. By focusing on essential features first, it allows for a swift and professional launch without overcommitting resources. As the business grows, the digital presence can scale seamlessly, adapting to evolving needs and priorities. It’s a smart, sustainable way to enter the market with confidence while preserving flexibility for future enhancements.",

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
        "A strategic and scalable package crafted for growing businesses aiming to strengthen and expand their digital presence. Carefully balances budget-conscious execution with elevated service offerings, providing a clear path to long-term success and support.",
        "Ideal for companies ready to move beyond the basics and invest in a more robust, adaptable digital infrastructure. Designed to support evolving needs, it offers a harmonious blend of design excellence, performance optimization, and collaborative refinement.",
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
      "This plan is tailored for businesses seeking to elevate their online presence through thoughtful digital strategy and refined visual storytelling. It combines structured project planning, creative collaboration, and performance-driven development to ensure your brand stands out in a competitive landscape. With long-term scalability in mind, it supports growing organizations with the tools and systems needed to adapt, expand, and lead in their space.",
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
        "An enterprise-grade solution architected for companies focused on innovation, operational scale, and digital leadership. Merges high-level strategic consulting, continuous delivery pipelines, and full-service execution for ongoing digital evolution.",
        "Optimized for organizations with complex internal workflows, large user bases, or multi-channel infrastructure. This plan empowers companies to maintain peak performance, maximize ROI, and continually innovate across all digital touchpoints.",
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
      "An elite-level digital transformation package engineered for enterprises with dynamic needs and long-term visions. It supports organizations navigating complex ecosystems—whether through integrations, automation, or high-volume customer engagement. This plan fosters innovation at scale, offering comprehensive strategy, agile delivery, and full-stack implementation to align technology with business outcomes. Perfect for teams seeking measurable growth, system resilience, and sustained digital excellence.",
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
        "A bespoke solution meticulously designed for experimental, complex, or multi-phase digital initiatives. Offers custom financial structuring, deep discovery sessions, and coordination across multiple stakeholders and departments. Highly adaptable and built from the ground up, this package is made for teams who need freedom, innovation, and strategic precision.",
        "Whether you're piloting something bold or orchestrating a multi-platform experience, this plan meets complexity with clarity and custom architecture.",
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
      "This offering is built for ambitious, future-focused projects that don’t fit the mold of traditional service plans. It emphasizes flexibility, strategy, and deep customization—ideal for R&D-driven initiatives, cross-functional product teams, or multi-agency collaborations. With phased planning, adaptive budgeting, and expert oversight, it supports digital ventures that require advanced problem-solving, agile execution, and long-term adaptability.",
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
