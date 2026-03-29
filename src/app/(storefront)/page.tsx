import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Zap, Wind, Star } from 'lucide-react'
import { StarIcon, FireIcon } from '@/components/ui/gamer-icons'

/* ─── Mock data ────────────────────────────────────────── */
const CATEGORIES = [
  { id: 1, label: 'سجائر إلكترونية', labelEn: 'Vapes', href: '/categories/vapes', icon: '💨', count: 320 },
  { id: 2, label: 'عصائر ونكهات', labelEn: 'E-Liquids', href: '/categories/e-liquids', icon: '🧪', count: 180 },
  { id: 3, label: 'معسل وشيشة', labelEn: 'Hookah', href: '/categories/hookah', icon: '🌿', count: 95 },
  { id: 4, label: 'بطاريات وشواحن', labelEn: 'Batteries', href: '/categories/batteries', icon: '🔋', count: 42 },
  { id: 5, label: 'إكسسوارات', labelEn: 'Accessories', href: '/categories/accessories', icon: '⚙️', count: 130 },
  { id: 6, label: 'عروض 🔥', labelEn: 'Deals', href: '/deals', icon: '🏷️', count: 60 },
]

const FEATURED_PRODUCTS = [
  { id: 1, name: 'Vaporesso XROS 4', nameAr: 'فيبوريسو زروس 4', price: 89, oldPrice: 120, badge: 'الأكثر مبيعاً', rating: 4.8, reviews: 234, category: 'بود سيستم', img: '012077c02fb08e4e10b39e4efccd8d33_500x500.jpg' },
  { id: 2, name: 'Lost Mary BM600', nameAr: 'لوست ماري BM600', price: 35, oldPrice: null, badge: null, rating: 4.6, reviews: 189, category: 'ديسبوزابل', img: '02d5c9c362eb88e1274a997e8b83c4f5_500x500.jpg' },
  { id: 3, name: 'Al Fakher Crown Bar', nameAr: 'الفاخر كراون بار', price: 45, oldPrice: 60, badge: 'عرض', rating: 4.7, reviews: 312, category: 'ديسبوزابل', img: '034028758dec6cdbb49d5fae8c34e2f7_500x500.jpg' },
  { id: 4, name: 'Nasty Juice Salt 30ml', nameAr: 'ناستي جوس سولت', price: 28, oldPrice: null, badge: 'جديد', rating: 4.5, reviews: 87, category: 'سولت نيك', img: '03db20b7394aa9a6d8415d1472906e4e_500x500.jpg' },
  { id: 5, name: 'GeekVape Aegis Legend 3', nameAr: 'جيك فيب ايجيس', price: 210, oldPrice: 280, badge: '-25%', rating: 4.9, reviews: 156, category: 'مود', img: '03fa7774f732e2bcfe10cf5f3708e432_500x500.jpg' },
  { id: 6, name: 'Smok RPM 5 Pro', nameAr: 'سموك RPM 5 برو', price: 165, oldPrice: null, badge: null, rating: 4.4, reviews: 98, category: 'كيت', img: '05c568106e580221dffb7fbfd9ddf2d6_500x500.jpg' },
  { id: 7, name: 'Mazaya Double Apple', nameAr: 'مزايا تفاح مزدوج', price: 22, oldPrice: null, badge: null, rating: 4.8, reviews: 445, category: 'معسل', img: '0ec227ae8962fecec03727d9653b3bf7_500x500.jpg' },
  { id: 8, name: 'Vuse Go 800', nameAr: 'فيوز قو 800', price: 30, oldPrice: 38, badge: 'عرض', rating: 4.3, reviews: 203, category: 'ديسبوزابل', img: '1112f66d5a844aad2f68677fba628df4_500x500.jpg' },
]

const BRANDS = [
  'Vaporesso', 'SMOK', 'GeekVape', 'Lost Mary', 'Nasty Juice', 'Al Fakher', 'Mazaya', 'Uwell', 'Voopoo', 'Oxva',
]

/* ─── Components ────────────────────────────────────────── */
function ProductCard({ p }: { p: typeof FEATURED_PRODUCTS[0] }) {
  return (
    <div className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square bg-stone-100">
        <Image
          src={`/images/products/${p.img}`}
          alt={p.nameAr}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {p.badge && (
          <span className="absolute top-2 right-2 bg-amber-600 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
            {p.badge}
          </span>
        )}
      </div>
      {/* Info */}
      <div className="p-3">
        <p className="text-stone-500 text-[11px] mb-0.5">{p.category}</p>
        <h3 className="text-sm font-semibold text-stone-900 leading-tight line-clamp-2">{p.nameAr}</h3>
        <p className="text-stone-600 text-[11px] mt-0.5">{p.name}</p>
        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          <StarIcon size={12} className="fill-amber-400 text-amber-600" />
          <span className="text-[11px] text-stone-600">{p.rating} ({p.reviews})</span>
        </div>
        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-stone-900">{p.price}</span>
            <span className="text-xs text-stone-600">ر.س</span>
            {p.oldPrice && (
              <span className="text-xs text-stone-400 line-through">{p.oldPrice}</span>
            )}
          </div>
          <button className="text-[11px] font-semibold bg-amber-600 hover:bg-amber-700 px-3 py-1.5 rounded-lg transition">
            أضف
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-stone-100 py-20 px-4">
        {/* BG glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/25 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-20 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            متجرك الأول
            <br />
            <span className="text-amber-500">للسجائر الإلكترونية</span>
          </h1>
          <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">
            أكثر من 2000 منتج أصلي · شحن سريع لجميع مناطق المملكة · ضمان الأصالة 100%
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/categories/vapes"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold px-7 py-3.5 rounded-2xl transition"
            >
              تسوق الآن
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/deals"
              className="flex items-center gap-2 border border-stone-300 hover:border-stone-400 text-stone-700 font-semibold px-7 py-3.5 rounded-2xl transition"
            >
              العروض 🔥
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
            {[
              { icon: <Zap className="w-4 h-4 text-amber-500" />, value: '+2000', label: 'منتج أصلي' },
              { icon: <Wind className="w-4 h-4 text-amber-500" />, value: '24 ساعة', label: 'شحن سريع' },
              { icon: <Star className="w-4 h-4 text-amber-500" />, value: '4.8 ⭐', label: 'تقييم العملاء' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-stone-900 font-black text-xl">
                  {s.icon}
                  {s.value}
                </div>
                <p className="text-stone-500 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">تسوق حسب الفئة</h2>
          <Link href="/categories" className="text-sm text-amber-700 hover:text-amber-800 flex items-center gap-1">
            الكل <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex flex-col items-center justify-center gap-2 bg-white hover:bg-stone-100 border border-stone-200 hover:border-stone-300 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-xs font-semibold text-center leading-tight">{cat.label}</span>
              <span className="text-[10px] text-stone-500">{cat.count} منتج</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold">المنتجات المميزة</h2>
            <p className="text-stone-500 text-sm mt-0.5">الأكثر طلباً من عملائنا</p>
          </div>
          <Link href="/products" className="text-sm text-amber-700 hover:text-amber-800 flex items-center gap-1">
            عرض الكل <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {FEATURED_PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-8">براندات أصلية معتمدة</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {BRANDS.map((brand) => (
            <Link
              key={brand}
              href={`/brands/${brand.toLowerCase().replace(' ', '-')}`}
              className="bg-white hover:bg-stone-100 border border-stone-200 hover:border-stone-300 text-stone-600 hover:text-stone-900 text-sm font-semibold px-5 py-2.5 rounded-xl transition"
            >
              {brand}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-12 px-4 max-w-7xl mx-auto border-t border-stone-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: '🚚', title: 'شحن سريع', sub: 'لجميع مناطق المملكة' },
            { icon: '✅', title: 'منتجات أصلية', sub: 'ضمان الأصالة 100%' },
            { icon: '🔄', title: 'إرجاع مجاني', sub: 'خلال 7 أيام' },
            { icon: '🔒', title: 'دفع آمن', sub: 'مدى · أبل باي · VISA' },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-sm font-bold">{f.title}</h3>
              <p className="text-xs text-stone-500">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
