'use client'

import Link from 'next/link'
import { ArrowRight, AlertTriangle, TrendingUp, CheckCircle, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import ShareButtons from '@/components/ShareButtons'

const pillars = [
  {
    label: 'Government Readiness',
    labelBn: 'সরকারি প্রস্তুতি',
    score: 58.52,
    max: 100,
    color: 'bg-primary-blue',
    status: 'moderate',
    desc: 'Policy framework, governance, and public sector digital capacity.',
    descBn: 'নীতি কাঠামো, গভর্ন্যান্স এবং পাবলিক সেক্টরের ডিজিটাল সক্ষমতা।',
  },
  {
    label: 'Technology Sector',
    labelBn: 'প্রযুক্তি খাত',
    score: 26.26,
    max: 100,
    color: 'bg-bd-red',
    status: 'critical',
    desc: 'Private sector AI capacity, R&D investment, talent, and infrastructure.',
    descBn: 'বেসরকারি খাতের এআই সক্ষমতা, গবেষণা বিনিয়োগ, প্রতিভা ও অবকাঠামো।',
  },
  {
    label: 'Data & Infrastructure',
    labelBn: 'ডেটা ও অবকাঠামো',
    score: 56.59,
    max: 100,
    color: 'bg-bd-teal',
    status: 'moderate',
    desc: 'Data availability, digital infrastructure, and connectivity.',
    descBn: 'ডেটার প্রাপ্যতা, ডিজিটাল অবকাঠামো এবং সংযোগ।',
  },
]

const comparison = [
  { country: 'Singapore', countryBn: 'সিঙ্গাপুর', score: 84.25 },
  { country: 'UAE', countryBn: 'সংযুক্ত আরব আমিরাত', score: 75.66 },
  { country: 'South Korea', countryBn: 'দক্ষিণ কোরিয়া', score: 75.24 },
  { country: 'India', countryBn: 'ভারত', score: 62.81 },
  { country: 'Vietnam', countryBn: 'ভিয়েতনাম', score: 61.42 },
  { country: 'Rwanda', countryBn: 'রুয়ান্ডা', score: 57.07 },
  { country: 'Indonesia', countryBn: 'ইন্দোনেশিয়া', score: 55.96 },
  { country: 'Bangladesh', countryBn: 'বাংলাদেশ', score: 47.12, highlight: true },
]

const domains = [
  { name: 'AI Strategy & Policy', nameBn: 'এআই কৌশল ও নীতি', assessed: 8, gaps: 5 },
  { name: 'Data Governance', nameBn: 'ডেটা গভর্ন্যান্স', assessed: 7, gaps: 5 },
  { name: 'Digital Infrastructure', nameBn: 'ডিজিটাল অবকাঠামো', assessed: 6, gaps: 3 },
  { name: 'AI Talent & Education', nameBn: 'এআই প্রতিভা ও শিক্ষা', assessed: 9, gaps: 6 },
  { name: 'Research & Innovation', nameBn: 'গবেষণা ও উদ্ভাবন', assessed: 5, gaps: 4 },
  { name: 'Private Sector Adoption', nameBn: 'বেসরকারি খাতের গ্রহণ', assessed: 7, gaps: 6 },
  { name: 'Regulatory Framework', nameBn: 'নিয়ন্ত্রণ কাঠামো', assessed: 6, gaps: 5 },
  { name: 'Compute & Cloud', nameBn: 'কম্পিউট ও ক্লাউড', assessed: 5, gaps: 4 },
  { name: 'Cybersecurity', nameBn: 'সাইবার নিরাপত্তা', assessed: 6, gaps: 4 },
  { name: 'Digital Identity', nameBn: 'ডিজিটাল পরিচয়', assessed: 5, gaps: 3 },
  { name: 'Bangla NLP & Language AI', nameBn: 'বাংলা NLP ও ভাষা AI', assessed: 7, gaps: 5 },
  { name: 'AI Ethics & Rights', nameBn: 'এআই নৈতিকতা ও অধিকার', assessed: 6, gaps: 5 },
  { name: 'Healthcare AI', nameBn: 'স্বাস্থ্যসেবায় AI', assessed: 5, gaps: 4 },
  { name: 'Agri & Climate AI', nameBn: 'কৃষি ও জলবায়ু AI', assessed: 6, gaps: 4 },
  { name: 'Financial Inclusion AI', nameBn: 'আর্থিক অন্তর্ভুক্তি AI', assessed: 5, gaps: 4 },
]

const preconditions = [
  {
    n: '01',
    title: 'National AI Strategy with funded mandates',
    titleBn: 'অর্থায়িত ম্যান্ডেট সহ জাতীয় এআই কৌশল',
    desc: 'Bangladesh has policy intent but no funded, time-bound AI strategy. Singapore spent $500M. UAE allocated $2B. Bangladesh has allocated near zero.',
    descBn: 'বাংলাদেশের নীতিগত উদ্দেশ্য আছে কিন্তু অর্থায়িত সময়-আবদ্ধ কৌশল নেই।',
  },
  {
    n: '02',
    title: 'Sovereign compute infrastructure',
    titleBn: 'সার্বভৌম কম্পিউট অবকাঠামো',
    desc: 'AI runs on GPUs. Bangladesh has near-zero GPU capacity. NDC\'s new GPU cloud is a promising first step — but 1 data center cannot serve 170M people.',
    descBn: 'AI চলে GPU-তে। বাংলাদেশের GPU সক্ষমতা প্রায় শূন্য।',
  },
  {
    n: '03',
    title: 'Open government data pipeline',
    titleBn: 'উন্মুক্ত সরকারি ডেটা পাইপলাইন',
    desc: 'AI needs data. Bangladesh\'s government data is fragmented, siloed, and largely inaccessible. No open data policy exists at scale.',
    descBn: 'AI-এর ডেটা দরকার। বাংলাদেশের সরকারি ডেটা বিচ্ছিন্ন এবং অ্যাক্সেসযোগ্য নয়।',
  },
  {
    n: '04',
    title: 'AI-literate workforce at scale',
    titleBn: 'বড় পরিসরে AI-সাক্ষর কর্মশক্তি',
    desc: '65M Bangladeshis are under 35 and online. This is our greatest asset — but only if they have AI skills. Current curriculum has near-zero AI content.',
    descBn: '৬.৫ কোটি বাংলাদেশি ৩৫ বছরের নিচে এবং অনলাইনে। কিন্তু AI দক্ষতা নেই।',
  },
  {
    n: '05',
    title: 'Independent AI governance body',
    titleBn: 'স্বাধীন AI গভর্ন্যান্স সংস্থা',
    desc: 'Without an independent regulatory body, Bangladesh will have no way to manage AI risks, set standards, or enforce accountability.',
    descBn: 'স্বাধীন নিয়ন্ত্রক সংস্থা ছাড়া AI ঝুঁকি পরিচালনা করা সম্ভব নয়।',
  },
]

const signals = [
  {
    icon: '🖥️',
    title: 'NDC GPU Cloud',
    desc: 'National Data Center launched Bangladesh\'s first GPU cloud infrastructure — a foundational step for domestic AI compute.',
    descBn: 'জাতীয় ডেটা সেন্টার প্রথম GPU ক্লাউড অবকাঠামো চালু করেছে।',
  },
  {
    icon: '🧠',
    title: 'Kagoj.ai',
    desc: 'Bangladesh\'s first dedicated Bangla language AI startup — proving local NLP capacity exists.',
    descBn: 'বাংলাদেশের প্রথম ডেডিকেটেড বাংলা ভাষা AI স্টার্টআপ।',
  },
  {
    icon: '💰',
    title: 'KOICA $96M Digital Program',
    desc: 'South Korea\'s $96M commitment to Bangladesh\'s digital transformation — largest single tech investment in years.',
    descBn: 'দক্ষিণ কোরিয়ার $৯৬ মিলিয়ন ডিজিটাল রূপান্তর বিনিয়োগ।',
  },
  {
    icon: '📄',
    title: 'BLP-2025: 69 NLP Papers',
    desc: 'The Bangladesh Language Processing workshop produced 69 research papers — showing academic momentum in Bangla AI.',
    descBn: 'BLP-2025 ওয়ার্কশপে ৬৯টি NLP গবেষণা পত্র — বাংলা AI-তে একাডেমিক গতি।',
  },
]

export default function RealityCheckClient() {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const bn = (en: string, b: string) => isBn ? b : en

  return (
    <div className="min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-bg-surface border-b border-border-color px-4 py-2">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-text-secondary">
          <Link href="/" className="hover:text-bd-green transition-colors">
            {bn('Home', 'হোম')}
          </Link>
          <ChevronRight size={12} />
          <span className="text-text-primary font-medium">
            {bn('Reality Check 2026', 'বাস্তবতা যাচাই ২০২৬')}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-bd-red/20 text-red-300 text-xs px-4 py-1.5 rounded-full mb-6 border border-bd-red/30">
            <AlertTriangle size={12} />
            {bn('Oxford Insights GGAI Index 2024', 'অক্সফোর্ড ইনসাইটস GGAI ইনডেক্স ২০২৪')}
          </div>
          <h1 className={`text-3xl md:text-5xl font-extrabold leading-tight mb-4 ${isBn ? 'font-bangla' : ''}`}>
            {bn('Bangladesh AI Reality Check 2026', 'বাংলাদেশ AI বাস্তবতা যাচাই ২০২৬')}
          </h1>
          <p className={`text-green-100/70 max-w-2xl mx-auto mb-10 ${isBn ? 'font-bangla' : ''}`}>
            {bn(
              'An independent, evidence-based assessment of where Bangladesh stands — and what it must do — in the global AI race.',
              'বৈশ্বিক AI প্রতিযোগিতায় বাংলাদেশ কোথায় দাঁড়িয়ে আছে এবং কী করতে হবে — একটি স্বাধীন, প্রমাণ-ভিত্তিক মূল্যায়ন।'
            )}
          </p>

          <p className="text-sm text-blue-300/60 italic mt-4">
            {bn(
              'Last updated: March 2026 · Data source: ',
              'সর্বশেষ আপডেট: মার্চ ২০২৬ · ডেটা উৎস: '
            )}
            <a href="https://oxfordinsights.com/ai-readiness/ai-readiness-index/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Oxford Insights GGAI 2024</a>
          </p>

          {/* Big Score */}
          <div className="inline-flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl px-12 py-8">
            <div className="text-7xl md:text-8xl font-extrabold text-white leading-none">
              47.12
            </div>
            <div className="text-green-200 text-lg font-medium mt-1">/ 100</div>
            <div className={`text-green-300/70 text-sm mt-2 ${isBn ? 'font-bangla' : 'tracking-widest uppercase'}`}>
              {bn('AI Readiness Score', 'AI প্রস্তুতি স্কোর')}
            </div>
            <div className={`text-xs text-green-200/50 mt-1 ${isBn ? 'font-bangla' : ''}`}>
              {bn('Rank 80 of 188 countries', '১৮৮ দেশের মধ্যে ৮০তম')}
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Scorecard */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-2 ${isBn ? 'font-bangla' : ''}`}>
            {bn('Three Pillar Breakdown', 'তিনটি স্তম্ভের বিশ্লেষণ')}
          </h2>
          <p className={`text-text-secondary mb-8 text-sm ${isBn ? 'font-bangla' : ''}`}>
            {bn('The overall 47.12 is an average of three domains. The differences reveal the real story.', 'সামগ্রিক ৪৭.১২ তিনটি ডোমেনের গড়। পার্থক্যগুলো আসল গল্প বলে।')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {pillars.map((p) => (
              <div
                key={p.label}
                className={`bg-bg-surface rounded-xl p-6 border-2 shadow-sm ${p.status === 'critical' ? 'border-bd-red' : 'border-border-color'}`}
              >
                {p.status === 'critical' && (
                  <div className="flex items-center gap-1.5 text-bd-red text-xs font-bold uppercase tracking-wide mb-3">
                    <AlertTriangle size={13} />
                    {bn('CRITICAL', 'সংকটজনক')}
                  </div>
                )}
                <div className={`text-4xl font-extrabold mb-1 ${p.status === 'critical' ? 'text-bd-red' : 'text-bd-green'}`}>
                  {p.score}
                </div>
                <div className={`text-xs text-text-secondary mb-0.5 ${isBn ? 'font-bangla' : ''}`}>/100</div>
                <div className={`font-bold text-text-primary text-base mb-2 ${isBn ? 'font-bangla' : ''}`}>
                  {isBn ? p.labelBn : p.label}
                </div>
                <div className="w-full bg-border-color rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full ${p.color}`}
                    style={{ width: `${p.score}%` }}
                  />
                </div>
                <p className={`text-xs text-text-secondary leading-relaxed ${isBn ? 'font-bangla' : ''}`}>
                  {isBn ? p.descBn : p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Critical Warning */}
          <div className="bg-bd-red/10 border-2 border-bd-red rounded-xl p-5 flex gap-4">
            <AlertTriangle className="text-bd-red flex-shrink-0 mt-0.5" size={22} />
            <div>
              <div className={`font-bold text-bd-red mb-1 ${isBn ? 'font-bangla' : ''}`}>
                {bn('Critical Warning: Technology Sector 26.26/100', 'সতর্কবার্তা: প্রযুক্তি খাত ২৬.২৬/১০০')}
              </div>
              <p className={`text-sm text-text-secondary leading-relaxed ${isBn ? 'font-bangla' : ''}`}>
                {bn(
                  'At 26.26, Bangladesh\'s Technology Sector score is catastrophically low. Government policies and data infrastructure cannot deliver AI outcomes without a private tech sector that can build, deploy, and maintain AI systems. This single number is the most important risk indicator for Bangladesh\'s AI future.',
                  '২৬.২৬ স্কোরে বাংলাদেশের প্রযুক্তি খাত বিপর্যয়করভাবে দুর্বল। সরকারি নীতি এবং ডেটা অবকাঠামো AI ফলাফল দিতে পারবে না যদি বেসরকারি প্রযুক্তি খাত AI সিস্টেম তৈরি, স্থাপন এবং রক্ষণাবেক্ষণ করতে না পারে।'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Country Comparison */}
      <section className="bg-bg-surface py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-2 ${isBn ? 'font-bangla' : ''}`}>
            {bn('Regional & Global Comparison', 'আঞ্চলিক ও বৈশ্বিক তুলনা')}
          </h2>
          <p className={`text-text-secondary text-sm mb-6 ${isBn ? 'font-bangla' : ''}`}>
            <a href="https://oxfordinsights.com/ai-readiness/ai-readiness-index/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
              {bn('Oxford Insights Government AI Readiness Index 2024', 'অক্সফোর্ড ইনসাইটস গভর্নমেন্ট AI রেডিনেস ইনডেক্স ২০২৪')}
            </a>
            {bn(' — 188 countries assessed', ' — ১৮৮টি দেশ মূল্যায়িত')}
          </p>
          <div className="rounded-xl border border-border-color overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="bg-bg-light border-b border-border-color">
                  <th className="text-left px-5 py-3 font-semibold text-text-secondary">
                    {bn('Country', 'দেশ')}
                  </th>
                  <th className="text-right px-5 py-3 font-semibold text-text-secondary">
                    {bn('AI Readiness Score', 'AI প্রস্তুতি স্কোর')}
                  </th>
                  <th className="px-4 py-3 w-44 hidden sm:table-cell"></th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.country}
                    className={`border-b border-border-color last:border-0 ${
                      row.highlight
                        ? 'bg-primary-navy'
                        : i % 2 === 0 ? 'bg-bg-surface' : 'bg-bg-light'
                    }`}
                  >
                    <td className={`px-5 py-4 font-semibold ${row.highlight ? 'text-white' : 'text-text-primary'}`}>
                      {row.highlight && <span className="inline-block w-2 h-2 rounded-full bg-bd-green mr-2 align-middle" />}
                      {isBn ? row.countryBn : row.country}
                      {row.highlight && (
                        <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-bd-green text-white ${isBn ? 'font-bangla' : ''}`}>
                          {bn('← You are here', '← আপনি এখানে')}
                        </span>
                      )}
                    </td>
                    <td className={`px-5 py-4 text-right font-bold text-lg ${row.highlight ? 'text-green-300' : 'text-bd-green'}`}>
                      {row.score.toFixed(2)}
                      <span className={`text-xs font-normal ml-1 ${row.highlight ? 'text-green-200/50' : 'text-text-secondary'}`}>/100</span>
                    </td>
                    <td className="px-4 py-4 hidden sm:table-cell">
                      <div className="w-full bg-border-color rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${row.highlight ? 'bg-bd-green' : 'bg-primary-blue'}`}
                          style={{ width: `${row.score}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
          <p className={`text-xs text-text-secondary mt-3 ${isBn ? 'font-bangla' : ''}`}>
            {bn('Gap to India-level (62.81): 15.69 points. Gap to Rwanda (57.07): 9.95 points.', 'ভারতের স্তরে (৬২.৮১) পৌঁছাতে ব্যবধান: ১৫.৬৯ পয়েন্ট। রুয়ান্ডার (৫৭.০৭) থেকে ব্যবধান: ৯.৯৫ পয়েন্ট।')}
          </p>
        </div>
      </section>

      {/* 92-Requirements Assessment */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-2 ${isBn ? 'font-bangla' : ''}`}>
            {bn('92-Requirements Assessment', '৯২-প্রয়োজনীয়তা মূল্যায়ন')}
          </h2>
          <p className={`text-text-secondary text-sm mb-8 ${isBn ? 'font-bangla' : ''}`}>
            {bn('Across 15 domains, we assessed 92 requirements for national AI readiness. 67 are currently unmet — a 72.8% gap rate.', '১৫টি ডোমেনে আমরা জাতীয় AI প্রস্তুতির জন্য ৯২টি প্রয়োজনীয়তা মূল্যায়ন করেছি। ৬৭টি এখনো পূরণ হয়নি — ৭২.৮% ফাঁকের হার।')}
          </p>

          {/* Summary Bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { v: '92', l: bn('Requirements Assessed', 'মূল্যায়িত প্রয়োজনীয়তা'), c: 'text-text-primary' },
              { v: '25', l: bn('Met or Partially Met', 'পূরণ বা আংশিক পূরণ'), c: 'text-bd-green' },
              { v: '67', l: bn('Critical Gaps', 'গুরুতর ফাঁক'), c: 'text-bd-red' },
            ].map((s) => (
              <div key={s.l} className="bg-bg-surface rounded-xl p-5 text-center border border-border-color">
                <div className={`text-3xl font-extrabold ${s.c}`}>{s.v}</div>
                <div className={`text-xs text-text-secondary mt-1 ${isBn ? 'font-bangla' : ''}`}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Domain Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {domains.map((d) => (
              <div key={d.name} className="bg-bg-surface rounded-lg p-4 border border-border-color">
                <div className={`text-sm font-semibold text-text-primary mb-2 ${isBn ? 'font-bangla' : ''}`}>
                  {isBn ? d.nameBn : d.name}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-border-color rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full bg-bd-green"
                      style={{ width: `${((d.assessed - d.gaps) / d.assessed) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-bd-red font-semibold whitespace-nowrap">
                    {d.gaps} {bn('gaps', 'ফাঁক')}
                  </span>
                </div>
                <div className={`text-xs text-text-secondary mt-1 ${isBn ? 'font-bangla' : ''}`}>
                  {d.assessed - d.gaps}/{d.assessed} {bn('met', 'পূরণ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consumer vs Producer */}
      <section className="bg-bg-surface py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-2 ${isBn ? 'font-bangla' : ''}`}>
            {bn('AI Consumer vs AI Producer', 'AI ভোক্তা বনাম AI উৎপাদক')}
          </h2>
          <p className={`text-text-secondary text-sm mb-8 ${isBn ? 'font-bangla' : ''}`}>
            {bn('The most important question Bangladesh must answer about its AI future.', 'বাংলাদেশকে তার AI ভবিষ্যত সম্পর্কে যে সবচেয়ে গুরুত্বপূর্ণ প্রশ্নের উত্তর দিতে হবে।')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-light rounded-xl p-6 border-2 border-border-color">
              <div className="text-2xl mb-3">📥</div>
              <h3 className={`text-lg font-bold text-text-primary mb-3 ${isBn ? 'font-bangla' : ''}`}>
                {bn('AI Consumer (Current Path)', 'AI ভোক্তা (বর্তমান পথ)')}
              </h3>
              <ul className={`space-y-2 text-sm text-text-secondary ${isBn ? 'font-bangla' : ''}`}>
                <li>• {bn('Uses AI tools built by other countries', 'অন্য দেশের তৈরি AI টুল ব্যবহার করে')}</li>
                <li>• {bn('No control over the AI that governs decisions', 'সিদ্ধান্ত নিয়ন্ত্রণকারী AI-এর উপর কোনো নিয়ন্ত্রণ নেই')}</li>
                <li>• {bn('Data leaves the country', 'ডেটা দেশ ছেড়ে চলে যায়')}</li>
                <li>• {bn('Bangla language is an afterthought', 'বাংলা ভাষা উপেক্ষিত')}</li>
                <li>• {bn('Tech rent paid to foreign companies forever', 'বিদেশী কোম্পানিকে চিরকাল প্রযুক্তি ভাড়া')}</li>
              </ul>
            </div>
            <div className="bg-bd-sage rounded-xl p-6 border-2 border-bd-green">
              <div className="text-2xl mb-3">🏭</div>
              <h3 className={`text-lg font-bold text-text-primary mb-3 ${isBn ? 'font-bangla' : ''}`}>
                {bn('AI Producer (Target Path)', 'AI উৎপাদক (লক্ষ্য পথ)')}
              </h3>
              <ul className={`space-y-2 text-sm text-text-secondary ${isBn ? 'font-bangla' : ''}`}>
                <li>• {bn('Builds AI tools for Bangladesh and global Bangla speakers', 'বাংলাদেশ ও বৈশ্বিক বাংলাভাষীদের জন্য AI টুল তৈরি করে')}</li>
                <li>• {bn('Controls its own AI governance stack', 'নিজস্ব AI গভর্ন্যান্স স্ট্যাক নিয়ন্ত্রণ করে')}</li>
                <li>• {bn('Sovereign data stays in-country', 'সার্বভৌম ডেটা দেশেই থাকে')}</li>
                <li>• {bn('Bangla is a first-class AI language', 'বাংলা প্রথম শ্রেণীর AI ভাষা')}</li>
                <li>• {bn('Tech exports, not just tech imports', 'শুধু আমদানি নয়, প্রযুক্তি রপ্তানি')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Preconditions */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-2 ${isBn ? 'font-bangla' : ''}`}>
            {bn('5 Preconditions Before AI Can Scale Nationally', 'জাতীয়ভাবে AI স্কেল হওয়ার আগে ৫টি পূর্বশর্ত')}
          </h2>
          <p className={`text-text-secondary text-sm mb-8 ${isBn ? 'font-bangla' : ''}`}>
            {bn('These are not recommendations. These are non-negotiable prerequisites.', 'এগুলো শুধু সুপারিশ নয়। এগুলো অপরিহার্য পূর্বশর্ত।')}
          </p>
          <div className="space-y-4">
            {preconditions.map((p) => (
              <div key={p.n} className="bg-bg-surface rounded-xl p-5 border border-border-color flex gap-4">
                <div className="text-2xl font-extrabold text-bd-green/30 font-mono flex-shrink-0 pt-0.5">{p.n}</div>
                <div>
                  <h3 className={`font-bold text-text-primary mb-1 ${isBn ? 'font-bangla' : ''}`}>
                    {isBn ? p.titleBn : p.title}
                  </h3>
                  <p className={`text-sm text-text-secondary leading-relaxed ${isBn ? 'font-bangla' : ''}`}>
                    {isBn ? p.descBn : p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positive Signals */}
      <section className="bg-bg-surface py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-bd-green" size={22} />
            <h2 className={`text-2xl font-bold text-text-primary ${isBn ? 'font-bangla' : ''}`}>
              {bn('Recent Positive Signals', 'সাম্প্রতিক ইতিবাচক সংকেত')}
            </h2>
          </div>
          <p className={`text-text-secondary text-sm mb-8 ${isBn ? 'font-bangla' : ''}`}>
            {bn('Evidence that momentum is building — even if from a very low base.', 'প্রমাণ যে গতি তৈরি হচ্ছে — যদিও অনেক নিচু ভিত্তি থেকে।')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {signals.map((s) => (
              <div key={s.title} className="bg-bg-light rounded-xl p-5 border border-border-color flex gap-4">
                <div className="text-3xl flex-shrink-0">{s.icon}</div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">{s.title}</h3>
                  <p className={`text-sm text-text-secondary leading-relaxed ${isBn ? 'font-bangla' : ''}`}>
                    {isBn ? s.descBn : s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Year Target */}
      <section className="bg-primary-navy py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-green-200 text-xs px-4 py-1.5 rounded-full mb-6">
            <CheckCircle size={12} />
            {bn('7-Year National Target', '৭ বছরের জাতীয় লক্ষ্য')}
          </div>
          <h2 className={`text-2xl md:text-3xl font-extrabold text-white mb-4 ${isBn ? 'font-bangla' : ''}`}>
            {bn('Reach 65+ by 2033 — India-Level Today', '২০৩৩ সালের মধ্যে ৬৫+ স্কোর — আজকের ভারতের স্তর')}
          </h2>
          <p className={`text-green-100/70 max-w-2xl mx-auto mb-8 text-sm ${isBn ? 'font-bangla' : ''}`}>
            {bn(
              'India is at 62.81 today. Bangladesh needs to close an 18-point gap in 7 years. That requires sustained policy action, private investment, and public education — simultaneously.',
              'ভারত আজ ৬২.৮১ স্কোরে আছে। বাংলাদেশকে ৭ বছরে ১৮ পয়েন্টের ব্যবধান কমাতে হবে। এর জন্য দরকার টেকসই নীতি পদক্ষেপ, বেসরকারি বিনিয়োগ এবং জনশিক্ষা — একই সাথে।'
            )}
          </p>

          {/* Progress tracker */}
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-8">
            {[
              { year: '2026', score: '47.12', label: bn('Today', 'আজ') },
              { year: '2029', score: '55+', label: bn('Midpoint', 'মধ্যবিন্দু') },
              { year: '2033', score: '65+', label: bn('Target', 'লক্ষ্য') },
            ].map((m) => (
              <div key={m.year} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                <div className="text-xl font-extrabold text-white">{m.score}</div>
                <div className="text-xs text-green-200/70 mt-1">{m.year}</div>
                <div className={`text-xs text-green-300/50 mt-0.5 ${isBn ? 'font-bangla' : ''}`}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-light py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 ${isBn ? 'font-bangla' : ''}`}>
            {bn('Read the Full Research', 'পূর্ণ গবেষণা পড়ুন')}
          </h2>
          <p className={`text-text-secondary mb-6 text-sm ${isBn ? 'font-bangla' : ''}`}>
            {bn(
              'The complete Bangladesh AI Readiness Assessment 2026 — with methodology, data sources, and policy recommendations.',
              'সম্পূর্ণ বাংলাদেশ AI প্রস্তুতি মূল্যায়ন ২০২৬ — পদ্ধতি, ডেটা উৎস এবং নীতি সুপারিশ সহ।'
            )}
          </p>
          <Link
            href="/research/ai-readiness-2026"
            className="inline-flex items-center gap-2 bg-bd-green text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
          >
            {bn('Read Full Research', 'পূর্ণ গবেষণা পড়ুন')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-bg-surface py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <ShareButtons title={bn('Bangladesh AI Reality Check 2026', 'বাংলাদেশ AI বাস্তবতা যাচাই ২০২৬')} path="/reality-check" />
        </div>
      </section>
    </div>
  )
}
