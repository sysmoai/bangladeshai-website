import Logo from "../Logo";
import { ArrowRight, Mail } from "lucide-react";

export default function Homepage() {
  return (
    <div>
      <div className="text-center py-4 bg-[#006A4E]/5 border-b border-[#006A4E]/10">
        <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>PAGE LAYOUT MOCKUP — Homepage (1440px desktop)</span>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-[#E8F5E9]/30 to-[#006A4E]/5 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] w-[500px] h-[500px]">
          <Logo size={500} />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="text-[#006A4E] text-[13px] tracking-wider uppercase mb-4" style={{ fontWeight: 600 }}>
            bangladeshai.org
          </p>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', color: '#1A2332', lineHeight: 1.15 }}>
            Bangladesh AI
          </h1>
          <p className="text-[#1A2332]/70 mt-3 tracking-[0.1em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '22px' }}>
            Intelligence Builds Nations
          </p>
          <p className="text-[#1A2332]/50 mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 600, fontSize: '20px' }}>
            দেশ গড়ি বুদ্ধিমত্তায়
          </p>
          <p className="text-[#1A2332]/50 text-[15px] mt-4 max-w-lg" style={{ lineHeight: 1.7, fontFamily: "'Source Serif 4', serif" }}>
            Independent AI research, advocacy, and education for Bangladesh.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <button className="px-6 py-3 bg-[#006A4E] text-white rounded-lg flex items-center gap-2 hover:bg-[#005A41] transition" style={{ fontWeight: 600, fontSize: '15px' }}>
              Read the Research <ArrowRight size={16} />
            </button>
            <button className="px-6 py-3 bg-white text-[#006A4E] border-2 border-[#006A4E] rounded-lg hover:bg-[#006A4E]/5 transition" style={{ fontWeight: 600, fontSize: '15px' }}>
              Download Brief
            </button>
          </div>
          <p className="text-[#1A2332]/30 text-[12px] mt-6 tracking-wide" style={{ fontWeight: 500 }}>
            Independent · Evidence-based · Bangla-first · Non-partisan
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-10 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { value: "47.12", unit: "/100", label: "AI Readiness Score" },
              { value: "80", unit: "/193", label: "Global Rank" },
              { value: "170M", unit: "", label: "Population" },
              { value: "18", unit: "", label: "Critical Gaps" },
              { value: "92", unit: "", label: "Requirements Assessed" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[#006A4E]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '40px' }}>
                  {s.value}<span className="text-[#006A4E]/40 text-[18px]">{s.unit}</span>
                </div>
                <div className="text-[#1A2332]/50 text-[12px] mt-1" style={{ fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Headline Framework */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '28px', color: '#1A2332' }}>
            Five Pillars of National AI
          </h2>
          <p className="text-[#1A2332]/50 text-[14px] mt-2">A comprehensive framework for Bangladesh's AI future</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            { icon: "🏛️", title: "Smart Government", desc: "AI-driven public service delivery and digital governance" },
            { icon: "📈", title: "Smart Economy", desc: "Workforce automation, fintech, and industrial AI readiness" },
            { icon: "🎓", title: "Smart Citizen", desc: "AI literacy, education reform, and digital inclusion" },
            { icon: "🗣️", title: "Smart Bangla AI", desc: "NLP, Bangla language models, and local AI development" },
            { icon: "🔒", title: "Smart Trust", desc: "Data governance, ethics, privacy, and AI safety frameworks" },
          ].map((p) => (
            <div key={p.title} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-[28px] mb-3">{p.icon}</div>
              <h3 className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '14px' }}>{p.title}</h3>
              <p className="text-[#1A2332]/50 text-[12px] mt-2" style={{ lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Research */}
      <section className="bg-[#F5F5F0] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1A2332' }}>
            Featured Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { cat: "Policy Brief", title: "18 Critical Gaps in Bangladesh's AI Infrastructure", date: "Mar 15, 2026", time: "8 min" },
              { cat: "Data Analysis", title: "AI Readiness Score Breakdown: Where Bangladesh Stands", date: "Mar 8, 2026", time: "12 min" },
              { cat: "Research", title: "Bangla NLP: The Missing Foundation for National AI", date: "Feb 28, 2026", time: "10 min" },
            ].map((post) => (
              <div key={post.title} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="h-36 bg-gradient-to-br from-[#006A4E]/10 to-[#0F4C81]/10" />
                <div className="p-5">
                  <span className="text-[10px] px-2 py-0.5 bg-[#006A4E]/10 text-[#006A4E] rounded" style={{ fontWeight: 600 }}>{post.cat}</span>
                  <h3 className="text-[#1A2332] mt-3 group-hover:text-[#006A4E] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px', lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                  <div className="text-[11px] text-[#1A2332]/40 mt-3">{post.date} · {post.time} read</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '28px', color: '#1A2332' }}>
            Who Is This For?
          </h2>
          <p className="text-[#1A2332]/50 text-[14px] mt-2">Evidence-based insights for every stakeholder</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "🏛️", title: "Government Officials", desc: "Evidence-based briefings and policy recommendations" },
            { icon: "💼", title: "Business & SMEs", desc: "AI adoption guides and economic impact analysis" },
            { icon: "👥", title: "Citizens", desc: "AI explained in Bangla, practical tools and guidance" },
            { icon: "🎓", title: "Researchers", desc: "Data, methodologies, and reproducible frameworks" },
          ].map((audience) => (
            <div key={audience.title} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-[42px] mb-3">{audience.icon}</div>
              <h3 className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px' }}>{audience.title}</h3>
              <p className="text-[#1A2332]/50 text-[13px] mt-2" style={{ lineHeight: 1.5 }}>{audience.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#006A4E] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Mail size={28} className="text-white/60 mx-auto mb-4" />
          <h2 className="text-white mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px' }}>
            Bangladesh AI Briefing
          </h2>
          <p className="text-white/70 text-[14px]">Weekly Research & Insights</p>
          <p className="text-white/50 text-[14px] mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>
            দেশ গড়ি বুদ্ধিমত্তায়। প্রতি সপ্তাহে।
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/40 border border-white/20 outline-none focus:border-white/50 text-[14px]"
            />
            <button className="px-6 py-3 bg-white text-[#006A4E] rounded-lg shrink-0" style={{ fontWeight: 600, fontSize: '14px' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}