import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission & Values — Independent AI Policy Research | BangladeshAI.org',
  description: 'Independence, evidence-based research, radical accessibility. Our mission is to make AI policy knowledge free and available to every Bangladeshi.',
}

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return children
}