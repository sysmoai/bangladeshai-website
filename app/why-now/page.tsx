'use client'

import Link from 'next/link'
import { ChevronRight, Clock, TrendingDown, DollarSign, Users, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import ShareButtons from '@/components/ShareButtons'

const countryGapData = [
  { country: 'India', countryBn: 'ভারত', score: 62.81, gap: 15.69, color: 'bg-yellow-400' },
  { country: 'Vietnam', countryBn: 'ভিয়েতনাম', score: 61.42, gap: 14.30, color: 'bg-orange-400' },
  { country: 'Rwanda', countryBn: 'রুয়ান্ডা', score: 57.07, gap: 9.95, color: 'bg-primary-blue' },
  { country: 'Indonesia', countryBn: 'ইন্দোনেশিয়া', score: 55.96, gap: 8.84, color: 'bg-bd-green' },
  { country: 'Bangladesh', countryBn: 'বাংলাদেশ', score: 47.12, gap: 0, color: 'bg-bd-red', isSelf: true },
]

const urgencyPoints = [
  {
    icon: Clock,
    stat: '1,000',
    statUnit: 'days → 5 min',
    en: {
      title: 'AI as Time Multiplier',
      desc: 'A garment factory AI system can analyze 1,000 worker-days of quality control data in 5 minutes. An agricultural AI model can run 1,000 crop simulations overnight. Bangladesh\'s competitors are already deploying this infrastructure. Every year of delay means falling further behind in productivity-per-worker.',
    },
    bn: {
      title: 'AI একটি সময় গুণক হিসাবে',
      desc: 'একটি পোশাক কারখানার AI সিস্টেম ৫ মিনিটে মান নিয়ন্ত্রণ ডেটার ১,০০০ কর্মী-দিনের বিশ্লেষণ করতে পারে। বাংলাদেশের প্রতিযোগীরা ইতিমধ্যে এই অবকাঠামো মোতায়েন করছে। প্রতি বছরের বিলম্ব মানে প্রতি-শ্রমিক উৎপাদনশীলতায় আরও পিছিয়ে পড়া।',
    },
  },
  {
    icon: DollarSign,
    stat: '$40–80M',
    statUnit: 'annual outflow',
    en: {
      title: 'The Foreign Subscription Drain',
      desc: 'Bangladesh\'s businesses, universities, and government agencies collectively spend an estimated $40–80M annually on foreign AI subscriptions: ChatGPT Plus, Claude Pro, Midjourney, Copilot, and dozens of others. This money leaves Bangladesh and funds the AI gap further. Building domestic AI capacity is not idealism — it is import substitution.',
    },
    bn: {
      title: 'বিদেশি সাবস্ক্রিপশন ড্রেন',
      desc: 'বাংলাদেশের ব্যবসা, বিশ্ববিদ্যালয় এবং সরকারি সংস্থাগুলি সম্মিলিতভাবে বিদেশি AI সাবস্ক্রিপশনে বার্ষিক আনুমানিক $৪০-৮০ মিলিয়ন ব্যয় করে। এই অর্থ বাংলাদেশ ছেড়ে চলে যায়। দেশীয় AI সক্ষমতা তৈরি করা আদর্শবাদ নয় — এটি আমদানি প্রতিস্থাপন।',
    },
  },
  {
    icon: TrendingDown,
    stat: '3–5 years',
    statUnit: 'window remains',
    en: {
      title: 'The Brain Drain → Brain Gain Window',
      desc: 'Between 2025 and 2030, global demand for AI talent will outstrip supply in almost every developed country. This creates an unprecedented 3–5 year window for Bangladesh to reverse its brain drain: by training AI talent domestically and offering competitive opportunities to bring diaspora expertise home. After 2030, this window closes as other nations fill the gap. Bangladesh must act in this window.',
    },
    bn: {
      title: 'ব্রেন ড্রেন → ব্রেন গেইন উইন্ডো',
      desc: '২০২৫ থেকে ২০৩০ সালের মধ্যে, AI প্রতিভার বৈশ্বিক চাহিদা প্রায় প্রতিটি উন্নত দেশে সরবরাহকে ছাড়িয়ে যাবে। এটি বাংলাদেশের জন্য ৩-৫ বছরের একটি অভূতপূর্ব উইন্ডো তৈরি করে। ২০৩০ সালের পরে, এই উইন্ডো বন্ধ হয়ে যায়।',
    },
  },
  {
    icon: AlertTriangle,
    stat: '2000',
    statUnit: 'software wave missed',
    en: {
      title: 'Bangladesh Missed the First Software Wave',
      desc: 'In the late 1990s, India built a $250B software export industry on the same labor cost advantage Bangladesh had. We missed it. Vietnam, the Philippines, and Sri Lanka scaled tech export sectors when Bangladesh was still debating infrastructure. AI is the second wave — and it is far larger. The nations that build AI capacity now will dominate the next three decades of the global knowledge economy.',
    },
    bn: {
      title: 'বাংলাদেশ প্রথম সফটওয়্যার তরঙ্গ মিস করেছে',
      desc: '১৯৯০-এর দশকের শেষের দিকে, ভারত বাংলাদেশের মতো একই শ্রম ব্যয় সুবিধায় $২৫০ বিলিয়নের সফটওয়্যার রপ্তানি শিল্প তৈরি করেছিল। আমরা এটি মিস করেছি। AI হল দ্বিতীয় তরঙ্গ — এবং এটি আরও অনেক বড়।',
    },
  },
  {
    icon: Users,
    stat: '170M',
    statUnit: 'people affected',
    en: {
      title: 'The Cost of Inaction Is Not Zero',
      desc: 'Bangladesh\'s 47.12/100 AI readiness score is not just a number — it translates to: farmers without precision agriculture tools, doctors without diagnostic AI, garment workers whose jobs are at risk without reskilling support, and students graduating into a world that requires AI skills they were never taught. Inaction is itself a policy choice — and it has victims.',
    },
    bn: {
      title: 'নিষ্ক্রিয়তার খরচ শূন্য নয়',
      desc: 'বাংলাদেশের ৪৭.১২/১০০ AI প্রস্তুতি স্কোর শুধু একটি সংখ্যা নয় — এটি অনুবাদ করে: নির্ভুল কৃষি সরঞ্জাম ছাড়া কৃষক, ডায়াগনস্টিক AI ছাড়া ডাক্তার এবং রিস্কিলিং সহায়তা ছাড়া চাকরির ঝুঁকিতে পোশাক শ্রমিক।',
    },
  },
]

export default function WhyNowPage() {
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
          <span className="text-text-primary font-medium">{b('Why Now', 'কেন এখনই')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-bd-red/20 border border-bd-red/40 rounded-full text-bd-red text-xs font-semibold uppercase tracking-wider mb-6">
            {b('Urgency', 'জরুরিতা')}
          </div>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${font}`}>
            {b('Why Bangladesh Must Act Now', 'কেন বাংলাদেশকে এখনই পদক্ষেপ নিতে হবে')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed ${font}`}>
            {b(
              'Every year of delay widens Bangladesh\'s AI gap with India, Vietnam, and Rwanda. The window for catch-up is open — but not forever.',
              'প্রতি বছরের বিলম্ব ভারত, ভিয়েতনাম এবং রুয়ান্ডার সাথে বাংলাদেশের AI ঘাটতি বাড়ায়। ধরে ফেলার উইন্ডো খোলা আছে — কিন্তু চিরকাল নয়।'
            )}
          </p>
        </div>
      </section>

      <div className="bg-bg-light py-2 px-4 text-center">
        <p className={`text-sm text-text-secondary italic ${font}`}>
          {b('Last updated: March 2026 · Source: ', 'সর্বশেষ আপডেট: মার্চ ২০২৬ · উৎস: ')}
          <a href="https://oxfordinsights.com/ai-readiness/ai-readiness-index/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Oxford Insights GGAI 2024</a>
        </p>
      </div>

      {/* Gap Visualization */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 ${font}`}>
            {b('The Widening Gap', 'বিস্তৃত হওয়া ফাঁক')}
          </h2>
          <p className={`text-text-secondary mb-8 text-sm ${font}`}>
            {b('AI Readiness Scores (Oxford Insights, 2024) — Bangladesh vs. peer nations', 'AI প্রস্তুতি স্কোর (Oxford Insights, ২০২৪) — বাংলাদেশ বনাম সমকক্ষ দেশ')}
          </p>
          <div className="space-y-4">
            {countryGapData.map((c) => (
              <div key={c.country} className={`rounded-xl p-4 ${c.isSelf ? 'bg-bd-red/5 border border-bd-red/20' : 'bg-bg-light border border-border-color'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-semibold text-sm ${c.isSelf ? 'text-bd-red' : 'text-text-primary'} ${font}`}>
                    {isBn ? c.countryBn : c.country}
                    {c.isSelf && <span className="ml-2 text-xs font-normal">{b('(We Are Here)', '(আমরা এখানে)')}</span>}
                  </span>
                  <span className={`font-bold text-sm ${c.isSelf ? 'text-bd-red' : 'text-text-primary'}`}>{c.score}/100</span>
                </div>
                <div className="h-3 bg-bg-surface rounded-full overflow-hidden border border-border-color">
                  <div
                    className={`h-full rounded-full transition-all ${c.color}`}
                    style={{ width: `${c.score}%` }}
                  />
                </div>
                {!c.isSelf && (
                  <p className={`text-xs text-text-secondary mt-1.5 ${font}`}>
                    {b(`+${c.gap.toFixed(1)} points ahead of Bangladesh`, `বাংলাদেশের চেয়ে +${c.gap.toFixed(1)} পয়েন্ট এগিয়ে`)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Urgency Points */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-10 ${font}`}>
            {b('Five Reasons the Clock Is Ticking', 'পাঁচটি কারণ কেন সময় ফুরিয়ে যাচ্ছে')}
          </h2>
          <div className="space-y-6">
            {urgencyPoints.map((point, i) => {
              const Icon = point.icon
              const content = isBn ? point.bn : point.en
              return (
                <div key={i} className="bg-bg-surface rounded-xl p-6 shadow-sm border border-border-color">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary-navy flex items-center justify-center mb-1">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div className="text-xs font-bold text-text-primary leading-tight">{point.stat}</div>
                      <div className="text-xs text-text-secondary leading-tight">{point.statUnit}</div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold text-text-primary mb-2 ${font}`}>{content.title}</h3>
                      <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Bangladesh Can Do */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${font}`}>
            {b('What Bangladesh Can Do — Right Now', 'বাংলাদেশ কী করতে পারে — এখনই')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { en: 'Fund a National AI Strategy with a 7-year, Tk 5,000 Cr budget', bn: '৭ বছর, ৫,০০০ কোটি টাকার বাজেট সহ একটি জাতীয় AI কৌশল অর্থায়ন করুন' },
              { en: 'Establish an AI Regulatory Sandbox for low-risk public deployment', bn: 'কম-ঝুঁকির পাবলিক স্থাপনার জন্য একটি AI নিয়ন্ত্রক স্যান্ডবক্স প্রতিষ্ঠা করুন' },
              { en: 'Integrate AI literacy into Class 6–12 national curriculum by 2027', bn: '২০২৭ সালের মধ্যে ষষ্ঠ-দ্বাদশ শ্রেণীর জাতীয় পাঠ্যক্রমে AI সাক্ষরতা সংযুক্ত করুন' },
              { en: 'Build sovereign data infrastructure — no citizen data on foreign servers', bn: 'সার্বভৌম ডেটা অবকাঠামো তৈরি করুন — বিদেশি সার্ভারে কোনো নাগরিক ডেটা নয়' },
              { en: 'Create a Bangla AI Center of Excellence at BUET and 3 public universities', bn: 'BUET এবং ৩টি পাবলিক বিশ্ববিদ্যালয়ে একটি বাংলা AI কেন্দ্র অব উৎকর্ষ তৈরি করুন' },
              { en: 'Launch a competitive AI talent return programme for diaspora engineers', bn: 'প্রবাসী ইঞ্জিনিয়ারদের জন্য একটি প্রতিযোগিতামূলক AI প্রতিভা প্রত্যাবর্তন কার্যক্রম চালু করুন' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-bg-light rounded-xl p-4 border border-border-color">
                <span className="text-bd-green font-bold flex-shrink-0 mt-0.5">✓</span>
                <p className={`text-text-primary text-sm leading-relaxed ${font}`}>{isBn ? item.bn : item.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bd-red py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className={`text-2xl font-bold mb-4 ${font}`}>
            {b('Read the Full Cost of Inaction Analysis', 'সম্পূর্ণ নিষ্ক্রিয়তার খরচ বিশ্লেষণ পড়ুন')}
          </h2>
          <p className={`text-red-100 mb-8 max-w-xl mx-auto text-sm ${font}`}>
            {b(
              'Our research quantifies what Bangladesh stands to lose — in GDP, jobs, and sovereign capability — if the current policy gap is not closed by 2030.',
              'আমাদের গবেষণা পরিমাপ করে বাংলাদেশ কী হারাতে পারে — জিডিপি, চাকরি এবং সার্বভৌম সক্ষমতায় — যদি ২০৩০ সালের মধ্যে বর্তমান নীতির ঘাটতি পূরণ না করা হয়।'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/research/economic-impact" className="bg-bg-surface text-bd-red px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              {b('Economic Impact Research →', 'অর্থনৈতিক প্রভাব গবেষণা →')}
            </Link>
            <Link href="/reality-check" className="border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {b('Reality Check →', 'বাস্তবতা যাচাই →')}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bg-surface py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <ShareButtons title={b('Why Bangladesh Must Act on AI Now', 'কেন বাংলাদেশকে এখনই AI-তে পদক্ষেপ নিতে হবে')} path="/why-now" />
        </div>
      </section>
    </div>
  )
}
