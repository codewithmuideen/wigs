import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin_login", "/account"],
      },
    ],
    sitemap: "https://www.feyishopeluxe.com/sitemap.xml",
  };
}
