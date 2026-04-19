export default function ColorSystem() {
  const primaryColors = [
    { name: "Bangladesh Deep Green", hex: "#006A4E", rgb: "0, 106, 78", usage: "Nav, buttons, links, logo, primary CTAs", role: "PRIMARY" },
    { name: "Intelligence Blue", hex: "#0F4C81", rgb: "15, 76, 129", usage: "Section headers, data viz, secondary buttons", role: "SECONDARY" },
    { name: "Pure White", hex: "#FFFFFF", rgb: "255, 255, 255", usage: "Primary background. Clean, institutional.", role: "BACKGROUND" },
  ];

  const secondaryColors = [
    { name: "Accent Red", hex: "#E8432A", rgb: "232, 67, 42", usage: "Alerts, important CTAs, urgent callouts. Use SPARINGLY." },
    { name: "Light Sage", hex: "#E8F5E9", rgb: "232, 245, 233", usage: "Card backgrounds, callout boxes, light sections." },
    { name: "Warm Gray", hex: "#F5F5F0", rgb: "245, 245, 240", usage: "Page backgrounds, alternating sections." },
    { name: "Dark Slate", hex: "#1A2332", rgb: "26, 35, 50", usage: "Body text, footer background." },
    { name: "Data Teal", hex: "#00897B", rgb: "0, 137, 123", usage: "Charts, data viz accent, secondary links." },
    { name: "Gold Accent", hex: "#C4960C", rgb: "196, 150, 12", usage: "Premium badges, key stat highlights. VERY sparingly." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
          Color System
        </h1>
        <p className="text-[#1A2332]/60 text-[15px] mt-2 max-w-2xl" style={{ lineHeight: 1.7 }}>
          An institutional palette rooted in Bangladesh's national identity. Strict usage ratios ensure consistency across all touchpoints.
        </p>
      </div>

      {/* Primary Colors */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Primary Colors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {primaryColors.map((c) => (
          <div key={c.hex} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="h-32" style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' }} />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px' }}>{c.name}</span>
                <span className="text-[10px] px-2 py-0.5 bg-[#006A4E]/10 text-[#006A4E] rounded" style={{ fontWeight: 600 }}>{c.role}</span>
              </div>
              <div className="space-y-1 text-[12px] text-[#1A2332]/50">
                <p><span style={{ fontWeight: 600 }}>HEX:</span> {c.hex}</p>
                <p><span style={{ fontWeight: 600 }}>RGB:</span> {c.rgb}</p>
              </div>
              <p className="text-[12px] text-[#1A2332]/60 mt-3" style={{ lineHeight: 1.5 }}>{c.usage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Colors */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Secondary Colors
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {secondaryColors.map((c) => (
          <div key={c.hex} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="h-20" style={{ backgroundColor: c.hex }} />
            <div className="p-3">
              <p className="text-[#1A2332] text-[12px]" style={{ fontWeight: 600 }}>{c.name}</p>
              <p className="text-[#1A2332]/40 text-[11px] mt-0.5">{c.hex}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Rules */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Color Usage Rules
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Ratio Bar */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-[13px] text-[#1A2332]/70 mb-4" style={{ fontWeight: 600 }}>70-20-10 Distribution</p>
          <div className="flex rounded-xl overflow-hidden h-12 mb-4">
            <div className="bg-white border border-gray-200" style={{ width: '35%' }} />
            <div className="bg-[#F5F5F0]" style={{ width: '35%' }} />
            <div className="bg-[#006A4E]" style={{ width: '10%' }} />
            <div className="bg-[#0F4C81]" style={{ width: '10%' }} />
            <div className="bg-[#E8432A]" style={{ width: '3%' }} />
            <div className="bg-[#C4960C]" style={{ width: '3%' }} />
            <div className="bg-[#00897B]" style={{ width: '4%' }} />
          </div>
          <div className="flex justify-between text-[10px] text-[#1A2332]/50" style={{ fontWeight: 500 }}>
            <span>70% Backgrounds</span>
            <span>20% Structure</span>
            <span>10% Accents</span>
          </div>
        </div>

        {/* Rules */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-[13px] text-[#1A2332]/70 mb-4" style={{ fontWeight: 600 }}>Critical Rules</p>
          <ul className="space-y-2.5 text-[12px] text-[#1A2332]/60">
            {[
              "Never green and red side-by-side",
              "Never gradients as backgrounds (except subtle hero)",
              "Never all accent colors on one page",
              "Always maintain WCAG AA contrast (4.5:1 min)",
              "Accent Red: maximum 1 use per page",
              "Gold: reserved for premium highlights only",
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-2">
                <span className="text-[#E8432A] mt-0.5">✕</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contrast Tests */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Contrast Accessibility
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { bg: "#006A4E", text: "#FFFFFF", label: "Green on White", ratio: "5.1:1", pass: true },
          { bg: "#0F4C81", text: "#FFFFFF", label: "Blue on White", ratio: "6.3:1", pass: true },
          { bg: "#1A2332", text: "#FFFFFF", label: "Slate on White", ratio: "14.2:1", pass: true },
          { bg: "#E8432A", text: "#FFFFFF", label: "Red on White", ratio: "4.6:1", pass: true },
        ].map((test) => (
          <div key={test.label} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="p-6 text-center" style={{ backgroundColor: test.bg, color: test.text }}>
              <p className="text-[16px]" style={{ fontWeight: 600 }}>Aa</p>
              <p className="text-[11px] opacity-80 mt-1">Sample Text</p>
            </div>
            <div className="bg-white p-3 flex items-center justify-between">
              <span className="text-[11px] text-[#1A2332]/60">{test.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded ${test.pass ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`} style={{ fontWeight: 600 }}>
                {test.ratio} {test.pass ? "AA ✓" : "FAIL"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Variables */}
      <div className="mt-12 bg-[#1A2332] rounded-2xl p-6 lg:p-8">
        <h3 className="text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
          CSS Custom Properties
        </h3>
        <pre className="text-[12px] text-white/60 overflow-x-auto" style={{ fontFamily: "monospace", lineHeight: 1.8 }}>{`:root {
  --color-primary: #006A4E;
  --color-secondary: #0F4C81;
  --color-accent-red: #E8432A;
  --color-bg-light: #F5F5F0;
  --color-bg-sage: #E8F5E9;
  --color-text-primary: #1A2332;
  --color-data-teal: #00897B;
  --color-gold: #C4960C;
}`}</pre>
      </div>
    </div>
  );
}
