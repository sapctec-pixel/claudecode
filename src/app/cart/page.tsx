'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag, Tag, Shield, Truck, RotateCcw } from 'lucide-react'
import { useCartStore } from '@/stores/cart-store'
import type { CartItem } from '@/stores/cart-store'

const MOCK_ITEMS: CartItem[] = [
  {
    id: 'mock-1',
    productId: 'prod-1',
    name: 'SMOK Nord 5 Kit',
    nameAr: 'جهاز سموك نورد 5',
    price: 149,
    quantity: 1,
    image: 'https://placehold.co/120x120/18181b/ef4444?text=SMOK',
    slug: 'smok-nord-5',
  },
  {
    id: 'mock-2',
    productId: 'prod-2',
    variantId: 'v-mango',
    name: 'Al Fakher Mango - 250g',
    nameAr: 'الفاخر مانجو 250 جرام',
    price: 45,
    quantity: 2,
    image: 'https://placehold.co/120x120/18181b/ef4444?text=AF',
    slug: 'al-fakher-mango-250g',
  },
]

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } = useCartStore()
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')

  // Use store items if available, else show mock items for layout demo
  const displayItems: CartItem[] = items.length > 0 ? items : MOCK_ITEMS
  const isDemo = items.length === 0

  const subtotal = isDemo
    ? MOCK_ITEMS.reduce((s, i) => s + i.price * i.quantity, 0)
    : total()

  const count = isDemo
    ? MOCK_ITEMS.reduce((s, i) => s + i.quantity, 0)
    : itemCount()

  const shippingCost = subtotal >= 150 ? 0 : 25
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0
  const grandTotal = subtotal + shippingCost - discount

  function handleApplyCoupon() {
    if (coupon.trim().toUpperCase() === 'SMOG10') {
      setCouponApplied(true)
      setCouponError('')
    } else {
      setCouponError('كود الخصم غير صحيح')
      setCouponApplied(false)
    }
  }

  function handleQty(id: string, current: number, delta: number) {
    const next = current + delta
    if (next < 1 || next > 99) return
    if (!isDemo) updateQuantity(id, next)
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page title */}
        <h1 className="text-2xl font-bold mb-8">
          سلة التسوق{' '}
          <span className="text-stone-600 font-normal text-lg">
            ({count} {count === 1 ? 'منتج' : 'منتجات'})
          </span>
        </h1>

        {displayItems.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-stone-400" />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-stone-700 mb-2">سلتك فارغة</p>
              <p className="text-stone-500 text-sm">أضف بعض المنتجات لتبدأ التسوق</p>
            </div>
            <Link
              href="/"
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-xl font-semibold transition"
            >
              تسوق الآن
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT: Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {displayItems.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  isDemo={isDemo}
                  onQty={handleQty}
                  onRemove={(id) => { if (!isDemo) removeItem(id) }}
                />
              ))}

              {/* Clear cart */}
              {!isDemo && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={clearCart}
                    className="flex items-center gap-2 text-sm text-stone-600 hover:text-amber-700 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    مسح السلة
                  </button>
                </div>
              )}

              {isDemo && (
                <p className="text-xs text-stone-400 text-center pt-2">
                  * عرض توضيحي — أضف منتجات لترى سلتك الفعلية
                </p>
              )}
            </div>

            {/* RIGHT: Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                subtotal={subtotal}
                shippingCost={shippingCost}
                discount={discount}
                grandTotal={grandTotal}
                coupon={coupon}
                couponApplied={couponApplied}
                couponError={couponError}
                onCouponChange={setCoupon}
                onApplyCoupon={handleApplyCoupon}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Cart Item Row ─────────────────────────────────────────────────────────── */

interface CartItemRowProps {
  item: CartItem
  isDemo: boolean
  onQty: (id: string, current: number, delta: number) => void
  onRemove: (id: string) => void
}

function CartItemRow({ item, isDemo, onQty, onRemove }: CartItemRowProps) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl p-4 border border-stone-200">
      {/* Image */}
      <div className="relative w-[60px] h-[60px] shrink-0 rounded-xl overflow-hidden bg-stone-100">
        <Image
          src={item.image}
          alt={item.nameAr}
          fill
          className="object-cover"
          sizes="60px"
          unoptimized={item.image.startsWith('https://placehold.co')}
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-stone-900 leading-tight truncate">{item.nameAr}</p>
        <p className="text-xs text-stone-500 truncate">{item.name}</p>
        <p className="text-sm text-stone-600 mt-1">{item.price} ر.س / قطعة</p>
      </div>

      {/* Qty + remove */}
      <div className="flex flex-col items-end justify-between shrink-0 gap-2">
        {/* Subtotal */}
        <p className="font-bold text-amber-700 text-sm">{item.price * item.quantity} ر.س</p>

        {/* Quantity controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onQty(item.id, item.quantity, -1)}
            disabled={item.quantity <= 1}
            className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition"
            aria-label="تقليل الكمية"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
          <button
            onClick={() => onQty(item.id, item.quantity, 1)}
            disabled={item.quantity >= 99}
            className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition"
            aria-label="زيادة الكمية"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>

        {/* Remove */}
        <button
          onClick={() => onRemove(item.id)}
          disabled={isDemo}
          className="text-stone-400 hover:text-amber-500 disabled:opacity-30 disabled:cursor-not-allowed transition"
          aria-label="حذف المنتج"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

/* ─── Order Summary ──────────────────────────────────────────────────────────── */

interface OrderSummaryProps {
  subtotal: number
  shippingCost: number
  discount: number
  grandTotal: number
  coupon: string
  couponApplied: boolean
  couponError: string
  onCouponChange: (v: string) => void
  onApplyCoupon: () => void
}

function OrderSummary({
  subtotal,
  shippingCost,
  discount,
  grandTotal,
  coupon,
  couponApplied,
  couponError,
  onCouponChange,
  onApplyCoupon,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 sticky top-24 space-y-5">
      <h2 className="text-lg font-bold border-b border-stone-200 pb-4">ملخص الطلب</h2>

      {/* Rows */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-stone-700">
          <span>المجموع الفرعي</span>
          <span>{subtotal} ر.س</span>
        </div>
        <div className="flex justify-between text-stone-700">
          <span>الشحن</span>
          <span className={shippingCost === 0 ? 'text-green-400' : ''}>
            {shippingCost === 0 ? 'مجاني' : `${shippingCost} ر.س`}
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-400">
            <span>خصم الكوبون</span>
            <span>- {discount} ر.س</span>
          </div>
        )}
      </div>

      {/* Coupon */}
      <div className="space-y-2">
        <label className="text-sm text-stone-600 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5" />
          كود الخصم
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={coupon}
            onChange={(e) => onCouponChange(e.target.value)}
            placeholder="أدخل الكود"
            className="flex-1 bg-stone-100 border border-stone-200 rounded-xl px-3 py-2 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition"
          />
          <button
            onClick={onApplyCoupon}
            className="px-4 py-2 bg-stone-200 hover:bg-zinc-600 rounded-xl text-sm font-semibold transition whitespace-nowrap"
          >
            تطبيق
          </button>
        </div>
        {couponError && <p className="text-xs text-amber-700">{couponError}</p>}
        {couponApplied && <p className="text-xs text-green-400">تم تطبيق الكوبون بنجاح! خصم 10%</p>}
      </div>

      {/* Divider */}
      <div className="border-t border-stone-200" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">المجموع الكلي</span>
        <span className="font-black text-2xl text-amber-700">{grandTotal} ر.س</span>
      </div>

      {/* CTA */}
      <Link
        href="/checkout"
        className="block w-full text-center py-3.5 bg-amber-600 hover:bg-amber-700 rounded-xl font-bold text-lg transition"
      >
        إتمام الطلب
      </Link>
      <Link
        href="/"
        className="block text-center text-sm text-stone-600 hover:text-stone-900 transition"
      >
        متابعة التسوق
      </Link>

      {/* Trust badges */}
      <div className="border-t border-stone-200 pt-4 grid grid-cols-3 gap-2 text-center">
        <div className="flex flex-col items-center gap-1">
          <Shield className="w-5 h-5 text-green-400" />
          <span className="text-[10px] text-stone-500">دفع آمن</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Truck className="w-5 h-5 text-blue-400" />
          <span className="text-[10px] text-stone-500">شحن سريع</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <RotateCcw className="w-5 h-5 text-yellow-400" />
          <span className="text-[10px] text-stone-500">إرجاع مجاني</span>
        </div>
      </div>

      {/* Payment methods */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {['مدى', 'Apple Pay', 'VISA', 'Mastercard'].map((m) => (
          <span
            key={m}
            className="px-2.5 py-1 bg-stone-100 rounded-lg text-xs text-stone-600 border border-stone-200"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}
