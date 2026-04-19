import type { Metadata } from 'next'
import RealityCheckClient from './RealityCheckClient'

export const metadata: Metadata = {
  title: 'Bangladesh AI Reality Check 2026 — Score 47.12/100 | BangladeshAI.org',
  description: 'Independent analysis of Bangladesh\'s AI readiness: 47.12/100. Government Readiness 58.52, Technology Sector 26.26 (Critical), Data & Infrastructure 56.59. Oxford Insights GGAI Index 2024.',
  openGraph: {
    title: 'Bangladesh AI Reality Check 2026 — Score 47.12/100',
    description: 'Bangladesh ranks 80th of 188 countries in AI readiness. The Technology Sector (26.26) is a critical weak point threatening the nation\'s AI future.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangladesh AI Reality Check 2026',
    description: 'Score: 47.12/100. Tech Sector 26.26 is critical. Independent analysis for 170M people.',
  },
}

export default function RealityCheckPage() {
  return <RealityCheckClient />
}
