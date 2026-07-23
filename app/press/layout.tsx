import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press Kit — Brand Assets & Fact Sheet | BangladeshAI.org',
  description: 'Download BangladeshAI.org press kit: logos, brand guidelines, fact sheet, founder bio, and media assets for editorial use.',
}

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return children
}