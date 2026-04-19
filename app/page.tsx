'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const placeholderPosts = [
  { title: "Bangladesh's Population Is Our Greatest Asset", slug: 'population-asset-not-problem', category: 'Analysis', date: '2026-03-26', readTime: '7' },
  { title: "AI in Bangla: A Practical Guide", slug: 'ai-bangla-language-guide', category: 'Education', date: '2026-03-27', readTime: '6' },
  { title: "Sovereign AI Infrastructure: Why It Matters", slug: 'sovereign-ai-infrastructure-why-it-matters', category: 'Policy', date: '2026-03-24', readTime: '8' },
]

const placeholderResearch = [
  { title: 'Bangladesh AI Readiness Assessment 2026', slug: 'ai-readiness', category: 'Assessment', date: '2026-03-01', readTime: '20' },
  { title: 'Economic Impact of AI Adoption in Bangladesh', slug: 'economic-impact', category: 'Economics', date: '2026-01-15', readTime: '18' },
  { title: 'Global AI Benchmarks: Where Bangladesh Stands', slug: 'global-benchmarks', category: 'Benchmarking', date: '2025-12-10', readTime: '15' },
]

const comparisonData = [
  { country: 'Singapore', score: 84.25, highlight: false },
  { country: 'UAE', score: 75.66, highlight: false },
  { country: 'South Korea', score: 75.24, highlight: false },
  { country: 'India', score: 62.81, highlight: false },
  { country: 'Rwanda', score: 57.07, highlight: false },
  { country: 'Indonesia', score: 55.96, highlight: false },
  { country: 'Vietnam', score: 61.42, highlight: false },
  { country: 'Bangladesh', score: 47.12, highlight: true },
]

const sortedComparison = [...comparisonData].sort((a, b) => b.score - a.score)

function StatCard({ value, label, suffix }: { value: string; label: string; suffix: string }) {
  return (
    <div className="bg-bg-surface rounded-xl p-5 shadow-sm text-center border border-border-color">
      <div className="text-2xl font-bold text-bd-green">
        {value}<span className="text-base text-text-secondary">{suffix}</span>
      </div>
      <div className="text-xs text-text-secondary mt-1 font-medium leading-snug">{label}</div>
    </div>
  )
}

export default function Home() {
  const { t, language } = useLanguage()
  const h = t.home

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-900/60 text-green-200 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-bd-green rounded-full"></span>
            Bangladesh · 2026
          </div>
          <h1 className={`text-3xl md:text-5xl font-extrabold leading-tight mb-4 ${language === 'bn' ? 'font-bangla' : ''}`}>
            {h.heroTitle}
          </h1>
          <p className={`text-lg md:text-xl text-green-200 mb-3 ${language === 'bn' ? 'font-bangla' : 'tracking-widest uppercase text-sm font-medium'}`}>
            {h.heroSubtitle}
          </p>
          <p className="text-base text-green-100/70 mb-8 max-w-2xl mx-auto">
            {h.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reality-check"
              className="bg-bd-green text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {h.heroCta1} <ArrowRight size={18} />
            </Link>
            <Link
              href="/research"
              className="border border-green-400 text-green-100 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-green-900/30 transition-colors"
            >
              {h.heroCta2}
            </Link>
          </div>
        </div>
      </section>

      {/* 6-Stat Bar */}
      <section className="bg-bg-light py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-xl md:text-2xl font-bold text-center text-text-primary mb-8 ${language === 'bn' ? 'font-bangla' : ''}`}>
            {h.statsTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {h.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Comparison Table */}
      <section className="bg-bg-surface py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-xl md:text-2xl font-bold text-center text-text-primary mb-8 ${language === 'bn' ? 'font-bangla' : ''}`}>
            {h.comparisonTitle}
          </h2>
          <div className="rounded-xl border border-border-color overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="bg-bg-light border-b border-border-color">
                  <th className="text-left px-5 py-3 font-semibold text-text-secondary">Country</th>
                  <th className="text-right px-5 py-3 font-semibold text-text-secondary">AI Readiness Score</th>
                  <th className="px-5 py-3 hidden sm:table-cell"></th>
                </tr>
              </thead>
              <tbody>
                {sortedComparison.map((row, i) => (
                  <tr
                    key={row.country}
                    className={`border-b border-border-color last:border-0 transition-colors ${
                      row.highlight
                        ? 'bg-primary-navy text-white'
                        : i % 2 === 0
                        ? 'bg-bg-surface hover:bg-bg-light'
                        : 'bg-bg-light hover:bg-bg-surface'
                    }`}
                  >
                    <td className={`px-5 py-3.5 font-semibold ${row.highlight ? 'text-white' : 'text-text-primary'}`}>
                      {row.highlight && <span className="inline-block w-2 h-2 rounded-full bg-bd-green mr-2 align-middle"></span>}
                      {row.country}
                    </td>
                    <td className={`px-5 py-3.5 text-right font-bold text-base ${row.highlight ? 'text-green-300' : 'text-bd-green'}`}>
                      {row.score.toFixed(2)}
                      <span className={`text-xs font-normal ml-1 ${row.highlight ? 'text-green-200/60' : 'text-text-secondary'}`}>/100</span>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell w-40">
                      <div className="w-full bg-border-color rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${row.highlight ? 'bg-bd-green' : 'bg-primary-blue'}`}
                          style={{ width: `${(row.score / 100) * 100}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
          <p className={`text-xs text-text-secondary mt-3 text-center ${language === 'bn' ? 'font-bangla' : ''}`}>
            {language === 'bn' ? 'উৎস: ' : 'Source: '}
            <a href="https://oxfordinsights.com/ai-readiness/ai-readiness-index/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Oxford Insights GGAI 2024</a>
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-xl md:text-2xl font-bold text-center text-text-primary mb-10 ${language === 'bn' ? 'font-bangla' : ''}`}>
            {h.missionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {h.missionCards.map((card) => (
              <div key={card.title} className="bg-bg-surface rounded-xl p-6 shadow-sm border border-border-color hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className={`text-lg font-bold text-text-primary mb-2 ${language === 'bn' ? 'font-bangla' : ''}`}>{card.title}</h3>
                <p className={`text-text-secondary text-sm leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="bg-bg-surface py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-xl font-bold text-text-primary ${language === 'bn' ? 'font-bangla' : ''}`}>
              {h.latestResearch}
            </h2>
            <Link href="/research" className="text-bd-green text-sm font-semibold hover:underline flex items-center gap-1">
              {h.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholderResearch.map((item) => (
              <Link key={item.slug} href={`/research/${item.slug}`} className="bg-bg-light rounded-xl p-6 shadow-sm border border-border-color hover:shadow-md transition-shadow block group">
                <span className="text-xs font-semibold text-primary-blue uppercase tracking-wide">{item.category}</span>
                <h3 className="text-base font-bold text-text-primary mt-2 mb-3 group-hover:text-bd-green transition-colors leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <span>{item.date}</span>
                  <span>·</span>
                  <span>{item.readTime} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-xl font-bold text-text-primary ${language === 'bn' ? 'font-bangla' : ''}`}>
              {h.latestBlog}
            </h2>
            <Link href="/blog" className="text-bd-green text-sm font-semibold hover:underline flex items-center gap-1">
              {h.viewAll} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholderPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-bg-surface rounded-xl p-6 border border-border-color hover:shadow-md transition-shadow block group">
                <span className="text-xs font-semibold text-bd-green uppercase tracking-wide">{post.category}</span>
                <h3 className="text-base font-bold text-text-primary mt-2 mb-3 group-hover:text-bd-green transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-primary-navy py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold text-center text-white mb-10 ${language === 'bn' ? 'font-bangla' : ''}`}>
            {h.forWhoTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {h.forWhoCards.map((card) => (
              <Link key={card.href + card.title} href={card.href} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors group">
                <h3 className={`text-lg font-bold text-white mb-2 group-hover:text-green-200 transition-colors ${language === 'bn' ? 'font-bangla' : ''}`}>
                  {card.title}
                </h3>
                <p className={`text-sm text-green-100/70 leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className={`text-xl md:text-2xl font-semibold text-text-primary leading-relaxed italic mb-6 ${language === 'bn' ? 'font-bangla' : ''}`}>
            {h.founderQuote}
          </blockquote>
          <Link href="/about/emon-hossain" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-primary-navy flex items-center justify-center text-white font-bold text-sm">
              EH
            </div>
            <div className="text-left">
              <div className={`font-semibold text-text-primary text-sm ${language === 'bn' ? 'font-bangla' : ''}`}>{h.founderName}</div>
              <div className={`text-text-secondary text-xs ${language === 'bn' ? 'font-bangla' : ''}`}>{h.founderTitle}</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-bd-green py-14 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className={`text-2xl font-bold text-white mb-2 ${language === 'bn' ? 'font-bangla' : ''}`}>
            {h.newsletterTitle}
          </h2>
          <p className={`text-green-100/80 mb-6 ${language === 'bn' ? 'font-bangla' : ''}`}>{h.newsletterSubtitle}</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={h.newsletterPlaceholder}
              className="flex-1 px-4 py-3 rounded-lg text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-white bg-white"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-primary-navy text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-bg-dark transition-colors whitespace-nowrap"
            >
              {h.newsletterCta}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
