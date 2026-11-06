'use client'

import Link from 'next/link'
import { ChevronRight, Shield, XCircle, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const noList = [
  { en: 'No government endorsement or official institutional status is claimed', bn: 'সরকারি অনুমোদন বা কোনো আনুষ্ঠানিক প্রাতিষ্ঠানিক মর্যাদা দাবি করা হচ্ছে না' },
  { en: 'No existing international donor partnership is claimed without evidence', bn: 'প্রমাণ ছাড়া আন্তর্জাতিক দাতা সংস্থার অংশীদারত্ব দাবি করা হচ্ছে না' },
  { en: 'No journal publication, peer review or DOI is implied by a website research draft', bn: 'ওয়েবসাইটের গবেষণা খসড়াকে জার্নাল প্রকাশনা, পিয়ার রিভিউ বা DOI-এর প্রমাণ বলা হচ্ছে না' },
  { en: 'No measured impact is claimed from projections or hypothetical analyses', bn: 'সম্ভাব্য হিসাবকে বাস্তবে পরিমাপ করা ফলাফল হিসেবে দাবি করা হচ্ছে না' },
]

const yesList = [
  { en: 'Public-interest research with citations and evidence review in progress', bn: 'উৎস-তথ্যসহ জনস্বার্থমূলক গবেষণা ও প্রমাণ যাচাইয়ের কাজ চলছে' },
  { en: 'Current website resources are readable without creating an account', bn: 'বর্তমান ওয়েবসাইটের উপকরণ অ্যাকাউন্ট ছাড়াই পড়া যায়' },
  { en: 'Working papers are labeled as drafts until publication evidence is established', bn: 'প্রকাশনার প্রমাণ নিশ্চিত না হওয়া পর্যন্ত গবেষণাকে খসড়া হিসেবে দেখানো হয়' },
  { en: 'Funding, affiliations and conflicts of interest should be disclosed when verified', bn: 'অর্থায়ন, সংশ্লিষ্টতা ও স্বার্থ-সংঘাত যাচাই করে প্রকাশ করার নীতি' },
  { en: 'Corrections are encouraged and documented as part of editorial review', bn: 'সম্পাদকীয় যাচাইয়ে ভুল সংশোধন ও নথিভুক্তিকে উৎসাহ দেওয়া হয়' },
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
      desc: 'Future dialogue with government officials should be transparent and does not imply official endorsement. Any funding or advisory arrangement would require conflict-of-interest review and documented safeguards.',
    },
    bn: {
      title: 'সরকারি দূরত্বের নিয়ম',
      desc: 'ভবিষ্যতে সরকারি কর্মকর্তাদের সঙ্গে আলোচনা হলে তা স্বচ্ছভাবে জানানো উচিত; এটিকে সরকারি অনুমোদন বলা যাবে না। অর্থায়ন বা পরামর্শ চুক্তির ক্ষেত্রে স্বার্থ-সংঘাত পরীক্ষা করতে হবে।',
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
