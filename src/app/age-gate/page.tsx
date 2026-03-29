'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AgeGatePage() {
  const router = useRouter()
  const [denied, setDenied] = useState(false)

  function handleConfirm() {
    document.cookie = 'age_verified=1; path=/; max-age=31536000; SameSite=Lax'
    router.push('/')
  }

  function handleDeny() {
    setDenied(true)
    router.push('/blocked')
  }

  if (denied) return null

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-stone-900 flex flex-col items-center justify-center p-6"
    >
      {/* Logo */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-widest text-stone-900">
          VAPE <span className="text-amber-500">SMOG</span>
        </h1>
        <p className="text-stone-600 text-sm mt-1">فيب سموك</p>
      </div>

      {/* Age gate card */}
      <div className="w-full max-w-sm bg-white border border-stone-200 rounded-2xl p-8 text-center shadow-2xl">
        <div className="text-5xl mb-4">🔞</div>
        <h2 className="text-xl font-bold mb-2">تحقق من عمرك</h2>
        <p className="text-stone-600 text-sm mb-6 leading-relaxed">
          هذا الموقع يبيع منتجات التبغ والنيكوتين.
          <br />
          يجب أن تكون بعمر <strong className="text-stone-900">18 سنة أو أكثر</strong> للدخول.
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleDeny}
            className="flex-1 py-3 rounded-xl border border-stone-200 text-stone-600 text-sm hover:border-zinc-500 transition"
          >
            أقل من 18
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold text-sm transition"
          >
            18 أو أكثر ✓
          </button>
        </div>

        <p className="text-stone-400 text-xs mt-4">
          بالضغط على "18 أو أكثر" أنت تؤكد أهليتك القانونية
        </p>
      </div>

      <p className="text-zinc-700 text-xs mt-8">
        © 2025 VAPE SMOG · جميع الحقوق محفوظة
      </p>
    </div>
  )
}
