import Logo from "../Logo";
import { Clock, User, CheckCircle, Share2, Linkedin, Twitter, Facebook } from "lucide-react";

export default function BlogPost() {
  return (
    <div>
      <div className="text-center py-4 bg-[#006A4E]/5 border-b border-[#006A4E]/10">
        <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>PAGE LAYOUT MOCKUP — Blog Post (Single Article)</span>
      </div>

      <article className="max-w-[720px] mx-auto px-6 py-12">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[11px] px-2.5 py-1 bg-[#006A4E]/10 text-[#006A4E] rounded" style={{ fontWeight: 600 }}>Policy Brief</span>
          <span className="text-[12px] text-[#1A2332]/40">March 15, 2026</span>
          <span className="flex items-center gap-1 text-[12px] text-[#1A2332]/40"><Clock size={12} /> 8 min read</span>
          <span className="flex items-center gap-1 text-[12px] text-[#1A2332]/40"><User size={12} /> Emon Hossain</span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '32px', color: '#1A2332', lineHeight: 1.25 }}>
          18 Critical Gaps in Bangladesh's AI Infrastructure
        </h1>

        {/* Body */}
        <div className="mt-8 space-y-6" style={{ fontFamily: "'Source Serif 4', serif", fontSize: '17px', lineHeight: 1.65, color: '#1A2332' }}>
          <p>
            Bangladesh's AI readiness score stands at 47.12 out of 100, ranking 80th globally among 193 countries assessed by the Oxford Insights AI Readiness Index. While this places Bangladesh in the "developing" tier, a closer examination reveals 18 critical gaps that require urgent attention.
          </p>

          <div className="bg-[#E8F5E9] rounded-xl p-5 border-l-4 border-[#006A4E] my-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full" style={{ fontWeight: 500 }}>
                <CheckCircle size={12} /> Verified
              </span>
            </div>
            <p className="text-[#1A2332] text-[15px]" style={{ lineHeight: 1.6 }}>
              Bangladesh lacks a dedicated national AI strategy document, unlike 67 countries that have published comprehensive AI policies as of 2025.
            </p>
          </div>

          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '24px', color: '#1A2332', marginTop: '32px' }}>
            1. The Strategy Gap
          </h2>
          <p>
            The most fundamental gap is the absence of a national AI strategy. Countries like India, Singapore, and even Rwanda have published comprehensive documents outlining their vision, investment priorities, ethical frameworks, and implementation timelines for artificial intelligence.
          </p>

          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '24px', color: '#1A2332', marginTop: '32px' }}>
            2. Compute Infrastructure
          </h2>
          <p>
            Bangladesh has extremely limited access to the GPU compute resources necessary for training large AI models. University research labs operate on consumer-grade hardware, and there is no national high-performance computing facility dedicated to AI research.
          </p>

          <div className="bg-amber-50 rounded-xl p-5 border-l-4 border-amber-400 my-8">
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full" style={{ fontWeight: 500 }}>
              Partially Verified
            </span>
            <p className="text-[#1A2332] text-[15px] mt-2" style={{ lineHeight: 1.6 }}>
              Estimates suggest fewer than 100 research-grade GPUs are available across all Bangladeshi institutions combined, compared to thousands in peer countries like Vietnam and the Philippines.
            </p>
          </div>

          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '24px', color: '#1A2332', marginTop: '32px' }}>
            3. The Bangla Language Gap
          </h2>
          <p>
            With over 230 million native speakers globally, Bangla remains severely underrepresented in AI training datasets and language models. This creates a fundamental barrier to building AI applications that serve the majority of Bangladesh's population.
          </p>

          <p className="text-[#1A2332]/50 text-[13px] mt-8 pt-6 border-t border-gray-200">
            Source: Oxford Insights AI Readiness Index 2024 · Bangladesh AI Independent Analysis · Last updated March 26, 2026
          </p>
        </div>

        {/* Share */}
        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
          <span className="text-[12px] text-[#1A2332]/50" style={{ fontWeight: 600 }}>Share</span>
          {[Linkedin, Twitter, Facebook].map((Icon, i) => (
            <button key={i} className="w-9 h-9 bg-gray-100 hover:bg-[#006A4E]/10 rounded-lg flex items-center justify-center transition">
              <Icon size={16} className="text-[#1A2332]/50" />
            </button>
          ))}
        </div>

        {/* Author Bio */}
        <div className="bg-[#F5F5F0] rounded-xl p-6 mt-10 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-16 h-16 bg-[#006A4E]/10 rounded-full flex items-center justify-center shrink-0">
            <span className="text-[#006A4E]" style={{ fontWeight: 700, fontSize: '20px' }}>EH</span>
          </div>
          <div>
            <h4 className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
              Emon Hossain
            </h4>
            <p className="text-[#1A2332]/50 text-[12px]">Founder, Bangladesh AI</p>
            <p className="text-[#1A2332]/60 text-[14px] mt-3" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.6 }}>
              Independent AI researcher and advocate building Bangladesh's first comprehensive AI readiness assessment. Committed to evidence-based analysis and Bangla-first AI development.
            </p>
          </div>
        </div>

        {/* Related */}
        <div className="mt-12">
          <h3 className="mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '18px', color: '#1A2332' }}>
            Related Research
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "AI Readiness Score Breakdown: Where Bangladesh Stands", cat: "Data Analysis" },
              { title: "Why Bangladesh Needs a National AI Strategy Document", cat: "Governance" },
            ].map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer group">
                <span className="text-[10px] text-[#006A4E]" style={{ fontWeight: 600 }}>{r.cat}</span>
                <h4 className="text-[#1A2332] mt-2 group-hover:text-[#006A4E] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '14px', lineHeight: 1.4 }}>
                  {r.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
