import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Independent AI Policy Research | BangladeshAI.org',
  description: 'BangladeshAI.org is an independent, non-partisan AI policy research platform. Evidence-based, bilingual, and free for all.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}