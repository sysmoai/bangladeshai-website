import Link from 'next/link'

const posts = [
  { slug: 'bangladesh-ai-readiness-47', title: 'Bangladesh AI Readiness: 47.12 out of 100', category: 'Policy', date: '2026-03-22', readTime: '8 min read', desc: 'Oxford Insights 2024 ranked Bangladesh 80th of 188 countries. What the score means and what must change.' },
  { slug: 'why-ai-is-not-magic', title: 'Why AI is Not Magic', category: 'Opinion', date: '2026-03-20', readTime: '6 min read', desc: 'AI is a force multiplier. Bangladesh 65M youth are the real asset.' },
  { slug: 'ai-bangla-language-guide', title: 'AI in Bangla: A Complete Guide', category: 'AI Explained', date: '2026-03-27', readTime: '7 min read', desc: 'Step-by-step guide to using AI in Bangla. No English required.' },
  { slug: 'economic-impact-analysis', title: 'The Economic Impact of AI on Bangladesh', category: 'Economy', date: '2026-03-25', readTime: '9 min read', desc: 'Six economic multipliers that could transform Bangladesh GDP.' },
  { slug: 'what-singapore-teaches-us', title: 'What Singapore Teaches Us About AI', category: 'Global', date: '2026-03-15', readTime: '7 min read', desc: 'Singapore ranked number 2 globally. What Bangladesh can replicate.' },
  { slug: 'bangla-nlp-sovereign-stack', title: 'Building a Sovereign Bangla AI Stack', category: 'Bangla AI', date: '2026-03-10', readTime: '8 min read', desc: 'BLP-2025 produced 69 NLP papers. Here is what Bangladesh needs to build next.' },
  { slug: 'youth-and-ai-jobs', title: 'Bangladesh Youth and the AI Jobs Revolution', category: 'Economy', date: '2026-03-05', readTime: '7 min read', desc: 'KOICA 13M AI workforce training. Four tracks. New job categories.' },
  { slug: 'population-asset-not-problem', title: 'Population Is Our Asset Not Our Problem', category: 'Opinion', date: '2026-03-26', readTime: '6 min read', desc: '170M people is Bangladesh greatest AI advantage.' },
  { slug: 'sovereign-ai-infrastructure-why-it-matters', title: 'Why Sovereign AI Infrastructure Matters', category: 'Policy', date: '2026-03-24', readTime: '8 min read', desc: '40-80M annual foreign AI subscription outflow. Build once vs pay forever.' },
]

const CATEGORY_COLORS: Record<string, string> = {
  Policy: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Opinion: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'AI Explained': 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  Economy: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Global: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Bangla AI': 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
}

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Blog and Analysis</h1>
      <p className="text-lg text-text-secondary mb-12">Independent analysis on AI policy, technology, and society in Bangladesh.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={'/blog/' + post.slug}
            className="block bg-bg-surface border border-border-color rounded-xl p-6 hover:shadow-lg hover:border-primary-blue/30 transition-all no-underline group"
          >
            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${CATEGORY_COLORS[post.category] || 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>
              {post.category}
            </span>
            <h2 className="text-base font-bold text-text-primary mb-2 group-hover:text-primary-blue transition-colors leading-snug">{post.title}</h2>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">{post.desc}</p>
            <div className="flex justify-between text-xs text-text-secondary pt-3 border-t border-border-color">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
