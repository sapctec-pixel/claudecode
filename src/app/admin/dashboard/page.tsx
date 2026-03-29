import {
  DollarSign,
  ShoppingBag,
  Users,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Eye,
  RefreshCw,
} from 'lucide-react'

// ── KPI CARDS ──────────────────────────────────────────────────────────────

interface KpiCardProps {
  title: string
  value: string
  change: string
  changeType: 'up' | 'down' | 'warn'
  changeLabel: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  iconBg: string
}

function KpiCard({ title, value, change, changeType, changeLabel, icon: Icon, iconBg }: KpiCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-stone-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-stone-600 text-sm mb-1">{title}</p>
          <p className="text-2xl font-bold text-stone-900">{value}</p>
        </div>
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${iconBg}`}>
          <Icon size={20} className="text-stone-900" />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        {changeType === 'up' && <TrendingUp size={14} className="text-emerald-400" />}
        {changeType === 'down' && <TrendingDown size={14} className="text-amber-700" />}
        {changeType === 'warn' && <AlertTriangle size={14} className="text-amber-700" />}
        <span
          className={`text-sm font-medium ${
            changeType === 'up' ? 'text-emerald-400' : 'text-amber-700'
          }`}
        >
          {change}
        </span>
        <span className="text-stone-500 text-sm">{changeLabel}</span>
      </div>
    </div>
  )
}

// ── WEEKLY SALES CHART ─────────────────────────────────────────────────────

const weeklyData = [
  { day: 'سبت', value: 3200 },
  { day: 'أحد', value: 4100 },
  { day: 'إثنين', value: 3800 },
  { day: 'ثلاثاء', value: 5200 },
  { day: 'أربعاء', value: 4700 },
  { day: 'خميس', value: 6100 },
  { day: 'جمعة', value: 4800 },
]
const maxWeekly = Math.max(...weeklyData.map((d) => d.value))

function WeeklySalesChart() {
  return (
    <div className="bg-white rounded-xl p-5 border border-stone-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-stone-900 font-semibold">المبيعات الأسبوعية</h2>
        <span className="text-stone-500 text-xs">آخر 7 أيام</span>
      </div>
      <div className="flex items-end gap-2 h-36">
        {weeklyData.map((d) => {
          const pct = (d.value / maxWeekly) * 100
          return (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5">
              <span className="text-stone-500 text-[10px]">{(d.value / 1000).toFixed(1)}k</span>
              <div className="w-full rounded-t-md bg-stone-100 relative overflow-hidden" style={{ height: '96px' }}>
                <div
                  className="absolute bottom-0 left-0 right-0 bg-amber-600 rounded-t-md transition-all"
                  style={{ height: `${pct}%` }}
                />
              </div>
              <span className="text-stone-500 text-[10px]">{d.day}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── CATEGORY CHART ─────────────────────────────────────────────────────────

const categories = [
  { label: 'سجائر إلكترونية', pct: 45, color: 'bg-amber-500' },
  { label: 'عصائر', pct: 28, color: 'bg-blue-500' },
  { label: 'معسل', pct: 17, color: 'bg-amber-500' },
  { label: 'إكسسوارات', pct: 10, color: 'bg-emerald-500' },
]

function CategoryChart() {
  return (
    <div className="bg-white rounded-xl p-5 border border-stone-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-stone-900 font-semibold">توزيع الفئات</h2>
        <span className="text-stone-500 text-xs">هذا الشهر</span>
      </div>
      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-stone-700 text-sm">{cat.label}</span>
              <span className="text-stone-600 text-sm font-medium">{cat.pct}%</span>
            </div>
            <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${cat.color} rounded-full`}
                style={{ width: `${cat.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <div key={cat.label} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
            <span className="text-stone-500 text-xs">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── RECENT ORDERS ──────────────────────────────────────────────────────────

interface Order {
  id: string
  product: string
  customer: string
  amount: string
  status: 'completed' | 'processing' | 'pending' | 'cancelled' | 'refunded'
  date: string
}

const recentOrders: Order[] = [
  { id: '#4521', product: 'VUSE Alto Pod', customer: 'محمد العمري', amount: '185 ر.س', status: 'completed', date: '29 مار 2026' },
  { id: '#4520', product: 'Juul Mint Pods x2', customer: 'سارة القحطاني', amount: '320 ر.س', status: 'processing', date: '29 مار 2026' },
  { id: '#4519', product: 'عصير توتي فروتي', customer: 'خالد الشمري', amount: '95 ر.س', status: 'pending', date: '28 مار 2026' },
  { id: '#4518', product: 'معسل تفاح أخضر', customer: 'نورة السبيعي', amount: '65 ر.س', status: 'cancelled', date: '28 مار 2026' },
  { id: '#4517', product: 'Pod Kit Vaporesso', customer: 'عبدالله المطيري', amount: '450 ر.س', status: 'refunded', date: '27 مار 2026' },
]

const statusConfig: Record<Order['status'], { label: string; className: string }> = {
  completed:  { label: 'مكتمل',    className: 'bg-emerald-500/10 text-emerald-400' },
  processing: { label: 'قيد التنفيذ', className: 'bg-blue-500/10 text-blue-400' },
  pending:    { label: 'معلق',     className: 'bg-amber-500/10 text-amber-700' },
  cancelled:  { label: 'ملغي',     className: 'bg-stone-200 text-stone-600' },
  refunded:   { label: 'مسترجع',   className: 'bg-amber-500/10 text-amber-700' },
}

function RecentOrdersTable() {
  return (
    <div className="bg-white rounded-xl border border-stone-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
        <h2 className="text-stone-900 font-semibold">أحدث الطلبات</h2>
        <button className="text-amber-500 text-sm hover:text-amber-700 transition-colors">
          عرض الكل
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200">
              {['#', 'المنتجات', 'العميل', 'المبلغ', 'الحالة', 'التاريخ', 'إجراء'].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-right text-stone-500 font-medium whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => {
              const st = statusConfig[order.status]
              return (
                <tr key={order.id} className="border-b border-stone-200/50 hover:bg-stone-100/30 transition-colors">
                  <td className="px-4 py-3 text-stone-600 font-mono">{order.id}</td>
                  <td className="px-4 py-3 text-stone-900 whitespace-nowrap">{order.product}</td>
                  <td className="px-4 py-3 text-stone-700 whitespace-nowrap">{order.customer}</td>
                  <td className="px-4 py-3 text-stone-900 font-medium whitespace-nowrap">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${st.className}`}>
                      {st.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-600 whitespace-nowrap">{order.date}</td>
                  <td className="px-4 py-3">
                    <button className="text-stone-600 hover:text-stone-900 p-1 rounded hover:bg-stone-200 transition-colors">
                      <Eye size={15} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── TOP PRODUCTS ───────────────────────────────────────────────────────────

const topProducts = [
  { rank: 1,  color: 'bg-amber-600',    name: 'VUSE Alto Pod',        sales: 412, revenue: '76,220 ر.س' },
  { rank: 2,  color: 'bg-blue-600',   name: 'Juul Mint Pods',       sales: 318, revenue: '58,730 ر.س' },
  { rank: 3,  color: 'bg-amber-600',  name: 'عصير توتي فروتي 60ml', sales: 295, revenue: '28,025 ر.س' },
  { rank: 4,  color: 'bg-emerald-600',name: 'Vaporesso Pod Kit',    sales: 187, revenue: '84,150 ر.س' },
  { rank: 5,  color: 'bg-purple-600', name: 'معسل تفاح أخضر',      sales: 156, revenue: '10,140 ر.س' },
]

function TopProducts() {
  return (
    <div className="bg-white rounded-xl border border-stone-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
        <h2 className="text-stone-900 font-semibold">أفضل المنتجات</h2>
        <span className="text-stone-500 text-xs">هذا الشهر</span>
      </div>
      <div className="divide-y divide-zinc-800/50">
        {topProducts.map((p) => (
          <div key={p.rank} className="flex items-center gap-3 px-5 py-3.5 hover:bg-stone-100/30 transition-colors">
            <span className="text-stone-500 text-sm w-5 text-center font-medium">{p.rank}</span>
            <div className={`w-9 h-9 rounded-lg ${p.color} flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <p className="text-stone-900 text-sm font-medium truncate">{p.name}</p>
              <p className="text-stone-500 text-xs">{p.sales} مبيعة</p>
            </div>
            <span className="text-stone-700 text-sm font-medium whitespace-nowrap">{p.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── LOW STOCK ALERTS ───────────────────────────────────────────────────────

const lowStockItems = [
  { name: 'Juul Pods Classic',     current: 3,  min: 20, color: 'bg-amber-600' },
  { name: 'عصير توت العليق 30ml', current: 7,  min: 25, color: 'bg-amber-600' },
  { name: 'Coil Vaporesso GT4',    current: 11, min: 30, color: 'bg-blue-600' },
]

function LowStockAlerts() {
  return (
    <div className="bg-white rounded-xl border border-stone-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200">
        <h2 className="text-stone-900 font-semibold">تنبيهات المخزون المنخفض</h2>
        <span className="bg-amber-500/10 text-amber-700 text-xs px-2.5 py-1 rounded-full font-medium">
          {lowStockItems.length} منتجات
        </span>
      </div>
      <div className="divide-y divide-zinc-800/50">
        {lowStockItems.map((item) => {
          const pct = Math.round((item.current / item.min) * 100)
          return (
            <div key={item.name} className="px-5 py-4">
              <div className="flex items-center gap-3 mb-2.5">
                <div className={`w-8 h-8 rounded-lg ${item.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-stone-900 text-sm font-medium truncate">{item.name}</p>
                  <p className="text-stone-500 text-xs">
                    المتبقي: <span className="text-amber-700 font-semibold">{item.current}</span> / الحد الأدنى: {item.min}
                  </p>
                </div>
                <button className="flex items-center gap-1.5 text-xs bg-amber-600 hover:bg-amber-700 text-stone-900 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex-shrink-0">
                  <RefreshCw size={12} />
                  تجديد المخزون
                </button>
              </div>
              <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full"
                  style={{ width: `${Math.min(pct, 100)}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── PAGE ───────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold text-stone-900">لوحة التحكم</h1>
        <p className="text-stone-500 text-sm mt-0.5">مرحباً، هنا نظرة عامة على أداء المتجر</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard
          title="إجمالي المبيعات"
          value="48,250 ر.س"
          change="↑ 12.5%"
          changeType="up"
          changeLabel="من الشهر الماضي"
          icon={DollarSign}
          iconBg="bg-amber-600"
        />
        <KpiCard
          title="الطلبات الجديدة"
          value="124"
          change="↑ 8.2%"
          changeType="up"
          changeLabel="من الشهر الماضي"
          icon={ShoppingBag}
          iconBg="bg-blue-600"
        />
        <KpiCard
          title="العملاء النشطين"
          value="1,847"
          change="↑ 3.1%"
          changeType="up"
          changeLabel="من الشهر الماضي"
          icon={Users}
          iconBg="bg-emerald-600"
        />
        <KpiCard
          title="المنتجات المنخفضة"
          value="12"
          change="↓ تحتاج تجديد"
          changeType="warn"
          changeLabel=""
          icon={AlertTriangle}
          iconBg="bg-amber-600"
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <WeeklySalesChart />
        <CategoryChart />
      </div>

      {/* Recent Orders */}
      <RecentOrdersTable />

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TopProducts />
        <LowStockAlerts />
      </div>
    </div>
  )
}
