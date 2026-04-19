'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { CheckCircle, Circle, ArrowRight, Flag, Target, Zap, Globe } from 'lucide-react'

const b = (isBn: boolean, en: string, bn: string) => (isBn ? bn : en)

const PHASES = [
  {
    id: 'p1',
    label: '100 Days',
    labelBn: '১০০ দিন',
    timeline: 'April – July 2026',
    timelineBn: 'এপ্রিল – জুলাই ২০২৬',
    icon: Zap,
    color: 'bd-red',
    bgColor: 'bg-bd-red',
    lightBg: 'bg-red-50',
    borderColor: 'border-red-200',
    tagColor: 'bg-red-100 text-red-700',
    status: 'active',
    summary: 'Foundation-setting actions that require no legislation and minimal budget — only political will.',
    summaryBn: 'ভিত্তি স্থাপনের পদক্ষেপ যেগুলির জন্য কোনো আইন বা বড় বাজেট নয় — শুধু রাজনৈতিক সদিচ্ছা দরকার।',
    milestones: [
      {
        title: 'Establish National AI Standards Board (NAISB)',
        titleBn: 'জাতীয় এআই মানদণ্ড বোর্ড (NAISB) প্রতিষ্ঠা',
        institution: 'ICT Division + BUET + DU + CUET',
        detail: 'Cabinet order; 7-member board; meets monthly; mandate to publish BNAS v1.0 by December 2026.',
        metric: 'Board constituted and operational',
      },
      {
        title: 'Issue Government AI Procurement Rules (GAPR)',
        titleBn: 'সরকারি এআই সংগ্রহ বিধিমালা (GAPR) জারি',
        institution: 'Finance Division',
        detail: 'Finance Division circular requiring bias audits, explainability standards, and Bangla language support for all government AI contracts above Tk 1 crore.',
        metric: 'Circular issued; all pending AI tenders updated to comply',
      },
      {
        title: 'Launch Bangladesh AI Research Institute (BAIRI) Task Force',
        titleBn: 'বাংলাদেশ এআই গবেষণা ইনস্টিটিউট (BAIRI) টাস্কফোর্স চালু',
        institution: 'ICT Division + BUET + DU',
        detail: 'Task force to design BAIRI governance structure, budget model, and facility plan. 10 members; 60-day report deadline.',
        metric: 'Task force convened; report submitted within 60 days',
      },
      {
        title: 'Begin Bangla Dataset Commons Corpus Collection',
        titleBn: 'বাংলা ডেটাসেট কমনস কর্পাস সংগ্রহ শুরু',
        institution: 'ICT Division + BARC + National Archives',
        detail: 'MoUs with Prothom Alo, Daily Star, Bangladesh Television, and National Archives for data licensing. Begin 50B-token corpus project.',
        metric: '5 MoUs signed; corpus collection pipeline operational',
      },
      {
        title: 'Sign UNESCO AI Ethics Recommendation Action Plan',
        titleBn: 'UNESCO এআই নৈতিকতা সুপারিশ কর্মপরিকল্পনায় স্বাক্ষর',
        institution: 'Ministry of Foreign Affairs + ICT Division',
        detail: 'Bangladesh to publish national action plan implementing UNESCO 2021 AI Ethics Recommendation — no legislation required.',
        metric: 'National action plan published; submitted to UNESCO',
      },
      {
        title: 'NBR Tax Compliance AI Pilot (Phase 1)',
        titleBn: 'NBR কর সম্মতি এআই পাইলট (পর্যায় ১)',
        institution: 'National Board of Revenue + ICT Division',
        detail: 'AI anomaly detection on top 100,000 corporate filers. No new infrastructure — run on existing NBR systems. Identify top 500 high-risk cases for review.',
        metric: '500 high-risk cases flagged; 50 escalated to investigation',
      },
    ],
  },
  {
    id: 'p2',
    label: 'Year 1',
    labelBn: '১ বছর',
    timeline: 'April 2026 – March 2027',
    timelineBn: 'এপ্রিল ২০২৬ – মার্চ ২০২৭',
    icon: Target,
    color: 'primary-blue',
    bgColor: 'bg-primary-blue',
    lightBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
    status: 'upcoming',
    summary: 'First-year institution-building and priority AI deployments in government services.',
    summaryBn: 'প্রথম বছরে প্রতিষ্ঠান নির্মাণ এবং সরকারি সেবায় অগ্রাধিকার ভিত্তিক এআই স্থাপনা।',
    milestones: [
      {
        title: 'Establish Bangladesh AI Research Institute (BAIRI)',
        titleBn: 'বাংলাদেশ এআই গবেষণা ইনস্টিটিউট (BAIRI) প্রতিষ্ঠা',
        institution: 'ICT Division + BUET + DU — Tk 50 crore (Year 1)',
        detail: 'Formal establishment by Act or Executive Order. Hire Executive Director. Open first 30 PhD fellowships. Acquire initial 50 GPUs for pilot compute.',
        metric: 'BAIRI operational; Executive Director appointed; 30 PhD fellowships awarded',
      },
      {
        title: 'MoHFW Disease Surveillance AI — Nationwide',
        titleBn: 'MoHFW রোগ নজরদারি এআই — সারা দেশে',
        institution: 'Ministry of Health + IEDCR + DGDA',
        detail: 'AI-powered outbreak early warning system across all 64 districts using DHIS2 data. Dengue, cholera, respiratory illness clusters detected 2–3 weeks earlier than current system.',
        metric: 'System operational in 64 districts; 7-day detection target achieved for 2 outbreaks',
      },
      {
        title: 'Draft National AI Act — Parliamentary Submission',
        titleBn: 'জাতীয় এআই আইনের খসড়া — সংসদে দাখিল',
        institution: 'Law Ministry + ICT Division + NAISB',
        detail: 'Risk-based AI Act drafted with multi-stakeholder consultation (civil society, industry, academia, judiciary). Parliamentary submission by Q4 2026.',
        metric: 'Draft completed; public consultation held; submitted to Parliament',
      },
      {
        title: 'Bangladesh National AI Standards v1.0 Published',
        titleBn: 'বাংলাদেশ জাতীয় এআই মানদণ্ড v1.0 প্রকাশিত',
        institution: 'NAISB',
        detail: 'Minimum standards for government AI deployments. Alignment with ISO/IEC 42001. Mandatory for all government AI procurement from January 2027.',
        metric: 'BNAS v1.0 published; mandatory compliance date announced',
      },
      {
        title: 'MoA Crop Yield AI Advisory — 8 Divisions Pilot',
        titleBn: 'MoA ফসল উৎপাদন এআই পরামর্শ — ৮ বিভাগ পাইলট',
        institution: 'Ministry of Agriculture + DAE + BMD',
        detail: 'Satellite + weather + soil AI crop yield prediction for 8 divisions. Farmers receive SMS advisory. DAE extension officers use AI-generated district reports.',
        metric: '8 divisions covered; 500,000 farmers receiving AI advisory by SMS',
      },
      {
        title: 'Land Record Fraud Detection AI — 10 Districts',
        titleBn: 'ভূমি রেকর্ড জালিয়াতি সনাক্তকরণ এআই — ১০ জেলা',
        institution: 'Ministry of Land + ACC + ICT Division',
        detail: 'ML-powered land mutation anomaly detection in 10 pilot districts. Flag suspicious transactions for ACC review. Reduce land fraud backlog.',
        metric: '200 suspicious mutations flagged; 30 prosecutions initiated',
      },
      {
        title: 'IT Sector Emergency Reskilling — Cohort 1',
        titleBn: 'আইটি খাতের জরুরি পুনঃদক্ষতা — কোহর্ট ১',
        institution: 'BASIS + ICT Division + NAISA',
        detail: '10,000 IT workers reskilled in AI-adjacent roles (prompt engineering, AI QA, training data work). 6-month intensive; online and Dhaka campus delivery.',
        metric: '10,000 workers certified; 70%+ employed in AI-adjacent roles within 6 months',
      },
    ],
  },
  {
    id: 'p3',
    label: '3 Years',
    labelBn: '৩ বছর',
    timeline: '2026–2029',
    timelineBn: '২০২৬–২০২৯',
    icon: Flag,
    color: 'bd-green',
    bgColor: 'bg-bd-green',
    lightBg: 'bg-green-50',
    borderColor: 'border-green-200',
    tagColor: 'bg-green-100 text-green-700',
    status: 'planned',
    summary: 'Full regulatory architecture operational; sovereign AI infrastructure under construction; government AI in 20+ services.',
    summaryBn: 'পূর্ণ নিয়ন্ত্রক কাঠামো চালু; সার্বভৌম এআই অবকাঠামো নির্মাণাধীন; ২০+ সরকারি সেবায় এআই।',
    milestones: [
      {
        title: 'Bangladesh National AI Authority (BNAIA) Operational',
        titleBn: 'বাংলাদেশ জাতীয় এআই কর্তৃপক্ষ (BNAIA) চালু',
        institution: 'Parliament — National AI Act',
        detail: 'Independent regulator with 50 technical staff. Licensing high-risk AI systems. Citizens\' complaint mechanism. First annual State of AI report published.',
        metric: 'BNAIA board appointed; 50 staff hired; first 20 high-risk AI audits completed',
      },
      {
        title: 'National AI Compute Cloud — Phase 1 (1,000 GPUs)',
        titleBn: 'জাতীয় এআই কম্পিউট ক্লাউড — পর্যায় ১ (১,০০০ GPU)',
        institution: 'ICT Division + BAIRI — Tk 800 crore',
        detail: '1,000 H100-equivalent GPUs operational at BAIRI facility. Available to universities, startups, and government ministries at subsidised rates. Powers BanglaBERT 2.0 and BanglaSTT training.',
        metric: '1,000 GPUs operational; 50 organisations using National AI Cloud',
      },
      {
        title: 'BanglaBERT 2.0 and BanglaOCR Released',
        titleBn: 'BanglaBERT 2.0 এবং BanglaOCR প্রকাশিত',
        institution: 'BAIRI',
        detail: 'Open-source Bangla language model trained on 50B tokens. BanglaOCR at 98%+ accuracy for printed text. Freely available to all developers. West Bengal collaboration on training data.',
        metric: 'Models released; 500+ developers using within 6 months; 95%+ benchmark scores',
      },
      {
        title: 'AI in 20 Government Services — All Ministries',
        titleBn: '২০টি সরকারি সেবায় এআই — সকল মন্ত্রণালয়',
        institution: 'National AI Commission + All ministries',
        detail: 'At least one AI application operational in each of Bangladesh\'s 20 key ministries. 20M+ citizen interactions per year processed with AI assistance.',
        metric: '20 ministry AI deployments; 20M annual AI-assisted citizen interactions',
      },
      {
        title: 'RMG Reskilling — 100,000 Workers',
        titleBn: 'পোশাক শিল্প পুনঃদক্ষতা — ১,০০,০০০ শ্রমিক',
        institution: 'BGMEA + MoLE + NAISA',
        detail: '100,000 RMG workers reskilled in AI quality control, sustainable manufacturing compliance, and garment tech. Factory-floor delivery during shift changes.',
        metric: '100,000 workers certified; 80%+ retained in upgraded roles at same or higher wage',
      },
      {
        title: 'Bangladesh AI Score: 55+ (Oxford Insights)',
        titleBn: 'বাংলাদেশ এআই স্কোর: ৫৫+ (Oxford Insights)',
        institution: 'All pillars contributing',
        detail: 'From 47.12 to 55+ by addressing Technology Pillar (target: 40+) through BAIRI publications, compute infrastructure, and Bangla NLP tools.',
        metric: 'Oxford Insights score 55+; Technology Pillar 40+ (from 26.26)',
      },
      {
        title: 'Procurement Transparency AI — All Federal Tenders',
        titleBn: 'সংগ্রহ স্বচ্ছতা এআই — সমস্ত কেন্দ্রীয় দরপত্র',
        institution: 'CPTU + Finance Division + ACC',
        detail: 'AI bid-rigging detection, specification analysis, and vendor network mapping integrated with eProcurement for all federal government tenders above Tk 1 crore.',
        metric: 'System monitoring Tk 1,00,000 crore+ annual procurement; 200+ cases flagged for investigation annually',
      },
    ],
  },
  {
    id: 'p4',
    label: '7 Years',
    labelBn: '৭ বছর',
    timeline: '2026–2033',
    timelineBn: '২০২৬–২০৩৩',
    icon: Globe,
    color: 'primary-navy',
    bgColor: 'bg-primary-navy',
    lightBg: 'bg-slate-50',
    borderColor: 'border-slate-200',
    tagColor: 'bg-slate-100 text-slate-700',
    status: 'vision',
    summary: 'Bangladesh established as South Asia\'s leading AI hub outside India — with sovereign infrastructure, world-class research, and AI touching every citizen.',
    summaryBn: 'বাংলাদেশ ভারতের বাইরে দক্ষিণ এশিয়ার শীর্ষ এআই কেন্দ্র হিসেবে প্রতিষ্ঠিত।',
    milestones: [
      {
        title: 'Oxford Insights AI Readiness Score: 70+',
        titleBn: 'Oxford Insights এআই প্রস্তুতি স্কোর: ৭০+',
        institution: 'Aggregate of all 12 Strategy Pillars',
        detail: 'Technology Pillar: 60+ (from 26.26). Government Pillar: 75+. Data Pillar: 70+. Bangladesh enters the top 50 of 188 countries for the first time.',
        metric: 'Score 70+; Top 50 globally; Technology Pillar 60+',
      },
      {
        title: 'BAIRI: 200+ Publications in Top AI Venues',
        titleBn: 'BAIRI: শীর্ষ এআই ভেন্যুতে ২০০+ প্রকাশনা',
        institution: 'Bangladesh AI Research Institute',
        detail: 'BAIRI publishing at NeurIPS, ICML, ACL, EMNLP, and ICLR. 500 PhD graduates. Bangladesh recognised as a credible AI research nation.',
        metric: '200+ publications/year in top-20 venues; 500 PhD alumni; 3 internationally cited Bangladesh AI researchers',
      },
      {
        title: 'Sovereign AI Compute Cloud — 5,000 GPUs',
        titleBn: 'সার্বভৌম এআই কম্পিউট ক্লাউড — ৫,০০০ GPU',
        institution: 'ICT Division + BAIRI',
        detail: '5,000 GPU cluster — sufficient for training mid-size foundation models. Bangladesh no longer dependent on foreign compute for research. Open to SAARC nations on commercial terms.',
        metric: '5,000 GPUs operational; revenue-positive cloud operation; 200 organisations using',
      },
      {
        title: 'Sovereign Bangla AI Stack — Full Suite Complete',
        titleBn: 'সার্বভৌম বাংলা এআই স্ট্যাক — সম্পূর্ণ সিস্টেম',
        institution: 'BAIRI',
        detail: 'BanglaBERT 2.0, BanglaSTT, BanglaTTS, BanglaOCR, BanglaGPT all released and maintained. 230 million Bangla speakers globally benefit. Bangla is a first-class AI language.',
        metric: 'All 5 components released; 95%+ benchmark performance; adopted by Indian West Bengal for government services',
      },
      {
        title: 'ICT Exports Including AI: $5B+',
        titleBn: 'এআই সহ আইসিটি রপ্তানি: $৫ বিলিয়ন+',
        institution: 'ICT Division + BASIS + MoC',
        detail: 'From $1.4B (2025) to $5B+. AI-specific exports: $500M+. Bangladesh AI products exported to Myanmar, Nepal, Cambodia, sub-Saharan Africa.',
        metric: '$5B ICT exports; $500M AI-specific; 10+ Bangladesh AI product exports in foreign markets',
      },
      {
        title: 'AI-Augmented Government — 100 Deployments',
        titleBn: 'এআই-বর্ধিত সরকার — ১০০টি স্থাপনা',
        institution: 'National AI Commission + All Ministries',
        detail: '100 operational government AI deployments. 50M+ annual citizen interactions with AI-assisted government services. All in Bangla. All human-reviewable. All independently audited by BNAIA.',
        metric: '100 deployments; 50M annual AI interactions; citizen satisfaction 80%+',
      },
      {
        title: '500 Revenue-Generating AI Startups',
        titleBn: '৫০০টি রাজস্ব-উৎপাদনকারী এআই স্টার্টআপ',
        institution: 'Bangladesh AI Fund + ICT Division',
        detail: 'Bangladesh AI Fund has invested in 500+ AI startups. 50 have crossed Tk 10 crore annual revenue. 5 have raised international venture funding. Bangladesh has its first AI unicorn candidate.',
        metric: '500 AI startups; 50 at Tk 10 crore+ revenue; 5 with international funding',
      },
    ],
  },
]

export default function RoadmapPage() {
  const { language } = useLanguage()
  const isBn = language === 'bn'

  return (
    <div className="min-h-screen">
      <div className="bg-bg-light border-b border-border-color px-4 py-2">
        <div className="max-w-4xl mx-auto flex items-center gap-1 text-xs text-text-secondary">
          <a href="/" className="hover:text-primary-blue transition-colors">{b(isBn, 'Home', 'হোম')}</a>
          <span className="mx-1">/</span>
          <span className="text-text-primary font-medium">{b(isBn, 'Roadmap', 'রোডম্যাপ')}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-bd-green/20 text-bd-green border border-bd-green/30 px-3 py-1 rounded-full mb-6">
            {b(isBn, 'National Roadmap', 'জাতীয় রোডম্যাপ')}
          </span>
          <h1 className={`text-4xl md:text-5xl font-extrabold leading-tight mb-5 ${isBn ? 'font-bangla' : ''}`}>
            {b(isBn, 'Bangladesh AI Roadmap 2026–2033', 'বাংলাদেশ এআই রোডম্যাপ ২০২৬–২০৩৩')}
          </h1>
          <p className={`text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed ${isBn ? 'font-bangla' : ''}`}>
            {b(
              isBn,
              'Four phases. Named institutions. Measurable milestones. From 47.12 to 70+ — in seven years.',
              'চারটি পর্যায়। নামযুক্ত প্রতিষ্ঠান। পরিমাপযোগ্য মাইলফলক। ৪৭.১২ থেকে ৭০+ — সাত বছরে।'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
            {PHASES.map((phase) => (
              <a key={phase.id} href={`#${phase.id}`} className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors">
                <span className={`w-2.5 h-2.5 rounded-full ${phase.bgColor} flex-shrink-0`} />
                <span className={isBn ? 'font-bangla' : ''}>{isBn ? phase.labelBn : phase.label}</span>
                <span className="text-blue-500">·</span>
                <span className="text-blue-400 text-xs">{isBn ? phase.timelineBn : phase.timeline}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-bg-light py-2 px-4 text-center">
        <p className={`text-sm text-text-secondary italic ${isBn ? 'font-bangla' : ''}`}>
          {b(isBn, 'Published: March 2026 · Updated as new policy developments emerge', 'প্রকাশিত: মার্চ ২০২৬ · নতুন নীতি উন্নয়ন অনুসারে আপডেট করা হয়')}
        </p>
      </div>

      {/* Phases */}
      <div className="bg-bg-light">
        {PHASES.map((phase, phaseIndex) => {
          const Icon = phase.icon
          return (
            <section key={phase.id} id={phase.id} className="py-16 px-4 border-b border-border-color last:border-0">
              <div className="max-w-5xl mx-auto">
                {/* Phase header */}
                <div className={`rounded-2xl p-6 mb-8 ${phase.lightBg} border ${phase.borderColor}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl ${phase.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${phase.tagColor}`}>
                          {b(isBn, `Phase ${phaseIndex + 1}`, `পর্যায় ${phaseIndex + 1}`)}
                        </span>
                        <span className="text-xs text-text-secondary">{isBn ? phase.timelineBn : phase.timeline}</span>
                      </div>
                      <h2 className={`text-2xl md:text-3xl font-extrabold text-text-primary ${isBn ? 'font-bangla' : ''}`}>
                        {isBn ? phase.labelBn : phase.label}
                        <span className="text-text-secondary font-normal text-lg ml-3">
                          — {b(isBn, phase.timeline, phase.timelineBn)}
                        </span>
                      </h2>
                      <p className={`text-text-secondary mt-1 ${isBn ? 'font-bangla' : ''}`}>
                        {isBn ? phase.summaryBn : phase.summary}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${phase.tagColor}`}>
                        {phase.milestones.length} {b(isBn, 'milestones', 'মাইলফলক')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="space-y-4">
                  {phase.milestones.map((m, i) => (
                    <div
                      key={i}
                      className="bg-bg-surface rounded-xl border border-border-color p-5 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 pt-0.5">
                          {phase.status === 'active' ? (
                            <div className={`w-5 h-5 rounded-full ${phase.bgColor} flex items-center justify-center`}>
                              <span className="text-white text-xs font-bold">{i + 1}</span>
                            </div>
                          ) : (
                            <Circle size={20} className="text-border-color" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold text-text-primary mb-0.5 ${isBn ? 'font-bangla' : ''}`}>
                            {isBn ? m.titleBn : m.title}
                          </h3>
                          <p className="text-xs font-semibold text-primary-blue mb-2">{m.institution}</p>
                          <p className="text-sm text-text-secondary leading-relaxed mb-2">{m.detail}</p>
                          <div className="flex items-start gap-1.5">
                            <CheckCircle size={13} className="text-bd-green flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-bd-green font-medium">{m.metric}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Score trajectory */}
      <section className="bg-primary-navy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl font-bold text-center mb-10 ${isBn ? 'font-bangla' : ''}`}>
            {b(isBn, 'AI Readiness Score Trajectory', 'এআই প্রস্তুতি স্কোর ট্র্যাজেক্টরি')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { year: '2024', score: '47.12', label: 'Baseline', labelBn: 'বেসলাইন', color: 'bg-bd-red' },
              { year: '2027', score: '55+', label: '100-Day + Year 1', labelBn: '১০০ দিন + বছর ১', color: 'bg-amber-500' },
              { year: '2029', score: '62+', label: '3-Year Target', labelBn: '৩ বছরের লক্ষ্য', color: 'bg-primary-blue' },
              { year: '2033', score: '70+', label: '7-Year Vision', labelBn: '৭ বছরের লক্ষ্য', color: 'bg-bd-green' },
            ].map((item) => (
              <div key={item.year} className="bg-white/10 rounded-xl p-5 text-center border border-white/10">
                <div className="text-blue-400 text-sm font-medium mb-2">{item.year}</div>
                <div className={`inline-block w-2 h-2 rounded-full ${item.color} mb-3`} />
                <div className="text-3xl font-extrabold mb-1">{item.score}</div>
                <div className={`text-blue-300 text-xs ${isBn ? 'font-bangla' : ''}`}>
                  {isBn ? item.labelBn : item.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white/5 rounded-xl p-5 border border-white/10">
            <div className="flex items-start gap-3">
              <div className="w-1 flex-shrink-0 bg-bd-green rounded-full self-stretch min-h-[60px]" />
              <div>
                <p className={`text-blue-200 text-sm leading-relaxed ${isBn ? 'font-bangla' : ''}`}>
                  {b(
                    isBn,
                    'প্রতিটি পর্যায়ের মাইলফলক পরিমাপযোগ্য, যাচাইযোগ্য, এবং জবাবদিহিযোগ্য। জাতীয় এআই কমিশন বার্ষিক অগ্রগতি প্রতিবেদন প্রকাশ করবে। Oxford Insights স্কোর প্রতি বছর যাচাই করা হবে।',
                    'Every phase milestone is measurable, verifiable, and publicly accountable. The National AI Commission publishes annual progress reports. Oxford Insights scores verified annually. Failure to meet milestones triggers automatic policy review.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download + CTA */}
      <section className="bg-bg-light py-14 px-4 border-t border-border-color">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-2xl font-bold text-text-primary mb-3 ${isBn ? 'font-bangla' : ''}`}>
            {b(isBn, 'Engage with this Roadmap', 'এই রোডম্যাপে অংশগ্রহণ করুন')}
          </h2>
          <p className={`text-text-secondary mb-8 ${isBn ? 'font-bangla' : ''}`}>
            {b(
              isBn,
              'This roadmap is a living document. Challenge our assumptions, add evidence, or advocate for its adoption.',
              'এই রোডম্যাপ একটি জীবন্ত দলিল। আমাদের অনুমানকে চ্যালেঞ্জ করুন, প্রমাণ যোগ করুন, বা এর গ্রহণের পক্ষে ওকালতি করুন।'
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/national-strategy"
              className="inline-flex items-center gap-2 bg-primary-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-navy/90 transition-colors"
            >
              {b(isBn, 'Read National Strategy', 'জাতীয় কৌশল পড়ুন')}
              <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:emon@emonhossain.pro?subject=Bangladesh%20AI%20Roadmap%20Feedback"
              className="inline-flex items-center gap-2 bg-white text-primary-navy border border-border-color px-6 py-3 rounded-full font-semibold hover:shadow-sm transition-all"
            >
              {b(isBn, 'Submit Feedback', 'মতামত দিন')}
            </a>
            <Link
              href="/research/national-strategy"
              className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:underline text-sm"
            >
              {b(isBn, '12-Pillar Strategy Paper →', '১২ স্তম্ভ কৌশলপত্র →')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
