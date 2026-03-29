'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ArrowLeft, Loader2, User, Calendar } from 'lucide-react'

type Step = 'form' | 'otp'

export default function RegisterPage() {
  const [step, setStep] = useState<Step>('form')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [terms, setTerms] = useState(false)
  const [ageError, setAgeError] = useState('')
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(59)
  const [loading, setLoading] = useState(false)
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (step !== 'otp') return
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [step])

  function validateAge(dateString: string): boolean {
    if (!dateString) return false
    const birthDate = new Date(dateString)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    const adjustedAge = m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age
    return adjustedAge >= 18
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setAgeError('')
    if (!validateAge(dob)) {
      setAgeError('يجب أن يكون عمرك 18 سنة أو أكثر')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep('otp')
      setCountdown(59)
      setTimeout(() => otpRefs.current[0]?.focus(), 100)
    }, 800)
  }

  function handleOtpChange(index: number, value: string) {
    if (!/^\d*$/.test(value)) return
    const next = [...otp]
    next[index] = value.slice(-1)
    setOtp(next)
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  function handleOtpVerify(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 800)
  }

  function handleResend() {
    if (countdown > 0) return
    setOtp(['', '', '', '', '', ''])
    setCountdown(59)
    setTimeout(() => otpRefs.current[0]?.focus(), 100)
  }

  const maskedPhone = phone ? `0${phone.slice(0, 2)}XX` : '05XX'
  const isFormValid = name.trim() && phone.length >= 9 && dob && terms

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center">
              <span className="text-stone-900 font-black text-sm">VS</span>
            </div>
            <span className="text-stone-900 font-black text-xl tracking-widest">VAPE SMOG</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white border border-stone-200 rounded-2xl p-8">
          {step === 'form' ? (
            <>
              <h1 className="text-2xl font-black text-stone-900 mb-1">إنشاء حساب جديد</h1>
              <p className="text-stone-600 text-sm mb-8">انضم إلى مجتمع VAPE SMOG</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full name */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">الاسم الكامل</label>
                  <div className="flex items-center bg-stone-100 border border-stone-200 rounded-xl overflow-hidden focus-within:border-amber-500 transition">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="محمد عبدالله"
                      className="flex-1 bg-transparent px-4 py-3 text-stone-900 placeholder-zinc-600 text-sm outline-none"
                      required
                    />
                    <User className="w-4 h-4 text-stone-400 mx-3" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">رقم الجوال</label>
                  <div className="flex items-center bg-stone-100 border border-stone-200 rounded-xl overflow-hidden focus-within:border-amber-500 transition">
                    <div className="flex items-center gap-2 px-3 border-l border-stone-200 py-3 shrink-0">
                      <span className="text-lg">🇸🇦</span>
                      <span className="text-stone-600 text-sm font-semibold">+966</span>
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                      placeholder="05XXXXXXXX"
                      className="flex-1 bg-transparent px-4 py-3 text-stone-900 placeholder-zinc-600 text-sm outline-none"
                      required
                      maxLength={9}
                    />
                    <Phone className="w-4 h-4 text-stone-400 mx-3" />
                  </div>
                </div>

                {/* Date of birth */}
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">تاريخ الميلاد</label>
                  <div className="flex items-center bg-stone-100 border border-stone-200 rounded-xl overflow-hidden focus-within:border-amber-500 transition">
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => { setDob(e.target.value); setAgeError('') }}
                      max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                      className="flex-1 bg-transparent px-4 py-3 text-stone-900 text-sm outline-none [color-scheme:dark]"
                      required
                    />
                    <Calendar className="w-4 h-4 text-stone-400 mx-3 shrink-0" />
                  </div>
                  {ageError && (
                    <p className="text-amber-700 text-xs mt-1.5">{ageError}</p>
                  )}
                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      checked={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded flex items-center justify-center border transition ${terms ? 'bg-amber-600 border-amber-600' : 'bg-stone-100 border-stone-300 group-hover:border-zinc-500'}`}>
                      {terms && (
                        <svg className="w-3 h-3 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-stone-600 leading-relaxed">
                    أوافق على{' '}
                    <span className="text-amber-700 hover:text-amber-800">شروط الاستخدام</span>
                    {' '}و{' '}
                    <span className="text-amber-700 hover:text-amber-800">سياسة الخصوصية</span>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading || !isFormValid}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-stone-900 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  إنشاء حساب
                </button>
              </form>

              <p className="text-center text-sm text-stone-500 mt-6">
                لديك حساب؟{' '}
                <Link href="/login" className="text-amber-700 hover:text-amber-800 font-semibold">
                  سجّل دخولك
                </Link>
              </p>
            </>
          ) : (
            <>
              <button
                onClick={() => setStep('form')}
                className="flex items-center gap-1 text-stone-600 hover:text-stone-900 text-sm mb-6 transition"
              >
                <ArrowLeft className="w-4 h-4 rotate-180" />
                تعديل البيانات
              </button>

              <h1 className="text-2xl font-black text-stone-900 mb-1">رمز التحقق</h1>
              <p className="text-stone-600 text-sm mb-1">
                تم إرسال رمز لـ{' '}
                <span className="text-stone-900 font-semibold" dir="ltr">+966 {maskedPhone}</span>
              </p>
              <p className="text-stone-500 text-xs mb-8">أدخل الرمز المكوّن من 6 أرقام</p>

              <form onSubmit={handleOtpVerify} className="space-y-6">
                <div className="flex gap-2 justify-center" dir="ltr">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { otpRefs.current[i] = el }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      className="w-11 h-14 text-center text-xl font-bold bg-stone-100 border border-stone-200 rounded-xl text-stone-900 outline-none focus:border-amber-500 transition caret-transparent"
                    />
                  ))}
                </div>

                <div className="text-center">
                  {countdown > 0 ? (
                    <p className="text-stone-500 text-sm">
                      إعادة الإرسال بعد{' '}
                      <span className="text-stone-900 font-semibold">{countdown}</span> ثانية
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      className="text-amber-700 hover:text-amber-800 text-sm font-semibold transition"
                    >
                      إعادة إرسال الرمز
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading || otp.some((d) => !d)}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-stone-900 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  تحقق وإنشاء الحساب
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
