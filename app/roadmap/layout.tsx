import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bangladesh National AI Roadmap 2026-2033 | BangladeshAI.org',
  description: 'Four phases: 100 days, Year 1, 3 years, 7 years. Named institutions, measurable milestones. From 47.12 to 70+ on Oxford Insights.',
  openGraph: {
    title: 'Bangladesh National AI Roadmap 2026-2033 | BangladeshAI.org',
    description: 'Four phases: 100 days, Year 1, 3 years, 7 years. Named institutions, measurable milestones. From 47.12 to 70+ on Oxford Insights.',
    url: 'https://bangladeshai.org/roadmap',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('Bangladesh National AI Roadmap 2026-2033')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
