import { getAllPosts, getPostBySlug } from '@/lib/content'
import { NextResponse } from 'next/server'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bangladeshai.org'

const FALLBACK_POSTS = [
  { slug: 'ai-bangla-language-guide', title: 'How to Use AI Entirely in Bangla — No English Required', date: '2026-03-27', excerpt: 'A practical guide to using modern AI tools in Bangla — no English required.', category: 'Education', author: 'Emon Hossain' },
  { slug: 'bangladesh-ai-readiness-47', title: "Bangladesh's AI Readiness Score: 47.12/100 — An Honest Reckoning", date: '2026-03-22', excerpt: "Breaking down Bangladesh's 2026 AI Readiness Score and what it means.", category: 'Analysis', author: 'Emon Hossain' },
  { slug: 'bangla-nlp-sovereign-stack', title: 'Bangla NLP and the Sovereign AI Stack: Why It Cannot Wait', date: '2026-03-10', excerpt: 'The case for building sovereign Bangla language AI infrastructure.', category: 'Technology', author: 'Emon Hossain' },
  { slug: 'economic-impact-analysis', title: 'The Economic Impact of AI on Bangladesh: A $150 Billion Opportunity', date: '2026-03-25', excerpt: 'How strategic AI adoption could add $150 billion to Bangladesh\'s GDP.', category: 'Economics', author: 'Emon Hossain' },
  { slug: 'population-asset-not-problem', title: "Bangladesh's 170 Million People Are an Asset, Not a Problem", date: '2026-03-26', excerpt: "Bangladesh's large, young population is its greatest AI advantage.", category: 'Vision', author: 'Emon Hossain' },
  { slug: 'sovereign-ai-infrastructure-why-it-matters', title: 'Sovereign AI Infrastructure: Why Bangladesh Cannot Afford to Wait', date: '2026-03-24', excerpt: 'The case for national AI compute sovereignty.', category: 'Policy', author: 'Emon Hossain' },
  { slug: 'what-singapore-teaches-us', title: 'What Singapore Teaches Bangladesh About AI Strategy', date: '2026-03-15', excerpt: "Singapore's AI playbook and what Bangladesh can learn from it.", category: 'Policy', author: 'Emon Hossain' },
  { slug: 'why-ai-is-not-magic', title: 'Why AI is Not Magic — And Why That Makes It More Powerful', date: '2026-03-20', excerpt: 'A plain-language guide to what AI actually is and why understanding it matters.', category: 'Education', author: 'Emon Hossain' },
  { slug: 'youth-and-ai-jobs', title: "Bangladesh's 65 Million Young People and the AI Job Market", date: '2026-03-05', excerpt: 'Are young Bangladeshis ready for the AI economy?', category: 'Employment', author: 'Emon Hossain' },
]

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toRfcDate(dateStr: string): string {
  try {
    return new Date(dateStr).toUTCString()
  } catch {
    return new Date().toUTCString()
  }
}

export async function GET() {
  const mdxPosts = getAllPosts('blog', 'en')
  const allSlugs = [...new Set([...FALLBACK_POSTS.map((p) => p.slug), ...mdxPosts.map((p) => p.slug)])]

  const posts = allSlugs.map((slug) => {
    const mdx = mdxPosts.find((p) => p.slug === slug)
    const fb = FALLBACK_POSTS.find((p) => p.slug === slug)
    if (mdx) {
      return { slug, title: mdx.title, date: mdx.date, excerpt: mdx.excerpt, category: mdx.category, author: mdx.author }
    }
    if (fb) return fb
    return null
  }).filter(Boolean) as typeof FALLBACK_POSTS

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const items = posts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${toRfcDate(post.date)}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <author>research@bangladeshai.org (${escapeXml(post.author)})</author>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`).join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>BangladeshAI.org — Intelligence Builds Nations</title>
    <link>${siteUrl}</link>
    <description>Bangladesh's independent AI policy research platform. AI Readiness Score: 47.12/100. Research, advocacy and education for 170 million people.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>research@bangladeshai.org (Emon Hossain)</managingEditor>
    <webMaster>research@bangladeshai.org (BangladeshAI.org)</webMaster>
    <copyright>Creative Commons CC BY 4.0 — BangladeshAI.org</copyright>
    <category>AI Policy</category>
    <ttl>1440</ttl>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/favicon.svg</url>
      <title>BangladeshAI.org</title>
      <link>${siteUrl}</link>
    </image>
${items}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
