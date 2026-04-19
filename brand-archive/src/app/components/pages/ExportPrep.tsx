import Logo from "../Logo";
import { Check, Copy, Download, FileImage, FileCode, Layers, Type, Palette, Grid3X3, MonitorSmartphone, CheckCircle } from "lucide-react";
import { useState } from "react";

// Reusable copy button
function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] text-[#1A2332]/40 hover:text-[#006A4E] hover:bg-[#006A4E]/5 transition"
    >
      {copied ? <Check size={10} /> : <Copy size={10} />}
    </button>
  );
}

function SectionHeader({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) {
  return (
    <div className="mb-8 pb-4 border-b-2 border-[#006A4E]/10">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-[#006A4E]/10 flex items-center justify-center">
          <Icon size={16} className="text-[#006A4E]" />
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '22px', color: '#1A2332' }}>
          {title}
        </h2>
      </div>
      <p className="text-[#1A2332]/50 text-[13px] ml-11">{subtitle}</p>
    </div>
  );
}

// ─── Logo File Card ───
function LogoFileCard({
  filename, desc, children, bgClass = "bg-white", darkPreview = false,
}: {
  filename: string; desc: string; children: React.ReactNode; bgClass?: string; darkPreview?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
      <div className={`${bgClass} p-6 flex items-center justify-center min-h-[160px] ${darkPreview ? 'bg-[#1A2332]' : ''}`}>
        {children}
      </div>
      <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#1A2332] text-[12px]" style={{ fontWeight: 600, fontFamily: "monospace" }}>{filename}</p>
            <p className="text-[#1A2332]/40 text-[11px] mt-0.5">{desc}</p>
          </div>
          <div className="flex gap-1">
            <span className="px-1.5 py-0.5 bg-[#006A4E]/10 text-[#006A4E] rounded text-[9px]" style={{ fontWeight: 600 }}>SVG</span>
            <span className="px-1.5 py-0.5 bg-[#0F4C81]/10 text-[#0F4C81] rounded text-[9px]" style={{ fontWeight: 600 }}>PNG</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Social Asset Card ───
function SocialAssetCard({
  filename, dims, children, bgClass = "",
}: {
  filename: string; dims: string; children: React.ReactNode; bgClass?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className={`${bgClass} overflow-hidden rounded-t-xl`}>
        {children}
      </div>
      <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <p className="text-[11px]" style={{ fontWeight: 600, fontFamily: "monospace", color: '#1A2332' }}>{filename}</p>
        <span className="text-[10px] text-[#1A2332]/40" style={{ fontWeight: 500 }}>{dims}</span>
      </div>
    </div>
  );
}

// ─── Token Row ───
function TokenRow({ token, value, preview }: { token: string; value: string; preview?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
      {preview}
      <code className="text-[12px] text-[#006A4E] flex-1 min-w-0 truncate" style={{ fontFamily: "monospace" }}>{token}</code>
      <code className="text-[12px] text-[#1A2332]/60 shrink-0" style={{ fontFamily: "monospace" }}>{value}</code>
      <CopyBtn text={`${token}: ${value};`} />
    </div>
  );
}

export default function ExportPrep() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-[#006A4E] text-white text-[10px] rounded" style={{ fontWeight: 700 }}>EXPORT READY</span>
          <span className="px-2.5 py-1 bg-[#0F4C81]/10 text-[#0F4C81] text-[10px] rounded" style={{ fontWeight: 600 }}>Developer Handoff</span>
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(32px, 4vw, 44px)', color: '#1A2332', lineHeight: 1.15 }}>
          Export Preparation
        </h1>
        <p className="text-[#1A2332]/55 text-[16px] mt-3 max-w-2xl" style={{ lineHeight: 1.7, fontFamily: "'Source Serif 4', serif" }}>
          Complete asset inventory and design token reference for the Bangladesh AI website build.
          Every logo, social asset, color, font, and spacing value — ready for development.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* STEP 1: LOGO FILES */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionHeader icon={Layers} title="Step 1 — Logo Files" subtitle="9 logo variations × SVG + PNG exports" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. Horizontal English */}
          <LogoFileCard filename="logo-horizontal-en" desc="Primary horizontal · English">
            <div className="flex items-center gap-4">
              <Logo size={48} />
              <div>
                <p className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px' }}>Bangladesh AI</p>
                <p className="text-[#1A2332]/50 text-[11px] tracking-[0.06em]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
              </div>
            </div>
          </LogoFileCard>

          {/* 2. Horizontal Bangla */}
          <LogoFileCard filename="logo-horizontal-bn" desc="Primary horizontal · Bangla">
            <div className="flex items-center gap-4">
              <Logo size={48} />
              <div>
                <p className="text-[#1A2332]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700, fontSize: '20px' }}>বাংলাদেশ এআই</p>
                <p className="text-[#1A2332]/50 text-[12px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500 }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
              </div>
            </div>
          </LogoFileCard>

          {/* 3. Horizontal Bilingual */}
          <LogoFileCard filename="logo-horizontal-bilingual" desc="Primary horizontal · Bilingual">
            <div className="flex items-center gap-4">
              <Logo size={48} />
              <div>
                <p className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '16px' }}>Bangladesh AI</p>
                <p className="text-[#1A2332]/50 text-[10px] tracking-[0.04em]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
                <p className="text-[#1A2332]/40 text-[10px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500 }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
              </div>
            </div>
          </LogoFileCard>

          {/* 4. Stacked English */}
          <LogoFileCard filename="logo-stacked-en" desc="Vertical / stacked · English">
            <div className="text-center">
              <div className="flex justify-center mb-3"><Logo size={52} /></div>
              <p className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '16px' }}>Bangladesh AI</p>
              <p className="text-[#1A2332]/50 text-[10px] tracking-[0.06em]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
            </div>
          </LogoFileCard>

          {/* 5. Stacked Bangla */}
          <LogoFileCard filename="logo-stacked-bn" desc="Vertical / stacked · Bangla">
            <div className="text-center">
              <div className="flex justify-center mb-3"><Logo size={52} /></div>
              <p className="text-[#1A2332]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700, fontSize: '18px' }}>বাংলাদেশ এআই</p>
              <p className="text-[#1A2332]/50 text-[11px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500 }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
            </div>
          </LogoFileCard>

          {/* 6. Icon Only */}
          <LogoFileCard filename="logo-icon" desc="Icon only · Map mark">
            <Logo size={80} />
          </LogoFileCard>

          {/* 7. White / Reversed */}
          <LogoFileCard filename="logo-white" desc="White reversed · Dark backgrounds" darkPreview>
            <div className="flex items-center gap-4">
              <Logo size={48} color="#FFFFFF" />
              <div>
                <p className="text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px' }}>Bangladesh AI</p>
                <p className="text-white/50 text-[11px] tracking-[0.06em]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
              </div>
            </div>
          </LogoFileCard>

          {/* 8. Mono Dark */}
          <LogoFileCard filename="logo-mono-dark" desc="Single color · Dark Slate #1A2332">
            <div className="flex items-center gap-4">
              <Logo size={48} color="#1A2332" />
              <div>
                <p className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px' }}>Bangladesh AI</p>
                <p className="text-[#1A2332]/40 text-[11px] tracking-[0.06em]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
              </div>
            </div>
          </LogoFileCard>

          {/* 9. Seal */}
          <LogoFileCard filename="logo-seal" desc="Government-grade formal seal">
            <div className="relative w-[120px] h-[120px]">
              {/* Circular frame */}
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#006A4E" strokeWidth="2.5" />
                <circle cx="100" cy="100" r="88" fill="none" stroke="#006A4E" strokeWidth="0.5" opacity="0.3" />
                {/* Top curved text */}
                <defs>
                  <path id="topArc" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
                  <path id="bottomArc" d="M 170,108 A 70,70 0 0,1 30,108" fill="none" />
                </defs>
                <text fill="#006A4E" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '13px' }}>
                  <textPath href="#topArc" startOffset="50%" textAnchor="middle">Bangladesh AI</textPath>
                </text>
                <text fill="#006A4E" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 600, fontSize: '11px' }}>
                  <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">বাংলাদেশ এআই</textPath>
                </text>
                {/* Small dots as separators */}
                <circle cx="30" cy="100" r="2" fill="#C4960C" />
                <circle cx="170" cy="100" r="2" fill="#C4960C" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Logo size={44} />
                <p className="text-[#1A2332]/40 text-[6px] mt-1 tracking-[0.04em]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
              </div>
            </div>
          </LogoFileCard>
        </div>
      </section>

      {/* ─── Icon Size Matrix ─── */}
      <section className="mb-16">
        <h3 className="mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px', color: '#1A2332' }}>
          Favicon & App Icon Exports
        </h3>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex flex-wrap items-end gap-6">
            {[
              { size: 16, label: "favicon-16.png" },
              { size: 32, label: "favicon-32.png" },
              { size: 48, label: "icon-48.png" },
              { size: 64, label: "icon-64.png" },
              { size: 80, label: "icon-128.png", displaySize: 80 },
              { size: 90, label: "apple-touch-icon.png (180)", displaySize: 90 },
              { size: 96, label: "icon-192.png", displaySize: 96 },
              { size: 120, label: "icon-512.png", displaySize: 120 },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div
                  className="bg-[#F5F5F0] rounded-lg flex items-center justify-center mx-auto mb-2"
                  style={{ width: item.displaySize ?? item.size, height: item.displaySize ?? item.size, minWidth: 20, minHeight: 20 }}
                >
                  <Logo size={Math.max(item.size, 16)} />
                </div>
                <p className="text-[9px] text-[#1A2332]/50" style={{ fontFamily: "monospace", fontWeight: 500 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* STEP 2: SOCIAL MEDIA ASSETS */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionHeader icon={FileImage} title="Step 2 — Social Media Assets" subtitle="9 social media exports as PNG" />

        {/* OG Images */}
        <h3 className="text-[#1A2332] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px' }}>OG / Share Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Default OG */}
          <SocialAssetCard filename="og-default.png" dims="1200×630">
            <div className="bg-gradient-to-br from-[#006A4E] to-[#004d38] p-6 text-white" style={{ aspectRatio: '1200/630' }}>
              <div className="h-full flex flex-col justify-between">
                <div className="w-8 h-8"><Logo size={32} color="#FFFFFF" /></div>
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '20px' }}>Bangladesh AI</p>
                  <p className="text-white/70 text-[12px] mt-0.5" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
                  <p className="text-white/50 text-[11px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
                </div>
                <p className="text-white/30 text-[10px]">bangladeshai.org</p>
              </div>
            </div>
          </SocialAssetCard>

          {/* Blog OG variants stacked */}
          <div className="space-y-3">
            {[
              { filename: "og-blog-template-green.png", bg: "bg-gradient-to-br from-[#006A4E] to-[#004d38]", text: "text-white", tagC: "bg-white/20 text-white" },
              { filename: "og-blog-template-white.png", bg: "bg-gradient-to-br from-white to-gray-100 border border-gray-200", text: "text-[#1A2332]", tagC: "bg-[#006A4E]/10 text-[#006A4E]" },
              { filename: "og-blog-template-blue.png", bg: "bg-gradient-to-br from-[#0F4C81] to-[#0a3560]", text: "text-white", tagC: "bg-white/20 text-white" },
            ].map((v) => (
              <div key={v.filename} className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className={`${v.bg} p-3 w-28 shrink-0`} style={{ aspectRatio: '1200/630' }}>
                  <span className={`text-[7px] px-1 py-0.5 rounded ${v.tagC}`} style={{ fontWeight: 600 }}>Policy Brief</span>
                  <p className={`${v.text} text-[8px] mt-1`} style={{ fontWeight: 600 }}>18 Critical Gaps...</p>
                </div>
                <div>
                  <p className="text-[11px]" style={{ fontFamily: "monospace", fontWeight: 600, color: '#1A2332' }}>{v.filename}</p>
                  <p className="text-[10px] text-[#1A2332]/40">1200×630</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Images */}
        <h3 className="text-[#1A2332] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px' }}>Profile Images</h3>
        <div className="flex flex-wrap gap-5 mb-8">
          {[
            { filename: "linkedin-profile.png", label: "LinkedIn" },
            { filename: "twitter-profile.png", label: "X / Twitter" },
          ].map((p) => (
            <div key={p.filename} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="w-24 h-24 bg-[#006A4E] flex items-center justify-center">
                <Logo size={56} color="#FFFFFF" />
              </div>
              <div className="px-3 py-2 bg-gray-50/50">
                <p className="text-[10px]" style={{ fontFamily: "monospace", fontWeight: 600, color: '#1A2332' }}>{p.filename}</p>
                <p className="text-[9px] text-[#1A2332]/40">400×400</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cover / Banner Images */}
        <h3 className="text-[#1A2332] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px' }}>Cover & Banner Images</h3>
        <div className="space-y-4">
          {/* LinkedIn Cover */}
          <SocialAssetCard filename="linkedin-cover.png" dims="1584×396">
            <div className="bg-gradient-to-r from-[#006A4E] via-[#005A41] to-[#0F4C81] p-4 text-white" style={{ aspectRatio: '1584/396' }}>
              <div className="h-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 hidden sm:block"><Logo size={28} color="#FFFFFF" /></div>
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14px' }}>Bangladesh AI</p>
                    <p className="text-white/60 text-[9px]" style={{ fontWeight: 500 }}>Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</p>
                  </div>
                </div>
                <div className="hidden md:flex gap-4 text-center">
                  {[{ val: "47.12", l: "AI Score" }, { val: "#80", l: "Rank" }, { val: "170M", l: "People" }].map((s) => (
                    <div key={s.l}>
                      <div className="text-white text-[14px]" style={{ fontWeight: 700 }}>{s.val}</div>
                      <div className="text-white/40 text-[8px]">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SocialAssetCard>

          {/* Twitter Header */}
          <SocialAssetCard filename="twitter-header.png" dims="1500×500">
            <div className="bg-[#1A2332] p-4 text-white text-center" style={{ aspectRatio: '1500/500' }}>
              <div className="h-full flex items-center justify-center">
                <div>
                  <p className="text-white/80" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '16px' }}>Intelligence Builds Nations</p>
                  <p className="text-white/50 text-[12px] mt-0.5" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
                  <p className="text-white/30 text-[9px] mt-2">bangladeshai.org</p>
                </div>
              </div>
            </div>
          </SocialAssetCard>

          {/* Facebook Cover */}
          <SocialAssetCard filename="facebook-cover.png" dims="820×312">
            <div className="bg-gradient-to-r from-[#006A4E] to-[#0F4C81] p-4 text-white" style={{ aspectRatio: '820/312' }}>
              <div className="h-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 hidden sm:block"><Logo size={28} color="#FFFFFF" /></div>
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14px' }}>Bangladesh AI</p>
                    <p className="text-white/60 text-[9px]" style={{ fontWeight: 500 }}>Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</p>
                  </div>
                </div>
                <p className="text-white/30 text-[9px] hidden sm:block">bangladeshai.org</p>
              </div>
            </div>
          </SocialAssetCard>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* STEP 3: DESIGN TOKENS */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionHeader icon={FileCode} title="Step 3 — Design Token Reference" subtitle="Complete CSS custom properties for development" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colors */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palette size={14} className="text-[#006A4E]" />
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px', color: '#1A2332' }}>Colors</h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-0">
              {[
                { token: "--color-primary", value: "#006A4E", label: "Bangladesh Deep Green" },
                { token: "--color-secondary", value: "#0F4C81", label: "Intelligence Blue" },
                { token: "--color-accent-red", value: "#E8432A", label: "Accent Red" },
                { token: "--color-bg-sage", value: "#E8F5E9", label: "Light Sage" },
                { token: "--color-bg-warm", value: "#F5F5F0", label: "Warm Gray" },
                { token: "--color-text", value: "#1A2332", label: "Dark Slate" },
                { token: "--color-teal", value: "#00897B", label: "Data Teal" },
                { token: "--color-gold", value: "#C4960C", label: "Gold Accent" },
                { token: "--color-white", value: "#FFFFFF", label: "Pure White" },
              ].map((c) => (
                <div key={c.token} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
                  <div className="w-6 h-6 rounded-md border border-gray-200 shrink-0" style={{ backgroundColor: c.value }} />
                  <div className="flex-1 min-w-0">
                    <code className="text-[11px] text-[#006A4E] block" style={{ fontFamily: "monospace" }}>{c.token}</code>
                    <span className="text-[10px] text-[#1A2332]/40">{c.label}</span>
                  </div>
                  <code className="text-[11px] text-[#1A2332]/60 shrink-0" style={{ fontFamily: "monospace" }}>{c.value}</code>
                  <CopyBtn text={c.value} />
                </div>
              ))}
            </div>
          </div>

          {/* Fonts */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Type size={14} className="text-[#006A4E]" />
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px', color: '#1A2332' }}>Fonts</h3>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
              {[
                { role: "Headings", font: "Plus Jakarta Sans", weights: "500, 600, 700, 800", sample: "Bangladesh AI", style: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 } },
                { role: "Body", font: "Source Serif 4", weights: "400, 600", sample: "Evidence-based research and analysis", style: { fontFamily: "'Source Serif 4', serif" } },
                { role: "UI / Data", font: "Inter", weights: "400, 500, 600, 700", sample: "47.12 / 100", style: { fontFamily: "'Inter', sans-serif", fontWeight: 700 } },
                { role: "Bangla Headings", font: "Noto Sans Bengali", weights: "600, 700", sample: "বাংলাদেশ এআই", style: { fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700 } },
                { role: "Bangla Body", font: "Noto Serif Bengali", weights: "400", sample: "দেশ গড়ি বুদ্ধিমত্তায়", style: { fontFamily: "'Noto Serif Bengali', serif" } },
              ].map((f) => (
                <div key={f.role} className="pb-4 border-b border-gray-50 last:pb-0 last:border-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] text-[#006A4E]" style={{ fontWeight: 600 }}>{f.role}</span>
                    <span className="text-[10px] text-[#1A2332]/40" style={{ fontFamily: "monospace" }}>w: {f.weights}</span>
                  </div>
                  <p className="text-[#1A2332] text-[16px]" style={f.style}>{f.sample}</p>
                  <code className="text-[10px] text-[#1A2332]/40 block mt-1" style={{ fontFamily: "monospace" }}>font-family: '{f.font}', {f.font.includes('Serif') ? 'serif' : 'sans-serif'}</code>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Type Scale */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Type size={14} className="text-[#006A4E]" />
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px', color: '#1A2332' }}>Type Scale</h3>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-[11px] text-[#1A2332]/50" style={{ fontWeight: 600 }}>
                  <th className="px-5 py-3">Level</th>
                  <th className="px-5 py-3">Size</th>
                  <th className="px-5 py-3">Weight</th>
                  <th className="px-5 py-3">Line Height</th>
                  <th className="px-5 py-3 hidden md:table-cell">Sample</th>
                </tr>
              </thead>
              <tbody className="text-[12px]">
                {[
                  { level: "Display", size: "56–72px", weight: "Bold / ExtraBold", lh: "1.1", sample: "Bangladesh AI", sampleStyle: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '24px' } },
                  { level: "H1", size: "36–48px", weight: "Bold", lh: "1.2", sample: "AI Readiness Score", sampleStyle: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px' } },
                  { level: "H2", size: "28–32px", weight: "SemiBold", lh: "1.3", sample: "Five Pillars of AI", sampleStyle: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '17px' } },
                  { level: "H3", size: "22–24px", weight: "Medium", lh: "1.35", sample: "Smart Government", sampleStyle: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '15px' } },
                  { level: "H4", size: "18–20px", weight: "Medium", lh: "1.4", sample: "Data Infrastructure", sampleStyle: { fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '14px' } },
                  { level: "Body", size: "17–18px", weight: "Regular", lh: "1.65", sample: "Evidence-based analysis of AI readiness.", sampleStyle: { fontFamily: "'Source Serif 4', serif", fontSize: '14px' } },
                  { level: "Body (BN)", size: "19–20px", weight: "Regular", lh: "1.8", sample: "প্রমাণভিত্তিক বিশ্লেষণ।", sampleStyle: { fontFamily: "'Noto Serif Bengali', serif", fontSize: '14px' } },
                  { level: "Small", size: "14px", weight: "Regular", lh: "1.5", sample: "Last updated March 2026", sampleStyle: { fontSize: '12px' } },
                  { level: "Caption", size: "12–13px", weight: "Regular / Medium", lh: "1.5", sample: "Source: Oxford Insights 2024", sampleStyle: { fontSize: '11px', fontWeight: 500 } },
                ].map((row) => (
                  <tr key={row.level} className="border-t border-gray-50">
                    <td className="px-5 py-3 text-[#006A4E]" style={{ fontWeight: 600 }}>{row.level}</td>
                    <td className="px-5 py-3 text-[#1A2332]/60" style={{ fontFamily: "monospace" }}>{row.size}</td>
                    <td className="px-5 py-3 text-[#1A2332]/60">{row.weight}</td>
                    <td className="px-5 py-3 text-[#1A2332]/60" style={{ fontFamily: "monospace" }}>{row.lh}</td>
                    <td className="px-5 py-3 hidden md:table-cell text-[#1A2332]" style={row.sampleStyle}>{row.sample}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Spacing, Shadows, Breakpoints in 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Spacing / Radius */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h4 className="text-[#1A2332] mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '13px' }}>Border Radius</h4>
            <div className="space-y-3">
              {[
                { token: "--radius-sm", val: "4px", style: "rounded" },
                { token: "--radius-md", val: "8px", style: "rounded-lg" },
                { token: "--radius-lg", val: "12px", style: "rounded-xl" },
              ].map((r) => (
                <div key={r.token} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#006A4E]/10 border border-[#006A4E]/20" style={{ borderRadius: r.val }} />
                  <div>
                    <code className="text-[11px] text-[#006A4E] block" style={{ fontFamily: "monospace" }}>{r.token}</code>
                    <code className="text-[10px] text-[#1A2332]/40" style={{ fontFamily: "monospace" }}>{r.val}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shadows */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h4 className="text-[#1A2332] mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '13px' }}>Shadows</h4>
            <div className="space-y-3">
              {[
                { token: "--shadow-sm", val: "0 1px 3px rgba(0,0,0,0.06)" },
                { token: "--shadow-md", val: "0 2px 8px rgba(0,0,0,0.08)" },
                { token: "--shadow-lg", val: "0 4px 16px rgba(0,0,0,0.12)" },
              ].map((s) => (
                <div key={s.token} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg" style={{ boxShadow: s.val }} />
                  <div>
                    <code className="text-[11px] text-[#006A4E] block" style={{ fontFamily: "monospace" }}>{s.token}</code>
                    <code className="text-[9px] text-[#1A2332]/40 block mt-0.5" style={{ fontFamily: "monospace" }}>{s.val}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Breakpoints */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <MonitorSmartphone size={13} className="text-[#006A4E]" />
              <h4 className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '13px' }}>Breakpoints</h4>
            </div>
            <div className="space-y-2">
              {[
                { label: "Mobile", val: "375px" },
                { label: "Tablet", val: "768px" },
                { label: "Desktop", val: "1024px" },
                { label: "Wide", val: "1440px" },
                { label: "Max Content", val: "1200px" },
                { label: "Max Text Column", val: "720px" },
              ].map((bp) => (
                <div key={bp.label} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-[12px] text-[#1A2332]/60">{bp.label}</span>
                  <code className="text-[11px] text-[#006A4E]" style={{ fontFamily: "monospace", fontWeight: 600 }}>{bp.val}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Taglines Reference ─── */}
      <section className="mb-16">
        <h3 className="mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px', color: '#1A2332' }}>
          Taglines — Exact Text for Developer
        </h3>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-[11px] text-[#1A2332]/50" style={{ fontWeight: 600 }}>
                <th className="px-5 py-3">Role</th>
                <th className="px-5 py-3">English</th>
                <th className="px-5 py-3">Bangla</th>
                <th className="px-5 py-3 w-8"></th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {[
                { role: "Primary Tagline", en: "Intelligence Builds Nations", bn: "দেশ গড়ি বুদ্ধিমত্তায়" },
                { role: "Subtitle", en: "AI Infrastructure for 170 Million", bn: "১৭ কোটি মানুষের এআই অবকাঠামো" },
                { role: "Descriptor", en: "Research · Advocacy · Education", bn: "গবেষণা · প্রচার · শিক্ষা" },
                { role: "Campaign", en: "Built on Evidence. Built for Bangladesh.", bn: "প্রমাণের উপর গড়া। বাংলাদেশের জন্য গড়া।" },
                { role: "Brand Name", en: "Bangladesh AI", bn: "বাংলাদেশ এআই" },
              ].map((t) => (
                <tr key={t.role} className="border-t border-gray-50">
                  <td className="px-5 py-3 text-[#006A4E] text-[12px]" style={{ fontWeight: 600 }}>{t.role}</td>
                  <td className="px-5 py-3 text-[#1A2332]" style={{ fontWeight: 500 }}>{t.en}</td>
                  <td className="px-5 py-3 text-[#1A2332]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500 }}>{t.bn}</td>
                  <td className="px-5 py-3"><CopyBtn text={`${t.en} | ${t.bn}`} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* STEP 4: EXPORT QUALITY CHECKLIST */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionHeader icon={CheckCircle} title="Step 4 — Export Quality Checklist" subtitle="Verify before handing off to developer" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "SVG Quality",
              items: [
                "All SVGs are clean vectors (no hidden layers)",
                "No raster images embedded in SVGs",
                "Paths optimized, no unnecessary nodes",
                "All text converted to outlines in logo SVGs",
              ],
            },
            {
              title: "PNG Quality",
              items: [
                "All PNGs exported at 2× resolution for retina",
                "Transparent backgrounds on all logo PNGs",
                "OG images have solid backgrounds (not transparent)",
                "No compression artifacts on text edges",
              ],
            },
            {
              title: "Text Accuracy",
              items: [
                '"Bangladesh AI" — correct case everywhere',
                '"Intelligence Builds Nations" — exact spelling',
                '"দেশ গড়ি বুদ্ধিমত্তায়" — every Bangla character correct',
                "Middle dots (·) used in descriptor, not bullets (•)",
              ],
            },
            {
              title: "File Naming",
              items: [
                "Kebab-case filenames (logo-horizontal-en.svg)",
                "Consistent naming convention across all exports",
                "Size suffix on icon PNGs (favicon-32.png)",
                "Platform prefix on social assets (linkedin-cover.png)",
              ],
            },
          ].map((group) => (
            <div key={group.title} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h4 className="text-[#1A2332] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '14px' }}>{group.title}</h4>
              <div className="space-y-2.5">
                {group.items.map((item) => (
                  <label key={item} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#006A4E] focus:ring-[#006A4E]" />
                    <span className="text-[#1A2332]/60 text-[13px] group-hover:text-[#1A2332] transition" style={{ lineHeight: 1.4 }}>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Full CSS Variables Block ─── */}
      <section className="mb-16">
        <h3 className="mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px', color: '#1A2332' }}>
          Complete CSS Custom Properties — Copy & Paste
        </h3>
        <div className="bg-[#1A2332] rounded-2xl p-6 lg:p-8 relative">
          <button
            onClick={() => {
              navigator.clipboard.writeText(cssBlock);
            }}
            className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white/60 hover:text-white rounded-lg text-[11px] flex items-center gap-1.5 transition"
            style={{ fontWeight: 600 }}
          >
            <Copy size={12} /> Copy All
          </button>
          <pre className="text-[12px] text-white/60 overflow-x-auto" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", lineHeight: 1.9 }}>
            {cssBlock}
          </pre>
        </div>
      </section>

      {/* ─── Asset Manifest ─── */}
      <section className="mb-10">
        <h3 className="mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px', color: '#1A2332' }}>
          Asset Manifest — Complete File List
        </h3>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
            {assetManifest.map((file) => (
              <div key={file} className="flex items-center gap-2 py-1.5 border-b border-gray-50">
                <span className="text-[10px] text-[#006A4E]">📄</span>
                <code className="text-[11px] text-[#1A2332]/70" style={{ fontFamily: "monospace" }}>{file}</code>
              </div>
            ))}
          </div>
          <p className="text-[#1A2332]/30 text-[12px] mt-4 pt-3 border-t border-gray-100">
            Total: {assetManifest.length} files · SVG + PNG for logos, PNG only for social/OG assets
          </p>
        </div>
      </section>
    </div>
  );
}

// ─── Data ───

const cssBlock = `:root {
  /* ─── Colors ─── */
  --color-primary: #006A4E;        /* Bangladesh Deep Green */
  --color-secondary: #0F4C81;      /* Intelligence Blue */
  --color-accent-red: #E8432A;     /* Accent Red */
  --color-bg-sage: #E8F5E9;        /* Light Sage */
  --color-bg-warm: #F5F5F0;        /* Warm Gray */
  --color-text: #1A2332;           /* Dark Slate */
  --color-teal: #00897B;           /* Data Teal */
  --color-gold: #C4960C;           /* Gold Accent */
  --color-white: #FFFFFF;          /* Pure White */

  /* ─── Typography ─── */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Source Serif 4', serif;
  --font-ui: 'Inter', sans-serif;
  --font-bangla-heading: 'Noto Sans Bengali', sans-serif;
  --font-bangla-body: 'Noto Serif Bengali', serif;

  /* ─── Type Scale (Desktop) ─── */
  --text-display: 56px;    /* weight: 800, line-height: 1.1 */
  --text-h1: 40px;         /* weight: 700, line-height: 1.2 */
  --text-h2: 30px;         /* weight: 600, line-height: 1.3 */
  --text-h3: 24px;         /* weight: 500, line-height: 1.35 */
  --text-h4: 20px;         /* weight: 500, line-height: 1.4 */
  --text-body: 17px;       /* weight: 400, line-height: 1.65 */
  --text-body-bn: 19px;    /* weight: 400, line-height: 1.8 */
  --text-small: 14px;      /* weight: 400, line-height: 1.5 */
  --text-caption: 12px;    /* weight: 500, line-height: 1.5 */

  /* ─── Spacing ─── */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-lg: 0 4px 16px rgba(0,0,0,0.12);

  /* ─── Layout ─── */
  --max-content: 1200px;
  --max-text: 720px;
  --bp-mobile: 375px;
  --bp-tablet: 768px;
  --bp-desktop: 1024px;
  --bp-wide: 1440px;
}`;

const assetManifest = [
  "logo-horizontal-en.svg",
  "logo-horizontal-en.png",
  "logo-horizontal-bn.svg",
  "logo-horizontal-bn.png",
  "logo-horizontal-bilingual.svg",
  "logo-horizontal-bilingual.png",
  "logo-stacked-en.svg",
  "logo-stacked-en.png",
  "logo-stacked-bn.svg",
  "logo-stacked-bn.png",
  "logo-icon.svg",
  "logo-icon.png",
  "logo-white.svg",
  "logo-white.png",
  "logo-mono-dark.svg",
  "logo-mono-dark.png",
  "logo-seal.svg",
  "logo-seal.png",
  "favicon-16.png",
  "favicon-32.png",
  "icon-48.png",
  "icon-64.png",
  "icon-128.png",
  "apple-touch-icon.png",
  "icon-192.png",
  "icon-512.png",
  "og-default.png",
  "og-blog-template-green.png",
  "og-blog-template-white.png",
  "og-blog-template-blue.png",
  "linkedin-profile.png",
  "linkedin-cover.png",
  "twitter-profile.png",
  "twitter-header.png",
  "facebook-cover.png",
];
