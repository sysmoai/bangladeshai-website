import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Policy FAQ — Bangladesh | BangladeshAI.org',
  description: "12 common questions about AI and BangladeshAI.org answered. What is Bangladesh's AI readiness score? Can AI work in Bangla? Is this government?",
  openGraph: {
    title: 'AI Policy FAQ — Bangladesh | BangladeshAI.org',
    description: "12 common questions about AI and BangladeshAI.org answered. What is Bangladesh's AI readiness score? Can AI work in Bangla? Is this government?",
    url: 'https://bangladeshai.org/faq',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('AI Policy FAQ — Bangladesh')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
