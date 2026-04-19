import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bangladesh AI Briefing — Free Weekly Newsletter',
  description: 'The independent weekly newsletter on AI policy in Bangladesh. Read by government officials, researchers, and citizens. Bilingual — English and Bangla.',
  openGraph: {
    title: 'Bangladesh AI Briefing — Free Weekly Newsletter',
    description: 'The independent weekly newsletter on AI policy in Bangladesh. Read by government officials, researchers, and citizens. Bilingual — English and Bangla.',
    url: 'https://bangladeshai.org/newsletter',
    siteName: 'BangladeshAI.org',
    images: [{ url: `/api/og?title=${encodeURIComponent('Bangladesh AI Briefing — Free Weekly Newsletter')}` }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
