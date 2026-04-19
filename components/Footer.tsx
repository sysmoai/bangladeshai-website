'use client'

import Link from 'next/link'
import { Twitter, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import BangladeshAIIcon from '@/components/BangladeshAIIcon'

export default function Footer() {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => (isBn ? bn : en)
  const font = isBn ? 'font-bangla' : ''

  return (
    <footer className="bg-[#1A2332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Col 1: Research */}
          <div>
            <h3 className={`text-sm font-semibold text-white mb-4 ${font}`}>
              {b('Research', 'গবেষণা')}
            </h3>
            <ul className={`space-y-2.5 text-sm text-gray-300 ${font}`}>
              <li><Link href="/research/ai-readiness" className="hover:text-white transition-colors">{b('AI Readiness 2026', 'এআই রেডিনেস ২০২৬')}</Link></li>
              <li><Link href="/research/global-benchmarks" className="hover:text-white transition-colors">{b('Global Benchmarks', 'বৈশ্বিক মানদণ্ড')}</Link></li>
              <li><Link href="/research/economic-impact" className="hover:text-white transition-colors">{b('Economic Impact', 'অর্থনৈতিক প্রভাব')}</Link></li>
              <li><Link href="/research/ministry-use-cases" className="hover:text-white transition-colors">{b('Ministry Use Cases', 'মন্ত্রণালয় ব্যবহার')}</Link></li>
              <li><Link href="/research/policy-regulation" className="hover:text-white transition-colors">{b('Policy & Regulation', 'নীতি ও নিয়ন্ত্রণ')}</Link></li>
              <li><Link href="/research/national-strategy" className="hover:text-white transition-colors">{b('National Strategy', 'জাতীয় কৌশল')}</Link></li>
              <li>
                <Link href="/research" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                  {b('View All Research →', 'সব গবেষণা দেখুন →')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Insights */}
          <div>
            <h3 className={`text-sm font-semibold text-white mb-4 ${font}`}>
              {b('Insights', 'বিশ্লেষণ')}
            </h3>
            <ul className={`space-y-2.5 text-sm text-gray-300 ${font}`}>
              <li><Link href="/blog" className="hover:text-white transition-colors">{b('Blog & Analysis', 'ব্লগ ও বিশ্লেষণ')}</Link></li>
              <li><Link href="/why-now" className="hover:text-white transition-colors">{b('Why Act Now', 'কেন এখন পদক্ষেপ নেবেন')}</Link></li>
              <li><Link href="/reality-check" className="hover:text-white transition-colors">{b('Reality Check 2026', 'বাস্তবতা যাচাই ২০২৬')}</Link></li>
              <li><Link href="/roadmap" className="hover:text-white transition-colors">{b('National Roadmap', 'জাতীয় রোডম্যাপ')}</Link></li>
              <li><Link href="/glossary" className="hover:text-white transition-colors">{b('AI Glossary', 'এআই শব্দকোষ')}</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 3: For You */}
          <div>
            <h3 className={`text-sm font-semibold text-white mb-4 ${font}`}>
              {b('For You', 'আপনার জন্য')}
            </h3>
            <ul className={`space-y-2.5 text-sm text-gray-300 ${font}`}>
              <li><Link href="/for-government" className="hover:text-white transition-colors">{b('For Government', 'সরকারের জন্য')}</Link></li>
              <li><Link href="/for-citizens" className="hover:text-white transition-colors">{b('For Citizens', 'নাগরিকদের জন্য')}</Link></li>
              <li><Link href="/for-partners" className="hover:text-white transition-colors">{b('For Dev Partners', 'উন্নয়ন অংশীদারদের জন্য')}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{b('About BangladeshAI', 'পরিচিতি')}</Link></li>
              <li><Link href="/about/emon-hossain" className="hover:text-white transition-colors">{b('Founder — Emon Hossain', 'প্রতিষ্ঠাতা — ইমন হোসেন')}</Link></li>
              <li><Link href="/about/independence" className="hover:text-white transition-colors">{b('Independence Statement', 'স্বাধীনতার বিবৃতি')}</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors">{b('Press Kit', 'প্রেস কিট')}</Link></li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h3 className={`text-sm font-semibold text-white mb-4 ${font}`}>
              {b('Connect', 'যোগাযোগ')}
            </h3>
            <ul className={`space-y-2.5 text-sm text-gray-300 mb-5 ${font}`}>
              <li><Link href="/contact" className="hover:text-white transition-colors">{b('Contact Us', 'যোগাযোগ করুন')}</Link></li>
              <li><Link href="/newsletter" className="hover:text-white transition-colors">{b('Newsletter', 'নিউজলেটার')}</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">{b('Downloads', 'ডাউনলোড')}</Link></li>
            </ul>
            <div className={`space-y-2 text-sm text-gray-300 ${font}`}>
              <a
                href="https://x.com/bangladeshai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Twitter size={15} className="flex-shrink-0" />
                Twitter / X
              </a>
              <a
                href="https://linkedin.com/company/bangladeshai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={15} className="flex-shrink-0" />
                LinkedIn
              </a>
              <a
                href="https://github.com/bangladeshai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github size={15} className="flex-shrink-0" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <BangladeshAIIcon size={32} />
            <div>
              <div className="text-sm font-bold text-white">
                <span>BangladeshAI.org</span>
                <span className="text-gray-500 font-normal mx-2">·</span>
                <span className="font-normal text-gray-400">Intelligence Builds Nations</span>
              </div>
              <div className="text-[11px] text-gray-500 font-bangla mt-0.5">মেধায় জাতি গড়</div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            © 2026 BangladeshAI.org · Independent AI Policy Research for Bangladesh
          </p>
        </div>
      </div>
    </footer>
  )
}
