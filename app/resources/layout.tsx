import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Policy Downloads | BangladeshAI.org',
  description: 'Free download: AI Readiness Brief 2026, Executive Brief EN+BN, Cost of Inaction Memo. CC BY 4.0 licence. Cite freely.',
  openGraph: {
    title: 'Free AI Policy Downloads | BangladeshAI.org',
    description: 'Free download: AI Readiness Brief 2026, Executive Brief EN+BN, Cost of Inaction Memo. CC BY 4.0 licence. Cite freely.',
    url: 'https://bangladeshai.org/resources',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('Free AI Policy Downloads')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
