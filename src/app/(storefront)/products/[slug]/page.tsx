import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ShieldCheck, Truck, RotateCcw, BadgeCheck } from 'lucide-react'
import { StarIcon, LockIcon } from '@/components/ui/gamer-icons'
import { ImageGallery } from './ImageGallery'
import { ProductInteractive } from './ProductInteractive'
import { ProductTabs } from './ProductTabs'

/* ─── Types ─────────────────────────────────────────────── */
interface ProductDetail {
  nameAr: string
  nameEn: string
  brand: string
  category: string
  price: number
  oldPrice: number | null
  rating: number
  reviews: number
  images: string[]
  flavors: string[]
  badge: string | null
  description: string
  specs: { label: string; value: string }[]
  reviewsList: { id: number; name: string; rating: number; date: string; text: string }[]
}

/* ─── Mock Product Database ──────────────────────────────── */
const ALL_IMAGES = [
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

function getProductBySlug(slug: string): ProductDetail {
  // Default product - in production this would be a DB/API lookup
  return {
    nameAr: 'فيبوريسو زروس 4 بود سيستم',
    nameEn: 'Vaporesso XROS 4 Pod System',
    brand: 'Vaporesso',
    category: 'سجائر إلكترونية',
    price: 89,
    oldPrice: 120,
    rating: 4.8,
    reviews: 234,
    images: [ALL_IMAGES[0], ALL_IMAGES[1], ALL_IMAGES[2], ALL_IMAGES[3]],
    flavors: ['توت العليق', 'بطيخ بارد', 'مانجو استوائي', 'نعناع ثلجي', 'خوخ كريمي'],
    badge: 'الأكثر مبيعاً',
    description:
      'فيبوريسو زروس 4 هو جهاز بود سيستم متطور يجمع بين الأداء العالي والتصميم الأنيق. يأتي مزوداً بشاشة OLED عالية الدقة وخوارزمية IQ-S الذكية لتحسين تجربة التدخين. يدعم كويلات XROS متعددة الأوم لتوفير تجربة مزدوجة بين تقنية MTL و RDL. بطاريته المدمجة بسعة 1000mAh تضمن استخداماً طويلاً طوال اليوم مع شحن سريع عبر USB-C.',
    specs: [
      { label: 'النيكوتين', value: '20mg - 50mg' },
      { label: 'سعة البطارية', value: '1000mAh' },
      { label: 'سعة الخزان', value: '3ml' },
      { label: 'البراند', value: 'Vaporesso' },
      { label: 'الفئة', value: 'بود سيستم' },
      { label: 'المقاومة', value: '0.6Ω / 1.2Ω' },
      { label: 'الضغط', value: '11W - 16W' },
      { label: 'الشحن', value: 'USB-C سريع' },
      { label: 'الضمان', value: '12 شهر' },
    ],
    reviewsList: [
      {
        id: 1,
        name: 'أحمد المطيري',
        rating: 5,
        date: '15 مارس 2026',
        text: 'منتج ممتاز جداً، النكهة واضحة والسحبة سلسة. شحن سريع والتغليف محترم. ما شاء الله أفضل متجر تعاملت معه.',
      },
      {
        id: 2,
        name: 'فهد الشهراني',
        rating: 5,
        date: '10 مارس 2026',
        text: 'البطارية تدوم يومين كاملين بالاستخدام العادي. الجهاز خفيف وأنيق، استخدمته بنكهة المانجو وكانت رائعة.',
      },
      {
        id: 3,
        name: 'محمد العتيبي',
        rating: 4,
        date: '2 مارس 2026',
        text: 'جيد جداً ويستحق سعره. الوحيد اللي أخذ نقطة هو أن الكويل يحتاج تبديل بعد أسبوعين، بس الأداء العام ممتاز.',
      },
    ],
  }
}

const SIMILAR_PRODUCTS = [
  { id: 1, nameAr: 'لوست ماري BM600', nameEn: 'Lost Mary BM600', price: 35, oldPrice: null, badge: 'جديد', rating: 4.6, img: ALL_IMAGES[1], slug: 'lost-mary-bm600' },
  { id: 2, nameAr: 'الفاخر كراون بار', nameEn: 'Al Fakher Crown Bar', price: 45, oldPrice: 60, badge: 'عرض', rating: 4.7, img: ALL_IMAGES[2], slug: 'al-fakher-crown-bar' },
  { id: 3, nameAr: 'جيك فيب B60 بود', nameEn: 'GeekVape B60 Pod', price: 185, oldPrice: 220, badge: null, rating: 4.5, img: ALL_IMAGES[10], slug: 'geekvape-b60-pod' },
  { id: 4, nameAr: 'سموك نورد 5', nameEn: 'Smok Nord 5', price: 155, oldPrice: 190, badge: 'عرض', rating: 4.3, img: ALL_IMAGES[7], slug: 'smok-nord-5' },
]

/* ─── Star display (server-safe) ─────────────────────────── */
function StarRatingDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          size={16}
          className={i <= Math.round(rating) ? 'fill-amber-400 text-amber-700' : 'fill-zinc-700 text-zinc-700'}
        />
      ))}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-stone-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-stone-900 transition">الرئيسية</Link>
          <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
          <Link href="/products" className="hover:text-stone-900 transition">{product.category}</Link>
          <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
          <span className="text-stone-900 font-medium line-clamp-1">{product.nameAr}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── Left: Image Gallery (sticky on desktop) ── */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <ImageGallery images={product.images} altText={product.nameAr} />
          </div>

          {/* ── Right: Product Info ── */}
          <div className="space-y-5">
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="bg-amber-600/20 border border-amber-600/40 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                {product.brand}
              </span>
              {product.badge && (
                <span className="bg-amber-600 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Names */}
            <div>
              <h1 className="text-3xl font-black leading-tight text-stone-900 mb-1">
                {product.nameAr}
              </h1>
              <p className="text-stone-600 text-base">{product.nameEn}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2.5">
              <StarRatingDisplay rating={product.rating} />
              <span className="text-sm font-semibold text-stone-900">{product.rating}</span>
              <span className="text-sm text-stone-500">
                ({product.reviews} مراجعة)
              </span>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                <BadgeCheck className="w-3.5 h-3.5" />
                متوفر في المخزون
              </span>
            </div>

            {/* Interactive: Price, Variants, Qty, CTA */}
            <ProductInteractive
              flavors={product.flavors}
              initialPrice={product.price}
              oldPrice={product.oldPrice}
            />

            <div className="border-t border-stone-200 pt-5" />

            {/* Specs Table */}
            <div>
              <h3 className="text-sm font-bold text-stone-700 mb-3">مواصفات سريعة</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.specs.slice(0, 6).map((spec) => (
                  <div key={spec.label} className="bg-white border border-stone-200 rounded-xl px-3 py-2.5">
                    <p className="text-[11px] text-stone-500 mb-0.5">{spec.label}</p>
                    <p className="text-sm font-semibold text-stone-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { icon: <ShieldCheck className="w-4 h-4 text-green-400" />, label: 'منتج أصلي' },
                { icon: <Truck className="w-4 h-4 text-blue-400" />, label: 'شحن سريع' },
                { icon: <RotateCcw className="w-4 h-4 text-amber-700" />, label: 'إرجاع 7 أيام' },
                { icon: <LockIcon size={16} className="text-purple-400" />, label: 'دفع آمن' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-1.5 bg-white border border-stone-200 rounded-xl p-3 text-center"
                >
                  {badge.icon}
                  <span className="text-[11px] font-semibold text-stone-600">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs Section ── */}
        <div className="mt-12 bg-white border border-stone-200 rounded-2xl p-6">
          <ProductTabs
            description={product.description}
            specs={product.specs}
            reviews={product.reviewsList}
          />
        </div>

        {/* ── Similar Products ── */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black">منتجات مشابهة</h2>
            <Link href="/products" className="text-sm text-amber-700 hover:text-amber-800 transition">
              عرض الكل
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SIMILAR_PRODUCTS.map((p) => {
              const disc = p.oldPrice
                ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)
                : null
              return (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square bg-stone-100">
                    <Image
                      src={`/images/products/${p.img}`}
                      alt={p.nameAr}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    {p.badge && (
                      <span className="absolute top-2 right-2 bg-amber-600 text-stone-900 text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                        {p.badge}
                      </span>
                    )}
                    {disc && (
                      <span className="absolute top-2 left-2 bg-white/90 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                        -{disc}%
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-stone-900 leading-tight line-clamp-2 mb-0.5">
                      {p.nameAr}
                    </h3>
                    <p className="text-stone-500 text-[10px] mb-2">{p.nameEn}</p>
                    <div className="flex items-center gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon
                          key={i}
                          size={10}
                          className={i <= Math.round(p.rating) ? 'fill-amber-400 text-amber-700' : 'fill-zinc-700 text-zinc-700'}
                        />
                      ))}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-black text-stone-900">{p.price}</span>
                      <span className="text-xs text-stone-600">ر.س</span>
                      {p.oldPrice && (
                        <span className="text-xs text-stone-400 line-through">{p.oldPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
