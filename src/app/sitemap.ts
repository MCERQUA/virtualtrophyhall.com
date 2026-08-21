import type { MetadataRoute } from "next";
import { PRODUCTS, BLOG_POSTS_META, BUSINESS } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/products",
    "/how-it-works",
    "/who-we-serve",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BUSINESS.url}${path}`,
    lastModified: new Date("2026-08-21"),
  }));

  const productPages = PRODUCTS.map((p) => ({
    url: `${BUSINESS.url}/products/${p.slug}`,
    lastModified: new Date("2026-08-21"),
  }));

  const blogPages = BLOG_POSTS_META.map((p) => ({
    url: `${BUSINESS.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
