import Logo from "../Logo";
import svgPaths from "../../../imports/svg-07alip6cox";

function MapIcon({ size = 80, color = "#006A4E" }: { size?: number; color?: string }) {
  const scale = size / 500;
  return (
    <svg width={size} height={size} viewBox="0 0 500 500" fill="none">
      <g transform={`translate(${145 * scale / scale}, ${50 * scale / scale}) scale(0.5)`}>
        <g fill={color} fillRule="evenodd" stroke="none">
          <path d={svgPaths.pcba0880} />
          <path d={svgPaths.p29903100} />
          <path d={svgPaths.p300d0e40} />
          <path d={svgPaths.p232b00} />
          <path d={svgPaths.p3ea18b00} />
          <path d={svgPaths.p337ee780} />
          <path d={svgPaths.p30526900} />
          <path d={svgPaths.p95b26a0} />
        </g>
      </g>
    </svg>
  );
}

function LogoVariation({
  title,
  description,
  bg = "bg-white",
  children,
}: {
  title: string;
  description: string;
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div className={`${bg} rounded-2xl p-8 flex items-center justify-center min-h-[240px] border border-gray-200 shadow-sm`}>
        {children}
      </div>
      <div>
        <p className="text-[#1A2332] text-[14px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>{title}</p>
        <p className="text-[#1A2332]/50 text-[12px] mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export default function LogoSystem() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
          Logo System
        </h1>
        <p className="text-[#1A2332]/60 text-[15px] mt-2 max-w-2xl" style={{ lineHeight: 1.7 }}>
          "The Intelligence Map" — a geometric Bangladesh silhouette with AI neural network overlay. 12 official variations for every use case.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1. Primary Horizontal */}
        <LogoVariation title="1. Primary Horizontal" description="Intelligence Map icon + name + tagline. Default usage.">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 shrink-0"><Logo size={64} /></div>
            <div>
              <div className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '22px' }}>
                Bangladesh<span style={{ fontWeight: 800 }}> AI</span>
              </div>
              <div className="text-[#1A2332]/50 text-[11px] tracking-[0.12em] mt-0.5" style={{ fontWeight: 500 }}>
                Intelligence Builds Nations
              </div>
            </div>
          </div>
        </LogoVariation>

        {/* 2. Primary Horizontal Bangla */}
        <LogoVariation title="2. Primary Horizontal — Bangla" description="Full Bangla version for Bangla-first contexts.">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 shrink-0"><Logo size={64} /></div>
            <div>
              <div className="text-[#1A2332]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700, fontSize: '22px' }}>
                বাংলাদেশ এআই
              </div>
              <div className="text-[#1A2332]/50 text-[12px] mt-0.5" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500 }}>
                দেশ গড়ি বুদ্ধিমত্তায়
              </div>
            </div>
          </div>
        </LogoVariation>

        {/* 3. Bilingual */}
        <LogoVariation title="3. Primary Horizontal — Bilingual" description="English + Bangla for international contexts.">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 shrink-0"><Logo size={64} /></div>
            <div>
              <div className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px' }}>
                Bangladesh AI
              </div>
              <div className="text-[#1A2332]/50 text-[13px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500 }}>
                বাংলাদেশ এআই
              </div>
              <div className="text-[#1A2332]/40 text-[10px] mt-1 tracking-wide" style={{ fontWeight: 500 }}>
                Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়
              </div>
            </div>
          </div>
        </LogoVariation>

        {/* 4. Stacked/Vertical */}
        <LogoVariation title="4. Stacked / Vertical" description="Square formats, social cards, print headers.">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto"><Logo size={80} /></div>
            <div className="text-[#1A2332] mt-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '22px' }}>
              Bangladesh AI
            </div>
            <div className="text-[#1A2332]/50 text-[11px] tracking-[0.12em] mt-1" style={{ fontWeight: 500 }}>
              Intelligence Builds Nations
            </div>
          </div>
        </LogoVariation>

        {/* 5. Stacked Bangla */}
        <LogoVariation title="5. Stacked — Bangla" description="Bangla-first stacked version.">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto"><Logo size={80} /></div>
            <div className="text-[#1A2332] mt-4" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700, fontSize: '22px' }}>
              বাংলাদেশ এআই
            </div>
            <div className="text-[#1A2332]/50 text-[13px] mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500 }}>
              দেশ গড়ি বুদ্ধিমত্তায়
            </div>
          </div>
        </LogoVariation>

        {/* 6. Icon Only */}
        <LogoVariation title="6. Icon Only (Symbol Mark)" description="Favicon, app icon, profile pictures, watermarks.">
          <div className="flex items-end gap-6">
            {[16, 32, 48, 64, 128].map((s) => (
              <div key={s} className="text-center">
                <div className="bg-gray-50 rounded p-1 inline-block" style={{ width: Math.max(s, 24), height: Math.max(s, 24) }}>
                  <Logo size={s} />
                </div>
                <div className="text-[10px] text-[#1A2332]/40 mt-1">{s}px</div>
              </div>
            ))}
          </div>
        </LogoVariation>

        {/* 7. White / Reversed */}
        <LogoVariation title="7. White / Reversed" description="For dark backgrounds." bg="bg-[#1A2332]">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 shrink-0"><Logo size={64} color="#FFFFFF" /></div>
            <div>
              <div className="text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '22px' }}>
                Bangladesh AI
              </div>
              <div className="text-white/50 text-[11px] tracking-[0.12em] mt-0.5" style={{ fontWeight: 500 }}>
                Intelligence Builds Nations
              </div>
            </div>
          </div>
        </LogoVariation>

        {/* 8. Mono Dark */}
        <LogoVariation title="8. Mono Dark" description="Single color for formal documents, print, fax.">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 shrink-0"><Logo size={64} color="#1A2332" /></div>
            <div>
              <div className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '22px' }}>
                Bangladesh AI
              </div>
              <div className="text-[#1A2332]/40 text-[11px] tracking-[0.12em] mt-0.5" style={{ fontWeight: 500 }}>
                Intelligence Builds Nations
              </div>
            </div>
          </div>
        </LogoVariation>

        {/* 9. Government Seal */}
        <LogoVariation title="9. Government-Grade Formal" description="Policy documents, government submissions, formal letters.">
          <div className="text-center">
            <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="95" stroke="#006A4E" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="90" stroke="#C4960C" strokeWidth="1" fill="none" opacity="0.5" />
              {/* Map inside */}
              <g transform="translate(58, 30) scale(0.2)">
                <g fill="#006A4E" fillRule="evenodd" stroke="none">
                  <path d={svgPaths.pcba0880} />
                  <path d={svgPaths.p29903100} />
                  <path d={svgPaths.p300d0e40} />
                  <path d={svgPaths.p232b00} />
                  <path d={svgPaths.p3ea18b00} />
                  <path d={svgPaths.p337ee780} />
                  <path d={svgPaths.p30526900} />
                  <path d={svgPaths.p95b26a0} />
                </g>
              </g>
              {/* Gold node accents */}
              {[[100, 58], [120, 72], [88, 85], [105, 100], [95, 115]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="2" fill="#C4960C" opacity="0.8" />
              ))}
              {/* Curved text simulation */}
              <text x="100" y="175" textAnchor="middle" fill="#006A4E" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="500">
                Intelligence Builds Nations
              </text>
            </svg>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-[#006A4E] text-[10px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>Bangladesh AI</span>
              <span className="text-[#1A2332]/30 text-[8px]">·</span>
              <span className="text-[#006A4E]/60 text-[10px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>বাংলাদেশ এআই</span>
            </div>
          </div>
        </LogoVariation>

        {/* 10. Embossed / Stamp */}
        <LogoVariation title="10. Embossed / Stamp" description="Certificates, watermarks, embossed stationery." bg="bg-[#F5F5F0]">
          <div className="text-center">
            <svg width="140" height="140" viewBox="0 0 500 500" fill="none">
              <circle cx="250" cy="250" r="240" stroke="#006A4E" strokeWidth="3" fill="none" opacity="0.4" />
              <g transform="translate(145, 50) scale(0.5)">
                <g fill="none" stroke="#006A4E" strokeWidth="3" opacity="0.5" fillRule="evenodd">
                  <path d={svgPaths.pcba0880} />
                  <path d={svgPaths.p29903100} />
                  <path d={svgPaths.p300d0e40} />
                  <path d={svgPaths.p232b00} />
                  <path d={svgPaths.p3ea18b00} />
                  <path d={svgPaths.p337ee780} />
                  <path d={svgPaths.p30526900} />
                  <path d={svgPaths.p95b26a0} />
                </g>
              </g>
            </svg>
          </div>
        </LogoVariation>

        {/* 11. Full Tagline */}
        <LogoVariation title="11. Logo with Full Tagline Set" description="Letterheads and title pages.">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto"><Logo size={64} /></div>
            <div className="text-[#1A2332] mt-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px' }}>
              Bangladesh AI
            </div>
            <div className="text-[#1A2332]/60 text-[12px] tracking-[0.1em] mt-1" style={{ fontWeight: 500 }}>
              Intelligence Builds Nations
            </div>
            <div className="text-[#1A2332]/40 text-[11px] mt-1" style={{ fontWeight: 500 }}>
              Research · Advocacy · Education
            </div>
          </div>
        </LogoVariation>

        {/* 12. Clear Space Guide */}
        <LogoVariation title="12. Clear Space & Minimum Size" description="Padding rules and minimum rendering size.">
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="border-2 border-dashed border-[#006A4E]/30 p-6 rounded-lg">
                <div className="w-16 h-16"><Logo size={64} /></div>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-1 text-[9px] text-[#006A4E]" style={{ fontWeight: 600 }}>1× height</div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-[9px] text-[#006A4E] rotate-90" style={{ fontWeight: 600 }}>1× height</div>
            </div>
            <div className="text-[11px] text-[#1A2332]/50 space-y-1">
              <p>Min: 120px digital / 25mm print</p>
              <p>Clear space: 1× icon height all sides</p>
            </div>
          </div>
        </LogoVariation>
      </div>

      {/* Do's and Don'ts */}
      <div className="mt-16">
        <h2 className="mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px', color: '#1A2332' }}>
          Logo Misuse Guide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Don't stretch", style: { transform: "scaleX(1.5)" } },
            { label: "Don't rotate", style: { transform: "rotate(25deg)" } },
            { label: "Don't recolor", style: { filter: "hue-rotate(180deg)" } },
            { label: "Don't add shadows", style: { filter: "drop-shadow(4px 4px 4px rgba(0,0,0,0.5))" } },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-6 border border-red-200 text-center">
              <div className="w-14 h-14 mx-auto" style={item.style}><Logo size={56} /></div>
              <div className="flex items-center justify-center gap-1 mt-4">
                <span className="text-red-500 text-[14px]">✕</span>
                <span className="text-[12px] text-red-500" style={{ fontWeight: 600 }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}