export const SITE = {
  name: "health bean",
  tagline: "Intelligent Health Platforms",
  url: "https://healthbean.io",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#approach" },
  { label: "Team", href: "#team" },
] as const;

export const HERO = {
  headline: "Better health starts with better intelligence.",
  subtitle:
    "We build intelligent platforms that help people take control of their health — from the food they eat to the home they live in.",
  primaryCta: { label: "Explore Our Products", href: "#products" },
  secondaryCta: { label: "Our Mission", href: "#problem" },
} as const;

export const PROBLEM = {
  label: "The Problem",
  headline: "Health is more than what you eat. It's where you live, too.",
  body: "50 million Americans live with autoimmune and chronic conditions. They track symptoms, follow complex protocols, and spend thousands searching for answers. But most health tools only see part of the picture — they miss the environment around you.",
  stats: [
    { value: "50M+", description: "Americans with\nchronic illness" },
    { value: "$88.7B", description: "mHealth market\nby 2032" },
    { value: "0", description: "platforms connecting\nbody + home health" },
  ],
} as const;

export const APPROACH = {
  label: "Our Approach",
  headline: "Intelligence at every layer of your health.",
  body: "Health Bean builds tools that are smart enough to understand your unique situation — and simple enough to use when you're exhausted, foggy, or overwhelmed. We meet people where they are.",
  pillars: [
    {
      icon: "🧠",
      title: "AI-Powered",
      description: "Pattern recognition that reveals what humans miss",
    },
    {
      icon: "💚",
      title: "Patient-First",
      description: "Designed for brain fog, fatigue, and real life",
    },
    {
      icon: "🔗",
      title: "Holistic",
      description: "Body health + home health, one vision",
    },
  ],
} as const;

export const PRODUCTS = {
  label: "Our Products",
  headline: "Two tools. One vision.",
  items: [
    {
      name: "ChewIQ",
      wordmark: { primary: "Chew", accent: "IQ" },
      tagline: "Your Intelligent Protocol Coach",
      features: [
        "AI-powered food & symptom tracking",
        "9 healing protocols built in (AIP, GAPS, Low FODMAP...)",
        "Correlation engine finds your triggers",
        "Designed for brain fog & fatigue",
        "Practitioner collaboration tools",
      ],
      primaryCta: { label: "Learn More", href: "https://chew-iq.vercel.app" },
      secondaryCta: { label: "Try It Free", href: "https://chew-iq.vercel.app" },
      variant: "chewiq" as const,
    },
    {
      name: "HoneyDoIQ",
      wordmark: { primary: "HoneyDo", accent: "IQ" },
      tagline: "Smart Home Health Tracking",
      features: [
        "100+ maintenance task templates",
        "Home health score & urgency tracking",
        "Multi-property & family sharing",
        "Smart reminders so nothing slips",
        "Cost tracking over time",
      ],
      primaryCta: { label: "Learn More", href: "https://honeydo-iq.vercel.app" },
      secondaryCta: { label: "Try It Free", href: "https://honeydo-iq.vercel.app" },
      variant: "honeydo" as const,
    },
  ],
} as const;

export const CONNECTION = {
  quote:
    "We believe true health is holistic — what goes in your body and what surrounds it. That's why we build tools for both.",
} as const;

export const TEAM = {
  label: "Who We Are",
  headline: "Built by people who get it.",
  members: [
    {
      name: "Amy Mandell",
      initials: "AM",
      role: "Co-Founder",
      bio: "Certified health coach with deep expertise in chronic illness recovery. Connected to the practitioner community that needs these tools.",
    },
    {
      name: "Dee Byrne",
      initials: "DB",
      role: "Co-Founder & CEO",
      bio: "Technical and operational leader who built both platforms. Personal connection to chronic illness through family drives the mission.",
    },
  ],
} as const;

export const CTA = {
  headline: "Ready to take control of your health?",
  body: "Start your journey with the tools built for real people navigating real health challenges.",
  primaryCta: { label: "Try ChewIQ", href: "https://chew-iq.vercel.app" },
  secondaryCta: { label: "Try HoneyDoIQ", href: "https://honeydo-iq.vercel.app" },
} as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Health Bean. All rights reserved.`,
} as const;
