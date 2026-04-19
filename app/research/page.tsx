import Link from 'next/link'

const papers = [
  { slug: 'ai-readiness', title: 'Bangladesh AI Readiness Assessment 2026', category: 'Assessment', readTime: '20 min read', desc: '92 requirements across 15 domains. Score 47.12 out of 100. Rank 80 of 188 countries.' },
  { slug: 'global-benchmarks', title: 'Global AI Benchmarks 65 Plus Countries', category: 'Global', readTime: '15 min read', desc: 'How Bangladesh compares to 65+ nations. Oxford Insights methodology and cluster analysis.' },
  { slug: 'economic-impact', title: 'Economic Impact of AI Adoption in Bangladesh', category: 'Economics', readTime: '18 min read', desc: 'Six economic multipliers: NBR tax AI, ghost beneficiaries, SME productivity.' },
  { slug: 'ministry-use-cases', title: 'Ministry by Ministry AI Use Cases', category: 'Policy', readTime: '25 min read', desc: 'AI applications across all 20 ministries with realistic ROI estimates.' },
  { slug: 'policy-regulation', title: 'AI Policy and Regulatory Framework', category: 'Policy', readTime: '16 min read', desc: 'AI Policy V2.0, Data Protection Ordinance, and 3 additional ordinances needed.' },
  { slug: 'national-strategy', title: 'National AI Strategy 12 Pillars', category: 'Strategy', readTime: '22 min read', desc: '7-year strategy with funded mandates and measurable KPIs.' },
  { slug: 'anti-corruption', title: 'Anti-Corruption AI 4-Layer Framework', category: 'Governance', readTime: '19 min read', desc: 'AI to detect corruption in procurement, land registry, tax, social protection.' },
  { slug: 'bangla-nlp', title: 'Bangla AI and Sovereign NLP Stack', category: 'Technology', readTime: '17 min read', desc: 'Bangla LLM, OCR, STT, TTS. BLP-2025: 69 NLP papers, 8 at ACL 2025.' },
  { slug: 'workforce-education', title: 'Workforce and Education AI Reskilling', category: 'Education', readTime: '14 min read', desc: 'Four-track reskilling for 65M young workforce. KOICA 96M program analysis.' },
  { slug: 'risk-management', title: 'Risk Management and Non-Negotiables', category: 'Risk', readTime: '16 min read', desc: '10 AI failure modes. 17 KPIs for national monitoring. Non-negotiable safeguards.' },
]

const CATEGORY_COLORS: Record<string, string> = {
  Assessment: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  Global: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  Economics: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Policy: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Strategy: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  Governance: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  Technology: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  Education: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Risk: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300',
}

export default function ResearchPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Research Hub</h1>
      <p className="text-lg text-text-secondary mb-12">Independent AI policy research for Bangladesh. 10 papers. All open-access.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {papers.map((paper) => (
          <Link
            key={paper.slug}
            href={'/research/' + paper.slug}
            className="block bg-bg-surface border border-border-color rounded-xl p-7 hover:shadow-lg hover:border-primary-blue/30 transition-all no-underline group"
          >
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${CATEGORY_COLORS[paper.category] || 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>
              {paper.category}
            </span>
            <h2 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-blue transition-colors leading-snug">{paper.title}</h2>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">{paper.desc}</p>
            <div className="flex justify-between items-center pt-3 border-t border-border-color">
              <span className="text-xs text-text-secondary">{paper.readTime}</span>
              <span className="text-sm text-primary-blue font-semibold group-hover:underline">Read Research →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
