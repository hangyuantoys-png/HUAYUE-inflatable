import type { MetadataRoute } from "next";
import { applications, blogPosts, company, countryPages, products } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl;
  const staticRoutes = ["", "/products", "/applications", "/about", "/factory", "/download", "/blog", "/contact"];
  const productRoutes = products.map((item) => `/products/${item.slug}`);
  const applicationRoutes = applications.map((item) => `/applications/${item.slug}`);
  const blogRoutes = blogPosts.map((item) => `/blog/${item.slug}`);
  const countryRoutes = countryPages.map((item) => `/${item.slug}`);

  return [...staticRoutes, ...productRoutes, ...applicationRoutes, ...blogRoutes, ...countryRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
