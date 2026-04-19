import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact BangladeshAI.org | Research Enquiries',
  description: 'Three pathways: Institutional partners, development partners (UNDP/World Bank), and media. Direct contact: emon@emonhossain.pro',
  openGraph: {
    title: 'Contact BangladeshAI.org | Research Enquiries',
    description: 'Three pathways: Institutional partners, development partners (UNDP/World Bank), and media. Direct contact: emon@emonhossain.pro',
    url: 'https://bangladeshai.org/contact',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('Contact BangladeshAI.org')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
