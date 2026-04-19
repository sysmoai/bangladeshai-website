'use client'

import Link from 'next/link'
import { ChevronRight, ArrowRight, CheckCircle, Smartphone } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import ShareButtons from '@/components/ShareButtons'

const lifeStages = [
  {
    role: 'শিক্ষার্থী',
    roleEn: 'Student',
    uses: 'রচনা লেখা, গণিত সমাধান, ইংরেজি শেখা, MCQ প্র্যাকটিস',
    tools: 'ChatGPT, Gemini',
  },
  {
    role: 'চাকরিপ্রার্থী',
    roleEn: 'Job Seeker',
    uses: 'CV তৈরি, কভার লেটার, ইন্টারভিউ প্র্যাকটিস, দক্ষতা শেখা',
    tools: 'ChatGPT, Claude',
  },
  {
    role: 'শিক্ষক',
    roleEn: 'Teacher',
    uses: 'পাঠ পরিকল্পনা, প্রশ্নপত্র তৈরি, ছাত্রদের ব্যাখ্যা লেখা',
    tools: 'Gemini, ChatGPT',
  },
  {
    role: 'কৃষক',
    roleEn: 'Farmer',
    uses: 'ফসলের রোগ শনাক্ত, আবহাওয়া পূর্বাভাস, বাজার দর জানা',
    tools: 'Gemini (ছবি দিয়ে)',
  },
  {
    role: 'সরকারি কর্মকর্তা',
    roleEn: 'Government Officer',
    uses: 'রিপোর্ট লেখা, নথি সারসংক্ষেপ, অনুবাদ, ডেটা বিশ্লেষণ',
    tools: 'ChatGPT, Claude',
  },
  {
    role: 'ডাক্তার',
    roleEn: 'Doctor',
    uses: 'মেডিকেল লিটারেচার খোঁজা, রোগীকে ব্যাখ্যা লেখা, গবেষণা সারসংক্ষেপ',
    tools: 'Claude, ChatGPT',
  },
  {
    role: 'ছোট ব্যবসায়ী',
    roleEn: 'Small Business Owner',
    uses: 'সোশ্যাল মিডিয়া পোস্ট, পণ্যের বিবরণ, গ্রাহকসেবা স্ক্রিপ্ট',
    tools: 'ChatGPT, Gemini',
  },
  {
    role: 'অভিভাবক',
    roleEn: 'Parent',
    uses: 'সন্তানের পড়াশোনায় সাহায্য, স্বাস্থ্য তথ্য, স্কুলে যোগাযোগের চিঠি',
    tools: 'Gemini, ChatGPT',
  },
  {
    role: 'সাংবাদিক',
    roleEn: 'Journalist',
    uses: 'তথ্য যাচাই, নিবন্ধ খসড়া, ডেটা বিশ্লেষণ, অনুসন্ধান',
    tools: 'Perplexity, Claude',
  },
  {
    role: 'বয়স্ক',
    roleEn: 'Elderly',
    uses: 'স্বাস্থ্য তথ্য জানা, ওষুধের নাম মনে রাখা, পরিবারের সাথে যোগাযোগ সহজ করা',
    tools: 'Gemini (সহজ ইন্টারফেস বিনামূল্যে)',
  },
]

const fears = [
  {
    fear: 'AI কি আমার চাকরি নিয়ে নেবে?',
    fearEn: 'Will AI take my job?',
    answer: 'সত্যিটা হলো: AI পুরোনো কাজের ধরন পরিবর্তন করবে, কিন্তু নতুন কাজও তৈরি করবে। যারা AI ব্যবহার করতে পারবে, তারা যারা পারবে না তাদের চেয়ে এগিয়ে থাকবে। এখনই শেখা শুরু করুন।',
  },
  {
    fear: 'AI কি বাংলা বোঝে?',
    fearEn: 'Does AI understand Bangla?',
    answer: 'হ্যাঁ! ChatGPT, Gemini, Claude — সবই এখন বাংলায় কথা বলে এবং বোঝে। আপনাকে ইংরেজি জানতে হবে না। সরাসরি বাংলায় প্রশ্ন করুন।',
  },
  {
    fear: 'AI কি সবসময় সত্য বলে?',
    fearEn: 'Does AI always tell the truth?',
    answer: 'না। AI মাঝে মাঝে ভুল তথ্য দেয় — বিশেষ করে সাম্প্রতিক ঘটনা বা স্থানীয় বিষয়ে। গুরুত্বপূর্ণ বিষয়ে সবসময় অন্য উৎস থেকে যাচাই করুন।',
  },
  {
    fear: 'AI ব্যবহার করা কি নিরাপদ?',
    fearEn: 'Is it safe to use AI?',
    answer: 'সাধারণ ব্যবহারের জন্য হ্যাঁ। কিন্তু ব্যক্তিগত তথ্য (NID নম্বর, ব্যাংক তথ্য, পাসওয়ার্ড) কখনো AI-তে শেয়ার করবেন না। যেমন অপরিচিত মানুষের সাথে তথ্য শেয়ার করেন না।',
  },
  {
    fear: 'AI শেখা কি অনেক কঠিন?',
    fearEn: 'Is learning AI very difficult?',
    answer: 'না! ChatGPT বা Gemini ব্যবহার করা WhatsApp ব্যবহার করার মতোই সহজ। ফোনে অ্যাপ বা ব্রাউজারে খুলুন, বাংলায় প্রশ্ন করুন — শুরু এখানেই।',
  },
]

const steps = [
  {
    n: '১',
    title: 'একটি টুল বেছে নিন',
    desc: 'ChatGPT (chat.openai.com) — সবচেয়ে জনপ্রিয়। Gemini (gemini.google.com) — গুগলের AI, বিনামূল্যে। Claude (claude.ai) — দীর্ঘ লেখার জন্য সেরা।',
    tip: 'প্রথমে Gemini দিয়ে শুরু করুন — Gmail অ্যাকাউন্ট থাকলেই ব্যবহার করতে পারবেন।',
  },
  {
    n: '২',
    title: 'বাংলায় প্রশ্ন করুন',
    desc: 'সরাসরি বাংলায় লিখুন। যেমন: "আমাকে একটি চাকরির আবেদন পত্র লিখে দাও" বা "ডায়াবেটিস সম্পর্কে সহজ ভাষায় বোঝাও"।',
    tip: 'যত বেশি বিস্তারিত দেবেন, উত্তর তত ভালো পাবেন।',
  },
  {
    n: '৩',
    title: 'ব্যবহার করুন এবং যাচাই করুন',
    desc: 'AI-এর উত্তর পড়ুন, কাজে লাগান — কিন্তু গুরুত্বপূর্ণ বিষয়ে সবসময় অন্য উৎস থেকে নিশ্চিত করুন।',
    tip: 'প্রথম সপ্তাহে প্রতিদিন একটি কাজে AI ব্যবহার করুন।',
  },
]

const rights = [
  {
    title: 'জানার অধিকার',
    titleEn: 'Right to Know',
    desc: 'আপনি জানতে পারবেন কোনো সিদ্ধান্ত (ঋণ, চাকরি, সুবিধা) AI দ্বারা নেওয়া হয়েছে কিনা।',
  },
  {
    title: 'ব্যাখ্যার অধিকার',
    titleEn: 'Right to Explanation',
    desc: 'AI কোনো সিদ্ধান্ত নিলে, আপনি ব্যাখ্যা চাইতে পারবেন — বিশেষত সরকারি সেবায়।',
  },
  {
    title: 'আপিলের অধিকার',
    titleEn: 'Right to Appeal',
    desc: 'AI-এর ভুল সিদ্ধান্তের বিরুদ্ধে মানুষের কাছে আবেদন করার অধিকার থাকতে হবে।',
  },
  {
    title: 'ডেটা গোপনীয়তার অধিকার',
    titleEn: 'Right to Privacy',
    desc: 'আপনার ব্যক্তিগত তথ্য AI সিস্টেমে কীভাবে ব্যবহৃত হচ্ছে তা জানার অধিকার আপনার আছে।',
  },
]

export default function ForCitizensClient() {
  const { language } = useLanguage()
  const isBn = language === 'bn'

  return (
    <div className="min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-bg-surface border-b border-border-color px-4 py-2">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-text-secondary">
          <Link href="/" className="hover:text-bd-green transition-colors font-bangla">
            হোম
          </Link>
          <ChevronRight size={12} />
          <span className="text-text-primary font-medium font-bangla">নাগরিকদের জন্য AI</span>
        </div>
      </div>

      {/* Hero — Bangla first */}
      <section className="bg-primary-navy text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-green-200 text-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <Smartphone size={13} />
            <span className="font-bangla">বাংলায় AI — সহজ ভাষায়</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-bangla">
            AI কী —<br />
            <span className="text-green-300">সহজ ভাষায়</span>
          </h1>
          <p className="text-green-100/70 max-w-2xl mx-auto mb-8 font-bangla text-lg">
            কৃত্রিম বুদ্ধিমত্তা (Artificial Intelligence বা AI) এমন একটি কম্পিউটার প্রযুক্তি যা মানুষের মতো চিন্তা করতে, শিখতে এবং সিদ্ধান্ত নিতে পারে। এটি ইতোমধ্যে আপনার জীবনে আছে — আপনি জানুন বা না জানুন।
          </p>
          <Link
            href="#start"
            className="inline-flex items-center gap-2 bg-bd-green text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity font-bangla"
          >
            আজই শুরু করুন <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* AI Speaks Bangla */}
      <section className="bg-bd-green py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🇧🇩</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-bangla">
            AI এখন বাংলায় কথা বলে
          </h2>
          <p className="text-green-100/80 max-w-2xl mx-auto font-bangla text-lg">
            ChatGPT, Gemini, Claude — এই সব AI টুল এখন বাংলায় কথা বোঝে এবং বাংলায় উত্তর দেয়। আপনাকে ইংরেজি জানতে হবে না। ইন্টারনেট কানেকশন থাকলেই যথেষ্ট।
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['ChatGPT', 'Gemini', 'Claude', 'Perplexity'].map((tool) => (
              <span key={tool} className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold border border-white/30">
                {tool} ✓ বাংলা
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AI by Life Stage Table */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2 font-bangla">
            আপনার জীবনে AI কীভাবে কাজ করে
          </h2>
          <p className="text-text-secondary text-sm mb-8 font-bangla">
            আপনি যেই হোন না কেন — AI আপনার কাজ সহজ করতে পারে।
          </p>
          <div className="rounded-xl border border-border-color overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-primary-navy text-white">
                    <th className="text-left px-5 py-3 font-semibold font-bangla">আপনি কে</th>
                    <th className="text-left px-5 py-3 font-semibold font-bangla">AI দিয়ে কী করতে পারেন</th>
                    <th className="text-left px-5 py-3 font-semibold">সেরা টুল</th>
                  </tr>
                </thead>
                <tbody>
                  {lifeStages.map((row, i) => (
                    <tr
                      key={row.role}
                      className={`border-b border-border-color last:border-0 ${i % 2 === 0 ? 'bg-bg-surface' : 'bg-bg-light'}`}
                    >
                      <td className="px-5 py-4 font-bold text-text-primary font-bangla whitespace-nowrap">
                        {row.role}
                        <span className="block text-xs text-text-secondary font-normal">{row.roleEn}</span>
                      </td>
                      <td className="px-5 py-4 text-text-secondary font-bangla leading-relaxed">{row.uses}</td>
                      <td className="px-5 py-4 text-bd-green font-semibold text-xs whitespace-nowrap">{row.tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Time Multiplier */}
      <section className="bg-bg-surface py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2 font-bangla">
            ১,০০০ দিনের কাজ ৫ মিনিটে
          </h2>
          <p className="text-text-secondary text-sm mb-8 font-bangla">
            AI আপনার সময়ের গুণিতক। বাস্তব উদাহরণ দেখুন:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                before: 'চাকরির আবেদন পত্র লিখতে ৩ ঘণ্টা',
                after: 'AI দিয়ে ৫ মিনিটে, তারপর আপনি সম্পাদনা করুন',
                icon: '📝',
              },
              {
                before: 'ইংরেজি ডকুমেন্ট বুঝতে অভিধান নিয়ে ঘণ্টার পর ঘণ্টা',
                after: 'AI-কে বলুন "এটা বাংলায় বোঝাও" — ৩০ সেকেন্ডে',
                icon: '📖',
              },
              {
                before: 'ফসলের রোগ শনাক্ত করতে কৃষি অফিসে যাওয়া',
                after: 'Gemini-তে ছবি তুলে পাঠান — সঙ্গে সঙ্গে উত্তর',
                icon: '🌾',
              },
              {
                before: 'রিপোর্ট লিখতে পুরো বিকেল',
                after: 'AI প্রথম খসড়া দেবে — আপনি শুধু সংশোধন করুন',
                icon: '📊',
              },
            ].map((ex) => (
              <div key={ex.icon} className="bg-bg-light rounded-xl p-5 border border-border-color">
                <div className="text-3xl mb-3">{ex.icon}</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <span className="text-bd-red text-xs font-bold mt-0.5 flex-shrink-0">আগে:</span>
                    <span className="text-text-secondary text-sm font-bangla">{ex.before}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-bd-green text-xs font-bold mt-0.5 flex-shrink-0">এখন:</span>
                    <span className="text-text-primary text-sm font-bold font-bangla">{ex.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2 font-bangla">
            AI যুগে আপনার অধিকার
          </h2>
          <p className="text-text-secondary text-sm mb-8 font-bangla">
            সরকার, ব্যাংক বা নিয়োগকর্তা AI ব্যবহার করলে — আপনার এই অধিকারগুলো আছে।
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {rights.map((r) => (
              <div key={r.title} className="bg-bg-surface rounded-xl p-5 border border-border-color flex gap-4">
                <CheckCircle className="text-bd-green flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-bold text-text-primary mb-1 font-bangla">{r.title}</h3>
                  <p className="text-xs text-text-secondary font-medium mb-1">{r.titleEn}</p>
                  <p className="text-sm text-text-secondary leading-relaxed font-bangla">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200 font-bangla leading-relaxed">
              ⚠️ <strong>সতর্কতা:</strong> বাংলাদেশে এখনো কোনো আনুষ্ঠানিক AI অধিকার আইন নেই। BangladeshAI.org এই অধিকারগুলো প্রতিষ্ঠার জন্য কাজ করছে।
            </p>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section id="start" data-section="3-steps" className="bg-bg-surface py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2 font-bangla">
            ৩ ধাপে শুরু করুন
          </h2>
          <p className="text-text-secondary text-sm mb-8 font-bangla">
            আজই শুরু করুন। কোনো টেকনিক্যাল জ্ঞান দরকার নেই।
          </p>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-bg-light rounded-xl p-5 border border-border-color flex gap-4">
                <div className="w-10 h-10 rounded-full bg-bd-green text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 font-bangla">
                  {s.n}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-text-primary mb-1 font-bangla">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-2 font-bangla">{s.desc}</p>
                  <div className="bg-bg-surface rounded-lg px-3 py-2 border border-border-color">
                    <span className="text-xs font-semibold text-bd-green font-bangla">💡 টিপস: </span>
                    <span className="text-xs text-text-secondary font-bangla">{s.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Fears */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-2 font-bangla">
            ৫টি সাধারণ ভয় — সৎ উত্তর সহ
          </h2>
          <p className="text-text-secondary text-sm mb-8 font-bangla">
            আমরা AI নিয়ে অতিরিক্ত ভয় বা অতিরিক্ত উৎসাহ — কোনোটাই নয়। শুধু সত্য।
          </p>
          <div className="space-y-4">
            {fears.map((f, i) => (
              <details key={f.fear} className="bg-bg-surface rounded-xl border border-border-color group">
                <summary className="px-5 py-4 cursor-pointer font-bold text-text-primary font-bangla flex items-center justify-between list-none">
                  <span className="flex items-center gap-3">
                    <span className="text-bd-green text-sm font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
                    {f.fear}
                  </span>
                  <ChevronRight size={16} className="text-text-secondary group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 pt-1">
                  <p className="text-sm text-text-secondary leading-relaxed font-bangla pl-7">{f.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA — Bangla */}
      <section className="bg-bd-green py-14 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-2xl font-bold text-white mb-2 font-bangla">
            AI আপডেট পান — বাংলায়
          </h2>
          <p className="text-green-100/80 mb-6 font-bangla">
            প্রতি সপ্তাহে AI-এর গুরুত্বপূর্ণ খবর, টুলস এবং গাইড — সরাসরি আপনার ইমেইলে। বিনামূল্যে।
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="আপনার ইমেইল ঠিকানা"
              className="flex-1 px-4 py-3 rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-white bg-white font-bangla"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-primary-navy text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap font-bangla"
            >
              সাবস্ক্রাইব করুন
            </button>
          </form>
          <p className="text-green-100/50 text-xs mt-3 font-bangla">
            স্প্যাম নেই। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
          </p>
        </div>
      </section>

      {/* Footer link */}
      <section className="bg-bg-surface py-10 px-4 border-t border-border-color">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-text-primary font-semibold font-bangla mb-1">আরও জানতে চান?</p>
            <p className="text-text-secondary text-sm font-bangla">গভীর বিশ্লেষণ এবং নীতি গবেষণার জন্য আমাদের রিসার্চ হাব দেখুন।</p>
          </div>
          <Link
            href="/research"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-bd-green text-bd-green px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-bd-green hover:text-white transition-colors font-bangla"
          >
            গবেষণা দেখুন <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-bg-light py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <ShareButtons title="AI কী — সহজ ভাষায়" path="/for-citizens" />
        </div>
      </section>
    </div>
  )
}
