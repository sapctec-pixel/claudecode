'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Check, Truck, Circle, Package, MapPin, Phone, CreditCard, AlertCircle } from 'lucide-react'

type OrderStatus = 'preparing' | 'shipping' | 'delivered' | 'cancelled'

interface OrderDetail {
  id: string
  number: string
  date: string
  status: OrderStatus
  items: { img: string; name: string; nameAr: string; qty: number; price: number }[]
  shipping: { name: string; address: string; phone: string }
  payment: { method: string; subtotal: number; shippingCost: number }
}

const MOCK_ORDER: OrderDetail = {
  id: '2',
  number: 'VS-2025-3790',
  date: '١٥ مارس ٢٠٢٥',
  status: 'shipping',
  items: [
    { img: '/images/products/034028758dec6cdbb49d5fae8c34e2f7_500x500.jpg', name: 'Al Fakher Crown Bar', nameAr: 'الفاخر كراون بار', qty: 2, price: 45 },
    { img: '/images/products/03db20b7394aa9a6d8415d1472906e4e_500x500.jpg', name: 'Nasty Juice Salt 30ml', nameAr: 'ناستي جوس سولت', qty: 1, price: 28 },
    { img: '/images/products/03fa7774f732e2bcfe10cf5f3708e432_500x500.jpg', name: 'GeekVape Aegis Legend 3', nameAr: 'جيك فيب ايجيس', qty: 1, price: 210 },
  ],
  shipping: {
    name: 'محمد عبدالله',
    address: 'حي النزهة، شارع الأمير سلطان، الرياض',
    phone: '+966 05XX XXXX',
  },
  payment: {
    method: 'مدى',
    subtotal: 328,
    shippingCost: 25,
  },
}

const STATUS_CONFIG: Record<OrderStatus, { label: string; bg: string; text: string }> = {
  preparing: { label: 'قيد التجهيز', bg: 'bg-yellow-500/15', text: 'text-yellow-400' },
  shipping: { label: 'في الطريق', bg: 'bg-blue-500/15', text: 'text-blue-400' },
  delivered: { label: 'تم التسليم', bg: 'bg-green-500/15', text: 'text-green-400' },
  cancelled: { label: 'ملغي', bg: 'bg-amber-500/15', text: 'text-amber-700' },
}

type TimelineStep = {
  key: string
  label: string
  completedFor: OrderStatus[]
  activeFor: OrderStatus[]
}

const TIMELINE_STEPS: TimelineStep[] = [
  { key: 'placed', label: 'تم الطلب', completedFor: ['preparing', 'shipping', 'delivered'], activeFor: [] },
  { key: 'preparing', label: 'قيد التجهيز', completedFor: ['shipping', 'delivered'], activeFor: ['preparing'] },
  { key: 'shipping', label: 'في الطريق', completedFor: ['delivered'], activeFor: ['shipping'] },
  { key: 'delivered', label: 'تم التسليم', completedFor: [], activeFor: ['delivered'] },
]

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const [tracking, setTracking] = useState(false)
  const order = MOCK_ORDER
  const status = STATUS_CONFIG[order.status]
  const total = order.payment.subtotal + order.payment.shippingCost

  return (
    <div>
      {/* Back */}
      <Link
        href="/account/orders"
        className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 text-sm mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4 rotate-180" />
        العودة للطلبات
      </Link>

      {/* Order header */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-5">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-stone-500 text-xs mb-1">رقم الطلب</p>
            <p className="text-stone-900 font-black text-lg" dir="ltr">#{order.number}</p>
            <p className="text-stone-500 text-xs mt-1">تاريخ الطلب: {order.date}</p>
          </div>
          <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${status.bg} ${status.text}`}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Timeline */}
      {order.status !== 'cancelled' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-5">
          <h2 className="text-stone-900 font-bold text-sm mb-6">تتبع الطلب</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-4 top-4 bottom-4 w-0.5 bg-stone-200" />

            <div className="space-y-6">
              {TIMELINE_STEPS.map((step) => {
                const isCompleted = step.completedFor.includes(order.status)
                const isActive = step.activeFor.includes(order.status)
                const isPending = !isCompleted && !isActive

                return (
                  <div key={step.key} className="flex items-center gap-4 relative">
                    {/* Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 shrink-0 ${
                      isCompleted ? 'bg-green-600' :
                      isActive ? 'bg-blue-600 ring-4 ring-blue-600/25' :
                      'bg-stone-100 border border-stone-200'
                    }`}>
                      {isCompleted ? (
                        <Check className="w-4 h-4 text-stone-900" />
                      ) : isActive ? (
                        <Truck className="w-4 h-4 text-stone-900" />
                      ) : (
                        <Circle className="w-3 h-3 text-stone-400" />
                      )}
                    </div>
                    <span className={`text-sm font-semibold ${
                      isCompleted ? 'text-green-400' :
                      isActive ? 'text-blue-400' :
                      'text-stone-400'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Products */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 mb-5">
        <h2 className="text-stone-900 font-bold text-sm mb-4">المنتجات</h2>
        <div className="space-y-4">
          {order.items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-stone-100 overflow-hidden shrink-0">
                <Image
                  src={item.img}
                  alt={item.nameAr}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-stone-900 text-sm font-semibold">{item.nameAr}</p>
                <p className="text-stone-500 text-xs">{item.name}</p>
                <p className="text-stone-500 text-xs mt-0.5">الكمية: {item.qty}</p>
              </div>
              <p className="text-stone-900 font-bold text-sm shrink-0">{item.price * item.qty} <span className="text-stone-500 font-normal text-xs">ر.س</span></p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {/* Shipping info */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6">
          <h2 className="text-stone-900 font-bold text-sm mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            معلومات الشحن
          </h2>
          <div className="space-y-3">
            <div>
              <p className="text-stone-500 text-xs mb-0.5">الاسم</p>
              <p className="text-stone-900 text-sm font-semibold">{order.shipping.name}</p>
            </div>
            <div>
              <p className="text-stone-500 text-xs mb-0.5">العنوان</p>
              <p className="text-stone-900 text-sm">{order.shipping.address}</p>
            </div>
            <div>
              <p className="text-stone-500 text-xs mb-0.5">رقم الهاتف</p>
              <p className="text-stone-900 text-sm font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <span dir="ltr">{order.shipping.phone}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6">
          <h2 className="text-stone-900 font-bold text-sm mb-4 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-amber-500" />
            الدفع والمبالغ
          </h2>
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-600">طريقة الدفع</span>
              <span className="text-stone-900 font-semibold">{order.payment.method}</span>
            </div>
            <div className="h-px bg-stone-100 my-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-600">المجموع الفرعي</span>
              <span className="text-stone-900">{order.payment.subtotal} ر.س</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-600">الشحن</span>
              <span className="text-stone-900">{order.payment.shippingCost} ر.س</span>
            </div>
            <div className="h-px bg-stone-100 my-2" />
            <div className="flex items-center justify-between">
              <span className="text-stone-900 font-bold">الكلي</span>
              <span className="text-stone-900 font-black text-lg">{total} <span className="text-stone-600 font-normal text-xs">ر.س</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        {order.status === 'shipping' && (
          <button
            onClick={() => setTracking(true)}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold px-6 py-3 rounded-xl transition"
          >
            <Package className="w-4 h-4" />
            تتبع الشحنة
          </button>
        )}
        <button className="flex items-center gap-2 border border-stone-200 hover:border-zinc-500 text-stone-600 hover:text-stone-900 font-semibold px-6 py-3 rounded-xl transition text-sm">
          <AlertCircle className="w-4 h-4" />
          الإبلاغ عن مشكلة
        </button>
      </div>

      {/* Mock tracking modal */}
      {tracking && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4" onClick={() => setTracking(false)}>
          <div className="bg-white border border-stone-200 rounded-2xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-stone-900 font-bold mb-3">تتبع الشحنة</h3>
            <p className="text-stone-600 text-sm mb-1">رقم التتبع: <span className="text-stone-900 font-mono" dir="ltr">SA-123456789</span></p>
            <p className="text-stone-500 text-xs mb-4">الشحنة في طريقها إليك · متوقع الوصول: ١٧ مارس</p>
            <button onClick={() => setTracking(false)} className="w-full bg-stone-100 hover:bg-stone-200 text-stone-900 py-2.5 rounded-xl text-sm font-semibold transition">إغلاق</button>
          </div>
        </div>
      )}
    </div>
  )
}
