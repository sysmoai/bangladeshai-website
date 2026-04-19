'use client'

import Link from 'next/link'
import { ChevronRight, Download, Mail, FileText, Image as ImageIcon, BookOpen } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const brandAssets = [
  {
    en: { title: 'Primary Logo (SVG + PNG)', desc: 'BangladeshAI.org logo in white, dark, and color variants. For use on light and dark backgrounds.' },
    bn: { title: 'প্রাথমিক লোগো (SVG + PNG)', desc: 'সাদা, গাঢ় এবং রঙিন ভেরিয়েন্টে BangladeshAI.org লোগো।' },
    icon: ImageIcon,
    status: 'Coming Soon',
    statusBn: 'শীঘ্রই আসছে',
  },
  {
    en: { title: 'Brand Color System', desc: 'Navy #1A2332 (headers, hero) · Blue #2563EB (links, CTAs) · Green #16A34A (BD flag, positive) · Red #DC2626 (BD flag, warnings) · Gray #64748B (captions) · Light #F8FAFC · Dark #0F172A' },
    bn: { title: 'ব্র্যান্ড কালার সিস্টেম', desc: 'নেভি #1A2332 (হেডার, হিরো) · ব্লু #2563EB (লিংক, CTA) · গ্রিন #16A34A (বিডি পতাকা, পজিটিভ) · রেড #DC2626 (বিডি পতাকা, সতর্কতা) · গ্রে #64748B (ক্যাপশন)' },
    icon: ImageIcon,
    status: 'Available',
    statusBn: 'উপলব্ধ',
  },
  {
    en: { title: 'Press Kit (ZIP)', desc: 'Complete press kit: logos, bio, headshot, fact sheet, and brand guidelines. For editorial and broadcast use.' },
    bn: { title: 'প্রেস কিট (ZIP)', desc: 'সম্পূর্ণ প্রেস কিট: লোগো, জীবনী, হেডশট, তথ্য পত্র এবং ব্র্যান্ড গাইডলাইন।' },
    icon: Download,
    status: 'Coming Soon',
    statusBn: 'শীঘ্রই আসছে',
  },
  {
    en: { title: 'Bangladesh AI Fact Sheet', desc: 'One-page fact sheet: 47.12/100 score, 80/188 rank, 92 requirements, 67 gaps, key statistics. Ready for print.' },
    bn: { title: 'বাংলাদেশ AI তথ্য পত্র', desc: 'এক-পাতার তথ্য পত্র: ৪৭.১২/১০০ স্কোর, ৮০/১৮৮ র‌্যাংক, ৯২টি প্রয়োজনীয়তা, ৬৭টি ঘাটতি।' },
    icon: FileText,
    status: 'Available',
    statusBn: 'উপলব্ধ',
  },
]

const coverage = [
  { en: '"Bangladesh ranked 80th in AI readiness — what it means"', bn: '"AI প্রস্তুতিতে বাংলাদেশ ৮০তম — এর মানে কী"' },
  { en: '"Independent researchers call for urgent AI policy action"', bn: '"স্বাধীন গবেষকরা জরুরি AI নীতি পদক্ষেপের আহ্বান জানাচ্ছেন"' },
  { en: '"AI in Bangla: the technology is ready — is Bangladesh?"', bn: '"বাংলায় AI: প্রযুক্তি প্রস্তুত — বাংলাদেশ কি?"' },
]

export default function PressPage() {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => isBn ? bn : en
  const font = isBn ? 'font-bangla' : ''

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-bg-light border-b border-border-color px-4 py-2">
        <div className="max-w-4xl mx-auto flex items-center gap-1 text-xs text-text-secondary">
          <a href="/" className="hover:text-primary-blue transition-colors">{b('Home', 'হোম')}</a>
          <ChevronRight size={12} />
          <span className="text-text-primary font-medium">{b('Press', 'প্রেস')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-white/10 border border-white/20 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-6">
            {b('Media & Press', 'মিডিয়া ও প্রেস')}
          </div>
          <h1 className={`text-4xl font-extrabold mb-6 ${font}`}>
            {b('Press Kit', 'প্রেস কিট')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto ${font}`}>
            {b(
              'Downloadable brand assets, founder biography, and expert commentary for journalists and broadcasters covering Bangladesh AI policy.',
              'বাংলাদেশ AI নীতি কভার করা সাংবাদিক এবং সম্প্রচারকারীদের জন্য ডাউনলোডযোগ্য ব্র্যান্ড সম্পদ, প্রতিষ্ঠাতার জীবনী এবং বিশেষজ্ঞ ভাষ্য।'
            )}
          </p>
          <div className="mt-8">
            <a
              href="mailto:emon@emonhossain.pro"
              className="inline-flex items-center gap-2 bg-bd-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              {b('Media Inquiries: emon@emonhossain.pro', 'মিডিয়া অনুসন্ধান: emon@emonhossain.pro')}
            </a>
          </div>
        </div>
      </section>

      {/* Founder Bio for Press */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${font}`}>
            {b('Founder Biography — For Press Use', 'প্রতিষ্ঠাতার জীবনী — প্রেস ব্যবহারের জন্য')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="w-32 h-32 rounded-2xl bg-primary-navy flex items-center justify-center text-white font-bold text-4xl mx-auto md:mx-0 mb-4">
                EH
              </div>
              <div className={`text-center md:text-left ${font}`}>
                <p className="font-bold text-text-primary text-lg">Emon Hossain</p>
                <p className="text-text-secondary text-sm">{b('Founder, BangladeshAI.org', 'প্রতিষ্ঠাতা, BangladeshAI.org')}</p>
                <p className="text-text-secondary text-sm">{b('Independent AI Policy Researcher', 'স্বাধীন AI নীতি গবেষক')}</p>
              </div>
              <div className="mt-4 space-y-2">
                <a href="mailto:emon@emonhossain.pro" className="flex items-center gap-2 text-sm text-primary-blue hover:underline">
                  <Mail size={14} />emon@emonhossain.pro
                </a>
                <a href="https://emonhossain.pro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-blue hover:underline">
                  <BookOpen size={14} />emonhossain.pro
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className={`font-semibold text-text-secondary text-xs uppercase tracking-wider mb-3 ${font}`}>{b('Short Bio (100 words)', 'সংক্ষিপ্ত জীবনী (১০০ শব্দ)')}</h3>
              <p className={`text-text-secondary text-sm leading-relaxed mb-6 bg-bg-light p-4 rounded-xl border border-border-color ${font}`}>
                {b(
                  'Emon Hossain is the founder of BangladeshAI.org, an independent AI policy research platform. He has assessed Bangladesh against 92 international AI readiness requirements, identifying 67 critical gaps in the national AI ecosystem. His research focuses on AI governance, economic impact, and bilingual AI education for Bangladesh\'s 170 million people. He is available for media commentary, conference presentations, and policy briefings. Contact: emon@emonhossain.pro',
                  'ইমন হোসেন BangladeshAI.org-এর প্রতিষ্ঠাতা, একটি স্বাধীন AI নীতি গবেষণা প্ল্যাটফর্ম। তিনি ৯২টি আন্তর্জাতিক AI প্রস্তুতির প্রয়োজনীয়তার বিপরীতে বাংলাদেশকে মূল্যায়ন করেছেন, জাতীয় AI ইকোসিস্টেমে ৬৭টি গুরুতর ঘাটতি চিহ্নিত করেছেন। যোগাযোগ: emon@emonhossain.pro'
                )}
              </p>
              <h3 className={`font-semibold text-text-secondary text-xs uppercase tracking-wider mb-3 ${font}`}>{b('Suggested Expert Title', 'পরামর্শকৃত বিশেষজ্ঞ শিরোনাম')}</h3>
              <div className="bg-bg-light p-4 rounded-xl border border-border-color">
                <p className="text-sm text-text-primary font-medium">"Emon Hossain, Founder, BangladeshAI.org"</p>
                <p className={`text-xs text-text-secondary mt-1 ${font}`}>{b('or: "Bangladesh AI policy researcher Emon Hossain"', 'অথবা: "বাংলাদেশ AI নীতি গবেষক ইমন হোসেন"')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${font}`}>
            {b('Brand Assets', 'ব্র্যান্ড সম্পদ')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {brandAssets.map((asset, i) => {
              const Icon = asset.icon
              const content = isBn ? asset.bn : asset.en
              const available = asset.status === 'Available'
              return (
                <div key={i} className="bg-bg-surface rounded-xl p-5 border border-border-color">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                        <Icon size={16} className="text-primary-blue" />
                      </div>
                      <h3 className={`font-bold text-text-primary text-sm ${font}`}>{content.title}</h3>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0 ml-2 ${available ? 'bg-bd-green/10 text-bd-green' : 'bg-yellow-50 text-yellow-700'}`}>
                      {isBn ? asset.statusBn : asset.status}
                    </span>
                  </div>
                  <p className={`text-text-secondary text-sm leading-relaxed mb-4 ${font}`}>{content.desc}</p>
                  {available ? (
                    <button className={`text-sm text-primary-blue font-semibold hover:underline flex items-center gap-1 ${font}`}>
                      <Download size={14} />
                      {b('Download', 'ডাউনলোড করুন')}
                    </button>
                  ) : (
                    <span className={`text-sm text-text-secondary ${font}`}>
                      {b('Available soon — contact press for advance copy', 'শীঘ্রই উপলব্ধ — অগ্রিম কপির জন্য প্রেস সাথে যোগাযোগ করুন')}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coverage suggestions */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${font}`}>
            {b('Story Ideas for Journalists', 'সাংবাদিকদের জন্য গল্পের ধারণা')}
          </h2>
          <div className="space-y-3">
            {coverage.map((c, i) => (
              <div key={i} className="flex items-center gap-4 bg-bg-light p-4 rounded-xl border border-border-color">
                <span className="text-2xl font-extrabold text-primary-blue/20 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className={`text-text-primary text-sm font-medium ${font}`}>{isBn ? c.bn : c.en}</p>
              </div>
            ))}
            <div className="flex items-center gap-4 bg-bg-light p-4 rounded-xl border border-border-color">
              <span className="text-2xl font-extrabold text-primary-blue/20 flex-shrink-0">04</span>
              <p className={`text-text-primary text-sm font-medium ${font}`}>
                {b('"The $40-80M foreign AI subscription drain: why Bangladesh is funding its own disadvantage"', '"$৪০-৮০ মিলিয়ন বিদেশি AI সাবস্ক্রিপশন ড্রেন: কেন বাংলাদেশ নিজের অসুবিধা অর্থায়ন করছে"')}
              </p>
            </div>
            <div className="flex items-center gap-4 bg-bg-light p-4 rounded-xl border border-border-color">
              <span className="text-2xl font-extrabold text-primary-blue/20 flex-shrink-0">05</span>
              <p className={`text-text-primary text-sm font-medium ${font}`}>
                {b('"Smart Bangladesh 2041 vs. reality: how far is Bangladesh from its own vision?"', '"স্মার্ট বাংলাদেশ ২০৪১ বনাম বাস্তবতা: বাংলাদেশ নিজের দৃষ্টিভঙ্গি থেকে কতটা দূরে?"')}
              </p>
            </div>
          </div>

          <div className="mt-10 bg-primary-navy rounded-2xl p-8 text-center text-white">
            <h3 className={`text-xl font-bold mb-3 ${font}`}>{b('Media Contact', 'মিডিয়া যোগাযোগ')}</h3>
            <p className={`text-blue-200 mb-6 text-sm ${font}`}>
              {b('For expert quotes, interview requests, data, and advance access to upcoming research.', 'বিশেষজ্ঞ উদ্ধৃতি, সাক্ষাৎকার অনুরোধ, ডেটা এবং আসন্ন গবেষণায় অগ্রিম অ্যাক্সেসের জন্য।')}
            </p>
            <a
              href="mailto:emon@emonhossain.pro"
              className="inline-flex items-center gap-2 bg-bd-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              emon@emonhossain.pro
            </a>
            <p className={`text-blue-400 text-xs mt-4 ${font}`}>{b('Responds to media inquiries within 24 hours.', 'মিডিয়া অনুসন্ধানে ২৪ ঘণ্টার মধ্যে সাড়া দেয়।')}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
