import { Link } from "react-router";

export default function BilingualShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1
          className="text-[#1A2332] mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: '48px' }}
        >
          Bilingual Brand System
        </h1>
        <p className="text-[#1A2332]/60 text-[18px] max-w-3xl mx-auto" style={{ lineHeight: 1.7 }}>
          Bangladesh AI operates in both English and Bangla with complete brand parity. Each language has its own typography, spacing rules, and content strategy.
        </p>
      </div>

      {/* Language Overview */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl p-10 border-2 border-gray-200">
          <h2
            className="text-[#006A4E] mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '24px' }}
          >
            English Brand
          </h2>
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
                Primary Audience
              </p>
              <p className="text-[#1A2332]/80 text-[14px]">
                International researchers, policy experts, global AI community, English-speaking professionals
              </p>
            </div>
            <div>
              <p className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
                Brand Name
              </p>
              <p className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px' }}>
                Bangladesh AI
              </p>
            </div>
            <div>
              <p className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
                Tagline
              </p>
              <p className="text-[#1A2332]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}>
                Intelligence Builds Nations
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>
              Available Pages
            </p>
            <div className="space-y-2">
              <Link to="/homepage" className="block text-[#006A4E] hover:underline text-[14px]">
                → Homepage
              </Link>
              <Link to="/blog" className="block text-[#006A4E] hover:underline text-[14px]">
                → Blog Listing
              </Link>
              <Link to="/blog-post" className="block text-[#006A4E] hover:underline text-[14px]">
                → Blog Post
              </Link>
              <Link to="/about" className="block text-[#006A4E] hover:underline text-[14px]">
                → About
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-2xl p-10 border-2 border-[#006A4E]/20">
          <h2
            className="text-[#006A4E] mb-6"
            style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700, fontSize: '26px' }}
          >
            বাংলা ব্র্যান্ড
          </h2>
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
                Primary Audience
              </p>
              <p
                className="text-[#1A2332]/80 text-[16px]"
                style={{ fontFamily: "'Noto Serif Bengali', sans-serif" }}
              >
                বাংলাদেশের নাগরিক, সরকারি কর্মকর্তা, ব্যবসায়ী, শিক্ষার্থী, গবেষক
              </p>
            </div>
            <div>
              <p className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
                Brand Name
              </p>
              <p
                className="text-[#1A2332]"
                style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 700, fontSize: '22px' }}
              >
                বাংলাদেশ এআই
              </p>
            </div>
            <div>
              <p className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>
                Tagline
              </p>
              <p
                className="text-[#1A2332]"
                style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontWeight: 600, fontSize: '18px' }}
              >
                দেশ গড়ি বুদ্ধিমত্তায়
              </p>
            </div>
          </div>
          <div className="pt-4 border-t border-[#006A4E]/20">
            <p className="text-[11px] text-[#1A2332]/50 uppercase tracking-wider mb-3" style={{ fontWeight: 600 }}>
              Available Pages
            </p>
            <div className="space-y-2">
              <Link
                to="/bn"
                className="block text-[#006A4E] hover:underline text-[16px]"
                style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
              >
                → হোমপেজ
              </Link>
              <Link
                to="/bn/blog"
                className="block text-[#006A4E] hover:underline text-[16px]"
                style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
              >
                → ব্লগ
              </Link>
              <Link
                to="/bn/blog-post"
                className="block text-[#006A4E] hover:underline text-[16px]"
                style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
              >
                → ব্লগ পোস্ট
              </Link>
              <Link
                to="/bn/about"
                className="block text-[#006A4E] hover:underline text-[16px]"
                style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
              >
                → সম্পর্কে
              </Link>
              <Link
                to="/bn/citizens"
                className="block text-[#006A4E] hover:underline text-[16px]"
                style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}
              >
                → নাগরিকদের জন্য
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Implemented */}
      <section className="mb-16">
        <h2
          className="text-[#1A2332] mb-8 text-center"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '32px' }}
        >
          Bilingual System Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🌐",
              title: "Language Toggle",
              desc: "Seamless switching between English and Bangla with proper URL routing (/bn prefix for Bangla pages)"
            },
            {
              icon: "📱",
              title: "Responsive Design",
              desc: "All Bangla pages optimized for mobile with 56px touch targets and 20px minimum text for accessibility"
            },
            {
              icon: "✍️",
              title: "Typography Rules",
              desc: "Bangla text is +2px larger with 1.8-2.0 line-height for optimal readability of Bengali script"
            },
            {
              icon: "🔢",
              title: "Bangla Numerals",
              desc: "Proper use of Bengali numerals (১২৩৪৫৬৭৮৯০) instead of Western numerals in Bangla content"
            },
            {
              icon: "🎨",
              title: "Font Mapping",
              desc: "Noto Sans/Serif Bengali for all Bangla text, maintaining brand consistency across languages"
            },
            {
              icon: "📄",
              title: "Complete Pages",
              desc: "Full Bangla versions of Homepage, Blog, About, plus unique 'For Citizens' page designed for all Bangladeshis"
            }
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className="text-[#1A2332] mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '16px' }}
              >
                {feature.title}
              </h3>
              <p className="text-[#1A2332]/60 text-[14px]" style={{ lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Components Created */}
      <section className="mb-16">
        <h2
          className="text-[#1A2332] mb-8 text-center"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '32px' }}
        >
          Reusable Components
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
            <h3
              className="text-[#006A4E] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px' }}
            >
              Language Toggle Component
            </h3>
            <p className="text-[#1A2332]/60 text-[14px] mb-4" style={{ lineHeight: 1.6 }}>
              Smart toggle that detects current language from URL and switches between EN and বাং with proper routing.
            </p>
            <div className="flex items-center gap-2 p-4 bg-white rounded-lg border border-gray-200">
              <span className="text-[#006A4E] font-medium text-sm border-b-2 border-[#006A4E]">EN</span>
              <span className="text-[#8A95A3]">|</span>
              <span className="text-[#8A95A3] font-medium text-sm" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>বাং</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F0FDF4] to-white rounded-xl p-8 border border-[#006A4E]/20">
            <h3
              className="text-[#006A4E] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '18px' }}
            >
              Translation Not Available
            </h3>
            <p className="text-[#1A2332]/60 text-[14px] mb-4" style={{ lineHeight: 1.6 }}>
              Banner that appears when translation doesn't exist, with CTA to return to homepage in the available language.
            </p>
            <div className="p-4 bg-[#E8F5E9] rounded-lg border-l-4 border-[#006A4E]">
              <div className="flex items-start gap-2">
                <span className="text-xl">🌐</span>
                <div className="text-[13px] text-[#006A4E]" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>
                  <p className="font-medium">এই নিবন্ধটি বর্তমানে শুধুমাত্র ইংরেজিতে...</p>
                  <p className="opacity-70">বাংলা সংস্করণ শীঘ্রই আসছে।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section>
        <h2
          className="text-[#1A2332] mb-8 text-center"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '32px' }}
        >
          Bangla-First Design Principles
        </h2>
        <div className="bg-gradient-to-br from-[#006A4E] to-[#008C66] rounded-2xl p-10 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px' }}>
                Accessibility Focus
              </h3>
              <ul className="space-y-3 text-white/90 text-[15px]">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Minimum 20px text size for better readability on low-end devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>56px minimum touch targets (larger than standard 44px)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>WhatsApp share buttons on every important content piece</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Simple language without English technical terms</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '20px' }}>
                Content Strategy
              </h3>
              <ul className="space-y-3 text-white/90 text-[15px]">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Not translations — Bangla pages designed from scratch for local context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>"For Citizens" page targets farmers, students, freelancers, SMEs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Visual storytelling with prominent icons and emojis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Focus on practical AI applications for everyday life</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Guide */}
      <section className="mt-16">
        <h2
          className="text-[#1A2332] mb-8 text-center"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: '32px' }}
        >
          Developer Quick Reference
        </h2>
        <div className="bg-[#1A2332] rounded-2xl p-8">
          <h3 className="text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '18px' }}>
            Using Bangla Numerals
          </h3>
          <pre className="text-[13px] text-white/80 overflow-x-auto mb-6" style={{ fontFamily: "monospace", lineHeight: 1.8 }}>
{`import { toBanglaNumber } from "../utils/banglaNumbers";

// Convert any number to Bangla numerals
toBanglaNumber(2026)  // returns "২০২৬"
toBanglaNumber(47.12) // returns "৪৭.১২"
toBanglaNumber("123") // returns "১২৩"`}
          </pre>

          <h3 className="text-white mb-4 mt-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '18px' }}>
            Bangla Typography Rules
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-5">
              <p className="text-[#006A4E] text-sm font-semibold mb-3">✓ Correct</p>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Bangla headings: +2px from English size</li>
                <li>• Bangla body: minimum 19px (20px preferred)</li>
                <li>• Line-height: 1.8 to 2.0 for body text</li>
                <li>• Font: Noto Sans/Serif Bengali always</li>
                <li>• Use Bangla numerals in all dates/stats</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-5">
              <p className="text-[#E8432A] text-sm font-semibold mb-3">✗ Avoid</p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>• Never use Western numerals in Bangla pages</li>
                <li>• Don't use Plus Jakarta Sans for Bangla text</li>
                <li>• Don't use same size as English (too small)</li>
                <li>• Don't mix Bangla and English in same sentence</li>
                <li>• Don't auto-translate — write native content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}