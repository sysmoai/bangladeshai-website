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
  const [error, setError] = useState('')
  const signupEnabled = Boolean(NEWSLETTER_FORM_ID?.trim())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!signupEnabled) {
      setError('Newsletter enrollment is not currently available.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch(`https://formspree.io/f/${NEWSLETTER_FORM_ID}`, {
        method: 'POST',
        body: JSON.stringify({ email, name, type: 'newsletter' }),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Submission failed. No subscription was confirmed.')
    } finally {
      setSubmitting(false)
    }
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
              'A planned public-interest AI policy and technology briefing for Bangladesh. No regular publication or institutional readership is currently claimed.',
              'বাংলাদেশের জন্য পরিকল্পিত AI নীতি ও প্রযুক্তি ব্রিফিং। নিয়মিত প্রকাশনা বা প্রাতিষ্ঠানিক পাঠকসংখ্যার দাবি করা হচ্ছে না।'
            )}
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 text-center ${font}`}>
            {b('Planned Editorial Topics', 'পরিকল্পিত বিষয়বস্তু')}
          </h2>
          <p className={`text-text-secondary text-center mb-10 text-sm ${font}`}>
            {b('The following subjects are planned. No delivery schedule is guaranteed.', 'নিচের বিষয়গুলো পরিকল্পিত। নির্দিষ্ট সময়ে ব্রিফিং পাঠানোর প্রতিশ্রুতি দেওয়া হচ্ছে না।')}
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
            {b('Newsletter Enrollment', 'নিউজলেটার নিবন্ধন')}
          </h2>
          <p className={`text-text-secondary text-center mb-4 text-sm ${font}`}>
            {b('Enrollment is unavailable until a verified mailing provider and privacy notice are available.', 'যাচাইকৃত মেইলিং সেবা ও গোপনীয়তা নীতি না থাকা পর্যন্ত নিবন্ধন বন্ধ।')}
          </p>
          <p className={`text-text-secondary text-center mb-8 text-xs italic ${font}`}>
            {b('Issue #1 date has not been confirmed.', 'প্রথম সংখ্যা প্রকাশের তারিখ এখনো নিশ্চিত নয়।')}
          </p>

          {!signupEnabled ? (
            <div role="status" className="bg-bg-surface border border-border-color rounded-2xl p-8 text-center">
              <h3 className={`text-lg font-bold text-text-primary mb-3 ${font}`}>
                {b('Enrollment not yet open', 'নিবন্ধন এখনো চালু হয়নি')}
              </h3>
              <p className={`text-sm text-text-secondary leading-relaxed mb-4 ${font}`}>
                {b('No email addresses are collected here until a verified signup service is configured.', 'যাচাইকৃত নিবন্ধন সেবা চালু না হওয়া পর্যন্ত এখানে ইমেইল সংগ্রহ করা হচ্ছে না।')}
              </p>
              <a href="/contact/" className="text-primary-blue font-semibold underline">
                {b('Contact options', 'যোগাযোগের উপায়')}
              </a>
            </div>
          ) : submitted ? (
            <div className="bg-bd-green/10 border border-bd-green/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className={`text-lg font-bold text-bd-green mb-2 ${font}`}>{b('Request received', 'অনুরোধ গ্রহণ করা হয়েছে')}</h3>
              <p className={`text-text-secondary text-sm ${font}`}>
                {b('The form provider accepted your request. No delivery date is guaranteed.', 'ফর্ম সেবাদাতা অনুরোধ গ্রহণ করেছে। প্রকাশের সময় নিশ্চিত নয়।')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-bg-surface rounded-2xl p-8 border border-border-color shadow-sm space-y-4">
              {error && <p role="alert" className="text-sm text-red-700">{isBn ? "অনুরোধ পাঠানো যায়নি। সাবস্ক্রিপশন নিশ্চিত হয়নি।" : error}</p>}
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
                {b('No payment is requested. Your information is handled by the configured form provider.', 'কোনো অর্থপ্রদান লাগবে না। ফর্ম সেবাদাতার গোপনীয়তা নীতি প্রযোজ্য।')}
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
