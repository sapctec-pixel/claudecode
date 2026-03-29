'use client'

import { useState } from 'react'
import { Download, RefreshCw, Check, X as XIcon, Package } from 'lucide-react'

type StockStatus = 'كافٍ' | 'منخفض' | 'نفد'

interface InventoryItem {
  id: string
  name: string
  sku: string
  category: string
  stock: number
  minStock: number
  status: StockStatus
  lastUpdated: string
}

const STATUS_STYLES: Record<StockStatus, string> = {
  'كافٍ': 'bg-green-500/10 text-green-400 border border-green-500/20',
  'منخفض': 'bg-amber-500/10 text-amber-700 border border-amber-500/20',
  'نفد': 'bg-amber-500/10 text-amber-700 border border-amber-500/20',
}

function deriveStatus(stock: number, minStock: number): StockStatus {
  if (stock === 0) return 'نفد'
  if (stock <= minStock) return 'منخفض'
  return 'كافٍ'
}

const MOCK_ITEMS: InventoryItem[] = [
  { id: 'P001', name: 'سائل فيب مانجو 30ml', sku: 'LQ-MNG-030', category: 'سوائل', stock: 145, minStock: 20, status: 'كافٍ', lastUpdated: '2026-03-27' },
  { id: 'P002', name: 'جهاز فيب برو', sku: 'DV-PRO-001', category: 'أجهزة', stock: 12, minStock: 15, status: 'منخفض', lastUpdated: '2026-03-26' },
  { id: 'P003', name: 'كويل استبدال 5-Pack', sku: 'CL-RPL-005', category: 'إكسسوارات', stock: 0, minStock: 10, status: 'نفد', lastUpdated: '2026-03-25' },
  { id: 'P004', name: 'سائل فيب توت 30ml', sku: 'LQ-BRY-030', category: 'سوائل', stock: 88, minStock: 20, status: 'كافٍ', lastUpdated: '2026-03-27' },
  { id: 'P005', name: 'جهاز فيب ميني', sku: 'DV-MIN-001', category: 'أجهزة', stock: 7, minStock: 10, status: 'منخفض', lastUpdated: '2026-03-28' },
  { id: 'P006', name: 'بودز استبدال 3-Pack', sku: 'PD-RPL-003', category: 'إكسسوارات', stock: 0, minStock: 15, status: 'نفد', lastUpdated: '2026-03-24' },
  { id: 'P007', name: 'سائل فيب نعناع 60ml', sku: 'LQ-MNT-060', category: 'سوائل', stock: 210, minStock: 25, status: 'كافٍ', lastUpdated: '2026-03-27' },
  { id: 'P008', name: 'جهاز فيب ماكس', sku: 'DV-MAX-001', category: 'أجهزة', stock: 5, minStock: 8, status: 'منخفض', lastUpdated: '2026-03-26' },
  { id: 'P009', name: 'سائل فيب فراولة 30ml', sku: 'LQ-STR-030', category: 'سوائل', stock: 67, minStock: 20, status: 'كافٍ', lastUpdated: '2026-03-25' },
  { id: 'P010', name: 'كويل تيتانيوم 5-Pack', sku: 'CL-TIT-005', category: 'إكسسوارات', stock: 0, minStock: 10, status: 'نفد', lastUpdated: '2026-03-23' },
  { id: 'P011', name: 'سائل فيب أيس 60ml', sku: 'LQ-ICE-060', category: 'سوائل', stock: 155, minStock: 25, status: 'كافٍ', lastUpdated: '2026-03-28' },
  { id: 'P012', name: 'جهاز فيب سليم', sku: 'DV-SLM-001', category: 'أجهزة', stock: 9, minStock: 10, status: 'منخفض', lastUpdated: '2026-03-27' },
  { id: 'P013', name: 'سائل فيب توباكو 30ml', sku: 'LQ-TBC-030', category: 'سوائل', stock: 42, minStock: 20, status: 'كافٍ', lastUpdated: '2026-03-26' },
  { id: 'P014', name: 'جهاز فيب برو X', sku: 'DV-PRX-001', category: 'أجهزة', stock: 3, minStock: 8, status: 'منخفض', lastUpdated: '2026-03-25' },
  { id: 'P015', name: 'سائل فيب ليمون 60ml', sku: 'LQ-LMN-060', category: 'سوائل', stock: 180, minStock: 25, status: 'كافٍ', lastUpdated: '2026-03-27' },
]

type Tab = 'الكل' | 'منخفض المخزون' | 'نفد المخزون'

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState<Tab>('الكل')
  const [items, setItems] = useState<InventoryItem[]>(MOCK_ITEMS)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState<string>('')

  const filtered = items.filter((item) => {
    if (activeTab === 'منخفض المخزون') return item.status === 'منخفض'
    if (activeTab === 'نفد المخزون') return item.status === 'نفد'
    return true
  })

  function startEdit(item: InventoryItem) {
    setEditingId(item.id)
    setEditValue(String(item.stock))
  }

  function saveEdit(id: string) {
    const newStock = parseInt(editValue, 10)
    if (!isNaN(newStock) && newStock >= 0) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                stock: newStock,
                status: deriveStatus(newStock, item.minStock),
                lastUpdated: new Date().toISOString().slice(0, 10),
              }
            : item
        )
      )
    }
    setEditingId(null)
  }

  function cancelEdit() {
    setEditingId(null)
  }

  const counts = {
    total: items.length,
    sufficient: items.filter((i) => i.status === 'كافٍ').length,
    low: items.filter((i) => i.status === 'منخفض').length,
    empty: items.filter((i) => i.status === 'نفد').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-stone-900">إدارة المخزون</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-900 px-4 py-2 rounded-lg text-sm transition-colors">
            <Download size={16} />
            تصدير
          </button>
          <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-stone-900 px-4 py-2 rounded-lg text-sm transition-colors">
            <RefreshCw size={16} />
            تحديث جماعي
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'إجمالي المنتجات', value: counts.total, color: 'text-stone-900' },
          { label: 'مخزون كافٍ', value: counts.sufficient, color: 'text-green-400' },
          { label: 'منخفض المخزون', value: counts.low, color: 'text-amber-700' },
          { label: 'نفد المخزون', value: counts.empty, color: 'text-amber-700' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-stone-200 rounded-xl p-4">
            <p className="text-stone-600 text-sm">{s.label}</p>
            <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white border border-stone-200 rounded-xl p-1 w-fit">
        {(['الكل', 'منخفض المخزون', 'نفد المخزون'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-amber-600 text-stone-900'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                {['المنتج', 'SKU', 'الفئة', 'المخزون الحالي', 'الحد الأدنى', 'الحالة', 'آخر تحديث', 'إجراء'].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 text-right text-stone-600 font-medium whitespace-nowrap">
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border-b border-stone-200/50 hover:bg-stone-100/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-stone-100 border border-stone-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Package size={16} className="text-stone-500" />
                      </div>
                      <span className="text-stone-900 font-medium">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-stone-600 font-mono text-xs">{item.sku}</td>
                  <td className="px-4 py-3 text-stone-700">{item.category}</td>
                  <td className="px-4 py-3">
                    {editingId === item.id ? (
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          min="0"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          className="w-20 bg-stone-200 border border-stone-300 text-stone-900 rounded px-2 py-1 text-sm focus:outline-none focus:border-amber-500"
                          autoFocus
                        />
                        <button
                          onClick={() => saveEdit(item.id)}
                          className="p-1 text-green-400 hover:text-green-300"
                        >
                          <Check size={16} />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="p-1 text-amber-700 hover:text-amber-800"
                        >
                          <XIcon size={16} />
                        </button>
                      </div>
                    ) : (
                      <span className={`font-medium ${item.stock === 0 ? 'text-amber-700' : item.stock <= item.minStock ? 'text-amber-700' : 'text-stone-900'}`}>
                        {item.stock}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-stone-600">{item.minStock}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-600">{item.lastUpdated}</td>
                  <td className="px-4 py-3">
                    {editingId !== item.id && (
                      <button
                        onClick={() => startEdit(item)}
                        className="text-xs bg-stone-200 hover:bg-zinc-600 text-stone-900 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        تعديل
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-stone-500">لا توجد منتجات</div>
        )}
      </div>
    </div>
  )
}
