import Logo from "../Logo";
import { BookOpen, PenLine, Globe, Info, BarChart3 } from "lucide-react";

export default function SocialAssets() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 bg-[#006A4E] text-white text-[10px] rounded" style={{ fontWeight: 700 }}>71 ASSETS</span>
          <span className="px-2.5 py-1 bg-[#0F4C81]/10 text-[#0F4C81] text-[10px] rounded" style={{ fontWeight: 600 }}>14 FOLDERS</span>
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
          Social & Brand Assets
        </h1>
        <p className="text-[#1A2332]/60 text-[15px] mt-2 max-w-2xl" style={{ lineHeight: 1.7, fontFamily: "'Source Serif 4', serif" }}>
          Complete export-ready asset library — every social media platform, OG image, email asset, social post template, and print-ready document. All 71 files across 14 organized folders.
        </p>
      </div>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 1: LOGOS */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={1} title="Logos" count={9} desc="For upload everywhere — transparent PNG + SVG">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* 1. Horizontal Color */}
          <AssetCard name="logo-horizontal-color" dims="Transparent" format="PNG+SVG">
            <div className="flex items-center gap-2.5">
              <Logo size={28} />
              <div>
                <p className="text-[#1A2332] text-[10px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Bangladesh AI</p>
                <p className="text-[#1A2332]/40 text-[7px] tracking-[0.06em]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
              </div>
            </div>
          </AssetCard>

          {/* 2. Horizontal Bangla */}
          <AssetCard name="logo-horizontal-bangla" dims="Transparent" format="PNG">
            <div className="flex items-center gap-2.5">
              <Logo size={28} />
              <div>
                <p className="text-[#1A2332] text-[11px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700 }}>বাংলাদেশ এআই</p>
                <p className="text-[#1A2332]/40 text-[8px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
              </div>
            </div>
          </AssetCard>

          {/* 3. Horizontal Bilingual */}
          <AssetCard name="logo-horizontal-bilingual" dims="Transparent" format="PNG">
            <div className="flex items-center gap-2.5">
              <Logo size={28} />
              <div>
                <p className="text-[#1A2332] text-[9px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Bangladesh AI</p>
                <p className="text-[#1A2332]/40 text-[6px]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
                <p className="text-[#1A2332]/30 text-[6px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
              </div>
            </div>
          </AssetCard>

          {/* 4. Stacked */}
          <AssetCard name="logo-stacked-color" dims="Transparent" format="PNG">
            <div className="text-center">
              <div className="flex justify-center mb-1.5"><Logo size={28} /></div>
              <p className="text-[#1A2332] text-[9px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Bangladesh AI</p>
              <p className="text-[#1A2332]/40 text-[6px] tracking-[0.06em]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
            </div>
          </AssetCard>

          {/* 5. Icon Only */}
          <AssetCard name="logo-icon-color" dims="Transparent" format="PNG">
            <Logo size={44} />
          </AssetCard>

          {/* 6. Icon on Green */}
          <AssetCard name="logo-icon-on-green" dims="#006A4E circle" format="PNG" bgClass="bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
              <Logo size={36} color="#FFFFFF" />
            </div>
          </AssetCard>

          {/* 7. White */}
          <AssetCard name="logo-white" dims="Transparent" format="PNG" bgClass="bg-[#1A2332]">
            <div className="flex items-center gap-2.5">
              <Logo size={28} color="#FFFFFF" />
              <div>
                <p className="text-white text-[10px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Bangladesh AI</p>
                <p className="text-white/40 text-[7px]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</p>
              </div>
            </div>
          </AssetCard>

          {/* 8. Seal */}
          <AssetCard name="logo-seal" dims="Transparent" format="PNG">
            <div className="relative w-14 h-14">
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                <circle cx="100" cy="100" r="95" fill="none" stroke="#006A4E" strokeWidth="2.5" />
                <circle cx="100" cy="100" r="88" fill="none" stroke="#006A4E" strokeWidth="0.5" opacity="0.3" />
                <defs>
                  <path id="sealTop" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
                  <path id="sealBot" d="M 170,108 A 70,70 0 0,1 30,108" fill="none" />
                </defs>
                <text fill="#006A4E" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '13px' }}>
                  <textPath href="#sealTop" startOffset="50%" textAnchor="middle">Bangladesh AI</textPath>
                </text>
                <text fill="#006A4E" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 600, fontSize: '11px' }}>
                  <textPath href="#sealBot" startOffset="50%" textAnchor="middle">বাংলাদেশ এআই</textPath>
                </text>
                <circle cx="30" cy="100" r="2" fill="#C4960C" />
                <circle cx="170" cy="100" r="2" fill="#C4960C" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Logo size={28} />
              </div>
            </div>
          </AssetCard>

          {/* 9. SVG */}
          <AssetCard name="logo-horizontal-color" dims="Vector" format="SVG">
            <div className="flex items-center gap-2.5">
              <Logo size={28} />
              <div>
                <p className="text-[#1A2332] text-[10px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Bangladesh AI</p>
                <p className="text-[#006A4E]/60 text-[7px]" style={{ fontWeight: 600, fontFamily: "monospace" }}>.svg</p>
              </div>
            </div>
          </AssetCard>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 2: FAVICONS */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={2} title="Favicons & App Icons" count={7} desc="Map icon at exact pixel sizes">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex flex-wrap items-end gap-6">
            {[
              { px: 16, label: "favicon-16x16" },
              { px: 20, label: "favicon-32x32" },
              { px: 26, label: "favicon-48x48" },
              { px: 44, label: "apple-touch-icon (180)" },
              { px: 52, label: "icon-192x192" },
              { px: 72, label: "icon-512x512" },
            ].map((i) => (
              <div key={i.label} className="text-center">
                <div className="bg-[#F5F5F0] rounded-lg flex items-center justify-center mx-auto mb-2" style={{ width: i.px, height: i.px, minWidth: 16, minHeight: 16 }}>
                  <Logo size={Math.max(i.px - 4, 12)} />
                </div>
                <p className="text-[9px] text-[#1A2332]/40" style={{ fontFamily: "monospace", fontWeight: 500 }}>{i.label}.png</p>
              </div>
            ))}
            <div className="text-center">
              <div className="bg-[#F5F5F0] rounded-lg flex items-center justify-center mx-auto mb-2 w-8 h-8">
                <Logo size={16} />
              </div>
              <p className="text-[9px] text-[#1A2332]/40" style={{ fontFamily: "monospace", fontWeight: 500 }}>favicon.ico</p>
            </div>
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 3: FACEBOOK */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={3} title="Facebook" count={5} desc="Profile, cover, post templates, event cover">
        <div className="space-y-5">
          {/* Profile */}
          <div className="flex flex-wrap gap-4">
            <AssetCard name="fb-profile-picture" dims="170×170" format="PNG" bgClass="bg-transparent">
              <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
                <Logo size={36} color="#FFFFFF" />
              </div>
            </AssetCard>
          </div>

          {/* Cover */}
          <BannerAsset name="fb-cover-photo" dims="820×312" ratio="820/312">
            <div className="bg-gradient-to-r from-[#006A4E] to-[#0F4C81] h-full p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Logo size={28} color="#FFFFFF" />
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14px' }}>Bangladesh AI</p>
                  <p className="text-white/60 text-[9px]" style={{ fontWeight: 500 }}>Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</p>
                </div>
              </div>
              <div className="hidden sm:flex gap-5 text-center">
                {[{ v: "47.12", l: "AI Score" }, { v: "#80", l: "Rank" }, { v: "170M", l: "People" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-white text-[14px]" style={{ fontWeight: 700 }}>{s.v}</div>
                    <div className="text-white/40 text-[8px]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </BannerAsset>

          {/* Posts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AssetCard name="fb-post-square" dims="1080×1080" format="PNG">
              <SquarePost variant="stat" />
            </AssetCard>
            <AssetCard name="fb-post-landscape" dims="1200×630" format="PNG" wide>
              <div className="bg-[#006A4E] w-full h-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1200/630' }}>
                <Logo size={16} color="#FFFFFF" />
                <div>
                  <p className="text-[8px]" style={{ fontWeight: 700 }}>Bangladesh AI</p>
                  <p className="text-white/50 text-[6px]">Intelligence Builds Nations</p>
                </div>
              </div>
            </AssetCard>
            <AssetCard name="fb-event-cover" dims="1920×1005" format="PNG" wide>
              <div className="bg-gradient-to-br from-[#006A4E] to-[#0F4C81] w-full h-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1920/1005' }}>
                <Logo size={16} color="#FFFFFF" />
                <div>
                  <p className="text-[8px]" style={{ fontWeight: 700 }}>Bangladesh AI Event</p>
                  <p className="text-white/50 text-[6px]">দেশ গড়ি বুদ্ধিমত্তায়</p>
                </div>
              </div>
            </AssetCard>
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 4: INSTAGRAM */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={4} title="Instagram" count={9} desc="Profile, posts, story, highlight covers">
        <div className="space-y-5">
          {/* Profile */}
          <div className="flex flex-wrap gap-4">
            <AssetCard name="ig-profile-picture" dims="320×320" format="PNG" bgClass="bg-transparent">
              <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
                <Logo size={36} color="#FFFFFF" />
              </div>
            </AssetCard>
          </div>

          {/* Posts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Square */}
            <AssetCard name="ig-post-square" dims="1080×1080" format="PNG">
              <div className="bg-[#006A4E] w-full aspect-square p-3 flex flex-col justify-between text-white">
                <Logo size={16} color="#FFFFFF" />
                <div>
                  <p className="text-[9px]" style={{ fontWeight: 700 }}>Bangladesh AI</p>
                  <p className="text-white/60 text-[6px]">Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</p>
                </div>
              </div>
            </AssetCard>

            {/* Portrait */}
            <AssetCard name="ig-post-portrait" dims="1080×1350" format="PNG">
              <div className="bg-gradient-to-b from-[#006A4E] to-[#004d38] w-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1080/1350' }}>
                <Logo size={16} color="#FFFFFF" />
                <div className="text-center">
                  <p className="text-[11px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>47.12</p>
                  <p className="text-white/60 text-[7px]">AI Readiness Score</p>
                </div>
                <p className="text-white/30 text-[6px]">bangladeshai.org</p>
              </div>
            </AssetCard>

            {/* Story */}
            <AssetCard name="ig-story" dims="1080×1920" format="PNG">
              <div className="bg-gradient-to-b from-[#006A4E] via-[#005A41] to-[#0F4C81] w-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1080/1920' }}>
                <div className="flex items-center gap-1.5 mt-1">
                  <Logo size={14} color="#FFFFFF" />
                  <span className="text-[7px]" style={{ fontWeight: 700 }}>Bangladesh AI</span>
                </div>
                <div className="text-center py-4">
                  <p className="text-[10px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Intelligence Builds Nations</p>
                  <p className="text-white/60 text-[8px] mt-0.5" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
                </div>
                <p className="text-white/30 text-[6px] text-center">Swipe up · bangladeshai.org</p>
              </div>
            </AssetCard>
          </div>

          {/* Highlight Covers */}
          <p className="text-[12px] text-[#1A2332]/40 mt-2" style={{ fontWeight: 600 }}>Highlight Covers (1080×1080)</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {[
              { name: "ig-highlight-cover-research", label: "Research", labelBn: "গবেষণা", icon: <BookOpen size={18} className="text-white" /> },
              { name: "ig-highlight-cover-blog", label: "Blog", labelBn: "ব্লগ", icon: <PenLine size={18} className="text-white" /> },
              { name: "ig-highlight-cover-bangla", label: "বাংলা", labelBn: "", icon: <Globe size={18} className="text-white" /> },
              { name: "ig-highlight-cover-about", label: "About", labelBn: "সম্পর্কে", icon: <Info size={18} className="text-white" /> },
              { name: "ig-highlight-cover-data", label: "Data", labelBn: "তথ্য", icon: <BarChart3 size={18} className="text-white" /> },
            ].map((h) => (
              <div key={h.name} className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#006A4E] flex flex-col items-center justify-center gap-1">
                  {h.icon}
                  <span className="text-white text-[8px]" style={{ fontWeight: 600 }}>{h.label}</span>
                  {h.labelBn && <span className="text-white/50 text-[7px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>{h.labelBn}</span>}
                </div>
                <p className="text-[8px] text-[#1A2332]/40 mt-1.5" style={{ fontFamily: "monospace" }}>{h.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 5: LINKEDIN */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={5} title="LinkedIn" count={5} desc="Profile, cover, posts, article cover">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-4">
            <AssetCard name="li-profile-picture" dims="400×400" format="PNG" bgClass="bg-transparent">
              <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
                <Logo size={36} color="#FFFFFF" />
              </div>
            </AssetCard>
          </div>

          <BannerAsset name="li-cover-photo" dims="1584×396" ratio="1584/396">
            <div className="bg-gradient-to-r from-[#006A4E] via-[#005A41] to-[#0F4C81] h-full p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Logo size={28} color="#FFFFFF" />
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14px' }}>Bangladesh AI</p>
                  <p className="text-white/60 text-[9px]" style={{ fontWeight: 500 }}>Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</p>
                </div>
              </div>
              <div className="hidden sm:flex gap-5 text-center">
                {[{ v: "47.12/100", l: "AI Readiness" }, { v: "170M", l: "Population" }, { v: "92", l: "Requirements" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-white text-[13px]" style={{ fontWeight: 700 }}>{s.v}</div>
                    <div className="text-white/40 text-[8px]">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="hidden md:block text-white/40 text-[9px]">Research · Advocacy · Education</div>
            </div>
          </BannerAsset>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <AssetCard name="li-post-landscape" dims="1200×627" format="PNG" wide>
              <div className="bg-[#006A4E] w-full h-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1200/627' }}>
                <Logo size={14} color="#FFFFFF" />
                <div>
                  <p className="text-[8px]" style={{ fontWeight: 700 }}>Bangladesh AI</p>
                  <p className="text-white/50 text-[6px]">Intelligence Builds Nations</p>
                </div>
              </div>
            </AssetCard>
            <AssetCard name="li-post-square" dims="1080×1080" format="PNG">
              <SquarePost variant="quote" />
            </AssetCard>
            <AssetCard name="li-article-cover" dims="1280×720" format="PNG" wide>
              <div className="bg-gradient-to-r from-[#006A4E] to-[#004d38] w-full h-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1280/720' }}>
                <Logo size={14} color="#FFFFFF" />
                <div>
                  <p className="text-[9px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Article Title Here</p>
                  <p className="text-white/50 text-[6px]">bangladeshai.org</p>
                </div>
              </div>
            </AssetCard>
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 6: X / TWITTER */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={6} title="X / Twitter" count={4} desc="Profile, header, post templates">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-4">
            <AssetCard name="x-profile-picture" dims="400×400" format="PNG" bgClass="bg-transparent">
              <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
                <Logo size={36} color="#FFFFFF" />
              </div>
            </AssetCard>
          </div>

          <BannerAsset name="x-header" dims="1500×500" ratio="1500/500">
            <div className="bg-[#1A2332] h-full p-5 text-white flex items-center justify-center text-center">
              <div>
                <p className="text-white/80" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '16px' }}>Bangladesh AI</p>
                <p className="text-white/60 text-[10px] mt-0.5">Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</p>
                <p className="text-white/30 text-[9px] mt-2">bangladeshai.org</p>
              </div>
            </div>
          </BannerAsset>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <AssetCard name="x-post-landscape" dims="1600×900" format="PNG" wide>
              <div className="bg-[#0F4C81] w-full h-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1600/900' }}>
                <Logo size={14} color="#FFFFFF" />
                <div>
                  <p className="text-[8px]" style={{ fontWeight: 700 }}>Bangladesh AI</p>
                  <p className="text-white/50 text-[6px]">Intelligence Builds Nations</p>
                </div>
              </div>
            </AssetCard>
            <AssetCard name="x-post-square" dims="1080×1080" format="PNG">
              <SquarePost variant="blog" />
            </AssetCard>
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 7: YOUTUBE */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={7} title="YouTube" count={4} desc="Profile, banner (safe area aware), thumbnail, watermark">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-4">
            <AssetCard name="yt-profile-picture" dims="800×800" format="PNG" bgClass="bg-transparent">
              <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
                <Logo size={36} color="#FFFFFF" />
              </div>
            </AssetCard>
            <AssetCard name="yt-watermark" dims="150×150" format="PNG" bgClass="bg-[#1A2332]">
              <Logo size={28} color="#FFFFFF" />
            </AssetCard>
          </div>

          <BannerAsset name="yt-banner" dims="2560×1440" ratio="2560/1440">
            <div className="bg-gradient-to-r from-[#006A4E] via-[#005A41] to-[#0F4C81] h-full relative">
              {/* Safe area outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-white/20 border-dashed" style={{ width: '60%', height: '29%' }}>
                  <div className="h-full flex items-center justify-center text-white text-center">
                    <div>
                      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14px' }}>Bangladesh AI</p>
                      <p className="text-white/60 text-[9px] mt-0.5">Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</p>
                      <p className="text-white/30 text-[7px] mt-1">47.12/100 AI Readiness · 170M Population · 92 Requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 left-3 text-white/20 text-[7px]">↕ Safe zone: 1546×423 center</div>
            </div>
          </BannerAsset>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <AssetCard name="yt-thumbnail-template" dims="1280×720" format="PNG" wide>
              <div className="bg-gradient-to-br from-[#006A4E] to-[#004d38] w-full h-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1280/720' }}>
                <span className="text-[7px] px-1.5 py-0.5 bg-white/20 rounded self-start" style={{ fontWeight: 600 }}>Bangladesh AI</span>
                <div>
                  <p className="text-[9px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Video Title Here</p>
                  <p className="text-white/50 text-[6px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
                </div>
              </div>
            </AssetCard>
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 8: WHATSAPP */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={8} title="WhatsApp" count={2} desc="Critical for Bangladesh — profile + share image">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <AssetCard name="wa-profile-picture" dims="500×500" format="PNG" bgClass="bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
              <Logo size={36} color="#FFFFFF" />
            </div>
          </AssetCard>
          <AssetCard name="wa-share-image" dims="1200×630" format="PNG" wide>
            <div className="bg-gradient-to-br from-[#006A4E] to-[#004d38] w-full h-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1200/630' }}>
              <Logo size={14} color="#FFFFFF" />
              <div>
                <p className="text-[9px]" style={{ fontWeight: 700 }}>Bangladesh AI</p>
                <p className="text-white/50 text-[6px]">Intelligence Builds Nations · দেশ গড়ি বুদ্ধিমত্তায়</p>
              </div>
            </div>
          </AssetCard>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 9: TIKTOK */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={9} title="TikTok" count={1} desc="Profile picture">
        <div className="flex flex-wrap gap-4">
          <AssetCard name="tt-profile-picture" dims="200×200" format="PNG" bgClass="bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
              <Logo size={36} color="#FFFFFF" />
            </div>
          </AssetCard>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 10: GITHUB */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={10} title="GitHub" count={2} desc="Profile + repository social preview">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <AssetCard name="gh-profile-picture" dims="500×500" format="PNG" bgClass="bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#006A4E] flex items-center justify-center">
              <Logo size={36} color="#FFFFFF" />
            </div>
          </AssetCard>
          <AssetCard name="gh-social-preview" dims="1280×640" format="PNG" wide>
            <div className="bg-[#1A2332] w-full h-full p-3 flex flex-col justify-between text-white" style={{ aspectRatio: '1280/640' }}>
              <Logo size={16} color="#FFFFFF" />
              <div>
                <p className="text-[9px]" style={{ fontWeight: 700 }}>Bangladesh AI</p>
                <p className="text-white/50 text-[6px]">Research · Advocacy · Education</p>
                <p className="text-white/30 text-[6px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
              </div>
            </div>
          </AssetCard>
        </div>
      </Folder>

      {/* ═════��═════════════════════════════════ */}
      {/* FOLDER 11: OG / SHARING IMAGES */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={11} title="OG / Sharing Images" count={4} desc="Default + 3 blog OG template variants">
        <div className="space-y-5">
          {/* Default OG */}
          <div>
            <p className="text-[11px] text-[#1A2332]/40 mb-2" style={{ fontWeight: 600 }}>og-default.png (1200×630)</p>
            <div className="bg-gradient-to-br from-[#006A4E] to-[#004d38] rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden" style={{ aspectRatio: '1200/630' }}>
              <div className="absolute top-6 right-6 opacity-10 w-40 h-40"><Logo size={160} color="#FFFFFF" /></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-10 h-10"><Logo size={40} color="#FFFFFF" /></div>
                <div>
                  <h2 className="text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(22px, 3vw, 32px)' }}>
                    Bangladesh AI
                  </h2>
                  <p className="text-white/80 tracking-[0.1em] mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: '14px' }}>
                    Intelligence Builds Nations
                  </p>
                  <p className="text-white/60 mt-0.5" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 500, fontSize: '14px' }}>
                    দেশ গড়ি বুদ্ধিমত্তায়
                  </p>
                </div>
                <p className="text-white/40 text-[12px]">bangladeshai.org</p>
              </div>
            </div>
          </div>

          {/* Blog OG Templates */}
          <p className="text-[11px] text-[#1A2332]/40 mb-2" style={{ fontWeight: 600 }}>Blog OG Templates (1200×630)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "og-blog-template-green", bg: "from-[#006A4E] to-[#004d38]", label: "Green", dark: false },
              { name: "og-blog-template-white", bg: "from-white to-gray-100", label: "White", dark: true },
              { name: "og-blog-template-blue", bg: "from-[#0F4C81] to-[#0a3560]", label: "Blue", dark: false },
            ].map((v) => (
              <div key={v.name}>
                <div
                  className={`bg-gradient-to-br ${v.bg} rounded-xl p-5 relative overflow-hidden border ${v.dark ? 'border-gray-200' : 'border-transparent'}`}
                  style={{ aspectRatio: '1200/630' }}
                >
                  <span className={`text-[9px] px-2 py-0.5 rounded ${v.dark ? 'bg-[#006A4E]/10 text-[#006A4E]' : 'bg-white/20 text-white'}`} style={{ fontWeight: 600 }}>
                    Policy Brief
                  </span>
                  <h3 className={`mt-3 ${v.dark ? 'text-[#1A2332]' : 'text-white'}`} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14px', lineHeight: 1.4 }}>
                    Bangladesh AI Readiness: 18 Critical Gaps
                  </h3>
                  <p className={`text-[10px] mt-1 ${v.dark ? 'text-[#1A2332]/50' : 'text-white/60'}`} style={{ fontWeight: 500 }}>By Emon Hossain</p>
                  <div className={`absolute bottom-4 left-5 right-5 flex justify-between text-[9px] ${v.dark ? 'text-[#1A2332]/40' : 'text-white/50'}`}>
                    <span>bangladeshai.org</span>
                    <span>Intelligence Builds Nations</span>
                  </div>
                </div>
                <p className="text-[9px] text-[#1A2332]/40 mt-1.5" style={{ fontFamily: "monospace" }}>{v.name}.png</p>
              </div>
            ))}
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 12: EMAIL */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={12} title="Email" count={3} desc="Newsletter header, footer, signature banner">
        <div className="max-w-xl space-y-4">
          {/* Email Header */}
          <div>
            <p className="text-[10px] text-[#1A2332]/40 mb-1.5" style={{ fontFamily: "monospace", fontWeight: 500 }}>email-header.png (600×150)</p>
            <div className="bg-[#006A4E] rounded-lg px-5 py-3 flex items-center gap-3" style={{ aspectRatio: '600/150' }}>
              <Logo size={28} color="#FFFFFF" />
              <div>
                <span className="text-white text-[13px] block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Bangladesh AI Briefing</span>
                <span className="text-white/50 text-[9px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</span>
              </div>
            </div>
          </div>

          {/* Email Footer */}
          <div>
            <p className="text-[10px] text-[#1A2332]/40 mb-1.5" style={{ fontFamily: "monospace", fontWeight: 500 }}>email-footer.png (600×100)</p>
            <div className="bg-[#1A2332] rounded-lg px-5 py-2.5 flex items-center justify-between" style={{ aspectRatio: '600/100' }}>
              <span className="text-white/50 text-[10px]" style={{ fontWeight: 500 }}>Intelligence Builds Nations</span>
              <span className="text-white/30 text-[9px]">bangladeshai.org</span>
            </div>
          </div>

          {/* Email Signature */}
          <div>
            <p className="text-[10px] text-[#1A2332]/40 mb-1.5" style={{ fontFamily: "monospace", fontWeight: 500 }}>email-signature-banner.png (600×100)</p>
            <div className="bg-white border border-gray-200 rounded-lg px-5 py-2.5 flex items-center gap-3" style={{ aspectRatio: '600/100' }}>
              <Logo size={20} />
              <div className="border-l border-gray-200 pl-3">
                <span className="text-[#1A2332] text-[11px] block" style={{ fontWeight: 700 }}>EMON HOSSAIN</span>
                <span className="text-[#1A2332]/40 text-[9px]">Bangladesh AI · Intelligence Builds Nations</span>
              </div>
            </div>
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 13: SOCIAL POST TEMPLATES */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={13} title="Social Post Templates" count={12} desc="6 reusable templates × square (1080×1080) + landscape (1200×627)">
        <div className="space-y-8">
          {/* Each template: square + landscape side by side */}

          {/* 1. Stat Highlight */}
          <TemplateRow label="stat-highlight" desc="Large number centered + context">
            <div className="bg-[#006A4E] w-full aspect-square p-4 flex flex-col justify-between text-white rounded-lg">
              <Logo size={20} color="#FFFFFF" />
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '32px' }}>47.12</div>
                <div className="text-white/70 text-[11px]" style={{ fontWeight: 500 }}>AI Readiness Score</div>
                <div className="text-white/40 text-[8px] mt-0.5">Out of 100 — Rank 80/193</div>
              </div>
              <div className="text-white/30 text-[8px]">Intelligence Builds Nations · দেশ গড়ি বুদ্ধিমত্তায় · bangladeshai.org</div>
            </div>
            <div className="bg-[#006A4E] w-full p-4 flex items-center justify-between text-white rounded-lg" style={{ aspectRatio: '1200/627' }}>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '28px' }}>47.12</div>
                <div className="text-white/70 text-[10px]">AI Readiness Score · Rank 80/193</div>
              </div>
              <div className="text-right">
                <Logo size={24} color="#FFFFFF" />
                <p className="text-white/30 text-[7px] mt-1">bangladeshai.org</p>
              </div>
            </div>
          </TemplateRow>

          {/* 2. Quote Card */}
          <TemplateRow label="quote-card" desc="Pull quote + green accent bar">
            <div className="bg-white border border-gray-200 w-full aspect-square p-4 flex flex-col justify-between rounded-lg">
              <Logo size={20} />
              <div className="border-l-[3px] border-[#006A4E] pl-3">
                <p className="text-[#1A2332] text-[12px]" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.6, fontStyle: 'italic' }}>
                  "Bangladesh lacks a dedicated national AI strategy document."
                </p>
                <p className="text-[#1A2332]/40 text-[9px] mt-2">— Oxford Insights, 2024</p>
              </div>
              <div className="text-[#1A2332]/30 text-[8px]">Intelligence Builds Nations · bangladeshai.org</div>
            </div>
            <div className="bg-white border border-gray-200 w-full p-4 flex items-center gap-4 rounded-lg" style={{ aspectRatio: '1200/627' }}>
              <div className="border-l-[3px] border-[#006A4E] pl-3 flex-1">
                <p className="text-[#1A2332] text-[11px]" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.6, fontStyle: 'italic' }}>
                  "Bangladesh lacks a dedicated national AI strategy document."
                </p>
                <p className="text-[#1A2332]/40 text-[8px] mt-1">— Oxford Insights, 2024</p>
              </div>
              <Logo size={28} />
            </div>
          </TemplateRow>

          {/* 3. Blog Teaser */}
          <TemplateRow label="blog-teaser" desc="Blog title + category + CTA">
            <div className="bg-[#0F4C81] w-full aspect-square p-4 flex flex-col justify-between text-white rounded-lg">
              <span className="text-[8px] px-2 py-0.5 bg-white/20 rounded self-start" style={{ fontWeight: 600 }}>New Research</span>
              <div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '14px', lineHeight: 1.4 }}>
                  18 Critical Gaps in Bangladesh's AI Infrastructure
                </h3>
                <p className="text-white/60 text-[9px] mt-2">Read at bangladeshai.org →</p>
                <p className="text-white/40 text-[8px] mt-0.5">By Emon Hossain</p>
              </div>
              <div className="text-white/30 text-[8px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</div>
            </div>
            <div className="bg-[#0F4C81] w-full p-4 flex items-center justify-between text-white rounded-lg" style={{ aspectRatio: '1200/627' }}>
              <div>
                <span className="text-[7px] px-1.5 py-0.5 bg-white/20 rounded" style={{ fontWeight: 600 }}>New Research</span>
                <h3 className="mt-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '13px', lineHeight: 1.4 }}>
                  18 Critical Gaps in Bangladesh's AI Infrastructure
                </h3>
                <p className="text-white/50 text-[8px] mt-1">Read at bangladeshai.org → | By Emon Hossain</p>
              </div>
              <Logo size={28} color="#FFFFFF" />
            </div>
          </TemplateRow>

          {/* 4. Comparison */}
          <TemplateRow label="comparison" desc="Country vs country split layout">
            <div className="bg-white border border-gray-200 w-full aspect-square flex flex-col rounded-lg overflow-hidden">
              <div className="bg-[#006A4E] px-3 py-2 flex items-center gap-2">
                <Logo size={14} color="#FFFFFF" />
                <span className="text-white text-[9px]" style={{ fontWeight: 700 }}>Bangladesh vs India</span>
              </div>
              <div className="flex-1 p-3 flex">
                <div className="flex-1 pr-3 border-r border-gray-100 text-center">
                  <p className="text-[#006A4E] text-[8px]" style={{ fontWeight: 700 }}>Bangladesh</p>
                  <p className="text-[#1A2332] text-[18px] mt-1" style={{ fontWeight: 700 }}>47.12</p>
                  <p className="text-[#1A2332]/40 text-[8px]">Rank #80</p>
                </div>
                <div className="flex-1 pl-3 text-center">
                  <p className="text-[#0F4C81] text-[8px]" style={{ fontWeight: 700 }}>India</p>
                  <p className="text-[#1A2332] text-[18px] mt-1" style={{ fontWeight: 700 }}>59.87</p>
                  <p className="text-[#1A2332]/40 text-[8px]">Rank #36</p>
                </div>
              </div>
              <div className="px-3 py-1.5 bg-gray-50 text-[#1A2332]/30 text-[7px]">Source: Oxford Insights 2024 · bangladeshai.org</div>
            </div>
            <div className="bg-white border border-gray-200 w-full flex flex-col rounded-lg overflow-hidden" style={{ aspectRatio: '1200/627' }}>
              <div className="bg-[#006A4E] px-3 py-1.5 flex items-center gap-2">
                <Logo size={12} color="#FFFFFF" />
                <span className="text-white text-[8px]" style={{ fontWeight: 700 }}>Bangladesh vs India — AI Readiness</span>
              </div>
              <div className="flex-1 p-3 flex items-center">
                <div className="flex-1 text-center border-r border-gray-100">
                  <p className="text-[#1A2332] text-[18px]" style={{ fontWeight: 700 }}>47.12</p>
                  <p className="text-[#006A4E] text-[8px]" style={{ fontWeight: 600 }}>Bangladesh · #80</p>
                </div>
                <div className="flex-1 text-center">
                  <p className="text-[#1A2332] text-[18px]" style={{ fontWeight: 700 }}>59.87</p>
                  <p className="text-[#0F4C81] text-[8px]" style={{ fontWeight: 600 }}>India · #36</p>
                </div>
              </div>
            </div>
          </TemplateRow>

          {/* 5. Did You Know */}
          <TemplateRow label="did-you-know" desc="আপনি কি জানেন? + fact + source">
            <div className="bg-[#E8F5E9] w-full aspect-square p-4 flex flex-col justify-between rounded-lg">
              <div>
                <span className="text-[#006A4E] text-[10px]" style={{ fontWeight: 700 }}>Did You Know?</span>
                <p className="text-[#006A4E]/60 text-[9px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 600 }}>আপনি কি জানেন?</p>
              </div>
              <p className="text-[#1A2332] text-[12px]" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.6 }}>
                Only 33 countries globally have published a comprehensive national AI policy document.
              </p>
              <div className="flex items-center justify-between">
                <Logo size={18} />
                <span className="text-[#006A4E]/40 text-[8px]">Source: OECD 2024 · bangladeshai.org</span>
              </div>
            </div>
            <div className="bg-[#E8F5E9] w-full p-4 flex items-center gap-4 rounded-lg" style={{ aspectRatio: '1200/627' }}>
              <div className="flex-1">
                <span className="text-[#006A4E] text-[9px]" style={{ fontWeight: 700 }}>Did You Know? / আপনি কি জানেন?</span>
                <p className="text-[#1A2332] text-[11px] mt-1" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.6 }}>
                  Only 33 countries globally have published a comprehensive national AI policy document.
                </p>
                <p className="text-[#006A4E]/40 text-[7px] mt-1">Source: OECD 2024</p>
              </div>
              <Logo size={28} />
            </div>
          </TemplateRow>

          {/* 6. Bangla Education */}
          <TemplateRow label="bangla-education" desc="Bangla-first layout, simple language">
            <div className="bg-[#006A4E] w-full aspect-square p-4 flex flex-col justify-between text-white rounded-lg">
              <Logo size={20} color="#FFFFFF" />
              <div className="text-center">
                <p className="text-[18px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700 }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
                <p className="text-white/70 text-[11px] mt-1" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>
                  কৃত্রিম বুদ্ধিমত্তা কী এবং কেন এটি গুরুত্বপূর্ণ?
                </p>
                <p className="text-white/40 text-[9px] mt-2">AI Infrastructure for 170 Million</p>
                <p className="text-white/30 text-[8px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>১৭ কোটি মানুষের এআই অবকাঠামো</p>
              </div>
              <div className="text-white/30 text-[8px] text-center">বাংলাদেশ এআই · bangladeshai.org</div>
            </div>
            <div className="bg-[#006A4E] w-full p-4 flex items-center justify-between text-white rounded-lg" style={{ aspectRatio: '1200/627' }}>
              <div>
                <p className="text-[16px]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700 }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
                <p className="text-white/70 text-[10px] mt-0.5" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>কৃত্রিম বুদ্ধিমত্তা কী এবং কেন এটি গুরুত্বপূর্ণ?</p>
                <p className="text-white/40 text-[8px] mt-1">১৭ কোটি মানুষের এআই অবকাঠামো</p>
              </div>
              <Logo size={32} color="#FFFFFF" />
            </div>
          </TemplateRow>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* FOLDER 14: PRINT-READY */}
      {/* ═══════════════════════════════════════ */}
      <Folder num={14} title="Print-Ready" count={4} desc="Business card, letterhead, presentation slide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Business Card Front */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 flex flex-col justify-between" style={{ aspectRatio: '3.5/2', minHeight: '180px' }}>
              <div className="flex items-center gap-2">
                <Logo size={24} />
                <span className="text-[#1A2332] text-[11px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Bangladesh AI</span>
              </div>
              <div className="text-[#1A2332]/40 text-[8px] tracking-wide" style={{ fontWeight: 500 }}>Intelligence Builds Nations</div>
            </div>
            <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px]" style={{ fontFamily: "monospace", fontWeight: 600, color: '#1A2332' }}>business-card-front.png</p>
              <span className="text-[9px] text-[#1A2332]/40">1050×600 · 300dpi</span>
            </div>
          </div>

          {/* Business Card Back */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 flex flex-col justify-between" style={{ aspectRatio: '3.5/2', minHeight: '180px' }}>
              <div>
                <p className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '13px' }}>Emon Hossain</p>
                <p className="text-[#1A2332]/50 text-[10px]">Founder</p>
              </div>
              <div className="text-[10px] text-[#1A2332]/50 space-y-0.5">
                <p>hello@bangladeshai.org</p>
                <p>bangladeshai.org</p>
                <p className="text-[#1A2332]/30" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>দেশ গড়ি বুদ্ধিমত্তায়</p>
              </div>
            </div>
            <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px]" style={{ fontFamily: "monospace", fontWeight: 600, color: '#1A2332' }}>business-card-back.png</p>
              <span className="text-[9px] text-[#1A2332]/40">1050×600 · 300dpi</span>
            </div>
          </div>

          {/* Letterhead */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 flex flex-col justify-between min-h-[200px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Logo size={22} />
                  <div>
                    <span className="text-[#1A2332] text-[10px] block" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Bangladesh AI</span>
                    <span className="text-[#1A2332]/30 text-[7px]">Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</span>
                  </div>
                </div>
                <div className="text-right text-[7px] text-[#1A2332]/40">
                  <p>hello@bangladeshai.org</p>
                  <p>bangladeshai.org</p>
                </div>
              </div>
              <div className="flex-1 py-4 space-y-1.5">
                <div className="h-1.5 bg-gray-50 rounded w-4/12" />
                <div className="h-3" />
                <div className="h-1.5 bg-gray-50 rounded w-full" />
                <div className="h-1.5 bg-gray-50 rounded w-11/12" />
                <div className="h-1.5 bg-gray-50 rounded w-full" />
                <div className="h-1.5 bg-gray-50 rounded w-8/12" />
              </div>
              <div className="border-t border-gray-100 pt-1.5 text-[7px] text-[#1A2332]/25">
                Bangladesh AI is an independent research platform. Not affiliated with any government body.
              </div>
            </div>
            <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px]" style={{ fontFamily: "monospace", fontWeight: 600, color: '#1A2332' }}>letterhead-header.png</p>
              <span className="text-[9px] text-[#1A2332]/40">2480×400 · 300dpi</span>
            </div>
          </div>

          {/* Presentation Title Slide */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden md:col-span-2 lg:col-span-3">
            <div className="bg-[#006A4E] p-8 text-white" style={{ aspectRatio: '16/9' }}>
              <div className="h-full flex flex-col justify-between">
                <Logo size={36} color="#FFFFFF" />
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(20px, 2.5vw, 28px)' }}>
                    National AI Readiness Assessment 2026
                  </h3>
                  <p className="text-white/60 text-[14px] mt-1">Intelligence Builds Nations | দেশ গড়ি বুদ্ধিমত্তায়</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white/40 text-[11px]">Bangladesh AI · March 2026</p>
                  <p className="text-white/40 text-[11px]">Emon Hossain</p>
                </div>
              </div>
            </div>
            <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px]" style={{ fontFamily: "monospace", fontWeight: 600, color: '#1A2332' }}>presentation-title-slide.png</p>
              <span className="text-[9px] text-[#1A2332]/40">1920×1080 · 16:9</span>
            </div>
          </div>
        </div>
      </Folder>

      {/* ═══════════════════════════════════════ */}
      {/* QUALITY CHECKLIST */}
      {/* ═══════════════════════════════════════ */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8 mb-10">
        <h2 className="mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px', color: '#1A2332' }}>
          Export Quality Checklist
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {[
            '"Bangladesh AI" (WITH space) — not "BangladeshAI"',
            '"বাংলাদেশ এআই" (WITH space) — not "বাংলাদেশএআই"',
            '"Intelligence Builds Nations" — exact spelling',
            '"দেশ গড়ি বুদ্ধিমত্তায়" — every Bangla character correct',
            'Colors exact: Green #006A4E, Blue #0F4C81, Red #E8432A, Slate #1A2332',
            'Fonts: Plus Jakarta Sans, Inter, Noto Sans Bengali',
            'No pixelation — all exports crisp at 2× retina',
            'Profile pictures centered and circular-crop safe',
            'Cover photos have text in safe zones',
            'Transparent backgrounds where specified',
            'No government emblems resembling the Shapla',
          ].map((item) => (
            <label key={item} className="flex items-start gap-2.5 py-1.5 cursor-pointer group">
              <input type="checkbox" className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-[#006A4E] focus:ring-[#006A4E] shrink-0" />
              <span className="text-[#1A2332]/55 text-[12px] group-hover:text-[#1A2332] transition" style={{ lineHeight: 1.4 }}>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="text-center py-8 border-t border-gray-200">
        <p className="text-[#1A2332]/40 text-[13px]" style={{ fontWeight: 500 }}>
          Total: <span className="text-[#006A4E]" style={{ fontWeight: 700 }}>71 assets</span> across <span className="text-[#006A4E]" style={{ fontWeight: 700 }}>14 folders</span> — ready for export
        </p>
        <p className="text-[#1A2332]/25 text-[11px] mt-1">All files lowercase with hyphens · 2× retina resolution · PNG + SVG where noted</p>
      </div>
    </div>
  );
}

// ─── Shared Components ───

function Folder({ num, title, count, desc, children }: { num: number; title: string; count: number; desc: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <div className="mb-5 pb-3 border-b-2 border-[#006A4E]/10">
        <div className="flex items-center gap-3 mb-1">
          <span className="w-7 h-7 rounded-lg bg-[#006A4E] text-white text-[11px] flex items-center justify-center" style={{ fontWeight: 700 }}>{num}</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>{title}</h2>
          <span className="px-2 py-0.5 bg-[#006A4E]/10 text-[#006A4E] rounded text-[10px]" style={{ fontWeight: 600 }}>{count} files</span>
        </div>
        <p className="text-[#1A2332]/40 text-[12px] ml-10">{desc}</p>
      </div>
      {children}
    </section>
  );
}

function AssetCard({ name, dims, format, children, bgClass = "bg-[#F5F5F0]", wide = false }: {
  name: string; dims: string; format: string; children: React.ReactNode; bgClass?: string; wide?: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ${wide ? '' : ''}`}>
      <div className={`${bgClass} p-4 flex items-center justify-center min-h-[100px]`}>
        {children}
      </div>
      <div className="px-3 py-2 border-t border-gray-100 bg-gray-50/50">
        <p className="text-[10px] text-[#1A2332] truncate" style={{ fontWeight: 600, fontFamily: "monospace" }}>{name}</p>
        <div className="flex items-center justify-between mt-0.5">
          <span className="text-[9px] text-[#1A2332]/35">{dims}</span>
          <span className="px-1.5 py-0.5 bg-[#006A4E]/10 text-[#006A4E] rounded text-[8px]" style={{ fontWeight: 600 }}>{format}</span>
        </div>
      </div>
    </div>
  );
}

function BannerAsset({ name, dims, ratio, children }: { name: string; dims: string; ratio: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="rounded-t-xl overflow-hidden" style={{ aspectRatio: ratio }}>
        {children}
      </div>
      <div className="px-4 py-2 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
        <p className="text-[10px]" style={{ fontFamily: "monospace", fontWeight: 600, color: '#1A2332' }}>{name}.png</p>
        <span className="text-[9px] text-[#1A2332]/35">{dims}</span>
      </div>
    </div>
  );
}

function TemplateRow({ label, desc, children }: { label: string; desc: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <p className="text-[12px] text-[#006A4E]" style={{ fontFamily: "monospace", fontWeight: 700 }}>{label}</p>
        <span className="text-[11px] text-[#1A2332]/40">— {desc}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {children}
      </div>
      <div className="flex gap-3 mt-1.5">
        <span className="text-[9px] text-[#1A2332]/30" style={{ fontFamily: "monospace" }}>{label}-square.png (1080×1080)</span>
        <span className="text-[9px] text-[#1A2332]/30" style={{ fontFamily: "monospace" }}>{label}-landscape.png (1200×627)</span>
      </div>
    </div>
  );
}

function SquarePost({ variant }: { variant: "stat" | "quote" | "blog" }) {
  if (variant === "stat") {
    return (
      <div className="bg-[#006A4E] w-full aspect-square p-3 flex flex-col justify-between text-white">
        <Logo size={14} color="#FFFFFF" />
        <div>
          <div style={{ fontWeight: 700, fontSize: '20px' }}>47.12</div>
          <div className="text-white/60 text-[8px]">AI Readiness Score</div>
        </div>
      </div>
    );
  }
  if (variant === "quote") {
    return (
      <div className="bg-white w-full aspect-square p-3 flex flex-col justify-between">
        <Logo size={14} />
        <p className="text-[#1A2332] text-[9px]" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.5, fontStyle: 'italic' }}>
          "Bangladesh lacks a dedicated national AI strategy."
        </p>
        <div className="text-[#1A2332]/30 text-[7px]">bangladeshai.org</div>
      </div>
    );
  }
  return (
    <div className="bg-[#0F4C81] w-full aspect-square p-3 flex flex-col justify-between text-white">
      <span className="text-[7px] px-1.5 py-0.5 bg-white/20 rounded self-start" style={{ fontWeight: 600 }}>Research</span>
      <div>
        <p className="text-[9px]" style={{ fontWeight: 700 }}>18 Critical Gaps in AI</p>
        <p className="text-white/50 text-[7px]">Read at bangladeshai.org →</p>
      </div>
    </div>
  );
}
