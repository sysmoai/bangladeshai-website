export default function ResearchHub() {
  const sections = [
    { num: "01", title: "Smart Government", desc: "AI-driven public service delivery, digital governance frameworks, and institutional capacity building for Bangladesh's public sector." },
    { num: "02", title: "Smart Economy", desc: "Workforce automation readiness, fintech AI applications, industrial AI adoption, and economic competitiveness through AI." },
    { num: "03", title: "Smart Citizen", desc: "AI literacy programs, education curriculum reform, digital inclusion, and citizen-facing AI services." },
    { num: "04", title: "Smart Bangla AI", desc: "Bangla NLP development, language model infrastructure, local AI tooling, and indigenous AI research capacity." },
    { num: "05", title: "Smart Trust", desc: "Data governance, AI ethics frameworks, privacy regulations, algorithmic accountability, and AI safety." },
    { num: "06", title: "Data Infrastructure", desc: "National data repositories, open data policies, interoperability standards, and compute resource availability." },
    { num: "07", title: "International Benchmarks", desc: "Comparative analysis against ASEAN peers, global readiness indices, and best practices from leading AI nations." },
    { num: "08", title: "Policy Recommendations", desc: "Actionable policy briefs, regulatory frameworks, investment priorities, and implementation roadmaps." },
  ];

  return (
    <div>
      <div className="text-center py-4 bg-[#006A4E]/5 border-b border-[#006A4E]/10">
        <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>PAGE LAYOUT MOCKUP — Research Hub</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
            Research Hub
          </h1>
          <p className="text-[#1A2332]/60 text-[15px] mt-2 max-w-2xl" style={{ lineHeight: 1.7, fontFamily: "'Source Serif 4', serif" }}>
            A comprehensive, evidence-based assessment of Bangladesh's AI readiness across 92 requirements, 18 critical gaps, and 5 strategic pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-5">
            {sections.map((s) => (
              <div key={s.num} className="bg-white rounded-xl p-6 border-l-4 border-[#006A4E] border-y border-r border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start gap-5">
                  <span className="text-[#006A4E]/20 shrink-0" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '36px' }}>{s.num}</span>
                  <div>
                    <h3 className="text-[#1A2332] group-hover:text-[#006A4E] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '17px' }}>
                      {s.title}
                    </h3>
                    <p className="text-[#1A2332]/55 text-[13px] mt-2" style={{ lineHeight: 1.6, fontFamily: "'Source Serif 4', serif" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {[
              { value: "47.12", unit: "/100", label: "AI Readiness Score", source: "Oxford Insights 2024" },
              { value: "80", unit: "th", label: "Global Ranking (of 193)", source: "AI Readiness Index" },
              { value: "18", unit: "", label: "Critical Gaps Identified", source: "Bangladesh AI Analysis" },
              { value: "92", unit: "", label: "Requirements Assessed", source: "5-Pillar Framework" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <div className="text-[#006A4E]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '32px' }}>
                  {stat.value}<span className="text-[#006A4E]/40 text-[16px]">{stat.unit}</span>
                </div>
                <div className="text-[#1A2332] text-[13px] mt-1" style={{ fontWeight: 500 }}>{stat.label}</div>
                <div className="text-[#1A2332]/40 text-[11px] mt-1">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
