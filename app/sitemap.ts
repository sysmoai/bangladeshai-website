import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bangladeshai.org';

// Required for Next.js 15 static export of metadata routes.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // Publish only real, canonical URLs. Locale toggle is client-side;
  // /en/* and /bn/* do not have independently localized server-rendered pages.
  const staticRoutes = [
    '', '/about', '/about/emon-hossain', '/about/independence',
    '/about/methodology', '/blog', '/contact', '/faq', '/for-citizens',
    '/for-government', '/for-partners', '/for-students', '/glossary',
    '/mission', '/newsletter', '/press', '/reality-check', '/research',
    '/resources', '/roadmap', '/why-now'
  ];
  const now = new Date();
  const staticItems = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}/`.replace(`${siteUrl}//`, `${siteUrl}/`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));
  const datedItems = (['blog','research'] as const).flatMap((type) =>
    getAllPosts(type, 'en').map((item) => ({
      url: `${siteUrl}/${type}/${item.slug}/`,
      lastModified: Number.isNaN(Date.parse(item.date)) ? now : new Date(item.date),
      changeFrequency: 'monthly' as const,
      priority: type === 'research' ? 0.8 : 0.6,
    }))
  );
  return [...staticItems, ...datedItems];
}
