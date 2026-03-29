'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Smartphone,
  Building2,
  Pencil,
  ShieldCheck,
} from 'lucide-react'
import { useCartStore } from '@/stores/cart-store'
import type { CartItem } from '@/stores/cart-store'

/* ─── Types ─────────────────────────────────────────────────────────────────── */

interface ShippingInfo {
  fullName: string
  phone: string
  city: string
  district: string
  street: string
  buildingNo: string
  notes: string
}

interface ShippingMethod {
  id: string
  label: string
  price: number
  eta: string
}

interface PaymentMethod {
  id: string
  label: string
  icon: React.ReactNode
}

/* ─── Constants ─────────────────────────────────────────────────────────────── */

const CITIES = ['الرياض', 'جدة', 'مكة', 'المدينة', 'الدمام', 'أبها', 'تبوك', 'القصيم']

const SHIPPING_METHODS: ShippingMethod[] = [
  { id: 'smsa', label: 'SMSA Express', price: 25, eta: '2-3 أيام عمل' },
  { id: 'aramex', label: 'Aramex', price: 30, eta: '1-2 أيام عمل' },
  { id: 'free', label: 'الشحن المجاني', price: 0, eta: '5-7 أيام' },
]

const STEPS = [
  'معلومات الشحن',
  'طريقة الشحن',
  'الدفع',
  'المراجعة',
  'التأكيد',
]

const MOCK_ITEMS: CartItem[] = [
  {
    id: 'mock-1',
    productId: 'prod-1',
    name: 'SMOK Nord 5 Kit',
    nameAr: 'جهاز سموك نورد 5',
    price: 149,
    quantity: 1,
    image: 'https://placehold.co/80x80/18181b/ef4444?text=SMOK',
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
    image: 'https://placehold.co/80x80/18181b/ef4444?text=AF',
    slug: 'al-fakher-mango-250g',
  },
]

/* ─── Main Component ─────────────────────────────────────────────────────────── */

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore()
  const displayItems = items.length > 0 ? items : MOCK_ITEMS
  const cartTotal = items.length > 0 ? total() : MOCK_ITEMS.reduce((s, i) => s + i.price * i.quantity, 0)

  const [step, setStep] = useState(0)
  const [orderNumber] = useState(() => Math.floor(1000 + Math.random() * 9000).toString())

  // Step 1
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    phone: '',
    city: 'الرياض',
    district: '',
    street: '',
    buildingNo: '',
    notes: '',
  })
  const [shippingErrors, setShippingErrors] = useState<Partial<ShippingInfo>>({})

  // Step 2
  const [shippingMethod, setShippingMethod] = useState<string>('smsa')

  // Step 3
  const [paymentMethod, setPaymentMethod] = useState<string>('mada')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({})

  const selectedShipping = SHIPPING_METHODS.find((m) => m.id === shippingMethod)!
  const freeShippingAvailable = cartTotal >= 150

  // Auto-select free shipping if eligible
  useEffect(() => {
    if (freeShippingAvailable && shippingMethod === 'smsa') {
      // Don't auto-switch, let user choose
    }
  }, [freeShippingAvailable, shippingMethod])

  const shippingPrice = shippingMethod === 'free' && !freeShippingAvailable ? 25 : selectedShipping.price
  const grandTotal = cartTotal + shippingPrice

  /* ── Validation ───────────────────────────────────────────────────────────── */

  function validateShipping(): boolean {
    const errors: Partial<ShippingInfo> = {}
    if (!shippingInfo.fullName.trim()) errors.fullName = 'الاسم مطلوب'
    if (!shippingInfo.phone.trim()) {
      errors.phone = 'رقم الجوال مطلوب'
    } else if (!/^05\d{8}$/.test(shippingInfo.phone)) {
      errors.phone = 'صيغة غير صحيحة (05XXXXXXXX)'
    }
    if (!shippingInfo.district.trim()) errors.district = 'الحي مطلوب'
    if (!shippingInfo.street.trim()) errors.street = 'الشارع مطلوب'
    setShippingErrors(errors)
    return Object.keys(errors).length === 0
  }

  function validatePayment(): boolean {
    if (paymentMethod !== 'mada') return true
    const errors: Record<string, string> = {}
    if (!cardNumber.trim() || cardNumber.replace(/\s/g, '').length < 16) {
      errors.cardNumber = 'رقم البطاقة غير مكتمل'
    }
    if (!expiry.trim() || !/^\d{2}\/\d{2}$/.test(expiry)) {
      errors.expiry = 'تاريخ انتهاء غير صحيح (MM/YY)'
    }
    if (!cvv.trim() || cvv.length < 3) {
      errors.cvv = 'CVV غير صحيح'
    }
    setPaymentErrors(errors)
    return Object.keys(errors).length === 0
  }

  function handleNext() {
    if (step === 0 && !validateShipping()) return
    if (step === 2 && !validatePayment()) return
    if (step === 3) {
      // Confirm order
      if (items.length > 0) clearCart()
    }
    setStep((s) => s + 1)
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1))
  }

  function goToStep(s: number) {
    if (s < step) setStep(s)
  }

  /* ── Render ───────────────────────────────────────────────────────────────── */

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/cart" className="flex items-center gap-1 text-stone-600 hover:text-stone-900 text-sm mb-4 transition w-fit">
            <ChevronRight className="w-4 h-4" />
            العودة للسلة
          </Link>
          <h1 className="text-2xl font-bold">إتمام الطلب</h1>
        </div>

        {/* Progress bar */}
        {step < 4 && <ProgressBar current={step} steps={STEPS} onGoTo={goToStep} />}

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {step === 0 && (
              <StepShipping
                info={shippingInfo}
                errors={shippingErrors}
                onChange={(field, val) => {
                  setShippingInfo((p) => ({ ...p, [field]: val }))
                  setShippingErrors((p) => ({ ...p, [field]: '' }))
                }}
                onNext={handleNext}
              />
            )}
            {step === 1 && (
              <StepShippingMethod
                selected={shippingMethod}
                freeAvailable={freeShippingAvailable}
                cartTotal={cartTotal}
                onChange={setShippingMethod}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 2 && (
              <StepPayment
                method={paymentMethod}
                cardNumber={cardNumber}
                expiry={expiry}
                cvv={cvv}
                errors={paymentErrors}
                onMethodChange={setPaymentMethod}
                onCardNumberChange={(v) => {
                  setCardNumber(v)
                  setPaymentErrors((p) => ({ ...p, cardNumber: '' }))
                }}
                onExpiryChange={(v) => {
                  setExpiry(v)
                  setPaymentErrors((p) => ({ ...p, expiry: '' }))
                }}
                onCvvChange={(v) => {
                  setCvv(v)
                  setPaymentErrors((p) => ({ ...p, cvv: '' }))
                }}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <StepReview
                shippingInfo={shippingInfo}
                shippingMethod={selectedShipping}
                paymentMethod={paymentMethod}
                items={displayItems}
                cartTotal={cartTotal}
                shippingPrice={shippingPrice}
                grandTotal={grandTotal}
                onEdit={goToStep}
                onConfirm={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 4 && (
              <StepConfirmation orderNumber={orderNumber} />
            )}
          </div>

          {/* Sidebar: order summary (hidden on confirmation) */}
          {step < 4 && (
            <div className="lg:col-span-1">
              <CheckoutSidebar
                items={displayItems}
                cartTotal={cartTotal}
                shippingPrice={shippingPrice}
                grandTotal={grandTotal}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Progress Bar ───────────────────────────────────────────────────────────── */

function ProgressBar({
  current,
  steps,
  onGoTo,
}: {
  current: number
  steps: string[]
  onGoTo: (i: number) => void
}) {
  return (
    <div className="flex items-center gap-0">
      {steps.map((label, i) => {
        const done = i < current
        const active = i === current
        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <button
              onClick={() => onGoTo(i)}
              className={`flex flex-col items-center gap-1 shrink-0 ${done ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                  done
                    ? 'bg-amber-600 border-amber-600 text-stone-900'
                    : active
                    ? 'bg-white border-amber-500 text-amber-700'
                    : 'bg-white border-stone-200 text-stone-400'
                }`}
              >
                {done ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span
                className={`text-[10px] hidden sm:block whitespace-nowrap ${
                  active ? 'text-amber-700' : done ? 'text-stone-600' : 'text-stone-400'
                }`}
              >
                {label}
              </span>
            </button>
            {i < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 mx-1 transition-all ${
                  i < current ? 'bg-amber-600' : 'bg-stone-100'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ─── Step 1: Shipping Info ──────────────────────────────────────────────────── */

function StepShipping({
  info,
  errors,
  onChange,
  onNext,
}: {
  info: ShippingInfo
  errors: Partial<ShippingInfo>
  onChange: (field: keyof ShippingInfo, val: string) => void
  onNext: () => void
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6">
      <h2 className="text-lg font-bold mb-6">معلومات الشحن</h2>
      <div className="space-y-4">
        <Field
          label="الاسم الكامل *"
          value={info.fullName}
          error={errors.fullName}
          placeholder="محمد عبدالله"
          onChange={(v) => onChange('fullName', v)}
        />
        <Field
          label="رقم الجوال *"
          value={info.phone}
          error={errors.phone}
          placeholder="05XXXXXXXX"
          type="tel"
          onChange={(v) => onChange('phone', v)}
        />
        <div className="space-y-1.5">
          <label className="text-sm text-stone-600">المدينة *</label>
          <select
            value={info.city}
            onChange={(e) => onChange('city', e.target.value)}
            className="w-full bg-stone-100 border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-amber-500 transition"
          >
            {CITIES.map((c) => (
              <option key={c} value={c} className="bg-stone-100">
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="الحي *"
            value={info.district}
            error={errors.district}
            placeholder="حي النرجس"
            onChange={(v) => onChange('district', v)}
          />
          <Field
            label="الشارع *"
            value={info.street}
            error={errors.street}
            placeholder="شارع التحلية"
            onChange={(v) => onChange('street', v)}
          />
        </div>
        <Field
          label="رقم المبنى"
          value={info.buildingNo}
          placeholder="123"
          onChange={(v) => onChange('buildingNo', v)}
        />
        <div className="space-y-1.5">
          <label className="text-sm text-stone-600">ملاحظات للسائق</label>
          <textarea
            value={info.notes}
            onChange={(e) => onChange('notes', e.target.value)}
            placeholder="مثال: اتصل قبل الوصول، الطابق الثاني..."
            rows={3}
            className="w-full bg-stone-100 border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-900 placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition resize-none"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-start">
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-xl font-semibold transition"
        >
          التالي
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

/* ─── Step 2: Shipping Method ────────────────────────────────────────────────── */

function StepShippingMethod({
  selected,
  freeAvailable,
  cartTotal,
  onChange,
  onNext,
  onBack,
}: {
  selected: string
  freeAvailable: boolean
  cartTotal: number
  onChange: (id: string) => void
  onNext: () => void
  onBack: () => void
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6">
      <h2 className="text-lg font-bold mb-6">طريقة الشحن</h2>
      <div className="space-y-3">
        {SHIPPING_METHODS.map((m) => {
          const disabled = m.id === 'free' && !freeAvailable
          return (
            <label
              key={m.id}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                disabled
                  ? 'opacity-40 cursor-not-allowed border-stone-200'
                  : selected === m.id
                  ? 'border-amber-500 bg-amber-950/20'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <input
                type="radio"
                name="shipping"
                value={m.id}
                checked={selected === m.id}
                disabled={disabled}
                onChange={() => onChange(m.id)}
                className="accent-amber-500 w-4 h-4"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm">{m.label}</p>
                <p className="text-xs text-stone-600">{m.eta}</p>
                {m.id === 'free' && !freeAvailable && (
                  <p className="text-xs text-yellow-500 mt-0.5">
                    متاح للطلبات فوق 150 ر.س (أنت عند {cartTotal} ر.س)
                  </p>
                )}
              </div>
              <span className={`font-bold text-sm ${m.price === 0 ? 'text-green-400' : 'text-stone-900'}`}>
                {m.price === 0 ? 'مجاني' : `${m.price} ر.س`}
              </span>
            </label>
          )
        })}
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 border border-stone-200 hover:border-zinc-500 rounded-xl text-sm transition"
        >
          <ChevronRight className="w-4 h-4" />
          السابق
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-xl font-semibold text-sm transition"
        >
          التالي
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

/* ─── Step 3: Payment ────────────────────────────────────────────────────────── */

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'mada', label: 'بطاقة مدى', icon: <CreditCard className="w-5 h-5" /> },
  { id: 'applepay', label: 'Apple Pay', icon: <Smartphone className="w-5 h-5" /> },
  { id: 'bank', label: 'تحويل بنكي', icon: <Building2 className="w-5 h-5" /> },
]

function StepPayment({
  method,
  cardNumber,
  expiry,
  cvv,
  errors,
  onMethodChange,
  onCardNumberChange,
  onExpiryChange,
  onCvvChange,
  onNext,
  onBack,
}: {
  method: string
  cardNumber: string
  expiry: string
  cvv: string
  errors: Record<string, string>
  onMethodChange: (id: string) => void
  onCardNumberChange: (v: string) => void
  onExpiryChange: (v: string) => void
  onCvvChange: (v: string) => void
  onNext: () => void
  onBack: () => void
}) {
  function formatCardNumber(val: string) {
    const digits = val.replace(/\D/g, '').slice(0, 16)
    return digits.replace(/(.{4})/g, '$1 ').trim()
  }

  function formatExpiry(val: string) {
    const digits = val.replace(/\D/g, '').slice(0, 4)
    if (digits.length >= 3) return digits.slice(0, 2) + '/' + digits.slice(2)
    return digits
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6">
      <h2 className="text-lg font-bold mb-6">طريقة الدفع</h2>

      {/* Payment method selector */}
      <div className="space-y-3 mb-6">
        {PAYMENT_METHODS.map((m) => (
          <label
            key={m.id}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
              method === m.id
                ? 'border-amber-500 bg-amber-950/20'
                : 'border-stone-200 hover:border-stone-300'
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={m.id}
              checked={method === m.id}
              onChange={() => onMethodChange(m.id)}
              className="accent-amber-500 w-4 h-4"
            />
            <span className="text-stone-600">{m.icon}</span>
            <span className="font-semibold text-sm">{m.label}</span>
          </label>
        ))}
      </div>

      {/* Card fields */}
      {method === 'mada' && (
        <div className="space-y-4 mb-6 p-4 bg-stone-100/50 rounded-xl border border-stone-200">
          <div className="space-y-1.5">
            <label className="text-sm text-stone-600">رقم البطاقة</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => onCardNumberChange(formatCardNumber(e.target.value))}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              className={`w-full bg-stone-100 border rounded-xl px-3 py-2.5 text-sm tracking-widest placeholder-zinc-600 focus:outline-none transition ${
                errors.cardNumber ? 'border-amber-500' : 'border-stone-200 focus:border-amber-500'
              }`}
            />
            {errors.cardNumber && <p className="text-xs text-amber-700">{errors.cardNumber}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm text-stone-600">تاريخ الانتهاء</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => onExpiryChange(formatExpiry(e.target.value))}
                placeholder="MM/YY"
                maxLength={5}
                className={`w-full bg-stone-100 border rounded-xl px-3 py-2.5 text-sm placeholder-zinc-600 focus:outline-none transition ${
                  errors.expiry ? 'border-amber-500' : 'border-stone-200 focus:border-amber-500'
                }`}
              />
              {errors.expiry && <p className="text-xs text-amber-700">{errors.expiry}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-stone-600">CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => onCvvChange(e.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="•••"
                maxLength={4}
                className={`w-full bg-stone-100 border rounded-xl px-3 py-2.5 text-sm placeholder-zinc-600 focus:outline-none transition ${
                  errors.cvv ? 'border-amber-500' : 'border-stone-200 focus:border-amber-500'
                }`}
              />
              {errors.cvv && <p className="text-xs text-amber-700">{errors.cvv}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Moyasar note */}
      <div className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
        الدفع الآمن مدعوم بـ Moyasar
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 border border-stone-200 hover:border-zinc-500 rounded-xl text-sm transition"
        >
          <ChevronRight className="w-4 h-4" />
          السابق
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-2.5 bg-amber-600 hover:bg-amber-700 rounded-xl font-semibold text-sm transition"
        >
          التالي
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

/* ─── Step 4: Review ─────────────────────────────────────────────────────────── */

function StepReview({
  shippingInfo,
  shippingMethod,
  paymentMethod,
  items,
  cartTotal,
  shippingPrice,
  grandTotal,
  onEdit,
  onConfirm,
  onBack,
}: {
  shippingInfo: ShippingInfo
  shippingMethod: ShippingMethod
  paymentMethod: string
  items: CartItem[]
  cartTotal: number
  shippingPrice: number
  grandTotal: number
  onEdit: (step: number) => void
  onConfirm: () => void
  onBack: () => void
}) {
  const paymentLabel =
    paymentMethod === 'mada' ? 'بطاقة مدى' : paymentMethod === 'applepay' ? 'Apple Pay' : 'تحويل بنكي'

  return (
    <div className="space-y-4">
      {/* Shipping info review */}
      <ReviewCard title="معلومات الشحن" onEdit={() => onEdit(0)}>
        <p className="text-sm text-stone-700">{shippingInfo.fullName}</p>
        <p className="text-sm text-stone-600">{shippingInfo.phone}</p>
        <p className="text-sm text-stone-600">
          {shippingInfo.city}، حي {shippingInfo.district}، {shippingInfo.street}
          {shippingInfo.buildingNo ? `، مبنى ${shippingInfo.buildingNo}` : ''}
        </p>
        {shippingInfo.notes && <p className="text-xs text-stone-500 mt-1">{shippingInfo.notes}</p>}
      </ReviewCard>

      {/* Shipping method review */}
      <ReviewCard title="طريقة الشحن" onEdit={() => onEdit(1)}>
        <p className="text-sm text-stone-700">
          {shippingMethod.label} — {shippingMethod.eta}
        </p>
        <p className="text-sm text-stone-600">
          {shippingPrice === 0 ? 'مجاني' : `${shippingPrice} ر.س`}
        </p>
      </ReviewCard>

      {/* Payment review */}
      <ReviewCard title="طريقة الدفع" onEdit={() => onEdit(2)}>
        <p className="text-sm text-stone-700">{paymentLabel}</p>
      </ReviewCard>

      {/* Cart items */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4">
        <h3 className="font-semibold mb-4 text-sm text-stone-600">المنتجات ({items.length})</h3>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                <Image
                  src={item.image}
                  alt={item.nameAr}
                  fill
                  className="object-cover"
                  sizes="40px"
                  unoptimized={item.image.startsWith('https://placehold.co')}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.nameAr}</p>
                <p className="text-xs text-stone-500">x{item.quantity}</p>
              </div>
              <p className="text-sm font-semibold shrink-0">{item.price * item.quantity} ر.س</p>
            </div>
          ))}
        </div>

        {/* Total breakdown */}
        <div className="mt-4 pt-4 border-t border-stone-200 space-y-2 text-sm">
          <div className="flex justify-between text-stone-600">
            <span>المجموع الفرعي</span>
            <span>{cartTotal} ر.س</span>
          </div>
          <div className="flex justify-between text-stone-600">
            <span>الشحن</span>
            <span>{shippingPrice === 0 ? 'مجاني' : `${shippingPrice} ر.س`}</span>
          </div>
          <div className="flex justify-between font-bold text-base pt-1">
            <span>المجموع الكلي</span>
            <span className="text-amber-700">{grandTotal} ر.س</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 border border-stone-200 hover:border-zinc-500 rounded-xl text-sm transition"
        >
          <ChevronRight className="w-4 h-4" />
          السابق
        </button>
        <button
          onClick={onConfirm}
          className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-xl font-bold transition"
        >
          تأكيد الطلب
        </button>
      </div>
    </div>
  )
}

/* ─── Step 5: Confirmation ───────────────────────────────────────────────────── */

function StepConfirmation({ orderNumber }: { orderNumber: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center gap-6 lg:col-span-3">
      {/* Animated checkmark */}
      <div className="relative w-24 h-24">
        <div className="w-24 h-24 rounded-full bg-green-900/40 border-2 border-green-500 flex items-center justify-center animate-[scale-in_0.4s_ease-out]">
          <Check className="w-12 h-12 text-green-400" strokeWidth={3} />
        </div>
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-30 animate-ping" />
      </div>

      <div>
        <h2 className="text-2xl font-black mb-2">تم استلام طلبك! 🎉</h2>
        <p className="text-stone-600 text-sm">سيتم التواصل معك خلال 24 ساعة</p>
      </div>

      <div className="bg-white border border-stone-200 rounded-2xl px-8 py-4 text-center">
        <p className="text-xs text-stone-500 mb-1">رقم الطلب</p>
        <p className="text-xl font-black tracking-widest text-amber-700">#VS-2025-{orderNumber}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <button className="px-7 py-3 border border-stone-200 hover:border-zinc-500 rounded-xl font-semibold text-sm transition">
          تتبع طلبك
        </button>
        <Link
          href="/"
          className="px-7 py-3 bg-amber-600 hover:bg-amber-700 rounded-xl font-semibold text-sm transition text-center"
        >
          متابعة التسوق
        </Link>
      </div>
    </div>
  )
}

/* ─── Checkout Sidebar ───────────────────────────────────────────────────────── */

function CheckoutSidebar({
  items,
  cartTotal,
  shippingPrice,
  grandTotal,
}: {
  items: CartItem[]
  cartTotal: number
  shippingPrice: number
  grandTotal: number
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-5 sticky top-24 space-y-4">
      <h3 className="font-bold border-b border-stone-200 pb-3 text-sm text-stone-600">ملخص الطلب</h3>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0">
              <Image
                src={item.image}
                alt={item.nameAr}
                fill
                className="object-cover"
                sizes="40px"
                unoptimized={item.image.startsWith('https://placehold.co')}
              />
              <span className="absolute -top-1 -left-1 bg-amber-600 text-stone-900 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">{item.nameAr}</p>
            </div>
            <p className="text-xs font-semibold shrink-0 text-stone-700">
              {item.price * item.quantity} ر.س
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-200 pt-3 space-y-2 text-sm">
        <div className="flex justify-between text-stone-600">
          <span>المجموع الفرعي</span>
          <span>{cartTotal} ر.س</span>
        </div>
        <div className="flex justify-between text-stone-600">
          <span>الشحن</span>
          <span className={shippingPrice === 0 ? 'text-green-400' : ''}>
            {shippingPrice === 0 ? 'مجاني' : `${shippingPrice} ر.س`}
          </span>
        </div>
        <div className="flex justify-between font-bold text-base border-t border-stone-200 pt-2">
          <span>المجموع الكلي</span>
          <span className="text-amber-700">{grandTotal} ر.س</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Shared: ReviewCard ─────────────────────────────────────────────────────── */

function ReviewCard({
  title,
  onEdit,
  children,
}: {
  title: string
  onEdit: () => void
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">{title}</h3>
        <button
          onClick={onEdit}
          className="flex items-center gap-1 text-xs text-stone-600 hover:text-amber-700 transition"
        >
          <Pencil className="w-3 h-3" />
          تعديل
        </button>
      </div>
      <div className="space-y-0.5">{children}</div>
    </div>
  )
}

/* ─── Shared: Field ──────────────────────────────────────────────────────────── */

function Field({
  label,
  value,
  error,
  placeholder,
  type = 'text',
  onChange,
}: {
  label: string
  value: string
  error?: string
  placeholder?: string
  type?: string
  onChange: (v: string) => void
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm text-stone-600">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-stone-100 border rounded-xl px-3 py-2.5 text-sm placeholder-zinc-600 focus:outline-none transition ${
          error ? 'border-amber-500' : 'border-stone-200 focus:border-amber-500'
        }`}
      />
      {error && <p className="text-xs text-amber-700">{error}</p>}
    </div>
  )
}
