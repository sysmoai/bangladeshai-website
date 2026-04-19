import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bangladeshai.org'

  const staticRoutes = [
    '',
    '/en',
    '/bn',
    '/en/about',
    '/bn/about',
    '/en/research',
    '/bn/research',
    '/en/blog',
    '/bn/blog',
    '/en/reality-check',
    '/bn/reality-check',
    '/en/roadmap',
    '/bn/roadmap',
    '/en/for-government',
    '/bn/for-government',
    '/en/for-citizens',
    '/bn/for-citizens',
    '/en/for-partners',
    '/bn/for-partners',
    '/en/newsletter',
    '/bn/newsletter',
    '/en/contact',
    '/bn/contact',
    '/en/resources',
    '/bn/resources',
  ]

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/en' || route === '/bn' ? 1.0 : 0.8,
  }))
}
