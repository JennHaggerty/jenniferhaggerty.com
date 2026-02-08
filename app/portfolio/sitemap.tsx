import type { MetadataRoute } from "next";
import { site } from "../../src/site";
import { getSlugFromTitle } from "../../src/function";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return site.portfolio.map((item) => ({
    url: `/portfolio/${getSlugFromTitle(item.title)}`,
    lastModified: new Date(),
  }));
}
