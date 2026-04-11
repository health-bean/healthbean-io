import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://healthbean.io/sitemap.xml",
    host: "https://healthbean.io",
  };
}
