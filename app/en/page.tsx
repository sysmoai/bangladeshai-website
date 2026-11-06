'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'

// Static-safe language selector: do not use next/navigation server redirect.
export default function EnPage() {
  const router = useRouter()
  const { setLanguage } = useLanguage()
  useEffect(() => {
    setLanguage('en')
    router.replace('/')
  }, [router, setLanguage])
  return <main className="min-h-screen flex items-center justify-center"><p>Loading...</p></main>
}
