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
      subtitle: 'Online working draft · English',
      desc: 'The essential summary of Bangladesh\'s 47.12/100 AI readiness score. Covers the 3-pillar scorecard, 15-domain assessment, 67 critical gaps, and 7 immediate policy recommendations. Designed for busy decision-makers who need the facts in 15 minutes.',
      cta: 'Read Full Assessment Online →',
      badge: 'Working Draft',
      pdfNote: 'PDF availability unverified; read online or use browser print.',
    },
    bn: {
      title: 'AI প্রস্তুতি ব্রিফ ২০২৬',
      subtitle: 'অনলাইন গবেষণা খসড়া · ইংরেজি',
      desc: 'বাংলাদেশের ৪৭.১২/১০০ AI প্রস্তুতি স্কোরের প্রয়োজনীয় সারসংক্ষেপ। ৩-স্তম্ভ স্কোরকার্ড, ১৫-ডোমেইন মূল্যায়ন, ৬৭টি গুরুতর ঘাটতি এবং ৭টি অবিলম্বে নীতি সুপারিশ কভার করে।',
      cta: 'অনলাইনে সম্পূর্ণ মূল্যায়ন পড়ুন →',
      badge: 'গবেষণা খসড়া',
      pdfNote: 'PDF সংস্করণ যাচাই হয়নি; অনলাইনে পড়ুন অথবা ব্রাউজার থেকে প্রিন্ট করুন।',
    },
    href: '/research/ai-readiness',
  },
  {
    icon: Users,
    color: 'bg-primary-navy',
    en: {
      title: 'Executive Brief (English)',
      subtitle: 'Online policy overview · English',
      desc: 'Formatted specifically for ministry secretaries, joint secretaries, and senior civil servants. Contains the national AI strategy gap analysis, 20-ministry use case summary, and procurement guidance — in formal document format suitable for circulation.',
      cta: 'Read Government Guide Online →',
      badge: 'For Government',
      pdfNote: 'PDF edition not verified; online resource only.',
    },
    bn: {
      title: 'এক্সিকিউটিভ ব্রিফ (ইংরেজি)',
      subtitle: 'অনলাইন নীতি পরিচিতি · ইংরেজি',
      desc: 'বিশেষভাবে মন্ত্রণালয় সচিব, যুগ্ম সচিব এবং সিনিয়র সিভিল সার্ভেন্টদের জন্য ফরম্যাট করা হয়েছে।',
      cta: 'অনলাইনে সরকারি গাইড পড়ুন →',
      badge: 'সরকারের জন্য',
      pdfNote: 'PDF সংস্করণ যাচাই হয়নি; শুধু অনলাইন উপকরণ।',
    },
    href: '/for-government',
  },
  {
    icon: Globe,
    color: 'bg-bd-green',
    en: {
      title: 'Executive Brief (Bangla)',
      subtitle: 'অনলাইন উপকরণ · বাংলা',
      desc: 'বাংলাদেশের সরকারি কর্মকর্তা, নীতিনির্ধারক এবং সংসদ সদস্যদের জন্য সম্পূর্ণ বাংলায় লেখা এক্সিকিউটিভ ব্রিফ। This links to Bangla-first public information; it is not a verified translation of a complete PDF brief.',
      cta: 'অনলাইনে পড়ুন →',
      badge: 'বাংলা সংস্করণ',
      pdfNote: 'PDF সংস্করণ যাচাই হয়নি।',
    },
    bn: {
      title: 'এক্সিকিউটিভ ব্রিফ (বাংলা)',
      subtitle: 'অনলাইন উপকরণ · বাংলা',
      desc: 'বাংলাদেশের সরকারি কর্মকর্তা, নীতিনির্ধারক এবং সংসদ সদস্যদের জন্য সম্পূর্ণ বাংলায় লেখা এক্সিকিউটিভ ব্রিফ।',
      cta: 'অনলাইনে পড়ুন →',
      badge: 'বাংলা সংস্করণ',
      pdfNote: 'PDF সংস্করণ যাচাই হয়নি।',
    },
    href: '/for-citizens',
  },
  {
    icon: FileText,
    color: 'bg-bd-red',
    en: {
      title: 'Cost of Inaction Memo',
      subtitle: 'Online analysis · provisional estimates',
      desc: 'An online discussion of possible costs of delayed AI preparedness. Financial and workforce figures are planning projections, not measured outcomes.',
      cta: 'Read Why Now →',
      badge: 'Urgency Brief',
      pdfNote: 'PDF not yet verified; online reading is available.',
    },
    bn: {
      title: 'নিষ্ক্রিয়তার খরচ মেমো',
      subtitle: 'অনলাইন বিশ্লেষণ · প্রাথমিক অনুমান',
      desc: 'AI প্রস্তুতিতে দেরির সম্ভাব্য প্রভাব নিয়ে অনলাইন বিশ্লেষণ। সংখ্যা অনুমানভিত্তিক; বাস্তবে পরিমাপ করা ফলাফল নয়।',
      cta: 'এখনই পড়ুন →',
      badge: 'জরুরি ব্রিফ',
      pdfNote: 'PDF এখনো যাচাই হয়নি; অনলাইনে পড়ুন।',
    },
    href: '/why-now',
  },
]

const researchLinks = [
  { href: '/research/ai-readiness', en: 'Bangladesh AI Readiness Assessment 2026 (Working Draft)', bn: 'বাংলাদেশ AI প্রস্তুতি মূল্যায়ন ২০২৬ (গবেষণা খসড়া)' },
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
            {b('Free Reading', 'বিনামূল্যে পড়ুন')}
          </div>
          <h1 className={`text-4xl font-extrabold mb-6 ${font}`}>
            {b('Resources Hub', 'রিসোর্স হাব')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto ${font}`}>
            {b(
              'Browse online research drafts and educational resources. Standalone PDF editions are not yet verified.',
              'অনলাইনে গবেষণা খসড়া ও শিক্ষামূলক উপকরণ পড়ুন। আলাদা PDF সংস্করণ এখনো যাচাই করা হয়নি।'
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
            {b('Online drafts for public reading. These are not official government documents or verified journal publications.', 'জনসাধারণের পড়ার জন্য অনলাইন খসড়া; সরকারি নথি বা যাচাইকৃত জার্নাল প্রকাশনা নয়।')}
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
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">{b('Online Resource', 'অনলাইন রিসোর্স')}</span>
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
            {b('Research Drafts & Briefs', 'গবেষণা খসড়া ও ব্রিফ')}
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
                'These resources may be read online. Reuse and redistribution rights vary by material and should be confirmed before republishing; no blanket Creative Commons license is asserted here.',
                'এখানকার উপকরণ অনলাইনে পড়া যায়। পুনঃপ্রকাশের আগে পৃথক উপকরণের ব্যবহার-অনুমতি নিশ্চিত করুন; সব নথির জন্য একই লাইসেন্স দাবি করা হচ্ছে না।'
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
