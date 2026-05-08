import type { MetadataRoute } from "next";
import { galleries } from "../site/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return galleries.map((item) => ({
    url: `${process.env["HOST"]}/photography/gallery/${item.slug}`,
    lastModified: new Date(),
  }));
}
