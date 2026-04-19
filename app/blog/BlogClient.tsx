'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { Search, Filter } from 'lucide-react'

type Post = {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  description: string
  author?: string
  excerpt?: string
}

const CATEGORIES = ['All', 'Policy', 'Opinion', 'AI Explained', 'Economy', 'Global', 'Bangla AI']

const BN_CATEGORIES: Record<string, string> = {
  All: 'সব',
  Policy: 'নীতি',
  Opinion: 'মতামত',
  'AI Explained': 'এআই ব্যাখ্যা',
  Economy: 'অর্থনীতি',
  Global: 'বৈশ্বিক',
  'Bangla AI': 'বাংলা এআই',
}

const CATEGORY_COLORS: Record<string, string> = {
  policy: 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30',
  opinion: 'text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30',
  'ai-explained': 'text-teal-700 bg-teal-50 dark:text-teal-300 dark:bg-teal-900/30',
  economy: 'text-purple-700 bg-purple-50 dark:text-purple-300 dark:bg-purple-900/30',
  global: 'text-cyan-700 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-900/30',
  'bangla-ai': 'text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30',
  'bangla ai': 'text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30',
  Education: 'text-teal-700 bg-teal-50 dark:text-teal-300 dark:bg-teal-900/30',
  Analysis: 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30',
  Economics: 'text-purple-700 bg-purple-50 dark:text-purple-300 dark:bg-purple-900/30',
  Policy: 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30',
  Technology: 'text-cyan-700 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-900/30',
  Employment: 'text-pink-700 bg-pink-50 dark:text-pink-300 dark:bg-pink-900/30',
  Vision: 'text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30',
  Opinion: 'text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30',
  'AI Explained': 'text-teal-700 bg-teal-50 dark:text-teal-300 dark:bg-teal-900/30',
  Economy: 'text-purple-700 bg-purple-50 dark:text-purple-300 dark:bg-purple-900/30',
  Global: 'text-cyan-700 bg-cyan-50 dark:text-cyan-300 dark:bg-cyan-900/30',
  'Bangla AI': 'text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30',
}

function normalizeCategory(cat: string): string {
  const lower = cat.toLowerCase()
  if (lower === 'policy') return 'Policy'
  if (lower === 'opinion') return 'Opinion'
  if (lower === 'ai-explained' || lower === 'ai explained') return 'AI Explained'
  if (lower === 'economy' || lower === 'economics') return 'Economy'
  if (lower === 'global') return 'Global'
  if (lower === 'bangla-ai' || lower === 'bangla ai') return 'Bangla AI'
  return cat
}

export default function BlogClient({ posts }: { posts: Post[] }) {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => (isBn ? bn : en)

  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let result = posts
    if (activeCategory !== 'All') {
      result = result.filter((p) => normalizeCategory(p.category) === activeCategory)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.description || p.excerpt || '').toLowerCase().includes(q)
      )
    }
    return result
  }, [posts, activeCategory, search])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary-navy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-bd-green/20 text-bd-green border border-bd-green/30 px-3 py-1 rounded-full mb-6">
            {b('Blog & Insights', 'ব্লগ ও বিশ্লেষণ')}
          </span>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${isBn ? 'font-bangla' : ''}`}>
            {b('Bangladesh AI Insights', 'বাংলাদেশ এআই বিশ্লেষণ')}
          </h1>
          <p className={`text-xl text-blue-200 ${isBn ? 'font-bangla' : ''}`}>
            {b(
              'Plain-language analysis of AI policy, economics, and global lessons — for Bangladesh.',
              'বাংলাদেশের জন্য এআই নীতি, অর্থনীতি এবং বৈশ্বিক পাঠের সহজ বিশ্লেষণ।'
            )}
          </p>
        </div>
      </section>

      {/* Search + filter bar */}
      <section className="bg-bg-surface border-b border-border-color sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-shrink-0 sm:w-56">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={b('Search posts…', 'পোস্ট খুঁজুন…')}
              className={`w-full pl-8 pr-3 py-1.5 rounded-full text-sm border border-border-color focus:outline-none focus:ring-2 focus:ring-primary-blue bg-bg-light ${isBn ? 'font-bangla' : ''}`}
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter size={14} className="text-text-secondary flex-shrink-0" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary-navy text-white border-primary-navy shadow-sm'
                    : 'bg-bg-light text-text-secondary border-border-color hover:border-primary-navy hover:text-primary-navy'
                }`}
              >
                {isBn ? BN_CATEGORIES[cat] ?? cat : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-bg-light py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-text-secondary">
              <p className={`text-lg mb-2 font-medium ${isBn ? 'font-bangla' : ''}`}>
                {b('No posts found.', 'কোনো পোস্ট পাওয়া যায়নি।')}
              </p>
              <button
                onClick={() => { setActiveCategory('All'); setSearch('') }}
                className="text-primary-blue text-sm hover:underline"
              >
                {b('Clear filters', 'ফিল্টার সাফ করুন')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => {
                const colorClass = CATEGORY_COLORS[post.category] || CATEGORY_COLORS[post.category?.toLowerCase()] || 'text-slate-700 bg-slate-100 dark:text-slate-300 dark:bg-slate-700/40'
                const desc = post.description || post.excerpt || ''
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-bg-surface rounded-xl overflow-hidden shadow-sm border border-border-color hover:shadow-md hover:border-primary-blue/30 transition-all group block flex flex-col"
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start ${colorClass}`}>
                        {post.category}
                      </span>
                      <h2 className="text-base font-bold text-text-primary mt-3 mb-2 group-hover:text-primary-blue transition-colors leading-snug">
                        {post.title}
                      </h2>
                      {desc && (
                        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-3 flex-1">{desc}</p>
                      )}
                      <div className="flex items-center justify-between text-xs text-text-secondary mt-auto pt-3 border-t border-border-color">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
