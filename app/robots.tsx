import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/resume/"],
    },
    sitemap: "https://jenniferhaggerty.com/sitemap.xml",
  };
}
