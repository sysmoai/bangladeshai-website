import { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/content'
import ResearchPostClient from './ResearchPostClient'
import { notFound } from 'next/navigation'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bangladeshai.org'

const ALL_PAPERS: Record<string, { title: string; category: string; date: string; readTime: string; excerpt: string }> = {
  'ai-readiness': {
    title: 'Bangladesh AI Readiness Assessment 2026: Full Analysis',
    category: 'Global',
    date: '2026-03-01',
    readTime: '20',
    excerpt: "Comprehensive assessment of Bangladesh's AI readiness across 15 domains and 92 requirements. Oxford Insights GGAI 2024 analysis, three-pillar breakdown, 67 critical gaps identified.",
  },
  'global-benchmarks': {
    title: 'Global AI Readiness Benchmarks 2026: What Bangladesh Must Learn',
    category: 'Global',
    date: '2026-01-20',
    readTime: '20',
    excerpt: "Comprehensive analysis of AI readiness across 65+ countries with policy lessons for Bangladesh's roadmap.",
  },
  'economic-impact': {
    title: 'Economic Impact of AI on Bangladesh: Full Research Report 2026',
    category: 'Economy',
    date: '2026-02-15',
    readTime: '22',
    excerpt: 'Sector-by-sector AI economic impact analysis with investment framework for $150B+ GDP impact by 2035.',
  },
  'national-strategy': {
    title: 'Bangladesh National AI Strategy — 12 Pillars for 2026–2033',
    category: 'Policy',
    date: '2026-01-15',
    readTime: '24',
    excerpt: 'A 12-pillar national AI strategy with funded milestones and measurable targets for Bangladesh.',
  },
  'ministry-use-cases': {
    title: "Ministry-by-Ministry AI Use Cases: Bangladesh's 20 Ministries",
    category: 'Policy',
    date: '2026-02-15',
    readTime: '22',
    excerpt: 'Concrete AI implementation opportunities mapped to all 20 key Bangladesh ministries.',
  },
  'policy-regulation': {
    title: 'AI Policy & Regulatory Framework for Bangladesh',
    category: 'Policy',
    date: '2026-02-01',
    readTime: '18',
    excerpt: 'The institutions, laws, and standards Bangladesh needs for responsible AI governance.',
  },
  'anti-corruption': {
    title: 'Anti-Corruption AI — A 4-Layer Framework for Bangladesh',
    category: 'Policy',
    date: '2026-01-05',
    readTime: '16',
    excerpt: 'How AI can systematically reduce corruption through transaction monitoring, procurement transparency, and whistleblower protection.',
  },
  'bangla-nlp': {
    title: 'Bangla AI & Sovereign NLP Stack — The Case for Bangladesh',
    category: 'Technology',
    date: '2025-12-15',
    readTime: '19',
    excerpt: 'The case for sovereign Bangla language AI infrastructure and a technical roadmap for building it.',
  },
  'workforce-education': {
    title: "Workforce & Education — AI Reskilling for Bangladesh's 170 Million",
    category: 'Education',
    date: '2025-11-10',
    readTime: '20',
    excerpt: 'Sector-by-sector AI disruption mapping and a national reskilling framework targeting 5 million workers by 2030.',
  },
  'risk-management': {
    title: 'AI Risk Management & Non-Negotiables for Bangladesh',
    category: 'Policy',
    date: '2025-10-20',
    readTime: '17',
    excerpt: 'The 8 priority AI risks for Bangladesh, non-negotiable red lines, and a calibrated risk management framework.',
  },
}

const FALLBACK_CONTENT = `## Executive Summary

This research paper is under active development. Full publication coming soon.

Bangladesh's AI readiness score of 47.12/100 (rank 80/188) reflects meaningful digital progress alongside critical structural vulnerabilities. This research examines the policy, technical, and institutional dimensions of Bangladesh's AI readiness and proposes evidence-based recommendations.

## Key Findings

- **67 missing requirements** across infrastructure, governance, talent, and research domains
- Government AI strategy exists on paper but lacks dedicated funding and enforcement mechanisms
- Bangla NLP capabilities remain severely underrepresented compared to major world languages
- Compute infrastructure is almost entirely dependent on foreign cloud providers
- University AI programs are nascent and significantly under-resourced

## Methodology

This assessment uses the Oxford Insights Government AI Readiness Index framework, adapted for Bangladesh's specific context, supplemented by primary research, government data, and expert consultation.

## Recommendations

1. Establish a National AI Commission with authority and dedicated budget
2. Invest in sovereign Bangladesh AI compute infrastructure
3. Fund Bangla NLP research at leading universities
4. Mandate AI literacy in secondary and higher education curricula
5. Enact a National AI Act with risk-based regulatory framework
6. Create regulatory sandboxes for AI innovation in priority sectors

*Full research paper with data and citations available upon request via research@bangladeshai.org*`

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug('research', params.slug, 'en')
  const fb = ALL_PAPERS[params.slug]
  const data = post || fb

  if (!data) return { title: 'Research Not Found — BangladeshAI.org' }

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
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.excerpt,
      images: [ogUrl],
    },
    alternates: { canonical: `${siteUrl}/research/${params.slug}` },
  }
}

export function generateStaticParams() {
  const mdxPapers = getAllPosts('research', 'en')
  const allSlugs = [...new Set([...mdxPapers.map((p) => p.slug), ...Object.keys(ALL_PAPERS)])]
  return allSlugs.map((slug) => ({ slug }))
}

export default function ResearchPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('research', params.slug, 'en')
  const fb = ALL_PAPERS[params.slug]
  const data = post || (fb ? { ...fb, slug: params.slug, author: 'Emon Hossain', content: FALLBACK_CONTENT } : null)

  if (!data) notFound()

  const scholarlyArticleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
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
    url: `${siteUrl}/research/${params.slug}`,
    inLanguage: 'en-US',
    about: 'Artificial Intelligence Policy, Bangladesh',
    keywords: `AI, Bangladesh, ${data.category}, AI Policy, AI Readiness`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Research', item: `${siteUrl}/research` },
      { '@type': 'ListItem', position: 3, name: data.title, item: `${siteUrl}/research/${params.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ResearchPostClient post={data} />
    </>
  )
}
