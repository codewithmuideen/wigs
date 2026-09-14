import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { articles } from "@/lib/journal";

const base = "https://www.feyishopeluxe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/faq",
    "/journal",
    "/track-order",
    "/privacy",
    "/cookies",
    "/terms",
    "/delivery",
    "/returns",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/journal/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
