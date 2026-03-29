'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronRight,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronLeft,
} from 'lucide-react'
import { StarIcon, CartIcon } from '@/components/ui/gamer-icons'

/* ─── Types ─────────────────────────────────────────────── */
interface Product {
  id: number
  nameAr: string
  nameEn: string
  price: number
  oldPrice: number | null
  badge: string | null
  rating: number
  reviews: number
  category: string
  brand: string
  img: string
  slug: string
}

/* ─── Mock Data ──────────────────────────────────────────── */
const IMAGES = [
  '012077c02fb08e4e10b39e4efccd8d33_500x500.jpg',
  '02d5c9c362eb88e1274a997e8b83c4f5_500x500.jpg',
  '034028758dec6cdbb49d5fae8c34e2f7_500x500.jpg',
  '03db20b7394aa9a6d8415d1472906e4e_500x500.jpg',
  '03fa7774f732e2bcfe10cf5f3708e432_500x500.jpg',
  '05c568106e580221dffb7fbfd9ddf2d6_500x500.jpg',
  '0ec227ae8962fecec03727d9653b3bf7_500x500.jpg',
  '1112f66d5a844aad2f68677fba628df4_500x500.jpg',
  '11bcbf2f35cd97e871055dab5f3c7053_500x500.jpg',
  '1d31d50a61e0230b361ad583a9b84389_500x500.jpg',
  '2b4b50e3b03fd26713a8e6d79d86046d_500x500.jpg',
  '385cefda80eb8ebe2363a454475c9177_500x500.jpg',
  '462e4a8cb06ab995fe9b8861d787b806_500x500.jpg',
  '50937de269cc31eb00347606e102ce97_500x500.jpg',
  '802d9b3e8b8516d8b064f9e7efc29d1d_500x500.jpg',
  '8d99eb5a9dfe06da09ac2c7075c283b5_500x500.jpg',
  'b42d8badf72b06e2fad0edb9c829771b_500x500.jpg',
  'c2e1f1eed4971b7588bdf2d2dd123cf8_500x500.jpg',
]

const PRODUCTS: Product[] = [
  { id: 1, nameAr: 'فيبوريسو زروس 4', nameEn: 'Vaporesso XROS 4', price: 89, oldPrice: 120, badge: 'الأكثر مبيعاً', rating: 4.8, reviews: 234, category: 'سجائر إلكترونية', brand: 'Vaporesso', img: IMAGES[0], slug: 'vaporesso-xros-4' },
  { id: 2, nameAr: 'لوست ماري BM600', nameEn: 'Lost Mary BM600', price: 35, oldPrice: null, badge: 'جديد', rating: 4.6, reviews: 189, category: 'سجائر إلكترونية', brand: 'Lost Mary', img: IMAGES[1], slug: 'lost-mary-bm600' },
  { id: 3, nameAr: 'الفاخر كراون بار', nameEn: 'Al Fakher Crown Bar', price: 45, oldPrice: 60, badge: 'عرض', rating: 4.7, reviews: 312, category: 'سجائر إلكترونية', brand: 'Al Fakher', img: IMAGES[2], slug: 'al-fakher-crown-bar' },
  { id: 4, nameAr: 'ناستي جوس سولت 30ml', nameEn: 'Nasty Juice Salt 30ml', price: 28, oldPrice: null, badge: 'جديد', rating: 4.5, reviews: 87, category: 'عصائر', brand: 'Nasty Juice', img: IMAGES[3], slug: 'nasty-juice-salt-30ml' },
  { id: 5, nameAr: 'جيك فيب ايجيس ليجند 3', nameEn: 'GeekVape Aegis Legend 3', price: 210, oldPrice: 280, badge: null, rating: 4.9, reviews: 156, category: 'سجائر إلكترونية', brand: 'GeekVape', img: IMAGES[4], slug: 'geekvape-aegis-legend-3' },
  { id: 6, nameAr: 'سموك RPM 5 برو', nameEn: 'Smok RPM 5 Pro', price: 165, oldPrice: null, badge: null, rating: 4.4, reviews: 98, category: 'سجائر إلكترونية', brand: 'SMOK', img: IMAGES[5], slug: 'smok-rpm-5-pro' },
  { id: 7, nameAr: 'مزايا تفاح مزدوج 250جم', nameEn: 'Mazaya Double Apple 250g', price: 22, oldPrice: null, badge: null, rating: 4.8, reviews: 445, category: 'معسل', brand: 'Mazaya', img: IMAGES[6], slug: 'mazaya-double-apple-250g' },
  { id: 8, nameAr: 'سموك نورد 5', nameEn: 'Smok Nord 5', price: 155, oldPrice: 190, badge: 'عرض', rating: 4.3, reviews: 203, category: 'سجائر إلكترونية', brand: 'SMOK', img: IMAGES[7], slug: 'smok-nord-5' },
  { id: 9, nameAr: 'فيبوريسو جين 200 وات', nameEn: 'Vaporesso Gen 200W', price: 245, oldPrice: 300, badge: null, rating: 4.7, reviews: 67, category: 'سجائر إلكترونية', brand: 'Vaporesso', img: IMAGES[8], slug: 'vaporesso-gen-200w' },
  { id: 10, nameAr: 'ناستي جوس باذنجان 60ml', nameEn: 'Nasty Juice Asap Grape 60ml', price: 55, oldPrice: null, badge: 'جديد', rating: 4.6, reviews: 134, category: 'عصائر', brand: 'Nasty Juice', img: IMAGES[9], slug: 'nasty-juice-asap-grape-60ml' },
  { id: 11, nameAr: 'جيك فيب B60 بود', nameEn: 'GeekVape B60 Pod', price: 185, oldPrice: 220, badge: null, rating: 4.5, reviews: 92, category: 'سجائر إلكترونية', brand: 'GeekVape', img: IMAGES[10], slug: 'geekvape-b60-pod' },
  { id: 12, nameAr: 'الفاخر سيب 250جم', nameEn: 'Al Fakher Apple 250g', price: 18, oldPrice: null, badge: 'الأكثر مبيعاً', rating: 4.9, reviews: 567, category: 'معسل', brand: 'Al Fakher', img: IMAGES[11], slug: 'al-fakher-apple-250g' },
  { id: 13, nameAr: 'سموك ماجنيتو', nameEn: 'Smok Magneto', price: 195, oldPrice: 240, badge: 'عرض', rating: 4.4, reviews: 88, category: 'سجائر إلكترونية', brand: 'SMOK', img: IMAGES[12], slug: 'smok-magneto' },
  { id: 14, nameAr: 'لوست ماري OS5000', nameEn: 'Lost Mary OS5000', price: 55, oldPrice: null, badge: 'جديد', rating: 4.7, reviews: 278, category: 'سجائر إلكترونية', brand: 'Lost Mary', img: IMAGES[13], slug: 'lost-mary-os5000' },
  { id: 15, nameAr: 'بطارية 18650 سوني', nameEn: 'Sony 18650 Battery 3000mAh', price: 32, oldPrice: null, badge: null, rating: 4.8, reviews: 412, category: 'بطاريات', brand: 'Vaporesso', img: IMAGES[14], slug: 'sony-18650-battery' },
  { id: 16, nameAr: 'مزايا نعناع 250جم', nameEn: 'Mazaya Mint 250g', price: 20, oldPrice: 25, badge: 'عرض', rating: 4.6, reviews: 234, category: 'معسل', brand: 'Mazaya', img: IMAGES[15], slug: 'mazaya-mint-250g' },
  { id: 17, nameAr: 'ناستي جوس فراولة 30ml', nameEn: 'Nasty Juice Strawberry Trap 30ml', price: 30, oldPrice: null, badge: null, rating: 4.5, reviews: 156, category: 'عصائر', brand: 'Nasty Juice', img: IMAGES[16], slug: 'nasty-juice-strawberry-30ml' },
  { id: 18, nameAr: 'جيك فيب ايجيس مينو', nameEn: 'GeekVape Aegis Mini 2', price: 145, oldPrice: 175, badge: null, rating: 4.6, reviews: 103, category: 'سجائر إلكترونية', brand: 'GeekVape', img: IMAGES[17], slug: 'geekvape-aegis-mini-2' },
  { id: 19, nameAr: 'فيبوريسو لوكي 80W', nameEn: 'Vaporesso Luxe 80W', price: 175, oldPrice: null, badge: 'الأكثر مبيعاً', rating: 4.7, reviews: 189, category: 'سجائر إلكترونية', brand: 'Vaporesso', img: IMAGES[0], slug: 'vaporesso-luxe-80w' },
  { id: 20, nameAr: 'إكسسوار كويل جيك فيب', nameEn: 'GeekVape Replacement Coils', price: 15, oldPrice: null, badge: null, rating: 4.3, reviews: 445, category: 'إكسسوارات', brand: 'GeekVape', img: IMAGES[1], slug: 'geekvape-replacement-coils' },
  { id: 21, nameAr: 'سموك T-Air كيت', nameEn: 'Smok T-Air Kit', price: 135, oldPrice: 160, badge: 'عرض', rating: 4.5, reviews: 77, category: 'سجائر إلكترونية', brand: 'SMOK', img: IMAGES[2], slug: 'smok-t-air-kit' },
  { id: 22, nameAr: 'الفاخر توت 250جم', nameEn: 'Al Fakher Blueberry 250g', price: 19, oldPrice: null, badge: null, rating: 4.8, reviews: 389, category: 'معسل', brand: 'Al Fakher', img: IMAGES[3], slug: 'al-fakher-blueberry-250g' },
  { id: 23, nameAr: 'لوست ماري QM600', nameEn: 'Lost Mary QM600', price: 38, oldPrice: 45, badge: 'جديد', rating: 4.6, reviews: 201, category: 'سجائر إلكترونية', brand: 'Lost Mary', img: IMAGES[4], slug: 'lost-mary-qm600' },
  { id: 24, nameAr: 'شاحن سريع USB-C', nameEn: 'Fast Charger USB-C 65W', price: 45, oldPrice: null, badge: null, rating: 4.4, reviews: 128, category: 'إكسسوارات', brand: 'Vaporesso', img: IMAGES[5], slug: 'fast-charger-usb-c' },
]

const CATEGORIES_LIST = ['سجائر إلكترونية', 'عصائر', 'معسل', 'إكسسوارات', 'بطاريات']
const BRANDS_LIST = ['Vaporesso', 'SMOK', 'GeekVape', 'Lost Mary', 'Nasty Juice', 'Al Fakher', 'Mazaya']
const NICOTINE_LEVELS = ['بدون', '3mg', '6mg', '12mg', '20mg', '50mg']
const SORT_OPTIONS = [
  { value: 'bestselling', label: 'الأكثر مبيعاً' },
  { value: 'price-asc', label: 'السعر: من الأقل' },
  { value: 'price-desc', label: 'السعر: من الأعلى' },
  { value: 'newest', label: 'الأحدث' },
  { value: 'rating', label: 'التقييم' },
]

/* ─── Star Rating ────────────────────────────────────────── */
function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'xs' }) {
  const starSize = size === 'xs' ? 10 : 12
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          size={starSize}
          className={i <= Math.round(rating) ? 'fill-amber-400 text-amber-700' : 'fill-zinc-700 text-zinc-700'}
        />
      ))}
    </div>
  )
}

/* ─── Product Card ───────────────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative aspect-square bg-stone-100 shrink-0">
        <Image
          src={`/images/products/${product.img}`}
          alt={product.nameAr}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-amber-600 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 left-2 bg-white/90 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col flex-1">
        <span className="text-stone-500 text-[10px] font-medium mb-0.5">{product.category}</span>
        <h3 className="text-sm font-semibold text-stone-900 leading-tight line-clamp-2 mb-0.5">
          {product.nameAr}
        </h3>
        <p className="text-stone-500 text-[10px] mb-2">{product.nameEn}</p>

        <div className="flex items-center gap-1.5 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-[10px] text-stone-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-black text-stone-900">{product.price}</span>
            <span className="text-[11px] text-stone-600">ر.س</span>
            {product.oldPrice && (
              <span className="text-xs text-stone-400 line-through">{product.oldPrice}</span>
            )}
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation() }}
            className="flex items-center gap-1 text-[11px] font-semibold bg-amber-600 hover:bg-amber-700 px-2.5 py-1.5 rounded-lg transition"
          >
            <CartIcon size={12} />
            أضف
          </button>
        </div>
      </div>
    </Link>
  )
}

/* ─── Filters Panel ──────────────────────────────────────── */
interface FiltersState {
  categories: string[]
  brands: string[]
  priceMin: string
  priceMax: string
  nicotine: string[]
  inStockOnly: boolean
}

function FiltersPanel({
  filters,
  setFilters,
}: {
  filters: FiltersState
  setFilters: (f: FiltersState) => void
}) {
  function toggleItem(key: 'categories' | 'brands' | 'nicotine', val: string) {
    const arr = filters[key]
    setFilters({
      ...filters,
      [key]: arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val],
    })
  }

  return (
    <div className="space-y-6 text-sm">
      {/* Category */}
      <div>
        <h3 className="font-bold text-stone-900 mb-3">الفئة</h3>
        <div className="space-y-2">
          {CATEGORIES_LIST.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat)}
                onChange={() => toggleItem('categories', cat)}
                className="w-4 h-4 accent-amber-600 rounded"
              />
              <span className="text-stone-600 group-hover:text-stone-900 transition">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-200" />

      {/* Brand */}
      <div>
        <h3 className="font-bold text-stone-900 mb-3">البراند</h3>
        <div className="space-y-2">
          {BRANDS_LIST.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleItem('brands', brand)}
                className="w-4 h-4 accent-amber-600 rounded"
              />
              <span className="text-stone-600 group-hover:text-stone-900 transition">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-200" />

      {/* Price Range */}
      <div>
        <h3 className="font-bold text-stone-900 mb-3">نطاق السعر (ر.س)</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="من"
            min={0}
            max={500}
            value={filters.priceMin}
            onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
            className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 text-xs focus:outline-none focus:border-amber-600 placeholder:text-stone-400"
          />
          <span className="text-stone-400 shrink-0">-</span>
          <input
            type="number"
            placeholder="إلى"
            min={0}
            max={500}
            value={filters.priceMax}
            onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
            className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2 text-stone-900 text-xs focus:outline-none focus:border-amber-600 placeholder:text-stone-400"
          />
        </div>
      </div>

      <div className="border-t border-stone-200" />

      {/* Nicotine */}
      <div>
        <h3 className="font-bold text-stone-900 mb-3">مستوى النيكوتين</h3>
        <div className="flex flex-wrap gap-2">
          {NICOTINE_LEVELS.map((lvl) => (
            <button
              key={lvl}
              onClick={() => toggleItem('nicotine', lvl)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                filters.nicotine.includes(lvl)
                  ? 'bg-amber-600 border-amber-600 text-stone-900'
                  : 'bg-stone-100 border-stone-200 text-stone-600 hover:border-zinc-500 hover:text-stone-900'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-stone-200" />

      {/* In Stock */}
      <label className="flex items-center justify-between cursor-pointer">
        <span className="font-bold text-stone-900">المخزون فقط</span>
        <button
          onClick={() => setFilters({ ...filters, inStockOnly: !filters.inStockOnly })}
          className={`relative w-11 h-6 rounded-full transition-colors ${
            filters.inStockOnly ? 'bg-amber-600' : 'bg-stone-200'
          }`}
        >
          <span
            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              filters.inStockOnly ? 'translate-x-0.5' : 'translate-x-5'
            }`}
          />
        </button>
      </label>

      {/* Reset */}
      <button
        onClick={() =>
          setFilters({ categories: [], brands: [], priceMin: '', priceMax: '', nicotine: [], inStockOnly: false })
        }
        className="w-full text-xs text-stone-500 hover:text-amber-700 transition py-1"
      >
        مسح جميع الفلاتر
      </button>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function ProductsPage() {
  const [filters, setFilters] = useState<FiltersState>({
    categories: [],
    brands: [],
    priceMin: '',
    priceMax: '',
    nicotine: [],
    inStockOnly: false,
  })
  const [sortBy, setSortBy] = useState('bestselling')
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label ?? 'الأكثر مبيعاً'
  const totalPages = 36 // mock: 847 products / 24 per page

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-stone-500 mb-6">
          <Link href="/" className="hover:text-stone-900 transition">الرئيسية</Link>
          <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
          <span className="text-stone-900 font-medium">المنتجات</span>
        </nav>

        <div className="flex gap-6">
          {/* ── Desktop Sidebar ── */}
          <aside className="hidden lg:block w-60 shrink-0">
            <div className="bg-white border border-stone-200 rounded-2xl p-5 sticky top-6">
              <h2 className="font-black text-base mb-5 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-amber-500" />
                الفلاتر
              </h2>
              <FiltersPanel filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          {/* ── Main Content ── */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-5 gap-3">
              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-sm font-semibold px-4 py-2 rounded-xl transition"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  فلترة
                </button>
                <p className="text-stone-500 text-sm">
                  عرض <span className="text-stone-900 font-semibold">24</span> من{' '}
                  <span className="text-stone-900 font-semibold">847</span> منتج
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-sm px-4 py-2 rounded-xl transition"
                >
                  <span>{activeSortLabel}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showSortDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-stone-200 rounded-xl shadow-xl z-20 overflow-hidden">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setShowSortDropdown(false) }}
                        className={`w-full text-right px-4 py-2.5 text-sm hover:bg-stone-100 transition ${
                          sortBy === opt.value ? 'text-amber-700 font-semibold' : 'text-stone-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1.5 mt-10">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-zinc-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                let page: number
                if (totalPages <= 7) {
                  page = i + 1
                } else if (currentPage <= 4) {
                  page = i + 1
                } else if (currentPage >= totalPages - 3) {
                  page = totalPages - 6 + i
                } else {
                  page = currentPage - 3 + i
                }
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold transition ${
                      currentPage === page
                        ? 'bg-amber-600 text-stone-900 border border-amber-600'
                        : 'bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-zinc-500'
                    }`}
                  >
                    {page}
                  </button>
                )
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-zinc-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
            <p className="text-center text-stone-400 text-xs mt-3">
              صفحة {currentPage} من {totalPages}
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Panel */}
          <div className="absolute inset-y-0 right-0 w-80 max-w-full bg-white border-l border-stone-200 overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-stone-200 sticky top-0 bg-white z-10">
              <h2 className="font-black flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-amber-500" />
                الفلاتر
              </h2>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-stone-100 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <FiltersPanel filters={filters} setFilters={setFilters} />
            </div>
            <div className="p-4 border-t border-stone-200 sticky bottom-0 bg-white">
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold py-3 rounded-xl transition"
              >
                عرض النتائج
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
