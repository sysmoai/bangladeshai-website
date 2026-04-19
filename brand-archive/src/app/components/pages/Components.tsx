import { Download, Clock, User, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import Logo from "../Logo";

export default function Components() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '36px', color: '#1A2332' }}>
          UI Components
        </h1>
        <p className="text-[#1A2332]/60 text-[15px] mt-2 max-w-2xl" style={{ lineHeight: 1.7 }}>
          Buttons, cards, evidence tags, and navigation elements — all in light mode with institutional styling.
        </p>
      </div>

      {/* Buttons */}
      <Section title="Buttons">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="space-y-6">
            {/* Sizes row */}
            {(["Large", "Medium", "Small"] as const).map((sz) => {
              const py = sz === "Large" ? "py-3 px-6" : sz === "Medium" ? "py-2.5 px-5" : "py-1.5 px-3";
              const textSize = sz === "Large" ? "15px" : sz === "Medium" ? "14px" : "12px";
              return (
                <div key={sz}>
                  <p className="text-[11px] text-[#1A2332]/40 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>{sz}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button className={`${py} bg-[#006A4E] text-white rounded-lg transition hover:bg-[#005A41]`} style={{ fontWeight: 600, fontSize: textSize }}>
                      Primary
                    </button>
                    <button className={`${py} bg-white text-[#006A4E] border-2 border-[#006A4E] rounded-lg transition hover:bg-[#006A4E]/5`} style={{ fontWeight: 600, fontSize: textSize }}>
                      Secondary
                    </button>
                    <button className={`${py} bg-[#E8432A] text-white rounded-lg transition hover:bg-[#d13a23]`} style={{ fontWeight: 600, fontSize: textSize }}>
                      Accent CTA
                    </button>
                    <button className={`${py} bg-transparent text-[#1A2332] border border-transparent rounded-lg transition hover:border-gray-300`} style={{ fontWeight: 500, fontSize: textSize }}>
                      Ghost
                    </button>
                    <button className={`${py} bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed`} style={{ fontWeight: 600, fontSize: textSize }}>
                      Disabled
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post Card */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="h-40 bg-gradient-to-br from-[#006A4E]/10 to-[#0F4C81]/10" />
            <div className="p-5">
              <span className="text-[10px] px-2 py-0.5 bg-[#006A4E]/10 text-[#006A4E] rounded" style={{ fontWeight: 600 }}>Policy Brief</span>
              <h3 className="text-[#1A2332] mt-3 group-hover:text-[#006A4E] transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px', lineHeight: 1.4 }}>
                Bangladesh AI Readiness: 18 Critical Gaps in National Infrastructure
              </h3>
              <div className="flex items-center gap-3 mt-3 text-[11px] text-[#1A2332]/40">
                <span className="flex items-center gap-1"><User size={12} /> Emon Hossain</span>
                <span>Mar 15, 2026</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 8 min</span>
              </div>
            </div>
          </div>

          {/* Stat Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="text-[#006A4E]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '48px' }}>
              47.12
            </div>
            <div className="text-[#1A2332] mt-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px' }}>
              AI Readiness Score (out of 100)
            </div>
            <div className="text-[#1A2332]/40 text-[11px] mt-2">
              Source: Oxford Insights 2024
            </div>
          </div>

          {/* Research Section Card */}
          <div className="bg-white rounded-2xl p-6 border-l-4 border-[#006A4E] border-y border-r border-gray-200 shadow-sm">
            <div className="text-[#006A4E]/30" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '32px' }}>01</div>
            <h3 className="text-[#1A2332] mt-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
              Smart Government
            </h3>
            <p className="text-[#1A2332]/55 text-[13px] mt-2" style={{ lineHeight: 1.6 }}>
              AI-driven public service delivery, digital governance frameworks, and institutional capacity building.
            </p>
          </div>

          {/* Callout Card */}
          <div className="bg-[#E8F5E9] rounded-2xl p-6 border-l-4 border-[#006A4E]">
            <span className="text-[10px] px-2 py-0.5 bg-[#006A4E]/15 text-[#006A4E] rounded" style={{ fontWeight: 600 }}>Key Finding</span>
            <p className="text-[#1A2332] mt-3 text-[14px]" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.65 }}>
              Bangladesh lacks a dedicated national AI strategy document, unlike 67 countries that have published comprehensive AI policies.
            </p>
          </div>

          {/* Download Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-12 bg-[#E8432A]/10 rounded flex items-center justify-center shrink-0">
              <Download size={18} className="text-[#E8432A]" />
            </div>
            <div className="flex-1">
              <h4 className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '14px' }}>
                AI Readiness Report 2026
              </h4>
              <p className="text-[#1A2332]/40 text-[11px] mt-1">PDF · 2.4 MB</p>
              <button className="mt-3 text-[12px] text-[#006A4E] flex items-center gap-1" style={{ fontWeight: 600 }}>
                Download <ExternalLink size={11} />
              </button>
            </div>
          </div>

          {/* Author Bio Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#006A4E]/10 rounded-full flex items-center justify-center">
                <span className="text-[#006A4E]" style={{ fontWeight: 700, fontSize: '18px' }}>EH</span>
              </div>
              <div>
                <h4 className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '15px' }}>
                  Emon Hossain
                </h4>
                <p className="text-[#1A2332]/50 text-[12px]">Founder, Bangladesh AI</p>
              </div>
            </div>
            <p className="text-[#1A2332]/60 text-[13px] mt-4" style={{ fontFamily: "'Source Serif 4', serif", lineHeight: 1.6 }}>
              Independent AI researcher and advocate building Bangladesh's first comprehensive AI readiness assessment.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#006A4E] shadow-sm relative">
            <span className="absolute -top-2.5 left-5 px-2 py-0.5 bg-[#006A4E] text-white text-[10px] rounded" style={{ fontWeight: 600 }}>Recommended</span>
            <h4 className="text-[#1A2332] mt-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
              Institutional Access
            </h4>
            <div className="mt-3">
              <span className="text-[#006A4E]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '32px' }}>Free</span>
            </div>
            <ul className="mt-4 space-y-2 text-[12px] text-[#1A2332]/60">
              <li className="flex items-center gap-2"><span className="text-[#006A4E]">✓</span> Full research access</li>
              <li className="flex items-center gap-2"><span className="text-[#006A4E]">✓</span> Policy briefs & data</li>
              <li className="flex items-center gap-2"><span className="text-[#006A4E]">✓</span> Newsletter subscription</li>
              <li className="flex items-center gap-2"><span className="text-[#006A4E]">✓</span> API access (coming soon)</li>
            </ul>
            <button className="w-full mt-5 py-2.5 bg-[#006A4E] text-white rounded-lg text-[13px]" style={{ fontWeight: 600 }}>
              Get Started
            </button>
          </div>
        </div>
      </Section>

      {/* Evidence Tags */}
      <Section title="Evidence Tags">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-[12px]" style={{ fontWeight: 500 }}>
              <CheckCircle size={13} /> Verified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-[12px]" style={{ fontWeight: 500 }}>
              <AlertTriangle size={13} /> Partially Verified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-[12px]" style={{ fontWeight: 500 }}>
              Source: Oxford Insights 2024
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-500 rounded-full text-[12px]" style={{ fontWeight: 400 }}>
              <Clock size={13} /> Last Updated: March 26, 2026
            </span>
          </div>
        </div>
      </Section>

      {/* Forms */}
      <Section title="Form Elements">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <div>
              <label className="block text-[12px] text-[#1A2332]/70 mb-1.5" style={{ fontWeight: 600 }}>Text Input</label>
              <input type="text" placeholder="Enter text..." className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border border-gray-200 text-[14px] outline-none focus:border-[#006A4E]/40" />
            </div>
            <div>
              <label className="block text-[12px] text-[#1A2332]/70 mb-1.5" style={{ fontWeight: 600 }}>Email Input</label>
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border border-gray-200 text-[14px] outline-none focus:border-[#006A4E]/40" />
            </div>
            <div>
              <label className="block text-[12px] text-[#E8432A] mb-1.5" style={{ fontWeight: 600 }}>Error State</label>
              <input type="text" placeholder="Required field" className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border-2 border-[#E8432A]/40 text-[14px] outline-none" />
              <p className="text-[#E8432A] text-[11px] mt-1" style={{ fontWeight: 500 }}>This field is required</p>
            </div>
            <div>
              <label className="block text-[12px] text-[#1A2332]/70 mb-1.5" style={{ fontWeight: 600 }}>Select</label>
              <select className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border border-gray-200 text-[14px] outline-none focus:border-[#006A4E]/40 text-[#1A2332]/70">
                <option>Select option...</option>
                <option>Option A</option>
                <option>Option B</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-[12px] text-[#1A2332]/70 mb-1.5" style={{ fontWeight: 600 }}>Textarea</label>
              <textarea rows={3} placeholder="Write your message..." className="w-full px-4 py-2.5 bg-[#F5F5F0] rounded-lg border border-gray-200 text-[14px] outline-none focus:border-[#006A4E]/40 resize-none" />
            </div>
          </div>
        </div>
      </Section>

      {/* Navigation Preview */}
      <Section title="Navigation">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8"><Logo size={32} /></div>
              <span className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '16px' }}>
                Bangladesh AI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {["Research", "Blog", "About", "Contact"].map((item, i) => (
                <span
                  key={item}
                  className={`text-[14px] cursor-pointer transition-colors ${i === 0 ? 'text-[#006A4E] border-b-2 border-[#006A4E] pb-1' : 'text-[#1A2332]/60 hover:text-[#1A2332]'}`}
                  style={{ fontWeight: 500 }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="text-[12px] text-[#1A2332]/50" style={{ fontWeight: 500 }}>
              EN | <span style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>বাং</span>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 text-[11px] text-[#1A2332]/40">
            Sticky on scroll · Shadow appears · Active state: green + 2px bottom border · Min touch target: 48px
          </div>
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px', color: '#1A2332' }}>
        {title}
      </h2>
      {children}
    </div>
  );
}