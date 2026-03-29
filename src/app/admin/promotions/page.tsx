'use client'

import { useState } from 'react'
import { Plus, Edit2, Trash2, X, Tag, ChevronDown } from 'lucide-react'

type CouponStatus = 'نشط' | 'منتهي' | 'معطّل'
type DiscountType = 'نسبة' | 'مبلغ'

interface Coupon {
  id: string
  name: string
  code: string
  discountType: DiscountType
  value: number
  minOrder: number
  usageCount: number
  usageLimit: number
  expiresAt: string
  status: CouponStatus
}

const STATUS_STYLES: Record<CouponStatus, string> = {
  'نشط': 'bg-green-500/10 text-green-400 border border-green-500/20',
  'منتهي': 'bg-amber-500/10 text-amber-700 border border-amber-500/20',
  'معطّل': 'bg-zinc-500/10 text-stone-600 border border-zinc-500/20',
}

const MOCK_COUPONS: Coupon[] = [
  { id: 'C1', name: 'عيد الفطر', code: 'EID2026', discountType: 'نسبة', value: 20, minOrder: 100, usageCount: 84, usageLimit: 200, expiresAt: '2026-04-15', status: 'نشط' },
  { id: 'C2', name: 'ترحيب بالعميل', code: 'WELCOME15', discountType: 'نسبة', value: 15, minOrder: 50, usageCount: 312, usageLimit: 500, expiresAt: '2026-12-31', status: 'نشط' },
  { id: 'C3', name: 'خصم ربيعي', code: 'SPRING50', discountType: 'مبلغ', value: 50, minOrder: 200, usageCount: 200, usageLimit: 200, expiresAt: '2026-03-20', status: 'منتهي' },
  { id: 'C4', name: 'عملاء VIP', code: 'VIP25', discountType: 'نسبة', value: 25, minOrder: 300, usageCount: 45, usageLimit: 100, expiresAt: '2026-06-30', status: 'نشط' },
  { id: 'C5', name: 'شحن مجاني', code: 'FREESHIP', discountType: 'مبلغ', value: 30, minOrder: 150, usageCount: 0, usageLimit: 1000, expiresAt: '2026-05-01', status: 'معطّل' },
  { id: 'C6', name: 'اليوم الوطني', code: 'SAUDI94', discountType: 'نسبة', value: 10, minOrder: 80, usageCount: 540, usageLimit: 500, expiresAt: '2025-09-30', status: 'منتهي' },
]

const EMPTY_FORM = {
  name: '',
  code: '',
  discountType: 'نسبة' as DiscountType,
  value: '',
  minOrder: '',
  usageLimit: '',
  expiresAt: '',
  status: true,
}

export default function PromotionsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>(MOCK_COUPONS)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)

  function openModal() {
    setForm(EMPTY_FORM)
    setShowModal(true)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newCoupon: Coupon = {
      id: `C${Date.now()}`,
      name: form.name,
      code: form.code.toUpperCase(),
      discountType: form.discountType,
      value: parseFloat(form.value) || 0,
      minOrder: parseFloat(form.minOrder) || 0,
      usageCount: 0,
      usageLimit: parseInt(form.usageLimit) || 0,
      expiresAt: form.expiresAt,
      status: form.status ? 'نشط' : 'معطّل',
    }
    setCoupons((prev) => [newCoupon, ...prev])
    setShowModal(false)
  }

  function deleteCoupon(id: string) {
    setCoupons((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-stone-900">إدارة العروض</h1>
        <button
          onClick={openModal}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-stone-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          إضافة كوبون
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                {['اسم الكوبون', 'الكود', 'نوع الخصم', 'القيمة', 'الحد الأدنى', 'الاستخدام/الحد', 'تاريخ الانتهاء', 'الحالة', 'إجراءات'].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-right text-stone-600 font-medium whitespace-nowrap">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {coupons.map((c) => (
                <tr key={c.id} className="border-b border-stone-200/50 hover:bg-stone-100/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Tag size={14} className="text-amber-700 flex-shrink-0" />
                      <span className="text-stone-900 font-medium">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-sm bg-stone-100 border border-stone-200 text-yellow-400 px-2 py-0.5 rounded">
                      {c.code}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-700">{c.discountType}</td>
                  <td className="px-4 py-3 text-stone-900 font-medium">
                    {c.discountType === 'نسبة' ? `${c.value}%` : `${c.value} ر.س`}
                  </td>
                  <td className="px-4 py-3 text-stone-700">{c.minOrder} ر.س</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-stone-100 rounded-full h-1.5 w-20">
                        <div
                          className="bg-amber-500 h-1.5 rounded-full"
                          style={{ width: `${Math.min((c.usageCount / (c.usageLimit || 1)) * 100, 100)}%` }}
                        />
                      </div>
                      <span className="text-stone-600 text-xs">{c.usageCount}/{c.usageLimit}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-stone-600">{c.expiresAt}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 text-stone-600 hover:text-blue-400 hover:bg-stone-200 rounded-lg transition-colors">
                        <Edit2 size={15} />
                      </button>
                      <button
                        onClick={() => deleteCoupon(c.id)}
                        className="p-1.5 text-stone-600 hover:text-amber-700 hover:bg-stone-200 rounded-lg transition-colors"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {coupons.length === 0 && (
          <div className="py-12 text-center text-stone-500">لا توجد كوبونات</div>
        )}
      </div>

      {/* Add Coupon Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)} />
          <div className="relative bg-white border border-stone-200 rounded-2xl w-full max-w-lg shadow-2xl z-10">
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
              <h2 className="text-lg font-bold text-stone-900">إضافة كوبون جديد</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-stone-600 hover:text-stone-900 p-1 rounded-lg hover:bg-stone-100"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-stone-600 text-sm mb-1.5">اسم الكوبون</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="مثال: عيد الفطر"
                    className="w-full bg-stone-100 border border-stone-200 text-stone-900 placeholder-zinc-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-stone-600 text-sm mb-1.5">الكود</label>
                  <input
                    required
                    type="text"
                    value={form.code}
                    onChange={(e) => setForm({ ...form, code: e.target.value })}
                    placeholder="مثال: EID2026"
                    className="w-full bg-stone-100 border border-stone-200 text-stone-900 placeholder-zinc-500 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-stone-600 text-sm mb-2">نوع الخصم</label>
                  <div className="flex gap-4">
                    {(['نسبة مئوية', 'مبلغ ثابت'] as const).map((t) => (
                      <label key={t} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="discountType"
                          checked={
                            (t === 'نسبة مئوية' && form.discountType === 'نسبة') ||
                            (t === 'مبلغ ثابت' && form.discountType === 'مبلغ')
                          }
                          onChange={() =>
                            setForm({ ...form, discountType: t === 'نسبة مئوية' ? 'نسبة' : 'مبلغ' })
                          }
                          className="accent-amber-500"
                        />
                        <span className="text-stone-700 text-sm">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">
                    القيمة {form.discountType === 'نسبة' ? '(%)' : '(ر.س)'}
                  </label>
                  <input
                    required
                    type="number"
                    min="0"
                    value={form.value}
                    onChange={(e) => setForm({ ...form, value: e.target.value })}
                    className="w-full bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">الحد الأدنى للطلب (ر.س)</label>
                  <input
                    type="number"
                    min="0"
                    value={form.minOrder}
                    onChange={(e) => setForm({ ...form, minOrder: e.target.value })}
                    className="w-full bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">عدد الاستخدامات</label>
                  <input
                    type="number"
                    min="0"
                    value={form.usageLimit}
                    onChange={(e) => setForm({ ...form, usageLimit: e.target.value })}
                    className="w-full bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">تاريخ الانتهاء</label>
                  <input
                    required
                    type="date"
                    value={form.expiresAt}
                    onChange={(e) => setForm({ ...form, expiresAt: e.target.value })}
                    className="w-full bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="col-span-2 flex items-center justify-between bg-stone-100 rounded-lg px-4 py-3">
                  <span className="text-stone-700 text-sm">الحالة</span>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, status: !form.status })}
                    className={`relative w-11 h-6 rounded-full transition-colors ${form.status ? 'bg-green-500' : 'bg-zinc-600'}`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${form.status ? 'right-1' : 'left-1'}`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-stone-900 rounded-lg py-2.5 text-sm font-medium transition-colors"
                >
                  إضافة الكوبون
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg py-2.5 text-sm transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
