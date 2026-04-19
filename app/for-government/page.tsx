'use client'

import Link from 'next/link'
import { ChevronRight, Download, Mail, Shield, Database, Brain, Cpu, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const smartBangladeshPillars = [
  { icon: Cpu, en: { title: 'Intelligent Government', desc: 'AI-powered public services: automated licensing, tax filing, permit processing. Target: 80% of government services online by 2028.' }, bn: { title: 'বুদ্ধিমান সরকার', desc: 'AI-চালিত পাবলিক সেবা: স্বয়ংক্রিয় লাইসেন্সিং, কর দাখিল, পারমিট প্রক্রিয়াকরণ।' } },
  { icon: Brain, en: { title: 'Smart Economy', desc: 'AI integration in RMG, agriculture, and fintech to boost productivity and export competitiveness.' }, bn: { title: 'স্মার্ট অর্থনীতি', desc: 'উৎপাদনশীলতা এবং রপ্তানি প্রতিযোগিতামূলকতা বাড়াতে RMG, কৃষি এবং ফিনটেকে AI সংহতকরণ।' } },
  { icon: Globe, en: { title: 'Smart Society', desc: 'Universal digital literacy, AI education in schools, bilingual AI tools for the rural majority.' }, bn: { title: 'স্মার্ট সমাজ', desc: 'সর্বজনীন ডিজিটাল সাক্ষরতা, স্কুলে AI শিক্ষা, গ্রামীণ সংখ্যাগরিষ্ঠের জন্য দ্বিভাষিক AI সরঞ্জাম।' } },
  { icon: Database, en: { title: 'Smart Infrastructure', desc: 'Sovereign data centers, 5G rollout, national AI compute cluster. End dependence on foreign infrastructure.' }, bn: { title: 'স্মার্ট অবকাঠামো', desc: 'সার্বভৌম ডেটা সেন্টার, 5G রোলআউট, জাতীয় AI কম্পিউট ক্লাস্টার। বিদেশি অবকাঠামোর উপর নির্ভরতা শেষ করুন।' } },
  { icon: Shield, en: { title: 'Smart Governance', desc: 'AI-enabled anti-corruption tools, transparent procurement, evidence-based policymaking across all 20 ministries.' }, bn: { title: 'স্মার্ট গভর্ন্যান্স', desc: 'AI-সক্ষম দুর্নীতি বিরোধী সরঞ্জাম, স্বচ্ছ সংগ্রহ, সমস্ত মন্ত্রণালয় জুড়ে প্রমাণ-ভিত্তিক নীতি।' } },
]

const ministryTable = [
  { ministry: 'Finance', ministryBn: 'অর্থ মন্ত্রণালয়', useCase: 'AI-powered tax compliance & fraud detection', useCaseBn: 'AI-চালিত কর সম্মতি ও জালিয়াতি শনাক্তকরণ', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Health', ministryBn: 'স্বাস্থ্য মন্ত্রণালয়', useCase: 'Disease surveillance & hospital resource optimization', useCaseBn: 'রোগ নজরদারি ও হাসপাতাল সম্পদ অপ্টিমাইজেশন', impact: 'Critical', impactBn: 'গুরুতর' },
  { ministry: 'Agriculture', ministryBn: 'কৃষি মন্ত্রণালয়', useCase: 'Crop yield prediction & pest early-warning systems', useCaseBn: 'ফসল ফলন পূর্বাভাস ও কীটপতঙ্গ প্রাথমিক সতর্কতা', impact: 'Critical', impactBn: 'গুরুতর' },
  { ministry: 'Education', ministryBn: 'শিক্ষা মন্ত্রণালয়', useCase: 'Personalized learning & dropout prediction', useCaseBn: 'ব্যক্তিগতকৃত শিক্ষা ও ঝরে পড়ার পূর্বাভাস', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Commerce', ministryBn: 'বাণিজ্য মন্ত্রণালয়', useCase: 'Export market intelligence & trade facilitation AI', useCaseBn: 'রপ্তানি বাজার গোয়েন্দা ও বাণিজ্য সুবিধা AI', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Home Affairs', ministryBn: 'স্বরাষ্ট্র মন্ত্রণালয়', useCase: 'Predictive crime analytics & border management', useCaseBn: 'পূর্বাভাসমূলক অপরাধ বিশ্লেষণ ও সীমান্ত ব্যবস্থাপনা', impact: 'Medium', impactBn: 'মধ্যম' },
  { ministry: 'Land', ministryBn: 'ভূমি মন্ত্রণালয়', useCase: 'Automated land record digitization & dispute reduction', useCaseBn: 'স্বয়ংক্রিয় ভূমি রেকর্ড ডিজিটাইজেশন ও বিরোধ হ্রাস', impact: 'Critical', impactBn: 'গুরুতর' },
  { ministry: 'Disaster Management', ministryBn: 'দুর্যোগ ব্যবস্থাপনা', useCase: 'Cyclone/flood prediction & evacuation optimization', useCaseBn: 'ঘূর্ণিঝড়/বন্যা পূর্বাভাস ও সরিয়ে নেওয়া অপ্টিমাইজেশন', impact: 'Critical', impactBn: 'গুরুতর' },
  { ministry: 'ICT Division', ministryBn: 'আইসিটি বিভাগ', useCase: 'National AI policy coordination & digital ID expansion', useCaseBn: 'জাতীয় AI নীতি সমন্বয় ও ডিজিটাল আইডি সম্প্রসারণ', impact: 'Critical', impactBn: 'গুরুতর' },
  { ministry: 'Planning', ministryBn: 'পরিকল্পনা মন্ত্রণালয়', useCase: 'GDP modeling & development impact simulation', useCaseBn: 'জিডিপি মডেলিং ও উন্নয়ন প্রভাব সিমুলেশন', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Labour', ministryBn: 'শ্রম মন্ত্রণালয়', useCase: 'Worker reskilling AI & labour market forecasting', useCaseBn: 'শ্রমিক পুনর্দক্ষতা AI ও শ্রম বাজার পূর্বাভাস', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Foreign Affairs', ministryBn: 'পররাষ্ট্র মন্ত্রণালয়', useCase: 'AI-translated diplomatic communications in 40+ languages', useCaseBn: '৪০+ ভাষায় AI-অনূদিত কূটনৈতিক যোগাযোগ', impact: 'Medium', impactBn: 'মধ্যম' },
  { ministry: 'Energy', ministryBn: 'জ্বালানি মন্ত্রণালয়', useCase: 'Smart grid demand forecasting & renewable optimization', useCaseBn: 'স্মার্ট গ্রিড চাহিদা পূর্বাভাস ও নবায়নযোগ্য অপ্টিমাইজেশন', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Water Resources', ministryBn: 'পানি সম্পদ', useCase: 'River flood modeling & water allocation AI', useCaseBn: 'নদী বন্যা মডেলিং ও পানি বরাদ্দ AI', impact: 'Critical', impactBn: 'গুরুতর' },
  { ministry: 'Women & Children', ministryBn: 'মহিলা ও শিশু বিষয়ক', useCase: 'Gender-disaggregated data AI & child protection alerts', useCaseBn: 'লিঙ্গ-বিচ্ছিন্ন ডেটা AI ও শিশু সুরক্ষা সতর্কতা', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Social Welfare', ministryBn: 'সমাজকল্যাণ', useCase: 'Targeted cash transfer eligibility & fraud prevention', useCaseBn: 'লক্ষ্যমাত্রা নগদ স্থানান্তর যোগ্যতা ও জালিয়াতি প্রতিরোধ', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Fisheries', ministryBn: 'মৎস্য ও প্রাণিসম্পদ', useCase: 'Shrimp disease prediction & fishery stock assessment', useCaseBn: 'চিংড়ি রোগ পূর্বাভাস ও মৎস্যভাণ্ডার মূল্যায়ন', impact: 'Medium', impactBn: 'মধ্যম' },
  { ministry: 'Textiles & RMG', ministryBn: 'বস্ত্র ও পোশাক', useCase: 'Compliance monitoring AI & buyer due-diligence automation', useCaseBn: 'সম্মতি পর্যবেক্ষণ AI ও ক্রেতা যথাযথ পরিশ্রম অটোমেশন', impact: 'Critical', impactBn: 'গুরুতর' },
  { ministry: 'Posts & Telecom', ministryBn: 'ডাক ও টেলিযোগাযোগ', useCase: 'Rural connectivity AI & telecom fraud detection', useCaseBn: 'গ্রামীণ সংযোগ AI ও টেলিকম জালিয়াতি শনাক্তকরণ', impact: 'High', impactBn: 'উচ্চ' },
  { ministry: 'Environment', ministryBn: 'পরিবেশ ও বন', useCase: 'Air quality forecasting & deforestation satellite monitoring', useCaseBn: 'বায়ু মান পূর্বাভাস ও বন উজাড় স্যাটেলাইট পর্যবেক্ষণ', impact: 'High', impactBn: 'উচ্চ' },
]

const procurementSteps = [
  { step: '01', en: { title: 'Define the problem, not the solution', desc: 'Write RFPs that specify the outcome you need — not the AI technology. This allows vendors to propose the most appropriate solution.' }, bn: { title: 'সমাধান নয়, সমস্যা সংজ্ঞায়িত করুন', desc: 'RFP লিখুন যা আপনার প্রয়োজনীয় ফলাফল নির্দিষ্ট করে — AI প্রযুক্তি নয়।' } },
  { step: '02', en: { title: 'Require explainability for high-stakes decisions', desc: 'Any AI system making decisions about citizens (loans, benefits, policing) must be able to explain its reasoning in plain language.' }, bn: { title: 'উচ্চ-ঝুঁকির সিদ্ধান্তের জন্য ব্যাখ্যাযোগ্যতা প্রয়োজন', desc: 'নাগরিকদের সম্পর্কে সিদ্ধান্ত নেওয়া যেকোনো AI সিস্টেমকে সাধারণ ভাষায় তার যুক্তি ব্যাখ্যা করতে সক্ষম হতে হবে।' } },
  { step: '03', en: { title: 'Mandate data sovereignty clauses', desc: 'Bangladeshi citizen data must be stored in Bangladesh. Require contractual commitments to data localisation and government access.' }, bn: { title: 'ডেটা সার্বভৌমত্ব ধারা বাধ্যতামূলক করুন', desc: 'বাংলাদেশি নাগরিক ডেটা বাংলাদেশে সংরক্ষণ করতে হবে। ডেটা স্থানীয়করণে চুক্তিগত প্রতিশ্রুতি প্রয়োজন।' } },
  { step: '04', en: { title: 'Pilot before national rollout', desc: 'Every government AI system should be piloted with 5,000 users for 90 days before nationwide deployment. Measure accuracy, bias, and accessibility.' }, bn: { title: 'জাতীয় রোলআউটের আগে পাইলট করুন', desc: 'প্রতিটি সরকারি AI সিস্টেম জাতীয় স্থাপনার আগে ৯০ দিনের জন্য ৫,০০০ ব্যবহারকারীর সাথে পাইলট করা উচিত।' } },
]

const impactColors: Record<string, string> = {
  Critical: 'bg-bd-red/10 text-bd-red font-semibold',
  High: 'bg-primary-blue/10 text-primary-blue font-semibold',
  Medium: 'bg-bd-green/10 text-bd-green font-semibold',
}

export default function ForGovernmentPage() {
  const { language } = useLanguage()
  const isBn = language === 'bn'
  const b = (en: string, bn: string) => isBn ? bn : en
  const font = isBn ? 'font-bangla' : ''

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-bg-light border-b border-border-color px-4 py-2">
        <div className="max-w-6xl mx-auto flex items-center gap-1 text-xs text-text-secondary">
          <a href="/" className="hover:text-primary-blue transition-colors">{b('Home', 'হোম')}</a>
          <ChevronRight size={12} />
          <span className="text-text-primary font-medium">{b('For Government', 'সরকারের জন্য')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-bd-green/20 border border-bd-green/40 rounded-full text-bd-green text-xs font-semibold uppercase tracking-wider mb-6">
            {b('For Government Officials', 'সরকারি কর্মকর্তাদের জন্য')}
          </div>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${font}`}>
            {b('AI in Bangladesh Government', 'বাংলাদেশ সরকারে AI')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto ${font}`}>
            {b(
              'Evidence-based guidance for Bangladesh\'s 20 ministries on integrating AI into public service delivery, governance, and national strategy.',
              'সরকারি সেবা প্রদান, গভর্ন্যান্স এবং জাতীয় কৌশলে AI একীভূত করার জন্য বাংলাদেশের ২০টি মন্ত্রণালয়ের জন্য প্রমাণ-ভিত্তিক নির্দেশিকা।'
            )}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/resources" className="flex items-center gap-2 bg-bd-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <Download size={16} />
              {b('Download Executive Brief PDF', 'এক্সিকিউটিভ ব্রিফ PDF ডাউনলোড করুন')}
            </a>
            <a href="mailto:emon@emonhossain.pro" className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              <Mail size={16} />
              {b('Request a Briefing', 'ব্রিফিং অনুরোধ করুন')}
            </a>
          </div>
        </div>
      </section>

      <div className="bg-bg-light py-2 px-4 text-center">
        <p className={`text-sm text-text-secondary italic ${font}`}>
          {b('Last updated: March 2026 · Source data: ', 'সর্বশেষ আপডেট: মার্চ ২০২৬ · উৎস ডেটা: ')}
            <a href="https://oxfordinsights.com/ai-readiness/ai-readiness-index/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">Oxford Insights GGAI 2024</a>
            {b(' · Bangladesh AI Policy V2.0 Draft', ' · Bangladesh AI Policy V2.0 Draft')}
        </p>
      </div>

      {/* Smart Bangladesh 5 Pillars */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 text-center ${font}`}>
            {b('Smart Bangladesh 2041: Five AI Pillars', 'স্মার্ট বাংলাদেশ ২০৪১: পাঁচটি AI স্তম্ভ')}
          </h2>
          <p className={`text-text-secondary text-center mb-10 max-w-2xl mx-auto text-sm ${font}`}>
            {b('Bangladesh\'s Smart Bangladesh Vision 2041 requires AI to be embedded in all five pillars of national development.', 'বাংলাদেশের স্মার্ট বাংলাদেশ ভিশন ২০৪১-এর জন্য জাতীয় উন্নয়নের পাঁচটি স্তম্ভে AI সংযুক্ত করতে হবে।')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {smartBangladeshPillars.map((pillar, i) => {
              const Icon = pillar.icon
              const content = isBn ? pillar.bn : pillar.en
              return (
                <div key={i} className="bg-bg-light rounded-xl p-6 border border-border-color">
                  <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary-blue" />
                  </div>
                  <h3 className={`text-base font-bold text-text-primary mb-2 ${font}`}>{content.title}</h3>
                  <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ministry Table */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 ${font}`}>
            {b('20-Ministry AI Use Case Matrix', '২০-মন্ত্রণালয় AI ব্যবহারের ক্ষেত্র ম্যাট্রিক্স')}
          </h2>
          <p className={`text-text-secondary mb-8 text-sm ${font}`}>
            {b('The highest-impact AI application for each of Bangladesh\'s 20 key ministries, assessed by potential impact on citizens.', 'বাংলাদেশের ২০টি মূল মন্ত্রণালয়ের প্রতিটির জন্য সর্বোচ্চ-প্রভাব AI অ্যাপ্লিকেশন।')}
          </p>
          <div className="bg-bg-surface rounded-xl border border-border-color overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-primary-navy text-white">
                    <th className={`text-left px-5 py-3 font-semibold ${font}`}>{b('Ministry', 'মন্ত্রণালয়')}</th>
                    <th className={`text-left px-5 py-3 font-semibold ${font}`}>{b('Top AI Use Case', 'শীর্ষ AI ব্যবহারের ক্ষেত্র')}</th>
                    <th className={`text-left px-5 py-3 font-semibold ${font}`}>{b('Impact', 'প্রভাব')}</th>
                  </tr>
                </thead>
                <tbody>
                  {ministryTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-bg-surface' : 'bg-bg-light'}>
                      <td className={`px-5 py-3 font-medium text-text-primary ${font}`}>{isBn ? row.ministryBn : row.ministry}</td>
                      <td className={`px-5 py-3 text-text-secondary ${font}`}>{isBn ? row.useCaseBn : row.useCase}</td>
                      <td className="px-5 py-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs ${impactColors[row.impact]} ${font}`}>
                          {isBn ? row.impactBn : row.impact}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Guidance */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 ${font}`}>
            {b('How to Buy AI Safely', 'নিরাপদে AI কিনবেন কীভাবে')}
          </h2>
          <p className={`text-text-secondary mb-8 text-sm ${font}`}>
            {b('Four principles for responsible AI procurement in the Bangladesh government context.', 'বাংলাদেশ সরকারের প্রেক্ষাপটে দায়িত্বশীল AI সংগ্রহের চারটি নীতি।')}
          </p>
          <div className="space-y-4">
            {procurementSteps.map((s) => {
              const content = isBn ? s.bn : s.en
              return (
                <div key={s.step} className="flex gap-5 bg-bg-light rounded-xl p-5 border border-border-color">
                  <span className="text-2xl font-extrabold text-primary-blue/30 flex-shrink-0">{s.step}</span>
                  <div>
                    <h3 className={`font-bold text-text-primary mb-1 ${font}`}>{content.title}</h3>
                    <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Policy Framework */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-8 ${font}`}>
            {b('Current Policy Framework', 'বর্তমান নীতি কাঠামো')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                en: { title: 'National AI Policy V2.0 (Draft)', desc: 'Bangladesh\'s AI policy framework is under revision. The current draft covers AI governance, data protection, and public sector AI adoption — but lacks funding mandates and enforcement mechanisms.' },
                bn: { title: 'জাতীয় AI নীতি V2.0 (খসড়া)', desc: 'বাংলাদেশের AI নীতি কাঠামো সংশোধন চলছে। বর্তমান খসড়া AI গভর্ন্যান্স, ডেটা সুরক্ষা এবং পাবলিক সেক্টর AI গ্রহণ কভার করে।' },
                status: 'Draft', statusBn: 'খসড়া', color: 'border-l-4 border-yellow-400'
              },
              {
                en: { title: 'Data Protection Ordinance 2023', desc: 'Bangladesh\'s first data protection law establishes basic rights over personal data. However, it lacks AI-specific provisions, algorithmic transparency requirements, and an independent data protection authority.' },
                bn: { title: 'ডেটা সুরক্ষা অধ্যাদেশ ২০২৩', desc: 'বাংলাদেশের প্রথম ডেটা সুরক্ষা আইন ব্যক্তিগত ডেটার উপর মৌলিক অধিকার প্রতিষ্ঠা করে।' },
                status: 'Active', statusBn: 'সক্রিয়', color: 'border-l-4 border-bd-green'
              },
              {
                en: { title: 'Digital Security Act 2018 (Reformed)', desc: 'The DSA has been reformed into the Cyber Security Act. AI-generated content, deepfakes, and algorithmic misinformation require explicit provisions in this framework.' },
                bn: { title: 'ডিজিটাল নিরাপত্তা আইন ২০১৮ (সংস্কারিত)', desc: 'DSA সাইবার নিরাপত্তা আইনে সংস্কার করা হয়েছে। AI-উৎপন্ন কন্টেন্ট এবং ডিপফেকের জন্য স্পষ্ট বিধান প্রয়োজন।' },
                status: 'Amended', statusBn: 'সংশোধিত', color: 'border-l-4 border-primary-blue'
              },
              {
                en: { title: 'Anti-Corruption AI Initiative', desc: 'AI can detect procurement fraud patterns, flag suspicious transactions, and audit government spending. Bangladesh\'s ACC has expressed interest in AI-powered detection tools — this requires a dedicated regulatory sandbox.' },
                bn: { title: 'দুর্নীতি বিরোধী AI উদ্যোগ', desc: 'AI সংগ্রহ জালিয়াতির নিদর্শন শনাক্ত করতে, সন্দেহজনক লেনদেন চিহ্নিত করতে এবং সরকারি ব্যয় নিরীক্ষা করতে পারে।' },
                status: 'Proposed', statusBn: 'প্রস্তাবিত', color: 'border-l-4 border-bd-red'
              },
            ].map((item, i) => {
              const content = isBn ? item.bn : item.en
              return (
                <div key={i} className={`bg-bg-surface rounded-xl p-6 shadow-sm ${item.color}`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`font-bold text-text-primary text-sm leading-tight ${font}`}>{content.title}</h3>
                    <span className={`ml-2 flex-shrink-0 px-2 py-0.5 text-xs rounded-full bg-bg-light text-text-secondary ${font}`}>
                      {isBn ? item.statusBn : item.status}
                    </span>
                  </div>
                  <p className={`text-text-secondary text-sm leading-relaxed ${font}`}>{content.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-4 ${font}`}>
            {b('The Cost of Foreign AI Dependence', 'বিদেশী AI নির্ভরতার খরচ')}
          </h2>
          <p className={`text-text-secondary text-sm leading-relaxed mb-6 ${font}`}>
            {b(
              'Bangladesh currently spends an estimated $40-80 million annually on foreign AI subscriptions: ChatGPT, Midjourney, GitHub Copilot, and dozens of enterprise AI tools. This money leaves Bangladesh and widens the AI capability gap.',
              'বাংলাদেশ বর্তমানে বিদেশী AI সাবস্ক্রিপশনে বার্ষিক আনুমানিক $৪০-৮০ মিলিয়ন ব্যয় করে: ChatGPT, Midjourney, GitHub Copilot এবং ডজনখানেক এন্টারপ্রাইজ AI টুল। এই অর্থ বাংলাদেশ ছেড়ে যায় এবং AI সক্ষমতার ব্যবধান বাড়ায়।'
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-bd-red/5 border border-bd-red/20 rounded-xl p-5">
              <p className={`font-bold text-bd-red text-sm mb-1 ${font}`}>{b('Foreign Subscriptions', 'বিদেশী সাবস্ক্রিপশন')}</p>
              <p className="text-2xl font-extrabold text-text-primary">$40-80M<span className="text-sm font-normal text-text-secondary"> / {b('year', 'বছর')}</span></p>
              <p className={`text-xs text-text-secondary mt-1 ${font}`}>{b('= $400-800M over 10 years', '= ১০ বছরে $৪০০-৮০০ মিলিয়ন')}</p>
            </div>
            <div className="bg-bd-green/5 border border-bd-green/20 rounded-xl p-5">
              <p className={`font-bold text-bd-green text-sm mb-1 ${font}`}>{b('Sovereign AI Infrastructure', 'সার্বভৌম AI অবকাঠামো')}</p>
              <p className="text-2xl font-extrabold text-text-primary">$50-100M<span className="text-sm font-normal text-text-secondary"> {b('one-time', 'একবার')}</span></p>
              <p className={`text-xs text-text-secondary mt-1 ${font}`}>{b('+ $5-10M annual maintenance', '+ $৫-১০ মিলিয়ন বার্ষিক রক্ষণাবেক্ষণ')}</p>
            </div>
          </div>
          <p className={`text-sm text-text-secondary italic ${font}`}>
            {b('Building sovereign AI is not idealism — it is import substitution.', 'সার্বভৌম AI নির্মাণ আদর্শবাদ নয় — এটি আমদানি প্রতিস্থাপন।')}
          </p>
        </div>
      </section>

      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-text-primary mb-6 ${font}`}>
            {b('Pilot ROI: What the Evidence Shows', 'পাইলট ROI: প্রমাণ কী দেখায়')}
          </h2>
          <div className="space-y-5">
            <div className="bg-bg-surface rounded-xl p-6 border border-border-color">
              <h3 className={`font-bold text-text-primary mb-2 ${font}`}>{b('NBR Tax Compliance AI Pilot', 'NBR কর সম্মতি AI পাইলট')}</h3>
              <p className={`text-text-secondary text-sm leading-relaxed mb-3 ${font}`}>
                {b(
                  '500 high-risk corporate tax cases identified in the first 90-day deployment. Estimated revenue recovery: 50-100x the system cost. Method: Anomaly detection on top 100,000 corporate filers.',
                  'প্রথম ৯০ দিনের মোতায়েনে ৫০০টি উচ্চ-ঝুঁকির কর্পোরেট কর মামলা চিহ্নিত। আনুমানিক রাজস্ব পুনরুদ্ধার: সিস্টেম খরচের ৫০-১০০ গুণ। পদ্ধতি: শীর্ষ ১,০০,০০০ কর্পোরেট ফাইলারের উপর অসঙ্গতি সনাক্তকরণ।'
                )}
              </p>
              <span className="inline-block bg-bd-green/10 text-bd-green text-xs font-semibold px-3 py-1 rounded-full">{b('50-100x ROI', '৫০-১০০ গুণ ROI')}</span>
            </div>
            <div className="bg-bg-surface rounded-xl p-6 border border-border-color">
              <h3 className={`font-bold text-text-primary mb-2 ${font}`}>{b('Social Protection Beneficiary Verification AI', 'সামাজিক সুরক্ষা সুবিধাভোগী যাচাই AI')}</h3>
              <p className={`text-text-secondary text-sm leading-relaxed mb-3 ${font}`}>
                {b(
                  'Pilot in 3 districts identified approximately 15% ghost beneficiaries — recipients who were dead, duplicate-registered, or had moved. Projected savings at national scale: BDT 800 crore+ annually.',
                  '৩টি জেলায় পাইলট আনুমানিক ১৫% ভূত সুবিধাভোগী চিহ্নিত করেছে — যারা মৃত, দ্বৈত-নিবন্ধিত বা স্থানান্তরিত। জাতীয় পরিসরে প্রাক্কলিত সঞ্চয়: বার্ষিক BDT ৮০০ কোটি+।'
                )}
              </p>
              <span className="inline-block bg-primary-blue/10 text-primary-blue text-xs font-semibold px-3 py-1 rounded-full">{b('BDT 800 Cr+ savings', 'BDT ৮০০ কোটি+ সঞ্চয়')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-navy py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className={`text-2xl font-bold mb-4 ${font}`}>{b('Access Full Policy Research', 'সম্পূর্ণ নীতি গবেষণা অ্যাক্সেস করুন')}</h2>
          <p className={`text-blue-200 mb-8 max-w-xl mx-auto text-sm ${font}`}>
            {b('Download the complete Bangladesh AI Readiness Assessment with all 67 identified gaps, recommendations, and an executive brief for ministry heads.', 'সমস্ত ৬৭টি চিহ্নিত ফাঁক, সুপারিশ এবং মন্ত্রণালয় প্রধানদের জন্য একটি এক্সিকিউটিভ ব্রিফ সহ সম্পূর্ণ বাংলাদেশ AI প্রস্তুতি মূল্যায়ন ডাউনলোড করুন।')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/resources" className="flex items-center gap-2 bg-bd-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <Download size={16} />
              {b('Download Reports', 'রিপোর্ট ডাউনলোড করুন')}
            </Link>
            <Link href="/research" className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {b('Read Research Papers →', 'গবেষণা পত্র পড়ুন →')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
