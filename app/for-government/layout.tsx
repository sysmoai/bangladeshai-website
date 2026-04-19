import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Bangladesh Government — Ministry Guide 2026 | BangladeshAI.org',
  description: "Evidence-based AI guidance for Bangladesh's 20 ministries. Procurement rules, policy framework, pilot ROI, and anti-corruption AI overview.",
  openGraph: {
    title: 'AI for Bangladesh Government — Ministry Guide 2026 | BangladeshAI.org',
    description: "Evidence-based AI guidance for Bangladesh's 20 ministries. Procurement rules, policy framework, pilot ROI, and anti-corruption AI overview.",
    url: 'https://bangladeshai.org/for-government',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('AI for Bangladesh Government — Ministry Guide 2026')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
