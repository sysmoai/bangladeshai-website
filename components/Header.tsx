'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Moon, Sun, Search } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'
import { usePathname } from 'next/navigation'
import BangladeshAIIcon from '@/components/BangladeshAIIcon'

/* ─── NAV DATA ─────────────────────────────────────────────────────────────── */

const NAV = (isBn: boolean) => [
  {
    id: 'research',
    label: isBn ? 'গবেষণা' : 'Research',
    mega: true,
    cols: [
      {
        heading: isBn ? 'মূল গবেষণা' : 'Core Research',
        items: [
          { label: isBn ? 'বাংলাদেশ এআই রেডিনেস ২০২৬' : 'Bangladesh AI Readiness 2026', href: '/research/ai-readiness' },
          { label: isBn ? 'গ্লোবাল এআই বেঞ্চমার্ক' : 'Global AI Benchmarks', href: '/research/global-benchmarks' },
          { label: isBn ? 'এআই-এর অর্থনৈতিক প্রভাব' : 'Economic Impact of AI', href: '/research/economic-impact' },
          { label: isBn ? 'মন্ত্রণালয়-ভিত্তিক ব্যবহার' : 'Ministry-by-Ministry Use Cases', href: '/research/ministry-use-cases' },
          { label: isBn ? 'নীতি ও নিয়ন্ত্রণ' : 'Policy & Regulation', href: '/research/policy-regulation' },
        ],
      },
      {
        heading: isBn ? 'গভীর গবেষণা' : 'Deep Research',
        items: [
          { label: isBn ? 'জাতীয় এআই কৌশল' : 'National AI Strategy', href: '/research/national-strategy' },
          { label: isBn ? 'দুর্নীতি-বিরোধী এআই' : 'Anti-Corruption AI', href: '/research/anti-corruption' },
          { label: isBn ? 'বাংলা এআই ও এনএলপি' : 'Bangla AI & NLP', href: '/research/bangla-nlp' },
          { label: isBn ? 'কর্মশক্তি ও শিক্ষা' : 'Workforce & Education', href: '/research/workforce-education' },
          { label: isBn ? 'ঝুঁকি ব্যবস্থাপনা' : 'Risk Management', href: '/research/risk-management' },
        ],
      },
    ],
    footer: [
      { label: isBn ? 'সব গবেষণা দেখুন →' : 'View All Research →', href: '/research' },
      { label: isBn ? 'জাতীয় রোডম্যাপ →' : 'National Roadmap →', href: '/roadmap' },
    ],
  },
  {
    id: 'insights',
    label: isBn ? 'বিশ্লেষণ' : 'Insights',
    mega: false,
    items: [
      { label: isBn ? 'বাংলাদেশকে কেন এখনই পদক্ষেপ নিতে হবে' : 'Why Bangladesh Must Act Now', href: '/why-now' },
      { divider: true, label: isBn ? 'বিভাগ অনুযায়ী ব্লগ' : 'Blog by Category' },
      { label: isBn ? 'নীতি ও শাসন' : 'Policy & Governance', href: '/blog?category=policy' },
      { label: isBn ? 'এআই ব্যাখ্যা (বাংলা-প্রথম)' : 'AI Explained (Bangla-First)', href: '/blog?category=ai-explained' },
      { label: isBn ? 'বৈশ্বিক পাঠ' : 'Global Lessons', href: '/blog?category=global' },
      { label: isBn ? 'অর্থনৈতিক প্রভাব' : 'Economic Impact', href: '/blog?category=economy' },
      { label: isBn ? 'মতামত ও বিশ্লেষণ' : 'Opinion & Analysis', href: '/blog?category=opinion' },
      { divider: false, label: '' },
      { label: isBn ? 'সব ব্লগ পোস্ট →' : 'All Blog Posts →', href: '/blog', cta: true },
    ],
  },
  {
    id: 'foryou',
    label: isBn ? 'আপনার জন্য' : 'For You',
    mega: false,
    items: [
      { label: isBn ? 'সরকারি কর্মকর্তাদের জন্য' : 'For Government Officials', href: '/for-government', icon: '🏙️', desc: isBn ? 'প্রমাণ-ভিত্তিক নীতি সুপারিশ' : 'Evidence-based policy recommendations' },
      { label: isBn ? 'নাগরিকদের জন্য' : 'For Citizens (নাগরিকদের জন্য)', href: '/for-citizens', icon: '👥', desc: isBn ? 'সহজ বাংলায় এআই ব্যাখ্যা' : 'AI explained in plain Bangla' },
      { label: isBn ? 'উন্নয়ন অংশীদারদের জন্য' : 'For Development Partners', href: '/for-partners', icon: '🤝', desc: isBn ? 'গবেষণা অংশীদারিত্ব ও সহ-অর্থায়ন' : 'Research partnerships & co-funding' },
    ],
  },
  {
    id: 'about',
    label: isBn ? 'পরিচিতি' : 'About',
    mega: false,
    items: [
      { label: isBn ? 'বাংলাদেশএআই.অর্গ সম্পর্কে' : 'About BangladeshAI.org', href: '/about' },
      { label: isBn ? 'প্রতিষ্ঠাতা — ইমন হোসেন' : 'Founder — Emon Hossain', href: '/about/emon-hossain' },
      { label: isBn ? 'স্বাধীনতার বিবৃতি' : 'Independence Statement', href: '/about/independence' },
      { label: isBn ? 'পদ্ধতিগত নোট' : 'Methodology Note', href: '/about/methodology' },
      { label: isBn ? 'মিডিয়া ও প্রেস কিট' : 'Media & Press Kit', href: '/press' },
    ],
  },
  {
    id: 'resources',
    label: isBn ? 'সম্পদ' : 'Resources',
    mega: false,
    items: [
      { label: isBn ? 'ডাউনলোড ও প্রতিবেদন' : 'Downloads & Reports', href: '/resources', icon: '📊' },
      { label: isBn ? 'প্রায়শ জিজ্ঞাসিত প্রশ্ন' : 'FAQ', href: '/faq', icon: '❓' },
      { label: isBn ? 'এআই শব্দকোষ' : 'AI Glossary', href: '/glossary', icon: '📖' },
      { label: isBn ? 'নিউজলেটার' : 'Newsletter', href: '/newsletter', icon: '📧' },
      { label: isBn ? 'যোগাযোগ করুন' : 'Contact Us', href: '/contact', icon: '📞' },
    ],
  },
]

/* ─── TYPES ─────────────────────────────────────────────────────────────────── */

type NavItem = {
  label: string
  href?: string
  icon?: string
  desc?: string
  divider?: boolean
  cta?: boolean
}

type NavEntry = {
  id: string
  label: string
  mega: boolean
  cols?: { heading: string; items: NavItem[] }[]
  footer?: NavItem[]
  items?: NavItem[]
}

/* ─── LOGO ───────────────────────────────────────────────────────────────────── */

function NavLogo({ isBn }: { isBn: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0 group">
      <div className="transition-transform duration-300 group-hover:scale-105">
        <BangladeshAIIcon size={36} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-white font-bold text-[17px] tracking-tight group-hover:text-white/90 transition-colors">
          BangladeshAI.org
        </span>
        <span className="text-white/45 text-[10.5px] font-normal tracking-wide">
          {isBn ? 'মেধায় জাতি গড়' : 'Intelligence Builds Nations'}
        </span>
      </div>
    </Link>
  )
}

/* ─── MEGA DROPDOWN ──────────────────────────────────────────────────────────── */

function MegaDropdown({ entry, onClose }: { entry: NavEntry; onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[660px] bg-white dark:bg-[#1e2d3d] border border-slate-200 dark:border-slate-600 rounded-2xl shadow-[0_20px_60px_-8px_rgba(0,0,0,0.35)] overflow-hidden z-50 animate-dropdown"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-2 gap-0 p-5">
        {entry.cols?.map((col) => (
          <div key={col.heading} className="pr-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-400 mb-3 px-2">
              {col.heading}
            </p>
            {col.items.map((item) => (
              <Link
                key={item.href}
                href={item.href!}
                onClick={onClose}
                className="group/link flex items-center gap-2.5 px-2.5 py-2 text-[13px] font-semibold text-slate-700 dark:text-slate-100 hover:text-primary-blue dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-white/10 rounded-lg transition-all duration-150 mb-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-500 group-hover/link:bg-primary-blue dark:group-hover/link:bg-blue-400 transition-colors shrink-0 flex-shrink-0" />
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      {entry.footer && (
        <div className="bg-slate-50 dark:bg-white/[0.05] border-t border-slate-200 dark:border-slate-600 px-5 py-3 flex gap-5">
          {entry.footer.map((f) => (
            <Link
              key={f.href}
              href={f.href!}
              onClick={onClose}
              className="text-[13px] font-bold text-primary-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {f.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── SIMPLE DROPDOWN ────────────────────────────────────────────────────────── */

function SimpleDropdown({ entry, onClose }: { entry: NavEntry; onClose: () => void }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[268px] bg-white dark:bg-[#1e2d3d] border border-slate-200 dark:border-slate-600 rounded-2xl shadow-[0_20px_60px_-8px_rgba(0,0,0,0.35)] overflow-hidden z-50 animate-dropdown"
      onMouseLeave={onClose}
    >
      <div className="p-2">
        {entry.items?.map((item, i) => {
          if (item.divider) {
            return (
              <p key={i} className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-400 px-3 pt-3 pb-1.5">
                {item.label}
              </p>
            )
          }
          if (!item.label && !item.href) {
            return <div key={i} className="border-t border-slate-200 dark:border-slate-600 my-1.5 mx-1" />
          }
          return (
            <Link
              key={item.href || i}
              href={item.href!}
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl transition-all duration-150 mb-0.5 hover:bg-blue-50 dark:hover:bg-white/10 ${
                item.cta ? 'mt-0.5' : ''
              }`}
            >
              {item.icon && <span className="mr-2 text-base">{item.icon}</span>}
              <span className={`font-semibold text-[13px] ${
                item.cta
                  ? 'text-primary-blue dark:text-blue-400'
                  : 'text-slate-800 dark:text-slate-100'
              }`}>
                {item.label}
              </span>
              {item.desc && (
                <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                  {item.desc}
                </p>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

/* ─── DESKTOP NAV ITEM ───────────────────────────────────────────────────────── */

function NavDropdownItem({ entry, pathname }: { entry: NavEntry; pathname: string }) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isActive =
    pathname === `/${entry.id}` ||
    (entry.id === 'research' && pathname.startsWith('/research')) ||
    (entry.id === 'insights' && (pathname.startsWith('/blog') || pathname === '/why-now')) ||
    (entry.id === 'foryou' && pathname.startsWith('/for-')) ||
    (entry.id === 'about' && (pathname.startsWith('/about') || pathname === '/press')) ||
    (entry.id === 'resources' && ['/resources', '/faq', '/glossary', '/newsletter', '/contact'].includes(pathname))

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`relative flex items-center gap-1 text-[13.5px] font-medium transition-all duration-200 whitespace-nowrap py-1 group ${
          isActive ? 'text-white' : 'text-white/65 hover:text-white'
        }`}
        aria-expanded={open}
      >
        {entry.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 opacity-60 group-hover:opacity-100 ${open ? 'rotate-180' : ''}`}
        />
        <span
          className={`absolute -bottom-[19px] left-0 right-0 h-[2px] rounded-full transition-all duration-200 ${
            isActive ? 'bg-blue-400 opacity-100' : 'bg-blue-400 opacity-0 group-hover:opacity-40'
          }`}
        />
      </button>

      {open && (
        entry.mega
          ? <MegaDropdown entry={entry} onClose={() => setOpen(false)} />
          : <SimpleDropdown entry={entry} onClose={() => setOpen(false)} />
      )}
    </div>
  )
}

/* ─── LANGUAGE PILL ──────────────────────────────────────────────────────────── */

function LanguagePill({ isBn, onToggle }: { isBn: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle language"
      className="relative flex items-center h-7 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-200 px-1 gap-0 overflow-hidden"
    >
      <span
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white/20 transition-all duration-250 ease-in-out ${
          isBn ? 'left-[calc(50%+1px)]' : 'left-0.5'
        }`}
      />
      <span className={`relative z-10 px-2.5 text-[12px] font-semibold transition-colors duration-200 ${!isBn ? 'text-white' : 'text-white/45'}`}>
        EN
      </span>
      <span className={`relative z-10 px-2.5 text-[12px] font-semibold font-bangla transition-colors duration-200 ${isBn ? 'text-white' : 'text-white/45'}`}>
        বাং
      </span>
    </button>
  )
}

/* ─── THEME BUTTON ───────────────────────────────────────────────────────────── */

function ThemeButton({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-7 h-7 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200"
    >
      {theme === 'dark'
        ? <Sun size={13} strokeWidth={2} />
        : <Moon size={13} strokeWidth={2} />
      }
    </button>
  )
}

/* ─── MOBILE ACCORDION GROUP ─────────────────────────────────────────────────── */

function MobileGroup({ entry, onNavigate }: { entry: NavEntry; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 px-5 text-white font-semibold text-[15px] transition-colors hover:text-white/90"
      >
        <span>{entry.label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-250 text-white/40 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-250 ease-in-out"
        style={{ maxHeight: open ? '800px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="pb-3 px-3">
          {entry.mega
            ? entry.cols?.map((col) => (
                <div key={col.heading} className="mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35 px-3 pb-1.5 pt-2">
                    {col.heading}
                  </p>
                  {col.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href!}
                      onClick={onNavigate}
                      className="block px-3 py-2.5 text-[13.5px] text-white/70 hover:text-white hover:bg-white/[0.07] rounded-xl transition-all duration-150"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))
            : entry.items?.map((item, i) => {
                if (item.divider) {
                  return (
                    <p key={i} className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35 px-3 pt-3 pb-1.5">
                      {item.label}
                    </p>
                  )
                }
                if (!item.label && !item.href) {
                  return <div key={i} className="border-t border-white/[0.07] my-2 mx-3" />
                }
                return (
                  <Link
                    key={item.href || i}
                    href={item.href!}
                    onClick={onNavigate}
                    className="flex items-start gap-2.5 px-3 py-2.5 text-[13.5px] text-white/70 hover:text-white hover:bg-white/[0.07] rounded-xl transition-all duration-150"
                  >
                    {item.icon && <span className="text-base mt-0.5">{item.icon}</span>}
                    <span>{item.label}</span>
                  </Link>
                )
              })}

          {entry.footer && (
            <div className="mt-2 pt-2.5 border-t border-white/[0.07] px-3 flex gap-4 flex-wrap pb-1">
              {entry.footer.map((f) => (
                <Link
                  key={f.href}
                  href={f.href!}
                  onClick={onNavigate}
                  className="text-[13px] font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {f.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── MAIN HEADER ────────────────────────────────────────────────────────────── */

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const isBn = language === 'bn'
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const nav = NAV(isBn)

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#131d2b]/90 backdrop-blur-[16px] shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_32px_-8px_rgba(0,0,0,0.4)]'
            : 'bg-[#1A2332] shadow-[0_1px_0_rgba(255,255,255,0.07)]'
        }`}
        style={{ height: scrolled ? '54px' : '62px', transition: 'height 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full gap-8">

            {/* Logo */}
            <NavLogo isBn={isBn} />

            {/* Desktop nav — center */}
            <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center" aria-label="Main navigation">
              {nav.map((entry) => (
                <NavDropdownItem key={entry.id} entry={entry} pathname={pathname} />
              ))}
            </nav>

            {/* Desktop controls — right */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <LanguagePill isBn={isBn} onToggle={() => setLanguage(isBn ? 'en' : 'bn')} />
              <ThemeButton theme={theme} onToggle={toggleTheme} />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all duration-200"
            >
              {mobileOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ease-in-out ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-8px] pointer-events-none'
        }`}
        style={{ top: scrolled ? '54px' : '62px' }}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full bg-[#131d2b]/98 backdrop-blur-2xl overflow-y-auto flex flex-col">
          {/* Accordion groups */}
          <div className="flex-1">
            {nav.map((entry) => (
              <MobileGroup key={entry.id} entry={entry} onNavigate={() => setMobileOpen(false)} />
            ))}
          </div>

          {/* Drawer footer */}
          <div className="px-5 py-5 border-t border-white/[0.07]">
            <div className="flex items-center gap-2.5">
              <div className="flex-1">
                <LanguagePill isBn={isBn} onToggle={() => setLanguage(isBn ? 'en' : 'bn')} />
              </div>
              <ThemeButton theme={theme} onToggle={toggleTheme} />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: scrolled ? '54px' : '62px' }}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      <style jsx global>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px) scale(0.98); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
        .animate-dropdown {
          animation: dropdownIn 180ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  )
}
