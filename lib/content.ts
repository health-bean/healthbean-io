export const SITE = {
  name: "Health Bean",
  tagline: "Intelligent Health Platforms",
  url: "https://healthbean.io",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#approach" },
  { label: "Team", href: "#team" },
] as const;

export const HERO = {
  headline: "Better health starts at home.",
  subtitle:
    "We build data-driven platforms that help people manage chronic illness and protect the environments they heal in — powered by AI, built for real life.",
  primaryCta: { label: "Explore Our Products", href: "#products" },
  secondaryCta: { label: "Our Mission", href: "#problem" },
} as const;

export const PROBLEM = {
  label: "The Problem",
  headline:
    "Chronic illness is complex. The tools haven't kept up.",
  body: "50 million Americans navigate autoimmune conditions, complex healing protocols, and environmental triggers — often alone. They track symptoms across dozens of variables, manage multiple protocols simultaneously, and spend thousands searching for patterns their doctors can't see. And the environmental factors that influence recovery — mold, air quality, chemical exposures — go completely untracked.",
  stats: [
    { value: "50M+", description: "Americans with\nchronic illness" },
    { value: "Billions", description: "invested in mobile\nhealth every year" },
  ],
} as const;

export const APPROACH = {
  label: "Our Approach",
  headline: "Real data. Real insights. Real progress.",
  body: "Health Bean builds platforms with protocol-level intelligence and AI-powered correlation analysis — tools that find the hidden patterns between what you do, what you're exposed to, and how you feel. Designed for people managing real complexity, not counting calories.",
  pillars: [
    {
      icon: "brain",
      title: "AI-Powered Analysis",
      description:
        "Correlation engines that surface hidden connections between protocols, exposures, and symptoms",
    },
    {
      icon: "heart",
      title: "Built for Chronic Illness",
      description:
        "Designed for brain fog, fatigue, and the complexity of managing multiple protocols at once",
    },
    {
      icon: "globe",
      title: "Body + Environment",
      description:
        "Your healing journey and your home health — because recovery doesn't happen in a vacuum",
    },
  ],
} as const;

export const PRODUCTS = {
  label: "Our Products",
  headline: "Two platforms. One mission.",
  items: [
    {
      name: "ChewIQ",
      wordmark: { primary: "Chew", accent: "IQ" },
      tagline: "The Protocol Management & Healing Platform",
      features: [
        "AI-powered symptom, supplement, and exposure tracking",
        "9 healing protocols with built-in compliance intelligence",
        "Correlation engine that identifies your unique triggers",
        "Environmental exposure tracking (mold, chemicals, EMF)",
        "Practitioner dashboard for data-driven treatment decisions",
      ],
      primaryCta: { label: "Learn More", href: "https://chew-iq.vercel.app" },
      secondaryCta: {
        label: "Try It Free",
        href: "https://chew-iq.vercel.app",
      },
      variant: "chewiq" as const,
    },
    {
      name: "HoneyDoIQ",
      wordmark: { primary: "HoneyDo", accent: "IQ" },
      tagline: "Smart Preventive Home Maintenance",
      features: [
        "100+ maintenance task templates matched to your home",
        "Home health scoring based on completion and urgency",
        "Multi-property management from one account",
        "Family collaboration with shared responsibility",
        "Cost tracking and maintenance history over time",
      ],
      primaryCta: {
        label: "Learn More",
        href: "https://honeydo-iq.vercel.app",
      },
      secondaryCta: {
        label: "Try It Free",
        href: "https://honeydo-iq.vercel.app",
      },
      variant: "honeydo" as const,
    },
  ],
} as const;

export const CONNECTION = {
  quote:
    "No one should navigate chronic illness alone. We build the intelligence layer that reveals what's working, what's not, and what to try next.",
} as const;

export const TEAM = {
  label: "Who We Are",
  headline: "Built by people who get it.",
  members: [
    {
      name: "Amy Mandell",
      initials: "AM",
      role: "Co-Founder",
      bio: "Certified health coach specializing in chronic illness recovery. Deep roots in the functional medicine practitioner community.",
    },
    {
      name: "Dee Byrne",
      initials: "DB",
      role: "Co-Founder & CEO",
      bio: "Technical and operational leader who built both platforms. Personal connection to chronic illness through family drives everything we do.",
    },
  ],
} as const;

export const CTA = {
  headline: "Ready to take control of your health?",
  body: "Real tools for real people managing real complexity. Start your journey today.",
  primaryCta: { label: "Try ChewIQ", href: "https://chew-iq.vercel.app" },
  secondaryCta: {
    label: "Try HoneyDoIQ",
    href: "https://honeydo-iq.vercel.app",
  },
} as const;

export const FOOTER = {
  copyright: `\u00A9 ${new Date().getFullYear()} Health Bean. All rights reserved.`,
} as const;
