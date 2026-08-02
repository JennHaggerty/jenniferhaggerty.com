import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jenniferhaggerty.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://jenniferhaggerty.com/web-development",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jenniferhaggerty.com/web-development/portfolio",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://jenniferhaggerty.com/web-development/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://jenniferhaggerty.com/web-development/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://jenniferhaggerty.com/photography",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jenniferhaggerty.com/photography/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      images: ["https://jenniferhaggerty.com/photography/images/ophelia-1.jpg"],
    },
    {
      url: "https://jenniferhaggerty.com/photography/prices",
      lastModified: "2025-12-18T14:47:22+00:00",
      changeFrequency: "yearly",
    },
    {
      url: "https://jenniferhaggerty.com/photography/galleries",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
