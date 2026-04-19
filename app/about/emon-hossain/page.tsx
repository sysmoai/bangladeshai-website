'use client'

import Link from 'next/link'
import { ChevronRight, Mail, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const philosophicalPillars = [
  {
    n: '01',
    en: {
      title: 'Resilience Is Our Superpower',
      body: 'Bangladesh has survived cyclones, floods, famines, liberation wars, and economic collapse — and rebuilt every time. A nation that has endured this much has developed a kind of institutional resilience that Silicon Valley cannot manufacture. Our challenge now is to channel that resilience into building AI systems, not just surviving their disruption.',
    },
    bn: {
      title: 'স্থিতিস্থাপকতা আমাদের সুপারপাওয়ার',
      body: 'বাংলাদেশ ঘূর্ণিঝড়, বন্যা, দুর্ভিক্ষ, মুক্তিযুদ্ধ এবং অর্থনৈতিক পতন থেকে বেঁচে উঠেছে — এবং প্রতিবার পুনর্নির্মাণ করেছে। এত কিছু সহ্য করা একটি জাতি এক ধরনের প্রাতিষ্ঠানিক স্থিতিস্থাপকতা তৈরি করেছে যা সিলিকন ভ্যালি তৈরি করতে পারে না।',
    },
  },
  {
    n: '02',
    en: {
      title: 'From Digital Bangladesh to Smartest Bangladesh',
      body: 'Sheikh Hasina\'s Digital Bangladesh vision transformed a nation of paper forms into a nation of mobile banking and e-governance. That was Version 1.0. Version 2.0 — Smartest Bangladesh — requires AI at the center of every public system. We are already running behind. The question is whether we sprint or sleepwalk.',
    },
    bn: {
      title: 'ডিজিটাল বাংলাদেশ থেকে স্মার্টেস্ট বাংলাদেশ',
      body: 'ডিজিটাল বাংলাদেশ ভিশন কাগজের ফর্মের একটি জাতিকে মোবাইল ব্যাংকিং এবং ই-গভর্ন্যান্সের একটি জাতিতে রূপান্তরিত করেছে। এটি ছিল ভার্সন ১.০। ভার্সন ২.০ — স্মার্টেস্ট বাংলাদেশ — প্রতিটি পাবলিক সিস্টেমের কেন্দ্রে AI প্রয়োজন।',
    },
  },
  {
    n: '03',
    en: {
      title: 'Population Is an Asset, Not a Burden',
      body: '170 million people is not a development problem to be managed. It is the largest potential AI workforce in South Asia outside India. One skilled Bangladeshi, augmented by AI, can do the work of ten unskilled workers anywhere. Our job is not to shrink the population — it is to skill it.',
    },
    bn: {
      title: 'জনসংখ্যা একটি সম্পদ, বোঝা নয়',
      body: '১৭ কোটি মানুষ পরিচালনা করার উন্নয়ন সমস্যা নয়। এটি ভারতের বাইরে দক্ষিণ এশিয়ার বৃহত্তম সম্ভাব্য AI কর্মশক্তি। AI দ্বারা সমর্থিত একজন দক্ষ বাংলাদেশি যেকোনো জায়গায় দশজন অদক্ষ শ্রমিকের কাজ করতে পারে।',
    },
  },
  {
    n: '04',
    en: {
      title: 'AI Works in Bangla Today',
      body: 'This is not a future capability — it exists now. GPT-4, Claude, Gemini all handle Bangla. Mistral has open-source Bangla support. OCR for printed Bangla is at 98%+ accuracy. The infrastructure excuse is gone. What remains is willingness: the willingness of institutions to use these tools, and the willingness of government to fund their development.',
    },
    bn: {
      title: 'AI আজ বাংলায় কাজ করে',
      body: 'এটি ভবিষ্যতের সক্ষমতা নয় — এটি এখন বিদ্যমান। GPT-4, Claude, Gemini সবই বাংলা পরিচালনা করে। মুদ্রিত বাংলার জন্য OCR ৯৮%+ নির্ভুলতায় আছে। অবকাঠামোর অজুহাত চলে গেছে।',
    },
  },
  {
    n: '05',
    en: {
      title: 'Collective Action Is the Only Path',
      body: 'No single ministry, no single company, no single researcher can solve Bangladesh\'s AI readiness gap alone. The $40-80M annual outflow to foreign AI subscriptions requires a coordinated national response. The 67 identified gaps in our readiness assessment require 67 different teams working in parallel. BangladeshAI.org exists to coordinate, not to monopolize.',
    },
    bn: {
      title: 'সম্মিলিত পদক্ষেপই একমাত্র পথ',
      body: 'কোনো একক মন্ত্রণালয়, কোনো একক কোম্পানি, কোনো একক গবেষক একাই বাংলাদেশের AI প্রস্তুতির ঘাটতি সমাধান করতে পারবে না। বিদেশি AI সাবস্ক্রিপশনে বার্ষিক $৪০-৮০ মিলিয়ন বহিঃপ্রবাহের জন্য একটি সমন্বিত জাতীয় প্রতিক্রিয়া প্রয়োজন।',
    },
  },
]

export default function EmonHossainPage() {
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
          <span className="text-text-primary font-medium">{b('Emon Hossain', 'ইমন হোসেন')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 rounded-full bg-bd-green flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
            EH
          </div>
          <h1 className={`text-4xl font-extrabold mb-2 ${font}`}>{b('Emon Hossain', 'ইমন হোসেন')}</h1>
          <p className={`text-xl text-blue-200 mb-2 ${font}`}>{b('Founder, BangladeshAI.org', 'প্রতিষ্ঠাতা, BangladeshAI.org')}</p>
          <p className={`text-blue-300 text-sm ${font}`}>{b('Independent AI Policy Researcher', 'স্বাধীন AI নীতি গবেষক')}</p>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-xl font-bold text-text-primary mb-6 ${font}`}>{b('Professional Biography', 'পেশাদার জীবনী')}</h2>
          <div className={`space-y-4 text-text-secondary leading-relaxed ${font}`}>
            <p>
              {b(
                'Emon Hossain is the founder of BangladeshAI.org, an independent AI policy research platform dedicated to ensuring Bangladesh is prepared for the artificial intelligence revolution. With a deep background in technology analysis and public policy research, Emon has spent years studying how AI governance frameworks operate in leading nations — and what Bangladesh must urgently do to close the gap.',
                'ইমন হোসেন BangladeshAI.org-এর প্রতিষ্ঠাতা, একটি স্বাধীন AI নীতি গবেষণা প্ল্যাটফর্ম যা বাংলাদেশকে কৃত্রিম বুদ্ধিমত্তা বিপ্লবের জন্য প্রস্তুত করতে নিবেদিত।'
              )}
            </p>
            <p>
              {b(
                'His research focuses on three areas: national AI readiness assessment, the economic impact of AI on Bangladesh\'s workforce, and the development of AI governance frameworks appropriate for lower-middle-income countries. He has assessed Bangladesh against 92 international AI readiness requirements across 15 domains, identifying 67 critical gaps in the current ecosystem.',
                'তার গবেষণা তিনটি ক্ষেত্রে মনোযোগ দেয়: জাতীয় AI প্রস্তুতি মূল্যায়ন, বাংলাদেশের কর্মশক্তিতে AI-এর অর্থনৈতিক প্রভাব এবং নিম্ন-মধ্যম আয়ের দেশগুলির জন্য উপযুক্ত AI গভর্ন্যান্স কাঠামোর বিকাশ।'
              )}
            </p>
            <p>
              {b(
                'Emon believes that BangladeshAI.org\'s most important contribution is not any single research paper — it is the creation of an independent, trusted, bilingual voice in Bangladesh\'s AI policy conversation. A voice that speaks for 170 million people rather than any institution.',
                'ইমন বিশ্বাস করেন যে BangladeshAI.org-এর সবচেয়ে গুরুত্বপূর্ণ অবদান কোনো একক গবেষণা পত্র নয় — এটি বাংলাদেশের AI নীতি আলোচনায় একটি স্বাধীন, বিশ্বস্ত, দ্বিভাষিক কণ্ঠস্বর তৈরি করা।'
              )}
            </p>
          </div>

          {/* EN Founder Statement */}
          <blockquote className="border-l-4 border-bd-green pl-6 py-4 my-10 bg-bg-light rounded-r-xl">
            <p className="text-lg font-semibold text-text-primary italic leading-relaxed mb-3">
              {b(
                '"Bangladesh\'s population is not our problem — it is our greatest untapped advantage. One skilled person, empowered by AI, can do the work of one thousand. We are not behind because we lack talent. We are behind because we lack policy. BangladeshAI.org exists to close that gap."',
                '"বাংলাদেশের জনসংখ্যা আমাদের সমস্যা নয় — এটি আমাদের সবচেয়ে বড় অব্যবহৃত সুবিধা। AI দ্বারা ক্ষমতায়িত একজন দক্ষ মানুষ এক হাজার জনের কাজ করতে পারে। আমরা পিছিয়ে নেই কারণ আমাদের প্রতিভার অভাব। আমরা পিছিয়ে আছি কারণ আমাদের নীতির অভাব।"'
              )}
            </p>
            <cite className={`text-sm text-text-secondary not-italic font-medium ${font}`}>
              — {b('Emon Hossain, Founder Statement', 'ইমন হোসেন, প্রতিষ্ঠাতার বিবৃতি')}
            </cite>
          </blockquote>

          {/* Verified Research Initiatives */}
          <h2 className={`text-xl font-bold text-text-primary mb-4 ${font}`}>{b('Verified Research Initiatives', 'যাচাইকৃত গবেষণা উদ্যোগ')}</h2>
          <div className="space-y-4 mb-10">
            <div className="bg-bg-light rounded-xl p-5 border border-border-color">
              <h3 className={`font-bold text-text-primary mb-1 text-sm ${font}`}>{b('Bangladesh AI Readiness Assessment 2026', 'বাংলাদেশ AI প্রস্তুতি মূল্যায়ন ২০২৬')}</h3>
              <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>
                {b('The first comprehensive 92-requirement AI readiness framework for Bangladesh, covering 15 domains and identifying 67 critical gaps. Published March 2026.', 'বাংলাদেশের জন্য প্রথম ব্যাপক ৯২-প্রয়োজনীয়তার AI প্রস্তুতি কাঠামো, ১৫টি ডোমেইন কভার করে এবং ৬৭টি গুরুতর ঘাটতি চিহ্নিত করে। মার্চ ২০২৬-এ প্রকাশিত।')}
              </p>
            </div>
            <div className="bg-bg-light rounded-xl p-5 border border-border-color">
              <h3 className={`font-bold text-text-primary mb-1 text-sm ${font}`}>{b('The Operating System (OS)', 'অপারেটিং সিস্টেম (OS)')}</h3>
              <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>
                {b('A 30+ section strategic AI policy document for Bangladesh covering AI strategy, economy, governance, anti-corruption, education, and workforce. Internal research foundation for all public work.', 'বাংলাদেশের জন্য ৩০+ বিভাগের কৌশলগত AI নীতি নথি যা AI কৌশল, অর্থনীতি, গভর্ন্যান্স, দুর্নীতি বিরোধী, শিক্ষা এবং কর্মশক্তি কভার করে।')}
              </p>
            </div>
            <div className="bg-bg-light rounded-xl p-5 border border-border-color">
              <h3 className={`font-bold text-text-primary mb-1 text-sm ${font}`}>BangladeshAI.org</h3>
              <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>
                {b("Bangladesh's first independent, bilingual AI policy research platform. Launched March 2026. 20+ pages of original content in English and Bangla.", 'বাংলাদেশের প্রথম স্বাধীন, দ্বিভাষিক AI নীতি গবেষণা প্ল্যাটফর্ম। মার্চ ২০২৬-এ চালু হয়েছে। ইংরেজি ও বাংলায় ২০+ পাতার মৌলিক বিষয়বস্তু।')}
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <h2 className={`text-xl font-bold text-text-primary mb-4 ${font}`}>{b('Areas of Focus', 'মনোযোগের ক্ষেত্র')}</h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              [b('AI Policy & Governance', 'AI নীতি ও গভর্ন্যান্স')],
              [b('National AI Strategy', 'জাতীয় AI কৌশল')],
              [b('Bilingual AI Education', 'দ্বিভাষিক AI শিক্ষা')],
              [b('Bangladesh Digital Economy', 'বাংলাদেশ ডিজিটাল অর্থনীতি')],
              [b('AI Readiness Assessment', 'AI প্রস্তুতি মূল্যায়ন')],
              [b('Workforce & AI Disruption', 'কর্মশক্তি ও AI ব্যাঘাত')],
            ].map(([label]) => (
              <span
                key={label}
                className={`px-4 py-2 bg-bg-light border border-border-color rounded-full text-sm font-medium text-text-primary ${font}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Philosophical Pillars */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 ${font}`}>
            {b('Five Philosophical Pillars', 'পাঁচটি দার্শনিক স্তম্ভ')}
          </h2>
          <p className={`text-text-secondary mb-10 text-sm ${font}`}>
            {b('The beliefs that guide every piece of research produced by BangladeshAI.org.', 'BangladeshAI.org-এর প্রতিটি গবেষণা পরিচালিত করে এমন বিশ্বাস।')}
          </p>
          <div className="space-y-6">
            {philosophicalPillars.map((pillar) => {
              const content = isBn ? pillar.bn : pillar.en
              return (
                <div key={pillar.n} className="bg-bg-surface rounded-xl p-6 border border-border-color shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-extrabold text-primary-blue/20 flex-shrink-0 leading-none">{pillar.n}</span>
                    <div>
                      <h3 className={`text-lg font-bold text-text-primary mb-3 ${font}`}>{content.title}</h3>
                      <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.body}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className={`text-xl font-bold mb-4 ${font}`}>{b('Contact Emon', 'ইমনের সাথে যোগাযোগ করুন')}</h2>
          <p className={`text-blue-200 mb-8 text-sm max-w-md mx-auto ${font}`}>
            {b(
              'For media inquiries, speaking engagements, research collaboration, or policy briefings.',
              'মিডিয়া অনুসন্ধান, বক্তৃতা সম্পৃক্ততা, গবেষণা সহযোগিতা বা নীতি ব্রিফিংয়ের জন্য।'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:emon@emonhossain.pro"
              className="flex items-center gap-2 bg-bd-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              emon@emonhossain.pro
            </a>
            <a
              href="https://emonhossain.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Globe size={16} />
              emonhossain.pro
            </a>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://linkedin.com/in/emonhossain" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white text-sm transition-colors">LinkedIn</a>
            <a href="https://twitter.com/emonhossain" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white text-sm transition-colors">Twitter/X</a>
            <a href="https://github.com/sysmoai" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white text-sm transition-colors">GitHub</a>
          </div>
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
