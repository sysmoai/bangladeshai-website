import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Glossary — Key AI Terms for Bangladesh | BangladeshAI.org',
  description: 'A glossary of key artificial intelligence terms explained in simple language for Bangladesh audience — bilingual English and Bangla.',
}

const glossaryTerms = [
  {
    term: 'Artificial Intelligence (AI)',
    bangla: 'কৃত্রিম বুদ্ধিমত্তা',
    definition: 'Technology that enables computers and machines to simulate human learning, comprehension, problem solving, decision making, creativity and autonomy.',
  },
  {
    term: 'Machine Learning (ML)',
    bangla: 'মেশিন লার্নিং',
    definition: 'A subset of AI where systems learn from data to improve performance on a specific task without being explicitly programmed for every scenario.',
  },
  {
    term: 'Large Language Model (LLM)',
    bangla: 'বৃহৎ ভাষা মডেল',
    definition: 'An AI model trained on vast amounts of text data that can understand, generate, and translate human language. Examples: GPT-4, Claude, Gemini.',
  },
  {
    term: 'Natural Language Processing (NLP)',
    bangla: 'প্রাকৃতিক ভাষা প্রক্রিয়াকরণ',
    definition: 'AI technology that enables computers to understand, interpret, and generate human language. For Bangladesh, Bangla NLP is a priority area.',
  },
  {
    term: 'AI Readiness',
    bangla: 'এআই প্রস্তুতি',
    definition: 'A measure of how prepared a country is to integrate AI into public services. Bangladesh scores 47.12/100, ranking 80th of 188 countries (Oxford Insights GGAI 2024).',
  },
  {
    term: 'Sovereign AI',
    bangla: 'সার্বভৌম এআই',
    definition: 'AI infrastructure and capabilities owned and controlled by a country itself, rather than depending on foreign technology providers. Critical for data sovereignty and national security.',
  },
  {
    term: 'AI Governance',
    bangla: 'এআই শাসন',
    definition: 'The frameworks, policies, laws, and institutions that regulate the development and deployment of AI systems to ensure they are safe, ethical, and beneficial.',
  },
  {
    term: 'Data Sovereignty',
    bangla: 'ডেটা সার্বভৌমত্ব',
    definition: 'The concept that data is subject to the laws and governance structures of the country where it is collected. Bangladesh has no comprehensive data protection law as of 2026.',
  },
  {
    term: 'AI Literacy',
    bangla: 'এআই সাক্ষরতা',
    definition: 'The ability to understand, use, and critically evaluate AI technologies. A key priority for Bangladesh\'s 65M young workforce.',
  },
  {
    term: 'Digital Public Infrastructure',
    bangla: 'ডিজিটাল পাবলিক ইনফ্রাস্ট্রাকচার',
    definition: 'Shared digital systems that can be used by both government and private sector to deliver services at scale. Examples: Aadhaar (India), Bangladesh\'s National Data Center.',
  },
]

export default function GlossaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-primary-blue hover:underline text-sm mb-8">
        <ArrowLeft size={16} /> Home
      </Link>
      <h1 className="text-4xl font-bold text-text-primary mb-4">AI Glossary</h1>
      <p className="text-lg text-text-secondary mb-10">
        Key artificial intelligence terms explained in simple language. Bilingual — English and Bangla.
      </p>
      <div className="space-y-6">
        {glossaryTerms.map((item, i) => (
          <div key={i} className="bg-bg-surface border border-border-color rounded-xl p-6">
            <h2 className="text-xl font-bold text-text-primary mb-1">{item.term}</h2>
            <p className="text-sm text-bd-green font-semibold mb-3">{item.bangla}</p>
            <p className="text-text-secondary leading-relaxed">{item.definition}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-text-secondary">
          This glossary is a living document. Suggestions and corrections welcome at{' '}
          <a href="mailto:research@bangladeshai.org" className="text-primary-blue hover:underline">research@bangladeshai.org</a>.
        </p>
      </div>
    </main>
  )
}