import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

const BASE = "https://sbabhinav.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/about/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/`, changeFrequency: "monthly", priority: 0.8 },
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/portfolio/`, changeFrequency: "weekly", priority: 0.8 },
    ...projects.map((p) => ({
      url: `${BASE}/portfolio/${p.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    {
      url: `${BASE}/wedding-photographer-manali/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${BASE}/blog/`, changeFrequency: "weekly", priority: 0.7 },
    ...blogPosts.map((p) => ({
      url: `${BASE}/blog/${p.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
