export const site = {
  name: "Ganesh Pai",
  roleLabel: "Fractional Chief AI Officer",
  location: "Belle Mead, NJ",
  email: "Ganesh.Pai@live.com",
  linkedIn: "https://www.linkedin.com/in/ganeshpai",
  siteUrl: "https://fractional-caio.vercel.app",
} as const;

export const seo = {
  title: "Ganesh Pai | Fractional Chief AI Officer",
  description:
    "Fractional Chief AI Officer for commerce and customer-engagement teams. I help you ship AI in Shopify, Salesforce, and engineering workflows—grounded in 20+ years building digital platforms.",
  ogTitle: "Fractional Chief AI Officer for commerce & service teams",
  ogDescription:
    "Builder-led AI leadership for teams running Shopify, Salesforce, and B2B portals. Book a conversation about where AI should land first.",
} as const;

export const contact = {
  mailtoSubject: "Fractional CAIO — conversation about where AI should land first",
  ctaLabel: "Book a call",
  closingCtaLabel: "Book a conversation about where AI should land first",
} as const;

export function bookCallHref(): string {
  const subject = encodeURIComponent(contact.mailtoSubject);
  return `mailto:${site.email}?subject=${subject}`;
}

export const hero = {
  headline:
    "Fractional Chief AI Officer for commerce and customer-engagement teams",
  subhead:
    "I help leadership teams put AI into live customer journeys and engineering practice—not slide decks. Twenty-plus years leading multi-team platforms; today I run Shopify ecommerce, a B2B portal, Salesforce, and application development for LIXIL Americas.",
  eyebrow: "AI advisory & delivery leadership",
} as const;

export type ServiceRow = {
  service: string;
  goodFor: string;
  helpWith: string[];
};

export const servicesIntro = {
  title: "What I can help with",
  lead:
    "I work with executives and engineering leaders who need someone who has shipped AI in commerce and service—not just recommended it. Engagements are tailored; these are the areas I know from production work.",
} as const;

export const services: ServiceRow[] = [
  {
    service: "Fractional CAIO",
    goodFor:
      "Leadership teams that need a senior AI voice in the room part-time—without hiring a full-time C-level seat.",
    helpWith: [
      "Setting and prioritizing the AI agenda across commerce, CRM, and service",
      "Choosing build vs. buy and keeping pilots on a path to production",
      "Aligning product, business, and engineering on measurable outcomes",
      "Vendor and partner conversations grounded in what your stack can support",
    ],
  },
  {
    service: "AI Roadmap & Use-Case Discovery",
    goodFor:
      "Teams with Shopify, Salesforce, or a B2B portal who need a practical first use case—not a generic strategy deck.",
    helpWith: [
      "Mapping workflows where search, agents, or automation change operations",
      "Prioritizing use cases by value, feasibility, and integration risk",
      "Defining success metrics tied to service or revenue operations",
      "A phased plan with owners—search, image assist, agent assist, or voice",
    ],
  },
  {
    service: "Team Enablement",
    goodFor:
      "Engineering and service leaders who want their teams to adopt AI in daily delivery and operations.",
    helpWith: [
      "Workshops on AI-assisted service (Agentforce, Agent Assist patterns)",
      "Introducing autonomous coding agents with built-in verifiability (Loop engineering)",
      "Coaching leads on API-first integration across AWS, GCP, and MuleSoft",
      "Mentoring managers on cross-team delivery with onsite and offshore teams",
    ],
  },
  {
    service: "AI Advisory Calls",
    goodFor:
      "Founders and executives who want a plan pressure-tested before committing budget.",
    helpWith: [
      "Reviewing architecture for Vertex AI search or image-assist use cases",
      "Sanity-checking Salesforce agent rollouts and FAQ knowledge design",
      "Scoping a fixed build (one agent or one search initiative)",
      "Short workshop to pick the first use case and next 90 days",
    ],
  },
];

export const fractionalCaio = {
  title: "What is a Fractional CAIO?",
  paragraphs: [
    "A Fractional Chief AI Officer is a senior leader you engage part-time—usually on retainer—to set the AI agenda, decide what to build and what to skip, and stay close enough that experiments become production systems.",
    "I use “Fractional CAIO” as positioning, not a title I have held. My day job is leading the System of Engagement for LIXIL Americas; this practice is separate advisory work for other organizations.",
    "My recommendations come from building: Vertex AI ecommerce search, AI image search that cut call handling by about four minutes, Salesforce Agentforce and Agent Assist, voice agents, and Loop engineering for autonomous coding agents with verifiability.",
  ],
} as const;

export const whoItsFor = {
  title: "Who this is for",
  lead:
    "Companies with a real commerce or service operation that want AI shipped in search, service, or how engineering works—and need a leader who has done it, not only presented it.",
  audiences: [
    {
      title: "Commerce & CRM operators",
      body:
        "You run Shopify, Salesforce, or a B2B portal and need AI that fits your integrations, data, and release cadence.",
    },
    {
      title: "Service leaders under pressure",
      body:
        "Call volume, handle time, and agent quality matter. You want agent assist, summaries, and knowledge surfaced in the flow of work.",
    },
    {
      title: "Engineering orgs ready to build differently",
      body:
        "You want coding agents and AI in the delivery loop—with review and verifiability—not a one-off copilot pilot.",
    },
    {
      title: "Not ready for a full-time CAIO",
      body:
        "You need more than a workshop and less than a permanent C-level hire—a customized retainer or scoped build.",
    },
  ],
} as const;

export type EngagementModel = {
  title: string;
  summary: string;
  bullets: string[];
};

export const engagement = {
  title: "Ways to engage",
  lead:
    "Every engagement is customized around how your team works. These are common shapes—not packages and never with fixed pricing on this site.",
  models: [
    {
      title: "Ongoing advisory retainer",
      summary:
        "A senior AI leader in the loop with your leadership team on agenda, priorities, and build decisions.",
      bullets: [
        "Monthly or biweekly cadence—your rhythm",
        "Between-meeting reachability we agree up front",
        "Can include team workshops when you need them",
      ],
    },
    {
      title: "Team enablement",
      summary:
        "Hands-on workshops and coaching so service and engineering teams adopt AI in their stack.",
      bullets: [
        "Custom sessions for Shopify, Salesforce, or portal teams",
        "Leadership briefings on what is production-ready today",
        "Coaching for leads driving agent or search initiatives",
      ],
    },
    {
      title: "Scoped build or discovery",
      summary:
        "Fixed-scope delivery or a short workshop to choose the first use case.",
      bullets: [
        "One agent initiative, one search use case, or one enablement sprint",
        "Short workshop to map workflows and pick where AI lands first",
        "Clear handoff criteria so your team can operate what we ship",
      ],
    },
  ] satisfies EngagementModel[],
  customized: {
    title: "Customized. Not a package.",
    lead: "We design scope, cadence, and depth together.",
    dimensions: [
      {
        title: "Cadence",
        body: "Monthly retainer, advisory calls, or a time-boxed discovery sprint.",
      },
      {
        title: "Scope",
        body: "Counsel only, or leadership plus hands-on enablement and architecture.",
      },
      {
        title: "Depth",
        body: "Executive alignment, or in the room with engineers on integrations and pilots.",
      },
      {
        title: "Duration",
        body: "A focused workshop, a quarterly retainer, or a single scoped build.",
      },
    ],
  },
} as const;

export const credibility = {
  title: "Builder-led. Not slide-deck-led.",
  lead:
    "I still lead engineering teams and ship AI in production. In a leadership conversation I can separate a demo from a system your operators can run.",
  highlights: [
    {
      label: "20+ years",
      detail: "Engineering leadership across commerce, CRM, and custom applications",
    },
    {
      label: "Production AI",
      detail:
        "Vertex AI ecommerce search; image search (~4 min lower call handling); Agentforce & Agent Assist; voice agents; Loop engineering",
    },
    {
      label: "Platforms",
      detail:
        "Shopify, Salesforce (Sales, Service, Marketing Cloud), B2B portals, PIM/DAM/CMS, payments (Braintree, PayPal)",
    },
    {
      label: "Cloud & integration",
      detail: "AWS, GCP (Vertex AI), APIs/microservices, MuleSoft",
    },
  ],
  experienceNote:
    "From 2019–2021 I led a digital platform program (ecommerce, CRM, DAM, PIM, CMS, ERP) that contributed to about a 15% revenue increase and about a 40% cost reduction—that outcome was platform transformation, not an AI initiative.",
  roles: [
    "LIXIL — Leader, System of Engagement, Americas (Sep 2024–present)",
    "LIXIL — Leader, Digital & Customer Engagement Systems (Nov 2021–Aug 2024)",
    "LIXIL — Leader, IT Digital E-Commerce & Application Development (Oct 2019–Oct 2021)",
    "IQVIA — Sr. Manager, Software Development (Sep 2011–Aug 2019)",
    "PVH — Lead Developer / Project Manager (Oct 2008–Sep 2011)",
    "B.E. Computer Science — Manipal Institute of Technology",
  ],
} as const;

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Have you been a Chief AI Officer before?",
    answer:
      "No. “Fractional CAIO” describes how I advise other companies part-time. My employed role is engineering leadership at LIXIL Americas, separate from this practice.",
  },
  {
    question: "What does a Fractional CAIO do day to day?",
    answer:
      "I help your leadership team decide where AI fits, what to build first, and how to measure it—then stay close enough that pilots reach production. That can include roadmap work, vendor conversations, and working with your engineers on architecture.",
  },
  {
    question: "Do you implement the systems yourself?",
    answer:
      "I can lead a fixed-scope build or work alongside your team, depending on the engagement. My background is hands-on leadership across Shopify, Salesforce, cloud, and integrations—not-only strategy.",
  },
  {
    question: "How is this different from a generic AI workshop?",
    answer:
      "Workshops are one format. I also offer ongoing retainers and scoped builds. Everything is tailored to your stack and operating model, with claims grounded in work I have shipped.",
  },
  {
    question: "Is LIXIL a client of this practice?",
    answer:
      "No. LIXIL is my employer. I do not list them as a fractional client, and I do not imply they use this advisory service.",
  },
  {
    question: "Do you offer AI governance as a standalone service?",
    answer:
      "I do not offer a standalone “AI governance” product. Risk and operating guardrails show up inside roadmap, agent design, and how engineering adopts AI—but not as a separate governance-only engagement.",
  },
  {
    question: "Where are you based, and who do you work with?",
    answer:
      "I am based in Belle Mead, New Jersey. I work with U.S. teams running digital commerce and customer engagement platforms, onsite or remote.",
  },
];

export const closing = {
  title: "Have an AI decision to make?",
  lead:
    "One conversation to frame the problem, pressure-test your plan, and agree where AI should land first.",
} as const;

export const footer = {
  tagline:
    "Fractional Chief AI Officer advisory for commerce and customer-engagement teams.",
  copyright: `© ${new Date().getFullYear()} Ganesh Pai`,
} as const;

// Uncomment when testimonials are approved — not rendered today.
// export const testimonialsPlaceholder = [];
