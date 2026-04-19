import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Source_Serif_4, Noto_Sans_Bengali } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/lib/language-context'
import { ThemeProvider } from '@/lib/theme-context'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
})

const notoBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-bengali',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bangladeshai.org'

export const metadata: Metadata = {
  title: 'Bangladesh AI — Independent AI Policy Research | BangladeshAI.org',
  description:
    "Independent AI policy research for Bangladesh's 170 million people. Score 47.12/100. Rank 80 of 188 countries. Evidence-based, non-partisan, bilingual.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    siteName: 'BangladeshAI.org',
    locale: 'en_US',
    images: [
      {
        url: `${siteUrl}/api/og?title=BangladeshAI.org`,
        width: 1200,
        height: 630,
        alt: 'BangladeshAI.org — Intelligence Builds Nations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bangladeshai',
    images: [`${siteUrl}/api/og?title=BangladeshAI.org`],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BangladeshAI.org',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description:
    "Bangladesh's independent AI policy research platform. AI Readiness Score: 47.12/100.",
  sameAs: [
    'https://twitter.com/bangladeshai',
    'https://linkedin.com/company/bangladeshai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'research@bangladeshai.org',
    contactType: 'research',
  },
  founder: {
    '@type': 'Person',
    name: 'Emon Hossain',
    jobTitle: 'Founder & Lead Researcher',
    url: `${siteUrl}/about/emon-hossain`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sourceSerif.variable} ${notoBengali.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-bg-light font-sans"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
