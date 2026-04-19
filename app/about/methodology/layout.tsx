import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research Methodology | BangladeshAI.org',
  description: 'How BangladeshAI.org classifies claims: Conservative (verified fact), Moderate (analysis), Planning Hypothesis (projection). Primary sources listed.',
  openGraph: {
    title: 'Research Methodology | BangladeshAI.org',
    description: 'How BangladeshAI.org classifies claims: Conservative (verified fact), Moderate (analysis), Planning Hypothesis (projection). Primary sources listed.',
    url: 'https://bangladeshai.org/about/methodology',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('Research Methodology')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
