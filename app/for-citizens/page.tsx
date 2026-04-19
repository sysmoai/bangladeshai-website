import type { Metadata } from 'next'
import ForCitizensClient from './ForCitizensClient'

export const metadata: Metadata = {
  title: 'নাগরিকদের জন্য AI — AI for Citizens | BangladeshAI.org',
  description: 'AI কী — সহজ ভাষায়। বাংলাদেশের নাগরিকদের জন্য কৃত্রিম বুদ্ধিমত্তার সহজ গাইড। আপনার অধিকার, আপনার সুযোগ, আপনার ভবিষ্যৎ।',
  openGraph: {
    title: 'নাগরিকদের জন্য AI — AI for Citizens',
    description: 'AI কী — সহজ ভাষায়। ChatGPT, Gemini, Claude এখন বাংলায় কথা বলে। আজই শুরু করুন।',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'নাগরিকদের জন্য AI | BangladeshAI',
    description: 'AI কী — সহজ ভাষায়। বাংলাদেশের ১৭ কোটি মানুষের জন্য।',
  },
}

export default function ForCitizensPage() {
  return <ForCitizensClient />
}
