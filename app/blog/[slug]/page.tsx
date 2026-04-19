import { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/content'
import BlogPostClient from './BlogPostClient'
import { notFound } from 'next/navigation'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bangladeshai.org'

const fallbackContent = `This is a placeholder article. Full content coming soon.

Bangladesh is at a critical juncture in the AI revolution. With a readiness score of 47.12/100 and ranked 80th out of 188 countries, there is significant work to be done — but also enormous opportunity.

## Key Points

- Bangladesh has a young, connected population of 170 million
- 65 million internet users under the age of 35
- 67 critical requirements are missing from our AI ecosystem
- Strategic investment now could position Bangladesh as a regional AI leader by 2035

## What Can Be Done

The path forward requires coordinated action across government, industry, and civil society. BangladeshAI.org exists to provide the research and advocacy needed to make that coordination possible.

*Follow us for the full article, coming soon.*`

const fallbackPosts: Record<string, { title: string; category: string; date: string; readTime: string; excerpt: string }> = {
  'why-ai-is-not-magic': {
    title: 'Why AI is Not Magic — And Why That Makes It More Powerful',
    category: 'Education',
    date: '2026-03-20',
    readTime: '6',
    excerpt: 'A plain-language guide to what AI actually is and why understanding it matters.',
  },
  'bangladesh-ai-readiness-47': {
    title: "Bangladesh's AI Readiness Score: 47.12/100 — An Honest Reckoning",
    category: 'Analysis',
    date: '2026-03-22',
    readTime: '8',
    excerpt: "Breaking down Bangladesh's 2026 AI Readiness Score and what it means for the nation.",
  },
  'economic-impact-analysis': {
    title: 'The Economic Impact of AI on Bangladesh: A $150 Billion Opportunity',
    category: 'Economics',
    date: '2026-03-25',
    readTime: '10',
    excerpt: "How strategic AI adoption could add $150 billion to Bangladesh's GDP by 2035.",
  },
  'what-singapore-teaches-us': {
    title: 'What Singapore Teaches Bangladesh About AI Strategy',
    category: 'Policy',
    date: '2026-03-15',
    readTime: '7',
    excerpt: "Singapore's AI playbook and how Bangladesh can adapt it for our own context.",
  },
  'bangla-nlp-sovereign-stack': {
    title: 'Bangla NLP and the Sovereign AI Stack: Why It Cannot Wait',
    category: 'Technology',
    date: '2026-03-10',
    readTime: '9',
    excerpt: 'Building a sovereign Bangla AI stack — why it matters and how to do it.',
  },
  'youth-and-ai-jobs': {
    title: "Bangladesh's 65 Million Young People and the AI Job Market",
    category: 'Employment',
    date: '2026-03-05',
    readTime: '6',
    excerpt: 'Are young Bangladeshis ready for the AI economy? What needs to change.',
  },
  'ai-bangla-language-guide': {
    title: 'How to Use AI Entirely in Bangla — No English Required',
    category: 'Education',
    date: '2026-03-27',
    readTime: '5',
    excerpt: 'A practical guide for using modern AI tools entirely in Bangla.',
  },
  'population-asset-not-problem': {
    title: "Bangladesh's 170 Million People Are an Asset, Not a Problem",
    category: 'Vision',
    date: '2026-03-26',
    readTime: '7',
    excerpt: "Bangladesh's large, young population is our greatest advantage in the AI era.",
  },
  'sovereign-ai-infrastructure-why-it-matters': {
    title: 'Sovereign AI Infrastructure: Why Bangladesh Cannot Afford to Wait',
    category: 'Policy',
    date: '2026-03-24',
    readTime: '8',
    excerpt: 'The case for national AI compute sovereignty and why every year of delay costs Bangladesh.',
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug('blog', params.slug, 'en')
  const fb = fallbackPosts[params.slug]
  const data = post || fb

  if (!data) return { title: 'Article Not Found — BangladeshAI.org' }

  const ogUrl = `${siteUrl}/api/og?title=${encodeURIComponent(data.title)}&category=${encodeURIComponent(data.category)}&readTime=${encodeURIComponent(data.readTime)}`

  return {
    title: `${data.title} — BangladeshAI.org`,
    description: data.excerpt,
    authors: [{ name: 'Emon Hossain', url: `${siteUrl}/about/emon-hossain` }],
    openGraph: {
      title: data.title,
      description: data.excerpt,
      type: 'article',
      publishedTime: data.date,
      authors: ['Emon Hossain'],
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.excerpt,
      images: [ogUrl],
    },
    alternates: { canonical: `${siteUrl}/blog/${params.slug}` },
  }
}

export function generateStaticParams() {
  const posts = getAllPosts('blog', 'en')
  const fallbackSlugs = Object.keys(fallbackPosts)
  const allSlugs = [...new Set([...posts.map((p) => p.slug), ...fallbackSlugs])]
  return allSlugs.map((slug) => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('blog', params.slug, 'en')
  const fb = fallbackPosts[params.slug]
  const data = post || (fb ? { ...fb, slug: params.slug, author: 'Emon Hossain', content: fallbackContent } : null)

  if (!data) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.excerpt,
    datePublished: data.date,
    dateModified: data.date,
    author: {
      '@type': 'Person',
      name: 'Emon Hossain',
      url: `${siteUrl}/about/emon-hossain`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BangladeshAI.org',
      url: siteUrl,
    },
    url: `${siteUrl}/blog/${params.slug}`,
    articleSection: data.category,
    inLanguage: 'en-US',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: data.title, item: `${siteUrl}/blog/${params.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPostClient post={data} />
    </>
  )
}
