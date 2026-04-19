'use client'

import Link from 'next/link'
import { ChevronRight, Shield, Search, BookOpen, Users, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const pillars = [
  {
    icon: Shield,
    en: { title: 'Independence Above All', desc: 'BangladeshAI.org accepts no government funding, no commercial sponsorship, and no political affiliation. Our only obligation is to the truth — and to Bangladesh\'s 170 million people. Independence is not a policy; it is the foundation on which every analysis rests.' },
    bn: { title: 'সর্বোপরি স্বাধীনতা', desc: 'BangladeshAI.org কোনো সরকারি অর্থায়ন, বাণিজ্যিক স্পনসরশিপ এবং রাজনৈতিক সংযোগ গ্রহণ করে না। আমাদের একমাত্র দায়বদ্ধতা সত্যের প্রতি — এবং বাংলাদেশের ১৭ কোটি মানুষের প্রতি।' },
  },
  {
    icon: Search,
    en: { title: 'Evidence Over Optimism', desc: 'AI hype is the enemy of policy. We measure, we assess, we compare — and we report what we find, even when the findings are uncomfortable. Bangladesh\'s score of 47.12/100 is not an indictment; it is a starting point. You cannot fix what you refuse to see.' },
    bn: { title: 'আশাবাদের চেয়ে প্রমাণ', desc: 'AI হাইপ হল নীতির শত্রু। আমরা পরিমাপ করি, মূল্যায়ন করি, তুলনা করি — এবং আমরা যা খুঁজে পাই তা রিপোর্ট করি, এমনকি যখন ফলাফলগুলি অস্বস্তিকর। বাংলাদেশের স্কোর ৪৭.১২/১০০ একটি দোষারোপ নয়; এটি একটি সূচনা বিন্দু।' },
  },
  {
    icon: BookOpen,
    en: { title: 'Bilingual by Design', desc: 'AI policy written only in English serves only a fraction of Bangladesh\'s population. Every piece of research we produce exists in both English and Bangla — not translated, but written natively in both languages for the audiences who need it most.' },
    bn: { title: 'ডিজাইনে দ্বিভাষিক', desc: 'শুধুমাত্র ইংরেজিতে লেখা AI নীতি বাংলাদেশের জনসংখ্যার একটি ক্ষুদ্র অংশকে সেবা করে। আমাদের প্রতিটি গবেষণা ইংরেজি এবং বাংলা উভয়েই বিদ্যমান — অনুবাদ নয়, তবে যে দর্শকদের এটি সবচেয়ে বেশি প্রয়োজন তাদের জন্য উভয় ভাষায় স্থানীয়ভাবে লেখা।' },
  },
  {
    icon: Users,
    en: { title: 'Citizens First', desc: 'AI governance conversations happen in ministries, boardrooms, and think tanks. But the people who will live with the consequences are farmers, garment workers, students, and rickshaw drivers. Our research is written to serve them — and our policy recommendations are designed to protect them.' },
    bn: { title: 'নাগরিক প্রথম', desc: 'AI গভর্ন্যান্স আলোচনা মন্ত্রণালয়, বোর্ডরুম এবং থিঙ্ক ট্যাঙ্কে হয়। কিন্তু যারা এর পরিণতির সাথে বাঁচবে তারা হলেন কৃষক, পোশাক শ্রমিক, শিক্ষার্থী এবং রিকশাচালক। আমাদের গবেষণা তাদের সেবা করার জন্য লেখা।' },
  },
  {
    icon: Globe,
    en: { title: 'Global Lens, Local Action', desc: 'Singapore reached 84.25/100 by treating AI as national infrastructure — not a departmental project. Estonia built digital governance with 1.3 million people. Rwanda leapfrogged infrastructure gaps. Bangladesh can learn from every one of them. We track global best practices so Bangladesh doesn\'t have to start from scratch.' },
    bn: { title: 'বৈশ্বিক দৃষ্টিভঙ্গি, স্থানীয় পদক্ষেপ', desc: 'সিঙ্গাপুর AI-কে জাতীয় অবকাঠামো হিসাবে বিবেচনা করে ৮৪.২৫/১০০ পৌঁছেছে। এস্তোনিয়া ১৩ লাখ মানুষ নিয়ে ডিজিটাল গভর্ন্যান্স তৈরি করেছে। রুয়ান্ডা অবকাঠামোর ঘাটতি অতিক্রম করেছে। বাংলাদেশ তাদের সবার কাছ থেকে শিখতে পারে।' },
  },
]

const notList = [
  { en: 'Not funded by any government — Bangladeshi or foreign', bn: 'কোনো সরকার দ্বারা অর্থায়িত নয় — বাংলাদেশি বা বিদেশি' },
  { en: 'Not a commercial product or vendor', bn: 'বাণিজ্যিক পণ্য বা বিক্রেতা নয়' },
  { en: 'Not affiliated with any political party', bn: 'কোনো রাজনৈতিক দলের সাথে অনুমোদিত নয়' },
  { en: 'Not a think tank with a predetermined agenda', bn: 'পূর্বনির্ধারিত এজেন্ডা সহ থিঙ্ক ট্যাঙ্ক নয়' },
  { en: 'Not funded by AI companies with products to sell', bn: 'বিক্রির পণ্য আছে এমন AI কোম্পানি দ্বারা অর্থায়িত নয়' },
]

const isList = [
  { en: 'An independent research platform', bn: 'একটি স্বাধীন গবেষণা প্ল্যাটফর্ম' },
  { en: 'Evidence-based and non-partisan', bn: 'প্রমাণ-ভিত্তিক এবং নিরপেক্ষ' },
  { en: 'Research-first: analysis before advocacy', bn: 'গবেষণা-প্রথম: পক্ষসমর্থনের আগে বিশ্লেষণ' },
  { en: 'Bilingual: English and Bangla natively', bn: 'দ্বিভাষিক: ইংরেজি এবং বাংলা স্বাভাবিকভাবে' },
  { en: 'Free and publicly available', bn: 'বিনামূল্যে এবং সর্বজনীনভাবে উপলব্ধ' },
]

export default function MissionPage() {
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
          <span className="text-text-primary font-medium">{b('Mission', 'আমাদের লক্ষ্য')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-bd-green/20 border border-bd-green/40 rounded-full text-bd-green text-xs font-semibold uppercase tracking-wider mb-6">
            {b('Our Mission', 'আমাদের লক্ষ্য')}
          </div>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${font}`}>
            {b('What BangladeshAI.org Stands For', 'BangladeshAI.org যার জন্য দাঁড়িয়ে আছে')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed ${font}`}>
            {b(
              'Independent · Non-partisan · Evidence-based · Research-first. Built for 170 million people.',
              'স্বাধীন · নিরপেক্ষ · প্রমাণ-ভিত্তিক · গবেষণা-প্রথম। ১৭ কোটি মানুষের জন্য নির্মিত।'
            )}
          </p>
        </div>
      </section>

      {/* Score Banner */}
      <section className="bg-primary-blue py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center">
          <div>
            <div className="text-5xl font-extrabold">47.12</div>
            <div className={`text-blue-200 text-sm mt-1 ${font}`}>{b('Bangladesh AI Readiness Score /100', 'বাংলাদেশ AI প্রস্তুতি স্কোর /১০০')}</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-blue-400" />
          <div>
            <div className="text-5xl font-extrabold">80<span className="text-2xl">/188</span></div>
            <div className={`text-blue-200 text-sm mt-1 ${font}`}>{b('Global Ranking', 'বৈশ্বিক র‌্যাংকিং')}</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-blue-400" />
          <div>
            <div className="text-5xl font-extrabold">67</div>
            <div className={`text-blue-200 text-sm mt-1 ${font}`}>{b('Critical Gaps Identified', 'গুরুতর ফাঁক চিহ্নিত')}</div>
          </div>
        </div>
      </section>

      {/* What it IS and IS NOT */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-10 text-center ${font}`}>
            {b('What BangladeshAI.org Is — and Is Not', 'BangladeshAI.org কী — এবং কী নয়')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* IS */}
            <div className="bg-bg-light rounded-2xl p-6 border border-border-color">
              <h3 className={`text-lg font-bold text-bd-green mb-4 ${font}`}>{b('This is…', 'এটি হল…')}</h3>
              <ul className="space-y-3">
                {isList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-bd-green font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className={`text-text-primary text-sm leading-relaxed ${font}`}>{b(item.en, item.bn)}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* IS NOT */}
            <div className="bg-bg-light rounded-2xl p-6 border border-border-color">
              <h3 className={`text-lg font-bold text-bd-red mb-4 ${font}`}>{b('This is not…', 'এটি নয়…')}</h3>
              <ul className="space-y-3">
                {notList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-bd-red font-bold mt-0.5 flex-shrink-0">✗</span>
                    <span className={`text-text-primary text-sm leading-relaxed ${font}`}>{b(item.en, item.bn)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-10 text-center ${font}`}>
            {b('Five Pillars of Our Work', 'আমাদের কাজের পাঁচটি স্তম্ভ')}
          </h2>
          <div className="space-y-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              const content = isBn ? pillar.bn : pillar.en
              return (
                <div key={i} className="bg-bg-surface rounded-xl p-6 shadow-sm border border-border-color flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary-blue" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold text-text-primary mb-2 ${font}`}>{content.title}</h3>
                    <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Independence Pledge */}
      <section className="bg-primary-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className={`text-2xl font-bold mb-6 ${font}`}>{b('Independence Pledge', 'স্বাধীনতার প্রতিশ্রুতি')}</h2>
          <blockquote className={`text-lg text-blue-100 leading-relaxed mb-8 italic ${font}`}>
            {b(
              '"We will never accept funding from any source — government, corporation, or political entity — that could compromise the independence of our research. If our analysis is wrong, we will say so. If our recommendations change based on new evidence, we will update them publicly. Our credibility is our only asset."',
              '"আমরা কখনই কোনো উৎস থেকে অর্থায়ন গ্রহণ করব না — সরকার, কর্পোরেশন বা রাজনৈতিক সত্তা — যা আমাদের গবেষণার স্বাধীনতার সাথে আপস করতে পারে। আমাদের বিশ্বাসযোগ্যতাই আমাদের একমাত্র সম্পদ।"'
            )}
          </blockquote>
          <p className="text-blue-300 text-sm font-semibold">— Emon Hossain, Founder</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/about/independence" className="bg-bd-green text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              {b('Independence Statement →', 'স্বাধীনতার বিবৃতি →')}
            </Link>
            <Link href="/research" className="border border-white/30 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {b('Read Our Research', 'গবেষণা পড়ুন')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
