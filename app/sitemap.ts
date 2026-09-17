import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eng-saeed.vercel.app";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/saeed-MERN-stack.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
