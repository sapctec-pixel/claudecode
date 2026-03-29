'use client'

import { useState } from 'react'
import {
  Search,
  ChevronDown,
  X,
  Phone,
  Mail,
  Calendar,
  ShoppingBag,
  DollarSign,
  AlertTriangle,
  User,
  TrendingUp,
} from 'lucide-react'

interface CustomerOrder {
  id: string
  total: number
  status: string
  date: string
}

interface Customer {
  id: string
  name: string
  phone: string
  email: string
  totalOrders: number
  totalSpent: number
  registeredAt: string
  lastOrder: string
  status: 'نشط' | 'محظور'
  birthDate: string
  city: string
  recentOrders: CustomerOrder[]
}

const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 'C001',
    name: 'أحمد محمد الغامدي',
    phone: '0512345678',
    email: 'ahmed@example.com',
    totalOrders: 14,
    totalSpent: 1840,
    registeredAt: '2024-03-15',
    lastOrder: '2026-03-28',
    status: 'نشط',
    birthDate: '1990-06-12',
    city: 'الرياض',
    recentOrders: [
      { id: '#10045', total: 185, status: 'تم التسليم', date: '2026-03-28' },
      { id: '#10021', total: 320, status: 'تم التسليم', date: '2026-02-15' },
      { id: '#9987', total: 145, status: 'تم التسليم', date: '2026-01-30' },
    ],
  },
  {
    id: 'C002',
    name: 'سارة العتيبي',
    phone: '0556789012',
    email: 'sara@example.com',
    totalOrders: 7,
    totalSpent: 2100,
    registeredAt: '2024-08-22',
    lastOrder: '2026-03-28',
    status: 'نشط',
    birthDate: '1995-11-20',
    city: 'جدة',
    recentOrders: [
      { id: '#10044', total: 320, status: 'قيد الشحن', date: '2026-03-28' },
      { id: '#10009', total: 450, status: 'تم التسليم', date: '2026-02-10' },
      { id: '#9856', total: 275, status: 'تم التسليم', date: '2026-01-05' },
    ],
  },
  {
    id: 'C003',
    name: 'خالد الزهراني',
    phone: '0534561234',
    email: 'khaled@example.com',
    totalOrders: 22,
    totalSpent: 4350,
    registeredAt: '2023-11-05',
    lastOrder: '2026-03-28',
    status: 'نشط',
    birthDate: '1988-03-08',
    city: 'الدمام',
    recentOrders: [
      { id: '#10043', total: 285, status: 'قيد التجهيز', date: '2026-03-28' },
      { id: '#10015', total: 390, status: 'تم التسليم', date: '2026-03-01' },
      { id: '#9901', total: 170, status: 'تم التسليم', date: '2026-01-22' },
    ],
  },
  {
    id: 'C004',
    name: 'نورة الشمري',
    phone: '0509871234',
    email: 'noura@example.com',
    totalOrders: 5,
    totalSpent: 780,
    registeredAt: '2025-01-18',
    lastOrder: '2026-03-27',
    status: 'نشط',
    birthDate: '1997-09-14',
    city: 'الرياض',
    recentOrders: [
      { id: '#10042', total: 189, status: 'تم التأكيد', date: '2026-03-27' },
      { id: '#10011', total: 220, status: 'تم التسليم', date: '2026-02-20' },
      { id: '#9870', total: 95, status: 'تم التسليم', date: '2025-12-10' },
    ],
  },
  {
    id: 'C005',
    name: 'فيصل الحربي',
    phone: '0567890123',
    email: 'faisal@example.com',
    totalOrders: 3,
    totalSpent: 590,
    registeredAt: '2025-07-30',
    lastOrder: '2026-03-27',
    status: 'محظور',
    birthDate: '1992-01-25',
    city: 'جدة',
    recentOrders: [
      { id: '#10041', total: 240, status: 'ملغي', date: '2026-03-27' },
      { id: '#9988', total: 200, status: 'تم التسليم', date: '2026-01-15' },
      { id: '#9750', total: 150, status: 'تم التسليم', date: '2025-10-05' },
    ],
  },
  {
    id: 'C006',
    name: 'ريم القحطاني',
    phone: '0543217890',
    email: 'reem@example.com',
    totalOrders: 18,
    totalSpent: 6200,
    registeredAt: '2023-06-12',
    lastOrder: '2026-03-26',
    status: 'نشط',
    birthDate: '1991-07-30',
    city: 'الرياض',
    recentOrders: [
      { id: '#10040', total: 450, status: 'تم التسليم', date: '2026-03-26' },
      { id: '#10018', total: 520, status: 'تم التسليم', date: '2026-03-05' },
      { id: '#9920', total: 380, status: 'تم التسليم', date: '2026-02-01' },
    ],
  },
  {
    id: 'C007',
    name: 'عبدالله المالكي',
    phone: '0501234567',
    email: 'abdullah@example.com',
    totalOrders: 9,
    totalSpent: 1450,
    registeredAt: '2024-05-20',
    lastOrder: '2026-03-26',
    status: 'نشط',
    birthDate: '1986-12-05',
    city: 'مكة المكرمة',
    recentOrders: [
      { id: '#10039', total: 245, status: 'قيد الشحن', date: '2026-03-26' },
      { id: '#10003', total: 310, status: 'تم التسليم', date: '2026-02-08' },
      { id: '#9845', total: 195, status: 'تم التسليم', date: '2025-12-20' },
    ],
  },
  {
    id: 'C008',
    name: 'منى الدوسري',
    phone: '0558901234',
    email: 'mona@example.com',
    totalOrders: 11,
    totalSpent: 1980,
    registeredAt: '2024-02-08',
    lastOrder: '2026-03-25',
    status: 'نشط',
    birthDate: '1993-04-17',
    city: 'الدمام',
    recentOrders: [
      { id: '#10038', total: 200, status: 'تم التأكيد', date: '2026-03-25' },
      { id: '#9995', total: 350, status: 'تم التسليم', date: '2026-02-12' },
      { id: '#9812', total: 165, status: 'تم التسليم', date: '2025-11-30' },
    ],
  },
  {
    id: 'C009',
    name: 'تركي العسيري',
    phone: '0572345678',
    email: 'turki@example.com',
    totalOrders: 6,
    totalSpent: 2890,
    registeredAt: '2024-10-14',
    lastOrder: '2026-03-24',
    status: 'نشط',
    birthDate: '1989-08-22',
    city: 'جدة',
    recentOrders: [
      { id: '#10037', total: 670, status: 'تم التسليم', date: '2026-03-24' },
      { id: '#9975', total: 520, status: 'تم التسليم', date: '2026-01-20' },
      { id: '#9780', total: 410, status: 'تم التسليم', date: '2025-10-15' },
    ],
  },
  {
    id: 'C010',
    name: 'لمى الرشيدي',
    phone: '0539012345',
    email: 'lama@example.com',
    totalOrders: 2,
    totalSpent: 460,
    registeredAt: '2026-02-28',
    lastOrder: '2026-03-28',
    status: 'نشط',
    birthDate: '1998-02-10',
    city: 'الرياض',
    recentOrders: [
      { id: '#10036', total: 330, status: 'قيد التجهيز', date: '2026-03-28' },
      { id: '#10022', total: 130, status: 'تم التسليم', date: '2026-03-10' },
      { id: '#10022', total: 130, status: 'تم التسليم', date: '2026-03-10' },
    ],
  },
  {
    id: 'C011',
    name: 'هاني القرني',
    phone: '0515678901',
    email: 'hani@example.com',
    totalOrders: 16,
    totalSpent: 3120,
    registeredAt: '2023-09-01',
    lastOrder: '2026-03-23',
    status: 'نشط',
    birthDate: '1984-05-28',
    city: 'جدة',
    recentOrders: [
      { id: '#10035', total: 168, status: 'تم التسليم', date: '2026-03-23' },
      { id: '#9999', total: 290, status: 'تم التسليم', date: '2026-02-28' },
      { id: '#9834', total: 220, status: 'تم التسليم', date: '2025-12-01' },
    ],
  },
  {
    id: 'C012',
    name: 'وليد السبيعي',
    phone: '0523456789',
    email: 'waleed@example.com',
    totalOrders: 8,
    totalSpent: 1670,
    registeredAt: '2025-03-22',
    lastOrder: '2026-03-26',
    status: 'نشط',
    birthDate: '1994-10-03',
    city: 'الرياض',
    recentOrders: [
      { id: '#10033', total: 330, status: 'تم التأكيد', date: '2026-03-26' },
      { id: '#10006', total: 270, status: 'تم التسليم', date: '2026-02-05' },
      { id: '#9800', total: 180, status: 'تم التسليم', date: '2025-11-15' },
    ],
  },
]

const ORDER_STATUS_STYLES: Record<string, string> = {
  'قيد التجهيز': 'text-yellow-400',
  'تم التأكيد': 'text-blue-400',
  'قيد الشحن': 'text-purple-400',
  'تم التسليم': 'text-green-400',
  'ملغي': 'text-amber-700',
}

export default function CustomersPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('الكل')
  const [dateFilter, setDateFilter] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

  const filtered = MOCK_CUSTOMERS.filter((c) => {
    const matchSearch =
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'الكل' || c.status === statusFilter
    const matchDate = !dateFilter || c.registeredAt >= dateFilter
    return matchSearch && matchStatus && matchDate
  })

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-stone-900">إدارة العملاء</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'إجمالي العملاء', value: '3,284', color: 'text-stone-900' },
          { label: 'عملاء جدد (الشهر)', value: '156', color: 'text-green-400' },
          { label: 'العملاء النشطين', value: '1,847', color: 'text-blue-400' },
          { label: 'متوسط قيمة الطلب', value: '127 ر.س', color: 'text-yellow-400' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-stone-200 rounded-xl p-4">
            <p className="text-stone-600 text-sm">{s.label}</p>
            <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white border border-stone-200 rounded-xl p-4">
        <div className="flex flex-wrap gap-3 items-end">
          <div className="relative flex-1 min-w-[200px]">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-600" />
            <input
              type="text"
              placeholder="بحث بالاسم، الهاتف، أو البريد..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-stone-100 border border-stone-200 text-stone-900 placeholder-zinc-500 rounded-lg pr-9 pl-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-stone-600 text-sm whitespace-nowrap">تاريخ التسجيل:</label>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:border-amber-500"
            >
              <option>الكل</option>
              <option>نشط</option>
              <option>محظور</option>
            </select>
            <ChevronDown size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                {['العميل', 'البريد / الهاتف', 'إجمالي الطلبات', 'إجمالي الإنفاق', 'تاريخ التسجيل', 'الحالة', 'إجراءات'].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-right text-stone-600 font-medium whitespace-nowrap">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b border-stone-200/50 hover:bg-stone-100/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-amber-600/20 text-amber-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {c.name[0]}
                      </div>
                      <div>
                        <p className="text-stone-900 font-medium">{c.name}</p>
                        <p className="text-stone-500 text-xs">{c.city}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-stone-700 text-xs flex items-center gap-1">
                      <Mail size={12} className="text-stone-500" />
                      {c.email}
                    </p>
                    <p className="text-stone-600 text-xs flex items-center gap-1 mt-0.5">
                      <Phone size={12} className="text-stone-500" />
                      {c.phone}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-stone-900 font-medium">{c.totalOrders}</td>
                  <td className="px-4 py-3 text-stone-900 font-medium">{c.totalSpent.toLocaleString()} ر.س</td>
                  <td className="px-4 py-3 text-stone-600">{c.registeredAt}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        c.status === 'نشط'
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedCustomer(c)}
                      className="text-xs bg-stone-200 hover:bg-zinc-600 text-stone-900 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      عرض
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-stone-500">لا يوجد عملاء</div>
        )}
      </div>

      {/* Customer Detail Slide-over */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedCustomer(null)} />
          <div className="absolute top-0 left-0 h-full w-full max-w-lg bg-white border-r border-stone-200 overflow-y-auto z-10 shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-stone-200 px-5 py-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-bold text-stone-900">تفاصيل العميل</h2>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-stone-600 hover:text-stone-900 p-1 rounded-lg hover:bg-stone-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 space-y-5">
              {/* Avatar & name */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-600/20 text-amber-700 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {selectedCustomer.name[0]}
                </div>
                <div>
                  <h3 className="text-stone-900 text-lg font-bold">{selectedCustomer.name}</h3>
                  <p className="text-stone-600 text-sm">{selectedCustomer.city}</p>
                  <span
                    className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${
                      selectedCustomer.status === 'نشط'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
                    }`}
                  >
                    {selectedCustomer.status}
                  </span>
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-stone-100 rounded-xl p-4 space-y-2">
                <p className="text-stone-700 flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-amber-700" />
                  {selectedCustomer.phone}
                </p>
                <p className="text-stone-700 flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-amber-700" />
                  {selectedCustomer.email}
                </p>
                <p className="text-stone-700 flex items-center gap-2 text-sm">
                  <Calendar size={14} className="text-amber-700" />
                  تاريخ الميلاد: {selectedCustomer.birthDate}
                </p>
                <p className="text-stone-700 flex items-center gap-2 text-sm">
                  <User size={14} className="text-amber-700" />
                  تاريخ التسجيل: {selectedCustomer.registeredAt}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'عدد الطلبات', value: selectedCustomer.totalOrders, icon: ShoppingBag },
                  { label: 'إجمالي الإنفاق', value: `${selectedCustomer.totalSpent.toLocaleString()} ر.س`, icon: DollarSign },
                  { label: 'آخر طلب', value: selectedCustomer.lastOrder, icon: TrendingUp },
                ].map((s) => (
                  <div key={s.label} className="bg-stone-100 rounded-xl p-3 text-center">
                    <s.icon size={18} className="text-amber-700 mx-auto mb-1" />
                    <p className="text-stone-900 font-bold text-sm">{s.value}</p>
                    <p className="text-stone-500 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-stone-100 rounded-xl p-4 space-y-3">
                <h3 className="text-stone-900 font-medium">آخر الطلبات</h3>
                {selectedCustomer.recentOrders.slice(0, 3).map((o, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-amber-700 text-sm font-medium">{o.id}</p>
                      <p className="text-stone-500 text-xs">{o.date}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-stone-900 text-sm font-medium">{o.total} ر.س</p>
                      <p className={`text-xs ${ORDER_STATUS_STYLES[o.status] ?? 'text-stone-600'}`}>
                        {o.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Danger zone */}
              <button className="w-full flex items-center justify-center gap-2 bg-amber-600/10 hover:bg-amber-600/20 border border-amber-500/20 text-amber-700 rounded-xl py-3 text-sm font-medium transition-colors">
                <AlertTriangle size={16} />
                حظر العميل
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
