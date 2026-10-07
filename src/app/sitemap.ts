import type { MetadataRoute } from "next";

const BASE = "https://nano-design.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
