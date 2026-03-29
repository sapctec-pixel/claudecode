'use client'

import { useState } from 'react'
import { User, Calendar, Loader2, AlertTriangle } from 'lucide-react'

type Gender = 'male' | 'female' | ''

export default function ProfilePage() {
  const [name, setName] = useState('محمد عبدالله')
  const [dob, setDob] = useState('1995-06-15')
  const [gender, setGender] = useState<Gender>('male')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setSaved(false)
    setTimeout(() => {
      setSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }, 800)
  }

  return (
    <div>
      <h1 className="text-2xl font-black text-stone-900 mb-6">الملف الشخصي</h1>

      {/* Profile form */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-6">
        <h2 className="text-stone-900 font-bold text-sm mb-6 flex items-center gap-2">
          <User className="w-4 h-4 text-amber-500" />
          البيانات الشخصية
        </h2>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Full name */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">الاسم الكامل</label>
            <div className="flex items-center bg-stone-100 border border-stone-200 rounded-xl overflow-hidden focus-within:border-amber-500 transition">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-stone-900 placeholder-zinc-600 text-sm outline-none"
                required
              />
              <User className="w-4 h-4 text-stone-400 mx-3 shrink-0" />
            </div>
          </div>

          {/* Phone (read-only) */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">رقم الجوال</label>
            <div className="flex items-center bg-stone-100/50 border border-stone-200/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-3 border-l border-stone-200/50 py-3 shrink-0">
                <span className="text-lg">🇸🇦</span>
                <span className="text-stone-500 text-sm font-semibold">+966</span>
              </div>
              <input
                type="tel"
                value="0512345678"
                readOnly
                className="flex-1 bg-transparent px-4 py-3 text-stone-500 text-sm outline-none cursor-not-allowed"
                dir="ltr"
              />
              <button
                type="button"
                className="text-amber-700 hover:text-amber-800 text-xs font-semibold px-4 shrink-0 transition"
              >
                تغيير
              </button>
            </div>
            <p className="text-stone-400 text-xs mt-1.5">سيتم إرسال رمز تحقق لتغيير الرقم</p>
          </div>

          {/* Date of birth */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">تاريخ الميلاد</label>
            <div className="flex items-center bg-stone-100 border border-stone-200 rounded-xl overflow-hidden focus-within:border-amber-500 transition">
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                className="flex-1 bg-transparent px-4 py-3 text-stone-900 text-sm outline-none [color-scheme:dark]"
              />
              <Calendar className="w-4 h-4 text-stone-400 mx-3 shrink-0" />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-3">الجنس</label>
            <div className="flex gap-4">
              {[
                { value: 'male' as Gender, label: 'ذكر' },
                { value: 'female' as Gender, label: 'أنثى' },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="radio"
                      name="gender"
                      value={option.value}
                      checked={gender === option.value}
                      onChange={() => setGender(option.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                      gender === option.value ? 'border-amber-600' : 'border-stone-300 group-hover:border-stone-400'
                    }`}>
                      {gender === option.value && (
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-stone-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Save button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-stone-900 font-bold px-8 py-3 rounded-xl transition"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              حفظ التغييرات
            </button>
            {saved && (
              <p className="text-green-400 text-sm mt-3 flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                تم حفظ التغييرات بنجاح
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Danger zone */}
      <div className="bg-white border border-amber-900/40 rounded-2xl p-6">
        <h2 className="text-amber-700 font-bold text-sm mb-1 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          منطقة الخطر
        </h2>
        <p className="text-stone-500 text-xs mb-5">هذه الإجراءات لا يمكن التراجع عنها</p>

        {!showDeleteConfirm ? (
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="border border-amber-600/60 hover:border-amber-500 text-amber-700 hover:text-amber-800 font-semibold px-6 py-2.5 rounded-xl text-sm transition"
          >
            حذف الحساب
          </button>
        ) : (
          <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-4">
            <p className="text-stone-900 font-semibold text-sm mb-1">هل أنت متأكد؟</p>
            <p className="text-stone-600 text-xs mb-4">سيتم حذف حسابك وجميع بياناتك بشكل نهائي ولا يمكن استعادتها.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold py-2.5 rounded-xl text-sm transition"
              >
                إلغاء
              </button>
              <button
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold py-2.5 rounded-xl text-sm transition"
              >
                نعم، احذف حسابي
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
