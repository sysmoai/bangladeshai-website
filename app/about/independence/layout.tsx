import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Independence Statement | BangladeshAI.org',
  description: 'No government funding. No commercial sponsorship. No political affiliation. Four non-negotiable independence principles for Bangladesh AI research.',
  openGraph: {
    title: 'Independence Statement | BangladeshAI.org',
    description: 'No government funding. No commercial sponsorship. No political affiliation. Four non-negotiable independence principles for Bangladesh AI research.',
    url: 'https://bangladeshai.org/about/independence',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('Independence Statement')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
