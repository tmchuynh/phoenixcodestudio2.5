import { PaymentDetails } from "@/lib/interfaces/payments";
import { MdDoubleArrow } from "react-icons/md";

export const paymentPlans: PaymentDetails[] = [
  {
    name: "essential-service-plan",
    title: "Essential Service Plan",
    short: "Starter Plan",
    info: {
      intro: ["A cost-effective solution for startups and small businesses."],
      short: "Starter Plan",
      description:
        "An affordable, entry-level plan designed for startups and small businesses that need to establish a professional digital presence with only the core services. This plan includes the necessary tools to launch a website, basic SEO, and digital marketing support with minimal upfront costs.",
      features: [
        "Pay per milestone or completed service",
        "Monthly billing options available",
        "Flexible payment terms up to 3 months",
      ],
    },
    explanation:
      "Ideal for small-scale projects, the Essential Service Plan lets you pay as you go, ensuring financial control while delivering the key services needed to get your business online.",
    Icon: MdDoubleArrow,
    startingPrice: 1200,
    details: [
      {
        title: "Pay Per Milestone",
        description:
          "Only pay when specific services or milestones are completed to ensure measurable progress.",
      },
      {
        title: "Monthly Payments",
        description:
          "Spread out the cost with monthly billing, helping you manage cash flow effectively.",
      },
      {
        title: "3-Month Payment Term",
        description:
          "The total project cost can be divided over a maximum of three months for added flexibility.",
      },
    ],
  },
  {
    name: "comprehensive-service-package",
    title: "Comprehensive Service Package",
    short: "Classic Plan",
    info: {
      intro: [
        "A balanced plan crafted for growing businesses.",
        "Includes additional customization and strategic guidance.",
      ],
      short: "Classic Plan",
      description:
        "A balanced plan crafted for growing businesses. It includes additional customization, strategic guidance, and more robust support compared to the essential package. This plan is ideal if you’re expanding your digital footprint and need extra features without a huge upfront expense.",
      features: [
        "Split payments into 4–6 installments",
        "Priority support and dedicated project management",
        "Extended payment terms up to 6 months",
      ],
    },
    explanation:
      "Perfect for medium-sized projects, the Comprehensive Service Package offers tailored solutions and extended payment options while ensuring your project stays on schedule with dedicated support.",
    Icon: MdDoubleArrow,
    startingPrice: 7500, // starting at $7,500
    details: [
      {
        title: "4–6 Installment Options",
        description:
          "Manage your finances by splitting the project cost into manageable installments.",
      },
      {
        title: "Priority Support",
        description:
          "Receive dedicated assistance throughout the project to keep everything on track.",
      },
      {
        title: "Up to 6 Months Payment Term",
        description:
          "Enjoy extended payment options that ease budget pressures for more complex projects.",
      },
    ],
  },
  {
    name: "elite-service-package",
    title: "Elite Service Package",
    short: "Advanced Plan",
    info: {
      intro: [
        "A premium solution for large-scale, ongoing projects.",
        "Includes advanced features and continuous improvement.",
      ],
      short: "Advanced Plan",
      description:
        "A premium solution for large-scale, ongoing projects requiring advanced features, continuous improvement, and strategic guidance. This package includes an all-inclusive support structure with dedicated account management and continuous optimization.",
      features: [
        "Monthly retainer payment structure",
        "Flexible terms up to 12 months",
        "Comprehensive ongoing support and maintenance",
      ],
    },
    explanation:
      "Ideal for enterprises or large projects where continuous, high-quality service and support are critical. The Elite Service Package is designed to provide uninterrupted service and scalable solutions over a long-term engagement.",
    Icon: MdDoubleArrow,
    startingPrice: 20000, // starting at $20,000
    details: [
      {
        title: "Monthly Retainer Payments",
        description:
          "Budget with certainty using monthly payments for continuous support.",
      },
      {
        title: "12-Month Payment Term",
        description:
          "Spread costs over up to 12 months to suit long-term projects and ensure cash flow stability.",
      },
      {
        title: "Dedicated, Ongoing Support",
        description:
          "Benefit from priority support that adjusts as your project evolves.",
      },
    ],
  },
  {
    name: "personalized-service-package",
    title: "Personalized Service Package",
    short: "Bespoke Plan",
    info: {
      intro: [
        "A highly tailored plan designed for complex, multi-phase projects.",
        "Includes custom payment structures and flexible terms.",
      ],
      short: "Bespoke Plan",
      description:
        "A highly tailored plan designed for complex, multi-phase projects that require custom payment structures and flexible terms. This package adapts to your unique project requirements and long-term goals, providing ongoing strategic support and adaptable payment options.",
      features: [
        "Custom, milestone-based payment plans",
        "Phased project implementation with continued support",
        "Extended financing options up to 24 months",
      ],
    },
    explanation:
      "Best for complex and large-scale projects, the Personalized Service Package offers custom financial solutions that align with your project’s scope and evolving needs—ensuring quality work while providing significant budget flexibility.",
    Icon: MdDoubleArrow,
    startingPrice: 25000, // starting at $25,000
    details: [
      {
        title: "Custom Payment Plans",
        description:
          "Tailor payment schedules based on specific project milestones for optimal financial control.",
      },
      {
        title: "Phased Implementation with Support",
        description:
          "Implement the project step by step with ongoing collaboration and adjustment options.",
      },
      {
        title: "Flexible Terms Up to 24 Months",
        description:
          "Manage costs effectively over the long term with extended payment options.",
      },
    ],
  },
];
