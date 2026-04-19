'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language-context'

export default function BnPage() {
  const router = useRouter()
  const { setLanguage } = useLanguage()

  useEffect(() => {
    setLanguage('bn')
    router.replace('/')
  }, [router, setLanguage])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-bangla text-text-secondary">লোড হচ্ছে...</p>
    </div>
  )
}
