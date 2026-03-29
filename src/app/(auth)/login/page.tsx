'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ArrowLeft, Loader2 } from 'lucide-react'

type Step = 'phone' | 'otp'

export default function LoginPage() {
  const [step, setStep] = useState<Step>('phone')
  const [phone, setPhone] = useState('')
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

  function handlePhoneSubmit(e: React.FormEvent) {
    e.preventDefault()
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
          {step === 'phone' ? (
            <>
              <h1 className="text-2xl font-black text-stone-900 mb-1">أهلاً بعودتك 👋</h1>
              <p className="text-stone-600 text-sm mb-8">سجّل دخولك للمتابعة</p>

              <form onSubmit={handlePhoneSubmit} className="space-y-5">
                {/* Phone input */}
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
                    <Phone className="w-4 h-4 text-stone-400 ml-3" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || phone.length < 9}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-stone-900 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  إرسال رمز التحقق
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-stone-200" />
                <span className="text-stone-500 text-xs">أو</span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>

              {/* Google button */}
              <button
                type="button"
                className="w-full border border-stone-200 hover:border-zinc-500 text-stone-900 font-semibold py-3 rounded-xl transition flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.9 6.1C12.4 13.2 17.8 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4 6.9-10 6.9-17z" />
                  <path fill="#FBBC05" d="M10.5 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.6l-7.9-6.1A23.8 23.8 0 0 0 0 24c0 3.9.9 7.5 2.5 10.8l8-6.2z" />
                  <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.2 0-11.5-4.1-13.4-9.9l-8 6.2C6.6 42.6 14.6 48 24 48z" />
                </svg>
                تسجيل الدخول بـ Google
              </button>

              <p className="text-center text-sm text-stone-500 mt-6">
                ليس لديك حساب؟{' '}
                <Link href="/register" className="text-amber-700 hover:text-amber-800 font-semibold">
                  سجّل الآن
                </Link>
              </p>
            </>
          ) : (
            <>
              <button
                onClick={() => setStep('phone')}
                className="flex items-center gap-1 text-stone-600 hover:text-stone-900 text-sm mb-6 transition"
              >
                <ArrowLeft className="w-4 h-4 rotate-180" />
                تغيير الرقم
              </button>

              <h1 className="text-2xl font-black text-stone-900 mb-1">رمز التحقق</h1>
              <p className="text-stone-600 text-sm mb-1">
                تم إرسال رمز لـ{' '}
                <span className="text-stone-900 font-semibold" dir="ltr">+966 {maskedPhone}</span>
              </p>
              <p className="text-stone-500 text-xs mb-8">أدخل الرمز المكوّن من 6 أرقام</p>

              <form onSubmit={handleOtpVerify} className="space-y-6">
                {/* OTP inputs */}
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

                {/* Countdown */}
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
                  تحقق
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
