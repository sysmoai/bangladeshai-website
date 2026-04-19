'use client'

import { useState } from 'react'
import { Mail, Building2, Globe, Mic, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

const pathways = [
  {
    icon: Building2,
    en: { title: 'Institutional Partners', subtitle: 'Universities, Development Banks, INGOs', desc: 'For research collaboration, data sharing agreements, joint publications, and institutional partnerships. We work with organizations aligned with our independence principles.' },
    bn: { title: 'প্রাতিষ্ঠানিক অংশীদার', subtitle: 'বিশ্ববিদ্যালয়, উন্নয়ন ব্যাংক, আইএনজিও', desc: 'গবেষণা সহযোগিতা, ডেটা শেয়ারিং চুক্তি, যৌথ প্রকাশনা এবং প্রাতিষ্ঠানিক অংশীদারিত্বের জন্য।' },
    value: 'institutional',
  },
  {
    icon: Globe,
    en: { title: 'Development Partners', subtitle: 'World Bank, UNDP, ADB, DFID, USAID', desc: 'For technical assistance programmes, AI readiness support, policy advisory engagements, and development-aligned research funding.' },
    bn: { title: 'উন্নয়ন অংশীদার', subtitle: 'বিশ্বব্যাংক, UNDP, ADB, DFID, USAID', desc: 'প্রযুক্তিগত সহায়তা কার্যক্রম, AI প্রস্তুতি সহায়তা, নীতি উপদেষ্টা সম্পৃক্ততা এবং উন্নয়ন-সংযুক্ত গবেষণা অর্থায়নের জন্য।' },
    value: 'development',
  },
  {
    icon: Mic,
    en: { title: 'Media & Press', subtitle: 'Journalists, Editors, Broadcasters', desc: 'For quotes, expert commentary, interview requests, or media briefings on Bangladesh AI policy. We respond to all media inquiries within 48 hours.' },
    bn: { title: 'মিডিয়া ও প্রেস', subtitle: 'সাংবাদিক, সম্পাদক, সম্প্রচারকারী', desc: 'বাংলাদেশ AI নীতিতে উদ্ধৃতি, বিশেষজ্ঞ ভাষ্য, সাক্ষাৎকার অনুরোধ বা মিডিয়া ব্রিফিংয়ের জন্য।' },
    value: 'media',
  },
]

export default function ContactPage() {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => isBn ? bn : en
  const font = isBn ? 'font-bangla' : ''

  const [selectedPathway, setSelectedPathway] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })
        if (res.ok) {
          setSubmitted(true)
          form.reset()
        }
      } catch {
        // fall through to mailto
      }
    } else {
      // No Formspree ID — open mailto as fallback
      const name = data.get('name') as string
      const email = data.get('email') as string
      const message = data.get('message') as string
      window.location.href = `mailto:emon@emonhossain.pro?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`
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
          <span className="text-text-primary font-medium">{b('Contact', 'যোগাযোগ')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl font-extrabold mb-4 ${font}`}>{b('Get in Touch', 'যোগাযোগ করুন')}</h1>
          <p className={`text-xl text-blue-200 max-w-xl mx-auto ${font}`}>
            {b(
              'Three pathways to connect with BangladeshAI.org — for institutions, development partners, and media.',
              'BangladeshAI.org-এর সাথে সংযোগের তিনটি পথ — প্রতিষ্ঠান, উন্নয়ন অংশীদার এবং মিডিয়ার জন্য।'
            )}
          </p>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-xl font-bold text-text-primary mb-8 ${font}`}>{b('Who Are You?', 'আপনি কে?')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pathways.map((p) => {
              const Icon = p.icon
              const content = isBn ? p.bn : p.en
              const active = selectedPathway === p.value
              return (
                <button
                  key={p.value}
                  onClick={() => setSelectedPathway(p.value)}
                  className={`text-left rounded-xl p-5 border transition-all ${active ? 'border-primary-blue bg-primary-blue/5 shadow-md' : 'border-border-color bg-bg-surface hover:shadow-sm'}`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${active ? 'bg-primary-blue' : 'bg-primary-blue/10'}`}>
                    <Icon size={18} className={active ? 'text-white' : 'text-primary-blue'} />
                  </div>
                  <h3 className={`font-bold text-text-primary mb-1 text-sm ${font}`}>{content.title}</h3>
                  <p className={`text-text-secondary text-xs mb-2 ${font}`}>{content.subtitle}</p>
                  <p className={`text-text-secondary text-xs leading-relaxed ${font}`}>{content.desc}</p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-xl font-bold text-text-primary mb-8 ${font}`}>{b('Send a Message', 'একটি বার্তা পাঠান')}</h2>

          {submitted ? (
            <div className="bg-bd-green/10 border border-bd-green/30 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className={`text-lg font-bold text-bd-green mb-2 ${font}`}>{b('Message Sent!', 'বার্তা পাঠানো হয়েছে!')}</h3>
              <p className={`text-text-secondary text-sm ${font}`}>
                {b('We\'ll respond within 48 hours. For urgent matters, email emon@emonhossain.pro directly.', 'আমরা ৪৮ ঘণ্টার মধ্যে সাড়া দেব। জরুরি বিষয়ে সরাসরি emon@emonhossain.pro ইমেইল করুন।')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-bg-light p-8 rounded-2xl border border-border-color">
              <input type="hidden" name="pathway" value={selectedPathway} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-semibold text-text-primary mb-1.5 ${font}`}>{b('Name', 'নাম')} *</label>
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder={b('Your full name', 'আপনার পুরো নাম')}
                    className={`w-full px-4 py-2.5 border border-border-color rounded-lg text-sm bg-bg-surface focus:outline-none focus:ring-2 focus:ring-primary-blue ${font}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold text-text-primary mb-1.5 ${font}`}>{b('Email', 'ইমেইল')} *</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder={b('your@email.com', 'আপনার@ইমেইল.com')}
                    className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm bg-bg-surface focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-semibold text-text-primary mb-1.5 ${font}`}>{b('Organization', 'প্রতিষ্ঠান')}</label>
                <input
                  name="organization"
                  type="text"
                  placeholder={b('Your organization (optional)', 'আপনার প্রতিষ্ঠান (ঐচ্ছিক)')}
                  className={`w-full px-4 py-2.5 border border-border-color rounded-lg text-sm bg-bg-surface focus:outline-none focus:ring-2 focus:ring-primary-blue ${font}`}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold text-text-primary mb-1.5 ${font}`}>{b('Message', 'বার্তা')} *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={b('Describe your inquiry...', 'আপনার অনুসন্ধান বর্ণনা করুন...')}
                  className={`w-full px-4 py-2.5 border border-border-color rounded-lg text-sm bg-bg-surface focus:outline-none focus:ring-2 focus:ring-primary-blue resize-none ${font}`}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={`w-full bg-primary-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-60 ${font}`}
              >
                {submitting ? b('Sending…', 'পাঠানো হচ্ছে…') : b('Send Message', 'বার্তা পাঠান')}
              </button>
              <p className={`text-center text-xs text-text-secondary ${font}`}>
                {b('Or email directly: ', 'বা সরাসরি ইমেইল করুন: ')}
                <a href="mailto:emon@emonhossain.pro" className="text-primary-blue hover:underline">emon@emonhossain.pro</a>
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Direct contact */}
      <section className="bg-bg-light py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-lg font-bold text-text-primary mb-6 text-center ${font}`}>{b('Direct Contact', 'সরাসরি যোগাযোগ')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="mailto:emon@emonhossain.pro" className="flex items-center gap-3 p-4 bg-bg-surface rounded-xl shadow-sm border border-border-color hover:shadow-md transition-shadow">
              <Mail className="text-bd-green flex-shrink-0" size={20} />
              <div>
                <div className={`text-xs text-text-secondary ${font}`}>{b('Founder', 'প্রতিষ্ঠাতা')}</div>
                <div className="text-sm font-semibold text-text-primary">emon@emonhossain.pro</div>
              </div>
            </a>
            <a href="https://emonhossain.pro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-bg-surface rounded-xl shadow-sm border border-border-color hover:shadow-md transition-shadow">
              <Globe className="text-primary-blue flex-shrink-0" size={20} />
              <div>
                <div className={`text-xs text-text-secondary ${font}`}>{b('Website', 'ওয়েবসাইট')}</div>
                <div className="text-sm font-semibold text-text-primary">emonhossain.pro</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
