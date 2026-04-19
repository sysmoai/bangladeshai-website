'use client'

import Link from 'next/link'
import { ChevronRight, Shield, Search, BookOpen, Users, BarChart3 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const values = [
  {
    icon: Shield,
    en: { title: 'Independence', desc: 'No government funding. No commercial sponsorship. No political affiliation. Our analysis is free from every form of institutional pressure.' },
    bn: { title: 'স্বাধীনতা', desc: 'কোনো সরকারি অর্থায়ন নেই। কোনো বাণিজ্যিক স্পনসরশিপ নেই। কোনো রাজনৈতিক সংযোগ নেই। আমাদের বিশ্লেষণ প্রতিটি প্রাতিষ্ঠানিক চাপ থেকে মুক্ত।' },
  },
  {
    icon: Search,
    en: { title: 'Evidence First', desc: 'Every claim we make is grounded in primary data, peer-reviewed methodology, and independently verifiable sources. We cite everything.' },
    bn: { title: 'প্রমাণ প্রথম', desc: 'আমাদের প্রতিটি দাবি প্রাথমিক ডেটা, পিয়ার-রিভিউড পদ্ধতি এবং স্বাধীনভাবে যাচাইযোগ্য উৎসের উপর ভিত্তি করে।' },
  },
  {
    icon: BookOpen,
    en: { title: 'Radical Accessibility', desc: 'All research is free. All content is bilingual (English + Bangla). We write for a 15-year-old student and a ministry secretary equally.' },
    bn: { title: 'আমূল প্রবেশযোগ্যতা', desc: 'সমস্ত গবেষণা বিনামূল্যে। সমস্ত বিষয়বস্তু দ্বিভাষিক (ইংরেজি + বাংলা)। আমরা একটি ১৫ বছর বয়সী শিক্ষার্থী এবং একজন মন্ত্রণালয় সচিব উভয়ের জন্য সমানভাবে লিখি।' },
  },
  {
    icon: Users,
    en: { title: 'Citizens Over Institutions', desc: 'Our research is designed to protect and empower Bangladesh\'s 170 million people — not to advance any institution\'s agenda.' },
    bn: { title: 'প্রতিষ্ঠানের উপরে নাগরিক', desc: 'আমাদের গবেষণা বাংলাদেশের ১৭ কোটি মানুষকে সুরক্ষিত ও ক্ষমতায়িত করার জন্য — কোনো প্রতিষ্ঠানের এজেন্ডা এগিয়ে নেওয়ার জন্য নয়।' },
  },
  {
    icon: BarChart3,
    en: { title: 'Honest Uncertainty', desc: 'We distinguish between what we know (data), what we assess (analysis), and what we project (hypothesis). Every claim is labeled by confidence level.' },
    bn: { title: 'সৎ অনিশ্চয়তা', desc: 'আমরা আমরা কী জানি (ডেটা), আমরা কী মূল্যায়ন করি (বিশ্লেষণ) এবং আমরা কী প্রজেক্ট করি (অনুমান) এর মধ্যে পার্থক্য করি।' },
  },
]

export default function AboutPage() {
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
          <span className="text-text-primary font-medium">{b('About', 'আমাদের সম্পর্কে')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 ${font}`}>
            {b('About BangladeshAI.org', 'BangladeshAI.org সম্পর্কে')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed ${font}`}>
            {b(
              'Independent AI policy research for 170 million people. No agenda. No sponsor. No compromise.',
              '১৭ কোটি মানুষের জন্য স্বাধীন AI নীতি গবেষণা। কোনো এজেন্ডা নেই। কোনো স্পনসর নেই। কোনো আপোস নেই।'
            )}
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-6 ${font}`}>
            {b('What BangladeshAI.org Is', 'BangladeshAI.org কী')}
          </h2>
          <div className={`text-text-secondary leading-relaxed text-lg space-y-4 ${font}`}>
            <p>
              {b(
                'BangladeshAI.org is an independent research and advocacy platform dedicated to ensuring Bangladesh is prepared for the artificial intelligence revolution. Founded in 2024 by Emon Hossain, it produces rigorous policy research, educational content, and strategic recommendations — all freely available to the public in both English and Bangla.',
                'BangladeshAI.org একটি স্বাধীন গবেষণা ও পক্ষসমর্থন প্ল্যাটফর্ম যা বাংলাদেশকে কৃত্রিম বুদ্ধিমত্তা বিপ্লবের জন্য প্রস্তুত করতে নিবেদিত। ২০২৪ সালে ইমন হোসেন প্রতিষ্ঠিত, এটি কঠোর নীতি গবেষণা, শিক্ষামূলক বিষয়বস্তু এবং কৌশলগত সুপারিশ তৈরি করে।'
              )}
            </p>
            <p>
              {b(
                'We are not a government body, a think tank with a political affiliation, or a commercial entity. We produce independent analysis because Bangladesh\'s AI future is too important to leave to those with financial interests in the outcome.',
                'আমরা কোনো সরকারি সংস্থা, রাজনৈতিক সংযোগ সহ থিঙ্ক ট্যাঙ্ক বা বাণিজ্যিক সত্তা নই। আমরা স্বাধীন বিশ্লেষণ তৈরি করি কারণ বাংলাদেশের AI ভবিষ্যৎ ফলাফলে আর্থিক স্বার্থ আছে তাদের হাতে ছেড়ে দেওয়া অনেক গুরুত্বপূর্ণ।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-10 text-center ${font}`}>
            {b('Our Core Values', 'আমাদের মূল মূল্যবোধ')}
          </h2>
          <div className="space-y-4">
            {values.map((v, i) => {
              const Icon = v.icon
              const content = isBn ? v.bn : v.en
              return (
                <div key={i} className="bg-bg-surface rounded-xl p-6 shadow-sm border border-border-color flex gap-5">
                  <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary-blue" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-text-primary mb-1 ${font}`}>{content.title}</h3>
                    <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How research is produced */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${font}`}>
            {b('How Research Is Produced', 'গবেষণা কীভাবে তৈরি করা হয়')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                en: { title: 'Primary Source Only', desc: 'We source from Oxford Insights, OECD, World Bank, ITU, and government policy documents. No secondary aggregation without citation.' },
                bn: { title: 'শুধুমাত্র প্রাথমিক উৎস', desc: 'আমরা Oxford Insights, OECD, বিশ্বব্যাংক, ITU এবং সরকারি নীতি নথি থেকে তথ্য নিই।' },
              },
              {
                step: '02',
                en: { title: 'Confidence Labeling', desc: 'Every claim is labeled: Conservative (verified fact), Moderate (supported analysis), or Planning Hypothesis (projection).' },
                bn: { title: 'আস্থা লেবেলিং', desc: 'প্রতিটি দাবিতে লেবেল আছে: রক্ষণশীল (যাচাইকৃত তথ্য), মধ্যপন্থী (সমর্থিত বিশ্লেষণ), বা পরিকল্পনা অনুমান।' },
              },
              {
                step: '03',
                en: { title: 'Bilingual Publication', desc: 'Every research paper is published natively in both English and Bangla — not machine-translated.' },
                bn: { title: 'দ্বিভাষিক প্রকাশনা', desc: 'প্রতিটি গবেষণা পত্র ইংরেজি এবং বাংলা উভয়েই স্থানীয়ভাবে প্রকাশিত হয় — মেশিন-অনুবাদ নয়।' },
              },
            ].map((item) => {
              const content = isBn ? item.bn : item.en
              return (
                <div key={item.step} className="bg-bg-light rounded-xl p-5 border border-border-color">
                  <div className="text-3xl font-extrabold text-primary-blue/20 mb-3">{item.step}</div>
                  <h3 className={`font-bold text-text-primary mb-2 text-sm ${font}`}>{content.title}</h3>
                  <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/about/methodology" className={`text-primary-blue font-semibold hover:underline text-sm ${font}`}>
              {b('Read our full methodology note →', 'আমাদের সম্পূর্ণ পদ্ধতি নোট পড়ুন →')}
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-page links */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link href="/about/emon-hossain" className="bg-bg-surface rounded-xl p-6 border border-border-color hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-bd-green flex items-center justify-center text-white font-bold text-lg mb-4">EH</div>
            <h3 className={`font-bold text-text-primary mb-1 ${font}`}>{b('Meet the Founder', 'প্রতিষ্ঠাতার সাথে পরিচয়')}</h3>
            <p className={`text-text-secondary text-sm ${font}`}>{b('Emon Hossain · Founder & Lead Researcher', 'ইমন হোসেন · প্রতিষ্ঠাতা ও প্রধান গবেষক')}</p>
          </Link>
          <Link href="/about/independence" className="bg-bg-surface rounded-xl p-6 border border-border-color hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4">
              <Shield size={22} className="text-primary-blue" />
            </div>
            <h3 className={`font-bold text-text-primary mb-1 ${font}`}>{b('Independence Statement', 'স্বাধীনতার বিবৃতি')}</h3>
            <p className={`text-text-secondary text-sm ${font}`}>{b('Our commitment to non-partisan research', 'নিরপেক্ষ গবেষণায় আমাদের প্রতিশ্রুতি')}</p>
          </Link>
          <Link href="/about/methodology" className="bg-bg-surface rounded-xl p-6 border border-border-color hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4">
              <BarChart3 size={22} className="text-primary-blue" />
            </div>
            <h3 className={`font-bold text-text-primary mb-1 ${font}`}>{b('Methodology Note', 'পদ্ধতি নোট')}</h3>
            <p className={`text-text-secondary text-sm ${font}`}>{b('How we classify and source our claims', 'আমরা কীভাবে আমাদের দাবি শ্রেণীবদ্ধ এবং উৎস করি')}</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
