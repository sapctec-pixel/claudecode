'use client'

import { useState } from 'react'
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  Package,
} from 'lucide-react'

// ── MOCK DATA ──────────────────────────────────────────────────────────────

type ProductStatus = 'active' | 'hidden'

interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  status: ProductStatus
  color: string
}

const mockProducts: Product[] = [
  { id: 1,  name: 'VUSE Alto Pod',             category: 'سجائر إلكترونية', price: 185, stock: 42,  status: 'active', color: 'bg-amber-600' },
  { id: 2,  name: 'Juul Mint Pods x2',          category: 'سجائر إلكترونية', price: 160, stock: 3,   status: 'active', color: 'bg-blue-600' },
  { id: 3,  name: 'Vaporesso Xros Pod Kit',      category: 'سجائر إلكترونية', price: 450, stock: 18,  status: 'active', color: 'bg-purple-600' },
  { id: 4,  name: 'SMOK Nord 5',                 category: 'سجائر إلكترونية', price: 390, stock: 25,  status: 'hidden', color: 'bg-indigo-600' },
  { id: 5,  name: 'عصير توتي فروتي 60ml',       category: 'عصائر',           price: 95,  stock: 7,   status: 'active', color: 'bg-amber-500' },
  { id: 6,  name: 'عصير توت العليق 30ml',       category: 'عصائر',           price: 75,  stock: 60,  status: 'active', color: 'bg-pink-600' },
  { id: 7,  name: 'عصير مانجو أيس 100ml',       category: 'عصائر',           price: 120, stock: 33,  status: 'active', color: 'bg-yellow-500' },
  { id: 8,  name: 'معسل تفاح أخضر',             category: 'معسل',            price: 65,  stock: 90,  status: 'active', color: 'bg-emerald-600' },
  { id: 9,  name: 'معسل فواكه مشكلة',           category: 'معسل',            price: 70,  stock: 45,  status: 'active', color: 'bg-teal-600' },
  { id: 10, name: 'معسل عنب برتقال',            category: 'معسل',            price: 68,  stock: 12,  status: 'hidden', color: 'bg-orange-600' },
  { id: 11, name: 'Coil Vaporesso GT4',          category: 'إكسسوارات',       price: 45,  stock: 11,  status: 'active', color: 'bg-zinc-500' },
  { id: 12, name: 'Coil SMOK V8 Baby',           category: 'إكسسوارات',       price: 38,  stock: 55,  status: 'active', color: 'bg-zinc-600' },
  { id: 13, name: 'بطارية 18650 مودي',          category: 'إكسسوارات',       price: 120, stock: 20,  status: 'active', color: 'bg-slate-600' },
  { id: 14, name: 'كفر سيليكون VUSE',           category: 'إكسسوارات',       price: 35,  stock: 75,  status: 'active', color: 'bg-amber-800' },
  { id: 15, name: 'شيشة صغيرة كلاود',           category: 'شيش',             price: 280, stock: 8,   status: 'active', color: 'bg-cyan-600' },
  { id: 16, name: 'فحم شيشة ناتورال',           category: 'شيش',             price: 55,  stock: 120, status: 'active', color: 'bg-stone-600' },
  { id: 17, name: 'Geek Bar Pro 5000',           category: 'سجائر إلكترونية', price: 95,  stock: 36,  status: 'active', color: 'bg-amber-600' },
  { id: 18, name: 'Elf Bar BC5000',              category: 'سجائر إلكترونية', price: 85,  stock: 48,  status: 'active', color: 'bg-fuchsia-600' },
  { id: 19, name: 'عصير كيوي باشن فروت',        category: 'عصائر',           price: 100, stock: 22,  status: 'hidden', color: 'bg-lime-600' },
  { id: 20, name: 'خرطوشة Juul Classic',        category: 'سجائر إلكترونية', price: 130, stock: 5,   status: 'active', color: 'bg-sky-600' },
]

const CATEGORIES = ['الكل', 'سجائر إلكترونية', 'عصائر', 'معسل', 'إكسسوارات', 'شيش']
const PAGE_SIZE = 10

// ── STATUS TOGGLE ──────────────────────────────────────────────────────────

function StatusToggle({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
        checked ? 'bg-amber-600' : 'bg-stone-200'
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-1' : '-translate-x-1'
        }`}
      />
    </button>
  )
}

// ── MODAL ──────────────────────────────────────────────────────────────────

type ModalTab = 'info' | 'images' | 'inventory' | 'price'

interface ModalFormState {
  nameAr: string
  nameEn: string
  category: string
  brand: string
  description: string
  active: boolean
  quantity: string
  minQty: string
  sku: string
  price: string
  oldPrice: string
  cost: string
}

const defaultForm: ModalFormState = {
  nameAr: '',
  nameEn: '',
  category: '',
  brand: '',
  description: '',
  active: true,
  quantity: '',
  minQty: '',
  sku: '',
  price: '',
  oldPrice: '',
  cost: '',
}

function ProductModal({
  onClose,
  editProduct,
}: {
  onClose: () => void
  editProduct?: Product | null
}) {
  const [tab, setTab] = useState<ModalTab>('info')
  const [form, setForm] = useState<ModalFormState>({
    ...defaultForm,
    nameAr: editProduct?.name ?? '',
    category: editProduct?.category ?? '',
    active: editProduct?.status === 'active' ?? true,
    quantity: editProduct?.stock?.toString() ?? '',
    price: editProduct?.price?.toString() ?? '',
  })

  const tabs: { id: ModalTab; label: string }[] = [
    { id: 'info',      label: 'المعلومات الأساسية' },
    { id: 'images',    label: 'الصور' },
    { id: 'inventory', label: 'المخزون' },
    { id: 'price',     label: 'السعر' },
  ]

  function set(key: keyof ModalFormState, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Dialog */}
      <div className="relative bg-white border border-stone-200 rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 flex-shrink-0">
          <h2 className="text-stone-900 font-semibold text-lg">
            {editProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'}
          </h2>
          <button onClick={onClose} className="text-stone-600 hover:text-stone-900 p-1 rounded hover:bg-stone-100 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-stone-200 flex-shrink-0 px-6 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                tab === t.id
                  ? 'border-amber-500 text-amber-500'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* ── Tab: المعلومات الأساسية ── */}
          {tab === 'info' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">اسم المنتج (عربي)</label>
                  <input
                    value={form.nameAr}
                    onChange={(e) => set('nameAr', e.target.value)}
                    placeholder="مثال: سيجارة إلكترونية..."
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">اسم المنتج (إنجليزي)</label>
                  <input
                    value={form.nameEn}
                    onChange={(e) => set('nameEn', e.target.value)}
                    placeholder="e.g. Electronic Cigarette..."
                    dir="ltr"
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">الفئة</label>
                  <select
                    value={form.category}
                    onChange={(e) => set('category', e.target.value)}
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">اختر فئة...</option>
                    {CATEGORIES.filter((c) => c !== 'الكل').map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">البراند</label>
                  <input
                    value={form.brand}
                    onChange={(e) => set('brand', e.target.value)}
                    placeholder="مثال: VUSE, Juul..."
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-600 text-sm mb-1.5">الوصف</label>
                <textarea
                  value={form.description}
                  onChange={(e) => set('description', e.target.value)}
                  rows={4}
                  placeholder="اكتب وصفاً تفصيلياً للمنتج..."
                  className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between bg-stone-100/50 rounded-lg px-4 py-3">
                <div>
                  <p className="text-stone-900 text-sm font-medium">حالة المنتج</p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    {form.active ? 'المنتج نشط ومرئي في المتجر' : 'المنتج مخفي عن العملاء'}
                  </p>
                </div>
                <StatusToggle checked={form.active} onChange={(v) => set('active', v)} />
              </div>
            </div>
          )}

          {/* ── Tab: الصور ── */}
          {tab === 'images' && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-stone-200 rounded-xl p-10 text-center hover:border-stone-300 transition-colors cursor-pointer">
                <Upload size={36} className="mx-auto text-stone-400 mb-3" />
                <p className="text-stone-600 text-sm font-medium">اسحب الصور هنا أو انقر للرفع</p>
                <p className="text-stone-400 text-xs mt-1.5">PNG, JPG, WebP — حد أقصى 5MB لكل صورة</p>
                <button className="mt-4 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm rounded-lg transition-colors">
                  اختر ملفات
                </button>
              </div>

              {/* Image preview placeholders */}
              <div>
                <p className="text-stone-500 text-xs mb-3">معاينة الصور</p>
                <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center"
                    >
                      <Package size={20} className="text-zinc-700" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Tab: المخزون ── */}
          {tab === 'inventory' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">الكمية الحالية</label>
                  <input
                    type="number"
                    value={form.quantity}
                    onChange={(e) => set('quantity', e.target.value)}
                    placeholder="0"
                    min="0"
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 text-sm mb-1.5">الحد الأدنى للمخزون</label>
                  <input
                    type="number"
                    value={form.minQty}
                    onChange={(e) => set('minQty', e.target.value)}
                    placeholder="0"
                    min="0"
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-stone-600 text-sm mb-1.5">رمز المنتج (SKU)</label>
                <input
                  value={form.sku}
                  onChange={(e) => set('sku', e.target.value)}
                  placeholder="مثال: VS-ALT-001"
                  dir="ltr"
                  className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              {form.quantity && form.minQty && Number(form.quantity) < Number(form.minQty) && (
                <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3">
                  <span className="text-amber-700 text-sm">تحذير: الكمية الحالية أقل من الحد الأدنى المطلوب.</span>
                </div>
              )}
            </div>
          )}

          {/* ── Tab: السعر ── */}
          {tab === 'price' && (
            <div className="space-y-4">
              <div>
                <label className="block text-stone-600 text-sm mb-1.5">السعر (ر.س)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => set('price', e.target.value)}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors pl-14"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-sm">ر.س</span>
                </div>
              </div>
              <div>
                <label className="block text-stone-600 text-sm mb-1.5">السعر قبل الخصم (ر.س)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={form.oldPrice}
                    onChange={(e) => set('oldPrice', e.target.value)}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors pl-14"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-sm">ر.س</span>
                </div>
              </div>
              <div>
                <label className="block text-stone-600 text-sm mb-1.5">التكلفة (ر.س)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={form.cost}
                    onChange={(e) => set('cost', e.target.value)}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors pl-14"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-sm">ر.س</span>
                </div>
              </div>
              {form.price && form.cost && (
                <div className="bg-stone-100/50 rounded-lg px-4 py-3">
                  <p className="text-stone-600 text-sm">
                    هامش الربح:{' '}
                    <span className="text-emerald-400 font-semibold">
                      {(((Number(form.price) - Number(form.cost)) / Number(form.price)) * 100).toFixed(1)}%
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-stone-200 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
          >
            إلغاء
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm bg-amber-600 hover:bg-amber-700 text-stone-900 rounded-lg transition-colors font-medium"
          >
            {editProduct ? 'حفظ التعديلات' : 'إضافة المنتج'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── MAIN PAGE ──────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('الكل')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'hidden'>('all')
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [page, setPage] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [editProduct, setEditProduct] = useState<Product | null>(null)

  // Filtering
  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = categoryFilter === 'الكل' || p.category === categoryFilter
    const matchStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' ? p.status === 'active' : p.status === 'hidden')
    return matchSearch && matchCat && matchStatus
  })

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function toggleSelect(id: number) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function toggleAll() {
    if (selected.size === paginated.length) {
      setSelected(new Set())
    } else {
      setSelected(new Set(paginated.map((p) => p.id)))
    }
  }

  function deleteSelected() {
    setProducts((prev) => prev.filter((p) => !selected.has(p.id)))
    setSelected(new Set())
  }

  function deleteOne(id: number) {
    setProducts((prev) => prev.filter((p) => p.id !== id))
    setSelected((prev) => { const n = new Set(prev); n.delete(id); return n })
  }

  function toggleStatus(id: number) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: p.status === 'active' ? 'hidden' : 'active' } : p
      )
    )
  }

  function openAdd() {
    setEditProduct(null)
    setModalOpen(true)
  }

  function openEdit(p: Product) {
    setEditProduct(p)
    setModalOpen(true)
  }

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-stone-900">إدارة المنتجات</h1>
          <p className="text-stone-500 text-sm mt-0.5">{products.length} منتج في المتجر</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-stone-900 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          إضافة منتج
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white border border-stone-200 rounded-xl p-4">
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              placeholder="البحث عن منتج..."
              className="w-full bg-stone-100 border border-stone-200 rounded-lg pr-9 pl-3 py-2.5 text-stone-900 text-sm placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => { setCategoryFilter(e.target.value); setPage(1) }}
            className="bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm focus:outline-none focus:border-amber-500 transition-colors"
          >
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => { setStatusFilter(e.target.value as 'all' | 'active' | 'hidden'); setPage(1) }}
            className="bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-stone-900 text-sm focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="all">كل الحالات</option>
            <option value="active">نشط</option>
            <option value="hidden">مخفي</option>
          </select>

          {/* Bulk Delete */}
          {selected.size > 0 && (
            <button
              onClick={deleteSelected}
              className="flex items-center gap-2 bg-amber-600/10 hover:bg-amber-600/20 border border-amber-600/30 text-amber-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
            >
              <Trash2 size={15} />
              حذف المحدد ({selected.size})
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-100/30">
                <th className="px-4 py-3 text-right">
                  <input
                    type="checkbox"
                    checked={paginated.length > 0 && selected.size === paginated.length}
                    onChange={toggleAll}
                    className="accent-amber-600 w-4 h-4 cursor-pointer"
                  />
                </th>
                <th className="px-4 py-3 text-right text-stone-600 font-medium">الصورة</th>
                <th className="px-4 py-3 text-right text-stone-600 font-medium">اسم المنتج</th>
                <th className="px-4 py-3 text-right text-stone-600 font-medium">الفئة</th>
                <th className="px-4 py-3 text-right text-stone-600 font-medium">السعر</th>
                <th className="px-4 py-3 text-right text-stone-600 font-medium">المخزون</th>
                <th className="px-4 py-3 text-right text-stone-600 font-medium">الحالة</th>
                <th className="px-4 py-3 text-right text-stone-600 font-medium">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-stone-500">
                    لا توجد منتجات تطابق البحث
                  </td>
                </tr>
              ) : (
                paginated.map((product) => (
                  <tr
                    key={product.id}
                    className={`border-b border-stone-200/50 hover:bg-stone-100/20 transition-colors ${
                      selected.has(product.id) ? 'bg-amber-600/5' : ''
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selected.has(product.id)}
                        onChange={() => toggleSelect(product.id)}
                        className="accent-amber-600 w-4 h-4 cursor-pointer"
                      />
                    </td>

                    {/* Image */}
                    <td className="px-4 py-3">
                      <div className={`w-10 h-10 rounded-lg ${product.color} flex-shrink-0`} />
                    </td>

                    {/* Name */}
                    <td className="px-4 py-3">
                      <span className="text-stone-900 font-medium">{product.name}</span>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-3">
                      <span className="text-stone-600 text-xs bg-stone-100 px-2.5 py-1 rounded-full">
                        {product.category}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-3 text-stone-900 font-medium whitespace-nowrap">
                      {product.price} ر.س
                    </td>

                    {/* Stock */}
                    <td className="px-4 py-3">
                      <span
                        className={`font-medium ${
                          product.stock <= 10
                            ? 'text-amber-700'
                            : product.stock <= 20
                            ? 'text-amber-700'
                            : 'text-stone-700'
                        }`}
                      >
                        {product.stock}
                      </span>
                    </td>

                    {/* Status Toggle */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <StatusToggle
                          checked={product.status === 'active'}
                          onChange={() => toggleStatus(product.id)}
                        />
                        <span className={`text-xs ${product.status === 'active' ? 'text-emerald-400' : 'text-stone-500'}`}>
                          {product.status === 'active' ? 'نشط' : 'مخفي'}
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openEdit(product)}
                          className="p-1.5 text-stone-600 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                          title="تعديل"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => deleteOne(product.id)}
                          className="p-1.5 text-stone-600 hover:text-amber-700 hover:bg-amber-400/10 rounded-lg transition-colors"
                          title="حذف"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-stone-200">
            <span className="text-stone-500 text-sm">
              عرض {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} من {filtered.length} منتج
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={18} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                    p === page
                      ? 'bg-amber-600 text-stone-900'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <ProductModal
          onClose={() => { setModalOpen(false); setEditProduct(null) }}
          editProduct={editProduct}
        />
      )}
    </div>
  )
}
