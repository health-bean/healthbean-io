import Script from "next/script";

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Health Bean",
  url: "https://healthbean.io",
  description:
    "Data-driven platforms for chronic illness and home health — built for real life.",
  subOrganization: [
    {
      "@type": "SoftwareApplication",
      name: "ChewIQ",
      applicationCategory: "HealthApplication",
      description: "Protocol management and healing platform.",
    },
    {
      "@type": "SoftwareApplication",
      name: "HoneyDoIQ",
      applicationCategory: "LifestyleApplication",
      description: "Smart preventive home maintenance.",
    },
  ],
};

export function JsonLd() {
  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(ORGANIZATION_JSON_LD)}
    </Script>
  );
}
