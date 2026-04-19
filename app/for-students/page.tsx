'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

const levelColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  'Intermediate': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Any Level': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'Advanced': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'শুরু': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  'মধ্যবর্তী': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'যেকোনো স্তর': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'উন্নত': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
}

export default function ForStudentsPage() {
  const { t, language } = useLanguage()
  const fs = t.forStudents

  return (
    <div className="min-h-screen">
      <section className="bg-primary-navy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${language === 'bn' ? 'font-bangla' : ''}`}>{fs.title}</h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto ${language === 'bn' ? 'font-bangla' : ''}`}>{fs.subtitle}</p>
        </div>
      </section>

      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${language === 'bn' ? 'font-bangla' : ''}`}>{fs.learningPaths}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fs.pathsList.map((path) => (
              <div key={path.title} className="bg-bg-surface rounded-xl p-6 shadow-sm border border-border-color hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className={`text-lg font-bold text-text-primary ${language === 'bn' ? 'font-bangla' : ''}`}>{path.title}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${levelColors[path.level] || 'bg-slate-100 text-slate-700 dark:bg-slate-700/40 dark:text-slate-300'}`}>
                    {path.level}
                  </span>
                </div>
                <p className={`text-text-secondary text-sm leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>{path.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-surface py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-blue rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
            <p className="text-blue-200 mb-6">Get our free AI education newsletter — in English and Bangla.</p>
            <Link href="/contact" className="bg-white text-primary-blue px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
              Subscribe Free →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
