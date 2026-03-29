'use client'

import { useState } from 'react'
import {
  Eye,
  Edit2,
  Printer,
  Search,
  Download,
  X,
  ChevronDown,
  Package,
  MapPin,
  Phone,
  User,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  AlertCircle,
} from 'lucide-react'

type OrderStatus = 'قيد التجهيز' | 'تم التأكيد' | 'قيد الشحن' | 'تم التسليم' | 'ملغي'

interface OrderProduct {
  name: string
  qty: number
  price: number
  image: string
}

interface Order {
  id: string
  customer: string
  phone: string
  products: OrderProduct[]
  total: number
  paymentMethod: string
  shippingCompany: string
  status: OrderStatus
  date: string
  address: string
  city: string
  timeline: { status: string; date: string }[]
}

const STATUS_STYLES: Record<OrderStatus, string> = {
  'قيد التجهيز': 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
  'تم التأكيد': 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  'قيد الشحن': 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
  'تم التسليم': 'bg-green-500/10 text-green-400 border border-green-500/20',
  'ملغي': 'bg-amber-500/10 text-amber-700 border border-amber-500/20',
}

const STATUS_ICON: Record<OrderStatus, React.ReactNode> = {
  'قيد التجهيز': <AlertCircle size={12} />,
  'تم التأكيد': <CheckCircle size={12} />,
  'قيد الشحن': <Truck size={12} />,
  'تم التسليم': <CheckCircle size={12} />,
  'ملغي': <XCircle size={12} />,
}

const MOCK_ORDERS: Order[] = [
  {
    id: '#10045',
    customer: 'أحمد محمد الغامدي',
    phone: '0512345678',
    products: [
      { name: 'سائل فيب مانجو', qty: 2, price: 75, image: '' },
      { name: 'كويل استبدال', qty: 1, price: 35, image: '' },
    ],
    total: 185,
    paymentMethod: 'بطاقة ائتمان',
    shippingCompany: 'أرامكس',
    status: 'تم التسليم',
    date: '2026-03-28',
    address: 'حي العليا، شارع التحلية',
    city: 'الرياض',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-25 10:00' },
      { status: 'تم التأكيد', date: '2026-03-25 11:30' },
      { status: 'قيد الشحن', date: '2026-03-26 09:00' },
      { status: 'تم التسليم', date: '2026-03-28 14:00' },
    ],
  },
  {
    id: '#10044',
    customer: 'سارة العتيبي',
    phone: '0556789012',
    products: [{ name: 'جهاز فيب برو', qty: 1, price: 320, image: '' }],
    total: 320,
    paymentMethod: 'مدى',
    shippingCompany: 'دي إتش إل',
    status: 'قيد الشحن',
    date: '2026-03-28',
    address: 'حي الورود، شارع الأمير فيصل',
    city: 'جدة',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-27 08:00' },
      { status: 'تم التأكيد', date: '2026-03-27 09:15' },
      { status: 'قيد الشحن', date: '2026-03-28 07:00' },
    ],
  },
  {
    id: '#10043',
    customer: 'خالد الزهراني',
    phone: '0534561234',
    products: [
      { name: 'سائل فيب توت', qty: 3, price: 65, image: '' },
      { name: 'بودز استبدال', qty: 2, price: 45, image: '' },
    ],
    total: 285,
    paymentMethod: 'Apple Pay',
    shippingCompany: 'ناقل',
    status: 'قيد التجهيز',
    date: '2026-03-28',
    address: 'حي الفيصلية، طريق الملك فهد',
    city: 'الدمام',
    timeline: [{ status: 'تم الاستلام', date: '2026-03-28 15:30' }],
  },
  {
    id: '#10042',
    customer: 'نورة الشمري',
    phone: '0509871234',
    products: [{ name: 'جهاز فيب ميني', qty: 1, price: 189, image: '' }],
    total: 189,
    paymentMethod: 'تحويل بنكي',
    shippingCompany: 'سبل',
    status: 'تم التأكيد',
    date: '2026-03-27',
    address: 'حي المروج، شارع الإمام',
    city: 'الرياض',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-27 12:00' },
      { status: 'تم التأكيد', date: '2026-03-27 13:45' },
    ],
  },
  {
    id: '#10041',
    customer: 'فيصل الحربي',
    phone: '0567890123',
    products: [
      { name: 'سائل فيب نعناع', qty: 4, price: 60, image: '' },
    ],
    total: 240,
    paymentMethod: 'بطاقة ائتمان',
    shippingCompany: 'أرامكس',
    status: 'ملغي',
    date: '2026-03-27',
    address: 'حي الصفا، شارع فلسطين',
    city: 'جدة',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-26 16:00' },
      { status: 'ملغي', date: '2026-03-27 10:00' },
    ],
  },
  {
    id: '#10040',
    customer: 'ريم القحطاني',
    phone: '0543217890',
    products: [{ name: 'جهاز فيب ماكس', qty: 1, price: 450, image: '' }],
    total: 450,
    paymentMethod: 'مدى',
    shippingCompany: 'دي إتش إل',
    status: 'تم التسليم',
    date: '2026-03-26',
    address: 'حي النزهة، شارع الملك عبدالعزيز',
    city: 'الرياض',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-23 09:00' },
      { status: 'تم التأكيد', date: '2026-03-23 10:00' },
      { status: 'قيد الشحن', date: '2026-03-24 08:00' },
      { status: 'تم التسليم', date: '2026-03-26 13:00' },
    ],
  },
  {
    id: '#10039',
    customer: 'عبدالله المالكي',
    phone: '0501234567',
    products: [
      { name: 'سائل فيب فراولة', qty: 2, price: 70, image: '' },
      { name: 'كويل استبدال', qty: 3, price: 35, image: '' },
    ],
    total: 245,
    paymentMethod: 'Apple Pay',
    shippingCompany: 'ناقل',
    status: 'قيد الشحن',
    date: '2026-03-26',
    address: 'حي العزيزية، شارع عثمان بن عفان',
    city: 'مكة المكرمة',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-25 11:00' },
      { status: 'تم التأكيد', date: '2026-03-25 12:30' },
      { status: 'قيد الشحن', date: '2026-03-26 07:30' },
    ],
  },
  {
    id: '#10038',
    customer: 'منى الدوسري',
    phone: '0558901234',
    products: [{ name: 'بودز للجهاز الصغير', qty: 5, price: 40, image: '' }],
    total: 200,
    paymentMethod: 'بطاقة ائتمان',
    shippingCompany: 'سبل',
    status: 'تم التأكيد',
    date: '2026-03-25',
    address: 'حي القادسية، شارع الثلاثين',
    city: 'الدمام',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-25 14:00' },
      { status: 'تم التأكيد', date: '2026-03-25 15:15' },
    ],
  },
  {
    id: '#10037',
    customer: 'تركي العسيري',
    phone: '0572345678',
    products: [
      { name: 'جهاز فيب برو X', qty: 1, price: 520, image: '' },
      { name: 'سائل فيب توباكو', qty: 2, price: 75, image: '' },
    ],
    total: 670,
    paymentMethod: 'مدى',
    shippingCompany: 'أرامكس',
    status: 'تم التسليم',
    date: '2026-03-24',
    address: 'حي الروضة، طريق المدينة',
    city: 'جدة',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-20 10:00' },
      { status: 'تم التأكيد', date: '2026-03-20 11:00' },
      { status: 'قيد الشحن', date: '2026-03-21 08:00' },
      { status: 'تم التسليم', date: '2026-03-24 15:00' },
    ],
  },
  {
    id: '#10036',
    customer: 'لمى الرشيدي',
    phone: '0539012345',
    products: [{ name: 'سائل فيب أيس', qty: 6, price: 55, image: '' }],
    total: 330,
    paymentMethod: 'Apple Pay',
    shippingCompany: 'دي إتش إل',
    status: 'قيد التجهيز',
    date: '2026-03-28',
    address: 'حي الملك فهد، شارع التخصصي',
    city: 'الرياض',
    timeline: [{ status: 'تم الاستلام', date: '2026-03-28 16:45' }],
  },
  {
    id: '#10035',
    customer: 'هاني القرني',
    phone: '0515678901',
    products: [
      { name: 'كويل تيتانيوم', qty: 4, price: 42, image: '' },
    ],
    total: 168,
    paymentMethod: 'تحويل بنكي',
    shippingCompany: 'ناقل',
    status: 'تم التسليم',
    date: '2026-03-23',
    address: 'حي السلامة، شارع الستين',
    city: 'جدة',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-19 09:00' },
      { status: 'تم التأكيد', date: '2026-03-19 10:30' },
      { status: 'قيد الشحن', date: '2026-03-20 08:00' },
      { status: 'تم التسليم', date: '2026-03-23 12:00' },
    ],
  },
  {
    id: '#10034',
    customer: 'أمل الجهني',
    phone: '0546789012',
    products: [{ name: 'جهاز فيب سليم', qty: 1, price: 275, image: '' }],
    total: 275,
    paymentMethod: 'بطاقة ائتمان',
    shippingCompany: 'سبل',
    status: 'قيد الشحن',
    date: '2026-03-27',
    address: 'حي الزيتون، شارع أبو بكر الصديق',
    city: 'المدينة المنورة',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-26 10:00' },
      { status: 'تم التأكيد', date: '2026-03-26 11:00' },
      { status: 'قيد الشحن', date: '2026-03-27 09:00' },
    ],
  },
  {
    id: '#10033',
    customer: 'وليد السبيعي',
    phone: '0523456789',
    products: [
      { name: 'سائل فيب كاسترد', qty: 3, price: 80, image: '' },
      { name: 'بودز استبدال', qty: 2, price: 45, image: '' },
    ],
    total: 330,
    paymentMethod: 'مدى',
    shippingCompany: 'أرامكس',
    status: 'تم التأكيد',
    date: '2026-03-26',
    address: 'حي الحمراء، شارع جرير',
    city: 'الرياض',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-26 13:00' },
      { status: 'تم التأكيد', date: '2026-03-26 14:30' },
    ],
  },
  {
    id: '#10032',
    customer: 'رنا المطيري',
    phone: '0578901234',
    products: [{ name: 'جهاز فيب كلاسيك', qty: 1, price: 195, image: '' }],
    total: 195,
    paymentMethod: 'Apple Pay',
    shippingCompany: 'دي إتش إل',
    status: 'ملغي',
    date: '2026-03-25',
    address: 'حي الشفا، شارع الدفاع',
    city: 'الطائف',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-24 11:00' },
      { status: 'ملغي', date: '2026-03-25 09:00' },
    ],
  },
  {
    id: '#10031',
    customer: 'سلطان الغامدي',
    phone: '0561234567',
    products: [
      { name: 'سائل فيب ليمون', qty: 5, price: 58, image: '' },
      { name: 'كويل استبدال', qty: 2, price: 35, image: '' },
    ],
    total: 360,
    paymentMethod: 'بطاقة ائتمان',
    shippingCompany: 'ناقل',
    status: 'تم التسليم',
    date: '2026-03-22',
    address: 'حي الريان، شارع الملك سلمان',
    city: 'الرياض',
    timeline: [
      { status: 'تم الاستلام', date: '2026-03-18 10:00' },
      { status: 'تم التأكيد', date: '2026-03-18 11:00' },
      { status: 'قيد الشحن', date: '2026-03-19 08:00' },
      { status: 'تم التسليم', date: '2026-03-22 13:00' },
    ],
  },
]

const ALL_STATUSES: OrderStatus[] = [
  'قيد التجهيز',
  'تم التأكيد',
  'قيد الشحن',
  'تم التسليم',
  'ملغي',
]

export default function OrdersPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('الكل')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [updateStatus, setUpdateStatus] = useState<OrderStatus>('قيد التجهيز')
  const [adminNote, setAdminNote] = useState('')

  const filtered = MOCK_ORDERS.filter((o) => {
    const matchSearch =
      !search ||
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'الكل' || o.status === statusFilter
    const matchFrom = !dateFrom || o.date >= dateFrom
    const matchTo = !dateTo || o.date <= dateTo
    return matchSearch && matchStatus && matchFrom && matchTo
  })

  function openOrder(order: Order) {
    setSelectedOrder(order)
    setUpdateStatus(order.status)
    setAdminNote('')
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-stone-900">إدارة الطلبات</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'إجمالي الطلبات', value: '1,247', color: 'text-stone-900' },
          { label: 'قيد التجهيز', value: '38', color: 'text-yellow-400' },
          { label: 'في الطريق', value: '92', color: 'text-purple-400' },
          { label: 'مكتمل', value: '1,117', color: 'text-green-400' },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white border border-stone-200 rounded-xl p-4"
          >
            <p className="text-stone-600 text-sm">{s.label}</p>
            <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div className="bg-white border border-stone-200 rounded-xl p-4">
        <div className="flex flex-wrap gap-3 items-end">
          <div className="relative flex-1 min-w-[200px]">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-600" />
            <input
              type="text"
              placeholder="بحث برقم الطلب أو اسم العميل..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-stone-100 border border-stone-200 text-stone-900 placeholder-zinc-500 rounded-lg pr-9 pl-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:border-amber-500"
            >
              <option>الكل</option>
              {ALL_STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none" />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
            <span className="text-stone-600 text-sm">إلى</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-stone-900 px-4 py-2 rounded-lg text-sm transition-colors">
            <Download size={16} />
            تصدير Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                {['رقم الطلب', 'العميل', 'المنتجات', 'المبلغ', 'طريقة الدفع', 'شركة الشحن', 'الحالة', 'التاريخ', 'إجراءات'].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-right text-stone-600 font-medium whitespace-nowrap"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-stone-200/50 hover:bg-stone-100/30 transition-colors"
                >
                  <td className="px-4 py-3 text-amber-700 font-medium">{order.id}</td>
                  <td className="px-4 py-3 text-stone-900 whitespace-nowrap">{order.customer}</td>
                  <td className="px-4 py-3 text-stone-700">
                    {order.products.length > 1
                      ? `${order.products[0].name} +${order.products.length - 1}`
                      : order.products[0].name}
                  </td>
                  <td className="px-4 py-3 text-stone-900 font-medium whitespace-nowrap">
                    {order.total} ر.س
                  </td>
                  <td className="px-4 py-3 text-stone-700 whitespace-nowrap">
                    {order.paymentMethod}
                  </td>
                  <td className="px-4 py-3 text-stone-700 whitespace-nowrap">
                    {order.shippingCompany}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[order.status]}`}
                    >
                      {STATUS_ICON[order.status]}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-600 whitespace-nowrap">{order.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => openOrder(order)}
                        className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors"
                        title="عرض"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => openOrder(order)}
                        className="p-1.5 text-stone-600 hover:text-blue-400 hover:bg-stone-200 rounded-lg transition-colors"
                        title="تحديث الحالة"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        className="p-1.5 text-stone-600 hover:text-green-400 hover:bg-stone-200 rounded-lg transition-colors"
                        title="طباعة"
                      >
                        <Printer size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-stone-500">لا توجد طلبات</div>
        )}
      </div>

      {/* Order Detail Slide-over */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelectedOrder(null)}
          />
          <div className="absolute top-0 left-0 h-full w-full max-w-xl bg-white border-r border-stone-200 overflow-y-auto z-10 shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-stone-200 px-5 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-lg font-bold text-stone-900">تفاصيل الطلب {selectedOrder.id}</h2>
                <p className="text-stone-600 text-sm">{selectedOrder.date}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-stone-600 hover:text-stone-900 p-1 rounded-lg hover:bg-stone-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 space-y-5">
              {/* Status badge */}
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${STATUS_STYLES[selectedOrder.status]}`}>
                  {STATUS_ICON[selectedOrder.status]}
                  {selectedOrder.status}
                </span>
                <span className="text-stone-600 text-sm">| {selectedOrder.shippingCompany}</span>
              </div>

              {/* Customer info */}
              <div className="bg-stone-100 rounded-xl p-4 space-y-2">
                <h3 className="text-stone-900 font-medium flex items-center gap-2">
                  <User size={16} className="text-amber-700" />
                  معلومات العميل
                </h3>
                <p className="text-stone-700">{selectedOrder.customer}</p>
                <p className="text-stone-600 flex items-center gap-1">
                  <Phone size={14} />
                  {selectedOrder.phone}
                </p>
                <p className="text-stone-600 flex items-center gap-1">
                  <MapPin size={14} />
                  {selectedOrder.address}، {selectedOrder.city}
                </p>
              </div>

              {/* Products */}
              <div className="bg-stone-100 rounded-xl p-4 space-y-3">
                <h3 className="text-stone-900 font-medium flex items-center gap-2">
                  <Package size={16} className="text-amber-700" />
                  المنتجات
                </h3>
                {selectedOrder.products.map((p, i) => (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 bg-stone-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Package size={18} className="text-stone-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-stone-900 text-sm">{p.name}</p>
                      <p className="text-stone-600 text-xs">الكمية: {p.qty}</p>
                    </div>
                    <p className="text-stone-900 font-medium text-sm">{p.price * p.qty} ر.س</p>
                  </div>
                ))}
                <div className="border-t border-stone-200 pt-2 flex justify-between">
                  <span className="text-stone-600 font-medium">الإجمالي</span>
                  <span className="text-stone-900 font-bold">{selectedOrder.total} ر.س</span>
                </div>
              </div>

              {/* Status Update */}
              <div className="bg-stone-100 rounded-xl p-4 space-y-3">
                <h3 className="text-stone-900 font-medium">تحديث الحالة</h3>
                <div className="relative">
                  <select
                    value={updateStatus}
                    onChange={(e) => setUpdateStatus(e.target.value as OrderStatus)}
                    className="w-full appearance-none bg-stone-200 border border-stone-300 text-stone-900 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:border-amber-500"
                  >
                    {ALL_STATUSES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none" />
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-stone-900 rounded-lg py-2 text-sm font-medium transition-colors">
                  حفظ
                </button>
              </div>

              {/* Timeline */}
              <div className="bg-stone-100 rounded-xl p-4 space-y-3">
                <h3 className="text-stone-900 font-medium flex items-center gap-2">
                  <Clock size={16} className="text-amber-700" />
                  مسار الطلب
                </h3>
                <div className="space-y-3">
                  {selectedOrder.timeline.map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-stone-900 text-sm">{t.status}</p>
                        <p className="text-stone-500 text-xs">{t.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admin Notes */}
              <div className="bg-stone-100 rounded-xl p-4 space-y-2">
                <h3 className="text-stone-900 font-medium">ملاحظات الإدارة</h3>
                <textarea
                  rows={3}
                  placeholder="أضف ملاحظة..."
                  value={adminNote}
                  onChange={(e) => setAdminNote(e.target.value)}
                  className="w-full bg-stone-200 border border-stone-300 text-stone-900 placeholder-zinc-500 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
