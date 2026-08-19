import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Google-Extended',
          'Applebot',
          'Applebot-Extended',
          'Bytespider',
          'Amazonbot'
        ],
        allow: '/',
      }
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
