'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'

type OrderStatus = 'preparing' | 'shipping' | 'delivered' | 'cancelled'

interface Order {
  id: string
  number: string
  date: string
  status: OrderStatus
  total: number
  items: { img: string; name: string }[]
}

const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    number: 'VS-2025-3841',
    date: '٢٠ مارس ٢٠٢٥',
    status: 'delivered',
    total: 234,
    items: [
      { img: '/images/products/012077c02fb08e4e10b39e4efccd8d33_500x500.jpg', name: 'Vaporesso XROS 4' },
      { img: '/images/products/02d5c9c362eb88e1274a997e8b83c4f5_500x500.jpg', name: 'Lost Mary BM600' },
    ],
  },
  {
    id: '2',
    number: 'VS-2025-3790',
    date: '١٥ مارس ٢٠٢٥',
    status: 'shipping',
    total: 165,
    items: [
      { img: '/images/products/034028758dec6cdbb49d5fae8c34e2f7_500x500.jpg', name: 'Al Fakher Crown Bar' },
      { img: '/images/products/03db20b7394aa9a6d8415d1472906e4e_500x500.jpg', name: 'Nasty Juice Salt' },
      { img: '/images/products/03fa7774f732e2bcfe10cf5f3708e432_500x500.jpg', name: 'GeekVape Aegis' },
    ],
  },
  {
    id: '3',
    number: 'VS-2025-3654',
    date: '١٠ مارس ٢٠٢٥',
    status: 'preparing',
    total: 89,
    items: [
      { img: '/images/products/05c568106e580221dffb7fbfd9ddf2d6_500x500.jpg', name: 'Smok RPM 5 Pro' },
    ],
  },
  {
    id: '4',
    number: 'VS-2025-3201',
    date: '٢ مارس ٢٠٢٥',
    status: 'cancelled',
    total: 45,
    items: [
      { img: '/images/products/0ec227ae8962fecec03727d9653b3bf7_500x500.jpg', name: 'Mazaya Double Apple' },
      { img: '/images/products/1112f66d5a844aad2f68677fba628df4_500x500.jpg', name: 'Vuse Go 800' },
    ],
  },
  {
    id: '5',
    number: 'VS-2025-2988',
    date: '٢٢ فبراير ٢٠٢٥',
    status: 'delivered',
    total: 310,
    items: [
      { img: '/images/products/012077c02fb08e4e10b39e4efccd8d33_500x500.jpg', name: 'Vaporesso XROS 4' },
      { img: '/images/products/03fa7774f732e2bcfe10cf5f3708e432_500x500.jpg', name: 'GeekVape Aegis' },
      { img: '/images/products/02d5c9c362eb88e1274a997e8b83c4f5_500x500.jpg', name: 'Lost Mary BM600' },
    ],
  },
]

type FilterTab = 'all' | OrderStatus

const FILTER_TABS: { value: FilterTab; label: string }[] = [
  { value: 'all', label: 'الكل' },
  { value: 'preparing', label: 'قيد التجهيز' },
  { value: 'shipping', label: 'في الطريق' },
  { value: 'delivered', label: 'تم التسليم' },
  { value: 'cancelled', label: 'ملغي' },
]

const STATUS_CONFIG: Record<OrderStatus, { label: string; bg: string; text: string }> = {
  preparing: { label: 'قيد التجهيز', bg: 'bg-yellow-500/15', text: 'text-yellow-400' },
  shipping: { label: 'في الطريق', bg: 'bg-blue-500/15', text: 'text-blue-400' },
  delivered: { label: 'تم التسليم', bg: 'bg-green-500/15', text: 'text-green-400' },
  cancelled: { label: 'ملغي', bg: 'bg-amber-500/15', text: 'text-amber-700' },
}

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all')

  const filtered = activeFilter === 'all'
    ? MOCK_ORDERS
    : MOCK_ORDERS.filter((o) => o.status === activeFilter)

  return (
    <div>
      <h1 className="text-2xl font-black text-stone-900 mb-6">طلباتي</h1>

      {/* Filter tabs */}
      <div className="flex gap-1 overflow-x-auto mb-6 pb-1">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
              activeFilter === tab.value
                ? 'bg-amber-600 text-stone-900'
                : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-300'
            }`}
          >
            {tab.label}
            {tab.value !== 'all' && (
              <span className={`mr-1.5 text-xs ${activeFilter === tab.value ? 'opacity-70' : 'opacity-50'}`}>
                ({MOCK_ORDERS.filter((o) => o.status === tab.value).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Orders list */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-stone-500">
          <p className="text-4xl mb-3">📦</p>
          <p className="text-sm">لا توجد طلبات في هذه الفئة</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((order) => {
            const status = STATUS_CONFIG[order.status]
            return (
              <div
                key={order.id}
                className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-stone-200 transition"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  {/* Left side */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="text-stone-900 font-bold text-sm" dir="ltr">#{order.number}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${status.bg} ${status.text}`}>
                        {status.label}
                      </span>
                    </div>
                    <p className="text-stone-500 text-xs mb-3">{order.date}</p>

                    {/* Product thumbnails */}
                    <div className="flex items-center gap-2">
                      {order.items.slice(0, 3).map((item, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full overflow-hidden border-2 border-stone-200 bg-stone-100 shrink-0"
                        >
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="w-10 h-10 rounded-full bg-stone-100 border-2 border-stone-200 flex items-center justify-center text-xs text-stone-600 font-semibold shrink-0">
                          +{order.items.length - 3}
                        </div>
                      )}
                      <span className="text-stone-500 text-xs mr-1">
                        {order.items.length} {order.items.length === 1 ? 'منتج' : 'منتجات'}
                      </span>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-left">
                      <p className="text-stone-500 text-xs">المبلغ الكلي</p>
                      <p className="text-stone-900 font-black text-lg">{order.total} <span className="text-sm font-normal text-stone-600">ر.س</span></p>
                    </div>
                    <Link
                      href={`/account/orders/${order.id}`}
                      className="flex items-center gap-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-200 hover:border-zinc-500 text-stone-900 text-xs font-semibold px-4 py-2 rounded-xl transition"
                    >
                      تفاصيل الطلب
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
