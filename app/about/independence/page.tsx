'use client'

import Link from 'next/link'
import { ChevronRight, Shield, XCircle, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const noList = [
  { en: 'No government funding from any country — Bangladeshi, foreign bilateral, or multilateral', bn: 'কোনো দেশের সরকারি অর্থায়ন নেই — বাংলাদেশি, বিদেশি দ্বিপাক্ষিক বা বহুপাক্ষিক' },
  { en: 'No commercial product revenue — we sell nothing', bn: 'কোনো বাণিজ্যিক পণ্য রাজস্ব নেই — আমরা কিছু বিক্রি করি না' },
  { en: 'No advertising or sponsored content', bn: 'কোনো বিজ্ঞাপন বা স্পনসরড বিষয়বস্তু নেই' },
  { en: 'No political party or political figure affiliation', bn: 'কোনো রাজনৈতিক দল বা রাজনৈতিক ব্যক্তিত্বের সংযোগ নেই' },
  { en: 'No vendor relationships with AI companies whose products we review', bn: 'আমরা যে AI কোম্পানির পণ্য পর্যালোচনা করি তাদের সাথে কোনো বিক্রেতা সম্পর্ক নেই' },
  { en: 'No consulting retainers from organizations with policy interests in our research', bn: 'আমাদের গবেষণায় নীতিগত স্বার্থ আছে এমন প্রতিষ্ঠানের কাছ থেকে কোনো পরামর্শ চুক্তি নেই' },
]

const yesList = [
  { en: 'Funded through personal founder resources and small open donations', bn: 'ব্যক্তিগত প্রতিষ্ঠাতার সম্পদ এবং ছোট খোলা অনুদানের মাধ্যমে অর্থায়ন করা' },
  { en: 'All research is free and publicly available without registration', bn: 'সমস্ত গবেষণা নিবন্ধন ছাড়াই বিনামূল্যে এবং সর্বজনীনভাবে উপলব্ধ' },
  { en: 'All data sources are cited and publicly verifiable', bn: 'সমস্ত ডেটা উৎস উদ্ধৃত এবং সর্বজনীনভাবে যাচাইযোগ্য' },
  { en: 'Corrections and updates are published publicly when errors are identified', bn: 'ত্রুটি চিহ্নিত হলে সংশোধন এবং আপডেট সর্বজনীনভাবে প্রকাশিত হয়' },
  { en: 'Research methodology is fully documented and open to challenge', bn: 'গবেষণা পদ্ধতি সম্পূর্ণভাবে নথিভুক্ত এবং চ্যালেঞ্জের জন্য উন্মুক্ত' },
  { en: 'Founder\'s conflict-of-interest disclosures are updated annually', bn: 'প্রতিষ্ঠাতার স্বার্থ-সংঘাত প্রকাশ বার্ষিকভাবে আপডেট করা হয়' },
]

const principles = [
  {
    en: {
      title: 'The Donor Independence Rule',
      desc: 'Any organization that funds BangladeshAI.org — now or in the future — must sign an independence agreement that explicitly prohibits editorial influence, research veto rights, or pre-publication review of findings. If an organization is unwilling to sign this agreement, we will not accept their funding.',
    },
    bn: {
      title: 'দাতা স্বাধীনতার নিয়ম',
      desc: 'যেকোনো প্রতিষ্ঠান যা BangladeshAI.org-এ অর্থায়ন করে — এখন বা ভবিষ্যতে — তাদের একটি স্বাধীনতা চুক্তি স্বাক্ষর করতে হবে যা সম্পাদকীয় প্রভাব, গবেষণা ভেটো অধিকার বা ফলাফলের প্রি-পাবলিকেশন রিভিউ স্পষ্টভাবে নিষিদ্ধ করে।',
    },
  },
  {
    en: {
      title: 'The Government Distance Rule',
      desc: 'We engage with government officials to share research and receive feedback. We do not receive funding from, or enter consulting relationships with, any government ministry or agency in a way that could create actual or perceived conflicts of interest with our research conclusions.',
    },
    bn: {
      title: 'সরকারি দূরত্বের নিয়ম',
      desc: 'আমরা গবেষণা ভাগ করে নেওয়া এবং মতামত পাওয়ার জন্য সরকারি কর্মকর্তাদের সাথে যুক্ত হই। আমরা কোনো সরকারি মন্ত্রণালয় বা সংস্থার কাছ থেকে অর্থায়ন বা পরামর্শ সম্পর্ক গ্রহণ করি না।',
    },
  },
  {
    en: {
      title: 'The Transparency Rule',
      desc: 'When we make errors — and we will make errors — we correct them publicly and prominently. We do not quietly edit published research without a visible correction notice. Intellectual honesty is not optional.',
    },
    bn: {
      title: 'স্বচ্ছতার নিয়ম',
      desc: 'যখন আমরা ভুল করি — এবং আমরা ভুল করব — আমরা সেগুলি সর্বজনীনভাবে এবং স্পষ্টভাবে সংশোধন করি। আমরা দৃশ্যমান সংশোধন বিজ্ঞপ্তি ছাড়া প্রকাশিত গবেষণা চুপিসারে সম্পাদনা করি না।',
    },
  },
  {
    en: {
      title: 'The Commercial Separation Rule',
      desc: 'BangladeshAI.org will never launch commercial AI products, consulting services, or enterprise contracts that create financial incentives to shade our research findings. Research integrity and commercial revenue cannot coexist in the same entity.',
    },
    bn: {
      title: 'বাণিজ্যিক বিচ্ছেদের নিয়ম',
      desc: 'BangladeshAI.org কখনই বাণিজ্যিক AI পণ্য, পরামর্শ সেবা বা এন্টারপ্রাইজ চুক্তি চালু করবে না যা আমাদের গবেষণার ফলাফল ছায়া করার আর্থিক প্রণোদনা তৈরি করে।',
    },
  },
]

export default function IndependencePage() {
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
          <a href="/about" className="hover:text-primary-blue transition-colors">{b('About', 'আমাদের সম্পর্কে')}</a>
          <ChevronRight size={12} />
          <span className="text-text-primary font-medium">{b('Independence', 'স্বাধীনতা')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-xl bg-bd-green/20 flex items-center justify-center mx-auto mb-6">
            <Shield size={32} className="text-bd-green" />
          </div>
          <h1 className={`text-4xl font-extrabold mb-6 ${font}`}>
            {b('Independence Statement', 'স্বাধীনতার বিবৃতি')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed ${font}`}>
            {b(
              'BangladeshAI.org\'s independence is not a marketing claim — it is the legal, financial, and editorial foundation on which every analysis we produce rests.',
              'BangladeshAI.org-এর স্বাধীনতা একটি বিপণন দাবি নয় — এটি আইনগত, আর্থিক এবং সম্পাদকীয় ভিত্তি যার উপর আমাদের প্রতিটি বিশ্লেষণ রয়েছে।'
            )}
          </p>
        </div>
      </section>

      {/* No / Yes Lists */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* No List */}
          <div>
            <h2 className={`text-xl font-bold text-bd-red mb-6 flex items-center gap-2 ${font}`}>
              <XCircle size={20} />
              {b('What We Will Never Accept', 'আমরা কখনই যা গ্রহণ করব না')}
            </h2>
            <ul className="space-y-4">
              {noList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-bd-red/5 rounded-xl border border-bd-red/10">
                  <XCircle size={16} className="text-bd-red flex-shrink-0 mt-0.5" />
                  <span className={`text-text-primary text-sm leading-relaxed ${font}`}>{isBn ? item.bn : item.en}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Yes List */}
          <div>
            <h2 className={`text-xl font-bold text-bd-green mb-6 flex items-center gap-2 ${font}`}>
              <CheckCircle size={20} />
              {b('What We Commit To', 'আমরা যার প্রতি প্রতিশ্রুতিবদ্ধ')}
            </h2>
            <ul className="space-y-4">
              {yesList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-bd-green/5 rounded-xl border border-bd-green/10">
                  <CheckCircle size={16} className="text-bd-green flex-shrink-0 mt-0.5" />
                  <span className={`text-text-primary text-sm leading-relaxed ${font}`}>{isBn ? item.bn : item.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Four Principles */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-10 ${font}`}>
            {b('Four Non-Negotiable Principles', 'চারটি অ-আলোচনাযোগ্য নীতি')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principles.map((p, i) => {
              const content = isBn ? p.bn : p.en
              return (
                <div key={i} className="bg-bg-surface rounded-xl p-6 border border-border-color shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary-blue text-white text-sm font-bold flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3 className={`font-bold text-text-primary mb-3 ${font}`}>{content.title}</h3>
                  <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Signed Statement */}
      <section className="bg-primary-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <blockquote className={`text-lg text-blue-100 leading-relaxed mb-6 italic ${font}`}>
            {b(
              '"I am the sole founder and editorial authority of BangladeshAI.org. I have no institutional affiliations, no government contracts, and no commercial relationships that could compromise our research independence. This statement will be updated annually and immediately if any of these conditions change."',
              '"আমি BangladeshAI.org-এর একমাত্র প্রতিষ্ঠাতা এবং সম্পাদকীয় কর্তৃপক্ষ। আমার কোনো প্রাতিষ্ঠানিক সংযোগ, কোনো সরকারি চুক্তি এবং কোনো বাণিজ্যিক সম্পর্ক নেই যা আমাদের গবেষণার স্বাধীনতার সাথে আপস করতে পারে।"'
            )}
          </blockquote>
          <p className="text-blue-300 font-semibold">Emon Hossain — {b('Founder, BangladeshAI.org', 'প্রতিষ্ঠাতা, BangladeshAI.org')}</p>
          <p className="text-blue-400 text-sm mt-1">March 2026</p>
          <div className="mt-8">
            <Link href="/about" className={`text-blue-300 hover:text-white text-sm transition-colors ${font}`}>
              ← {b('Back to About', 'আমাদের সম্পর্কে ফিরে যান')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
