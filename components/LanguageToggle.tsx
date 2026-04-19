'use client'

import { useLanguage } from '@/lib/language-context'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
      className="flex items-center gap-0 px-3 py-1.5 rounded-full border border-border-color text-sm font-medium hover:border-bd-green transition-colors"
      aria-label="Toggle language"
    >
      <span className={`px-1 transition-colors ${language === 'en' ? 'text-bd-green font-bold' : 'text-text-secondary'}`}>EN</span>
      <span className="text-border-color mx-0.5">|</span>
      <span className={`px-1 transition-colors font-bangla ${language === 'bn' ? 'text-bd-green font-bold' : 'text-text-secondary'}`}>বাংলা</span>
    </button>
  )
}
