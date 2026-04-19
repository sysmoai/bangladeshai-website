'use client'

import Link from 'next/link'
import { ArrowLeft, Download } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import type { Post } from '@/lib/content'

export default function ResearchPostClient({ post }: { post: Post }) {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen">
      <section className="bg-primary-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/research" className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Research
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold bg-bd-green px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-blue-400 text-sm">{post.date}</span>
            <span className="text-blue-400 text-sm">· {post.readTime} min read</span>
          </div>
          <h1 className={`text-3xl md:text-4xl font-extrabold leading-tight ${language === 'bn' ? 'font-bangla' : ''}`}>
            {post.title}
          </h1>
          {post.excerpt && (
            <p className={`text-blue-200 mt-4 text-lg leading-relaxed ${language === 'bn' ? 'font-bangla' : ''}`}>
              {post.excerpt}
            </p>
          )}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-bd-green flex items-center justify-center text-white font-bold text-xs">
                EH
              </div>
              <Link href="/about/emon-hossain" className="text-blue-200 hover:text-white text-sm transition-colors">
                {post.author}
              </Link>
            </div>
            <button className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors">
              <Download size={14} /> {t.research.downloadPdf}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-bg-surface py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className={`prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-primary-blue ${language === 'bn' ? 'font-bangla' : ''}`}
            dangerouslySetInnerHTML={{ __html: simpleMarkdownToHtml(post.content) }}
          />

          <div className="mt-12 pt-8 border-t border-border-color flex flex-wrap gap-4">
            <Link href="/research" className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:underline">
              <ArrowLeft size={16} /> All Research
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
              Cite this paper →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function simpleMarkdownToHtml(md: string): string {
  return md
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-extrabold text-text-primary mt-8 mb-4">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-text-primary mt-8 mb-3">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-text-primary mt-6 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary-blue hover:underline">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="text-text-secondary ml-4 mb-1">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (m) => `<ul class="list-disc list-inside space-y-1 my-4">${m}</ul>`)
    .replace(/^(?!<[h|u|l])(.+)$/gm, '<p class="text-text-secondary leading-relaxed my-3">$1</p>')
    .replace(/<p[^>]*><\/p>/g, '')
}
