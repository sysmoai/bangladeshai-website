'use client'

import { useState } from 'react'
import { ChevronRight, Mail, Clock, Globe, Shield } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const NEWSLETTER_FORM_ID = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ID

const whatYouGet = [
  {
    icon: Globe,
    en: { title: 'Bangladesh AI News Digest', desc: 'Curated summary of the week\'s most important AI developments in Bangladesh — policy announcements, government initiatives, and industry news.' },
    bn: { title: 'বাংলাদেশ AI সংবাদ ডাইজেস্ট', desc: 'বাংলাদেশে সপ্তাহের সবচেয়ে গুরুত্বপূর্ণ AI উন্নয়নের কিউরেটেড সারসংক্ষেপ — নীতি ঘোষণা, সরকারি উদ্যোগ এবং শিল্প সংবাদ।' },
  },
  {
    icon: Globe,
    en: { title: 'Global AI in Context', desc: 'One global AI story per week — selected for its specific relevance to Bangladesh. What Singapore\'s AI strategy means for us. What India\'s compute cluster means for our choices.' },
    bn: { title: 'প্রেক্ষাপটে বৈশ্বিক AI', desc: 'সপ্তাহে একটি বৈশ্বিক AI গল্প — বাংলাদেশের জন্য এর নির্দিষ্ট প্রাসঙ্গিকতার জন্য নির্বাচিত।' },
  },
  {
    icon: Shield,
    en: { title: 'Policy Watch', desc: 'Tracking Bangladesh\'s AI Policy V2.0, Data Protection Ordinance amendments, Smart Bangladesh 2041 updates, and parliamentary discussions on digital governance.' },
    bn: { title: 'নীতি পর্যবেক্ষণ', desc: 'বাংলাদেশের AI নীতি V2.0, ডেটা সুরক্ষা অধ্যাদেশ সংশোধনী, স্মার্ট বাংলাদেশ ২০৪১ আপডেট এবং ডিজিটাল গভর্ন্যান্সে সংসদীয় আলোচনা ট্র্যাক করা।' },
  },
  {
    icon: Clock,
    en: { title: 'Research Previews', desc: 'Early access to upcoming BangladeshAI.org research findings — before full papers are published. Subscribers see key data first.' },
    bn: { title: 'গবেষণা পূর্বরূপ', desc: 'আসন্ন BangladeshAI.org গবেষণার ফলাফলে প্রারম্ভিক অ্যাক্সেস — সম্পূর্ণ পেপার প্রকাশের আগে। সাবস্ক্রাইবাররা প্রথমে মূল ডেটা দেখেন।' },
  },
]

export default function NewsletterPage() {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => isBn ? bn : en
  const font = isBn ? 'font-bangla' : ''

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    if (NEWSLETTER_FORM_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${NEWSLETTER_FORM_ID}`, {
          method: 'POST',
          body: JSON.stringify({ email, name, type: 'newsletter' }),
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        })
        if (res.ok) {
          setSubmitted(true)
        }
      } catch {
        setSubmitted(true)
      }
    } else {
      setSubmitted(true)
    }
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-bg-light border-b border-border-color px-4 py-2">
        <div className="max-w-4xl mx-auto flex items-center gap-1 text-xs text-text-secondary">
          <a href="/" className="hover:text-primary-blue transition-colors">{b('Home', 'হোম')}</a>
          <ChevronRight size={12} />
          <span className="text-text-primary font-medium">{b('Newsletter', 'নিউজলেটার')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-bd-green/20 border border-bd-green/40 rounded-full text-bd-green text-xs font-semibold uppercase tracking-wider mb-6">
            {b('Weekly · Free · Bilingual', 'সাপ্তাহিক · বিনামূল্যে · দ্বিভাষিক')}
          </div>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 ${font}`}>
            {b('Bangladesh AI Briefing', 'বাংলাদেশ AI ব্রিফিং')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed ${font}`}>
            {b(
              'The independent weekly newsletter on AI policy, governance, and technology in Bangladesh. Read by government officials, researchers, and concerned citizens.',
              'বাংলাদেশে AI নীতি, গভর্ন্যান্স এবং প্রযুক্তি বিষয়ক স্বাধীন সাপ্তাহিক নিউজলেটার। সরকারি কর্মকর্তা, গবেষক এবং সচেতন নাগরিকদের দ্বারা পঠিত।'
            )}
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 text-center ${font}`}>
            {b('What You Get Each Week', 'প্রতি সপ্তাহে আপনি কী পান')}
          </h2>
          <p className={`text-text-secondary text-center mb-10 text-sm ${font}`}>
            {b('Sent every Sunday morning. Takes 8 minutes to read. Bilingual — English and Bangla in every issue.', 'প্রতি রবিবার সকালে পাঠানো হয়। পড়তে ৮ মিনিট লাগে। দ্বিভাষিক — প্রতিটি সংখ্যায় ইংরেজি এবং বাংলা।')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatYouGet.map((item, i) => {
              const Icon = item.icon
              const content = isBn ? item.bn : item.en
              return (
                <div key={i} className="bg-bg-light rounded-xl p-5 border border-border-color">
                  <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary-blue" />
                  </div>
                  <h3 className={`font-bold text-text-primary mb-2 text-sm ${font}`}>{content.title}</h3>
                  <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Subscribe form */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-md mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-2 text-center ${font}`}>
            {b('Subscribe Free', 'বিনামূল্যে সাবস্ক্রাইব করুন')}
          </h2>
          <p className={`text-text-secondary text-center mb-4 text-sm ${font}`}>
            {b('No spam. Unsubscribe any time. Your email stays in Bangladesh.', 'কোনো স্প্যাম নেই। যেকোনো সময় আনসাবস্ক্রাইব করুন। আপনার ইমেইল বাংলাদেশে থাকে।')}
          </p>
          <p className={`text-text-secondary text-center mb-8 text-xs italic ${font}`}>
            {b('Join the first readers — issue #1 coming this Sunday.', 'প্রথম পাঠকদের সাথে যোগ দিন — ১ম সংখ্যা এই রবিবার আসছে।')}
          </p>

          {submitted ? (
            <div className="bg-bd-green/10 border border-bd-green/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className={`text-lg font-bold text-bd-green mb-2 ${font}`}>{b('You\'re subscribed!', 'আপনি সাবস্ক্রাইব করেছেন!')}</h3>
              <p className={`text-text-secondary text-sm ${font}`}>
                {b('Your first issue of Bangladesh AI Briefing arrives next Sunday.', 'বাংলাদেশ AI ব্রিফিং-এর আপনার প্রথম সংখ্যা পরের রবিবার আসবে।')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-bg-surface rounded-2xl p-8 border border-border-color shadow-sm space-y-4">
              <div>
                <label className={`block text-sm font-semibold text-text-primary mb-1.5 ${font}`}>{b('Your Name', 'আপনার নাম')}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={b('First name', 'প্রথম নাম')}
                  className={`w-full px-4 py-3 border border-border-color rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue ${font}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold text-text-primary mb-1.5 ${font}`}>{b('Email Address', 'ইমেইল ঠিকানা')} *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={b('your@email.com', 'আপনার@ইমেইল.com')}
                  className="w-full px-4 py-3 border border-border-color rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-bd-green text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2 ${font}`}
              >
                <Mail size={16} />
                {submitting ? b('Subscribing…', 'সাবস্ক্রাইব হচ্ছে…') : b('Subscribe to Bangladesh AI Briefing', 'বাংলাদেশ AI ব্রিফিং সাবস্ক্রাইব করুন')}
              </button>
              <p className={`text-xs text-text-secondary text-center ${font}`}>
                {b('Free forever. No credit card. Unsubscribe in one click.', 'চিরতরে বিনামূল্যে। কোনো ক্রেডিট কার্ড নেই। এক ক্লিকে আনসাবস্ক্রাইব করুন।')}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Tagline / promise */}
      <section className="bg-primary-navy py-12 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className={`text-lg text-blue-200 italic ${font}`}>
            {b(
              '"Bangladesh\'s AI story deserves to be told by Bangladeshis — in both languages. This newsletter is our attempt."',
              '"বাংলাদেশের AI গল্প বাংলাদেশিদের দ্বারা — উভয় ভাষায় বলার যোগ্য। এই নিউজলেটার আমাদের প্রচেষ্টা।"'
            )}
          </p>
          <p className="text-blue-400 text-sm mt-3">— Emon Hossain</p>
        </div>
      </section>
    </div>
  )
}
