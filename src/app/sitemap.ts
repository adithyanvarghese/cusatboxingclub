import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, "");

  const routes = [
    "",
    "/about",
    "/courses",
    "/schedule",
    "/facilities",
    "/team",
    "/gallery",
    "/trial",
    "/join",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/trial" || route === "/join" ? 'daily' : 'weekly',
    priority: route === "" ? 1.0 : route === "/trial" || route === "/join" || route === "/courses" ? 0.9 : 0.8,
  }));
}
