'use client'

import { useState } from 'react'
import { Download, FileText, TrendingUp, ShoppingCart, Users, RotateCcw, XCircle, DollarSign } from 'lucide-react'

type Range = 'اليوم' | 'الأسبوع' | 'الشهر' | 'مخصص'

interface SaleRow {
  date: string
  orders: number
  revenue: number
  avgOrder: number
}

interface TopProduct {
  name: string
  qtySold: number
  revenue: number
  percent: number
}

interface Category {
  name: string
  revenue: number
  percent: number
}

const SALES_DATA: Record<Range, SaleRow[]> = {
  'اليوم': [
    { date: 'اليوم', orders: 18, revenue: 4250, avgOrder: 236 },
  ],
  'الأسبوع': [
    { date: '2026-03-22', orders: 42, revenue: 9800, avgOrder: 233 },
    { date: '2026-03-23', orders: 38, revenue: 8450, avgOrder: 222 },
    { date: '2026-03-24', orders: 51, revenue: 12300, avgOrder: 241 },
    { date: '2026-03-25', orders: 45, revenue: 10100, avgOrder: 224 },
    { date: '2026-03-26', orders: 60, revenue: 14800, avgOrder: 247 },
    { date: '2026-03-27', orders: 55, revenue: 13200, avgOrder: 240 },
    { date: '2026-03-28', orders: 48, revenue: 11500, avgOrder: 240 },
  ],
  'الشهر': [
    { date: 'الأسبوع 1', orders: 310, revenue: 72000, avgOrder: 232 },
    { date: 'الأسبوع 2', orders: 295, revenue: 68500, avgOrder: 232 },
    { date: 'الأسبوع 3', orders: 340, revenue: 79000, avgOrder: 232 },
    { date: 'الأسبوع 4', orders: 302, revenue: 70200, avgOrder: 232 },
  ],
  'مخصص': [
    { date: '2026-03-22', orders: 42, revenue: 9800, avgOrder: 233 },
    { date: '2026-03-23', orders: 38, revenue: 8450, avgOrder: 222 },
    { date: '2026-03-24', orders: 51, revenue: 12300, avgOrder: 241 },
    { date: '2026-03-25', orders: 45, revenue: 10100, avgOrder: 224 },
    { date: '2026-03-26', orders: 60, revenue: 14800, avgOrder: 247 },
    { date: '2026-03-27', orders: 55, revenue: 13200, avgOrder: 240 },
    { date: '2026-03-28', orders: 48, revenue: 11500, avgOrder: 240 },
  ],
}

const TOP_PRODUCTS: TopProduct[] = [
  { name: 'جهاز فيب برو X', qtySold: 184, revenue: 95680, percent: 22 },
  { name: 'سائل فيب مانجو 30ml', qtySold: 412, revenue: 30900, percent: 18 },
  { name: 'جهاز فيب ماكس', qtySold: 97, revenue: 43650, percent: 14 },
  { name: 'سائل فيب نعناع 60ml', qtySold: 358, revenue: 26850, percent: 12 },
  { name: 'كويل استبدال 5-Pack', qtySold: 520, revenue: 22100, percent: 10 },
  { name: 'سائل فيب توت 30ml', qtySold: 290, revenue: 21750, percent: 9 },
  { name: 'جهاز فيب ميني', qtySold: 73, revenue: 13797, percent: 6 },
  { name: 'بودز استبدال 3-Pack', qtySold: 340, revenue: 15300, percent: 5 },
  { name: 'سائل فيب أيس 60ml', qtySold: 185, revenue: 10175, percent: 3 },
  { name: 'جهاز فيب كلاسيك', qtySold: 48, revenue: 9360, percent: 1 },
]

const CATEGORIES: Category[] = [
  { name: 'أجهزة', revenue: 162487, percent: 47 },
  { name: 'سوائل', revenue: 110975, percent: 32 },
  { name: 'إكسسوارات', revenue: 72538, percent: 21 },
]

const KPI_DATA: Record<Range, { sales: string; orders: string; avg: string; conversion: string; cancellation: string; returning: string }> = {
  'اليوم': { sales: '4,250 ر.س', orders: '18', avg: '236 ر.س', conversion: '3.2%', cancellation: '2.1%', returning: '61%' },
  'الأسبوع': { sales: '80,150 ر.س', orders: '339', avg: '237 ر.س', conversion: '4.1%', cancellation: '3.5%', returning: '58%' },
  'الشهر': { sales: '289,700 ر.س', orders: '1,247', avg: '232 ر.س', conversion: '4.8%', cancellation: '3.2%', returning: '62%' },
  'مخصص': { sales: '80,150 ر.س', orders: '339', avg: '237 ر.س', conversion: '4.1%', cancellation: '3.5%', returning: '58%' },
}

export default function ReportsPage() {
  const [range, setRange] = useState<Range>('الأسبوع')
  const [customFrom, setCustomFrom] = useState('')
  const [customTo, setCustomTo] = useState('')

  const kpi = KPI_DATA[range]
  const sales = SALES_DATA[range]
  const totalRevenue = sales.reduce((acc, r) => acc + r.revenue, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-stone-900">التقارير والإحصائيات</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-amber-600/10 hover:bg-amber-600/20 border border-amber-500/20 text-amber-700 px-4 py-2 rounded-lg text-sm transition-colors">
            <FileText size={16} />
            تصدير PDF
          </button>
          <button className="flex items-center gap-2 bg-green-600/10 hover:bg-green-600/20 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm transition-colors">
            <Download size={16} />
            تصدير Excel
          </button>
        </div>
      </div>

      {/* Date Range */}
      <div className="bg-white border border-stone-200 rounded-xl p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-1 bg-stone-100 rounded-lg p-1">
            {(['اليوم', 'الأسبوع', 'الشهر', 'مخصص'] as Range[]).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  range === r ? 'bg-amber-600 text-stone-900' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          {range === 'مخصص' && (
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={customFrom}
                onChange={(e) => setCustomFrom(e.target.value)}
                className="bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-amber-500"
              />
              <span className="text-stone-600">إلى</span>
              <input
                type="date"
                value={customTo}
                onChange={(e) => setCustomTo(e.target.value)}
                className="bg-stone-100 border border-stone-200 text-stone-900 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: 'المبيعات', value: kpi.sales, icon: DollarSign, color: 'text-green-400' },
          { label: 'الطلبات', value: kpi.orders, icon: ShoppingCart, color: 'text-blue-400' },
          { label: 'متوسط الطلب', value: kpi.avg, icon: TrendingUp, color: 'text-yellow-400' },
          { label: 'معدل التحويل', value: kpi.conversion, icon: Users, color: 'text-purple-400' },
          { label: 'معدل الإلغاء', value: kpi.cancellation, icon: XCircle, color: 'text-amber-700' },
          { label: 'عائد العملاء', value: kpi.returning, icon: RotateCcw, color: 'text-cyan-400' },
        ].map((k) => (
          <div key={k.label} className="bg-white border border-stone-200 rounded-xl p-4">
            <k.icon size={18} className={`${k.color} mb-2`} />
            <p className={`text-xl font-bold ${k.color}`}>{k.value}</p>
            <p className="text-stone-500 text-xs mt-1">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Sales Report */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-200">
          <h2 className="text-stone-900 font-semibold">تقرير المبيعات</h2>
          <p className="text-stone-600 text-sm mt-0.5">إجمالي الإيراد: {totalRevenue.toLocaleString()} ر.س</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                {['التاريخ', 'الطلبات', 'الإيراد', 'متوسط الطلب'].map((h) => (
                  <th key={h} className="px-4 py-3 text-right text-stone-600 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sales.map((row, i) => (
                <tr key={i} className="border-b border-stone-200/50 hover:bg-stone-100/30 transition-colors">
                  <td className="px-4 py-3 text-stone-700">{row.date}</td>
                  <td className="px-4 py-3 text-stone-900 font-medium">{row.orders}</td>
                  <td className="px-4 py-3 text-green-400 font-medium">{row.revenue.toLocaleString()} ر.س</td>
                  <td className="px-4 py-3 text-stone-700">{row.avgOrder} ر.س</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-stone-200">
          <h2 className="text-stone-900 font-semibold">أفضل المنتجات</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                {['#', 'المنتج', 'الكمية المباعة', 'الإيراد', 'نسبة المبيعات'].map((h) => (
                  <th key={h} className="px-4 py-3 text-right text-stone-600 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TOP_PRODUCTS.map((p, i) => (
                <tr key={i} className="border-b border-stone-200/50 hover:bg-stone-100/30 transition-colors">
                  <td className="px-4 py-3 text-stone-500 font-mono">{i + 1}</td>
                  <td className="px-4 py-3 text-stone-900">{p.name}</td>
                  <td className="px-4 py-3 text-stone-900 font-medium">{p.qtySold}</td>
                  <td className="px-4 py-3 text-green-400 font-medium">{p.revenue.toLocaleString()} ر.س</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-stone-100 rounded-full h-2 min-w-[80px]">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: `${p.percent}%` }}
                        />
                      </div>
                      <span className="text-stone-600 text-xs w-8">{p.percent}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Breakdown */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4">
          <h2 className="text-stone-900 font-semibold">مبيعات حسب الفئة</h2>
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-900">{cat.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-stone-600">{cat.revenue.toLocaleString()} ر.س</span>
                  <span className="text-stone-500 w-8 text-left">{cat.percent}%</span>
                </div>
              </div>
              <div className="bg-stone-100 rounded-full h-2.5">
                <div
                  className="bg-amber-500 h-2.5 rounded-full transition-all"
                  style={{ width: `${cat.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Customer Report */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-4">
          <h2 className="text-stone-900 font-semibold">تقرير العملاء</h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-stone-100 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-blue-400">38%</p>
              <p className="text-stone-600 text-sm mt-1">عملاء جدد</p>
            </div>
            <div className="bg-stone-100 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-green-400">62%</p>
              <p className="text-stone-600 text-sm mt-1">عملاء عائدون</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-stone-600 text-sm font-medium">أكثر المدن طلباً</p>
            {[
              { city: 'الرياض', percent: 42 },
              { city: 'جدة', percent: 28 },
              { city: 'الدمام', percent: 15 },
              { city: 'مكة المكرمة', percent: 9 },
              { city: 'المدينة المنورة', percent: 6 },
            ].map((c) => (
              <div key={c.city} className="flex items-center gap-3">
                <span className="text-stone-700 text-sm w-32">{c.city}</span>
                <div className="flex-1 bg-stone-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${c.percent}%` }} />
                </div>
                <span className="text-stone-600 text-xs w-8">{c.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
