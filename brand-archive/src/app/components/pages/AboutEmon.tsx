import Logo from "../Logo";
import { ExternalLink } from "lucide-react";

export default function AboutEmon() {
  return (
    <div>
      <div className="text-center py-4 bg-[#006A4E]/5 border-b border-[#006A4E]/10">
        <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>PAGE LAYOUT MOCKUP — About Emon Hossain</span>
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="w-28 h-28 bg-[#006A4E]/10 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-[#006A4E]" style={{ fontWeight: 800, fontSize: '36px' }}>EH</span>
            </div>
            <div>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
                Emon Hossain
              </h1>
              <p className="text-[#006A4E] text-[15px] mt-1" style={{ fontWeight: 600 }}>Founder, Bangladesh AI</p>
              <p className="text-[#1A2332]/50 text-[14px] mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>
                বাংলাদেশ এআই প্রতিষ্ঠাতা
              </p>
              <p className="text-[#1A2332]/60 text-[15px] mt-4" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.7 }}>
                Independent AI researcher and advocate building Bangladesh's first comprehensive AI readiness assessment and policy framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1A2332' }}>
          The Mission
        </h2>
        <div className="space-y-5" style={{ fontFamily: "'Source Serif 4', serif", fontSize: '17px', lineHeight: 1.65, color: '#1A2332' }}>
          <p>
            Bangladesh AI was born from a simple observation: Bangladesh — a nation of 170 million people, with one of the world's youngest populations — had no independent, comprehensive assessment of its AI readiness.
          </p>
          <p>
            Government reports were fragmented. International indices lacked local context. Academic research existed in silos. There was no single platform that combined rigorous data analysis with accessible policy communication for Bangladesh's AI landscape.
          </p>
          <p>
            Bangladesh AI fills that gap. We produce evidence-based research, policy briefs, and public education materials that help policymakers, researchers, journalists, and citizens understand where Bangladesh stands — and what needs to happen next.
          </p>
        </div>

        {/* What Emon Has Built */}
        <h2 className="mt-12 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1A2332' }}>
          What We've Built
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "92", label: "Requirements Assessed" },
            { value: "18", label: "Critical Gaps Identified" },
            { value: "5", label: "Strategic Pillars" },
            { value: "8", label: "Research Sections" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm text-center">
              <div className="text-[#006A4E]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '28px' }}>{s.value}</div>
              <div className="text-[#1A2332]/50 text-[11px] mt-1" style={{ fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Independence */}
        <div className="bg-[#E8F5E9] rounded-xl p-6 border-l-4 border-[#006A4E] mt-10">
          <h3 className="text-[#1A2332] mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
            Independence Statement
          </h3>
          <p className="text-[#1A2332]/70 text-[14px]" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.65 }}>
            Bangladesh AI is an entirely independent platform. We are not affiliated with any government ministry, political party, or commercial entity. Our research is funded through independent grants and the founder's personal commitment. We believe evidence-based policy analysis must be free from institutional bias.
          </p>
        </div>

        {/* Credentials */}
        <h2 className="mt-12 mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1A2332' }}>
          Approach & Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Evidence-Based", desc: "Every claim is sourced. Every number is verified. We don't publish opinions as facts." },
            { title: "Bangla-First", desc: "AI must work in Bangla for Bangla speakers. We prioritize local language throughout." },
            { title: "Non-Partisan", desc: "We analyze policy, not politics. Our work serves the nation, not any party." },
            { title: "Open & Accessible", desc: "Research should be free and readable by anyone — from students to cabinet secretaries." },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <h4 className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '14px' }}>
                {v.title}
              </h4>
              <p className="text-[#1A2332]/55 text-[13px] mt-2" style={{ lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-[#1A2332] rounded-xl p-8 mt-10 text-center">
          <p className="text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '18px' }}>
            Get in Touch
          </p>
          <p className="text-white/50 text-[13px] mt-1">For research collaboration, media inquiries, or institutional partnerships</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-white/70 text-[14px]">
            <ExternalLink size={14} />
            <span>hello@bangladeshai.org</span>
          </div>
        </div>
      </section>
    </div>
  );
}
