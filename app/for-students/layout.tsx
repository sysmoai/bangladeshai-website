import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Students — AI Learning Resources | BangladeshAI.org',
  description: 'Free AI learning resources for Bangladeshi students. Career paths, learning materials, and research access for the next generation.',
}

export default function ForStudentsLayout({ children }: { children: React.ReactNode }) {
  return children
}