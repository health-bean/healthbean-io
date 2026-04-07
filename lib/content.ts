export const SITE = {
  name: "Health Bean",
  tagline: "We believe everyone deserves to understand their own health.",
  url: "https://healthbean.io",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#approach" },
  { label: "Team", href: "#team" },
] as const;

export const HERO = {
  headline: "We believe everyone deserves to understand their own health.",
  subtitle:
    "Data-driven platforms that help people manage chronic illness and protect the environments they heal in — powered by AI, built for real life.",
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

export const SHOWCASE = {
  label: "See It In Action",
  headline: "This is what intelligent health looks like.",
  subtitle:
    "Real insights. Real tracking. Real patterns your doctors can't see.",
  insight: {
    badge: "Property Pattern",
    title:
      "3 foods you eat regularly share a hidden property: high oxalate. Headaches appeared within 8 hours 71% of the time.",
    confidence: "71%",
    occurrences: "3 foods",
    foods: ["Spinach", "Almonds", "Quinoa"],
  },
  timeline: {
    date: "Tuesday, March 12",
    entries: [
      {
        time: "8:30a",
        type: "Meal" as const,
        description: "Salmon, avocado, sauerkraut",
        note: "AIP compliant",
      },
      {
        time: "9:00a",
        type: "Supplement" as const,
        description: "Vitamin D, Omega-3, Probiotics",
      },
      {
        time: "2:15p",
        type: "Symptom" as const,
        description: "Joint pain \u2014 severity 6/10",
      },
      {
        time: "4:00p",
        type: "Exposure" as const,
        description: "Mold \u2014 office building HVAC",
      },
    ],
  },
  homeHealth: {
    score: 85,
    tasks: [
      {
        name: "Replace HVAC Filter",
        status: "overdue" as const,
        detail: "Overdue 3 days",
      },
      {
        name: "Test Smoke Detectors",
        status: "soon" as const,
        detail: "Due in 2 days",
      },
      {
        name: "Clean Dryer Vent",
        status: "scheduled" as const,
        detail: "Scheduled \u2014 Apr 20",
      },
    ],
  },
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
  headline: "Built by people who live it.",
  members: [
    {
      name: "Amy Mandell",
      initials: "AM",
      role: "Co-Founder",
      bio: "Certified health coach who has navigated her own chronic illness journey. Her lived experience and deep roots in the functional medicine community drive everything we build.",
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
  headline: "Be the first to know.",
  body: "Sign up for early access and we'll let you know when our platforms are ready for you.",
} as const;

export const FOOTER = {
  copyright: `\u00A9 ${new Date().getFullYear()} Health Bean. All rights reserved.`,
} as const;
