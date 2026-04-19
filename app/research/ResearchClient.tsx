'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ArrowRight, Clock, Filter } from 'lucide-react'

type Paper = {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  date: string
  author: string
  excerpt?: string
}

const CATEGORIES = ['All', 'Assessment', 'Policy', 'Economics', 'Technology', 'Education', 'Strategy', 'Governance', 'Global', 'Risk']

const CATEGORY_COLORS: Record<string, string> = {
  Assessment: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-700/40',
  Policy: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/40',
  Economics: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700/40',
  Technology: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700/40',
  Education: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/40',
  Strategy: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700/40',
  Governance: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700/40',
  Global: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700/40',
  Risk: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700/40',
  Economy: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700/40',
}

const CATEGORY_DOT: Record<string, string> = {
  Assessment: 'bg-teal-500',
  Policy: 'bg-blue-600',
  Economics: 'bg-green-600',
  Technology: 'bg-purple-600',
  Education: 'bg-amber-600',
  Strategy: 'bg-indigo-600',
  Governance: 'bg-orange-500',
  Global: 'bg-cyan-600',
  Risk: 'bg-red-600',
  Economy: 'bg-green-600',
}

const BN_CATEGORIES: Record<string, string> = {
  All: 'সব',
  Assessment: 'মূল্যায়ন',
  Policy: 'নীতি',
  Economics: 'অর্থনীতি',
  Technology: 'প্রযুক্তি',
  Education: 'শিক্ষা',
  Strategy: 'কৌশল',
  Governance: 'গভর্ন্যান্স',
  Global: 'বৈশ্বিক',
  Risk: 'ঝুঁকি',
  Economy: 'অর্থনীতি',
}

export default function ResearchClient({ papers }: { papers: Paper[] }) {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => (isBn ? bn : en)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? papers : papers.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-bd-green/20 text-bd-green border border-bd-green/30 px-3 py-1 rounded-full mb-6">
            {b('Research Hub', 'গবেষণা কেন্দ্র')}
          </span>
          <h1 className={`text-4xl md:text-5xl font-extrabold leading-tight mb-5 ${isBn ? 'font-bangla' : ''}`}>
            {b('Bangladesh AI Research', 'বাংলাদেশ এআই গবেষণা')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed ${isBn ? 'font-bangla' : ''}`}>
            {b(
              'Independent, evidence-based research on AI policy, economics, technology, and strategy — built for Bangladesh.',
              'বাংলাদেশের জন্য তৈরি এআই নীতি, অর্থনীতি, প্রযুক্তি এবং কৌশলের উপর স্বাধীন, প্রমাণ-ভিত্তিক গবেষণা।'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-blue-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bd-green inline-block" />
              {b('10 Research Papers', '১০টি গবেষণাপত্র')}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bd-green inline-block" />
              {b('7 Policy Domains', '৭টি নীতি ক্ষেত্র')}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bd-green inline-block" />
              {b('Free to read & cite', 'বিনামূল্যে পড়ুন ও উদ্ধৃত করুন')}
            </div>
          </div>
        </div>
      </section>

      {/* Filter pills */}
      <section className="bg-bg-surface border-b border-border-color sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto">
          <Filter size={14} className="text-text-secondary flex-shrink-0 mr-1" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? 'bg-primary-navy text-white border-primary-navy shadow-sm'
                  : 'bg-bg-light text-text-secondary border-border-color hover:border-primary-navy hover:text-primary-navy'
              }`}
            >
              {isBn ? BN_CATEGORIES[cat] ?? cat : cat}
            </button>
          ))}
          {activeCategory !== 'All' && (
            <span className="flex-shrink-0 ml-2 text-xs text-text-secondary">
              {filtered.length} {b('paper', 'পেপার')}{filtered.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </section>

      {/* Cards */}
      <section className="bg-bg-light py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-text-secondary">
              {b('No papers in this category yet.', 'এই বিভাগে এখনও কোনো পেপার নেই।')}
            </div>
          ) : (
            <div className="grid gap-5">
              {filtered.map((paper) => (
                <Link
                  key={paper.slug}
                  href={`/research/${paper.slug}`}
                  className="group block bg-bg-surface rounded-2xl p-6 shadow-sm border border-border-color hover:shadow-md hover:border-primary-blue/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div className="hidden md:flex flex-col items-center pt-1 gap-2">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${CATEGORY_DOT[paper.category] || 'bg-gray-400'}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[paper.category] || 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700/40 dark:text-slate-300 dark:border-slate-600'}`}>
                          {paper.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-text-secondary">
                          <Clock size={11} />
                          {paper.readTime}
                        </span>
                      </div>

                      <h3 className={`text-lg md:text-xl font-bold text-text-primary leading-snug mb-2 group-hover:text-primary-blue transition-colors ${isBn ? 'font-bangla' : ''}`}>
                        {paper.title}
                      </h3>

                      <p className={`text-text-secondary text-sm leading-relaxed line-clamp-2 mb-3 ${isBn ? 'font-bangla' : ''}`}>
                        {paper.description}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-text-secondary">
                        <span className="font-medium text-text-primary">{paper.author}</span>
                        <span>·</span>
                        <span>{paper.date}</span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex items-center">
                      <span className="inline-flex items-center gap-1.5 text-primary-blue font-semibold text-sm group-hover:gap-2.5 transition-all whitespace-nowrap">
                        {b('Read Research', 'গবেষণা পড়ুন')}
                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-primary-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-2xl font-bold mb-3 ${isBn ? 'font-bangla' : ''}`}>
            {b('Use our research. Cite us. Challenge us.', 'আমাদের গবেষণা ব্যবহার করুন। আমাদের উদ্ধৃত করুন। আমাদের চ্যালেঞ্জ করুন।')}
          </h2>
          <p className={`text-blue-200 mb-7 ${isBn ? 'font-bangla' : ''}`}>
            {b(
              'All research is published under Creative Commons CC BY 4.0. Cite freely with attribution. Send corrections to research@bangladeshai.org.',
              'সমস্ত গবেষণা Creative Commons CC BY 4.0 এর অধীনে প্রকাশিত। বৈধতা সহ বিনামূল্যে উদ্ধৃত করুন।'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/resources" className="bg-bd-green text-white px-6 py-3 rounded-full font-semibold hover:bg-bd-green/90 transition-colors">
              {b('Download PDFs', 'পিডিএফ ডাউনলোড করুন')}
            </Link>
            <Link href="/contact" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors">
              {b('Contact Researcher', 'গবেষককে যোগাযোগ করুন')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
