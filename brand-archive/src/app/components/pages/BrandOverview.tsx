import Logo from "../Logo";

export default function BrandOverview() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#006A4E] via-[#005A41] to-[#0F4C81] text-white py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="w-32 h-32 lg:w-44 lg:h-44 mx-auto mb-8">
            <Logo size={176} color="#FFFFFF" />
          </div>
          <h1
            className="text-white mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Bangladesh AI
          </h1>
          <p
            className="text-white/90 tracking-[0.15em] uppercase mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '18px' }}
          >
            Intelligence Builds Nations
          </p>
          <p
            className="text-white/75 mb-6"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 600, fontSize: '20px' }}
          >
            দেশ গড়ি বুদ্ধিমত্তায়
          </p>
          <p className="text-white/60 text-[14px] max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            Independent AI research, advocacy, and education for Bangladesh.<br />
            AI Infrastructure for 170 Million.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="px-4 py-2 bg-white text-[#006A4E] rounded-lg text-[14px] cursor-pointer" style={{ fontWeight: 600 }}>
              Read the Research
            </span>
            <span className="px-4 py-2 border-2 border-white/40 text-white rounded-lg text-[14px] cursor-pointer hover:bg-white/10 transition" style={{ fontWeight: 500 }}>
              Download Brief
            </span>
          </div>
          <p className="text-white/40 text-[12px] mt-6 tracking-wide">
            Independent · Evidence-based · Bangla-first · Non-partisan
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: "47.12", unit: "/100", label: "AI Readiness Score" },
              { value: "80", unit: "/193", label: "Global Rank" },
              { value: "170M", unit: "", label: "Population Served" },
              { value: "18", unit: "", label: "Critical Gaps" },
              { value: "92", unit: "", label: "Requirements Assessed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[#006A4E]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '36px' }}>
                  {stat.value}<span className="text-[#006A4E]/50 text-[18px]">{stat.unit}</span>
                </div>
                <div className="text-[#1A2332]/60 text-[12px] mt-1" style={{ fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '28px', color: '#1A2332' }}>
            Complete Brand Identity System
          </h2>
          <p className="text-[#1A2332]/60 text-[14px] mt-2 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            A government-grade institutional brand designed for national AI leadership. Built to inspire trust across research, policy, and public communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "The Intelligence Map",
              desc: "A geometric Bangladesh silhouette with subtle AI circuit-node network — representing intelligence infrastructure covering the entire nation.",
              icon: "🗺️",
            },
            {
              title: "Institutional Palette",
              desc: "Bangladesh Deep Green (#006A4E), Intelligence Blue (#0F4C81), and supporting colors following strict 70-20-10 usage rules.",
              icon: "🎨",
            },
            {
              title: "Bilingual Typography",
              desc: "Plus Jakarta Sans for headings, Source Serif 4 for body, Inter for UI — with complete Noto Bengali support.",
              icon: "Aa",
            },
            {
              title: "12 Logo Variations",
              desc: "Horizontal, stacked, bilingual, icon-only, reversed, mono, government seal, embossed, and full tagline versions.",
              icon: "◎",
            },
            {
              title: "Evidence Tags",
              desc: "Verified, partially verified, source citations, and last-updated indicators for research credibility.",
              icon: "✓",
            },
            {
              title: "Social & Print Assets",
              desc: "OG images, LinkedIn/X covers, PDF templates, letterheads, business cards, and presentation decks.",
              icon: "📄",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[24px] mb-3">{item.icon}</div>
              <h3 className="text-[#1A2332] mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
                {item.title}
              </h3>
              <p className="text-[#1A2332]/55 text-[13px]" style={{ lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Taglines */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center mb-10" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1A2332' }}>
            Brand Taglines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { en: "Intelligence Builds Nations", bn: "দেশ গড়ি বুদ্ধিমত্তায়", type: "Primary Tagline" },
              { en: "AI Infrastructure for 170 Million", bn: "১৭ কোটি মানুষের এআই অবকাঠামো", type: "Subtitle" },
              { en: "Research · Advocacy · Education", bn: "গবেষণা · প্রচার · শিক্ষা", type: "Descriptor" },
              { en: "Built on Evidence. Built for Bangladesh.", bn: "প্রমাণের উপর গড়া। বাংলাদেশের জন্য গড়া।", type: "Campaign" },
            ].map((t) => (
              <div key={t.type} className="bg-[#F5F5F0] rounded-xl p-6 border-l-4 border-[#006A4E]">
                <span className="text-[11px] text-[#006A4E] uppercase tracking-wider" style={{ fontWeight: 600 }}>{t.type}</span>
                <p className="text-[#1A2332] mt-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
                  {t.en}
                </p>
                <p className="text-[#1A2332]/60 mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500, fontSize: '15px' }}>
                  {t.bn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilingual Brand Rules */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '28px', color: '#1A2332' }}>
            Bilingual Brand Rules
          </h2>
          <p className="text-[#1A2332]/60 text-[14px] mt-2 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            Bangladesh AI operates in both English and Bangla. Each language has its own complete brand expression with specific typography and spacing rules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* English Brand */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200">
            <h3 className="text-[#006A4E] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px' }}>
              English Brand
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Brand Name</span>
                <p className="text-[#1A2332] mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px' }}>
                  Bangladesh AI
                </p>
              </div>
              <div>
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Tagline</span>
                <p className="text-[#1A2332] mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
                  Intelligence Builds Nations
                </p>
              </div>
              <div>
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Subtitle</span>
                <p className="text-[#1A2332] mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '14px' }}>
                  AI Infrastructure for 170 Million
                </p>
              </div>
              <div>
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Descriptor</span>
                <p className="text-[#1A2332] mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '14px' }}>
                  Research · Advocacy · Education
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Typography</span>
                <p className="text-[#1A2332]/70 mt-1 text-[13px]">
                  Plus Jakarta Sans (headings)<br />
                  Source Serif 4 (body)<br />
                  Inter (UI)
                </p>
              </div>
            </div>
          </div>

          {/* Bangla Brand */}
          <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl p-8 border-2 border-[#006A4E]/20">
            <h3 className="text-[#006A4E] mb-6" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700, fontSize: '22px' }}>
              বাংলা ব্র্যান্ড
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Brand Name</span>
                <p className="text-[#1A2332] mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700, fontSize: '20px' }}>
                  বাংলাদেশ এআই
                </p>
              </div>
              <div>
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Tagline</span>
                <p className="text-[#1A2332] mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 600, fontSize: '18px' }}>
                  দেশ গড়ি বুদ্ধিমত্তায়
                </p>
              </div>
              <div>
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Subtitle</span>
                <p className="text-[#1A2332] mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500, fontSize: '16px' }}>
                  ১৭ কোটি মানুষের এআই অবকাঠামো
                </p>
              </div>
              <div>
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Descriptor</span>
                <p className="text-[#1A2332] mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500, fontSize: '16px' }}>
                  গবেষণা · প্রচার · শিক্ষা
                </p>
              </div>
              <div className="pt-4 border-t border-[#006A4E]/20">
                <span className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider" style={{ fontWeight: 600 }}>Typography</span>
                <p className="text-[#1A2332]/70 mt-1 text-[13px]">
                  Noto Sans Bengali (headings)<br />
                  Noto Serif Bengali (body)<br />
                  Noto Sans Bengali (UI)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Rules */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-[#1A2332] mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px' }}>
            Usage Rules
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg flex-shrink-0">✓</span>
                <div>
                  <p className="text-[#1A2332] text-[14px]" style={{ fontWeight: 600 }}>English pages → English tagline</p>
                  <p className="text-[#1A2332]/60 text-[13px]">"Intelligence Builds Nations"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg flex-shrink-0">✓</span>
                <div>
                  <p className="text-[#1A2332] text-[14px]" style={{ fontWeight: 600 }}>Bangla pages → Bangla tagline</p>
                  <p className="text-[#1A2332]/60 text-[13px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>"দেশ গড়ি বুদ্ধিমত্তায়"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg flex-shrink-0">✓</span>
                <div>
                  <p className="text-[#1A2332] text-[14px]" style={{ fontWeight: 600 }}>Bilingual assets → Both with " | " separator</p>
                  <p className="text-[#1A2332]/60 text-[13px]">For OG images, covers, seals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg flex-shrink-0">✓</span>
                <div>
                  <p className="text-[#1A2332] text-[14px]" style={{ fontWeight: 600 }}>Bangla text is +2px larger</p>
                  <p className="text-[#1A2332]/60 text-[13px]">Better readability for Bangla script</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-lg flex-shrink-0">✗</span>
                <div>
                  <p className="text-[#1A2332] text-[14px]" style={{ fontWeight: 600 }}>Never mix languages randomly</p>
                  <p className="text-[#1A2332]/60 text-[13px]">Don't use Bangla tagline on English pages</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-lg flex-shrink-0">✗</span>
                <div>
                  <p className="text-[#1A2332] text-[14px]" style={{ fontWeight: 600 }}>Never auto-translate</p>
                  <p className="text-[#1A2332]/60 text-[13px]">Use pre-approved Bangla text only</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-lg flex-shrink-0">✗</span>
                <div>
                  <p className="text-[#1A2332] text-[14px]" style={{ fontWeight: 600 }}>No Plus Jakarta Sans on Bangla text</p>
                  <p className="text-[#1A2332]/60 text-[13px]">Always use Noto Sans/Serif Bengali</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-lg flex-shrink-0">✗</span>
                <div>
                  <p className="text-[#1A2332] text-[14px]" style={{ fontWeight: 600 }}>No Western numerals in Bangla text</p>
                  <p className="text-[#1A2332]/60 text-[13px]">Use ১২৩৪৫৬৭৮৯০ not 1234567890</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#F0FDF4] rounded-xl border-l-4 border-[#006A4E]">
            <h4 className="text-[#006A4E] mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '14px' }}>
              Bangla Text Size Rules
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-[13px] text-[#1A2332]/70">
              <div>
                <span style={{ fontWeight: 600 }}>Headings:</span> English size + 2px
              </div>
              <div>
                <span style={{ fontWeight: 600 }}>Body:</span> English size + 2px (min 19px)
              </div>
              <div>
                <span style={{ fontWeight: 600 }}>Line-height:</span> 1.8-2.0 (English is 1.65)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-[#1A2332] rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '22px' }}>
            Brand Positioning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/50 text-[11px] uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Think</p>
              <p className="text-white/80 text-[14px]" style={{ lineHeight: 1.7 }}>
                "Our World in Data" meets "Brookings Institution" meets "a2i Bangladesh"
              </p>
              <p className="text-white/50 text-[11px] uppercase tracking-wider mt-6 mb-3" style={{ fontWeight: 600 }}>Design must feel like</p>
              <p className="text-white/80 text-[14px]" style={{ lineHeight: 1.7 }}>
                A trusted advisor briefing a minister. The Economist writing about Bangladesh. A professor explaining to a smart student.
              </p>
            </div>
            <div>
              <p className="text-white/50 text-[11px] uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>Not a</p>
              <div className="flex flex-wrap gap-2">
                {["Startup", "Blog", "Government Site", "Political Platform"].map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white/10 rounded-md text-[12px] text-white/60">{n}</span>
                ))}
              </div>
              <p className="text-white/50 text-[11px] uppercase tracking-wider mt-6 mb-3" style={{ fontWeight: 600 }}>Founded by</p>
              <p className="text-white/90 text-[16px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                Emon Hossain
              </p>
              <p className="text-white/50 text-[13px] mt-1">bangladeshai.org</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}