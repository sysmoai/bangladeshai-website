'use client'

import Link from 'next/link'
import { ChevronRight, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const claimTypes = [
  {
    icon: CheckCircle,
    color: 'text-bd-green',
    bg: 'bg-bd-green/5 border-bd-green/20',
    headerBg: 'bg-bd-green/10',
    en: {
      label: 'Conservative (Verified Fact)',
      definition: 'A claim directly sourced from a primary, independently verifiable dataset or official document. We can point you to the exact table, page, or dataset.',
      examples: [
        'Bangladesh scored 47.12/100 on the Oxford Insights Government AI Readiness Index 2024.',
        'Bangladesh ranks 80th of 188 countries.',
        'Government Readiness sub-score: 58.52/100.',
      ],
      sources: 'Oxford Insights GARI 2024, World Bank World Development Indicators, ITU Digital Development Dashboard, Bangladesh government official documents.',
    },
    bn: {
      label: 'রক্ষণশীল (যাচাইকৃত তথ্য)',
      definition: 'সরাসরি একটি প্রাথমিক, স্বাধীনভাবে যাচাইযোগ্য ডেটাসেট বা অফিসিয়াল নথি থেকে নেওয়া একটি দাবি।',
      examples: [
        'বাংলাদেশ Oxford Insights সরকার AI প্রস্তুতি সূচক ২০২৪-এ ১০০-এর মধ্যে ৪৭.১২ স্কোর করেছে।',
        'বাংলাদেশ ১৯৩টি দেশের মধ্যে ৮০তম স্থানে রয়েছে।',
        'সরকারি প্রস্তুতি উপ-স্কোর: ৫৮.৫২/১০০।',
      ],
      sources: 'Oxford Insights GARI 2024, বিশ্বব্যাংক বিশ্ব উন্নয়ন সূচক, ITU ডিজিটাল উন্নয়ন ড্যাশবোর্ড, বাংলাদেশ সরকারের অফিসিয়াল নথি।',
    },
  },
  {
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50 border-yellow-200',
    headerBg: 'bg-yellow-50',
    en: {
      label: 'Moderate (Supported Analysis)',
      definition: 'A claim derived through documented analytical reasoning from verified data. The underlying data is real; the interpretation adds one analytical step that is transparent and challengeable.',
      examples: [
        'Technology Sector is Bangladesh\'s most critical weakness (score: 26.26/100 — lowest of the three pillars).',
        'Bangladesh has an estimated 67 gaps across 15 AI readiness domains.',
        'India\'s AI readiness (62.81) is 15.69 points ahead of Bangladesh.',
      ],
      sources: 'Derived from Oxford Insights GARI 2024 methodology. Gap count based on our application of the 92-requirement framework to Bangladesh\'s documented capabilities.',
    },
    bn: {
      label: 'মধ্যপন্থী (সমর্থিত বিশ্লেষণ)',
      definition: 'যাচাইকৃত ডেটা থেকে নথিভুক্ত বিশ্লেষণাত্মক যুক্তির মাধ্যমে প্রাপ্ত একটি দাবি।',
      examples: [
        'প্রযুক্তি খাত বাংলাদেশের সবচেয়ে গুরুতর দুর্বলতা (স্কোর: ২৬.২৬/১০০)।',
        'বাংলাদেশে ১৫টি AI প্রস্তুতি ডোমেনে আনুমানিক ৬৭টি ঘাটতি রয়েছে।',
        'ভারতের AI প্রস্তুতি (৬২.৮১) বাংলাদেশের চেয়ে ১৫.৬৯ পয়েন্ট এগিয়ে।',
      ],
      sources: 'Oxford Insights GARI 2024 পদ্ধতি থেকে প্রাপ্ত। বাংলাদেশের নথিভুক্ত সক্ষমতায় ৯২-প্রয়োজনীয়তা কাঠামোর প্রয়োগের উপর ভিত্তি করে ঘাটতি গণনা।',
    },
  },
  {
    icon: HelpCircle,
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/5 border-primary-blue/20',
    headerBg: 'bg-primary-blue/5',
    en: {
      label: 'Planning Hypothesis (Projection)',
      definition: 'A forward-looking estimate or projection based on clearly stated assumptions and trends. These are explicitly labeled as projections — not facts. They are designed to inform planning, not to claim certainty.',
      examples: [
        'Bangladesh could achieve a score of 65+ by 2033 with targeted investment (BangladeshAI.org projection based on Vietnam and Rwanda trajectory analysis).',
        'AI disruption could displace 15–25% of Bangladesh\'s RMG workforce without reskilling (based on McKinsey Global Institute automation probability models applied to Bangladesh occupational data).',
        '$40–80M annual foreign AI subscription outflow (BangladeshAI.org estimate based on subscription pricing and estimated user count).',
      ],
      sources: 'McKinsey Global Institute Future of Work research, Oxford Insights trajectory models, BangladeshAI.org internal modelling (methodology available on request).',
    },
    bn: {
      label: 'পরিকল্পনা অনুমান (প্রজেকশন)',
      definition: 'স্পষ্টভাবে উল্লিখিত অনুমান এবং প্রবণতার উপর ভিত্তি করে একটি ভবিষ্যৎমুখী অনুমান বা প্রজেকশন।',
      examples: [
        'লক্ষ্যমাত্রা বিনিয়োগের সাথে বাংলাদেশ ২০৩৩ সালের মধ্যে ৬৫+ স্কোর অর্জন করতে পারে।',
        'AI ব্যাঘাত রিস্কিলিং ছাড়া বাংলাদেশের RMG কর্মশক্তির ১৫-২৫% স্থানচ্যুত করতে পারে।',
        'বার্ষিক বিদেশি AI সাবস্ক্রিপশন বহিঃপ্রবাহ $৪০-৮০ মিলিয়ন।',
      ],
      sources: 'McKinsey Global Institute ভবিষ্যৎ কর্ম গবেষণা, Oxford Insights ট্র্যাজেক্টরি মডেল, BangladeshAI.org অভ্যন্তরীণ মডেলিং।',
    },
  },
]

const primarySources = [
  { name: 'Oxford Insights Government AI Readiness Index 2024', url: 'https://www.oxfordinsights.com/government-ai-readiness-index', en: 'Primary source for all AI readiness scores and country rankings.', bn: 'সমস্ত AI প্রস্তুতি স্কোর এবং দেশ র‌্যাংকিং-এর প্রাথমিক উৎস।' },
  { name: 'OECD AI Policy Observatory', url: 'https://oecd.ai', en: 'Framework for AI governance assessment and policy recommendations.', bn: 'AI গভর্ন্যান্স মূল্যায়ন এবং নীতি সুপারিশের কাঠামো।' },
  { name: 'World Bank World Development Indicators', url: 'https://databank.worldbank.org/source/world-development-indicators', en: 'GDP data, digital infrastructure metrics, education indicators.', bn: 'জিডিপি ডেটা, ডিজিটাল অবকাঠামো মেট্রিক্স, শিক্ষা সূচক।' },
  { name: 'ITU Digital Development Dashboard', url: 'https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx', en: 'Internet penetration, mobile connectivity, and ICT access data.', bn: 'ইন্টারনেট প্রবেশ, মোবাইল সংযোগ এবং ICT অ্যাক্সেস ডেটা।' },
  { name: 'Bangladesh ICT Division Policy Documents', url: 'https://ictd.gov.bd', en: 'Smart Bangladesh Vision 2041, Digital Bangladesh policy documents, AI policy drafts.', bn: 'স্মার্ট বাংলাদেশ ভিশন ২০৪১, ডিজিটাল বাংলাদেশ নীতি নথি, AI নীতি খসড়া।' },
  { name: 'McKinsey Global Institute', url: 'https://www.mckinsey.com/mgi', en: 'Automation probability models and future of work research used for workforce displacement projections.', bn: 'কর্মশক্তি বাস্তুচ্যুতির প্রজেকশনের জন্য ব্যবহৃত অটোমেশন সম্ভাব্যতা মডেল।' },
]

export default function MethodologyPage() {
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
          <span className="text-text-primary font-medium">{b('Methodology', 'পদ্ধতি')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl font-extrabold mb-6 ${font}`}>
            {b('Methodology Note', 'পদ্ধতি নোট')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed ${font}`}>
            {b(
              'How BangladeshAI.org classifies claims, sources data, and maintains intellectual honesty when facts are uncertain.',
              'BangladeshAI.org কীভাবে দাবি শ্রেণীবদ্ধ করে, ডেটা উৎস করে এবং তথ্য অনিশ্চিত হলে বৌদ্ধিক সততা বজায় রাখে।'
            )}
          </p>
        </div>
      </section>

      {/* Why Methodology Matters */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-6 ${font}`}>
            {b('Why We Publish Our Methodology', 'কেন আমরা আমাদের পদ্ধতি প্রকাশ করি')}
          </h2>
          <div className={`text-text-secondary leading-relaxed text-base space-y-4 ${font}`}>
            <p>
              {b(
                'AI policy research is full of confident-sounding claims that collapse when you look for the source. "AI will eliminate X% of jobs" — which jobs? Which country? Which year? On what model? These questions matter enormously when the claims are being used to make national policy.',
                'AI নীতি গবেষণা আত্মবিশ্বাসী-শোনানো দাবিতে পরিপূর্ণ যা উৎস খুঁজলে ভেঙে পড়ে। এই প্রশ্নগুলি অত্যন্ত গুরুত্বপূর্ণ যখন দাবিগুলি জাতীয় নীতি তৈরিতে ব্যবহৃত হচ্ছে।'
              )}
            </p>
            <p>
              {b(
                'BangladeshAI.org distinguishes between three types of claims — verified facts, supported analysis, and planning projections — because conflating them is dishonest. Every piece of research we publish labels which type of claim each finding represents.',
                'BangladeshAI.org তিন ধরনের দাবির মধ্যে পার্থক্য করে — যাচাইকৃত তথ্য, সমর্থিত বিশ্লেষণ এবং পরিকল্পনা প্রজেকশন — কারণ সেগুলি মিশিয়ে ফেলা অসৎ।'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Three claim types */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-10 ${font}`}>
            {b('Three Claim Classification Types', 'তিনটি দাবি শ্রেণীবিভাগের ধরন')}
          </h2>
          <div className="space-y-6">
            {claimTypes.map((ct, i) => {
              const Icon = ct.icon
              const content = isBn ? ct.bn : ct.en
              return (
                <div key={i} className={`rounded-2xl border overflow-hidden ${ct.bg}`}>
                  <div className={`${ct.headerBg} px-6 py-4 flex items-center gap-3 border-b border-current/10`}>
                    <Icon size={20} className={ct.color} />
                    <h3 className={`font-bold text-text-primary ${font}`}>{content.label}</h3>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.definition}</p>
                    <div>
                      <p className={`text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 ${font}`}>{b('Examples', 'উদাহরণ')}</p>
                      <ul className="space-y-1.5">
                        {content.examples.map((ex, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className={`flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-current ${ct.color}`} />
                            <span className={`text-text-secondary text-sm ${font}`}>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className={`text-xs font-bold text-text-secondary uppercase tracking-wider mb-1 ${font}`}>{b('Primary Sources Used', 'ব্যবহৃত প্রাথমিক উৎস')}</p>
                      <p className={`text-text-secondary text-xs leading-relaxed ${font}`}>{content.sources}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Primary sources list */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${font}`}>
            {b('Primary Sources', 'প্রাথমিক উৎস')}
          </h2>
          <div className="space-y-4">
            {primarySources.map((s, i) => (
              <div key={i} className="bg-bg-light rounded-xl p-5 border border-border-color">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary-blue hover:underline text-sm leading-tight block mb-1"
                    >
                      {s.name}
                    </a>
                    <p className={`text-text-secondary text-sm ${font}`}>{isBn ? s.bn : s.en}</p>
                  </div>
                  <span className="text-xs text-text-secondary bg-bg-surface px-2 py-0.5 rounded border border-border-color flex-shrink-0">P{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corrections policy */}
      <section className="bg-bg-light py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-8 text-white text-center">
            <h2 className={`text-xl font-bold mb-4 ${font}`}>{b('Corrections Policy', 'সংশোধন নীতি')}</h2>
            <p className={`text-blue-200 text-sm max-w-xl mx-auto mb-6 ${font}`}>
              {b(
                'When we make errors — and we will — we correct them prominently and publicly. If you find an error in our research, please contact us. We will investigate within 48 hours and publish a correction if warranted.',
                'যখন আমরা ভুল করি — এবং আমরা করব — আমরা সেগুলি স্পষ্টভাবে এবং সর্বজনীনভাবে সংশোধন করি। যদি আপনি আমাদের গবেষণায় ভুল খুঁজে পান, দয়া করে আমাদের সাথে যোগাযোগ করুন।'
              )}
            </p>
            <Link
              href="/contact"
              className={`bg-bd-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block ${font}`}
            >
              {b('Report an Error →', 'একটি ত্রুটি রিপোর্ট করুন →')}
            </Link>
            <div className="mt-8">
              <Link href="/about" className={`text-blue-300 hover:text-white text-sm transition-colors ${font}`}>
                ← {b('Back to About', 'আমাদের সম্পর্কে ফিরে যান')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
