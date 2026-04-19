'use client'

import Link from 'next/link'
import { ChevronRight, Download, FileText, Globe, Users } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const pdfCards = [
  {
    icon: FileText,
    color: 'bg-primary-blue',
    en: {
      title: 'AI Readiness Brief 2026',
      subtitle: 'PDF · 12 pages · English',
      desc: 'The essential summary of Bangladesh\'s 47.12/100 AI readiness score. Covers the 3-pillar scorecard, 15-domain assessment, 67 critical gaps, and 7 immediate policy recommendations. Designed for busy decision-makers who need the facts in 15 minutes.',
      cta: 'Read Full Assessment Online →',
      badge: 'Most Downloaded',
      pdfNote: 'Downloadable PDF edition: April 2026',
    },
    bn: {
      title: 'AI প্রস্তুতি ব্রিফ ২০২৬',
      subtitle: 'PDF · ১২ পাতা · ইংরেজি',
      desc: 'বাংলাদেশের ৪৭.১২/১০০ AI প্রস্তুতি স্কোরের প্রয়োজনীয় সারসংক্ষেপ। ৩-স্তম্ভ স্কোরকার্ড, ১৫-ডোমেইন মূল্যায়ন, ৬৭টি গুরুতর ঘাটতি এবং ৭টি অবিলম্বে নীতি সুপারিশ কভার করে।',
      cta: 'অনলাইনে সম্পূর্ণ মূল্যায়ন পড়ুন →',
      badge: 'সর্বাধিক ডাউনলোড',
      pdfNote: 'ডাউনলোডযোগ্য PDF সংস্করণ: এপ্রিল ২০২৬',
    },
    href: '/research/ai-readiness',
  },
  {
    icon: Users,
    color: 'bg-primary-navy',
    en: {
      title: 'Executive Brief (English)',
      subtitle: 'PDF · 8 pages · Ministry-ready format',
      desc: 'Formatted specifically for ministry secretaries, joint secretaries, and senior civil servants. Contains the national AI strategy gap analysis, 20-ministry use case summary, and procurement guidance — in formal document format suitable for circulation.',
      cta: 'Read Government Guide Online →',
      badge: 'For Government',
      pdfNote: 'Printable PDF edition: April 2026',
    },
    bn: {
      title: 'এক্সিকিউটিভ ব্রিফ (ইংরেজি)',
      subtitle: 'PDF · ৮ পাতা · মন্ত্রণালয়-প্রস্তুত ফরম্যাট',
      desc: 'বিশেষভাবে মন্ত্রণালয় সচিব, যুগ্ম সচিব এবং সিনিয়র সিভিল সার্ভেন্টদের জন্য ফরম্যাট করা হয়েছে।',
      cta: 'অনলাইনে সরকারি গাইড পড়ুন →',
      badge: 'সরকারের জন্য',
      pdfNote: 'মুদ্রণযোগ্য PDF সংস্করণ: এপ্রিল ২০২৬',
    },
    href: '/for-government',
  },
  {
    icon: Globe,
    color: 'bg-bd-green',
    en: {
      title: 'Executive Brief (Bangla)',
      subtitle: 'PDF · ৮ পাতা · বাংলা সংস্করণ',
      desc: 'বাংলাদেশের সরকারি কর্মকর্তা, নীতিনির্ধারক এবং সংসদ সদস্যদের জন্য সম্পূর্ণ বাংলায় লেখা এক্সিকিউটিভ ব্রিফ। The English Executive Brief — in full, native Bangla.',
      cta: 'অনলাইনে পড়ুন →',
      badge: 'বাংলা সংস্করণ',
      pdfNote: 'পিডিএফ সংস্করণ: এপ্রিল ২০২৬',
    },
    bn: {
      title: 'এক্সিকিউটিভ ব্রিফ (বাংলা)',
      subtitle: 'PDF · ৮ পাতা · বাংলা সংস্করণ',
      desc: 'বাংলাদেশের সরকারি কর্মকর্তা, নীতিনির্ধারক এবং সংসদ সদস্যদের জন্য সম্পূর্ণ বাংলায় লেখা এক্সিকিউটিভ ব্রিফ।',
      cta: 'অনলাইনে পড়ুন →',
      badge: 'বাংলা সংস্করণ',
      pdfNote: 'পিডিএফ সংস্করণ: এপ্রিল ২০২৬',
    },
    href: '/for-citizens',
  },
  {
    icon: FileText,
    color: 'bg-bd-red',
    en: {
      title: 'Cost of Inaction Memo',
      subtitle: 'PDF · 4 pages · Policy memo format',
      desc: 'A four-page policy memo quantifying what Bangladesh stands to lose if the AI readiness gap is not addressed by 2030: estimated GDP impact, workforce displacement projections, subscription outflow calculation, and the 3-5 year brain drain window.',
      cta: 'Read Why Now →',
      badge: 'Urgency Brief',
      pdfNote: 'Policy memo PDF: April 2026',
    },
    bn: {
      title: 'নিষ্ক্রিয়তার খরচ মেমো',
      subtitle: 'PDF · ৪ পাতা · নীতি মেমো ফরম্যাট',
      desc: 'একটি চার-পাতার নীতি মেমো যা পরিমাপ করে বাংলাদেশ কী হারাতে পারে যদি AI প্রস্তুতির ঘাটতি ২০৩০ সালের মধ্যে সমাধান না করা হয়।',
      cta: 'এখনই পড়ুন →',
      badge: 'জরুরি ব্রিফ',
      pdfNote: 'নীতি মেমো PDF: এপ্রিল ২০২৬',
    },
    href: '/why-now',
  },
]

const researchLinks = [
  { href: '/research/ai-readiness', en: 'Bangladesh AI Readiness Assessment 2026 (Full Paper)', bn: 'বাংলাদেশ AI প্রস্তুতি মূল্যায়ন ২০২৬ (সম্পূর্ণ পেপার)' },
  { href: '/research/economic-impact', en: 'Economic Impact of AI on Bangladesh 2026–2033', bn: 'বাংলাদেশে AI-এর অর্থনৈতিক প্রভাব ২০২৬–২০৩৩' },
  { href: '/research/global-benchmarks', en: 'Bangladesh vs. Global AI Leaders: Benchmarks & Lessons', bn: 'বাংলাদেশ বনাম বৈশ্বিক AI নেতৃবৃন্দ: মানদণ্ড ও পাঠ' },
]

export default function ResourcesPage() {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => isBn ? bn : en
  const font = isBn ? 'font-bangla' : ''

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-bg-light border-b border-border-color px-4 py-2">
        <div className="max-w-4xl mx-auto flex items-center gap-1 text-xs text-text-secondary">
          <a href="/" className="hover:text-primary-blue transition-colors">{b('Home', 'হোম')}</a>
          <ChevronRight size={12} />
          <span className="text-text-primary font-medium">{b('Resources', 'রিসোর্স')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-bd-green/20 border border-bd-green/40 rounded-full text-bd-green text-xs font-semibold uppercase tracking-wider mb-6">
            {b('Free Downloads', 'বিনামূল্যে ডাউনলোড')}
          </div>
          <h1 className={`text-4xl font-extrabold mb-6 ${font}`}>
            {b('Downloads Hub', 'ডাউনলোড হাব')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto ${font}`}>
            {b(
              'All BangladeshAI.org publications, policy briefs, and executive summaries — free to download, share, and cite.',
              'সমস্ত BangladeshAI.org প্রকাশনা, নীতি ব্রিফ এবং এক্সিকিউটিভ সারসংক্ষেপ — বিনামূল্যে ডাউনলোড, শেয়ার এবং উদ্ধৃত করতে পারবেন।'
            )}
          </p>
        </div>
      </section>

      {/* PDF Cards */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 ${font}`}>
            {b('Policy Briefs & Reports', 'নীতি ব্রিফ ও রিপোর্ট')}
          </h2>
          <p className={`text-text-secondary mb-8 text-sm ${font}`}>
            {b('Formatted for ministry circulation, development partner use, and academic citation. All free.', 'মন্ত্রণালয় প্রচারণা, উন্নয়ন অংশীদার ব্যবহার এবং একাডেমিক উদ্ধৃতির জন্য ফরম্যাট করা। সবই বিনামূল্যে।')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pdfCards.map((card, i) => {
              const Icon = card.icon
              const content = isBn ? card.bn : card.en
              return (
                <div key={i} className="bg-bg-surface rounded-2xl border border-border-color shadow-sm overflow-hidden">
                  <div className={`${card.color} px-5 py-4 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-white" />
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">{b('PDF Report', 'PDF রিপোর্ট')}</span>
                    </div>
                    <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-semibold">
                      {content.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-lg font-bold text-text-primary mb-1 ${font}`}>{content.title}</h3>
                    <p className="text-xs text-text-secondary mb-3">{content.subtitle}</p>
                    <p className={`text-text-secondary text-sm leading-relaxed mb-5 ${font}`}>{content.desc}</p>
                    <Link
                      href={card.href}
                      className={`inline-flex items-center gap-2 bg-primary-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors ${font}`}
                    >
                      {content.cta}
                    </Link>
                    <p className={`text-xs text-text-secondary mt-3 ${font}`}>
                      {content.pdfNote}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${font}`}>
            {b('Full Research Papers', 'সম্পূর্ণ গবেষণা পেপার')}
          </h2>
          <div className="space-y-3">
            {researchLinks.map((r, i) => (
              <Link
                key={i}
                href={r.href}
                className="flex items-center justify-between p-4 bg-bg-light rounded-xl border border-border-color hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-primary-blue flex-shrink-0" />
                  <span className={`text-text-primary font-medium text-sm ${font}`}>{isBn ? r.bn : r.en}</span>
                </div>
                <ChevronRight size={16} className="text-text-secondary flex-shrink-0" />
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/research" className={`text-primary-blue font-semibold hover:underline text-sm ${font}`}>
              {b('View all research →', 'সমস্ত গবেষণা দেখুন →')}
            </Link>
          </div>
        </div>
      </section>

      {/* Usage Rights */}
      <section className="bg-bg-light py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-surface rounded-xl p-6 border border-border-color">
            <h3 className={`font-bold text-text-primary mb-3 ${font}`}>{b('Usage Rights & Citation', 'ব্যবহারের অধিকার ও উদ্ধৃতি')}</h3>
            <p className={`text-text-secondary text-sm leading-relaxed mb-3 ${font}`}>
              {b(
                'All BangladeshAI.org publications are freely available under Creative Commons Attribution 4.0 (CC BY 4.0). You may reproduce, translate, and build upon our research for any purpose — with attribution.',
                'সমস্ত BangladeshAI.org প্রকাশনা Creative Commons Attribution 4.0 (CC BY 4.0) এর অধীনে বিনামূল্যে পাওয়া যায়। আপনি আমাদের গবেষণা যেকোনো উদ্দেশ্যে পুনরুত্পাদন, অনুবাদ এবং তৈরি করতে পারেন — দায়স্বীকৃতি সহ।'
              )}
            </p>
            <code className="text-xs bg-bg-light px-3 py-2 rounded-lg text-text-secondary block">
              {b('Citation: BangladeshAI.org (2026). [Title]. Retrieved from bangladeshai.org', 'উদ্ধৃতি: BangladeshAI.org (২০২৬)। [শিরোনাম]। bangladeshai.org থেকে পুনরুদ্ধার করা হয়েছে')}
            </code>
          </div>
        </div>
      </section>
    </div>
  )
}
