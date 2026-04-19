import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, CheckCircle, BookOpen, Database, MessageSquare, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Development Partners — BangladeshAI.org',
  description: 'Rigorous AI policy research and strategic advisory for organizations working on Bangladesh digital future. Partnership opportunities for UNDP, World Bank, ADB, FCDO, and academic institutions.',
}

const WHAT_WE_OFFER = [
  {
    icon: BookOpen,
    title: 'Research Partnership',
    desc: 'Co-authorship on AI policy papers with full citation rights. Joint research published under Creative Commons CC BY 4.0.',
    color: 'text-primary-blue',
    bg: 'bg-blue-50',
  },
  {
    icon: Database,
    title: 'Data Access',
    desc: 'Early access to BangladeshAI.org datasets and the full 92-requirement AI readiness assessment with domain-level breakdowns.',
    color: 'text-bd-green',
    bg: 'bg-green-50',
  },
  {
    icon: MessageSquare,
    title: 'Policy Advisory',
    desc: 'Background briefings for country teams and programme design. Expert input on AI governance, digital rights, and ICT policy.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: GraduationCap,
    title: 'Capacity Building',
    desc: 'AI literacy training materials in English and Bangla. Curriculum design for government officials, civil society, and communities.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
]

const EVIDENCE_GAPS = [
  'Household-level AI access survey (170M population)',
  'Ministry-level AI readiness assessment with primary data',
  'Private sector AI adoption baseline study',
  'National Bangla corpus for AI training (50B tokens)',
  'Youth AI literacy baseline assessment',
]

const PARTNERS = [
  'UNDP', 'World Bank', 'ADB', 'FCDO', 'USAID', 'GIZ', 'KOICA',
  'International NGOs', 'Academic Institutions', 'Bilateral Agencies', 'Philanthropic Foundations',
]

export default function ForPartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-bg-light border-b border-border-color px-4 py-2">
        <div className="max-w-4xl mx-auto flex items-center gap-1 text-xs text-text-secondary">
          <Link href="/" className="hover:text-primary-blue transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-text-primary font-medium">For Development Partners</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-bd-green/20 text-bd-green border border-bd-green/30 px-3 py-1 rounded-full mb-6">
            Development Partners
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            For Development Partners
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Rigorous AI policy research and strategic advisory for organizations working on Bangladesh&rsquo;s digital future.
          </p>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-3 text-center">Who We Work With</h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            BangladeshAI.org partners with international organizations that share our commitment to evidence-based AI governance for Bangladesh.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="px-4 py-2 bg-bg-light border border-border-color rounded-full text-sm font-medium text-text-primary"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-3 text-center">What We Offer</h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Four partnership tracks designed for different organizational needs and programme types.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT_WE_OFFER.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-bg-surface rounded-2xl p-6 border border-border-color shadow-sm">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.bg}`}>
                    <Icon size={20} className={item.color} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Independence guarantee */}
      <section className="bg-bg-surface py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-navy rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Independence Guarantee</h2>
            <div className="space-y-4 text-blue-100 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-bd-green flex-shrink-0 mt-0.5" />
                <p>All partnerships include an <strong className="text-white">editorial independence clause</strong>. Partners receive final reports — not drafts for approval.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-bd-green flex-shrink-0 mt-0.5" />
                <p>Partners <strong className="text-white">cannot influence or suppress research findings</strong>. Our methodology and conclusions remain entirely our own.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-bd-green flex-shrink-0 mt-0.5" />
                <p>Our independence is what makes our research valuable. <strong className="text-white">Partners endorse our independence — they do not override it.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence gaps */}
      <section className="bg-bg-light py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-3 text-center">Evidence Gaps We Want to Fill</h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            These are the five critical evidence gaps where partnership funding would have the highest impact on Bangladesh AI policy.
          </p>
          <div className="space-y-3">
            {EVIDENCE_GAPS.map((gap, i) => (
              <div key={i} className="flex items-start gap-4 bg-bg-surface rounded-xl p-5 border border-border-color shadow-sm">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-blue text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-text-primary font-medium text-sm leading-relaxed">{gap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-navy py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-blue-200 mb-8">
            Send us a partnership enquiry or download our research overview to share with your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              href="/contact"
              className="bg-bd-green text-white px-7 py-3 rounded-full font-semibold hover:bg-bd-green/90 transition-colors"
            >
              Send a Partnership Enquiry
            </Link>
            <Link
              href="/resources"
              className="bg-white/10 border border-white/30 text-white px-7 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Download Research Overview
            </Link>
          </div>
          <p className="text-blue-300 text-sm">
            Direct contact:{' '}
            <a href="mailto:emon@emonhossain.pro" className="text-white hover:underline font-medium">
              emon@emonhossain.pro
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
