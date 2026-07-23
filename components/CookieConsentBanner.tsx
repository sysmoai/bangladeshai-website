'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
    // Load Plausible after consent
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) {
      const script = document.createElement('script')
      script.defer = true
      script.setAttribute('data-domain', process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN)
      script.src = 'https://plausible.io/js/script.js'
      script.id = 'plausible-script'
      document.head.appendChild(script)
    }
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#1A2332] text-white shadow-lg border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-gray-300 leading-relaxed">
          This site uses Plausible Analytics — a privacy-friendly, cookieless analytics tool — to
          understand how visitors use the site. No personal data is collected or stored.{' '}
          <a
            href="https://plausible.io/data-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Learn more
          </a>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-white/20 rounded-lg hover:border-white/40 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold bg-bd-green text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Accept
          </button>
          <button onClick={decline} className="text-gray-500 hover:text-white transition-colors" aria-label="Close">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}