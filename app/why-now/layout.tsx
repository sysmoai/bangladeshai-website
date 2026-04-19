import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Bangladesh Must Act on AI Now | BangladeshAI.org',
  description: "Every year of delay widens Bangladesh's AI gap. $40-80M annual outflow, 3-5 year brain drain window, and the cost of missing the second tech wave.",
  openGraph: {
    title: 'Why Bangladesh Must Act on AI Now | BangladeshAI.org',
    description: "Every year of delay widens Bangladesh's AI gap. $40-80M annual outflow, 3-5 year brain drain window, and the cost of missing the second tech wave.",
    url: 'https://bangladeshai.org/why-now',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('Why Bangladesh Must Act on AI Now')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
