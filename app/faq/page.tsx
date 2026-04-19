'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

type FaqItem = { q: string; a: string }

const GROUPS: { titleEn: string; titleBn: string; items: { en: FaqItem; bn: FaqItem }[] }[] = [
  {
    titleEn: 'About BangladeshAI.org',
    titleBn: 'BangladeshAI.org সম্পর্কে',
    items: [
      {
        en: {
          q: 'What is BangladeshAI.org?',
          a: 'BangladeshAI.org is Bangladesh\'s independent, non-partisan AI policy research platform. We produce evidence-based research on AI readiness, policy, and the economic impact of AI for Bangladesh.',
        },
        bn: {
          q: 'BangladeshAI.org কী?',
          a: 'BangladeshAI.org বাংলাদেশের স্বাধীন, নিরপেক্ষ এআই নীতি গবেষণা প্ল্যাটফর্ম। আমরা বাংলাদেশের জন্য এআই প্রস্তুতি, নীতি এবং এআই-এর অর্থনৈতিক প্রভাবের উপর প্রমাণ-ভিত্তিক গবেষণা তৈরি করি।',
        },
      },
      {
        en: {
          q: 'Who runs BangladeshAI.org?',
          a: 'Founded by Emon Hossain, an independent AI policy researcher. The platform is not affiliated with any government, political party, commercial company, or international organisation.',
        },
        bn: {
          q: 'BangladeshAI.org কে পরিচালনা করেন?',
          a: 'ইমন হোসেন, একজন স্বাধীন এআই নীতি গবেষক, দ্বারা প্রতিষ্ঠিত। প্ল্যাটফর্মটি কোনো সরকার, রাজনৈতিক দল, বাণিজ্যিক কোম্পানি বা আন্তর্জাতিক সংস্থার সাথে সংযুক্ত নয়।',
        },
      },
      {
        en: {
          q: 'Is this a government website?',
          a: 'No. BangladeshAI.org is entirely independent. We receive no government funding and are affiliated with no political party or ministry. Our independence is our most valuable asset.',
        },
        bn: {
          q: 'এটি কি একটি সরকারি ওয়েবসাইট?',
          a: 'না। BangladeshAI.org সম্পূর্ণ স্বাধীন। আমরা কোনো সরকারি অর্থায়ন পাই না এবং কোনো রাজনৈতিক দল বা মন্ত্রণালয়ের সাথে সংযুক্ত নই। আমাদের স্বাধীনতাই আমাদের সবচেয়ে মূল্যবান সম্পদ।',
        },
      },
      {
        en: {
          q: 'How is the research funded?',
          a: 'BangladeshAI.org is an independent research initiative. Our research is open-access and publicly available. We do not sell data, products, or consultancy services that could compromise our independence.',
        },
        bn: {
          q: 'গবেষণা কীভাবে অর্থায়ন হয়?',
          a: 'BangladeshAI.org একটি স্বাধীন গবেষণা উদ্যোগ। আমাদের গবেষণা উন্মুক্ত-প্রবেশাধিকার এবং সর্বজনীনভাবে উপলব্ধ। আমরা এমন কোনো ডেটা, পণ্য বা পরামর্শমূলক সেবা বিক্রি করি না যা আমাদের স্বাধীনতাকে ক্ষতিগ্রস্ত করতে পারে।',
        },
      },
      {
        en: {
          q: 'Can I use AI research for free?',
          a: 'Yes. All research on BangladeshAI.org is free and open-access. You may cite it with attribution: "BangladeshAI.org, [Year]."',
        },
        bn: {
          q: 'আমি কি বিনামূল্যে এআই গবেষণা ব্যবহার করতে পারি?',
          a: 'হ্যাঁ। BangladeshAI.org-এর সমস্ত গবেষণা বিনামূল্যে এবং উন্মুক্ত-প্রবেশাধিকার। আপনি এটি উদ্ধৃত করতে পারেন: "BangladeshAI.org, [বছর]।"',
        },
      },
      {
        en: {
          q: 'How can I contact BangladeshAI.org?',
          a: 'Email the founder directly at emon@emonhossain.pro. For media inquiries, use the contact form at bangladeshai.org/contact.',
        },
        bn: {
          q: 'আমি কীভাবে BangladeshAI.org-এর সাথে যোগাযোগ করতে পারি?',
          a: 'সরাসরি প্রতিষ্ঠাতাকে emon@emonhossain.pro-এ ইমেইল করুন। মিডিয়া অনুসন্ধানের জন্য, bangladeshai.org/contact-এ যোগাযোগ ফর্ম ব্যবহার করুন।',
        },
      },
      {
        en: {
          q: 'How do I stay updated?',
          a: 'Subscribe to the Bangladesh AI Briefing newsletter at bangladeshai.org/newsletter. We publish AI updates, research summaries, and policy news — in both English and Bangla.',
        },
        bn: {
          q: 'আমি কীভাবে আপডেট থাকব?',
          a: 'bangladeshai.org/newsletter-এ বাংলাদেশ এআই ব্রিফিং নিউজলেটার সাবস্ক্রাইব করুন। আমরা এআই আপডেট, গবেষণা সারসংক্ষেপ এবং নীতি সংবাদ প্রকাশ করি — ইংরেজি এবং বাংলা উভয়েই।',
        },
      },
    ],
  },
  {
    titleEn: 'Bangladesh & AI',
    titleBn: 'বাংলাদেশ ও এআই',
    items: [
      {
        en: {
          q: "What is Bangladesh's AI readiness score?",
          a: 'Bangladesh scored 47.12/100 on the Oxford Insights Government AI Readiness Index 2024, ranking 80th of 188 countries. The three pillars: Government Readiness 58.52, Technology Sector 26.26 (the weakest), and Data & Infrastructure 56.59.',
        },
        bn: {
          q: 'বাংলাদেশের এআই প্রস্তুতির স্কোর কত?',
          a: 'বাংলাদেশ অক্সফোর্ড ইনসাইটস গভর্নমেন্ট এআই রেডিনেস ইনডেক্স ২০২৪-এ ৪৭.১২/১০০ স্কোর করেছে, ১৮৮টি দেশের মধ্যে ৮০তম স্থানে রয়েছে। তিনটি স্তম্ভ: সরকারি প্রস্তুতি ৫৮.৫২, প্রযুক্তি খাত ২৬.২৬ (সবচেয়ে দুর্বল), এবং ডেটা ও অবকাঠামো ৫৬.৫৯।',
        },
      },
      {
        en: {
          q: 'Can AI work in Bangla?',
          a: 'Yes — fully. ChatGPT, Gemini, and Claude all handle Bangla fluently. You do not need to know English to use AI. Write your question in Bangla and receive a Bangla answer.',
        },
        bn: {
          q: 'এআই কি বাংলায় কাজ করতে পারে?',
          a: 'হ্যাঁ — সম্পূর্ণভাবে। ChatGPT, Gemini এবং Claude সবই বাংলা সাবলীলভাবে পরিচালনা করে। এআই ব্যবহার করতে আপনাকে ইংরেজি জানতে হবে না। বাংলায় আপনার প্রশ্ন লিখুন এবং বাংলায় উত্তর পান।',
        },
      },
      {
        en: {
          q: "What is the biggest risk for Bangladesh's AI future?",
          a: "The Technology Sector score of 26.26/100 is the single most critical risk. Bangladesh's government and data infrastructure scores are moderate, but without a private tech sector that can build and deploy AI, those scores cannot deliver outcomes.",
        },
        bn: {
          q: 'বাংলাদেশের এআই ভবিষ্যতের জন্য সবচেয়ে বড় ঝুঁকি কী?',
          a: 'প্রযুক্তি খাতের স্কোর ২৬.২৬/১০০ একটি সবচেয়ে গুরুত্বপূর্ণ ঝুঁকি। বাংলাদেশের সরকার এবং ডেটা অবকাঠামোর স্কোর মাঝারি, কিন্তু এআই নির্মাণ ও স্থাপন করতে পারে এমন একটি বেসরকারি প্রযুক্তি খাত ছাড়া, সেই স্কোরগুলি ফলাফল দিতে পারবে না।',
        },
      },
      {
        en: {
          q: 'What is sovereign AI infrastructure?',
          a: "Sovereign AI means Bangladesh owns its AI compute, data, and models — rather than depending entirely on foreign cloud services. This reduces the estimated $40–80M annual subscription outflow and ensures Bangladeshi citizen data stays in Bangladesh.",
        },
        bn: {
          q: 'সার্বভৌম এআই অবকাঠামো কী?',
          a: 'সার্বভৌম এআই মানে বাংলাদেশ তার এআই কম্পিউট, ডেটা এবং মডেলের মালিক — বিদেশী ক্লাউড সেবার উপর সম্পূর্ণ নির্ভর না করে। এটি আনুমানিক $৪০–৮০ মিলিয়ন বার্ষিক সাবস্ক্রিপশন বহিঃপ্রবাহ হ্রাস করে এবং বাংলাদেশি নাগরিকদের ডেটা বাংলাদেশে থাকে তা নিশ্চিত করে।',
        },
      },
    ],
  },
  {
    titleEn: 'AI Basics — নাগরিকদের জন্য',
    titleBn: 'এআই বেসিক — নাগরিকদের জন্য',
    items: [
      {
        en: {
          q: 'What is AI? (সহজ ভাষায়)',
          a: 'AI (Artificial Intelligence) is computer technology that can understand language, recognise images, make decisions, and learn from data — like a very fast, very knowledgeable assistant. ChatGPT, Gemini, and Claude are AI tools you can use today, in Bangla, for free.',
        },
        bn: {
          q: 'এআই কী? (সহজ ভাষায়)',
          a: 'এআই (কৃত্রিম বুদ্ধিমত্তা) হল কম্পিউটার প্রযুক্তি যা ভাষা বুঝতে, ছবি চিনতে, সিদ্ধান্ত নিতে এবং ডেটা থেকে শিখতে পারে — একটি অত্যন্ত দ্রুত, অত্যন্ত জ্ঞানসম্পন্ন সহকারীর মতো। ChatGPT, Gemini এবং Claude এমন এআই সরঞ্জাম যা আপনি আজ, বাংলায়, বিনামূল্যে ব্যবহার করতে পারেন।',
        },
      },
      {
        en: {
          q: 'How do I start using AI today?',
          a: 'Three simple steps: (1) Go to chat.openai.com or gemini.google.com — both are free. (2) Type your question in Bangla — no English needed. (3) Read the answer and verify important facts from other sources. That\'s it. No technical knowledge required.',
        },
        bn: {
          q: 'আজই আমি কীভাবে এআই ব্যবহার শুরু করতে পারি?',
          a: 'তিনটি সহজ ধাপ: (১) chat.openai.com বা gemini.google.com-এ যান — দুটোই বিনামূল্যে। (২) বাংলায় আপনার প্রশ্ন লিখুন — ইংরেজি লাগবে না। (৩) উত্তর পড়ুন এবং গুরুত্বপূর্ণ তথ্য অন্যান্য সূত্র থেকে যাচাই করুন। ব্যস। কোনো প্রযুক্তিগত জ্ঞান প্রয়োজন নেই।',
        },
      },
    ],
  },
]

function AccordionItem({ faq, index, defaultOpen = false }: { faq: { en: FaqItem; bn: FaqItem }; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const content = isBn ? faq.bn : faq.en
  const font = isBn ? 'font-bangla' : ''

  return (
    <div className="bg-bg-surface rounded-xl border border-border-color shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between gap-4 w-full px-6 py-5 text-left hover:bg-bg-light transition-colors ${font}`}
        aria-expanded={open}
      >
        <span className="font-semibold text-text-primary text-sm leading-relaxed pr-4">
          <span className="text-primary-blue font-bold mr-2">{String(index + 1).padStart(2, '0')}.</span>
          {content.q}
        </span>
        <ChevronDown
          size={16}
          className={`text-text-secondary flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className={`px-6 pb-6 text-text-secondary text-sm leading-relaxed border-t border-border-color pt-4 ${font}`}>
          {content.a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => (isBn ? bn : en)
  const font = isBn ? 'font-bangla' : ''

  let globalIndex = 0

  return (
    <div className="min-h-screen">
      <div className="bg-bg-light border-b border-border-color px-4 py-2">
        <div className="max-w-4xl mx-auto flex items-center gap-1 text-xs text-text-secondary">
          <a href="/" className="hover:text-primary-blue transition-colors">{b('Home', 'হোম')}</a>
          <span className="mx-1">/</span>
          <span className="text-text-primary font-medium">{b('FAQ', 'প্রশ্নোত্তর')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl font-extrabold mb-4 ${font}`}>
            {b('Frequently Asked Questions', 'সাধারণভাবে জিজ্ঞাসিত প্রশ্ন')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto ${font}`}>
            {b(
              '12 common questions about AI and BangladeshAI.org — answered plainly in English and Bangla.',
              'এআই এবং BangladeshAI.org সম্পর্কে ১২টি সাধারণ প্রশ্ন — ইংরেজি এবং বাংলায় সরলভাবে উত্তর দেওয়া হয়েছে।'
            )}
          </p>
        </div>
      </section>

      {/* Groups */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {GROUPS.map((group) => (
            <div key={group.titleEn}>
              <h2 className={`text-xs font-bold uppercase tracking-widest text-text-secondary mb-5 ${font}`}>
                {isBn ? group.titleBn : group.titleEn}
              </h2>
              <div className="space-y-3">
                {group.items.map((faq) => {
                  const idx = globalIndex++
                  return <AccordionItem key={idx} faq={faq} index={idx} defaultOpen={idx === 0} />
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-navy py-12 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className={`text-xl font-bold mb-4 ${font}`}>{b('Still Have Questions?', 'এখনও প্রশ্ন আছে?')}</h2>
          <p className={`text-blue-200 mb-6 text-sm ${font}`}>
            {b(
              'Contact the founder directly or browse our research for deeper answers.',
              'সরাসরি প্রতিষ্ঠাতার সাথে যোগাযোগ করুন বা গভীর উত্তরের জন্য আমাদের গবেষণা ব্রাউজ করুন।'
            )}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="bg-bd-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-bd-green/90 transition-colors">
              {b('Contact Us', 'যোগাযোগ করুন')}
            </Link>
            <Link href="/research" className="bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors">
              {b('Read Research', 'গবেষণা পড়ুন')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
