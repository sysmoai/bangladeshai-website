export default function Typography() {
  const englishScale = [
    { label: "Display / Hero", font: "Plus Jakarta Sans", weight: 800, size: "56px", sample: "Intelligence Builds Nations" },
    { label: "H1", font: "Plus Jakarta Sans", weight: 700, size: "40px", sample: "Bangladesh AI Readiness" },
    { label: "H2", font: "Plus Jakarta Sans", weight: 600, size: "30px", sample: "Research Framework" },
    { label: "H3", font: "Plus Jakarta Sans", weight: 500, size: "22px", sample: "Evidence-Based Policy" },
    { label: "Body", font: "Source Serif 4", weight: 400, size: "17px", sample: "Bangladesh's AI readiness score stands at 47.12 out of 100, ranking 80th globally among 193 countries assessed. This comprehensive analysis examines critical gaps across governance, infrastructure, and human capital." },
    { label: "Data / Stats", font: "Inter", weight: 700, size: "48px", sample: "47.12" },
    { label: "Caption / Meta", font: "Inter", weight: 400, size: "13px", sample: "Source: Oxford Insights AI Readiness Index 2024 · Last updated March 26, 2026" },
    { label: "Navigation", font: "Inter", weight: 500, size: "15px", sample: "Research   About   Blog   Contact" },
    { label: "Button", font: "Inter", weight: 600, size: "15px", sample: "Read the Research" },
  ];

  const banglaScale = [
    { label: "শিরোনাম (Heading)", font: "Noto Sans Bengali", weight: 700, size: "42px", sample: "দেশ গড়ি বুদ্ধিমত্তায়" },
    { label: "উপশিরোনাম (H2)", font: "Noto Sans Bengali", weight: 600, size: "32px", sample: "গবেষণা কাঠামো" },
    { label: "H3", font: "Noto Sans Bengali", weight: 500, size: "24px", sample: "প্রমাণভিত্তিক নীতি" },
    { label: "বডি (Body)", font: "Noto Serif Bengali", weight: 400, size: "19px", sample: "বাংলাদেশের কৃত্রিম বুদ্ধিমত্তা প্রস্তুতির স্কোর ১০০-এর মধ্যে ৪৭.১২, যা বিশ্বব্যাপী ১৯৩টি দেশের মধ্যে ৮০তম অবস্থানে। এই ব্যাপক বিশ্লেষণ শাসন, অবকাঠামো এবং মানব পুঁজি জুড়ে গুরুত্বপূর্ণ ফাঁক পরীক্ষা করে।" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
          Typography
        </h1>
        <p className="text-[#1A2332]/60 text-[15px] mt-2 max-w-2xl" style={{ lineHeight: 1.7 }}>
          A bilingual type system pairing Plus Jakarta Sans for authority, Source Serif 4 for readability, Inter for UI clarity, and Noto Bengali for native support.
        </p>
      </div>

      {/* English Scale */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        English Type Scale
      </h2>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-12">
        {englishScale.map((item, i) => (
          <div key={item.label} className={`p-6 lg:p-8 ${i < englishScale.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <div className="lg:w-48 shrink-0">
                <span className="text-[11px] text-[#006A4E] uppercase tracking-wider" style={{ fontWeight: 600 }}>{item.label}</span>
                <div className="text-[11px] text-[#1A2332]/40 mt-1">
                  {item.font} · {item.weight} · {item.size}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[#1A2332] break-words"
                  style={{
                    fontFamily: `'${item.font}', sans-serif`,
                    fontWeight: item.weight,
                    fontSize: item.size,
                    lineHeight: item.label === "Body" ? 1.65 : 1.3,
                  }}
                >
                  {item.sample}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bangla Scale */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Bangla Type Scale
      </h2>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-12">
        {banglaScale.map((item, i) => (
          <div key={item.label} className={`p-6 lg:p-8 ${i < banglaScale.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <div className="lg:w-48 shrink-0">
                <span className="text-[11px] text-[#006A4E] uppercase tracking-wider" style={{ fontWeight: 600 }}>{item.label}</span>
                <div className="text-[11px] text-[#1A2332]/40 mt-1">
                  {item.font} · {item.weight} · {item.size}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[#1A2332] break-words"
                  style={{
                    fontFamily: `'${item.font}', sans-serif`,
                    fontWeight: item.weight,
                    fontSize: item.size,
                    lineHeight: item.label.includes("Body") ? 1.9 : 1.4,
                  }}
                >
                  {item.sample}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tagline Typography */}
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        Tagline Typography
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#006A4E] rounded-2xl p-8 text-center">
          <p className="text-white/50 text-[10px] uppercase tracking-widest mb-4" style={{ fontWeight: 600 }}>English — Primary</p>
          <p className="text-white tracking-[0.12em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '20px' }}>
            Intelligence Builds Nations
          </p>
        </div>
        <div className="bg-[#006A4E] rounded-2xl p-8 text-center">
          <p className="text-white/50 text-[10px] uppercase tracking-widest mb-4" style={{ fontWeight: 600 }}>Bangla — Primary</p>
          <p className="text-white" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 600, fontSize: '22px' }}>
            দেশ গড়ি বুদ্ধিমত্তায়
          </p>
        </div>
      </div>

      {/* Font Stack */}
      <div className="bg-[#1A2332] rounded-2xl p-6 lg:p-8">
        <h3 className="text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
          Font Stack (CSS)
        </h3>
        <pre className="text-[12px] text-white/60 overflow-x-auto" style={{ fontFamily: "monospace", lineHeight: 1.8 }}>{`--font-heading: 'Plus Jakarta Sans', sans-serif;
--font-body: 'Source Serif 4', serif;
--font-ui: 'Inter', sans-serif;
--font-bangla-heading: 'Noto Sans Bengali', sans-serif;
--font-bangla-body: 'Noto Serif Bengali', serif;

/* Bangla needs +2px per heading level */
/* Bangla body line-height: 1.8-2.0 */`}</pre>
      </div>
    </div>
  );
}
