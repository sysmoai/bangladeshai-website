import Logo from "../Logo";

export default function DosDonts() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
          Do's and Don'ts
        </h1>
        <p className="text-[#1A2332]/60 text-[15px] mt-2 max-w-2xl" style={{ lineHeight: 1.7 }}>
          Critical brand usage rules to maintain consistency, legality, and institutional quality across all applications.
        </p>
      </div>

      {/* Do's */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#006A4E' }}>
        Do's
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {[
          { title: "Use official colors only", desc: "Deep Green #006A4E, Intelligence Blue #0F4C81, and the approved palette." },
          { title: "Maintain clear space", desc: "1× icon height on all sides of the logo at minimum." },
          { title: "Use bilingual taglines", desc: '"Intelligence Builds Nations" and "দেশ গড়ি বুদ্ধিমত্তায়" on key assets.' },
          { title: "Use approved fonts", desc: "Plus Jakarta Sans, Inter, Source Serif 4, Noto Sans/Serif Bengali." },
          { title: "Include independence disclaimer", desc: '"Not affiliated with any government body" on official materials.' },
          { title: "Test at minimum size", desc: "120px digital, 25mm print. Ensure map is recognizable." },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-5 border border-green-200 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-[#006A4E] text-[16px] mt-0.5">✓</span>
              <div>
                <h4 className="text-[#1A2332]" style={{ fontWeight: 600, fontSize: '14px' }}>{item.title}</h4>
                <p className="text-[#1A2332]/55 text-[12px] mt-1" style={{ lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Don'ts - Visual */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#E8432A' }}>
        Don'ts — Logo Misuse
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
        {[
          { label: "Don't stretch", style: { transform: "scaleX(1.5)" } },
          { label: "Don't rotate", style: { transform: "rotate(25deg)" } },
          { label: "Don't recolor", style: { filter: "hue-rotate(180deg)" } },
          { label: "Don't add shadows", style: { filter: "drop-shadow(4px 4px 4px rgba(0,0,0,0.5))" } },
          { label: "Don't modify shape", style: { transform: "skewX(15deg)" } },
          { label: "Don't use on busy bg", style: { opacity: 0.4 } },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-xl p-5 border border-red-200 text-center">
            <div className="w-14 h-14 mx-auto" style={item.style}><Logo size={56} /></div>
            <div className="flex items-center justify-center gap-1 mt-3">
              <span className="text-[#E8432A] text-[12px]">✕</span>
              <span className="text-[11px] text-[#E8432A]" style={{ fontWeight: 600 }}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Don'ts - Rules */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#E8432A' }}>
        Don'ts — Critical Rules
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {[
          { title: "Never use the Bangladesh national emblem (Shapla/water lily)", desc: "Illegal under the 1972 Order. Our logo uses only the country's geographic outline." },
          { title: "Never use government ministry logos or seals", desc: "Do not incorporate ICT Division, a2i, or any government branding." },
          { title: "Never imply government affiliation", desc: "Bangladesh AI is independent. Never suggest official government endorsement." },
          { title: 'Never use "Smart Bangladesh" or "Digital Bangladesh" as own tagline', desc: "These are government campaign slogans. Use our approved taglines only." },
          { title: "Never use stock robot images or matrix code", desc: "No glowing brains, humanoid robots, or sci-fi AI imagery. Stay institutional." },
          { title: "Never use gradient blobs or SaaS startup aesthetics", desc: "The brand must feel like a trusted institution, not a tech startup." },
          { title: "Never use ALL CAPS for headings", desc: '"Bangladesh AI" — never "BANGLADESH AI". Title case always.' },
          { title: "Never place green and red colors directly adjacent", desc: "These are both high-saturation colors that clash and reduce accessibility." },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl p-5 border border-red-200 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="text-[#E8432A] text-[16px] mt-0.5">✕</span>
              <div>
                <h4 className="text-[#1A2332]" style={{ fontWeight: 600, fontSize: '13px' }}>{item.title}</h4>
                <p className="text-[#1A2332]/55 text-[12px] mt-1" style={{ lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Color Usage Don'ts */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Color Pairing Rules
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        <div className="bg-white rounded-xl p-4 border border-red-200 text-center">
          <div className="flex justify-center gap-0 mb-3">
            <div className="w-10 h-10 bg-[#006A4E] rounded-l-lg" />
            <div className="w-10 h-10 bg-[#E8432A] rounded-r-lg" />
          </div>
          <span className="text-[11px] text-[#E8432A]" style={{ fontWeight: 600 }}>✕ Never adjacent</span>
        </div>
        <div className="bg-white rounded-xl p-4 border border-green-200 text-center">
          <div className="flex justify-center gap-0 mb-3">
            <div className="w-10 h-10 bg-[#006A4E] rounded-l-lg" />
            <div className="w-10 h-10 bg-[#0F4C81] rounded-r-lg" />
          </div>
          <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>✓ Approved pairing</span>
        </div>
        <div className="bg-white rounded-xl p-4 border border-green-200 text-center">
          <div className="flex justify-center gap-0 mb-3">
            <div className="w-10 h-10 bg-[#006A4E] rounded-l-lg" />
            <div className="w-10 h-10 bg-[#C4960C] rounded-r-lg" />
          </div>
          <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>✓ Formal / seal use</span>
        </div>
        <div className="bg-white rounded-xl p-4 border border-green-200 text-center">
          <div className="flex justify-center gap-0 mb-3">
            <div className="w-10 h-10 bg-[#1A2332] rounded-l-lg" />
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-r-lg" />
          </div>
          <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>✓ Primary text on white</span>
        </div>
      </div>

      {/* Brand Name Rules */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Brand Name Rules
      </h2>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-[#006A4E] text-[13px] mb-3" style={{ fontWeight: 700 }}>✅ Correct Usage</h4>
            <div className="space-y-2">
              {[
                { text: '"Bangladesh AI"', note: "Always with space" },
                { text: '"বাংলাদেশ এআই"', note: "Always with space in Bangla" },
                { text: "bangladeshai.org", note: "URL — no space, lowercase" },
                { text: "@BangladeshAI", note: "Handle — no space" },
                { text: "#BangladeshAI", note: "Hashtag — no space" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 py-1.5">
                  <span className="text-[#006A4E] text-[12px]">✓</span>
                  <code className="text-[13px] text-[#1A2332]" style={{ fontFamily: "monospace", fontWeight: 600 }}>{item.text}</code>
                  <span className="text-[11px] text-[#1A2332]/40">— {item.note}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[#E8432A] text-[13px] mb-3" style={{ fontWeight: 700 }}>❌ Incorrect Usage</h4>
            <div className="space-y-2">
              {[
                { text: '"BangladeshAI"', note: "No space — wrong as brand name" },
                { text: '"BANGLADESH AI"', note: "Never use ALL CAPS" },
                { text: '"bangladesh ai"', note: "Never all lowercase" },
                { text: '"Bangladesh Ai"', note: "Wrong capitalization" },
                { text: '"বাংলাদেশএআই"', note: "Missing space in Bangla" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 py-1.5">
                  <span className="text-[#E8432A] text-[12px]">✕</span>
                  <code className="text-[13px] text-[#1A2332]/50 line-through" style={{ fontFamily: "monospace" }}>{item.text}</code>
                  <span className="text-[11px] text-[#1A2332]/40">— {item.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Developer Handoff */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Developer Handoff — CSS Custom Properties
      </h2>
      <div className="bg-[#1A2332] rounded-2xl p-6 lg:p-8">
        <pre className="text-[12px] text-white/60 overflow-x-auto" style={{ fontFamily: "monospace", lineHeight: 1.8 }}>{`:root {
  /* Colors */
  --color-primary: #006A4E;
  --color-secondary: #0F4C81;
  --color-accent-red: #E8432A;
  --color-bg-light: #F5F5F0;
  --color-bg-sage: #E8F5E9;
  --color-text-primary: #1A2332;
  --color-data-teal: #00897B;
  --color-gold: #C4960C;
  --color-white: #FFFFFF;

  /* Typography */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Source Serif 4', serif;
  --font-ui: 'Inter', sans-serif;
  --font-bangla-heading: 'Noto Sans Bengali', sans-serif;
  --font-bangla-body: 'Noto Serif Bengali', serif;

  /* Spacing & Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.12);
  --max-content: 1200px;
  --max-text: 720px;
}`}</pre>
      </div>
    </div>
  );
}